package sgs

import (
	"appengine"
	core "cardgame2/core"
	"errors"
	"strconv"
	"strings"
)

// 遺失目標錯誤
// 卡牌效果在解決時目標不滿足的話，一定要丟出這個錯誤
type TargetMissingError string

func (err TargetMissingError) Error() string {
	return string(err)
}

// 基本處理介面
type CommandHandler func(appengine.Context, Game, core.Desktop, core.Procedure, core.Command) (Game, core.Desktop, core.Procedure, error)

// 執行處理
func PerformCommandHandler(handler CommandHandler, ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	var c core.Command
	var has bool
	var err error
	for {
		c, has = core.GetCommand(ctx, p)
		ctx.Infof("%v", c)
		if has == false {
			p = core.NewProcedure(ctx)
			break
		}
		if c.User != core.UserSys {
			break
		}
		game, desk, p, err = handler(ctx, game, desk, p, c)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				p = core.CompleteCommand(ctx, p, c)
			}
			return game, desk, p, err
		}
	}
	return game, desk, p, nil
}

// 結合指定的處理者
func ReduceCommandHandler(handlers []CommandHandler) CommandHandler {
	return func(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, c core.Command) (Game, core.Desktop, core.Procedure, error) {
		var err error
		for _, handler := range handlers {
			game, desk, p, err = handler(ctx, game, desk, p, c)
			if err != nil {
				return game, desk, p, err
			}
		}
		return game, desk, p, nil
	}
}

// 卡牌能力實做
func CardCommandHandler(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, c core.Command) (Game, core.Desktop, core.Procedure, error) {
	var cardId int
	var card core.Card
	switch c.Description {
	case "若任一来源将对一个单位或玩家造成伤害，则改为使该单位或玩家失去等量的体力":
		// TODO 實做冷血皇后
		p = core.CompleteCommand(ctx, p, c)
	case "單位宣告攻擊":
		// 119.4. 处理伤害需要依次经历三部分
		// 119.4a 首先，伤害将要造成，并且与伤害有关的防止性效应和替代性效应会影响该伤害。（在
		// 这里，防止性效应先生效，之后替代性效应生效；若某个替代性效应生效后又有新的防止性效应
		// 产生，那么该防止性效应依然会生效。）
		// 119.4b 然后，造成的伤害变换为其结果，并且与结果有关的防止性效应和替代性效应会影响该
		// 结果。

		// TODO 矫情之花·小乔
		// 防止将对小乔造成的所有伤害。

		// 冷血皇后·张春华在場時，會發生替代能力
		// 若任一来源将对一个单位或玩家造成伤害，则改为使该单位或玩家失去等量的体力。
		var hasRef13 bool
		for _, card := range desk.Card {
			if desk.CardStack[card.CardStack].Type == Position {
				if card.Ref == "13" {
					hasRef13 = true
				}
			}
		}
		if hasRef13 {
			// 冷血皇后不會在堆疊解決中被打出來，所以不必替代換所有的UnitAttack
			nextCmd := p.Command[c.ID+1]
			if nextCmd.Description != "單位攻擊" {
				return game, desk, p, errors.New("程式有錯")
			}
			nextCmd.Description = "若任一来源将对一个单位或玩家造成伤害，则改为使该单位或玩家失去等量的体力"
			p.Command[nextCmd.ID] = nextCmd
			return game, desk, p, nil
		}
	case "卡移動後":
		cardId = int(c.Parameters["cardId"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		toStackId := c.Parameters["toStackId"].(string)
		card = desk.Card[cardId]

		isEnterPosition := desk.CardStack[fromStackId].Type != Position && desk.CardStack[toStackId].Type == Position

		switch card.Ref {
		case "116":
			if isEnterPosition == false {
				break
			}
			// ID116：当吴夫人进战场时，从你的牌库和Graveyard中搜寻一张吴势力主公牌
			info := game.CardInfo[cardId]
			drawCardUser := info.ControlPlayer

			searchStack := append(
				desk.CardStack[drawCardUser+Library].Card,
				desk.CardStack[drawCardUser+Graveyard].Card...,
			)
			var find bool
			for _, cardId = range searchStack {
				card = desk.Card[cardId]
				info = game.CardInfo[cardId]
				if info.Prototype.Color == ColorGreen && strings.Contains(info.Prototype.Class, "主公") {
					find = true
					break
				}
			}
			if find == false {
				return game, desk, p, TargetMissingError("沒有主公卡")
			}
			targetCard := card
			return InvokeTakeCardFrom(ctx, game, desk, p, drawCardUser, targetCard.CardStack, targetCard.ID)
		}
	}
	return game, desk, p, nil
}

// 基本規則實作
func BasicCommandHandler(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, c core.Command) (Game, core.Desktop, core.Procedure, error) {
	var err error
	switch c.Description {
	case "分配{totalDamage}中的{damage1}到{cardId}、{damage2}到{user}":
		damage1 := int(c.Parameters["damage1"].(float64))
		cardId := int(c.Parameters["cardId"].(float64))
		damage2 := int(c.Parameters["damage2"].(float64))
		user := c.Parameters["user"].(string)
		if damage1 > 0 {
			game, desk, p, err = InvokeDamageUnit(ctx, game, desk, p, c.Source, damage1, CounterDamage, cardId)
			if err != nil {
				return game, desk, p, err
			}
		}
		if damage2 > 0 {
			game, desk, p, err = InvokeDamagePlayer(ctx, game, desk, p, c.Source, damage2, CounterDamage, user)
			if err != nil {
				return game, desk, p, err
			}
		}
	case "{user}選擇{num}張手牌{cardIds}廢棄":
		user := c.Parameters["user"].(string)
		cardIds := c.Parameters["cardIds"].([]float64)
		for _, cardId := range cardIds {
			desk, err = core.MoveCard(ctx, desk, user+Hand, user+Graveyard, 0, int(cardId))
			if err != nil {
				return game, desk, p, err
			}
		}
	case "階段將結束":
		// 剛結束棄牌階段，切換回合
		if game.CurrentPhase == DiscardStep {
			game.Turn += 1
			nextUser := core.Opponent(game.OffensivePlayer)
			game.OffensivePlayer = nextUser
			// 優先權會在"階段改變"時設定
		}
	case "階段改變":
		step := c.Parameters["step"].(float64)
		game, desk, p, err = NextPhase(ctx, game, desk, p, int(step))
		if err != nil {
			return game, desk, p, err
		}
	case "階段將開始":
		// ID20司空先锋·张辽
		// 每当张辽对玩家造成战斗伤害时，略过该玩家的下一个重置步骤。
		// TODO 略过该玩家的下一个重置步骤
		// if currentPhase == UntapStep
		// step = 2

		// 切換階段後等於重置階段的話，代表剛進入重置階段
		// 立刻重置卡牌
		offensiveUser := game.Player[game.OffensivePlayer].User
		if game.CurrentPhase == UntapStep {
			game, desk, p, err = UntapCardInUntapStep(ctx, game, desk, p, offensiveUser)
			if err != nil {
				return game, desk, p, err
			}
		}
		// 抽牌階段，第一回合不能抽牌
		if game.CurrentPhase == DrawStep {
			canDraw := game.Turn != 0
			if canDraw {
				topCardId, err := core.TopCardInCardStack(ctx, desk, offensiveUser+Library)
				if err == core.ErrCardNotExist {
					return game, desk, p, TargetMissingError("無卡可抽")
				}
				game, desk, p, err = InvokeTakeCardFrom(ctx, game, desk, p, offensiveUser, offensiveUser+Library, topCardId)
				if err != nil {
					return game, desk, p, err
				}
			}
		}
		// 剛進入棄牌階段，立刻棄牌
		if game.CurrentPhase == DiscardStep {
			game, desk, p, err = InvokeDiscardCardInDiscardStep(ctx, game, desk, p, offensiveUser)
			if err != nil {
				return game, desk, p, err
			}
		}
	case "抽到卡":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		game, desk, p, err = TakeCardFrom(ctx, game, desk, p, user, fromStackId, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "卡打到陣地":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		slotNum := int(c.Parameters["slotNum"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		game, desk, p, err = PlayCardFrom(ctx, game, desk, p, user, fromStackId, slotNum, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "卡將移動":
		cardId := int(c.Parameters["cardId"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		toStackId := c.Parameters["toStackId"].(string)
		card := desk.Card[cardId]

		// ID71 汉志传承者·蒋琬：若任一单位将死去，改为将该单位洗入其拥有者的牌库，而非置入其拥有者的墓地。
		// 将至多两张目标单位牌从墓地放进战场。他们具有神速能力。在下一个结束步骤开始时，将他们放逐。如果他们将离开战场，则改为将他们放逐，而非置入其他区域。
		// == 以上兩個能力有重疊的部分 ==
		// 將死去 -> 移到牌庫 (死亡等同於離開戰場，離開不等於死亡)
		// 将离开战场 -> 放逐
		// 若兩個技能的對象剛好同一單位
		// 要讓玩家可以選
		// command = "從{ids}選擇{idx}發動", ids=[]string{"",""}, user = 操控玩家
		isExitPosition := desk.CardStack[fromStackId].Type == Position && desk.CardStack[toStackId].Type != Position
		if isExitPosition {
			hasRef71 := false
			if hasRef71 {
				if c.Source.Kind == "規則-死亡" {
					// 改成移到牌庫
					nextCmd := p.Command[c.ID+1]
					nextCmd.Parameters["toStackId"] = card.Owner + Library
					// "卡移動"和"卡移動後"都要改
					p.Command[c.ID+1] = nextCmd
					p.Command[c.ID+2] = nextCmd
					// 如果重疊能力（可以從Buf判斷是不是神速進場的）
					// 就改變整個指令，讓玩家可以選擇效果
				}
			}
		}
	case "卡移動":
		cardId := int(c.Parameters["cardId"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		toStackId := c.Parameters["toStackId"].(string)
		game, desk, p, err = MoveCard(ctx, game, desk, p, fromStackId, toStackId, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "卡移動後":
		cardId := int(c.Parameters["cardId"].(float64))
		toStackId := c.Parameters["toStackId"].(string)
		// 如果移到陣地中，判斷迎擊和突擊
		if desk.CardStack[toStackId].Type == Position {
			oppositeUnit, hasOppositeUnit, err := QueryUnitInOppositePosition(ctx, game, desk, p, toStackId)
			if err != nil {
				return game, desk, p, err
			}
			if hasOppositeUnit {
				// 迎擊
				// 注意：是給移動的單位傷害
				powers, _, _, err := CheckKeyword(迎擊, ctx, game, desk, p, oppositeUnit)
				if err != nil {
					return game, desk, p, err
				}
				for _, power := range powers {
					game, desk, p, err = InvokeDamageUnit(ctx, game, desk, p, core.Key{Kind: "Card", IntID: oppositeUnit}, power, CounterDamage, cardId)
					if err != nil {
						return game, desk, p, err
					}
				}
				// 突擊
				// 後處理的先發動，所以突擊會先結算
				// 注意：是給對面單位傷害
				powers, _, _, err = CheckKeyword(突擊, ctx, game, desk, p, cardId)
				if err != nil {
					return game, desk, p, err
				}
				for _, power := range powers {
					game, desk, p, err = InvokeDamageUnit(ctx, game, desk, p, core.Key{Kind: "Card", IntID: cardId}, power, AssaultDamage, oppositeUnit)
					if err != nil {
						return game, desk, p, err
					}
				}
			}
		}
	case "單位移動":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		slotStackId := c.Parameters["slotStackId"].(string)
		game, desk, p, err = UnitMove(ctx, game, desk, p, user, slotStackId, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "單位攻擊":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		game, desk, p, err = UnitAttack(ctx, game, desk, p, user, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "單位將受到傷害":
		cardId := int(c.Parameters["cardId"].(float64))
		damage := int(c.Parameters["damage"].(float64))
		damageType := c.Parameters["damageType"].(string)
		// 如果是迎擊或是突擊，可能會遇到連續發動效果的過程中目標單位就已經死去
		// 這個時候就忽略掉效果就行了
		if damageType == CounterDamage || damageType == AssaultDamage {
			isDead, _, err := IsUnitDead(ctx, game, desk, p, cardId)
			if err != nil {
				return game, desk, p, err
			}
			if isDead {
				// 將這個效果移出堆疊，這樣就不會有傷害事件發生
				p = core.DeleteBlock(ctx, p, c.Block)
				return game, desk, p, nil
			}
		}
		// 突擊傷害來源若被横置則沒有傷害效果
		if damageType == AssaultDamage {
			card := desk.Card[c.Source.IntID]
			if card.Direction == core.DirectionTap {
				p = core.DeleteBlock(ctx, p, c.Block)
				return game, desk, p, nil
			}
		}
		// 取得對手防禦力
		defence, err := ComputeNormalDefence(ctx, game, desk, p, damageType, cardId)
		if err != nil {
			return game, desk, p, err
		}
		damage = damage - defence
		if damage <= 0 {
			p = core.DeleteBlock(ctx, p, c.Block)
			return game, desk, p, nil
		}
		// TODO 防止性能力
		// 處理抵抗
		_, powers, _, err := CheckKeyword(抵抗, ctx, game, desk, p, cardId)
		for _, power := range powers {
			isMatch, err := IfMatchResistance(power, ctx, game, desk, p, cardId)
			if err != nil {
				return game, desk, p, err
			}
			if isMatch {
				p = core.DeleteBlock(ctx, p, c.Block)
				return game, desk, p, nil
			}
		}
		// TODO 替代性能力
	case "單位受到傷害":
		cardId := int(c.Parameters["cardId"].(float64))
		damage := int(c.Parameters["damage"].(float64))
		damageType := c.Parameters["damageType"].(string)
		game, desk, p, err = DamageUnit(ctx, game, desk, p, damage, damageType, cardId)
		if err != nil {
			return game, desk, p, err
		}
	case "單位受到傷害後":
		cardId := int(c.Parameters["cardId"].(float64))
		sourceCard := c.Source.IntID
		// 如果傷害來源有致命
		_, _, hasKill, err := CheckKeyword(致命, ctx, game, desk, p, sourceCard)
		if err != nil {
			return game, desk, p, err
		}
		if hasKill == true {
			game, desk, p, err = InvokeUnitDead(ctx, game, desk, p, cardId)
			if err != nil {
				return game, desk, p, err
			}
		}
	case "玩家受到傷害":
		damage := int(c.Parameters["damage"].(float64))
		damageType := c.Parameters["damageType"].(string)
		player := c.Parameters["player"].(string)
		game, desk, p, err = DamagePlayer(ctx, game, desk, p, damage, damageType, player)
		if err != nil {
			return game, desk, p, err
		}
	case "玩家受到傷害後":
		sourceCard := c.Source.IntID
		damage := int(c.Parameters["damage"].(float64))
		info := game.CardInfo[sourceCard]
		// 處理斬獲
		// 打掉多少血回復多少血
		_, _, hasGetLife, err := CheckKeyword(斬獲, ctx, game, desk, p, sourceCard)
		if err != nil {
			return game, desk, p, err
		}
		if hasGetLife {
			targetUser := info.ControlPlayer
			var _, _ = targetUser, damage
			// TODO 移除傷害指示物
		}
	case "單位將死亡":
	case "單位死亡":
		cardId := int(c.Parameters["cardId"].(float64))
		game, desk, p, err = UnitDead(ctx, game, desk, p, cardId)
		if err != nil {
			return game, desk, p, err
		}
	}
	p = core.CompleteCommand(ctx, p, c)
	return game, desk, p, nil
}

func QueryUnitInOppositePosition(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, stack string) (int, bool, error) {
	if desk.CardStack[stack].Type != Position {
		return 0, false, errors.New("必須是陣地才能查詢對面的資料")
	}
	who, num := ParsePositionID(stack)
	opponent := core.Opponent(who)
	oppositeStack := PositionID(opponent, num)
	if len(desk.CardStack[oppositeStack].Card) == 0 {
		return 0, false, nil
	}
	return desk.CardStack[oppositeStack].Card[0], true, nil
}

// 重置規定效果
func UntapCardInUntapStep(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string) (Game, core.Desktop, core.Procedure, error) {
	return game, desk, p, nil
}

// 計算基本攻擊力
func ComputeNormalAttack(ctx appengine.Context, game Game, desk core.Desktop, cardId int) (int, error) {
	info := game.CardInfo[cardId]
	value, err := strconv.Atoi(info.Prototype.Attack)
	if err != nil {
		return 0, err
	}
	return value, nil
}

// 計算基本防禦力
// 沒有堅靭基本上都是0
func ComputeNormalDefence(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, damageType string, cardId int) (int, error) {
	// 處理堅靭
	powers, _, _, err := CheckKeyword(堅靭, ctx, game, desk, p, cardId)
	if err != nil {
		return 0, err
	}
	var total int
	for _, power := range powers {
		total += power
	}
	return total, nil
}

// 取得Position卡堆的ID
func PositionID(user string, slotId int) string {
	return user + Position + strconv.Itoa(slotId)
}

// 分析PositionID
// 看Position屬於哪個玩家、第幾個Position
func ParsePositionID(cardStackSlotId string) (string, int) {
	var num int
	if strings.Contains(cardStackSlotId, Position1) {
		num = 1
	}
	if strings.Contains(cardStackSlotId, Position2) {
		num = 2
	}
	if strings.Contains(cardStackSlotId, Position3) {
		num = 3
	}
	if strings.Contains(cardStackSlotId, Position4) {
		num = 4
	}
	if strings.Contains(cardStackSlotId, Position5) {
		num = 5
	}
	var user string
	if strings.Contains(cardStackSlotId, core.UserA) {
		user = core.UserA
	}
	if strings.Contains(cardStackSlotId, core.UserB) {
		user = core.UserB
	}
	return user, num
}

func TakeCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	targetStackId := user + Hand
	var err error
	desk, err = core.MoveCard(ctx, desk, fromStackId, targetStackId, 0, cardId)
	if err != nil {
		return game, desk, p, TargetMissingError(err.Error())
	}
	return game, desk, p, nil
}

// 115.1. 若一个单位将进入的阵地上有其他单位，那么原先的单位会被放逐（移出游戏），这个
// 过程叫做替任。
// 115.2. 替任为一种特殊动作，不会进入堆叠，但由于替任从而触发的单位离场能力会置入堆叠。
// 115.3. 相互替任的两个单位不会同时在场。
func PlayCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, slotNum int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	targetStackId := PositionID(user, slotNum)
	hasUnit := len(desk.CardStack[targetStackId].Card) > 0
	if hasUnit {
		return game, desk, p, TargetMissingError(ErrSlotIsntEmpty.Error())
	}
	var err error
	game, desk, p, err = InvokeMoveCard(ctx, game, desk, p, core.Key{Kind: "User", StringID: user}, fromStackId, targetStackId, cardId)
	if err != nil {
		return game, desk, p, TargetMissingError(err.Error())
	}
	return game, desk, p, nil
}

func DamagePlayer(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, damage int, damageType string, player string) (Game, core.Desktop, core.Procedure, error) {
	pl := game.Player[player]
	for i := 0; i < damage; i += 1 {
		pl.Token = append(pl.Token, DamageToken)
	}
	game.Player[player] = pl
	return game, desk, p, nil
}

func DamageUnit(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, damage int, damageType string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 放置傷害Token
	info := game.CardInfo[cardId]
	for i := 0; i < damage; i += 1 {
		info.Token = append(info.Token, DamageToken)
	}
	game.CardInfo[cardId] = info
	isDead, _, err := IsUnitDead(ctx, game, desk, p, cardId)
	if err != nil {
		return game, desk, p, err
	}
	if isDead {
		game, desk, p, err = InvokeUnitDead(ctx, game, desk, p, cardId)
		if err != nil {
			return game, desk, p, err
		}
	}
	return game, desk, p, nil
}

func IsUnitDead(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, cardId int) (bool, int, error) {
	info := game.CardInfo[cardId]
	var damageCnt int
	for _, token := range info.Token {
		if token != DamageToken {
			continue
		}
		damageCnt += 1
	}
	def, err := strconv.Atoi(info.Prototype.Defence)
	if err != nil {
		return false, 0, err
	}
	if damageCnt >= def {
		return true, 0, nil
	}
	return false, def - damageCnt, nil
}

func UnitDead(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, cardId int) (Game, core.Desktop, core.Procedure, error) {
	card := desk.Card[cardId]
	return InvokeMoveCard(ctx, game, desk, p, core.Key{Kind: "規則-死亡", StringID: core.UserSys}, card.CardStack, card.Owner+Graveyard, cardId)
}

// 指定一個單位攻擊
func UnitAttack(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 判斷單位有沒有在Position上
	card := desk.Card[cardId]
	if desk.CardStack[card.CardStack].Type != Position {
		return game, desk, p, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的Position
	slotUser, slotNum := ParsePositionID(card.CardStack)
	if slotUser != user {
		return game, desk, p, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方PositionID
	opponent := core.Opponent(slotUser)
	opponentSlotId := PositionID(opponent, slotNum)
	// 取得自身攻擊力
	attack, err := ComputeNormalAttack(ctx, game, desk, cardId)
	if err != nil {
		return game, desk, p, err
	}
	if len(desk.CardStack[opponentSlotId].Card) == 0 {
		// 如果對手單地上沒有單位
		// 攻擊對方玩家
		game, desk, p, err = InvokeDamagePlayer(ctx, game, desk, p, core.Key{Kind: "Card", IntID: cardId}, attack, BattleDamage, opponent)
		if err != nil {
			return game, desk, p, err
		}
	} else {
		// 如果對手Position上有單位
		// 先處理破竹
		// 取得單位剩下血量
		isDead, hp, err := IsUnitDead(ctx, game, desk, p, cardId)
		if err != nil {
			return game, desk, p, err
		}
		// 查看有沒有破竹、並取得破竹力
		powers, _, _, err := CheckKeyword(破竹, ctx, game, desk, p, cardId)
		// 如果單位還存在並且有破竹
		if isDead == false && len(powers) > 0 {
			power := powers[0]
			total := power - hp
			// 破竹力滿足了消滅單位的傷害後還有剩下才發動破竹
			if total > 0 {
				p = core.AddBlock(ctx, p, "破竹", []core.Command{
					{
						User:        user,
						Description: "分配{totalDamage}中的{damage1}到{cardId}、{damage2}到{user}",
						Parameters: map[string]interface{}{
							"totalDamage": float64(total),
							"cardId":      float64(cardId),
							"user":        opponent,
						},
						Source: core.Key{Kind: "Card", IntID: cardId},
					},
				})
				// 直接回傳
				return game, desk, p, nil
			}
		}
		// 攻擊那個單位
		opponentCardId := desk.CardStack[opponentSlotId].Card[0]
		game, desk, p, err = InvokeDamageUnit(ctx, game, desk, p, core.Key{Kind: "Card", IntID: cardId}, attack, BattleDamage, opponentCardId)
		if err != nil {
			return game, desk, p, err
		}
	}
	return game, desk, p, nil
}

func MoveCard(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, fromStackId string, toStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	var err error
	desk, err = core.MoveCard(ctx, desk, fromStackId, toStackId, 0, cardId)
	if err != nil {
		return game, desk, p, err
	}
	return game, desk, p, nil
}

// 轉移
func UnitMove(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, slotStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	card := desk.Card[cardId]
	if desk.CardStack[card.CardStack].Type != Position {
		return game, desk, p, errors.New("unit not in slot")
	}
	slotUser, _ := ParsePositionID(card.CardStack)
	if user != slotUser {
		return game, desk, p, errors.New("unit not in your slot")
	}
	if desk.CardStack[slotStackId].Type != Position {
		return game, desk, p, errors.New("move target is not slot")
	}
	if len(desk.CardStack[slotStackId].Card) > 0 {
		return game, desk, p, errors.New("target slot is not empty")
	}
	var err error
	toStack := slotStackId
	fromStack := card.CardStack
	game, desk, p, err = InvokeMoveCard(ctx, game, desk, p, core.Key{Kind: "User", StringID: user}, fromStack, toStack, cardId)
	if err != nil {
		return game, desk, p, err
	}
	return game, desk, p, nil
}

// 執行死亡判定
// 任何可能造成單位或玩家傷害的方法呼叫之後都要呼叫這個方法
// 死亡的單位會移到Graveyard
// 玩家若死亡也會立刻結束遊戲
func PerformDead(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	var err error
	for _, card := range desk.Card {
		info := game.CardInfo[card.ID]
		if info.Defence > 0 {
			continue
		}
		fromStack := card.CardStack
		toStack := card.Owner + Graveyard
		desk, err = core.MoveCard(ctx, desk, fromStack, toStack, 0, card.ID)
		if err != nil {
			return game, desk, p, err
		}
	}
	for idx, player := range game.Player {
		// TODO check dead
		var _ = player
		game.Winner = idx
	}
	return game, desk, p, nil
}

// 121.1. 处于整备状态的单位不能发起战斗和宣告攻击，也不能启动费用中带有{横置}的能力。
// 121.2. 通常情况下刚进入战场的单位会受到整备状态的影响，直到其操控者的下个回合开始为
// 止。
// 121.2a 具有神速能力的单位不受整备状态的影响。
// 121.2b 只有单位才会受到整备状态的影响，非单位实体并不会受到整备状态的影响。
// 301.1. 玩家可以在自己为进攻玩家的行动阶段（非战斗流程），拥有优先权且堆叠为空时，从
// 手上打出战器牌。作为被打出的牌，被打出的战器牌使用堆叠。
// 302.1. 玩家可以在自己为进攻玩家的行动阶段，拥有优先权且堆叠为空时，从手上打出单位牌。
// 作为被打出的牌，被打出的单位牌进入堆叠。打出单位牌在支付费用的同时需要为其选择一个合
// 法阵地。
// 303.1. 玩家可以在自己为进攻玩家的行动阶段，拥有优先权且堆叠为空时，从手上打出阵略牌。
// 作为被打出的牌，被打出的阵略牌进入堆叠。
// 304.1a 玩家可以在自己为进攻玩家的行动阶段（非战斗流程中），拥有优先权且堆叠为空时，
// 从手上打出{通常}锦囊牌。
// 304.1b 玩家可以在拥有优先权时，从手上打出{瞬发}锦囊牌。
func CollectCommand(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, cmd []core.Command) ([]core.Command, error) {
	isStackEmpty := len(p.Block) == 0
	if isStackEmpty {
		// 堆疊為空的狀況必須有優先權的玩家才能行動
		if game.PriorityPlayer != user {
			return nil, nil
		}
	}
	// 收集指令
	for _, card := range desk.Card {
		info := game.CardInfo[card.ID]
		// 行動階段單位可以攻擊
		if game.CurrentPhase == ActionPhase {
			// 如果在陣地上並且操控玩家是自己
			// 就可以攻擊
			if desk.CardStack[card.CardStack].Type == Position {
				if info.ControlPlayer == user {
					cmd = append(cmd, core.Command{
						User:        user,
						Description: "{cardId}宣告攻擊",
						Parameters: map[string]interface{}{
							"cardId": float64(card.ID),
						},
					})
				}
			}
		}
		// 如果卡在自己手牌上並且是錦囊
		// 就可以瞬發
		if card.CardStack == Hand {
			cardType := CardType(info)
			if card.Owner == user && cardType == Tactics {
				cmd = append(cmd, core.Command{User: user, Description: "支付這張{cardId}...", Parameters: nil})
			}
		}
	}
	if isStackEmpty {
		// 堆疊為空時才能讓出優先權
		if game.PriorityPlayer == user {
			cmd = append(cmd, core.Command{User: user, Description: "讓過", Parameters: nil})
		}
		// 堆疊為空時才能使用轉移
	}
	return cmd, nil
}

// 讓過
// 非常重要的基本流程
// 透過讓過來前進到下一個階段
func Pass(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string) (Game, core.Desktop, core.Procedure, error) {
	// 堆疊不為空不能讓出優先權
	if len(p.Block) != 0 {
		return game, desk, p, errors.New("堆疊不為空不能讓出優先權")
	}
	// 如果是重置或棄牌步驟，主動玩家呼叫讓過就是直接跳過
	if game.CurrentPhase == UntapStep || game.CurrentPhase == DiscardStep {
		if user == game.OffensivePlayer {
			return InvokeNextPhase(ctx, game, desk, p, 1)
		}
	}
	// 沒有優先權的不能讓出優先權
	if game.PriorityPlayer != user {
		return game, desk, p, errors.New("優先權在對方身上")
	}
	// 如果讓出的玩家沒有行動過並且上一個優先權的玩家也沒行動過
	// 就跳到下一個階段
	if game.ActionCount[game.PriorityPlayer] == 0 {
		lastPlayer := core.Opponent(user)
		if game.ActionCount[lastPlayer] == 0 {
			return InvokeNextPhase(ctx, game, desk, p, 1)
		}
	}
	// 交換優先權並重設行動次數
	game.PriorityPlayer = core.Opponent(user)
	game.ActionCount[game.PriorityPlayer] = 0
	return game, desk, p, nil
}

func NextPhase(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, step int) (Game, core.Desktop, core.Procedure, error) {
	game.CurrentPhase = (game.CurrentPhase + step) % PhaseCount
	game.PriorityPlayer = game.OffensivePlayer
	game.ActionCount[core.UserA] = -1
	game.ActionCount[core.UserB] = -1
	game.ActionCount[game.OffensivePlayer] = 0
	return game, desk, p, nil
}

// 啟動往下一階段
func InvokeNextPhase(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, step int) (Game, core.Desktop, core.Procedure, error) {
	// 加入user是為了給事件有統一的參數介面
	parameters := map[string]interface{}{
		"user": core.UserSys,
		"step": float64(step),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "階段將結束", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
		{User: core.UserSys, Description: "階段改變", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
		{User: core.UserSys, Description: "階段將開始", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
	})
	return game, desk, p, nil
}

// 棄牌規定效果
func InvokeDiscardCardInDiscardStep(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string) (Game, core.Desktop, core.Procedure, error) {
	offset := len(desk.CardStack[user+Hand].Card) - game.Player[user].HandLimit
	if offset <= 0 {
		return game, desk, p, nil
	}
	p = core.AddBlock(ctx, p, "結束棄牌", []core.Command{
		{User: user, Description: "{user}選擇{num}張手牌{cardIds}廢棄", Parameters: map[string]interface{}{"user": user, "num": float64(offset)}},
	})
	return game, desk, p, nil
}

// 啟動傷害流程
// 過程中會呼叫ComputeNormalDefence來計算減傷
func InvokeDamageUnit(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, source core.Key, damage int, damageType string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"damage":     float64(damage),
		"damageType": damageType,
		"cardId":     float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "單位將受到傷害", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "單位受到傷害", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "單位受到傷害後", Parameters: parameters, Source: source},
	})
	return game, desk, p, nil
}

// 啟動傷害流程
// 過程中會呼叫ComputeNormalDefence來計算減傷
func InvokeDamagePlayer(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, source core.Key, damage int, damageType string, player string) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"damage":     float64(damage),
		"damageType": damageType,
		"player":     player,
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "玩家將受到傷害", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "玩家受到傷害", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "玩家受到傷害後", Parameters: parameters, Source: source},
	})
	return game, desk, p, nil
}

// 啟動單位移動
func InvokeUnitMove(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, slotStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":        user,
		"slotStackId": slotStackId,
		"cardId":      float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "單位將移動", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "單位移動", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "單位移動後", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
	})
	return game, desk, p, nil
}

// 啟動單位攻擊
func InvokeUnitAttack(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":   user,
		"cardId": float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "單位宣告攻擊", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "單位攻擊", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "單位攻擊後", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
	})
	return game, desk, p, nil
}

func InvokeUnitDead(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 加入user是為了給事件有統一的參數介面
	parameters := map[string]interface{}{
		"user":   core.UserSys,
		"cardId": float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "單位將死亡", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
		{User: core.UserSys, Description: "單位死亡", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
		{User: core.UserSys, Description: "單位死亡後", Parameters: parameters, Source: core.Key{Kind: "User", StringID: core.UserSys}},
	})
	return game, desk, p, nil
}

func InvokeMoveCard(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, source core.Key, fromStackId string, toStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"fromStackId": fromStackId,
		"toStackId":   toStackId,
		"cardId":      float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "卡將移動", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "卡移動", Parameters: parameters, Source: source},
		{User: core.UserSys, Description: "卡移動後", Parameters: parameters, Source: source},
	})
	return game, desk, p, nil
}

// 啟動抽卡
// 可以指定從哪裡抽到手上
func InvokeTakeCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":        user,
		"fromStackId": fromStackId,
		"cardId":      float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "將抽到卡", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "抽到卡", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "抽到卡後", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
	})
	return game, desk, p, nil
}

// 啟動打卡
// 可以指定從哪裡打到陣地
func InvokePlayCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, slotNum int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":        user,
		"fromStackId": fromStackId,
		"slotNum":     float64(slotNum),
		"cardId":      float64(cardId),
	}
	p = core.AddBlock(ctx, p, "規則", []core.Command{
		{User: core.UserSys, Description: "卡將打到陣地", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "卡打到陣地", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
		{User: core.UserSys, Description: "卡打到陣地後", Parameters: parameters, Source: core.Key{Kind: "User", StringID: user}},
	})
	return game, desk, p, nil
}
