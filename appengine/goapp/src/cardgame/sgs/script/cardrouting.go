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
func ConsumeCostInCard(ctx appengine.Context, game Game, stage core.Game, user string, cost string, costSlot []string, card core.Card) (Game, core.Game, error) {
	switch card.Ref {
	case "179":
		return ConsumeCostInCard179(ctx, game, stage, user, cost, costSlot, card)
	}
	return game, stage, nil
}

// 取得指定卡牌的行動方案
// 由前台去補足Action中的Parameters
// 補完後呼叫PerformActionInCard
func CheckActionInCard(ctx appengine.Context, sgs Game, stage core.Game, user string, card core.Card, actions []Action) ([]Action, error) {
	switch card.Ref {
	case "90":
		return CheckActionInCard90(ctx, sgs, stage, user, card, actions)
	case "51":
		return CheckActionInCard51(ctx, sgs, stage, user, card, actions)
	case "22":
		return CheckActionInCard22(ctx, sgs, stage, user, card, actions)
	case "179":
		return CheckActionInCard179(ctx, sgs, stage, user, card, actions)
	}
	return actions, nil
}

// 執行指定卡牌的行動方案
// 注意
// invoke為true代表是不是要啟動能力
// 啟動能力代表只將效果移至切入堆疊，效果還沒有解決
// 啟動能力就會先將動作方案中的支付解決
// 若invoke為false代表要解決行動方案的效果
// 也是實做效果的地方
func PerformActionInCard(ctx appengine.Context, sgs Game, stage core.Game, user string, action Action, invoke bool, card core.Card) (Game, core.Game, error) {
	// 不是發動的卡就略過
	if action.FromID != card.ID {
		return sgs, stage, nil
	}
	switch card.Ref {
	case "90":
		return PerformActionInCard90(ctx, sgs, stage, user, action, invoke, card)
	case "22":
		return PerformActionInCard22(ctx, sgs, stage, user, action, invoke, card)
	case "51":
		return PerformActionInCard51(ctx, sgs, stage, user, action, invoke, card)
	case "179":
		return PerformActionInCard179(ctx, sgs, stage, user, action, invoke, card)
	}
	return sgs, stage, nil
}
