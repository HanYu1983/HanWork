goog.provide('app3.qlearning');
goog.require('cljs.core');
app3.qlearning.actions = (function (){var iter__4523__auto__ = (function app3$qlearning$iter__35910(s__35911){
return (new cljs.core.LazySeq(null,(function (){
var s__35911__$1 = s__35911;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35911__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var move = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__35911__$1,move,xs__6292__auto__,temp__5735__auto__){
return (function app3$qlearning$iter__35910_$_iter__35912(s__35913){
return (new cljs.core.LazySeq(null,((function (s__35911__$1,move,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__35913__$1 = s__35913;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35913__$1);
if(temp__5735__auto____$1){
var s__35913__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35913__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35913__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35915 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35914 = (0);
while(true){
if((i__35914 < size__4522__auto__)){
var hand = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35914);
cljs.core.chunk_append(b__35915,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move,hand], null));

var G__38935 = (i__35914 + (1));
i__35914 = G__38935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35915),app3$qlearning$iter__35910_$_iter__35912(cljs.core.chunk_rest(s__35913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35915),null);
}
} else {
var hand = cljs.core.first(s__35913__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move,hand], null),app3$qlearning$iter__35910_$_iter__35912(cljs.core.rest(s__35913__$2)));
}
} else {
return null;
}
break;
}
});})(s__35911__$1,move,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__35911__$1,move,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"attack","attack",1957061788)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$qlearning$iter__35910(cljs.core.rest(s__35911__$1)));
} else {
var G__38936 = cljs.core.rest(s__35911__$1);
s__35911__$1 = G__38936;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"evade","evade",-20204359),new cljs.core.Keyword(null,"findWeapon","findWeapon",-850649050),new cljs.core.Keyword(null,"findHealing","findHealing",2004924501)], null));
})();
app3.qlearning.randomQ = cljs.core.zipmap(app3.qlearning.states,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.zipmap(app3.qlearning.actions,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int((100));
})));
})));
app3.qlearning.zeroQ = cljs.core.zipmap(app3.qlearning.states,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap(app3.qlearning.actions,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)))));
app3.qlearning.qtable = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lastState","lastState",767733421),null,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),null,new cljs.core.Keyword(null,"q","q",689001697),app3.qlearning.zeroQ,new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"lastTime","lastTime",-253375342),(0)], null);
app3.qlearning.updateR = (function app3$qlearning$updateR(self,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.Keyword(null,"r","r",-471384190),f);
});
app3.qlearning.updateQ = (function app3$qlearning$updateQ(p__35918,state,action){
var map__35919 = p__35918;
var map__35919__$1 = (((((!((map__35919 == null))))?(((((map__35919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35919):map__35919);
var self = map__35919__$1;
var lastState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"lastState","lastState",767733421));
var lastAction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"q","q",689001697));
if(cljs.core.truth_((function (){var and__4120__auto__ = lastState;
if(cljs.core.truth_(and__4120__auto__)){
return lastAction;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),lastState,lastAction], null),((function (map__35919,map__35919__$1,self,lastState,lastAction,q){
return (function (oldQ){
var learningRate = 0.5;
var discountFactor = 0.9;
var reward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"r","r",-471384190));
var maxV = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,q),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,state),app3.qlearning.actions)));
var newQ = (reward + (discountFactor * maxV));
var nextQ = ((((1) - learningRate) * oldQ) + (learningRate * newQ));
return nextQ;
});})(map__35919,map__35919__$1,self,lastState,lastAction,q))
),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lastState","lastState",767733421),state,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),action,new cljs.core.Keyword(null,"lastTime","lastTime",-253375342),(new Date()).getTime(),new cljs.core.Keyword(null,"r","r",-471384190),(0)], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lastState","lastState",767733421),state,new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249),action], null)], 0));
}
});
app3.qlearning.actionR = (function app3$qlearning$actionR(self){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(self);
});
app3.qlearning.actionQ = (function app3$qlearning$actionQ(self){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35923_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"lastState","lastState",767733421).cljs$core$IFn$_invoke$arity$1(self),p1__35923_SHARP_], null));
}),app3.qlearning.actions));
return scores;
});
app3.qlearning.selectAction = (function app3$qlearning$selectAction(self,state){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35924_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),state,p1__35924_SHARP_], null));
}),app3.qlearning.actions));
var scoresAddMin = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,scores)))),scores);
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scoresAddMin);
var scoreNormalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scores,scoresAddMin,total){
return (function (o){
return (((o * (100)) / total) | (0));
});})(scores,scoresAddMin,total))
,scoresAddMin);
var selectIdx = cljs.core.rand_int((100));
var action = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(selectIdx,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (scores,scoresAddMin,total,scoreNormalize,selectIdx){
return (function (p__35926){
var vec__35927 = p__35926;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(score,action);
});})(scores,scoresAddMin,total,scoreNormalize,selectIdx))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,app3.qlearning.actions,scoreNormalize)], 0))));
return action;
});
app3.qlearning.bestAction = (function app3$qlearning$bestAction(self){
var scores = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,(0)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35930_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"lastState","lastState",767733421).cljs$core$IFn$_invoke$arity$1(self),p1__35930_SHARP_], null));
}),app3.qlearning.actions));
var best = cljs.core.ffirst(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (scores){
return (function (p1__35932_SHARP_,p2__35931_SHARP_){
return cljs.core.compare(cljs.core.last(p2__35931_SHARP_),cljs.core.last(p1__35932_SHARP_));
});})(scores))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,app3.qlearning.actions,scores)));
return best;
});
app3.qlearning.mapState = (function app3$qlearning$mapState(player,enemy){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(((new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player) < (20)))?new cljs.core.Keyword(null,"low","low",-1601362409):(((new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player) > (80)))?new cljs.core.Keyword(null,"high","high",2027297808):new cljs.core.Keyword(null,"mid","mid",-2123385246)
)),new cljs.core.Keyword(null,"weapon","weapon",-504830232),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935),(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935)], null)) < (2)))?new cljs.core.Keyword(null,"low","low",-1601362409):(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935)], null)) > (8)))?new cljs.core.Keyword(null,"high","high",2027297808):new cljs.core.Keyword(null,"mid","mid",-2123385246)
)),new cljs.core.Keyword(null,"enemyHp","enemyHp",844366487),(((new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(enemy) < (20)))?new cljs.core.Keyword(null,"low","low",-1601362409):(((new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(enemy) > (80)))?new cljs.core.Keyword(null,"high","high",2027297808):new cljs.core.Keyword(null,"mid","mid",-2123385246)
)),new cljs.core.Keyword(null,"enemyWeapon","enemyWeapon",-869643175),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null)),new cljs.core.Keyword(null,"enemyBulletCount","enemyBulletCount",-692995647),(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935)], null)) < (2)))?new cljs.core.Keyword(null,"low","low",-1601362409):(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935)], null)) > (8)))?new cljs.core.Keyword(null,"high","high",2027297808):new cljs.core.Keyword(null,"mid","mid",-2123385246)
)),new cljs.core.Keyword(null,"distance","distance",-1671893894),(function (){var dis = app3.tool.length(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(enemy)));
if((dis < (80))){
return new cljs.core.Keyword(null,"low","low",-1601362409);
} else {
if((dis > (400))){
return new cljs.core.Keyword(null,"high","high",2027297808);
} else {
return new cljs.core.Keyword(null,"mid","mid",-2123385246);

}
}
})()], null);
});

//# sourceMappingURL=app3.qlearning.js.map