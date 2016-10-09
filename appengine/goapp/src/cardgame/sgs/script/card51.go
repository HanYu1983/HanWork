package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
)

func ConsumeCostInCard51(ctx appengine.Context, game Game, stage core.Desktop, user string, cost string, costSlot []string, card core.Card) (Game, core.Desktop, error) {
	return game, stage, nil
}

func PerformActionInCard51(ctx appengine.Context, game Game, stage core.Desktop, user string, action Action, invoke bool, card core.Card) (Game, core.Desktop, error) {
	return game, stage, nil
}

func CheckActionInCard51(ctx appengine.Context, sgs Game, stage core.Desktop, user string, card core.Card, actions []Action) ([]Action, error) {
	// 决斗
	var err error
	var units []string
	my, err := CheckHasXUnitInSlot(ctx, sgs, stage, 1, user)
	if err != nil {
		return nil, err
	}
	enemy, err := CheckHasXUnitInSlot(ctx, sgs, stage, 1, core.Opponent(user))
	if err != nil {
		return nil, err
	}
	if len(my) == 0 {
		return nil, nil
	}
	if len(enemy) == 0 {
		return nil, nil
	}
	units = append(units, MapCardsToCardIDs(ctx, my)...)
	units = append(units, MapCardsToCardIDs(ctx, enemy)...)
	info := GetCardInfo(sgs, card.ID)
	actions = append(actions, Action{
		FromID:      card.ID,
		User:        user,
		Description: "使用{cardIds}支付{cost}，擇選你操控的{targetCardId}和對手操控的{targetEnemyCardId}，觸發{cardId}的{abilityId}",
		Parameters: map[string]interface{}{
			"cost":      FormatCost(ctx, info),
			"cardId":    card.ID,
			"abilityId": "決鬥",
			"meta":      units,
		},
	})
	return actions, nil
}
