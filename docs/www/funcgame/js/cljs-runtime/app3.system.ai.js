goog.provide('app3.system.ai');
goog.require('cljs.core');
goog.require('app3.interface$.player');
goog.require('app3.qlearning');
app3.system.ai.brainMode = new cljs.core.Keyword(null,"fast","fast",-24391997);
app3.system.ai.updateBrain = (function app3$system$ai$updateBrain(model,event){
var pred__36331 = cljs.core._EQ_;
var expr__36332 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36334 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36335 = expr__36332;
return (pred__36331.cljs$core$IFn$_invoke$arity$2 ? pred__36331.cljs$core$IFn$_invoke$arity$2(G__36334,G__36335) : pred__36331.call(null,G__36334,G__36335));
})())){
var vec__36336 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var targets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.target,null,model),plyrs);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.updateBrain,app3.system.ai.brainMode,model),targets,plyrs);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
return model;
}
});
app3.system.ai.syncBrainAction = (function app3$system$ai$syncBrainAction(model,event){
var pred__36339 = cljs.core._EQ_;
var expr__36340 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36342 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36343 = expr__36340;
return (pred__36339.cljs$core$IFn$_invoke$arity$2 ? pred__36339.cljs$core$IFn$_invoke$arity$2(G__36342,G__36343) : pred__36339.call(null,G__36342,G__36343));
})())){
var vec__36344 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36344,pred__36339,expr__36340){
return (function (p__36347){
var map__36348 = p__36347;
var map__36348__$1 = (((((!((map__36348 == null))))?(((((map__36348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36348):map__36348);
var entity = map__36348__$1;
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36348__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__36350 = new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249).cljs$core$IFn$_invoke$arity$1(brain);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(0),null);
var hand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = hand;
if(cljs.core.truth_(and__4120__auto__)){
return move;
} else {
return and__4120__auto__;
}
})())){
var handAction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),null,new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"fire","fire",-144730624)], null);
var moveAction = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"normal","normal",-1519123858),null,new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"seek","seek",758996602),new cljs.core.Keyword(null,"evade","evade",-20204359),new cljs.core.Keyword(null,"evade","evade",-20204359),new cljs.core.Keyword(null,"findWeapon","findWeapon",-850649050),new cljs.core.Keyword(null,"seekWeapon","seekWeapon",1766859880),new cljs.core.Keyword(null,"findHealing","findHealing",2004924501),new cljs.core.Keyword(null,"seekHealing","seekHealing",593495473)], null);
var actions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handAction,moveAction], null)))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),((function (handAction,moveAction,actions,vec__36350,move,hand,map__36348,map__36348__$1,entity,brain,entities,origin,vec__36344,pred__36339,expr__36340){
return (function (origin__$1){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(origin__$1,actions),cljs.core.PersistentHashSet.createAsIfByAssoc([(hand.cljs$core$IFn$_invoke$arity$1 ? hand.cljs$core$IFn$_invoke$arity$1(handAction) : hand.call(null,handAction)),(move.cljs$core$IFn$_invoke$arity$1 ? move.cljs$core$IFn$_invoke$arity$1(moveAction) : move.call(null,moveAction))]));
});})(handAction,moveAction,actions,vec__36350,move,hand,map__36348,map__36348__$1,entity,brain,entities,origin,vec__36344,pred__36339,expr__36340))
);
} else {
return entity;
}
});})(entities,origin,vec__36344,pred__36339,expr__36340))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.ai.brainReward = (function app3$system$ai$brainReward(model,event){
var pred__36436 = cljs.core._EQ_;
var expr__36437 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36439 = new cljs.core.Keyword(null,"update2","update2",-1233425023);
var G__36440 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36439,G__36440) : pred__36436.call(null,G__36439,G__36440));
})())){
var vec__36441 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__36441,pred__36436,expr__36437){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(plyrs,vec__36441,pred__36436,expr__36437))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__36441,pred__36436,expr__36437){
return (function (p__36450){
var map__36451 = p__36450;
var map__36451__$1 = (((((!((map__36451 == null))))?(((((map__36451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36451):map__36451);
var brain = map__36451__$1;
var lastAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36451__$1,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249));
var updateFn = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),lastAction))))?cljs.core.identity:((function (map__36451,map__36451__$1,brain,lastAction,plyrs,vec__36441,pred__36436,expr__36437){
return (function (o){
return (o + (1000));
});})(map__36451,map__36451__$1,brain,lastAction,plyrs,vec__36441,pred__36436,expr__36437))

);
return app3.qlearning.updateR(brain,updateFn);
});})(plyrs,vec__36441,pred__36436,expr__36437))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36460 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36461 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36460,G__36461) : pred__36436.call(null,G__36460,G__36461));
})())){
var vec__36462 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__36462,pred__36436,expr__36437){
return (function (p1__36419_SHARP_,p2__36420_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__36419_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),p2__36420_SHARP_], null)], 0));
});})(plyrs,vec__36462,pred__36436,expr__36437))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__36462,pred__36436,expr__36437){
return (function (p1__36418_SHARP_){
return app3.qlearning.updateR(p1__36418_SHARP_,cljs.core.inc);
});})(plyrs,vec__36462,pred__36436,expr__36437))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36491 = new cljs.core.Keyword(null,"died","died",1083960752);
var G__36492 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36491,G__36492) : pred__36436.call(null,G__36491,G__36492));
})())){
var vec__36500 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36500,(0),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36500,plyr,pred__36436,expr__36437){
return (function (p1__36421_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36421_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__36500,plyr,pred__36436,expr__36437))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
var enemy = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,plyr__$1) : app3.interface$.player.target.call(null,null,model,plyr__$1));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,enemy,vec__36500,plyr,pred__36436,expr__36437){
return (function (o){
return (o - (1000));
});})(plyr__$1,enemy,vec__36500,plyr,pred__36436,expr__36437))
)], null)], 0));
var nextEnemy = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([enemy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(enemy),((function (nextPlyr,plyr__$1,enemy,vec__36500,plyr,pred__36436,expr__36437){
return (function (o){
return (o + (0));
});})(nextPlyr,plyr__$1,enemy,vec__36500,plyr,pred__36436,expr__36437))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr,enemy,nextEnemy])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36538 = new cljs.core.Keyword(null,"moveCost_xxxx","moveCost_xxxx",382475679);
var G__36539 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36538,G__36539) : pred__36436.call(null,G__36538,G__36539));
})())){
var vec__36540 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36540,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36540,(1),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36540,plyr,len,pred__36436,expr__36437){
return (function (p1__36426_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36426_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__36540,plyr,len,pred__36436,expr__36437))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,vec__36540,plyr,len,pred__36436,expr__36437){
return (function (o){
return (o - (len / (100)));
});})(plyr__$1,vec__36540,plyr,len,pred__36436,expr__36437))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36551 = new cljs.core.Keyword(null,"fire","fire",-144730624);
var G__36552 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36551,G__36552) : pred__36436.call(null,G__36551,G__36552));
})())){
var vec__36559 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559,(1),null);
var isFireSuccess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559,(3),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__36563 = new cljs.core.Keyword(null,"playerCollideHealing","playerCollideHealing",-1290989917);
var G__36564 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36563,G__36564) : pred__36436.call(null,G__36563,G__36564));
})())){
var vec__36588 = cljs.core.rest(event);
var originPlyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36588,(0),null);
var healing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36588,(1),null);
var plyr = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36588,originPlyr,healing,pred__36436,expr__36437){
return (function (p1__36429_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36429_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(originPlyr));
});})(vec__36588,originPlyr,healing,pred__36436,expr__36437))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr)){
var hpOffset = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(plyr) - new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(originPlyr));
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (hpOffset,plyr,vec__36588,originPlyr,healing,pred__36436,expr__36437){
return (function (o){
return (o + ((10) * hpOffset));
});})(hpOffset,plyr,vec__36588,originPlyr,healing,pred__36436,expr__36437))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36673 = new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883);
var G__36674 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36673,G__36674) : pred__36436.call(null,G__36673,G__36674));
})())){
var vec__36676 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(1),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__36680 = new cljs.core.Keyword(null,"bulletCollidePlayer","bulletCollidePlayer",-286669229);
var G__36681 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36680,G__36681) : pred__36436.call(null,G__36680,G__36681));
})())){
var vec__36685 = cljs.core.rest(event);
var collides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36685,(0),null);
var hitBullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collides);
var fromPlyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__36685,collides,pred__36436,expr__36437){
return (function (bullet){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__36685,collides,pred__36436,expr__36437){
return (function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bullet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
});})(hitBullets,vec__36685,collides,pred__36436,expr__36437))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
});})(hitBullets,vec__36685,collides,pred__36436,expr__36437))
,hitBullets));
var fromGroup = cljs.core.group_by(cljs.core.identity,fromPlyrs);
var plyrs = cljs.core.keys(fromGroup);
var hitCount = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(fromGroup));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437){
return (function (cnt,brain){
return app3.qlearning.updateR(brain,((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437){
return (function (o){
return (o + ((10) * cnt));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437))
);
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36685,collides,pred__36436,expr__36437))
,hitCount,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36710 = new cljs.core.Keyword(null,"bulletHitWall","bulletHitWall",-1352075893);
var G__36711 = expr__36437;
return (pred__36436.cljs$core$IFn$_invoke$arity$2 ? pred__36436.cljs$core$IFn$_invoke$arity$2(G__36710,G__36711) : pred__36436.call(null,G__36710,G__36711));
})())){
var vec__36714 = cljs.core.rest(event);
var bullets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36714,(0),null);
var brains = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var fromIds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (brains,vec__36714,bullets,pred__36436,expr__36437){
return (function (p1__36430_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__36430_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(brains,vec__36714,bullets,pred__36436,expr__36437))
,bullets);
var idGroup = cljs.core.group_by(cljs.core.identity,fromIds);
var ids = cljs.core.keys(idGroup);
var cnts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(idGroup));
var plyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__36714,bullets,pred__36436,expr__36437){
return (function (target){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__36714,bullets,pred__36436,expr__36437){
return (function (p1__36431_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36431_SHARP_),target);
});})(fromIds,idGroup,ids,cnts,brains,vec__36714,bullets,pred__36436,expr__36437))
,brains));
});})(fromIds,idGroup,ids,cnts,brains,vec__36714,bullets,pred__36436,expr__36437))
,ids);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__36714,bullets,pred__36436,expr__36437){
return (function (plyr,cnt){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__36714,bullets,pred__36436,expr__36437){
return (function (o){
return (o + (- (cnt * (10))));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__36714,bullets,pred__36436,expr__36437))
)], null)], 0));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__36714,bullets,pred__36436,expr__36437))
,plyrs,cnts);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
return model;
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=app3.system.ai.js.map
