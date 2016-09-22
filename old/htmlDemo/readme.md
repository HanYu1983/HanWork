# Html Demo

這裡示範了比較大型的javascript專案  
示範了如何用js實現namespace、與繼承等概念

## javascript的繼承
最簡單的寫法為

    function A(){}
    
    function B(){
        A.call(this)
        this.newAttribute = 0
    }
    A.prototype = {
        __proto__ : A.prototype,
        newMethod: function(){}
    }

但程式用使用copy

	function copy( target, obj ){
		for( var k in obj )
			target[k] = obj[k]
		return target
	}

原因是為了相容於flash中的as1, as1沒有__proto__屬性

## blobsallad.js
[blobsallad.js](lib/gameworks/blobsallad.js)這個程式覺得經典，所以當時留下來了。這個不是我寫的，官網[在這](https://blobsallad.se/)
## 運行
1. 將htmlDemo整包丟到服務靜態檔案的環境
1. 打開browser並輸入```localhost:8080/htmlDemo/demo.html```