package hello

import (
	"fmt"
	"net/http"
	"tur/image"
)

func init() {
	// app.yaml中設定的伺服路徑就是go
	http.HandleFunc("/go/", SayHi)
	http.HandleFunc("/go/serveImage", image.ServeImage)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
