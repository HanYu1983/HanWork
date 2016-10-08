package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"errors"
)

type Card struct {
	CardID    string
	Name      string
	Cost      string
	Color     string
	ColorCost string
	Class     string
	Package   string
	Attack    string
	Defence   string
	Text      string
}

const (
	ColorBlue  = "魏"
	ColorRed   = "蜀"
	ColorGreen = "吳"
	ColorGray  = "群"
	ColorWhite = "無"
)

func SgsKey(ctx appengine.Context) *datastore.Key {
	return datastore.NewKey(ctx, "Sgs", "SgsCard", 0, nil)
}

func CardKey(ctx appengine.Context, id string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsCard", id, 0, SgsKey(ctx))
}

func GameKey(ctx appengine.Context, gameId string) *datastore.Key {
	return datastore.NewKey(ctx, "SgsGame", gameId, 0, SgsKey(ctx))
}

var (
	Packages = []func([]Card) []Card{
		初陣,
	}
)

func InstallPackage(ctx appengine.Context) error {
	var total []Card
	var key *datastore.Key
	var err error
	for _, pkg := range Packages {
		total = pkg(total)
	}
	for _, card := range total {
		key = CardKey(ctx, card.CardID)
		_, err = datastore.Put(ctx, key, &card)
		if err != nil {
			return err
		}
	}
	return nil
}

func GetCard(ctx appengine.Context, id string) (Card, error) {
	key := CardKey(ctx, id)
	var card Card
	var err error
	err = datastore.Get(ctx, key, &card)
	if err != nil {
		return Card{}, err
	}
	return card, nil
}

// 支付消費
// 如何支付全部由卡牌自定
func ConsumeCostInCard(ctx appengine.Context, game Game, stage core.Game, user string, cost string, costSlot []string, card core.Card) (Game, core.Game, error) {
	var err error
	switch card.Ref {
	case "179":
		// 持有者不是自己不能支付
		if card.Owner != user {
			return game, stage, nil
		}
		// 魏領土沒有在mana裡不能支付
		if core.HasCardInStack(ctx, stage, user+CardStackMana, card) == -1 {
			return game, stage, nil
		}
		// 已經横置的不能支付
		if card.Direction == core.DirectionTap {
			return game, stage, nil
		}
		// 需要用到info時才取，並且如果有改變的話，要立刻存回去
		info := GetCardInfo(game, card)
		for idx, c := range []rune(cost) {
			// 尋找還沒填充的slot
			if costSlot[idx] != "" {
				continue
			}
			if string(c) != ColorWhite {
				// 有顏色的支付必須是開牌狀態才能支付
				if card.Face == core.FaceClose {
					continue
				}
				// 開著的牌必須顏色符合
				if string(c) != info.Current.Color {
					continue
				}
			}
			// Ok，可支付
			stage, err = core.MapCard(ctx, stage, ChangeCardDirection(ctx, card.ID, core.DirectionTap))
			if err != nil {
				return game, stage, err
			}
			// 填充slot
			costSlot[idx] = card.ID
			// 因為魏領土只能支付一個mana，所以支付完直接回傳
			return game, stage, nil
		}
		break
	}
	return game, stage, nil
}

// 取得指定卡牌的行動方案
// 由前台去補足Action中的Parameters
// 補完後呼叫PerformCardAction
func CheckCardAction(ctx appengine.Context, sgs Game, stage core.Game, user string, card core.Card, actions []Action) ([]Action, error) {
	var err error
	var canConsumeCards []core.Card

	switch card.Ref {
	case "90":
		// 火攻
		if core.HasCardInStack(ctx, stage, user+CardStackHand, card) != -1 {
			canConsumeCards, err = CheckCanConsumeCost(ctx, sgs, stage, user, card)
			if err != nil {
				return nil, err
			}
			canConsumeCardIds := MapCardsToCardIDs(ctx, canConsumeCards)
			info := GetCardInfo(sgs, card)
			actions = append(actions, Action{
				FromID:      card.ID,
				User:        user,
				Description: "使用{cardIds}支付{cost}。擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}",
				Parameters: map[string]interface{}{
					"cost":      FormatCost(ctx, info),
					"cardId":    card.ID,
					"abilityId": "火攻",
					"meta":      canConsumeCardIds,
				},
			})
			return actions, nil
		}
		return nil, nil
	case "51":
		// 决斗
		var err error
		var units []string
		my, err := CheckHasXUnitInSlot(ctx, sgs, stage, 1, user)
		if err != nil {
			return nil, err
		}
		enemy, err := CheckHasXUnitInSlot(ctx, sgs, stage, 1, core.Opponent(user))
		if err != nil {
			return nil, err
		}
		if len(my) == 0 {
			return nil, nil
		}
		if len(enemy) == 0 {
			return nil, nil
		}
		units = append(units, MapCardsToCardIDs(ctx, my)...)
		units = append(units, MapCardsToCardIDs(ctx, enemy)...)
		info := GetCardInfo(sgs, card)
		actions = append(actions, Action{
			FromID:      card.ID,
			User:        user,
			Description: "使用{cardIds}支付{cost}，擇選你操控的{targetCardId}和對手操控的{targetEnemyCardId}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cost":      FormatCost(ctx, info),
				"cardId":    card.ID,
				"abilityId": "決鬥",
				"meta":      units,
			},
		})
		return actions, nil
	case "22":
		// 青州探马
		if IsPhase(ctx, sgs, PhaseMain) == false {
			return nil, nil
		}
		atSlot := GetCardSlot(ctx, sgs, stage, user, card)
		if atSlot == -1 {
			return nil, nil
		}
		neighborSlotIds := GetEmptySlotNeighbor(ctx, sgs, stage, user, atSlot)
		if len(neighborSlotIds) == 0 {
			return nil, nil
		}
		actions = append(actions, Action{
			FromID:      card.ID,
			User:        user,
			Description: "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cardId":    card.ID,
				"abilityID": "轉移",
				"meta":      neighborSlotIds,
			},
		})
		return actions, nil
	case "179":
		// 魏领土
		if card.Owner != user {
			return nil, nil
		}
		// 如果在手上，就可以打出來
		if IsCardInCardStack(ctx, stage, user+CardStackHand, card) {
			if CheckHasPutManaInThisTurn(ctx, sgs, stage) {
				return nil, nil
			}
			actions = append(actions, Action{
				FromID:      card.ID,
				User:        user,
				Description: "打出{cardId}到{stackId}",
				Parameters: map[string]interface{}{
					"cardId":  card.ID,
					"stackId": user + CardStackMana,
				},
			})
			return actions, nil
		}
		// 在魔力池中並且是打開狀態才能有這個能力
		if IsCardInCardStack(ctx, stage, user+CardStackMana, card) && card.Face == core.FaceOpen {
			canConsumeCards, err = CheckCanConsumeCost(ctx, sgs, stage, user, card)
			if err != nil {
				return nil, err
			}
			canConsumeCardIds := MapCardsToCardIDs(ctx, canConsumeCards)
			actions = append(actions, Action{
				FromID:      card.ID,
				User:        user,
				Description: "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}",
				Parameters: map[string]interface{}{
					"cost":      "無無無",
					"cardId":    card.ID,
					"abilityId": "翻面抓牌",
					"meta":      canConsumeCardIds,
				},
			})
			return actions, nil
		}
		return actions, nil
	}
	return actions, nil
}

// 執行指定卡牌的行動方案
// 注意
// invoke為true代表是不是要啟動能力
// 啟動能力代表只將效果移至切入堆疊，效果還沒有解決
// 啟動能力就會先將動作方案中的支付解決
// 若invoke為false代表要解決行動方案的效果
// 也是實做效果的地方
func PerformCardAction(ctx appengine.Context, sgs Game, stage core.Game, user string, action Action, invoke bool, card core.Card) (Game, core.Game, error) {
	// 不是發動的卡就略過
	if action.FromID != card.ID {
		return sgs, stage, nil
	}
	var err error
	switch card.Ref {
	case "90":
		if action.Description == "使用{cardIds}支付{cost}，擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}" {
			cost := action.Parameters["cost"].(string)
			targetEnemyCardId := action.Parameters["targetEnemyCardId"].(string)
			userId := action.Parameters["userId"].(string)
			abilityId := action.Parameters["abilityId"].(string)
			if invoke {
				cardIds := action.Parameters["cardIds"].([]string)
				if userId == user {
					return sgs, stage, errors.New("user id is me")
				}
				opponent := core.Opponent(user)
				hasEnemy := core.HasCardInStack(ctx, stage, opponent+CardStackSlot, core.Card{ID: targetEnemyCardId})
				if hasEnemy == -1 {
					return sgs, stage, errors.New("enemy id is not exist")
				}
				sgs, stage, err = ConsumeCost(ctx, sgs, stage, user, cost, cardIds)
				if err != nil {
					return sgs, stage, err
				}
				err = AddEffectFromAction(ctx, sgs.ID, user, action, card.ID)
				if err != nil {
					return sgs, stage, err
				}
				return sgs, stage, nil
			}
			if abilityId == "火攻" {
				cardIds := action.Parameters["cardIds"].([]string)
				damage := len(cardIds)
				// damage it
				var _ = damage
			}
		}
		break
	case "22":
		if action.Description == "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}" {
			abilityId := action.Parameters["abilityId"].(string)
			cardId := action.Parameters["cardId"].(string)
			slotId := action.Parameters["slotId"].(string)
			if invoke {
				err = AddEffectFromAction(ctx, sgs.ID, user, action, card.ID)
				if err != nil {
					return sgs, stage, err
				}
				return sgs, stage, nil
			}
			if abilityId == "轉移" {

				// TODO 轉移效果
				var _, _ = cardId, slotId
			}
		}
		break
	case "179":
		if action.Description == "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
			cost := action.Parameters["cost"].(string)
			abilityId := action.Parameters["abilityId"].(string)
			// 啟動效果，放入堆疊
			if invoke {
				cardIds := action.Parameters["cardIds"].([]string)
				// 先執行支付
				sgs, stage, err = ConsumeCost(ctx, sgs, stage, user, cost, cardIds)
				if err != nil {
					return sgs, stage, err
				}
				err = AddEffectFromAction(ctx, sgs.ID, user, action, card.ID)
				if err != nil {
					return sgs, stage, err
				}
				return sgs, stage, nil
			}
			if abilityId == "翻面抓牌" {
				// 將地翻面
				stage, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, currCard core.Card) (core.Card, error) {
					if currCard.ID == card.ID {
						currCard.Face = core.FaceClose
					}
					return currCard, nil
				})
				// 取得本國最上方的卡
				userCardBaseId := core.HasCardStack(ctx, stage, user+CardStackBase)
				if userCardBaseId == -1 {
					return sgs, stage, core.ErrCardStackNotExist
				}
				cardCnt := len(stage.CardStack[userCardBaseId].Card)
				// 無牌可抽，先暫時略過
				if cardCnt == 0 {
					return sgs, stage, SgsError("no card can draw")
				}
				topCardInCardBase := stage.CardStack[userCardBaseId].Card[cardCnt-1]
				// 移到手上
				stage, err = core.MoveCardTo(ctx, stage, topCardInCardBase, user+CardStackBase, user+CardStackHand, 0)
				if err != nil {
					return sgs, stage, err
				}
			}
		}
		break
	}
	return sgs, stage, nil
}
