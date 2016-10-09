package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"encoding/json"
	"strconv"
)

type SgsError string

func (err SgsError) Error() string {
	return string(err)
}

func AddEffectFromAction(ctx appengine.Context, gameId string, user string, action Action, cardId int) error {
	payload, err := json.Marshal(action)
	if err != nil {
		return err
	}
	// 再放入效果
	g1, err := core.CreateGoal(ctx, gameId, core.Goal{
		User:        core.UserSys,
		Description: "玩家{0}觸發{1}的能力{2}",
		Parameters:  []string{user, strconv.Itoa(cardId), string(payload)},
	})
	if err != nil {
		return err
	}
	err = core.AddEffect(ctx, gameId, core.Effect{UserID: user, GoalID: g1.ID})
	if err != nil {
		return err
	}
	return nil
}

// 改變指定card的方向
/*
func ChangeCardDirection(ctx appengine.Context, cardId string, direction int) core.FuncMapCard {
	return func(ctx appengine.Context, stage core.Desktop, currCard core.Card) (core.Card, error) {
		if currCard.ID == cardId {
			currCard.Direction = direction
		}
		return currCard, nil
	}
}
*/
func GetMaybeUsefulCard(ctx appengine.Context, stage core.Desktop, user string) []int {
	cards := []int{}
	cards = append(cards, stage.CardStack[user+CardStackMana].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot].Card...)
	cards = append(cards, stage.CardStack[user+CardStackHand].Card...)
	cards = append(cards, stage.CardStack[user+CardStackGraveyard].Card...)
	return cards
}

func CheckCanConsumeCost(ctx appengine.Context, game Game, stage core.Desktop, user string, card core.Card) ([]core.Card, error) {
	return []core.Card{}, nil
}

func MapCardsToCardIDs(ctx appengine.Context, card []core.Card) []string {
	return []string{}
}

func MapStringsToInts(ctx appengine.Context, ss []string) ([]int, error) {
	return []int{}, nil
}

func CheckHasXUnitInSlot(ctx appengine.Context, game Game, stage core.Desktop, unitCnt int, user string) ([]core.Card, error) {
	return []core.Card{}, nil
}

func FormatCost(ctx appengine.Context, info CardInfo) string {
	return ""
}

func IsPhase(ctx appengine.Context, game Game, phase string) bool {
	return false
}

func IsCardInCardStack(ctx appengine.Context, stage core.Desktop, stackName string, card core.Card) bool {
	_, err := core.CardIndexOfStack(ctx, stage, stackName, card.ID)
	return err == nil
}

func CheckHasPutManaInThisTurn(ctx appengine.Context, game Game, stage core.Desktop) bool {
	return false
}

func GetEmptySlotNeighbor(ctx appengine.Context, game Game, stage core.Desktop, user string, slotId int) []int {
	return []int{}
}

func GetCardSlot(ctx appengine.Context, game Game, stage core.Desktop, user string, card core.Card) int {
	return 0
}
