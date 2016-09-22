@property
trigger=2
radius=100

@end

@trigger over


msg@王:你竟敢獨立闖入本地，趁我現在心情好時快逃吧，不然你的下場只有死
option@我:啊，我是來收拾你的@還是下次吧...

@switch

	@case 0
		battle

		@iftrue
			msg@勝利了
			msg@王:你...，你竟然偷襲本王...
			msg@我:看到沒有，你的下場只有死
			msg@獲得龍的眼睛
		@end
			msg@輸了
			msg@王:敗將請回
			delay@24
			msg@我:...好吧
		@end

	@end

	@case 1


	@end

@end


@end

@trigger click


@end