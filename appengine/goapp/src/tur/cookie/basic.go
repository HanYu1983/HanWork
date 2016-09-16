package cookie

import (
	"appengine"
	"fmt"
	"net/http"
	"time"
)

func Login(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	defer func() {
		if err := recover(); err != nil {
			ctx.Errorf("error:%v", err)
			fmt.Fprintf(w, "登入失敗")
		}
	}()
	var err error
	user := "han"
	// 檢查是否已登入
	_, err = r.Cookie("user")
	if err != http.ErrNoCookie {
		fmt.Fprintf(w, "你已經登入")
		return
	}

	// 建立cookie
	duration, err := time.ParseDuration("1h")
	if err != nil {
		panic(err)
	}
	expiration := time.Now().Add(duration)
	cookie := http.Cookie{Name: "user", Path: "/test", Value: user, Expires: expiration}

	// 加入cookie
	http.SetCookie(w, &cookie)
	fmt.Fprintf(w, "登入成功")
}

func Logout(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	defer func() {
		if err := recover(); err != nil {
			ctx.Errorf("error:%v", err)
			fmt.Fprintf(w, "登入失敗")
		}
	}()
	var err error

	// 檢查是否已登出
	userCookie, err := r.Cookie("user")
	if err == http.ErrNoCookie {
		fmt.Fprintf(w, "你已經登出")
		return
	}
	if err != nil {
		panic(err)
	}

	// 刪除Cookie
	userCookie.MaxAge = -1
	http.SetCookie(w, userCookie)
	fmt.Fprintf(w, "登出成功")
}
