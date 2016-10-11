package sgs

import (
	"appengine"
	core "cardgame/core"
	_ "strconv"
	"strings"
)

type Sentence struct {
	CardID     int
	Body       string
	Parameters map[string]interface{}
}

type Discuss struct {
	Subject    Sentence
	Suggestion []Sentence
}

type DiscussInCard func(appengine.Context, Game, core.Desktop, string, Discuss, core.Card) (Game, core.Desktop, Discuss, error)

func DiscussAllCard(ctx appengine.Context, game Game, desk core.Desktop, user string, fn DiscussInCard, discuss Discuss) (Discuss, error) {
	var err error
	for _, card := range desk.Card {
		_, _, discuss, err = fn(ctx, game, desk, user, discuss, card)
		if err != nil {
			return discuss, err
		}
	}
	return discuss, nil
}

func ResultSugguestion(discuss Discuss) Discuss {
	if discuss.Subject.Body == "{cardId}的迎擊力是{damage}?" {
		// TODO 實作damage
	}
	return Discuss{}
}

func NewDiscuss(cardId int, body string, parameters map[string]interface{}) Discuss {
	return Discuss{Subject: Sentence{cardId, body, parameters}}
}

// 核對可發動能力
// 每個玩家在各個階段可以呼叫，取得可以使用的動作
// 這個方法會巡訪指定玩家的所有卡，將所有動作方案收集起來
// 每個動作方案會起錄它的需求Cost和執行目標，兩項都是審核過可以支付的
// 之後玩家再呼叫各自的Subject
// === 基本流程 ====
// 1. 玩家呼叫GetCut，判斷切入狀態
// 2. 若要切入或發起新的切入，呼叫"有人可以行動嗎"來取得動作方案
// 3. 呼叫各自的Subject

// 有步驟開始時的階段
// 所以有步驟開始時的能力也會在這裡收集

// 每打出一張卡後，那張卡會標示這回合下的
// 所以也可以在這裡收集那些能力
// ID148：在每个准备步骤开始时，若糜芳的武力小于其相对单位，将糜芳移回其拥有者手上
// ID63：当孙乾进战场时，展示每位玩家的牌库顶牌
// ID116：当吴夫人进战场时，从你的牌库和墓地中搜寻一张吴势力主公牌
// ID49 ：每当简雍或另一个单位在你的操控下进战场时，你可以进行一次判定，若判定牌的打出费用大于或等于2，则横置目标单位
// 簡雍的牌會給出建議說這回合下的都可以觸發這個能力
// 所以會由ResultSugguestion來處理－取得這回合打出的卡並還沒發過進場能力的卡，並一一將這個能力放入堆疊

// 每死亡一張卡時，那張卡也會標示這回合死亡的
// 所以也可以在這裡收集那些能力
// ID131：当后宫内侍死去时，每位玩家失去3点体力
// ID134：当黄巾传道者死去时，将一个1/1群雄黄巾单位指示物放置在原先的阵地上。
// 發動完要記得標示已發動過
func HandleDiscuss(ctx appengine.Context, game Game, desk core.Desktop, user string, fn DiscussInCard, discuss Discuss) (Game, core.Desktop, Discuss, error) {
	var err error
	var userIdStr string
	var cardId int
	var slotId1Str string
	var slotId2Str string
	var abilityId string
	var stackId string
	var card core.Card

	var _ = userIdStr
	var _ = card
	var _ = abilityId

	switch discuss.Subject.Body {
	case "進戰場時":
		// 收集卡牌狀態trigger中包含"進戰場"的卡，一一處理
		// 當處理完後將trigger中的"進戰場"移除
		// ID106：当乌桓勇士进战场时，将一个由你操控的明置领土翻面
	case "{cardId}宣告攻擊":
		// ID76：每当大贤侍女宣告攻击时，每位玩家失去1点体力。
		break
	case "有人可以行動嗎":
		discuss, err = DiscussAllCard(ctx, game, desk, user, fn, discuss)
		if err != nil {
			return game, desk, discuss, err
		}
		for _, suggestion := range discuss.Suggestion {
			if suggestion.Body == "{cardId}可以轉移到{slotIds}" {
				// 取得移動建議
				canMoveDiscuss := NewDiscuss(cardId, "{cardId}可以轉移嗎?可以轉移到哪{slotIds}?", map[string]interface{}{"cardId": cardId})
				canMoveDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, canMoveDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				canMoveDiscuss = ResultSugguestion(canMoveDiscuss)
				// TODO 回傳可移到的地點，或者不能轉移就取消這個建議
				var _ = canMoveDiscuss

			} else if strings.Contains(suggestion.Body, "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}") {
				// 取得建議
				canPerformDiscuss := NewDiscuss(cardId, suggestion.Body+"?", suggestion.Parameters)
				canPerformDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, canPerformDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				// 可能會增加消費或者是無法用來支付等
				canPerformDiscuss = ResultSugguestion(canPerformDiscuss)
				var _ = canPerformDiscuss

			}
		}
		return game, desk, discuss, nil

	case "打出{cardId}到{stackId}":
		cardId = discuss.Subject.Parameters["cardId"].(int)
		stackId = discuss.Subject.Parameters["stackId"].(string)

		moveCardId := cardId
		desk, err = core.MoveCard(ctx, desk, user+CardStackHand, stackId, 0, moveCardId)

		// 取得卡的反應建議
		// 因為有人可能可以迎擊
		discuss, err = DiscussAllCard(ctx, game, desk, user, fn, discuss)
		if err != nil {
			return game, desk, discuss, err
		}

		for _, suggestion := range discuss.Suggestion {
			// 迎擊
			if suggestion.Body == "{cardId}有迎擊" {
				cardId = suggestion.Parameters["cardId"].(int)
				// 取得迎擊力建議
				counterPowerDiscuss := NewDiscuss(cardId, "{cardId}的迎擊力是{damage}?", map[string]interface{}{"cardId": cardId})
				counterPowerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, counterPowerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				// 計算出迎擊力
				counterPowerDiscuss = ResultSugguestion(counterPowerDiscuss)
				damage := counterPowerDiscuss.Subject.Parameters["damage"].(int)
				// 受到迎擊
				game.CardInfo[moveCardId].Defence -= damage
				// 尋問有沒有人可以對突擊傷害反應
				hasTriggerDiscuss := NewDiscuss(0, "{cardId}受到{cardId2}的突擊傷害{damage}", map[string]interface{}{"cardId": moveCardId, "cardId2": cardId, "damage": damage})
				hasTriggerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, hasTriggerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				hasTriggerDiscuss = ResultSugguestion(hasTriggerDiscuss)
				for _, suggestion = range hasTriggerDiscuss.Suggestion {
					if suggestion.Body == "執行{cardId}的{abilityId}" {

					}
				}
			}
		}
		return game, desk, discuss, nil

	case "{cardId}從{slotId1}移動到{slotId2}":
		// 移動行為會處理迎擊、突擊
		userIdStr = discuss.Subject.Parameters["userId"].(string)
		cardId = discuss.Subject.Parameters["cardId"].(int)
		slotId1Str = discuss.Subject.Parameters["slotId1"].(string)
		slotId2Str = discuss.Subject.Parameters["slotId2"].(string)

		moveCardId := cardId

		desk, err = core.MoveCard(ctx, desk, slotId1Str, slotId2Str, 0, moveCardId)
		if err != nil {
			return game, desk, discuss, err
		}

		// 取得卡的反應建議
		// 因為有人可能可以迎擊
		discuss, err = DiscussAllCard(ctx, game, desk, user, fn, discuss)
		if err != nil {
			return game, desk, discuss, err
		}

		for _, suggestion := range discuss.Suggestion {
			// 迎擊
			if suggestion.Body == "{cardId}有迎擊" {
				cardId = suggestion.Parameters["cardId"].(int)
				// 取得迎擊力建議
				counterPowerDiscuss := NewDiscuss(cardId, "{cardId}的迎擊力是{damage}?", map[string]interface{}{"cardId": cardId})
				counterPowerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, counterPowerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				// 計算出迎擊力
				counterPowerDiscuss = ResultSugguestion(counterPowerDiscuss)
				damage := counterPowerDiscuss.Subject.Parameters["damage"].(int)
				// 受到迎擊
				game.CardInfo[moveCardId].Defence -= damage
				// 尋問有沒有人可以對突擊傷害反應
				hasTriggerDiscuss := NewDiscuss(0, "{cardId}受到{cardId2}的突擊傷害{damage}", map[string]interface{}{"cardId": moveCardId, "cardId2": cardId, "damage": damage})
				hasTriggerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, hasTriggerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				hasTriggerDiscuss = ResultSugguestion(hasTriggerDiscuss)
				for _, suggestion = range hasTriggerDiscuss.Suggestion {
					if suggestion.Body == "執行{cardId}的{abilityId}" {

					}
				}
			}

			// 突擊
			if suggestion.Body == "{cardId}有突擊" {
				cardId = suggestion.Parameters["cardId"].(int)
				// 取得迎擊力建議
				counterPowerDiscuss := NewDiscuss(cardId, "{cardId}的突擊力是{damage}?", map[string]interface{}{"cardId": cardId})
				counterPowerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, counterPowerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				// 計算出突擊力
				counterPowerDiscuss = ResultSugguestion(counterPowerDiscuss)
				damage := counterPowerDiscuss.Subject.Parameters["damage"].(int)
				// 受到突擊
				// TODO
				// 尋問有沒有人可以對突擊傷害反應
				hasTriggerDiscuss := NewDiscuss(0, "{cardId}受到{cardId2}的突擊傷害{damage}", map[string]interface{}{"cardId": moveCardId, "cardId2": cardId, "damage": damage})
				hasTriggerDiscuss, err = DiscussAllCard(ctx, game, desk, user, fn, hasTriggerDiscuss)
				if err != nil {
					return game, desk, discuss, err
				}
				hasTriggerDiscuss = ResultSugguestion(hasTriggerDiscuss)
				for _, suggestion = range hasTriggerDiscuss.Suggestion {
					if suggestion.Body == "執行{cardId}的{abilityId}" {

					}
				}
			}

			// 其它能力
		}
		return game, desk, discuss, nil
		break
	case "執行{cardId}的{abilityId}":
		cardId = discuss.Subject.Parameters["cardId"].(int)
		card = desk.Card[cardId]
		game, desk, discuss, err = fn(ctx, game, desk, user, discuss, card)
		if err != nil {
			return game, desk, discuss, err
		}
		break
	default:
		// 所有支付都check過了，可以不用管
		if strings.Contains(discuss.Subject.Body, "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}") {
			cardId = discuss.Subject.Parameters["cardId"].(int)
			card = desk.Card[cardId]
			game, desk, discuss, err = fn(ctx, game, desk, user, discuss, card)
			if err != nil {
				return game, desk, discuss, err
			}
		}
		return game, desk, discuss, nil
	}
	return game, desk, discuss, nil
}
