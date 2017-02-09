package sgs

import (
	"appengine"
	core "cardgame3/core"
	"github.com/satori/go.uuid"
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


type CardState struct {
	RefID         string
	Name string
	CardID        string
	Cost          int
	Color         string
	ColorCost     string
	Class         string
	Attack        int
	Defence       int
	ControlPlayer string
	Text string
	Owner         string
	Token         []string
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

func NewGame(ctx appengine.Context) (Game, error) {
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
		ID:              uuid.NewV4().String(),
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

func OnAddCard(ctx appengine.Context, game Game, cardId string, refId string, owner string) (Game, error) {
	var state CardState
	switch refId {
	case "22":
		state = CardState{
			Name : "青州探马",
			Class : "單位~斥候",
			Cost : 1,
			Color : ColorBlue,
			ColorCost : ColorBlue,
			Attack : 1,
			Defence : 2,
			Text : "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
			RefID: refId,
			Owner: owner,
			ControlPlayer:owner,
		}

	}
	game.CardState[cardId] = state
	return game, nil
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