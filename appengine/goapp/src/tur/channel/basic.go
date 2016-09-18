package channel

import (
	"appengine"
	"appengine/channel"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
)

// 統一回傳資訊
func Recover(w io.Writer) {
	if err := recover(); err != nil {
		switch err.(type) {
		case string:
			Json(w, nil, errors.New(err.(string)))
		case error:
			Json(w, nil, err.(error))
		default:
			Json(w, nil, errors.New(fmt.Sprintf("err:%s", err)))
		}
	}
}

// 回傳json陣列:[error, info]
func Json(w io.Writer, ret interface{}, err error) {
	var total []interface{}
	if err != nil {
		total = []interface{}{err.Error(), nil}
	} else {
		total = []interface{}{nil, ret}
	}
	jsonstr, _ := json.Marshal(total)
	fmt.Fprint(w, string(jsonstr))
}

// 給予登入的前台channel token
// 前台用這個token建立前台的channel物件
func Login(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	ctx := appengine.NewContext(r)

	r.ParseForm()
	if len(r.Form["user"]) == 0 {
		panic("需要user")
	}

	username := r.Form["user"][0]
	token, err := channel.Create(ctx, username)
	if err != nil {
		panic(err)
	}

	Json(w, token, nil)
}

// 廣播訊息
// 傳訊息給所有玩家的channel
// channel會在OnChannelConnected中被存入datastore
func SendMessage(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	ctx := appengine.NewContext(r)
	var err error
	users, err := GetUsers(ctx)
	if err != nil {
		panic(err)
	}
	for _, user := range users {
		err = channel.Send(ctx, user.Name, "Game over!")
		if err != nil {
			panic(err)
		}
	}
	Json(w, nil, nil)
}

// 監聽channel的創建
// 在這裡會將玩家所屬的channel name存入datastore
// 要在hello.go中handle這個path:"/_ah/channel/connected/"
func OnChannelConnected(w http.ResponseWriter, r *http.Request) {
	var err error
	ctx := appengine.NewContext(r)

	r.ParseForm()
	username := r.FormValue("from")

	user := User{Name: username}
	err = SaveUser(ctx, user)
	if err != nil {
		panic(err)
	}

	ctx.Infof("OnChannelConnected: %v", username)
}

// 監聽channel的離線
// 在這裡從datastore中移除暫存的channel name
// 要在hello.go中handle這個path:"/_ah/channel/disconnected/"
func OnChannelDisconnected(w http.ResponseWriter, r *http.Request) {
	var err error
	ctx := appengine.NewContext(r)

	r.ParseForm()
	username := r.FormValue("from")

	err = DeleteUser(ctx, username)
	if err != nil {
		ctx.Errorf("onChannelDisconnected err:%v", err)
	}

	ctx.Infof("onChannelDisconnected %v", username)
}
