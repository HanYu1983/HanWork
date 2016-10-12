package sgs

import (
	"appengine"
	core "cardgame2/core"
	"errors"
	"strconv"
	"strings"
)

type TargetMissingError string

func (err TargetMissingError) Error() string {
	return string(err)
}

func OnEvent(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, c core.Command) (Game, core.Desktop, core.Procedure, error) {
	var cardId int
	var card core.Card
	var info CardInfo
	switch c.Description {
	case "OnPlayCardFromAF":
		cardId = int(c.Parameters["cardId"].(float64))
		slotNum := int(c.Parameters["slotNum"].(float64))
		var _ = slotNum
		card = desk.Card[cardId]
		// TODO 迎擊
		//slotInUser, slotNum = ParseCardStackSlotID(card.CardStack)

		switch card.Ref {
		case "116":
			// ID116：当吴夫人进战场时，从你的牌库和墓地中搜寻一张吴势力主公牌
			if card.Owner != user {
				break
			}
			searchStack := append(
				desk.CardStack[user+CardStackBase].Card,
				desk.CardStack[user+CardStackGraveyard].Card...,
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

func HandleCommand(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, c core.Command) (Game, core.Desktop, core.Procedure, error) {
	var err error
	switch c.Description {
	case "使用{cardId}啟動{abilityId}，目標是{targetId}":
		cardId := int(c.Parameters["cardId"].(float64))
		targetId := int(c.Parameters["targetId"].(float64))
		card := desk.Card[cardId]
		if card.Ref == "49" {
			game.CardBuf[targetId] = append(game.CardBuf[targetId], Buf{FromCardID: cardId})
		}
	case
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
		user := c.Parameters["user"].(string)
		game, desk, p, err = OnEvent(ctx, game, desk, p, user, c)
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

func ComputeNormalAttack(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) (int, error) {
	info := game.CardInfo[cardId]
	value, err := strconv.Atoi(info.Prototype.Attack)
	if err != nil {
		return 0, err
	}
	return value, nil
}

func ComputeNormalDefence(ctx appengine.Context, game Game, desk core.Desktop, user string, cardId int) (int, error) {
	info := game.CardInfo[cardId]
	value, err := strconv.Atoi(info.Prototype.Defence)
	if err != nil {
		return 0, err
	}
	return value, nil
}

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

// 取得Player的ID
func PlayerID(user string) int {
	if user == core.UserA {
		return 0
	}
	if user == core.UserB {
		return 1
	}
	panic("xxx")
}

// 取得陣地卡堆的ID
func CardStackSlotID(user string, slotId int) string {
	return user + CardStackSlot + strconv.Itoa(slotId)
}

// 分析陣地ID
// 看陣地屬於哪個玩家、第幾個陣地
func ParseCardStackSlotID(cardStackSlotId string) (string, int) {
	var num int
	if strings.Contains(cardStackSlotId, CardStackSlot1) {
		num = 1
	}
	if strings.Contains(cardStackSlotId, CardStackSlot2) {
		num = 2
	}
	if strings.Contains(cardStackSlotId, CardStackSlot3) {
		num = 3
	}
	if strings.Contains(cardStackSlotId, CardStackSlot4) {
		num = 4
	}
	if strings.Contains(cardStackSlotId, CardStackSlot5) {
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
	targetStackId := user + CardStackHand
	var err error
	desk, err = core.MoveCard(ctx, desk, fromStackId, targetStackId, 0, cardId)
	if err != nil {
		return game, desk, p, TargetMissingError(err.Error())
	}
	return game, desk, p, nil
}

func PlayCardFrom(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, fromStackId string, slotNum int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	targetStackId := CardStackSlotID(user, slotNum)
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

func DamageUnit(ctx appengine.Context, game Game, desk core.Desktop, p core.Procedure, user string, damage int, cardId int) (Game, core.Desktop, core.Procedure, error) {
	game.CardInfo[cardId].Defence -= damage
	return game, desk, p, nil
}

// 指定一個單位攻擊
func UnitAttack(ctx appengine.Context, game Game, stage core.Desktop, p core.Procedure, user string, cardId int) (Game, core.Desktop, core.Procedure, error) {
	// 判斷單位有沒有在陣地上
	inputCard := stage.Card[cardId]
	if stage.CardStack[inputCard.CardStack].Type != "slot" {
		return game, stage, p, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的陣地
	slotUser, slotNum := ParseCardStackSlotID(inputCard.CardStack)
	if slotUser != user {
		return game, stage, p, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方陣地ID
	opponent := core.Opponent(slotUser)
	opponentSlotId := CardStackSlotID(opponent, slotNum)
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
		// 如果對手陣地上有單位
		// 攻擊那個單位
		opponentCardId := stage.CardStack[opponentSlotId].Card[0]
		// 取得對手防禦力
		defence, err := ComputeNormalDefence(ctx, game, stage, user, opponentCardId)
		if err != nil {
			return game, stage, p, err
		}
		damage := attack - defence
		if damage < 0 {
			damage = 0
		}
		game.CardInfo[opponentCardId].Defence -= damage
		game, stage, p, err = InvokeDamageUnit(ctx, game, stage, p, user, damage, opponentCardId)
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
	slotUser, _ := ParseCardStackSlotID(card.CardStack)
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
// 死亡的單位會移到墓地
// 玩家若死亡也會立刻結束遊戲
func PerformDead(ctx appengine.Context, game Game, stage core.Desktop, p core.Procedure) (Game, core.Desktop, core.Procedure, error) {
	var err error
	for _, card := range stage.Card {
		info := game.CardInfo[card.ID]
		if info.Defence > 0 {
			continue
		}
		fromStack := card.CardStack
		toStack := card.Owner + CardStackGraveyard
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
