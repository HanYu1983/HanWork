package script

import (
	"appengine"
	_ "appengine/datastore"
	core "cardgame/core"
	. "cardgame/sgs/core"
	_ "errors"
)

// 支付消費
// 如何支付全部由卡牌自定
func ConsumeCostInCard179(ctx appengine.Context, game Game, stage core.Game, user string, cost string, costSlot []string, card core.Card) (Game, core.Game, error) {
	var err error
	switch card.Ref {
	case "179":
		// 持有者不是自己不能支付
		if card.Owner != user {
			return game, stage, nil
		}
		// 魏領土沒有在mana裡不能支付
		if core.HasCardInStack(ctx, stage, user+CardStackMana, card) == -1 {
			return game, stage, nil
		}
		// 已經横置的不能支付
		if card.Direction == core.DirectionTap {
			return game, stage, nil
		}
		// 需要用到info時才取，並且如果有改變的話，要立刻存回去
		info := GetCardInfo(game, card)
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
				if string(c) != info.Current.Color {
					continue
				}
			}
			// Ok，可支付
			stage, err = core.MapCard(ctx, stage, ChangeCardDirection(ctx, card.ID, core.DirectionTap))
			if err != nil {
				return game, stage, err
			}
			// 填充slot
			costSlot[idx] = card.ID
			// 因為魏領土只能支付一個mana，所以支付完直接回傳
			return game, stage, nil
		}
		break
	}
	return game, stage, nil
}

func PerformActionInCard179(ctx appengine.Context, sgs Game, stage core.Game, user string, action Action, invoke bool, card core.Card) (Game, core.Game, error) {
	var err error
	if action.Description == "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
		cost := action.Parameters["cost"].(string)
		abilityId := action.Parameters["abilityId"].(string)
		// 啟動效果，放入堆疊
		if invoke {
			cardIds := action.Parameters["cardIds"].([]string)
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
			stage, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, currCard core.Card) (core.Card, error) {
				if currCard.ID == card.ID {
					currCard.Face = core.FaceClose
				}
				return currCard, nil
			})
			// 取得本國最上方的卡
			userCardBaseId := core.HasCardStack(ctx, stage, user+CardStackBase)
			if userCardBaseId == -1 {
				return sgs, stage, core.ErrCardStackNotExist
			}
			cardCnt := len(stage.CardStack[userCardBaseId].Card)
			// 無牌可抽，先暫時略過
			if cardCnt == 0 {
				return sgs, stage, SgsError("no card can draw")
			}
			topCardInCardBase := stage.CardStack[userCardBaseId].Card[cardCnt-1]
			// 移到手上
			stage, err = core.MoveCardTo(ctx, stage, topCardInCardBase, user+CardStackBase, user+CardStackHand, 0)
			if err != nil {
				return sgs, stage, err
			}
		}
	}
	return sgs, stage, nil
}

func CheckActionInCard179(ctx appengine.Context, sgs Game, stage core.Game, user string, card core.Card, actions []Action) ([]Action, error) {
	var err error
	var canConsumeCards []core.Card
	// 魏领土
	if card.Owner != user {
		return nil, nil
	}
	// 如果在手上，就可以打出來
	if IsCardInCardStack(ctx, stage, user+CardStackHand, card) {
		if CheckHasPutManaInThisTurn(ctx, sgs, stage) {
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
	if IsCardInCardStack(ctx, stage, user+CardStackMana, card) && card.Face == core.FaceOpen {
		canConsumeCards, err = CheckCanConsumeCost(ctx, sgs, stage, user, card)
		if err != nil {
			return nil, err
		}
		canConsumeCardIds := MapCardsToCardIDs(ctx, canConsumeCards)
		actions = append(actions, Action{
			FromID:      card.ID,
			User:        user,
			Description: "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cost":      "無無無",
				"cardId":    card.ID,
				"abilityId": "翻面抓牌",
				"meta":      canConsumeCardIds,
			},
		})
		return actions, nil
	}
	return actions, nil
}
