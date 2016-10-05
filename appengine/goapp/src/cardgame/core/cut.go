package core

import (
	"appengine"
	"appengine/datastore"
	"errors"
	"time"
)

type Cut struct {
	State int
}

type Effect struct {
	UserID string
	GoalID int64
	Time   time.Time
}

const (
	CutStateCutting   = 0
	CutStateSolving   = 1
	CutStateCompleted = 2
)

var (
	ErrCurrentCutDidntCompleted                  = errors.New("current cut didn't completed")
	ErrNotCuttingNow                             = errors.New("not cutting now")
	ErrNotSolvingNow                             = errors.New("not solving now")
	ErrYouCanNotAppendToCutBecauseLastCutIsYours = errors.New("you can't append to cut because last goal is yours")
	ErrHasCuttingDidntSolve                      = errors.New("has cutting didn't solve")
)

func CutKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "Cut", "OnlyOne", 0, GameKey(ctx, gameId))
}

// 建立切入
// 只使用一個切入實體，所以只要改變狀態就行了
// 如果之前的切入還沒未成，就會丟出ErrCurrentCutDidntCompleted
// 如果之前的切入已經未成，就重設狀態
func CreateCut(ctx appengine.Context, gameId string) error {
	var err error
	cut, err := GetCut(ctx, gameId)
	if err != nil {
		return err
	}
	if cut.State == CutStateCutting {
		return ErrCurrentCutDidntCompleted
	}
	if cut.State == CutStateSolving {
		return ErrCurrentCutDidntCompleted
	}
	if cut.State == CutStateCompleted {
		err = ResetCut(ctx, gameId)
		if err != nil {
			return err
		}
	}
	return nil
}

// 取得現在的切入
// 每個前台都會呼叫這個方法取得現在有沒有切入
// 若切入狀態是CutStateCutting，走切入流程
// 若切入狀態是CutStateSolve，走解決流程
// == 切入流程 ==
// 呼叫GetEffects取得這個切入的最後一個切入效果玩家
// 如果那個玩家不是自己，就詢問玩家要不要切入
// 玩家要切入的話，就呼叫AddEffect
// 玩家不切入的話，就呼叫SolveCut
// == 解決流程 ==
// 前台呼叫GetLastGoal取得這個切必需要解決的Goal
// 如果是自己的問題就解決直到GetLastGoal沒有取得問題
// 注意
// GetLastGoal取得的是那個Goal的根
// 必須呼叫GetDependGoal來取得它的依賴
// 好處也在這，我們可以在根描述這次Goal的行為，比如play一張卡等，發動A卡的能力等
// 反正指定User為sys，這樣可以被系統忽略掉
// 但卻可以來用標示要被切入的能力是什麼
func GetCut(ctx appengine.Context, gameId string) (Cut, error) {
	var cut Cut
	var err error
	key := CutKey(ctx, gameId)
	err = datastore.Get(ctx, key, &cut)
	// 實體若不存在，就建立
	// 初始狀態是CutStateCompleted
	if err == datastore.ErrNoSuchEntity {
		newCut := Cut{State: CutStateCompleted}
		_, err = datastore.Put(ctx, key, &newCut)
		if err != nil {
			return Cut{}, err
		}
		return newCut, nil
	}
	if err != nil {
		return Cut{}, err
	}
	return cut, nil
}

func PutCut(ctx appengine.Context, gameId string, cut Cut) error {
	var err error
	_, err = datastore.Put(ctx, CutKey(ctx, gameId), &cut)
	if err != nil {
		return err
	}
	return nil
}

func GetEffects(ctx appengine.Context, gameId string) ([]Effect, error) {
	var err error
	q := datastore.NewQuery("Effect").Ancestor(CutKey(ctx, gameId))
	q = q.Order("-Time")
	effects := []Effect{}
	_, err = q.GetAll(ctx, &effects)
	if err != nil {
		return nil, err
	}
	return effects, nil
}

func AddEffect(ctx appengine.Context, gameId string, effect Effect) error {
	var err error
	cut, err := GetCut(ctx, gameId)
	if cut.State != CutStateCutting {
		return ErrNotCuttingNow
	}
	effects, err := GetEffects(ctx, gameId)
	if len(effects) > 0 {
		topEffect := effects[0]
		if topEffect.UserID == effect.UserID {
			return ErrYouCanNotAppendToCutBecauseLastCutIsYours
		}
	}
	effect.Time = time.Now()
	key := datastore.NewIncompleteKey(ctx, "Effect", CutKey(ctx, gameId))
	_, err = datastore.Put(ctx, key, &effect)
	if err != nil {
		return err
	}
	return nil
}

func ResetCut(ctx appengine.Context, gameId string) error {
	var err error
	q := datastore.NewQuery("Effect").Ancestor(CutKey(ctx, gameId)).KeysOnly()
	effKeys, err := q.GetAll(ctx, nil)
	if err != nil {
		return err
	}
	err = datastore.DeleteMulti(ctx, effKeys)
	if err != nil {
		return err
	}
	key := CutKey(ctx, gameId)
	var cut Cut
	err = datastore.Get(ctx, key, &cut)
	cut.State = CutStateCutting
	_, err = datastore.Put(ctx, key, &cut)
	return err
}

func SolveCut(ctx appengine.Context, gameId string) error {
	var err error
	cut, err := GetCut(ctx, gameId)
	if err != nil {
		return err
	}
	if cut.State != CutStateCutting {
		return ErrNotCuttingNow
	}
	cut.State = CutStateSolving
	return PutCut(ctx, gameId, cut)
}

func CompleteCut(ctx appengine.Context, gameId string) error {
	var err error
	cut, err := GetCut(ctx, gameId)
	if err != nil {
		return err
	}
	if cut.State != CutStateSolving {
		return ErrNotSolvingNow
	}
	cut.State = CutStateCompleted
	return PutCut(ctx, gameId, cut)
}

func GetLastGoal(ctx appengine.Context, gameId string) (Goal, bool, error) {
	var err error
	cut, err := GetCut(ctx, gameId)
	if err != nil {
		return Goal{}, false, err
	}
	if cut.State != CutStateSolving {
		return Goal{}, false, ErrNotSolvingNow
	}
	effects, err := GetEffects(ctx, gameId)
	if err != nil {
		return Goal{}, false, err
	}
	if len(effects) == 0 {
		return Goal{}, false, nil
	}
	for _, effect := range effects {
		goals, err := GetGoals(ctx, gameId, []int64{effect.GoalID})
		if err != nil {
			return Goal{}, false, err
		}
		goal := goals[0]
		if goal.Completed == false {
			return goal, true, nil
		}
	}
	return Goal{}, false, nil
}
