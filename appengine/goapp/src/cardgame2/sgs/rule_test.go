package sgs

import (
	"appengine/aetest"
	core "cardgame2/core"
	"strconv"
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
	desk, cardIds, err = core.AddCards(ctx, desk, UserA+Hand, UserA, []string{"116"})
	if err != nil {
		t.Fatal(err)
	}
	card116 := cardIds[0]

	desk, _, err = core.AddCards(ctx, desk, UserA+TerritoryZone, UserA, []string{"179", "179", "179"})
	if err != nil {
		t.Fatal(err)
	}

	desk, _, err = core.AddCards(ctx, desk, UserA+Graveyard, UserA, []string{"105"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, desk)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使用者打出吴夫人")
	game, desk, p, err = InvokePlayCardFrom(ctx, game, desk, p, UserA, UserA+Hand, 1, card116)

	err = core.SaveProcedure(ctx, "first game", p)
	if err != nil {
		t.Fatal(err)
	}
	p, err = core.LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{CardCommandHandler, BasicCommandHandler})

	t.Log("觸發出牌前事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡將打到陣地" {
		t.Fatal("卡將打到陣地")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("執行打出牌的效果")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡打到陣地" {
		t.Fatal("卡打到陣地")
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

	t.Log("觸發卡移動前的事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡將移動" {
		t.Fatal("卡將移動")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	_, err = SaveGame(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	game, err = LoadGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("卡移動")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡移動" {
		t.Fatal("卡移動")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發卡移動後的事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡移動後" {
		t.Fatal("卡移動後")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("誘發吳夫人能力")
	t.Log("觸發抽牌前事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "將抽到卡" {
		t.Fatal("將抽到卡")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("實際抽出主公")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "抽到卡" {
		t.Fatal("抽到卡")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發抽牌後事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "抽到卡後" {
		t.Fatal("抽到卡後")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("觸發打出牌後的事件")
	c, _ = core.GetCommand(ctx, p)
	if c.Description != "卡打到陣地後" {
		t.Fatal("卡打到陣地後")
	}
	game, desk, p, err = HandleCommand(ctx, game, desk, p, c)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("檢查有沒有抽到主公")
	for _, cardId := range desk.CardStack[UserA+Hand].Card {
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
	desk, _, err = core.AddCards(ctx, desk, UserB+Hand, UserB, []string{"22", "22", "22", "22", "22", "22", "22"})
	if err != nil {
		t.Fatal(err)
	}

	desk, _, err = core.AddCards(ctx, desk, UserB+Library, UserB, []string{"22"})
	if err != nil {
		t.Fatal(err)
	}

	t.Log("安裝卡組資訊")
	game, err = InstallCardInfo(ctx, game, desk)
	if err != nil {
		t.Fatal(err)
	}

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{BasicCommandHandler})

	handleLoop := func() {
		game, desk, p, err = PerformCommandHandler(HandleCommand, ctx, game, desk, p)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				t.Log(err.Error())
			default:
				t.Fatal(err)
			}
		}
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
	if len(desk.CardStack[UserA+Hand].Card) != 0 {
		t.Fatal("一開始手牌有0張")
	}

	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}

	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}
	t.Log("準備階段玩家A讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家A再次讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("準備階段玩家B讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}
	if len(desk.CardStack[UserA+Hand].Card) != 0 {
		t.Fatal("第一回合不能抓牌，手牌還是只能0張")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != UntapStep {
		t.Fatal("現在必須是重置階段")
	}
	if game.OffensivePlayer != UserB {
		t.Fatal("進攻玩家必須是UserB")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	err = core.SaveProcedure(ctx, "first game", p)
	if err != nil {
		t.Fatal(err)
	}
	p, err = core.LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("=========換玩家B==========")
	t.Log("重置階段，主動玩家直接呼叫讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != StandbyStep {
		t.Fatal("現在必須是準備階段")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}
	if len(desk.CardStack[UserB+Hand].Card) != 7 {
		t.Fatal("一開始手牌有7張")
	}

	_, err = SaveGame(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	game, err = LoadGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("準備階段玩家B讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家B再次讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		if err.Error() != "優先權在對方身上" {
			t.Fatal(err)
		}
	}
	if game.PriorityPlayer != UserA {
		t.Fatal("優先權必須在UserA")
	}

	t.Log("準備階段玩家A讓過")
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if game.CurrentPhase != DrawStep {
		t.Fatal("現在必須是抽牌階段")
	}
	if game.PriorityPlayer != UserB {
		t.Fatal("優先權必須在UserB")
	}

	t.Log("玩家A,B讓過，進入行動階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != ActionPhase {
		t.Fatal("現在必須是行動階段")
	}

	t.Log("玩家A,B讓過，進入結束階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != EndStep {
		t.Fatal("現在必須是結束階段")
	}

	if game.OffensivePlayer != UserB {
		t.Fatal("進攻玩家必須是UserB")
	}

	t.Log("玩家A,B讓過，進入棄牌階段")
	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	game, desk, p, err = Pass(ctx, game, desk, p, UserA)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
	if game.CurrentPhase != DiscardStep {
		t.Fatal("現在必須是棄牌階段")
	}

	t.Log("玩家B選擇棄卡ID")
	c, _ = core.GetCommand(ctx, p)
	if c.User != UserB {
		t.Fatal("必須是玩家B的棄牌事件")
	}
	c.Parameters["cardIds"] = []string{strconv.Itoa(desk.CardStack[UserB+Hand].Card[0])}
	// 資料補齊了，將責任者切換成系統
	p.Command[c.ID].User = UserSys

	t.Log("再讓系統處理")
	handleLoop()

	if len(desk.CardStack[UserB+Hand].Card) != 7 {
		t.Fatal("手牌又回復成7張")
	}

	game, desk, p, err = Pass(ctx, game, desk, p, UserB)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()
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

func TestBasicAttack(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	var game Game
	var desk core.Desktop
	var p core.Procedure

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
	game, desk, unitRef22, err := AddCard(ctx, game, desk, UserA+Position1, UserA, "22")
	if err != nil {
		t.Fatal(err)
	}
	game, desk, unitRef85, err := AddCard(ctx, game, desk, UserA+Position3, UserA, "85")
	if err != nil {
		t.Fatal(err)
	}
	game, desk, unitRef105, err := AddCard(ctx, game, desk, UserA+Position5, UserA, "105")
	if err != nil {
		t.Fatal(err)
	}
	game, desk, unitRef105InUserB, err := AddCard(ctx, game, desk, UserB+Hand, UserB, "105")
	if err != nil {
		t.Fatal(err)
	}
	game, desk, unitRef28InUserB, err := AddCard(ctx, game, desk, UserB+Position2, UserB, "28")
	if err != nil {
		t.Fatal(err)
	}

	var HandleCommand CommandHandler
	HandleCommand = ReduceCommandHandler([]CommandHandler{BasicCommandHandler})

	handleLoop := func() {
		game, desk, p, err = PerformCommandHandler(HandleCommand, ctx, game, desk, p)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				t.Log(err.Error())
			default:
				t.Fatal(err)
			}
		}
	}

	var _ = handleLoop
	t.Log("直接到行為階段")
	game.CurrentPhase = ActionPhase

	t.Log("收集指令")
	var cmds []core.Command
	cmds, err = CollectCommand(ctx, game, desk, p, UserA, cmds)

	if len(cmds) != 4 {
		t.Fatal("必須有4個行動")
	}
	if cmds[0].Description != "{cardId}宣告攻擊" {
		t.Fatal("第1個必須是宣告攻擊")
	}
	if cmds[0].Parameters.Get("cardId") != strconv.Itoa(unitRef22) {
		t.Fatal("第1個宣告攻擊的單位必須是青洲探馬")
	}
	if cmds[1].Description != "{cardId}宣告攻擊" {
		t.Fatal("第2個必須是宣告攻擊")
	}
	if cmds[1].Parameters.Get("cardId") != strconv.Itoa(unitRef85) {
		t.Fatal("第2個宣告攻擊的單位必須是ref85")
	}
	if cmds[2].Description != "{cardId}宣告攻擊" {
		t.Fatal("第3個必須是宣告攻擊")
	}
	if cmds[2].Parameters.Get("cardId") != strconv.Itoa(unitRef105) {
		t.Fatal("第3個宣告攻擊的單位必須是ref105")
	}
	if cmds[3].Description != "讓過" {
		t.Fatal("第4個必須是讓過")
	}

	t.Log("青洲探馬宣告攻擊")
	game, desk, p, err = InvokeUnitAttack(ctx, game, desk, p, UserA, unitRef22)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if len(game.Player[UserB].Token) != 1 {
		t.Fatal("玩家B必須有1個傷害標記")
	}

	t.Log("孫權宣告攻擊")
	game, desk, p, err = InvokeUnitAttack(ctx, game, desk, p, UserA, unitRef105)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if len(game.Player[UserB].Token) != 4 {
		t.Fatal("玩家B必須有4個傷害標記")
	}

	t.Log("產生孫權在青洲探馬對面陣地")
	desk, err = core.MoveCard(ctx, desk, UserB+Hand, UserB+Position1, 0, unitRef105InUserB)
	if err != nil {
		t.Fatal(err)
	}

	_, err = SaveGame(ctx, game)
	if err != nil {
		t.Fatal(err)
	}
	game, err = LoadGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("青洲探馬宣告攻擊")
	game, desk, p, err = InvokeUnitAttack(ctx, game, desk, p, UserA, unitRef22)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if len(game.CardInfo[unitRef105InUserB].Token) != 1 {
		t.Fatal("玩家B的孫權必須有1個傷害標記")
	}

	t.Log("青洲探馬連續宣告攻擊")
	for i := 0; i < 5; i += 1 {
		game, desk, p, err = InvokeUnitAttack(ctx, game, desk, p, UserA, unitRef22)
		if err != nil {
			t.Fatal(err)
		}
		handleLoop()
	}

	if desk.Card[unitRef105InUserB].CardStack != UserB+Graveyard {
		t.Fatal("玩家B的孫權必須在墓地")
	}

	t.Log("青洲探馬使用轉移")
	game, desk, p, err = UnitMove(ctx, game, desk, p, UserA, PositionID(UserA, 2), unitRef22)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if desk.Card[unitRef22].CardStack != UserA+Graveyard {
		t.Fatal("青洲探馬被迎擊死亡後應當在墓地")
	}

	t.Log("張遼使用轉移")
	game, desk, p, err = UnitMove(ctx, game, desk, p, UserA, PositionID(UserA, 2), unitRef85)
	if err != nil {
		t.Fatal(err)
	}
	handleLoop()

	if desk.Card[unitRef28InUserB].CardStack != UserB+Graveyard {
		t.Fatal("三江城蛮丁被突擊死亡後應當在墓地")
	}

	if desk.Card[unitRef85].CardStack != UserA+Graveyard {
		t.Fatal("張遼被突擊死亡後應當在墓地")
	}
}
