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
var pred__14320 = cljs.core._EQ_;
var expr__14321 = key;
if(cljs.core.truth_(pred__14320.call(null,"w",expr__14321))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__14320.call(null,"s",expr__14321))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__14320.call(null,"a",expr__14321))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__14320.call(null,"d",expr__14321))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__14320.call(null,"j",expr__14321))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__14320,expr__14321){
return (function (p1__14319_SHARP_){
return cljs.core.conj.call(null,p1__14319_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__14320,expr__14321))
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
var vec__14323 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__14323,(0),null);
var _ = cljs.core.nth.call(null,vec__14323,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__14323,cx,_,entities){
return (function (p__14326){
var map__14327 = p__14326;
var map__14327__$1 = ((((!((map__14327 == null)))?(((((map__14327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14327):map__14327);
var entity = map__14327__$1;
var vec__14328 = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__14328,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14328,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__14323,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__14333 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__14333,(0),null);
var _ = cljs.core.nth.call(null,vec__14333,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__14333,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__14336(s__14337){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__14333,cx,_,c){
return (function (){
var s__14337__$1 = s__14337;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14337__$1);
if(temp__5457__auto__){
var s__14337__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14337__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14337__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14339 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14338 = (0);
while(true){
if((i__14338 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__14338);
cljs.core.chunk_append.call(null,b__14339,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__14344 = (i__14338 + (1));
i__14338 = G__14344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14339),app$t3$main$spawnEnemy_$_iter__14336.call(null,cljs.core.chunk_rest.call(null,s__14337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14339),null);
}
} else {
var r = cljs.core.first.call(null,s__14337__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__14336.call(null,cljs.core.rest.call(null,s__14337__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__14333,cx,_,c))
,null,null));
});})(spawnPos,vec__14333,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__14333,cx,_,c,rcs){
return (function (p1__14332_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__14332_SHARP_,(2)));
});})(spawnPos,vec__14333,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__14333,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__14340){
var vec__14341 = p__14340;
var r = cljs.core.nth.call(null,vec__14341,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__14341,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__14333,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__14345_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14345_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__14346_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14346_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__14348(s__14349){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__14349__$1 = s__14349;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14349__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__14349__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__14348_$_iter__14350(s__14351){
return (new cljs.core.LazySeq(null,((function (s__14349__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__14351__$1 = s__14351;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14351__$1);
if(temp__5457__auto____$1){
var s__14351__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14351__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14351__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14353 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14352 = (0);
while(true){
if((i__14352 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__14352);
cljs.core.chunk_append.call(null,b__14353,(function (){var vec__14354 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__14354,(0),null);
var by = cljs.core.nth.call(null,vec__14354,(1),null);
var vec__14357 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__14357,(0),null);
var ey = cljs.core.nth.call(null,vec__14357,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__14370 = (i__14352 + (1));
i__14352 = G__14370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14353),app$t3$main$checkCollide_$_iter__14348_$_iter__14350.call(null,cljs.core.chunk_rest.call(null,s__14351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14353),null);
}
} else {
var e = cljs.core.first.call(null,s__14351__$2);
return cljs.core.cons.call(null,(function (){var vec__14360 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__14360,(0),null);
var by = cljs.core.nth.call(null,vec__14360,(1),null);
var vec__14363 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__14363,(0),null);
var ey = cljs.core.nth.call(null,vec__14363,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__14348_$_iter__14350.call(null,cljs.core.rest.call(null,s__14351__$2)));
}
} else {
return null;
}
break;
}
});})(s__14349__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__14349__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__14348.call(null,cljs.core.rest.call(null,s__14349__$1)));
} else {
var G__14371 = cljs.core.rest.call(null,s__14349__$1);
s__14349__$1 = G__14371;
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
return (function (p__14366){
var vec__14367 = p__14366;
var _ = cljs.core.nth.call(null,vec__14367,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14367,(1),null);
var isCollide = cljs.core.nth.call(null,vec__14367,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__14347_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__14347_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__14372,camera,pos){
var map__14373 = p__14372;
var map__14373__$1 = ((((!((map__14373 == null)))?(((((map__14373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14373):map__14373);
var view = cljs.core.get.call(null,map__14373__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_14381){
var state_val_14382 = (state_14381[(1)]);
if((state_val_14382 === (1))){
var inst_14375 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_14376 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_14377 = cljs.core.PersistentHashMap.fromArrays(inst_14375,inst_14376);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14381__$1,(2),app.t3.main.evt,inst_14377);
} else {
if((state_val_14382 === (2))){
var inst_14379 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14381__$1,inst_14379);
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
var statearr_14383 = [null,null,null,null,null,null,null];
(statearr_14383[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14383[(1)] = (1));

return statearr_14383;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14381){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14384){if((e14384 instanceof Object)){
var ex__2796__auto__ = e14384;
var statearr_14385_14527 = state_14381;
(statearr_14385_14527[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14528 = state_14381;
state_14381 = G__14528;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14381){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14386 = f__2883__auto__.call(null);
(statearr_14386[(6)] = c__2882__auto__);

return statearr_14386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___14529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___14529){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___14529){
return (function (state_14461){
var state_val_14462 = (state_14461[(1)]);
if((state_val_14462 === (7))){
var inst_14457 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14463_14530 = state_14461__$1;
(statearr_14463_14530[(2)] = inst_14457);

(statearr_14463_14530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (1))){
var inst_14387 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_14388 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_14389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14390 = [(0),(0)];
var inst_14391 = (new cljs.core.PersistentVector(null,2,(5),inst_14389,inst_14390,null));
var inst_14392 = [inst_14391];
var inst_14393 = cljs.core.PersistentHashMap.fromArrays(inst_14388,inst_14392);
var inst_14394 = cljs.core.PersistentHashSet.EMPTY;
var inst_14395 = cljs.core.PersistentHashSet.EMPTY;
var inst_14396 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_14397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14398 = [(0),(0)];
var inst_14399 = (new cljs.core.PersistentVector(null,2,(5),inst_14397,inst_14398,null));
var inst_14400 = [inst_14399];
var inst_14401 = cljs.core.PersistentHashMap.fromArrays(inst_14396,inst_14400);
var inst_14402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14403 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_14404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14405 = [(100),(0)];
var inst_14406 = (new cljs.core.PersistentVector(null,2,(5),inst_14404,inst_14405,null));
var inst_14407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14408 = [(0),(-1)];
var inst_14409 = (new cljs.core.PersistentVector(null,2,(5),inst_14407,inst_14408,null));
var inst_14410 = [inst_14406,inst_14409];
var inst_14411 = cljs.core.PersistentHashMap.fromArrays(inst_14403,inst_14410);
var inst_14412 = [inst_14411];
var inst_14413 = (new cljs.core.PersistentVector(null,1,(5),inst_14402,inst_14412,null));
var inst_14414 = cljs.core.PersistentHashSet.EMPTY;
var inst_14415 = [inst_14393,inst_14394,inst_14395,inst_14401,inst_14413,inst_14414];
var inst_14416 = cljs.core.PersistentHashMap.fromArrays(inst_14387,inst_14415);
var inst_14417 = inst_14416;
var state_14461__$1 = (function (){var statearr_14464 = state_14461;
(statearr_14464[(7)] = inst_14417);

return statearr_14464;
})();
var statearr_14465_14531 = state_14461__$1;
(statearr_14465_14531[(2)] = null);

(statearr_14465_14531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (4))){
var inst_14421 = (state_14461[(8)]);
var inst_14425 = (state_14461[(9)]);
var inst_14421__$1 = (state_14461[(2)]);
var inst_14425__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_14421__$1);
var inst_14426 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14425__$1);
var state_14461__$1 = (function (){var statearr_14466 = state_14461;
(statearr_14466[(8)] = inst_14421__$1);

(statearr_14466[(9)] = inst_14425__$1);

return statearr_14466;
})();
if(inst_14426){
var statearr_14467_14532 = state_14461__$1;
(statearr_14467_14532[(1)] = (5));

} else {
var statearr_14468_14533 = state_14461__$1;
(statearr_14468_14533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (13))){
var inst_14450 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14469_14534 = state_14461__$1;
(statearr_14469_14534[(2)] = inst_14450);

(statearr_14469_14534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (6))){
var inst_14425 = (state_14461[(9)]);
var inst_14435 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_14425);
var state_14461__$1 = state_14461;
if(inst_14435){
var statearr_14470_14535 = state_14461__$1;
(statearr_14470_14535[(1)] = (8));

} else {
var statearr_14471_14536 = state_14461__$1;
(statearr_14471_14536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (3))){
var inst_14459 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else {
if((state_val_14462 === (12))){
var inst_14421 = (state_14461[(8)]);
var inst_14417 = (state_14461[(7)]);
var inst_14443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14444 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_14445 = (new cljs.core.PersistentVector(null,1,(5),inst_14443,inst_14444,null));
var inst_14446 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14421);
var inst_14447 = cljs.core.update_in.call(null,inst_14417,inst_14445,cljs.core.conj,inst_14446);
var inst_14417__$1 = inst_14447;
var state_14461__$1 = (function (){var statearr_14472 = state_14461;
(statearr_14472[(7)] = inst_14417__$1);

return statearr_14472;
})();
var statearr_14473_14537 = state_14461__$1;
(statearr_14473_14537[(2)] = null);

(statearr_14473_14537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (2))){
var inst_14417 = (state_14461[(7)]);
var inst_14419 = app.t3.main.model = inst_14417;
var state_14461__$1 = (function (){var statearr_14474 = state_14461;
(statearr_14474[(10)] = inst_14419);

return statearr_14474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,(4),app.t3.main.evt);
} else {
if((state_val_14462 === (11))){
var inst_14440 = console.log("exit");
var inst_14441 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_14461__$1 = (function (){var statearr_14475 = state_14461;
(statearr_14475[(11)] = inst_14440);

return statearr_14475;
})();
var statearr_14476_14538 = state_14461__$1;
(statearr_14476_14538[(2)] = inst_14441);

(statearr_14476_14538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (9))){
var inst_14417 = (state_14461[(7)]);
var inst_14452 = app.t3.main.update.call(null,inst_14417);
var inst_14417__$1 = inst_14452;
var state_14461__$1 = (function (){var statearr_14477 = state_14461;
(statearr_14477[(7)] = inst_14417__$1);

return statearr_14477;
})();
var statearr_14478_14539 = state_14461__$1;
(statearr_14478_14539[(2)] = null);

(statearr_14478_14539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (5))){
var inst_14421 = (state_14461[(8)]);
var inst_14417 = (state_14461[(7)]);
var inst_14428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14429 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_14430 = (new cljs.core.PersistentVector(null,1,(5),inst_14428,inst_14429,null));
var inst_14431 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14421);
var inst_14432 = cljs.core.update_in.call(null,inst_14417,inst_14430,cljs.core.conj,inst_14431);
var inst_14417__$1 = inst_14432;
var state_14461__$1 = (function (){var statearr_14479 = state_14461;
(statearr_14479[(7)] = inst_14417__$1);

return statearr_14479;
})();
var statearr_14480_14540 = state_14461__$1;
(statearr_14480_14540[(2)] = null);

(statearr_14480_14540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (10))){
var inst_14455 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14481_14541 = state_14461__$1;
(statearr_14481_14541[(2)] = inst_14455);

(statearr_14481_14541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (8))){
var inst_14421 = (state_14461[(8)]);
var inst_14437 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14421);
var inst_14438 = cljs.core._EQ_.call(null,inst_14437,"q");
var state_14461__$1 = state_14461;
if(inst_14438){
var statearr_14482_14542 = state_14461__$1;
(statearr_14482_14542[(1)] = (11));

} else {
var statearr_14483_14543 = state_14461__$1;
(statearr_14483_14543[(1)] = (12));

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
});})(c__2882__auto___14529))
;
return ((function (switch__2792__auto__,c__2882__auto___14529){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_14484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14484[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14484[(1)] = (1));

return statearr_14484;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14461){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14485){if((e14485 instanceof Object)){
var ex__2796__auto__ = e14485;
var statearr_14486_14544 = state_14461;
(statearr_14486_14544[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14545 = state_14461;
state_14461 = G__14545;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___14529))
})();
var state__2884__auto__ = (function (){var statearr_14487 = f__2883__auto__.call(null);
(statearr_14487[(6)] = c__2882__auto___14529);

return statearr_14487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___14529))
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
var vec__14488_14546 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_14547 = cljs.core.nth.call(null,vec__14488_14546,(0),null);
var py_14548 = cljs.core.nth.call(null,vec__14488_14546,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_14547,py_14548);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__14491 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__14492 = null;
var count__14493 = (0);
var i__14494 = (0);
while(true){
if((i__14494 < count__14493)){
var entity = cljs.core._nth.call(null,chunk__14492,i__14494);
var vec__14495_14549 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_14550 = cljs.core.nth.call(null,vec__14495_14549,(0),null);
var py_14551 = cljs.core.nth.call(null,vec__14495_14549,(1),null);
app.t3.main.p5.rect(px_14550,py_14551,(10),(10));


var G__14552 = seq__14491;
var G__14553 = chunk__14492;
var G__14554 = count__14493;
var G__14555 = (i__14494 + (1));
seq__14491 = G__14552;
chunk__14492 = G__14553;
count__14493 = G__14554;
i__14494 = G__14555;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14491);
if(temp__5457__auto__){
var seq__14491__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14491__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14491__$1);
var G__14556 = cljs.core.chunk_rest.call(null,seq__14491__$1);
var G__14557 = c__4319__auto__;
var G__14558 = cljs.core.count.call(null,c__4319__auto__);
var G__14559 = (0);
seq__14491 = G__14556;
chunk__14492 = G__14557;
count__14493 = G__14558;
i__14494 = G__14559;
continue;
} else {
var entity = cljs.core.first.call(null,seq__14491__$1);
var vec__14498_14560 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_14561 = cljs.core.nth.call(null,vec__14498_14560,(0),null);
var py_14562 = cljs.core.nth.call(null,vec__14498_14560,(1),null);
app.t3.main.p5.rect(px_14561,py_14562,(10),(10));


var G__14563 = cljs.core.next.call(null,seq__14491__$1);
var G__14564 = null;
var G__14565 = (0);
var G__14566 = (0);
seq__14491 = G__14563;
chunk__14492 = G__14564;
count__14493 = G__14565;
i__14494 = G__14566;
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
return (function (state_14508){
var state_val_14509 = (state_14508[(1)]);
if((state_val_14509 === (1))){
var inst_14501 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14502 = app.t3.main.p5.key;
var inst_14503 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14502];
var inst_14504 = cljs.core.PersistentHashMap.fromArrays(inst_14501,inst_14503);
var state_14508__$1 = state_14508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14508__$1,(2),app.t3.main.evt,inst_14504);
} else {
if((state_val_14509 === (2))){
var inst_14506 = (state_14508[(2)]);
var state_14508__$1 = state_14508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14508__$1,inst_14506);
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
var statearr_14510 = [null,null,null,null,null,null,null];
(statearr_14510[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14510[(1)] = (1));

return statearr_14510;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14508){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14511){if((e14511 instanceof Object)){
var ex__2796__auto__ = e14511;
var statearr_14512_14567 = state_14508;
(statearr_14512_14567[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14568 = state_14508;
state_14508 = G__14568;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14508){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_14513 = f__2883__auto__.call(null);
(statearr_14513[(6)] = c__2882__auto__);

return statearr_14513;
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
return (function (state_14521){
var state_val_14522 = (state_14521[(1)]);
if((state_val_14522 === (1))){
var inst_14514 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14515 = app.t3.main.p5.key;
var inst_14516 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_14515];
var inst_14517 = cljs.core.PersistentHashMap.fromArrays(inst_14514,inst_14516);
var state_14521__$1 = state_14521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14521__$1,(2),app.t3.main.evt,inst_14517);
} else {
if((state_val_14522 === (2))){
var inst_14519 = (state_14521[(2)]);
var state_14521__$1 = state_14521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14521__$1,inst_14519);
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
var statearr_14523 = [null,null,null,null,null,null,null];
(statearr_14523[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14523[(1)] = (1));

return statearr_14523;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14521){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14524){if((e14524 instanceof Object)){
var ex__2796__auto__ = e14524;
var statearr_14525_14569 = state_14521;
(statearr_14525_14569[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14570 = state_14521;
state_14521 = G__14570;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14521){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_14526 = f__2883__auto__.call(null);
(statearr_14526[(6)] = c__2882__auto__);

return statearr_14526;
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
