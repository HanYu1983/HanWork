package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"errors"
)

type Card struct {
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

func SgsKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "Sgs", "SgsCard", 0, nil)
}

func CardKey(ctx appengine.Context, id string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsCard", id, 0, SgsKey(ctx))
}

func GameKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsGame", gameId, 0, SgsKey(ctx))
}

// 卡牌狀態
// 陣面對決的數值
type CardInfo struct {
	CardID    string
	Prototype Card
	Current   Card
	Turn      int
}

// 遊戲
// ID會和core.Game的ID一致
// 用這個ID來取得core.Game
// core.Game記錄的是卡牌的位置、面向等資訊
// 這個Game記錄的是陣面對決的遊戲狀態
type Game struct {
	ID           string
	Phase        []string
	CurrentPhase int
	CardInfo     []CardInfo
	SlotA        []string
	SlotB        []string
	Turn         int
}

// 行動方案
// 用來和玩家互動的，沒有存入datastore
// 系統提出行動方案後，有些參數沒有填滿
// 那些參數就由玩家來補足
// 之後再將補足完的方案回傳服務器
// 服務器有完整的參數資訊就能執行方案
type Action struct {
	FromID      string
	User        string
	Description string
	Parameters  map[string]interface{}
}

var (
	ErrPhaseNotExist         = errors.New("phase not exist")
	ErrCardInfoNotExist      = errors.New("card info not exist")
	ErrYouAreNotTheCardOwner = errors.New("you are not the card owner")
	ErrTargetCardIsntMana    = errors.New("target card is not mana")
	ErrTargetManaAlreadyUsed = errors.New("target mana already used")
	ErrManaIsntEnougth       = errors.New("mana is not enought ")
)

const (
	CardStackBase      = "base"
	CardStackHand      = "hand"
	CardStackMana      = "mana"
	CardStackGraveyard = "graveyard"
	CardStackSlot      = "slot"
)

const (
	PhaseDraw = "draw"
	PhaseMain = "main"
)

// 建立陣面對決的牌局
// 這個方法會一并建立core.Game的台面狀態
// 建立場上所有牌堆（手牌、本國、地、墓地、陣地）
func CreateGame(ctx appengine.Context, gameId string) (Game, core.Game, error) {
	var game core.Game
	var err error
	// 建立台面
	game, err = core.CreateGame(ctx, gameId)
	if err != nil {
		return Game{}, game, err
	}
	// 建立A玩家牌堆
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackSlot, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	// 建立B玩家牌堆
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackSlot, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	_, err = core.SaveGame(ctx, game)
	if err != nil {
		return Game{}, game, err
	}
	// 建立陣面對決
	sgs := Game{ID: gameId, SlotA: make([]string, 5), SlotB: make([]string, 5)}
	sgs, err = SaveGame(ctx, sgs)
	return sgs, game, err
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

func HasPhase(ctx appengine.Context, game Game, phase string) int {
	for idx, p := range game.Phase {
		if p == phase {
			return idx
		}
	}
	return -1
}

func JumpToPhase(ctx appengine.Context, game Game, phase string, phaseIdx int) (Game, error) {
	if phaseIdx != -1 {
		game.CurrentPhase = phaseIdx % len(game.Phase)
		return game, nil
	}

	idx := HasPhase(ctx, game, phase)
	if idx != -1 {
		game.CurrentPhase = idx
		return game, nil
	}

	return game, ErrPhaseNotExist
}

func X2Cost(cnt int) string {
	str := ""
	for i := 0; i < cnt; i++ {
		str += "無"
	}
	return str
}
