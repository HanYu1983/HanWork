package hello

import (
	"fmt"
	"net/http"
	cookie "tur/cookie"
	img "tur/image"
)

func init() {
	// app.yaml中設定的伺服路徑就是go
	http.HandleFunc("/go/", SayHi)
	http.HandleFunc("/go/serveImage", img.ServeImage)
	http.HandleFunc("/go/login", cookie.Login)
	http.HandleFunc("/go/logout", cookie.Logout)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
