package cardgame

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
)

type Card struct {
	ID    int64
	Ref   string
	Face  int
	Owner string
}

type CardStack struct {
	ID   string
	Type string
	Card []Card
}

type Game struct {
	ID           string
	Phase        []string
	CurrentPhase int
	CardStack    []CardStack
}

const (
	FaceOpen  = 0
	FaceClose = 1
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

func CreateGame(ctx appengine.Context, id string) (Game, error) {
	game := Game{ID: id, CardStack: []CardStack{}}
	return SaveGame(ctx, game)
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

func HasCardStack(ctx appengine.Context, game Game, stackName string) int {
	for idx, stack := range game.CardStack {
		if stack.ID == stackName {
			return idx
		}
	}
	return -1
}

// 為了區分不同一個牌局的卡牌
// 必須將卡牌全部存在所屬game的主鍵之下
func CreateCard(ctx appengine.Context, game Game, ref string) (Card, error) {
	cardkey := datastore.NewIncompleteKey(ctx, "Card", GameKey(ctx, game.ID))
	card := Card{Ref: ref}
	var err error
	updatedKey, err := datastore.Put(ctx, cardkey, &card)
	if err != nil {
		return Card{}, err
	}
	card.ID = updatedKey.IntID()
	return card, nil
}

func CreateCardStack(ctx appengine.Context, game Game, stackName string, stackType string) (Game, error) {
	has := HasCardStack(ctx, game, stackName)
	if has != -1 {
		return game, ErrCardStackAlreadyExist
	}
	game.CardStack = append(game.CardStack, CardStack{ID: stackName, Type: stackType, Card: []Card{}})
	return game, nil
}

func AddCardTo(ctx appengine.Context, game Game, card Card, stackName string) (Game, error) {
	has := HasCardStack(ctx, game, stackName)
	if has == -1 {
		return game, ErrCardStackNotExist
	}
	targetCardStack := game.CardStack[has]
	targetCardStack.Card = append(targetCardStack.Card, card)
	game.CardStack[has] = targetCardStack
	return game, nil
}

func HasCardInStack(ctx appengine.Context, game Game, stackName string, card Card) int {
	has := HasCardStack(ctx, game, stackName)
	if has == -1 {
		return -1
	}
	for idx, c := range game.CardStack[has].Card {
		if c == card {
			return idx
		}
	}
	return -1
}

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
