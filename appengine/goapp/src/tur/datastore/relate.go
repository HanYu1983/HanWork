package datastore

import (
	"appengine"
	"appengine/datastore"
)

type Record struct {
	// 沒有可信任主鍵, 就是一個記錄的列表
	Message string
}

var (
	EmptyRecord = Record{}
)

func CreateRecord(ctx appengine.Context, record Record) (int64, error) {
	// 因為沒有可信任主鍵，所以使用NewIncompleteKey
	// 主鍵由datastore自行產生
	key := datastore.NewIncompleteKey(ctx, "Record", RelateKey(ctx))
	// 這個時候key.Incomplete()回傳true
	// 產生主鍵updatedKey
	updatedKey, err := datastore.Put(ctx, key, &record)
	if err != nil {
		return 0, err
	}
	// 這個時候updatedKey.Incomplete()回傳false
	return updatedKey.IntID(), nil
}

func UpdateRecord(ctx appengine.Context, recordId int64, record Record) error {
	// 使用CreateRecord回傳的Id來建立主鍵，stringId 就不使用
	// 注意：這裡用的是NewKey
	key := datastore.NewKey(ctx, "Record", "", recordId, RelateKey(ctx))
	_, err := datastore.Put(ctx, key, &record)
	return err
}

func ReadRecord(ctx appengine.Context, recordId int64) (Record, error) {
	key := datastore.NewKey(ctx, "Record", "", recordId, RelateKey(ctx))
	var record Record
	err := datastore.Get(ctx, key, &record)
	if err != nil {
		return EmptyRecord, err
	}
	return record, nil
}

func DeleteRecord(ctx appengine.Context, recordId int64) error {
	key := datastore.NewKey(ctx, "Record", "", recordId, RelateKey(ctx))
	err := datastore.Delete(ctx, key)
	return err
}

func GetAllRecordId(ctx appengine.Context) ([]int64, error) {
	q := datastore.NewQuery("Record").Ancestor(RelateKey(ctx)).KeysOnly()
	keys, err := q.GetAll(ctx, nil)
	if err != nil {
		return nil, err
	}
	var ids []int64
	for _, key := range keys {
		ids = append(ids, key.IntID())
	}
	return ids, nil
}

func RelateKey(ctx appengine.Context) *datastore.Key {
	// User的父層
	// 所來代表所屬的群組
	// 名字可任意
	return datastore.NewKey(ctx, "Root", "Relate", 0, nil)
}
