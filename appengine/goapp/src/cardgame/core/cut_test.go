package core

import (
	"appengine/aetest"
	"testing"
)

func TestCut(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	var cut Cut
	gameId := "first game"

	t.Log("取得現在的切入")
	cut, err = GetCut(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	if cut.State != CutStateCompleted {
		t.Fatal("一開始的切入狀態必須是完成狀態")
	}

	err = AddEffect(ctx, gameId, Effect{UserID: "han", GoalID: 0})
	if err != ErrNotCuttingNow {
		t.Fatal("不是切入狀態不能切入")
	}

	t.Log("建立切入")
	err = CreateCut(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	cut, err = GetCut(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	if cut.State != CutStateCutting {
		t.Fatal("切入狀態必須改為CutStateCutting")
	}

	t.Log("建立效果內容g1")
	g1, err := CreateGoal(ctx, gameId, Goal{User: "playerA", Description: "select {0} cards", Parameters: []string{"2"}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立效果內容g2")
	g2, err := CreateGoal(ctx, gameId, Goal{User: "playerB", Description: "select {0} cards", Parameters: []string{"2"}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立效果內容g3")
	g3, err := CreateGoal(ctx, gameId, Goal{Description: "drop all selected card", Depends: []int64{g1.ID, g2.ID}})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("加入效果")
	err = AddEffect(ctx, gameId, Effect{UserID: "han", GoalID: g3.ID})
	if err != nil {
		t.Fatal(err)
	}

	err = AddEffect(ctx, gameId, Effect{UserID: "han", GoalID: g3.ID})
	if err != ErrYouCanNotAppendToCutBecauseLastCutIsYours {
		t.Fatal("同一個人不能連續做切入")
	}

	t.Log("建立效果內容g4")
	g4, err := CreateGoal(ctx, gameId, Goal{Description: "drop all selected card"})
	if err != nil {
		t.Fatal(err)
	}

	err = AddEffect(ctx, gameId, Effect{UserID: "vic", GoalID: g4.ID})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("切入結束，進入解決狀態")
	err = SolveCut(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}

	err = AddEffect(ctx, gameId, Effect{UserID: "vic", GoalID: 0})
	if err != ErrNotCuttingNow {
		t.Fatal("不是切入狀態不能切入")
	}

	var goal Goal
	var has bool
	goal, has, err = GetCutLastGoal(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g4.ID {
		t.Fatal("最後一個goal是g4")
	}
	var _ = has

	t.Log("完成g4")
	err = CompleteGoal(ctx, gameId, g4.ID, []string{"cardA", "cardB"})
	if err != nil {
		t.Fatal(err)
	}

	goal, has, err = GetCutLastGoal(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	if goal.ID != g3.ID {
		t.Fatal("最後一個goal是g3")
	}

	t.Log("完成g1")
	err = CompleteGoal(ctx, gameId, g1.ID, nil)
	if err != nil {
		t.Fatal(err)
	}
	t.Log("完成g2")
	err = CompleteGoal(ctx, gameId, g2.ID, nil)
	if err != nil {
		t.Fatal(err)
	}
	t.Log("完成g3")
	err = CompleteGoal(ctx, gameId, g3.ID, nil)
	if err != nil {
		t.Fatal(err)
	}

	_, has, err = GetCutLastGoal(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
	if has != false {
		t.Fatal("必須沒有goals了")
	}

	err = CompleteCut(ctx, gameId)
	if err != nil {
		t.Fatal(err)
	}
}
