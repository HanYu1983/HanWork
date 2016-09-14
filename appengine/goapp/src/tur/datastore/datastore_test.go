package datastore

import (
	"appengine/aetest"
	"appengine/datastore"
	"testing"
)

func TestBasic(t *testing.T) {
	// 建立測試用的Context
	ctx, err := aetest.NewContext(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer ctx.Close()

	var somebody User
	han := User{Name: "han", DisplayName: "漢"}

	t.Log("建立han")
	err = CreateUser(ctx, han)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("讀取han的資料")
	somebody, err = ReadUser(ctx, User{Name: "han"})
	if err != nil {
		t.Fatal(err)
	}
	if somebody != han {
		t.Fatal("Han必須存在")
	}

	t.Log("修改han的資料")
	han.DisplayName = "天才"
	err = UpdateUser(ctx, han)
	if err != nil {
		t.Fatal(err)
	}
	somebody, err = ReadUser(ctx, User{Name: "han"})
	if err != nil {
		t.Fatal(err)
	}
	if somebody.DisplayName != han.DisplayName {
		t.Fatal("Han的名字必須被修改")
	}

	t.Log("刪除han")
	err = DeleteUser(ctx, han)
	if err != nil {
		t.Fatal(err)
	}
	somebody, err = ReadUser(ctx, User{Name: "han"})
	if err != datastore.ErrNoSuchEntity {
		t.Fatal("刪除後必須找不到資料")
	}

	t.Log("可以重覆刪除")
	err = DeleteUser(ctx, han)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("建立john和bob")
	var john, bob User
	var users []User
	john = User{Name: "john", DisplayName: "花花公子"}
	bob = User{Name: "bob", DisplayName: "花花公子"}

	err = CreateUser(ctx, john)
	if err != nil {
		t.Fatal(err)
	}
	err = CreateUser(ctx, bob)
	if err != nil {
		t.Fatal(err)
	}

	t.Log("使用curosr查詢")
	users, err = UseCursor(ctx)
	if err != nil {
		t.Fatal(err)
	}
	if len(users) != 2 {
		t.Fatal("人數必須為2")
	}

	t.Log("查詢名稱為花花公子的角色")
	users, err = DisplayNameQuery(ctx, "花花公子")
	if err != nil {
		t.Fatal(err)
	}
	if len(users) != 2 {
		t.Fatal("人數必須為2")
	}
}
