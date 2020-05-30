goog.provide('app3.system.weaponSys');
goog.require('cljs.core');
goog.require('app3.interface$.weapon');
goog.require('app3.weapon.gun');
goog.require('app3.weapon.meleeGun');
app3.system.weaponSys.playerCollideWeapon = (function app3$system$weaponSys$playerCollideWeapon(model,event){
var pred__36193 = cljs.core._EQ_;
var expr__36194 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36196 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36197 = expr__36194;
return (pred__36193.cljs$core$IFn$_invoke$arity$2 ? pred__36193.cljs$core$IFn$_invoke$arity$2(G__36196,G__36197) : pred__36193.call(null,G__36196,G__36197));
})())){
var vec__36198 = cljs.core.rest(event);
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var collides = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (p__36201){
var vec__36202 = p__36201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36202,(0),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36202,(1),null);
return isCollide;
});})(players,enemies,others,vec__36198,pred__36193,expr__36194))
,(function (){var iter__4523__auto__ = ((function (players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function app3$system$weaponSys$playerCollideWeapon_$_iter__36205(s__36206){
return (new cljs.core.LazySeq(null,((function (players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (){
var s__36206__$1 = s__36206;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36206__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var o1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36206__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function app3$system$weaponSys$playerCollideWeapon_$_iter__36205_$_iter__36207(s__36208){
return (new cljs.core.LazySeq(null,((function (s__36206__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (){
var s__36208__$1 = s__36208;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36208__$1);
if(temp__5735__auto____$1){
var s__36208__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36208__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36208__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36210 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36209 = (0);
while(true){
if((i__36209 < size__4522__auto__)){
var o2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36209);
cljs.core.chunk_append(b__36210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null));

var G__36298 = (i__36209 + (1));
i__36209 = G__36298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36210),app3$system$weaponSys$playerCollideWeapon_$_iter__36205_$_iter__36207(cljs.core.chunk_rest(s__36208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36210),null);
}
} else {
var o2 = cljs.core.first(s__36208__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null),app3$system$weaponSys$playerCollideWeapon_$_iter__36205_$_iter__36207(cljs.core.rest(s__36208__$2)));
}
} else {
return null;
}
break;
}
});})(s__36206__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36198,pred__36193,expr__36194))
,null,null));
});})(s__36206__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36198,pred__36193,expr__36194))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(others));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$system$weaponSys$playerCollideWeapon_$_iter__36205(cljs.core.rest(s__36206__$1)));
} else {
var G__36300 = cljs.core.rest(s__36206__$1);
s__36206__$1 = G__36300;
continue;
}
} else {
return null;
}
break;
}
});})(players,enemies,others,vec__36198,pred__36193,expr__36194))
,null,null));
});})(players,enemies,others,vec__36198,pred__36193,expr__36194))
;
return iter__4523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(players,enemies));
})()));
if((cljs.core.count(collides) > (0))){
var vec__36217 = cljs.core.first(collides);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(0),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(1),null);
return app3.emitter.send(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883),plyr,other], null),(function (){var fexpr__36221 = ((function (vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (model__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,other)),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,(function (){var fexpr__36225 = ((function (vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194){
return (function (plyr__$1,weapon){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plyr__$1,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),weapon),new cljs.core.Keyword(null,"action","action",-811238024),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(plyr__$1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seekWeapon","seekWeapon",1766859880),null], null), null)));
});})(vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194))
;
return fexpr__36225(plyr,other);
})()]),origin));
});})(vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194))
);
});})(vec__36217,plyr,other,collides,players,enemies,others,vec__36198,pred__36193,expr__36194))
;
return fexpr__36221(model);
})());
} else {
return model;
}
} else {
return model;
}
});
app3.system.weaponSys.tickWeapon = (function app3$system$weaponSys$tickWeapon(model,event){
var pred__36235 = cljs.core._EQ_;
var expr__36236 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36240 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36241 = expr__36236;
return (pred__36235.cljs$core$IFn$_invoke$arity$2 ? pred__36235.cljs$core$IFn$_invoke$arity$2(G__36240,G__36241) : pred__36235.call(null,G__36240,G__36241));
})())){
var vec__36246 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var hasWeapon = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(plyrs,enemies));
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hasWeapon,plyrs,enemies,vec__36246,pred__36235,expr__36236){
return (function (e){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),app3.interface$.weapon.tick);
});})(hasWeapon,plyrs,enemies,vec__36246,pred__36235,expr__36236))
,hasWeapon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(hasWeapon,next)));
} else {
return model;
}
});
app3.system.weaponSys.fireBullet = (function app3$system$weaponSys$fireBullet(model,event){
var pred__36276 = cljs.core._EQ_;
var expr__36277 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36279 = new cljs.core.Keyword(null,"fire","fire",-144730624);
var G__36280 = expr__36277;
return (pred__36276.cljs$core$IFn$_invoke$arity$2 ? pred__36276.cljs$core$IFn$_invoke$arity$2(G__36279,G__36280) : pred__36276.call(null,G__36279,G__36280));
})())){
var vec__36281 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(1),null);
var isFireSuccess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(3),null);
var bullets = (cljs.core.truth_(isFireSuccess)?(app3.interface$.weapon.createBullet.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.weapon.createBullet.cljs$core$IFn$_invoke$arity$3(weapon,plyr,target) : app3.interface$.weapon.createBullet.call(null,weapon,plyr,target)):cljs.core.PersistentVector.EMPTY);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bullets));
} else {
return model;
}
});
app3.system.weaponSys.spawnWeapon = (function app3$system$weaponSys$spawnWeapon(model,event){
var pred__36284 = cljs.core._EQ_;
var expr__36285 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36287 = new cljs.core.Keyword(null,"spawn","spawn",-1213583293);
var G__36288 = expr__36285;
return (pred__36284.cljs$core$IFn$_invoke$arity$2 ? pred__36284.cljs$core$IFn$_invoke$arity$2(G__36287,G__36288) : pred__36284.call(null,G__36287,G__36288));
})())){
var vec__36289 = cljs.core.rest(event);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weapon","weapon",-504830232),what)){
var weapons = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
if((cljs.core.count(weapons) < (2))){
var newW = (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5))?app3.weapon.gun.gun:app3.weapon.meleeGun.meleeGun);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([newW,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((600)),cljs.core.rand_int((600))], null)], null)], 0))));
} else {
return model;
}
} else {
return model;
}
} else {
return model;
}
});

//# sourceMappingURL=app3.system.weaponSys.js.map
