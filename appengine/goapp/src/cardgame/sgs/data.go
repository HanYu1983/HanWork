package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"encoding/json"
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

// 取得指定卡牌的行動方案
// 由前台去補足Action中的Parameters
// 補完後呼叫PerformCardAction
func CheckCardAction(ctx appengine.Context, sgs Game, stage core.Game, user string, card core.Card) ([]Action, error) {
	info := GetCardInfo(sgs, card)
	switch card.Ref {
	case "90":
		// TODO 判斷cost夠不夠支付
		if core.HasCardInStack(ctx, stage, user+CardStackHand, card) != -1 {
			return []Action{{
				FromID:      card.ID,
				User:        user,
				Description: "使用{cardIds}支付{cost}，擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}",
				Parameters: map[string]interface{}{
					"cost":      "X",
					"cardId":    card.ID,
					"abilityId": "火攻",
				},
			}}, nil
		}
		return nil, nil
	case "51":
		// TODO check if you has 1 unit and enemy has 1 unit
		return []Action{{
			FromID:      card.ID,
			User:        user,
			Description: "使用{cardIds}支付{cost}，擇選你操控的{targetCardId}和對手操控的{targetEnemyCardId}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cost":      info.Current.Cost,
				"cardId":    card.ID,
				"abilityId": "決鬥",
			},
		}}, nil
	case "22":
		// TODO 看看現在是不是通常時機
		return []Action{{
			FromID:      card.ID,
			User:        user,
			Description: "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cardId":    card.ID,
				"abilityID": "轉移",
			},
		}}, nil
	case "179":
		if card.Owner != user {
			return nil, nil
		}
		// 如果在手上，就可以打出來
		if core.HasCardInStack(ctx, stage, user+CardStackHand, card) != -1 {
			// TODO 判斷這回合有沒有打過mana
			return []Action{{
				FromID:      card.ID,
				User:        user,
				Description: "打出{cardId}到{stackId}",
				Parameters: map[string]interface{}{
					"cardId":  card.ID,
					"stackId": user + CardStackMana,
				},
			}}, nil
		}
		// 在魔力池中並且是打開狀態才能有這個能力
		if core.HasCardInStack(ctx, stage, user+CardStackMana, card) != -1 && card.Face == core.FaceOpen {
			return []Action{{
				FromID:      card.ID,
				User:        user,
				Description: "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}",
				Parameters: map[string]interface{}{
					"cost":      "無無無",
					"cardId":    card.ID,
					"abilityId": "翻面抓牌",
				},
			}}, nil
		}
		return nil, nil
	}
	return nil, nil
}

type SgsError string

func (err SgsError) Error() string {
	return string(err)
}

func AddEffectFromAction(ctx appengine.Context, gameId string, user string, action Action, cardId string) error {
	payload, err := json.Marshal(action)
	if err != nil {
		return err
	}
	// 再放入效果
	g1, err := core.CreateGoal(ctx, gameId, core.Goal{
		User:        core.UserSys,
		Description: "玩家{0}觸發{1}的能力{2}",
		Parameters:  []string{user, cardId, string(payload)},
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
	// 取得狀態
	info := GetCardInfo(sgs, card)
	var _ = info
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
				sgs, stage, err = PerformCost(ctx, sgs, stage, user, cost, cardIds)
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
				sgs, stage, err = PerformCost(ctx, sgs, stage, user, cost, cardIds)
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
