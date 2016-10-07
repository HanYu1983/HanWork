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

	manaStackId := core.HasCardStack(ctx, stage, core.UserA+CardStackMana)
	handStackId := core.HasCardStack(ctx, stage, core.UserA+CardStackHand)

	var cards []core.Card
	t.Log("加入玩家卡組")
	stage, _, err = core.AddCardsTo(ctx, stage, []string{"179"}, core.UserA+CardStackBase, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	stage, cards, err = core.AddCardsTo(ctx, stage, []string{"179", "179", "179"}, core.UserA+CardStackMana, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	// 將加入mana的卡翻成正面
	for idx, _ := range stage.CardStack[manaStackId].Card {
		stage.CardStack[manaStackId].Card[idx].Face = core.FaceOpen
	}

	t.Log("確認初始狀態")
	for _, card := range cards {
		if card.Direction != core.DirectionUntap {
			t.Fatal("剛加入的卡必須是直立狀態")
		}
	}
	if len(stage.CardStack[handStackId].Card) != 0 {
		t.Fatal("手牌必須有0張卡")
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
	if len(actions) == 0 {
		t.Fatal("必須有動作方案")
	}
	if actions[0].Description != "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
		t.Fatal("動作方案必須是-使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}")
	}
	if actions[0].FromID != cards[0].ID {
		t.Fatal("觸發的卡必須是cards[0]")
	}

	info := GetCardInfo(game, cards[0])

	t.Log("執行的卡是", info)
	if info.Prototype.Name != "魏领土" {
		t.Fatal("必須是魏领土")
	}

	t.Log("前台發出行動命令")
	// 前台先複制一份
	// 把剩下的參數補足
	userAction := actions[0]
	userAction.Parameters["cardIds"] = []string{cards[0].ID, cards[1].ID, cards[2].ID}

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

	t.Log("解決效果，解決了把地蓋掉抽一張，但因為沒牌可抽，所以有SgsError會出現")
	game, stage, err = StepSystem(ctx, game, stage)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("確認效果後狀態")

	for _, card := range stage.CardStack[manaStackId].Card {
		if card.Direction != core.DirectionTap {
			t.Fatal("執行完效果後必須是横置狀態")
		}
		if card.ID == cards[0].ID {
			if card.Face != core.FaceClose {
				t.Fatal("發動的卡必須變成反面")
			}
		}
	}
	if len(stage.CardStack[handStackId].Card) != 1 {
		t.Fatal("手牌必須有1張卡")
	}
	if stage.CardStack[handStackId].Card[0].Ref != "179" {
		t.Fatal("必須抽到179的卡")
	}

	t.Log("取得現在切入狀態")
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

	t.Log("取得現在切入狀態")
	cut, err = core.GetCut(ctx, game.ID)
	if err != nil {
		t.Fatal(err)
	}
	if cut.State != core.CutStateCompleted {
		t.Fatal("現在的狀態必須是CutStateCompleted")
	}
}
