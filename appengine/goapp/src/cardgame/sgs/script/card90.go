package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"errors"
)

func PerformCardAction90(ctx appengine.Context, game Game, stage core.Game, user string, action Action, invoke bool, card core.Card) (Game, core.Game, error) {
	var err error
	if action.Description == "使用{cardIds}支付{cost}，擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}" {
		cost := action.Parameters["cost"].(string)
		targetEnemyCardId := action.Parameters["targetEnemyCardId"].(string)
		userId := action.Parameters["userId"].(string)
		abilityId := action.Parameters["abilityId"].(string)
		if invoke {
			cardIds := action.Parameters["cardIds"].([]string)
			if userId == user {
				return game, stage, errors.New("user id is me")
			}
			opponent := core.Opponent(user)
			hasEnemy := core.HasCardInStack(ctx, stage, opponent+CardStackSlot, core.Card{ID: targetEnemyCardId})
			if hasEnemy == -1 {
				return game, stage, errors.New("enemy id is not exist")
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
			// damage it
			var _ = damage
		}
	}
	return game, stage, nil
}
