package sgs

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
)

type GameWrapper struct {
	Byte []byte
}

// 讀取陣面對決
func LoadGame(ctx appengine.Context, gameId string, group *datastore.Key) (Game, error) {
	key := datastore.NewKey(ctx, "SgsGame", gameId, 0, group)
	var game Game
	var err error
	var wrapper GameWrapper
	err = datastore.Get(ctx, key, &wrapper)
	if err != nil {
		return game, err
	}
	err = json.Unmarshal(wrapper.Byte, &game)
	if err != nil {
		return game, err
	}
	return game, nil
}

// 記錄陣面對決
func SaveGame(ctx appengine.Context, game Game, group *datastore.Key) (Game, error) {
	var err error
	bytes, err := json.Marshal(game)
	if err != nil {
		return game, err
	}
	key := datastore.NewKey(ctx, "SgsGame", game.ID, 0, group)
	_, err = datastore.Put(ctx, key, &GameWrapper{bytes})
	if err != nil {
		return game, err
	}
	return game, nil
}
