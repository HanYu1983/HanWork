package core

import (
	"appengine"
)

type Listener func(appengine.Context, Game, string, interface{})

var (
	Listeners = []Listener{}
)

func AddListener(l Listener) {
	Listeners = append(Listeners, l)
}

func NotifyEvent(ctx appengine.Context, game Game, evt string, parameters interface{}) {
	for _, l := range Listeners {
		l(ctx, game, evt, parameters)
	}
}
