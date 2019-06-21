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
var pred__9966 = cljs.core._EQ_;
var expr__9967 = key;
if(cljs.core.truth_(pred__9966.call(null,"w",expr__9967))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__9966.call(null,"s",expr__9967))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__9966.call(null,"a",expr__9967))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__9966.call(null,"d",expr__9967))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__9966.call(null,"j",expr__9967))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__9966,expr__9967){
return (function (p1__9965_SHARP_){
return cljs.core.conj.call(null,p1__9965_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__9966,expr__9967))
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
var vec__9969 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__9969,(0),null);
var _ = cljs.core.nth.call(null,vec__9969,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__9969,cx,_,entities){
return (function (p__9972){
var map__9973 = p__9972;
var map__9973__$1 = ((((!((map__9973 == null)))?(((((map__9973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9973):map__9973);
var entity = map__9973__$1;
var vec__9974 = cljs.core.get.call(null,map__9973__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__9974,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9974,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__9969,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__9979 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__9979,(0),null);
var _ = cljs.core.nth.call(null,vec__9979,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__9979,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__9982(s__9983){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__9979,cx,_,c){
return (function (){
var s__9983__$1 = s__9983;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9983__$1);
if(temp__5457__auto__){
var s__9983__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9983__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9983__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9985 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9984 = (0);
while(true){
if((i__9984 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__9984);
cljs.core.chunk_append.call(null,b__9985,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__9990 = (i__9984 + (1));
i__9984 = G__9990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9985),app$t3$main$spawnEnemy_$_iter__9982.call(null,cljs.core.chunk_rest.call(null,s__9983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9985),null);
}
} else {
var r = cljs.core.first.call(null,s__9983__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__9982.call(null,cljs.core.rest.call(null,s__9983__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__9979,cx,_,c))
,null,null));
});})(spawnPos,vec__9979,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__9979,cx,_,c,rcs){
return (function (p1__9978_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__9978_SHARP_,(2)));
});})(spawnPos,vec__9979,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__9979,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__9986){
var vec__9987 = p__9986;
var r = cljs.core.nth.call(null,vec__9987,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__9987,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__9979,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__9991_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9991_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__9992_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9992_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__9994(s__9995){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__9995__$1 = s__9995;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9995__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__9995__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__9994_$_iter__9996(s__9997){
return (new cljs.core.LazySeq(null,((function (s__9995__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__9997__$1 = s__9997;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__9997__$1);
if(temp__5457__auto____$1){
var s__9997__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9997__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9997__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9999 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9998 = (0);
while(true){
if((i__9998 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__9998);
cljs.core.chunk_append.call(null,b__9999,(function (){var vec__10000 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__10000,(0),null);
var by = cljs.core.nth.call(null,vec__10000,(1),null);
var vec__10003 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__10003,(0),null);
var ey = cljs.core.nth.call(null,vec__10003,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__10016 = (i__9998 + (1));
i__9998 = G__10016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9999),app$t3$main$checkCollide_$_iter__9994_$_iter__9996.call(null,cljs.core.chunk_rest.call(null,s__9997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9999),null);
}
} else {
var e = cljs.core.first.call(null,s__9997__$2);
return cljs.core.cons.call(null,(function (){var vec__10006 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__10006,(0),null);
var by = cljs.core.nth.call(null,vec__10006,(1),null);
var vec__10009 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__10009,(0),null);
var ey = cljs.core.nth.call(null,vec__10009,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__9994_$_iter__9996.call(null,cljs.core.rest.call(null,s__9997__$2)));
}
} else {
return null;
}
break;
}
});})(s__9995__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__9995__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__9994.call(null,cljs.core.rest.call(null,s__9995__$1)));
} else {
var G__10017 = cljs.core.rest.call(null,s__9995__$1);
s__9995__$1 = G__10017;
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
return (function (p__10012){
var vec__10013 = p__10012;
var _ = cljs.core.nth.call(null,vec__10013,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10013,(1),null);
var isCollide = cljs.core.nth.call(null,vec__10013,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__9993_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__9993_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__10018,camera,pos){
var map__10019 = p__10018;
var map__10019__$1 = ((((!((map__10019 == null)))?(((((map__10019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10019):map__10019);
var view = cljs.core.get.call(null,map__10019__$1,new cljs.core.Keyword(null,"view","view",1247994814));
return cljs.core.map.call(null,cljs.core._PLUS_,view,cljs.core.map.call(null,cljs.core._,pos,camera));
});
app.t3.main.main = (function app$t3$main$main(){
app.t3.main.model = null;

app.t3.main.evt = cljs.core.async.chan.call(null);

setInterval((function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_10027){
var state_val_10028 = (state_10027[(1)]);
if((state_val_10028 === (1))){
var inst_10021 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_10022 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_10023 = cljs.core.PersistentHashMap.fromArrays(inst_10021,inst_10022);
var state_10027__$1 = state_10027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10027__$1,(2),app.t3.main.evt,inst_10023);
} else {
if((state_val_10028 === (2))){
var inst_10025 = (state_10027[(2)]);
var state_10027__$1 = state_10027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10027__$1,inst_10025);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t3$main$main_$_state_machine__2796__auto__ = null;
var app$t3$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_10029 = [null,null,null,null,null,null,null];
(statearr_10029[(0)] = app$t3$main$main_$_state_machine__2796__auto__);

(statearr_10029[(1)] = (1));

return statearr_10029;
});
var app$t3$main$main_$_state_machine__2796__auto____1 = (function (state_10027){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_10027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e10030){if((e10030 instanceof Object)){
var ex__2799__auto__ = e10030;
var statearr_10031_10173 = state_10027;
(statearr_10031_10173[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10174 = state_10027;
state_10027 = G__10174;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2796__auto__ = function(state_10027){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2796__auto____1.call(this,state_10027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2796__auto____0;
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2796__auto____1;
return app$t3$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_10032 = f__2886__auto__.call(null);
(statearr_10032[(6)] = c__2885__auto__);

return statearr_10032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
}),(33));

var c__2885__auto___10175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___10175){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___10175){
return (function (state_10107){
var state_val_10108 = (state_10107[(1)]);
if((state_val_10108 === (7))){
var inst_10103 = (state_10107[(2)]);
var state_10107__$1 = state_10107;
var statearr_10109_10176 = state_10107__$1;
(statearr_10109_10176[(2)] = inst_10103);

(statearr_10109_10176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (1))){
var inst_10033 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_10034 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_10035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10036 = [(0),(0)];
var inst_10037 = (new cljs.core.PersistentVector(null,2,(5),inst_10035,inst_10036,null));
var inst_10038 = [inst_10037];
var inst_10039 = cljs.core.PersistentHashMap.fromArrays(inst_10034,inst_10038);
var inst_10040 = cljs.core.PersistentHashSet.EMPTY;
var inst_10041 = cljs.core.PersistentHashSet.EMPTY;
var inst_10042 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_10043 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10044 = [(0),(0)];
var inst_10045 = (new cljs.core.PersistentVector(null,2,(5),inst_10043,inst_10044,null));
var inst_10046 = [inst_10045];
var inst_10047 = cljs.core.PersistentHashMap.fromArrays(inst_10042,inst_10046);
var inst_10048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10049 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_10050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10051 = [(100),(0)];
var inst_10052 = (new cljs.core.PersistentVector(null,2,(5),inst_10050,inst_10051,null));
var inst_10053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10054 = [(0),(-1)];
var inst_10055 = (new cljs.core.PersistentVector(null,2,(5),inst_10053,inst_10054,null));
var inst_10056 = [inst_10052,inst_10055];
var inst_10057 = cljs.core.PersistentHashMap.fromArrays(inst_10049,inst_10056);
var inst_10058 = [inst_10057];
var inst_10059 = (new cljs.core.PersistentVector(null,1,(5),inst_10048,inst_10058,null));
var inst_10060 = cljs.core.PersistentHashSet.EMPTY;
var inst_10061 = [inst_10039,inst_10040,inst_10041,inst_10047,inst_10059,inst_10060];
var inst_10062 = cljs.core.PersistentHashMap.fromArrays(inst_10033,inst_10061);
var inst_10063 = inst_10062;
var state_10107__$1 = (function (){var statearr_10110 = state_10107;
(statearr_10110[(7)] = inst_10063);

return statearr_10110;
})();
var statearr_10111_10177 = state_10107__$1;
(statearr_10111_10177[(2)] = null);

(statearr_10111_10177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (4))){
var inst_10071 = (state_10107[(8)]);
var inst_10067 = (state_10107[(9)]);
var inst_10067__$1 = (state_10107[(2)]);
var inst_10071__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_10067__$1);
var inst_10072 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_10071__$1);
var state_10107__$1 = (function (){var statearr_10112 = state_10107;
(statearr_10112[(8)] = inst_10071__$1);

(statearr_10112[(9)] = inst_10067__$1);

return statearr_10112;
})();
if(inst_10072){
var statearr_10113_10178 = state_10107__$1;
(statearr_10113_10178[(1)] = (5));

} else {
var statearr_10114_10179 = state_10107__$1;
(statearr_10114_10179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (13))){
var inst_10096 = (state_10107[(2)]);
var state_10107__$1 = state_10107;
var statearr_10115_10180 = state_10107__$1;
(statearr_10115_10180[(2)] = inst_10096);

(statearr_10115_10180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (6))){
var inst_10071 = (state_10107[(8)]);
var inst_10081 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_10071);
var state_10107__$1 = state_10107;
if(inst_10081){
var statearr_10116_10181 = state_10107__$1;
(statearr_10116_10181[(1)] = (8));

} else {
var statearr_10117_10182 = state_10107__$1;
(statearr_10117_10182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (3))){
var inst_10105 = (state_10107[(2)]);
var state_10107__$1 = state_10107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10107__$1,inst_10105);
} else {
if((state_val_10108 === (12))){
var inst_10063 = (state_10107[(7)]);
var inst_10067 = (state_10107[(9)]);
var inst_10089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10090 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_10091 = (new cljs.core.PersistentVector(null,1,(5),inst_10089,inst_10090,null));
var inst_10092 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_10067);
var inst_10093 = cljs.core.update_in.call(null,inst_10063,inst_10091,cljs.core.conj,inst_10092);
var inst_10063__$1 = inst_10093;
var state_10107__$1 = (function (){var statearr_10118 = state_10107;
(statearr_10118[(7)] = inst_10063__$1);

return statearr_10118;
})();
var statearr_10119_10183 = state_10107__$1;
(statearr_10119_10183[(2)] = null);

(statearr_10119_10183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (2))){
var inst_10063 = (state_10107[(7)]);
var inst_10065 = app.t3.main.model = inst_10063;
var state_10107__$1 = (function (){var statearr_10120 = state_10107;
(statearr_10120[(10)] = inst_10065);

return statearr_10120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10107__$1,(4),app.t3.main.evt);
} else {
if((state_val_10108 === (11))){
var inst_10086 = console.log("exit");
var inst_10087 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_10107__$1 = (function (){var statearr_10121 = state_10107;
(statearr_10121[(11)] = inst_10086);

return statearr_10121;
})();
var statearr_10122_10184 = state_10107__$1;
(statearr_10122_10184[(2)] = inst_10087);

(statearr_10122_10184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (9))){
var inst_10063 = (state_10107[(7)]);
var inst_10098 = app.t3.main.update.call(null,inst_10063);
var inst_10063__$1 = inst_10098;
var state_10107__$1 = (function (){var statearr_10123 = state_10107;
(statearr_10123[(7)] = inst_10063__$1);

return statearr_10123;
})();
var statearr_10124_10185 = state_10107__$1;
(statearr_10124_10185[(2)] = null);

(statearr_10124_10185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (5))){
var inst_10063 = (state_10107[(7)]);
var inst_10067 = (state_10107[(9)]);
var inst_10074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10075 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_10076 = (new cljs.core.PersistentVector(null,1,(5),inst_10074,inst_10075,null));
var inst_10077 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_10067);
var inst_10078 = cljs.core.update_in.call(null,inst_10063,inst_10076,cljs.core.conj,inst_10077);
var inst_10063__$1 = inst_10078;
var state_10107__$1 = (function (){var statearr_10125 = state_10107;
(statearr_10125[(7)] = inst_10063__$1);

return statearr_10125;
})();
var statearr_10126_10186 = state_10107__$1;
(statearr_10126_10186[(2)] = null);

(statearr_10126_10186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (10))){
var inst_10101 = (state_10107[(2)]);
var state_10107__$1 = state_10107;
var statearr_10127_10187 = state_10107__$1;
(statearr_10127_10187[(2)] = inst_10101);

(statearr_10127_10187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10108 === (8))){
var inst_10067 = (state_10107[(9)]);
var inst_10083 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_10067);
var inst_10084 = cljs.core._EQ_.call(null,inst_10083,"q");
var state_10107__$1 = state_10107;
if(inst_10084){
var statearr_10128_10188 = state_10107__$1;
(statearr_10128_10188[(1)] = (11));

} else {
var statearr_10129_10189 = state_10107__$1;
(statearr_10129_10189[(1)] = (12));

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
});})(c__2885__auto___10175))
;
return ((function (switch__2795__auto__,c__2885__auto___10175){
return (function() {
var app$t3$main$main_$_state_machine__2796__auto__ = null;
var app$t3$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_10130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10130[(0)] = app$t3$main$main_$_state_machine__2796__auto__);

(statearr_10130[(1)] = (1));

return statearr_10130;
});
var app$t3$main$main_$_state_machine__2796__auto____1 = (function (state_10107){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_10107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e10131){if((e10131 instanceof Object)){
var ex__2799__auto__ = e10131;
var statearr_10132_10190 = state_10107;
(statearr_10132_10190[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10191 = state_10107;
state_10107 = G__10191;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2796__auto__ = function(state_10107){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2796__auto____1.call(this,state_10107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2796__auto____0;
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2796__auto____1;
return app$t3$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___10175))
})();
var state__2887__auto__ = (function (){var statearr_10133 = f__2886__auto__.call(null);
(statearr_10133[(6)] = c__2885__auto___10175);

return statearr_10133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___10175))
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
var vec__10134_10192 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_10193 = cljs.core.nth.call(null,vec__10134_10192,(0),null);
var py_10194 = cljs.core.nth.call(null,vec__10134_10192,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_10193,py_10194);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__10137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__10138 = null;
var count__10139 = (0);
var i__10140 = (0);
while(true){
if((i__10140 < count__10139)){
var entity = cljs.core._nth.call(null,chunk__10138,i__10140);
var vec__10141_10195 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_10196 = cljs.core.nth.call(null,vec__10141_10195,(0),null);
var py_10197 = cljs.core.nth.call(null,vec__10141_10195,(1),null);
app.t3.main.p5.rect(px_10196,py_10197,(10),(10));


var G__10198 = seq__10137;
var G__10199 = chunk__10138;
var G__10200 = count__10139;
var G__10201 = (i__10140 + (1));
seq__10137 = G__10198;
chunk__10138 = G__10199;
count__10139 = G__10200;
i__10140 = G__10201;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10137);
if(temp__5457__auto__){
var seq__10137__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10137__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10137__$1);
var G__10202 = cljs.core.chunk_rest.call(null,seq__10137__$1);
var G__10203 = c__4319__auto__;
var G__10204 = cljs.core.count.call(null,c__4319__auto__);
var G__10205 = (0);
seq__10137 = G__10202;
chunk__10138 = G__10203;
count__10139 = G__10204;
i__10140 = G__10205;
continue;
} else {
var entity = cljs.core.first.call(null,seq__10137__$1);
var vec__10144_10206 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_10207 = cljs.core.nth.call(null,vec__10144_10206,(0),null);
var py_10208 = cljs.core.nth.call(null,vec__10144_10206,(1),null);
app.t3.main.p5.rect(px_10207,py_10208,(10),(10));


var G__10209 = cljs.core.next.call(null,seq__10137__$1);
var G__10210 = null;
var G__10211 = (0);
var G__10212 = (0);
seq__10137 = G__10209;
chunk__10138 = G__10210;
count__10139 = G__10211;
i__10140 = G__10212;
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
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,projectionFn){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,projectionFn){
return (function (state_10154){
var state_val_10155 = (state_10154[(1)]);
if((state_val_10155 === (1))){
var inst_10147 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_10148 = app.t3.main.p5.key;
var inst_10149 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_10148];
var inst_10150 = cljs.core.PersistentHashMap.fromArrays(inst_10147,inst_10149);
var state_10154__$1 = state_10154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10154__$1,(2),app.t3.main.evt,inst_10150);
} else {
if((state_val_10155 === (2))){
var inst_10152 = (state_10154[(2)]);
var state_10154__$1 = state_10154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10154__$1,inst_10152);
} else {
return null;
}
}
});})(c__2885__auto__,projectionFn))
;
return ((function (switch__2795__auto__,c__2885__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__2796__auto__ = null;
var app$t3$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_10156 = [null,null,null,null,null,null,null];
(statearr_10156[(0)] = app$t3$main$main_$_state_machine__2796__auto__);

(statearr_10156[(1)] = (1));

return statearr_10156;
});
var app$t3$main$main_$_state_machine__2796__auto____1 = (function (state_10154){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_10154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e10157){if((e10157 instanceof Object)){
var ex__2799__auto__ = e10157;
var statearr_10158_10213 = state_10154;
(statearr_10158_10213[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10214 = state_10154;
state_10154 = G__10214;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2796__auto__ = function(state_10154){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2796__auto____1.call(this,state_10154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2796__auto____0;
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2796__auto____1;
return app$t3$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,projectionFn))
})();
var state__2887__auto__ = (function (){var statearr_10159 = f__2886__auto__.call(null);
(statearr_10159[(6)] = c__2885__auto__);

return statearr_10159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,projectionFn))
);

return c__2885__auto__;
});})(projectionFn))
;

return app.t3.main.p5.keyReleased = ((function (projectionFn){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,projectionFn){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,projectionFn){
return (function (state_10167){
var state_val_10168 = (state_10167[(1)]);
if((state_val_10168 === (1))){
var inst_10160 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_10161 = app.t3.main.p5.key;
var inst_10162 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_10161];
var inst_10163 = cljs.core.PersistentHashMap.fromArrays(inst_10160,inst_10162);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10167__$1,(2),app.t3.main.evt,inst_10163);
} else {
if((state_val_10168 === (2))){
var inst_10165 = (state_10167[(2)]);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10167__$1,inst_10165);
} else {
return null;
}
}
});})(c__2885__auto__,projectionFn))
;
return ((function (switch__2795__auto__,c__2885__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__2796__auto__ = null;
var app$t3$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_10169 = [null,null,null,null,null,null,null];
(statearr_10169[(0)] = app$t3$main$main_$_state_machine__2796__auto__);

(statearr_10169[(1)] = (1));

return statearr_10169;
});
var app$t3$main$main_$_state_machine__2796__auto____1 = (function (state_10167){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_10167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e10170){if((e10170 instanceof Object)){
var ex__2799__auto__ = e10170;
var statearr_10171_10215 = state_10167;
(statearr_10171_10215[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10216 = state_10167;
state_10167 = G__10216;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2796__auto__ = function(state_10167){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2796__auto____1.call(this,state_10167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2796__auto____0;
app$t3$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2796__auto____1;
return app$t3$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,projectionFn))
})();
var state__2887__auto__ = (function (){var statearr_10172 = f__2886__auto__.call(null);
(statearr_10172[(6)] = c__2885__auto__);

return statearr_10172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,projectionFn))
);

return c__2885__auto__;
});})(projectionFn))
;
});
app.t3.main.main.call(null);

//# sourceMappingURL=main.js.map
