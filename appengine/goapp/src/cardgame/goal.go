package cardgame

import (
	"appengine"
	"appengine/datastore"
)

type Goal struct {
	ID          int64
	Depends     []int64
	Results     []string
	User        string
	Description string
	Parameters  []string
	Completed   bool
}

func CreateGoal(ctx appengine.Context, gameID string, goal Goal) (Goal, error) {
	var err error
	key := datastore.NewIncompleteKey(ctx, "Goal", GameKey(ctx, gameID))
	updatedKey, err := datastore.Put(ctx, key, &goal)
	if err != nil {
		return Goal{}, err
	}
	goal.ID = updatedKey.IntID()
	return goal, nil
}

func DeleteAllGoal(ctx appengine.Context, gameID string) error {
	var err error
	var keys []*datastore.Key
	q := datastore.NewQuery("Goal").Ancestor(GameKey(ctx, gameID)).KeysOnly()
	keys, err = q.GetAll(ctx, nil)
	if err != nil {
		return err
	}
	err = datastore.DeleteMulti(ctx, keys)
	if err != nil {
		return err
	}
	return nil
}

func GetDependGoal(ctx appengine.Context, gameID string, goal Goal) (Goal, bool, error) {
	var err error
	key := datastore.NewKey(ctx, "Goal", "", goal.ID, GameKey(ctx, gameID))
	err = datastore.Get(ctx, key, &goal)
	if err != nil {
		return Goal{}, false, err
	}
	// ID被datastore.Get覆寫掉了
	// 再把ID給回來
	goal.ID = key.IntID()
	// 如果本身就完成了，直接回傳
	if goal.Completed == true {
		return goal, false, nil
	}
	// 檢查所有的依賴
	if len(goal.Depends) > 0 {
		for _, id := range goal.Depends {
			depGoal, has, err := GetDependGoal(ctx, gameID, Goal{ID: id})
			if err != nil {
				return Goal{}, false, err
			}
			// 如果有其中一個沒有完成，直接回傳。其餘的忽略掉
			if has {
				return depGoal, true, nil
			}
		}
	}
	// 到這裡代表只剩自己沒有完成
	return goal, true, nil
}

func GetIncompleteGoal(ctx appengine.Context, gameID string, user string) ([]Goal, error) {
	var err error
	// datastore的GetAll的回傳如果沒有半個row
	// 則goals不會被影響
	// 意思是說若var goals []Goal的初值為nil
	// GetAll之後也會是nil
	// 這樣前台處理會比較麻煩
	// 所以先給goals初值為空slice
	goals := []Goal{}
	var keys []*datastore.Key
	q := datastore.NewQuery("Goal").Ancestor(GameKey(ctx, gameID)).Filter("Completed =", false)
	if user != "" {
		q = q.Filter("User =", user)
	}
	keys, err = q.GetAll(ctx, &goals)
	for idx, key := range keys {
		goals[idx].ID = key.IntID()
	}
	return goals, err
}

func CompleteGoal(ctx appengine.Context, gameID string, goalID int64, result []string) error {
	var err error
	var goal Goal
	key := datastore.NewKey(ctx, "Goal", "", goalID, GameKey(ctx, gameID))
	err = datastore.Get(ctx, key, &goal)
	if err != nil {
		return err
	}
	goal.Results = result
	goal.Completed = true
	_, err = datastore.Put(ctx, key, &goal)
	return err
}

func GetGoals(ctx appengine.Context, gameID string, goalIds []int64) ([]Goal, error) {
	var keys []*datastore.Key
	for _, goalID := range goalIds {
		keys = append(keys, datastore.NewKey(ctx, "Goal", "", goalID, GameKey(ctx, gameID)))
	}
	var goals = make([]Goal, len(goalIds))
	err := datastore.GetMulti(ctx, keys, goals)
	if err != nil {
		return nil, err
	}
	return goals, nil
}
