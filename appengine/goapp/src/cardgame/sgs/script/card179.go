package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"strconv"
)

// =============== 魏領土 =============== //
// 支付消費
// 如何支付全部由卡牌自定
func ConsumeCostInCard179(ctx appengine.Context, game Game, stage core.Desktop, user string, cost string, costSlot []string, card core.Card) (Game, core.Desktop, error) {
	var err error
	switch card.Ref {
	case "179":
		// 持有者不是自己不能支付
		if card.Owner != user {
			return game, stage, nil
		}
		// 魏領土沒有在mana裡不能支付
		_, err = core.CardIndexOfStack(ctx, stage, user+CardStackMana, card.ID)
		if err == core.ErrCardNotExist {
			return game, stage, nil
		}
		// 已經横置的不能支付
		if card.Direction == core.DirectionTap {
			return game, stage, nil
		}
		// 需要用到info時才取
		info := game.CardInfo[card.ID]
		for idx, c := range []rune(cost) {
			// 尋找還沒填充的slot
			if costSlot[idx] != "" {
				continue
			}
			if string(c) != ColorWhite {
				// 有顏色的支付必須是開牌狀態才能支付
				if card.Face == core.FaceClose {
					continue
				}
				// 開著的牌必須顏色符合
				if string(c) != info.Color {
					continue
				}
			}
			// Ok，可支付
			stage.Card[card.ID].Direction = core.DirectionTap
			// 填充slot
			costSlot[idx] = strconv.Itoa(card.ID)
			// 因為魏領土只能支付一個mana，所以支付完直接回傳
			return game, stage, nil
		}
		break
	}
	return game, stage, nil
}

func PerformActionInCard179(ctx appengine.Context, sgs Game, stage core.Desktop, user string, action Action, invoke bool, card core.Card) (Game, core.Desktop, error) {
	var err error
	if action.Description == "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
		cost := action.Parameters["cost"].(string)
		abilityId := action.Parameters["abilityId"].(string)
		// 啟動效果，放入堆疊
		if invoke {
			cardIds := action.Parameters["cardIds"].([]int)
			// 先執行支付
			sgs, stage, err = ConsumeCost(ctx, sgs, stage, user, cost, cardIds)
			if err != nil {
				return sgs, stage, err
			}
			err = AddEffectFromAction(ctx, sgs.ID, user, action, card.ID)
			if err != nil {
				return sgs, stage, err
			}
			return sgs, stage, nil
		}
		if abilityId == "翻面抓牌" {
			// 將地翻面
			stage.Card[card.ID].Face = core.FaceClose
			// 取得本國最上方的卡
			cardCnt := len(stage.CardStack[user+CardStackBase].Card)
			// 無牌可抽，先暫時略過
			if cardCnt == 0 {
				return sgs, stage, SgsError("no card can draw")
			}
			topCardInCardBase := stage.CardStack[user+CardStackBase].Card[cardCnt-1]
			// 移到手上
			stage, err = core.MoveCard(ctx, stage, user+CardStackBase, user+CardStackHand, 0, topCardInCardBase)
			if err != nil {
				return sgs, stage, err
			}
		}
	}
	return sgs, stage, nil
}

func CheckActionInCard179(ctx appengine.Context, sgs Game, stage core.Desktop, user string, card core.Card, actions []Action) ([]Action, error) {
	// 魏领土
	if card.Owner != user {
		return nil, nil
	}
	// 如果在手上，就可以打出來
	if IsCardInCardStack(ctx, stage, user+CardStackHand, card.ID) {
		if CheckHasPutManaInThisTurn(ctx, sgs, stage, user) {
			return nil, nil
		}
		actions = append(actions, Action{
			FromID:      card.ID,
			User:        user,
			Description: "打出{cardId}到{stackId}",
			Parameters: map[string]interface{}{
				"cardId":  card.ID,
				"stackId": user + CardStackMana,
			},
		})
		return actions, nil
	}
	// 在魔力池中並且是打開狀態才能有這個能力
	if IsCardInCardStack(ctx, stage, user+CardStackMana, card.ID) && card.Face == core.FaceOpen {
		if CheckCanConsumeCost(ctx, sgs, stage, user, card.ID) == false {
			return actions, nil
		}
		actions = append(actions, Action{
			FromID:      card.ID,
			User:        user,
			Description: "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cost":      "無無無",
				"cardId":    card.ID,
				"abilityId": "翻面抓牌",
			},
		})
		return actions, nil
	}
	return actions, nil
}
