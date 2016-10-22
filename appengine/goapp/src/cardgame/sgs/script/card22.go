package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
)

func ConsumeCostInCard22(ctx appengine.Context, game Game, stage core.Desktop, user string, cost string, costSlot []string, card core.Card) (Game, core.Desktop, error) {
	return game, stage, nil
}

func PerformActionInCard22(ctx appengine.Context, game Game, stage core.Desktop, user string, action Action, invoke bool, card core.Card) (Game, core.Desktop, error) {
	var err error
	if action.Description == "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}" {
		abilityId := action.Parameters["abilityId"].(string)
		cardId := action.Parameters["cardId"].(int)
		slotId := action.Parameters["slotId"].(string)
		if invoke {
			err = AddEffectFromAction(ctx, game.ID, user, action, card.ID)
			if err != nil {
				return game, stage, err
			}
			return game, stage, nil
		}
		if abilityId == "轉移" {
			game, stage, err = UnitMove(ctx, game, stage, user, slotId, OnEvent, cardId)
			if err != nil {
				return game, stage, err
			}
		}
	}
	return game, stage, nil
}

func CheckActionInCard22(ctx appengine.Context, sgs Game, stage core.Desktop, user string, card core.Card, actions []Action) ([]Action, error) {
	// 青州探马
	if IsPhase(ctx, sgs, PhaseMain) == false {
		return nil, nil
	}
	atSlot := GetCardSlot(ctx, sgs, stage, user, card.ID)
	if atSlot == -1 {
		return nil, nil
	}
	neighborSlotIds := GetEmptyNeighborSlot(ctx, sgs, stage, user, atSlot)
	if len(neighborSlotIds) == 0 {
		return nil, nil
	}
	actions = append(actions, Action{
		FromID:      card.ID,
		User:        user,
		Description: "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}",
		Parameters: map[string]interface{}{
			"cardId":    card.ID,
			"abilityID": "轉移",
			"meta":      neighborSlotIds,
		},
	})
	return actions, nil
}
