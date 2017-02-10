package sgs

import (
	"appengine/aetest"
	"testing"
	"appengine"
	core "cardgame3/core"
)

func TestPhase(t *testing.T) {
	var err error
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	var game Game

	game, err = NewGame(ctx, "temp")
	if err != nil {
		t.Fatal(err.Error())
	}

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{BasicCommandHandler})

	handleLoop := func(ctx appengine.Context, game Game) (Game, error) {
		game, err = PerformCommandHandler(HandleCommand, ctx, game)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				t.Log(err.Error())
			default:
				t.Fatal(err)
			}
			return game, nil
		}
		return game, nil
	}

	t.Log("初始配置")
	game, _, err = AddCards(ctx, game, UserB+Hand, UserB, []string{"22", "22", "22", "22", "22", "22", "22"})
	if err != nil {
		t.Fatal(err)
	}

	game, _, err = AddCards(ctx, game, UserB+Library, UserB, []string{"22"})
	if err != nil {
		t.Fatal(err)
	}

	if game.CurrentPhase != UntapStep {
		t.Fatal("一開始必須是重置階段")
	}
	if game.OffensivePlayer != UserA {
		t.Fatal("進攻玩家必須是UserA")
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}
	if len(game.CardTable.CardStack[UserA+Hand].Card) != 0 {
		t.Fatal("一開始手牌有0張")
	}

	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}

	game, _ = handleLoop(ctx, game)
	t.Log(game.Procedure)

	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}

	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}
	t.Log("準備階段玩家A讓過")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家A再次讓過")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家B讓過")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}
	if len(game.CardTable.CardStack[UserA+Hand].Card) != 0 {
		t.Fatal("第一回合不能抓牌，手牌還是只能0張")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != UntapStep {
		t.Fatal("現在必須是重置階段")
	}
	if game.OffensivePlayer != UserB {
		t.Fatal("進攻玩家必須是UserB")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("=========換玩家B==========")
	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}
	if len(game.CardTable.CardStack[UserB+Hand].Card) != 7 {
		t.Fatal("一開始手牌有7張")
	}

	t.Log("準備階段玩家B讓過")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家B再次讓過")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家A讓過")
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	if game.OffensivePlayer != UserB {
		t.Fatal("進攻玩家必須是UserB")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, err = PlayerPass(ctx, game, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	t.Log("玩家B選擇棄卡ID")
	var c core.Command
	p := game.Procedure

	c, _ = core.GetCommand(ctx, p)
	t.Log(c)

	if c.User != UserB {
		t.Fatal("必須是玩家B的棄牌事件")
	}
	c.Parameters["cardIds"] = []string{game.CardTable.CardStack[UserB+Hand].Card[0]}
	// 資料補齊了，將責任者切換成系統
	p.Command[c.ID].User = UserSys

	t.Log("再讓系統處理")
	game, _ = handleLoop(ctx, game)

	if len(game.CardTable.CardStack[UserB+Hand].Card) != 7 {
		t.Fatal("手牌又回復成7張")
	}

	game, err = PlayerPass(ctx, game, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)

	if game.CurrentPhase != UntapStep {
		t.Fatal("現在必須是重置階段")
	}
	if game.OffensivePlayer != UserA {
		t.Fatal("進攻玩家必須是UserB")
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserB")
	}
}
