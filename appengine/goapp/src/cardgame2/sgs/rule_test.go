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
	desk, cardIds, err = core.AddCards(ctx, desk, core.UserA+Hand, core.UserA, []string{"116"})
	if err != nil {
		t.Fatal(err)
	}
	card116 := cardIds[0]

	desk, _, err = core.AddCards(ctx, desk, core.UserA+TerritoryZone, core.UserA, []string{"179", "179", "179"})
	if err != nil {
		t.Fatal(err)
	}

	desk, _, err = core.AddCards(ctx, desk, core.UserA+Graveyard, core.UserA, []string{"105"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, desk)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使用者打出吴夫人")
	game, desk, p, err = InvokePlayCardFrom(ctx, game, desk, p, core.UserA, core.UserA+Hand, 1, card116)

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
	for _, cardId := range desk.CardStack[core.UserA+Hand].Card {
		card = desk.Card[cardId]
		if card.Ref == "105" {
			break
		}
	}
	if card.Ref != "105" {
		t.Fatal("必須有抽到主公")
	}

	_, err = SaveGame(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
}

func TestPhase(t *testing.T) {
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
	var has bool

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
	desk, _, err = core.AddCards(ctx, desk, core.UserB+Hand, core.UserB, []string{"22", "22", "22", "22", "22", "22", "22"})
	if err != nil {
		t.Fatal(err)
	}

	desk, _, err = core.AddCards(ctx, desk, core.UserB+Library, core.UserB, []string{"22"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, desk)
	if err != nil {
		t.Fatal(err)
	}

	handleLoop := func() {
		for {
			c, has = core.GetCommand(ctx, p)
			t.Log(c)
			if has == false {
				p = core.NewProcedure(ctx)
				break
			}
			if c.User != core.UserSys {
				break
			}
			game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
			if err != nil {
				switch err.(type) {
				case TargetMissingError:
					t.Log(err.Error())
					p = core.CompleteCommand(ctx, p, c)
				default:
					t.Fatal(err)
				}
			}
		}
	}

	if game.CurrentPhase != UntapStep {
		t.Fatal("一開始必須是重置階段")
	}
	if game.OffensivePlayer != PlayerID(core.UserA) {
		t.Fatal("進攻玩家必須是UserA")
	}
	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserA")
	}
	if len(desk.CardStack[core.UserA+Hand].Card) != 0 {
		t.Fatal("一開始手牌有0張")
	}

	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}

	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserA")
	}
	t.Log("準備階段玩家A讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != PlayerID(core.UserB) {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家A再次讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != PlayerID(core.UserB) {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家B讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserA")
	}
	if len(desk.CardStack[core.UserA+Hand].Card) != 0 {
		t.Fatal("第一回合不能抓牌，手牌還是只能0張")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != UntapStep {
		t.Fatal("現在必須是重置階段")
	}
	if game.OffensivePlayer != PlayerID(core.UserB) {
		t.Fatal("進攻玩家必須是UserB")
	}
	if game.PriorityPlayer != PlayerID(core.UserB) {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("=========換玩家B==========")
	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}
	if game.PriorityPlayer != PlayerID(core.UserB) {
		t.Fatal("優先權必須在UserB")
	}
	if len(desk.CardStack[core.UserB+Hand].Card) != 7 {
		t.Fatal("一開始手牌有7張")
	}

	t.Log("準備階段玩家B讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家B再次讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家A讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != PlayerID(core.UserB) {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	if game.OffensivePlayer != PlayerID(core.UserB) {
		t.Fatal("進攻玩家必須是UserB")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, core.UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	t.Log("玩家B選擇棄卡ID")
	c, _ = core.GetCommand(ctx, p)
	if c.User != core.UserB {
		t.Fatal("必須是玩家B的棄牌事件")
	}
	c.Parameters["cardIds"] = []float64{float64(desk.CardStack[core.UserB+Hand].Card[0])}
	p = core.CompleteCommand(ctx, p, c)
	t.Log("再讓系統處理")
	handleLoop()

	if len(desk.CardStack[core.UserB+Hand].Card) != 7 {
		t.Fatal("手牌又回復成7張")
	}

	game, desk, p, err = Pass(ctx, game, desk, p, core.UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != UntapStep {
		t.Fatal("現在必須是重置階段")
	}
	if game.OffensivePlayer != PlayerID(core.UserA) {
		t.Fatal("進攻玩家必須是UserB")
	}
	if game.PriorityPlayer != PlayerID(core.UserA) {
		t.Fatal("優先權必須在UserB")
	}

	var _, _, _, _ = p, c, card, cardIds
}
