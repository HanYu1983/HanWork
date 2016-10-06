package sgs

import (
	"appengine/aetest"
	core "cardgame/core"
	"testing"
)

func TestIndex(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	err = InstallPackage(ctx)
	if err != nil {
		t.Fatal(err)
	}

	var stage core.Game
	var game Game

	t.Log("建立一場遊戲")
	game, stage, err = CreateGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	var cards []core.Card
	t.Log("加入玩家卡組")
	stage, cards, err = core.AddCardsTo(ctx, stage, []string{"179"}, core.UserA+"-hand", core.UserA)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, stage)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("前台取得行動方案")
	var actions []Action
	actions, err = CheckAction(ctx, game, stage, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	if actions[0].Description != "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
		t.Fatal("動作方案必須是-使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}")
	}
	if actions[0].FromID != cards[0].ID {
		t.Fatal("觸發的卡必須是cards[0]")
	}

	info, err := GetCardInfo(ctx, game, cards[0])
	if err != nil {
		t.Fatal(err)
	}

	t.Log("執行的卡是", info)
	if info.Prototype.Name != "魏领土" {
		t.Fatal("必須是魏领土")
	}

	t.Log("前台發出行動命令")
	// 前台先複制一份
	// 把剩下的參數補足
	userAction := actions[0]
	userAction.Parameters["cardIds"] = []string{"cardId,cardId,cardId"}

	t.Log("取得現在的切入狀態")
	var cut core.Cut
	cut, err = core.GetCut(ctx, game.ID)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("回傳服務器後")
	if cut.State == core.CutStateCompleted {
		t.Log("若現在沒有任何切入，建立切入")
		err = core.CreateCut(ctx, game.ID)
		if err != nil {
			t.Fatal(err)
		}
	}

	t.Log("將效果加入切入堆疊")
	game, stage, err = PerformAction(ctx, game, stage, core.UserA, userAction)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使切入結束")
	err = core.SolveCut(ctx, game.ID)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("解決效果")
	game, stage, err = StepSystem(ctx, game, stage)
	if err != nil {
		t.Fatal(err)
	}

	cut, err = core.GetCut(ctx, game.ID)
	if err != nil {
		t.Fatal(err)
	}
	if cut.State != core.CutStateSolving {
		t.Fatal("現在的狀態必須是CutStateSolving")
	}

	t.Log("再次呼叫解決效果")
	game, stage, err = StepSystem(ctx, game, stage)
	if err != nil {
		t.Fatal(err)
	}

	cut, err = core.GetCut(ctx, game.ID)
	if err != nil {
		t.Fatal(err)
	}
	if cut.State != core.CutStateCompleted {
		t.Fatal("現在的狀態必須是CutStateCompleted")
	}
}
