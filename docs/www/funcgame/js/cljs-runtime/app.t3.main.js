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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ctx__$1,key){
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256).cljs$core$IFn$_invoke$arity$1(ctx__$1),key)))){
return ctx__$1;
} else {
var pred__37025 = cljs.core._EQ_;
var expr__37026 = key;
if(cljs.core.truth_((pred__37025.cljs$core$IFn$_invoke$arity$2 ? pred__37025.cljs$core$IFn$_invoke$arity$2("w",expr__37026) : pred__37025.call(null,"w",expr__37026)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_((pred__37025.cljs$core$IFn$_invoke$arity$2 ? pred__37025.cljs$core$IFn$_invoke$arity$2("s",expr__37026) : pred__37025.call(null,"s",expr__37026)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_((pred__37025.cljs$core$IFn$_invoke$arity$2 ? pred__37025.cljs$core$IFn$_invoke$arity$2("a",expr__37026) : pred__37025.call(null,"a",expr__37026)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_((pred__37025.cljs$core$IFn$_invoke$arity$2 ? pred__37025.cljs$core$IFn$_invoke$arity$2("d",expr__37026) : pred__37025.call(null,"d",expr__37026)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_((pred__37025.cljs$core$IFn$_invoke$arity$2 ? pred__37025.cljs$core$IFn$_invoke$arity$2("j",expr__37026) : pred__37025.call(null,"j",expr__37026)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__37025,expr__37026){
return (function (p1__37019_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37019_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__37025,expr__37026))
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.thrustSpd,(0)], null)));
});
app.t3.main.updateKey = (function app$t3$main$updateKey(ctx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),cljs.core.PersistentHashSet.EMPTY], null)], 0));
});
app.t3.main.updateCamera = (function app$t3$main$updateCamera(ctx){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.thrustSpd,(0)], null)));
});
app.t3.main.updateVelocity = (function app$t3$main$updateVelocity(entity){
if((!(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null))))){
return entity;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(entity)));
}
});
app.t3.main.updateEntities = (function app$t3$main$updateEntities(ctx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.t3.main.updateVelocity,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx))], null)], 0));
});
app.t3.main.removeEntityIfOutOfBound = (function app$t3$main$removeEntityIfOutOfBound(ctx){
var vec__37047 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__37047,cx,_,entities){
return (function (p__37050){
var map__37052 = p__37050;
var map__37052__$1 = (((((!((map__37052 == null))))?(((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37052):map__37052);
var entity = map__37052__$1;
var vec__37053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__37047,cx,_,entities))
,entities)], null)], 0));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__37069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37069,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4523__auto__ = ((function (spawnPos,vec__37069,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__37072(s__37073){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__37069,cx,_,c){
return (function (){
var s__37073__$1 = s__37073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37073__$1);
if(temp__5735__auto__){
var s__37073__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37073__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37073__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37075 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37074 = (0);
while(true){
if((i__37074 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37074);
cljs.core.chunk_append(b__37075,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__37609 = (i__37074 + (1));
i__37074 = G__37609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37075),app$t3$main$spawnEnemy_$_iter__37072(cljs.core.chunk_rest(s__37073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37075),null);
}
} else {
var r = cljs.core.first(s__37073__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__37072(cljs.core.rest(s__37073__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__37069,cx,_,c))
,null,null));
});})(spawnPos,vec__37069,cx,_,c))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})();
var spawnRcs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (spawnPos,vec__37069,cx,_,c,rcs){
return (function (p1__37060_SHARP_){
return ((0) < cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37060_SHARP_,(2)));
});})(spawnPos,vec__37069,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (spawnPos,vec__37069,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__37279){
var vec__37281 = p__37279;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(0),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__37069,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set(spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null)], 0));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37290_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__37290_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (playerBullets){
return (function (p1__37291_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__37291_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4523__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__37293(s__37294){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__37294__$1 = s__37294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var b = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37294__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__37293_$_iter__37295(s__37296){
return (new cljs.core.LazySeq(null,((function (s__37294__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies){
return (function (){
var s__37296__$1 = s__37296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37296__$1);
if(temp__5735__auto____$1){
var s__37296__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37296__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37296__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37298 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37297 = (0);
while(true){
if((i__37297 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37297);
cljs.core.chunk_append(b__37298,(function (){var vec__37302 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(1),null);
var vec__37305 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__37626 = (i__37297 + (1));
i__37297 = G__37626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37298),app$t3$main$checkCollide_$_iter__37293_$_iter__37295(cljs.core.chunk_rest(s__37296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37298),null);
}
} else {
var e = cljs.core.first(s__37296__$2);
return cljs.core.cons((function (){var vec__37310 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(1),null);
var vec__37313 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37313,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37313,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__37293_$_iter__37295(cljs.core.rest(s__37296__$2)));
}
} else {
return null;
}
break;
}
});})(s__37294__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies))
,null,null));
});})(s__37294__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(enemies));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t3$main$checkCollide_$_iter__37293(cljs.core.rest(s__37294__$1)));
} else {
var G__37631 = cljs.core.rest(s__37294__$1);
s__37294__$1 = G__37631;
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
return iter__4523__auto__(playerBullets);
})();
var collide = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (playerBullets,enemies,check){
return (function (p__37320){
var vec__37322 = p__37320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(1),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (playerBullets,enemies,check,collide){
return (function (p1__37292_SHARP_){
return cljs.core.not(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,p1__37292_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null)], 0));
});
app.t3.main.step = (function app$t3$main$step(ctx){
return app.t3.main.updateKey(app.t3.main.updateCamera(app.t3.main.spawnEnemy(app.t3.main.checkCollide(app.t3.main.removeEntityIfOutOfBound(app.t3.main.updateEntities(app.t3.main.updatePlayerThrust(app.t3.main.updatePlayerInput(ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__37329,camera,pos){
var map__37331 = p__37329;
var map__37331__$1 = (((((!((map__37331 == null))))?(((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37331):map__37331);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword(null,"view","view",1247994814));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,view,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,pos,camera));
});
app.t3.main.main = (function app$t3$main$main(){
app.t3.main.model = null;

app.t3.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

setInterval((function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_37347){
var state_val_37348 = (state_37347[(1)]);
if((state_val_37348 === (1))){
var inst_37340 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37341 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_37343 = cljs.core.PersistentHashMap.fromArrays(inst_37340,inst_37341);
var state_37347__$1 = state_37347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37347__$1,(2),app.t3.main.evt,inst_37343);
} else {
if((state_val_37348 === (2))){
var inst_37345 = (state_37347[(2)]);
var state_37347__$1 = state_37347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37347__$1,inst_37345);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t3$main$main_$_state_machine__30585__auto__ = null;
var app$t3$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37352 = [null,null,null,null,null,null,null];
(statearr_37352[(0)] = app$t3$main$main_$_state_machine__30585__auto__);

(statearr_37352[(1)] = (1));

return statearr_37352;
});
var app$t3$main$main_$_state_machine__30585__auto____1 = (function (state_37347){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37347);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37354){if((e37354 instanceof Object)){
var ex__30588__auto__ = e37354;
var statearr_37356_37650 = state_37347;
(statearr_37356_37650[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37652 = state_37347;
state_37347 = G__37652;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30585__auto__ = function(state_37347){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30585__auto____1.call(this,state_37347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30585__auto____0;
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30585__auto____1;
return app$t3$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_37359 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37359[(6)] = c__30812__auto__);

return statearr_37359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
}),(33));

var c__30812__auto___37654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___37654){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___37654){
return (function (state_37446){
var state_val_37447 = (state_37446[(1)]);
if((state_val_37447 === (7))){
var inst_37442 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
var statearr_37450_37657 = state_37446__$1;
(statearr_37450_37657[(2)] = inst_37442);

(statearr_37450_37657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (1))){
var inst_37361 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_37362 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37364 = [(0),(0)];
var inst_37365 = (new cljs.core.PersistentVector(null,2,(5),inst_37363,inst_37364,null));
var inst_37366 = [inst_37365];
var inst_37367 = cljs.core.PersistentHashMap.fromArrays(inst_37362,inst_37366);
var inst_37368 = cljs.core.PersistentHashSet.EMPTY;
var inst_37369 = cljs.core.PersistentHashSet.EMPTY;
var inst_37371 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37372 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37374 = [(0),(0)];
var inst_37375 = (new cljs.core.PersistentVector(null,2,(5),inst_37372,inst_37374,null));
var inst_37376 = [inst_37375];
var inst_37377 = cljs.core.PersistentHashMap.fromArrays(inst_37371,inst_37376);
var inst_37378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37379 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_37380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37381 = [(100),(0)];
var inst_37382 = (new cljs.core.PersistentVector(null,2,(5),inst_37380,inst_37381,null));
var inst_37383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37384 = [(0),(-1)];
var inst_37385 = (new cljs.core.PersistentVector(null,2,(5),inst_37383,inst_37384,null));
var inst_37386 = [inst_37382,inst_37385];
var inst_37387 = cljs.core.PersistentHashMap.fromArrays(inst_37379,inst_37386);
var inst_37388 = [inst_37387];
var inst_37389 = (new cljs.core.PersistentVector(null,1,(5),inst_37378,inst_37388,null));
var inst_37390 = cljs.core.PersistentHashSet.EMPTY;
var inst_37391 = [inst_37367,inst_37368,inst_37369,inst_37377,inst_37389,inst_37390];
var inst_37392 = cljs.core.PersistentHashMap.fromArrays(inst_37361,inst_37391);
var inst_37393 = inst_37392;
var state_37446__$1 = (function (){var statearr_37454 = state_37446;
(statearr_37454[(7)] = inst_37393);

return statearr_37454;
})();
var statearr_37455_37666 = state_37446__$1;
(statearr_37455_37666[(2)] = null);

(statearr_37455_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (4))){
var inst_37406 = (state_37446[(8)]);
var inst_37410 = (state_37446[(9)]);
var inst_37406__$1 = (state_37446[(2)]);
var inst_37410__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_37406__$1);
var inst_37411 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37410__$1);
var state_37446__$1 = (function (){var statearr_37457 = state_37446;
(statearr_37457[(8)] = inst_37406__$1);

(statearr_37457[(9)] = inst_37410__$1);

return statearr_37457;
})();
if(inst_37411){
var statearr_37458_37668 = state_37446__$1;
(statearr_37458_37668[(1)] = (5));

} else {
var statearr_37459_37669 = state_37446__$1;
(statearr_37459_37669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (13))){
var inst_37435 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
var statearr_37460_37670 = state_37446__$1;
(statearr_37460_37670[(2)] = inst_37435);

(statearr_37460_37670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (6))){
var inst_37410 = (state_37446[(9)]);
var inst_37420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_37410);
var state_37446__$1 = state_37446;
if(inst_37420){
var statearr_37461_37672 = state_37446__$1;
(statearr_37461_37672[(1)] = (8));

} else {
var statearr_37462_37674 = state_37446__$1;
(statearr_37462_37674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (3))){
var inst_37444 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37446__$1,inst_37444);
} else {
if((state_val_37447 === (12))){
var inst_37406 = (state_37446[(8)]);
var inst_37393 = (state_37446[(7)]);
var inst_37428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37429 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_37430 = (new cljs.core.PersistentVector(null,1,(5),inst_37428,inst_37429,null));
var inst_37431 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_37406);
var inst_37432 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37393,inst_37430,cljs.core.conj,inst_37431);
var inst_37393__$1 = inst_37432;
var state_37446__$1 = (function (){var statearr_37463 = state_37446;
(statearr_37463[(7)] = inst_37393__$1);

return statearr_37463;
})();
var statearr_37464_37715 = state_37446__$1;
(statearr_37464_37715[(2)] = null);

(statearr_37464_37715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (2))){
var inst_37393 = (state_37446[(7)]);
var inst_37404 = app.t3.main.model = inst_37393;
var state_37446__$1 = (function (){var statearr_37465 = state_37446;
(statearr_37465[(10)] = inst_37404);

return statearr_37465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37446__$1,(4),app.t3.main.evt);
} else {
if((state_val_37447 === (11))){
var inst_37425 = console.log("exit");
var inst_37426 = cljs.core.async.close_BANG_(app.t3.main.evt);
var state_37446__$1 = (function (){var statearr_37466 = state_37446;
(statearr_37466[(11)] = inst_37425);

return statearr_37466;
})();
var statearr_37473_37747 = state_37446__$1;
(statearr_37473_37747[(2)] = inst_37426);

(statearr_37473_37747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (9))){
var inst_37393 = (state_37446[(7)]);
var inst_37437 = app.t3.main.step(inst_37393);
var inst_37393__$1 = inst_37437;
var state_37446__$1 = (function (){var statearr_37476 = state_37446;
(statearr_37476[(7)] = inst_37393__$1);

return statearr_37476;
})();
var statearr_37477_37760 = state_37446__$1;
(statearr_37477_37760[(2)] = null);

(statearr_37477_37760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (5))){
var inst_37406 = (state_37446[(8)]);
var inst_37393 = (state_37446[(7)]);
var inst_37413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37414 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_37415 = (new cljs.core.PersistentVector(null,1,(5),inst_37413,inst_37414,null));
var inst_37416 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_37406);
var inst_37417 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37393,inst_37415,cljs.core.conj,inst_37416);
var inst_37393__$1 = inst_37417;
var state_37446__$1 = (function (){var statearr_37478 = state_37446;
(statearr_37478[(7)] = inst_37393__$1);

return statearr_37478;
})();
var statearr_37480_37780 = state_37446__$1;
(statearr_37480_37780[(2)] = null);

(statearr_37480_37780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (10))){
var inst_37440 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
var statearr_37481_37791 = state_37446__$1;
(statearr_37481_37791[(2)] = inst_37440);

(statearr_37481_37791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (8))){
var inst_37406 = (state_37446[(8)]);
var inst_37422 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_37406);
var inst_37423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37422,"q");
var state_37446__$1 = state_37446;
if(inst_37423){
var statearr_37484_37805 = state_37446__$1;
(statearr_37484_37805[(1)] = (11));

} else {
var statearr_37485_37814 = state_37446__$1;
(statearr_37485_37814[(1)] = (12));

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
});})(c__30812__auto___37654))
;
return ((function (switch__30584__auto__,c__30812__auto___37654){
return (function() {
var app$t3$main$main_$_state_machine__30585__auto__ = null;
var app$t3$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37487[(0)] = app$t3$main$main_$_state_machine__30585__auto__);

(statearr_37487[(1)] = (1));

return statearr_37487;
});
var app$t3$main$main_$_state_machine__30585__auto____1 = (function (state_37446){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37446);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37495){if((e37495 instanceof Object)){
var ex__30588__auto__ = e37495;
var statearr_37496_37839 = state_37446;
(statearr_37496_37839[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37446;
state_37446 = G__37841;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30585__auto__ = function(state_37446){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30585__auto____1.call(this,state_37446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30585__auto____0;
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30585__auto____1;
return app$t3$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___37654))
})();
var state__30814__auto__ = (function (){var statearr_37499 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37499[(6)] = c__30812__auto___37654);

return statearr_37499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___37654))
);


var projectionFn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t3.main.projection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),((app.t3.main.ch / (2)) | (0))], null)], null));
app.t3.main.p5.setup = ((function (projectionFn){
return (function (){
var canvas = app.t3.main.p5.createCanvas(app.t3.main.cw,app.t3.main.ch);
return canvas.parent("container");
});})(projectionFn))
;

app.t3.main.p5.draw = ((function (projectionFn){
return (function (){
if(cljs.core.truth_(app.t3.main.model)){
var vec__37501_37843 = (function (){var G__37504 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37505 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37504,G__37505) : projectionFn.call(null,G__37504,G__37505));
})();
var px_37844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37501_37843,(0),null);
var py_37845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37501_37843,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_37844,py_37845);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__37508 = cljs.core.seq(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__37509 = null;
var count__37510 = (0);
var i__37511 = (0);
while(true){
if((i__37511 < count__37510)){
var entity = chunk__37509.cljs$core$IIndexed$_nth$arity$2(null,i__37511);
var vec__37554_37850 = (function (){var G__37557 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37558 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37557,G__37558) : projectionFn.call(null,G__37557,G__37558));
})();
var px_37851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554_37850,(0),null);
var py_37852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554_37850,(1),null);
app.t3.main.p5.rect(px_37851,py_37852,(10),(10));


var G__37855 = seq__37508;
var G__37856 = chunk__37509;
var G__37857 = count__37510;
var G__37858 = (i__37511 + (1));
seq__37508 = G__37855;
chunk__37509 = G__37856;
count__37510 = G__37857;
i__37511 = G__37858;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37508);
if(temp__5735__auto__){
var seq__37508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37508__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37508__$1);
var G__37859 = cljs.core.chunk_rest(seq__37508__$1);
var G__37860 = c__4550__auto__;
var G__37861 = cljs.core.count(c__4550__auto__);
var G__37862 = (0);
seq__37508 = G__37859;
chunk__37509 = G__37860;
count__37510 = G__37861;
i__37511 = G__37862;
continue;
} else {
var entity = cljs.core.first(seq__37508__$1);
var vec__37559_37864 = (function (){var G__37562 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37563 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37562,G__37563) : projectionFn.call(null,G__37562,G__37563));
})();
var px_37865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559_37864,(0),null);
var py_37866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559_37864,(1),null);
app.t3.main.p5.rect(px_37865,py_37866,(10),(10));


var G__37870 = cljs.core.next(seq__37508__$1);
var G__37871 = null;
var G__37872 = (0);
var G__37873 = (0);
seq__37508 = G__37870;
chunk__37509 = G__37871;
count__37510 = G__37872;
i__37511 = G__37873;
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,projectionFn){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,projectionFn){
return (function (state_37571){
var state_val_37572 = (state_37571[(1)]);
if((state_val_37572 === (1))){
var inst_37564 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37565 = app.t3.main.p5.key;
var inst_37566 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37565];
var inst_37567 = cljs.core.PersistentHashMap.fromArrays(inst_37564,inst_37566);
var state_37571__$1 = state_37571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37571__$1,(2),app.t3.main.evt,inst_37567);
} else {
if((state_val_37572 === (2))){
var inst_37569 = (state_37571[(2)]);
var state_37571__$1 = state_37571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37571__$1,inst_37569);
} else {
return null;
}
}
});})(c__30812__auto__,projectionFn))
;
return ((function (switch__30584__auto__,c__30812__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__30585__auto__ = null;
var app$t3$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37573 = [null,null,null,null,null,null,null];
(statearr_37573[(0)] = app$t3$main$main_$_state_machine__30585__auto__);

(statearr_37573[(1)] = (1));

return statearr_37573;
});
var app$t3$main$main_$_state_machine__30585__auto____1 = (function (state_37571){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37571);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37580){if((e37580 instanceof Object)){
var ex__30588__auto__ = e37580;
var statearr_37581_37877 = state_37571;
(statearr_37581_37877[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37879 = state_37571;
state_37571 = G__37879;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30585__auto__ = function(state_37571){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30585__auto____1.call(this,state_37571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30585__auto____0;
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30585__auto____1;
return app$t3$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,projectionFn))
})();
var state__30814__auto__ = (function (){var statearr_37582 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37582[(6)] = c__30812__auto__);

return statearr_37582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,projectionFn))
);

return c__30812__auto__;
});})(projectionFn))
;

return app.t3.main.p5.keyReleased = ((function (projectionFn){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,projectionFn){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,projectionFn){
return (function (state_37595){
var state_val_37596 = (state_37595[(1)]);
if((state_val_37596 === (1))){
var inst_37587 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37589 = app.t3.main.p5.key;
var inst_37590 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_37589];
var inst_37591 = cljs.core.PersistentHashMap.fromArrays(inst_37587,inst_37590);
var state_37595__$1 = state_37595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37595__$1,(2),app.t3.main.evt,inst_37591);
} else {
if((state_val_37596 === (2))){
var inst_37593 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37595__$1,inst_37593);
} else {
return null;
}
}
});})(c__30812__auto__,projectionFn))
;
return ((function (switch__30584__auto__,c__30812__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__30585__auto__ = null;
var app$t3$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37603 = [null,null,null,null,null,null,null];
(statearr_37603[(0)] = app$t3$main$main_$_state_machine__30585__auto__);

(statearr_37603[(1)] = (1));

return statearr_37603;
});
var app$t3$main$main_$_state_machine__30585__auto____1 = (function (state_37595){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37595);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37604){if((e37604 instanceof Object)){
var ex__30588__auto__ = e37604;
var statearr_37605_37884 = state_37595;
(statearr_37605_37884[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37887 = state_37595;
state_37595 = G__37887;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30585__auto__ = function(state_37595){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30585__auto____1.call(this,state_37595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30585__auto____0;
app$t3$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30585__auto____1;
return app$t3$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,projectionFn))
})();
var state__30814__auto__ = (function (){var statearr_37606 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37606[(6)] = c__30812__auto__);

return statearr_37606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,projectionFn))
);

return c__30812__auto__;
});})(projectionFn))
;
});
app.t3.main.main();

//# sourceMappingURL=app.t3.main.js.map
