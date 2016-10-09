package core

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

	var desk Desktop
	t.Log("建立遊戲first game")
	desk, err = CreateDesktop(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立牌堆john-drawStack")
	desk, err = AddCardStack(ctx, desk, "john-drawStack", "drawStack")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("新增cardA並加到john-drawStack")
	desk, cardA, err := AddCard(ctx, desk, "john-drawStack", "john", "KD-0")
	if err != nil {
		t.Fatal(err)
	}
	if len(desk.CardStack["john-drawStack"].Card) != 1 {
		t.Fatal("john-drawStack牌堆的卡數必須是1")
	}
	desk, _, err = AddCard(ctx, desk, "john-drawStack2", "john", "KD-0")
	if err != ErrCardStackNotExist {
		t.Fatal("加入的沒有的牌堆必須丟出例外")
	}

	t.Log("建立牌堆john-hand")
	desk, err = AddCardStack(ctx, desk, "john-hand", "hand")
	if err != nil {
		t.Fatal(err)
	}

	t.Log("將cardA由john-drawStack移到john-hand")
	desk, err = MoveCard(ctx, desk, "john-drawStack", "john-hand", 0, cardA)
	if err != nil {
		t.Fatal(err)
	}
	if len(desk.CardStack["john-drawStack"].Card) != 0 {
		t.Fatal("john-drawStack的牌堆卡數必須為0")
	}
	if len(desk.CardStack["john-hand"].Card) != 1 {
		t.Fatal("john-hand的牌堆卡數必須為1")
	}
	if desk.CardStack["john-hand"].Card[0] != cardA {
		t.Fatal("john-hand的卡必須是cardA")
	}

	t.Log("再將cardA由john-drawStack移到john-hand")
	desk, err = MoveCard(ctx, desk, "john-drawStack", "john-hand", 0, cardA)
	if err != ErrCardNotExist {
		t.Fatal("將要移的牌若不存在，必須丟出例外")
	}
	desk, err = SaveDesktop(ctx, desk)
	if err != nil {
		t.Fatal(err)
	}
}
