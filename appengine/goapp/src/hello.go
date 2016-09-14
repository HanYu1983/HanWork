package hello

import (
	"fmt"
	"net/http"
)

func init() {
	http.HandleFunc("/", SayHi)
}

func SayHi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", r.URL.Path)
}
