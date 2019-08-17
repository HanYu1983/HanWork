goog.provide('app3.system.ai');
goog.require('cljs.core');
goog.require('app3.interface$.player');
goog.require('app3.qlearning');
app3.system.ai.brainMode = new cljs.core.Keyword(null,"fast","fast",-24391997);
app3.system.ai.updateBrain = (function app3$system$ai$updateBrain(model,event){
var pred__26770 = cljs.core._EQ_;
var expr__26771 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__26773 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__26774 = expr__26771;
return (pred__26770.cljs$core$IFn$_invoke$arity$2 ? pred__26770.cljs$core$IFn$_invoke$arity$2(G__26773,G__26774) : pred__26770.call(null,G__26773,G__26774));
})())){
var vec__26775 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var targets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.target,null,model),plyrs);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app3.interface$.player.updateBrain,app3.system.ai.brainMode,model),targets,plyrs);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
return model;
}
});
app3.system.ai.syncBrainAction = (function app3$system$ai$syncBrainAction(model,event){
var pred__26778 = cljs.core._EQ_;
var expr__26779 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__26781 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__26782 = expr__26779;
return (pred__26778.cljs$core$IFn$_invoke$arity$2 ? pred__26778.cljs$core$IFn$_invoke$arity$2(G__26781,G__26782) : pred__26778.call(null,G__26781,G__26782));
})())){
var vec__26783 = cljs.core.rest(event);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__26783,pred__26778,expr__26779){
return (function (p__26786){
var map__26787 = p__26786;
var map__26787__$1 = (((((!((map__26787 == null))))?(((((map__26787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26787):map__26787);
var entity = map__26787__$1;
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26787__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__26789 = new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249).cljs$core$IFn$_invoke$arity$1(brain);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(0),null);
var hand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(1),null);
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),((function (handAction,moveAction,actions,vec__26789,move,hand,map__26787,map__26787__$1,entity,brain,entities,origin,vec__26783,pred__26778,expr__26779){
return (function (origin__$1){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(origin__$1,actions),cljs.core.PersistentHashSet.createAsIfByAssoc([(hand.cljs$core$IFn$_invoke$arity$1 ? hand.cljs$core$IFn$_invoke$arity$1(handAction) : hand.call(null,handAction)),(move.cljs$core$IFn$_invoke$arity$1 ? move.cljs$core$IFn$_invoke$arity$1(moveAction) : move.call(null,moveAction))]));
});})(handAction,moveAction,actions,vec__26789,move,hand,map__26787,map__26787__$1,entity,brain,entities,origin,vec__26783,pred__26778,expr__26779))
);
} else {
return entity;
}
});})(entities,origin,vec__26783,pred__26778,expr__26779))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
});
app3.system.ai.brainReward = (function app3$system$ai$brainReward(model,event){
var pred__26800 = cljs.core._EQ_;
var expr__26801 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__26803 = new cljs.core.Keyword(null,"update2","update2",-1233425023);
var G__26804 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26803,G__26804) : pred__26800.call(null,G__26803,G__26804));
})())){
var vec__26805 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__26805,pred__26800,expr__26801){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(plyrs,vec__26805,pred__26800,expr__26801))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__26805,pred__26800,expr__26801){
return (function (p__26808){
var map__26809 = p__26808;
var map__26809__$1 = (((((!((map__26809 == null))))?(((((map__26809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26809):map__26809);
var brain = map__26809__$1;
var lastAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26809__$1,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249));
var updateFn = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),lastAction))))?cljs.core.identity:((function (map__26809,map__26809__$1,brain,lastAction,plyrs,vec__26805,pred__26800,expr__26801){
return (function (o){
return (o + (1000));
});})(map__26809,map__26809__$1,brain,lastAction,plyrs,vec__26805,pred__26800,expr__26801))

);
return app3.qlearning.updateR(brain,updateFn);
});})(plyrs,vec__26805,pred__26800,expr__26801))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__26811 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__26812 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26811,G__26812) : pred__26800.call(null,G__26811,G__26812));
})())){
var vec__26813 = cljs.core.rest(event);
var plyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plyrs,vec__26813,pred__26800,expr__26801){
return (function (p1__26793_SHARP_,p2__26794_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26793_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),p2__26794_SHARP_], null)], 0));
});})(plyrs,vec__26813,pred__26800,expr__26801))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (plyrs,vec__26813,pred__26800,expr__26801){
return (function (p1__26792_SHARP_){
return app3.qlearning.updateR(p1__26792_SHARP_,cljs.core.inc);
});})(plyrs,vec__26813,pred__26800,expr__26801))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__26816 = new cljs.core.Keyword(null,"died","died",1083960752);
var G__26817 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26816,G__26817) : pred__26800.call(null,G__26816,G__26817));
})())){
var vec__26818 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26818,(0),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__26818,plyr,pred__26800,expr__26801){
return (function (p1__26795_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26795_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__26818,plyr,pred__26800,expr__26801))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
var enemy = (app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3 ? app3.interface$.player.target.cljs$core$IFn$_invoke$arity$3(null,model,plyr__$1) : app3.interface$.player.target.call(null,null,model,plyr__$1));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,enemy,vec__26818,plyr,pred__26800,expr__26801){
return (function (o){
return (o - (1000));
});})(plyr__$1,enemy,vec__26818,plyr,pred__26800,expr__26801))
)], null)], 0));
var nextEnemy = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([enemy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(enemy),((function (nextPlyr,plyr__$1,enemy,vec__26818,plyr,pred__26800,expr__26801){
return (function (o){
return (o + (0));
});})(nextPlyr,plyr__$1,enemy,vec__26818,plyr,pred__26800,expr__26801))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr,enemy,nextEnemy])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__26821 = new cljs.core.Keyword(null,"moveCost_xxxx","moveCost_xxxx",382475679);
var G__26822 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26821,G__26822) : pred__26800.call(null,G__26821,G__26822));
})())){
var vec__26823 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26823,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26823,(1),null);
var plyr__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__26823,plyr,len,pred__26800,expr__26801){
return (function (p1__26796_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26796_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plyr));
});})(vec__26823,plyr,len,pred__26800,expr__26801))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr__$1)){
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr__$1),((function (plyr__$1,vec__26823,plyr,len,pred__26800,expr__26801){
return (function (o){
return (o - (len / (100)));
});})(plyr__$1,vec__26823,plyr,len,pred__26800,expr__26801))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr__$1,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__26826 = new cljs.core.Keyword(null,"fire","fire",-144730624);
var G__26827 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26826,G__26827) : pred__26800.call(null,G__26826,G__26827));
})())){
var vec__26828 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26828,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26828,(1),null);
var isFireSuccess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26828,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26828,(3),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__26831 = new cljs.core.Keyword(null,"playerCollideHealing","playerCollideHealing",-1290989917);
var G__26832 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26831,G__26832) : pred__26800.call(null,G__26831,G__26832));
})())){
var vec__26833 = cljs.core.rest(event);
var originPlyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26833,(0),null);
var healing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26833,(1),null);
var plyr = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__26833,originPlyr,healing,pred__26800,expr__26801){
return (function (p1__26797_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26797_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(originPlyr));
});})(vec__26833,originPlyr,healing,pred__26800,expr__26801))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
if(cljs.core.truth_(plyr)){
var hpOffset = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(plyr) - new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(originPlyr));
var nextPlyr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (hpOffset,plyr,vec__26833,originPlyr,healing,pred__26800,expr__26801){
return (function (o){
return (o + ((10) * hpOffset));
});})(hpOffset,plyr,vec__26833,originPlyr,healing,pred__26800,expr__26801))
)], null)], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,nextPlyr])));
} else {
return model;
}
} else {
if(cljs.core.truth_((function (){var G__26836 = new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883);
var G__26837 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26836,G__26837) : pred__26800.call(null,G__26836,G__26837));
})())){
var vec__26838 = cljs.core.rest(event);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26838,(0),null);
var weapon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26838,(1),null);
return model;
} else {
if(cljs.core.truth_((function (){var G__26841 = new cljs.core.Keyword(null,"bulletCollidePlayer","bulletCollidePlayer",-286669229);
var G__26842 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26841,G__26842) : pred__26800.call(null,G__26841,G__26842));
})())){
var vec__26843 = cljs.core.rest(event);
var collides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,(0),null);
var hitBullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collides);
var fromPlyrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__26843,collides,pred__26800,expr__26801){
return (function (bullet){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (hitBullets,vec__26843,collides,pred__26800,expr__26801){
return (function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bullet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
});})(hitBullets,vec__26843,collides,pred__26800,expr__26801))
,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model)));
});})(hitBullets,vec__26843,collides,pred__26800,expr__26801))
,hitBullets));
var fromGroup = cljs.core.group_by(cljs.core.identity,fromPlyrs);
var plyrs = cljs.core.keys(fromGroup);
var hitCount = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(fromGroup));
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801){
return (function (plyr,brain){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain], null)], 0));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801))
,plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801){
return (function (cnt,brain){
return app3.qlearning.updateR(brain,((function (hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801){
return (function (o){
return (o + ((10) * cnt));
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801))
);
});})(hitBullets,fromPlyrs,fromGroup,plyrs,hitCount,vec__26843,collides,pred__26800,expr__26801))
,hitCount,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brain","brain",428499577),plyrs)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(plyrs,nextPlyrs)));
} else {
if(cljs.core.truth_((function (){var G__26846 = new cljs.core.Keyword(null,"bulletHitWall","bulletHitWall",-1352075893);
var G__26847 = expr__26801;
return (pred__26800.cljs$core$IFn$_invoke$arity$2 ? pred__26800.cljs$core$IFn$_invoke$arity$2(G__26846,G__26847) : pred__26800.call(null,G__26846,G__26847));
})())){
var vec__26848 = cljs.core.rest(event);
var bullets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(0),null);
var brains = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var fromIds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (brains,vec__26848,bullets,pred__26800,expr__26801){
return (function (p1__26798_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__26798_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(brains,vec__26848,bullets,pred__26800,expr__26801))
,bullets);
var idGroup = cljs.core.group_by(cljs.core.identity,fromIds);
var ids = cljs.core.keys(idGroup);
var cnts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(idGroup));
var plyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__26848,bullets,pred__26800,expr__26801){
return (function (target){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fromIds,idGroup,ids,cnts,brains,vec__26848,bullets,pred__26800,expr__26801){
return (function (p1__26799_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26799_SHARP_),target);
});})(fromIds,idGroup,ids,cnts,brains,vec__26848,bullets,pred__26800,expr__26801))
,brains));
});})(fromIds,idGroup,ids,cnts,brains,vec__26848,bullets,pred__26800,expr__26801))
,ids);
var nextPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__26848,bullets,pred__26800,expr__26801){
return (function (plyr,cnt){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.updateR(new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(plyr),((function (fromIds,idGroup,ids,cnts,plyrs,brains,vec__26848,bullets,pred__26800,expr__26801){
return (function (o){
return (o + (- (cnt * (10))));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__26848,bullets,pred__26800,expr__26801))
)], null)], 0));
});})(fromIds,idGroup,ids,cnts,plyrs,brains,vec__26848,bullets,pred__26800,expr__26801))
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
