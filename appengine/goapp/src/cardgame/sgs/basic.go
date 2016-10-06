package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"encoding/json"
	"errors"
)

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
	FromID      string
	User        string
	Description string
	Parameters  map[string]interface{}
}

var (
	CardInfoNotExist = errors.New("card info not exist")
)

func GetCardInfo(ctx appengine.Context, sgs Game, card core.Card) (CardInfo, error) {
	for _, info := range sgs.CardInfo {
		if info.CardID == card.ID {
			return info, nil
		}
	}
	return CardInfo{}, CardInfoNotExist
}

func InstallCardInfo(ctx appengine.Context, sgs Game, stage core.Game) (Game, error) {
	var _, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, card core.Card) (core.Card, error) {
		var err error
		_, err = GetCardInfo(ctx, sgs, card)
		if err == CardInfoNotExist {
			info, err := GetCard(ctx, card.Ref)
			if err != nil {
				return card, err
			}
			cardInfo := CardInfo{card.ID, info, info}
			sgs.CardInfo = append(sgs.CardInfo, cardInfo)
		} else if err != nil {
			return card, err
		}
		return card, nil
	})
	return sgs, err
}

func CreateGame(ctx appengine.Context, gameId string) (Game, core.Game, error) {
	var game core.Game
	var err error
	game, err = core.CreateGame(ctx, gameId)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-base", "base")
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, "A-hand", "hand")
	if err != nil {
		return Game{}, game, err
	}
	_, err = core.SaveGame(ctx, game)
	if err != nil {
		return Game{}, game, err
	}
	sgs := Game{ID: gameId}
	sgs, err = SaveGame(ctx, sgs)
	return sgs, game, err
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

// 由各個卡片實做中來呼叫
func PerformCost(ctx appengine.Context, game Game, stage core.Game, user string, cardIds []string) (Game, core.Game, error) {
	stage, err := core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, card core.Card) (core.Card, error) {
		isCard := false
		for _, cardId := range cardIds {
			if card.ID == cardId {
				isCard = true
			}
		}
		if isCard == false {
			return card, nil
		}
		if card.Owner != user {
			return card, errors.New("you are not owner")
		}
		if core.HasCardInStack(ctx, stage, user+"-G", card) == -1 {
			return card, errors.New("used card is not G")
		}
		if card.Direction == core.DirectionTap {
			return card, errors.New("used card already used")
		}
		card.Direction = core.DirectionTap
		return card, nil
	})
	return game, stage, err
}

// 核對可發動能力
// 每個玩家在各個階段可以呼叫，取得可以使用的動作
// 這個方法會巡訪指定玩家的所有卡，將所有動作方案收集起來
// 每個動作方案會起錄它的需求Cost和執行目標，兩項都是審核過可以支付的
// 之後玩家再呼叫PerformAction
//
// 基本流程是
// 1. 玩家呼叫GetCut，判斷切入狀態
// 2. 若要切入或發起新的切入，呼叫CheckAction來取得動作方案
// 3. 呼叫PerformAction
func CheckAction(ctx appengine.Context, sgs Game, game core.Game, user string) ([]Action, error) {
	actions := []Action{}
	var _, err = core.MapCard(ctx, game, func(ctx appengine.Context, game core.Game, card core.Card) (core.Card, error) {
		cardAction, err := CheckCardAction(ctx, sgs, game, user, card)
		if err != nil {
			return card, err
		}
		actions = append(actions, cardAction...)
		return card, nil
	})
	return actions, err
}

// 玩家將所選的Target上傳
// 執行動作
// 這個方法會將需求支付解決
// 然後將這個動作方案轉變成Goal和Effect
// 會自動判斷有沒有在切入中
// 若有，發生切入
// 若沒有，新增切入堆疊
func PerformAction(ctx appengine.Context, sgs Game, stage core.Game, user string, action Action) (Game, core.Game, error) {
	var err error
	for _, stk := range stage.CardStack {
		for _, card := range stk.Card {
			sgs, stage, err = PerformCardAction(ctx, sgs, stage, user, action, true, card)
			if err != nil {
				return sgs, stage, err
			}
		}
	}
	return sgs, stage, nil
}

func StepSystem(ctx appengine.Context, sgs Game, stage core.Game) (Game, core.Game, error) {
	var err error
	var goal core.Goal
	var has bool
	// 取得切入的最後一個問題
	goal, has, err = core.GetLastGoal(ctx, sgs.ID)
	if err != nil {
		return sgs, stage, err
	}
	// 若切入的所有效果都解決了，完成這個切入
	// 等待下一個切入發生
	if has == false {
		err = core.CompleteCut(ctx, sgs.ID)
		if err != nil {
			return sgs, stage, err
		}
		return sgs, stage, nil
	}
	// 如果存在，就取得最後一個問題的前置問題
	goal, has, err = core.GetDependGoal(ctx, sgs.ID, goal)
	if err != nil {
		return sgs, stage, err
	}
	// 沒有問題就略過
	if has == false {
		return sgs, stage, nil
	}
	// 如果不是系統問題，就略過
	if goal.User != core.UserSys {
		return sgs, stage, nil
	}
	// 處理系統問題
	switch goal.Description {
	case "玩家{0}觸發{1}的能力{2}":
		user := goal.Parameters[0]
		cardId := goal.Parameters[1]
		payload := goal.Parameters[2]
		var action Action
		err = json.Unmarshal([]byte(payload), &action)
		if err != nil {
			return sgs, stage, err
		}
		for _, stk := range stage.CardStack {
			for _, card := range stk.Card {
				if card.ID != cardId {
					continue
				}
				sgs, stage, err = PerformCardAction(ctx, sgs, stage, user, action, false, card)
				if err != nil {
					return sgs, stage, err
				}
			}
		}
		err = core.CompleteGoal(ctx, sgs.ID, goal.ID, nil)
		if err != nil {
			return sgs, stage, err
		}
		break
	}
	return sgs, stage, nil
}
