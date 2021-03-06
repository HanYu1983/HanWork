package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame2/core"
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
		{
			CardID:    "116",
			Name:      "武烈皇后·吴夫人",
			Cost:      "1",
			Color:     ColorGreen,
			ColorCost: ColorGreen,
			Class:     "无双单位 ~ 女性",
			Package:   "初阵",
			Attack:    "1",
			Defence:   "1",
			Text:      "当吴夫人进战场时，从你的牌库和Graveyard中搜寻一张吴势力主公牌，展示并洗牌后将该牌置于你的牌库顶。",
		},
		{
			CardID:    "105",
			Name:      "年轻贤君·孙权",
			Cost:      "5",
			Color:     ColorGreen,
			ColorCost: ColorGreen + ColorGreen,
			Class:     "无双单位 ~ 主公",
			Package:   "初阵",
			Attack:    "3",
			Defence:   "5",
			Text:      "由你操控的其他吴势力单位各+1/+1。{通常}{X}，弃X张牌→抓X张牌。此能力每回合只能启动一次。",
		},
		{
			CardID:    "49",
			Name:      "迎战准备",
			Cost:      "1",
			Color:     ColorRed,
			ColorCost: ColorRed,
			Class:     "{瞬发}锦囊",
			Package:   "缔盟",
			Attack:    "",
			Defence:   "",
			Text:      "目标单位具有迎击5（每当一个单位进入此单位的相对阵地时，此单位对前者造成5点伤害）直到回合结束。",
		},
		{
			CardID:    "13",
			Name:      "冷血皇后·张春华",
			Cost:      "2",
			Color:     ColorBlue,
			ColorCost: ColorBlue,
			Class:     "无双单位 ~ 女性",
			Package:   "群星",
			Attack:    "2",
			Defence:   "3",
			Text:      "若任一来源将对一个单位或玩家造成伤害，则改为使该单位或玩家失去等量的体力。",
		},
		{
			CardID:    "97",
			Name:      "矫情之花·小乔",
			Cost:      "2",
			Color:     ColorGreen,
			ColorCost: ColorGreen,
			Class:     "无双单位 ~ 女性",
			Package:   "初阵",
			Attack:    "1",
			Defence:   "1",
			Text:      "防止将对小乔造成的所有伤害。",
		},
		{
			CardID:    "28",
			Name:      "三江城蛮丁",
			Cost:      "2",
			Color:     ColorRed,
			ColorCost: ColorRed,
			Class:     "单位边境 ~ 南蛮/步兵",
			Package:   "乱华",
			Attack:    "1",
			Defence:   "1",
			Text:      "暴乱1；迎击2",
		},
		{
			CardID:    "85",
			Name:      "飞将的利刃·张辽",
			Cost:      "5",
			Color:     ColorGray,
			ColorCost: ColorGray + ColorGray,
			Class:     "无双单位 ~ 武将",
			Package:   "群星",
			Attack:    "5",
			Defence:   "1",
			Text:      "神速；转移；突击1。当张辽对一名对手造成伤害时，该玩家弃一张牌。你可以从手上展示一张无双名称为【吕布】的牌，若如此做，你抓一张牌。",
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

// 將台面上所有的卡牌的遊戲資料加入
// 在將玩家的牌組加入遊戲時呼叫
// 這個方法一定要呼叫，不然遊戲不能玩
func InstallCardInfo(ctx appengine.Context, sgs Game, stage core.Desktop) (Game, error) {
	for _, card := range stage.Card {
		var err error
		info, err := GetCardPrototype(ctx, card.Ref)
		if err != nil {
			return sgs, err
		}
		cardInfo := CardInfo{
			CardID:        card.ID,
			Prototype:     info,
			ControlPlayer: card.Owner,
		}
		sgs.CardInfo = append(sgs.CardInfo, cardInfo)
	}
	return sgs, nil
}

func AddCard(ctx appengine.Context, game Game, desk core.Desktop, stack string, user string, cardRef string) (Game, core.Desktop, int, error) {
	var err error
	desk, cardId, err := core.AddCard(ctx, desk, stack, user, cardRef)
	if err != nil {
		return game, desk, 0, err
	}
	info, err := GetCardPrototype(ctx, cardRef)
	if err != nil {
		return game, desk, 0, err
	}
	cardInfo := CardInfo{
		CardID:        cardId,
		Prototype:     info,
		ControlPlayer: user,
	}
	shouldExpend := cardId >= len(game.CardInfo)
	if shouldExpend {
		newList := make([]CardInfo, cardId+1)
		copy(newList, game.CardInfo)
		newList[cardId] = cardInfo
		game.CardInfo = newList
	}
	return game, desk, cardId, nil
}
