// 注意
// 以下的方法包裝只是為了寫測試，和實際應用沒有關係
// 實際應用的包裝會包含遊戲邏輯
// 意思是不分為 DB存取層 和 遊戲邏輯層
// 所有datastore的Key, Query, Cursor, Struct, Get, GetMulti, Put, ...
// 都應該直接配合遊戲邏輯來寫，不需將邏輯拆開
// 外部只能透過行為介面Protocol(Interface)來操做和DB有關的一切事務
package datastore

import (
	"appengine"
	"appengine/datastore"
)

type User struct {
	// 假設Name為可信任主鍵，我們使用Name當主鍵
	// 注意：所謂主鍵代表鍵值不會重復
	// 若你不同物件但鍵值卻重復，平復那場災難將會是你的責任
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
	// 取得User的主鍵
	// 只使用stringId，intId就用0
	// 使用Ancestor Key(Group)來群組自己的資料
	// 這樣做會有很多好處
	// 沒有Ancestor Key無法使用Transaction
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	_, err := datastore.Put(ctx, key, &user)
	return err
}

func ReadUser(ctx appengine.Context, user User) (User, error) {
	// 使用主鍵來取得User
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
	// 使用主鍵來取得User
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	err := datastore.Delete(ctx, key)
	return err
}

func GroupKey(ctx appengine.Context) *datastore.Key {
	// User的父層
	// 所來代表所屬的群組
	// 名字可任意
	return datastore.NewKey(ctx, "Root", "Test", 0, nil)
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

func CreateMulti(ctx appengine.Context, users []User) error {
	var keys []*datastore.Key
	for _, user := range users {
		key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
		keys = append(keys, key)
	}
	updatedKeys, err := datastore.PutMulti(ctx, keys, users)
	// 因為外部就有可信任主鍵，所以不需要updatedKeys
	// 寫這行是為了可以編譯過
	var _ = updatedKeys
	return err
}

func ReadMulti(ctx appengine.Context, users []User) ([]User, error) {
	var keys []*datastore.Key
	for _, user := range users {
		key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
		keys = append(keys, key)
	}
	// 注意
	// 這裡給的dst參數(users)不需要加上&
	// 這和Query的GetAll不一樣，請參照DisplayNameQuery
	err := datastore.GetMulti(ctx, keys, users)
	return users, err
}

func UseTransaction(ctx appengine.Context, fn func(ctx appengine.Context) error) error {
	option := datastore.TransactionOptions{
		// 重試次數，預設是3
		Attempts: 3,
	}
	var err error
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		// 注意，一定要使用方法裡的ctx才會有效果
		// 交易內容寫在這里，指的就是傳進來的fn
		return fn(ctx)
	}, &option)
	if err == datastore.ErrConcurrentTransaction {
		// datastore用的是樂觀鎖定
		// 出現這個例外代表出現的衝突並且重試了option中定義的Attempts次數以上
		// 這代表你必須再重新操作DB一次
	}
	return err
}
