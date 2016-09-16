package channel

import (
	"appengine"
	"appengine/datastore"
)

type User struct {
	Name string
}

func GroupKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "Group", "User", 0, nil)
}

func SaveUser(ctx appengine.Context, user User) error {
	var err error
	key := datastore.NewKey(ctx, "User", user.Name, 0, GroupKey(ctx))
	_, err = datastore.Put(ctx, key, &user)
	return err
}

func DeleteUser(ctx appengine.Context, username string) error {
	var err error
	key := datastore.NewKey(ctx, "User", username, 0, GroupKey(ctx))
	err = datastore.Delete(ctx, key)
	return err
}

func GetUsers(ctx appengine.Context) ([]User, error) {
	q := datastore.NewQuery("User").Ancestor(GroupKey(ctx))
	var users []User
	_, err := q.GetAll(ctx, &users)
	if err != nil {
		return nil, err
	}
	return users, nil
}
