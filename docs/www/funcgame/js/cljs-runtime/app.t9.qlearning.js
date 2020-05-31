goog.provide('app.t9.qlearning');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),cljs.core.identity);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),cljs.core.identity);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),new cljs.core.Symbol("js","isNaN","js/isNaN",74901299,null))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),new cljs.core.Symbol("js","isNaN","js/isNaN",74901299,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,isNaN)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.t9.qlearning","qtable","app.t9.qlearning/qtable",1158368059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),cljs.core.list(new cljs.core.Symbol("s","map-of","s/map-of",-1464752791,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__25730){
return cljs.core.map_QMARK_(G__25730);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__11413__auto__,v__11414__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__11414__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__25729){
return cljs.core.map_QMARK_(G__25729);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__11413__auto__,v__11414__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__11414__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.t9.qlearning","action","app.t9.qlearning/action",-501011429),new cljs.core.Keyword("app.t9.qlearning","qvalue","app.t9.qlearning/qvalue",-638986334)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.t9.qlearning","model","app.t9.qlearning/model",692088612),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","qtable","app.t9.qlearning/qtable",1158368059),new cljs.core.Keyword("app.t9.qlearning","learningRate","app.t9.qlearning/learningRate",-783873114),new cljs.core.Keyword("app.t9.qlearning","discountFactor","app.t9.qlearning/discountFactor",1541148266)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","qtable","app.t9.qlearning/qtable",1158368059),new cljs.core.Keyword("app.t9.qlearning","learningRate","app.t9.qlearning/learningRate",-783873114),new cljs.core.Keyword("app.t9.qlearning","discountFactor","app.t9.qlearning/discountFactor",1541148266)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25731){
return cljs.core.map_QMARK_(G__25731);
}),(function (G__25731){
return cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"qtable","qtable",-1752712086));
}),(function (G__25731){
return cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"learningRate","learningRate",2143591057));
}),(function (G__25731){
return cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427));
})], null),(function (G__25731){
return ((cljs.core.map_QMARK_(G__25731)) && (cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"qtable","qtable",-1752712086))) && (cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"learningRate","learningRate",2143591057))) && (cljs.core.contains_QMARK_(G__25731,new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.t9.qlearning","qtable","app.t9.qlearning/qtable",1158368059),new cljs.core.Keyword("app.t9.qlearning","learningRate","app.t9.qlearning/learningRate",-783873114),new cljs.core.Keyword("app.t9.qlearning","discountFactor","app.t9.qlearning/discountFactor",1541148266)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),new cljs.core.Keyword(null,"learningRate","learningRate",2143591057),new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"qtable","qtable",-1752712086))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"learningRate","learningRate",2143591057))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427)))], null),null])));
app.t9.qlearning.model = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"learningRate","learningRate",2143591057),(1),new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427),(1)], null);
cljs.spec.alpha.explain(new cljs.core.Keyword("app.t9.qlearning","model","app.t9.qlearning/model",692088612),app.t9.qlearning.model);
app.t9.qlearning.learn = (function app$t9$qlearning$learn(p__25732,state,action,reward,newState){
var map__25733 = p__25732;
var map__25733__$1 = (((((!((map__25733 == null))))?(((((map__25733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25733):map__25733);
var ctx = map__25733__$1;
var learningRate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25733__$1,new cljs.core.Keyword(null,"learningRate","learningRate",2143591057));
var discountFactor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25733__$1,new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.t9.qlearning","model","app.t9.qlearning/model",692088612),ctx)){
} else {
throw (new Error("Assert failed: (s/valid? :app.t9.qlearning/model ctx)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.t9.qlearning","state","app.t9.qlearning/state",1157456706),newState)){
} else {
throw (new Error("Assert failed: (s/valid? :app.t9.qlearning/state newState)"));
}

var _PERCENT_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),state,action], null),((function (map__25733,map__25733__$1,ctx,learningRate,discountFactor){
return (function (oldQ){
var oldQ__$1 = (function (){var or__4131__auto__ = oldQ;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var maxV = (function (){var or__4131__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),newState], null))));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var newQ = (reward + (discountFactor * maxV));
var nextQ = ((((1) - learningRate) * oldQ__$1) + (learningRate * newQ));
return nextQ;
});})(map__25733,map__25733__$1,ctx,learningRate,discountFactor))
);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.t9.qlearning","model","app.t9.qlearning/model",692088612),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.t9.qlearning/model %)"));
}

return _PERCENT_;
});
app.t9.qlearning.selectAction = (function app$t9$qlearning$selectAction(ctx,state,actions){
var scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25735_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),state,p1__25735_SHARP_], null));
}),actions);
var scoresAddMin = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,scores)))),scores);
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scoresAddMin);
var scoreNormalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scores,scoresAddMin,total){
return (function (o){
return (((o * (100)) / total) | (0));
});})(scores,scoresAddMin,total))
,scoresAddMin);
var selectIdx = cljs.core.rand_int(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scoreNormalize));
var action = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(selectIdx,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (scores,scoresAddMin,total,scoreNormalize,selectIdx){
return (function (p__25736){
var vec__25737 = p__25736;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25737,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25737,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(score,action);
});})(scores,scoresAddMin,total,scoreNormalize,selectIdx))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,actions,scoreNormalize)], 0))));
return action;
});
app.t9.qlearning.bestAction = (function app$t9$qlearning$bestAction(self,state,actions){
var scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25740_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),state,p1__25740_SHARP_], null));
}),actions);
var best = cljs.core.ffirst(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (scores){
return (function (p1__25742_SHARP_,p2__25741_SHARP_){
return cljs.core.compare(cljs.core.second(p2__25741_SHARP_),cljs.core.second(p1__25742_SHARP_));
});})(scores))
,cljs.core.zipmap(actions,scores)));
return best;
});
app.t9.qlearning.test_it = (function app$t9$qlearning$test_it(){
var state = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var action = (1);
var model = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.t9.qlearning.model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"action","action",-811238024),action], null)], 0));
var new_state = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,action,cljs.core.constantly((1)));
var model__$1 = app.t9.qlearning.learn(model,state,action,(1),new_state);
var _ = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([model__$1], 0));
var state__$1 = new_state;
var action__$1 = app.t9.qlearning.selectAction(model__$1,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
var ___$1 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action__$1], 0));
var new_state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,action__$1,cljs.core.constantly((1)));
var model__$2 = app.t9.qlearning.learn(model__$1,state__$1,action__$1,(-1),new_state__$1);
var ___$2 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([model__$2], 0));
return null;
});

//# sourceMappingURL=app.t9.qlearning.js.map
