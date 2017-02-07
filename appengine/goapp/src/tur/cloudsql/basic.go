package cloudsql

import (
	"appengine"
	"database/sql"
	// 引入mysql driver
	_ "github.com/go-sql-driver/mysql"
	"strings"
)

// 這個實例只要建立一個
var db *sql.DB

func initDB() {
	var dbname string
	// 是否在本機
	if appengine.IsDevAppServer() {
		dbname = "root:@/mmo?charset=utf8"
	} else {
		// user:pwd@cloudsql(instanceName)/schemaName
		dbname = "your instance name"
	}
	// 建立db
	var err error
	db, err = sql.Open("mysql", dbname)
	// 不要panic，讓程式繼續運做
	if err != nil {
		return
	}

	// 連線池設定
	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(10)

	// sql.Open不代表連線，只是建立一個抽象介面
	// 呼叫Ping來確定能不能連線成功
	err = db.Ping()
	// 不要panic，讓程式繼續運做
	if err != nil {
		return
	}
}

func SelectNumAndBool(num int, b bool) (int, bool, error) {
	// 只要有回傳Table，一定要Close掉
	/*
		rows, err := db.Query("select 1, true")
		defer rows.Close()
	*/
	var aNum int
	var aBool bool
	// 回傳單Row的Query
	// 使用帶參數的方法會自動使用Prepared Statement
	err := db.QueryRow("select ?, ?", num, b).Scan(&aNum, &aBool)
	return aNum, aBool, err
}

func PerformSqlFile(dbFileBytes []byte) error {
	// 將檔案中的資料分成二部分
	// 第一部分為;分隔，用來處理一般的table, view, ...
	// 第二部分為$$分隔，用來處理function, procedure
	// 所以要注意讀入的sql檔的撰寫方法要正確
	dbFileStr := string(dbFileBytes)
	dbFileStrWithOutUselessWord := strings.Replace(dbFileStr, "DELIMITER ;", " ", -1)
	stringParts := strings.Split(dbFileStrWithOutUselessWord, "DELIMITER $$")
	part1 := stringParts[0]
	part2 := stringParts[1]
	part1Lines := strings.Split(part1, ";")
	part2Lines := strings.Split(part2, "$$")
	// 將所有sql語句合併起來再一起處理
	allSqlLine := append(part1Lines, part2Lines...)

	for _, sql := range allSqlLine {
		// 確保沒有呼叫到空白字串
		trimedSql := strings.TrimSpace(sql)
		isNotEmpty := len(trimedSql) != 0
		if isNotEmpty {
			rows, err := db.Query(trimedSql)
			if err != nil {
				return err
			}
			// 先確保關閉
			// Close呼叫是可以重覆的
			defer rows.Close()
			// 在loop中，馬上關閉
			// 因為defer是在出了func之後才會執行，不直接關閉的話，記憶體無法釋放
			rows.Close()
		}
	}
	return nil
}
