# Datstore示範
## 主鍵的使用
+ [可信任主鍵用NewKey](datastore.go)  
+ [沒有可信任主鍵用NewIncompleteKey](relate.go)  

## 注意
+ datastore不支援map  
+ datastore不支援巢狀slice，會丟出```flattening nested structs leads to a slice of slices```  
+ datastore不支援任何包含```interface{}```和```func```，會丟出```datastore: unsupported struct field type```例外  
+ 支援類型請參照[這裡](https://cloud.google.com/appengine/docs/go/datastore/reference)  
+ [轉成json再存入](http://stackoverflow.com/questions/25823186/flattening-nested-structs-leads-to-a-slice-of-slices)  