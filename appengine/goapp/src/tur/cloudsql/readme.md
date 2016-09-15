# Cloud Sql基本使用

由於我沒有找到怎麼用程式執行sql檔，所以自己寫了一個簡單的sql檔執行方式[basic.go](basic.go)裡的PerformSqlFile，所執行的sql檔[dbsql](db.sql)，這個檔是我之前寫mmo寫到一半的

## 需求package
    export GOPATH=/dst/to/projectdir/goapp/
    /dst/to/go_appengine/goapp get github.com/go-sql-driver/mysql
