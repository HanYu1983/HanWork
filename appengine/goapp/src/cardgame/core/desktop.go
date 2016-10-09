package core

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
)

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

type CardStack struct {
	Type string
	// CardStack -> Card 一對多關聯
	Card []int
}

type Card struct {
	ID        int
	Ref       string
	Face      int
	Direction int
	Owner     string
	CardStack string
}

// 資料設計應該要仿照關聯式資料庫才正確
type Desktop struct {
	ID string
	// 無固定長度的List代表沒有可信任主鍵，使用自動遞增的長度當主鍵
	// Card: primary key int auto_increment
	Card []Card
	// Map 代表有可信任主鍵，string當主鍵
	// 要用int當主鍵使用Array(固定長度的List)
	// CardStack: primary key varchar
	CardStack map[string]CardStack
}

var (
	ErrCardStackAlreadyExist = errors.New("stack already exist")
	ErrCardStackNotExist     = errors.New("stack not exist")
	ErrCardNotExist          = errors.New("card not exist")
)

func AddCardStack(ctx appengine.Context, desk Desktop, stackName string, t string) (Desktop, error) {
	_, has := desk.CardStack[stackName]
	if has {
		return desk, ErrCardStackAlreadyExist
	}
	desk.CardStack[stackName] = CardStack{Type: t}
	return desk, nil
}

func AddCard(ctx appengine.Context, desk Desktop, stackName string, owner string, ref string) (Desktop, int, error) {
	_, has := desk.CardStack[stackName]
	if has == false {
		return desk, 0, ErrCardStackNotExist
	}
	cardId := len(desk.Card)
	desk.Card = append(desk.Card, Card{ID: cardId, Ref: ref, Owner: owner, CardStack: stackName})

	cardStack := desk.CardStack[stackName]
	cardStack.Card = append(cardStack.Card, cardId)
	desk.CardStack[stackName] = cardStack
	return desk, cardId, nil
}

func AddCards(ctx appengine.Context, desk Desktop, stackName string, owner string, refs []string) (Desktop, []int, error) {
	var cards []int
	var card int
	var err error
	for _, ref := range refs {
		desk, card, err = AddCard(ctx, desk, stackName, owner, ref)
		if err != nil {
			return desk, nil, err
		}
		cards = append(cards, card)
	}
	return desk, cards, nil
}

func CardIndexOfStack(ctx appengine.Context, desk Desktop, stackName string, cardId int) (int, error) {
	for idx, currId := range desk.CardStack[stackName].Card {
		if currId == cardId {
			return idx, nil
		}
	}
	return 0, ErrCardNotExist
}

func MoveCard(ctx appengine.Context, desk Desktop, fromStack string, toStack string, index int, cardId int) (Desktop, error) {
	var has bool
	_, has = desk.CardStack[fromStack]
	if has == false {
		return desk, ErrCardStackNotExist
	}
	_, has = desk.CardStack[toStack]
	if has == false {
		return desk, ErrCardStackNotExist
	}
	var err error
	cardIndex, err := CardIndexOfStack(ctx, desk, fromStack, cardId)
	if err != nil {
		return desk, err
	}
	// 從fromStack抽出那張卡
	var stack CardStack
	stack = desk.CardStack[fromStack]
	stack.Card = append(stack.Card[:cardIndex], stack.Card[cardIndex+1:]...)
	desk.CardStack[fromStack] = stack

	var top int
	top = len(desk.CardStack[toStack].Card) - index
	if top < 0 {
		top = 0
	}
	head := desk.CardStack[toStack].Card[:top]
	tail := desk.CardStack[toStack].Card[top:]
	var total []int
	total = append(total, head...)
	total = append(total, cardId)
	total = append(total, tail...)
	// 將那張卡加到toStack
	stack = desk.CardStack[toStack]
	stack.Card = total
	desk.CardStack[toStack] = stack
	//
	desk.Card[cardId].CardStack = toStack
	return desk, nil
}

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

// 建立一場牌局
func CreateDesktop(ctx appengine.Context, gameID string) (Desktop, error) {
	game := Desktop{ID: gameID, CardStack: map[string]CardStack{}}
	return SaveDesktop(ctx, game)
}

// 刪除一場牌局
// 用來釋放資源
func DeleteDesktop(ctx appengine.Context, gameID string) error {
	key := GameKey(ctx, gameID)
	err := datastore.Delete(ctx, key)
	return err
}

// datastore直接存struct會有很多限制
// 所以要先轉成json string
// GameWrapper單純用來承載
type GameWrapper struct {
	Bytes []byte
}

func SaveDesktop(ctx appengine.Context, game Desktop) (Desktop, error) {
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

func LoadDesktop(ctx appengine.Context, gameID string) (Desktop, error) {
	key := GameKey(ctx, gameID)
	var err error
	var wrapper GameWrapper
	err = datastore.Get(ctx, key, &wrapper)
	if err != nil {
		return Desktop{}, err
	}
	var game Desktop
	err = json.Unmarshal(wrapper.Bytes, &game)
	if err != nil {
		return Desktop{}, err
	}
	return game, nil
}
