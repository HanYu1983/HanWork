package sgs

import (
	"appengine"
	core "cardgame3/core"
)

// 遺失目標錯誤
// 卡牌效果在解決時目標不滿足的話，一定要丟出這個錯誤
type TargetMissingError string

func (err TargetMissingError) Error() string {
	return string(err)
}
// 基本處理介面
type CommandHandler func(appengine.Context, Game, core.Command) (Game, error)

// 執行處理
func PerformCommandHandler(handler CommandHandler, ctx appengine.Context, game Game) (Game, error) {
	var c core.Command
	var has bool
	var err error
	for {
		c, has = core.GetCommand(ctx, game.Procedure)
		ctx.Infof("%v", c)
		if has == false {
			game.Procedure = core.NewProcedure(ctx)
			break
		}
		if c.User != UserSys {
			break
		}
		game, err = handler(ctx, game, c)
		if err != nil {
			switch err.(type) {
			case TargetMissingError:
				p := game.Procedure
				p = core.CompleteCommand(ctx, p, c)
				game.Procedure = p
			}
			return game, err
		}
	}
	return game, nil
}

// 結合指定的處理者
func ReduceCommandHandler(handlers []CommandHandler) CommandHandler {
	return func(ctx appengine.Context, game Game, c core.Command) (Game, error) {
		var err error
		for _, handler := range handlers {
			game, err = handler(ctx, game, c)
			if err != nil {
				return game, err
			}
		}
		return game, nil
	}
}