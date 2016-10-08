package script

import (
	"appengine"
	"appengine/datastore"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	_ "strconv"
)

// 統一回傳資訊
func Recover(w io.Writer) {
	if err := recover(); err != nil {
		switch err.(type) {
		case string:
			Json(w, nil, errors.New(err.(string)))
		case error:
			Json(w, nil, err.(error))
		default:
			Json(w, nil, errors.New(fmt.Sprintf("err:%s", err)))
		}
	}
}

func Json(w io.Writer, ret interface{}, err error) {
	var info [2]interface{}
	if err != nil {
		info[0] = err.Error()
	} else {
		info[1] = ret
	}
	jsonstr, _ := json.Marshal(info)
	fmt.Fprint(w, string(jsonstr))
}

func InstallPackageHttp(w http.ResponseWriter, r *http.Request) {
	defer Recover(w)
	ctx := appengine.NewContext(r)
	option := datastore.TransactionOptions{
		XG:       true,
		Attempts: 3,
	}
	var err error
	err = datastore.RunInTransaction(ctx, func(ctx appengine.Context) error {
		var err error
		err = InstallPackage(ctx)
		return err
	}, &option)
	Json(w, nil, err)
}
