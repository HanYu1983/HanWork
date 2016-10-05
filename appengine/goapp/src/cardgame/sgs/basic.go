package sgs

import (
	"appengine"
	_ "appengine/datastore"
	core "cardgame/core"
)

func init() {
	core.AddListener(Listen)
}

type Sgs struct {
	CurrPhase string
}

type Action struct {
	User        string
	Description string
	Parameters  interface{}
}

func CreateGame(ctx appengine.Context, gameId string) (core.Game, error) {
	var game core.Game
	var err error
	game, err = core.CreateGame(ctx, gameId)
	if err != nil {
		return core.Game{}, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-base", "base")
	if err != nil {
		return core.Game{}, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-mana", "mana")
	if err != nil {
		return core.Game{}, err
	}
	game, err = core.SaveGame(ctx, game)
	if err != nil {
		return core.Game{}, err
	}
	return game, nil
}

func InitCardSet(ctx appengine.Context, game core.Game, user string, cardIds []string) (core.Game, error) {
	var err error
	for _, cardId := range cardIds {
		game, _, err = core.AddCardTo(ctx, game, cardId, user+"-base")
		if err != nil {
			return game, err
		}
	}
	return game, nil
}

func Listen(ctx appengine.Context, game core.Game, evt string, parameters interface{}) {
	ctx.Infof("onEvent %v %v", evt, parameters.([]string)[1])
}

func CheckAction(ctx appengine.Context, game core.Game, user string) []Action {
	// if phase == set
	stackId := core.HasCardStack(ctx, game, user+"-hand")
	cards := game.CardStack[stackId].Card
	for _, card := range cards {
		var _ = card
	}
	return nil
}

func CheckAction2(ctx appengine.Context, game core.Game, card core.Card, user string) []Action {
	return []Action{Action{Description: "出id為{0}的手牌, cost為{1}", Parameters: []string{card.ID}}}
}

func PerformAction(ctx appengine.Context, game core.Game, action Action, user string) error {
	switch action.Description {
	case "{user}出id為{0}的手牌, cost為{1}":
		// TODO consume cost

		g1, err := core.CreateGoal(ctx, game.ID, core.Goal{User: core.UserSys, Description: action.Description})
		if err != nil {
			return err
		}

		err = core.AddEffect(ctx, game.ID, core.Effect{UserID: user, GoalID: g1.ID})
		if err != nil {
			return err
		}

		break
	case "發動id為{0}的卡的{1}技能":

		break
	}
	return nil
}

func StepSystem(ctx appengine.Context, game core.Game) (core.Game, error) {
	var err error
	var goal core.Goal
	var has bool
	// 取得切入的最後一個問題
	goal, has, err = core.GetLastGoal(ctx, game.ID)
	if err != nil {
		return game, err
	}
	if has == false {
		return game, nil
	}
	// 如果存在，就取得最後一個問題的前置問題
	goal, has, err = core.GetDependGoal(ctx, game.ID, goal)
	if err != nil {
		return game, err
	}
	if has == false {
		return game, nil
	}
	// 如果不是系統問題，就略過
	if goal.User != core.UserSys {
		return game, nil
	}
	// 處理系統問題
	var goals []core.Goal
	switch goal.Description {
	case "{user}出id為{0}的手牌, cost為{1}":
		goals, err = core.GetGoals(ctx, game.ID, goal.Depends)
		if err != nil {
			return game, err
		}
		goal = goals[0]
		user := goal.Parameters[0]
		cardId := goal.Parameters[1]

		game, err = core.MoveCardTo(ctx, game, core.Card{ID: cardId}, user+"-hand", user+"-field", 0)
		if err != nil {
			return game, err
		}

		core.CompleteGoal(ctx, game.ID, goal.ID, nil)
		break
	}
	return game, nil
}
