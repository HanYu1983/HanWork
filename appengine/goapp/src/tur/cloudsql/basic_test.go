package cloudsql

import (
	"appengine/aetest"
	"io"
	"os"
	"testing"
)

func TestBasic(t *testing.T) {
	// 建立測試用的Context
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()
	var _ = ctx

	t.Log("基本測試Select")
	var aNum int
	var aBool bool
	num10 := 10
	boolFalse := false
	aNum, aBool, err = SelectNumAndBool(num10, boolFalse)
	if err != nil {
		t.Fatal(err)
	}
	if aNum != num10 {
		t.Fatal("num必須等於10")
	}
	if aBool != boolFalse {
		t.Fatal("bool必須等於false")
	}

	t.Log("讀入sql檔")
	t.Log("注意：這個sql檔有指定格式，請參照PerformSqlFile")
	dbFile, err := os.Open("db.sql")
	if err != nil {
		t.Fatal(err)
	}
	dbFileBytes, err := File2Bytes(dbFile)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("執行sql檔")
	err = PerformSqlFile(dbFileBytes)
	if err != nil {
		t.Fatal(err)
	}
}

func File2Bytes(file *os.File) (ret []byte, err error) {
	var bytes []byte
	buf := make([]byte, 16)
	for {
		n, err := file.Read(buf)
		if err != nil && err != io.EOF {
			return nil, err
		}
		if n == 0 {
			break
		}
		bytes = append(bytes, buf[:n]...)
	}
	return bytes, nil
}
