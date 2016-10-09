package sgs

import (
	"appengine"
	core "cardgame/core"
	"encoding/json"
	"errors"
	"strconv"
	"strings"
)

// 特殊錯誤
// 這個錯誤是為了讓前台有機會處理能力對象遺失
// 若丟出這個錯誤，代表處理者會忽略它，還是會讓Goal完成
// 所以在卡牌能力解決時若對象遺失，請丟出這類錯誤
type SgsError string

func (err SgsError) Error() string {
	return string(err)
}

// 方便方法，將卡牌能力轉移到切入堆疊中
// 系統處理這個Goal時，會再丟回卡牌的能力處理方法
func AddEffectFromAction(ctx appengine.Context, gameId string, user string, action Action, cardId int) error {
	payload, err := json.Marshal(action)
	if err != nil {
		return err
	}
	// 再放入效果
	g1, err := core.CreateGoal(ctx, gameId, core.Goal{
		User:        core.UserSys,
		Description: "玩家{0}觸發{1}的能力{2}",
		Parameters:  []string{user, strconv.Itoa(cardId), string(payload)},
	})
	if err != nil {
		return err
	}
	err = core.AddEffect(ctx, gameId, core.Effect{UserID: user, GoalID: g1.ID})
	if err != nil {
		return err
	}
	return nil
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

// 事件監聽用
type Listener func(appengine.Context, Game, core.Desktop, string, []string) (Game, core.Desktop, error)

// 將一張卡下到陣地
// 若陣地已經有單位存在會丟出ErrSlotIsntEmpty
func PlayCardToSlot(ctx appengine.Context, game Game, stage core.Desktop, user string, slotId int, fromStack string, listener Listener, cardID int) (Game, core.Desktop, error) {
	// 判斷是不是空陣地
	slotIsEmpty := len(stage.CardStack[CardStackSlotID(user, slotId)].Card) == 0
	if slotIsEmpty == false {
		return game, stage, ErrSlotIsntEmpty
	}
	// 判斷卡牌有沒有存在指定的卡堆
	var err error
	cardIdx, err := core.CardIndexOfStack(ctx, stage, fromStack, cardID)
	if err != nil {
		return game, stage, err
	}
	// 移動卡牌
	cardId := stage.CardStack[fromStack].Card[cardIdx]
	toStack := CardStackSlotID(user, slotId)
	stage, err = core.MoveCard(ctx, stage, fromStack, toStack, 0, cardId)
	if err != nil {
		return game, stage, err
	}
	return listener(ctx, game, stage, "{userId}的{cardId}從{stackId}移動到{stackId}", []string{user, strconv.Itoa(cardID), fromStack, toStack})
}

func DamagePlayer(ctx appengine.Context, game Game, stage core.Desktop, damage int, listener Listener, user string) (Game, core.Desktop, error) {
	// 如果對手單地上沒有單位
	// 攻擊對方玩家
	game.Player[PlayerID(user)].HP -= damage
	game, stage, err := listener(ctx, game, stage, "{user}受到傷害{damage}", []string{user, strconv.Itoa(damage)})
	if err != nil {
		return game, stage, err
	}
	return game, stage, nil
}

// 指定一個單位攻擊
func UnitAttack(ctx appengine.Context, game Game, stage core.Desktop, user string, listener Listener, cardId int) (Game, core.Desktop, error) {
	// 判斷單位有沒有在陣地上
	inputCard := stage.Card[cardId]
	if stage.CardStack[inputCard.CardStack].Type != "slot" {
		return game, stage, ErrUnitIsntAtSlot
	}
	// 判斷是不是玩家的陣地
	slotUser, slotNum := ParseCardStackSlotID(inputCard.CardStack)
	if slotUser != user {
		return game, stage, errors.New("this unit is not yours")
	}
	var err error
	// 取得對方陣地ID
	opponent := core.Opponent(slotUser)
	opponentSlotId := CardStackSlotID(opponent, slotNum)
	// 取得自身攻擊力
	damage := game.CardInfo[cardId].Attack
	if len(stage.CardStack[opponentSlotId].Card) == 0 {
		// 如果對手單地上沒有單位
		// 攻擊對方玩家
		game.Player[PlayerID(opponent)].HP -= damage
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}攻擊{userId}，造成傷害{damage}", []string{user, strconv.Itoa(cardId), opponent, strconv.Itoa(damage)})
		if err != nil {
			return game, stage, err
		}
	} else {
		// 如果對手陣地上有單位
		// 攻擊那個單位
		opponentCardId := stage.CardStack[opponentSlotId].Card[0]
		game.CardInfo[opponentCardId].Defence -= damage
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}攻擊{userId}的{cardId}，造成傷害{damage}", []string{user, strconv.Itoa(cardId), opponent, strconv.Itoa(opponentCardId), strconv.Itoa(damage)})
		if err != nil {
			return game, stage, err
		}
	}
	return game, stage, nil
}

// 執行死亡判定
// 任何可能造成單位或玩家傷害的方法呼叫之後都要呼叫這個方法
// 死亡的單位會移到墓地
// 玩家若死亡也會立刻結束遊戲
func PerformDead(ctx appengine.Context, game Game, stage core.Desktop, listener Listener) (Game, core.Desktop, error) {
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
			return game, stage, err
		}
		game, stage, err = listener(ctx, game, stage, "{userId}的{cardId}死亡，從{stackId}移到{stackId}", []string{card.Owner, strconv.Itoa(card.ID), fromStack, toStack})
		if err != nil {
			return game, stage, err
		}
	}
	for idx, player := range game.Player {
		if player.HP > 0 {
			continue
		}
		game.Winner = idx
		game, stage, err = listener(ctx, game, stage, "{userId}勝利", []string{player.User})
		if err != nil {
			return game, stage, err
		}
	}
	return game, stage, nil
}

// 取得可能可以發動能力的卡牌ID
// 本國的卡會除外
func GetMaybeUsefulCard(ctx appengine.Context, stage core.Desktop, user string) []int {
	cards := []int{}
	cards = append(cards, stage.CardStack[user+CardStackMana].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot1].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot2].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot3].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot4].Card...)
	cards = append(cards, stage.CardStack[user+CardStackSlot5].Card...)
	cards = append(cards, stage.CardStack[user+CardStackHand].Card...)
	cards = append(cards, stage.CardStack[user+CardStackGraveyard].Card...)
	return cards
}

func MapStringsToInts(ctx appengine.Context, ss []string) ([]int, error) {
	var ret []int
	for _, s := range ss {
		i, err := strconv.Atoi(s)
		if err != nil {
			return nil, err
		}
		ret = append(ret, i)
	}
	return ret, nil
}

func GetUnitsInUserSlot(ctx appengine.Context, game Game, stage core.Desktop, user string) ([]int, error) {
	cardIds := []int{}
	for i := 1; i <= 5; i += 1 {
		if len(stage.CardStack[CardStackSlotID(user, i)].Card) == 0 {
			continue
		}
		cardIds = append(cardIds, stage.CardStack[CardStackSlotID(user, i)].Card[0])
	}
	return cardIds, nil
}

func FormatCost(ctx appengine.Context, info CardInfo) string {
	if info.Cost == "X" {
		return "X"
	}
	costCnt, err := strconv.Atoi(info.Cost)
	if err != nil {
		return info.Cost
	}
	return info.ColorCost + strings.Repeat("無", costCnt)
}

func IsPhase(ctx appengine.Context, game Game, phase string) bool {
	return game.Phase[game.CurrentPhase%len(game.Phase)] == phase
}

func IsCardInCardStack(ctx appengine.Context, stage core.Desktop, stackName string, card int) bool {
	_, err := core.CardIndexOfStack(ctx, stage, stackName, card)
	return err == nil
}

func CheckHasPutManaInThisTurn(ctx appengine.Context, game Game, stage core.Desktop, user string) bool {
	for _, cardId := range stage.CardStack[user+CardStackMana].Card {
		info := game.CardInfo[cardId]
		if info.TurnPlay == game.Turn {
			return true
		}
	}
	return false
}

func GetEmptyNeighborSlot(ctx appengine.Context, game Game, stage core.Desktop, user string, slotId int) []int {
	slotIds := []int{}
	if slotId > 1 {
		leftId := CardStackSlotID(user, slotId-1)
		if len(stage.CardStack[leftId].Card) == 0 {
			slotIds = append(slotIds, slotId-1)
		}
	}
	if slotId < 5 {
		rightId := CardStackSlotID(user, slotId+1)
		if len(stage.CardStack[rightId].Card) == 0 {
			slotIds = append(slotIds, slotId+1)
		}
	}
	return slotIds
}

func GetCardSlot(ctx appengine.Context, game Game, stage core.Desktop, user string, cardId int) int {
	card := stage.Card[cardId]
	if stage.CardStack[card.CardStack].Type != "slot" {
		return -1
	}
	slotInUser, num := ParseCardStackSlotID(card.CardStack)
	if slotInUser != user {
		return -1
	}
	return num
}
