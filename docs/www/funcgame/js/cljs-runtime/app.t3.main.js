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
var pred__36535 = cljs.core._EQ_;
var expr__36536 = key;
if(cljs.core.truth_((pred__36535.cljs$core$IFn$_invoke$arity$2 ? pred__36535.cljs$core$IFn$_invoke$arity$2("w",expr__36536) : pred__36535.call(null,"w",expr__36536)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- app.t3.main.spd)], null)));
} else {
if(cljs.core.truth_((pred__36535.cljs$core$IFn$_invoke$arity$2 ? pred__36535.cljs$core$IFn$_invoke$arity$2("s",expr__36536) : pred__36535.call(null,"s",expr__36536)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),app.t3.main.spd], null)));
} else {
if(cljs.core.truth_((pred__36535.cljs$core$IFn$_invoke$arity$2 ? pred__36535.cljs$core$IFn$_invoke$arity$2("a",expr__36536) : pred__36535.call(null,"a",expr__36536)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- app.t3.main.spd),(0)], null)));
} else {
if(cljs.core.truth_((pred__36535.cljs$core$IFn$_invoke$arity$2 ? pred__36535.cljs$core$IFn$_invoke$arity$2("d",expr__36536) : pred__36535.call(null,"d",expr__36536)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.spd,(0)], null)));
} else {
if(cljs.core.truth_((pred__36535.cljs$core$IFn$_invoke$arity$2 ? pred__36535.cljs$core$IFn$_invoke$arity$2("j",expr__36536) : pred__36535.call(null,"j",expr__36536)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null),((function (pred__36535,expr__36536){
return (function (p1__36529_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__36529_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t3.main.bltspd,(0)], null)], null));
});})(pred__36535,expr__36536))
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
var vec__36566 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36566,(1),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36566,cx,_,entities){
return (function (p__36569){
var map__36571 = p__36569;
var map__36571__$1 = (((((!((map__36571 == null))))?(((((map__36571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36571):map__36571);
var entity = map__36571__$1;
var vec__36572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36572,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36572,(1),null);
return (((x < (cx + app.t3.main.cw))) && ((x > (cx - app.t3.main.cw))));
});})(vec__36566,cx,_,entities))
,entities)], null)], 0));
});
app.t3.main.spawnEnemy = (function app$t3$main$spawnEnemy(ctx){
var spawnPos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
var vec__36578 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36578,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36578,(1),null);
var c = ((cx / (30)) | (0));
var rcs = (function (){var iter__4523__auto__ = ((function (spawnPos,vec__36578,cx,_,c){
return (function app$t3$main$spawnEnemy_$_iter__36584(s__36585){
return (new cljs.core.LazySeq(null,((function (spawnPos,vec__36578,cx,_,c){
return (function (){
var s__36585__$1 = s__36585;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36585__$1);
if(temp__5735__auto__){
var s__36585__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36585__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36585__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36587 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36586 = (0);
while(true){
if((i__36586 < size__4522__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36586);
cljs.core.chunk_append(b__36587,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));

var G__37304 = (i__36586 + (1));
i__36586 = G__37304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36587),app$t3$main$spawnEnemy_$_iter__36584(cljs.core.chunk_rest(s__36585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36587),null);
}
} else {
var r = cljs.core.first(s__36585__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spawnPos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null),app$t3$main$spawnEnemy_$_iter__36584(cljs.core.rest(s__36585__$2)));
}
} else {
return null;
}
break;
}
});})(spawnPos,vec__36578,cx,_,c))
,null,null));
});})(spawnPos,vec__36578,cx,_,c))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})();
var spawnRcs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (spawnPos,vec__36578,cx,_,c,rcs){
return (function (p1__36577_SHARP_){
return ((0) < cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__36577_SHARP_,(2)));
});})(spawnPos,vec__36578,cx,_,c,rcs))
,rcs);
var spawnRcsOnce = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(spawnRcs),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx));
var spawnEnemies = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (spawnPos,vec__36578,cx,_,c,rcs,spawnRcs,spawnRcsOnce){
return (function (p__36684){
var vec__36688 = p__36684;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(0),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),null], null), null),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + app.t3.main.cw),(((r + (1)) * (app.t3.main.ch / (6))) - (app.t3.main.ch / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
});})(spawnPos,vec__36578,cx,_,c,rcs,spawnRcs,spawnRcsOnce))
,spawnRcsOnce);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.set(spawnRcs)),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx),spawnEnemies)], null)], 0));
});
app.t3.main.checkCollide = (function app$t3$main$checkCollide(ctx){
var playerBullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36694_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__36694_SHARP_),new cljs.core.Keyword(null,"playerBullet","playerBullet",651588764));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (playerBullets){
return (function (p1__36695_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__36695_SHARP_),new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(playerBullets))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
var check = (function (){var iter__4523__auto__ = ((function (playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__36703(s__36704){
return (new cljs.core.LazySeq(null,((function (playerBullets,enemies){
return (function (){
var s__36704__$1 = s__36704;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36704__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var b = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36704__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies){
return (function app$t3$main$checkCollide_$_iter__36703_$_iter__36705(s__36706){
return (new cljs.core.LazySeq(null,((function (s__36704__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies){
return (function (){
var s__36706__$1 = s__36706;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36706__$1);
if(temp__5735__auto____$1){
var s__36706__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36706__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36706__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36708 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36707 = (0);
while(true){
if((i__36707 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36707);
cljs.core.chunk_append(b__36708,(function (){var vec__36718 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36718,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36718,(1),null);
var vec__36721 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36721,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})());

var G__37389 = (i__36707 + (1));
i__36707 = G__37389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36708),app$t3$main$checkCollide_$_iter__36703_$_iter__36705(cljs.core.chunk_rest(s__36706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36708),null);
}
} else {
var e = cljs.core.first(s__36706__$2);
return cljs.core.cons((function (){var vec__36727 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(1),null);
var vec__36730 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36730,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36730,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,app.t3.main.p5.collidePointRect(ex,ey,bx,by,(30),(30))], null);
})(),app$t3$main$checkCollide_$_iter__36703_$_iter__36705(cljs.core.rest(s__36706__$2)));
}
} else {
return null;
}
break;
}
});})(s__36704__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies))
,null,null));
});})(s__36704__$1,b,xs__6292__auto__,temp__5735__auto__,playerBullets,enemies))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(enemies));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t3$main$checkCollide_$_iter__36703(cljs.core.rest(s__36704__$1)));
} else {
var G__37398 = cljs.core.rest(s__36704__$1);
s__36704__$1 = G__37398;
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
return (function (p__36737){
var vec__36740 = p__36737;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36740,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36740,(1),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36740,(2),null);
return isCollide;
});})(playerBullets,enemies,check))
,check);
var removeEnemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (playerBullets,enemies,check,collide){
return (function (p1__36696_SHARP_){
return cljs.core.not(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,p1__36696_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collide)));
});})(playerBullets,enemies,check,collide))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(ctx));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),removeEnemies], null)], 0));
});
app.t3.main.step = (function app$t3$main$step(ctx){
return app.t3.main.updateKey(app.t3.main.updateCamera(app.t3.main.spawnEnemy(app.t3.main.checkCollide(app.t3.main.removeEntityIfOutOfBound(app.t3.main.updateEntities(app.t3.main.updatePlayerThrust(app.t3.main.updatePlayerInput(ctx))))))));
});
app.t3.main.projection = (function app$t3$main$projection(p__36753,camera,pos){
var map__36755 = p__36753;
var map__36755__$1 = (((((!((map__36755 == null))))?(((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36755):map__36755);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36755__$1,new cljs.core.Keyword(null,"view","view",1247994814));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,view,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,pos,camera));
});
app.t3.main.main = (function app$t3$main$main(){
app.t3.main.model = null;

app.t3.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

setInterval((function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_36770){
var state_val_36771 = (state_36770[(1)]);
if((state_val_36771 === (1))){
var inst_36763 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36764 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_36765 = cljs.core.PersistentHashMap.fromArrays(inst_36763,inst_36764);
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36770__$1,(2),app.t3.main.evt,inst_36765);
} else {
if((state_val_36771 === (2))){
var inst_36767 = (state_36770[(2)]);
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36770__$1,inst_36767);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t3$main$main_$_state_machine__30005__auto__ = null;
var app$t3$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36784 = [null,null,null,null,null,null,null];
(statearr_36784[(0)] = app$t3$main$main_$_state_machine__30005__auto__);

(statearr_36784[(1)] = (1));

return statearr_36784;
});
var app$t3$main$main_$_state_machine__30005__auto____1 = (function (state_36770){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36770);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36843){if((e36843 instanceof Object)){
var ex__30008__auto__ = e36843;
var statearr_36858_37424 = state_36770;
(statearr_36858_37424[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37427 = state_36770;
state_36770 = G__37427;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30005__auto__ = function(state_36770){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30005__auto____1.call(this,state_36770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30005__auto____0;
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30005__auto____1;
return app$t3$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_36876 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36876[(6)] = c__30213__auto__);

return statearr_36876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
}),(33));

var c__30213__auto___37430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___37430){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___37430){
return (function (state_36989){
var state_val_36990 = (state_36989[(1)]);
if((state_val_36990 === (7))){
var inst_36966 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_36992_37432 = state_36989__$1;
(statearr_36992_37432[(2)] = inst_36966);

(statearr_36992_37432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (1))){
var inst_36877 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.Keyword(null,"mark","mark",-373816345)];
var inst_36878 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_36880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36881 = [(0),(0)];
var inst_36882 = (new cljs.core.PersistentVector(null,2,(5),inst_36880,inst_36881,null));
var inst_36884 = [inst_36882];
var inst_36885 = cljs.core.PersistentHashMap.fromArrays(inst_36878,inst_36884);
var inst_36890 = cljs.core.PersistentHashSet.EMPTY;
var inst_36891 = cljs.core.PersistentHashSet.EMPTY;
var inst_36892 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_36894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36895 = [(0),(0)];
var inst_36896 = (new cljs.core.PersistentVector(null,2,(5),inst_36894,inst_36895,null));
var inst_36897 = [inst_36896];
var inst_36898 = cljs.core.PersistentHashMap.fromArrays(inst_36892,inst_36897);
var inst_36900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36901 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"velocity","velocity",-581524355)];
var inst_36902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36903 = [(100),(0)];
var inst_36904 = (new cljs.core.PersistentVector(null,2,(5),inst_36902,inst_36903,null));
var inst_36905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36906 = [(0),(-1)];
var inst_36907 = (new cljs.core.PersistentVector(null,2,(5),inst_36905,inst_36906,null));
var inst_36908 = [inst_36904,inst_36907];
var inst_36909 = cljs.core.PersistentHashMap.fromArrays(inst_36901,inst_36908);
var inst_36910 = [inst_36909];
var inst_36911 = (new cljs.core.PersistentVector(null,1,(5),inst_36900,inst_36910,null));
var inst_36913 = cljs.core.PersistentHashSet.EMPTY;
var inst_36914 = [inst_36885,inst_36890,inst_36891,inst_36898,inst_36911,inst_36913];
var inst_36915 = cljs.core.PersistentHashMap.fromArrays(inst_36877,inst_36914);
var inst_36916 = inst_36915;
var state_36989__$1 = (function (){var statearr_36994 = state_36989;
(statearr_36994[(7)] = inst_36916);

return statearr_36994;
})();
var statearr_36995_37443 = state_36989__$1;
(statearr_36995_37443[(2)] = null);

(statearr_36995_37443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (4))){
var inst_36924 = (state_36989[(8)]);
var inst_36920 = (state_36989[(9)]);
var inst_36920__$1 = (state_36989[(2)]);
var inst_36924__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_36920__$1);
var inst_36925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_36924__$1);
var state_36989__$1 = (function (){var statearr_36996 = state_36989;
(statearr_36996[(8)] = inst_36924__$1);

(statearr_36996[(9)] = inst_36920__$1);

return statearr_36996;
})();
if(inst_36925){
var statearr_36997_37444 = state_36989__$1;
(statearr_36997_37444[(1)] = (5));

} else {
var statearr_36998_37445 = state_36989__$1;
(statearr_36998_37445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (13))){
var inst_36956 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_36999_37447 = state_36989__$1;
(statearr_36999_37447[(2)] = inst_36956);

(statearr_36999_37447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (6))){
var inst_36924 = (state_36989[(8)]);
var inst_36934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_36924);
var state_36989__$1 = state_36989;
if(inst_36934){
var statearr_37000_37449 = state_36989__$1;
(statearr_37000_37449[(1)] = (8));

} else {
var statearr_37001_37450 = state_36989__$1;
(statearr_37001_37450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (3))){
var inst_36972 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36989__$1,inst_36972);
} else {
if((state_val_36990 === (12))){
var inst_36916 = (state_36989[(7)]);
var inst_36920 = (state_36989[(9)]);
var inst_36948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36950 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964)];
var inst_36951 = (new cljs.core.PersistentVector(null,1,(5),inst_36948,inst_36950,null));
var inst_36952 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_36920);
var inst_36953 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_36916,inst_36951,cljs.core.conj,inst_36952);
var inst_36916__$1 = inst_36953;
var state_36989__$1 = (function (){var statearr_37002 = state_36989;
(statearr_37002[(7)] = inst_36916__$1);

return statearr_37002;
})();
var statearr_37003_37453 = state_36989__$1;
(statearr_37003_37453[(2)] = null);

(statearr_37003_37453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (2))){
var inst_36916 = (state_36989[(7)]);
var inst_36918 = app.t3.main.model = inst_36916;
var state_36989__$1 = (function (){var statearr_37004 = state_36989;
(statearr_37004[(10)] = inst_36918);

return statearr_37004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36989__$1,(4),app.t3.main.evt);
} else {
if((state_val_36990 === (11))){
var inst_36942 = console.log("exit");
var inst_36943 = cljs.core.async.close_BANG_(app.t3.main.evt);
var state_36989__$1 = (function (){var statearr_37005 = state_36989;
(statearr_37005[(11)] = inst_36942);

return statearr_37005;
})();
var statearr_37006_37483 = state_36989__$1;
(statearr_37006_37483[(2)] = inst_36943);

(statearr_37006_37483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (9))){
var inst_36916 = (state_36989[(7)]);
var inst_36958 = app.t3.main.step(inst_36916);
var inst_36916__$1 = inst_36958;
var state_36989__$1 = (function (){var statearr_37007 = state_36989;
(statearr_37007[(7)] = inst_36916__$1);

return statearr_37007;
})();
var statearr_37008_37543 = state_36989__$1;
(statearr_37008_37543[(2)] = null);

(statearr_37008_37543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (5))){
var inst_36916 = (state_36989[(7)]);
var inst_36920 = (state_36989[(9)]);
var inst_36927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36928 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256)];
var inst_36929 = (new cljs.core.PersistentVector(null,1,(5),inst_36927,inst_36928,null));
var inst_36930 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_36920);
var inst_36931 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_36916,inst_36929,cljs.core.conj,inst_36930);
var inst_36916__$1 = inst_36931;
var state_36989__$1 = (function (){var statearr_37009 = state_36989;
(statearr_37009[(7)] = inst_36916__$1);

return statearr_37009;
})();
var statearr_37010_37548 = state_36989__$1;
(statearr_37010_37548[(2)] = null);

(statearr_37010_37548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (10))){
var inst_36962 = (state_36989[(2)]);
var state_36989__$1 = state_36989;
var statearr_37011_37552 = state_36989__$1;
(statearr_37011_37552[(2)] = inst_36962);

(statearr_37011_37552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36990 === (8))){
var inst_36920 = (state_36989[(9)]);
var inst_36937 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_36920);
var inst_36938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36937,"q");
var state_36989__$1 = state_36989;
if(inst_36938){
var statearr_37012_37553 = state_36989__$1;
(statearr_37012_37553[(1)] = (11));

} else {
var statearr_37013_37554 = state_36989__$1;
(statearr_37013_37554[(1)] = (12));

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
});})(c__30213__auto___37430))
;
return ((function (switch__30004__auto__,c__30213__auto___37430){
return (function() {
var app$t3$main$main_$_state_machine__30005__auto__ = null;
var app$t3$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37014[(0)] = app$t3$main$main_$_state_machine__30005__auto__);

(statearr_37014[(1)] = (1));

return statearr_37014;
});
var app$t3$main$main_$_state_machine__30005__auto____1 = (function (state_36989){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36989);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37015){if((e37015 instanceof Object)){
var ex__30008__auto__ = e37015;
var statearr_37016_37555 = state_36989;
(statearr_37016_37555[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37556 = state_36989;
state_36989 = G__37556;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30005__auto__ = function(state_36989){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30005__auto____1.call(this,state_36989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30005__auto____0;
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30005__auto____1;
return app$t3$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___37430))
})();
var state__30215__auto__ = (function (){var statearr_37017 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37017[(6)] = c__30213__auto___37430);

return statearr_37017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___37430))
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
var vec__37018_37557 = (function (){var G__37021 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37022 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37021,G__37022) : projectionFn.call(null,G__37021,G__37022));
})();
var px_37558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018_37557,(0),null);
var py_37559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018_37557,(1),null);
app.t3.main.p5.fill((255));

app.t3.main.p5.rect((0),(0),app.t3.main.cw,app.t3.main.ch);

app.t3.main.p5.push();

app.t3.main.p5.translate(px_37558,py_37559);

app.t3.main.p5.rotate((0));

app.t3.main.p5.fill((100));

app.t3.main.p5.rect((-5),(-5),(10),(10));

app.t3.main.p5.pop();

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__37023 = cljs.core.seq(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(app.t3.main.model));
var chunk__37024 = null;
var count__37025 = (0);
var i__37026 = (0);
while(true){
if((i__37026 < count__37025)){
var entity = chunk__37024.cljs$core$IIndexed$_nth$arity$2(null,i__37026);
var vec__37037_37560 = (function (){var G__37040 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37041 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37040,G__37041) : projectionFn.call(null,G__37040,G__37041));
})();
var px_37561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37560,(0),null);
var py_37562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37560,(1),null);
app.t3.main.p5.rect(px_37561,py_37562,(10),(10));


var G__37563 = seq__37023;
var G__37564 = chunk__37024;
var G__37565 = count__37025;
var G__37566 = (i__37026 + (1));
seq__37023 = G__37563;
chunk__37024 = G__37564;
count__37025 = G__37565;
i__37026 = G__37566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37023);
if(temp__5735__auto__){
var seq__37023__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37023__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37023__$1);
var G__37567 = cljs.core.chunk_rest(seq__37023__$1);
var G__37568 = c__4550__auto__;
var G__37569 = cljs.core.count(c__4550__auto__);
var G__37570 = (0);
seq__37023 = G__37567;
chunk__37024 = G__37568;
count__37025 = G__37569;
i__37026 = G__37570;
continue;
} else {
var entity = cljs.core.first(seq__37023__$1);
var vec__37047_37571 = (function (){var G__37050 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t3.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var G__37051 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
return (projectionFn.cljs$core$IFn$_invoke$arity$2 ? projectionFn.cljs$core$IFn$_invoke$arity$2(G__37050,G__37051) : projectionFn.call(null,G__37050,G__37051));
})();
var px_37572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047_37571,(0),null);
var py_37573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047_37571,(1),null);
app.t3.main.p5.rect(px_37572,py_37573,(10),(10));


var G__37574 = cljs.core.next(seq__37023__$1);
var G__37575 = null;
var G__37576 = (0);
var G__37577 = (0);
seq__37023 = G__37574;
chunk__37024 = G__37575;
count__37025 = G__37576;
i__37026 = G__37577;
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
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,projectionFn){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,projectionFn){
return (function (state_37063){
var state_val_37064 = (state_37063[(1)]);
if((state_val_37064 === (1))){
var inst_37056 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37057 = app.t3.main.p5.key;
var inst_37058 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37057];
var inst_37059 = cljs.core.PersistentHashMap.fromArrays(inst_37056,inst_37058);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37063__$1,(2),app.t3.main.evt,inst_37059);
} else {
if((state_val_37064 === (2))){
var inst_37061 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37063__$1,inst_37061);
} else {
return null;
}
}
});})(c__30213__auto__,projectionFn))
;
return ((function (switch__30004__auto__,c__30213__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__30005__auto__ = null;
var app$t3$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37070 = [null,null,null,null,null,null,null];
(statearr_37070[(0)] = app$t3$main$main_$_state_machine__30005__auto__);

(statearr_37070[(1)] = (1));

return statearr_37070;
});
var app$t3$main$main_$_state_machine__30005__auto____1 = (function (state_37063){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37063);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37072){if((e37072 instanceof Object)){
var ex__30008__auto__ = e37072;
var statearr_37074_37580 = state_37063;
(statearr_37074_37580[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_37063;
state_37063 = G__37581;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30005__auto__ = function(state_37063){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30005__auto____1.call(this,state_37063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30005__auto____0;
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30005__auto____1;
return app$t3$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,projectionFn))
})();
var state__30215__auto__ = (function (){var statearr_37079 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37079[(6)] = c__30213__auto__);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,projectionFn))
);

return c__30213__auto__;
});})(projectionFn))
;

return app.t3.main.p5.keyReleased = ((function (projectionFn){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,projectionFn){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,projectionFn){
return (function (state_37097){
var state_val_37099 = (state_37097[(1)]);
if((state_val_37099 === (1))){
var inst_37084 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37090 = app.t3.main.p5.key;
var inst_37091 = [new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),inst_37090];
var inst_37092 = cljs.core.PersistentHashMap.fromArrays(inst_37084,inst_37091);
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37097__$1,(2),app.t3.main.evt,inst_37092);
} else {
if((state_val_37099 === (2))){
var inst_37094 = (state_37097[(2)]);
var state_37097__$1 = state_37097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37097__$1,inst_37094);
} else {
return null;
}
}
});})(c__30213__auto__,projectionFn))
;
return ((function (switch__30004__auto__,c__30213__auto__,projectionFn){
return (function() {
var app$t3$main$main_$_state_machine__30005__auto__ = null;
var app$t3$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37150 = [null,null,null,null,null,null,null];
(statearr_37150[(0)] = app$t3$main$main_$_state_machine__30005__auto__);

(statearr_37150[(1)] = (1));

return statearr_37150;
});
var app$t3$main$main_$_state_machine__30005__auto____1 = (function (state_37097){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37097);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37159){if((e37159 instanceof Object)){
var ex__30008__auto__ = e37159;
var statearr_37174_37588 = state_37097;
(statearr_37174_37588[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37589 = state_37097;
state_37097 = G__37589;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t3$main$main_$_state_machine__30005__auto__ = function(state_37097){
switch(arguments.length){
case 0:
return app$t3$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t3$main$main_$_state_machine__30005__auto____1.call(this,state_37097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t3$main$main_$_state_machine__30005__auto____0;
app$t3$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t3$main$main_$_state_machine__30005__auto____1;
return app$t3$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,projectionFn))
})();
var state__30215__auto__ = (function (){var statearr_37201 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37201[(6)] = c__30213__auto__);

return statearr_37201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,projectionFn))
);

return c__30213__auto__;
});})(projectionFn))
;
});
app.t3.main.main();

//# sourceMappingURL=app.t3.main.js.map
