package script

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	. "cardgame/sgs/core"
	_ "errors"
)

func 初陣(total []CardPrototype) []CardPrototype {
	cards := []CardPrototype{
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
	Packages = []func([]CardPrototype) []CardPrototype{
		初陣,
	}
)

func InstallPackage(ctx appengine.Context) error {
	var total []CardPrototype
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

func GetCardPrototype(ctx appengine.Context, id string) (CardPrototype, error) {
	key := CardKey(ctx, id)
	var card CardPrototype
	var err error
	err = datastore.Get(ctx, key, &card)
	if err != nil {
		return CardPrototype{}, err
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
