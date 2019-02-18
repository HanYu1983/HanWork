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
var pred__8850 = cljs.core._EQ_;
var expr__8851 = key;
if(cljs.core.truth_(pred__8850.call(null,"w",expr__8851))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__8850.call(null,"s",expr__8851))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__8850.call(null,"a",expr__8851))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__8850.call(null,"d",expr__8851))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__8850.call(null,"j",expr__8851))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__8850,expr__8851){
return (function (p1__8849_SHARP_){
return cljs.core.conj.call(null,p1__8849_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__8850,expr__8851))
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
var vec__8853 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__8853,(0),null);
var _ = cljs.core.nth.call(null,vec__8853,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__8853,cx,_,entities){
return (function (p__8856){
var map__8857 = p__8856;
var map__8857__$1 = ((((!((map__8857 == null)))?(((((map__8857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8857):map__8857);
var entity = map__8857__$1;
var vec__8858 = cljs.core.get.call(null,map__8857__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__8858,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8858,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__8853,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__8863 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__8863,(0),null);
var _ = cljs.core.nth.call(null,vec__8863,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__8863,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__8866(s__8867){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__8863,cx,_,c){
return (function (){
var s__8867__$1 = s__8867;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8867__$1);
if(temp__5457__auto__){
var s__8867__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8867__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8867__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8869 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8868 = (0);
while(true){
if((i__8868 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__8868);
cljs.core.chunk_append.call(null,b__8869,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__8874 = (i__8868 + (1));
i__8868 = G__8874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8869),app$t3$main$spawnEnemy_$_iter__8866.call(null,cljs.core.chunk_rest.call(null,s__8867__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8869),null);
}
} else {
var r = cljs.core.first.call(null,s__8867__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__8866.call(null,cljs.core.rest.call(null,s__8867__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__8863,cx,_,c))
,null,null));
});})(spawnPos,vec__8863,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__8863,cx,_,c,rcs){
return (function (p1__8862_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__8862_SHARP_,(2)));
});})(spawnPos,vec__8863,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__8863,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__8870){
var vec__8871 = p__8870;
var r = cljs.core.nth.call(null,vec__8871,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__8871,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__8863,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__8875_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8875_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__8876_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__8876_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__8878(s__8879){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__8879__$1 = s__8879;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8879__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__8879__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__8878_$_iter__8880(s__8881){
return (new cljs.core.LazySeq(null,((function (s__8879__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__8881__$1 = s__8881;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8881__$1);
if(temp__5457__auto____$1){
var s__8881__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8881__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8881__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8883 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8882 = (0);
while(true){
if((i__8882 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__8882);
cljs.core.chunk_append.call(null,b__8883,(function (){var vec__8884 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__8884,(0),null);
var by = cljs.core.nth.call(null,vec__8884,(1),null);
var vec__8887 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__8887,(0),null);
var ey = cljs.core.nth.call(null,vec__8887,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__8900 = (i__8882 + (1));
i__8882 = G__8900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),app$t3$main$checkCollide_$_iter__8878_$_iter__8880.call(null,cljs.core.chunk_rest.call(null,s__8881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),null);
}
} else {
var e = cljs.core.first.call(null,s__8881__$2);
return cljs.core.cons.call(null,(function (){var vec__8890 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__8890,(0),null);
var by = cljs.core.nth.call(null,vec__8890,(1),null);
var vec__8893 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__8893,(0),null);
var ey = cljs.core.nth.call(null,vec__8893,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__8878_$_iter__8880.call(null,cljs.core.rest.call(null,s__8881__$2)));
}
} else {
return null;
}
break;
}
});})(s__8879__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__8879__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__8878.call(null,cljs.core.rest.call(null,s__8879__$1)));
} else {
var G__8901 = cljs.core.rest.call(null,s__8879__$1);
s__8879__$1 = G__8901;
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
return (function (p__8896){
var vec__8897 = p__8896;
var _ = cljs.core.nth.call(null,vec__8897,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8897,(1),null);
var isCollide = cljs.core.nth.call(null,vec__8897,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__8877_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__8877_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__8902,camera,pos){
var map__8903 = p__8902;
var map__8903__$1 = ((((!((map__8903 == null)))?(((((map__8903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8903):map__8903);
var view = cljs.core.get.call(null,map__8903__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_8911){
var state_val_8912 = (state_8911[(1)]);
if((state_val_8912 === (1))){
var inst_8905 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8906 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8907 = cljs.core.PersistentHashMap.fromArrays(inst_8905,inst_8906);
var state_8911__$1 = state_8911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8911__$1,(2),app.t3.main.evt,inst_8907);
} else {
if((state_val_8912 === (2))){
var inst_8909 = (state_8911[(2)]);
var state_8911__$1 = state_8911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8911__$1,inst_8909);
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
var statearr_8913 = [null,null,null,null,null,null,null];
(statearr_8913[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_8913[(1)] = (1));

return statearr_8913;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_8911){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8914){if((e8914 instanceof Object)){
var ex__2796__auto__ = e8914;
var statearr_8915_9057 = state_8911;
(statearr_8915_9057[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9058 = state_8911;
state_8911 = G__9058;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_8911){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_8911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8916 = f__2883__auto__.call(null);
(statearr_8916[(6)] = c__2882__auto__);

return statearr_8916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___9059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___9059){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___9059){
return (function (state_8991){
var state_val_8992 = (state_8991[(1)]);
if((state_val_8992 === (7))){
var inst_8987 = (state_8991[(2)]);
var state_8991__$1 = state_8991;
var statearr_8993_9060 = state_8991__$1;
(statearr_8993_9060[(2)] = inst_8987);

(statearr_8993_9060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (1))){
var inst_8917 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_8918 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8920 = [(0),(0)];
var inst_8921 = (new cljs.core.PersistentVector(null,2,(5),inst_8919,inst_8920,null));
var inst_8922 = [inst_8921];
var inst_8923 = cljs.core.PersistentHashMap.fromArrays(inst_8918,inst_8922);
var inst_8924 = cljs.core.PersistentHashSet.EMPTY;
var inst_8925 = cljs.core.PersistentHashSet.EMPTY;
var inst_8926 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8928 = [(0),(0)];
var inst_8929 = (new cljs.core.PersistentVector(null,2,(5),inst_8927,inst_8928,null));
var inst_8930 = [inst_8929];
var inst_8931 = cljs.core.PersistentHashMap.fromArrays(inst_8926,inst_8930);
var inst_8932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8933 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_8934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8935 = [(100),(0)];
var inst_8936 = (new cljs.core.PersistentVector(null,2,(5),inst_8934,inst_8935,null));
var inst_8937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8938 = [(0),(-1)];
var inst_8939 = (new cljs.core.PersistentVector(null,2,(5),inst_8937,inst_8938,null));
var inst_8940 = [inst_8936,inst_8939];
var inst_8941 = cljs.core.PersistentHashMap.fromArrays(inst_8933,inst_8940);
var inst_8942 = [inst_8941];
var inst_8943 = (new cljs.core.PersistentVector(null,1,(5),inst_8932,inst_8942,null));
var inst_8944 = cljs.core.PersistentHashSet.EMPTY;
var inst_8945 = [inst_8923,inst_8924,inst_8925,inst_8931,inst_8943,inst_8944];
var inst_8946 = cljs.core.PersistentHashMap.fromArrays(inst_8917,inst_8945);
var inst_8947 = inst_8946;
var state_8991__$1 = (function (){var statearr_8994 = state_8991;
(statearr_8994[(7)] = inst_8947);

return statearr_8994;
})();
var statearr_8995_9061 = state_8991__$1;
(statearr_8995_9061[(2)] = null);

(statearr_8995_9061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (4))){
var inst_8955 = (state_8991[(8)]);
var inst_8951 = (state_8991[(9)]);
var inst_8951__$1 = (state_8991[(2)]);
var inst_8955__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8951__$1);
var inst_8956 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_8955__$1);
var state_8991__$1 = (function (){var statearr_8996 = state_8991;
(statearr_8996[(8)] = inst_8955__$1);

(statearr_8996[(9)] = inst_8951__$1);

return statearr_8996;
})();
if(inst_8956){
var statearr_8997_9062 = state_8991__$1;
(statearr_8997_9062[(1)] = (5));

} else {
var statearr_8998_9063 = state_8991__$1;
(statearr_8998_9063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (13))){
var inst_8980 = (state_8991[(2)]);
var state_8991__$1 = state_8991;
var statearr_8999_9064 = state_8991__$1;
(statearr_8999_9064[(2)] = inst_8980);

(statearr_8999_9064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (6))){
var inst_8955 = (state_8991[(8)]);
var inst_8965 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_8955);
var state_8991__$1 = state_8991;
if(inst_8965){
var statearr_9000_9065 = state_8991__$1;
(statearr_9000_9065[(1)] = (8));

} else {
var statearr_9001_9066 = state_8991__$1;
(statearr_9001_9066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (3))){
var inst_8989 = (state_8991[(2)]);
var state_8991__$1 = state_8991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8991__$1,inst_8989);
} else {
if((state_val_8992 === (12))){
var inst_8947 = (state_8991[(7)]);
var inst_8951 = (state_8991[(9)]);
var inst_8973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8974 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_8975 = (new cljs.core.PersistentVector(null,1,(5),inst_8973,inst_8974,null));
var inst_8976 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8951);
var inst_8977 = cljs.core.update_in.call(null,inst_8947,inst_8975,cljs.core.conj,inst_8976);
var inst_8947__$1 = inst_8977;
var state_8991__$1 = (function (){var statearr_9002 = state_8991;
(statearr_9002[(7)] = inst_8947__$1);

return statearr_9002;
})();
var statearr_9003_9067 = state_8991__$1;
(statearr_9003_9067[(2)] = null);

(statearr_9003_9067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (2))){
var inst_8947 = (state_8991[(7)]);
var inst_8949 = app.t3.main.model = inst_8947;
var state_8991__$1 = (function (){var statearr_9004 = state_8991;
(statearr_9004[(10)] = inst_8949);

return statearr_9004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8991__$1,(4),app.t3.main.evt);
} else {
if((state_val_8992 === (11))){
var inst_8970 = console.log("exit");
var inst_8971 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_8991__$1 = (function (){var statearr_9005 = state_8991;
(statearr_9005[(11)] = inst_8970);

return statearr_9005;
})();
var statearr_9006_9068 = state_8991__$1;
(statearr_9006_9068[(2)] = inst_8971);

(statearr_9006_9068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (9))){
var inst_8947 = (state_8991[(7)]);
var inst_8982 = app.t3.main.update.call(null,inst_8947);
var inst_8947__$1 = inst_8982;
var state_8991__$1 = (function (){var statearr_9007 = state_8991;
(statearr_9007[(7)] = inst_8947__$1);

return statearr_9007;
})();
var statearr_9008_9069 = state_8991__$1;
(statearr_9008_9069[(2)] = null);

(statearr_9008_9069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (5))){
var inst_8947 = (state_8991[(7)]);
var inst_8951 = (state_8991[(9)]);
var inst_8958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8959 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_8960 = (new cljs.core.PersistentVector(null,1,(5),inst_8958,inst_8959,null));
var inst_8961 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8951);
var inst_8962 = cljs.core.update_in.call(null,inst_8947,inst_8960,cljs.core.conj,inst_8961);
var inst_8947__$1 = inst_8962;
var state_8991__$1 = (function (){var statearr_9009 = state_8991;
(statearr_9009[(7)] = inst_8947__$1);

return statearr_9009;
})();
var statearr_9010_9070 = state_8991__$1;
(statearr_9010_9070[(2)] = null);

(statearr_9010_9070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (10))){
var inst_8985 = (state_8991[(2)]);
var state_8991__$1 = state_8991;
var statearr_9011_9071 = state_8991__$1;
(statearr_9011_9071[(2)] = inst_8985);

(statearr_9011_9071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8992 === (8))){
var inst_8951 = (state_8991[(9)]);
var inst_8967 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8951);
var inst_8968 = cljs.core._EQ_.call(null,inst_8967,"q");
var state_8991__$1 = state_8991;
if(inst_8968){
var statearr_9012_9072 = state_8991__$1;
(statearr_9012_9072[(1)] = (11));

} else {
var statearr_9013_9073 = state_8991__$1;
(statearr_9013_9073[(1)] = (12));

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
});})(c__2882__auto___9059))
;
return ((function (switch__2792__auto__,c__2882__auto___9059){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_9014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9014[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9014[(1)] = (1));

return statearr_9014;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_8991){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9015){if((e9015 instanceof Object)){
var ex__2796__auto__ = e9015;
var statearr_9016_9074 = state_8991;
(statearr_9016_9074[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9075 = state_8991;
state_8991 = G__9075;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_8991){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_8991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___9059))
})();
var state__2884__auto__ = (function (){var statearr_9017 = f__2883__auto__.call(null);
(statearr_9017[(6)] = c__2882__auto___9059);

return statearr_9017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___9059))
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
var vec__9018_9076 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9077 = cljs.core.nth.call(null,vec__9018_9076,(0),null);
var py_9078 = cljs.core.nth.call(null,vec__9018_9076,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_9077,py_9078);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__9021 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__9022 = null;
var count__9023 = (0);
var i__9024 = (0);
while(true){
if((i__9024 < count__9023)){
var entity = cljs.core._nth.call(null,chunk__9022,i__9024);
var vec__9025_9079 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9080 = cljs.core.nth.call(null,vec__9025_9079,(0),null);
var py_9081 = cljs.core.nth.call(null,vec__9025_9079,(1),null);
app.t3.main.p5.rect(px_9080,py_9081,(10),(10));


var G__9082 = seq__9021;
var G__9083 = chunk__9022;
var G__9084 = count__9023;
var G__9085 = (i__9024 + (1));
seq__9021 = G__9082;
chunk__9022 = G__9083;
count__9023 = G__9084;
i__9024 = G__9085;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9021);
if(temp__5457__auto__){
var seq__9021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9021__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9021__$1);
var G__9086 = cljs.core.chunk_rest.call(null,seq__9021__$1);
var G__9087 = c__4319__auto__;
var G__9088 = cljs.core.count.call(null,c__4319__auto__);
var G__9089 = (0);
seq__9021 = G__9086;
chunk__9022 = G__9087;
count__9023 = G__9088;
i__9024 = G__9089;
continue;
} else {
var entity = cljs.core.first.call(null,seq__9021__$1);
var vec__9028_9090 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_9091 = cljs.core.nth.call(null,vec__9028_9090,(0),null);
var py_9092 = cljs.core.nth.call(null,vec__9028_9090,(1),null);
app.t3.main.p5.rect(px_9091,py_9092,(10),(10));


var G__9093 = cljs.core.next.call(null,seq__9021__$1);
var G__9094 = null;
var G__9095 = (0);
var G__9096 = (0);
seq__9021 = G__9093;
chunk__9022 = G__9094;
count__9023 = G__9095;
i__9024 = G__9096;
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
return (function (state_9038){
var state_val_9039 = (state_9038[(1)]);
if((state_val_9039 === (1))){
var inst_9031 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9032 = app.t3.main.p5.key;
var inst_9033 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9032];
var inst_9034 = cljs.core.PersistentHashMap.fromArrays(inst_9031,inst_9033);
var state_9038__$1 = state_9038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9038__$1,(2),app.t3.main.evt,inst_9034);
} else {
if((state_val_9039 === (2))){
var inst_9036 = (state_9038[(2)]);
var state_9038__$1 = state_9038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9038__$1,inst_9036);
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
var statearr_9040 = [null,null,null,null,null,null,null];
(statearr_9040[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9040[(1)] = (1));

return statearr_9040;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_9038){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9041){if((e9041 instanceof Object)){
var ex__2796__auto__ = e9041;
var statearr_9042_9097 = state_9038;
(statearr_9042_9097[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9098 = state_9038;
state_9038 = G__9098;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_9038){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_9038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_9043 = f__2883__auto__.call(null);
(statearr_9043[(6)] = c__2882__auto__);

return statearr_9043;
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
return (function (state_9051){
var state_val_9052 = (state_9051[(1)]);
if((state_val_9052 === (1))){
var inst_9044 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9045 = app.t3.main.p5.key;
var inst_9046 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_9045];
var inst_9047 = cljs.core.PersistentHashMap.fromArrays(inst_9044,inst_9046);
var state_9051__$1 = state_9051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9051__$1,(2),app.t3.main.evt,inst_9047);
} else {
if((state_val_9052 === (2))){
var inst_9049 = (state_9051[(2)]);
var state_9051__$1 = state_9051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9051__$1,inst_9049);
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
var statearr_9053 = [null,null,null,null,null,null,null];
(statearr_9053[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_9053[(1)] = (1));

return statearr_9053;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_9051){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9054){if((e9054 instanceof Object)){
var ex__2796__auto__ = e9054;
var statearr_9055_9099 = state_9051;
(statearr_9055_9099[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9100 = state_9051;
state_9051 = G__9100;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_9051){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_9051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_9056 = f__2883__auto__.call(null);
(statearr_9056[(6)] = c__2882__auto__);

return statearr_9056;
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
