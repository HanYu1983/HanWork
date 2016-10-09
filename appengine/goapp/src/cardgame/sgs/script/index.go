package script

import (
	"appengine"
	core "cardgame/core"
	. "cardgame/sgs/core"
	"encoding/json"
	"strconv"
)

// 支付費用
// 由各個卡片實做中來呼叫
// cost的格式是"無無魏"這樣的格式
// cost的支付順序必須和cardIds給定的順序要一致
func ConsumeCost(ctx appengine.Context, game Game, stage core.Desktop, user string, cost string, cardIds []int) (Game, core.Desktop, error) {
	// 將X轉為"無"序列
	if cost == "X" {
		cost = X2Cost(len(cardIds))
	}
	var err error
	// 建立空的slot
	// 這個slot必須被填滿
	costSlot := make([]string, len([]rune(cost)))
	// 先將stage考貝一份
	updatedStage := stage
	for _, cardId := range cardIds {
		// 支付消費
		// 填充slot
		game, updatedStage, err = ConsumeCostInCard(ctx, game, updatedStage, user, cost, costSlot, stage.Card[cardId])
		if err != nil {
			return game, stage, err
		}
	}
	// 切換成最新的stage
	stage = updatedStage
	// 檢查slot是不是都被填滿了
	for _, slot := range costSlot {
		if slot == "" {
			return game, stage, ErrManaIsntEnougth
		}
	}
	return game, stage, nil
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
func CheckAction(ctx appengine.Context, game Game, stage core.Desktop, user string) ([]Action, error) {
	var err error
	actions := []Action{}
	for _, card := range stage.Card {
		actions, err = CheckActionInCard(ctx, game, stage, user, card, actions)
		if err != nil {
			return nil, err
		}
	}
	return actions, nil
}

// 玩家將所選的Target上傳
// 執行動作
// 這個方法會將需求支付解決
// 然後將這個動作方案轉變成Goal和Effect
// 會自動判斷有沒有在切入中
// 若有，發生切入
// 若沒有，新增切入堆疊
func PerformAction(ctx appengine.Context, game Game, stage core.Desktop, user string, action Action) (Game, core.Desktop, error) {
	var err error
	updatedStage := stage
	for _, card := range stage.Card {
		game, updatedStage, err = PerformActionInCard(ctx, game, updatedStage, user, action, true, card)
		if err != nil {
			return game, stage, err
		}
	}
	return game, updatedStage, nil
}

func StepSystem(ctx appengine.Context, sgs Game, stage core.Desktop) (Game, core.Desktop, error) {
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
		// 直接執行目標卡
		cardIdInt, err := strconv.Atoi(cardId)
		if err != nil {
			return sgs, stage, err
		}
		card := stage.Card[cardIdInt]
		sgs, stage, err = PerformActionInCard(ctx, sgs, stage, user, action, false, card)

		switch err.(type) {
		case SgsError:
			var sgsErr = err
			// 卡牌內容錯誤
			// 代表目標遺失
			// 一樣將問題完成並回傳錯誤
			// 讓前台有機會處理對玩家的回應
			err = core.CompleteGoal(ctx, sgs.ID, goal.ID, nil)
			if err != nil {
				return sgs, stage, err
			}
			return sgs, stage, sgsErr
		default:
			// 系統錯誤
			// 中斷執行
			if err != nil {
				return sgs, stage, err
			}
			break
		}

		err = core.CompleteGoal(ctx, sgs.ID, goal.ID, nil)
		if err != nil {
			return sgs, stage, err
		}
		break
	}
	return sgs, stage, nil
}
