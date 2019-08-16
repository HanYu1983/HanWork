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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37950){
var vec__37952 = p__37950;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37967){
var vec__37969 = p__37967;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37969,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__37972 = cljs.core._EQ_;
var expr__37973 = type;
if(cljs.core.truth_((pred__37972.cljs$core$IFn$_invoke$arity$2 ? pred__37972.cljs$core$IFn$_invoke$arity$2((0),expr__37973) : pred__37972.call(null,(0),expr__37973)))){
return s;
} else {
if(cljs.core.truth_((pred__37972.cljs$core$IFn$_invoke$arity$2 ? pred__37972.cljs$core$IFn$_invoke$arity$2((1),expr__37973) : pred__37972.call(null,(1),expr__37973)))){
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90(s);
} else {
return s;

}
} else {
var pred__37975 = cljs.core._EQ_;
var expr__37976 = dir;
if(cljs.core.truth_((pred__37975.cljs$core$IFn$_invoke$arity$2 ? pred__37975.cljs$core$IFn$_invoke$arity$2((0),expr__37976) : pred__37975.call(null,(0),expr__37976)))){
return s;
} else {
if(cljs.core.truth_((pred__37975.cljs$core$IFn$_invoke$arity$2 ? pred__37975.cljs$core$IFn$_invoke$arity$2((1),expr__37976) : pred__37975.call(null,(1),expr__37976)))){
return app.t5.main.rotate180(app.t5.main.rotate90(s));
} else {
if(cljs.core.truth_((pred__37975.cljs$core$IFn$_invoke$arity$2 ? pred__37975.cljs$core$IFn$_invoke$arity$2((2),expr__37976) : pred__37975.call(null,(2),expr__37976)))){
return app.t5.main.rotate180(s);
} else {
if(cljs.core.truth_((pred__37975.cljs$core$IFn$_invoke$arity$2 ? pred__37975.cljs$core$IFn$_invoke$arity$2((3),expr__37976) : pred__37975.call(null,(3),expr__37976)))){
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
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__37993){
var vec__37995 = p__37993;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(1),null);
var pos = vec__37995;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some((function (p__38005){
var vec__38010 = p__38005;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38010,(1),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.t5.main.emptyCell,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null)))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__38022 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38015_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38015_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38022,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38022,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38022,(2),null);
var vec__38025 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38025,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38025,(1),null);
var cr = vec__38025;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38022,type,dir,pos,vec__38025,c,r,cr,shape){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,s);
});})(vec__38022,type,dir,pos,vec__38025,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (shape__$1,or,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not(app.t5.main.isCollide(ctx,shapeWithPos__$1))){
return or;
} else {
var G__38733 = shape__$1;
var G__38734 = (or - (1));
shape__$1 = G__38733;
or = G__38734;
continue;
}
}
break;
}
});})(vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not(app.t5.main.isCollide(ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty(shape,(r - (1)));
var fixedShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (topR,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (topR,fixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__38078){
var vec__38079 = p__38078;
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(0),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly(type));
}
});})(topR,fixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int(cljs.core.count(app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null)], 0));
});})(topR,fixedShape,applyFixedShape,vec__38022,type,dir,pos,vec__38025,c,r,cr,shape,shapeWithPos,findEmpty))
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
var pred__38175 = cljs.core._EQ_;
var expr__38176 = key;
if(cljs.core.truth_((pred__38175.cljs$core$IFn$_invoke$arity$2 ? pred__38175.cljs$core$IFn$_invoke$arity$2("a",expr__38176) : pred__38175.call(null,"a",expr__38176)))){
var vec__38179 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38175,expr__38176){
return (function (p1__38143_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38143_SHARP_], null));
});})(pred__38175,expr__38176))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38179,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38179,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38179,(2),null);
var vec__38182 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(1),null);
var cr = vec__38182;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextCr = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38179,type,dir,pos,vec__38182,c,r,cr,shape,nextCr,pred__38175,expr__38176){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,nextCr,s);
});})(vec__38179,type,dir,pos,vec__38182,c,r,cr,shape,nextCr,pred__38175,expr__38176))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_((pred__38175.cljs$core$IFn$_invoke$arity$2 ? pred__38175.cljs$core$IFn$_invoke$arity$2("d",expr__38176) : pred__38175.call(null,"d",expr__38176)))){
var vec__38190 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38175,expr__38176){
return (function (p1__38154_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38154_SHARP_], null));
});})(pred__38175,expr__38176))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38190,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38190,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38190,(2),null);
var vec__38193 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38193,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38193,(1),null);
var cr = vec__38193;
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextCr = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38190,type,dir,pos,vec__38193,c,r,cr,shape,nextCr,pred__38175,expr__38176){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,nextCr,s);
});})(vec__38190,type,dir,pos,vec__38193,c,r,cr,shape,nextCr,pred__38175,expr__38176))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_((pred__38175.cljs$core$IFn$_invoke$arity$2 ? pred__38175.cljs$core$IFn$_invoke$arity$2(" ",expr__38176) : pred__38175.call(null," ",expr__38176)))){
var vec__38201 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__38175,expr__38176){
return (function (p1__38172_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38172_SHARP_], null));
});})(pred__38175,expr__38176))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(2),null);
var vec__38204 = app.t5.main.pos2cr(pos);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(1),null);
var cr = vec__38204;
var nextDir = cljs.core.mod((dir + (1)),(4));
var shape = app.t5.main.rotate(type,nextDir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
var nextShape = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38201,type,dir,pos,vec__38204,c,r,cr,nextDir,shape,pred__38175,expr__38176){
return (function (s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cr,s);
});})(vec__38201,type,dir,pos,vec__38204,c,r,cr,nextDir,shape,pred__38175,expr__38176))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide(ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__38201,type,dir,pos,vec__38204,c,r,cr,nextDir,shape,nextShape,pred__38175,expr__38176){
return (function (p1__38174_SHARP_){
return cljs.core.mod((p1__38174_SHARP_ + (1)),(4));
});})(vec__38201,type,dir,pos,vec__38204,c,r,cr,nextDir,shape,nextShape,pred__38175,expr__38176))
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
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__38216){
var vec__38217 = p__38216;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38217,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38217,(1),null);
var pos = vec__38217;
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38221 = cljs.core.seq(shape);
var chunk__38222 = null;
var count__38223 = (0);
var i__38224 = (0);
while(true){
if((i__38224 < count__38223)){
var s = chunk__38222.cljs$core$IIndexed$_nth$arity$2(null,i__38224);
var vec__38241_38813 = s;
var x_38814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38241_38813,(0),null);
var y_38815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38241_38813,(1),null);
p5.rect((px + (app.t5.main.cellW * x_38814)),(py + (app.t5.main.cellH * y_38815)),app.t5.main.cellW,app.t5.main.cellH);


var G__38825 = seq__38221;
var G__38826 = chunk__38222;
var G__38827 = count__38223;
var G__38828 = (i__38224 + (1));
seq__38221 = G__38825;
chunk__38222 = G__38826;
count__38223 = G__38827;
i__38224 = G__38828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38221);
if(temp__5735__auto__){
var seq__38221__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38221__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38221__$1);
var G__38829 = cljs.core.chunk_rest(seq__38221__$1);
var G__38830 = c__4550__auto__;
var G__38831 = cljs.core.count(c__4550__auto__);
var G__38832 = (0);
seq__38221 = G__38829;
chunk__38222 = G__38830;
count__38223 = G__38831;
i__38224 = G__38832;
continue;
} else {
var s = cljs.core.first(seq__38221__$1);
var vec__38258_38837 = s;
var x_38838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38258_38837,(0),null);
var y_38839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38258_38837,(1),null);
p5.rect((px + (app.t5.main.cellW * x_38838)),(py + (app.t5.main.cellH * y_38839)),app.t5.main.cellW,app.t5.main.cellH);


var G__38844 = cljs.core.next(seq__38221__$1);
var G__38845 = null;
var G__38846 = (0);
var G__38847 = (0);
seq__38221 = G__38844;
chunk__38222 = G__38845;
count__38223 = G__38846;
i__38224 = G__38847;
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
var pred__38299 = cljs.core._EQ_;
var expr__38300 = type;
if(cljs.core.truth_((pred__38299.cljs$core$IFn$_invoke$arity$2 ? pred__38299.cljs$core$IFn$_invoke$arity$2((0),expr__38300) : pred__38299.call(null,(0),expr__38300)))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_((pred__38299.cljs$core$IFn$_invoke$arity$2 ? pred__38299.cljs$core$IFn$_invoke$arity$2((1),expr__38300) : pred__38299.call(null,(1),expr__38300)))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_((pred__38299.cljs$core$IFn$_invoke$arity$2 ? pred__38299.cljs$core$IFn$_invoke$arity$2((2),expr__38300) : pred__38299.call(null,(2),expr__38300)))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_((pred__38299.cljs$core$IFn$_invoke$arity$2 ? pred__38299.cljs$core$IFn$_invoke$arity$2((3),expr__38300) : pred__38299.call(null,(3),expr__38300)))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_((pred__38299.cljs$core$IFn$_invoke$arity$2 ? pred__38299.cljs$core$IFn$_invoke$arity$2((4),expr__38300) : pred__38299.call(null,(4),expr__38300)))){
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

var c__30213__auto___38863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___38863){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___38863){
return (function (state_38398){
var state_val_38399 = (state_38398[(1)]);
if((state_val_38399 === (7))){
var inst_38394 = (state_38398[(2)]);
var state_38398__$1 = state_38398;
var statearr_38409_38865 = state_38398__$1;
(statearr_38409_38865[(2)] = inst_38394);

(statearr_38409_38865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (1))){
var inst_38358 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_38359 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_38363 = cljs.core.count(app.t5.main.shapes);
var inst_38364 = cljs.core.rand_int(inst_38363);
var inst_38365 = [app.t5.main.spawnPos,inst_38364,(0)];
var inst_38366 = cljs.core.PersistentHashMap.fromArrays(inst_38359,inst_38365);
var inst_38367 = [app.t5.main.cells,inst_38366];
var inst_38368 = cljs.core.PersistentHashMap.fromArrays(inst_38358,inst_38367);
var inst_38369 = inst_38368;
var state_38398__$1 = (function (){var statearr_38411 = state_38398;
(statearr_38411[(7)] = inst_38369);

return statearr_38411;
})();
var statearr_38413_38867 = state_38398__$1;
(statearr_38413_38867[(2)] = null);

(statearr_38413_38867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (4))){
var inst_38373 = (state_38398[(8)]);
var inst_38377 = (state_38398[(9)]);
var inst_38373__$1 = (state_38398[(2)]);
var inst_38377__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_38373__$1);
var inst_38379 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_38377__$1);
var state_38398__$1 = (function (){var statearr_38416 = state_38398;
(statearr_38416[(8)] = inst_38373__$1);

(statearr_38416[(9)] = inst_38377__$1);

return statearr_38416;
})();
if(inst_38379){
var statearr_38422_38869 = state_38398__$1;
(statearr_38422_38869[(1)] = (5));

} else {
var statearr_38423_38870 = state_38398__$1;
(statearr_38423_38870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (6))){
var inst_38377 = (state_38398[(9)]);
var inst_38385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),inst_38377);
var state_38398__$1 = state_38398;
if(inst_38385){
var statearr_38426_38873 = state_38398__$1;
(statearr_38426_38873[(1)] = (8));

} else {
var statearr_38427_38874 = state_38398__$1;
(statearr_38427_38874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (3))){
var inst_38396 = (state_38398[(2)]);
var state_38398__$1 = state_38398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38398__$1,inst_38396);
} else {
if((state_val_38399 === (2))){
var inst_38369 = (state_38398[(7)]);
var inst_38371 = app.t5.main.model = inst_38369;
var state_38398__$1 = (function (){var statearr_38431 = state_38398;
(statearr_38431[(10)] = inst_38371);

return statearr_38431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38398__$1,(4),app.t5.main.evt);
} else {
if((state_val_38399 === (9))){
var inst_38369 = (state_38398[(7)]);
var tmp38428 = inst_38369;
var inst_38369__$1 = tmp38428;
var state_38398__$1 = (function (){var statearr_38432 = state_38398;
(statearr_38432[(7)] = inst_38369__$1);

return statearr_38432;
})();
var statearr_38433_38877 = state_38398__$1;
(statearr_38433_38877[(2)] = null);

(statearr_38433_38877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (5))){
var inst_38373 = (state_38398[(8)]);
var inst_38369 = (state_38398[(7)]);
var inst_38381 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_38373);
var inst_38382 = app.t5.main.handleInput(inst_38381,inst_38369);
var inst_38369__$1 = inst_38382;
var state_38398__$1 = (function (){var statearr_38441 = state_38398;
(statearr_38441[(7)] = inst_38369__$1);

return statearr_38441;
})();
var statearr_38446_38878 = state_38398__$1;
(statearr_38446_38878[(2)] = null);

(statearr_38446_38878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (10))){
var inst_38392 = (state_38398[(2)]);
var state_38398__$1 = state_38398;
var statearr_38447_38880 = state_38398__$1;
(statearr_38447_38880[(2)] = inst_38392);

(statearr_38447_38880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (8))){
var inst_38369 = (state_38398[(7)]);
var inst_38387 = app.t5.main.step(inst_38369);
var inst_38369__$1 = inst_38387;
var state_38398__$1 = (function (){var statearr_38448 = state_38398;
(statearr_38448[(7)] = inst_38369__$1);

return statearr_38448;
})();
var statearr_38456_38881 = state_38398__$1;
(statearr_38456_38881[(2)] = null);

(statearr_38456_38881[(1)] = (2));


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
});})(c__30213__auto___38863))
;
return ((function (switch__30004__auto__,c__30213__auto___38863){
return (function() {
var app$t5$main$main_$_state_machine__30005__auto__ = null;
var app$t5$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38464[(0)] = app$t5$main$main_$_state_machine__30005__auto__);

(statearr_38464[(1)] = (1));

return statearr_38464;
});
var app$t5$main$main_$_state_machine__30005__auto____1 = (function (state_38398){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38398);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38467){if((e38467 instanceof Object)){
var ex__30008__auto__ = e38467;
var statearr_38468_38884 = state_38398;
(statearr_38468_38884[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38886 = state_38398;
state_38398 = G__38886;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30005__auto__ = function(state_38398){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30005__auto____1.call(this,state_38398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30005__auto____0;
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30005__auto____1;
return app$t5$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___38863))
})();
var state__30215__auto__ = (function (){var statearr_38474 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38474[(6)] = c__30213__auto___38863);

return statearr_38474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___38863))
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
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function app$t5$main$main_$_iter__38492(s__38493){
return (new cljs.core.LazySeq(null,(function (){
var s__38493__$1 = s__38493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38493__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__38493__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app$t5$main$main_$_iter__38492_$_iter__38494(s__38495){
return (new cljs.core.LazySeq(null,((function (s__38493__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__38495__$1 = s__38495;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38495__$1);
if(temp__5735__auto____$1){
var s__38495__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38495__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38495__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38497 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38496 = (0);
while(true){
if((i__38496 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38496);
cljs.core.chunk_append(b__38497,(function (){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor(app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__38909 = (i__38496 + (1));
i__38496 = G__38909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38497),app$t5$main$main_$_iter__38492_$_iter__38494(cljs.core.chunk_rest(s__38495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38497),null);
}
} else {
var y = cljs.core.first(s__38495__$2);
return cljs.core.cons((function (){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor(app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__38492_$_iter__38494(cljs.core.rest(s__38495__$2)));
}
} else {
return null;
}
break;
}
});})(s__38493__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__38493__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t5.main.h)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t5$main$main_$_iter__38492(cljs.core.rest(s__38493__$1)));
} else {
var G__38915 = cljs.core.rest(s__38493__$1);
s__38493__$1 = G__38915;
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

var vec__38569 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38312_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__38312_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38569,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38569,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38569,(2),null);
var shape = app.t5.main.rotate(type,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.t5.main.shapes,type));
app.t5.main.fillShapeColor(app.t5.main.p5,type);

return app.t5.main.drawShape(app.t5.main.p5,shape,pos);
} else {
return null;
}
});

setInterval((function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_38584){
var state_val_38585 = (state_38584[(1)]);
if((state_val_38585 === (1))){
var inst_38578 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38579 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_38580 = cljs.core.PersistentHashMap.fromArrays(inst_38578,inst_38579);
var state_38584__$1 = state_38584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38584__$1,(2),app.t5.main.evt,inst_38580);
} else {
if((state_val_38585 === (2))){
var inst_38582 = (state_38584[(2)]);
var state_38584__$1 = state_38584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38584__$1,inst_38582);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30005__auto__ = null;
var app$t5$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38610 = [null,null,null,null,null,null,null];
(statearr_38610[(0)] = app$t5$main$main_$_state_machine__30005__auto__);

(statearr_38610[(1)] = (1));

return statearr_38610;
});
var app$t5$main$main_$_state_machine__30005__auto____1 = (function (state_38584){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38584);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38611){if((e38611 instanceof Object)){
var ex__30008__auto__ = e38611;
var statearr_38612_38919 = state_38584;
(statearr_38612_38919[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38921 = state_38584;
state_38584 = G__38921;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30005__auto__ = function(state_38584){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30005__auto____1.call(this,state_38584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30005__auto____0;
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30005__auto____1;
return app$t5$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_38613 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38613[(6)] = c__30213__auto__);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
}),(33));

app.t5.main.p5.keyPressed = (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_38627){
var state_val_38628 = (state_38627[(1)]);
if((state_val_38628 === (1))){
var inst_38617 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_38621 = app.t5.main.p5.key;
var inst_38622 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_38621];
var inst_38623 = cljs.core.PersistentHashMap.fromArrays(inst_38617,inst_38622);
var state_38627__$1 = state_38627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38627__$1,(2),app.t5.main.evt,inst_38623);
} else {
if((state_val_38628 === (2))){
var inst_38625 = (state_38627[(2)]);
var state_38627__$1 = state_38627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38627__$1,inst_38625);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30005__auto__ = null;
var app$t5$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38636 = [null,null,null,null,null,null,null];
(statearr_38636[(0)] = app$t5$main$main_$_state_machine__30005__auto__);

(statearr_38636[(1)] = (1));

return statearr_38636;
});
var app$t5$main$main_$_state_machine__30005__auto____1 = (function (state_38627){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38627);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38637){if((e38637 instanceof Object)){
var ex__30008__auto__ = e38637;
var statearr_38638_38922 = state_38627;
(statearr_38638_38922[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38923 = state_38627;
state_38627 = G__38923;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30005__auto__ = function(state_38627){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30005__auto____1.call(this,state_38627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30005__auto____0;
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30005__auto____1;
return app$t5$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_38639 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38639[(6)] = c__30213__auto__);

return statearr_38639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});

return app.t5.main.p5.keyReleased = (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_38683){
var state_val_38684 = (state_38683[(1)]);
if((state_val_38684 === (1))){
var inst_38676 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_38677 = app.t5.main.p5.key;
var inst_38678 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_38677];
var inst_38679 = cljs.core.PersistentHashMap.fromArrays(inst_38676,inst_38678);
var state_38683__$1 = state_38683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38683__$1,(2),app.t5.main.evt,inst_38679);
} else {
if((state_val_38684 === (2))){
var inst_38681 = (state_38683[(2)]);
var state_38683__$1 = state_38683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38683__$1,inst_38681);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t5$main$main_$_state_machine__30005__auto__ = null;
var app$t5$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38696 = [null,null,null,null,null,null,null];
(statearr_38696[(0)] = app$t5$main$main_$_state_machine__30005__auto__);

(statearr_38696[(1)] = (1));

return statearr_38696;
});
var app$t5$main$main_$_state_machine__30005__auto____1 = (function (state_38683){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38683);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38704){if((e38704 instanceof Object)){
var ex__30008__auto__ = e38704;
var statearr_38705_38924 = state_38683;
(statearr_38705_38924[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38925 = state_38683;
state_38683 = G__38925;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__30005__auto__ = function(state_38683){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__30005__auto____1.call(this,state_38683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__30005__auto____0;
app$t5$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__30005__auto____1;
return app$t5$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_38710 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38710[(6)] = c__30213__auto__);

return statearr_38710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});
});
app.t5.main.main();

//# sourceMappingURL=app.t5.main.js.map
