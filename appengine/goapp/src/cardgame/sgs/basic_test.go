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

	var game core.Game
	game, err = CreateGame(ctx, "first game")
	if err != nil {
		t.Fatal(err)
	}
	game, err = InitCardSet(ctx, game, core.UserA, []string{"22", "22"})
	if err != nil {
		t.Fatal(err)
	}
}
