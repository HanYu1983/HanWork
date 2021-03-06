package ask

import (
	"appengine/aetest"
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

	t.Log("建立遊戲first game")
	game, err = CreateGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立牌堆john-drawStack")
	game, err = CreateCardStack(ctx, game, "john-drawStack", "drawStack")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立cardA")
	cardA, err := CreateCard(ctx, game, "KD-0")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("將cardA加到john-drawStack")
	game, err = AddCardTo(ctx, game, cardA, "john-drawStack")
	if err != nil {
		t.Fatal(err)
	}
	if len(game.CardStack[0].Card) != 1 {
		t.Fatal("john-drawStack牌堆的卡數必須是1")
	}
	game, err = AddCardTo(ctx, game, cardA, "john-drawStack2")
	if err != ErrCardStackNotExist {
		t.Fatal("加入的沒有的牌堆必須丟出例外")
	}

	t.Log("建立牌堆john-hand")
	game, err = CreateCardStack(ctx, game, "john-hand", "hand")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("將cardA由john-drawStack移到john-hand")
	game, err = MoveCardTo(ctx, game, cardA, "john-drawStack", "john-hand", 0)
	if err != nil {
		t.Fatal(err)
	}
	if len(game.CardStack[0].Card) != 0 {
		t.Fatal("john-drawStack的牌堆卡數必須為0")
	}
	if len(game.CardStack[1].Card) != 1 {
		t.Fatal("john-hand的牌堆卡數必須為1")
	}
	if game.CardStack[1].Card[0] != cardA {
		t.Fatal("john-hand的卡必須是cardA")
	}

	t.Log("再將cardA由john-drawStack移到john-hand")
	game, err = MoveCardTo(ctx, game, cardA, "john-drawStack", "john-hand", 0)
	if err != ErrCardNotExist {
		t.Fatal("將要移的牌若不存在，必須丟出例外")
	}

}
