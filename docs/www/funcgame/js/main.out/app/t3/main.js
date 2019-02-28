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
var pred__17121 = cljs.core._EQ_;
var expr__17122 = key;
if(cljs.core.truth_(pred__17121.call(null,"w",expr__17122))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__17121.call(null,"s",expr__17122))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__17121.call(null,"a",expr__17122))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__17121.call(null,"d",expr__17122))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__17121.call(null,"j",expr__17122))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__17121,expr__17122){
return (function (p1__17120_SHARP_){
return cljs.core.conj.call(null,p1__17120_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__17121,expr__17122))
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
var vec__17124 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__17124,(0),null);
var _ = cljs.core.nth.call(null,vec__17124,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__17124,cx,_,entities){
return (function (p__17127){
var map__17128 = p__17127;
var map__17128__$1 = ((((!((map__17128 == null)))?(((((map__17128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17128):map__17128);
var entity = map__17128__$1;
var vec__17129 = cljs.core.get.call(null,map__17128__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__17129,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17129,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__17124,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__17134 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__17134,(0),null);
var _ = cljs.core.nth.call(null,vec__17134,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__17134,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__17137(s__17138){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__17134,cx,_,c){
return (function (){
var s__17138__$1 = s__17138;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17138__$1);
if(temp__5457__auto__){
var s__17138__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17138__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__17138__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__17140 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__17139 = (0);
while(true){
if((i__17139 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__17139);
cljs.core.chunk_append.call(null,b__17140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__17145 = (i__17139 + (1));
i__17139 = G__17145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17140),app$t3$main$spawnEnemy_$_iter__17137.call(null,cljs.core.chunk_rest.call(null,s__17138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17140),null);
}
} else {
var r = cljs.core.first.call(null,s__17138__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__17137.call(null,cljs.core.rest.call(null,s__17138__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__17134,cx,_,c))
,null,null));
});})(spawnPos,vec__17134,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__17134,cx,_,c,rcs){
return (function (p1__17133_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__17133_SHARP_,(2)));
});})(spawnPos,vec__17134,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__17134,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__17141){
var vec__17142 = p__17141;
var r = cljs.core.nth.call(null,vec__17142,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__17142,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__17134,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__17146_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__17146_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__17147_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__17147_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__17149(s__17150){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__17150__$1 = s__17150;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17150__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__17150__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__17149_$_iter__17151(s__17152){
return (new cljs.core.LazySeq(null,((function (s__17150__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__17152__$1 = s__17152;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__17152__$1);
if(temp__5457__auto____$1){
var s__17152__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17152__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__17152__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__17154 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__17153 = (0);
while(true){
if((i__17153 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__17153);
cljs.core.chunk_append.call(null,b__17154,(function (){var vec__17155 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__17155,(0),null);
var by = cljs.core.nth.call(null,vec__17155,(1),null);
var vec__17158 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__17158,(0),null);
var ey = cljs.core.nth.call(null,vec__17158,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__17171 = (i__17153 + (1));
i__17153 = G__17171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),app$t3$main$checkCollide_$_iter__17149_$_iter__17151.call(null,cljs.core.chunk_rest.call(null,s__17152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),null);
}
} else {
var e = cljs.core.first.call(null,s__17152__$2);
return cljs.core.cons.call(null,(function (){var vec__17161 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__17161,(0),null);
var by = cljs.core.nth.call(null,vec__17161,(1),null);
var vec__17164 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__17164,(0),null);
var ey = cljs.core.nth.call(null,vec__17164,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__17149_$_iter__17151.call(null,cljs.core.rest.call(null,s__17152__$2)));
}
} else {
return null;
}
break;
}
});})(s__17150__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__17150__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__17149.call(null,cljs.core.rest.call(null,s__17150__$1)));
} else {
var G__17172 = cljs.core.rest.call(null,s__17150__$1);
s__17150__$1 = G__17172;
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
return (function (p__17167){
var vec__17168 = p__17167;
var _ = cljs.core.nth.call(null,vec__17168,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17168,(1),null);
var isCollide = cljs.core.nth.call(null,vec__17168,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__17148_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__17148_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__17173,camera,pos){
var map__17174 = p__17173;
var map__17174__$1 = ((((!((map__17174 == null)))?(((((map__17174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17174):map__17174);
var view = cljs.core.get.call(null,map__17174__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_17182){
var state_val_17183 = (state_17182[(1)]);
if((state_val_17183 === (1))){
var inst_17176 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_17177 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_17178 = cljs.core.PersistentHashMap.fromArrays(inst_17176,inst_17177);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17182__$1,(2),app.t3.main.evt,inst_17178);
} else {
if((state_val_17183 === (2))){
var inst_17180 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17182__$1,inst_17180);
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
var statearr_17184 = [null,null,null,null,null,null,null];
(statearr_17184[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_17184[(1)] = (1));

return statearr_17184;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_17182){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17185){if((e17185 instanceof Object)){
var ex__2796__auto__ = e17185;
var statearr_17186_17328 = state_17182;
(statearr_17186_17328[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17329 = state_17182;
state_17182 = G__17329;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_17182){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_17182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_17187 = f__2883__auto__.call(null);
(statearr_17187[(6)] = c__2882__auto__);

return statearr_17187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___17330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___17330){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___17330){
return (function (state_17262){
var state_val_17263 = (state_17262[(1)]);
if((state_val_17263 === (7))){
var inst_17258 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17264_17331 = state_17262__$1;
(statearr_17264_17331[(2)] = inst_17258);

(statearr_17264_17331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (1))){
var inst_17188 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_17189 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_17190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17191 = [(0),(0)];
var inst_17192 = (new cljs.core.PersistentVector(null,2,(5),inst_17190,inst_17191,null));
var inst_17193 = [inst_17192];
var inst_17194 = cljs.core.PersistentHashMap.fromArrays(inst_17189,inst_17193);
var inst_17195 = cljs.core.PersistentHashSet.EMPTY;
var inst_17196 = cljs.core.PersistentHashSet.EMPTY;
var inst_17197 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_17198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17199 = [(0),(0)];
var inst_17200 = (new cljs.core.PersistentVector(null,2,(5),inst_17198,inst_17199,null));
var inst_17201 = [inst_17200];
var inst_17202 = cljs.core.PersistentHashMap.fromArrays(inst_17197,inst_17201);
var inst_17203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17204 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_17205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17206 = [(100),(0)];
var inst_17207 = (new cljs.core.PersistentVector(null,2,(5),inst_17205,inst_17206,null));
var inst_17208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17209 = [(0),(-1)];
var inst_17210 = (new cljs.core.PersistentVector(null,2,(5),inst_17208,inst_17209,null));
var inst_17211 = [inst_17207,inst_17210];
var inst_17212 = cljs.core.PersistentHashMap.fromArrays(inst_17204,inst_17211);
var inst_17213 = [inst_17212];
var inst_17214 = (new cljs.core.PersistentVector(null,1,(5),inst_17203,inst_17213,null));
var inst_17215 = cljs.core.PersistentHashSet.EMPTY;
var inst_17216 = [inst_17194,inst_17195,inst_17196,inst_17202,inst_17214,inst_17215];
var inst_17217 = cljs.core.PersistentHashMap.fromArrays(inst_17188,inst_17216);
var inst_17218 = inst_17217;
var state_17262__$1 = (function (){var statearr_17265 = state_17262;
(statearr_17265[(7)] = inst_17218);

return statearr_17265;
})();
var statearr_17266_17332 = state_17262__$1;
(statearr_17266_17332[(2)] = null);

(statearr_17266_17332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (4))){
var inst_17222 = (state_17262[(8)]);
var inst_17226 = (state_17262[(9)]);
var inst_17222__$1 = (state_17262[(2)]);
var inst_17226__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_17222__$1);
var inst_17227 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_17226__$1);
var state_17262__$1 = (function (){var statearr_17267 = state_17262;
(statearr_17267[(8)] = inst_17222__$1);

(statearr_17267[(9)] = inst_17226__$1);

return statearr_17267;
})();
if(inst_17227){
var statearr_17268_17333 = state_17262__$1;
(statearr_17268_17333[(1)] = (5));

} else {
var statearr_17269_17334 = state_17262__$1;
(statearr_17269_17334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (13))){
var inst_17251 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17270_17335 = state_17262__$1;
(statearr_17270_17335[(2)] = inst_17251);

(statearr_17270_17335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (6))){
var inst_17226 = (state_17262[(9)]);
var inst_17236 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_17226);
var state_17262__$1 = state_17262;
if(inst_17236){
var statearr_17271_17336 = state_17262__$1;
(statearr_17271_17336[(1)] = (8));

} else {
var statearr_17272_17337 = state_17262__$1;
(statearr_17272_17337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (3))){
var inst_17260 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17262__$1,inst_17260);
} else {
if((state_val_17263 === (12))){
var inst_17218 = (state_17262[(7)]);
var inst_17222 = (state_17262[(8)]);
var inst_17244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17245 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_17246 = (new cljs.core.PersistentVector(null,1,(5),inst_17244,inst_17245,null));
var inst_17247 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_17222);
var inst_17248 = cljs.core.update_in.call(null,inst_17218,inst_17246,cljs.core.conj,inst_17247);
var inst_17218__$1 = inst_17248;
var state_17262__$1 = (function (){var statearr_17273 = state_17262;
(statearr_17273[(7)] = inst_17218__$1);

return statearr_17273;
})();
var statearr_17274_17338 = state_17262__$1;
(statearr_17274_17338[(2)] = null);

(statearr_17274_17338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (2))){
var inst_17218 = (state_17262[(7)]);
var inst_17220 = app.t3.main.model = inst_17218;
var state_17262__$1 = (function (){var statearr_17275 = state_17262;
(statearr_17275[(10)] = inst_17220);

return statearr_17275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17262__$1,(4),app.t3.main.evt);
} else {
if((state_val_17263 === (11))){
var inst_17241 = console.log("exit");
var inst_17242 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_17262__$1 = (function (){var statearr_17276 = state_17262;
(statearr_17276[(11)] = inst_17241);

return statearr_17276;
})();
var statearr_17277_17339 = state_17262__$1;
(statearr_17277_17339[(2)] = inst_17242);

(statearr_17277_17339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (9))){
var inst_17218 = (state_17262[(7)]);
var inst_17253 = app.t3.main.update.call(null,inst_17218);
var inst_17218__$1 = inst_17253;
var state_17262__$1 = (function (){var statearr_17278 = state_17262;
(statearr_17278[(7)] = inst_17218__$1);

return statearr_17278;
})();
var statearr_17279_17340 = state_17262__$1;
(statearr_17279_17340[(2)] = null);

(statearr_17279_17340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (5))){
var inst_17218 = (state_17262[(7)]);
var inst_17222 = (state_17262[(8)]);
var inst_17229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17230 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_17231 = (new cljs.core.PersistentVector(null,1,(5),inst_17229,inst_17230,null));
var inst_17232 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_17222);
var inst_17233 = cljs.core.update_in.call(null,inst_17218,inst_17231,cljs.core.conj,inst_17232);
var inst_17218__$1 = inst_17233;
var state_17262__$1 = (function (){var statearr_17280 = state_17262;
(statearr_17280[(7)] = inst_17218__$1);

return statearr_17280;
})();
var statearr_17281_17341 = state_17262__$1;
(statearr_17281_17341[(2)] = null);

(statearr_17281_17341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (10))){
var inst_17256 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17282_17342 = state_17262__$1;
(statearr_17282_17342[(2)] = inst_17256);

(statearr_17282_17342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (8))){
var inst_17222 = (state_17262[(8)]);
var inst_17238 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_17222);
var inst_17239 = cljs.core._EQ_.call(null,inst_17238,"q");
var state_17262__$1 = state_17262;
if(inst_17239){
var statearr_17283_17343 = state_17262__$1;
(statearr_17283_17343[(1)] = (11));

} else {
var statearr_17284_17344 = state_17262__$1;
(statearr_17284_17344[(1)] = (12));

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
});})(c__2882__auto___17330))
;
return ((function (switch__2792__auto__,c__2882__auto___17330){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_17285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17285[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_17285[(1)] = (1));

return statearr_17285;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_17262){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17286){if((e17286 instanceof Object)){
var ex__2796__auto__ = e17286;
var statearr_17287_17345 = state_17262;
(statearr_17287_17345[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17346 = state_17262;
state_17262 = G__17346;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_17262){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_17262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___17330))
})();
var state__2884__auto__ = (function (){var statearr_17288 = f__2883__auto__.call(null);
(statearr_17288[(6)] = c__2882__auto___17330);

return statearr_17288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___17330))
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
var vec__17289_17347 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_17348 = cljs.core.nth.call(null,vec__17289_17347,(0),null);
var py_17349 = cljs.core.nth.call(null,vec__17289_17347,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_17348,py_17349);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__17292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__17293 = null;
var count__17294 = (0);
var i__17295 = (0);
while(true){
if((i__17295 < count__17294)){
var entity = cljs.core._nth.call(null,chunk__17293,i__17295);
var vec__17296_17350 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_17351 = cljs.core.nth.call(null,vec__17296_17350,(0),null);
var py_17352 = cljs.core.nth.call(null,vec__17296_17350,(1),null);
app.t3.main.p5.rect(px_17351,py_17352,(10),(10));


var G__17353 = seq__17292;
var G__17354 = chunk__17293;
var G__17355 = count__17294;
var G__17356 = (i__17295 + (1));
seq__17292 = G__17353;
chunk__17293 = G__17354;
count__17294 = G__17355;
i__17295 = G__17356;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17292);
if(temp__5457__auto__){
var seq__17292__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17292__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__17292__$1);
var G__17357 = cljs.core.chunk_rest.call(null,seq__17292__$1);
var G__17358 = c__4319__auto__;
var G__17359 = cljs.core.count.call(null,c__4319__auto__);
var G__17360 = (0);
seq__17292 = G__17357;
chunk__17293 = G__17358;
count__17294 = G__17359;
i__17295 = G__17360;
continue;
} else {
var entity = cljs.core.first.call(null,seq__17292__$1);
var vec__17299_17361 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_17362 = cljs.core.nth.call(null,vec__17299_17361,(0),null);
var py_17363 = cljs.core.nth.call(null,vec__17299_17361,(1),null);
app.t3.main.p5.rect(px_17362,py_17363,(10),(10));


var G__17364 = cljs.core.next.call(null,seq__17292__$1);
var G__17365 = null;
var G__17366 = (0);
var G__17367 = (0);
seq__17292 = G__17364;
chunk__17293 = G__17365;
count__17294 = G__17366;
i__17295 = G__17367;
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
return (function (state_17309){
var state_val_17310 = (state_17309[(1)]);
if((state_val_17310 === (1))){
var inst_17302 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_17303 = app.t3.main.p5.key;
var inst_17304 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_17303];
var inst_17305 = cljs.core.PersistentHashMap.fromArrays(inst_17302,inst_17304);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17309__$1,(2),app.t3.main.evt,inst_17305);
} else {
if((state_val_17310 === (2))){
var inst_17307 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17309__$1,inst_17307);
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
var statearr_17311 = [null,null,null,null,null,null,null];
(statearr_17311[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_17311[(1)] = (1));

return statearr_17311;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_17309){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17312){if((e17312 instanceof Object)){
var ex__2796__auto__ = e17312;
var statearr_17313_17368 = state_17309;
(statearr_17313_17368[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17369 = state_17309;
state_17309 = G__17369;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_17309){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_17309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_17314 = f__2883__auto__.call(null);
(statearr_17314[(6)] = c__2882__auto__);

return statearr_17314;
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
return (function (state_17322){
var state_val_17323 = (state_17322[(1)]);
if((state_val_17323 === (1))){
var inst_17315 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_17316 = app.t3.main.p5.key;
var inst_17317 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_17316];
var inst_17318 = cljs.core.PersistentHashMap.fromArrays(inst_17315,inst_17317);
var state_17322__$1 = state_17322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17322__$1,(2),app.t3.main.evt,inst_17318);
} else {
if((state_val_17323 === (2))){
var inst_17320 = (state_17322[(2)]);
var state_17322__$1 = state_17322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17322__$1,inst_17320);
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
var statearr_17324 = [null,null,null,null,null,null,null];
(statearr_17324[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_17324[(1)] = (1));

return statearr_17324;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_17322){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17325){if((e17325 instanceof Object)){
var ex__2796__auto__ = e17325;
var statearr_17326_17370 = state_17322;
(statearr_17326_17370[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17371 = state_17322;
state_17322 = G__17371;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_17322){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_17322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_17327 = f__2883__auto__.call(null);
(statearr_17327[(6)] = c__2882__auto__);

return statearr_17327;
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
