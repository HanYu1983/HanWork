package cardgame

import (
	"appengine"
	"appengine/datastore"
)

func CardGameKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "CardGame", "Han", 0, nil)
}

func GameKey(ctx appengine.Context, gameID string) *datastore.Key {
	return datastore.NewKey(ctx, "Game", gameID, 0, CardGameKey(ctx))
}
