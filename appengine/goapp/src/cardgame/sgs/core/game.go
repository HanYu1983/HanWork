package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"errors"
	"strconv"
	"strings"
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
	CardID    int
	Prototype CardPrototype
	Cost      string
	Color     string
	Class     string
	Attack    int
	Defence   int
	Turn      int
}

type Player struct {
	User     string
	HP       int
	LoseTurn int
}

// 遊戲
// ID會和core.Desktop的ID一致
// 用這個ID來取得core.Desktop
// core.Desktop記錄的是卡牌的位置、面向等資訊
// 這個Game記錄的是陣面對決的遊戲狀態
type Game struct {
	ID       string
	CardInfo []CardInfo
	Turn     int
	Player   []Player
	Winner   int
}

// 行動方案
// 用來和玩家互動的，沒有存入datastore
// 系統提出行動方案後，有些參數沒有填滿
// 那些參數就由玩家來補足
// 之後再將補足完的方案回傳服務器
// 服務器有完整的參數資訊就能執行方案
type Action struct {
	FromID      int
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
	ErrManaIsntEnougth       = errors.New("mana is not enought")
	ErrSlotIsntEmpty         = errors.New("slot is not empty")
	ErrUnitIsntAtSlot        = errors.New("unit isnt at alot")
)

const (
	CardStackBase      = "base"
	CardStackHand      = "hand"
	CardStackMana      = "mana"
	CardStackGraveyard = "graveyard"
	CardStackSlot      = "slot"
	CardStackSlot1     = "slot1"
	CardStackSlot2     = "slot2"
	CardStackSlot3     = "slot3"
	CardStackSlot4     = "slot4"
	CardStackSlot5     = "slot5"
)

const (
	PhaseDraw = "draw"
	PhaseMain = "main"
)

func PlayerID(user string) int {
	if user == core.UserA {
		return 0
	}
	if user == core.UserB {
		return 1
	}
	panic("xxx")
}

// 取得陣地卡堆的ID。提高程式碼可讀性
func CardStackSlotID(user string, slotId int) string {
	return user + CardStackSlot + strconv.Itoa(slotId)
}

func ParseCardStackSlotID(cardStackSlotId string) (string, int) {
	var num int
	if strings.Contains(cardStackSlotId, CardStackSlot1) {
		num = 1
	}
	if strings.Contains(cardStackSlotId, CardStackSlot2) {
		num = 2
	}
	if strings.Contains(cardStackSlotId, CardStackSlot3) {
		num = 3
	}
	if strings.Contains(cardStackSlotId, CardStackSlot4) {
		num = 4
	}
	if strings.Contains(cardStackSlotId, CardStackSlot5) {
		num = 5
	}
	var user string
	if strings.Contains(cardStackSlotId, core.UserA) {
		user = core.UserA
	}
	if strings.Contains(cardStackSlotId, core.UserB) {
		user = core.UserB
	}
	return user, num
}

type Listener func(appengine.Context, Game, core.Desktop, string, []string) (Game, core.Desktop, error)

// 將一張卡下到陣地
// 若陣地已經有單位存在會丟出ErrSlotIsntEmpty
func PlayCardToSlot(ctx appengine.Context, game Game, stage core.Desktop, user string, slotId int, fromStack string, listener Listener, cardID int) (Game, core.Desktop, error) {
	// 判斷是不是空陣地
	slotIsEmpty := len(stage.CardStack[CardStackSlotID(user, slotId)].Card) == 0
	if slotIsEmpty == false {
		return game, stage, ErrSlotIsntEmpty
	}
	// 判斷卡牌有沒有存在指定的卡堆
	var err error
	cardIdx, err := core.CardIndexOfStack(ctx, stage, fromStack, cardID)
	if err != nil {
		return game, stage, err
	}
	// 移動卡牌
	cardId := stage.CardStack[fromStack].Card[cardIdx]
	toStack := CardStackSlotID(user, slotId)
	stage, err = core.MoveCard(ctx, stage, fromStack, toStack, 0, cardId)
	if err != nil {
		return game, stage, err
	}
	return listener(ctx, game, stage, "{userId}的{cardId}從{stackId}移動到{stackId}", []string{user, strconv.Itoa(cardID), fromStack, toStack})
}

// 指定一個單位攻擊
func UnitAttack(ctx appengine.Context, game Game, stage core.Desktop, user string, listener Listener, cardId int) (Game, core.Desktop, error) {
	// 判斷單位有沒有在陣地上
	inputCard := stage.Card[cardId]
	if stage.CardStack[inputCard.CardStack].Type != "slot" {
		return game, stage, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的陣地
	slotUser, slotNum := ParseCardStackSlotID(inputCard.CardStack)
	if slotUser != user {
		return game, stage, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方陣地ID
	opponent := core.Opponent(slotUser)
	opponentSlotId := CardStackSlotID(opponent, slotNum)
	// 取得自身攻擊力
	damage := game.CardInfo[cardId].Attack
	if len(stage.CardStack[opponentSlotId].Card) == 0 {
		// 如果對手單地上沒有單位
		// 攻擊對方玩家
		game.Player[PlayerID(opponent)].HP -= damage
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}攻擊{userId}，造成傷害{damage}", []string{user, strconv.Itoa(cardId), opponent, strconv.Itoa(damage)})
		if err != nil {
			return game, stage, err
		}
	} else {
		// 如果對手陣地上有單位
		// 攻擊那個單位
		opponentCardId := stage.CardStack[opponentSlotId].Card[0]
		game.CardInfo[opponentCardId].Defence -= damage
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}攻擊{userId}的{cardId}，造成傷害{damage}", []string{user, strconv.Itoa(cardId), opponent, strconv.Itoa(opponentCardId), strconv.Itoa(damage)})
		if err != nil {
			return game, stage, err
		}
	}
	return game, stage, nil
}

// 執行死亡判定
// 任何可能造成單位或玩家傷害的方法呼叫之後都要呼叫這個方法
// 死亡的單位會移到墓地
// 玩家若死亡也會立刻結束遊戲
func PerformDead(ctx appengine.Context, game Game, stage core.Desktop, listener Listener) (Game, core.Desktop, error) {
	var err error
	for _, card := range stage.Card {
		info := game.CardInfo[card.ID]
		if info.Defence > 0 {
			continue
		}
		fromStack := card.CardStack
		toStack := card.Owner + CardStackGraveyard
		stage, err = core.MoveCard(ctx, stage, fromStack, toStack, 0, card.ID)
		if err != nil {
			return game, stage, err
		}
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}死亡，從{stackId}移到{stackId}", []string{card.Owner, strconv.Itoa(card.ID), fromStack, toStack})
		if err != nil {
			return game, stage, err
		}
	}
	for idx, player := range game.Player {
		if player.HP > 0 {
			continue
		}
		game.Winner = idx
		game, stage, err = listener(ctx, game, stage, "{userId}勝利", []string{player.User})
		if err != nil {
			return game, stage, err
		}
	}
	return game, stage, nil
}

func X2Cost(cnt int) string {
	str := ""
	for i := 0; i < cnt; i++ {
		str += "無"
	}
	return str
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
// 建立場上所有牌堆（手牌、本國、地、墓地、陣地）
func CreateGame(ctx appengine.Context, gameId string) (Game, core.Desktop, error) {
	var game core.Desktop
	var err error
	// 建立台面
	game, err = core.CreateDesktop(ctx, gameId)
	if err != nil {
		return Game{}, game, err
	}
	// 建立A玩家牌堆
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackSlot1, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackSlot2, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackSlot3, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackSlot4, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserA+CardStackSlot5, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	// 建立B玩家牌堆
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackSlot1, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackSlot2, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackSlot3, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackSlot4, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.AddCardStack(ctx, game, core.UserB+CardStackSlot5, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	_, err = core.SaveDesktop(ctx, game)
	if err != nil {
		return Game{}, game, err
	}
	// 建立陣面對決
	sgs := Game{ID: gameId, Player: make([]Player, 2)}
	sgs, err = SaveGame(ctx, sgs)
	return sgs, game, err
}
