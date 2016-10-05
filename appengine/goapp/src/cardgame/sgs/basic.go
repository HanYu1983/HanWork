package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
)

func init() {
	core.AddListener(Listen)
}

type CardInfo struct {
	CardID    string
	Prototype Card
	Current   Card
}

type Game struct {
	ID        string
	CurrPhase string
	CardInfo  []CardInfo
}

type Action struct {
	User        string
	Description string
	Parameters  interface{}
}

func GetCardInfo(ctx appengine.Context, sgs Game, card core.Card) (Game, CardInfo, error) {
	for _, info := range sgs.CardInfo {
		if info.CardID == card.ID {
			return sgs, info, nil
		}
	}
	var err error
	info, err := GetCard(ctx, card.ID)
	if err != nil {
		return sgs, CardInfo{}, err
	}
	cardInfo := CardInfo{card.ID, info, info}
	sgs.CardInfo = append(sgs.CardInfo, cardInfo)
	return sgs, cardInfo, nil
}

func CreateGame(ctx appengine.Context, gameId string) (Game, error) {
	var game core.Game
	var err error
	game, err = core.CreateGame(ctx, gameId)
	if err != nil {
		return Game{}, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-base", "base")
	if err != nil {
		return Game{}, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-mana", "mana")
	if err != nil {
		return Game{}, err
	}
	_, err = core.SaveGame(ctx, game)
	if err != nil {
		return Game{}, err
	}
	sgs := Game{ID: gameId}
	return SaveGame(ctx, sgs)
}

func LoadGame(ctx appengine.Context, gameID string) (Game, error) {
	key := GameKey(ctx, gameID)
	var game Game
	var err error
	err = datastore.Get(ctx, key, &game)
	return game, err
}

func SaveGame(ctx appengine.Context, game Game) (Game, error) {
	key := GameKey(ctx, game.ID)
	var err error
	_, err = datastore.Put(ctx, key, &game)
	return game, err
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

// 處理台面變動事件
func Listen(ctx appengine.Context, game core.Game, evt string, parameters interface{}) error {
	// ctx.Infof("onEvent %v %v", evt, parameters.([]string)[1])
	var err error
	sgs, err := LoadGame(ctx, game.ID)
	_, err = SaveGame(ctx, sgs)
	return err
}

// 核對可發動能力
// 每個玩家在各個階段可以呼叫，取得可以使用的動作
// 這個方法會巡訪指定玩家的所有卡，將所有動作方案收集起來
// 每個動作方案會起錄它的需求Cost，需求Cost會是審核過可以支付的
// 之後玩家再呼叫PerformAction
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

// 執行動作
// 這個方法會將需求支付解決
// 然後將這個動作方案轉變成Goal和Effect
// 會自動判斷有沒有在切入中
// 若有，發生切入
// 若沒有，新增切入堆疊
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
		// TODO consume cost
		// 以下為決鬥實做
		g1, err := core.CreateGoal(ctx, game.ID, core.Goal{User: user, Description: "select your 1 unit, and enemy 1 unit"})
		if err != nil {
			return err
		}
		g2, err := core.CreateGoal(ctx, game.ID, core.Goal{User: core.UserSys, Description: "duel each", Depends: []int64{g1.ID}})
		if err != nil {
			return err
		}
		err = core.AddEffect(ctx, game.ID, core.Effect{UserID: user, GoalID: g2.ID})
		if err != nil {
			return err
		}
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

		var sgs Game
		var err error
		sgs, err = LoadGame(ctx, game.ID)
		_, err = SaveGame(ctx, sgs)
		if err != nil {
			return game, err
		}

		// core的任一方法可能都會觸發Listener事件
		// 所以遊戲狀態sgs一定要各別在操作完core.Game前後做Load和Save
		// 不然遊戲狀態會不一致
		game, err = core.MoveCardTo(ctx, game, core.Card{ID: cardId}, user+"-hand", user+"-field", 0)
		if err != nil {
			return game, err
		}

		sgs, err = LoadGame(ctx, game.ID)
		_, err = SaveGame(ctx, sgs)
		if err != nil {
			return game, err
		}

		core.CompleteGoal(ctx, game.ID, goal.ID, nil)
		break
	}
	return game, nil
}
