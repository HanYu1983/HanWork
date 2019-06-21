// Compiled by ClojureScript 1.10.238 {}
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
app.t5.main.cells = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,app.t5.main.h,cljs.core.repeat.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,app.t5.main.w,cljs.core.repeat.call(null,app.t5.main.emptyCell))))));
app.t5.main.shapes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null);
app.t5.main.rotate90 = (function app$t5$main$rotate90(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__9157){
var vec__9158 = p__9157;
var x = cljs.core.nth.call(null,vec__9158,(0),null);
var y = cljs.core.nth.call(null,vec__9158,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__9161){
var vec__9162 = p__9161;
var x = cljs.core.nth.call(null,vec__9162,(0),null);
var y = cljs.core.nth.call(null,vec__9162,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__9165 = cljs.core._EQ_;
var expr__9166 = type;
if(cljs.core.truth_(pred__9165.call(null,(0),expr__9166))){
return s;
} else {
if(cljs.core.truth_(pred__9165.call(null,(1),expr__9166))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90.call(null,s);
} else {
return s;

}
} else {
var pred__9168 = cljs.core._EQ_;
var expr__9169 = dir;
if(cljs.core.truth_(pred__9168.call(null,(0),expr__9169))){
return s;
} else {
if(cljs.core.truth_(pred__9168.call(null,(1),expr__9169))){
return app.t5.main.rotate180.call(null,app.t5.main.rotate90.call(null,s));
} else {
if(cljs.core.truth_(pred__9168.call(null,(2),expr__9169))){
return app.t5.main.rotate180.call(null,s);
} else {
if(cljs.core.truth_(pred__9168.call(null,(3),expr__9169))){
return app.t5.main.rotate90.call(null,s);
} else {
return s;
}
}
}
}
}
}
});
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__9171){
var vec__9172 = p__9171;
var x = cljs.core.nth.call(null,vec__9172,(0),null);
var y = cljs.core.nth.call(null,vec__9172,(1),null);
var pos = vec__9172;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some.call(null,(function (p__9175){
var vec__9176 = p__9175;
var c = cljs.core.nth.call(null,vec__9176,(0),null);
var r = cljs.core.nth.call(null,vec__9176,(1),null);
return !(cljs.core._EQ_.call(null,app.t5.main.emptyCell,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__9180 = cljs.core.map.call(null,(function (p1__9179_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__9179_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__9180,(0),null);
var dir = cljs.core.nth.call(null,vec__9180,(1),null);
var pos = cljs.core.nth.call(null,vec__9180,(2),null);
var vec__9183 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__9183,(0),null);
var r = cljs.core.nth.call(null,vec__9183,(1),null);
var cr = vec__9183;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.call(null,((function (vec__9180,type,dir,pos,vec__9183,c,r,cr,shape){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__9180,type,dir,pos,vec__9183,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.call(null,((function (shape__$1,or,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos__$1))){
return or;
} else {
var G__9190 = shape__$1;
var G__9191 = (or - (1));
shape__$1 = G__9190;
or = G__9191;
continue;
}
}
break;
}
});})(vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty.call(null,shape,(r - (1)));
var fixedShape = cljs.core.map.call(null,((function (topR,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.call(null,((function (topR,fixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__9186){
var vec__9187 = p__9186;
var c__$1 = cljs.core.nth.call(null,vec__9187,(0),null);
var r__$1 = cljs.core.nth.call(null,vec__9187,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly.call(null,type));
}
});})(topR,fixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int.call(null,cljs.core.count.call(null,app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null));
});})(topR,fixedShape,applyFixedShape,vec__9180,type,dir,pos,vec__9183,c,r,cr,shape,shapeWithPos,findEmpty))
;
return randomNext.call(null,applyFixedShape.call(null,ctx));
}
});
app.t5.main.eatLine = (function app$t5$main$eatLine(ctx){
var nextCells = cljs.core.reduce.call(null,(function (cells,line){
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.partial.call(null,cljs.core._EQ_,app.t5.main.emptyCell)),line)){
return cells;
} else {
return cljs.core.conj.call(null,cells,line);
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(ctx));
var offset = (app.t5.main.h - cljs.core.count.call(null,nextCells));
if((offset <= (0))){
return ctx;
} else {
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.reduce.call(null,cljs.core.conj,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,offset,cljs.core.repeat.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,app.t5.main.w,cljs.core.repeat.call(null,app.t5.main.emptyCell)))))),nextCells)], null));
}
});
app.t5.main.handleInput = (function app$t5$main$handleInput(key,ctx){
var pred__9196 = cljs.core._EQ_;
var expr__9197 = key;
if(cljs.core.truth_(pred__9196.call(null,"a",expr__9197))){
var vec__9199 = cljs.core.map.call(null,((function (pred__9196,expr__9197){
return (function (p1__9192_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__9192_SHARP_], null));
});})(pred__9196,expr__9197))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__9199,(0),null);
var dir = cljs.core.nth.call(null,vec__9199,(1),null);
var pos = cljs.core.nth.call(null,vec__9199,(2),null);
var vec__9202 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__9202,(0),null);
var r = cljs.core.nth.call(null,vec__9202,(1),null);
var cr = vec__9202;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__9199,type,dir,pos,vec__9202,c,r,cr,shape,nextCr,pred__9196,expr__9197){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__9199,type,dir,pos,vec__9202,c,r,cr,shape,nextCr,pred__9196,expr__9197))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_(pred__9196.call(null,"d",expr__9197))){
var vec__9205 = cljs.core.map.call(null,((function (pred__9196,expr__9197){
return (function (p1__9193_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__9193_SHARP_], null));
});})(pred__9196,expr__9197))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__9205,(0),null);
var dir = cljs.core.nth.call(null,vec__9205,(1),null);
var pos = cljs.core.nth.call(null,vec__9205,(2),null);
var vec__9208 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__9208,(0),null);
var r = cljs.core.nth.call(null,vec__9208,(1),null);
var cr = vec__9208;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__9205,type,dir,pos,vec__9208,c,r,cr,shape,nextCr,pred__9196,expr__9197){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__9205,type,dir,pos,vec__9208,c,r,cr,shape,nextCr,pred__9196,expr__9197))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_(pred__9196.call(null," ",expr__9197))){
var vec__9211 = cljs.core.map.call(null,((function (pred__9196,expr__9197){
return (function (p1__9194_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__9194_SHARP_], null));
});})(pred__9196,expr__9197))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__9211,(0),null);
var dir = cljs.core.nth.call(null,vec__9211,(1),null);
var pos = cljs.core.nth.call(null,vec__9211,(2),null);
var vec__9214 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__9214,(0),null);
var r = cljs.core.nth.call(null,vec__9214,(1),null);
var cr = vec__9214;
var nextDir = cljs.core.mod.call(null,(dir + (1)),(4));
var shape = app.t5.main.rotate.call(null,type,nextDir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextShape = cljs.core.map.call(null,((function (vec__9211,type,dir,pos,vec__9214,c,r,cr,nextDir,shape,pred__9196,expr__9197){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__9211,type,dir,pos,vec__9214,c,r,cr,nextDir,shape,pred__9196,expr__9197))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__9211,type,dir,pos,vec__9214,c,r,cr,nextDir,shape,nextShape,pred__9196,expr__9197){
return (function (p1__9195_SHARP_){
return cljs.core.mod.call(null,(p1__9195_SHARP_ + (1)),(4));
});})(vec__9211,type,dir,pos,vec__9214,c,r,cr,nextDir,shape,nextShape,pred__9196,expr__9197))
);
}
} else {
return ctx;
}
}
}
});
app.t5.main.dropShape = (function app$t5$main$dropShape(ctx){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t5.main.dropSpd], null)));
});
app.t5.main.update = (function app$t5$main$update(ctx){
return app.t5.main.eatLine.call(null,app.t5.main.collide.call(null,app.t5.main.dropShape.call(null,ctx)));
});
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__9217){
var vec__9218 = p__9217;
var px = cljs.core.nth.call(null,vec__9218,(0),null);
var py = cljs.core.nth.call(null,vec__9218,(1),null);
var pos = vec__9218;
return cljs.core.dorun.call(null,(function (){var seq__9221 = cljs.core.seq.call(null,shape);
var chunk__9222 = null;
var count__9223 = (0);
var i__9224 = (0);
while(true){
if((i__9224 < count__9223)){
var s = cljs.core._nth.call(null,chunk__9222,i__9224);
var vec__9225_9231 = s;
var x_9232 = cljs.core.nth.call(null,vec__9225_9231,(0),null);
var y_9233 = cljs.core.nth.call(null,vec__9225_9231,(1),null);
p5.rect((px + (app.t5.main.cellW * x_9232)),(py + (app.t5.main.cellH * y_9233)),app.t5.main.cellW,app.t5.main.cellH);


var G__9234 = seq__9221;
var G__9235 = chunk__9222;
var G__9236 = count__9223;
var G__9237 = (i__9224 + (1));
seq__9221 = G__9234;
chunk__9222 = G__9235;
count__9223 = G__9236;
i__9224 = G__9237;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9221);
if(temp__5457__auto__){
var seq__9221__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9221__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9221__$1);
var G__9238 = cljs.core.chunk_rest.call(null,seq__9221__$1);
var G__9239 = c__4319__auto__;
var G__9240 = cljs.core.count.call(null,c__4319__auto__);
var G__9241 = (0);
seq__9221 = G__9238;
chunk__9222 = G__9239;
count__9223 = G__9240;
i__9224 = G__9241;
continue;
} else {
var s = cljs.core.first.call(null,seq__9221__$1);
var vec__9228_9242 = s;
var x_9243 = cljs.core.nth.call(null,vec__9228_9242,(0),null);
var y_9244 = cljs.core.nth.call(null,vec__9228_9242,(1),null);
p5.rect((px + (app.t5.main.cellW * x_9243)),(py + (app.t5.main.cellH * y_9244)),app.t5.main.cellW,app.t5.main.cellH);


var G__9245 = cljs.core.next.call(null,seq__9221__$1);
var G__9246 = null;
var G__9247 = (0);
var G__9248 = (0);
seq__9221 = G__9245;
chunk__9222 = G__9246;
count__9223 = G__9247;
i__9224 = G__9248;
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
var pred__9249 = cljs.core._EQ_;
var expr__9250 = type;
if(cljs.core.truth_(pred__9249.call(null,(0),expr__9250))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_(pred__9249.call(null,(1),expr__9250))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_(pred__9249.call(null,(2),expr__9250))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_(pred__9249.call(null,(3),expr__9250))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_(pred__9249.call(null,(4),expr__9250))){
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

app.t5.main.evt = cljs.core.async.chan.call(null);

var c__2885__auto___9359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___9359){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___9359){
return (function (state_9289){
var state_val_9290 = (state_9289[(1)]);
if((state_val_9290 === (7))){
var inst_9285 = (state_9289[(2)]);
var state_9289__$1 = state_9289;
var statearr_9291_9360 = state_9289__$1;
(statearr_9291_9360[(2)] = inst_9285);

(statearr_9291_9360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (1))){
var inst_9253 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_9254 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_9255 = cljs.core.count.call(null,app.t5.main.shapes);
var inst_9256 = cljs.core.rand_int.call(null,inst_9255);
var inst_9257 = [app.t5.main.spawnPos,inst_9256,(0)];
var inst_9258 = cljs.core.PersistentHashMap.fromArrays(inst_9254,inst_9257);
var inst_9259 = [app.t5.main.cells,inst_9258];
var inst_9260 = cljs.core.PersistentHashMap.fromArrays(inst_9253,inst_9259);
var inst_9261 = inst_9260;
var state_9289__$1 = (function (){var statearr_9292 = state_9289;
(statearr_9292[(7)] = inst_9261);

return statearr_9292;
})();
var statearr_9293_9361 = state_9289__$1;
(statearr_9293_9361[(2)] = null);

(statearr_9293_9361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (4))){
var inst_9269 = (state_9289[(8)]);
var inst_9265 = (state_9289[(9)]);
var inst_9265__$1 = (state_9289[(2)]);
var inst_9269__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_9265__$1);
var inst_9270 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9269__$1);
var state_9289__$1 = (function (){var statearr_9294 = state_9289;
(statearr_9294[(8)] = inst_9269__$1);

(statearr_9294[(9)] = inst_9265__$1);

return statearr_9294;
})();
if(inst_9270){
var statearr_9295_9362 = state_9289__$1;
(statearr_9295_9362[(1)] = (5));

} else {
var statearr_9296_9363 = state_9289__$1;
(statearr_9296_9363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (6))){
var inst_9269 = (state_9289[(8)]);
var inst_9276 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_9269);
var state_9289__$1 = state_9289;
if(inst_9276){
var statearr_9297_9364 = state_9289__$1;
(statearr_9297_9364[(1)] = (8));

} else {
var statearr_9298_9365 = state_9289__$1;
(statearr_9298_9365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (3))){
var inst_9287 = (state_9289[(2)]);
var state_9289__$1 = state_9289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9289__$1,inst_9287);
} else {
if((state_val_9290 === (2))){
var inst_9261 = (state_9289[(7)]);
var inst_9263 = app.t5.main.model = inst_9261;
var state_9289__$1 = (function (){var statearr_9300 = state_9289;
(statearr_9300[(10)] = inst_9263);

return statearr_9300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9289__$1,(4),app.t5.main.evt);
} else {
if((state_val_9290 === (9))){
var inst_9261 = (state_9289[(7)]);
var tmp9299 = inst_9261;
var inst_9261__$1 = tmp9299;
var state_9289__$1 = (function (){var statearr_9301 = state_9289;
(statearr_9301[(7)] = inst_9261__$1);

return statearr_9301;
})();
var statearr_9302_9366 = state_9289__$1;
(statearr_9302_9366[(2)] = null);

(statearr_9302_9366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (5))){
var inst_9265 = (state_9289[(9)]);
var inst_9261 = (state_9289[(7)]);
var inst_9272 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_9265);
var inst_9273 = app.t5.main.handleInput.call(null,inst_9272,inst_9261);
var inst_9261__$1 = inst_9273;
var state_9289__$1 = (function (){var statearr_9303 = state_9289;
(statearr_9303[(7)] = inst_9261__$1);

return statearr_9303;
})();
var statearr_9304_9367 = state_9289__$1;
(statearr_9304_9367[(2)] = null);

(statearr_9304_9367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (10))){
var inst_9283 = (state_9289[(2)]);
var state_9289__$1 = state_9289;
var statearr_9305_9368 = state_9289__$1;
(statearr_9305_9368[(2)] = inst_9283);

(statearr_9305_9368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9290 === (8))){
var inst_9261 = (state_9289[(7)]);
var inst_9278 = app.t5.main.update.call(null,inst_9261);
var inst_9261__$1 = inst_9278;
var state_9289__$1 = (function (){var statearr_9306 = state_9289;
(statearr_9306[(7)] = inst_9261__$1);

return statearr_9306;
})();
var statearr_9307_9369 = state_9289__$1;
(statearr_9307_9369[(2)] = null);

(statearr_9307_9369[(1)] = (2));


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
});})(c__2885__auto___9359))
;
return ((function (switch__2795__auto__,c__2885__auto___9359){
return (function() {
var app$t5$main$main_$_state_machine__2796__auto__ = null;
var app$t5$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9308[(0)] = app$t5$main$main_$_state_machine__2796__auto__);

(statearr_9308[(1)] = (1));

return statearr_9308;
});
var app$t5$main$main_$_state_machine__2796__auto____1 = (function (state_9289){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9309){if((e9309 instanceof Object)){
var ex__2799__auto__ = e9309;
var statearr_9310_9370 = state_9289;
(statearr_9310_9370[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9371 = state_9289;
state_9289 = G__9371;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2796__auto__ = function(state_9289){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2796__auto____1.call(this,state_9289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2796__auto____0;
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2796__auto____1;
return app$t5$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___9359))
})();
var state__2887__auto__ = (function (){var statearr_9311 = f__2886__auto__.call(null);
(statearr_9311[(6)] = c__2885__auto___9359);

return statearr_9311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___9359))
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
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t5$main$main_$_iter__9312(s__9313){
return (new cljs.core.LazySeq(null,(function (){
var s__9313__$1 = s__9313;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9313__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__9313__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function app$t5$main$main_$_iter__9312_$_iter__9314(s__9315){
return (new cljs.core.LazySeq(null,((function (s__9313__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__9315__$1 = s__9315;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__9315__$1);
if(temp__5457__auto____$1){
var s__9315__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9315__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9315__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9317 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9316 = (0);
while(true){
if((i__9316 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__9316);
cljs.core.chunk_append.call(null,b__9317,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__9372 = (i__9316 + (1));
i__9316 = G__9372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9317),app$t5$main$main_$_iter__9312_$_iter__9314.call(null,cljs.core.chunk_rest.call(null,s__9315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9317),null);
}
} else {
var y = cljs.core.first.call(null,s__9315__$2);
return cljs.core.cons.call(null,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__9312_$_iter__9314.call(null,cljs.core.rest.call(null,s__9315__$2)));
}
} else {
return null;
}
break;
}
});})(s__9313__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__9313__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t5.main.h)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t5$main$main_$_iter__9312.call(null,cljs.core.rest.call(null,s__9313__$1)));
} else {
var G__9373 = cljs.core.rest.call(null,s__9313__$1);
s__9313__$1 = G__9373;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,app.t5.main.w));
})());

var vec__9318 = cljs.core.map.call(null,(function (p1__9252_SHARP_){
return cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__9252_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__9318,(0),null);
var dir = cljs.core.nth.call(null,vec__9318,(1),null);
var pos = cljs.core.nth.call(null,vec__9318,(2),null);
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

return app.t5.main.drawShape.call(null,app.t5.main.p5,shape,pos);
} else {
return null;
}
});

setInterval((function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9327){
var state_val_9328 = (state_9327[(1)]);
if((state_val_9328 === (1))){
var inst_9321 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9322 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_9323 = cljs.core.PersistentHashMap.fromArrays(inst_9321,inst_9322);
var state_9327__$1 = state_9327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9327__$1,(2),app.t5.main.evt,inst_9323);
} else {
if((state_val_9328 === (2))){
var inst_9325 = (state_9327[(2)]);
var state_9327__$1 = state_9327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9327__$1,inst_9325);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2796__auto__ = null;
var app$t5$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9329 = [null,null,null,null,null,null,null];
(statearr_9329[(0)] = app$t5$main$main_$_state_machine__2796__auto__);

(statearr_9329[(1)] = (1));

return statearr_9329;
});
var app$t5$main$main_$_state_machine__2796__auto____1 = (function (state_9327){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9330){if((e9330 instanceof Object)){
var ex__2799__auto__ = e9330;
var statearr_9331_9374 = state_9327;
(statearr_9331_9374[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9375 = state_9327;
state_9327 = G__9375;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2796__auto__ = function(state_9327){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2796__auto____1.call(this,state_9327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2796__auto____0;
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2796__auto____1;
return app$t5$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9332 = f__2886__auto__.call(null);
(statearr_9332[(6)] = c__2885__auto__);

return statearr_9332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
}),(33));

app.t5.main.p5.keyPressed = (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9340){
var state_val_9341 = (state_9340[(1)]);
if((state_val_9341 === (1))){
var inst_9333 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9334 = app.t5.main.p5.key;
var inst_9335 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9334];
var inst_9336 = cljs.core.PersistentHashMap.fromArrays(inst_9333,inst_9335);
var state_9340__$1 = state_9340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9340__$1,(2),app.t5.main.evt,inst_9336);
} else {
if((state_val_9341 === (2))){
var inst_9338 = (state_9340[(2)]);
var state_9340__$1 = state_9340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9340__$1,inst_9338);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2796__auto__ = null;
var app$t5$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9342 = [null,null,null,null,null,null,null];
(statearr_9342[(0)] = app$t5$main$main_$_state_machine__2796__auto__);

(statearr_9342[(1)] = (1));

return statearr_9342;
});
var app$t5$main$main_$_state_machine__2796__auto____1 = (function (state_9340){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9343){if((e9343 instanceof Object)){
var ex__2799__auto__ = e9343;
var statearr_9344_9376 = state_9340;
(statearr_9344_9376[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9377 = state_9340;
state_9340 = G__9377;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2796__auto__ = function(state_9340){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2796__auto____1.call(this,state_9340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2796__auto____0;
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2796__auto____1;
return app$t5$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9345 = f__2886__auto__.call(null);
(statearr_9345[(6)] = c__2885__auto__);

return statearr_9345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});

return app.t5.main.p5.keyReleased = (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9353){
var state_val_9354 = (state_9353[(1)]);
if((state_val_9354 === (1))){
var inst_9346 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9347 = app.t5.main.p5.key;
var inst_9348 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_9347];
var inst_9349 = cljs.core.PersistentHashMap.fromArrays(inst_9346,inst_9348);
var state_9353__$1 = state_9353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9353__$1,(2),app.t5.main.evt,inst_9349);
} else {
if((state_val_9354 === (2))){
var inst_9351 = (state_9353[(2)]);
var state_9353__$1 = state_9353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9353__$1,inst_9351);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2796__auto__ = null;
var app$t5$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9355 = [null,null,null,null,null,null,null];
(statearr_9355[(0)] = app$t5$main$main_$_state_machine__2796__auto__);

(statearr_9355[(1)] = (1));

return statearr_9355;
});
var app$t5$main$main_$_state_machine__2796__auto____1 = (function (state_9353){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9356){if((e9356 instanceof Object)){
var ex__2799__auto__ = e9356;
var statearr_9357_9378 = state_9353;
(statearr_9357_9378[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9379 = state_9353;
state_9353 = G__9379;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2796__auto__ = function(state_9353){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2796__auto____1.call(this,state_9353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2796__auto____0;
app$t5$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2796__auto____1;
return app$t5$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9358 = f__2886__auto__.call(null);
(statearr_9358[(6)] = c__2885__auto__);

return statearr_9358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});
});
app.t5.main.main.call(null);

//# sourceMappingURL=main.js.map
