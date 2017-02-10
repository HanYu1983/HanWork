package sgs

import (
	"appengine/aetest"
	"testing"
	"appengine"
	core "cardgame3/core"
	"appengine/datastore"
)

func TestBasicAttack(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	var game Game
	var table core.CardTable

	t.Log("建立遊戲")
	game, err = NewGame(ctx, "temp")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("初始配置")
	game, unitRef22, err := AddCard(ctx, game, UserA+Position1, UserA, "22")
	if err != nil {
		t.Fatal(err)
	}
	game, unitRef85, err := AddCard(ctx, game, UserA+Position3, UserA, "85")
	if err != nil {
		t.Fatal(err)
	}
	game, unitRef105, err := AddCard(ctx, game, UserA+Position5, UserA, "105")
	if err != nil {
		t.Fatal(err)
	}
	game, unitRef105InUserB, err := AddCard(ctx, game, UserB+Hand, UserB, "105")
	if err != nil {
		t.Fatal(err)
	}
	game, unitRef28InUserB, err := AddCard(ctx, game, UserB+Position2, UserB, "28")
	if err != nil {
		t.Fatal(err)
	}

	var _ = unitRef105

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

	t.Log("直接到行為階段")
	game.CurrentPhase = ActionPhase

	t.Log("收集指令")
	var cmds []core.Command
	cmds, err = CollectCommand(ctx, game, UserA, cmds)
	t.Log(cmds)

	if len(cmds) != 4 {
		t.Fatal("必須有4個行動")
	}

	var unitRef22AttackCmd core.Command
	var unitRef105AttackCmd core.Command
	var unitRef85AttackCmd core.Command
	var passCmd core.Command
	for _, cmd := range cmds {
		switch  {
		case cmd.Description == "讓過":
			passCmd = cmd
		case cmd.Parameters.Get("cardId") == unitRef22:
			unitRef22AttackCmd = cmd
		case cmd.Parameters.Get("cardId") == unitRef85:
			unitRef85AttackCmd = cmd
		case cmd.Parameters.Get("cardId") == unitRef105:
			unitRef105AttackCmd = cmd
		}
	}
	if unitRef22AttackCmd.Description == "" {
		t.Fatal("必須有ref22的攻擊指令")
	}
	if unitRef85AttackCmd.Description == "" {
		t.Fatal("必須有ref85的攻擊指令")
	}
	if unitRef105AttackCmd.Description == "" {
		t.Fatal("必須有ref105的攻擊指令")
	}
	if passCmd.Description == "" {
		t.Fatal("必須有讓過指令")
	}

	t.Log("青洲探馬宣告攻擊")
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		unitRef22AttackCmd,
	})

	game, _ = handleLoop(ctx, game)

	if len(game.Player[UserB].Token) != 1 {
		t.Log(game.Player)
		t.Fatal("玩家B必須有1個傷害標記")
	}

	t.Log("孫權宣告攻擊")
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		unitRef105AttackCmd,
	})

	game, _ = handleLoop(ctx, game)

	if len(game.Player[UserB].Token) != 4 {
		t.Fatal("玩家B必須有4個傷害標記")
	}

	t.Log("青洲探馬出現在對面陣地")
	table, err = core.MoveCard(ctx, game.CardTable, UserB+Hand, UserB+Position1, 0, unitRef105InUserB)
	if err != nil {
		t.Fatal(err)
	}
	game.CardTable = table


	t.Log("青洲探馬宣告攻擊")
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		unitRef22AttackCmd,
	})

	t.Log("測試記錄和讀取")
	groupKey := datastore.NewKey(ctx, "Group", "temp", 0, nil)
	SaveGame(ctx, game, groupKey)
	game, err = LoadGame (ctx, game.ID, groupKey)
	if err != nil {
		t.Fatal(err)
	}

	game, _ = handleLoop(ctx, game)
	// 呼叫多次並不會造成任何副作用
	game, _ = handleLoop(ctx, game)
	game, _ = handleLoop(ctx, game)

	if len(game.CardState[unitRef105InUserB].Token) != 1 {
		t.Fatal("玩家B的孫權必須有1個傷害標記")
	}

	t.Log("青洲探馬連續宣告攻擊")
	for i := 0; i < 5; i += 1 {
		game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
			unitRef22AttackCmd,
		})
		game, _ = handleLoop(ctx, game)
	}

	if game.CardTable.Card[unitRef105InUserB].CardStack != UserB+Graveyard {
		t.Fatal("玩家B的孫權必須在墓地")
	}

	t.Log("青洲探馬使用轉移")
	game, err = PlayerMoveUnit(ctx, game, UserA, PositionID(UserA, 2), unitRef22)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)

	if game.CardTable.Card[unitRef22].CardStack != UserA+Graveyard {
		t.Fatal("青洲探馬被迎擊死亡後應當在墓地")
	}

	t.Log("張遼使用轉移")
	game, err = PlayerMoveUnit(ctx, game, UserA, PositionID(UserA, 2), unitRef85)
	if err != nil {
		t.Fatal(err)
	}
	game, _ = handleLoop(ctx, game)

	if game.CardTable.Card[unitRef28InUserB].CardStack != UserB+Graveyard {
		t.Fatal("三江城蛮丁被突擊死亡後應當在墓地")
	}

	if game.CardTable.Card[unitRef85].CardStack != UserA+Graveyard {
		t.Fatal("張遼被突擊死亡後應當在墓地")
	}
}