goog.provide('app.t5.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t5.main.p5 = window;
app.t5.main.w = (10);
app.t5.main.h = (30);
app.t5.main.cellW = ((100) / app.t5.main.w);
app.t5.main.cellH = ((300) / app.t5.main.h);
app.t5.main.emptyCell = (-1);
app.t5.main.spawnPos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(20)], null);
app.t5.main.dropSpd = (3);
app.t5.main.cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.t5.main.h,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.t5.main.w,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(app.t5.main.emptyCell))))));
app.t5.main.shapes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null);
app.t5.main.rotate90 = (function app$t5$main$rotate90(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38511){
var vec__38512 = p__38511;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38518){
var vec__38520 = p__38518;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38520,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38520,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__38525 = cljs.core._EQ_;
var expr__38526 = type;
if(cljs.core.truth_((pred__38525.cljs$core$IFn$_invoke$arity$2 ? pred__38525.cljs$core$IFn$_invoke$arity$2((0),expr__38526) : pred__38525.call(null,(0),expr__38526)))){
return s;
} else {
if(cljs.core.truth_((pred__38525.cljs$core$IFn$_invoke$arity$2 ? pred__38525.cljs$core$IFn$_invoke$arity$2((1),expr__38526) : pred__38525.call(null,(1),expr__38526)))){
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90(s);
} else {
return s;

}
} else {
var pred__38530 = cljs.core._EQ_;
var expr__38531 = dir;
if(cljs.core.truth_((pred__38530.cljs$core$IFn$_invoke$arity$2 ? pred__38530.cljs$core$IFn$_invoke$arity$2((0),expr__38531) : pred__38530.call(null,(0),expr__38531)))){
return s;
} else {
if(cljs.core.truth_((pred__38530.cljs$core$IFn$_invoke$arity$2 ? pred__38530.cljs$core$IFn$_invoke$arity$2((1),expr__38531) : pred__38530.call(null,(1),expr__38531)))){
return app.t5.main.rotate180(app.t5.main.rotate90(s));
} else {
if(cljs.core.truth_((pred__38530.cljs$core$IFn$_invoke$arity$2 ? pred__38530.cljs$core$IFn$_invoke$arity$2((2),expr__38531) : pred__38530.call(null,(2),expr__38531)))){
return app.t5.main.rotate180(s);
} else {
if(cljs.core.truth_((pred__38530.cljs$core$IFn$_invoke$arity$2 ? pred__38530.cljs$core$IFn$_invoke$arity$2((3),expr__38531) : pred__38530.call(null,(3),expr__38531)))){
return app.t5.main.rotate90(s);
} else {
return s;
}
}
}
}
}
}
});
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__38535){
var vec__38536 = p__38535;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38536,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38536,(1),null);
var pos = vec__38536;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some((function (p__38539){
var vec__38540 = p__38539;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38540,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38540,(1),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.t5.main.emptyCell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null)))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__38544 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38543_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38543_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(2),null);
var vec__38547 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(1),null);
var cr = vec__38547;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38544,type,dir,pos,vec__38547,c,r,cr,shape){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,s);
});})(vec__38544,type,dir,pos,vec__38547,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (shape__$1,or,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not(app.t5.main.isCollide(ctx,shapeWithPos__$1))){
return or;
} else {
var G__38825 = shape__$1;
var G__38826 = (or - (1));
shape__$1 = G__38825;
or = G__38826;
continue;
}
}
break;
}
});})(vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not(app.t5.main.isCollide(ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty(shape,(r - (1)));
var fixedShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (topR,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (topR,fixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__38550){
var vec__38551 = p__38550;
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(0),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly(type));
}
});})(topR,fixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int(cljs.core.count(app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null)], 0));
});})(topR,fixedShape,applyFixedShape,vec__38544,type,dir,pos,vec__38547,c,r,cr,shape,shapeWithPos,findEmpty))
;
return randomNext(applyFixedShape(ctx));
}
});
app.t5.main.eatLine = (function app$t5$main$eatLine(ctx){
var nextCells = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cells,line){
if(cljs.core.every_QMARK_(cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,app.t5.main.emptyCell)),line)){
return cells;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cells,line);
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(ctx));
var offset = (app.t5.main.h - cljs.core.count(nextCells));
if((offset <= (0))){
return ctx;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.t5.main.w,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(app.t5.main.emptyCell)))))),nextCells)], null)], 0));
}
});
app.t5.main.handleInput = (function app$t5$main$handleInput(key,ctx){
var pred__38561 = cljs.core._EQ_;
var expr__38562 = key;
if(cljs.core.truth_((pred__38561.cljs$core$IFn$_invoke$arity$2 ? pred__38561.cljs$core$IFn$_invoke$arity$2("a",expr__38562) : pred__38561.call(null,"a",expr__38562)))){
var vec__38564 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38561,expr__38562){
return (function (p1__38557_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38557_SHARP_], null));
});})(pred__38561,expr__38562))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564,(2),null);
var vec__38567 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(1),null);
var cr = vec__38567;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextCr = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38564,type,dir,pos,vec__38567,c,r,cr,shape,nextCr,pred__38561,expr__38562){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,nextCr,s);
});})(vec__38564,type,dir,pos,vec__38567,c,r,cr,shape,nextCr,pred__38561,expr__38562))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_((pred__38561.cljs$core$IFn$_invoke$arity$2 ? pred__38561.cljs$core$IFn$_invoke$arity$2("d",expr__38562) : pred__38561.call(null,"d",expr__38562)))){
var vec__38571 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38561,expr__38562){
return (function (p1__38558_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38558_SHARP_], null));
});})(pred__38561,expr__38562))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(2),null);
var vec__38574 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38574,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38574,(1),null);
var cr = vec__38574;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextCr = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38571,type,dir,pos,vec__38574,c,r,cr,shape,nextCr,pred__38561,expr__38562){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,nextCr,s);
});})(vec__38571,type,dir,pos,vec__38574,c,r,cr,shape,nextCr,pred__38561,expr__38562))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_((pred__38561.cljs$core$IFn$_invoke$arity$2 ? pred__38561.cljs$core$IFn$_invoke$arity$2(" ",expr__38562) : pred__38561.call(null," ",expr__38562)))){
var vec__38579 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38561,expr__38562){
return (function (p1__38559_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38559_SHARP_], null));
});})(pred__38561,expr__38562))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38579,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38579,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38579,(2),null);
var vec__38582 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(1),null);
var cr = vec__38582;
var nextDir = cljs.core.mod((dir + (1)),(4));
var shape = app.t5.main.rotate(type,nextDir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38579,type,dir,pos,vec__38582,c,r,cr,nextDir,shape,pred__38561,expr__38562){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,s);
});})(vec__38579,type,dir,pos,vec__38582,c,r,cr,nextDir,shape,pred__38561,expr__38562))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__38579,type,dir,pos,vec__38582,c,r,cr,nextDir,shape,nextShape,pred__38561,expr__38562){
return (function (p1__38560_SHARP_){
return cljs.core.mod((p1__38560_SHARP_ + (1)),(4));
});})(vec__38579,type,dir,pos,vec__38582,c,r,cr,nextDir,shape,nextShape,pred__38561,expr__38562))
);
}
} else {
return ctx;
}
}
}
});
app.t5.main.dropShape = (function app$t5$main$dropShape(ctx){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t5.main.dropSpd], null)));
});
app.t5.main.step = (function app$t5$main$step(ctx){
return app.t5.main.eatLine(app.t5.main.collide(app.t5.main.dropShape(ctx)));
});
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__38595){
var vec__38596 = p__38595;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38596,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38596,(1),null);
var pos = vec__38596;
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38599 = cljs.core.seq(shape);
var chunk__38600 = null;
var count__38601 = (0);
var i__38602 = (0);
while(true){
if((i__38602 < count__38601)){
var s = chunk__38600.cljs$core$IIndexed$_nth$arity$2(null,i__38602);
var vec__38617_38827 = s;
var x_38828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38617_38827,(0),null);
var y_38829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38617_38827,(1),null);
p5.rect((px + (app.t5.main.cellW * x_38828)),(py + (app.t5.main.cellH * y_38829)),app.t5.main.cellW,app.t5.main.cellH);


var G__38830 = seq__38599;
var G__38831 = chunk__38600;
var G__38832 = count__38601;
var G__38833 = (i__38602 + (1));
seq__38599 = G__38830;
chunk__38600 = G__38831;
count__38601 = G__38832;
i__38602 = G__38833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38599);
if(temp__5735__auto__){
var seq__38599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38599__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38599__$1);
var G__38834 = cljs.core.chunk_rest(seq__38599__$1);
var G__38835 = c__4550__auto__;
var G__38836 = cljs.core.count(c__4550__auto__);
var G__38837 = (0);
seq__38599 = G__38834;
chunk__38600 = G__38835;
count__38601 = G__38836;
i__38602 = G__38837;
continue;
} else {
var s = cljs.core.first(seq__38599__$1);
var vec__38620_38838 = s;
var x_38839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620_38838,(0),null);
var y_38840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620_38838,(1),null);
p5.rect((px + (app.t5.main.cellW * x_38839)),(py + (app.t5.main.cellH * y_38840)),app.t5.main.cellW,app.t5.main.cellH);


var G__38841 = cljs.core.next(seq__38599__$1);
var G__38842 = null;
var G__38843 = (0);
var G__38844 = (0);
seq__38599 = G__38841;
chunk__38600 = G__38842;
count__38601 = G__38843;
i__38602 = G__38844;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
app.t5.main.fillShapeColor = (function app$t5$main$fillShapeColor(p5,type){
var pred__38633 = cljs.core._EQ_;
var expr__38634 = type;
if(cljs.core.truth_((pred__38633.cljs$core$IFn$_invoke$arity$2 ? pred__38633.cljs$core$IFn$_invoke$arity$2((0),expr__38634) : pred__38633.call(null,(0),expr__38634)))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_((pred__38633.cljs$core$IFn$_invoke$arity$2 ? pred__38633.cljs$core$IFn$_invoke$arity$2((1),expr__38634) : pred__38633.call(null,(1),expr__38634)))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_((pred__38633.cljs$core$IFn$_invoke$arity$2 ? pred__38633.cljs$core$IFn$_invoke$arity$2((2),expr__38634) : pred__38633.call(null,(2),expr__38634)))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_((pred__38633.cljs$core$IFn$_invoke$arity$2 ? pred__38633.cljs$core$IFn$_invoke$arity$2((3),expr__38634) : pred__38633.call(null,(3),expr__38634)))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_((pred__38633.cljs$core$IFn$_invoke$arity$2 ? pred__38633.cljs$core$IFn$_invoke$arity$2((4),expr__38634) : pred__38633.call(null,(4),expr__38634)))){
return p5.fill((128),(0),(128));
} else {
return p5.fill((255));
}
}
}
}
}
});
app.t5.main.main = (function app$t5$main$main(){
app.t5.main.model = null;

app.t5.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

var c__30812__auto___38914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___38914){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___38914){
return (function (state_38679){
var state_val_38680 = (state_38679[(1)]);
if((state_val_38680 === (7))){
var inst_38675 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38681_38915 = state_38679__$1;
(statearr_38681_38915[(2)] = inst_38675);

(statearr_38681_38915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (1))){
var inst_38640 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_38641 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_38642 = cljs.core.count(app.t5.main.shapes);
var inst_38643 = cljs.core.rand_int(inst_38642);
var inst_38644 = [app.t5.main.spawnPos,inst_38643,(0)];
var inst_38645 = cljs.core.PersistentHashMap.fromArrays(inst_38641,inst_38644);
var inst_38646 = [app.t5.main.cells,inst_38645];
var inst_38647 = cljs.core.PersistentHashMap.fromArrays(inst_38640,inst_38646);
var inst_38648 = inst_38647;
var state_38679__$1 = (function (){var statearr_38682 = state_38679;
(statearr_38682[(7)] = inst_38648);

return statearr_38682;
})();
var statearr_38683_38916 = state_38679__$1;
(statearr_38683_38916[(2)] = null);

(statearr_38683_38916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (4))){
var inst_38656 = (state_38679[(8)]);
var inst_38652 = (state_38679[(9)]);
var inst_38652__$1 = (state_38679[(2)]);
var inst_38656__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_38652__$1);
var inst_38657 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_38656__$1);
var state_38679__$1 = (function (){var statearr_38684 = state_38679;
(statearr_38684[(8)] = inst_38656__$1);

(statearr_38684[(9)] = inst_38652__$1);

return statearr_38684;
})();
if(inst_38657){
var statearr_38685_38917 = state_38679__$1;
(statearr_38685_38917[(1)] = (5));

} else {
var statearr_38686_38918 = state_38679__$1;
(statearr_38686_38918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (6))){
var inst_38656 = (state_38679[(8)]);
var inst_38663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),inst_38656);
var state_38679__$1 = state_38679;
if(inst_38663){
var statearr_38687_38919 = state_38679__$1;
(statearr_38687_38919[(1)] = (8));

} else {
var statearr_38688_38920 = state_38679__$1;
(statearr_38688_38920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (3))){
var inst_38677 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38679__$1,inst_38677);
} else {
if((state_val_38680 === (2))){
var inst_38648 = (state_38679[(7)]);
var inst_38650 = app.t5.main.model = inst_38648;
var state_38679__$1 = (function (){var statearr_38690 = state_38679;
(statearr_38690[(10)] = inst_38650);

return statearr_38690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38679__$1,(4),app.t5.main.evt);
} else {
if((state_val_38680 === (9))){
var inst_38648 = (state_38679[(7)]);
var tmp38689 = inst_38648;
var inst_38648__$1 = tmp38689;
var state_38679__$1 = (function (){var statearr_38691 = state_38679;
(statearr_38691[(7)] = inst_38648__$1);

return statearr_38691;
})();
var statearr_38692_38921 = state_38679__$1;
(statearr_38692_38921[(2)] = null);

(statearr_38692_38921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (5))){
var inst_38648 = (state_38679[(7)]);
var inst_38652 = (state_38679[(9)]);
var inst_38659 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_38652);
var inst_38660 = app.t5.main.handleInput(inst_38659,inst_38648);
var inst_38648__$1 = inst_38660;
var state_38679__$1 = (function (){var statearr_38693 = state_38679;
(statearr_38693[(7)] = inst_38648__$1);

return statearr_38693;
})();
var statearr_38694_38922 = state_38679__$1;
(statearr_38694_38922[(2)] = null);

(statearr_38694_38922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (10))){
var inst_38673 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38695_38923 = state_38679__$1;
(statearr_38695_38923[(2)] = inst_38673);

(statearr_38695_38923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (8))){
var inst_38648 = (state_38679[(7)]);
var inst_38665 = app.t5.main.step(inst_38648);
var inst_38648__$1 = inst_38665;
var state_38679__$1 = (function (){var statearr_38696 = state_38679;
(statearr_38696[(7)] = inst_38648__$1);

return statearr_38696;
})();
var statearr_38697_38924 = state_38679__$1;
(statearr_38697_38924[(2)] = null);

(statearr_38697_38924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30812__auto___38914))
;
return ((function (switch__30584__auto__,c__30812__auto___38914){
return (function() {
var app$t5$main$main_$_state_machine__30585__auto__ = null;
var app$t5$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38698[(0)] = app$t5$main$main_$_state_machine__30585__auto__);

(statearr_38698[(1)] = (1));

return statearr_38698;
});
var app$t5$main$main_$_state_machine__30585__auto____1 = (function (state_38679){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38679);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38699){if((e38699 instanceof Object)){
var ex__30588__auto__ = e38699;
var statearr_38700_38925 = state_38679;
(statearr_38700_38925[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38926 = state_38679;
state_38679 = G__38926;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30585__auto__ = function(state_38679){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30585__auto____1.call(this,state_38679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30585__auto____0;
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30585__auto____1;
return app$t5$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___38914))
})();
var state__30814__auto__ = (function (){var statearr_38701 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38701[(6)] = c__30812__auto___38914);

return statearr_38701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___38914))
);


app.t5.main.p5.setup = (function (){
var canvas = app.t5.main.p5.createCanvas((100),(300));
return canvas.parent("container");
});

app.t5.main.p5.draw = (function (){
app.t5.main.p5.fill((255));

app.t5.main.p5.stroke((0));

app.t5.main.p5.rect((0),(0),((100) - (1)),((300) - (1)));

if(cljs.core.truth_(app.t5.main.model)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function app$t5$main$main_$_iter__38702(s__38703){
return (new cljs.core.LazySeq(null,(function (){
var s__38703__$1 = s__38703;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38703__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__38703__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app$t5$main$main_$_iter__38702_$_iter__38704(s__38705){
return (new cljs.core.LazySeq(null,((function (s__38703__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__38705__$1 = s__38705;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38705__$1);
if(temp__5735__auto____$1){
var s__38705__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38705__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38705__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38707 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38706 = (0);
while(true){
if((i__38706 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38706);
cljs.core.chunk_append(b__38707,(function (){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor(app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__38927 = (i__38706 + (1));
i__38706 = G__38927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38707),app$t5$main$main_$_iter__38702_$_iter__38704(cljs.core.chunk_rest(s__38705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38707),null);
}
} else {
var y = cljs.core.first(s__38705__$2);
return cljs.core.cons((function (){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor(app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__38702_$_iter__38704(cljs.core.rest(s__38705__$2)));
}
} else {
return null;
}
break;
}
});})(s__38703__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__38703__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t5.main.h)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t5$main$main_$_iter__38702(cljs.core.rest(s__38703__$1)));
} else {
var G__38928 = cljs.core.rest(s__38703__$1);
s__38703__$1 = G__38928;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t5.main.w));
})());

var vec__38708 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38636_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38636_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(2),null);
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
app.t5.main.fillShapeColor(app.t5.main.p5,type);

return app.t5.main.drawShape(app.t5.main.p5,shape,pos);
} else {
return null;
}
});

setInterval((function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_38717){
var state_val_38718 = (state_38717[(1)]);
if((state_val_38718 === (1))){
var inst_38711 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38712 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_38713 = cljs.core.PersistentHashMap.fromArrays(inst_38711,inst_38712);
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38717__$1,(2),app.t5.main.evt,inst_38713);
} else {
if((state_val_38718 === (2))){
var inst_38715 = (state_38717[(2)]);
var state_38717__$1 = state_38717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38717__$1,inst_38715);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30585__auto__ = null;
var app$t5$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null];
(statearr_38719[(0)] = app$t5$main$main_$_state_machine__30585__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var app$t5$main$main_$_state_machine__30585__auto____1 = (function (state_38717){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38717);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38720){if((e38720 instanceof Object)){
var ex__30588__auto__ = e38720;
var statearr_38721_38929 = state_38717;
(statearr_38721_38929[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38930 = state_38717;
state_38717 = G__38930;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30585__auto__ = function(state_38717){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30585__auto____1.call(this,state_38717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30585__auto____0;
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30585__auto____1;
return app$t5$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_38774 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38774[(6)] = c__30812__auto__);

return statearr_38774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
}),(33));

app.t5.main.p5.keyPressed = (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_38783){
var state_val_38784 = (state_38783[(1)]);
if((state_val_38784 === (1))){
var inst_38776 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_38777 = app.t5.main.p5.key;
var inst_38778 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_38777];
var inst_38779 = cljs.core.PersistentHashMap.fromArrays(inst_38776,inst_38778);
var state_38783__$1 = state_38783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38783__$1,(2),app.t5.main.evt,inst_38779);
} else {
if((state_val_38784 === (2))){
var inst_38781 = (state_38783[(2)]);
var state_38783__$1 = state_38783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38783__$1,inst_38781);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30585__auto__ = null;
var app$t5$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38785 = [null,null,null,null,null,null,null];
(statearr_38785[(0)] = app$t5$main$main_$_state_machine__30585__auto__);

(statearr_38785[(1)] = (1));

return statearr_38785;
});
var app$t5$main$main_$_state_machine__30585__auto____1 = (function (state_38783){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38783);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38786){if((e38786 instanceof Object)){
var ex__30588__auto__ = e38786;
var statearr_38787_38931 = state_38783;
(statearr_38787_38931[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38932 = state_38783;
state_38783 = G__38932;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30585__auto__ = function(state_38783){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30585__auto____1.call(this,state_38783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30585__auto____0;
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30585__auto____1;
return app$t5$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_38788 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38788[(6)] = c__30812__auto__);

return statearr_38788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
});

return app.t5.main.p5.keyReleased = (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_38796){
var state_val_38797 = (state_38796[(1)]);
if((state_val_38797 === (1))){
var inst_38789 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_38790 = app.t5.main.p5.key;
var inst_38791 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_38790];
var inst_38792 = cljs.core.PersistentHashMap.fromArrays(inst_38789,inst_38791);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38796__$1,(2),app.t5.main.evt,inst_38792);
} else {
if((state_val_38797 === (2))){
var inst_38794 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38796__$1,inst_38794);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30585__auto__ = null;
var app$t5$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38800 = [null,null,null,null,null,null,null];
(statearr_38800[(0)] = app$t5$main$main_$_state_machine__30585__auto__);

(statearr_38800[(1)] = (1));

return statearr_38800;
});
var app$t5$main$main_$_state_machine__30585__auto____1 = (function (state_38796){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38796);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38801){if((e38801 instanceof Object)){
var ex__30588__auto__ = e38801;
var statearr_38803_38933 = state_38796;
(statearr_38803_38933[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38934 = state_38796;
state_38796 = G__38934;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30585__auto__ = function(state_38796){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30585__auto____1.call(this,state_38796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30585__auto____0;
app$t5$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30585__auto____1;
return app$t5$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_38805 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38805[(6)] = c__30812__auto__);

return statearr_38805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
});
});
app.t5.main.main();

//# sourceMappingURL=app.t5.main.js.map
