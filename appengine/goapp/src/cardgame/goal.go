package cardgame

import (
	"appengine"
	"appengine/datastore"
)

type Goal struct {
	ID          int64
	Depends     []int64
	Results     []string
	Description string
	Completed   bool
}

func GoalKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "Root", "Goal", 0, nil)
}

func CreateGoal(ctx appengine.Context, goal Goal) (Goal, error) {
	var err error
	key := datastore.NewIncompleteKey(ctx, "Goal", GoalKey(ctx))
	updatedKey, err := datastore.Put(ctx, key, &goal)
	if err != nil {
		return Goal{}, err
	}
	goal.ID = updatedKey.IntID()
	return goal, nil
}

func GetDependGoal(ctx appengine.Context, goal Goal) (Goal, bool, error) {
	var err error
	key := datastore.NewKey(ctx, "Goal", "", goal.ID, GoalKey(ctx))
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
			depGoal, has, err := GetDependGoal(ctx, Goal{ID: id})
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

func GetIncompleteGoal(ctx appengine.Context) ([]Goal, error) {
	var err error
	var goals []Goal
	q := datastore.NewQuery("Goal").Filter("Completed =", false).Ancestor(GoalKey(ctx))
	_, err = q.GetAll(ctx, &goals)
	return goals, err
}

func CompleteGoal(ctx appengine.Context, goalID int64, result []string) error {
	var err error
	var goal Goal
	key := datastore.NewKey(ctx, "Goal", "", goalID, GoalKey(ctx))
	err = datastore.Get(ctx, key, &goal)
	if err != nil {
		return err
	}
	goal.Results = result
	goal.Completed = true
	_, err = datastore.Put(ctx, key, &goal)
	return err
}

func GetGoals(ctx appengine.Context, goalIds []int64) ([]Goal, error) {
	var keys []*datastore.Key
	for _, goalID := range goalIds {
		keys = append(keys, datastore.NewKey(ctx, "Goal", "", goalID, GoalKey(ctx)))
	}
	var goals = make([]Goal, len(goalIds))
	err := datastore.GetMulti(ctx, keys, goals)
	if err != nil {
		return nil, err
	}
	return goals, nil
}
