goog.provide('app3.system.basic');
goog.require('cljs.core');
goog.require('app3.weapon.fist');
app3.system.basic.moveSystem = (function app3$system$basic$moveSystem(model,event){
var pred__36027 = cljs.core._EQ_;
var expr__36028 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36030 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36031 = expr__36028;
return (pred__36027.cljs$core$IFn$_invoke$arity$2 ? pred__36027.cljs$core$IFn$_invoke$arity$2(G__36030,G__36031) : pred__36027.call(null,G__36030,G__36031));
})())){
var vec__36033 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36033,pred__36027,expr__36028){
return (function (p__36045){
var map__36046 = p__36045;
var map__36046__$1 = (((((!((map__36046 == null))))?(((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36046):map__36046);
var entity = map__36046__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,vel));
});})(entities,origin,vec__36033,pred__36027,expr__36028))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.basic.boundPosition = (function app3$system$basic$boundPosition(model,entity){
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin){
return (function (p__36049){
var map__36050 = p__36049;
var map__36050__$1 = (((((!((map__36050 == null))))?(((((map__36050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36050):map__36050);
var entity__$1 = map__36050__$1;
var vec__36051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36050__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36051,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36051,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4222__auto__ = (function (){var x__4219__auto__ = x;
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4223__auto__ = (600);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(function (){var x__4222__auto__ = (function (){var x__4219__auto__ = y;
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4223__auto__ = (600);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], null)], 0));
});})(entities,origin))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
});
app3.system.basic.resetPlayerVelocity = (function app3$system$basic$resetPlayerVelocity(model,entity){
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin){
return (function (p__36059){
var map__36060 = p__36059;
var map__36060__$1 = (((((!((map__36060 == null))))?(((((map__36060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36060):map__36060);
var entity__$1 = map__36060__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36060__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var _2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36060__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], 0));
});})(entities,origin))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
});
app3.system.basic.resetEnemyVelocity = (function app3$system$basic$resetEnemyVelocity(model,entity){
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin){
return (function (p__36065){
var map__36066 = p__36065;
var map__36066__$1 = (((((!((map__36066 == null))))?(((((map__36066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36066):map__36066);
var entity__$1 = map__36066__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066__$1,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
var _2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], 0));
});})(entities,origin))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
});
app3.system.basic.moveCostSystem = (function app3$system$basic$moveCostSystem(model,event){
var pred__36070 = cljs.core._EQ_;
var expr__36071 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36073 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36074 = expr__36071;
return (pred__36070.cljs$core$IFn$_invoke$arity$2 ? pred__36070.cljs$core$IFn$_invoke$arity$2(G__36073,G__36074) : pred__36070.call(null,G__36073,G__36074));
})())){
var vec__36076 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36076,pred__36070,expr__36071){
return (function (p__36079){
var map__36080 = p__36079;
var map__36080__$1 = (((((!((map__36080 == null))))?(((((map__36080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36080):map__36080);
var entity = map__36080__$1;
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),vel)))){
var len = app3.tool.length(vel);
app3.emitter.send(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moveCost","moveCost",135276052),entity,len], null),null);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (hp - (len / (10)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], null)], 0));
} else {
return entity;
}
});})(entities,origin,vec__36076,pred__36070,expr__36071))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.basic.dieSystem = (function app3$system$basic$dieSystem(model,event){
var pred__36095 = cljs.core._EQ_;
var expr__36096 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36098 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36099 = expr__36096;
return (pred__36095.cljs$core$IFn$_invoke$arity$2 ? pred__36095.cljs$core$IFn$_invoke$arity$2(G__36098,G__36099) : pred__36095.call(null,G__36098,G__36099));
})())){
var vec__36100 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36100,pred__36095,expr__36096){
return (function (p__36125){
var map__36127 = p__36125;
var map__36127__$1 = (((((!((map__36127 == null))))?(((((map__36127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36127):map__36127);
var entity = map__36127__$1;
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp <= (0))){
app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"died","died",1083960752),entity], null),null);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),app3.weapon.fist.fist], null)], 0));
} else {
return entity;
}
});})(entities,origin,vec__36100,pred__36095,expr__36096))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.basic.roundSystem = (function app3$system$basic$roundSystem(model,event){
var pred__36134 = cljs.core._EQ_;
var expr__36135 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36137 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36138 = expr__36135;
return (pred__36134.cljs$core$IFn$_invoke$arity$2 ? pred__36134.cljs$core$IFn$_invoke$arity$2(G__36137,G__36138) : pred__36134.call(null,G__36137,G__36138));
})())){
var vec__36139 = cljs.core.rest(event);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.inc);
} else {
if(cljs.core.truth_((function (){var G__36142 = new cljs.core.Keyword(null,"died","died",1083960752);
var G__36143 = expr__36135;
return (pred__36134.cljs$core$IFn$_invoke$arity$2 ? pred__36134.cljs$core$IFn$_invoke$arity$2(G__36142,G__36143) : pred__36134.call(null,G__36142,G__36143));
})())){
var vec__36144 = cljs.core.rest(event);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var isPlayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(entity);
var tag = (cljs.core.truth_(isPlayer)?new cljs.core.Keyword(null,"enemyWin","enemyWin",-1377599201):new cljs.core.Keyword(null,"playerWin","playerWin",-169970404));
var plyr = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
var enemy = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(300)], null)], null)], 0));
var nextEnemy = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([enemy,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(300)], null)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.constantly((0))),tag,cljs.core.inc),new cljs.core.Keyword(null,"round","round",2009433328),cljs.core.inc),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,nextPlyr,enemy,nextEnemy])));
} else {
return model;
}
}
});

//# sourceMappingURL=app3.system.basic.js.map
