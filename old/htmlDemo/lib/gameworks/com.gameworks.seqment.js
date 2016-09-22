
com.gameworks.seqment = {};

(function(){
	var pack = com.gameworks.seqment
	
	function createSeqmentsObject( width, count, obj ){
		obj.xs = []
		obj.ys = []
		for( var i =0; i<count; ++i )
		{
			obj.xs.push( i*width )
			obj.ys.push( 0 )
		}
		return obj
	}
	pack.createSeqmentsObject = createSeqmentsObject
	
	function drawSeqment( ctx, x1, y1, x2, y2 ){
		ctx.moveTo( x1, y1 )
		ctx.lineTo( x2, y2 )
		ctx.arc(x1,y1,2,0,Math.PI*2,true);
		ctx.arc(x2,y2,2,0,Math.PI*2,true);
	}
	pack.drawSeqment = drawSeqment
	
	function darwSeqments( ctx, xs, ys ){
		ctx.beginPath()
		for( var i =0; i<xs.length-1; ++i )
		{
			var x1 = xs[i],
				y1 = ys[i],
				x2 = xs[i+1],
				y2 = ys[i+1]
			drawSeqment( ctx, x1, y1, x2, y2 )
		}
		ctx.stroke()
	}
	pack.darwSeqments = darwSeqments
	
	function seqmentsDrag( xs, ys, tx, ty, width ){
		for( var i=0; i<xs.length; ++i )
		{
			if( i === 0 )
			{
				xs[i] = tx
				ys[i] = ty
			}
			else
			{
				var x1 = xs[i-1],
					y1 = ys[i-1],
					x2 = xs[i],
					y2 = ys[i]
				var dx = x2 - x1,
					dy = y2 - y1
				var len = Math.sqrt( dx* dx+ dy* dy )
				x2 = x1 + dx* width/ len
				y2 = y1 + dy* width/ len
				xs[i] = x2
				ys[i] = y2
			}
		}
	}
	pack.seqmentsDrag = seqmentsDrag
	
	function seqmentsReach( xs, ys, tx, ty, width ){
		var angles = [xs.length-1]
		for( var i=1; i<xs.length; ++i )
		{
			var x1 = tx,
				y1 = ty
			var x2 = xs[i],
				y2 = ys[i]
			var dx = x2 - x1,
				dy = y2 - y1
			var len = Math.sqrt( dx* dx+ dy* dy )
			tx = tx + dx* width/ len
			ty = ty + dy* width/ len
			angles[i-1] = Math.atan2( -dy, -dx )
		}
		for( var i=xs.length-2; i>=0; --i )
		{
			xs[i] = xs[i+1]+Math.cos( angles[i] )* width
			ys[i] = ys[i+1]+Math.sin( angles[i] )* width
		}
	}
	pack.seqmentsReach = seqmentsReach
})()