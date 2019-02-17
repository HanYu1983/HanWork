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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__5742){
var vec__5743 = p__5742;
var x = cljs.core.nth.call(null,vec__5743,(0),null);
var y = cljs.core.nth.call(null,vec__5743,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__5746){
var vec__5747 = p__5746;
var x = cljs.core.nth.call(null,vec__5747,(0),null);
var y = cljs.core.nth.call(null,vec__5747,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__5750 = cljs.core._EQ_;
var expr__5751 = type;
if(cljs.core.truth_(pred__5750.call(null,(0),expr__5751))){
return s;
} else {
if(cljs.core.truth_(pred__5750.call(null,(1),expr__5751))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90.call(null,s);
} else {
return s;

}
} else {
var pred__5753 = cljs.core._EQ_;
var expr__5754 = dir;
if(cljs.core.truth_(pred__5753.call(null,(0),expr__5754))){
return s;
} else {
if(cljs.core.truth_(pred__5753.call(null,(1),expr__5754))){
return app.t5.main.rotate180.call(null,app.t5.main.rotate90.call(null,s));
} else {
if(cljs.core.truth_(pred__5753.call(null,(2),expr__5754))){
return app.t5.main.rotate180.call(null,s);
} else {
if(cljs.core.truth_(pred__5753.call(null,(3),expr__5754))){
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
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__5756){
var vec__5757 = p__5756;
var x = cljs.core.nth.call(null,vec__5757,(0),null);
var y = cljs.core.nth.call(null,vec__5757,(1),null);
var pos = vec__5757;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some.call(null,(function (p__5760){
var vec__5761 = p__5760;
var c = cljs.core.nth.call(null,vec__5761,(0),null);
var r = cljs.core.nth.call(null,vec__5761,(1),null);
return !(cljs.core._EQ_.call(null,app.t5.main.emptyCell,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__5765 = cljs.core.map.call(null,(function (p1__5764_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__5764_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__5765,(0),null);
var dir = cljs.core.nth.call(null,vec__5765,(1),null);
var pos = cljs.core.nth.call(null,vec__5765,(2),null);
var vec__5768 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__5768,(0),null);
var r = cljs.core.nth.call(null,vec__5768,(1),null);
var cr = vec__5768;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.call(null,((function (vec__5765,type,dir,pos,vec__5768,c,r,cr,shape){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__5765,type,dir,pos,vec__5768,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.call(null,((function (shape__$1,or,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos__$1))){
return or;
} else {
var G__5775 = shape__$1;
var G__5776 = (or - (1));
shape__$1 = G__5775;
or = G__5776;
continue;
}
}
break;
}
});})(vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty.call(null,shape,r);
var fixedShape = cljs.core.map.call(null,((function (topR,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.call(null,((function (topR,fixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__5771){
var vec__5772 = p__5771;
var c__$1 = cljs.core.nth.call(null,vec__5772,(0),null);
var r__$1 = cljs.core.nth.call(null,vec__5772,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly.call(null,type));
}
});})(topR,fixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int.call(null,cljs.core.count.call(null,app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null));
});})(topR,fixedShape,applyFixedShape,vec__5765,type,dir,pos,vec__5768,c,r,cr,shape,shapeWithPos,findEmpty))
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
var pred__5781 = cljs.core._EQ_;
var expr__5782 = key;
if(cljs.core.truth_(pred__5781.call(null,"a",expr__5782))){
var vec__5784 = cljs.core.map.call(null,((function (pred__5781,expr__5782){
return (function (p1__5777_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__5777_SHARP_], null));
});})(pred__5781,expr__5782))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__5784,(0),null);
var dir = cljs.core.nth.call(null,vec__5784,(1),null);
var pos = cljs.core.nth.call(null,vec__5784,(2),null);
var vec__5787 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__5787,(0),null);
var r = cljs.core.nth.call(null,vec__5787,(1),null);
var cr = vec__5787;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__5784,type,dir,pos,vec__5787,c,r,cr,shape,nextCr,pred__5781,expr__5782){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__5784,type,dir,pos,vec__5787,c,r,cr,shape,nextCr,pred__5781,expr__5782))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_(pred__5781.call(null,"d",expr__5782))){
var vec__5790 = cljs.core.map.call(null,((function (pred__5781,expr__5782){
return (function (p1__5778_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__5778_SHARP_], null));
});})(pred__5781,expr__5782))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__5790,(0),null);
var dir = cljs.core.nth.call(null,vec__5790,(1),null);
var pos = cljs.core.nth.call(null,vec__5790,(2),null);
var vec__5793 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__5793,(0),null);
var r = cljs.core.nth.call(null,vec__5793,(1),null);
var cr = vec__5793;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__5790,type,dir,pos,vec__5793,c,r,cr,shape,nextCr,pred__5781,expr__5782){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__5790,type,dir,pos,vec__5793,c,r,cr,shape,nextCr,pred__5781,expr__5782))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_(pred__5781.call(null," ",expr__5782))){
var vec__5796 = cljs.core.map.call(null,((function (pred__5781,expr__5782){
return (function (p1__5779_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__5779_SHARP_], null));
});})(pred__5781,expr__5782))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__5796,(0),null);
var dir = cljs.core.nth.call(null,vec__5796,(1),null);
var pos = cljs.core.nth.call(null,vec__5796,(2),null);
var vec__5799 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__5799,(0),null);
var r = cljs.core.nth.call(null,vec__5799,(1),null);
var cr = vec__5799;
var nextDir = cljs.core.mod.call(null,(dir + (1)),(4));
var shape = app.t5.main.rotate.call(null,type,nextDir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextShape = cljs.core.map.call(null,((function (vec__5796,type,dir,pos,vec__5799,c,r,cr,nextDir,shape,pred__5781,expr__5782){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__5796,type,dir,pos,vec__5799,c,r,cr,nextDir,shape,pred__5781,expr__5782))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__5796,type,dir,pos,vec__5799,c,r,cr,nextDir,shape,nextShape,pred__5781,expr__5782){
return (function (p1__5780_SHARP_){
return cljs.core.mod.call(null,(p1__5780_SHARP_ + (1)),(4));
});})(vec__5796,type,dir,pos,vec__5799,c,r,cr,nextDir,shape,nextShape,pred__5781,expr__5782))
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
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__5802){
var vec__5803 = p__5802;
var px = cljs.core.nth.call(null,vec__5803,(0),null);
var py = cljs.core.nth.call(null,vec__5803,(1),null);
var pos = vec__5803;
return cljs.core.dorun.call(null,(function (){var seq__5806 = cljs.core.seq.call(null,shape);
var chunk__5807 = null;
var count__5808 = (0);
var i__5809 = (0);
while(true){
if((i__5809 < count__5808)){
var s = cljs.core._nth.call(null,chunk__5807,i__5809);
var vec__5810_5816 = s;
var x_5817 = cljs.core.nth.call(null,vec__5810_5816,(0),null);
var y_5818 = cljs.core.nth.call(null,vec__5810_5816,(1),null);
p5.rect((px + (app.t5.main.cellW * x_5817)),(py + (app.t5.main.cellH * y_5818)),app.t5.main.cellW,app.t5.main.cellH);


var G__5819 = seq__5806;
var G__5820 = chunk__5807;
var G__5821 = count__5808;
var G__5822 = (i__5809 + (1));
seq__5806 = G__5819;
chunk__5807 = G__5820;
count__5808 = G__5821;
i__5809 = G__5822;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5806);
if(temp__5457__auto__){
var seq__5806__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5806__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5806__$1);
var G__5823 = cljs.core.chunk_rest.call(null,seq__5806__$1);
var G__5824 = c__4319__auto__;
var G__5825 = cljs.core.count.call(null,c__4319__auto__);
var G__5826 = (0);
seq__5806 = G__5823;
chunk__5807 = G__5824;
count__5808 = G__5825;
i__5809 = G__5826;
continue;
} else {
var s = cljs.core.first.call(null,seq__5806__$1);
var vec__5813_5827 = s;
var x_5828 = cljs.core.nth.call(null,vec__5813_5827,(0),null);
var y_5829 = cljs.core.nth.call(null,vec__5813_5827,(1),null);
p5.rect((px + (app.t5.main.cellW * x_5828)),(py + (app.t5.main.cellH * y_5829)),app.t5.main.cellW,app.t5.main.cellH);


var G__5830 = cljs.core.next.call(null,seq__5806__$1);
var G__5831 = null;
var G__5832 = (0);
var G__5833 = (0);
seq__5806 = G__5830;
chunk__5807 = G__5831;
count__5808 = G__5832;
i__5809 = G__5833;
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
var pred__5834 = cljs.core._EQ_;
var expr__5835 = type;
if(cljs.core.truth_(pred__5834.call(null,(0),expr__5835))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_(pred__5834.call(null,(1),expr__5835))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_(pred__5834.call(null,(2),expr__5835))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_(pred__5834.call(null,(3),expr__5835))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_(pred__5834.call(null,(4),expr__5835))){
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

var c__2882__auto___5944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5944){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5944){
return (function (state_5874){
var state_val_5875 = (state_5874[(1)]);
if((state_val_5875 === (7))){
var inst_5870 = (state_5874[(2)]);
var state_5874__$1 = state_5874;
var statearr_5876_5945 = state_5874__$1;
(statearr_5876_5945[(2)] = inst_5870);

(statearr_5876_5945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (1))){
var inst_5838 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_5839 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_5840 = cljs.core.count.call(null,app.t5.main.shapes);
var inst_5841 = cljs.core.rand_int.call(null,inst_5840);
var inst_5842 = [app.t5.main.spawnPos,inst_5841,(0)];
var inst_5843 = cljs.core.PersistentHashMap.fromArrays(inst_5839,inst_5842);
var inst_5844 = [app.t5.main.cells,inst_5843];
var inst_5845 = cljs.core.PersistentHashMap.fromArrays(inst_5838,inst_5844);
var inst_5846 = inst_5845;
var state_5874__$1 = (function (){var statearr_5877 = state_5874;
(statearr_5877[(7)] = inst_5846);

return statearr_5877;
})();
var statearr_5878_5946 = state_5874__$1;
(statearr_5878_5946[(2)] = null);

(statearr_5878_5946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (4))){
var inst_5854 = (state_5874[(8)]);
var inst_5850 = (state_5874[(9)]);
var inst_5850__$1 = (state_5874[(2)]);
var inst_5854__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_5850__$1);
var inst_5855 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_5854__$1);
var state_5874__$1 = (function (){var statearr_5879 = state_5874;
(statearr_5879[(8)] = inst_5854__$1);

(statearr_5879[(9)] = inst_5850__$1);

return statearr_5879;
})();
if(inst_5855){
var statearr_5880_5947 = state_5874__$1;
(statearr_5880_5947[(1)] = (5));

} else {
var statearr_5881_5948 = state_5874__$1;
(statearr_5881_5948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (6))){
var inst_5854 = (state_5874[(8)]);
var inst_5861 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_5854);
var state_5874__$1 = state_5874;
if(inst_5861){
var statearr_5882_5949 = state_5874__$1;
(statearr_5882_5949[(1)] = (8));

} else {
var statearr_5883_5950 = state_5874__$1;
(statearr_5883_5950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (3))){
var inst_5872 = (state_5874[(2)]);
var state_5874__$1 = state_5874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5874__$1,inst_5872);
} else {
if((state_val_5875 === (2))){
var inst_5846 = (state_5874[(7)]);
var inst_5848 = app.t5.main.model = inst_5846;
var state_5874__$1 = (function (){var statearr_5885 = state_5874;
(statearr_5885[(10)] = inst_5848);

return statearr_5885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5874__$1,(4),app.t5.main.evt);
} else {
if((state_val_5875 === (9))){
var inst_5846 = (state_5874[(7)]);
var tmp5884 = inst_5846;
var inst_5846__$1 = tmp5884;
var state_5874__$1 = (function (){var statearr_5886 = state_5874;
(statearr_5886[(7)] = inst_5846__$1);

return statearr_5886;
})();
var statearr_5887_5951 = state_5874__$1;
(statearr_5887_5951[(2)] = null);

(statearr_5887_5951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (5))){
var inst_5846 = (state_5874[(7)]);
var inst_5850 = (state_5874[(9)]);
var inst_5857 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_5850);
var inst_5858 = app.t5.main.handleInput.call(null,inst_5857,inst_5846);
var inst_5846__$1 = inst_5858;
var state_5874__$1 = (function (){var statearr_5888 = state_5874;
(statearr_5888[(7)] = inst_5846__$1);

return statearr_5888;
})();
var statearr_5889_5952 = state_5874__$1;
(statearr_5889_5952[(2)] = null);

(statearr_5889_5952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (10))){
var inst_5868 = (state_5874[(2)]);
var state_5874__$1 = state_5874;
var statearr_5890_5953 = state_5874__$1;
(statearr_5890_5953[(2)] = inst_5868);

(statearr_5890_5953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5875 === (8))){
var inst_5846 = (state_5874[(7)]);
var inst_5863 = app.t5.main.update.call(null,inst_5846);
var inst_5846__$1 = inst_5863;
var state_5874__$1 = (function (){var statearr_5891 = state_5874;
(statearr_5891[(7)] = inst_5846__$1);

return statearr_5891;
})();
var statearr_5892_5954 = state_5874__$1;
(statearr_5892_5954[(2)] = null);

(statearr_5892_5954[(1)] = (2));


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
});})(c__2882__auto___5944))
;
return ((function (switch__2792__auto__,c__2882__auto___5944){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5893[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_5893[(1)] = (1));

return statearr_5893;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_5874){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5894){if((e5894 instanceof Object)){
var ex__2796__auto__ = e5894;
var statearr_5895_5955 = state_5874;
(statearr_5895_5955[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5956 = state_5874;
state_5874 = G__5956;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_5874){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_5874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5944))
})();
var state__2884__auto__ = (function (){var statearr_5896 = f__2883__auto__.call(null);
(statearr_5896[(6)] = c__2882__auto___5944);

return statearr_5896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5944))
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
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t5$main$main_$_iter__5897(s__5898){
return (new cljs.core.LazySeq(null,(function (){
var s__5898__$1 = s__5898;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5898__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__5898__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function app$t5$main$main_$_iter__5897_$_iter__5899(s__5900){
return (new cljs.core.LazySeq(null,((function (s__5898__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__5900__$1 = s__5900;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5900__$1);
if(temp__5457__auto____$1){
var s__5900__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5900__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5900__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5902 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5901 = (0);
while(true){
if((i__5901 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__5901);
cljs.core.chunk_append.call(null,b__5902,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__5957 = (i__5901 + (1));
i__5901 = G__5957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5902),app$t5$main$main_$_iter__5897_$_iter__5899.call(null,cljs.core.chunk_rest.call(null,s__5900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5902),null);
}
} else {
var y = cljs.core.first.call(null,s__5900__$2);
return cljs.core.cons.call(null,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__5897_$_iter__5899.call(null,cljs.core.rest.call(null,s__5900__$2)));
}
} else {
return null;
}
break;
}
});})(s__5898__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__5898__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t5.main.h)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t5$main$main_$_iter__5897.call(null,cljs.core.rest.call(null,s__5898__$1)));
} else {
var G__5958 = cljs.core.rest.call(null,s__5898__$1);
s__5898__$1 = G__5958;
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

var vec__5903 = cljs.core.map.call(null,(function (p1__5837_SHARP_){
return cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__5837_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__5903,(0),null);
var dir = cljs.core.nth.call(null,vec__5903,(1),null);
var pos = cljs.core.nth.call(null,vec__5903,(2),null);
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

return app.t5.main.drawShape.call(null,app.t5.main.p5,shape,pos);
} else {
return null;
}
});

setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5912){
var state_val_5913 = (state_5912[(1)]);
if((state_val_5913 === (1))){
var inst_5906 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5907 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_5908 = cljs.core.PersistentHashMap.fromArrays(inst_5906,inst_5907);
var state_5912__$1 = state_5912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5912__$1,(2),app.t5.main.evt,inst_5908);
} else {
if((state_val_5913 === (2))){
var inst_5910 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5912__$1,inst_5910);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5914 = [null,null,null,null,null,null,null];
(statearr_5914[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_5914[(1)] = (1));

return statearr_5914;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_5912){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5915){if((e5915 instanceof Object)){
var ex__2796__auto__ = e5915;
var statearr_5916_5959 = state_5912;
(statearr_5916_5959[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5960 = state_5912;
state_5912 = G__5960;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_5912){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_5912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5917 = f__2883__auto__.call(null);
(statearr_5917[(6)] = c__2882__auto__);

return statearr_5917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

app.t5.main.p5.keyPressed = (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5925){
var state_val_5926 = (state_5925[(1)]);
if((state_val_5926 === (1))){
var inst_5918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_5919 = app.t5.main.p5.key;
var inst_5920 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_5919];
var inst_5921 = cljs.core.PersistentHashMap.fromArrays(inst_5918,inst_5920);
var state_5925__$1 = state_5925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5925__$1,(2),app.t5.main.evt,inst_5921);
} else {
if((state_val_5926 === (2))){
var inst_5923 = (state_5925[(2)]);
var state_5925__$1 = state_5925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5925__$1,inst_5923);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5927 = [null,null,null,null,null,null,null];
(statearr_5927[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_5927[(1)] = (1));

return statearr_5927;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_5925){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5928){if((e5928 instanceof Object)){
var ex__2796__auto__ = e5928;
var statearr_5929_5961 = state_5925;
(statearr_5929_5961[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5962 = state_5925;
state_5925 = G__5962;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_5925){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_5925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5930 = f__2883__auto__.call(null);
(statearr_5930[(6)] = c__2882__auto__);

return statearr_5930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

return app.t5.main.p5.keyReleased = (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5938){
var state_val_5939 = (state_5938[(1)]);
if((state_val_5939 === (1))){
var inst_5931 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_5932 = app.t5.main.p5.key;
var inst_5933 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_5932];
var inst_5934 = cljs.core.PersistentHashMap.fromArrays(inst_5931,inst_5933);
var state_5938__$1 = state_5938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5938__$1,(2),app.t5.main.evt,inst_5934);
} else {
if((state_val_5939 === (2))){
var inst_5936 = (state_5938[(2)]);
var state_5938__$1 = state_5938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5938__$1,inst_5936);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5940 = [null,null,null,null,null,null,null];
(statearr_5940[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_5940[(1)] = (1));

return statearr_5940;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_5938){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5941){if((e5941 instanceof Object)){
var ex__2796__auto__ = e5941;
var statearr_5942_5963 = state_5938;
(statearr_5942_5963[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5964 = state_5938;
state_5938 = G__5964;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_5938){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_5938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5943 = f__2883__auto__.call(null);
(statearr_5943[(6)] = c__2882__auto__);

return statearr_5943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
});
app.t5.main.main.call(null);

//# sourceMappingURL=main.js.map
