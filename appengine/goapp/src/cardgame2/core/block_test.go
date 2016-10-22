package core

import (
	"appengine/aetest"
	"net/url"
	"testing"
)

func TestBlock(t *testing.T) {
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx
	UserA := "A"
	UserSys := "Sys"
	var p Procedure
	var c Command
	var has bool
	p, err = LoadProcedure(ctx, "first game")
	p = AddBlock(ctx, p, "", []Command{
		{User: UserSys, Description: "call OnMoveBF"},
		{User: UserSys, Description: "call Move"},
		{User: UserSys, Description: "call OnMoveAF"},
	})

	c, _ = GetCommand(ctx, p)
	if c.Description != "call OnMoveBF" {
		t.Fatal("2")
	}
	p = AddBlock(ctx, p, "", []Command{
		{
			User:        UserA,
			Description: "選2張{cardIds}，啟動{cardId}的{abilityId}",
			Parameters:  url.Values{"cardId": {"3"}, "abilityId": {"中毒"}},
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
	c.Parameters["cardIds"] = []string{"1", "2"}
	cardIds := c.Parameters["cardIds"]
	cardId := c.Parameters["cardId"][0]
	abilityId := c.Parameters["abilityId"][0]

	if cardId != "3" {
		t.Fatal("4")
	}
	if abilityId != "中毒" {
		t.Fatal("5")
	}
	// 啟動卡牌能力
	p = AddBlock(ctx, p, "", []Command{
		{
			User:        UserSys,
			Description: "call 中毒(cardId)",
			Parameters: url.Values{
				"cardId": {cardIds[0]},
			},
		},
		{
			User:        UserSys,
			Description: "call 中毒(cardId)",
			Parameters: url.Values{
				"cardId": {cardIds[1]},
			},
		},
	})
	p = CompleteCommand(ctx, p, c)

	c, _ = GetCommand(ctx, p)
	if c.Description != "call 中毒(cardId)" {
		t.Fatal("6")
	}
	if c.Parameters["cardId"][0] != cardIds[0] {
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
	if c.Parameters["cardId"][0] != cardIds[1] {
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
