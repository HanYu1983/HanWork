# Datstore示範
## 主鍵的使用
+ [可信任主鍵用NewKey](datastore.go)  
+ [沒有可信任主鍵用NewIncompleteKey](relate.go)  

## 注意
datastore不支援任何包含```interface{}```和```func```，會丟出```datastore: unsupported struct field type```例外  
支援類型請參照[這裡](https://cloud.google.com/appengine/docs/go/datastore/reference)