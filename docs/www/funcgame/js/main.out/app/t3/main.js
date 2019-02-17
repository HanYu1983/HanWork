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
var pred__6028 = cljs.core._EQ_;
var expr__6029 = key;
if(cljs.core.truth_(pred__6028.call(null,"w",expr__6029))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__6028.call(null,"s",expr__6029))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__6028.call(null,"a",expr__6029))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__6028.call(null,"d",expr__6029))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__6028.call(null,"j",expr__6029))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__6028,expr__6029){
return (function (p1__6027_SHARP_){
return cljs.core.conj.call(null,p1__6027_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__6028,expr__6029))
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
var vec__6031 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__6031,(0),null);
var _ = cljs.core.nth.call(null,vec__6031,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__6031,cx,_,entities){
return (function (p__6034){
var map__6035 = p__6034;
var map__6035__$1 = ((((!((map__6035 == null)))?(((((map__6035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6035):map__6035);
var entity = map__6035__$1;
var vec__6036 = cljs.core.get.call(null,map__6035__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__6036,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6036,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__6031,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__6041 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__6041,(0),null);
var _ = cljs.core.nth.call(null,vec__6041,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__6041,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__6044(s__6045){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__6041,cx,_,c){
return (function (){
var s__6045__$1 = s__6045;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6045__$1);
if(temp__5457__auto__){
var s__6045__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6045__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6045__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6047 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6046 = (0);
while(true){
if((i__6046 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__6046);
cljs.core.chunk_append.call(null,b__6047,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__6052 = (i__6046 + (1));
i__6046 = G__6052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),app$t3$main$spawnEnemy_$_iter__6044.call(null,cljs.core.chunk_rest.call(null,s__6045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),null);
}
} else {
var r = cljs.core.first.call(null,s__6045__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__6044.call(null,cljs.core.rest.call(null,s__6045__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__6041,cx,_,c))
,null,null));
});})(spawnPos,vec__6041,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__6041,cx,_,c,rcs){
return (function (p1__6040_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__6040_SHARP_,(2)));
});})(spawnPos,vec__6041,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__6041,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__6048){
var vec__6049 = p__6048;
var r = cljs.core.nth.call(null,vec__6049,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__6049,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__6041,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__6053_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__6053_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__6054_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__6054_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__6056(s__6057){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__6057__$1 = s__6057;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6057__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__6057__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__6056_$_iter__6058(s__6059){
return (new cljs.core.LazySeq(null,((function (s__6057__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__6059__$1 = s__6059;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__6059__$1);
if(temp__5457__auto____$1){
var s__6059__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6059__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6059__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6061 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6060 = (0);
while(true){
if((i__6060 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__6060);
cljs.core.chunk_append.call(null,b__6061,(function (){var vec__6062 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__6062,(0),null);
var by = cljs.core.nth.call(null,vec__6062,(1),null);
var vec__6065 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__6065,(0),null);
var ey = cljs.core.nth.call(null,vec__6065,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__6078 = (i__6060 + (1));
i__6060 = G__6078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),app$t3$main$checkCollide_$_iter__6056_$_iter__6058.call(null,cljs.core.chunk_rest.call(null,s__6059__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),null);
}
} else {
var e = cljs.core.first.call(null,s__6059__$2);
return cljs.core.cons.call(null,(function (){var vec__6068 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__6068,(0),null);
var by = cljs.core.nth.call(null,vec__6068,(1),null);
var vec__6071 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__6071,(0),null);
var ey = cljs.core.nth.call(null,vec__6071,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__6056_$_iter__6058.call(null,cljs.core.rest.call(null,s__6059__$2)));
}
} else {
return null;
}
break;
}
});})(s__6057__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__6057__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__6056.call(null,cljs.core.rest.call(null,s__6057__$1)));
} else {
var G__6079 = cljs.core.rest.call(null,s__6057__$1);
s__6057__$1 = G__6079;
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
return (function (p__6074){
var vec__6075 = p__6074;
var _ = cljs.core.nth.call(null,vec__6075,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6075,(1),null);
var isCollide = cljs.core.nth.call(null,vec__6075,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__6055_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__6055_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__6080,camera,pos){
var map__6081 = p__6080;
var map__6081__$1 = ((((!((map__6081 == null)))?(((((map__6081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6081):map__6081);
var view = cljs.core.get.call(null,map__6081__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_6089){
var state_val_6090 = (state_6089[(1)]);
if((state_val_6090 === (1))){
var inst_6083 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_6084 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_6085 = cljs.core.PersistentHashMap.fromArrays(inst_6083,inst_6084);
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6089__$1,(2),app.t3.main.evt,inst_6085);
} else {
if((state_val_6090 === (2))){
var inst_6087 = (state_6089[(2)]);
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6089__$1,inst_6087);
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
var statearr_6091 = [null,null,null,null,null,null,null];
(statearr_6091[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_6091[(1)] = (1));

return statearr_6091;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_6089){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6092){if((e6092 instanceof Object)){
var ex__2796__auto__ = e6092;
var statearr_6093_6235 = state_6089;
(statearr_6093_6235[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6236 = state_6089;
state_6089 = G__6236;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_6089){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_6089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6094 = f__2883__auto__.call(null);
(statearr_6094[(6)] = c__2882__auto__);

return statearr_6094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___6237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___6237){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___6237){
return (function (state_6169){
var state_val_6170 = (state_6169[(1)]);
if((state_val_6170 === (7))){
var inst_6165 = (state_6169[(2)]);
var state_6169__$1 = state_6169;
var statearr_6171_6238 = state_6169__$1;
(statearr_6171_6238[(2)] = inst_6165);

(statearr_6171_6238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (1))){
var inst_6095 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_6096 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_6097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6098 = [(0),(0)];
var inst_6099 = (new cljs.core.PersistentVector(null,2,(5),inst_6097,inst_6098,null));
var inst_6100 = [inst_6099];
var inst_6101 = cljs.core.PersistentHashMap.fromArrays(inst_6096,inst_6100);
var inst_6102 = cljs.core.PersistentHashSet.EMPTY;
var inst_6103 = cljs.core.PersistentHashSet.EMPTY;
var inst_6104 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_6105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6106 = [(0),(0)];
var inst_6107 = (new cljs.core.PersistentVector(null,2,(5),inst_6105,inst_6106,null));
var inst_6108 = [inst_6107];
var inst_6109 = cljs.core.PersistentHashMap.fromArrays(inst_6104,inst_6108);
var inst_6110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6111 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_6112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6113 = [(100),(0)];
var inst_6114 = (new cljs.core.PersistentVector(null,2,(5),inst_6112,inst_6113,null));
var inst_6115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6116 = [(0),(-1)];
var inst_6117 = (new cljs.core.PersistentVector(null,2,(5),inst_6115,inst_6116,null));
var inst_6118 = [inst_6114,inst_6117];
var inst_6119 = cljs.core.PersistentHashMap.fromArrays(inst_6111,inst_6118);
var inst_6120 = [inst_6119];
var inst_6121 = (new cljs.core.PersistentVector(null,1,(5),inst_6110,inst_6120,null));
var inst_6122 = cljs.core.PersistentHashSet.EMPTY;
var inst_6123 = [inst_6101,inst_6102,inst_6103,inst_6109,inst_6121,inst_6122];
var inst_6124 = cljs.core.PersistentHashMap.fromArrays(inst_6095,inst_6123);
var inst_6125 = inst_6124;
var state_6169__$1 = (function (){var statearr_6172 = state_6169;
(statearr_6172[(7)] = inst_6125);

return statearr_6172;
})();
var statearr_6173_6239 = state_6169__$1;
(statearr_6173_6239[(2)] = null);

(statearr_6173_6239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (4))){
var inst_6129 = (state_6169[(8)]);
var inst_6133 = (state_6169[(9)]);
var inst_6129__$1 = (state_6169[(2)]);
var inst_6133__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_6129__$1);
var inst_6134 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_6133__$1);
var state_6169__$1 = (function (){var statearr_6174 = state_6169;
(statearr_6174[(8)] = inst_6129__$1);

(statearr_6174[(9)] = inst_6133__$1);

return statearr_6174;
})();
if(inst_6134){
var statearr_6175_6240 = state_6169__$1;
(statearr_6175_6240[(1)] = (5));

} else {
var statearr_6176_6241 = state_6169__$1;
(statearr_6176_6241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (13))){
var inst_6158 = (state_6169[(2)]);
var state_6169__$1 = state_6169;
var statearr_6177_6242 = state_6169__$1;
(statearr_6177_6242[(2)] = inst_6158);

(statearr_6177_6242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (6))){
var inst_6133 = (state_6169[(9)]);
var inst_6143 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_6133);
var state_6169__$1 = state_6169;
if(inst_6143){
var statearr_6178_6243 = state_6169__$1;
(statearr_6178_6243[(1)] = (8));

} else {
var statearr_6179_6244 = state_6169__$1;
(statearr_6179_6244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (3))){
var inst_6167 = (state_6169[(2)]);
var state_6169__$1 = state_6169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6169__$1,inst_6167);
} else {
if((state_val_6170 === (12))){
var inst_6129 = (state_6169[(8)]);
var inst_6125 = (state_6169[(7)]);
var inst_6151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6152 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_6153 = (new cljs.core.PersistentVector(null,1,(5),inst_6151,inst_6152,null));
var inst_6154 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_6129);
var inst_6155 = cljs.core.update_in.call(null,inst_6125,inst_6153,cljs.core.conj,inst_6154);
var inst_6125__$1 = inst_6155;
var state_6169__$1 = (function (){var statearr_6180 = state_6169;
(statearr_6180[(7)] = inst_6125__$1);

return statearr_6180;
})();
var statearr_6181_6245 = state_6169__$1;
(statearr_6181_6245[(2)] = null);

(statearr_6181_6245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (2))){
var inst_6125 = (state_6169[(7)]);
var inst_6127 = app.t3.main.model = inst_6125;
var state_6169__$1 = (function (){var statearr_6182 = state_6169;
(statearr_6182[(10)] = inst_6127);

return statearr_6182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6169__$1,(4),app.t3.main.evt);
} else {
if((state_val_6170 === (11))){
var inst_6148 = console.log("exit");
var inst_6149 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_6169__$1 = (function (){var statearr_6183 = state_6169;
(statearr_6183[(11)] = inst_6148);

return statearr_6183;
})();
var statearr_6184_6246 = state_6169__$1;
(statearr_6184_6246[(2)] = inst_6149);

(statearr_6184_6246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (9))){
var inst_6125 = (state_6169[(7)]);
var inst_6160 = app.t3.main.update.call(null,inst_6125);
var inst_6125__$1 = inst_6160;
var state_6169__$1 = (function (){var statearr_6185 = state_6169;
(statearr_6185[(7)] = inst_6125__$1);

return statearr_6185;
})();
var statearr_6186_6247 = state_6169__$1;
(statearr_6186_6247[(2)] = null);

(statearr_6186_6247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (5))){
var inst_6129 = (state_6169[(8)]);
var inst_6125 = (state_6169[(7)]);
var inst_6136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6137 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_6138 = (new cljs.core.PersistentVector(null,1,(5),inst_6136,inst_6137,null));
var inst_6139 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_6129);
var inst_6140 = cljs.core.update_in.call(null,inst_6125,inst_6138,cljs.core.conj,inst_6139);
var inst_6125__$1 = inst_6140;
var state_6169__$1 = (function (){var statearr_6187 = state_6169;
(statearr_6187[(7)] = inst_6125__$1);

return statearr_6187;
})();
var statearr_6188_6248 = state_6169__$1;
(statearr_6188_6248[(2)] = null);

(statearr_6188_6248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (10))){
var inst_6163 = (state_6169[(2)]);
var state_6169__$1 = state_6169;
var statearr_6189_6249 = state_6169__$1;
(statearr_6189_6249[(2)] = inst_6163);

(statearr_6189_6249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6170 === (8))){
var inst_6129 = (state_6169[(8)]);
var inst_6145 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_6129);
var inst_6146 = cljs.core._EQ_.call(null,inst_6145,"q");
var state_6169__$1 = state_6169;
if(inst_6146){
var statearr_6190_6250 = state_6169__$1;
(statearr_6190_6250[(1)] = (11));

} else {
var statearr_6191_6251 = state_6169__$1;
(statearr_6191_6251[(1)] = (12));

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
});})(c__2882__auto___6237))
;
return ((function (switch__2792__auto__,c__2882__auto___6237){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_6192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6192[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_6192[(1)] = (1));

return statearr_6192;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_6169){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6193){if((e6193 instanceof Object)){
var ex__2796__auto__ = e6193;
var statearr_6194_6252 = state_6169;
(statearr_6194_6252[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6253 = state_6169;
state_6169 = G__6253;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_6169){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_6169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___6237))
})();
var state__2884__auto__ = (function (){var statearr_6195 = f__2883__auto__.call(null);
(statearr_6195[(6)] = c__2882__auto___6237);

return statearr_6195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___6237))
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
var vec__6196_6254 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_6255 = cljs.core.nth.call(null,vec__6196_6254,(0),null);
var py_6256 = cljs.core.nth.call(null,vec__6196_6254,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_6255,py_6256);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__6199 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__6200 = null;
var count__6201 = (0);
var i__6202 = (0);
while(true){
if((i__6202 < count__6201)){
var entity = cljs.core._nth.call(null,chunk__6200,i__6202);
var vec__6203_6257 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_6258 = cljs.core.nth.call(null,vec__6203_6257,(0),null);
var py_6259 = cljs.core.nth.call(null,vec__6203_6257,(1),null);
app.t3.main.p5.rect(px_6258,py_6259,(10),(10));


var G__6260 = seq__6199;
var G__6261 = chunk__6200;
var G__6262 = count__6201;
var G__6263 = (i__6202 + (1));
seq__6199 = G__6260;
chunk__6200 = G__6261;
count__6201 = G__6262;
i__6202 = G__6263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6199);
if(temp__5457__auto__){
var seq__6199__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6199__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6199__$1);
var G__6264 = cljs.core.chunk_rest.call(null,seq__6199__$1);
var G__6265 = c__4319__auto__;
var G__6266 = cljs.core.count.call(null,c__4319__auto__);
var G__6267 = (0);
seq__6199 = G__6264;
chunk__6200 = G__6265;
count__6201 = G__6266;
i__6202 = G__6267;
continue;
} else {
var entity = cljs.core.first.call(null,seq__6199__$1);
var vec__6206_6268 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_6269 = cljs.core.nth.call(null,vec__6206_6268,(0),null);
var py_6270 = cljs.core.nth.call(null,vec__6206_6268,(1),null);
app.t3.main.p5.rect(px_6269,py_6270,(10),(10));


var G__6271 = cljs.core.next.call(null,seq__6199__$1);
var G__6272 = null;
var G__6273 = (0);
var G__6274 = (0);
seq__6199 = G__6271;
chunk__6200 = G__6272;
count__6201 = G__6273;
i__6202 = G__6274;
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
return (function (state_6216){
var state_val_6217 = (state_6216[(1)]);
if((state_val_6217 === (1))){
var inst_6209 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_6210 = app.t3.main.p5.key;
var inst_6211 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_6210];
var inst_6212 = cljs.core.PersistentHashMap.fromArrays(inst_6209,inst_6211);
var state_6216__$1 = state_6216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6216__$1,(2),app.t3.main.evt,inst_6212);
} else {
if((state_val_6217 === (2))){
var inst_6214 = (state_6216[(2)]);
var state_6216__$1 = state_6216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6216__$1,inst_6214);
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
var statearr_6218 = [null,null,null,null,null,null,null];
(statearr_6218[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_6218[(1)] = (1));

return statearr_6218;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_6216){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6219){if((e6219 instanceof Object)){
var ex__2796__auto__ = e6219;
var statearr_6220_6275 = state_6216;
(statearr_6220_6275[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6276 = state_6216;
state_6216 = G__6276;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_6216){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_6216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_6221 = f__2883__auto__.call(null);
(statearr_6221[(6)] = c__2882__auto__);

return statearr_6221;
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
return (function (state_6229){
var state_val_6230 = (state_6229[(1)]);
if((state_val_6230 === (1))){
var inst_6222 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_6223 = app.t3.main.p5.key;
var inst_6224 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_6223];
var inst_6225 = cljs.core.PersistentHashMap.fromArrays(inst_6222,inst_6224);
var state_6229__$1 = state_6229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6229__$1,(2),app.t3.main.evt,inst_6225);
} else {
if((state_val_6230 === (2))){
var inst_6227 = (state_6229[(2)]);
var state_6229__$1 = state_6229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6229__$1,inst_6227);
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
var statearr_6231 = [null,null,null,null,null,null,null];
(statearr_6231[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_6231[(1)] = (1));

return statearr_6231;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_6229){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6232){if((e6232 instanceof Object)){
var ex__2796__auto__ = e6232;
var statearr_6233_6277 = state_6229;
(statearr_6233_6277[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6278 = state_6229;
state_6229 = G__6278;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_6229){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_6229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_6234 = f__2883__auto__.call(null);
(statearr_6234[(6)] = c__2882__auto__);

return statearr_6234;
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
