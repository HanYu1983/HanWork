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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__14575){
var vec__14576 = p__14575;
var x = cljs.core.nth.call(null,vec__14576,(0),null);
var y = cljs.core.nth.call(null,vec__14576,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
}),s));
});
app.t5.main.rotate180 = (function app$t5$main$rotate180(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__14579){
var vec__14580 = p__14579;
var x = cljs.core.nth.call(null,vec__14580,(0),null);
var y = cljs.core.nth.call(null,vec__14580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null);
}),s));
});
app.t5.main.rotate = (function app$t5$main$rotate(type,dir,s){
var pred__14583 = cljs.core._EQ_;
var expr__14584 = type;
if(cljs.core.truth_(pred__14583.call(null,(0),expr__14584))){
return s;
} else {
if(cljs.core.truth_(pred__14583.call(null,(1),expr__14584))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,dir),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)))){
return app.t5.main.rotate90.call(null,s);
} else {
return s;

}
} else {
var pred__14586 = cljs.core._EQ_;
var expr__14587 = dir;
if(cljs.core.truth_(pred__14586.call(null,(0),expr__14587))){
return s;
} else {
if(cljs.core.truth_(pred__14586.call(null,(1),expr__14587))){
return app.t5.main.rotate180.call(null,app.t5.main.rotate90.call(null,s));
} else {
if(cljs.core.truth_(pred__14586.call(null,(2),expr__14587))){
return app.t5.main.rotate180.call(null,s);
} else {
if(cljs.core.truth_(pred__14586.call(null,(3),expr__14587))){
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
app.t5.main.pos2cr = (function app$t5$main$pos2cr(p__14589){
var vec__14590 = p__14589;
var x = cljs.core.nth.call(null,vec__14590,(0),null);
var y = cljs.core.nth.call(null,vec__14590,(1),null);
var pos = vec__14590;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x / app.t5.main.cellW) | (0)),(((y / app.t5.main.cellH) | (0)) + (1))], null);
});
app.t5.main.isCollide = (function app$t5$main$isCollide(ctx,shape){
return cljs.core.some.call(null,(function (p__14593){
var vec__14594 = p__14593;
var c = cljs.core.nth.call(null,vec__14594,(0),null);
var r = cljs.core.nth.call(null,vec__14594,(1),null);
return !(cljs.core._EQ_.call(null,app.t5.main.emptyCell,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null))));
}),shape);
});
app.t5.main.collide = (function app$t5$main$collide(ctx){
var vec__14598 = cljs.core.map.call(null,(function (p1__14597_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__14597_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__14598,(0),null);
var dir = cljs.core.nth.call(null,vec__14598,(1),null);
var pos = cljs.core.nth.call(null,vec__14598,(2),null);
var vec__14601 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__14601,(0),null);
var r = cljs.core.nth.call(null,vec__14601,(1),null);
var cr = vec__14601;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var shapeWithPos = cljs.core.map.call(null,((function (vec__14598,type,dir,pos,vec__14601,c,r,cr,shape){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__14598,type,dir,pos,vec__14601,c,r,cr,shape))
,shape);
var findEmpty = ((function (vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos){
return (function (shape__$1,or){
while(true){
if((or <= (0))){
return or;
} else {
var shapeWithPos__$1 = cljs.core.map.call(null,((function (shape__$1,or,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,or], null),s);
});})(shape__$1,or,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos))
,shape__$1);
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos__$1))){
return or;
} else {
var G__14608 = shape__$1;
var G__14609 = (or - (1));
shape__$1 = G__14608;
or = G__14609;
continue;
}
}
break;
}
});})(vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos))
;
if(cljs.core.not.call(null,app.t5.main.isCollide.call(null,ctx,shapeWithPos))){
return ctx;
} else {
var topR = findEmpty.call(null,shape,(r - (1)));
var fixedShape = cljs.core.map.call(null,((function (topR,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,topR], null),s);
});})(topR,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty))
,shape);
var applyFixedShape = ((function (topR,fixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.reduce.call(null,((function (topR,fixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$2,p__14604){
var vec__14605 = p__14604;
var c__$1 = cljs.core.nth.call(null,vec__14605,(0),null);
var r__$1 = cljs.core.nth.call(null,vec__14605,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,r__$1], null)))){
return ctx__$2;
} else {
return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r__$1,c__$1], null),cljs.core.constantly.call(null,type));
}
});})(topR,fixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty))
,ctx__$1,fixedShape);
});})(topR,fixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty))
;
var randomNext = ((function (topR,fixedShape,applyFixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),app.t5.main.spawnPos,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.rand_int.call(null,cljs.core.count.call(null,app.t5.main.shapes)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)], null));
});})(topR,fixedShape,applyFixedShape,vec__14598,type,dir,pos,vec__14601,c,r,cr,shape,shapeWithPos,findEmpty))
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
var pred__14614 = cljs.core._EQ_;
var expr__14615 = key;
if(cljs.core.truth_(pred__14614.call(null,"a",expr__14615))){
var vec__14617 = cljs.core.map.call(null,((function (pred__14614,expr__14615){
return (function (p1__14610_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__14610_SHARP_], null));
});})(pred__14614,expr__14615))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__14617,(0),null);
var dir = cljs.core.nth.call(null,vec__14617,(1),null);
var pos = cljs.core.nth.call(null,vec__14617,(2),null);
var vec__14620 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__14620,(0),null);
var r = cljs.core.nth.call(null,vec__14620,(1),null);
var cr = vec__14620;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__14617,type,dir,pos,vec__14620,c,r,cr,shape,nextCr,pred__14614,expr__14615){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__14617,type,dir,pos,vec__14620,c,r,cr,shape,nextCr,pred__14614,expr__14615))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t5.main.cellW),(0)], null)));
}
} else {
if(cljs.core.truth_(pred__14614.call(null,"d",expr__14615))){
var vec__14623 = cljs.core.map.call(null,((function (pred__14614,expr__14615){
return (function (p1__14611_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__14611_SHARP_], null));
});})(pred__14614,expr__14615))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__14623,(0),null);
var dir = cljs.core.nth.call(null,vec__14623,(1),null);
var pos = cljs.core.nth.call(null,vec__14623,(2),null);
var vec__14626 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__14626,(0),null);
var r = cljs.core.nth.call(null,vec__14626,(1),null);
var cr = vec__14626;
var shape = app.t5.main.rotate.call(null,type,dir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextCr = cljs.core.map.call(null,cljs.core._PLUS_,cr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var nextShape = cljs.core.map.call(null,((function (vec__14623,type,dir,pos,vec__14626,c,r,cr,shape,nextCr,pred__14614,expr__14615){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,nextCr,s);
});})(vec__14623,type,dir,pos,vec__14626,c,r,cr,shape,nextCr,pred__14614,expr__14615))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t5.main.cellW,(0)], null)));
}
} else {
if(cljs.core.truth_(pred__14614.call(null," ",expr__14615))){
var vec__14629 = cljs.core.map.call(null,((function (pred__14614,expr__14615){
return (function (p1__14612_SHARP_){
return cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__14612_SHARP_], null));
});})(pred__14614,expr__14615))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__14629,(0),null);
var dir = cljs.core.nth.call(null,vec__14629,(1),null);
var pos = cljs.core.nth.call(null,vec__14629,(2),null);
var vec__14632 = app.t5.main.pos2cr.call(null,pos);
var c = cljs.core.nth.call(null,vec__14632,(0),null);
var r = cljs.core.nth.call(null,vec__14632,(1),null);
var cr = vec__14632;
var nextDir = cljs.core.mod.call(null,(dir + (1)),(4));
var shape = app.t5.main.rotate.call(null,type,nextDir,cljs.core.get.call(null,app.t5.main.shapes,type));
var nextShape = cljs.core.map.call(null,((function (vec__14629,type,dir,pos,vec__14632,c,r,cr,nextDir,shape,pred__14614,expr__14615){
return (function (s){
return cljs.core.map.call(null,cljs.core._PLUS_,cr,s);
});})(vec__14629,type,dir,pos,vec__14632,c,r,cr,nextDir,shape,pred__14614,expr__14615))
,shape);
if(cljs.core.truth_(app.t5.main.isCollide.call(null,ctx,nextShape))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (vec__14629,type,dir,pos,vec__14632,c,r,cr,nextDir,shape,nextShape,pred__14614,expr__14615){
return (function (p1__14613_SHARP_){
return cljs.core.mod.call(null,(p1__14613_SHARP_ + (1)),(4));
});})(vec__14629,type,dir,pos,vec__14632,c,r,cr,nextDir,shape,nextShape,pred__14614,expr__14615))
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
app.t5.main.drawShape = (function app$t5$main$drawShape(p5,shape,p__14635){
var vec__14636 = p__14635;
var px = cljs.core.nth.call(null,vec__14636,(0),null);
var py = cljs.core.nth.call(null,vec__14636,(1),null);
var pos = vec__14636;
return cljs.core.dorun.call(null,(function (){var seq__14639 = cljs.core.seq.call(null,shape);
var chunk__14640 = null;
var count__14641 = (0);
var i__14642 = (0);
while(true){
if((i__14642 < count__14641)){
var s = cljs.core._nth.call(null,chunk__14640,i__14642);
var vec__14643_14649 = s;
var x_14650 = cljs.core.nth.call(null,vec__14643_14649,(0),null);
var y_14651 = cljs.core.nth.call(null,vec__14643_14649,(1),null);
p5.rect((px + (app.t5.main.cellW * x_14650)),(py + (app.t5.main.cellH * y_14651)),app.t5.main.cellW,app.t5.main.cellH);


var G__14652 = seq__14639;
var G__14653 = chunk__14640;
var G__14654 = count__14641;
var G__14655 = (i__14642 + (1));
seq__14639 = G__14652;
chunk__14640 = G__14653;
count__14641 = G__14654;
i__14642 = G__14655;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14639);
if(temp__5457__auto__){
var seq__14639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14639__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14639__$1);
var G__14656 = cljs.core.chunk_rest.call(null,seq__14639__$1);
var G__14657 = c__4319__auto__;
var G__14658 = cljs.core.count.call(null,c__4319__auto__);
var G__14659 = (0);
seq__14639 = G__14656;
chunk__14640 = G__14657;
count__14641 = G__14658;
i__14642 = G__14659;
continue;
} else {
var s = cljs.core.first.call(null,seq__14639__$1);
var vec__14646_14660 = s;
var x_14661 = cljs.core.nth.call(null,vec__14646_14660,(0),null);
var y_14662 = cljs.core.nth.call(null,vec__14646_14660,(1),null);
p5.rect((px + (app.t5.main.cellW * x_14661)),(py + (app.t5.main.cellH * y_14662)),app.t5.main.cellW,app.t5.main.cellH);


var G__14663 = cljs.core.next.call(null,seq__14639__$1);
var G__14664 = null;
var G__14665 = (0);
var G__14666 = (0);
seq__14639 = G__14663;
chunk__14640 = G__14664;
count__14641 = G__14665;
i__14642 = G__14666;
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
var pred__14667 = cljs.core._EQ_;
var expr__14668 = type;
if(cljs.core.truth_(pred__14667.call(null,(0),expr__14668))){
return p5.fill((255),(0),(0));
} else {
if(cljs.core.truth_(pred__14667.call(null,(1),expr__14668))){
return p5.fill((0),(255),(0));
} else {
if(cljs.core.truth_(pred__14667.call(null,(2),expr__14668))){
return p5.fill((0),(0),(255));
} else {
if(cljs.core.truth_(pred__14667.call(null,(3),expr__14668))){
return p5.fill((128),(128),(0));
} else {
if(cljs.core.truth_(pred__14667.call(null,(4),expr__14668))){
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

var c__2882__auto___14777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___14777){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___14777){
return (function (state_14707){
var state_val_14708 = (state_14707[(1)]);
if((state_val_14708 === (7))){
var inst_14703 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14709_14778 = state_14707__$1;
(statearr_14709_14778[(2)] = inst_14703);

(statearr_14709_14778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (1))){
var inst_14671 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"drop","drop",364481611)];
var inst_14672 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661)];
var inst_14673 = cljs.core.count.call(null,app.t5.main.shapes);
var inst_14674 = cljs.core.rand_int.call(null,inst_14673);
var inst_14675 = [app.t5.main.spawnPos,inst_14674,(0)];
var inst_14676 = cljs.core.PersistentHashMap.fromArrays(inst_14672,inst_14675);
var inst_14677 = [app.t5.main.cells,inst_14676];
var inst_14678 = cljs.core.PersistentHashMap.fromArrays(inst_14671,inst_14677);
var inst_14679 = inst_14678;
var state_14707__$1 = (function (){var statearr_14710 = state_14707;
(statearr_14710[(7)] = inst_14679);

return statearr_14710;
})();
var statearr_14711_14779 = state_14707__$1;
(statearr_14711_14779[(2)] = null);

(statearr_14711_14779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (4))){
var inst_14683 = (state_14707[(8)]);
var inst_14687 = (state_14707[(9)]);
var inst_14683__$1 = (state_14707[(2)]);
var inst_14687__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_14683__$1);
var inst_14688 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14687__$1);
var state_14707__$1 = (function (){var statearr_14712 = state_14707;
(statearr_14712[(8)] = inst_14683__$1);

(statearr_14712[(9)] = inst_14687__$1);

return statearr_14712;
})();
if(inst_14688){
var statearr_14713_14780 = state_14707__$1;
(statearr_14713_14780[(1)] = (5));

} else {
var statearr_14714_14781 = state_14707__$1;
(statearr_14714_14781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (6))){
var inst_14687 = (state_14707[(9)]);
var inst_14694 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_14687);
var state_14707__$1 = state_14707;
if(inst_14694){
var statearr_14715_14782 = state_14707__$1;
(statearr_14715_14782[(1)] = (8));

} else {
var statearr_14716_14783 = state_14707__$1;
(statearr_14716_14783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (3))){
var inst_14705 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14707__$1,inst_14705);
} else {
if((state_val_14708 === (2))){
var inst_14679 = (state_14707[(7)]);
var inst_14681 = app.t5.main.model = inst_14679;
var state_14707__$1 = (function (){var statearr_14718 = state_14707;
(statearr_14718[(10)] = inst_14681);

return statearr_14718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14707__$1,(4),app.t5.main.evt);
} else {
if((state_val_14708 === (9))){
var inst_14679 = (state_14707[(7)]);
var tmp14717 = inst_14679;
var inst_14679__$1 = tmp14717;
var state_14707__$1 = (function (){var statearr_14719 = state_14707;
(statearr_14719[(7)] = inst_14679__$1);

return statearr_14719;
})();
var statearr_14720_14784 = state_14707__$1;
(statearr_14720_14784[(2)] = null);

(statearr_14720_14784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (5))){
var inst_14683 = (state_14707[(8)]);
var inst_14679 = (state_14707[(7)]);
var inst_14690 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14683);
var inst_14691 = app.t5.main.handleInput.call(null,inst_14690,inst_14679);
var inst_14679__$1 = inst_14691;
var state_14707__$1 = (function (){var statearr_14721 = state_14707;
(statearr_14721[(7)] = inst_14679__$1);

return statearr_14721;
})();
var statearr_14722_14785 = state_14707__$1;
(statearr_14722_14785[(2)] = null);

(statearr_14722_14785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (10))){
var inst_14701 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14723_14786 = state_14707__$1;
(statearr_14723_14786[(2)] = inst_14701);

(statearr_14723_14786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (8))){
var inst_14679 = (state_14707[(7)]);
var inst_14696 = app.t5.main.update.call(null,inst_14679);
var inst_14679__$1 = inst_14696;
var state_14707__$1 = (function (){var statearr_14724 = state_14707;
(statearr_14724[(7)] = inst_14679__$1);

return statearr_14724;
})();
var statearr_14725_14787 = state_14707__$1;
(statearr_14725_14787[(2)] = null);

(statearr_14725_14787[(1)] = (2));


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
});})(c__2882__auto___14777))
;
return ((function (switch__2792__auto__,c__2882__auto___14777){
return (function() {
var app$t5$main$main_$_state_machine__2793__auto__ = null;
var app$t5$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_14726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14726[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_14726[(1)] = (1));

return statearr_14726;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_14707){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14727){if((e14727 instanceof Object)){
var ex__2796__auto__ = e14727;
var statearr_14728_14788 = state_14707;
(statearr_14728_14788[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14789 = state_14707;
state_14707 = G__14789;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_14707){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_14707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___14777))
})();
var state__2884__auto__ = (function (){var statearr_14729 = f__2883__auto__.call(null);
(statearr_14729[(6)] = c__2882__auto___14777);

return statearr_14729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___14777))
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
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t5$main$main_$_iter__14730(s__14731){
return (new cljs.core.LazySeq(null,(function (){
var s__14731__$1 = s__14731;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14731__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__14731__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function app$t5$main$main_$_iter__14730_$_iter__14732(s__14733){
return (new cljs.core.LazySeq(null,((function (s__14731__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__14733__$1 = s__14733;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14733__$1);
if(temp__5457__auto____$1){
var s__14733__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14733__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14733__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14735 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14734 = (0);
while(true){
if((i__14734 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__14734);
cljs.core.chunk_append.call(null,b__14735,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})());

var G__14790 = (i__14734 + (1));
i__14734 = G__14790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14735),app$t5$main$main_$_iter__14730_$_iter__14732.call(null,cljs.core.chunk_rest.call(null,s__14733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14735),null);
}
} else {
var y = cljs.core.first.call(null,s__14733__$2);
return cljs.core.cons.call(null,(function (){var type = cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
if((type > app.t5.main.emptyCell)){
app.t5.main.fillShapeColor.call(null,app.t5.main.p5,type);

app.t5.main.p5.stroke((0));

return app.t5.main.p5.rect((app.t5.main.cellW * x),(app.t5.main.cellH * y),app.t5.main.cellW,app.t5.main.cellH);
} else {
return null;
}
})(),app$t5$main$main_$_iter__14730_$_iter__14732.call(null,cljs.core.rest.call(null,s__14733__$2)));
}
} else {
return null;
}
break;
}
});})(s__14731__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__14731__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t5.main.h)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t5$main$main_$_iter__14730.call(null,cljs.core.rest.call(null,s__14731__$1)));
} else {
var G__14791 = cljs.core.rest.call(null,s__14731__$1);
s__14731__$1 = G__14791;
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

var vec__14736 = cljs.core.map.call(null,(function (p1__14670_SHARP_){
return cljs.core.get_in.call(null,app.t5.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),p1__14670_SHARP_], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var type = cljs.core.nth.call(null,vec__14736,(0),null);
var dir = cljs.core.nth.call(null,vec__14736,(1),null);
var pos = cljs.core.nth.call(null,vec__14736,(2),null);
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
return (function (state_14745){
var state_val_14746 = (state_14745[(1)]);
if((state_val_14746 === (1))){
var inst_14739 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_14740 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_14741 = cljs.core.PersistentHashMap.fromArrays(inst_14739,inst_14740);
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14745__$1,(2),app.t5.main.evt,inst_14741);
} else {
if((state_val_14746 === (2))){
var inst_14743 = (state_14745[(2)]);
var state_14745__$1 = state_14745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14745__$1,inst_14743);
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
var statearr_14747 = [null,null,null,null,null,null,null];
(statearr_14747[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_14747[(1)] = (1));

return statearr_14747;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_14745){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14748){if((e14748 instanceof Object)){
var ex__2796__auto__ = e14748;
var statearr_14749_14792 = state_14745;
(statearr_14749_14792[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14793 = state_14745;
state_14745 = G__14793;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_14745){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_14745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14750 = f__2883__auto__.call(null);
(statearr_14750[(6)] = c__2882__auto__);

return statearr_14750;
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
return (function (state_14758){
var state_val_14759 = (state_14758[(1)]);
if((state_val_14759 === (1))){
var inst_14751 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14752 = app.t5.main.p5.key;
var inst_14753 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14752];
var inst_14754 = cljs.core.PersistentHashMap.fromArrays(inst_14751,inst_14753);
var state_14758__$1 = state_14758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14758__$1,(2),app.t5.main.evt,inst_14754);
} else {
if((state_val_14759 === (2))){
var inst_14756 = (state_14758[(2)]);
var state_14758__$1 = state_14758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14758__$1,inst_14756);
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
var statearr_14760 = [null,null,null,null,null,null,null];
(statearr_14760[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_14760[(1)] = (1));

return statearr_14760;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_14758){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14761){if((e14761 instanceof Object)){
var ex__2796__auto__ = e14761;
var statearr_14762_14794 = state_14758;
(statearr_14762_14794[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14795 = state_14758;
state_14758 = G__14795;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_14758){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_14758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14763 = f__2883__auto__.call(null);
(statearr_14763[(6)] = c__2882__auto__);

return statearr_14763;
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
return (function (state_14771){
var state_val_14772 = (state_14771[(1)]);
if((state_val_14772 === (1))){
var inst_14764 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14765 = app.t5.main.p5.key;
var inst_14766 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_14765];
var inst_14767 = cljs.core.PersistentHashMap.fromArrays(inst_14764,inst_14766);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14771__$1,(2),app.t5.main.evt,inst_14767);
} else {
if((state_val_14772 === (2))){
var inst_14769 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14771__$1,inst_14769);
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
var statearr_14773 = [null,null,null,null,null,null,null];
(statearr_14773[(0)] = app$t5$main$main_$_state_machine__2793__auto__);

(statearr_14773[(1)] = (1));

return statearr_14773;
});
var app$t5$main$main_$_state_machine__2793__auto____1 = (function (state_14771){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14774){if((e14774 instanceof Object)){
var ex__2796__auto__ = e14774;
var statearr_14775_14796 = state_14771;
(statearr_14775_14796[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14797 = state_14771;
state_14771 = G__14797;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t5$main$main_$_state_machine__2793__auto__ = function(state_14771){
switch(arguments.length){
case 0:
return app$t5$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t5$main$main_$_state_machine__2793__auto____1.call(this,state_14771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t5$main$main_$_state_machine__2793__auto____0;
app$t5$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t5$main$main_$_state_machine__2793__auto____1;
return app$t5$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14776 = f__2883__auto__.call(null);
(statearr_14776[(6)] = c__2882__auto__);

return statearr_14776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
});
app.t5.main.main.call(null);

//# sourceMappingURL=main.js.map
