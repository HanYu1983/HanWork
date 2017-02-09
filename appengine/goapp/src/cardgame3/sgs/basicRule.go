package sgs

import (
	"net/url"
	"strconv"
	"errors"
	"appengine"
	core "cardgame3/core"
)

// 讓過
// 非常重要的基本流程
// 透過讓過來前進到下一個階段
func Pass(ctx appengine.Context, game Game, user string) (Game, error) {
	p := game.Procedure
	// 堆疊不為空不能讓出優先權
	if len(p.Block) != 0 {
		return game, errors.New("堆疊不為空不能讓出優先權")
	}
	// 如果是重置或棄牌步驟，主動玩家呼叫讓過就是直接跳過
	if game.CurrentPhase == UntapStep || game.CurrentPhase == DiscardStep {
		if user == game.OffensivePlayer {
			return NextPhaseProcedure(ctx, game, 1, "讓過")
		}
	}
	// 沒有優先權的不能讓出優先權
	if game.PriorityPlayer != user {
		return game, errors.New("優先權在對方身上")
	}
	// 如果讓出的玩家沒有行動過並且上一個優先權的玩家也沒行動過
	// 就跳到下一個階段
	if game.ActionCount[game.PriorityPlayer] == 0 {
		lastPlayer := Opponent(user)
		if game.ActionCount[lastPlayer] == 0 {
			return NextPhaseProcedure(ctx, game, 1, "讓過")
		}
	}
	// 交換優先權並重設行動次數
	game.PriorityPlayer = Opponent(user)
	game.ActionCount[game.PriorityPlayer] = 0
	return game, nil
}

func NextPhase(ctx appengine.Context, game Game, step int) (Game, error) {
	game.CurrentPhase = (game.CurrentPhase + step) % PhaseCount
	game.PriorityPlayer = game.OffensivePlayer
	game.ActionCount[UserA] = -1
	game.ActionCount[UserB] = -1
	game.ActionCount[game.OffensivePlayer] = 0
	return game, nil
}

// 啟動往下一階段
func NextPhaseProcedure(ctx appengine.Context, game Game, step int, reason string) (Game, error) {
	parameters := url.Values{
		"step": {strconv.Itoa(step)},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "階段將結束", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "階段改變", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "階段將開始", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

func TakeCardFrom(ctx appengine.Context, game Game, user string, fromStackId string, cardId string) (Game, error) {
	targetStackId := user + Hand
	var err error
	game.CardTable, err = core.MoveCard(ctx, game.CardTable, fromStackId, targetStackId, 0, cardId)
	if err != nil {
		return game, TargetMissingError(err.Error())
	}
	return game, nil
}

// 重置規定效果
func UntapCardInUntapStep(ctx appengine.Context, game Game, user string) (Game, error) {
	return game, nil
}

// 棄牌規定效果
func DiscardCardInDiscardStepProcedure(ctx appengine.Context, game Game, user string) (Game, error) {
	offset := len(game.CardTable.CardStack[user+Hand].Card) - game.Player[user].HandLimit
	if offset <= 0 {
		return game, nil
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "結束棄牌", []core.Command{
		{
			User:        user,
			Description: "{user}選擇{num}張手牌{cardIds}廢棄",
			Parameters:  url.Values{"user": {user}, "num": {strconv.Itoa(offset)}},
		},
	})
	return game, nil
}

// 啟動抽卡
// 可以指定從哪裡抽到手上
func TakeCardProcedure(ctx appengine.Context, game Game, user string, fromStackId string, cardId string, reason string) (Game, error) {
	parameters := url.Values{
		"user":        {user},
		"fromStackId": {fromStackId},
		"cardId":      {cardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "將抽到卡", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "抽到卡", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "抽到卡後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

// 基本規則實作
func BasicCommandHandler(ctx appengine.Context, game Game, c core.Command) (Game, error) {
	switch c.Description {
	case "{user}選擇{num}張手牌{cardIds}廢棄":
		var err error
		var has bool
		user := c.Parameters.Get("user")
		cardIds, has := c.Parameters["cardIds"]
		if has == false {
			return game, errors.New("沒有cardIds")
		}
		for _, cardId := range cardIds {
			game.CardTable, err = core.MoveCard(ctx, game.CardTable, user+Hand, user+Graveyard, 0, cardId)
			if err != nil {
				return game, err
			}
		}
	case "階段將結束":
		// 剛結束棄牌階段，切換回合
		if game.CurrentPhase == DiscardStep {
			game.Turn += 1
			nextUser := Opponent(game.OffensivePlayer)
			game.OffensivePlayer = nextUser
			// 優先權會在"階段改變"時設定
		}
	case "階段改變":
		step, err := strconv.Atoi(c.Parameters.Get("step"))
		if err != nil {
			return game, err
		}
		game, err = NextPhase(ctx, game, step)
		if err != nil {
			return game, err
		}
	case "階段將開始":
		var err error
		// ID20司空先锋·张辽
		// 每当张辽对玩家造成战斗伤害时，略过该玩家的下一个重置步骤。
		// TODO 略过该玩家的下一个重置步骤
		// if currentPhase == UntapStep
		// step = 2

		// 切換階段後等於重置階段的話，代表剛進入重置階段
		// 立刻重置卡牌
		offensiveUser := game.OffensivePlayer
		if game.CurrentPhase == UntapStep {
			game, err = UntapCardInUntapStep(ctx, game, offensiveUser)
			if err != nil {
				return game, err
			}
		}
		// 抽牌階段，第一回合不能抽牌
		if game.CurrentPhase == DrawStep {
			canDraw := game.Turn != 0
			if canDraw {
				topCardId, err := core.TopCardInCardStack(ctx, game.CardTable, offensiveUser+Library)
				if err == core.ErrCardNotExist {
					return game, TargetMissingError("無卡可抽")
				}
				game, err = TakeCardProcedure(ctx, game, offensiveUser, offensiveUser+Library, topCardId, "抽牌階段抽牌")
				if err != nil {
					return game, err
				}
			}
		}
		// 剛進入棄牌階段，立刻棄牌
		if game.CurrentPhase == DiscardStep {
			game, err = DiscardCardInDiscardStepProcedure(ctx, game, offensiveUser)
			if err != nil {
				return game, err
			}
		}
	case "抽到卡":
		var err error
		user := c.Parameters.Get("user")
		cardId := c.Parameters.Get("cardId")
		if cardId == "" {
			return game, errors.New("沒有cardId")
		}
		fromStackId := c.Parameters.Get("fromStackId")
		game, err = TakeCardFrom(ctx, game, user, fromStackId, cardId)
		if err != nil {
			return game, err
		}
	}
	game.Procedure = core.CompleteCommand(ctx, game.Procedure, c)
	return game, nil
}
