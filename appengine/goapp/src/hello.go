package hello

import (
	cg "cardgame"
	"fmt"
	"net/http"
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
	http.HandleFunc("/go/cardgame/init", cg.InitGameHttp)
	http.HandleFunc("/go/cardgame/goal", cg.GetGoalHttp)
	http.HandleFunc("/go/cardgame/goal/dep", cg.GetDependsGoal)
	http.HandleFunc("/go/cardgame/solve", cg.SolveGoalHttp)
	http.HandleFunc("/go/cardgame/step", cg.StepGoalHttp)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
