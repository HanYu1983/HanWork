# Html Demo

這裡示範了比較大型的javascript專案  
示範了如何用js實現名稱空間與繼承等概念

## javascript的繼承
最簡單的寫法為

    function A(){}
    
    function B(){
        A.call(this)
        this.newAttribute = 0
    }
    B.prototype = {
        __proto__ : A.prototype,
        newMethod: function(){}
    }
    
    var b = new B

但程式中使用copy

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

## 比較重要的Demo

1. 方塊遊戲引擎。還不夠泛用化，距離沒有使用虛擬座標。使用了繼承也不是挺好：cubegame.html
1. flash輸出的動畫轉成webgl：flashDrawer.html
1. normalmap.html