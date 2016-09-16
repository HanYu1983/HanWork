# Google App Engine使用示範

1. [使用datastore](goapp/src/tur/datastore/)
1. [使用mysql](goapp/src/tur/cloudsql/)
1. [處理cookie](goapp/src/tur/cookie/basic.go)
1. [使用channel做即時通訊](goapp/src/tur/channel)
1. [伺服圖片，使用base64](goapp/src/tur/image/basic.go)

## 基本配置 (使用Goleng)


1. [下載SDK](https://cloud.google.com/appengine/docs/go/quickstart)
1. 建立專案資料夾dir yourprojectname( dir src( dir web() ), app.yaml, hello.go ) <- 以上用程式語言描述，請自行理解

        // app.yaml
        application: your-project-id
        version: 1
        runtime: go
        api_version: go1

        handlers:
        - url: /go/.*
          script: _go_app
        - url: /(.+)
          static_files: web/\1
          upload: web/(.+)
        - url: /
          static_files: web/index.html
          upload: web/index.html
    
        // hello.go
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
1. ```dst/to/go_appengine/goapp serve yourprojectname/src```
1. [本機測試](//localhost:8080/go/)與[靜態檔案](//localhost:8080/)
1. 完成

## 靜態資源的快取
app.yaml中設定```default_expiration: "1d"```，這裡設為1天