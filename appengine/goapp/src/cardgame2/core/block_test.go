package core

import (
	"appengine/aetest"
	"testing"
)

func TestBlock(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	var p Procedure
	var c Command
	var has bool
	p, err = LoadProcedure(ctx, "first game")
	p = AddBlock(ctx, p, []Command{
		{User: UserSys, Description: "call OnMoveBF"},
		{User: UserSys, Description: "call Move"},
		{User: UserSys, Description: "call OnMoveAF"},
	})

	c, _ = GetCommand(ctx, p)
	if c.Description != "call OnMoveBF" {
		t.Fatal("2")
	}
	p = AddBlock(ctx, p, []Command{
		{
			User:        UserA,
			Description: "選2張{cardIds}，啟動{cardId}的{abilityId}",
			Parameters:  map[string]interface{}{"cardId": 3.0, "abilityId": "中毒"},
		},
	})
	p = CompleteCommand(ctx, p, c)

	c, _ = GetCommand(ctx, p)
	// 前台處理
	if c.User != UserA {
		t.Fatal("3")
	}
	if c.Description != "選2張{cardIds}，啟動{cardId}的{abilityId}" {
		t.Fatal("4")
	}

	// 前台上傳完消費的卡Id
	// map裡面不用整數，因為轉成JSON後再轉回來，數字類全部變成float64
	c.Parameters["cardIds"] = []float64{1.0, 2.0}
	cardIds := c.Parameters["cardIds"].([]float64)
	cardId := c.Parameters["cardId"].(float64)
	abilityId := c.Parameters["abilityId"].(string)

	if int(cardId) != 3 {
		t.Fatal("4")
	}
	if abilityId != "中毒" {
		t.Fatal("5")
	}
	// 啟動卡牌能力
	p = AddBlock(ctx, p, []Command{
		{
			User:        UserSys,
			Description: "call 中毒(cardId)",
			Parameters: map[string]interface{}{
				"cardId": cardIds[0],
			},
		},
		{
			User:        UserSys,
			Description: "call 中毒(cardId)",
			Parameters: map[string]interface{}{
				"cardId": cardIds[1],
			},
		},
	})
	p = CompleteCommand(ctx, p, c)

	c, _ = GetCommand(ctx, p)
	if c.Description != "call 中毒(cardId)" {
		t.Fatal("6")
	}
	if c.Parameters["cardId"] != cardIds[0] {
		t.Fatal("7")
	}
	p = CompleteCommand(ctx, p, c)

	err = SaveProcedure(ctx, "first game", p)
	if err != nil {
		t.Fatal(err)
	}

	p, err = LoadProcedure(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	c, _ = GetCommand(ctx, p)
	if c.Description != "call 中毒(cardId)" {
		t.Fatal("8")
	}
	if c.Parameters["cardId"] != cardIds[1] {
		t.Fatal("9")
	}
	p = CompleteCommand(ctx, p, c)

	c, _ = GetCommand(ctx, p)
	if c.Description != "call Move" {
		t.Fatal("10")
	}
	p = CompleteCommand(ctx, p, c)

	c, _ = GetCommand(ctx, p)
	if c.Description != "call OnMoveAF" {
		t.Fatal("11")
	}
	p = CompleteCommand(ctx, p, c)

	c, has = GetCommand(ctx, p)
	if has == true {
		t.Fatal("12")
	}

}
