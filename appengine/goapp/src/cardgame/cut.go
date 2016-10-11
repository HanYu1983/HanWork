package cardgame

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"errors"
)

const (
	CutStateCompleted = 0
	CutStateCutting   = 1
	CutStateSolving   = 2
)

var (
	ErrCurrentCutDidntCompleted                  = errors.New("current cut didn't completed")
	ErrNotCuttingNow                             = errors.New("not cutting now")
	ErrNotSolvingNow                             = errors.New("not solving now")
	ErrYouCanNotAppendToCutBecauseLastCutIsYours = errors.New("you can't append to cut because last goal is yours")
	ErrHasCuttingDidntSolve                      = errors.New("has cutting didn't solve")
)

type Effect struct {
	GoalID int64
	UserID string
}

type Cut struct {
	State  int
	Effect []Effect
}

func CutKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "Cut", gameId, 0, core.GameKey(ctx, gameId))
}

func LoadCut(ctx appengine.Context, gameId string) (Cut, error) {
	cut := Cut{}
	var err error
	err = datastore.Get(ctx, CutKey(ctx, gameId), &cut)
	if err == datastore.ErrNoSuchEntity {
		_, err = datastore.Put(ctx, CutKey(ctx, gameId), cut)
		if err != nil {
			return Cut{}, err
		}
	} else if err != nil {
		return Cut{}, err
	}
	return cut, nil
}

func SaveCut(ctx appengine.Context, gameId string, cut Cut) error {
	var err error
	_, err = datastore.Put(ctx, CutKey(ctx, gameId), cut)
	if err != nil {
		return err
	}
	return nil
}

func AddEffect(ctx appengine.Context, effect Effect, force bool, cut Cut) (Cut, error) {
	if force == false {
		if cut.State != CutStateCutting {
			return cut, ErrNotCuttingNow
		}
		if len(cut.Effect) > 0 {
			topEffect := cut.Effect[0]
			if topEffect.UserID == effect.UserID {
				return cut, ErrYouCanNotAppendToCutBecauseLastCutIsYours
			}
		}
	}
	cut.Effect = append(cut.Effect, effect)
	return cut, nil
}

func ResetCut(ctx appengine.Context, cut Cut) (Cut, error) {
	return Cut{}, nil
}

func SolveCut(ctx appengine.Context, cut Cut) (Cut, error) {
	if cut.State != CutStateCutting {
		return cut, ErrNotCuttingNow
	}
	cut.State = CutStateSolving
	return cut, nil
}

func CompleteCut(ctx appengine.Context, cut Cut) (Cut, error) {
	if cut.State != CutStateSolving {
		return cut, ErrNotSolvingNow
	}
	cut.State = CutStateCompleted
	return cut, nil
}
