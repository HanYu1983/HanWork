goog.provide('app3.system.action');
goog.require('cljs.core');
goog.require('app3.emitter');
goog.require('app3.interface$.player');
goog.require('app3.interface$.weapon');
app3.system.action.actionController = (function app3$system$action$actionController(model,event){
var pred__36310 = cljs.core._EQ_;
var expr__36311 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36313 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36314 = expr__36311;
return (pred__36310.cljs$core$IFn$_invoke$arity$2 ? pred__36310.cljs$core$IFn$_invoke$arity$2(G__36313,G__36314) : pred__36310.call(null,G__36313,G__36314));
})())){
var vec__36315 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"action","action",-811238024)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36315,pred__36310,expr__36311){
return (function (p__36318){
var map__36319 = p__36318;
var map__36319__$1 = (((((!((map__36319 == null))))?(((((map__36319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36319):map__36319);
var entity = map__36319__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__36323 = entity;
var G__36323__$1 = (cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,action),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833)], null)))?(function (){var fexpr__36325 = ((function (G__36323,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var v = (function (){var G__36326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var G__36326__$1 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"up","up",-269712113)))?cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10)], null),G__36326):G__36326);
var G__36326__$2 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"left","left",-399115937)))?cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(0)], null),G__36326__$1):G__36326__$1);
var G__36326__$3 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"down","down",1565245570)))?cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),G__36326__$2):G__36326__$2);
if(cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"right","right",-452581833))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),G__36326__$3);
} else {
return G__36326__$3;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),v], null)], 0));
});})(G__36323,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36325(G__36323);
})():G__36323);
var G__36323__$2 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"seek","seek",758996602)))?(function (){var fexpr__36327 = ((function (G__36323,G__36323__$1,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var self = entity__$1;
var target = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,self) : app3.interface$.player.target.call(null,null,model,self));
var dir = app3.tool.seek(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(target));
var vel__$1 = app3.tool.makeLength((3),dir);
if((app3.tool.length(dir) < (50))){
return self;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),vel__$1], null)], 0));
}
});})(G__36323,G__36323__$1,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36327(G__36323__$1);
})():G__36323__$1);
var G__36323__$3 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"evade","evade",-20204359)))?(function (){var fexpr__36357 = ((function (G__36323,G__36323__$1,G__36323__$2,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var self = entity__$1;
var target = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,self) : app3.interface$.player.target.call(null,null,model,self));
var dir = app3.tool.seek(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self));
var vel__$1 = app3.tool.makeLength((5),dir);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),vel__$1], null)], 0));
});})(G__36323,G__36323__$1,G__36323__$2,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36357(G__36323__$2);
})():G__36323__$2);
var G__36323__$4 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"fire","fire",-144730624)))?(function (){var fexpr__36358 = ((function (G__36323,G__36323__$1,G__36323__$2,G__36323__$3,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var self = entity__$1;
var weapon = new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145).cljs$core$IFn$_invoke$arity$1(self);
if(cljs.core.truth_(weapon)){
var nextWeapon = (app3.interface$.weapon.fire.cljs$core$IFn$_invoke$arity$1 ? app3.interface$.weapon.fire.cljs$core$IFn$_invoke$arity$1(weapon) : app3.interface$.weapon.fire.call(null,weapon));
var isFireSuccess = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(weapon,nextWeapon)));
var target = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,self) : app3.interface$.player.target.call(null,null,model,self));
app3.emitter.send(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fire","fire",-144730624),self,weapon,isFireSuccess,target], null),null);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),nextWeapon], null)], 0));
} else {
return self;
}
});})(G__36323,G__36323__$1,G__36323__$2,G__36323__$3,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36358(G__36323__$3);
})():G__36323__$3);
var G__36323__$5 = ((cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"seekWeapon","seekWeapon",1766859880)))?(function (){var fexpr__36359 = ((function (G__36323,G__36323__$1,G__36323__$2,G__36323__$3,G__36323__$4,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var weapons = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var seekWeapon = cljs.core.first(weapons);
if(cljs.core.truth_(seekWeapon)){
var dir = app3.tool.seek(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(seekWeapon));
var vel__$1 = app3.tool.makeLength((5),dir);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),vel__$1], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seekWeapon","seekWeapon",1766859880),null], null), null))], null)], 0));
}
});})(G__36323,G__36323__$1,G__36323__$2,G__36323__$3,G__36323__$4,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36359(G__36323__$4);
})():G__36323__$4);
if(cljs.core.contains_QMARK_(action,new cljs.core.Keyword(null,"seekHealing","seekHealing",593495473))){
var fexpr__36360 = ((function (G__36323,G__36323__$1,G__36323__$2,G__36323__$3,G__36323__$4,G__36323__$5,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311){
return (function (entity__$1){
var healing = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"healing","healing",1329047497)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var seekHealing = cljs.core.first(healing);
if(cljs.core.truth_(seekHealing)){
var dir = app3.tool.seek(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(seekHealing));
var vel__$1 = app3.tool.makeLength((5),dir);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),vel__$1], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seekHealing","seekHealing",593495473),null], null), null))], null)], 0));
}
});})(G__36323,G__36323__$1,G__36323__$2,G__36323__$3,G__36323__$4,G__36323__$5,map__36319,map__36319__$1,entity,pos,vel,action,entities,origin,vec__36315,pred__36310,expr__36311))
;
return fexpr__36360(G__36323__$5);
} else {
return G__36323__$5;
}
});})(entities,origin,vec__36315,pred__36310,expr__36311))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});

//# sourceMappingURL=app3.system.action.js.map
