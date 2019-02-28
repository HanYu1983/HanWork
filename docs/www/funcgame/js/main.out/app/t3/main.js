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
var pred__8864 = cljs.core._EQ_;
var expr__8865 = key;
if(cljs.core.truth_(pred__8864.call(null,"w",expr__8865))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__8864.call(null,"s",expr__8865))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__8864.call(null,"a",expr__8865))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__8864.call(null,"d",expr__8865))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__8864.call(null,"j",expr__8865))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__8864,expr__8865){
return (function (p1__8863_SHARP_){
return cljs.core.conj.call(null,p1__8863_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__8864,expr__8865))
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
var vec__8867 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__8867,(0),null);
var _ = cljs.core.nth.call(null,vec__8867,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__8867,cx,_,entities){
return (function (p__8870){
var map__8871 = p__8870;
var map__8871__$1 = ((((!((map__8871 == null)))?(((((map__8871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8871):map__8871);
var entity = map__8871__$1;
var vec__8872 = cljs.core.get.call(null,map__8871__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__8872,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8872,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__8867,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__8877 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__8877,(0),null);
var _ = cljs.core.nth.call(null,vec__8877,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__8877,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__8880(s__8881){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__8877,cx,_,c){
return (function (){
var s__8881__$1 = s__8881;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8881__$1);
if(temp__5457__auto__){
var s__8881__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8881__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8881__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8883 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8882 = (0);
while(true){
if((i__8882 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__8882);
cljs.core.chunk_append.call(null,b__8883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__8888 = (i__8882 + (1));
i__8882 = G__8888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),app$t3$main$spawnEnemy_$_iter__8880.call(null,cljs.core.chunk_rest.call(null,s__8881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),null);
}
} else {
var r = cljs.core.first.call(null,s__8881__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__8880.call(null,cljs.core.rest.call(null,s__8881__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__8877,cx,_,c))
,null,null));
});})(spawnPos,vec__8877,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__8877,cx,_,c,rcs){
return (function (p1__8876_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__8876_SHARP_,(2)));
});})(spawnPos,vec__8877,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__8877,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__8884){
var vec__8885 = p__8884;
var r = cljs.core.nth.call(null,vec__8885,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__8885,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__8877,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__8889_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8889_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__8890_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8890_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__8892(s__8893){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__8893__$1 = s__8893;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8893__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__8893__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__8892_$_iter__8894(s__8895){
return (new cljs.core.LazySeq(null,((function (s__8893__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__8895__$1 = s__8895;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8895__$1);
if(temp__5457__auto____$1){
var s__8895__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8895__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8895__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8897 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8896 = (0);
while(true){
if((i__8896 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__8896);
cljs.core.chunk_append.call(null,b__8897,(function (){var vec__8898 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__8898,(0),null);
var by = cljs.core.nth.call(null,vec__8898,(1),null);
var vec__8901 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__8901,(0),null);
var ey = cljs.core.nth.call(null,vec__8901,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__8914 = (i__8896 + (1));
i__8896 = G__8914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8897),app$t3$main$checkCollide_$_iter__8892_$_iter__8894.call(null,cljs.core.chunk_rest.call(null,s__8895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8897),null);
}
} else {
var e = cljs.core.first.call(null,s__8895__$2);
return cljs.core.cons.call(null,(function (){var vec__8904 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__8904,(0),null);
var by = cljs.core.nth.call(null,vec__8904,(1),null);
var vec__8907 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__8907,(0),null);
var ey = cljs.core.nth.call(null,vec__8907,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__8892_$_iter__8894.call(null,cljs.core.rest.call(null,s__8895__$2)));
}
} else {
return null;
}
break;
}
});})(s__8893__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__8893__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__8892.call(null,cljs.core.rest.call(null,s__8893__$1)));
} else {
var G__8915 = cljs.core.rest.call(null,s__8893__$1);
s__8893__$1 = G__8915;
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
return (function (p__8910){
var vec__8911 = p__8910;
var _ = cljs.core.nth.call(null,vec__8911,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8911,(1),null);
var isCollide = cljs.core.nth.call(null,vec__8911,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__8891_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__8891_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__8916,camera,pos){
var map__8917 = p__8916;
var map__8917__$1 = ((((!((map__8917 == null)))?(((((map__8917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8917):map__8917);
var view = cljs.core.get.call(null,map__8917__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_8925){
var state_val_8926 = (state_8925[(1)]);
if((state_val_8926 === (1))){
var inst_8919 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8920 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8921 = cljs.core.PersistentHashMap.fromArrays(inst_8919,inst_8920);
var state_8925__$1 = state_8925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8925__$1,(2),app.t3.main.evt,inst_8921);
} else {
if((state_val_8926 === (2))){
var inst_8923 = (state_8925[(2)]);
var state_8925__$1 = state_8925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8925__$1,inst_8923);
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
var statearr_8927 = [null,null,null,null,null,null,null];
(statearr_8927[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_8927[(1)] = (1));

return statearr_8927;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_8925){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8928){if((e8928 instanceof Object)){
var ex__2796__auto__ = e8928;
var statearr_8929_9071 = state_8925;
(statearr_8929_9071[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9072 = state_8925;
state_8925 = G__9072;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_8925){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_8925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8930 = f__2883__auto__.call(null);
(statearr_8930[(6)] = c__2882__auto__);

return statearr_8930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___9073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___9073){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___9073){
return (function (state_9005){
var state_val_9006 = (state_9005[(1)]);
if((state_val_9006 === (7))){
var inst_9001 = (state_9005[(2)]);
var state_9005__$1 = state_9005;
var statearr_9007_9074 = state_9005__$1;
(statearr_9007_9074[(2)] = inst_9001);

(statearr_9007_9074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (1))){
var inst_8931 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_8932 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8934 = [(0),(0)];
var inst_8935 = (new cljs.core.PersistentVector(null,2,(5),inst_8933,inst_8934,null));
var inst_8936 = [inst_8935];
var inst_8937 = cljs.core.PersistentHashMap.fromArrays(inst_8932,inst_8936);
var inst_8938 = cljs.core.PersistentHashSet.EMPTY;
var inst_8939 = cljs.core.PersistentHashSet.EMPTY;
var inst_8940 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8942 = [(0),(0)];
var inst_8943 = (new cljs.core.PersistentVector(null,2,(5),inst_8941,inst_8942,null));
var inst_8944 = [inst_8943];
var inst_8945 = cljs.core.PersistentHashMap.fromArrays(inst_8940,inst_8944);
var inst_8946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8947 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_8948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8949 = [(100),(0)];
var inst_8950 = (new cljs.core.PersistentVector(null,2,(5),inst_8948,inst_8949,null));
var inst_8951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8952 = [(0),(-1)];
var inst_8953 = (new cljs.core.PersistentVector(null,2,(5),inst_8951,inst_8952,null));
var inst_8954 = [inst_8950,inst_8953];
var inst_8955 = cljs.core.PersistentHashMap.fromArrays(inst_8947,inst_8954);
var inst_8956 = [inst_8955];
var inst_8957 = (new cljs.core.PersistentVector(null,1,(5),inst_8946,inst_8956,null));
var inst_8958 = cljs.core.PersistentHashSet.EMPTY;
var inst_8959 = [inst_8937,inst_8938,inst_8939,inst_8945,inst_8957,inst_8958];
var inst_8960 = cljs.core.PersistentHashMap.fromArrays(inst_8931,inst_8959);
var inst_8961 = inst_8960;
var state_9005__$1 = (function (){var statearr_9008 = state_9005;
(statearr_9008[(7)] = inst_8961);

return statearr_9008;
})();
var statearr_9009_9075 = state_9005__$1;
(statearr_9009_9075[(2)] = null);

(statearr_9009_9075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (4))){
var inst_8965 = (state_9005[(8)]);
var inst_8969 = (state_9005[(9)]);
var inst_8965__$1 = (state_9005[(2)]);
var inst_8969__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8965__$1);
var inst_8970 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_8969__$1);
var state_9005__$1 = (function (){var statearr_9010 = state_9005;
(statearr_9010[(8)] = inst_8965__$1);

(statearr_9010[(9)] = inst_8969__$1);

return statearr_9010;
})();
if(inst_8970){
var statearr_9011_9076 = state_9005__$1;
(statearr_9011_9076[(1)] = (5));

} else {
var statearr_9012_9077 = state_9005__$1;
(statearr_9012_9077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (13))){
var inst_8994 = (state_9005[(2)]);
var state_9005__$1 = state_9005;
var statearr_9013_9078 = state_9005__$1;
(statearr_9013_9078[(2)] = inst_8994);

(statearr_9013_9078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (6))){
var inst_8969 = (state_9005[(9)]);
var inst_8979 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_8969);
var state_9005__$1 = state_9005;
if(inst_8979){
var statearr_9014_9079 = state_9005__$1;
(statearr_9014_9079[(1)] = (8));

} else {
var statearr_9015_9080 = state_9005__$1;
(statearr_9015_9080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (3))){
var inst_9003 = (state_9005[(2)]);
var state_9005__$1 = state_9005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9005__$1,inst_9003);
} else {
if((state_val_9006 === (12))){
var inst_8965 = (state_9005[(8)]);
var inst_8961 = (state_9005[(7)]);
var inst_8987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8988 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_8989 = (new cljs.core.PersistentVector(null,1,(5),inst_8987,inst_8988,null));
var inst_8990 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8965);
var inst_8991 = cljs.core.update_in.call(null,inst_8961,inst_8989,cljs.core.conj,inst_8990);
var inst_8961__$1 = inst_8991;
var state_9005__$1 = (function (){var statearr_9016 = state_9005;
(statearr_9016[(7)] = inst_8961__$1);

return statearr_9016;
})();
var statearr_9017_9081 = state_9005__$1;
(statearr_9017_9081[(2)] = null);

(statearr_9017_9081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (2))){
var inst_8961 = (state_9005[(7)]);
var inst_8963 = app.t3.main.model = inst_8961;
var state_9005__$1 = (function (){var statearr_9018 = state_9005;
(statearr_9018[(10)] = inst_8963);

return statearr_9018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9005__$1,(4),app.t3.main.evt);
} else {
if((state_val_9006 === (11))){
var inst_8984 = console.log("exit");
var inst_8985 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_9005__$1 = (function (){var statearr_9019 = state_9005;
(statearr_9019[(11)] = inst_8984);

return statearr_9019;
})();
var statearr_9020_9082 = state_9005__$1;
(statearr_9020_9082[(2)] = inst_8985);

(statearr_9020_9082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (9))){
var inst_8961 = (state_9005[(7)]);
var inst_8996 = app.t3.main.update.call(null,inst_8961);
var inst_8961__$1 = inst_8996;
var state_9005__$1 = (function (){var statearr_9021 = state_9005;
(statearr_9021[(7)] = inst_8961__$1);

return statearr_9021;
})();
var statearr_9022_9083 = state_9005__$1;
(statearr_9022_9083[(2)] = null);

(statearr_9022_9083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (5))){
var inst_8965 = (state_9005[(8)]);
var inst_8961 = (state_9005[(7)]);
var inst_8972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8973 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_8974 = (new cljs.core.PersistentVector(null,1,(5),inst_8972,inst_8973,null));
var inst_8975 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8965);
var inst_8976 = cljs.core.update_in.call(null,inst_8961,inst_8974,cljs.core.conj,inst_8975);
var inst_8961__$1 = inst_8976;
var state_9005__$1 = (function (){var statearr_9023 = state_9005;
(statearr_9023[(7)] = inst_8961__$1);

return statearr_9023;
})();
var statearr_9024_9084 = state_9005__$1;
(statearr_9024_9084[(2)] = null);

(statearr_9024_9084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (10))){
var inst_8999 = (state_9005[(2)]);
var state_9005__$1 = state_9005;
var statearr_9025_9085 = state_9005__$1;
(statearr_9025_9085[(2)] = inst_8999);

(statearr_9025_9085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9006 === (8))){
var inst_8965 = (state_9005[(8)]);
var inst_8981 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8965);
var inst_8982 = cljs.core._EQ_.call(null,inst_8981,"q");
var state_9005__$1 = state_9005;
if(inst_8982){
var statearr_9026_9086 = state_9005__$1;
(statearr_9026_9086[(1)] = (11));

} else {
var statearr_9027_9087 = state_9005__$1;
(statearr_9027_9087[(1)] = (12));

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
});})(c__2882__auto___9073))
;
return ((function (switch__2792__auto__,c__2882__auto___9073){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_9028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9028[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9028[(1)] = (1));

return statearr_9028;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_9005){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9029){if((e9029 instanceof Object)){
var ex__2796__auto__ = e9029;
var statearr_9030_9088 = state_9005;
(statearr_9030_9088[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9089 = state_9005;
state_9005 = G__9089;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_9005){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_9005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___9073))
})();
var state__2884__auto__ = (function (){var statearr_9031 = f__2883__auto__.call(null);
(statearr_9031[(6)] = c__2882__auto___9073);

return statearr_9031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___9073))
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
var vec__9032_9090 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9091 = cljs.core.nth.call(null,vec__9032_9090,(0),null);
var py_9092 = cljs.core.nth.call(null,vec__9032_9090,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_9091,py_9092);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__9035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__9036 = null;
var count__9037 = (0);
var i__9038 = (0);
while(true){
if((i__9038 < count__9037)){
var entity = cljs.core._nth.call(null,chunk__9036,i__9038);
var vec__9039_9093 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9094 = cljs.core.nth.call(null,vec__9039_9093,(0),null);
var py_9095 = cljs.core.nth.call(null,vec__9039_9093,(1),null);
app.t3.main.p5.rect(px_9094,py_9095,(10),(10));


var G__9096 = seq__9035;
var G__9097 = chunk__9036;
var G__9098 = count__9037;
var G__9099 = (i__9038 + (1));
seq__9035 = G__9096;
chunk__9036 = G__9097;
count__9037 = G__9098;
i__9038 = G__9099;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9035);
if(temp__5457__auto__){
var seq__9035__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9035__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9035__$1);
var G__9100 = cljs.core.chunk_rest.call(null,seq__9035__$1);
var G__9101 = c__4319__auto__;
var G__9102 = cljs.core.count.call(null,c__4319__auto__);
var G__9103 = (0);
seq__9035 = G__9100;
chunk__9036 = G__9101;
count__9037 = G__9102;
i__9038 = G__9103;
continue;
} else {
var entity = cljs.core.first.call(null,seq__9035__$1);
var vec__9042_9104 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9105 = cljs.core.nth.call(null,vec__9042_9104,(0),null);
var py_9106 = cljs.core.nth.call(null,vec__9042_9104,(1),null);
app.t3.main.p5.rect(px_9105,py_9106,(10),(10));


var G__9107 = cljs.core.next.call(null,seq__9035__$1);
var G__9108 = null;
var G__9109 = (0);
var G__9110 = (0);
seq__9035 = G__9107;
chunk__9036 = G__9108;
count__9037 = G__9109;
i__9038 = G__9110;
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
return (function (state_9052){
var state_val_9053 = (state_9052[(1)]);
if((state_val_9053 === (1))){
var inst_9045 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9046 = app.t3.main.p5.key;
var inst_9047 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9046];
var inst_9048 = cljs.core.PersistentHashMap.fromArrays(inst_9045,inst_9047);
var state_9052__$1 = state_9052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9052__$1,(2),app.t3.main.evt,inst_9048);
} else {
if((state_val_9053 === (2))){
var inst_9050 = (state_9052[(2)]);
var state_9052__$1 = state_9052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9052__$1,inst_9050);
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
var statearr_9054 = [null,null,null,null,null,null,null];
(statearr_9054[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9054[(1)] = (1));

return statearr_9054;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_9052){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9055){if((e9055 instanceof Object)){
var ex__2796__auto__ = e9055;
var statearr_9056_9111 = state_9052;
(statearr_9056_9111[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9112 = state_9052;
state_9052 = G__9112;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_9052){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_9052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_9057 = f__2883__auto__.call(null);
(statearr_9057[(6)] = c__2882__auto__);

return statearr_9057;
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
return (function (state_9065){
var state_val_9066 = (state_9065[(1)]);
if((state_val_9066 === (1))){
var inst_9058 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9059 = app.t3.main.p5.key;
var inst_9060 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_9059];
var inst_9061 = cljs.core.PersistentHashMap.fromArrays(inst_9058,inst_9060);
var state_9065__$1 = state_9065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9065__$1,(2),app.t3.main.evt,inst_9061);
} else {
if((state_val_9066 === (2))){
var inst_9063 = (state_9065[(2)]);
var state_9065__$1 = state_9065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9065__$1,inst_9063);
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
var statearr_9067 = [null,null,null,null,null,null,null];
(statearr_9067[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9067[(1)] = (1));

return statearr_9067;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_9065){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9068){if((e9068 instanceof Object)){
var ex__2796__auto__ = e9068;
var statearr_9069_9113 = state_9065;
(statearr_9069_9113[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9114 = state_9065;
state_9065 = G__9114;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_9065){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_9065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_9070 = f__2883__auto__.call(null);
(statearr_9070[(6)] = c__2882__auto__);

return statearr_9070;
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
