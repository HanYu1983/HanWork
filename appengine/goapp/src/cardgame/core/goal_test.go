package core

import (
	"appengine/aetest"
	"fmt"
	"testing"
)

func TestGoal(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	gameId := "first game"

	t.Log("建立g1")
	g1, err := CreateGoal(ctx, gameId, Goal{User: "playerA", Description: "select {0} cards", Parameters: []string{"2"}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立g2")
	g2, err := CreateGoal(ctx, gameId, Goal{User: "playerB", Description: "select {0} cards", Parameters: []string{"2"}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立g3")
	g3, err := CreateGoal(ctx, gameId, Goal{Description: "drop all selected card", Depends: []int64{g1.ID, g2.ID}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("取得未完成goal")
	var goals []Goal
	goals, err = GetIncompleteGoal(ctx, gameId, "")
	if len(goals) != 3 {
		t.Fatal("未完成的數量必須是3")
	}

	t.Log("取得g1的depends goal")
	var goal Goal
	var has bool
	goal, has, err = GetDependGoal(ctx, gameId, g1)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g1.ID {
		t.Fatal("用g1查所依賴的goal必須也是g1")
	}

	t.Log("取得g2的depends goal")
	goal, has, err = GetDependGoal(ctx, gameId, g2)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g2.ID {
		t.Fatal("用g2查所依賴的goal必須也是g2")
	}

	t.Log("取得g3的depends goal")
	goal, has, err = GetDependGoal(ctx, gameId, g3)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g1.ID {
		t.Fatal("用g3查所依賴的goal必須先是g1")
	}

	t.Log("完成g1")
	err = CompleteGoal(ctx, gameId, g1.ID, []string{"cardA", "cardB"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("再次取得g3的depends goal")
	goal, has, err = GetDependGoal(ctx, gameId, g3)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g2.ID {
		t.Fatal("用g3查所依賴的goal必須再來是g2")
	}

	t.Log("完成g2")
	err = CompleteGoal(ctx, gameId, g2.ID, []string{"cardC", "cardD"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("再次取得g3的depends goal")
	goal, has, err = GetDependGoal(ctx, gameId, g3)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g3.ID {
		t.Fatal("用g3查所依賴的goal必須再來是g3")
	}

	t.Log("取得要完成g3的參數")
	g3Deps, err := GetGoals(ctx, gameId, g3.Depends)
	if err != nil {
		t.Fatal(err)
	}
	dropString := fmt.Sprintf("%v,%v,%v,%v", g3Deps[0].Results[0], g3Deps[0].Results[1], g3Deps[1].Results[0], g3Deps[1].Results[1])
	if dropString != "cardA,cardB,cardC,cardD" {
		t.Fatal("收集到的結果必須是cardA,cardB,cardC,cardD")
	}
	t.Log("完成g3")
	err = CompleteGoal(ctx, gameId, g3.ID, nil)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("再次取得g3的depends goal")
	_, has, err = GetDependGoal(ctx, gameId, g3)
	if err != nil {
		t.Fatal(err)
	}
	if has {
		t.Fatal("g3必須找不到Depends了")
	}
}
