// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__8454){
var map__8455 = p__8454;
var map__8455__$1 = ((((!((map__8455 == null)))?(((((map__8455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8455):map__8455);
var info = map__8455__$1;
var pos = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info);
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__8457,target){
var map__8458 = p__8457;
var map__8458__$1 = ((((!((map__8458 == null)))?(((((map__8458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8458):map__8458);
var ctx = map__8458__$1;
var time = cljs.core.get.call(null,map__8458__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858)))){
return target;
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__8460,target){
var map__8461 = p__8460;
var map__8461__$1 = ((((!((map__8461 == null)))?(((((map__8461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8461):map__8461);
var ctx = map__8461__$1;
var time = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__8463 = cljs.core._EQ_;
var expr__8464 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(pred__8463.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__8464))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
var offsetY = (((function (){var x__4009__auto__ = offsetTime;
var y__4010__auto__ = (500);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() / (1000)) * (-50));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null));
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offsetY], null))], null));
}
} else {
if(cljs.core.truth_(pred__8463.call(null,new cljs.core.Keyword(null,"goback","goback",1168265173),expr__8464))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
var offsetY = ((-50) * (((1) / (1000)) * ((500) - (function (){var x__4009__auto__ = (500);
var y__4010__auto__ = offsetTime;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})())));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target)], null));
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offsetY], null))], null));
}
} else {
if(cljs.core.truth_(pred__8463.call(null,new cljs.core.Keyword(null,"wait","wait",-260664777),expr__8464))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null));
} else {
return target;
}
} else {
if(cljs.core.truth_(pred__8463.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),expr__8464))){
return target;
} else {
return target;
}
}
}
}
});
app.t2.main.update = (function app$t2$main$update(ctx){
var handleEvents = (function (ctx__$1){
return cljs.core.reduce.call(null,(function (ctx__$2,e){
var pred__8466 = cljs.core._EQ_;
var expr__8467 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__8466.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__8467))){
var targets = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(e);
var targetsAfterEffect = cljs.core.map.call(null,cljs.core.partial.call(null,app.t2.main.targetGo,ctx__$2),targets);
var replaceForm = cljs.core.zipmap.call(null,targets,targetsAfterEffect);
var replaceTargets = cljs.core.replace.call(null,replaceForm,new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(ctx__$2));
return cljs.core.merge.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"targets","targets",2014963406),replaceTargets], null));
} else {
return ctx__$2;
}
}),cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx__$1));
});
var handleTargets = ((function (handleEvents){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"targets","targets",2014963406),cljs.core.map.call(null,cljs.core.partial.call(null,app.t2.main.targetUpdate,ctx__$1),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(ctx__$1))], null));
});})(handleEvents))
;
var handleTime = ((function (handleEvents,handleTargets){
return (function (ctx__$1){
return cljs.core.merge.call(null,ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()).getTime()], null));
});})(handleEvents,handleTargets))
;
return handleTime.call(null,handleTargets.call(null,handleEvents.call(null,ctx)));
});
app.t2.main.main = (function app$t2$main$main(){
app.t2.main.model = null;

app.t2.main.evt = cljs.core.async.chan.call(null);

app.t2.main.keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["q","w","e","a","s","d","z","x","c"], null);

setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_8475){
var state_val_8476 = (state_8475[(1)]);
if((state_val_8476 === (1))){
var inst_8469 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8470 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8471 = cljs.core.PersistentHashMap.fromArrays(inst_8469,inst_8470);
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8475__$1,(2),app.t2.main.evt,inst_8471);
} else {
if((state_val_8476 === (2))){
var inst_8473 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8475__$1,inst_8473);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8477 = [null,null,null,null,null,null,null];
(statearr_8477[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_8477[(1)] = (1));

return statearr_8477;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_8475){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8478){if((e8478 instanceof Object)){
var ex__2796__auto__ = e8478;
var statearr_8479_8786 = state_8475;
(statearr_8479_8786[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8787 = state_8475;
state_8475 = G__8787;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_8475){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_8475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8480 = f__2883__auto__.call(null);
(statearr_8480[(6)] = c__2882__auto__);

return statearr_8480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_8487){
var state_val_8488 = (state_8487[(1)]);
if((state_val_8488 === (1))){
var inst_8481 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8482 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_8483 = cljs.core.PersistentHashMap.fromArrays(inst_8481,inst_8482);
var state_8487__$1 = state_8487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8487__$1,(2),app.t2.main.evt,inst_8483);
} else {
if((state_val_8488 === (2))){
var inst_8485 = (state_8487[(2)]);
var state_8487__$1 = state_8487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8487__$1,inst_8485);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8489 = [null,null,null,null,null,null,null];
(statearr_8489[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_8489[(1)] = (1));

return statearr_8489;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_8487){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8490){if((e8490 instanceof Object)){
var ex__2796__auto__ = e8490;
var statearr_8491_8788 = state_8487;
(statearr_8491_8788[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8789 = state_8487;
state_8487 = G__8789;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_8487){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_8487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8492 = f__2883__auto__.call(null);
(statearr_8492[(6)] = c__2882__auto__);

return statearr_8492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(1000));

var firstTarget_8790 = app.t2.main.targetCreate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__2882__auto___8791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8791,firstTarget_8790){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8791,firstTarget_8790){
return (function (state_8682){
var state_val_8683 = (state_8682[(1)]);
if((state_val_8683 === (7))){
var inst_8678 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8684_8792 = state_8682__$1;
(statearr_8684_8792[(2)] = inst_8678);

(statearr_8684_8792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (20))){
var state_8682__$1 = state_8682;
var statearr_8685_8793 = state_8682__$1;
(statearr_8685_8793[(2)] = true);

(statearr_8685_8793[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (27))){
var inst_8570 = (state_8682[(7)]);
var inst_8656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8657 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_8658 = (new cljs.core.PersistentVector(null,1,(5),inst_8656,inst_8657,null));
var inst_8659 = cljs.core.update_in.call(null,inst_8570,inst_8658,cljs.core.inc);
var state_8682__$1 = state_8682;
var statearr_8686_8794 = state_8682__$1;
(statearr_8686_8794[(2)] = inst_8659);

(statearr_8686_8794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (1))){
var inst_8493 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_8494 = (new Date());
var inst_8495 = inst_8494.getTime();
var inst_8496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8497 = [firstTarget_8790];
var inst_8498 = (new cljs.core.PersistentVector(null,1,(5),inst_8496,inst_8497,null));
var inst_8499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8500 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8502 = [(200),(100)];
var inst_8503 = (new cljs.core.PersistentVector(null,2,(5),inst_8501,inst_8502,null));
var inst_8504 = [inst_8503];
var inst_8505 = cljs.core.PersistentHashMap.fromArrays(inst_8500,inst_8504);
var inst_8506 = app.t2.main.targetCreate.call(null,inst_8505);
var inst_8507 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8509 = [(300),(100)];
var inst_8510 = (new cljs.core.PersistentVector(null,2,(5),inst_8508,inst_8509,null));
var inst_8511 = [inst_8510];
var inst_8512 = cljs.core.PersistentHashMap.fromArrays(inst_8507,inst_8511);
var inst_8513 = app.t2.main.targetCreate.call(null,inst_8512);
var inst_8514 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8516 = [(100),(200)];
var inst_8517 = (new cljs.core.PersistentVector(null,2,(5),inst_8515,inst_8516,null));
var inst_8518 = [inst_8517];
var inst_8519 = cljs.core.PersistentHashMap.fromArrays(inst_8514,inst_8518);
var inst_8520 = app.t2.main.targetCreate.call(null,inst_8519);
var inst_8521 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8523 = [(200),(200)];
var inst_8524 = (new cljs.core.PersistentVector(null,2,(5),inst_8522,inst_8523,null));
var inst_8525 = [inst_8524];
var inst_8526 = cljs.core.PersistentHashMap.fromArrays(inst_8521,inst_8525);
var inst_8527 = app.t2.main.targetCreate.call(null,inst_8526);
var inst_8528 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8530 = [(300),(200)];
var inst_8531 = (new cljs.core.PersistentVector(null,2,(5),inst_8529,inst_8530,null));
var inst_8532 = [inst_8531];
var inst_8533 = cljs.core.PersistentHashMap.fromArrays(inst_8528,inst_8532);
var inst_8534 = app.t2.main.targetCreate.call(null,inst_8533);
var inst_8535 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8537 = [(100),(300)];
var inst_8538 = (new cljs.core.PersistentVector(null,2,(5),inst_8536,inst_8537,null));
var inst_8539 = [inst_8538];
var inst_8540 = cljs.core.PersistentHashMap.fromArrays(inst_8535,inst_8539);
var inst_8541 = app.t2.main.targetCreate.call(null,inst_8540);
var inst_8542 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8544 = [(200),(300)];
var inst_8545 = (new cljs.core.PersistentVector(null,2,(5),inst_8543,inst_8544,null));
var inst_8546 = [inst_8545];
var inst_8547 = cljs.core.PersistentHashMap.fromArrays(inst_8542,inst_8546);
var inst_8548 = app.t2.main.targetCreate.call(null,inst_8547);
var inst_8549 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_8550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8551 = [(300),(300)];
var inst_8552 = (new cljs.core.PersistentVector(null,2,(5),inst_8550,inst_8551,null));
var inst_8553 = [inst_8552];
var inst_8554 = cljs.core.PersistentHashMap.fromArrays(inst_8549,inst_8553);
var inst_8555 = app.t2.main.targetCreate.call(null,inst_8554);
var inst_8556 = [inst_8506,inst_8513,inst_8520,inst_8527,inst_8534,inst_8541,inst_8548,inst_8555];
var inst_8557 = (new cljs.core.PersistentVector(null,8,(5),inst_8499,inst_8556,null));
var inst_8558 = cljs.core.concat.call(null,inst_8498,inst_8557);
var inst_8559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8560 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_8561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8562 = [firstTarget_8790];
var inst_8563 = (new cljs.core.PersistentVector(null,1,(5),inst_8561,inst_8562,null));
var inst_8564 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_8563];
var inst_8565 = cljs.core.PersistentHashMap.fromArrays(inst_8560,inst_8564);
var inst_8566 = [inst_8565];
var inst_8567 = (new cljs.core.PersistentVector(null,1,(5),inst_8559,inst_8566,null));
var inst_8568 = [inst_8495,inst_8558,inst_8567,(0)];
var inst_8569 = cljs.core.PersistentHashMap.fromArrays(inst_8493,inst_8568);
var inst_8570 = inst_8569;
var state_8682__$1 = (function (){var statearr_8687 = state_8682;
(statearr_8687[(7)] = inst_8570);

return statearr_8687;
})();
var statearr_8688_8795 = state_8682__$1;
(statearr_8688_8795[(2)] = null);

(statearr_8688_8795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (24))){
var inst_8625 = (state_8682[(8)]);
var state_8682__$1 = state_8682;
var statearr_8689_8796 = state_8682__$1;
(statearr_8689_8796[(2)] = inst_8625);

(statearr_8689_8796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (4))){
var inst_8574 = (state_8682[(9)]);
var inst_8578 = (state_8682[(10)]);
var inst_8574__$1 = (state_8682[(2)]);
var inst_8578__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8574__$1);
var inst_8579 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_8578__$1);
var state_8682__$1 = (function (){var statearr_8690 = state_8682;
(statearr_8690[(9)] = inst_8574__$1);

(statearr_8690[(10)] = inst_8578__$1);

return statearr_8690;
})();
if(inst_8579){
var statearr_8691_8797 = state_8682__$1;
(statearr_8691_8797[(1)] = (5));

} else {
var statearr_8692_8798 = state_8682__$1;
(statearr_8692_8798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (15))){
var state_8682__$1 = state_8682;
var statearr_8693_8799 = state_8682__$1;
(statearr_8693_8799[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (21))){
var state_8682__$1 = state_8682;
var statearr_8695_8800 = state_8682__$1;
(statearr_8695_8800[(2)] = false);

(statearr_8695_8800[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (31))){
var inst_8666 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8696_8801 = state_8682__$1;
(statearr_8696_8801[(2)] = inst_8666);

(statearr_8696_8801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (13))){
var inst_8674 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8697_8802 = state_8682__$1;
(statearr_8697_8802[(2)] = inst_8674);

(statearr_8697_8802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (22))){
var inst_8638 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8698_8803 = state_8682__$1;
(statearr_8698_8803[(2)] = inst_8638);

(statearr_8698_8803[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (29))){
var inst_8570 = (state_8682[(7)]);
var state_8682__$1 = state_8682;
var statearr_8699_8804 = state_8682__$1;
(statearr_8699_8804[(2)] = inst_8570);

(statearr_8699_8804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (6))){
var inst_8578 = (state_8682[(10)]);
var inst_8597 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_8578);
var state_8682__$1 = state_8682;
if(inst_8597){
var statearr_8700_8805 = state_8682__$1;
(statearr_8700_8805[(1)] = (8));

} else {
var statearr_8701_8806 = state_8682__$1;
(statearr_8701_8806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (28))){
var inst_8661 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8702_8807 = state_8682__$1;
(statearr_8702_8807[(2)] = inst_8661);

(statearr_8702_8807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (25))){
var inst_8646 = (state_8682[(2)]);
var inst_8647 = cljs.core.get.call(null,inst_8646,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_8648 = cljs.core.partial.call(null,cljs.core._EQ_,inst_8647);
var inst_8649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8650 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_8651 = (new cljs.core.PersistentVector(null,2,(5),inst_8649,inst_8650,null));
var inst_8652 = cljs.core.some.call(null,inst_8648,inst_8651);
var inst_8653 = cljs.core.not.call(null,inst_8652);
var state_8682__$1 = state_8682;
if(inst_8653){
var statearr_8703_8808 = state_8682__$1;
(statearr_8703_8808[(1)] = (26));

} else {
var statearr_8704_8809 = state_8682__$1;
(statearr_8704_8809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (17))){
var inst_8625 = (state_8682[(8)]);
var inst_8630 = inst_8625.cljs$lang$protocol_mask$partition0$;
var inst_8631 = (inst_8630 & (64));
var inst_8632 = inst_8625.cljs$core$ISeq$;
var inst_8633 = (cljs.core.PROTOCOL_SENTINEL === inst_8632);
var inst_8634 = ((inst_8631) || (inst_8633));
var state_8682__$1 = state_8682;
if(cljs.core.truth_(inst_8634)){
var statearr_8705_8810 = state_8682__$1;
(statearr_8705_8810[(1)] = (20));

} else {
var statearr_8706_8811 = state_8682__$1;
(statearr_8706_8811[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (3))){
var inst_8680 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8682__$1,inst_8680);
} else {
if((state_val_8683 === (12))){
var inst_8570 = (state_8682[(7)]);
var inst_8671 = app.t2.main.update.call(null,inst_8570);
var inst_8570__$1 = inst_8671;
var state_8682__$1 = (function (){var statearr_8707 = state_8682;
(statearr_8707[(7)] = inst_8570__$1);

return statearr_8707;
})();
var statearr_8708_8812 = state_8682__$1;
(statearr_8708_8812[(2)] = null);

(statearr_8708_8812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (2))){
var inst_8570 = (state_8682[(7)]);
var inst_8572 = app.t2.main.model = inst_8570;
var state_8682__$1 = (function (){var statearr_8709 = state_8682;
(statearr_8709[(11)] = inst_8572);

return statearr_8709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8682__$1,(4),app.t2.main.evt);
} else {
if((state_val_8683 === (23))){
var inst_8625 = (state_8682[(8)]);
var inst_8643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8625);
var state_8682__$1 = state_8682;
var statearr_8710_8813 = state_8682__$1;
(statearr_8710_8813[(2)] = inst_8643);

(statearr_8710_8813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (19))){
var inst_8641 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
if(cljs.core.truth_(inst_8641)){
var statearr_8711_8814 = state_8682__$1;
(statearr_8711_8814[(1)] = (23));

} else {
var statearr_8712_8815 = state_8682__$1;
(statearr_8712_8815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (11))){
var inst_8574 = (state_8682[(9)]);
var inst_8616 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_8574);
var inst_8617 = cljs.core.range.call(null,(9));
var inst_8618 = cljs.core.zipmap.call(null,app.t2.main.keys,inst_8617);
var inst_8619 = cljs.core.get.call(null,inst_8618,inst_8616);
var inst_8620 = cljs.core.partial.call(null,cljs.core._EQ_,inst_8616);
var inst_8621 = cljs.core.some.call(null,inst_8620,app.t2.main.keys);
var state_8682__$1 = (function (){var statearr_8713 = state_8682;
(statearr_8713[(12)] = inst_8619);

return statearr_8713;
})();
if(cljs.core.truth_(inst_8621)){
var statearr_8714_8816 = state_8682__$1;
(statearr_8714_8816[(1)] = (14));

} else {
var statearr_8715_8817 = state_8682__$1;
(statearr_8715_8817[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (9))){
var inst_8578 = (state_8682[(10)]);
var inst_8614 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_8578);
var state_8682__$1 = state_8682;
if(inst_8614){
var statearr_8716_8818 = state_8682__$1;
(statearr_8716_8818[(1)] = (11));

} else {
var statearr_8717_8819 = state_8682__$1;
(statearr_8717_8819[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (5))){
var inst_8570 = (state_8682[(7)]);
var inst_8581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8582 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_8583 = (new cljs.core.PersistentVector(null,1,(5),inst_8581,inst_8582,null));
var inst_8584 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_8585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8586 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_8570);
var inst_8587 = cljs.core.nth.call(null,inst_8586,(2));
var inst_8588 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_8570);
var inst_8589 = cljs.core.nth.call(null,inst_8588,(3));
var inst_8590 = [inst_8587,inst_8589];
var inst_8591 = (new cljs.core.PersistentVector(null,2,(5),inst_8585,inst_8590,null));
var inst_8592 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_8591];
var inst_8593 = cljs.core.PersistentHashMap.fromArrays(inst_8584,inst_8592);
var inst_8594 = cljs.core.update_in.call(null,inst_8570,inst_8583,cljs.core.conj,inst_8593);
var inst_8570__$1 = inst_8594;
var state_8682__$1 = (function (){var statearr_8718 = state_8682;
(statearr_8718[(7)] = inst_8570__$1);

return statearr_8718;
})();
var statearr_8719_8820 = state_8682__$1;
(statearr_8719_8820[(2)] = null);

(statearr_8719_8820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (14))){
var inst_8619 = (state_8682[(12)]);
var inst_8625 = (state_8682[(8)]);
var inst_8570 = (state_8682[(7)]);
var inst_8624 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_8570);
var inst_8625__$1 = cljs.core.nth.call(null,inst_8624,inst_8619);
var inst_8627 = (inst_8625__$1 == null);
var inst_8628 = cljs.core.not.call(null,inst_8627);
var state_8682__$1 = (function (){var statearr_8720 = state_8682;
(statearr_8720[(8)] = inst_8625__$1);

return statearr_8720;
})();
if(inst_8628){
var statearr_8721_8821 = state_8682__$1;
(statearr_8721_8821[(1)] = (17));

} else {
var statearr_8722_8822 = state_8682__$1;
(statearr_8722_8822[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (26))){
var inst_8570 = (state_8682[(7)]);
var state_8682__$1 = state_8682;
var statearr_8723_8823 = state_8682__$1;
(statearr_8723_8823[(2)] = inst_8570);

(statearr_8723_8823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (16))){
var inst_8668 = (state_8682[(2)]);
var inst_8570 = inst_8668;
var state_8682__$1 = (function (){var statearr_8724 = state_8682;
(statearr_8724[(7)] = inst_8570);

return statearr_8724;
})();
var statearr_8725_8824 = state_8682__$1;
(statearr_8725_8824[(2)] = null);

(statearr_8725_8824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (30))){
var state_8682__$1 = state_8682;
var statearr_8726_8825 = state_8682__$1;
(statearr_8726_8825[(2)] = null);

(statearr_8726_8825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (10))){
var inst_8676 = (state_8682[(2)]);
var state_8682__$1 = state_8682;
var statearr_8727_8826 = state_8682__$1;
(statearr_8727_8826[(2)] = inst_8676);

(statearr_8727_8826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (18))){
var state_8682__$1 = state_8682;
var statearr_8728_8827 = state_8682__$1;
(statearr_8728_8827[(2)] = false);

(statearr_8728_8827[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8683 === (8))){
var inst_8570 = (state_8682[(7)]);
var inst_8599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8600 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_8601 = (new cljs.core.PersistentVector(null,1,(5),inst_8599,inst_8600,null));
var inst_8602 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_8603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8604 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_8570);
var inst_8605 = cljs.core.rand_int.call(null,(9));
var inst_8606 = cljs.core.nth.call(null,inst_8604,inst_8605);
var inst_8607 = [inst_8606];
var inst_8608 = (new cljs.core.PersistentVector(null,1,(5),inst_8603,inst_8607,null));
var inst_8609 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_8608];
var inst_8610 = cljs.core.PersistentHashMap.fromArrays(inst_8602,inst_8609);
var inst_8611 = cljs.core.update_in.call(null,inst_8570,inst_8601,cljs.core.conj,inst_8610);
var inst_8570__$1 = inst_8611;
var state_8682__$1 = (function (){var statearr_8729 = state_8682;
(statearr_8729[(7)] = inst_8570__$1);

return statearr_8729;
})();
var statearr_8730_8828 = state_8682__$1;
(statearr_8730_8828[(2)] = null);

(statearr_8730_8828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2882__auto___8791,firstTarget_8790))
;
return ((function (switch__2792__auto__,c__2882__auto___8791,firstTarget_8790){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8731 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8731[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_8731[(1)] = (1));

return statearr_8731;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_8682){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8732){if((e8732 instanceof Object)){
var ex__2796__auto__ = e8732;
var statearr_8733_8829 = state_8682;
(statearr_8733_8829[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8830 = state_8682;
state_8682 = G__8830;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_8682){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_8682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8791,firstTarget_8790))
})();
var state__2884__auto__ = (function (){var statearr_8734 = f__2883__auto__.call(null);
(statearr_8734[(6)] = c__2882__auto___8791);

return statearr_8734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8791,firstTarget_8790))
);


var p5 = window;
var setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(400));
var txt = p5.createDiv("string");
canvas.mousePressed(((function (canvas,txt,p5){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas,txt,p5){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas,txt,p5){
return (function (state_8741){
var state_val_8742 = (state_8741[(1)]);
if((state_val_8742 === (1))){
var inst_8735 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8736 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_8737 = cljs.core.PersistentHashMap.fromArrays(inst_8735,inst_8736);
var state_8741__$1 = state_8741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8741__$1,(2),app.t2.main.evt,inst_8737);
} else {
if((state_val_8742 === (2))){
var inst_8739 = (state_8741[(2)]);
var state_8741__$1 = state_8741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8741__$1,inst_8739);
} else {
return null;
}
}
});})(c__2882__auto__,canvas,txt,p5))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas,txt,p5){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8743 = [null,null,null,null,null,null,null];
(statearr_8743[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_8743[(1)] = (1));

return statearr_8743;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_8741){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8744){if((e8744 instanceof Object)){
var ex__2796__auto__ = e8744;
var statearr_8745_8831 = state_8741;
(statearr_8745_8831[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8832 = state_8741;
state_8741 = G__8832;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_8741){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_8741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,txt,p5))
})();
var state__2884__auto__ = (function (){var statearr_8746 = f__2883__auto__.call(null);
(statearr_8746[(6)] = c__2882__auto__);

return statearr_8746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas,txt,p5))
);

return c__2882__auto__;
});})(canvas,txt,p5))
);

canvas.parent("container");

return txt.position((20),(20));
});})(p5))
;
var keyPressed = ((function (p5,setup){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,p5,setup){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,p5,setup){
return (function (state_8754){
var state_val_8755 = (state_8754[(1)]);
if((state_val_8755 === (1))){
var inst_8747 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_8748 = p5.key;
var inst_8749 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_8748];
var inst_8750 = cljs.core.PersistentHashMap.fromArrays(inst_8747,inst_8749);
var state_8754__$1 = state_8754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8754__$1,(2),app.t2.main.evt,inst_8750);
} else {
if((state_val_8755 === (2))){
var inst_8752 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8754__$1,inst_8752);
} else {
return null;
}
}
});})(c__2882__auto__,p5,setup))
;
return ((function (switch__2792__auto__,c__2882__auto__,p5,setup){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8756 = [null,null,null,null,null,null,null];
(statearr_8756[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_8756[(1)] = (1));

return statearr_8756;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_8754){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8757){if((e8757 instanceof Object)){
var ex__2796__auto__ = e8757;
var statearr_8758_8833 = state_8754;
(statearr_8758_8833[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8834 = state_8754;
state_8754 = G__8834;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_8754){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_8754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,p5,setup))
})();
var state__2884__auto__ = (function (){var statearr_8759 = f__2883__auto__.call(null);
(statearr_8759[(6)] = c__2882__auto__);

return statearr_8759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,p5,setup))
);

return c__2882__auto__;
});})(p5,setup))
;
var draw = ((function (p5,setup,keyPressed){
return (function (){
p5.background((0));

p5.fill((255));

p5.stroke((100));

if(cljs.core.truth_(app.t2.main.model)){
cljs.core.dorun.call(null,(function (){var seq__8760 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__8761 = null;
var count__8762 = (0);
var i__8763 = (0);
while(true){
if((i__8763 < count__8762)){
var vec__8764 = cljs.core._nth.call(null,chunk__8761,i__8763);
var idx = cljs.core.nth.call(null,vec__8764,(0),null);
var map__8767 = cljs.core.nth.call(null,vec__8764,(1),null);
var map__8767__$1 = ((((!((map__8767 == null)))?(((((map__8767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8767):map__8767);
var t = map__8767__$1;
var pos = cljs.core.get.call(null,map__8767__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__8767__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__8769_8835 = pos;
var x_8836 = cljs.core.nth.call(null,vec__8769_8835,(0),null);
var y_8837 = cljs.core.nth.call(null,vec__8769_8835,(1),null);
var vec__8772_8838 = origin;
var ox_8839 = cljs.core.nth.call(null,vec__8772_8838,(0),null);
var oy_8840 = cljs.core.nth.call(null,vec__8772_8838,(1),null);
var showKey_8841 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_8836,y_8837,(50),(50));

p5.rect((ox_8839 - (25)),(oy_8840 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_8841,ox_8839,oy_8840);


var G__8842 = seq__8760;
var G__8843 = chunk__8761;
var G__8844 = count__8762;
var G__8845 = (i__8763 + (1));
seq__8760 = G__8842;
chunk__8761 = G__8843;
count__8762 = G__8844;
i__8763 = G__8845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8760);
if(temp__5457__auto__){
var seq__8760__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8760__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8760__$1);
var G__8846 = cljs.core.chunk_rest.call(null,seq__8760__$1);
var G__8847 = c__4319__auto__;
var G__8848 = cljs.core.count.call(null,c__4319__auto__);
var G__8849 = (0);
seq__8760 = G__8846;
chunk__8761 = G__8847;
count__8762 = G__8848;
i__8763 = G__8849;
continue;
} else {
var vec__8775 = cljs.core.first.call(null,seq__8760__$1);
var idx = cljs.core.nth.call(null,vec__8775,(0),null);
var map__8778 = cljs.core.nth.call(null,vec__8775,(1),null);
var map__8778__$1 = ((((!((map__8778 == null)))?(((((map__8778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8778):map__8778);
var t = map__8778__$1;
var pos = cljs.core.get.call(null,map__8778__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__8778__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__8780_8850 = pos;
var x_8851 = cljs.core.nth.call(null,vec__8780_8850,(0),null);
var y_8852 = cljs.core.nth.call(null,vec__8780_8850,(1),null);
var vec__8783_8853 = origin;
var ox_8854 = cljs.core.nth.call(null,vec__8783_8853,(0),null);
var oy_8855 = cljs.core.nth.call(null,vec__8783_8853,(1),null);
var showKey_8856 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_8851,y_8852,(50),(50));

p5.rect((ox_8854 - (25)),(oy_8855 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_8856,ox_8854,oy_8855);


var G__8857 = cljs.core.next.call(null,seq__8760__$1);
var G__8858 = null;
var G__8859 = (0);
var G__8860 = (0);
seq__8760 = G__8857;
chunk__8761 = G__8858;
count__8762 = G__8859;
i__8763 = G__8860;
continue;
}
} else {
return null;
}
}
break;
}
})());

p5.fill((255));

return p5.text(["score:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(app.t2.main.model))].join(''),(50),(20));
} else {
return null;
}
});})(p5,setup,keyPressed))
;
p5.setup = setup;

p5.draw = draw;

return p5.keyPressed = keyPressed;
});
app.t2.main.main.call(null);

//# sourceMappingURL=main.js.map
