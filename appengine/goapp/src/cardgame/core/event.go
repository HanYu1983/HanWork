package core

import (
	"appengine"
)

type Listener func(appengine.Context, Game, string, interface{}) error

var (
	Listeners = []Listener{}
)

func AddListener(l Listener) {
	Listeners = append(Listeners, l)
}

func NotifyEvent(ctx appengine.Context, game Game, evt string, parameters interface{}) error {
	var err error
	for _, l := range Listeners {
		err = l(ctx, game, evt, parameters)
		if err != nil {
			return err
		}
	}
	return nil
}
