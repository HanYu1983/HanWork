package sgs

import (
	"appengine/aetest"
	core "cardgame2/core"
	"testing"
)

func TestBasic(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	var game Game
	var desk core.Desktop
	var p core.Procedure
	var c core.Command
	var cardIds []int
	var card core.Card

	t.Log("安裝卡包")
	err = InstallPackage(ctx)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立遊戲")
	game, desk, err = CreateGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}
	p, err = core.LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("初始配置")
	desk, cardIds, err = core.AddCards(ctx, desk, core.UserA+CardStackHand, core.UserA, []string{"116"})
	if err != nil {
		t.Fatal(err)
	}
	card116 := cardIds[0]

	desk, _, err = core.AddCards(ctx, desk, core.UserA+CardStackMana, core.UserA, []string{"179", "179", "179"})
	if err != nil {
		t.Fatal(err)
	}

	desk, _, err = core.AddCards(ctx, desk, core.UserA+CardStackGraveyard, core.UserA, []string{"105"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, desk)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使用者打出吴夫人")
	game, desk, p, err = InvokePlayCardFrom(ctx, game, desk, p, core.UserA, core.UserA+CardStackHand, 1, card116)

	err = core.SaveProcedure(ctx, "first game", p)
	if err != nil {
		t.Fatal(err)
	}
	p, err = core.LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發出牌前事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "OnPlayCardFromBF" {
		t.Fatal("OnPlayCardFromBF")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("執行打出牌的效果")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "PlayCardFrom" {
		t.Fatal("PlayCardFrom")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	err = core.SaveProcedure(ctx, "first game", p)
	if err != nil {
		t.Fatal(err)
	}
	p, err = core.LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發打出牌後的事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "OnPlayCardFromAF" {
		t.Fatal("OnPlayCardFromAF")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("誘發吳夫人能力")
	t.Log("觸發抽牌前事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "OnTakeCardFromBF" {
		t.Fatal("OnTakeCardFromBF")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("實際抽出主公")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "TakeCardFrom" {
		t.Fatal("TakeCardFrom")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發抽牌後事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "OnTakeCardFromAF" {
		t.Fatal("OnTakeCardFromAF")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("檢查有沒有抽到主公")
	for _, cardId := range desk.CardStack[core.UserA+CardStackHand].Card {
		card = desk.Card[cardId]
		if card.Ref == "105" {
			break
		}
	}
	if card.Ref != "105" {
		t.Fatal("必須有抽到主公")
	}
}
