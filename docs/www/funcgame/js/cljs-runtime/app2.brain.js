goog.provide('app2.brain');
goog.require('cljs.core');
app2.brain.brain = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"lastState","lastState",767733421),null,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),null], null);
app2.brain.clearState = (function app2$brain$clearState(self){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lastState","lastState",767733421),null,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),null], null)], 0));
});
app2.brain.updateR = (function app2$brain$updateR(self,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.Keyword(null,"r","r",-471384190),f);
});
app2.brain.updateQ = (function app2$brain$updateQ(p__37167,state,action,actions){
var map__37168 = p__37167;
var map__37168__$1 = (((((!((map__37168 == null))))?(((((map__37168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37168):map__37168);
var self = map__37168__$1;
var lastState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,new cljs.core.Keyword(null,"lastState","lastState",767733421));
var lastAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,new cljs.core.Keyword(null,"q","q",689001697));
if(cljs.core.truth_((function (){var and__4120__auto__ = lastState;
if(cljs.core.truth_(and__4120__auto__)){
return lastAction;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),lastState,lastAction], null),((function (map__37168,map__37168__$1,self,lastState,lastAction,q){
return (function (oldQ){
var learningRate = 0.5;
var discountFactor = 0.9;
var reward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"r","r",-471384190));
var maxV = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,q),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,state),actions)));
var newQ = (reward + (discountFactor * maxV));
var nextQ = ((((1) - learningRate) * oldQ) + (learningRate * newQ));
return nextQ;
});})(map__37168,map__37168__$1,self,lastState,lastAction,q))
),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lastState","lastState",767733421),state,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),action,new cljs.core.Keyword(null,"lastTime","lastTime",-253375342),(new Date()).getTime(),new cljs.core.Keyword(null,"r","r",-471384190),(0)], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lastState","lastState",767733421),state,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),action], null)], 0));
}
});
app2.brain.actionR = (function app2$brain$actionR(self){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(self);
});
app2.brain.actionQ = (function app2$brain$actionQ(self,state,actions){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37277_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),state,p1__37277_SHARP_], null));
}),actions));
return scores;
});
app2.brain.log = (function app2$brain$log(a){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));

return a;
});
app2.brain.selectAction = (function app2$brain$selectAction(self,state,actions){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37278_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),state,p1__37278_SHARP_], null));
}),actions));
var scoresAddMin = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,scores)))),scores);
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scoresAddMin);
var scoreNormalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scores,scoresAddMin,total){
return (function (o){
return (((o * (100)) / total) | (0));
});})(scores,scoresAddMin,total))
,scoresAddMin);
var selectIdx = cljs.core.rand_int(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scoreNormalize));
var action = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(selectIdx,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (scores,scoresAddMin,total,scoreNormalize,selectIdx){
return (function (p__37280){
var vec__37284 = p__37280;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(score,action);
});})(scores,scoresAddMin,total,scoreNormalize,selectIdx))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,actions,scoreNormalize)], 0))));
return action;
});
app2.brain.bestAction = (function app2$brain$bestAction(self,state,actions){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37287_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),state,p1__37287_SHARP_], null));
}),actions));
var best = cljs.core.ffirst(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (scores){
return (function (p1__37289_SHARP_,p2__37288_SHARP_){
return cljs.core.compare(cljs.core.last(p2__37288_SHARP_),cljs.core.last(p1__37289_SHARP_));
});})(scores))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,actions,scores)));
return best;
});

//# sourceMappingURL=app2.brain.js.map
