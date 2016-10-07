package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"encoding/json"
	"errors"
)

// 卡牌狀態
// 陣面對決的數值
type CardInfo struct {
	CardID    string
	Prototype Card
	Current   Card
}

// 遊戲
// ID會和core.Game的ID一致
// 用這個ID來取得core.Game
// core.Game記錄的是卡牌的位置、面向等資訊
// 這個Game記錄的是陣面對決的遊戲狀態
type Game struct {
	ID        string
	CurrPhase string
	CardInfo  []CardInfo
}

// 行動方案
// 用來和玩家互動的，沒有存入datastore
// 系統提出行動方案後，有些參數沒有填滿
// 那些參數就由玩家來補足
// 之後再將補足完的方案回傳服務器
// 服務器有完整的參數資訊就能執行方案
type Action struct {
	FromID      string
	User        string
	Description string
	Parameters  map[string]interface{}
}

var (
	ErrCardInfoNotExist      = errors.New("card info not exist")
	ErrYouAreNotTheCardOwner = errors.New("you are not the card owner")
	ErrTargetCardIsntMana    = errors.New("target card is not mana")
	ErrTargetManaAlreadyUsed = errors.New("target mana already used")
	ErrManaIsntEnougth       = errors.New("mana is not enought ")
)

// 取得卡牌的遊戲狀態
// 遊戲狀態會在遊戲剛建立時叫用InstallCardInfo來將所有用到的卡牌的資訊存到Game中
// GetCardInfo一定能取到自己的狀態
func GetCardInfo(sgs Game, card core.Card) CardInfo {
	for _, info := range sgs.CardInfo {
		if info.CardID == card.ID {
			return info
		}
	}
	panic("取不到資料，這場遊戲有問題，必須放棄")
}

// 將台面上所有的卡牌的遊戲資料加入
// 在將玩家的牌組加入遊戲時呼叫
// 這個方法一定要呼叫，不然遊戲不能玩
func InstallCardInfo(ctx appengine.Context, sgs Game, stage core.Game) (Game, error) {
	var _, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, card core.Card) (core.Card, error) {
		var err error
		info, err := GetCard(ctx, card.Ref)
		if err != nil {
			return card, err
		}
		cardInfo := CardInfo{card.ID, info, info}
		sgs.CardInfo = append(sgs.CardInfo, cardInfo)
		return card, nil
	})
	return sgs, err
}

const (
	CardStackBase      = "base"
	CardStackHand      = "hand"
	CardStackMana      = "mana"
	CardStackGraveyard = "graveyard"
	CardStackSlot      = "slot"
)

// 建立陣面對決的牌局
// 這個方法會一并建立core.Game的台面狀態
// 建立場上所有牌堆（手牌、本國、地、墓地、陣地）
func CreateGame(ctx appengine.Context, gameId string) (Game, core.Game, error) {
	var game core.Game
	var err error
	// 建立台面
	game, err = core.CreateGame(ctx, gameId)
	if err != nil {
		return Game{}, game, err
	}
	// 建立A玩家牌堆
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserA+CardStackSlot, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	// 建立B玩家牌堆
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackBase, CardStackBase)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackHand, CardStackHand)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackMana, CardStackMana)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackGraveyard, CardStackGraveyard)
	if err != nil {
		return Game{}, game, err
	}
	game, err = core.CreateCardStack(ctx, game, core.UserB+CardStackSlot, CardStackSlot)
	if err != nil {
		return Game{}, game, err
	}
	_, err = core.SaveGame(ctx, game)
	if err != nil {
		return Game{}, game, err
	}
	// 建立陣面對決
	sgs := Game{ID: gameId}
	sgs, err = SaveGame(ctx, sgs)
	return sgs, game, err
}

// 讀取陣面對決
func LoadGame(ctx appengine.Context, gameID string) (Game, error) {
	key := GameKey(ctx, gameID)
	var game Game
	var err error
	err = datastore.Get(ctx, key, &game)
	return game, err
}

// 記錄陣面對決
func SaveGame(ctx appengine.Context, game Game) (Game, error) {
	key := GameKey(ctx, game.ID)
	var err error
	_, err = datastore.Put(ctx, key, &game)
	return game, err
}

func X2Cost(cnt int) string {
	str := ""
	for i := 0; i < cnt; i++ {
		str += "無"
	}
	return str
}

// 支付費用
// 由各個卡片實做中來呼叫
// cost的格式是"無無魏"這樣的格式
// cost的支付順序必須和cardIds給定的順序要一致
func PerformCost(ctx appengine.Context, game Game, stage core.Game, user string, cost string, cardIds []string) (Game, core.Game, error) {
	runeCost := []rune(cost)
	// 長度不一樣，無法支付
	if len(runeCost) != len(cardIds) {
		return game, stage, ErrManaIsntEnougth
	}
	userManaStack := stage.CardStack[core.HasCardStack(ctx, stage, user+CardStackMana)]
	// 依cost指定的順序處理
	for idx, currCost := range runeCost {
		// 取得當前的卡
		cardId := cardIds[idx]
		var succeed bool
		for idx, cardInMana := range userManaStack.Card {
			// 判斷mana中有沒有那張卡
			if cardInMana.ID == cardId {
				// 若cost非白色狀況
				// 卡必須是要是開著的
				// 並且那張卡的顏色是和cost一致
				if ColorWhite != string(currCost) {
					if cardInMana.Face == core.FaceClose {
						break
					}
					// 取得狀態
					info := GetCardInfo(game, cardInMana)
					// 用Current代表允許Color在遊戲中被改變
					if info.Current.Color != string(currCost) {
						break
					}
				}
				// 如果上述條件都有，就判斷卡牌是不是可以横置的狀態
				if cardInMana.Direction == core.DirectionUntap {
					// 横置卡牌
					userManaStack.Card[idx].Direction = core.DirectionTap
					succeed = true
				}
			}
		}
		if succeed == false {
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
				// 執行到目標卡就立刻退出
				break
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
