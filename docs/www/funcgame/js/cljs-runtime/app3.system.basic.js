goog.provide('app3.system.basic');
goog.require('cljs.core');
goog.require('app3.weapon.fist');
app3.system.basic.moveSystem = (function app3$system$basic$moveSystem(model,event){
var pred__36130 = cljs.core._EQ_;
var expr__36131 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36133 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36134 = expr__36131;
return (pred__36130.cljs$core$IFn$_invoke$arity$2 ? pred__36130.cljs$core$IFn$_invoke$arity$2(G__36133,G__36134) : pred__36130.call(null,G__36133,G__36134));
})())){
var vec__36135 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36135,pred__36130,expr__36131){
return (function (p__36138){
var map__36139 = p__36138;
var map__36139__$1 = (((((!((map__36139 == null))))?(((((map__36139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36139):map__36139);
var entity = map__36139__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,vel));
});})(entities,origin,vec__36135,pred__36130,expr__36131))
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
return (function (p__36141){
var map__36142 = p__36141;
var map__36142__$1 = (((((!((map__36142 == null))))?(((((map__36142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36142):map__36142);
var entity__$1 = map__36142__$1;
var vec__36143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36142__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(1),null);
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
return (function (p__36147){
var map__36148 = p__36147;
var map__36148__$1 = (((((!((map__36148 == null))))?(((((map__36148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36148):map__36148);
var entity__$1 = map__36148__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var _2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], 0));
});})(entities,origin))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
});
app3.system.basic.resetEnemyVelocity = (function app3$system$basic$resetEnemyVelocity(model,entity){
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin){
return (function (p__36150){
var map__36151 = p__36150;
var map__36151__$1 = (((((!((map__36151 == null))))?(((((map__36151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36151):map__36151);
var entity__$1 = map__36151__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
var _2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], 0));
});})(entities,origin))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
});
app3.system.basic.moveCostSystem = (function app3$system$basic$moveCostSystem(model,event){
var pred__36153 = cljs.core._EQ_;
var expr__36154 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36156 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36157 = expr__36154;
return (pred__36153.cljs$core$IFn$_invoke$arity$2 ? pred__36153.cljs$core$IFn$_invoke$arity$2(G__36156,G__36157) : pred__36153.call(null,G__36156,G__36157));
})())){
var vec__36158 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36158,pred__36153,expr__36154){
return (function (p__36161){
var map__36162 = p__36161;
var map__36162__$1 = (((((!((map__36162 == null))))?(((((map__36162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36162):map__36162);
var entity = map__36162__$1;
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
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
});})(entities,origin,vec__36158,pred__36153,expr__36154))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.basic.dieSystem = (function app3$system$basic$dieSystem(model,event){
var pred__36164 = cljs.core._EQ_;
var expr__36165 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36167 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36168 = expr__36165;
return (pred__36164.cljs$core$IFn$_invoke$arity$2 ? pred__36164.cljs$core$IFn$_invoke$arity$2(G__36167,G__36168) : pred__36164.call(null,G__36167,G__36168));
})())){
var vec__36169 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36169,pred__36164,expr__36165){
return (function (p__36172){
var map__36173 = p__36172;
var map__36173__$1 = (((((!((map__36173 == null))))?(((((map__36173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36173):map__36173);
var entity = map__36173__$1;
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36173__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp <= (0))){
app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"died","died",1083960752),entity], null),null);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),app3.weapon.fist.fist], null)], 0));
} else {
return entity;
}
});})(entities,origin,vec__36169,pred__36164,expr__36165))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.basic.roundSystem = (function app3$system$basic$roundSystem(model,event){
var pred__36175 = cljs.core._EQ_;
var expr__36176 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36178 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36179 = expr__36176;
return (pred__36175.cljs$core$IFn$_invoke$arity$2 ? pred__36175.cljs$core$IFn$_invoke$arity$2(G__36178,G__36179) : pred__36175.call(null,G__36178,G__36179));
})())){
var vec__36180 = cljs.core.rest(event);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.inc);
} else {
if(cljs.core.truth_((function (){var G__36188 = new cljs.core.Keyword(null,"died","died",1083960752);
var G__36189 = expr__36176;
return (pred__36175.cljs$core$IFn$_invoke$arity$2 ? pred__36175.cljs$core$IFn$_invoke$arity$2(G__36188,G__36189) : pred__36175.call(null,G__36188,G__36189));
})())){
var vec__36190 = cljs.core.rest(event);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36190,(0),null);
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
