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
var pred__14801 = cljs.core._EQ_;
var expr__14802 = key;
if(cljs.core.truth_(pred__14801.call(null,"w",expr__14802))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_(pred__14801.call(null,"s",expr__14802))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_(pred__14801.call(null,"a",expr__14802))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_(pred__14801.call(null,"d",expr__14802))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_(pred__14801.call(null,"j",expr__14802))){
return cljs.core.update_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__14801,expr__14802){
return (function (p1__14800_SHARP_){
return cljs.core.conj.call(null,p1__14800_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.call(null,ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__14801,expr__14802))
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
var vec__14804 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__14804,(0),null);
var _ = cljs.core.nth.call(null,vec__14804,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.call(null,((function (vec__14804,cx,_,entities){
return (function (p__14807){
var map__14808 = p__14807;
var map__14808__$1 = ((((!((map__14808 == null)))?(((((map__14808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14808):map__14808);
var entity = map__14808__$1;
var vec__14809 = cljs.core.get.call(null,map__14808__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__14809,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14809,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__14804,cx,_,entities))
,entities)], null));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__14814 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.call(null,vec__14814,(0),null);
var _ = cljs.core.nth.call(null,vec__14814,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4292__auto__ = ((function (spawnPos,vec__14814,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__14817(s__14818){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__14814,cx,_,c){
return (function (){
var s__14818__$1 = s__14818;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14818__$1);
if(temp__5457__auto__){
var s__14818__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14818__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14818__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14820 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14819 = (0);
while(true){
if((i__14819 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__14819);
cljs.core.chunk_append.call(null,b__14820,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__14825 = (i__14819 + (1));
i__14819 = G__14825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),app$t3$main$spawnEnemy_$_iter__14817.call(null,cljs.core.chunk_rest.call(null,s__14818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),null);
}
} else {
var r = cljs.core.first.call(null,s__14818__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.call(null,spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__14817.call(null,cljs.core.rest.call(null,s__14818__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__14814,cx,_,c))
,null,null));
});})(spawnPos,vec__14814,cx,_,c))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(5)));
})();
var spawnRcs = cljs.core.filter.call(null,((function (spawnPos,vec__14814,cx,_,c,rcs){
return (function (p1__14813_SHARP_){
return ((0) < cljs.core.nth.call(null,p1__14813_SHARP_,(2)));
});})(spawnPos,vec__14814,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.call(null,cljs.core.set.call(null,spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.call(null,((function (spawnPos,vec__14814,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__14821){
var vec__14822 = p__14821;
var r = cljs.core.nth.call(null,vec__14822,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__14822,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__14814,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set.call(null,spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.call(null,(function (p1__14826_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14826_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.call(null,((function (playerBullets){
return (function (p1__14827_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14827_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4292__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__14829(s__14830){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__14830__$1 = s__14830;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14830__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var b = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__14830__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__14829_$_iter__14831(s__14832){
return (new cljs.core.LazySeq(null,((function (s__14830__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies){
return (function (){
var s__14832__$1 = s__14832;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14832__$1);
if(temp__5457__auto____$1){
var s__14832__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14832__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14832__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14834 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14833 = (0);
while(true){
if((i__14833 < size__4291__auto__)){
var e = cljs.core._nth.call(null,c__4290__auto__,i__14833);
cljs.core.chunk_append.call(null,b__14834,(function (){var vec__14835 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__14835,(0),null);
var by = cljs.core.nth.call(null,vec__14835,(1),null);
var vec__14838 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__14838,(0),null);
var ey = cljs.core.nth.call(null,vec__14838,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__14851 = (i__14833 + (1));
i__14833 = G__14851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14834),app$t3$main$checkCollide_$_iter__14829_$_iter__14831.call(null,cljs.core.chunk_rest.call(null,s__14832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14834),null);
}
} else {
var e = cljs.core.first.call(null,s__14832__$2);
return cljs.core.cons.call(null,(function (){var vec__14841 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.call(null,vec__14841,(0),null);
var by = cljs.core.nth.call(null,vec__14841,(1),null);
var vec__14844 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.call(null,vec__14844,(0),null);
var ey = cljs.core.nth.call(null,vec__14844,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__14829_$_iter__14831.call(null,cljs.core.rest.call(null,s__14832__$2)));
}
} else {
return null;
}
break;
}
});})(s__14830__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
,null,null));
});})(s__14830__$1,b,xs__6012__auto__,temp__5457__auto__,playerBullets,enemies))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,enemies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t3$main$checkCollide_$_iter__14829.call(null,cljs.core.rest.call(null,s__14830__$1)));
} else {
var G__14852 = cljs.core.rest.call(null,s__14830__$1);
s__14830__$1 = G__14852;
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
return (function (p__14847){
var vec__14848 = p__14847;
var _ = cljs.core.nth.call(null,vec__14848,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14848,(1),null);
var isCollide = cljs.core.nth.call(null,vec__14848,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.call(null,((function (playerBullets,enemies,check,collide){
return (function (p1__14828_SHARP_){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p1__14828_SHARP_),cljs.core.map.call(null,cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null));
});
app.t3.main.update = (function app$t3$main$update(ctx){
return app.t3.main.updateKey.call(null,app.t3.main.updateCamera.call(null,app.t3.main.spawnEnemy.call(null,app.t3.main.checkCollide.call(null,app.t3.main.removeEntityIfOutOfBound.call(null,app.t3.main.updateEntities.call(null,app.t3.main.updatePlayerThrust.call(null,app.t3.main.updatePlayerInput.call(null,ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__14853,camera,pos){
var map__14854 = p__14853;
var map__14854__$1 = ((((!((map__14854 == null)))?(((((map__14854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14854):map__14854);
var view = cljs.core.get.call(null,map__14854__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
return (function (state_14862){
var state_val_14863 = (state_14862[(1)]);
if((state_val_14863 === (1))){
var inst_14856 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_14857 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_14858 = cljs.core.PersistentHashMap.fromArrays(inst_14856,inst_14857);
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14862__$1,(2),app.t3.main.evt,inst_14858);
} else {
if((state_val_14863 === (2))){
var inst_14860 = (state_14862[(2)]);
var state_14862__$1 = state_14862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14862__$1,inst_14860);
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
var statearr_14864 = [null,null,null,null,null,null,null];
(statearr_14864[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14864[(1)] = (1));

return statearr_14864;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14862){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14865){if((e14865 instanceof Object)){
var ex__2796__auto__ = e14865;
var statearr_14866_15008 = state_14862;
(statearr_14866_15008[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15009 = state_14862;
state_14862 = G__15009;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14862){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14867 = f__2883__auto__.call(null);
(statearr_14867[(6)] = c__2882__auto__);

return statearr_14867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var c__2882__auto___15010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___15010){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___15010){
return (function (state_14942){
var state_val_14943 = (state_14942[(1)]);
if((state_val_14943 === (7))){
var inst_14938 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14944_15011 = state_14942__$1;
(statearr_14944_15011[(2)] = inst_14938);

(statearr_14944_15011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (1))){
var inst_14868 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_14869 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_14870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14871 = [(0),(0)];
var inst_14872 = (new cljs.core.PersistentVector(null,2,(5),inst_14870,inst_14871,null));
var inst_14873 = [inst_14872];
var inst_14874 = cljs.core.PersistentHashMap.fromArrays(inst_14869,inst_14873);
var inst_14875 = cljs.core.PersistentHashSet.EMPTY;
var inst_14876 = cljs.core.PersistentHashSet.EMPTY;
var inst_14877 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_14878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14879 = [(0),(0)];
var inst_14880 = (new cljs.core.PersistentVector(null,2,(5),inst_14878,inst_14879,null));
var inst_14881 = [inst_14880];
var inst_14882 = cljs.core.PersistentHashMap.fromArrays(inst_14877,inst_14881);
var inst_14883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14884 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_14885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14886 = [(100),(0)];
var inst_14887 = (new cljs.core.PersistentVector(null,2,(5),inst_14885,inst_14886,null));
var inst_14888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14889 = [(0),(-1)];
var inst_14890 = (new cljs.core.PersistentVector(null,2,(5),inst_14888,inst_14889,null));
var inst_14891 = [inst_14887,inst_14890];
var inst_14892 = cljs.core.PersistentHashMap.fromArrays(inst_14884,inst_14891);
var inst_14893 = [inst_14892];
var inst_14894 = (new cljs.core.PersistentVector(null,1,(5),inst_14883,inst_14893,null));
var inst_14895 = cljs.core.PersistentHashSet.EMPTY;
var inst_14896 = [inst_14874,inst_14875,inst_14876,inst_14882,inst_14894,inst_14895];
var inst_14897 = cljs.core.PersistentHashMap.fromArrays(inst_14868,inst_14896);
var inst_14898 = inst_14897;
var state_14942__$1 = (function (){var statearr_14945 = state_14942;
(statearr_14945[(7)] = inst_14898);

return statearr_14945;
})();
var statearr_14946_15012 = state_14942__$1;
(statearr_14946_15012[(2)] = null);

(statearr_14946_15012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (4))){
var inst_14906 = (state_14942[(8)]);
var inst_14902 = (state_14942[(9)]);
var inst_14902__$1 = (state_14942[(2)]);
var inst_14906__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_14902__$1);
var inst_14907 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14906__$1);
var state_14942__$1 = (function (){var statearr_14947 = state_14942;
(statearr_14947[(8)] = inst_14906__$1);

(statearr_14947[(9)] = inst_14902__$1);

return statearr_14947;
})();
if(inst_14907){
var statearr_14948_15013 = state_14942__$1;
(statearr_14948_15013[(1)] = (5));

} else {
var statearr_14949_15014 = state_14942__$1;
(statearr_14949_15014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (13))){
var inst_14931 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14950_15015 = state_14942__$1;
(statearr_14950_15015[(2)] = inst_14931);

(statearr_14950_15015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (6))){
var inst_14906 = (state_14942[(8)]);
var inst_14916 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_14906);
var state_14942__$1 = state_14942;
if(inst_14916){
var statearr_14951_15016 = state_14942__$1;
(statearr_14951_15016[(1)] = (8));

} else {
var statearr_14952_15017 = state_14942__$1;
(statearr_14952_15017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (3))){
var inst_14940 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14942__$1,inst_14940);
} else {
if((state_val_14943 === (12))){
var inst_14898 = (state_14942[(7)]);
var inst_14902 = (state_14942[(9)]);
var inst_14924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14925 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_14926 = (new cljs.core.PersistentVector(null,1,(5),inst_14924,inst_14925,null));
var inst_14927 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14902);
var inst_14928 = cljs.core.update_in.call(null,inst_14898,inst_14926,cljs.core.conj,inst_14927);
var inst_14898__$1 = inst_14928;
var state_14942__$1 = (function (){var statearr_14953 = state_14942;
(statearr_14953[(7)] = inst_14898__$1);

return statearr_14953;
})();
var statearr_14954_15018 = state_14942__$1;
(statearr_14954_15018[(2)] = null);

(statearr_14954_15018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (2))){
var inst_14898 = (state_14942[(7)]);
var inst_14900 = app.t3.main.model = inst_14898;
var state_14942__$1 = (function (){var statearr_14955 = state_14942;
(statearr_14955[(10)] = inst_14900);

return statearr_14955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14942__$1,(4),app.t3.main.evt);
} else {
if((state_val_14943 === (11))){
var inst_14921 = console.log("exit");
var inst_14922 = cljs.core.async.close_BANG_.call(null,app.t3.main.evt);
var state_14942__$1 = (function (){var statearr_14956 = state_14942;
(statearr_14956[(11)] = inst_14921);

return statearr_14956;
})();
var statearr_14957_15019 = state_14942__$1;
(statearr_14957_15019[(2)] = inst_14922);

(statearr_14957_15019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (9))){
var inst_14898 = (state_14942[(7)]);
var inst_14933 = app.t3.main.update.call(null,inst_14898);
var inst_14898__$1 = inst_14933;
var state_14942__$1 = (function (){var statearr_14958 = state_14942;
(statearr_14958[(7)] = inst_14898__$1);

return statearr_14958;
})();
var statearr_14959_15020 = state_14942__$1;
(statearr_14959_15020[(2)] = null);

(statearr_14959_15020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (5))){
var inst_14898 = (state_14942[(7)]);
var inst_14902 = (state_14942[(9)]);
var inst_14909 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14910 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_14911 = (new cljs.core.PersistentVector(null,1,(5),inst_14909,inst_14910,null));
var inst_14912 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14902);
var inst_14913 = cljs.core.update_in.call(null,inst_14898,inst_14911,cljs.core.conj,inst_14912);
var inst_14898__$1 = inst_14913;
var state_14942__$1 = (function (){var statearr_14960 = state_14942;
(statearr_14960[(7)] = inst_14898__$1);

return statearr_14960;
})();
var statearr_14961_15021 = state_14942__$1;
(statearr_14961_15021[(2)] = null);

(statearr_14961_15021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (10))){
var inst_14936 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14962_15022 = state_14942__$1;
(statearr_14962_15022[(2)] = inst_14936);

(statearr_14962_15022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14943 === (8))){
var inst_14902 = (state_14942[(9)]);
var inst_14918 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_14902);
var inst_14919 = cljs.core._EQ_.call(null,inst_14918,"q");
var state_14942__$1 = state_14942;
if(inst_14919){
var statearr_14963_15023 = state_14942__$1;
(statearr_14963_15023[(1)] = (11));

} else {
var statearr_14964_15024 = state_14942__$1;
(statearr_14964_15024[(1)] = (12));

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
});})(c__2882__auto___15010))
;
return ((function (switch__2792__auto__,c__2882__auto___15010){
return (function() {
var app$t3$main$main_$_state_machine__2793__auto__ = null;
var app$t3$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_14965 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14965[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14965[(1)] = (1));

return statearr_14965;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14942){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14966){if((e14966 instanceof Object)){
var ex__2796__auto__ = e14966;
var statearr_14967_15025 = state_14942;
(statearr_14967_15025[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15026 = state_14942;
state_14942 = G__15026;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___15010))
})();
var state__2884__auto__ = (function (){var statearr_14968 = f__2883__auto__.call(null);
(statearr_14968[(6)] = c__2882__auto___15010);

return statearr_14968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___15010))
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
var vec__14969_15027 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_15028 = cljs.core.nth.call(null,vec__14969_15027,(0),null);
var py_15029 = cljs.core.nth.call(null,vec__14969_15027,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_15028,py_15029);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.call(null,(function (){var seq__14972 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__14973 = null;
var count__14974 = (0);
var i__14975 = (0);
while(true){
if((i__14975 < count__14974)){
var entity = cljs.core._nth.call(null,chunk__14973,i__14975);
var vec__14976_15030 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_15031 = cljs.core.nth.call(null,vec__14976_15030,(0),null);
var py_15032 = cljs.core.nth.call(null,vec__14976_15030,(1),null);
app.t3.main.p5.rect(px_15031,py_15032,(10),(10));


var G__15033 = seq__14972;
var G__15034 = chunk__14973;
var G__15035 = count__14974;
var G__15036 = (i__14975 + (1));
seq__14972 = G__15033;
chunk__14973 = G__15034;
count__14974 = G__15035;
i__14975 = G__15036;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14972);
if(temp__5457__auto__){
var seq__14972__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14972__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14972__$1);
var G__15037 = cljs.core.chunk_rest.call(null,seq__14972__$1);
var G__15038 = c__4319__auto__;
var G__15039 = cljs.core.count.call(null,c__4319__auto__);
var G__15040 = (0);
seq__14972 = G__15037;
chunk__14973 = G__15038;
count__14974 = G__15039;
i__14975 = G__15040;
continue;
} else {
var entity = cljs.core.first.call(null,seq__14972__$1);
var vec__14979_15041 = projectionFn.call(null,cljs.core.get_in.call(null,app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null)));
var px_15042 = cljs.core.nth.call(null,vec__14979_15041,(0),null);
var py_15043 = cljs.core.nth.call(null,vec__14979_15041,(1),null);
app.t3.main.p5.rect(px_15042,py_15043,(10),(10));


var G__15044 = cljs.core.next.call(null,seq__14972__$1);
var G__15045 = null;
var G__15046 = (0);
var G__15047 = (0);
seq__14972 = G__15044;
chunk__14973 = G__15045;
count__14974 = G__15046;
i__14975 = G__15047;
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
return (function (state_14989){
var state_val_14990 = (state_14989[(1)]);
if((state_val_14990 === (1))){
var inst_14982 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14983 = app.t3.main.p5.key;
var inst_14984 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_14983];
var inst_14985 = cljs.core.PersistentHashMap.fromArrays(inst_14982,inst_14984);
var state_14989__$1 = state_14989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14989__$1,(2),app.t3.main.evt,inst_14985);
} else {
if((state_val_14990 === (2))){
var inst_14987 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14989__$1,inst_14987);
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
var statearr_14991 = [null,null,null,null,null,null,null];
(statearr_14991[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_14991[(1)] = (1));

return statearr_14991;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_14989){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14992){if((e14992 instanceof Object)){
var ex__2796__auto__ = e14992;
var statearr_14993_15048 = state_14989;
(statearr_14993_15048[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15049 = state_14989;
state_14989 = G__15049;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_14989){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_14989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_14994 = f__2883__auto__.call(null);
(statearr_14994[(6)] = c__2882__auto__);

return statearr_14994;
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
return (function (state_15002){
var state_val_15003 = (state_15002[(1)]);
if((state_val_15003 === (1))){
var inst_14995 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_14996 = app.t3.main.p5.key;
var inst_14997 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_14996];
var inst_14998 = cljs.core.PersistentHashMap.fromArrays(inst_14995,inst_14997);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15002__$1,(2),app.t3.main.evt,inst_14998);
} else {
if((state_val_15003 === (2))){
var inst_15000 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15002__$1,inst_15000);
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
var statearr_15004 = [null,null,null,null,null,null,null];
(statearr_15004[(0)] = app$t3$main$main_$_state_machine__2793__auto__);

(statearr_15004[(1)] = (1));

return statearr_15004;
});
var app$t3$main$main_$_state_machine__2793__auto____1 = (function (state_15002){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_15002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e15005){if((e15005 instanceof Object)){
var ex__2796__auto__ = e15005;
var statearr_15006_15050 = state_15002;
(statearr_15006_15050[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15051 = state_15002;
state_15002 = G__15051;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__2793__auto__ = function(state_15002){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__2793__auto____1.call(this,state_15002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__2793__auto____0;
app$t3$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__2793__auto____1;
return app$t3$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,projectionFn))
})();
var state__2884__auto__ = (function (){var statearr_15007 = f__2883__auto__.call(null);
(statearr_15007[(6)] = c__2882__auto__);

return statearr_15007;
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
