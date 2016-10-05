package sgs

func 初陣(total []Card) []Card {
	cards := []Card{
		{
			CardID:    "22",
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
