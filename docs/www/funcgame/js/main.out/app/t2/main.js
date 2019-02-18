// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__9105){
var map__9106 = p__9105;
var map__9106__$1 = ((((!((map__9106 == null)))?(((((map__9106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9106):map__9106);
var info = map__9106__$1;
var pos = cljs.core.get.call(null,map__9106__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info);
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__9108,target){
var map__9109 = p__9108;
var map__9109__$1 = ((((!((map__9109 == null)))?(((((map__9109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9109):map__9109);
var ctx = map__9109__$1;
var time = cljs.core.get.call(null,map__9109__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858)))){
return target;
} else {
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__9111,target){
var map__9112 = p__9111;
var map__9112__$1 = ((((!((map__9112 == null)))?(((((map__9112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9112):map__9112);
var ctx = map__9112__$1;
var time = cljs.core.get.call(null,map__9112__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__9114 = cljs.core._EQ_;
var expr__9115 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(pred__9114.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__9115))){
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
if(cljs.core.truth_(pred__9114.call(null,new cljs.core.Keyword(null,"goback","goback",1168265173),expr__9115))){
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
if(cljs.core.truth_(pred__9114.call(null,new cljs.core.Keyword(null,"wait","wait",-260664777),expr__9115))){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null));
} else {
return target;
}
} else {
if(cljs.core.truth_(pred__9114.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),expr__9115))){
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
var pred__9117 = cljs.core._EQ_;
var expr__9118 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__9117.call(null,new cljs.core.Keyword(null,"go","go",-146946655),expr__9118))){
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
return (function (state_9126){
var state_val_9127 = (state_9126[(1)]);
if((state_val_9127 === (1))){
var inst_9120 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9121 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_9122 = cljs.core.PersistentHashMap.fromArrays(inst_9120,inst_9121);
var state_9126__$1 = state_9126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9126__$1,(2),app.t2.main.evt,inst_9122);
} else {
if((state_val_9127 === (2))){
var inst_9124 = (state_9126[(2)]);
var state_9126__$1 = state_9126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9126__$1,inst_9124);
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
var statearr_9128 = [null,null,null,null,null,null,null];
(statearr_9128[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_9128[(1)] = (1));

return statearr_9128;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_9126){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9129){if((e9129 instanceof Object)){
var ex__2796__auto__ = e9129;
var statearr_9130_9437 = state_9126;
(statearr_9130_9437[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9438 = state_9126;
state_9126 = G__9438;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_9126){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_9126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_9131 = f__2883__auto__.call(null);
(statearr_9131[(6)] = c__2882__auto__);

return statearr_9131;
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
return (function (state_9138){
var state_val_9139 = (state_9138[(1)]);
if((state_val_9139 === (1))){
var inst_9132 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9133 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_9134 = cljs.core.PersistentHashMap.fromArrays(inst_9132,inst_9133);
var state_9138__$1 = state_9138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9138__$1,(2),app.t2.main.evt,inst_9134);
} else {
if((state_val_9139 === (2))){
var inst_9136 = (state_9138[(2)]);
var state_9138__$1 = state_9138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9138__$1,inst_9136);
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
var statearr_9140 = [null,null,null,null,null,null,null];
(statearr_9140[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_9140[(1)] = (1));

return statearr_9140;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_9138){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9141){if((e9141 instanceof Object)){
var ex__2796__auto__ = e9141;
var statearr_9142_9439 = state_9138;
(statearr_9142_9439[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9440 = state_9138;
state_9138 = G__9440;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_9138){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_9138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_9143 = f__2883__auto__.call(null);
(statearr_9143[(6)] = c__2882__auto__);

return statearr_9143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(1000));

var firstTarget_9441 = app.t2.main.targetCreate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__2882__auto___9442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___9442,firstTarget_9441){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___9442,firstTarget_9441){
return (function (state_9333){
var state_val_9334 = (state_9333[(1)]);
if((state_val_9334 === (7))){
var inst_9329 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9335_9443 = state_9333__$1;
(statearr_9335_9443[(2)] = inst_9329);

(statearr_9335_9443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (20))){
var state_9333__$1 = state_9333;
var statearr_9336_9444 = state_9333__$1;
(statearr_9336_9444[(2)] = true);

(statearr_9336_9444[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (27))){
var inst_9221 = (state_9333[(7)]);
var inst_9307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9308 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_9309 = (new cljs.core.PersistentVector(null,1,(5),inst_9307,inst_9308,null));
var inst_9310 = cljs.core.update_in.call(null,inst_9221,inst_9309,cljs.core.inc);
var state_9333__$1 = state_9333;
var statearr_9337_9445 = state_9333__$1;
(statearr_9337_9445[(2)] = inst_9310);

(statearr_9337_9445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (1))){
var inst_9144 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_9145 = (new Date());
var inst_9146 = inst_9145.getTime();
var inst_9147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9148 = [firstTarget_9441];
var inst_9149 = (new cljs.core.PersistentVector(null,1,(5),inst_9147,inst_9148,null));
var inst_9150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9151 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9153 = [(200),(100)];
var inst_9154 = (new cljs.core.PersistentVector(null,2,(5),inst_9152,inst_9153,null));
var inst_9155 = [inst_9154];
var inst_9156 = cljs.core.PersistentHashMap.fromArrays(inst_9151,inst_9155);
var inst_9157 = app.t2.main.targetCreate.call(null,inst_9156);
var inst_9158 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9159 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9160 = [(300),(100)];
var inst_9161 = (new cljs.core.PersistentVector(null,2,(5),inst_9159,inst_9160,null));
var inst_9162 = [inst_9161];
var inst_9163 = cljs.core.PersistentHashMap.fromArrays(inst_9158,inst_9162);
var inst_9164 = app.t2.main.targetCreate.call(null,inst_9163);
var inst_9165 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9167 = [(100),(200)];
var inst_9168 = (new cljs.core.PersistentVector(null,2,(5),inst_9166,inst_9167,null));
var inst_9169 = [inst_9168];
var inst_9170 = cljs.core.PersistentHashMap.fromArrays(inst_9165,inst_9169);
var inst_9171 = app.t2.main.targetCreate.call(null,inst_9170);
var inst_9172 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9174 = [(200),(200)];
var inst_9175 = (new cljs.core.PersistentVector(null,2,(5),inst_9173,inst_9174,null));
var inst_9176 = [inst_9175];
var inst_9177 = cljs.core.PersistentHashMap.fromArrays(inst_9172,inst_9176);
var inst_9178 = app.t2.main.targetCreate.call(null,inst_9177);
var inst_9179 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9181 = [(300),(200)];
var inst_9182 = (new cljs.core.PersistentVector(null,2,(5),inst_9180,inst_9181,null));
var inst_9183 = [inst_9182];
var inst_9184 = cljs.core.PersistentHashMap.fromArrays(inst_9179,inst_9183);
var inst_9185 = app.t2.main.targetCreate.call(null,inst_9184);
var inst_9186 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9188 = [(100),(300)];
var inst_9189 = (new cljs.core.PersistentVector(null,2,(5),inst_9187,inst_9188,null));
var inst_9190 = [inst_9189];
var inst_9191 = cljs.core.PersistentHashMap.fromArrays(inst_9186,inst_9190);
var inst_9192 = app.t2.main.targetCreate.call(null,inst_9191);
var inst_9193 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9195 = [(200),(300)];
var inst_9196 = (new cljs.core.PersistentVector(null,2,(5),inst_9194,inst_9195,null));
var inst_9197 = [inst_9196];
var inst_9198 = cljs.core.PersistentHashMap.fromArrays(inst_9193,inst_9197);
var inst_9199 = app.t2.main.targetCreate.call(null,inst_9198);
var inst_9200 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_9201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9202 = [(300),(300)];
var inst_9203 = (new cljs.core.PersistentVector(null,2,(5),inst_9201,inst_9202,null));
var inst_9204 = [inst_9203];
var inst_9205 = cljs.core.PersistentHashMap.fromArrays(inst_9200,inst_9204);
var inst_9206 = app.t2.main.targetCreate.call(null,inst_9205);
var inst_9207 = [inst_9157,inst_9164,inst_9171,inst_9178,inst_9185,inst_9192,inst_9199,inst_9206];
var inst_9208 = (new cljs.core.PersistentVector(null,8,(5),inst_9150,inst_9207,null));
var inst_9209 = cljs.core.concat.call(null,inst_9149,inst_9208);
var inst_9210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9211 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9213 = [firstTarget_9441];
var inst_9214 = (new cljs.core.PersistentVector(null,1,(5),inst_9212,inst_9213,null));
var inst_9215 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9214];
var inst_9216 = cljs.core.PersistentHashMap.fromArrays(inst_9211,inst_9215);
var inst_9217 = [inst_9216];
var inst_9218 = (new cljs.core.PersistentVector(null,1,(5),inst_9210,inst_9217,null));
var inst_9219 = [inst_9146,inst_9209,inst_9218,(0)];
var inst_9220 = cljs.core.PersistentHashMap.fromArrays(inst_9144,inst_9219);
var inst_9221 = inst_9220;
var state_9333__$1 = (function (){var statearr_9338 = state_9333;
(statearr_9338[(7)] = inst_9221);

return statearr_9338;
})();
var statearr_9339_9446 = state_9333__$1;
(statearr_9339_9446[(2)] = null);

(statearr_9339_9446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (24))){
var inst_9276 = (state_9333[(8)]);
var state_9333__$1 = state_9333;
var statearr_9340_9447 = state_9333__$1;
(statearr_9340_9447[(2)] = inst_9276);

(statearr_9340_9447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (4))){
var inst_9225 = (state_9333[(9)]);
var inst_9229 = (state_9333[(10)]);
var inst_9225__$1 = (state_9333[(2)]);
var inst_9229__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_9225__$1);
var inst_9230 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_9229__$1);
var state_9333__$1 = (function (){var statearr_9341 = state_9333;
(statearr_9341[(9)] = inst_9225__$1);

(statearr_9341[(10)] = inst_9229__$1);

return statearr_9341;
})();
if(inst_9230){
var statearr_9342_9448 = state_9333__$1;
(statearr_9342_9448[(1)] = (5));

} else {
var statearr_9343_9449 = state_9333__$1;
(statearr_9343_9449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (15))){
var state_9333__$1 = state_9333;
var statearr_9344_9450 = state_9333__$1;
(statearr_9344_9450[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (21))){
var state_9333__$1 = state_9333;
var statearr_9346_9451 = state_9333__$1;
(statearr_9346_9451[(2)] = false);

(statearr_9346_9451[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (31))){
var inst_9317 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9347_9452 = state_9333__$1;
(statearr_9347_9452[(2)] = inst_9317);

(statearr_9347_9452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (13))){
var inst_9325 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9348_9453 = state_9333__$1;
(statearr_9348_9453[(2)] = inst_9325);

(statearr_9348_9453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (22))){
var inst_9289 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9349_9454 = state_9333__$1;
(statearr_9349_9454[(2)] = inst_9289);

(statearr_9349_9454[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (29))){
var inst_9221 = (state_9333[(7)]);
var state_9333__$1 = state_9333;
var statearr_9350_9455 = state_9333__$1;
(statearr_9350_9455[(2)] = inst_9221);

(statearr_9350_9455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (6))){
var inst_9229 = (state_9333[(10)]);
var inst_9248 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_9229);
var state_9333__$1 = state_9333;
if(inst_9248){
var statearr_9351_9456 = state_9333__$1;
(statearr_9351_9456[(1)] = (8));

} else {
var statearr_9352_9457 = state_9333__$1;
(statearr_9352_9457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (28))){
var inst_9312 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9353_9458 = state_9333__$1;
(statearr_9353_9458[(2)] = inst_9312);

(statearr_9353_9458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (25))){
var inst_9297 = (state_9333[(2)]);
var inst_9298 = cljs.core.get.call(null,inst_9297,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_9299 = cljs.core.partial.call(null,cljs.core._EQ_,inst_9298);
var inst_9300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9301 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_9302 = (new cljs.core.PersistentVector(null,2,(5),inst_9300,inst_9301,null));
var inst_9303 = cljs.core.some.call(null,inst_9299,inst_9302);
var inst_9304 = cljs.core.not.call(null,inst_9303);
var state_9333__$1 = state_9333;
if(inst_9304){
var statearr_9354_9459 = state_9333__$1;
(statearr_9354_9459[(1)] = (26));

} else {
var statearr_9355_9460 = state_9333__$1;
(statearr_9355_9460[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (17))){
var inst_9276 = (state_9333[(8)]);
var inst_9281 = inst_9276.cljs$lang$protocol_mask$partition0$;
var inst_9282 = (inst_9281 & (64));
var inst_9283 = inst_9276.cljs$core$ISeq$;
var inst_9284 = (cljs.core.PROTOCOL_SENTINEL === inst_9283);
var inst_9285 = ((inst_9282) || (inst_9284));
var state_9333__$1 = state_9333;
if(cljs.core.truth_(inst_9285)){
var statearr_9356_9461 = state_9333__$1;
(statearr_9356_9461[(1)] = (20));

} else {
var statearr_9357_9462 = state_9333__$1;
(statearr_9357_9462[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (3))){
var inst_9331 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9333__$1,inst_9331);
} else {
if((state_val_9334 === (12))){
var inst_9221 = (state_9333[(7)]);
var inst_9322 = app.t2.main.update.call(null,inst_9221);
var inst_9221__$1 = inst_9322;
var state_9333__$1 = (function (){var statearr_9358 = state_9333;
(statearr_9358[(7)] = inst_9221__$1);

return statearr_9358;
})();
var statearr_9359_9463 = state_9333__$1;
(statearr_9359_9463[(2)] = null);

(statearr_9359_9463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (2))){
var inst_9221 = (state_9333[(7)]);
var inst_9223 = app.t2.main.model = inst_9221;
var state_9333__$1 = (function (){var statearr_9360 = state_9333;
(statearr_9360[(11)] = inst_9223);

return statearr_9360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9333__$1,(4),app.t2.main.evt);
} else {
if((state_val_9334 === (23))){
var inst_9276 = (state_9333[(8)]);
var inst_9294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9276);
var state_9333__$1 = state_9333;
var statearr_9361_9464 = state_9333__$1;
(statearr_9361_9464[(2)] = inst_9294);

(statearr_9361_9464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (19))){
var inst_9292 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
if(cljs.core.truth_(inst_9292)){
var statearr_9362_9465 = state_9333__$1;
(statearr_9362_9465[(1)] = (23));

} else {
var statearr_9363_9466 = state_9333__$1;
(statearr_9363_9466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (11))){
var inst_9225 = (state_9333[(9)]);
var inst_9267 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_9225);
var inst_9268 = cljs.core.range.call(null,(9));
var inst_9269 = cljs.core.zipmap.call(null,app.t2.main.keys,inst_9268);
var inst_9270 = cljs.core.get.call(null,inst_9269,inst_9267);
var inst_9271 = cljs.core.partial.call(null,cljs.core._EQ_,inst_9267);
var inst_9272 = cljs.core.some.call(null,inst_9271,app.t2.main.keys);
var state_9333__$1 = (function (){var statearr_9364 = state_9333;
(statearr_9364[(12)] = inst_9270);

return statearr_9364;
})();
if(cljs.core.truth_(inst_9272)){
var statearr_9365_9467 = state_9333__$1;
(statearr_9365_9467[(1)] = (14));

} else {
var statearr_9366_9468 = state_9333__$1;
(statearr_9366_9468[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (9))){
var inst_9229 = (state_9333[(10)]);
var inst_9265 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9229);
var state_9333__$1 = state_9333;
if(inst_9265){
var statearr_9367_9469 = state_9333__$1;
(statearr_9367_9469[(1)] = (11));

} else {
var statearr_9368_9470 = state_9333__$1;
(statearr_9368_9470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (5))){
var inst_9221 = (state_9333[(7)]);
var inst_9232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9233 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_9234 = (new cljs.core.PersistentVector(null,1,(5),inst_9232,inst_9233,null));
var inst_9235 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9237 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9221);
var inst_9238 = cljs.core.nth.call(null,inst_9237,(2));
var inst_9239 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9221);
var inst_9240 = cljs.core.nth.call(null,inst_9239,(3));
var inst_9241 = [inst_9238,inst_9240];
var inst_9242 = (new cljs.core.PersistentVector(null,2,(5),inst_9236,inst_9241,null));
var inst_9243 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9242];
var inst_9244 = cljs.core.PersistentHashMap.fromArrays(inst_9235,inst_9243);
var inst_9245 = cljs.core.update_in.call(null,inst_9221,inst_9234,cljs.core.conj,inst_9244);
var inst_9221__$1 = inst_9245;
var state_9333__$1 = (function (){var statearr_9369 = state_9333;
(statearr_9369[(7)] = inst_9221__$1);

return statearr_9369;
})();
var statearr_9370_9471 = state_9333__$1;
(statearr_9370_9471[(2)] = null);

(statearr_9370_9471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (14))){
var inst_9221 = (state_9333[(7)]);
var inst_9270 = (state_9333[(12)]);
var inst_9276 = (state_9333[(8)]);
var inst_9275 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9221);
var inst_9276__$1 = cljs.core.nth.call(null,inst_9275,inst_9270);
var inst_9278 = (inst_9276__$1 == null);
var inst_9279 = cljs.core.not.call(null,inst_9278);
var state_9333__$1 = (function (){var statearr_9371 = state_9333;
(statearr_9371[(8)] = inst_9276__$1);

return statearr_9371;
})();
if(inst_9279){
var statearr_9372_9472 = state_9333__$1;
(statearr_9372_9472[(1)] = (17));

} else {
var statearr_9373_9473 = state_9333__$1;
(statearr_9373_9473[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (26))){
var inst_9221 = (state_9333[(7)]);
var state_9333__$1 = state_9333;
var statearr_9374_9474 = state_9333__$1;
(statearr_9374_9474[(2)] = inst_9221);

(statearr_9374_9474[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (16))){
var inst_9319 = (state_9333[(2)]);
var inst_9221 = inst_9319;
var state_9333__$1 = (function (){var statearr_9375 = state_9333;
(statearr_9375[(7)] = inst_9221);

return statearr_9375;
})();
var statearr_9376_9475 = state_9333__$1;
(statearr_9376_9475[(2)] = null);

(statearr_9376_9475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (30))){
var state_9333__$1 = state_9333;
var statearr_9377_9476 = state_9333__$1;
(statearr_9377_9476[(2)] = null);

(statearr_9377_9476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (10))){
var inst_9327 = (state_9333[(2)]);
var state_9333__$1 = state_9333;
var statearr_9378_9477 = state_9333__$1;
(statearr_9378_9477[(2)] = inst_9327);

(statearr_9378_9477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (18))){
var state_9333__$1 = state_9333;
var statearr_9379_9478 = state_9333__$1;
(statearr_9379_9478[(2)] = false);

(statearr_9379_9478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9334 === (8))){
var inst_9221 = (state_9333[(7)]);
var inst_9250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9251 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_9252 = (new cljs.core.PersistentVector(null,1,(5),inst_9250,inst_9251,null));
var inst_9253 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_9254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9255 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_9221);
var inst_9256 = cljs.core.rand_int.call(null,(9));
var inst_9257 = cljs.core.nth.call(null,inst_9255,inst_9256);
var inst_9258 = [inst_9257];
var inst_9259 = (new cljs.core.PersistentVector(null,1,(5),inst_9254,inst_9258,null));
var inst_9260 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_9259];
var inst_9261 = cljs.core.PersistentHashMap.fromArrays(inst_9253,inst_9260);
var inst_9262 = cljs.core.update_in.call(null,inst_9221,inst_9252,cljs.core.conj,inst_9261);
var inst_9221__$1 = inst_9262;
var state_9333__$1 = (function (){var statearr_9380 = state_9333;
(statearr_9380[(7)] = inst_9221__$1);

return statearr_9380;
})();
var statearr_9381_9479 = state_9333__$1;
(statearr_9381_9479[(2)] = null);

(statearr_9381_9479[(1)] = (2));


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
});})(c__2882__auto___9442,firstTarget_9441))
;
return ((function (switch__2792__auto__,c__2882__auto___9442,firstTarget_9441){
return (function() {
var app$t2$main$main_$_state_machine__2793__auto__ = null;
var app$t2$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_9382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9382[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_9382[(1)] = (1));

return statearr_9382;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_9333){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9383){if((e9383 instanceof Object)){
var ex__2796__auto__ = e9383;
var statearr_9384_9480 = state_9333;
(statearr_9384_9480[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9481 = state_9333;
state_9333 = G__9481;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_9333){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_9333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___9442,firstTarget_9441))
})();
var state__2884__auto__ = (function (){var statearr_9385 = f__2883__auto__.call(null);
(statearr_9385[(6)] = c__2882__auto___9442);

return statearr_9385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___9442,firstTarget_9441))
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
return (function (state_9392){
var state_val_9393 = (state_9392[(1)]);
if((state_val_9393 === (1))){
var inst_9386 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_9387 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_9388 = cljs.core.PersistentHashMap.fromArrays(inst_9386,inst_9387);
var state_9392__$1 = state_9392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9392__$1,(2),app.t2.main.evt,inst_9388);
} else {
if((state_val_9393 === (2))){
var inst_9390 = (state_9392[(2)]);
var state_9392__$1 = state_9392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9392__$1,inst_9390);
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
var statearr_9394 = [null,null,null,null,null,null,null];
(statearr_9394[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_9394[(1)] = (1));

return statearr_9394;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_9392){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9395){if((e9395 instanceof Object)){
var ex__2796__auto__ = e9395;
var statearr_9396_9482 = state_9392;
(statearr_9396_9482[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9483 = state_9392;
state_9392 = G__9483;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_9392){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_9392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,txt,p5))
})();
var state__2884__auto__ = (function (){var statearr_9397 = f__2883__auto__.call(null);
(statearr_9397[(6)] = c__2882__auto__);

return statearr_9397;
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
return (function (state_9405){
var state_val_9406 = (state_9405[(1)]);
if((state_val_9406 === (1))){
var inst_9398 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_9399 = p5.key;
var inst_9400 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_9399];
var inst_9401 = cljs.core.PersistentHashMap.fromArrays(inst_9398,inst_9400);
var state_9405__$1 = state_9405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9405__$1,(2),app.t2.main.evt,inst_9401);
} else {
if((state_val_9406 === (2))){
var inst_9403 = (state_9405[(2)]);
var state_9405__$1 = state_9405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9405__$1,inst_9403);
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
var statearr_9407 = [null,null,null,null,null,null,null];
(statearr_9407[(0)] = app$t2$main$main_$_state_machine__2793__auto__);

(statearr_9407[(1)] = (1));

return statearr_9407;
});
var app$t2$main$main_$_state_machine__2793__auto____1 = (function (state_9405){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_9405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e9408){if((e9408 instanceof Object)){
var ex__2796__auto__ = e9408;
var statearr_9409_9484 = state_9405;
(statearr_9409_9484[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9485 = state_9405;
state_9405 = G__9485;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__2793__auto__ = function(state_9405){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__2793__auto____1.call(this,state_9405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__2793__auto____0;
app$t2$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__2793__auto____1;
return app$t2$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,p5,setup))
})();
var state__2884__auto__ = (function (){var statearr_9410 = f__2883__auto__.call(null);
(statearr_9410[(6)] = c__2882__auto__);

return statearr_9410;
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
cljs.core.dorun.call(null,(function (){var seq__9411 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__9412 = null;
var count__9413 = (0);
var i__9414 = (0);
while(true){
if((i__9414 < count__9413)){
var vec__9415 = cljs.core._nth.call(null,chunk__9412,i__9414);
var idx = cljs.core.nth.call(null,vec__9415,(0),null);
var map__9418 = cljs.core.nth.call(null,vec__9415,(1),null);
var map__9418__$1 = ((((!((map__9418 == null)))?(((((map__9418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9418):map__9418);
var t = map__9418__$1;
var pos = cljs.core.get.call(null,map__9418__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__9418__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__9420_9486 = pos;
var x_9487 = cljs.core.nth.call(null,vec__9420_9486,(0),null);
var y_9488 = cljs.core.nth.call(null,vec__9420_9486,(1),null);
var vec__9423_9489 = origin;
var ox_9490 = cljs.core.nth.call(null,vec__9423_9489,(0),null);
var oy_9491 = cljs.core.nth.call(null,vec__9423_9489,(1),null);
var showKey_9492 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_9487,y_9488,(50),(50));

p5.rect((ox_9490 - (25)),(oy_9491 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_9492,ox_9490,oy_9491);


var G__9493 = seq__9411;
var G__9494 = chunk__9412;
var G__9495 = count__9413;
var G__9496 = (i__9414 + (1));
seq__9411 = G__9493;
chunk__9412 = G__9494;
count__9413 = G__9495;
i__9414 = G__9496;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9411);
if(temp__5457__auto__){
var seq__9411__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9411__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9411__$1);
var G__9497 = cljs.core.chunk_rest.call(null,seq__9411__$1);
var G__9498 = c__4319__auto__;
var G__9499 = cljs.core.count.call(null,c__4319__auto__);
var G__9500 = (0);
seq__9411 = G__9497;
chunk__9412 = G__9498;
count__9413 = G__9499;
i__9414 = G__9500;
continue;
} else {
var vec__9426 = cljs.core.first.call(null,seq__9411__$1);
var idx = cljs.core.nth.call(null,vec__9426,(0),null);
var map__9429 = cljs.core.nth.call(null,vec__9426,(1),null);
var map__9429__$1 = ((((!((map__9429 == null)))?(((((map__9429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9429):map__9429);
var t = map__9429__$1;
var pos = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__9431_9501 = pos;
var x_9502 = cljs.core.nth.call(null,vec__9431_9501,(0),null);
var y_9503 = cljs.core.nth.call(null,vec__9431_9501,(1),null);
var vec__9434_9504 = origin;
var ox_9505 = cljs.core.nth.call(null,vec__9434_9504,(0),null);
var oy_9506 = cljs.core.nth.call(null,vec__9434_9504,(1),null);
var showKey_9507 = cljs.core.nth.call(null,app.t2.main.keys,idx);
p5.fill((255));

p5.ellipse(x_9502,y_9503,(50),(50));

p5.rect((ox_9505 - (25)),(oy_9506 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_9507,ox_9505,oy_9506);


var G__9508 = cljs.core.next.call(null,seq__9411__$1);
var G__9509 = null;
var G__9510 = (0);
var G__9511 = (0);
seq__9411 = G__9508;
chunk__9412 = G__9509;
count__9413 = G__9510;
i__9414 = G__9511;
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
