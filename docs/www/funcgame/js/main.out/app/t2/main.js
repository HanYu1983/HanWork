// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__4805){
var map__4806 = p__4805;
var map__4806__$1 = ((((!((map__4806 == null)))?(((((map__4806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4806):map__4806);
var info = map__4806__$1;
var pos = cljs.core.get.call(null,map__4806__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info);
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__4808,target){
var map__4809 = p__4808;
var map__4809__$1 = ((((!((map__4809 == null)))?(((((map__4809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4809):map__4809);
var ctx = map__4809__$1;
var time = cljs.core.get.call(null,map__4809__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858)))){
return target;
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__4811,target){
var map__4812 = p__4811;
var map__4812__$1 = ((((!((map__4812 == null)))?(((((map__4812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4812):map__4812);
var ctx = map__4812__$1;
var time = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__4814 = cljs.core._EQ_;
var expr__4815 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(pred__4814.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__4815))){
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
if(cljs.core.truth_(pred__4814.call(null,new cljs.core.Keyword(null,"goback","goback",1168265173),expr__4815))){
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
if(cljs.core.truth_(pred__4814.call(null,new cljs.core.Keyword(null,"wait","wait",-260664777),expr__4815))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null));
} else {
return target;
}
} else {
if(cljs.core.truth_(pred__4814.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),expr__4815))){
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
var pred__4817 = cljs.core._EQ_;
var expr__4818 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__4817.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__4818))){
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
return (function (state_4826){
var state_val_4827 = (state_4826[(1)]);
if((state_val_4827 === (1))){
var inst_4820 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_4821 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_4822 = cljs.core.PersistentHashMap.fromArrays(inst_4820,inst_4821);
var state_4826__$1 = state_4826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4826__$1,(2),app.t2.main.evt,inst_4822);
} else {
if((state_val_4827 === (2))){
var inst_4824 = (state_4826[(2)]);
var state_4826__$1 = state_4826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4826__$1,inst_4824);
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
var statearr_4828 = [null,null,null,null,null,null,null];
(statearr_4828[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_4828[(1)] = (1));

return statearr_4828;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_4826){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4829){if((e4829 instanceof Object)){
var ex__2796__auto__ = e4829;
var statearr_4830_5137 = state_4826;
(statearr_4830_5137[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5138 = state_4826;
state_4826 = G__5138;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_4826){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_4826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_4831 = f__2883__auto__.call(null);
(statearr_4831[(6)] = c__2882__auto__);

return statearr_4831;
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
return (function (state_4838){
var state_val_4839 = (state_4838[(1)]);
if((state_val_4839 === (1))){
var inst_4832 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_4833 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_4834 = cljs.core.PersistentHashMap.fromArrays(inst_4832,inst_4833);
var state_4838__$1 = state_4838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4838__$1,(2),app.t2.main.evt,inst_4834);
} else {
if((state_val_4839 === (2))){
var inst_4836 = (state_4838[(2)]);
var state_4838__$1 = state_4838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4838__$1,inst_4836);
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
var statearr_4840 = [null,null,null,null,null,null,null];
(statearr_4840[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_4840[(1)] = (1));

return statearr_4840;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_4838){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4841){if((e4841 instanceof Object)){
var ex__2796__auto__ = e4841;
var statearr_4842_5139 = state_4838;
(statearr_4842_5139[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5140 = state_4838;
state_4838 = G__5140;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_4838){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_4838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_4843 = f__2883__auto__.call(null);
(statearr_4843[(6)] = c__2882__auto__);

return statearr_4843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(1000));

var firstTarget_5141 = app.t2.main.targetCreate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__2882__auto___5142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5142,firstTarget_5141){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5142,firstTarget_5141){
return (function (state_5033){
var state_val_5034 = (state_5033[(1)]);
if((state_val_5034 === (7))){
var inst_5029 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5035_5143 = state_5033__$1;
(statearr_5035_5143[(2)] = inst_5029);

(statearr_5035_5143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (20))){
var state_5033__$1 = state_5033;
var statearr_5036_5144 = state_5033__$1;
(statearr_5036_5144[(2)] = true);

(statearr_5036_5144[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (27))){
var inst_4921 = (state_5033[(7)]);
var inst_5007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5008 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_5009 = (new cljs.core.PersistentVector(null,1,(5),inst_5007,inst_5008,null));
var inst_5010 = cljs.core.update_in.call(null,inst_4921,inst_5009,cljs.core.inc);
var state_5033__$1 = state_5033;
var statearr_5037_5145 = state_5033__$1;
(statearr_5037_5145[(2)] = inst_5010);

(statearr_5037_5145[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (1))){
var inst_4844 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_4845 = (new Date());
var inst_4846 = inst_4845.getTime();
var inst_4847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4848 = [firstTarget_5141];
var inst_4849 = (new cljs.core.PersistentVector(null,1,(5),inst_4847,inst_4848,null));
var inst_4850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4851 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4853 = [(200),(100)];
var inst_4854 = (new cljs.core.PersistentVector(null,2,(5),inst_4852,inst_4853,null));
var inst_4855 = [inst_4854];
var inst_4856 = cljs.core.PersistentHashMap.fromArrays(inst_4851,inst_4855);
var inst_4857 = app.t2.main.targetCreate.call(null,inst_4856);
var inst_4858 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4860 = [(300),(100)];
var inst_4861 = (new cljs.core.PersistentVector(null,2,(5),inst_4859,inst_4860,null));
var inst_4862 = [inst_4861];
var inst_4863 = cljs.core.PersistentHashMap.fromArrays(inst_4858,inst_4862);
var inst_4864 = app.t2.main.targetCreate.call(null,inst_4863);
var inst_4865 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4867 = [(100),(200)];
var inst_4868 = (new cljs.core.PersistentVector(null,2,(5),inst_4866,inst_4867,null));
var inst_4869 = [inst_4868];
var inst_4870 = cljs.core.PersistentHashMap.fromArrays(inst_4865,inst_4869);
var inst_4871 = app.t2.main.targetCreate.call(null,inst_4870);
var inst_4872 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4873 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4874 = [(200),(200)];
var inst_4875 = (new cljs.core.PersistentVector(null,2,(5),inst_4873,inst_4874,null));
var inst_4876 = [inst_4875];
var inst_4877 = cljs.core.PersistentHashMap.fromArrays(inst_4872,inst_4876);
var inst_4878 = app.t2.main.targetCreate.call(null,inst_4877);
var inst_4879 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4881 = [(300),(200)];
var inst_4882 = (new cljs.core.PersistentVector(null,2,(5),inst_4880,inst_4881,null));
var inst_4883 = [inst_4882];
var inst_4884 = cljs.core.PersistentHashMap.fromArrays(inst_4879,inst_4883);
var inst_4885 = app.t2.main.targetCreate.call(null,inst_4884);
var inst_4886 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4888 = [(100),(300)];
var inst_4889 = (new cljs.core.PersistentVector(null,2,(5),inst_4887,inst_4888,null));
var inst_4890 = [inst_4889];
var inst_4891 = cljs.core.PersistentHashMap.fromArrays(inst_4886,inst_4890);
var inst_4892 = app.t2.main.targetCreate.call(null,inst_4891);
var inst_4893 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4895 = [(200),(300)];
var inst_4896 = (new cljs.core.PersistentVector(null,2,(5),inst_4894,inst_4895,null));
var inst_4897 = [inst_4896];
var inst_4898 = cljs.core.PersistentHashMap.fromArrays(inst_4893,inst_4897);
var inst_4899 = app.t2.main.targetCreate.call(null,inst_4898);
var inst_4900 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_4901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4902 = [(300),(300)];
var inst_4903 = (new cljs.core.PersistentVector(null,2,(5),inst_4901,inst_4902,null));
var inst_4904 = [inst_4903];
var inst_4905 = cljs.core.PersistentHashMap.fromArrays(inst_4900,inst_4904);
var inst_4906 = app.t2.main.targetCreate.call(null,inst_4905);
var inst_4907 = [inst_4857,inst_4864,inst_4871,inst_4878,inst_4885,inst_4892,inst_4899,inst_4906];
var inst_4908 = (new cljs.core.PersistentVector(null,8,(5),inst_4850,inst_4907,null));
var inst_4909 = cljs.core.concat.call(null,inst_4849,inst_4908);
var inst_4910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4911 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_4912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4913 = [firstTarget_5141];
var inst_4914 = (new cljs.core.PersistentVector(null,1,(5),inst_4912,inst_4913,null));
var inst_4915 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_4914];
var inst_4916 = cljs.core.PersistentHashMap.fromArrays(inst_4911,inst_4915);
var inst_4917 = [inst_4916];
var inst_4918 = (new cljs.core.PersistentVector(null,1,(5),inst_4910,inst_4917,null));
var inst_4919 = [inst_4846,inst_4909,inst_4918,(0)];
var inst_4920 = cljs.core.PersistentHashMap.fromArrays(inst_4844,inst_4919);
var inst_4921 = inst_4920;
var state_5033__$1 = (function (){var statearr_5038 = state_5033;
(statearr_5038[(7)] = inst_4921);

return statearr_5038;
})();
var statearr_5039_5146 = state_5033__$1;
(statearr_5039_5146[(2)] = null);

(statearr_5039_5146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (24))){
var inst_4976 = (state_5033[(8)]);
var state_5033__$1 = state_5033;
var statearr_5040_5147 = state_5033__$1;
(statearr_5040_5147[(2)] = inst_4976);

(statearr_5040_5147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (4))){
var inst_4925 = (state_5033[(9)]);
var inst_4929 = (state_5033[(10)]);
var inst_4925__$1 = (state_5033[(2)]);
var inst_4929__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_4925__$1);
var inst_4930 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_4929__$1);
var state_5033__$1 = (function (){var statearr_5041 = state_5033;
(statearr_5041[(9)] = inst_4925__$1);

(statearr_5041[(10)] = inst_4929__$1);

return statearr_5041;
})();
if(inst_4930){
var statearr_5042_5148 = state_5033__$1;
(statearr_5042_5148[(1)] = (5));

} else {
var statearr_5043_5149 = state_5033__$1;
(statearr_5043_5149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (15))){
var state_5033__$1 = state_5033;
var statearr_5044_5150 = state_5033__$1;
(statearr_5044_5150[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (21))){
var state_5033__$1 = state_5033;
var statearr_5046_5151 = state_5033__$1;
(statearr_5046_5151[(2)] = false);

(statearr_5046_5151[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (31))){
var inst_5017 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5047_5152 = state_5033__$1;
(statearr_5047_5152[(2)] = inst_5017);

(statearr_5047_5152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (13))){
var inst_5025 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5048_5153 = state_5033__$1;
(statearr_5048_5153[(2)] = inst_5025);

(statearr_5048_5153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (22))){
var inst_4989 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5049_5154 = state_5033__$1;
(statearr_5049_5154[(2)] = inst_4989);

(statearr_5049_5154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (29))){
var inst_4921 = (state_5033[(7)]);
var state_5033__$1 = state_5033;
var statearr_5050_5155 = state_5033__$1;
(statearr_5050_5155[(2)] = inst_4921);

(statearr_5050_5155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (6))){
var inst_4929 = (state_5033[(10)]);
var inst_4948 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_4929);
var state_5033__$1 = state_5033;
if(inst_4948){
var statearr_5051_5156 = state_5033__$1;
(statearr_5051_5156[(1)] = (8));

} else {
var statearr_5052_5157 = state_5033__$1;
(statearr_5052_5157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (28))){
var inst_5012 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5053_5158 = state_5033__$1;
(statearr_5053_5158[(2)] = inst_5012);

(statearr_5053_5158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (25))){
var inst_4997 = (state_5033[(2)]);
var inst_4998 = cljs.core.get.call(null,inst_4997,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_4999 = cljs.core.partial.call(null,cljs.core._EQ_,inst_4998);
var inst_5000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5001 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_5002 = (new cljs.core.PersistentVector(null,2,(5),inst_5000,inst_5001,null));
var inst_5003 = cljs.core.some.call(null,inst_4999,inst_5002);
var inst_5004 = cljs.core.not.call(null,inst_5003);
var state_5033__$1 = state_5033;
if(inst_5004){
var statearr_5054_5159 = state_5033__$1;
(statearr_5054_5159[(1)] = (26));

} else {
var statearr_5055_5160 = state_5033__$1;
(statearr_5055_5160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (17))){
var inst_4976 = (state_5033[(8)]);
var inst_4981 = inst_4976.cljs$lang$protocol_mask$partition0$;
var inst_4982 = (inst_4981 & (64));
var inst_4983 = inst_4976.cljs$core$ISeq$;
var inst_4984 = (cljs.core.PROTOCOL_SENTINEL === inst_4983);
var inst_4985 = ((inst_4982) || (inst_4984));
var state_5033__$1 = state_5033;
if(cljs.core.truth_(inst_4985)){
var statearr_5056_5161 = state_5033__$1;
(statearr_5056_5161[(1)] = (20));

} else {
var statearr_5057_5162 = state_5033__$1;
(statearr_5057_5162[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (3))){
var inst_5031 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5033__$1,inst_5031);
} else {
if((state_val_5034 === (12))){
var inst_4921 = (state_5033[(7)]);
var inst_5022 = app.t2.main.update.call(null,inst_4921);
var inst_4921__$1 = inst_5022;
var state_5033__$1 = (function (){var statearr_5058 = state_5033;
(statearr_5058[(7)] = inst_4921__$1);

return statearr_5058;
})();
var statearr_5059_5163 = state_5033__$1;
(statearr_5059_5163[(2)] = null);

(statearr_5059_5163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (2))){
var inst_4921 = (state_5033[(7)]);
var inst_4923 = app.t2.main.model = inst_4921;
var state_5033__$1 = (function (){var statearr_5060 = state_5033;
(statearr_5060[(11)] = inst_4923);

return statearr_5060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5033__$1,(4),app.t2.main.evt);
} else {
if((state_val_5034 === (23))){
var inst_4976 = (state_5033[(8)]);
var inst_4994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4976);
var state_5033__$1 = state_5033;
var statearr_5061_5164 = state_5033__$1;
(statearr_5061_5164[(2)] = inst_4994);

(statearr_5061_5164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (19))){
var inst_4992 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
if(cljs.core.truth_(inst_4992)){
var statearr_5062_5165 = state_5033__$1;
(statearr_5062_5165[(1)] = (23));

} else {
var statearr_5063_5166 = state_5033__$1;
(statearr_5063_5166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (11))){
var inst_4925 = (state_5033[(9)]);
var inst_4967 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_4925);
var inst_4968 = cljs.core.range.call(null,(9));
var inst_4969 = cljs.core.zipmap.call(null,app.t2.main.keys,inst_4968);
var inst_4970 = cljs.core.get.call(null,inst_4969,inst_4967);
var inst_4971 = cljs.core.partial.call(null,cljs.core._EQ_,inst_4967);
var inst_4972 = cljs.core.some.call(null,inst_4971,app.t2.main.keys);
var state_5033__$1 = (function (){var statearr_5064 = state_5033;
(statearr_5064[(12)] = inst_4970);

return statearr_5064;
})();
if(cljs.core.truth_(inst_4972)){
var statearr_5065_5167 = state_5033__$1;
(statearr_5065_5167[(1)] = (14));

} else {
var statearr_5066_5168 = state_5033__$1;
(statearr_5066_5168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (9))){
var inst_4929 = (state_5033[(10)]);
var inst_4965 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_4929);
var state_5033__$1 = state_5033;
if(inst_4965){
var statearr_5067_5169 = state_5033__$1;
(statearr_5067_5169[(1)] = (11));

} else {
var statearr_5068_5170 = state_5033__$1;
(statearr_5068_5170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (5))){
var inst_4921 = (state_5033[(7)]);
var inst_4932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4933 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_4934 = (new cljs.core.PersistentVector(null,1,(5),inst_4932,inst_4933,null));
var inst_4935 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_4936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4937 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_4921);
var inst_4938 = cljs.core.nth.call(null,inst_4937,(2));
var inst_4939 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_4921);
var inst_4940 = cljs.core.nth.call(null,inst_4939,(3));
var inst_4941 = [inst_4938,inst_4940];
var inst_4942 = (new cljs.core.PersistentVector(null,2,(5),inst_4936,inst_4941,null));
var inst_4943 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_4942];
var inst_4944 = cljs.core.PersistentHashMap.fromArrays(inst_4935,inst_4943);
var inst_4945 = cljs.core.update_in.call(null,inst_4921,inst_4934,cljs.core.conj,inst_4944);
var inst_4921__$1 = inst_4945;
var state_5033__$1 = (function (){var statearr_5069 = state_5033;
(statearr_5069[(7)] = inst_4921__$1);

return statearr_5069;
})();
var statearr_5070_5171 = state_5033__$1;
(statearr_5070_5171[(2)] = null);

(statearr_5070_5171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (14))){
var inst_4970 = (state_5033[(12)]);
var inst_4976 = (state_5033[(8)]);
var inst_4921 = (state_5033[(7)]);
var inst_4975 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_4921);
var inst_4976__$1 = cljs.core.nth.call(null,inst_4975,inst_4970);
var inst_4978 = (inst_4976__$1 == null);
var inst_4979 = cljs.core.not.call(null,inst_4978);
var state_5033__$1 = (function (){var statearr_5071 = state_5033;
(statearr_5071[(8)] = inst_4976__$1);

return statearr_5071;
})();
if(inst_4979){
var statearr_5072_5172 = state_5033__$1;
(statearr_5072_5172[(1)] = (17));

} else {
var statearr_5073_5173 = state_5033__$1;
(statearr_5073_5173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (26))){
var inst_4921 = (state_5033[(7)]);
var state_5033__$1 = state_5033;
var statearr_5074_5174 = state_5033__$1;
(statearr_5074_5174[(2)] = inst_4921);

(statearr_5074_5174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (16))){
var inst_5019 = (state_5033[(2)]);
var inst_4921 = inst_5019;
var state_5033__$1 = (function (){var statearr_5075 = state_5033;
(statearr_5075[(7)] = inst_4921);

return statearr_5075;
})();
var statearr_5076_5175 = state_5033__$1;
(statearr_5076_5175[(2)] = null);

(statearr_5076_5175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (30))){
var state_5033__$1 = state_5033;
var statearr_5077_5176 = state_5033__$1;
(statearr_5077_5176[(2)] = null);

(statearr_5077_5176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (10))){
var inst_5027 = (state_5033[(2)]);
var state_5033__$1 = state_5033;
var statearr_5078_5177 = state_5033__$1;
(statearr_5078_5177[(2)] = inst_5027);

(statearr_5078_5177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (18))){
var state_5033__$1 = state_5033;
var statearr_5079_5178 = state_5033__$1;
(statearr_5079_5178[(2)] = false);

(statearr_5079_5178[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5034 === (8))){
var inst_4921 = (state_5033[(7)]);
var inst_4950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4951 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_4952 = (new cljs.core.PersistentVector(null,1,(5),inst_4950,inst_4951,null));
var inst_4953 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_4954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4955 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_4921);
var inst_4956 = cljs.core.rand_int.call(null,(9));
var inst_4957 = cljs.core.nth.call(null,inst_4955,inst_4956);
var inst_4958 = [inst_4957];
var inst_4959 = (new cljs.core.PersistentVector(null,1,(5),inst_4954,inst_4958,null));
var inst_4960 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_4959];
var inst_4961 = cljs.core.PersistentHashMap.fromArrays(inst_4953,inst_4960);
var inst_4962 = cljs.core.update_in.call(null,inst_4921,inst_4952,cljs.core.conj,inst_4961);
var inst_4921__$1 = inst_4962;
var state_5033__$1 = (function (){var statearr_5080 = state_5033;
(statearr_5080[(7)] = inst_4921__$1);

return statearr_5080;
})();
var statearr_5081_5179 = state_5033__$1;
(statearr_5081_5179[(2)] = null);

(statearr_5081_5179[(1)] = (2));


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
});})(c__2882__auto___5142,firstTarget_5141))
;
return ((function (switch__2792__auto__,c__2882__auto___5142,firstTarget_5141){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5082 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5082[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_5082[(1)] = (1));

return statearr_5082;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_5033){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5083){if((e5083 instanceof Object)){
var ex__2796__auto__ = e5083;
var statearr_5084_5180 = state_5033;
(statearr_5084_5180[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5181 = state_5033;
state_5033 = G__5181;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_5033){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_5033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5142,firstTarget_5141))
})();
var state__2884__auto__ = (function (){var statearr_5085 = f__2883__auto__.call(null);
(statearr_5085[(6)] = c__2882__auto___5142);

return statearr_5085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5142,firstTarget_5141))
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
return (function (state_5092){
var state_val_5093 = (state_5092[(1)]);
if((state_val_5093 === (1))){
var inst_5086 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5087 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_5088 = cljs.core.PersistentHashMap.fromArrays(inst_5086,inst_5087);
var state_5092__$1 = state_5092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5092__$1,(2),app.t2.main.evt,inst_5088);
} else {
if((state_val_5093 === (2))){
var inst_5090 = (state_5092[(2)]);
var state_5092__$1 = state_5092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5092__$1,inst_5090);
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
var statearr_5094 = [null,null,null,null,null,null,null];
(statearr_5094[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_5094[(1)] = (1));

return statearr_5094;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_5092){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5095){if((e5095 instanceof Object)){
var ex__2796__auto__ = e5095;
var statearr_5096_5182 = state_5092;
(statearr_5096_5182[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5183 = state_5092;
state_5092 = G__5183;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_5092){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_5092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,txt,p5))
})();
var state__2884__auto__ = (function (){var statearr_5097 = f__2883__auto__.call(null);
(statearr_5097[(6)] = c__2882__auto__);

return statearr_5097;
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
return (function (state_5105){
var state_val_5106 = (state_5105[(1)]);
if((state_val_5106 === (1))){
var inst_5098 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_5099 = p5.key;
var inst_5100 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_5099];
var inst_5101 = cljs.core.PersistentHashMap.fromArrays(inst_5098,inst_5100);
var state_5105__$1 = state_5105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5105__$1,(2),app.t2.main.evt,inst_5101);
} else {
if((state_val_5106 === (2))){
var inst_5103 = (state_5105[(2)]);
var state_5105__$1 = state_5105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5105__$1,inst_5103);
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
var statearr_5107 = [null,null,null,null,null,null,null];
(statearr_5107[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_5107[(1)] = (1));

return statearr_5107;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_5105){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5108){if((e5108 instanceof Object)){
var ex__2796__auto__ = e5108;
var statearr_5109_5184 = state_5105;
(statearr_5109_5184[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5185 = state_5105;
state_5105 = G__5185;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_5105){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_5105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,p5,setup))
})();
var state__2884__auto__ = (function (){var statearr_5110 = f__2883__auto__.call(null);
(statearr_5110[(6)] = c__2882__auto__);

return statearr_5110;
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
cljs.core.dorun.call(null,(function (){var seq__5111 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__5112 = null;
var count__5113 = (0);
var i__5114 = (0);
while(true){
if((i__5114 < count__5113)){
var vec__5115 = cljs.core._nth.call(null,chunk__5112,i__5114);
var idx = cljs.core.nth.call(null,vec__5115,(0),null);
var map__5118 = cljs.core.nth.call(null,vec__5115,(1),null);
var map__5118__$1 = ((((!((map__5118 == null)))?(((((map__5118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5118):map__5118);
var t = map__5118__$1;
var pos = cljs.core.get.call(null,map__5118__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__5118__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__5120_5186 = pos;
var x_5187 = cljs.core.nth.call(null,vec__5120_5186,(0),null);
var y_5188 = cljs.core.nth.call(null,vec__5120_5186,(1),null);
var vec__5123_5189 = origin;
var ox_5190 = cljs.core.nth.call(null,vec__5123_5189,(0),null);
var oy_5191 = cljs.core.nth.call(null,vec__5123_5189,(1),null);
var showKey_5192 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_5187,y_5188,(50),(50));

p5.rect((ox_5190 - (25)),(oy_5191 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_5192,ox_5190,oy_5191);


var G__5193 = seq__5111;
var G__5194 = chunk__5112;
var G__5195 = count__5113;
var G__5196 = (i__5114 + (1));
seq__5111 = G__5193;
chunk__5112 = G__5194;
count__5113 = G__5195;
i__5114 = G__5196;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5111);
if(temp__5457__auto__){
var seq__5111__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5111__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5111__$1);
var G__5197 = cljs.core.chunk_rest.call(null,seq__5111__$1);
var G__5198 = c__4319__auto__;
var G__5199 = cljs.core.count.call(null,c__4319__auto__);
var G__5200 = (0);
seq__5111 = G__5197;
chunk__5112 = G__5198;
count__5113 = G__5199;
i__5114 = G__5200;
continue;
} else {
var vec__5126 = cljs.core.first.call(null,seq__5111__$1);
var idx = cljs.core.nth.call(null,vec__5126,(0),null);
var map__5129 = cljs.core.nth.call(null,vec__5126,(1),null);
var map__5129__$1 = ((((!((map__5129 == null)))?(((((map__5129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5129):map__5129);
var t = map__5129__$1;
var pos = cljs.core.get.call(null,map__5129__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__5129__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__5131_5201 = pos;
var x_5202 = cljs.core.nth.call(null,vec__5131_5201,(0),null);
var y_5203 = cljs.core.nth.call(null,vec__5131_5201,(1),null);
var vec__5134_5204 = origin;
var ox_5205 = cljs.core.nth.call(null,vec__5134_5204,(0),null);
var oy_5206 = cljs.core.nth.call(null,vec__5134_5204,(1),null);
var showKey_5207 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_5202,y_5203,(50),(50));

p5.rect((ox_5205 - (25)),(oy_5206 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_5207,ox_5205,oy_5206);


var G__5208 = cljs.core.next.call(null,seq__5111__$1);
var G__5209 = null;
var G__5210 = (0);
var G__5211 = (0);
seq__5111 = G__5208;
chunk__5112 = G__5209;
count__5113 = G__5210;
i__5114 = G__5211;
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
