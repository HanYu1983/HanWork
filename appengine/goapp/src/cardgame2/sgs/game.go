package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame2/core"
	"encoding/json"
	"errors"
	"strings"
)

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
	BattleDamage  = "戰鬥傷害"
	CounterDamage = "反擊傷害"
	AssaultDamage = "突擊傷害"
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

type CardPrototype struct {
	CardID    string
	Name      string
	Cost      string
	Color     string
	ColorCost string
	Class     string
	Package   string
	Attack    string
	Defence   string
	Text      string
}

const (
	ColorBlue  = "魏"
	ColorRed   = "蜀"
	ColorGreen = "吳"
	ColorGray  = "群"
	ColorWhite = "無"
)

const (
	DamageToken = "DamageToken"
)

// 卡牌狀態
// 陣面對決的數值
type CardInfo struct {
	CardID        int
	Prototype     CardPrototype
	Cost          string
	Color         string
	ColorCost     string
	Class         string
	Attack        int
	Defence       int
	TurnPlay      int
	ControlPlayer string
	Token         []string
}

type Player struct {
	User     string
	LoseTurn int
	// Hand數量上限
	HandLimit int
	// 這回合第一個攻擊的卡牌ID
	FirstAttackCardID int
	Token             []string
}

type Buf struct {
	FromCardID int
	Turn       int
}

// 遊戲
// ID會和core.Desktop的ID一致
// 用這個ID來取得core.Desktop
// core.Desktop記錄的是卡牌的位置、面向等資訊
// 這個Game記錄的是陣面對決的遊戲狀態
type Game struct {
	ID           string
	CardInfo     []CardInfo
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

func CardType(info CardInfo) int {
	if strings.Contains(info.Class, "锦囊") {
		return Tactics
	}
	return Weapon
}

type GameWrapper struct {
	Byte []byte
}

// 讀取陣面對決
func LoadGame(ctx appengine.Context, gameID string) (Game, error) {
	key := GameKey(ctx, gameID)
	var game Game
	var err error
	var wrapper GameWrapper
	err = datastore.Get(ctx, key, &wrapper)
	if err != nil {
		return game, err
	}
	err = json.Unmarshal(wrapper.Byte, &game)
	if err != nil {
		return game, err
	}
	return game, nil
}

// 記錄陣面對決
func SaveGame(ctx appengine.Context, game Game) (Game, error) {
	var err error
	bytes, err := json.Marshal(game)
	if err != nil {
		return game, err
	}
	key := GameKey(ctx, game.ID)
	_, err = datastore.Put(ctx, key, &GameWrapper{bytes})
	if err != nil {
		return game, err
	}
	return game, nil
}

// 建立陣面對決的牌局
// 這個方法會一并建立core.Desktop的台面狀態
func CreateGame(ctx appengine.Context, gameId string) (Game, core.Desktop, error) {
	var game core.Desktop
	var err error
	// 建立台面
	game, err = core.CreateDesktop(ctx, gameId)
	if err != nil {
		return Game{}, game, err
	}
	// 建立A玩家牌堆
	game, err = core.AddCardStack(ctx, game, core.UserA+Library, Library)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Hand, Hand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Graveyard, Graveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Position1, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Position2, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Position3, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Position4, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+Position5, Position)
	if err != nil {
		return Game{}, game, err
	}
	// 建立B玩家牌堆
	game, err = core.AddCardStack(ctx, game, core.UserB+Library, Library)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Hand, Hand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+TerritoryZone, TerritoryZone)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Graveyard, Graveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Position1, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Position2, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Position3, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Position4, Position)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+Position5, Position)
	if err != nil {
		return Game{}, game, err
	}
	_, err = core.SaveDesktop(ctx, game)
	if err != nil {
		return Game{}, game, err
	}
	playerA := Player{
		User:      core.UserA,
		HandLimit: 7,
	}
	playerB := Player{
		User:      core.UserB,
		HandLimit: 7,
	}
	offensivePlayer := core.UserA

	players := map[string]Player{}
	players[core.UserA] = playerA
	players[core.UserB] = playerB

	actionCnt := map[string]int{}
	actionCnt[core.UserA] = -1
	actionCnt[core.UserB] = -1
	actionCnt[offensivePlayer] = 0
	// 建立陣面對決
	sgs := Game{
		ID:              gameId,
		Player:          players,
		OffensivePlayer: offensivePlayer,
		PriorityPlayer:  offensivePlayer,
		// 次數一開始是-1，方便演算法計算
		ActionCount: actionCnt,
	}
	sgs, err = SaveGame(ctx, sgs)
	if err != nil {
		return sgs, game, err
	}
	return sgs, game, nil
}

func SgsKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "Sgs", "SgsCard", 0, nil)
}

func CardKey(ctx appengine.Context, id string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsCard", id, 0, SgsKey(ctx))
}

func GameKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsGame", gameId, 0, SgsKey(ctx))
}
