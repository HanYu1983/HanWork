// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__9556){
var map__9557 = p__9556;
var map__9557__$1 = ((((!((map__9557 == null)))?(((((map__9557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9557):map__9557);
var info = map__9557__$1;
var pos = cljs.core.get.call(null,map__9557__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info);
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__9559,target){
var map__9560 = p__9559;
var map__9560__$1 = ((((!((map__9560 == null)))?(((((map__9560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9560):map__9560);
var ctx = map__9560__$1;
var time = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858)))){
return target;
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__9562,target){
var map__9563 = p__9562;
var map__9563__$1 = ((((!((map__9563 == null)))?(((((map__9563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9563):map__9563);
var ctx = map__9563__$1;
var time = cljs.core.get.call(null,map__9563__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__9565 = cljs.core._EQ_;
var expr__9566 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(pred__9565.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__9566))){
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
if(cljs.core.truth_(pred__9565.call(null,new cljs.core.Keyword(null,"goback","goback",1168265173),expr__9566))){
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
if(cljs.core.truth_(pred__9565.call(null,new cljs.core.Keyword(null,"wait","wait",-260664777),expr__9566))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null));
} else {
return target;
}
} else {
if(cljs.core.truth_(pred__9565.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),expr__9566))){
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
var pred__9568 = cljs.core._EQ_;
var expr__9569 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__9568.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__9569))){
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
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9577){
var state_val_9578 = (state_9577[(1)]);
if((state_val_9578 === (1))){
var inst_9571 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9572 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_9573 = cljs.core.PersistentHashMap.fromArrays(inst_9571,inst_9572);
var state_9577__$1 = state_9577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9577__$1,(2),app.t2.main.evt,inst_9573);
} else {
if((state_val_9578 === (2))){
var inst_9575 = (state_9577[(2)]);
var state_9577__$1 = state_9577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9577__$1,inst_9575);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t2$main$main_$_state_machine__2796__auto__ = null;
var app$t2$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9579 = [null,null,null,null,null,null,null];
(statearr_9579[(0)] = app$t2$main$main_$_state_machine__2796__auto__);

(statearr_9579[(1)] = (1));

return statearr_9579;
});
var app$t2$main$main_$_state_machine__2796__auto____1 = (function (state_9577){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9580){if((e9580 instanceof Object)){
var ex__2799__auto__ = e9580;
var statearr_9581_9888 = state_9577;
(statearr_9581_9888[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9889 = state_9577;
state_9577 = G__9889;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2796__auto__ = function(state_9577){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2796__auto____1.call(this,state_9577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2796__auto____0;
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2796__auto____1;
return app$t2$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9582 = f__2886__auto__.call(null);
(statearr_9582[(6)] = c__2885__auto__);

return statearr_9582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
}),(33));

setInterval((function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9589){
var state_val_9590 = (state_9589[(1)]);
if((state_val_9590 === (1))){
var inst_9583 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9584 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_9585 = cljs.core.PersistentHashMap.fromArrays(inst_9583,inst_9584);
var state_9589__$1 = state_9589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9589__$1,(2),app.t2.main.evt,inst_9585);
} else {
if((state_val_9590 === (2))){
var inst_9587 = (state_9589[(2)]);
var state_9589__$1 = state_9589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9589__$1,inst_9587);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t2$main$main_$_state_machine__2796__auto__ = null;
var app$t2$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9591 = [null,null,null,null,null,null,null];
(statearr_9591[(0)] = app$t2$main$main_$_state_machine__2796__auto__);

(statearr_9591[(1)] = (1));

return statearr_9591;
});
var app$t2$main$main_$_state_machine__2796__auto____1 = (function (state_9589){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9592){if((e9592 instanceof Object)){
var ex__2799__auto__ = e9592;
var statearr_9593_9890 = state_9589;
(statearr_9593_9890[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9891 = state_9589;
state_9589 = G__9891;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2796__auto__ = function(state_9589){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2796__auto____1.call(this,state_9589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2796__auto____0;
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2796__auto____1;
return app$t2$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9594 = f__2886__auto__.call(null);
(statearr_9594[(6)] = c__2885__auto__);

return statearr_9594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
}),(1000));

var firstTarget_9892 = app.t2.main.targetCreate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__2885__auto___9893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___9893,firstTarget_9892){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___9893,firstTarget_9892){
return (function (state_9784){
var state_val_9785 = (state_9784[(1)]);
if((state_val_9785 === (7))){
var inst_9780 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9786_9894 = state_9784__$1;
(statearr_9786_9894[(2)] = inst_9780);

(statearr_9786_9894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (20))){
var state_9784__$1 = state_9784;
var statearr_9787_9895 = state_9784__$1;
(statearr_9787_9895[(2)] = true);

(statearr_9787_9895[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (27))){
var inst_9672 = (state_9784[(7)]);
var inst_9758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9759 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_9760 = (new cljs.core.PersistentVector(null,1,(5),inst_9758,inst_9759,null));
var inst_9761 = cljs.core.update_in.call(null,inst_9672,inst_9760,cljs.core.inc);
var state_9784__$1 = state_9784;
var statearr_9788_9896 = state_9784__$1;
(statearr_9788_9896[(2)] = inst_9761);

(statearr_9788_9896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (1))){
var inst_9595 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_9596 = (new Date());
var inst_9597 = inst_9596.getTime();
var inst_9598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9599 = [firstTarget_9892];
var inst_9600 = (new cljs.core.PersistentVector(null,1,(5),inst_9598,inst_9599,null));
var inst_9601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9602 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9604 = [(200),(100)];
var inst_9605 = (new cljs.core.PersistentVector(null,2,(5),inst_9603,inst_9604,null));
var inst_9606 = [inst_9605];
var inst_9607 = cljs.core.PersistentHashMap.fromArrays(inst_9602,inst_9606);
var inst_9608 = app.t2.main.targetCreate.call(null,inst_9607);
var inst_9609 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9611 = [(300),(100)];
var inst_9612 = (new cljs.core.PersistentVector(null,2,(5),inst_9610,inst_9611,null));
var inst_9613 = [inst_9612];
var inst_9614 = cljs.core.PersistentHashMap.fromArrays(inst_9609,inst_9613);
var inst_9615 = app.t2.main.targetCreate.call(null,inst_9614);
var inst_9616 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9618 = [(100),(200)];
var inst_9619 = (new cljs.core.PersistentVector(null,2,(5),inst_9617,inst_9618,null));
var inst_9620 = [inst_9619];
var inst_9621 = cljs.core.PersistentHashMap.fromArrays(inst_9616,inst_9620);
var inst_9622 = app.t2.main.targetCreate.call(null,inst_9621);
var inst_9623 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9625 = [(200),(200)];
var inst_9626 = (new cljs.core.PersistentVector(null,2,(5),inst_9624,inst_9625,null));
var inst_9627 = [inst_9626];
var inst_9628 = cljs.core.PersistentHashMap.fromArrays(inst_9623,inst_9627);
var inst_9629 = app.t2.main.targetCreate.call(null,inst_9628);
var inst_9630 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9632 = [(300),(200)];
var inst_9633 = (new cljs.core.PersistentVector(null,2,(5),inst_9631,inst_9632,null));
var inst_9634 = [inst_9633];
var inst_9635 = cljs.core.PersistentHashMap.fromArrays(inst_9630,inst_9634);
var inst_9636 = app.t2.main.targetCreate.call(null,inst_9635);
var inst_9637 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9639 = [(100),(300)];
var inst_9640 = (new cljs.core.PersistentVector(null,2,(5),inst_9638,inst_9639,null));
var inst_9641 = [inst_9640];
var inst_9642 = cljs.core.PersistentHashMap.fromArrays(inst_9637,inst_9641);
var inst_9643 = app.t2.main.targetCreate.call(null,inst_9642);
var inst_9644 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9646 = [(200),(300)];
var inst_9647 = (new cljs.core.PersistentVector(null,2,(5),inst_9645,inst_9646,null));
var inst_9648 = [inst_9647];
var inst_9649 = cljs.core.PersistentHashMap.fromArrays(inst_9644,inst_9648);
var inst_9650 = app.t2.main.targetCreate.call(null,inst_9649);
var inst_9651 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9653 = [(300),(300)];
var inst_9654 = (new cljs.core.PersistentVector(null,2,(5),inst_9652,inst_9653,null));
var inst_9655 = [inst_9654];
var inst_9656 = cljs.core.PersistentHashMap.fromArrays(inst_9651,inst_9655);
var inst_9657 = app.t2.main.targetCreate.call(null,inst_9656);
var inst_9658 = [inst_9608,inst_9615,inst_9622,inst_9629,inst_9636,inst_9643,inst_9650,inst_9657];
var inst_9659 = (new cljs.core.PersistentVector(null,8,(5),inst_9601,inst_9658,null));
var inst_9660 = cljs.core.concat.call(null,inst_9600,inst_9659);
var inst_9661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9662 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9664 = [firstTarget_9892];
var inst_9665 = (new cljs.core.PersistentVector(null,1,(5),inst_9663,inst_9664,null));
var inst_9666 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9665];
var inst_9667 = cljs.core.PersistentHashMap.fromArrays(inst_9662,inst_9666);
var inst_9668 = [inst_9667];
var inst_9669 = (new cljs.core.PersistentVector(null,1,(5),inst_9661,inst_9668,null));
var inst_9670 = [inst_9597,inst_9660,inst_9669,(0)];
var inst_9671 = cljs.core.PersistentHashMap.fromArrays(inst_9595,inst_9670);
var inst_9672 = inst_9671;
var state_9784__$1 = (function (){var statearr_9789 = state_9784;
(statearr_9789[(7)] = inst_9672);

return statearr_9789;
})();
var statearr_9790_9897 = state_9784__$1;
(statearr_9790_9897[(2)] = null);

(statearr_9790_9897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (24))){
var inst_9727 = (state_9784[(8)]);
var state_9784__$1 = state_9784;
var statearr_9791_9898 = state_9784__$1;
(statearr_9791_9898[(2)] = inst_9727);

(statearr_9791_9898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (4))){
var inst_9680 = (state_9784[(9)]);
var inst_9676 = (state_9784[(10)]);
var inst_9676__$1 = (state_9784[(2)]);
var inst_9680__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_9676__$1);
var inst_9681 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_9680__$1);
var state_9784__$1 = (function (){var statearr_9792 = state_9784;
(statearr_9792[(9)] = inst_9680__$1);

(statearr_9792[(10)] = inst_9676__$1);

return statearr_9792;
})();
if(inst_9681){
var statearr_9793_9899 = state_9784__$1;
(statearr_9793_9899[(1)] = (5));

} else {
var statearr_9794_9900 = state_9784__$1;
(statearr_9794_9900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (15))){
var state_9784__$1 = state_9784;
var statearr_9795_9901 = state_9784__$1;
(statearr_9795_9901[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (21))){
var state_9784__$1 = state_9784;
var statearr_9797_9902 = state_9784__$1;
(statearr_9797_9902[(2)] = false);

(statearr_9797_9902[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (31))){
var inst_9768 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9798_9903 = state_9784__$1;
(statearr_9798_9903[(2)] = inst_9768);

(statearr_9798_9903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (13))){
var inst_9776 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9799_9904 = state_9784__$1;
(statearr_9799_9904[(2)] = inst_9776);

(statearr_9799_9904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (22))){
var inst_9740 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9800_9905 = state_9784__$1;
(statearr_9800_9905[(2)] = inst_9740);

(statearr_9800_9905[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (29))){
var inst_9672 = (state_9784[(7)]);
var state_9784__$1 = state_9784;
var statearr_9801_9906 = state_9784__$1;
(statearr_9801_9906[(2)] = inst_9672);

(statearr_9801_9906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (6))){
var inst_9680 = (state_9784[(9)]);
var inst_9699 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_9680);
var state_9784__$1 = state_9784;
if(inst_9699){
var statearr_9802_9907 = state_9784__$1;
(statearr_9802_9907[(1)] = (8));

} else {
var statearr_9803_9908 = state_9784__$1;
(statearr_9803_9908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (28))){
var inst_9763 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9804_9909 = state_9784__$1;
(statearr_9804_9909[(2)] = inst_9763);

(statearr_9804_9909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (25))){
var inst_9748 = (state_9784[(2)]);
var inst_9749 = cljs.core.get.call(null,inst_9748,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_9750 = cljs.core.partial.call(null,cljs.core._EQ_,inst_9749);
var inst_9751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9752 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_9753 = (new cljs.core.PersistentVector(null,2,(5),inst_9751,inst_9752,null));
var inst_9754 = cljs.core.some.call(null,inst_9750,inst_9753);
var inst_9755 = cljs.core.not.call(null,inst_9754);
var state_9784__$1 = state_9784;
if(inst_9755){
var statearr_9805_9910 = state_9784__$1;
(statearr_9805_9910[(1)] = (26));

} else {
var statearr_9806_9911 = state_9784__$1;
(statearr_9806_9911[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (17))){
var inst_9727 = (state_9784[(8)]);
var inst_9732 = inst_9727.cljs$lang$protocol_mask$partition0$;
var inst_9733 = (inst_9732 & (64));
var inst_9734 = inst_9727.cljs$core$ISeq$;
var inst_9735 = (cljs.core.PROTOCOL_SENTINEL === inst_9734);
var inst_9736 = ((inst_9733) || (inst_9735));
var state_9784__$1 = state_9784;
if(cljs.core.truth_(inst_9736)){
var statearr_9807_9912 = state_9784__$1;
(statearr_9807_9912[(1)] = (20));

} else {
var statearr_9808_9913 = state_9784__$1;
(statearr_9808_9913[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (3))){
var inst_9782 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9784__$1,inst_9782);
} else {
if((state_val_9785 === (12))){
var inst_9672 = (state_9784[(7)]);
var inst_9773 = app.t2.main.update.call(null,inst_9672);
var inst_9672__$1 = inst_9773;
var state_9784__$1 = (function (){var statearr_9809 = state_9784;
(statearr_9809[(7)] = inst_9672__$1);

return statearr_9809;
})();
var statearr_9810_9914 = state_9784__$1;
(statearr_9810_9914[(2)] = null);

(statearr_9810_9914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (2))){
var inst_9672 = (state_9784[(7)]);
var inst_9674 = app.t2.main.model = inst_9672;
var state_9784__$1 = (function (){var statearr_9811 = state_9784;
(statearr_9811[(11)] = inst_9674);

return statearr_9811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9784__$1,(4),app.t2.main.evt);
} else {
if((state_val_9785 === (23))){
var inst_9727 = (state_9784[(8)]);
var inst_9745 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9727);
var state_9784__$1 = state_9784;
var statearr_9812_9915 = state_9784__$1;
(statearr_9812_9915[(2)] = inst_9745);

(statearr_9812_9915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (19))){
var inst_9743 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
if(cljs.core.truth_(inst_9743)){
var statearr_9813_9916 = state_9784__$1;
(statearr_9813_9916[(1)] = (23));

} else {
var statearr_9814_9917 = state_9784__$1;
(statearr_9814_9917[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (11))){
var inst_9676 = (state_9784[(10)]);
var inst_9718 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_9676);
var inst_9719 = cljs.core.range.call(null,(9));
var inst_9720 = cljs.core.zipmap.call(null,app.t2.main.keys,inst_9719);
var inst_9721 = cljs.core.get.call(null,inst_9720,inst_9718);
var inst_9722 = cljs.core.partial.call(null,cljs.core._EQ_,inst_9718);
var inst_9723 = cljs.core.some.call(null,inst_9722,app.t2.main.keys);
var state_9784__$1 = (function (){var statearr_9815 = state_9784;
(statearr_9815[(12)] = inst_9721);

return statearr_9815;
})();
if(cljs.core.truth_(inst_9723)){
var statearr_9816_9918 = state_9784__$1;
(statearr_9816_9918[(1)] = (14));

} else {
var statearr_9817_9919 = state_9784__$1;
(statearr_9817_9919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (9))){
var inst_9680 = (state_9784[(9)]);
var inst_9716 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9680);
var state_9784__$1 = state_9784;
if(inst_9716){
var statearr_9818_9920 = state_9784__$1;
(statearr_9818_9920[(1)] = (11));

} else {
var statearr_9819_9921 = state_9784__$1;
(statearr_9819_9921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (5))){
var inst_9672 = (state_9784[(7)]);
var inst_9683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9684 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_9685 = (new cljs.core.PersistentVector(null,1,(5),inst_9683,inst_9684,null));
var inst_9686 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9688 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9672);
var inst_9689 = cljs.core.nth.call(null,inst_9688,(2));
var inst_9690 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9672);
var inst_9691 = cljs.core.nth.call(null,inst_9690,(3));
var inst_9692 = [inst_9689,inst_9691];
var inst_9693 = (new cljs.core.PersistentVector(null,2,(5),inst_9687,inst_9692,null));
var inst_9694 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9693];
var inst_9695 = cljs.core.PersistentHashMap.fromArrays(inst_9686,inst_9694);
var inst_9696 = cljs.core.update_in.call(null,inst_9672,inst_9685,cljs.core.conj,inst_9695);
var inst_9672__$1 = inst_9696;
var state_9784__$1 = (function (){var statearr_9820 = state_9784;
(statearr_9820[(7)] = inst_9672__$1);

return statearr_9820;
})();
var statearr_9821_9922 = state_9784__$1;
(statearr_9821_9922[(2)] = null);

(statearr_9821_9922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (14))){
var inst_9721 = (state_9784[(12)]);
var inst_9727 = (state_9784[(8)]);
var inst_9672 = (state_9784[(7)]);
var inst_9726 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9672);
var inst_9727__$1 = cljs.core.nth.call(null,inst_9726,inst_9721);
var inst_9729 = (inst_9727__$1 == null);
var inst_9730 = cljs.core.not.call(null,inst_9729);
var state_9784__$1 = (function (){var statearr_9822 = state_9784;
(statearr_9822[(8)] = inst_9727__$1);

return statearr_9822;
})();
if(inst_9730){
var statearr_9823_9923 = state_9784__$1;
(statearr_9823_9923[(1)] = (17));

} else {
var statearr_9824_9924 = state_9784__$1;
(statearr_9824_9924[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (26))){
var inst_9672 = (state_9784[(7)]);
var state_9784__$1 = state_9784;
var statearr_9825_9925 = state_9784__$1;
(statearr_9825_9925[(2)] = inst_9672);

(statearr_9825_9925[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (16))){
var inst_9770 = (state_9784[(2)]);
var inst_9672 = inst_9770;
var state_9784__$1 = (function (){var statearr_9826 = state_9784;
(statearr_9826[(7)] = inst_9672);

return statearr_9826;
})();
var statearr_9827_9926 = state_9784__$1;
(statearr_9827_9926[(2)] = null);

(statearr_9827_9926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (30))){
var state_9784__$1 = state_9784;
var statearr_9828_9927 = state_9784__$1;
(statearr_9828_9927[(2)] = null);

(statearr_9828_9927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (10))){
var inst_9778 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9829_9928 = state_9784__$1;
(statearr_9829_9928[(2)] = inst_9778);

(statearr_9829_9928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (18))){
var state_9784__$1 = state_9784;
var statearr_9830_9929 = state_9784__$1;
(statearr_9830_9929[(2)] = false);

(statearr_9830_9929[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (8))){
var inst_9672 = (state_9784[(7)]);
var inst_9701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9702 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_9703 = (new cljs.core.PersistentVector(null,1,(5),inst_9701,inst_9702,null));
var inst_9704 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9706 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9672);
var inst_9707 = cljs.core.rand_int.call(null,(9));
var inst_9708 = cljs.core.nth.call(null,inst_9706,inst_9707);
var inst_9709 = [inst_9708];
var inst_9710 = (new cljs.core.PersistentVector(null,1,(5),inst_9705,inst_9709,null));
var inst_9711 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9710];
var inst_9712 = cljs.core.PersistentHashMap.fromArrays(inst_9704,inst_9711);
var inst_9713 = cljs.core.update_in.call(null,inst_9672,inst_9703,cljs.core.conj,inst_9712);
var inst_9672__$1 = inst_9713;
var state_9784__$1 = (function (){var statearr_9831 = state_9784;
(statearr_9831[(7)] = inst_9672__$1);

return statearr_9831;
})();
var statearr_9832_9930 = state_9784__$1;
(statearr_9832_9930[(2)] = null);

(statearr_9832_9930[(1)] = (2));


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
});})(c__2885__auto___9893,firstTarget_9892))
;
return ((function (switch__2795__auto__,c__2885__auto___9893,firstTarget_9892){
return (function() {
var app$t2$main$main_$_state_machine__2796__auto__ = null;
var app$t2$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9833 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9833[(0)] = app$t2$main$main_$_state_machine__2796__auto__);

(statearr_9833[(1)] = (1));

return statearr_9833;
});
var app$t2$main$main_$_state_machine__2796__auto____1 = (function (state_9784){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9834){if((e9834 instanceof Object)){
var ex__2799__auto__ = e9834;
var statearr_9835_9931 = state_9784;
(statearr_9835_9931[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9932 = state_9784;
state_9784 = G__9932;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2796__auto__ = function(state_9784){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2796__auto____1.call(this,state_9784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2796__auto____0;
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2796__auto____1;
return app$t2$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___9893,firstTarget_9892))
})();
var state__2887__auto__ = (function (){var statearr_9836 = f__2886__auto__.call(null);
(statearr_9836[(6)] = c__2885__auto___9893);

return statearr_9836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___9893,firstTarget_9892))
);


var p5 = window;
var setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(400));
var txt = p5.createDiv("string");
canvas.mousePressed(((function (canvas,txt,p5){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,canvas,txt,p5){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,canvas,txt,p5){
return (function (state_9843){
var state_val_9844 = (state_9843[(1)]);
if((state_val_9844 === (1))){
var inst_9837 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9838 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_9839 = cljs.core.PersistentHashMap.fromArrays(inst_9837,inst_9838);
var state_9843__$1 = state_9843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9843__$1,(2),app.t2.main.evt,inst_9839);
} else {
if((state_val_9844 === (2))){
var inst_9841 = (state_9843[(2)]);
var state_9843__$1 = state_9843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9843__$1,inst_9841);
} else {
return null;
}
}
});})(c__2885__auto__,canvas,txt,p5))
;
return ((function (switch__2795__auto__,c__2885__auto__,canvas,txt,p5){
return (function() {
var app$t2$main$main_$_state_machine__2796__auto__ = null;
var app$t2$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9845 = [null,null,null,null,null,null,null];
(statearr_9845[(0)] = app$t2$main$main_$_state_machine__2796__auto__);

(statearr_9845[(1)] = (1));

return statearr_9845;
});
var app$t2$main$main_$_state_machine__2796__auto____1 = (function (state_9843){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9846){if((e9846 instanceof Object)){
var ex__2799__auto__ = e9846;
var statearr_9847_9933 = state_9843;
(statearr_9847_9933[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9934 = state_9843;
state_9843 = G__9934;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2796__auto__ = function(state_9843){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2796__auto____1.call(this,state_9843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2796__auto____0;
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2796__auto____1;
return app$t2$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,canvas,txt,p5))
})();
var state__2887__auto__ = (function (){var statearr_9848 = f__2886__auto__.call(null);
(statearr_9848[(6)] = c__2885__auto__);

return statearr_9848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,canvas,txt,p5))
);

return c__2885__auto__;
});})(canvas,txt,p5))
);

canvas.parent("container");

return txt.position((20),(20));
});})(p5))
;
var keyPressed = ((function (p5,setup){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,p5,setup){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,p5,setup){
return (function (state_9856){
var state_val_9857 = (state_9856[(1)]);
if((state_val_9857 === (1))){
var inst_9849 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9850 = p5.key;
var inst_9851 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9850];
var inst_9852 = cljs.core.PersistentHashMap.fromArrays(inst_9849,inst_9851);
var state_9856__$1 = state_9856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9856__$1,(2),app.t2.main.evt,inst_9852);
} else {
if((state_val_9857 === (2))){
var inst_9854 = (state_9856[(2)]);
var state_9856__$1 = state_9856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9856__$1,inst_9854);
} else {
return null;
}
}
});})(c__2885__auto__,p5,setup))
;
return ((function (switch__2795__auto__,c__2885__auto__,p5,setup){
return (function() {
var app$t2$main$main_$_state_machine__2796__auto__ = null;
var app$t2$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9858 = [null,null,null,null,null,null,null];
(statearr_9858[(0)] = app$t2$main$main_$_state_machine__2796__auto__);

(statearr_9858[(1)] = (1));

return statearr_9858;
});
var app$t2$main$main_$_state_machine__2796__auto____1 = (function (state_9856){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9859){if((e9859 instanceof Object)){
var ex__2799__auto__ = e9859;
var statearr_9860_9935 = state_9856;
(statearr_9860_9935[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9936 = state_9856;
state_9856 = G__9936;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2796__auto__ = function(state_9856){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2796__auto____1.call(this,state_9856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2796__auto____0;
app$t2$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2796__auto____1;
return app$t2$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,p5,setup))
})();
var state__2887__auto__ = (function (){var statearr_9861 = f__2886__auto__.call(null);
(statearr_9861[(6)] = c__2885__auto__);

return statearr_9861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,p5,setup))
);

return c__2885__auto__;
});})(p5,setup))
;
var draw = ((function (p5,setup,keyPressed){
return (function (){
p5.background((0));

p5.fill((255));

p5.stroke((100));

if(cljs.core.truth_(app.t2.main.model)){
cljs.core.dorun.call(null,(function (){var seq__9862 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__9863 = null;
var count__9864 = (0);
var i__9865 = (0);
while(true){
if((i__9865 < count__9864)){
var vec__9866 = cljs.core._nth.call(null,chunk__9863,i__9865);
var idx = cljs.core.nth.call(null,vec__9866,(0),null);
var map__9869 = cljs.core.nth.call(null,vec__9866,(1),null);
var map__9869__$1 = ((((!((map__9869 == null)))?(((((map__9869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9869):map__9869);
var t = map__9869__$1;
var pos = cljs.core.get.call(null,map__9869__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__9869__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__9871_9937 = pos;
var x_9938 = cljs.core.nth.call(null,vec__9871_9937,(0),null);
var y_9939 = cljs.core.nth.call(null,vec__9871_9937,(1),null);
var vec__9874_9940 = origin;
var ox_9941 = cljs.core.nth.call(null,vec__9874_9940,(0),null);
var oy_9942 = cljs.core.nth.call(null,vec__9874_9940,(1),null);
var showKey_9943 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_9938,y_9939,(50),(50));

p5.rect((ox_9941 - (25)),(oy_9942 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_9943,ox_9941,oy_9942);


var G__9944 = seq__9862;
var G__9945 = chunk__9863;
var G__9946 = count__9864;
var G__9947 = (i__9865 + (1));
seq__9862 = G__9944;
chunk__9863 = G__9945;
count__9864 = G__9946;
i__9865 = G__9947;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9862);
if(temp__5457__auto__){
var seq__9862__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9862__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9862__$1);
var G__9948 = cljs.core.chunk_rest.call(null,seq__9862__$1);
var G__9949 = c__4319__auto__;
var G__9950 = cljs.core.count.call(null,c__4319__auto__);
var G__9951 = (0);
seq__9862 = G__9948;
chunk__9863 = G__9949;
count__9864 = G__9950;
i__9865 = G__9951;
continue;
} else {
var vec__9877 = cljs.core.first.call(null,seq__9862__$1);
var idx = cljs.core.nth.call(null,vec__9877,(0),null);
var map__9880 = cljs.core.nth.call(null,vec__9877,(1),null);
var map__9880__$1 = ((((!((map__9880 == null)))?(((((map__9880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9880):map__9880);
var t = map__9880__$1;
var pos = cljs.core.get.call(null,map__9880__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__9880__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__9882_9952 = pos;
var x_9953 = cljs.core.nth.call(null,vec__9882_9952,(0),null);
var y_9954 = cljs.core.nth.call(null,vec__9882_9952,(1),null);
var vec__9885_9955 = origin;
var ox_9956 = cljs.core.nth.call(null,vec__9885_9955,(0),null);
var oy_9957 = cljs.core.nth.call(null,vec__9885_9955,(1),null);
var showKey_9958 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_9953,y_9954,(50),(50));

p5.rect((ox_9956 - (25)),(oy_9957 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_9958,ox_9956,oy_9957);


var G__9959 = cljs.core.next.call(null,seq__9862__$1);
var G__9960 = null;
var G__9961 = (0);
var G__9962 = (0);
seq__9862 = G__9959;
chunk__9863 = G__9960;
count__9864 = G__9961;
i__9865 = G__9962;
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
