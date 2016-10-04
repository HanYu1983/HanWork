package hello

import (
	"fmt"
	"net/http"
	ask "tur/cardgame/ask"
	channel "tur/channel"
	cookie "tur/cookie"
	img "tur/image"
)

func init() {
	// app.yaml中設定的伺服路徑就是go
	http.HandleFunc("/go/", SayHi)
	http.HandleFunc("/go/image/serveImage", img.ServeImage)

	http.HandleFunc("/go/cookie/login", cookie.Login)
	http.HandleFunc("/go/cookie/logout", cookie.Logout)

	http.HandleFunc("/go/channel/login", channel.Login)
	http.HandleFunc("/go/channel/sendMessage", channel.SendMessage)
	// 即時訊息傾聽事件
	http.HandleFunc("/_ah/channel/connected/", channel.OnChannelConnected)
	http.HandleFunc("/_ah/channel/disconnected/", channel.OnChannelDisconnected)

	// cardgame
	http.HandleFunc("/go/cardgame/ask/init", ask.InitGameHttp)
	http.HandleFunc("/go/cardgame/ask/goal", ask.GetGoalHttp)
	http.HandleFunc("/go/cardgame/ask/goal/dep", ask.GetDependsGoal)
	http.HandleFunc("/go/cardgame/ask/solve", ask.SolveGoalHttp)
	http.HandleFunc("/go/cardgame/ask/step", ask.StepGoalHttp)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
