package sgs

import (
	"net/url"
	"strconv"
	"errors"
	"appengine"
	core "cardgame3/core"
)

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
func CollectCommand(ctx appengine.Context, game Game, user string, cmd []core.Command) ([]core.Command, error) {
	isStackEmpty := len(game.Procedure.Block) == 0
	if isStackEmpty {
		// 堆疊為空的狀況必須有優先權的玩家才能行動
		if game.PriorityPlayer != user {
			return nil, nil
		}
	}
	// 收集指令
	for _, card := range game.CardTable.Card {
		info := game.CardState[card.ID]
		// 行動階段單位可以攻擊
		if game.CurrentPhase == ActionPhase {
			// 如果在陣地上並且操控玩家是自己
			// 就可以攻擊
			if game.CardTable.CardStack[card.CardStack].Type == Position {
				if info.ControlPlayer == user {
					cmd = append(cmd, core.Command{
						User:        UserSys,
						Description: "{user}宣告{cardId}攻擊",
						Parameters: url.Values{
							"user":   {user},
							"cardId": {card.ID},
						},
					})
				}
			}
		}
		// 如果卡在自己手牌上並且是錦囊
		// 就可以瞬發
		if card.CardStack == Hand {
			cardType := CardType(ctx, game, card.ID)
			if info.Owner == user && cardType == Tactics {
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

// 轉移
func PlayerMoveUnit(ctx appengine.Context, game Game, user string, slotStackId string, cardId string) (Game, error) {
	card := game.CardTable.Card[cardId]
	if game.CardTable.CardStack[card.CardStack].Type != Position {
		return game, errors.New("unit not in slot")
	}
	slotUser, _ := ParsePositionID(card.CardStack)
	if user != slotUser {
		return game, errors.New("unit not in your slot")
	}
	if game.CardTable.CardStack[slotStackId].Type != Position {
		return game, errors.New("move target is not slot")
	}
	if len(game.CardTable.CardStack[slotStackId].Card) > 0 {
		return game, errors.New("target slot is not empty")
	}
	var err error
	toStack := slotStackId
	fromStack := card.CardStack
	game, err = MoveCardProcedure(ctx, game, "轉移", fromStack, toStack, cardId)
	if err != nil {
		return game, err
	}
	return game, nil
}

// 讓過
// 非常重要的基本流程
// 透過讓過來前進到下一個階段
func PlayerPass(ctx appengine.Context, game Game, user string) (Game, error) {
	p := game.Procedure
	// 堆疊不為空不能讓出優先權
	if len(p.Block) != 0 {
		return game, errors.New("堆疊不為空不能讓出優先權")
	}
	// 如果是重置或棄牌步驟，主動玩家呼叫讓過就是直接跳過
	if game.CurrentPhase == UntapStep || game.CurrentPhase == DiscardStep {
		if user == game.OffensivePlayer {
			return NextPhaseProcedure(ctx, game, 1, "讓過")
		}
	}
	// 沒有優先權的不能讓出優先權
	if game.PriorityPlayer != user {
		return game, errors.New("優先權在對方身上")
	}
	// 如果讓出的玩家沒有行動過並且上一個優先權的玩家也沒行動過
	// 就跳到下一個階段
	if game.ActionCount[game.PriorityPlayer] == 0 {
		lastPlayer := Opponent(user)
		if game.ActionCount[lastPlayer] == 0 {
			return NextPhaseProcedure(ctx, game, 1, "讓過")
		}
	}
	// 交換優先權並重設行動次數
	game.PriorityPlayer = Opponent(user)
	game.ActionCount[game.PriorityPlayer] = 0
	return game, nil
}

func NextPhase(ctx appengine.Context, game Game, step int) (Game, error) {
	game.CurrentPhase = (game.CurrentPhase + step) % PhaseCount
	game.PriorityPlayer = game.OffensivePlayer
	game.ActionCount[UserA] = -1
	game.ActionCount[UserB] = -1
	game.ActionCount[game.OffensivePlayer] = 0
	return game, nil
}

// 啟動往下一階段
func NextPhaseProcedure(ctx appengine.Context, game Game, step int, reason string) (Game, error) {
	parameters := url.Values{
		"step": {strconv.Itoa(step)},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "階段將結束", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "階段改變", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "階段將開始", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

func TakeCardFrom(ctx appengine.Context, game Game, user string, fromStackId string, cardId string) (Game, error) {
	targetStackId := user + Hand
	var err error
	game.CardTable, err = core.MoveCard(ctx, game.CardTable, fromStackId, targetStackId, 0, cardId)
	if err != nil {
		return game, TargetMissingError(err.Error())
	}
	return game, nil
}

func PlayCardFrom(ctx appengine.Context, game Game, fromStackId string, targetStackId string, cardId string) (Game, error) {
	var err error
	// 先處理下單位，再處理替任
	game, err = MoveCardProcedure(ctx, game, ReasonPlayUnit, fromStackId, targetStackId, cardId)
	if err != nil {
		return game, err
	}
	// 處理替任
	// 再次提醒：後放入堆疊的先處理，所以替任處理要放在後面
	// 115.1. 若一个单位将进入的阵地上有其他单位，那么原先的单位会被放逐（移出游戏），这个
	// 过程叫做替任。
	// 115.2. 替任为一种特殊动作，不会进入堆叠，但由于替任从而触发的单位离场能力会置入堆叠。
	// 115.3. 相互替任的两个单位不会同时在场。
	hasUnit := len(game.CardTable.CardStack[targetStackId].Card) > 0
	if hasUnit {
		existCardId := game.CardTable.CardStack[targetStackId].Card[0]
		existCardState := game.CardState[existCardId]
		game, err = MoveCardProcedure(ctx, game, ReasonSwapUnit, targetStackId, existCardState.Owner+ExileZone, existCardId)
		if err != nil {
			return game, err
		}
	}
	return game, nil
}

func DamagePlayer(ctx appengine.Context, game Game, damage int, damageType string, player string) (Game, error) {
	pl := game.Player[player]
	for i := 0; i < damage; i += 1 {
		pl.Token = append(pl.Token, DamageToken)
	}
	game.Player[player] = pl
	return game, nil
}

func DamageUnit(ctx appengine.Context, game Game, damage int, damageType string, cardId string) (Game, error) {
	// 放置傷害Token
	info := game.CardState[cardId]
	for i := 0; i < damage; i += 1 {
		info.Token = append(info.Token, DamageToken)
	}
	game.CardState[cardId] = info
	isDead, _, err := IsUnitDead(ctx, game, cardId)
	if err != nil {
		return game, err
	}
	if isDead {
		game, err = UnitDeadProcedure(ctx, game, cardId)
		if err != nil {
			return game, err
		}
	}
	return game, nil
}

func IsUnitDead(ctx appengine.Context, game Game, cardId string) (bool, int, error) {
	info := game.CardState[cardId]
	var damageCnt int
	for _, token := range info.Token {
		if token != DamageToken {
			continue
		}
		damageCnt += 1
	}
	def := info.Defence
	if damageCnt >= def {
		return true, 0, nil
	}
	return false, def - damageCnt, nil
}

// 重置規定效果
func UntapCardInUntapStep(ctx appengine.Context, game Game, user string) (Game, error) {
	return game, nil
}

func UnitDeadProcedure(ctx appengine.Context, game Game, cardId string) (Game, error) {
	card := game.CardTable.Card[cardId]
	cardState := game.CardState[cardId]
	return MoveCardProcedure(ctx, game, ReasonUnitDead, card.CardStack, cardState.Owner+Graveyard, cardId)
}

// 指定一個單位攻擊
func UnitAttackProcedure(ctx appengine.Context, game Game, user string, cardId string) (Game, error) {
	// 判斷單位有沒有在Position上
	card := game.CardTable.Card[cardId]
	if game.CardTable.CardStack[card.CardStack].Type != Position {
		return game, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的Position
	slotUser, slotNum := ParsePositionID(card.CardStack)
	if slotUser != user {
		return game, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方PositionID
	opponent := Opponent(slotUser)
	opponentSlotId := PositionID(opponent, slotNum)
	// 取得自身攻擊力
	attack, err := ComputeNormalAttack(ctx, game, cardId)
	if err != nil {
		return game, err
	}
	if len(game.CardTable.CardStack[opponentSlotId].Card) == 0 {
		// 如果對手單地上沒有單位
		// 攻擊對方玩家
		game, err = DamagePlayerProcedure(ctx, game, "單位攻擊", cardId, attack, BattleDamage, opponent)
		if err != nil {
			return game, err
		}
	} else {
		// 如果對手Position上有單位
		// 先處理破竹
		// 取得單位剩下血量
		isDead, hp, err := IsUnitDead(ctx, game, cardId)
		if err != nil {
			return game, err
		}
		// 查看有沒有破竹、並取得破竹力
		powers, _, _, err := CheckKeyword(破竹, ctx, game, cardId)
		// 如果單位還存在並且有破竹
		if isDead == false && len(powers) > 0 {
			power := powers[0]
			total := power - hp
			// 破竹力滿足了消滅單位的傷害後還有剩下才發動破竹
			if total > 0 {
				game.Procedure = core.AddBlock(ctx, game.Procedure, "破竹", []core.Command{
					{
						User:        user,
						Description: "分配{totalDamage}中的{damage1}到{cardId}、{damage2}到{user}",
						Parameters: url.Values{
							"totalDamage": {strconv.Itoa(total)},
							"cardId":      {cardId},
							"user":        {opponent},
						},
						Reason: "破竹",
					},
				})
				// 直接回傳
				return game, nil
			}
		}
		// 攻擊那個單位
		opponentCardId := game.CardTable.CardStack[opponentSlotId].Card[0]
		game, err = DamageUnitProcedure(ctx, game, "單位攻擊", cardId, attack, BattleDamage, opponentCardId)
		if err != nil {
			return game, err
		}
	}
	return game, nil
}

// 棄牌規定效果
func DiscardCardInDiscardStepProcedure(ctx appengine.Context, game Game, user string) (Game, error) {
	offset := len(game.CardTable.CardStack[user+Hand].Card) - game.Player[user].HandLimit
	if offset <= 0 {
		return game, nil
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "結束棄牌", []core.Command{
		{
			User:        user,
			Description: "{user}選擇{num}張手牌{cardIds}廢棄",
			Parameters:  url.Values{"user": {user}, "num": {strconv.Itoa(offset)}},
		},
	})
	return game, nil
}

// 啟動抽卡
// 可以指定從哪裡抽到手上
func TakeCardProcedure(ctx appengine.Context, game Game, user string, fromStackId string, cardId string, reason string) (Game, error) {
	parameters := url.Values{
		"user":        {user},
		"fromStackId": {fromStackId},
		"cardId":      {cardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "將抽到卡", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "抽到卡", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "抽到卡後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

func MoveCardProcedure(ctx appengine.Context, game Game, reason string, fromStackId string, toStackId string, cardId string) (Game, error) {
	parameters := url.Values{
		"fromStackId": {fromStackId},
		"toStackId":   {toStackId},
		"cardId":      {cardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "卡將移動", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "卡移動", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "卡移動後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

// 啟動單位攻擊
func PlayerAttackProcedure(ctx appengine.Context, game Game, reason string, user string, cardId string) (Game, error) {
	parameters := url.Values{
		"user":   {user},
		"cardId": {cardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "單位攻擊前", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "單位攻擊", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "單位攻擊後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

// 啟動傷害流程
// 過程中會呼叫ComputeNormalDefence來計算減傷
func DamageUnitProcedure(ctx appengine.Context, game Game, reason string, attackCardId string, damage int, damageType string, cardId string) (Game, error) {
	parameters := url.Values{
		"damage":       {strconv.Itoa(damage)},
		"damageType":   {damageType},
		"cardId":       {cardId},
		"attackCardId": {attackCardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "單位將受到傷害", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "單位受到傷害", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "單位受到傷害後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

// 啟動傷害流程
// 過程中會呼叫ComputeNormalDefence來計算減傷
func DamagePlayerProcedure(ctx appengine.Context, game Game, reason string, attackCardId string, damage int, damageType string, player string) (Game, error) {
	parameters := url.Values{
		"damage":       {strconv.Itoa(damage)},
		"damageType":   {damageType},
		"player":       {player},
		"attackCardId": {attackCardId},
	}
	game.Procedure = core.AddBlock(ctx, game.Procedure, "規則", []core.Command{
		{User: UserSys, Description: "玩家將受到傷害", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "玩家受到傷害", Parameters: parameters, Reason: reason},
		{User: UserSys, Description: "玩家受到傷害後", Parameters: parameters, Reason: reason},
	})
	return game, nil
}

const (
	ReasonPlayUnit = "ReasonPlayUnit"
	ReasonUnitDead = "ReasonUnitDead"
	ReasonSwapUnit = "ReasonSwapUnit"
)

// 基本規則實作
func BasicCommandHandler(ctx appengine.Context, game Game, c core.Command) (Game, error) {
	switch c.Description {
	case "{user}選擇{num}張手牌{cardIds}廢棄":
		var err error
		var has bool
		user := c.Parameters.Get("user")
		cardIds, has := c.Parameters["cardIds"]
		if has == false {
			return game, errors.New("沒有cardIds")
		}
		// 直接執行，不進入Procedure
		for _, cardId := range cardIds {
			game.CardTable, err = core.MoveCard(ctx, game.CardTable, user+Hand, user+Graveyard, 0, cardId)
			if err != nil {
				return game, err
			}
		}
	case "{user}宣告{cardId}攻擊":
		var err error
		user := c.Parameters.Get("user")
		cardId := c.Parameters.Get("cardId")
		game, err = PlayerAttackProcedure(ctx, game, "玩家宣告攻擊", user, cardId)
		if err != nil {
			return game, err
		}
	case "{user}使用{costIds}支付{cost}打出單位{cardId}到{slotNum}":
		var err error
		user := c.Parameters.Get("user")
		cost := c.Parameters.Get("cost")
		costIds := c.Parameters["costIds"]
		cardId := c.Parameters.Get("cardId")

		game, err = ConsumeCost(ctx, game, user, cost, costIds)
		if err != nil {
			return game, err
		}
		cardState := game.CardState[cardId]
		if cardState.Owner != user {
			return game, errors.New("不是Onwer")
		}
		slotNum, err := strconv.Atoi(c.Parameters.Get("slotNum"))
		if err != nil {
			return game, err
		}
		fromStackId := user + Hand
		toStackId := PositionID(user, slotNum)
		// 先處理下單位，再處理替任
		game, err = PlayCardFrom(ctx, game, fromStackId, toStackId, cardId)
		if err != nil {
			return game, err
		}
		return game, nil
	case "卡將移動":
		cardId := c.Parameters.Get("cardId")
		fromStackId := c.Parameters.Get("fromStackId")
		toStackId := c.Parameters.Get("toStackId")
		card := game.CardState[cardId]
		// ID71 汉志传承者·蒋琬：若任一单位将死去，改为将该单位洗入其拥有者的牌库，而非置入其拥有者的墓地。
		// 将至多两张目标单位牌从墓地放进战场。他们具有神速能力。在下一个结束步骤开始时，将他们放逐。如果他们将离开战场，则改为将他们放逐，而非置入其他区域。
		// == 以上兩個能力有重疊的部分 ==
		// 將死去 -> 移到牌庫 (死亡等同於離開戰場，離開不等於死亡)
		// 将离开战场 -> 放逐
		// 若兩個技能的對象剛好同一單位
		// 要讓玩家可以選
		// command = "從{ids}選擇{idx}發動", ids=[]string{"",""}, user = 操控玩家
		isExitPosition := game.CardTable.CardStack[fromStackId].Type == Position && game.CardTable.CardStack[toStackId].Type != Position
		if isExitPosition {
			hasRef71 := false
			if hasRef71 {
				if c.Reason == ReasonUnitDead {
					// 改成移到牌庫
					nextCmd := game.Procedure.Command[c.ID+1]
					nextCmd.Parameters.Set("toStackId", card.Owner+Library)
					// "卡移動"和"卡移動後"都要改
					game.Procedure.Command[c.ID+1] = nextCmd
					game.Procedure.Command[c.ID+2] = nextCmd
					// 如果重疊能力（可以從Source判斷）
					// 就改變整個指令，讓玩家可以選擇效果
				}
			}
		}
	case "卡移動":
		var err error
		var table core.CardTable
		cardId := c.Parameters.Get("cardId")
		fromStackId := c.Parameters.Get("fromStackId")
		toStackId := c.Parameters.Get("toStackId")
		table, err = core.MoveCard(ctx, game.CardTable, fromStackId, toStackId, 0, cardId)
		if err != nil {
			return game, err
		}
		game.CardTable = table
	case "卡移動後":
		cardId := c.Parameters.Get("cardId")
		toStackId := c.Parameters.Get("toStackId")
		// 如果移到陣地中，判斷迎擊和突擊
		if game.CardTable.CardStack[toStackId].Type == Position {
			oppositeUnit, hasOppositeUnit, err := QueryUnitInOppositePosition(ctx, game, toStackId)
			if err != nil {
				return game, err
			}
			if hasOppositeUnit {
				// 迎擊
				// 注意：是給移動的單位傷害
				powers, _, _, err := CheckKeyword(迎擊, ctx, game, oppositeUnit)
				if err != nil {
					return game, err
				}
				for _, power := range powers {
					game, err = DamageUnitProcedure(ctx, game, "迎擊", oppositeUnit, power, CounterDamage, cardId)
					if err != nil {
						return game, err
					}
				}
				// 突擊
				// 後處理的先發動，所以突擊會先結算
				// 注意：是給對面單位傷害
				powers, _, _, err = CheckKeyword(突擊, ctx, game, cardId)
				if err != nil {
					return game, err
				}
				for _, power := range powers {
					game, err = DamageUnitProcedure(ctx, game, "突擊", cardId, power, AssaultDamage, oppositeUnit)
					if err != nil {
						return game, err
					}
				}
			}
		}
	case "階段將結束":
		// 剛結束棄牌階段，切換回合
		if game.CurrentPhase == DiscardStep {
			game.Turn += 1
			nextUser := Opponent(game.OffensivePlayer)
			game.OffensivePlayer = nextUser
			// 優先權會在"階段改變"時設定
		}
	case "階段改變":
		step, err := strconv.Atoi(c.Parameters.Get("step"))
		if err != nil {
			return game, err
		}
		game, err = NextPhase(ctx, game, step)
		if err != nil {
			return game, err
		}
	case "階段將開始":
		var err error
		// ID20司空先锋·张辽
		// 每当张辽对玩家造成战斗伤害时，略过该玩家的下一个重置步骤。
		// TODO 略过该玩家的下一个重置步骤
		// if currentPhase == UntapStep
		// step = 2

		// 切換階段後等於重置階段的話，代表剛進入重置階段
		// 立刻重置卡牌
		offensiveUser := game.OffensivePlayer
		if game.CurrentPhase == UntapStep {
			game, err = UntapCardInUntapStep(ctx, game, offensiveUser)
			if err != nil {
				return game, err
			}
		}
		// 抽牌階段，第一回合不能抽牌
		if game.CurrentPhase == DrawStep {
			canDraw := game.Turn != 0
			if canDraw {
				topCardId, err := core.TopCardInCardStack(ctx, game.CardTable, offensiveUser+Library)
				if err == core.ErrCardNotExist {
					return game, TargetMissingError("無卡可抽")
				}
				game, err = TakeCardProcedure(ctx, game, offensiveUser, offensiveUser+Library, topCardId, "抽牌階段抽牌")
				if err != nil {
					return game, err
				}
			}
		}
		// 剛進入棄牌階段，立刻棄牌
		if game.CurrentPhase == DiscardStep {
			game, err = DiscardCardInDiscardStepProcedure(ctx, game, offensiveUser)
			if err != nil {
				return game, err
			}
		}
	case "抽到卡":
		var err error
		user := c.Parameters.Get("user")
		cardId := c.Parameters.Get("cardId")
		if cardId == "" {
			return game, errors.New("沒有cardId")
		}
		fromStackId := c.Parameters.Get("fromStackId")
		game, err = TakeCardFrom(ctx, game, user, fromStackId, cardId)
		if err != nil {
			return game, err
		}
	case "單位攻擊前":
	case "單位攻擊":
		var err error
		user := c.Parameters.Get("user")
		cardId := c.Parameters.Get("cardId")
		game, err = UnitAttackProcedure(ctx, game, user, cardId)
		if err != nil {
			return game, err
		}
	case "單位攻擊後":
	case "單位將受到傷害":
		cardId := c.Parameters.Get("cardId")
		damage, err := strconv.Atoi(c.Parameters.Get("damage"))
		attackId := c.Parameters.Get("attackId")
		if err != nil {
			return game, err
		}
		damageType := c.Parameters.Get("damageType")
		// 如果是迎擊或是突擊，可能會遇到連續發動效果的過程中目標單位就已經死去
		// 這個時候就忽略掉效果就行了
		if damageType == CounterDamage || damageType == AssaultDamage {
			isDead, _, err := IsUnitDead(ctx, game, cardId)
			if err != nil {
				return game, err
			}
			if isDead {
				// 將這個效果移出堆疊，這樣就不會有傷害事件發生
				game.Procedure = core.DeleteBlock(ctx, game.Procedure, c.Block)
				return game, nil
			}
		}
		// 突擊傷害來源若被横置則沒有傷害效果
		if damageType == AssaultDamage {
			card := game.CardTable.Card[attackId]
			if card.Direction == core.DirectionTap {
				game.Procedure = core.DeleteBlock(ctx, game.Procedure, c.Block)
				return game, nil
			}
		}
		// 取得對手防禦力
		defence, err := ComputeNormalDefence(ctx, game, damageType, cardId)
		if err != nil {
			return game, err
		}
		damage = damage - defence
		if damage <= 0 {
			game.Procedure = core.DeleteBlock(ctx, game.Procedure, c.Block)
			return game, nil
		}
		// TODO 防止性能力
		// 處理抵抗
		_, powers, _, err := CheckKeyword(抵抗, ctx, game, cardId)
		if err != nil {
			return game, err
		}
		for _, power := range powers {
			isMatch, err := IfMatchResistance(ctx, power, game, cardId)
			if err != nil {
				return game, err
			}
			if isMatch {
				game.Procedure = core.DeleteBlock(ctx, game.Procedure, c.Block)
				return game, nil
			}
		}
	// TODO 替代性能力
	case "單位受到傷害":
		cardId := c.Parameters.Get("cardId")
		damage, err := strconv.Atoi(c.Parameters.Get("damage"))
		if err != nil {
			return game, err
		}
		damageType := c.Parameters.Get("damageType")
		game, err = DamageUnit(ctx, game, damage, damageType, cardId)
		if err != nil {
			return game, err
		}
	case "單位受到傷害後":
		cardId := c.Parameters.Get("cardId")
		attackId := c.Parameters.Get("attackId")
		// 如果傷害來源有致命
		_, _, hasKill, err := CheckKeyword(致命, ctx, game, attackId)
		if err != nil {
			return game, err
		}
		if hasKill == true {
			game, err = UnitDeadProcedure(ctx, game, cardId)
			if err != nil {
				return game, err
			}
		}
	case "玩家受到傷害":
		damage, err := strconv.Atoi(c.Parameters.Get("damage"))
		if err != nil {
			return game, err
		}
		damageType := c.Parameters.Get("damageType")
		player := c.Parameters.Get("player")
		game, err = DamagePlayer(ctx, game, damage, damageType, player)
		if err != nil {
			return game, err
		}
	case "玩家受到傷害後":
		attackId := c.Parameters.Get("attackId")
		damage, err := strconv.Atoi(c.Parameters.Get("damage"))
		if err != nil {
			return game, err
		}
		info := game.CardState[attackId]
		// 處理斬獲
		// 打掉多少血回復多少血
		_, _, hasGetLife, err := CheckKeyword(斬獲, ctx, game, attackId)
		if err != nil {
			return game, err
		}
		if hasGetLife {
			targetUser := info.ControlPlayer
			var _, _ = targetUser, damage
			// TODO 移除傷害指示物
		}
	case "單位將死亡":
	case "單位死亡":
		var err error
		cardId := c.Parameters.Get("cardId")
		game, err = UnitDeadProcedure(ctx, game, cardId)
		if err != nil {
			return game, err
		}
	}
	game.Procedure = core.CompleteCommand(ctx, game.Procedure, c)
	return game, nil
}
