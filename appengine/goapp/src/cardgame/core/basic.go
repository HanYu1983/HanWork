package core

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
	"github.com/satori/go.uuid"
)

// 卡牌
// 記錄它對應到的遊戲卡ID(Ref)
// 翻開還是蓋著(Face)
// 所有者是誰(Owner)
type Card struct {
	ID        string
	Ref       string
	Face      int
	Direction int
	Owner     string
}

// 牌堆
// Type用來方便分別是不是手牌或者本國之類(可自行定義為hand和base)
// Card的List資料結構直接對應到現實牌堆的組成
// 比如順序
// 索引0代表牌底、索引越大代表越上方的牌
type CardStack struct {
	ID   string
	Type string
	Card []Card
}

// 牌局
// 只需要記錄有哪些牌堆
type Game struct {
	ID           string
	Phase        []string
	CurrentPhase int
	CardStack    []CardStack
}

// 卡牌面向
const (
	FaceClose = 0
	FaceOpen  = 1
)

const (
	UserA   = "A"
	UserB   = "B"
	UserSys = "sys"
)

const (
	DirectionUntap = 0
	DirectionTap   = 90
)

var (
	ErrPhaseNotExist         = errors.New("phase not exist")
	ErrCardStackAlreadyExist = errors.New("card stack already exist")
	ErrCardStackNotExist     = errors.New("card stack not exist")
	ErrCardNotExist          = errors.New("card not exist")
)

// datastore直接存struct會有很多限制
// 所以要先轉成json string
// GameWrapper單純用來承載
type GameWrapper struct {
	Bytes []byte
}

func SaveGame(ctx appengine.Context, game Game) (Game, error) {
	var err error
	// 轉成json
	bytes, err := json.Marshal(game)
	if err != nil {
		return game, err
	}
	key := GameKey(ctx, game.ID)
	// 存入GameWrapper
	_, err = datastore.Put(ctx, key, &GameWrapper{Bytes: bytes})
	return game, err
}

func LoadGame(ctx appengine.Context, gameID string) (Game, error) {
	key := GameKey(ctx, gameID)
	var err error
	var wrapper GameWrapper
	err = datastore.Get(ctx, key, &wrapper)
	if err != nil {
		return Game{}, err
	}
	var game Game
	err = json.Unmarshal(wrapper.Bytes, &game)
	if err != nil {
		return Game{}, err
	}
	return game, nil
}

// 建立一場牌局
func CreateGame(ctx appengine.Context, gameID string) (Game, error) {
	game := Game{ID: gameID, CardStack: []CardStack{}}
	return SaveGame(ctx, game)
}

// 刪除一場牌局
// 用來釋放資源
func DeleteGame(ctx appengine.Context, gameID string) error {
	key := GameKey(ctx, gameID)
	err := datastore.Delete(ctx, key)
	return err
}

func DefPhase(ctx appengine.Context, game Game, phase []string) (Game, error) {
	game.Phase = phase
	return game, nil
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

// 指定牌堆是否存在
// 回傳索引
// -1代表不存在
func HasCardStack(ctx appengine.Context, game Game, stackName string) int {
	for idx, stack := range game.CardStack {
		if stack.ID == stackName {
			return idx
		}
	}
	return -1
}

// 建立牌堆
// 若建立重覆的牌堆會吐出ErrCardStackAlreadyExist
func CreateCardStack(ctx appengine.Context, game Game, stackName string, stackType string) (Game, error) {
	has := HasCardStack(ctx, game, stackName)
	if has != -1 {
		return game, ErrCardStackAlreadyExist
	}
	game.CardStack = append(game.CardStack, CardStack{ID: stackName, Type: stackType, Card: []Card{}})
	return game, nil
}

// 建立卡牌並加入牌堆
// 指定的牌堆不存在的話會吐出ErrCardStackNotExist
func AddCardTo(ctx appengine.Context, game Game, cardRef string, stackName string, owner string) (Game, Card, error) {
	has := HasCardStack(ctx, game, stackName)
	if has == -1 {
		return game, Card{}, ErrCardStackNotExist
	}
	card := Card{ID: uuid.NewV4().String(), Ref: cardRef, Owner: owner}
	targetCardStack := game.CardStack[has]
	targetCardStack.Card = append(targetCardStack.Card, card)
	game.CardStack[has] = targetCardStack

	var err error
	err = NotifyEvent(ctx, game, "AddCardTo", []string{cardRef, stackName})
	if err != nil {
		return game, card, err
	}
	return game, card, nil
}

func AddCardsTo(ctx appengine.Context, game Game, cardRefs []string, stackName string, owner string) (Game, []Card, error) {
	var cards []Card
	var card Card
	var err error
	for _, cardRef := range cardRefs {
		game, card, err = AddCardTo(ctx, game, cardRef, stackName, owner)
		if err != nil {
			return game, nil, err
		}
		cards = append(cards, card)
	}
	return game, cards, nil
}

func MapCard(ctx appengine.Context, game Game, fn func(appengine.Context, Game, Card) (Card, error)) (Game, error) {
	for _, stk := range game.CardStack {
		for idx, card := range stk.Card {
			updatedCard, err := fn(ctx, game, card)
			if err != nil {
				return game, err
			}
			stk.Card[idx] = updatedCard
		}
	}
	return game, nil
}

// 牌堆中只否有指定的卡
// 回傳索引
// 若沒有-回傳-1
func HasCardInStack(ctx appengine.Context, game Game, stackName string, card Card) int {
	has := HasCardStack(ctx, game, stackName)
	if has == -1 {
		return -1
	}
	for idx, c := range game.CardStack[has].Card {
		if c.ID == card.ID {
			return idx
		}
	}
	return -1
}

// 移動卡
// 指定的卡不存在的話吐出ErrCardNotExist
// 指定的牌堆不存在的話吐出ErrCardStackNotExist
func MoveCardTo(ctx appengine.Context, game Game, card Card, fromStackName string, toStackName string, index int) (Game, error) {
	hasFrom := HasCardStack(ctx, game, fromStackName)
	if hasFrom == -1 {
		return game, ErrCardStackNotExist
	}
	hasTo := HasCardStack(ctx, game, toStackName)
	if hasTo == -1 {
		return game, ErrCardStackNotExist
	}
	cardIndex := HasCardInStack(ctx, game, fromStackName, card)
	if cardIndex == -1 {
		return game, ErrCardNotExist
	}
	fromStack := game.CardStack[hasFrom]
	toStack := game.CardStack[hasTo]

	fromStack.Card = append(fromStack.Card[:cardIndex], fromStack.Card[cardIndex+1:]...)

	var top int
	top = len(toStack.Card) - index
	if top < 0 {
		top = 0
	}
	head := toStack.Card[:top]
	tail := toStack.Card[top:]
	total := []Card{}
	total = append(total, head...)
	total = append(total, card)
	total = append(total, tail...)
	toStack.Card = total

	game.CardStack[hasFrom] = fromStack
	game.CardStack[hasTo] = toStack
	return game, nil
}
