package datastore

import (
	"appengine"
	"appengine/datastore"
)

type User struct {
	// 使用Name當主鍵
	Name        string
	DisplayName string
}

var (
	EmptyUser = User{}
)

//// 基本 ////

// 注意：appengine.Context一定要從外部傳進來
// 因為TDD開發會有自己的Context
func CreateUser(ctx appengine.Context, user User) error {
	// 建立和這個User相匹配的鍵
	// 使用Ancestor Key(Group)來群組自己的資料
	// 這樣做會有很多好處
	// 沒有Ancestor Key無法使用Transaction
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	_, err := datastore.Put(ctx, key, &user)
	return err
}

func ReadUser(ctx appengine.Context, user User) (User, error) {
	// 使用匹配的鍵來取得User
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	err := datastore.Get(ctx, key, &user)
	if err != nil {
		return EmptyUser, err
	}
	return user, nil
}

// 修改就和新增是一模一樣的
func UpdateUser(ctx appengine.Context, user User) error {
	return CreateUser(ctx, user)
}

func DeleteUser(ctx appengine.Context, user User) error {
	// 使用匹配的鍵來刪除User
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	err := datastore.Delete(ctx, key)
	return err
}

func GroupKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "yourGroupName", "ignore", 0, nil)
}

//// 進階 ////
func UseCursor(ctx appengine.Context) ([]User, error) {
	// 查詢所有User
	q := datastore.NewQuery("User").Ancestor(GroupKey(ctx))

	var ret []User
	cursor := q.Run(ctx)
	for {
		var user User
		_, err := cursor.Next(&user)
		if err == datastore.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		// DOTO: 加入判斷式
		ret = append(ret, user)
	}

	return ret, nil
}

func DisplayNameQuery(ctx appengine.Context, displayName string) ([]User, error) {
	var users []User
	q := datastore.NewQuery("User").Ancestor(GroupKey(ctx))
	q = q.Filter("DisplayName =", displayName)
	_, err := q.GetAll(ctx, &users)
	if err != nil {
		return nil, err
	}
	return users, nil
}
