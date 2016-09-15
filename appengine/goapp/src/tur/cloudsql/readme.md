# Cloud Sql基本使用

## 執行sql檔

由於我沒有找到怎麼用程式執行sql檔，所以自己寫了一個簡單的sql檔執行方式[basic.go](basic.go)裡的PerformSqlFile

## sql檔

[db.sql](db.sql)，這個檔是我之前寫mmo寫到一半的，有一些東西可以參考，比如：

    declare exit handler for sqlexception begin
        GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
        set msg = SUBSTRING(@text,1,100);
        rollback;
        signal sqlstate 'ERROR' set message_text = msg;
    end;

可以讓procedure丟出一般的例外，這樣可以讓程式很好處理

    _, err := db.Query('call xxx()')
    if err != nil {
        return err
    }

## 需求package
    export GOPATH=/dst/to/projectdir/goapp/
    /dst/to/go_appengine/goapp get github.com/go-sql-driver/mysql
