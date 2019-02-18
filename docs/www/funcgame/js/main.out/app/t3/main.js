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
var pred__13508 = cljs.core._EQ_;
var expr__13509 = key;
if(cljs.core.truth_(pred__13508.call(null,"w",expr__13509))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__13508.call(null,"s",expr__13509))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__13508.call(null,"a",expr__13509))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__13508.call(null,"d",expr__13509))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__13508.call(null,"j",expr__13509))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__13508,expr__13509){
return (function (p1__13507_SHARP_){
return cljs.core.conj.call(null,p1__13507_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__13508,expr__13509))
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
var vec__13511 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__13511,(0),null);
var _ = cljs.core.nth.call(null,vec__13511,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__13511,cx,_,entities){
return (function (p__13514){
var map__13515 = p__13514;
var map__13515__$1 = ((((!((map__13515 == null)))?(((((map__13515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13515):map__13515);
var entity = map__13515__$1;
var vec__13516 = cljs.core.get.call(null,map__13515__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__13516,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13516,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__13511,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__13521 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__13521,(0),null);
var _ = cljs.core.nth.call(null,vec__13521,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__13521,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__13524(s__13525){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__13521,cx,_,c){
return (function (){
var s__13525__$1 = s__13525;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13525__$1);
if(temp__5457__auto__){
var s__13525__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13525__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13525__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13527 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13526 = (0);
while(true){
if((i__13526 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__13526);
cljs.core.chunk_append.call(null,b__13527,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__13532 = (i__13526 + (1));
i__13526 = G__13532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13527),app$t3$main$spawnEnemy_$_iter__13524.call(null,cljs.core.chunk_rest.call(null,s__13525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13527),null);
}
} else {
var r = cljs.core.first.call(null,s__13525__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__13524.call(null,cljs.core.rest.call(null,s__13525__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__13521,cx,_,c))
,null,null));
});})(spawnPos,vec__13521,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__13521,cx,_,c,rcs){
return (function (p1__13520_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__13520_SHARP_,(2)));
});})(spawnPos,vec__13521,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__13521,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__13528){
var vec__13529 = p__13528;
var r = cljs.core.nth.call(null,vec__13529,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__13529,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__13521,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__13533_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13533_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__13534_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13534_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__13536(s__13537){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__13537__$1 = s__13537;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13537__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__13537__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__13536_$_iter__13538(s__13539){
return (new cljs.core.LazySeq(null,((function (s__13537__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__13539__$1 = s__13539;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13539__$1);
if(temp__5457__auto____$1){
var s__13539__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13539__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13539__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13541 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13540 = (0);
while(true){
if((i__13540 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__13540);
cljs.core.chunk_append.call(null,b__13541,(function (){var vec__13542 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__13542,(0),null);
var by = cljs.core.nth.call(null,vec__13542,(1),null);
var vec__13545 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__13545,(0),null);
var ey = cljs.core.nth.call(null,vec__13545,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__13558 = (i__13540 + (1));
i__13540 = G__13558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13541),app$t3$main$checkCollide_$_iter__13536_$_iter__13538.call(null,cljs.core.chunk_rest.call(null,s__13539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13541),null);
}
} else {
var e = cljs.core.first.call(null,s__13539__$2);
return cljs.core.cons.call(null,(function (){var vec__13548 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__13548,(0),null);
var by = cljs.core.nth.call(null,vec__13548,(1),null);
var vec__13551 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__13551,(0),null);
var ey = cljs.core.nth.call(null,vec__13551,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__13536_$_iter__13538.call(null,cljs.core.rest.call(null,s__13539__$2)));
}
} else {
return null;
}
break;
}
});})(s__13537__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__13537__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__13536.call(null,cljs.core.rest.call(null,s__13537__$1)));
} else {
var G__13559 = cljs.core.rest.call(null,s__13537__$1);
s__13537__$1 = G__13559;
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
return (function (p__13554){
var vec__13555 = p__13554;
var _ = cljs.core.nth.call(null,vec__13555,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13555,(1),null);
var isCollide = cljs.core.nth.call(null,vec__13555,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__13535_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__13535_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__13560,camera,pos){
var map__13561 = p__13560;
var map__13561__$1 = ((((!((map__13561 == null)))?(((((map__13561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13561):map__13561);
var view = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_13569){
var state_val_13570 = (state_13569[(1)]);
if((state_val_13570 === (1))){
var inst_13563 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_13564 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_13565 = cljs.core.PersistentHashMap.fromArrays(inst_13563,inst_13564);
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13569__$1,(2),app.t3.main.evt,inst_13565);
} else {
if((state_val_13570 === (2))){
var inst_13567 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13569__$1,inst_13567);
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
var statearr_13571 = [null,null,null,null,null,null,null];
(statearr_13571[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_13571[(1)] = (1));

return statearr_13571;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_13569){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13572){if((e13572 instanceof Object)){
var ex__2796__auto__ = e13572;
var statearr_13573_13715 = state_13569;
(statearr_13573_13715[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13716 = state_13569;
state_13569 = G__13716;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_13569){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_13569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_13574 = f__2883__auto__.call(null);
(statearr_13574[(6)] = c__2882__auto__);

return statearr_13574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___13717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___13717){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___13717){
return (function (state_13649){
var state_val_13650 = (state_13649[(1)]);
if((state_val_13650 === (7))){
var inst_13645 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
var statearr_13651_13718 = state_13649__$1;
(statearr_13651_13718[(2)] = inst_13645);

(statearr_13651_13718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (1))){
var inst_13575 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_13576 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_13577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13578 = [(0),(0)];
var inst_13579 = (new cljs.core.PersistentVector(null,2,(5),inst_13577,inst_13578,null));
var inst_13580 = [inst_13579];
var inst_13581 = cljs.core.PersistentHashMap.fromArrays(inst_13576,inst_13580);
var inst_13582 = cljs.core.PersistentHashSet.EMPTY;
var inst_13583 = cljs.core.PersistentHashSet.EMPTY;
var inst_13584 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_13585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13586 = [(0),(0)];
var inst_13587 = (new cljs.core.PersistentVector(null,2,(5),inst_13585,inst_13586,null));
var inst_13588 = [inst_13587];
var inst_13589 = cljs.core.PersistentHashMap.fromArrays(inst_13584,inst_13588);
var inst_13590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13591 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_13592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13593 = [(100),(0)];
var inst_13594 = (new cljs.core.PersistentVector(null,2,(5),inst_13592,inst_13593,null));
var inst_13595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13596 = [(0),(-1)];
var inst_13597 = (new cljs.core.PersistentVector(null,2,(5),inst_13595,inst_13596,null));
var inst_13598 = [inst_13594,inst_13597];
var inst_13599 = cljs.core.PersistentHashMap.fromArrays(inst_13591,inst_13598);
var inst_13600 = [inst_13599];
var inst_13601 = (new cljs.core.PersistentVector(null,1,(5),inst_13590,inst_13600,null));
var inst_13602 = cljs.core.PersistentHashSet.EMPTY;
var inst_13603 = [inst_13581,inst_13582,inst_13583,inst_13589,inst_13601,inst_13602];
var inst_13604 = cljs.core.PersistentHashMap.fromArrays(inst_13575,inst_13603);
var inst_13605 = inst_13604;
var state_13649__$1 = (function (){var statearr_13652 = state_13649;
(statearr_13652[(7)] = inst_13605);

return statearr_13652;
})();
var statearr_13653_13719 = state_13649__$1;
(statearr_13653_13719[(2)] = null);

(statearr_13653_13719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (4))){
var inst_13609 = (state_13649[(8)]);
var inst_13613 = (state_13649[(9)]);
var inst_13609__$1 = (state_13649[(2)]);
var inst_13613__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_13609__$1);
var inst_13614 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_13613__$1);
var state_13649__$1 = (function (){var statearr_13654 = state_13649;
(statearr_13654[(8)] = inst_13609__$1);

(statearr_13654[(9)] = inst_13613__$1);

return statearr_13654;
})();
if(inst_13614){
var statearr_13655_13720 = state_13649__$1;
(statearr_13655_13720[(1)] = (5));

} else {
var statearr_13656_13721 = state_13649__$1;
(statearr_13656_13721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (13))){
var inst_13638 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
var statearr_13657_13722 = state_13649__$1;
(statearr_13657_13722[(2)] = inst_13638);

(statearr_13657_13722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (6))){
var inst_13613 = (state_13649[(9)]);
var inst_13623 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_13613);
var state_13649__$1 = state_13649;
if(inst_13623){
var statearr_13658_13723 = state_13649__$1;
(statearr_13658_13723[(1)] = (8));

} else {
var statearr_13659_13724 = state_13649__$1;
(statearr_13659_13724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (3))){
var inst_13647 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13649__$1,inst_13647);
} else {
if((state_val_13650 === (12))){
var inst_13605 = (state_13649[(7)]);
var inst_13609 = (state_13649[(8)]);
var inst_13631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13632 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_13633 = (new cljs.core.PersistentVector(null,1,(5),inst_13631,inst_13632,null));
var inst_13634 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_13609);
var inst_13635 = cljs.core.update_in.call(null,inst_13605,inst_13633,cljs.core.conj,inst_13634);
var inst_13605__$1 = inst_13635;
var state_13649__$1 = (function (){var statearr_13660 = state_13649;
(statearr_13660[(7)] = inst_13605__$1);

return statearr_13660;
})();
var statearr_13661_13725 = state_13649__$1;
(statearr_13661_13725[(2)] = null);

(statearr_13661_13725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (2))){
var inst_13605 = (state_13649[(7)]);
var inst_13607 = app.t3.main.model = inst_13605;
var state_13649__$1 = (function (){var statearr_13662 = state_13649;
(statearr_13662[(10)] = inst_13607);

return statearr_13662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13649__$1,(4),app.t3.main.evt);
} else {
if((state_val_13650 === (11))){
var inst_13628 = console.log("exit");
var inst_13629 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_13649__$1 = (function (){var statearr_13663 = state_13649;
(statearr_13663[(11)] = inst_13628);

return statearr_13663;
})();
var statearr_13664_13726 = state_13649__$1;
(statearr_13664_13726[(2)] = inst_13629);

(statearr_13664_13726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (9))){
var inst_13605 = (state_13649[(7)]);
var inst_13640 = app.t3.main.update.call(null,inst_13605);
var inst_13605__$1 = inst_13640;
var state_13649__$1 = (function (){var statearr_13665 = state_13649;
(statearr_13665[(7)] = inst_13605__$1);

return statearr_13665;
})();
var statearr_13666_13727 = state_13649__$1;
(statearr_13666_13727[(2)] = null);

(statearr_13666_13727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (5))){
var inst_13605 = (state_13649[(7)]);
var inst_13609 = (state_13649[(8)]);
var inst_13616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13617 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_13618 = (new cljs.core.PersistentVector(null,1,(5),inst_13616,inst_13617,null));
var inst_13619 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_13609);
var inst_13620 = cljs.core.update_in.call(null,inst_13605,inst_13618,cljs.core.conj,inst_13619);
var inst_13605__$1 = inst_13620;
var state_13649__$1 = (function (){var statearr_13667 = state_13649;
(statearr_13667[(7)] = inst_13605__$1);

return statearr_13667;
})();
var statearr_13668_13728 = state_13649__$1;
(statearr_13668_13728[(2)] = null);

(statearr_13668_13728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (10))){
var inst_13643 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
var statearr_13669_13729 = state_13649__$1;
(statearr_13669_13729[(2)] = inst_13643);

(statearr_13669_13729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (8))){
var inst_13609 = (state_13649[(8)]);
var inst_13625 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_13609);
var inst_13626 = cljs.core._EQ_.call(null,inst_13625,"q");
var state_13649__$1 = state_13649;
if(inst_13626){
var statearr_13670_13730 = state_13649__$1;
(statearr_13670_13730[(1)] = (11));

} else {
var statearr_13671_13731 = state_13649__$1;
(statearr_13671_13731[(1)] = (12));

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
});})(c__2882__auto___13717))
;
return ((function (switch__2792__auto__,c__2882__auto___13717){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_13672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13672[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_13672[(1)] = (1));

return statearr_13672;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_13649){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13673){if((e13673 instanceof Object)){
var ex__2796__auto__ = e13673;
var statearr_13674_13732 = state_13649;
(statearr_13674_13732[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13733 = state_13649;
state_13649 = G__13733;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_13649){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_13649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___13717))
})();
var state__2884__auto__ = (function (){var statearr_13675 = f__2883__auto__.call(null);
(statearr_13675[(6)] = c__2882__auto___13717);

return statearr_13675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___13717))
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
var vec__13676_13734 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_13735 = cljs.core.nth.call(null,vec__13676_13734,(0),null);
var py_13736 = cljs.core.nth.call(null,vec__13676_13734,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_13735,py_13736);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__13679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__13680 = null;
var count__13681 = (0);
var i__13682 = (0);
while(true){
if((i__13682 < count__13681)){
var entity = cljs.core._nth.call(null,chunk__13680,i__13682);
var vec__13683_13737 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_13738 = cljs.core.nth.call(null,vec__13683_13737,(0),null);
var py_13739 = cljs.core.nth.call(null,vec__13683_13737,(1),null);
app.t3.main.p5.rect(px_13738,py_13739,(10),(10));


var G__13740 = seq__13679;
var G__13741 = chunk__13680;
var G__13742 = count__13681;
var G__13743 = (i__13682 + (1));
seq__13679 = G__13740;
chunk__13680 = G__13741;
count__13681 = G__13742;
i__13682 = G__13743;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13679);
if(temp__5457__auto__){
var seq__13679__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13679__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__13679__$1);
var G__13744 = cljs.core.chunk_rest.call(null,seq__13679__$1);
var G__13745 = c__4319__auto__;
var G__13746 = cljs.core.count.call(null,c__4319__auto__);
var G__13747 = (0);
seq__13679 = G__13744;
chunk__13680 = G__13745;
count__13681 = G__13746;
i__13682 = G__13747;
continue;
} else {
var entity = cljs.core.first.call(null,seq__13679__$1);
var vec__13686_13748 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_13749 = cljs.core.nth.call(null,vec__13686_13748,(0),null);
var py_13750 = cljs.core.nth.call(null,vec__13686_13748,(1),null);
app.t3.main.p5.rect(px_13749,py_13750,(10),(10));


var G__13751 = cljs.core.next.call(null,seq__13679__$1);
var G__13752 = null;
var G__13753 = (0);
var G__13754 = (0);
seq__13679 = G__13751;
chunk__13680 = G__13752;
count__13681 = G__13753;
i__13682 = G__13754;
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
return (function (state_13696){
var state_val_13697 = (state_13696[(1)]);
if((state_val_13697 === (1))){
var inst_13689 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_13690 = app.t3.main.p5.key;
var inst_13691 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_13690];
var inst_13692 = cljs.core.PersistentHashMap.fromArrays(inst_13689,inst_13691);
var state_13696__$1 = state_13696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13696__$1,(2),app.t3.main.evt,inst_13692);
} else {
if((state_val_13697 === (2))){
var inst_13694 = (state_13696[(2)]);
var state_13696__$1 = state_13696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13696__$1,inst_13694);
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
var statearr_13698 = [null,null,null,null,null,null,null];
(statearr_13698[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_13698[(1)] = (1));

return statearr_13698;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_13696){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13699){if((e13699 instanceof Object)){
var ex__2796__auto__ = e13699;
var statearr_13700_13755 = state_13696;
(statearr_13700_13755[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13756 = state_13696;
state_13696 = G__13756;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_13696){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_13696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_13701 = f__2883__auto__.call(null);
(statearr_13701[(6)] = c__2882__auto__);

return statearr_13701;
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
return (function (state_13709){
var state_val_13710 = (state_13709[(1)]);
if((state_val_13710 === (1))){
var inst_13702 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_13703 = app.t3.main.p5.key;
var inst_13704 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_13703];
var inst_13705 = cljs.core.PersistentHashMap.fromArrays(inst_13702,inst_13704);
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13709__$1,(2),app.t3.main.evt,inst_13705);
} else {
if((state_val_13710 === (2))){
var inst_13707 = (state_13709[(2)]);
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13709__$1,inst_13707);
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
var statearr_13711 = [null,null,null,null,null,null,null];
(statearr_13711[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_13711[(1)] = (1));

return statearr_13711;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_13709){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13712){if((e13712 instanceof Object)){
var ex__2796__auto__ = e13712;
var statearr_13713_13757 = state_13709;
(statearr_13713_13757[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13758 = state_13709;
state_13709 = G__13758;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_13709){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_13709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_13714 = f__2883__auto__.call(null);
(statearr_13714[(6)] = c__2882__auto__);

return statearr_13714;
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
