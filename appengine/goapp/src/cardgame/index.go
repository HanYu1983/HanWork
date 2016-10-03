package cardgame

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strconv"
)

// 統一回傳資訊
func Recover(w io.Writer) {
	if err := recover(); err != nil {
		switch err.(type) {
		case string:
			Json(w, nil, errors.New(err.(string)))
		case error:
			Json(w, nil, err.(error))
		default:
			Json(w, nil, errors.New(fmt.Sprintf("err:%s", err)))
		}
	}
}

func Json(w io.Writer, ret interface{}, err error) {
	var info [2]interface{}
	if err != nil {
		info[0] = err.Error()
	} else {
		info[1] = ret
	}
	jsonstr, _ := json.Marshal(info)
	fmt.Fprint(w, string(jsonstr))
}

func InitGameHttp(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	ctx := appengine.NewContext(r)
	// cross-groups transaction need to be explicitly specified (xg=True)
	option := datastore.TransactionOptions{
		XG:       true,
		Attempts: 3,
	}
	var returnGame Game
	var err error
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		var game Game
		err = DeleteAllGoal(ctx, "first game")
		if err != nil {
			return err
		}
		err = DeleteGame(ctx, "first game")
		if err != nil {
			return err
		}
		game, err = CreateGame(ctx, "first game")
		if err != nil {
			return err
		}
		kd0, err := CreateCard(ctx, game, "KD-0")
		if err != nil {
			return err
		}
		kd1, err := CreateCard(ctx, game, "KD-1")
		if err != nil {
			return err
		}
		kd2, err := CreateCard(ctx, game, "KD-2")
		if err != nil {
			return err
		}
		kd3, err := CreateCard(ctx, game, "KD-3")
		if err != nil {
			return err
		}
		game, err = CreateCardStack(ctx, game, "A-hand", "hand")
		if err != nil {
			return err
		}
		game, err = CreateCardStack(ctx, game, "B-hand", "hand")
		if err != nil {
			return err
		}
		game, err = AddCardTo(ctx, game, kd0, "A-hand")
		if err != nil {
			return err
		}
		game, err = AddCardTo(ctx, game, kd1, "A-hand")
		if err != nil {
			return err
		}
		game, err = AddCardTo(ctx, game, kd2, "B-hand")
		if err != nil {
			return err
		}
		game, err = AddCardTo(ctx, game, kd3, "B-hand")
		if err != nil {
			return err
		}
		game, err = SaveGame(ctx, game)

		g1, err := CreateGoal(ctx, game.ID, Goal{User: "playerA", Description: "select {0} cards", Parameters: []string{"2"}})
		if err != nil {
			return err
		}

		g2, err := CreateGoal(ctx, game.ID, Goal{User: "playerB", Description: "select {0} cards", Parameters: []string{"2"}})
		if err != nil {
			return err
		}

		_, err = CreateGoal(ctx, game.ID, Goal{Description: "drop all selected card", Depends: []int64{g1.ID, g2.ID}})
		if err != nil {
			return err
		}
		returnGame = game
		return err
	}, &option)
	Json(w, returnGame, err)
}

func GetGoalHttp(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	if len(r.Form["game"]) == 0 {
		panic("need game")
	}
	game := r.Form["game"][0]

	var user string
	if len(r.Form["user"]) > 0 {
		user = r.Form["user"][0]
	}

	ctx := appengine.NewContext(r)
	option := datastore.TransactionOptions{
		Attempts: 3,
	}
	var goals []Goal
	var err error
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		goals, err = GetIncompleteGoal(ctx, game, user)
		if err != nil {
			return err
		}
		return nil
	}, &option)
	Json(w, goals, err)
}

func GetDependsGoal(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	if len(r.Form["game"]) == 0 {
		panic("need game")
	}
	game := r.Form["game"][0]
	if len(r.Form["id"]) == 0 {
		panic("need id")
	}
	var err error
	goalId, err := strconv.ParseInt(r.Form["id"][0], 10, 64)
	if err != nil {
		panic(err)
	}
	ctx := appengine.NewContext(r)
	option := datastore.TransactionOptions{
		Attempts: 3,
	}
	var returnGoal interface{}
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		var goal Goal
		var has bool
		goal, has, err = GetDependGoal(ctx, game, Goal{ID: goalId})
		if err != nil {
			return err
		}
		if has {
			returnGoal = goal
		}
		return nil
	}, &option)
	Json(w, returnGoal, err)
}

func SolveGoalHttp(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	r.ParseForm()
	if len(r.Form["game"]) == 0 {
		panic("need game")
	}
	game := r.Form["game"][0]
	if len(r.Form["id"]) == 0 {
		panic("need id")
	}
	var err error
	goalId, err := strconv.ParseInt(r.Form["id"][0], 10, 64)
	if err != nil {
		panic(err)
	}
	cardids := r.Form["cardId"]

	ctx := appengine.NewContext(r)
	option := datastore.TransactionOptions{
		Attempts: 3,
	}
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		err = HandleSolveError(ctx, game, goalId, cardids)
		if err != nil {
			return err
		}
		return nil
	}, &option)
	Json(w, nil, err)
}

func HandleSolveError(ctx appengine.Context, gameId string, goalId int64, results []string) error {
	var goals []Goal
	var err error
	goals, err = GetGoals(ctx, gameId, []int64{goalId})
	if err != nil {
		return err
	}
	if goals[0].Description == "select {0} cards" {
		// TODO 判斷式balabala
		return nil
	}
	return CompleteGoal(ctx, gameId, goalId, results)
}
