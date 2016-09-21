# Elm解Json

本來在Json.Decode的module中只支援到解8個屬性(object8)

    module Json.Decode
        ( Decoder, Value
        , decodeString, decodeValue
        , string, int, float, bool, null
        , list, array
        , tuple1, tuple2, tuple3, tuple4, tuple5, tuple6, tuple7, tuple8
        , (:=), at
        , object1, object2, object3, object4, object5, object6, object7, object8
        , keyValuePairs, dict
        , maybe, oneOf, map, fail, succeed, andThen
        , value, customDecoder
        ) where

所以必須用其它方法來解決超過8個屬性的物件

	{
		name:"wow wine",
		region:null,
		image: null,
		description: null,
		type: null,
		producer: null,
		varietal: null,
		winery: null,
		acidity: null,
		ph: null,
		sugar: null,
		alcohol: null,
		foods: [{
			name: "test",
			image: null,
			description: null
		}]
	}

利用這兩個函式

    -- Applicative’s `pure`:
    constructing : a -> Decoder a
    constructing = succeed

    -- Applicative’s `<*>`:
    apply : Decoder (a -> b) -> Decoder a -> Decoder b
    apply = object2 (<|)

像這樣來解

    (constructing Wine
      `apply` ("name" := string)
      `apply` ("region" := oneOf [null Nothing, map Just string])
      `apply` ("image" := oneOf [null Nothing, map Just string])
      `apply` ("description" := oneOf [null Nothing, map Just string])

以上會將Decoder結合成一個鍵條  

    object2 
        (<|) 
        (object2 (<|) (succeed Wine) ("name" := string)) 
        ("region" := oneOf [null Nothing, map Just string])

第一條```(object2 (<|) (succeed Model) ("name" := string))```，會將本來的 Wine 建構式```a -> b -> c -> ... -> Wine```變成```b -> c -> ... -> Wine```，也就是將第一參數curry掉，以此累推。 

    succeed Wine
    = Decoder (a -> b -> c -> Wine)
    
    (object2 (<|) (succeed Wine) ("name" := string)) 
    = Decoder (Wine <| a string)
    = Decoder (b -> c -> Wine)
    
    ...
    = Decocder Wine

總之就是curry  
你也可以直接使用[elm-json-extra](http://package.elm-lang.org/packages/circuithub/elm-json-extra/2.2.1/Json-Decode-Extra)