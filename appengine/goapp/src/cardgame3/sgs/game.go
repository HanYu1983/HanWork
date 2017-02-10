package sgs

import (
	"appengine"
	core "cardgame3/core"
	"errors"
	"strconv"
	"strings"
)

const (
	UserA   = "UserA"
	UserB   = "UserB"
	UserSys = "UserSys"
)

func Opponent(user string) string {
	switch user {
	case UserA:
		return UserB
	case UserB:
		return UserA
	default:
		return user
	}
}

const (
	// 牌庫
	Library = "Library"
	// 手牌
	Hand = "Hand"
	// 領土
	TerritoryZone = "TerritoryZone"
	// 墓地
	Graveyard = "Graveyard"
	// 陣地
	Position  = "Position"
	Position1 = "Position1"
	Position2 = "Position2"
	Position3 = "Position3"
	Position4 = "Position4"
	Position5 = "Position5"
	// 放逐區
	ExileZone = "ExileZone"
)

// 取得Position卡堆的ID
func PositionID(user string, slotId int) string {
	return user + Position + strconv.Itoa(slotId)
}

// 分析PositionID
// 看Position屬於哪個玩家、第幾個Position
func ParsePositionID(cardStackSlotId string) (string, int) {
	var num int
	if strings.Contains(cardStackSlotId, Position1) {
		num = 1
	}
	if strings.Contains(cardStackSlotId, Position2) {
		num = 2
	}
	if strings.Contains(cardStackSlotId, Position3) {
		num = 3
	}
	if strings.Contains(cardStackSlotId, Position4) {
		num = 4
	}
	if strings.Contains(cardStackSlotId, Position5) {
		num = 5
	}
	var user string
	if strings.Contains(cardStackSlotId, UserA) {
		user = UserA
	}
	if strings.Contains(cardStackSlotId, UserB) {
		user = UserB
	}
	return user, num
}

const (
	ColorBlue  = "魏"
	ColorRed   = "蜀"
	ColorGreen = "吳"
	ColorGray  = "群"
	ColorWhite = "無"
)

const (
	// 重置步驟
	// 重置步骤是整个回合流程中的第一步
	// 在这个步骤中你需要重置你所有已横置的牌（将它们转正）
	// 这个步骤中进攻玩家没有优先权，所以不能打出任何牌也不能启动任何能力。
	UntapStep = iota
	// 準備步驟
	// 有的卡牌会要求玩家在准备步骤时执行某种动作，如果没有的话，这个步骤通常会直接跳过。
	StandbyStep
	// 抓牌步驟
	// 你从牌库抓一张牌，如果是先手玩家，则跳过第一回合的抓牌步骤
	DrawStep
	// 行動階段
	// == 打出手牌 ==
	// 打出领土牌：每回合至多执行一次，可以打出一个明置领土，或一个暗置领土。
	// 打出非领土牌：没有次数限制，只要你满足势力需求，支付相应的费用就可以打出。
	// == 发起战斗 ==
	// 战斗准备：选择一个单位即将宣告攻击。
	// 宣告攻击：横置并选择一个合法攻击对象。
	// 结算伤害：结算本次战斗造成的伤害。如果是单位间的战斗，双方会同时造成伤害。
	// 战斗结束：有的卡牌会在战斗结束时要求玩家执行某些动作。
	ActionPhase
	// 結束步驟
	// 有的卡牌会在结束步骤时要求玩家执行某些动作。
	EndStep
	// 棄牌步驟
	// 若你的手牌多于七张，则需要把多余的手牌弃掉。
	// 然后，写着“直到回合结束”的效果会在这个步骤被清除。
	DiscardStep
	//
	PhaseCount
)

const (
	致命 = "致命"
	附屬 = "附屬"
	佩帶 = "佩帶"
	伏擊 = "伏擊"
	神速 = "神速"
	洞察 = "洞察"
	破竹 = "破竹"
	射擊 = "射擊"
	抵抗 = "抵抗"
	轉移 = "轉移"
	堅靭 = "堅靭"
	突擊 = "突擊"
	斬獲 = "斬獲"
	迎擊 = "迎擊"
	外交 = "外交"
	逆境 = "逆境"
	動蕩 = "動蕩"
	賦力 = "賦力"
	奇襲 = "奇襲"
	暴亂 = "暴亂"
	猛進 = "猛進"
)

const (
	BattleDamage  = "戰鬥傷害"
	CounterDamage = "迎擊傷害"
	AssaultDamage = "突擊傷害"
)

const (
	DamageToken = "DamageToken"
)

const (
	// 戰器
	Weapon = iota
	// 單位
	Unit
	// 陣略
	Strategy
	// 錦囊
	Tactics
	// 領土
	Territory
)

type CardState struct {
	RefID         string
	Name          string
	CardID        string
	Cost          int
	Color         string
	ColorCost     string
	Class         string
	Attack        int
	Defence       int
	ControlPlayer string
	Text          string
	Owner         string
	Token         []string
	Package string
}

type Player struct {
	LoseTurn int
	// Hand數量上限
	HandLimit int
	// 這回合第一個攻擊的卡牌ID
	FirstAttackCardID int
	Token             []string
}

type Game struct {
	ID           string
	CardTable    core.CardTable
	Procedure    core.Procedure
	CardState    map[string]CardState
	Turn         int
	Player       map[string]Player
	Winner       string
	CurrentPhase int
	// 進攻玩家
	OffensivePlayer string
	// 權先權玩家
	PriorityPlayer string
	// 權先權玩家的行動次數
	ActionCount map[string]int
}

var (
	ErrPhaseNotExist         = errors.New("phase not exist")
	ErrCardInfoNotExist      = errors.New("card info not exist")
	ErrYouAreNotTheCardOwner = errors.New("you are not the card owner")
	ErrTargetCardIsntMana    = errors.New("target card is not mana")
	ErrTargetManaAlreadyUsed = errors.New("target mana already used")
	ErrManaIsntEnougth       = errors.New("mana is not enought")
	ErrSlotIsntEmpty         = errors.New("slot is not empty")
	ErrUnitIsntAtSlot        = errors.New("unit isnt at alot")
)

func NewGame(ctx appengine.Context, gameId string) (Game, error) {
	var table core.CardTable
	var err error
	// 建立台面
	table = core.NewCardTable(ctx)
	// 建立A玩家牌堆
	table, err = core.AddCardStack(ctx, table, UserA+Library, Library)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Hand, Hand)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Graveyard, Graveyard)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position1, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position2, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position3, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position4, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserA+Position5, Position)
	if err != nil {
		return Game{}, err
	}
	// 建立B玩家牌堆
	table, err = core.AddCardStack(ctx, table, UserB+Library, Library)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Hand, Hand)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Graveyard, Graveyard)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position1, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position2, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position3, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position4, Position)
	if err != nil {
		return Game{}, err
	}
	table, err = core.AddCardStack(ctx, table, UserB+Position5, Position)
	if err != nil {
		return Game{}, err
	}

	playerA := Player{
		HandLimit: 7,
	}
	playerB := Player{
		HandLimit: 7,
	}
	offensivePlayer := UserA

	players := map[string]Player{}
	players[UserA] = playerA
	players[UserB] = playerB

	actionCnt := map[string]int{}
	actionCnt[UserA] = -1
	actionCnt[UserB] = -1
	actionCnt[offensivePlayer] = 0

	return Game{
		ID:              gameId,
		CardTable:       table,
		Procedure:       core.NewProcedure(ctx),
		CardState:       map[string]CardState{},
		Player:          players,
		OffensivePlayer: offensivePlayer,
		PriorityPlayer:  offensivePlayer,
		// 次數一開始是-1，方便演算法計算
		ActionCount: actionCnt,
	}, nil
}

func AddCard(ctx appengine.Context, game Game, stackName string, owner string, ref string) (Game, string, error) {
	var err error
	table, cardId, err := core.AddCard(ctx, game.CardTable, stackName, ref)
	if err != nil {
		return game, "", err
	}
	game.CardTable = table
	game, err = OnAddCard(ctx, game, cardId, ref, owner)
	if err != nil {
		return game, "", err
	}
	return game, cardId, nil
}

func AddCards(ctx appengine.Context, game Game, stackName string, owner string, ref []string) (Game, []string, error) {
	var err error
	table, cardIds, err := core.AddCards(ctx, game.CardTable, stackName, ref)
	if err != nil {
		return game, nil, err
	}
	game.CardTable = table
	for i := range cardIds {
		game, err = OnAddCard(ctx, game, cardIds[i], ref[i], owner)
		if err != nil {
			return game, nil, err
		}
	}
	return game, cardIds, nil
}

// 支付費用
// 由各個卡片實做中來呼叫
// cost的格式是"無無魏"這樣的格式
// cost的支付順序必須和cardIds給定的順序要一致
func ConsumeCost(ctx appengine.Context, game Game, user string, cost string, cardIds []string) (Game, error) {
	// 將X轉為"無"序列
	if cost == "X" {
		panic("不在這裡處理X")
	}
	var err error
	// 建立空的slot
	// 這個slot必須被填滿
	costSlot := make([]string, len([]rune(cost)))
	for _, cardId := range cardIds {
		// 支付消費
		// 填充slot
		game, err = OnConsumeCost(ctx, game, user, cost, costSlot, cardId)
		if err != nil {
			return game, err
		}
	}
	// 檢查slot是不是都被填滿了
	for _, slot := range costSlot {
		if slot == "" {
			return game, ErrManaIsntEnougth
		}
	}
	return game, nil
}

func OnAddCard(ctx appengine.Context, game Game, cardId string, refId string, owner string) (Game, error) {
	var state CardState
	switch refId {
	case "22":
		state = CardState{
			Name:          "青州探马",
			Class:         "單位~斥候",
			Cost:          1,
			Color:         ColorBlue,
			ColorCost:     ColorBlue,
			Attack:        1,
			Defence:       2,
			Text:          "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
			RefID:         refId,
			Owner:         owner,
			ControlPlayer: owner,
		}
	case "28":
		state = CardState{
			CardID:    "28",
			Name:      "三江城蛮丁",
			Cost:      2,
			Color:     ColorRed,
			ColorCost: ColorRed,
			Class:     "单位边境 ~ 南蛮/步兵",
			Package:   "乱华",
			Attack:    1,
			Defence:   1,
			Text:      "暴乱1；迎击2",
			RefID:         refId,
			Owner:         owner,
			ControlPlayer: owner,
		}
	case "85":
		state = CardState{
			Name:          "飞将的利刃·张辽",
			Class:         "无双单位 ~ 武将",
			Cost:          5,
			Color:         ColorGray,
			ColorCost:     ColorGray + ColorGray,
			Attack:        5,
			Defence:       1,
			Text:          "神速；转移；突击1。当张辽对一名对手造成伤害时，该玩家弃一张牌。你可以从手上展示一张无双名称为【吕布】的牌，若如此做，你抓一张牌。",
			RefID:         refId,
			Owner:         owner,
			ControlPlayer: owner,
		}
	case "105":
		state = CardState{
			CardID:    "105",
			Name:      "年轻贤君·孙权",
			Cost:      5,
			Color:     ColorGreen,
			ColorCost: ColorGreen + ColorGreen,
			Class:     "无双单位 ~ 主公",
			Package:   "初阵",
			Attack:    3,
			Defence:   5,
			Text:      "由你操控的其他吴势力单位各+1/+1。{通常}{X}，弃X张牌→抓X张牌。此能力每回合只能启动一次。",
			RefID:         refId,
			Owner:         owner,
			ControlPlayer: owner,
		}
	}
	game.CardState[cardId] = state
	return game, nil
}

// 支付消費
// 如何支付全部由卡牌自定
func OnConsumeCost(ctx appengine.Context, game Game, user string, cost string, costSlot []string, cardId string) (Game, error) {
	return game, nil
}

func QueryUnitInOppositePosition(ctx appengine.Context, game Game, stack string) (string, bool, error) {
	if game.CardTable.CardStack[stack].Type != Position {
		return "", false, errors.New("必須是陣地才能查詢對面的資料")
	}
	who, num := ParsePositionID(stack)
	opponent := Opponent(who)
	oppositeStack := PositionID(opponent, num)
	if len(game.CardTable.CardStack[oppositeStack].Card) == 0 {
		return "", false, nil
	}
	return game.CardTable.CardStack[oppositeStack].Card[0], true, nil
}

func IfMatchResistance(ctx appengine.Context, keyword string, game Game, cardId string) (bool, error) {
	return true, nil
}

func CardType(ctx appengine.Context, game Game, cardId string) int {
	info := game.CardState[cardId]
	if strings.Contains(info.Class, "锦囊") {
		return Tactics
	}
	return Weapon
}

// 計算基本攻擊力
func ComputeNormalAttack(ctx appengine.Context, game Game, cardId string) (int, error) {
	info := game.CardState[cardId]
	return info.Attack, nil
}

// 計算基本防禦力
// 沒有堅靭基本上都是0
func ComputeNormalDefence(ctx appengine.Context, game Game, damageType string, cardId string) (int, error) {
	// 處理堅靭
	powers, _, _, err := CheckKeyword(堅靭, ctx, game, cardId)
	if err != nil {
		return 0, err
	}
	var total int
	for _, power := range powers {
		total += power
	}
	return total, nil
}

func CheckKeyword(keyword string, ctx appengine.Context, game Game, cardId string) ([]int, []string, bool, error) {
	card := game.CardTable.Card[cardId]
	switch keyword {
	case 迎擊:
		if card.Ref == "28" {
			return []int{2}, nil, true, nil
		}
	case 突擊:
		if card.Ref == "85" {
			return []int{1}, nil, true, nil
		}
	case 致命:
		return nil, nil, false, nil
	case 堅靭:
		return nil, nil, false, nil
	//return []int{1, 1}, nil, true, nil
	case 抵抗:
		return nil, nil, false, nil
	//return nil, []string{"單位"}, true, nil
	}
	return nil, nil, false, nil
}