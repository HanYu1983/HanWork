package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"errors"
	"strconv"
	"strings"
)

func ConsumeCostInCard90(ctx appengine.Context, game Game, stage core.Desktop, user string, cost string, costSlot []string, card core.Card) (Game, core.Desktop, error) {
	return game, stage, nil
}

func PerformActionInCard90(ctx appengine.Context, game Game, stage core.Desktop, user string, action Action, invoke bool, card core.Card) (Game, core.Desktop, error) {

	if action.Description == "使用{cardIds}支付{cost}，擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}" {
		cost := action.Parameters["cost"].(string)
		targetEnemyCardId := action.Parameters["targetEnemyCardId"].(string)
		userId := action.Parameters["userId"].(string)
		abilityId := action.Parameters["abilityId"].(string)
		if invoke {
			cardIds := action.Parameters["cardIds"].([]int)
			// 火攻必須將支付的X轉成"無"的序列
			if cost == "X" {
				cost = strings.Repeat("無", len(cardIds))
			}
			if userId == user {
				return game, stage, errors.New("user id is me")
			}
			targetEnemyCardIdInt, err := strconv.Atoi(targetEnemyCardId)
			if err != nil {
				return game, stage, err
			}
			opponent := core.Opponent(user)
			_, err = core.CardIndexOfStack(ctx, stage, opponent+CardStackSlot, targetEnemyCardIdInt)
			if err != nil {
				return game, stage, err
			}
			game, stage, err = ConsumeCost(ctx, game, stage, user, cost, cardIds)
			if err != nil {
				return game, stage, err
			}
			err = AddEffectFromAction(ctx, game.ID, user, action, card.ID)
			if err != nil {
				return game, stage, err
			}
			return game, stage, nil
		}
		if abilityId == "火攻" {
			cardIds := action.Parameters["cardIds"].([]string)
			damage := len(cardIds)
			return DamagePlayer(ctx, game, stage, damage, OnEvent, core.Opponent(user))
		}
	}
	return game, stage, nil
}

func CheckActionInCard90(ctx appengine.Context, sgs Game, stage core.Desktop, user string, card core.Card, actions []Action) ([]Action, error) {
	var err error
	var _ = err
	// 火攻
	_, err = core.CardIndexOfStack(ctx, stage, user+CardStackHand, card.ID)
	if err != nil {
		return actions, nil
	}
	if CheckCanConsumeCost(ctx, sgs, stage, user, card.ID) == false {
		return actions, nil
	}
	info := sgs.CardInfo[card.ID]
	actions = append(actions, Action{
		FromID:      card.ID,
		User:        user,
		Description: "使用{cardIds}支付{cost}。擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}",
		Parameters: map[string]interface{}{
			"cost":      FormatCost(ctx, info),
			"cardId":    card.ID,
			"abilityId": "火攻",
		},
	})
	return actions, nil
}
