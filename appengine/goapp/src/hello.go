package hello

import (
	"fmt"
	"net/http"
	ask "tur/cardgame/ask"
	channel "tur/channel"
	cookie "tur/cookie"
	img "tur/image"
	mux "github.com/gorilla/mux"
	sgs "cardgame3/http"
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

	// 測試Ask
	http.HandleFunc("/go/cardgame/ask/init", ask.InitGameHttp)
	http.HandleFunc("/go/cardgame/ask/goal", ask.GetGoalHttp)
	http.HandleFunc("/go/cardgame/ask/goal/dep", ask.GetDependsGoal)
	http.HandleFunc("/go/cardgame/ask/solve", ask.SolveGoalHttp)
	http.HandleFunc("/go/cardgame/ask/step", ask.StepGoalHttp)

	r := mux.NewRouter()
	r.HandleFunc("/go/sgs/room", sgs.RoomList).Methods("GET")
	r.HandleFunc("/go/sgs/room", sgs.NewRoom).Methods("POST")
	r.HandleFunc("/go/sgs/room/{roomId}/join", sgs.JoinRoom).Methods("POST")
	r.HandleFunc("/go/sgs/room/{roomId}/validate", sgs.ValidateRoom).Methods("POST")
	http.Handle("/go/sgs/", r)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
