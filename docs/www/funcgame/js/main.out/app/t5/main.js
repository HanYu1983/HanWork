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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__7699){
var vec__7700 = p__7699;
var x = cljs.core.nth.call(null,vec__7700,(0),null);
var y = cljs.core.nth.call(null,vec__7700,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__7703){
var vec__7704 = p__7703;
var x = cljs.core.nth.call(null,vec__7704,(0),null);
var y = cljs.core.nth.call(null,vec__7704,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__7707 = cljs.core._EQ_;
var expr__7708 = type;
if(cljs.core.truth_(pred__7707.call(null,(0),expr__7708))){
return s;
} else {
if(cljs.core.truth_(pred__7707.call(null,(1),expr__7708))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90.call(null,s);
} else {
return s;

}
} else {
var pred__7710 = cljs.core._EQ_;
var expr__7711 = dir;
if(cljs.core.truth_(pred__7710.call(null,(0),expr__7711))){
return s;
} else {
if(cljs.core.truth_(pred__7710.call(null,(1),expr__7711))){
return app.t5.main.rotate180.call(null,app.t5.main.rotate90.call(null,s));
} else {
if(cljs.core.truth_(pred__7710.call(null,(2),expr__7711))){
return app.t5.main.rotate180.call(null,s);
} else {
if(cljs.core.truth_(pred__7710.call(null,(3),expr__7711))){
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
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__7713){
var vec__7714 = p__7713;
var x = cljs.core.nth.call(null,vec__7714,(0),null);
var y = cljs.core.nth.call(null,vec__7714,(1),null);
var pos = vec__7714;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some.call(null,(function (p__7717){
var vec__7718 = p__7717;
var c = cljs.core.nth.call(null,vec__7718,(0),null);
var r = cljs.core.nth.call(null,vec__7718,(1),null);
return !(cljs.core._EQ_.call(null,app.t5.main.emptyCell,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__7722 = cljs.core.map.call(null,(function (p1__7721_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__7721_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__7722,(0),null);
var dir = cljs.core.nth.call(null,vec__7722,(1),null);
var pos = cljs.core.nth.call(null,vec__7722,(2),null);
var vec__7725 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__7725,(0),null);
var r = cljs.core.nth.call(null,vec__7725,(1),null);
var cr = vec__7725;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.call(null,((function (vec__7722,type,dir,pos,vec__7725,c,r,cr,shape){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__7722,type,dir,pos,vec__7725,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.call(null,((function (shape__$1,or,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos__$1))){
return or;
} else {
var G__7732 = shape__$1;
var G__7733 = (or - (1));
shape__$1 = G__7732;
or = G__7733;
continue;
}
}
break;
}
});})(vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty.call(null,shape,(r - (1)));
var fixedShape = cljs.core.map.call(null,((function (topR,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.call(null,((function (topR,fixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__7728){
var vec__7729 = p__7728;
var c__$1 = cljs.core.nth.call(null,vec__7729,(0),null);
var r__$1 = cljs.core.nth.call(null,vec__7729,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly.call(null,type));
}
});})(topR,fixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int.call(null,cljs.core.count.call(null,app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null));
});})(topR,fixedShape,applyFixedShape,vec__7722,type,dir,pos,vec__7725,c,r,cr,shape,shapeWithPos,findEmpty))
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
var pred__7738 = cljs.core._EQ_;
var expr__7739 = key;
if(cljs.core.truth_(pred__7738.call(null,"a",expr__7739))){
var vec__7741 = cljs.core.map.call(null,((function (pred__7738,expr__7739){
return (function (p1__7734_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__7734_SHARP_], null));
});})(pred__7738,expr__7739))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__7741,(0),null);
var dir = cljs.core.nth.call(null,vec__7741,(1),null);
var pos = cljs.core.nth.call(null,vec__7741,(2),null);
var vec__7744 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__7744,(0),null);
var r = cljs.core.nth.call(null,vec__7744,(1),null);
var cr = vec__7744;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__7741,type,dir,pos,vec__7744,c,r,cr,shape,nextCr,pred__7738,expr__7739){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__7741,type,dir,pos,vec__7744,c,r,cr,shape,nextCr,pred__7738,expr__7739))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_(pred__7738.call(null,"d",expr__7739))){
var vec__7747 = cljs.core.map.call(null,((function (pred__7738,expr__7739){
return (function (p1__7735_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__7735_SHARP_], null));
});})(pred__7738,expr__7739))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__7747,(0),null);
var dir = cljs.core.nth.call(null,vec__7747,(1),null);
var pos = cljs.core.nth.call(null,vec__7747,(2),null);
var vec__7750 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__7750,(0),null);
var r = cljs.core.nth.call(null,vec__7750,(1),null);
var cr = vec__7750;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__7747,type,dir,pos,vec__7750,c,r,cr,shape,nextCr,pred__7738,expr__7739){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__7747,type,dir,pos,vec__7750,c,r,cr,shape,nextCr,pred__7738,expr__7739))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_(pred__7738.call(null," ",expr__7739))){
var vec__7753 = cljs.core.map.call(null,((function (pred__7738,expr__7739){
return (function (p1__7736_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__7736_SHARP_], null));
});})(pred__7738,expr__7739))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__7753,(0),null);
var dir = cljs.core.nth.call(null,vec__7753,(1),null);
var pos = cljs.core.nth.call(null,vec__7753,(2),null);
var vec__7756 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__7756,(0),null);
var r = cljs.core.nth.call(null,vec__7756,(1),null);
var cr = vec__7756;
var nextDir = cljs.core.mod.call(null,(dir + (1)),(4));
var shape = app.t5.main.rotate.call(null,type,nextDir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextShape = cljs.core.map.call(null,((function (vec__7753,type,dir,pos,vec__7756,c,r,cr,nextDir,shape,pred__7738,expr__7739){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__7753,type,dir,pos,vec__7756,c,r,cr,nextDir,shape,pred__7738,expr__7739))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__7753,type,dir,pos,vec__7756,c,r,cr,nextDir,shape,nextShape,pred__7738,expr__7739){
return (function (p1__7737_SHARP_){
return cljs.core.mod.call(null,(p1__7737_SHARP_ + (1)),(4));
});})(vec__7753,type,dir,pos,vec__7756,c,r,cr,nextDir,shape,nextShape,pred__7738,expr__7739))
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
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__7759){
var vec__7760 = p__7759;
var px = cljs.core.nth.call(null,vec__7760,(0),null);
var py = cljs.core.nth.call(null,vec__7760,(1),null);
var pos = vec__7760;
return cljs.core.dorun.call(null,(function (){var seq__7763 = cljs.core.seq.call(null,shape);
var chunk__7764 = null;
var count__7765 = (0);
var i__7766 = (0);
while(true){
if((i__7766 < count__7765)){
var s = cljs.core._nth.call(null,chunk__7764,i__7766);
var vec__7767_7773 = s;
var x_7774 = cljs.core.nth.call(null,vec__7767_7773,(0),null);
var y_7775 = cljs.core.nth.call(null,vec__7767_7773,(1),null);
p5.rect((px + (app.t5.main.cellW * x_7774)),(py + (app.t5.main.cellH * y_7775)),app.t5.main.cellW,app.t5.main.cellH);


var G__7776 = seq__7763;
var G__7777 = chunk__7764;
var G__7778 = count__7765;
var G__7779 = (i__7766 + (1));
seq__7763 = G__7776;
chunk__7764 = G__7777;
count__7765 = G__7778;
i__7766 = G__7779;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__7763);
if(temp__5457__auto__){
var seq__7763__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7763__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__7763__$1);
var G__7780 = cljs.core.chunk_rest.call(null,seq__7763__$1);
var G__7781 = c__4319__auto__;
var G__7782 = cljs.core.count.call(null,c__4319__auto__);
var G__7783 = (0);
seq__7763 = G__7780;
chunk__7764 = G__7781;
count__7765 = G__7782;
i__7766 = G__7783;
continue;
} else {
var s = cljs.core.first.call(null,seq__7763__$1);
var vec__7770_7784 = s;
var x_7785 = cljs.core.nth.call(null,vec__7770_7784,(0),null);
var y_7786 = cljs.core.nth.call(null,vec__7770_7784,(1),null);
p5.rect((px + (app.t5.main.cellW * x_7785)),(py + (app.t5.main.cellH * y_7786)),app.t5.main.cellW,app.t5.main.cellH);


var G__7787 = cljs.core.next.call(null,seq__7763__$1);
var G__7788 = null;
var G__7789 = (0);
var G__7790 = (0);
seq__7763 = G__7787;
chunk__7764 = G__7788;
count__7765 = G__7789;
i__7766 = G__7790;
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
var pred__7791 = cljs.core._EQ_;
var expr__7792 = type;
if(cljs.core.truth_(pred__7791.call(null,(0),expr__7792))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_(pred__7791.call(null,(1),expr__7792))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_(pred__7791.call(null,(2),expr__7792))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_(pred__7791.call(null,(3),expr__7792))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_(pred__7791.call(null,(4),expr__7792))){
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

var c__2882__auto___7901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7901){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7901){
return (function (state_7831){
var state_val_7832 = (state_7831[(1)]);
if((state_val_7832 === (7))){
var inst_7827 = (state_7831[(2)]);
var state_7831__$1 = state_7831;
var statearr_7833_7902 = state_7831__$1;
(statearr_7833_7902[(2)] = inst_7827);

(statearr_7833_7902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (1))){
var inst_7795 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_7796 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_7797 = cljs.core.count.call(null,app.t5.main.shapes);
var inst_7798 = cljs.core.rand_int.call(null,inst_7797);
var inst_7799 = [app.t5.main.spawnPos,inst_7798,(0)];
var inst_7800 = cljs.core.PersistentHashMap.fromArrays(inst_7796,inst_7799);
var inst_7801 = [app.t5.main.cells,inst_7800];
var inst_7802 = cljs.core.PersistentHashMap.fromArrays(inst_7795,inst_7801);
var inst_7803 = inst_7802;
var state_7831__$1 = (function (){var statearr_7834 = state_7831;
(statearr_7834[(7)] = inst_7803);

return statearr_7834;
})();
var statearr_7835_7903 = state_7831__$1;
(statearr_7835_7903[(2)] = null);

(statearr_7835_7903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (4))){
var inst_7807 = (state_7831[(8)]);
var inst_7811 = (state_7831[(9)]);
var inst_7807__$1 = (state_7831[(2)]);
var inst_7811__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_7807__$1);
var inst_7812 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_7811__$1);
var state_7831__$1 = (function (){var statearr_7836 = state_7831;
(statearr_7836[(8)] = inst_7807__$1);

(statearr_7836[(9)] = inst_7811__$1);

return statearr_7836;
})();
if(inst_7812){
var statearr_7837_7904 = state_7831__$1;
(statearr_7837_7904[(1)] = (5));

} else {
var statearr_7838_7905 = state_7831__$1;
(statearr_7838_7905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (6))){
var inst_7811 = (state_7831[(9)]);
var inst_7818 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_7811);
var state_7831__$1 = state_7831;
if(inst_7818){
var statearr_7839_7906 = state_7831__$1;
(statearr_7839_7906[(1)] = (8));

} else {
var statearr_7840_7907 = state_7831__$1;
(statearr_7840_7907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (3))){
var inst_7829 = (state_7831[(2)]);
var state_7831__$1 = state_7831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7831__$1,inst_7829);
} else {
if((state_val_7832 === (2))){
var inst_7803 = (state_7831[(7)]);
var inst_7805 = app.t5.main.model = inst_7803;
var state_7831__$1 = (function (){var statearr_7842 = state_7831;
(statearr_7842[(10)] = inst_7805);

return statearr_7842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7831__$1,(4),app.t5.main.evt);
} else {
if((state_val_7832 === (9))){
var inst_7803 = (state_7831[(7)]);
var tmp7841 = inst_7803;
var inst_7803__$1 = tmp7841;
var state_7831__$1 = (function (){var statearr_7843 = state_7831;
(statearr_7843[(7)] = inst_7803__$1);

return statearr_7843;
})();
var statearr_7844_7908 = state_7831__$1;
(statearr_7844_7908[(2)] = null);

(statearr_7844_7908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (5))){
var inst_7807 = (state_7831[(8)]);
var inst_7803 = (state_7831[(7)]);
var inst_7814 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_7807);
var inst_7815 = app.t5.main.handleInput.call(null,inst_7814,inst_7803);
var inst_7803__$1 = inst_7815;
var state_7831__$1 = (function (){var statearr_7845 = state_7831;
(statearr_7845[(7)] = inst_7803__$1);

return statearr_7845;
})();
var statearr_7846_7909 = state_7831__$1;
(statearr_7846_7909[(2)] = null);

(statearr_7846_7909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (10))){
var inst_7825 = (state_7831[(2)]);
var state_7831__$1 = state_7831;
var statearr_7847_7910 = state_7831__$1;
(statearr_7847_7910[(2)] = inst_7825);

(statearr_7847_7910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7832 === (8))){
var inst_7803 = (state_7831[(7)]);
var inst_7820 = app.t5.main.update.call(null,inst_7803);
var inst_7803__$1 = inst_7820;
var state_7831__$1 = (function (){var statearr_7848 = state_7831;
(statearr_7848[(7)] = inst_7803__$1);

return statearr_7848;
})();
var statearr_7849_7911 = state_7831__$1;
(statearr_7849_7911[(2)] = null);

(statearr_7849_7911[(1)] = (2));


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
});})(c__2882__auto___7901))
;
return ((function (switch__2792__auto__,c__2882__auto___7901){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_7850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7850[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_7850[(1)] = (1));

return statearr_7850;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_7831){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7851){if((e7851 instanceof Object)){
var ex__2796__auto__ = e7851;
var statearr_7852_7912 = state_7831;
(statearr_7852_7912[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7913 = state_7831;
state_7831 = G__7913;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_7831){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_7831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7901))
})();
var state__2884__auto__ = (function (){var statearr_7853 = f__2883__auto__.call(null);
(statearr_7853[(6)] = c__2882__auto___7901);

return statearr_7853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7901))
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
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t5$main$main_$_iter__7854(s__7855){
return (new cljs.core.LazySeq(null,(function (){
var s__7855__$1 = s__7855;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__7855__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__7855__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function app$t5$main$main_$_iter__7854_$_iter__7856(s__7857){
return (new cljs.core.LazySeq(null,((function (s__7855__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__7857__$1 = s__7857;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__7857__$1);
if(temp__5457__auto____$1){
var s__7857__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7857__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__7857__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__7859 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__7858 = (0);
while(true){
if((i__7858 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__7858);
cljs.core.chunk_append.call(null,b__7859,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__7914 = (i__7858 + (1));
i__7858 = G__7914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7859),app$t5$main$main_$_iter__7854_$_iter__7856.call(null,cljs.core.chunk_rest.call(null,s__7857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7859),null);
}
} else {
var y = cljs.core.first.call(null,s__7857__$2);
return cljs.core.cons.call(null,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__7854_$_iter__7856.call(null,cljs.core.rest.call(null,s__7857__$2)));
}
} else {
return null;
}
break;
}
});})(s__7855__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__7855__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t5.main.h)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t5$main$main_$_iter__7854.call(null,cljs.core.rest.call(null,s__7855__$1)));
} else {
var G__7915 = cljs.core.rest.call(null,s__7855__$1);
s__7855__$1 = G__7915;
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

var vec__7860 = cljs.core.map.call(null,(function (p1__7794_SHARP_){
return cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__7794_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__7860,(0),null);
var dir = cljs.core.nth.call(null,vec__7860,(1),null);
var pos = cljs.core.nth.call(null,vec__7860,(2),null);
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
return (function (state_7869){
var state_val_7870 = (state_7869[(1)]);
if((state_val_7870 === (1))){
var inst_7863 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_7864 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_7865 = cljs.core.PersistentHashMap.fromArrays(inst_7863,inst_7864);
var state_7869__$1 = state_7869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7869__$1,(2),app.t5.main.evt,inst_7865);
} else {
if((state_val_7870 === (2))){
var inst_7867 = (state_7869[(2)]);
var state_7869__$1 = state_7869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7869__$1,inst_7867);
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
var statearr_7871 = [null,null,null,null,null,null,null];
(statearr_7871[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_7871[(1)] = (1));

return statearr_7871;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_7869){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7872){if((e7872 instanceof Object)){
var ex__2796__auto__ = e7872;
var statearr_7873_7916 = state_7869;
(statearr_7873_7916[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7917 = state_7869;
state_7869 = G__7917;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_7869){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_7869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7874 = f__2883__auto__.call(null);
(statearr_7874[(6)] = c__2882__auto__);

return statearr_7874;
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
return (function (state_7882){
var state_val_7883 = (state_7882[(1)]);
if((state_val_7883 === (1))){
var inst_7875 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_7876 = app.t5.main.p5.key;
var inst_7877 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_7876];
var inst_7878 = cljs.core.PersistentHashMap.fromArrays(inst_7875,inst_7877);
var state_7882__$1 = state_7882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7882__$1,(2),app.t5.main.evt,inst_7878);
} else {
if((state_val_7883 === (2))){
var inst_7880 = (state_7882[(2)]);
var state_7882__$1 = state_7882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7882__$1,inst_7880);
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
var statearr_7884 = [null,null,null,null,null,null,null];
(statearr_7884[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_7884[(1)] = (1));

return statearr_7884;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_7882){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7885){if((e7885 instanceof Object)){
var ex__2796__auto__ = e7885;
var statearr_7886_7918 = state_7882;
(statearr_7886_7918[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7919 = state_7882;
state_7882 = G__7919;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_7882){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_7882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7887 = f__2883__auto__.call(null);
(statearr_7887[(6)] = c__2882__auto__);

return statearr_7887;
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
return (function (state_7895){
var state_val_7896 = (state_7895[(1)]);
if((state_val_7896 === (1))){
var inst_7888 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_7889 = app.t5.main.p5.key;
var inst_7890 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_7889];
var inst_7891 = cljs.core.PersistentHashMap.fromArrays(inst_7888,inst_7890);
var state_7895__$1 = state_7895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7895__$1,(2),app.t5.main.evt,inst_7891);
} else {
if((state_val_7896 === (2))){
var inst_7893 = (state_7895[(2)]);
var state_7895__$1 = state_7895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7895__$1,inst_7893);
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
var statearr_7897 = [null,null,null,null,null,null,null];
(statearr_7897[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_7897[(1)] = (1));

return statearr_7897;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_7895){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7898){if((e7898 instanceof Object)){
var ex__2796__auto__ = e7898;
var statearr_7899_7920 = state_7895;
(statearr_7899_7920[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7921 = state_7895;
state_7895 = G__7921;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_7895){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_7895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7900 = f__2883__auto__.call(null);
(statearr_7900[(6)] = c__2882__auto__);

return statearr_7900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
});
app.t5.main.main.call(null);

//# sourceMappingURL=main.js.map
