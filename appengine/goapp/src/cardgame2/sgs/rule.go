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
	var info CardInfo
	switch c.Description {
	case "OnPlayCardFromAF":
		user := c.Parameters["user"].(string)
		cardId = int(c.Parameters["cardId"].(float64))
		slotNum := int(c.Parameters["slotNum"].(float64))
		var _ = slotNum
		card = desk.Card[cardId]

		switch card.Ref {
		case "116":
			// ID116：当吴夫人进战场时，从你的牌库和Graveyard中搜寻一张吴势力主公牌
			if card.Owner != user {
				break
			}
			searchStack := append(
				desk.CardStack[user+Library].Card,
				desk.CardStack[user+Graveyard].Card...,
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
			return InvokeTakeCardFrom(ctx, game, desk, p, user, targetCard.CardStack, targetCard.ID)
		}
	}
	return game, desk, p, nil
}

// 基本規則實作
func BasicCommandHandler(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, c core.Command) (Game, core.Desktop, core.Procedure, error) {
	var err error
	switch c.Description {
	case "使用{cardId}啟動{abilityId}，目標是{targetId}":
		cardId := int(c.Parameters["cardId"].(float64))
		targetId := int(c.Parameters["targetId"].(float64))
		card := desk.Card[cardId]
		if card.Ref == "49" {
			var _ = targetId
			//game.CardBuf[targetId] = append(game.CardBuf[targetId], Buf{FromCardID: cardId})
		}
	case "{user}廢棄掉上一個指令的{cardIds}":
		pre := p.Command[c.ID-1]
		if pre.Block != c.Block {
			return game, desk, p, errors.New("不是同一個區塊的指令")
		}
		user := c.Parameters["user"].(string)
		selectedCardIds := pre.Parameters["cardIds"].([]float64)
		for _, cardId := range selectedCardIds {
			desk, err = core.MoveCard(ctx, desk, user+Hand, user+Graveyard, 0, int(cardId))
			if err != nil {
				return game, desk, p, err
			}
		}
		p = core.CompleteCommand(ctx, p, c)
	case
		"OnNextPhaseBF",
		"OnNextPhaseAF",
		"OnDamageUnitBF",
		"OnDamageUnitAF",
		"OnUnitAttackBF",
		"OnUnitAttackAF",
		"OnUnitMoveBF",
		"OnUnitMoveAF",
		"OnPlayCardFromBF",
		"OnPlayCardFromAF",
		"OnTakeCardFromBF",
		"OnTakeCardFromAF":
		// 再處理重置階段規定效果
		// ==================
		if c.Description == "OnNextPhaseAF" {
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
		}
		if c.Description == "OnNextPhaseBF" {
			// 剛結束棄牌階段，切換回合
			if game.CurrentPhase == DiscardStep {
				game.Turn += 1
				currOffensiveUser := game.Player[game.OffensivePlayer].User
				nextUser := core.Opponent(currOffensiveUser)
				game.OffensivePlayer = PlayerID(nextUser)
				// 優先權會在NextPhase時設定
			}
		}
		p = core.CompleteCommand(ctx, p, c)
	case "NextPhase":
		game, desk, p, err = NextPhase(ctx, game, desk, p)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	case "TakeCardFrom":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		game, desk, p, err = TakeCardFrom(ctx, game, desk, p, user, fromStackId, cardId)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	case "PlayCardFrom":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		slotNum := int(c.Parameters["slotNum"].(float64))
		fromStackId := c.Parameters["fromStackId"].(string)
		game, desk, p, err = PlayCardFrom(ctx, game, desk, p, user, fromStackId, slotNum, cardId)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	case "UnitMove":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		slotStackId := c.Parameters["slotStackId"].(string)
		game, desk, p, err = UnitMove(ctx, game, desk, p, user, slotStackId, cardId)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	case "UnitAttack":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		game, desk, p, err = UnitAttack(ctx, game, desk, p, user, cardId)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	case "DamageUnit":
		user := c.Parameters["user"].(string)
		cardId := int(c.Parameters["cardId"].(float64))
		damage := int(c.Parameters["damage"].(float64))
		game, desk, p, err = DamageUnit(ctx, game, desk, p, user, damage, cardId)
		if err != nil {
			return game, desk, p, err
		}
		p = core.CompleteCommand(ctx, p, c)
	}
	return game, desk, p, nil
}

// 棄牌規定效果
func InvokeDiscardCardInDiscardStep(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string) (Game, core.Desktop, core.Procedure, error) {
	offset := len(desk.CardStack[user+Hand].Card) - game.Player[PlayerID(user)].HandLimit
	if offset <= 0 {
		return game, desk, p, nil
	}
	p = core.AddBlock(ctx, p, []core.Command{
		{User: user, Description: "選擇{num}張手牌{cardIds}", Parameters: map[string]interface{}{"num": float64(offset)}},
		{User: core.UserSys, Description: "{user}廢棄掉上一個指令的{cardIds}", Parameters: map[string]interface{}{"user": user}},
	})
	return game, desk, p, nil
}

// 重置規定效果
func UntapCardInUntapStep(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string) (Game, core.Desktop, core.Procedure, error) {
	return game, desk, p, nil
}

// 計算迎擊力
// 回傳-1代表沒有迎擊能力
func ComputeCounter(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) (int, error) {
	return -1, nil
}

// 計算基本攻擊力
func ComputeNormalAttack(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) (int, error) {
	info := game.CardInfo[cardId]
	value, err := strconv.Atoi(info.Prototype.Attack)
	if err != nil {
		return 0, err
	}
	return value, nil
}

// 計算基本防禦力
func ComputeNormalDefence(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) (int, error) {
	info := game.CardInfo[cardId]
	value, err := strconv.Atoi(info.Prototype.Defence)
	if err != nil {
		return 0, err
	}
	return value, nil
}

// 啟動傷害流程
// 過程中會呼叫ComputeNormalDefence來計算減傷
func InvokeDamageUnit(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, damage int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":   user,
		"damage": float64(damage),
		"cardId": float64(cardId),
	}
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnDamageUnitBF", Parameters: parameters},
		{User: core.UserSys, Description: "DamageUnit", Parameters: parameters},
		{User: core.UserSys, Description: "OnDamageUnitAF", Parameters: parameters},
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
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnUnitMoveBF", Parameters: parameters},
		{User: core.UserSys, Description: "UnitMove", Parameters: parameters},
		{User: core.UserSys, Description: "OnUnitMoveAF", Parameters: parameters},
	})
	return game, desk, p, nil
}

// 啟動單位攻擊
func InvokeUnitAttack(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	parameters := map[string]interface{}{
		"user":   user,
		"cardId": float64(cardId),
	}
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnUnitAttackBF", Parameters: parameters},
		{User: core.UserSys, Description: "UnitAttack", Parameters: parameters},
		{User: core.UserSys, Description: "OnUnitAttackAF", Parameters: parameters},
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
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnTakeCardFromBF", Parameters: parameters},
		{User: core.UserSys, Description: "TakeCardFrom", Parameters: parameters},
		{User: core.UserSys, Description: "OnTakeCardFromAF", Parameters: parameters},
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
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnPlayCardFromBF", Parameters: parameters},
		{User: core.UserSys, Description: "PlayCardFrom", Parameters: parameters},
		{User: core.UserSys, Description: "OnPlayCardFromAF", Parameters: parameters},
	})
	return game, desk, p, nil
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

func PlayCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, slotNum int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	targetStackId := PositionID(user, slotNum)
	hasUnit := len(desk.CardStack[targetStackId].Card) > 0
	if hasUnit {
		return game, desk, p, TargetMissingError(ErrSlotIsntEmpty.Error())
	}
	var err error
	desk, err = core.MoveCard(ctx, desk, fromStackId, targetStackId, 0, cardId)
	if err != nil {
		return game, desk, p, TargetMissingError(err.Error())
	}
	return game, desk, p, nil
}

func DamageUnit(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, attack int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 取得對手防禦力
	defence, err := ComputeNormalDefence(ctx, game, desk, user, cardId)
	if err != nil {
		return game, desk, p, err
	}
	damage := attack - defence
	if damage < 0 {
		damage = 0
	}
	game.CardInfo[cardId].Defence -= damage
	return game, desk, p, nil
}

// 指定一個單位攻擊
func UnitAttack(ctx appengine.Context, game Game, stage core.Desktop, p core.Procedure, user string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 判斷單位有沒有在Position上
	inputCard := stage.Card[cardId]
	if stage.CardStack[inputCard.CardStack].Type != "slot" {
		return game, stage, p, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的Position
	slotUser, slotNum := ParsePositionID(inputCard.CardStack)
	if slotUser != user {
		return game, stage, p, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方PositionID
	opponent := core.Opponent(slotUser)
	opponentSlotId := PositionID(opponent, slotNum)
	// 取得自身攻擊力
	attack, err := ComputeNormalAttack(ctx, game, stage, user, cardId)
	if err != nil {
		return game, stage, p, err
	}
	if len(stage.CardStack[opponentSlotId].Card) == 0 {
		// 如果對手單地上沒有單位
		// 攻擊對方玩家
		game.Player[PlayerID(opponent)].HP -= attack
	} else {
		// 如果對手Position上有單位
		// 攻擊那個單位
		opponentCardId := stage.CardStack[opponentSlotId].Card[0]
		game, stage, p, err = InvokeDamageUnit(ctx, game, stage, p, user, attack, opponentCardId)
		if err != nil {
			return game, stage, p, err
		}
	}
	return game, stage, p, nil
}

func UnitMove(ctx appengine.Context, game Game, stage core.Desktop, p core.Procedure, user string, slotStackId string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	card := stage.Card[cardId]
	if stage.CardStack[card.CardStack].Type != "slot" {
		return game, stage, p, errors.New("unit not in slot")
	}
	slotUser, _ := ParsePositionID(card.CardStack)
	if user != slotUser {
		return game, stage, p, errors.New("unit not in your slot")
	}
	if stage.CardStack[slotStackId].Type != "slot" {
		return game, stage, p, errors.New("move target is not slot")
	}
	if len(stage.CardStack[slotStackId].Card) > 0 {
		return game, stage, p, errors.New("target slot is not empty")
	}
	var err error
	toStack := slotStackId
	fromStack := card.CardStack
	stage, err = core.MoveCard(ctx, stage, fromStack, toStack, 0, cardId)
	if err != nil {
		return game, stage, p, err
	}
	return game, stage, p, nil
}

// 執行死亡判定
// 任何可能造成單位或玩家傷害的方法呼叫之後都要呼叫這個方法
// 死亡的單位會移到Graveyard
// 玩家若死亡也會立刻結束遊戲
func PerformDead(ctx appengine.Context, game Game, stage core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	var err error
	for _, card := range stage.Card {
		info := game.CardInfo[card.ID]
		if info.Defence > 0 {
			continue
		}
		fromStack := card.CardStack
		toStack := card.Owner + Graveyard
		stage, err = core.MoveCard(ctx, stage, fromStack, toStack, 0, card.ID)
		if err != nil {
			return game, stage, p, err
		}
	}
	for idx, player := range game.Player {
		if player.HP > 0 {
			continue
		}
		game.Winner = idx
	}
	return game, stage, p, nil
}

func CollectCommand(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, cmd []core.Command) ([]core.Command, error) {
	isStackEmpty := len(p.Block) == 0
	if isStackEmpty {
		// 堆疊為空的狀況必須有優先權的玩家才能行動
		if game.PriorityPlayer != PlayerID(user) {
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
				if info.ControlPlayer == PlayerID(user) {
					cmd = append(cmd, core.Command{User: user, Description: "{cardId}通常攻擊", Parameters: nil})
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
		if game.PriorityPlayer == PlayerID(user) {
			cmd = append(cmd, core.Command{User: user, Description: "Pass", Parameters: nil})
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
		if PlayerID(user) == game.OffensivePlayer {
			return InvokeNextPhase(ctx, game, desk, p)
		}
	}
	// 沒有優先權的不能讓出優先權
	if game.PriorityPlayer != PlayerID(user) {
		return game, desk, p, errors.New("優先權在對方身上")
	}
	// 如果讓出的玩家沒有行動過並且上一個優先權的玩家也沒行動過
	// 就跳到下一個階段
	if game.ActionCount[game.PriorityPlayer] == 0 {
		lastPlayer := PlayerID(core.Opponent(user))
		if game.ActionCount[lastPlayer] == 0 {
			return InvokeNextPhase(ctx, game, desk, p)
		}
	}
	// 交換優先權並重設行動次數
	game.PriorityPlayer = PlayerID(core.Opponent(user))
	game.ActionCount[game.PriorityPlayer] = 0
	return game, desk, p, nil
}

func NextPhase(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	game.CurrentPhase = (game.CurrentPhase + 1) % PhaseCount
	game.PriorityPlayer = game.OffensivePlayer
	game.ActionCount = []int{-1, -1}
	game.ActionCount[game.OffensivePlayer] = 0
	return game, desk, p, nil
}

// 啟動往下一階段
func InvokeNextPhase(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	// 加入user是為了給事件有統一的參數介面
	parameters := map[string]interface{}{
		"user": core.UserSys,
	}
	p = core.AddBlock(ctx, p, []core.Command{
		{User: core.UserSys, Description: "OnNextPhaseBF", Parameters: parameters},
		{User: core.UserSys, Description: "NextPhase", Parameters: parameters},
		{User: core.UserSys, Description: "OnNextPhaseAF", Parameters: parameters},
	})
	return game, desk, p, nil
}
