package sgs

import (
	"appengine"
	core "cardgame/core"
	"encoding/json"
)

type SgsError string

func (err SgsError) Error() string {
	return string(err)
}

func AddEffectFromAction(ctx appengine.Context, gameId string, user string, action Action, cardId string) error {
	payload, err := json.Marshal(action)
	if err != nil {
		return err
	}
	// 再放入效果
	g1, err := core.CreateGoal(ctx, gameId, core.Goal{
		User:        core.UserSys,
		Description: "玩家{0}觸發{1}的能力{2}",
		Parameters:  []string{user, cardId, string(payload)},
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
func ChangeCardDirection(ctx appengine.Context, cardId string, direction int) core.FuncMapCard {
	return func(ctx appengine.Context, stage core.Game, currCard core.Card) (core.Card, error) {
		if currCard.ID == cardId {
			currCard.Direction = direction
		}
		return currCard, nil
	}
}

func GetMaybeUsefulCard(ctx appengine.Context, stage core.Game, user string) []core.Card {
	cards := []core.Card{}
	cards = append(cards, stage.CardStack[core.HasCardStack(ctx, stage, user+CardStackMana)].Card...)
	cards = append(cards, stage.CardStack[core.HasCardStack(ctx, stage, user+CardStackSlot)].Card...)
	cards = append(cards, stage.CardStack[core.HasCardStack(ctx, stage, user+CardStackHand)].Card...)
	cards = append(cards, stage.CardStack[core.HasCardStack(ctx, stage, user+CardStackGraveyard)].Card...)
	return cards
}

func CheckCanConsumeCost(ctx appengine.Context, game Game, stage core.Game, user string, card core.Card) ([]core.Card, error) {
	return []core.Card{}, nil
}

func MapCardsToCardIDs(ctx appengine.Context, card []core.Card) []string {
	return []string{}
}

func CheckHasXUnitInSlot(ctx appengine.Context, game Game, stage core.Game, unitCnt int, user string) ([]core.Card, error) {
	return []core.Card{}, nil
}

func FormatCost(ctx appengine.Context, info CardInfo) string {
	return ""
}

func IsPhase(ctx appengine.Context, game Game, phase string) bool {
	return false
}

func IsCardInCardStack(ctx appengine.Context, stage core.Game, stackName string, card core.Card) bool {
	return core.HasCardInStack(ctx, stage, stackName, card) != -1
}

func CheckHasPutManaInThisTurn(ctx appengine.Context, game Game, stage core.Game) bool {
	return false
}

func GetEmptySlotNeighbor(ctx appengine.Context, game Game, stage core.Game, user string, slotId int) []int {
	return []int{}
}

func GetCardSlot(ctx appengine.Context, game Game, stage core.Game, user string, card core.Card) int {
	return 0
}
