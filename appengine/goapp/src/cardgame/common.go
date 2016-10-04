package cardgame

import (
	"appengine"
	"appengine/datastore"
)

// 這個專案用的根群組
// 只有建立的Game主鍵要依附它外
// 其它的主鍵都依附於Game主鍵
func CardGameKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "CardGame", "Han", 0, nil)
}

// Game主鍵
// 每次建立一個牌局都會建立一個Game主鍵
// 所有Goal或是Cut鍵都會依附在對應的Game主鍵之下
func GameKey(ctx appengine.Context, gameID string) *datastore.Key {
	return datastore.NewKey(ctx, "Game", gameID, 0, CardGameKey(ctx))
}
