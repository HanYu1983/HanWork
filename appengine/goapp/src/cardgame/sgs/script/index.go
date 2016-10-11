package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"encoding/json"
	"strconv"
	"strings"
)

func CheckCanConsumeCost(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) bool {
	info := game.CardInfo[cardId]
	cost := FormatCost(ctx, info)
	if cost == "X" {
		cost = "無"
	}
	cards := []int{}
	cards = append(cards, desk.CardStack[user+CardStackMana].Card...)
	cards = append(cards, desk.CardStack[user+CardStackSlot1].Card...)
	cards = append(cards, desk.CardStack[user+CardStackSlot2].Card...)
	cards = append(cards, desk.CardStack[user+CardStackSlot3].Card...)
	cards = append(cards, desk.CardStack[user+CardStackSlot4].Card...)
	cards = append(cards, desk.CardStack[user+CardStackSlot5].Card...)
	_, _, err := ConsumeCost(ctx, game, desk, user, cost, cards)
	if err != nil {
		return false
	}
	return true
}

func OnEvent(ctx appengine.Context, game Game, desk core.Desktop, evt string, parameters []string) (Game, core.Desktop, error) {
	var err error
	for _, card := range desk.Card {
		game, desk, err = OnEventInCard(ctx, game, desk, evt, parameters, card)
		if err != nil {
			return game, desk, err
		}
	}
	return game, desk, nil
}

// 支付費用
// 由各個卡片實做中來呼叫
// cost的格式是"無無魏"這樣的格式
// cost的支付順序必須和cardIds給定的順序要一致
func ConsumeCost(ctx appengine.Context, game Game, desk core.Desktop, user string, cost string, cardIds []int) (Game, core.Desktop, error) {
	// 將X轉為"無"序列
	if cost == "X" {
		panic("不在這裡處理X")
	}
	var err error
	// 建立空的slot
	// 這個slot必須被填滿
	costSlot := make([]string, len([]rune(cost)))
	for _, cardId := range cardIds {
		// 支付消費
		// 填充slot
		game, desk, err = ConsumeCostInCard(ctx, game, desk, user, cost, costSlot, desk.Card[cardId])
		if err != nil {
			return game, desk, err
		}
	}
	// 檢查slot是不是都被填滿了
	for _, slot := range costSlot {
		if slot == "" {
			return game, desk, ErrManaIsntEnougth
		}
	}
	return game, desk, nil
}

// 核對可發動能力
// 每個玩家在各個階段可以呼叫，取得可以使用的動作
// 這個方法會巡訪指定玩家的所有卡，將所有動作方案收集起來
// 每個動作方案會起錄它的需求Cost和執行目標，兩項都是審核過可以支付的
// 之後玩家再呼叫PerformAction
// === 基本流程 ====
// 1. 玩家呼叫GetCut，判斷切入狀態
// 2. 若要切入或發起新的切入，呼叫CheckAction來取得動作方案
// 3. 呼叫PerformAction
func CheckAction(ctx appengine.Context, game Game, desk core.Desktop, user string) ([]Action, error) {
	var err error
	actions := []Action{}
	for _, card := range desk.Card {
		actions, err = CheckActionInCard(ctx, game, desk, user, card, actions)
		if err != nil {
			return nil, err
		}
	}
	return actions, nil
}

// 玩家將所選的Target上傳
// 執行動作
// 這個方法會將需求支付解決
// 然後將這個動作方案轉變成Goal和Effect
// 會自動判斷有沒有在切入中
// 若有，發生切入
// 若沒有，新增切入堆疊
func PerformAction(ctx appengine.Context, game Game, desk core.Desktop, user string, action Action) (Game, core.Desktop, error) {
	var err error
	updatedStage := desk
	for _, card := range desk.Card {
		game, updatedStage, err = PerformActionInCard(ctx, game, updatedStage, user, action, true, card)
		if err != nil {
			return game, desk, err
		}
	}
	return game, updatedStage, nil
}

func StepSystem(ctx appengine.Context, sgs Game, desk core.Desktop) (Game, core.Desktop, error) {
	var err error
	var goal core.Goal
	var has bool
	// 取得切入的最後一個問題
	goal, has, err = core.GetLastGoal(ctx, sgs.ID)
	if err != nil {
		return sgs, desk, err
	}
	// 若切入的所有效果都解決了，完成這個切入
	// 等待下一個切入發生
	if has == false {
		err = core.CompleteCut(ctx, sgs.ID)
		if err != nil {
			return sgs, desk, err
		}
		return sgs, desk, nil
	}
	// 如果存在，就取得最後一個問題的前置問題
	goal, has, err = core.GetDependGoal(ctx, sgs.ID, goal)
	if err != nil {
		return sgs, desk, err
	}
	// 沒有問題就略過
	if has == false {
		return sgs, desk, nil
	}
	// 如果不是系統問題，就略過
	if goal.User != core.UserSys {
		return sgs, desk, nil
	}
	// 處理系統問題
	switch goal.Description {
	default:
		break
	case "玩家{0}觸發{1}的能力{2}":
		user := goal.Parameters[0]
		cardId := goal.Parameters[1]
		payload := goal.Parameters[2]
		/*
			var action Action
			err = json.Unmarshal([]byte(payload), &action)
			if err != nil {
				return sgs, desk, err
			}
			// 直接執行目標卡
			cardIdInt, err := strconv.Atoi(cardId)
			if err != nil {
				return sgs, desk, err
			}
			card := desk.Card[cardIdInt]
			sgs, desk, err = PerformActionInCard(ctx, sgs, desk, user, action, false, card)
		*/
		var discuss Discuss
		err = json.Unmarshal([]byte(payload), &discuss)
		if err != nil {
			return sgs, desk, err
		}
		// 直接執行目標卡
		cardIdInt, err := strconv.Atoi(cardId)
		if err != nil {
			return sgs, desk, err
		}
		card := desk.Card[cardIdInt]
		sgs, desk, discuss, err = DiscussInCardImpl(ctx, sgs, desk, user, discuss, card)

		switch err.(type) {
		case SgsError:
			var sgsErr = err
			// 卡牌內容錯誤
			// 代表目標遺失
			// 一樣將問題完成並回傳錯誤
			// 讓前台有機會處理對玩家的回應
			err = core.CompleteGoal(ctx, sgs.ID, goal.ID, nil)
			if err != nil {
				return sgs, desk, err
			}
			return sgs, desk, sgsErr
		default:
			// 系統錯誤
			// 中斷執行
			if err != nil {
				return sgs, desk, err
			}
			break
		}

		err = core.CompleteGoal(ctx, sgs.ID, goal.ID, nil)
		if err != nil {
			return sgs, desk, err
		}
		break
	}
	return sgs, desk, nil
}

func DiscussInCardImpl(ctx appengine.Context, game Game, desk core.Desktop, user string, discuss Discuss, card core.Card) (Game, core.Desktop, Discuss, error) {
	var cardId int
	var cost string
	var err error
	var cardIds []int
	var abilityId string
	switch discuss.Subject.Body {
	case "有人可以行動嗎":
		// 如果有轉移能力在這裡回應
		discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "{cardId}可以轉移到{slotIds}", map[string]interface{}{"cardIds": cardId, "slotIds": []string{}}})

		// 處理第1彈的領土
		switch card.Ref {
		case "179":
		case "180":
		case "181":
		case "182":
		case "183":
		case "184":
		case "185":
		case "186":
			if card.Owner != user {
				return game, desk, discuss, nil
			}
			// 如果在手上，就可以打出來
			if IsCardInCardStack(ctx, desk, user+CardStackHand, card.ID) {
				if CheckHasPutManaInThisTurn(ctx, game, desk, user) {
					return game, desk, discuss, nil
				}
				discuss.Suggestion = append(discuss.Suggestion, Sentence{
					card.ID,
					"打出{cardId}到{stackId}",
					map[string]interface{}{
						"cardId":  card.ID,
						"stackId": user + CardStackMana,
					},
				})
				return game, desk, discuss, nil
			}
			// 在魔力池中並且是打開狀態才能有這個能力
			if IsCardInCardStack(ctx, desk, user+CardStackMana, card.ID) && card.Face == core.FaceOpen {
				if CheckCanConsumeCost(ctx, game, desk, user, card.ID) == false {
					return game, desk, discuss, nil
				}
				discuss.Suggestion = append(discuss.Suggestion, Sentence{
					card.ID,
					"使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}",
					map[string]interface{}{
						"cost":      "無無無",
						"cardId":    card.ID,
						"abilityId": "翻面抓牌",
					},
				})
				return game, desk, discuss, nil
			}
		}
		return game, desk, discuss, nil

	case "{cardId}可以轉移嗎?可以轉移到哪{slotIds}?":
		// 如果有卡可以讓場上的卡不能轉移
		discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "不能轉移", nil})

		break

	case "打出{cardId}到{stackId}":
		// 如果有迎擊的卡在這邊回應
		discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "{cardId}有迎擊", map[string]interface{}{"cardId": cardId}})
		return game, desk, discuss, nil

	case "{userId}的{cardId}從{slotId1}移動到{slotId2}":
		// 如果有迎擊的卡在這邊回應
		discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "{cardId}有迎擊", map[string]interface{}{"cardId": cardId}})

		// 如果有突擊的卡在這邊回應
		discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "{cardId}有突擊", map[string]interface{}{"cardId": cardId}})
		return game, desk, discuss, nil

	case "{cardId}的迎擊力是{damage}?":
		cardId = discuss.Subject.Parameters["cardId"].(int)
		if cardId == card.ID {
			damage := 0
			discuss.Suggestion = append(discuss.Suggestion, Sentence{0, "迎擊力{damage}", map[string]interface{}{"damage": damage}})
			return game, desk, discuss, nil
		}
		// 如果有可以增加迎擊力的
		discuss.Suggestion = append(discuss.Suggestion, Sentence{0, "迎擊力增加{damage}", map[string]interface{}{"damage": 0}})
		return game, desk, discuss, nil

	case "{cardId}的突擊力是{damage}?":
		cardId = discuss.Subject.Parameters["cardId"].(int)
		if cardId == card.ID {
			damage := 0
			discuss.Suggestion = append(discuss.Suggestion, Sentence{0, "突擊力{damage}", map[string]interface{}{"damage": damage}})
			return game, desk, discuss, nil
		}
		// 如果有可以增加迎擊力的
		discuss.Suggestion = append(discuss.Suggestion, Sentence{0, "突擊力加增加{damage}", map[string]interface{}{"damage": 0}})
		return game, desk, discuss, nil

	case "執行{cardId}的{abilityId}":
		// 執行能力
		cardId = discuss.Subject.Parameters["cardId"].(int)
		abilityId = discuss.Subject.Parameters["abilityId"].(string)

		if cardId != card.ID {
			break
		}
		if abilityId == "翻面抓牌" {
			// 將地翻面
			desk.Card[card.ID].Face = core.FaceClose
			// 取得本國最上方的卡
			cardCnt := len(desk.CardStack[user+CardStackBase].Card)
			// 無牌可抽，先暫時略過
			if cardCnt == 0 {
				return game, desk, discuss, SgsError("no card can draw")
			}
			topCardInCardBase := desk.CardStack[user+CardStackBase].Card[cardCnt-1]
			// 移到手上
			desk, err = core.MoveCard(ctx, desk, user+CardStackBase, user+CardStackHand, 0, topCardInCardBase)
			if err != nil {
				return game, desk, discuss, nil
			}
		}
		break

	default:
		// 有卡牌要觸發能力，尋問能不能觸發
		if strings.Contains(discuss.Subject.Body, "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}?") {
			// 有沒有能阻止這次技能的能力或是增加消費的能力
			discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "不能使用", nil})
			// 若有洞察，在這裡建議目標修正
			discuss.Suggestion = append(discuss.Suggestion, Sentence{card.ID, "我有洞察，不能以我為目標", nil})
			break
		}

		// 前台觸發能力
		if strings.Contains(discuss.Subject.Body, "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}") {
			cardIds = discuss.Subject.Parameters["cardIds"].([]int)
			cost = discuss.Subject.Parameters["cost"].(string)
			// 先執行支付
			game, desk, err = ConsumeCost(ctx, game, desk, user, cost, cardIds)
			if err != nil {
				return game, desk, discuss, err
			}
			// 將效果加入切入堆疊
			discuss = NewDiscuss(card.ID, "執行{cardId}的{abilityId}", discuss.Subject.Parameters)
			err = AddEffect(ctx, game.ID, user, discuss, card.ID)
			if err != nil {
				return game, desk, discuss, nil
			}
			break
		}
		break
	}

	return game, desk, discuss, nil
}
