goog.provide('app3.system.ai');
goog.require('cljs.core');
goog.require('app3.interface$.player');
goog.require('app3.qlearning');
app3.system.ai.brainMode = new cljs.core.Keyword(null,"fast","fast",-24391997);
app3.system.ai.updateBrain = (function app3$system$ai$updateBrain(model,event){
var pred__36365 = cljs.core._EQ_;
var expr__36366 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36368 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36369 = expr__36366;
return (pred__36365.cljs$core$IFn$_invoke$arity$2 ? pred__36365.cljs$core$IFn$_invoke$arity$2(G__36368,G__36369) : pred__36365.call(null,G__36368,G__36369));
})())){
var vec__36371 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var targets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.target,null,model),plyrs);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.updateBrain,app3.system.ai.brainMode,model),targets,plyrs);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
return model;
}
});
app3.system.ai.syncBrainAction = (function app3$system$ai$syncBrainAction(model,event){
var pred__36375 = cljs.core._EQ_;
var expr__36376 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36378 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36379 = expr__36376;
return (pred__36375.cljs$core$IFn$_invoke$arity$2 ? pred__36375.cljs$core$IFn$_invoke$arity$2(G__36378,G__36379) : pred__36375.call(null,G__36378,G__36379));
})())){
var vec__36380 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36380,pred__36375,expr__36376){
return (function (p__36383){
var map__36384 = p__36383;
var map__36384__$1 = (((((!((map__36384 == null))))?(((((map__36384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36384):map__36384);
var entity = map__36384__$1;
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36384__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__36387 = new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249).cljs$core$IFn$_invoke$arity$1(brain);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(0),null);
var hand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(1),null);
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),((function (handAction,moveAction,actions,vec__36387,move,hand,map__36384,map__36384__$1,entity,brain,entities,origin,vec__36380,pred__36375,expr__36376){
return (function (origin__$1){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(origin__$1,actions),cljs.core.PersistentHashSet.createAsIfByAssoc([(hand.cljs$core$IFn$_invoke$arity$1 ? hand.cljs$core$IFn$_invoke$arity$1(handAction) : hand.call(null,handAction)),(move.cljs$core$IFn$_invoke$arity$1 ? move.cljs$core$IFn$_invoke$arity$1(moveAction) : move.call(null,moveAction))]));
});})(handAction,moveAction,actions,vec__36387,move,hand,map__36384,map__36384__$1,entity,brain,entities,origin,vec__36380,pred__36375,expr__36376))
);
} else {
return entity;
}
});})(entities,origin,vec__36380,pred__36375,expr__36376))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.ai.brainReward = (function app3$system$ai$brainReward(model,event){
var pred__36400 = cljs.core._EQ_;
var expr__36401 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36403 = new cljs.core.Keyword(null,"update2","update2",-1233425023);
var G__36404 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36403,G__36404) : pred__36400.call(null,G__36403,G__36404));
})())){
var vec__36405 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__36405,pred__36400,expr__36401){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(plyrs,vec__36405,pred__36400,expr__36401))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__36405,pred__36400,expr__36401){
return (function (p__36409){
var map__36410 = p__36409;
var map__36410__$1 = (((((!((map__36410 == null))))?(((((map__36410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36410):map__36410);
var brain = map__36410__$1;
var lastAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249));
var updateFn = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),lastAction))))?cljs.core.identity:((function (map__36410,map__36410__$1,brain,lastAction,plyrs,vec__36405,pred__36400,expr__36401){
return (function (o){
return (o + (1000));
});})(map__36410,map__36410__$1,brain,lastAction,plyrs,vec__36405,pred__36400,expr__36401))

);
return app3.qlearning.updateR(brain,updateFn);
});})(plyrs,vec__36405,pred__36400,expr__36401))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36416 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36417 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36416,G__36417) : pred__36400.call(null,G__36416,G__36417));
})())){
var vec__36418 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__36418,pred__36400,expr__36401){
return (function (p1__36392_SHARP_,p2__36393_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__36392_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),p2__36393_SHARP_], null)], 0));
});})(plyrs,vec__36418,pred__36400,expr__36401))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__36418,pred__36400,expr__36401){
return (function (p1__36391_SHARP_){
return app3.qlearning.updateR(p1__36391_SHARP_,cljs.core.inc);
});})(plyrs,vec__36418,pred__36400,expr__36401))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36421 = new cljs.core.Keyword(null,"died","died",1083960752);
var G__36422 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36421,G__36422) : pred__36400.call(null,G__36421,G__36422));
})())){
var vec__36423 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36423,(0),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36423,plyr,pred__36400,expr__36401){
return (function (p1__36394_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36394_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__36423,plyr,pred__36400,expr__36401))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
var enemy = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,plyr__$1) : app3.interface$.player.target.call(null,null,model,plyr__$1));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,enemy,vec__36423,plyr,pred__36400,expr__36401){
return (function (o){
return (o - (1000));
});})(plyr__$1,enemy,vec__36423,plyr,pred__36400,expr__36401))
)], null)], 0));
var nextEnemy = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([enemy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(enemy),((function (nextPlyr,plyr__$1,enemy,vec__36423,plyr,pred__36400,expr__36401){
return (function (o){
return (o + (0));
});})(nextPlyr,plyr__$1,enemy,vec__36423,plyr,pred__36400,expr__36401))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr,enemy,nextEnemy])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36426 = new cljs.core.Keyword(null,"moveCost_xxxx","moveCost_xxxx",382475679);
var G__36427 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36426,G__36427) : pred__36400.call(null,G__36426,G__36427));
})())){
var vec__36428 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(1),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36428,plyr,len,pred__36400,expr__36401){
return (function (p1__36395_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36395_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__36428,plyr,len,pred__36400,expr__36401))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,vec__36428,plyr,len,pred__36400,expr__36401){
return (function (o){
return (o - (len / (100)));
});})(plyr__$1,vec__36428,plyr,len,pred__36400,expr__36401))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36431 = new cljs.core.Keyword(null,"fire","fire",-144730624);
var G__36432 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36431,G__36432) : pred__36400.call(null,G__36431,G__36432));
})())){
var vec__36433 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(1),null);
var isFireSuccess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(3),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__36436 = new cljs.core.Keyword(null,"playerCollideHealing","playerCollideHealing",-1290989917);
var G__36437 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36436,G__36437) : pred__36400.call(null,G__36436,G__36437));
})())){
var vec__36438 = cljs.core.rest(event);
var originPlyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36438,(0),null);
var healing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36438,(1),null);
var plyr = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36438,originPlyr,healing,pred__36400,expr__36401){
return (function (p1__36396_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36396_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(originPlyr));
});})(vec__36438,originPlyr,healing,pred__36400,expr__36401))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr)){
var hpOffset = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(plyr) - new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(originPlyr));
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (hpOffset,plyr,vec__36438,originPlyr,healing,pred__36400,expr__36401){
return (function (o){
return (o + ((10) * hpOffset));
});})(hpOffset,plyr,vec__36438,originPlyr,healing,pred__36400,expr__36401))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__36441 = new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883);
var G__36442 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36441,G__36442) : pred__36400.call(null,G__36441,G__36442));
})())){
var vec__36443 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36443,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36443,(1),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__36446 = new cljs.core.Keyword(null,"bulletCollidePlayer","bulletCollidePlayer",-286669229);
var G__36447 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36446,G__36447) : pred__36400.call(null,G__36446,G__36447));
})())){
var vec__36448 = cljs.core.rest(event);
var collides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36448,(0),null);
var hitBullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collides);
var fromPlyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__36448,collides,pred__36400,expr__36401){
return (function (bullet){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__36448,collides,pred__36400,expr__36401){
return (function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bullet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
});})(hitBullets,vec__36448,collides,pred__36400,expr__36401))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
});})(hitBullets,vec__36448,collides,pred__36400,expr__36401))
,hitBullets));
var fromGroup = cljs.core.group_by(cljs.core.identity,fromPlyrs);
var plyrs = cljs.core.keys(fromGroup);
var hitCount = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(fromGroup));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401){
return (function (cnt,brain){
return app3.qlearning.updateR(brain,((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401){
return (function (o){
return (o + ((10) * cnt));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401))
);
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__36448,collides,pred__36400,expr__36401))
,hitCount,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__36451 = new cljs.core.Keyword(null,"bulletHitWall","bulletHitWall",-1352075893);
var G__36452 = expr__36401;
return (pred__36400.cljs$core$IFn$_invoke$arity$2 ? pred__36400.cljs$core$IFn$_invoke$arity$2(G__36451,G__36452) : pred__36400.call(null,G__36451,G__36452));
})())){
var vec__36453 = cljs.core.rest(event);
var bullets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36453,(0),null);
var brains = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var fromIds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (brains,vec__36453,bullets,pred__36400,expr__36401){
return (function (p1__36398_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__36398_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(brains,vec__36453,bullets,pred__36400,expr__36401))
,bullets);
var idGroup = cljs.core.group_by(cljs.core.identity,fromIds);
var ids = cljs.core.keys(idGroup);
var cnts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(idGroup));
var plyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__36453,bullets,pred__36400,expr__36401){
return (function (target){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__36453,bullets,pred__36400,expr__36401){
return (function (p1__36399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36399_SHARP_),target);
});})(fromIds,idGroup,ids,cnts,brains,vec__36453,bullets,pred__36400,expr__36401))
,brains));
});})(fromIds,idGroup,ids,cnts,brains,vec__36453,bullets,pred__36400,expr__36401))
,ids);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__36453,bullets,pred__36400,expr__36401){
return (function (plyr,cnt){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__36453,bullets,pred__36400,expr__36401){
return (function (o){
return (o + (- (cnt * (10))));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__36453,bullets,pred__36400,expr__36401))
)], null)], 0));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__36453,bullets,pred__36400,expr__36401))
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
