package sgs

import (
	"appengine"
	core "cardgame/core"
)

func 初陣(total []Card) []Card {
	cards := []Card{
		{
			CardID:    "51",
			Name:      "决斗",
			Cost:      "0",
			Color:     ColorRed,
			ColorCost: []string{ColorRed},
			Class:     "{通常}锦囊",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "目标由你操控的单位与目标由对手操控的单位决斗（他们互相向对方造成等同于各自武力的伤害）。",
		},
		{
			CardID:    "90",
			Name:      "火攻",
			Cost:      "X",
			Color:     ColorGreen,
			ColorCost: []string{ColorGreen, ColorGreen, ColorGreen},
			Class:     "{通常}锦囊",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "火攻对目标单位或玩家造成X点伤害。",
		},
		{
			CardID:    "22",
			Name:      "青州探马",
			Cost:      "1",
			Color:     ColorBlue,
			ColorCost: []string{ColorBlue},
			Class:     "單位~斥候",
			Package:   "初阵",
			Attack:    "1",
			Defence:   "2",
			Text:      "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
		},
	}
	return append(total, cards...)
}

func 初陣能力核對(ctx appengine.Context, user string, sgs Game, card core.Card) []Action {
	info, err := GetCardInfo(ctx, sgs, card)
	if err != nil {
		return nil
	}
	switch info.CardID {
	case "90":
		// target =
		// {"num", "card", "cardid"} | {"num", "user", "userid"}
		return []Action{{
			FromID:      info.CardID,
			User:        user,
			Description: "支付{0}，擇選{1}支對手操控的單位或玩家，觸發{2}的{3}",
			Parameters:  []string{"X", "1", card.ID, "火攻"},
		}}
	case "51":
		// TODO check if you has 1 unit and enemy has 1 unit
		return []Action{{
			FromID:      info.CardID,
			User:        user,
			Description: "支付{0}，擇選{1}支你操控的單位和{2}支對手操控的單位，觸發{2}的{3}",
			Parameters:  []string{info.Current.Cost, "1", "1", card.ID, "決鬥"},
		}}
	case "22":
		// TODO 看看現在是不是通常時機
		return []Action{{
			FromID:      info.CardID,
			User:        user,
			Description: "擇選{0}卡的相鄰空陣地，觸發{1}的{2}",
			Parameters:  []string{card.ID, card.ID, "轉移"},
		}}
	}
	return nil
}

func 初陣能力發動(ctx appengine.Context, user string, sgs Game, card core.Card, abilityId string, target interface{}) (bool, error) {
	info, err := GetCardInfo(ctx, sgs, card)
	if err != nil {
		return false, err
	}
	switch info.CardID {
	// 火攻
	case "90":
		switch abilityId {
		case "火攻":
			// target =
			// {"num", "card", "cardid"} | {"num", "user", "userid"}
			cost := target.([]string)[0]
			// TODO 支付費用
			targetType := target.([]string)[1]
			targetId := target.([]string)[2]
			var g1 core.Goal
			if targetType == "card" {
				g1, err = core.CreateGoal(ctx, sgs.ID, core.Goal{
					User:        core.UserSys,
					Description: "對卡牌{0}造成{1}傷害",
					Parameters:  []string{targetId, cost},
				})
			}
			if targetType == "user" {
				g1, err = core.CreateGoal(ctx, sgs.ID, core.Goal{
					User:        core.UserSys,
					Description: "對玩家{0}造成{1}傷害",
					Parameters:  []string{targetId, cost},
				})
			}
			if err != nil {
				return false, err
			}
			err = core.AddEffect(ctx, sgs.ID, core.Effect{UserID: user, GoalID: g1.ID})
			if err != nil {
				return false, err
			}
			break
		}
		break
	// 決鬥
	case "51":
		g1, err := core.CreateGoal(ctx, sgs.ID, core.Goal{
			User:        core.UserSys,
			Description: "{0}和{1}決鬥",
			Parameters:  target.([]string),
		})
		if err != nil {
			return false, err
		}
		err = core.AddEffect(ctx, sgs.ID, core.Effect{UserID: user, GoalID: g1.ID})
		if err != nil {
			return false, err
		}
		break
	case "22":
		switch abilityId {
		case "轉移":
			targetG := target.([]string)[0]
			g1, err := core.CreateGoal(ctx, sgs.ID, core.Goal{
				User:        core.UserSys,
				Description: "{0}卡和移到陣地{0}",
				Parameters:  []string{card.ID, targetG},
			})
			if err != nil {
				return false, err
			}
			err = core.AddEffect(ctx, sgs.ID, core.Effect{UserID: user, GoalID: g1.ID})
			if err != nil {
				return false, err
			}
			break
		}
		break
	}
	return true, nil
}
