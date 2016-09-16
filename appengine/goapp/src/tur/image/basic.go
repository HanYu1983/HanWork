package image

import (
	"bytes"
	"encoding/base64"
	"fmt"
	"image"
	_ "image/jpeg"
	"image/png"
	_ "io"
	"net/http"
)

func ServeImage(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			switch err.(type) {
			case string:
				fmt.Fprintf(w, "err:%v", err.(string))
			case error:
				fmt.Fprintf(w, "err:%v", err.(error).Error())
			default:
				fmt.Fprintf(w, "err:%s", err)
			}
		}
	}()
	var err error
	// img64在img.go中
	b64 := img64
	data, err := base64.StdEncoding.DecodeString(b64)
	if err != nil {
		panic(err)
	}
	image, _, err := image.Decode(bytes.NewReader(data))
	if err != nil {
		panic(err)
	}
	// 若jpg的話，就用jpeg.Encode
	err = png.Encode(w, image)
	if err != nil {
		panic(err)
	}
}
