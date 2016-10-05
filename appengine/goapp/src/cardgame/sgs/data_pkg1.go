package sgs

import (
	"appengine"
	core "cardgame/core"
)

func 初陣(total []Card) []Card {
	cards := []Card{
		{
			CardID:    "22",
			Name:      "青州探马",
			Cost:      1,
			Color:     ColorBlue,
			ColorCost: []string{ColorBlue},
			Class:     "單位~斥候",
			Package:   "初阵",
			Attack:    "1",
			Defence:   "2",
			Text:      "转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动）",
		},
		{
			CardID:    "51",
			Name:      "决斗",
			Cost:      0,
			Color:     ColorRed,
			ColorCost: []string{ColorRed},
			Class:     "{通常}锦囊",
			Package:   "初阵",
			Attack:    "",
			Defence:   "",
			Text:      "目标由你操控的单位与目标由对手操控的单位决斗（他们互相向对方造成等同于各自武力的伤害）。",
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
	case "22":
		// TODO check if you has 1 unit and enemy has 1 unit
		return []Action{{
			FromID:      info.CardID,
			User:        user,
			Description: "擇選{0}支你操控的單位和{1}支對手操控的單位",
			Parameters:  []string{"1", "1"},
		}}
	}
	return nil
}

func 初陣能力發動(ctx appengine.Context, user string, sgs Game, card core.Card, abilityId int, target interface{}) (bool, error) {
	info, err := GetCardInfo(ctx, sgs, card)
	if err != nil {
		return false, err
	}
	switch info.CardID {
	case "22":
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
	}
	return true, nil
}
