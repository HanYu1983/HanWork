package core

import (
	"appengine"
	"errors"
	"github.com/satori/go.uuid"
)

// 卡牌面向
const (
	FaceClose = 0
	FaceOpen  = 1
)

const (
	DirectionUntap = 0
	DirectionTap   = 90
)

type CardStack struct {
	Type string
	Card []string
}

type Card struct {
	ID        string
	Ref       string
	Face      int
	Direction int
	Owner     string
	CardStack string
}

// 資料設計應該要仿照關聯式資料庫才正確
type CardTable struct {
	ID string
	Card map[string]Card
	CardStack map[string]CardStack
}

var (
	ErrCardStackAlreadyExist = errors.New("card stack already exist")
	ErrCardStackNotExist     = errors.New("card stack not exist")
	ErrCardNotExist          = errors.New("card not exist")
)

func NewCardTable(id string) CardTable {
	return CardTable{
		ID: id,
		Card: map[string]Card{},
		CardStack: map[string]CardStack{},
	}
}

func AddCardStack(ctx appengine.Context, desk CardTable, stackName string, t string) (CardTable, error) {
	_, has := desk.CardStack[stackName]
	if has {
		return desk, ErrCardStackAlreadyExist
	}
	desk.CardStack[stackName] = CardStack{Type: t}
	return desk, nil
}

func AddCard(ctx appengine.Context, desk CardTable, stackName string, owner string, ref string) (CardTable, string, error) {
	_, has := desk.CardStack[stackName]
	if has == false {
		return desk, "", ErrCardStackNotExist
	}
	cardId := uuid.NewV4().String()
	desk.Card[cardId] = Card{ID: cardId, Ref: ref, Owner: owner, CardStack: stackName}

	cardStack := desk.CardStack[stackName]
	cardStack.Card = append(cardStack.Card, cardId)
	desk.CardStack[stackName] = cardStack
	return desk, cardId, nil
}

func AddCards(ctx appengine.Context, desk CardTable, stackName string, owner string, refs []string) (CardTable, []string, error) {
	var cards []string
	var card string
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

func CardIndexOfStack(ctx appengine.Context, desk CardTable, stackName string, cardId string) (int, error) {
	for idx, currId := range desk.CardStack[stackName].Card {
		if currId == cardId {
			return idx, nil
		}
	}
	return 0, ErrCardNotExist
}

func MoveCard(ctx appengine.Context, desk CardTable, fromStack string, toStack string, index int, cardId string) (CardTable, error) {
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
	var total []string
	total = append(total, head...)
	total = append(total, cardId)
	total = append(total, tail...)
	// 將那張卡加到toStack
	stack = desk.CardStack[toStack]
	stack.Card = total
	desk.CardStack[toStack] = stack

	card := desk.Card[cardId]
	card.CardStack = toStack
	desk.Card[cardId] = card
	return desk, nil
}

func TopCardInCardStack(ctx appengine.Context, desk CardTable, stackID string) (string, error) {
	var has bool
	_, has = desk.CardStack[stackID]
	if has == false {
		return "", ErrCardStackNotExist
	}
	length := len(desk.CardStack[stackID].Card)
	if length == 0 {
		return "", ErrCardNotExist
	}
	return desk.CardStack[stackID].Card[length-1], nil
}
