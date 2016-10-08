package script

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	. "cardgame/sgs/core"
	_ "errors"
)

func 初陣(total []Card) []Card {
	cards := []Card{
		{
			CardID:    "51",
			Name:      "决斗",
			Cost:      "0",
			Color:     ColorRed,
			ColorCost: ColorRed,
			Class:     "{通常}锦囊",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "目标由你操控的单位与目标由对手操控的单位决斗（他们互相向对方造成等同于各自武力的伤害）。",
		},
		{
			CardID:    "90",
			Name:      "火攻",
			Cost:      "X",
			Color:     ColorGreen,
			ColorCost: ColorGreen + ColorGreen + ColorGreen,
			Class:     "{通常}锦囊",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "火攻对目标单位或玩家造成X点伤害。",
		},
		{
			CardID:    "22",
			Name:      "青州探马",
			Cost:      "1",
			Color:     ColorBlue,
			ColorCost: ColorBlue,
			Class:     "單位~斥候",
			Package:   "初阵",
			Attack:    "1",
			Defence:   "2",
			Text:      "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
		},
		{
			CardID:    "179",
			Name:      "魏领土",
			Cost:      "0",
			Color:     ColorBlue,
			ColorCost: ColorBlue,
			Class:     "基本领土",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "{瞬发}{3}，将此领土翻面→抓一张牌。",
		},
	}
	return append(total, cards...)
}

var (
	Packages = []func([]Card) []Card{
		初陣,
	}
)

func InstallPackage(ctx appengine.Context) error {
	var total []Card
	var key *datastore.Key
	var err error
	for _, pkg := range Packages {
		total = pkg(total)
	}
	for _, card := range total {
		key = CardKey(ctx, card.CardID)
		_, err = datastore.Put(ctx, key, &card)
		if err != nil {
			return err
		}
	}
	return nil
}

func GetCardPrototype(ctx appengine.Context, id string) (Card, error) {
	key := CardKey(ctx, id)
	var card Card
	var err error
	err = datastore.Get(ctx, key, &card)
	if err != nil {
		return Card{}, err
	}
	return card, nil
}

// 取得卡牌的遊戲狀態
// 遊戲狀態會在遊戲剛建立時叫用InstallCardInfo來將所有用到的卡牌的資訊存到Game中
// GetCardInfo一定能取到自己的狀態
func GetCardInfo(sgs Game, card core.Card) CardInfo {
	for _, info := range sgs.CardInfo {
		if info.CardID == card.ID {
			return info
		}
	}
	panic("取不到資料，這場遊戲有問題，必須放棄")
}

// 將台面上所有的卡牌的遊戲資料加入
// 在將玩家的牌組加入遊戲時呼叫
// 這個方法一定要呼叫，不然遊戲不能玩
func InstallCardInfo(ctx appengine.Context, sgs Game, stage core.Game) (Game, error) {
	var _, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, card core.Card) (core.Card, error) {
		var err error
		info, err := GetCardPrototype(ctx, card.Ref)
		if err != nil {
			return card, err
		}
		cardInfo := CardInfo{CardID: card.ID, Prototype: info, Current: info}
		sgs.CardInfo = append(sgs.CardInfo, cardInfo)
		return card, nil
	})
	return sgs, err
}

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
