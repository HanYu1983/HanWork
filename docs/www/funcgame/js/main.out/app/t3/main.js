// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t3.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
app.t3.main.cw = (600);
app.t3.main.ch = (400);
app.t3.main.spd = (app.t3.main.ch / (50));
app.t3.main.bltspd = (app.t3.main.ch / (25));
app.t3.main.thrustSpd = (1);
app.t3.main.p5 = window;
app.t3.main.updatePlayerInput = (function app$t3$main$updatePlayerInput(ctx){
return cljs.core.reduce.call(null,(function (ctx__$1,key){
if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256).cljs$core$IFn$_invoke$arity$1(ctx__$1),key))){
return ctx__$1;
} else {
var pred__16666 = cljs.core._EQ_;
var expr__16667 = key;
if(cljs.core.truth_(pred__16666.call(null,"w",expr__16667))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__16666.call(null,"s",expr__16667))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__16666.call(null,"a",expr__16667))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__16666.call(null,"d",expr__16667))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__16666.call(null,"j",expr__16667))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__16666,expr__16667){
return (function (p1__16665_SHARP_){
return cljs.core.conj.call(null,p1__16665_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__16666,expr__16667))
);
} else {
return ctx__$1;
}
}
}
}
}
}
}),ctx,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d","j"], null));
});
app.t3.main.updatePlayerThrust = (function app$t3$main$updatePlayerThrust(ctx){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.thrustSpd,(0)], null)));
});
app.t3.main.updateKey = (function app$t3$main$updateKey(ctx){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),clojure.set.difference.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),cljs.core.PersistentHashSet.EMPTY], null));
});
app.t3.main.updateCamera = (function app$t3$main$updateCamera(ctx){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.thrustSpd,(0)], null)));
});
app.t3.main.updateVelocity = (function app$t3$main$updateVelocity(entity){
if(!(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)))){
return entity;
} else {
return cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(entity)));
}
});
app.t3.main.updateEntities = (function app$t3$main$updateEntities(ctx){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.map.call(null,app.t3.main.updateVelocity,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx))], null));
});
app.t3.main.removeEntityIfOutOfBound = (function app$t3$main$removeEntityIfOutOfBound(ctx){
var vec__16669 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__16669,(0),null);
var _ = cljs.core.nth.call(null,vec__16669,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__16669,cx,_,entities){
return (function (p__16672){
var map__16673 = p__16672;
var map__16673__$1 = ((((!((map__16673 == null)))?(((((map__16673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16673):map__16673);
var entity = map__16673__$1;
var vec__16674 = cljs.core.get.call(null,map__16673__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__16674,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16674,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__16669,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__16679 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__16679,(0),null);
var _ = cljs.core.nth.call(null,vec__16679,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__16679,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__16682(s__16683){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__16679,cx,_,c){
return (function (){
var s__16683__$1 = s__16683;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16683__$1);
if(temp__5457__auto__){
var s__16683__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16683__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16683__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16685 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16684 = (0);
while(true){
if((i__16684 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__16684);
cljs.core.chunk_append.call(null,b__16685,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__16690 = (i__16684 + (1));
i__16684 = G__16690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16685),app$t3$main$spawnEnemy_$_iter__16682.call(null,cljs.core.chunk_rest.call(null,s__16683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16685),null);
}
} else {
var r = cljs.core.first.call(null,s__16683__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__16682.call(null,cljs.core.rest.call(null,s__16683__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__16679,cx,_,c))
,null,null));
});})(spawnPos,vec__16679,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__16679,cx,_,c,rcs){
return (function (p1__16678_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__16678_SHARP_,(2)));
});})(spawnPos,vec__16679,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__16679,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__16686){
var vec__16687 = p__16686;
var r = cljs.core.nth.call(null,vec__16687,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__16687,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__16679,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__16691_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16691_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__16692_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16692_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__16694(s__16695){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__16695__$1 = s__16695;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16695__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__16695__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__16694_$_iter__16696(s__16697){
return (new cljs.core.LazySeq(null,((function (s__16695__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__16697__$1 = s__16697;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16697__$1);
if(temp__5457__auto____$1){
var s__16697__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16697__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16697__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16699 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16698 = (0);
while(true){
if((i__16698 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__16698);
cljs.core.chunk_append.call(null,b__16699,(function (){var vec__16700 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__16700,(0),null);
var by = cljs.core.nth.call(null,vec__16700,(1),null);
var vec__16703 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__16703,(0),null);
var ey = cljs.core.nth.call(null,vec__16703,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__16716 = (i__16698 + (1));
i__16698 = G__16716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16699),app$t3$main$checkCollide_$_iter__16694_$_iter__16696.call(null,cljs.core.chunk_rest.call(null,s__16697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16699),null);
}
} else {
var e = cljs.core.first.call(null,s__16697__$2);
return cljs.core.cons.call(null,(function (){var vec__16706 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__16706,(0),null);
var by = cljs.core.nth.call(null,vec__16706,(1),null);
var vec__16709 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__16709,(0),null);
var ey = cljs.core.nth.call(null,vec__16709,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__16694_$_iter__16696.call(null,cljs.core.rest.call(null,s__16697__$2)));
}
} else {
return null;
}
break;
}
});})(s__16695__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__16695__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__16694.call(null,cljs.core.rest.call(null,s__16695__$1)));
} else {
var G__16717 = cljs.core.rest.call(null,s__16695__$1);
s__16695__$1 = G__16717;
continue;
}
} else {
return null;
}
break;
}
});})(playerBullets,enemies))
,null,null));
});})(playerBullets,enemies))
;
return iter__4292__auto__.call(null,playerBullets);
})();
var collide = cljs.core.filter.call(null,((function (playerBullets,enemies,check){
return (function (p__16712){
var vec__16713 = p__16712;
var _ = cljs.core.nth.call(null,vec__16713,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16713,(1),null);
var isCollide = cljs.core.nth.call(null,vec__16713,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__16693_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__16693_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__16718,camera,pos){
var map__16719 = p__16718;
var map__16719__$1 = ((((!((map__16719 == null)))?(((((map__16719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16719):map__16719);
var view = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"view","view",1247994814));
return cljs.core.map.call(null,cljs.core._PLUS_,view,cljs.core.map.call(null,cljs.core._,pos,camera));
});
app.t3.main.main = (function app$t3$main$main(){
app.t3.main.model = null;

app.t3.main.evt = cljs.core.async.chan.call(null);

setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_16727){
var state_val_16728 = (state_16727[(1)]);
if((state_val_16728 === (1))){
var inst_16721 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_16722 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_16723 = cljs.core.PersistentHashMap.fromArrays(inst_16721,inst_16722);
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16727__$1,(2),app.t3.main.evt,inst_16723);
} else {
if((state_val_16728 === (2))){
var inst_16725 = (state_16727[(2)]);
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16727__$1,inst_16725);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16729 = [null,null,null,null,null,null,null];
(statearr_16729[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_16729[(1)] = (1));

return statearr_16729;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_16727){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16730){if((e16730 instanceof Object)){
var ex__2796__auto__ = e16730;
var statearr_16731_16873 = state_16727;
(statearr_16731_16873[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16874 = state_16727;
state_16727 = G__16874;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_16727){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_16727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_16732 = f__2883__auto__.call(null);
(statearr_16732[(6)] = c__2882__auto__);

return statearr_16732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___16875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___16875){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___16875){
return (function (state_16807){
var state_val_16808 = (state_16807[(1)]);
if((state_val_16808 === (7))){
var inst_16803 = (state_16807[(2)]);
var state_16807__$1 = state_16807;
var statearr_16809_16876 = state_16807__$1;
(statearr_16809_16876[(2)] = inst_16803);

(statearr_16809_16876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (1))){
var inst_16733 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_16734 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_16735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16736 = [(0),(0)];
var inst_16737 = (new cljs.core.PersistentVector(null,2,(5),inst_16735,inst_16736,null));
var inst_16738 = [inst_16737];
var inst_16739 = cljs.core.PersistentHashMap.fromArrays(inst_16734,inst_16738);
var inst_16740 = cljs.core.PersistentHashSet.EMPTY;
var inst_16741 = cljs.core.PersistentHashSet.EMPTY;
var inst_16742 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_16743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16744 = [(0),(0)];
var inst_16745 = (new cljs.core.PersistentVector(null,2,(5),inst_16743,inst_16744,null));
var inst_16746 = [inst_16745];
var inst_16747 = cljs.core.PersistentHashMap.fromArrays(inst_16742,inst_16746);
var inst_16748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16749 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_16750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16751 = [(100),(0)];
var inst_16752 = (new cljs.core.PersistentVector(null,2,(5),inst_16750,inst_16751,null));
var inst_16753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16754 = [(0),(-1)];
var inst_16755 = (new cljs.core.PersistentVector(null,2,(5),inst_16753,inst_16754,null));
var inst_16756 = [inst_16752,inst_16755];
var inst_16757 = cljs.core.PersistentHashMap.fromArrays(inst_16749,inst_16756);
var inst_16758 = [inst_16757];
var inst_16759 = (new cljs.core.PersistentVector(null,1,(5),inst_16748,inst_16758,null));
var inst_16760 = cljs.core.PersistentHashSet.EMPTY;
var inst_16761 = [inst_16739,inst_16740,inst_16741,inst_16747,inst_16759,inst_16760];
var inst_16762 = cljs.core.PersistentHashMap.fromArrays(inst_16733,inst_16761);
var inst_16763 = inst_16762;
var state_16807__$1 = (function (){var statearr_16810 = state_16807;
(statearr_16810[(7)] = inst_16763);

return statearr_16810;
})();
var statearr_16811_16877 = state_16807__$1;
(statearr_16811_16877[(2)] = null);

(statearr_16811_16877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (4))){
var inst_16767 = (state_16807[(8)]);
var inst_16771 = (state_16807[(9)]);
var inst_16767__$1 = (state_16807[(2)]);
var inst_16771__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_16767__$1);
var inst_16772 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_16771__$1);
var state_16807__$1 = (function (){var statearr_16812 = state_16807;
(statearr_16812[(8)] = inst_16767__$1);

(statearr_16812[(9)] = inst_16771__$1);

return statearr_16812;
})();
if(inst_16772){
var statearr_16813_16878 = state_16807__$1;
(statearr_16813_16878[(1)] = (5));

} else {
var statearr_16814_16879 = state_16807__$1;
(statearr_16814_16879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (13))){
var inst_16796 = (state_16807[(2)]);
var state_16807__$1 = state_16807;
var statearr_16815_16880 = state_16807__$1;
(statearr_16815_16880[(2)] = inst_16796);

(statearr_16815_16880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (6))){
var inst_16771 = (state_16807[(9)]);
var inst_16781 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_16771);
var state_16807__$1 = state_16807;
if(inst_16781){
var statearr_16816_16881 = state_16807__$1;
(statearr_16816_16881[(1)] = (8));

} else {
var statearr_16817_16882 = state_16807__$1;
(statearr_16817_16882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (3))){
var inst_16805 = (state_16807[(2)]);
var state_16807__$1 = state_16807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16807__$1,inst_16805);
} else {
if((state_val_16808 === (12))){
var inst_16767 = (state_16807[(8)]);
var inst_16763 = (state_16807[(7)]);
var inst_16789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16790 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_16791 = (new cljs.core.PersistentVector(null,1,(5),inst_16789,inst_16790,null));
var inst_16792 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_16767);
var inst_16793 = cljs.core.update_in.call(null,inst_16763,inst_16791,cljs.core.conj,inst_16792);
var inst_16763__$1 = inst_16793;
var state_16807__$1 = (function (){var statearr_16818 = state_16807;
(statearr_16818[(7)] = inst_16763__$1);

return statearr_16818;
})();
var statearr_16819_16883 = state_16807__$1;
(statearr_16819_16883[(2)] = null);

(statearr_16819_16883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (2))){
var inst_16763 = (state_16807[(7)]);
var inst_16765 = app.t3.main.model = inst_16763;
var state_16807__$1 = (function (){var statearr_16820 = state_16807;
(statearr_16820[(10)] = inst_16765);

return statearr_16820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16807__$1,(4),app.t3.main.evt);
} else {
if((state_val_16808 === (11))){
var inst_16786 = console.log("exit");
var inst_16787 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_16807__$1 = (function (){var statearr_16821 = state_16807;
(statearr_16821[(11)] = inst_16786);

return statearr_16821;
})();
var statearr_16822_16884 = state_16807__$1;
(statearr_16822_16884[(2)] = inst_16787);

(statearr_16822_16884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (9))){
var inst_16763 = (state_16807[(7)]);
var inst_16798 = app.t3.main.update.call(null,inst_16763);
var inst_16763__$1 = inst_16798;
var state_16807__$1 = (function (){var statearr_16823 = state_16807;
(statearr_16823[(7)] = inst_16763__$1);

return statearr_16823;
})();
var statearr_16824_16885 = state_16807__$1;
(statearr_16824_16885[(2)] = null);

(statearr_16824_16885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (5))){
var inst_16767 = (state_16807[(8)]);
var inst_16763 = (state_16807[(7)]);
var inst_16774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16775 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_16776 = (new cljs.core.PersistentVector(null,1,(5),inst_16774,inst_16775,null));
var inst_16777 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_16767);
var inst_16778 = cljs.core.update_in.call(null,inst_16763,inst_16776,cljs.core.conj,inst_16777);
var inst_16763__$1 = inst_16778;
var state_16807__$1 = (function (){var statearr_16825 = state_16807;
(statearr_16825[(7)] = inst_16763__$1);

return statearr_16825;
})();
var statearr_16826_16886 = state_16807__$1;
(statearr_16826_16886[(2)] = null);

(statearr_16826_16886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (10))){
var inst_16801 = (state_16807[(2)]);
var state_16807__$1 = state_16807;
var statearr_16827_16887 = state_16807__$1;
(statearr_16827_16887[(2)] = inst_16801);

(statearr_16827_16887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16808 === (8))){
var inst_16767 = (state_16807[(8)]);
var inst_16783 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_16767);
var inst_16784 = cljs.core._EQ_.call(null,inst_16783,"q");
var state_16807__$1 = state_16807;
if(inst_16784){
var statearr_16828_16888 = state_16807__$1;
(statearr_16828_16888[(1)] = (11));

} else {
var statearr_16829_16889 = state_16807__$1;
(statearr_16829_16889[(1)] = (12));

}

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
}
}
}
});})(c__2882__auto___16875))
;
return ((function (switch__2792__auto__,c__2882__auto___16875){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16830[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_16830[(1)] = (1));

return statearr_16830;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_16807){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16831){if((e16831 instanceof Object)){
var ex__2796__auto__ = e16831;
var statearr_16832_16890 = state_16807;
(statearr_16832_16890[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16891 = state_16807;
state_16807 = G__16891;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_16807){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_16807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___16875))
})();
var state__2884__auto__ = (function (){var statearr_16833 = f__2883__auto__.call(null);
(statearr_16833[(6)] = c__2882__auto___16875);

return statearr_16833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___16875))
);


var projectionFn = cljs.core.partial.call(null,app.t3.main.projection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),((app.t3.main.ch / (2)) | (0))], null)], null));
app.t3.main.p5.setup = ((function (projectionFn){
return (function (){
var canvas = app.t3.main.p5.createCanvas(app.t3.main.cw,app.t3.main.ch);
return canvas.parent("container");
});})(projectionFn))
;

app.t3.main.p5.draw = ((function (projectionFn){
return (function (){
if(cljs.core.truth_(app.t3.main.model)){
var vec__16834_16892 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_16893 = cljs.core.nth.call(null,vec__16834_16892,(0),null);
var py_16894 = cljs.core.nth.call(null,vec__16834_16892,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_16893,py_16894);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__16837 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__16838 = null;
var count__16839 = (0);
var i__16840 = (0);
while(true){
if((i__16840 < count__16839)){
var entity = cljs.core._nth.call(null,chunk__16838,i__16840);
var vec__16841_16895 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_16896 = cljs.core.nth.call(null,vec__16841_16895,(0),null);
var py_16897 = cljs.core.nth.call(null,vec__16841_16895,(1),null);
app.t3.main.p5.rect(px_16896,py_16897,(10),(10));


var G__16898 = seq__16837;
var G__16899 = chunk__16838;
var G__16900 = count__16839;
var G__16901 = (i__16840 + (1));
seq__16837 = G__16898;
chunk__16838 = G__16899;
count__16839 = G__16900;
i__16840 = G__16901;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16837);
if(temp__5457__auto__){
var seq__16837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16837__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__16837__$1);
var G__16902 = cljs.core.chunk_rest.call(null,seq__16837__$1);
var G__16903 = c__4319__auto__;
var G__16904 = cljs.core.count.call(null,c__4319__auto__);
var G__16905 = (0);
seq__16837 = G__16902;
chunk__16838 = G__16903;
count__16839 = G__16904;
i__16840 = G__16905;
continue;
} else {
var entity = cljs.core.first.call(null,seq__16837__$1);
var vec__16844_16906 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_16907 = cljs.core.nth.call(null,vec__16844_16906,(0),null);
var py_16908 = cljs.core.nth.call(null,vec__16844_16906,(1),null);
app.t3.main.p5.rect(px_16907,py_16908,(10),(10));


var G__16909 = cljs.core.next.call(null,seq__16837__$1);
var G__16910 = null;
var G__16911 = (0);
var G__16912 = (0);
seq__16837 = G__16909;
chunk__16838 = G__16910;
count__16839 = G__16911;
i__16840 = G__16912;
continue;
}
} else {
return null;
}
}
break;
}
})());
} else {
return null;
}
});})(projectionFn))
;

app.t3.main.p5.keyPressed = ((function (projectionFn){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,projectionFn){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,projectionFn){
return (function (state_16854){
var state_val_16855 = (state_16854[(1)]);
if((state_val_16855 === (1))){
var inst_16847 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_16848 = app.t3.main.p5.key;
var inst_16849 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_16848];
var inst_16850 = cljs.core.PersistentHashMap.fromArrays(inst_16847,inst_16849);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16854__$1,(2),app.t3.main.evt,inst_16850);
} else {
if((state_val_16855 === (2))){
var inst_16852 = (state_16854[(2)]);
var state_16854__$1 = state_16854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16854__$1,inst_16852);
} else {
return null;
}
}
});})(c__2882__auto__,projectionFn))
;
return ((function (switch__2792__auto__,c__2882__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16856 = [null,null,null,null,null,null,null];
(statearr_16856[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_16856[(1)] = (1));

return statearr_16856;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_16854){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16857){if((e16857 instanceof Object)){
var ex__2796__auto__ = e16857;
var statearr_16858_16913 = state_16854;
(statearr_16858_16913[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16914 = state_16854;
state_16854 = G__16914;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_16854){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_16854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_16859 = f__2883__auto__.call(null);
(statearr_16859[(6)] = c__2882__auto__);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,projectionFn))
);

return c__2882__auto__;
});})(projectionFn))
;

return app.t3.main.p5.keyReleased = ((function (projectionFn){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,projectionFn){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,projectionFn){
return (function (state_16867){
var state_val_16868 = (state_16867[(1)]);
if((state_val_16868 === (1))){
var inst_16860 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_16861 = app.t3.main.p5.key;
var inst_16862 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_16861];
var inst_16863 = cljs.core.PersistentHashMap.fromArrays(inst_16860,inst_16862);
var state_16867__$1 = state_16867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16867__$1,(2),app.t3.main.evt,inst_16863);
} else {
if((state_val_16868 === (2))){
var inst_16865 = (state_16867[(2)]);
var state_16867__$1 = state_16867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16867__$1,inst_16865);
} else {
return null;
}
}
});})(c__2882__auto__,projectionFn))
;
return ((function (switch__2792__auto__,c__2882__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null];
(statearr_16869[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_16867){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16870){if((e16870 instanceof Object)){
var ex__2796__auto__ = e16870;
var statearr_16871_16915 = state_16867;
(statearr_16871_16915[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16916 = state_16867;
state_16867 = G__16916;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_16867){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_16867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_16872 = f__2883__auto__.call(null);
(statearr_16872[(6)] = c__2882__auto__);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,projectionFn))
);

return c__2882__auto__;
});})(projectionFn))
;
});
app.t3.main.main.call(null);

//# sourceMappingURL=main.js.map
