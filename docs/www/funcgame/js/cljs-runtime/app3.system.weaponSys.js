goog.provide('app3.system.weaponSys');
goog.require('cljs.core');
goog.require('app3.interface$.weapon');
goog.require('app3.weapon.gun');
goog.require('app3.weapon.meleeGun');
app3.system.weaponSys.playerCollideWeapon = (function app3$system$weaponSys$playerCollideWeapon(model,event){
var pred__36164 = cljs.core._EQ_;
var expr__36165 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36167 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36168 = expr__36165;
return (pred__36164.cljs$core$IFn$_invoke$arity$2 ? pred__36164.cljs$core$IFn$_invoke$arity$2(G__36167,G__36168) : pred__36164.call(null,G__36167,G__36168));
})())){
var vec__36169 = cljs.core.rest(event);
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var collides = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (p__36172){
var vec__36173 = p__36172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(0),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(1),null);
return isCollide;
});})(players,enemies,others,vec__36169,pred__36164,expr__36165))
,(function (){var iter__4523__auto__ = ((function (players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function app3$system$weaponSys$playerCollideWeapon_$_iter__36176(s__36177){
return (new cljs.core.LazySeq(null,((function (players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (){
var s__36177__$1 = s__36177;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36177__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var o1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36177__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function app3$system$weaponSys$playerCollideWeapon_$_iter__36176_$_iter__36178(s__36179){
return (new cljs.core.LazySeq(null,((function (s__36177__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (){
var s__36179__$1 = s__36179;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36179__$1);
if(temp__5735__auto____$1){
var s__36179__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36179__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36179__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36181 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36180 = (0);
while(true){
if((i__36180 < size__4522__auto__)){
var o2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36180);
cljs.core.chunk_append(b__36181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null));

var G__36230 = (i__36180 + (1));
i__36180 = G__36230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36181),app3$system$weaponSys$playerCollideWeapon_$_iter__36176_$_iter__36178(cljs.core.chunk_rest(s__36179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36181),null);
}
} else {
var o2 = cljs.core.first(s__36179__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null),app3$system$weaponSys$playerCollideWeapon_$_iter__36176_$_iter__36178(cljs.core.rest(s__36179__$2)));
}
} else {
return null;
}
break;
}
});})(s__36177__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36169,pred__36164,expr__36165))
,null,null));
});})(s__36177__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36169,pred__36164,expr__36165))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(others));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$system$weaponSys$playerCollideWeapon_$_iter__36176(cljs.core.rest(s__36177__$1)));
} else {
var G__36231 = cljs.core.rest(s__36177__$1);
s__36177__$1 = G__36231;
continue;
}
} else {
return null;
}
break;
}
});})(players,enemies,others,vec__36169,pred__36164,expr__36165))
,null,null));
});})(players,enemies,others,vec__36169,pred__36164,expr__36165))
;
return iter__4523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(players,enemies));
})()));
if((cljs.core.count(collides) > (0))){
var vec__36182 = cljs.core.first(collides);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182,(0),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182,(1),null);
return app3.emitter.send(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883),plyr,other], null),(function (){var fexpr__36186 = ((function (vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (model__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,other)),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,(function (){var fexpr__36187 = ((function (vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165){
return (function (plyr__$1,weapon){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plyr__$1,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),weapon),new cljs.core.Keyword(null,"action","action",-811238024),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(plyr__$1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seekWeapon","seekWeapon",1766859880),null], null), null)));
});})(vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165))
;
return fexpr__36187(plyr,other);
})()]),origin));
});})(vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165))
);
});})(vec__36182,plyr,other,collides,players,enemies,others,vec__36169,pred__36164,expr__36165))
;
return fexpr__36186(model);
})());
} else {
return model;
}
} else {
return model;
}
});
app3.system.weaponSys.tickWeapon = (function app3$system$weaponSys$tickWeapon(model,event){
var pred__36196 = cljs.core._EQ_;
var expr__36197 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36199 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36200 = expr__36197;
return (pred__36196.cljs$core$IFn$_invoke$arity$2 ? pred__36196.cljs$core$IFn$_invoke$arity$2(G__36199,G__36200) : pred__36196.call(null,G__36199,G__36200));
})())){
var vec__36201 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var hasWeapon = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(plyrs,enemies));
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hasWeapon,plyrs,enemies,vec__36201,pred__36196,expr__36197){
return (function (e){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),app3.interface$.weapon.tick);
});})(hasWeapon,plyrs,enemies,vec__36201,pred__36196,expr__36197))
,hasWeapon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(hasWeapon,next)));
} else {
return model;
}
});
app3.system.weaponSys.fireBullet = (function app3$system$weaponSys$fireBullet(model,event){
var pred__36214 = cljs.core._EQ_;
var expr__36215 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36217 = new cljs.core.Keyword(null,"fire","fire",-144730624);
var G__36218 = expr__36215;
return (pred__36214.cljs$core$IFn$_invoke$arity$2 ? pred__36214.cljs$core$IFn$_invoke$arity$2(G__36217,G__36218) : pred__36214.call(null,G__36217,G__36218));
})())){
var vec__36219 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(1),null);
var isFireSuccess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(3),null);
var bullets = (cljs.core.truth_(isFireSuccess)?(app3.interface$.weapon.createBullet.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.weapon.createBullet.cljs$core$IFn$_invoke$arity$3(weapon,plyr,target) : app3.interface$.weapon.createBullet.call(null,weapon,plyr,target)):cljs.core.PersistentVector.EMPTY);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bullets));
} else {
return model;
}
});
app3.system.weaponSys.spawnWeapon = (function app3$system$weaponSys$spawnWeapon(model,event){
var pred__36222 = cljs.core._EQ_;
var expr__36223 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36225 = new cljs.core.Keyword(null,"spawn","spawn",-1213583293);
var G__36226 = expr__36223;
return (pred__36222.cljs$core$IFn$_invoke$arity$2 ? pred__36222.cljs$core$IFn$_invoke$arity$2(G__36225,G__36226) : pred__36222.call(null,G__36225,G__36226));
})())){
var vec__36227 = cljs.core.rest(event);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(0),null);
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
