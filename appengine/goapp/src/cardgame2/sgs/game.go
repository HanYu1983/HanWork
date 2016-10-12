package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame2/core"
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
	UntapStep = iota
	// 準備步驟
	PreparedStep
	// 抓牌步驟
	DrawStep
	// 行動階段
	ActionPhase
	// 結束步驟
	EndStep
	// 棄牌步驟
	DiscardStep
	//
	PhaseCount
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
	ControlPlayer int
}

type Player struct {
	User     string
	HP       int
	LoseTurn int
	// Hand數量上限
	HandLimit int
	// 這回合第一個攻擊的卡牌ID
	FirstAttackCardID int
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
	Player       []Player
	Winner       int
	CurrentPhase int
	// 進攻玩家
	OffensivePlayer int
	// 權先權玩家
	PriorityPlayer int
	// 權先權玩家的行動次數
	ActionCount []int
}

// 取得Player的ID
func PlayerID(user string) int {
	if user == core.UserA {
		return 0
	}
	if user == core.UserB {
		return 1
	}
	panic("xxx")
}

func CardType(info CardInfo) int {
	if strings.Contains(info.Class, "锦囊") {
		return Tactics
	}
	return Weapon
}

// 讀取陣面對決
func LoadGame(ctx appengine.Context, gameID string) (Game, error) {
	key := GameKey(ctx, gameID)
	var game Game
	var err error
	err = datastore.Get(ctx, key, &game)
	return game, err
}

// 記錄陣面對決
func SaveGame(ctx appengine.Context, game Game) (Game, error) {
	key := GameKey(ctx, game.ID)
	var err error
	_, err = datastore.Put(ctx, key, &game)
	return game, err
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
	// 建立陣面對決
	sgs := Game{
		ID:              gameId,
		Player:          make([]Player, 2),
		OffensivePlayer: PlayerID(core.UserA),
		ActionCount:     make([]int, 2),
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
