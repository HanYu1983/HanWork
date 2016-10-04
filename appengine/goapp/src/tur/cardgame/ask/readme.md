# 卡牌遊戲響應遊戲中的問題

卡牌遊戲實做主要體現在遊戲規則與玩家的互動－你從本國抽2張，選1張抽回手上，剩下那張放回本國下。這類的問答問題  

實做上就是讓服務器存有問題，玩家取得自己的問題，解決後上傳解答。而因為問題通常是有依賴關係，比如上述的從本國抽2選1等。所以問題必須存有它的依賴關係  

以下是虛擬碼

	q1 = Question("玩家A", "抽{2}張卡從{base}牌堆")
	q2 = Question("系統", "q1的結果移到{玩家A}的{hand}牌堆，剩下那張移到{base}牌堆最下面", q1)

玩家會自動向服務器要自己的問題，處理並解決

	if (question.descritpion == "抽{2}張卡從{base}牌堆") {
		selectCard(function(selected){
			commit(question.id, selected)
		})
	}
	else if (question.description == "選擇攻擊對像"){
		selectTarget(function(selected){
			commit(question.id, selected)
		})
	}
	...

而因為要解決的問題可能有依賴關係，所以必須先查詢依賴關係，依賴還沒解決的問題就先忽略掉

	getMyQuestion(function(questions){
		if(questions.length ==0){
			return
		}
		var first = questions[0]
		// getDepends最多回傳1個問題
		// 因為同一時間只需要解一個問題
		getDepends(first, function(dep){
			if( dep == null ){
				return
			}
			// 這個就是要解決的問題
			handleQuestion(dep)
		})
	})

服務器端的實做碼

	// 檢查所有的依賴
	if len(goal.Depends) > 0 {
		for _, id := range goal.Depends {
			depGoal, has, err := GetDependGoal(ctx, gameID, Goal{ID: id})
			if err != nil {
				return Goal{}, false, err
			}
			// 如果有其中一個沒有完成，直接回傳。其餘的忽略掉
			if has {
				return depGoal, true, nil
			}
		}
	}
	// 到這裡代表只剩自己沒有完成
	return goal, true, nil

## 參考
1. [前台原始碼](/appengine/elm/Ask.elm)