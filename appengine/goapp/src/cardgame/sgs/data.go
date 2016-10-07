package sgs

import (
	"appengine"
	"appengine/datastore"
	core "cardgame/core"
	"encoding/json"
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
	info, err := GetCardInfo(ctx, sgs, card)
	if err != nil {
		return nil, err
	}
	switch card.Ref {
	case "90":
		// target =
		// {"num", "card", "cardid"} | {"num", "user", "userid"}
		return []Action{{
			FromID:      card.ID,
			User:        user,
			Description: "使用{cardIds}支付{cost}，擇選對手操控的{targetEnemyCardId}或{userId}，觸發{cardId}的{abilityId}",
			Parameters: map[string]interface{}{
				"cost":      info.Current.Cost,
				"cardId":    card.ID,
				"abilityId": "決鬥",
			},
		}}, nil
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
		// 在魔力池中才能這個能力
		if core.HasCardInStack(ctx, stage, user+CardStackMana, card) != -1 {
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
	info, err := GetCardInfo(ctx, sgs, card)
	var _ = info
	if err != nil {
		return sgs, stage, err
	}
	switch card.Ref {
	case "22":
		if action.Description == "擇選{cardId}卡的相鄰空陣地{slotId}，觸發{cardId}的{abilityId}" {
			if invoke {
				payload, err := json.Marshal(action)
				if err != nil {
					return sgs, stage, err
				}
				// 再放入效果
				g1, err := core.CreateGoal(ctx, sgs.ID, core.Goal{
					User:        core.UserSys,
					Description: "玩家{0}觸發{1}的能力{2}",
					Parameters:  []string{user, card.ID, string(payload)},
				})
				if err != nil {
					return sgs, stage, err
				}
				err = core.AddEffect(ctx, sgs.ID, core.Effect{UserID: user, GoalID: g1.ID})
				if err != nil {
					return sgs, stage, err
				}
				return sgs, stage, nil
			}
			abilityId := action.Parameters["abilityId"].(string)
			if abilityId == "轉移" {
				cardId := action.Parameters["cardId"].(string)
				slotId := action.Parameters["slotId"].(string)
				// TODO 轉移效果
				var _, _ = cardId, slotId
			}
		}
		break
	case "179":
		if action.Description == "使用{cardIds}支付{cost}，觸發{cardId}的{abilityId}" {
			// 啟動效果，放入堆疊
			if invoke {
				cardIds := action.Parameters["cardIds"].([]string)
				cost := action.Parameters["cost"].(string)
				// 先執行支付
				// TODO check cost is valid
				var _ = cost
				sgs, stage, err = PerformCost(ctx, sgs, stage, user, cardIds)
				if err != nil {
					return sgs, stage, err
				}
				payload, err := json.Marshal(action)
				if err != nil {
					return sgs, stage, err
				}
				// 再放入效果
				g1, err := core.CreateGoal(ctx, sgs.ID, core.Goal{
					User:        core.UserSys,
					Description: "玩家{0}觸發{1}的能力{2}",
					Parameters:  []string{user, card.ID, string(payload)},
				})
				if err != nil {
					return sgs, stage, err
				}
				err = core.AddEffect(ctx, sgs.ID, core.Effect{UserID: user, GoalID: g1.ID})
				if err != nil {
					return sgs, stage, err
				}
				return sgs, stage, nil
			}
			abilityId := action.Parameters["abilityId"].(string)
			if abilityId == "翻面抓牌" {
				// 將地翻面
				stage, err = core.MapCard(ctx, stage, func(ctx appengine.Context, stage core.Game, currCard core.Card) (core.Card, error) {
					if currCard.ID == card.ID {
						currCard.Face = core.FaceOpen
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
