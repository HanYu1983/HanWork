package datastore

import (
	"appengine/aetest"
	_ "appengine/datastore"
	"testing"
)

func TestRelate(t *testing.T) {
	// 建立測試用的Context
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	var recordId int64
	var record Record
	helloRecord := Record{Message: "hello"}
	howAreYouRecord := Record{Message: "how are you?"}
	ImFineRecord := Record{Message: "I'm fine"}

	t.Log("存入hello並取出id")
	recordId, err = CreateRecord(ctx, helloRecord)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使用id取得hello")
	record, err = ReadRecord(ctx, recordId)
	if err != nil {
		t.Fatal(err)
	}
	if record != helloRecord {
		t.Fatal("取出來的必須要等於helloRecord")
	}

	t.Log("再塞入2筆記錄")
	_, err = CreateRecord(ctx, howAreYouRecord)
	if err != nil {
		t.Fatal(err)
	}
	_, err = CreateRecord(ctx, ImFineRecord)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("取得所有記錄的id")
	var ids []int64
	ids, err = GetAllRecordId(ctx)
	if err != nil {
		t.Fatal(err)
	}
	if len(ids) != 3 {
		t.Fatal("必須有3筆記錄")
	}

	t.Log("刪除1筆記錄")
	err = DeleteRecord(ctx, recordId)
	if err != nil {
		t.Fatal(err)
	}
	ids, err = GetAllRecordId(ctx)
	if err != nil {
		t.Fatal(err)
	}
	if len(ids) != 2 {
		t.Fatal("刪除後必須有2筆記錄")
	}

}
