goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__36453){
var map__36454 = p__36453;
var map__36454__$1 = (((((!((map__36454 == null))))?(((((map__36454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36454):map__36454);
var info = map__36454__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36454__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info], 0));
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__36759,target){
var map__36761 = p__36759;
var map__36761__$1 = (((((!((map__36761 == null))))?(((((map__36761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36761):map__36761);
var ctx = map__36761__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858))))){
return target;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null)], 0));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__36769,target){
var map__36773 = p__36769;
var map__36773__$1 = (((((!((map__36773 == null))))?(((((map__36773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36773):map__36773);
var ctx = map__36773__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36773__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__36776 = cljs.core._EQ_;
var expr__36777 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_((function (){var G__36779 = new cljs.core.Keyword(null,"go","go",-146946655);
var G__36780 = expr__36777;
return (pred__36776.cljs$core$IFn$_invoke$arity$2 ? pred__36776.cljs$core$IFn$_invoke$arity$2(G__36779,G__36780) : pred__36776.call(null,G__36779,G__36780));
})())){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
var offsetY = (((function (){var x__4222__auto__ = offsetTime;
var y__4223__auto__ = (500);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() / (1000)) * (-50));
if((offsetTime > (500))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offsetY], null))], null)], 0));
}
} else {
if(cljs.core.truth_((function (){var G__36786 = new cljs.core.Keyword(null,"goback","goback",1168265173);
var G__36787 = expr__36777;
return (pred__36776.cljs$core$IFn$_invoke$arity$2 ? pred__36776.cljs$core$IFn$_invoke$arity$2(G__36786,G__36787) : pred__36776.call(null,G__36786,G__36787));
})())){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
var offsetY = ((-50) * (((1) / (1000)) * ((500) - (function (){var x__4222__auto__ = (500);
var y__4223__auto__ = offsetTime;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})())));
if((offsetTime > (500))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target)], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offsetY], null))], null)], 0));
}
} else {
if(cljs.core.truth_((function (){var G__36789 = new cljs.core.Keyword(null,"wait","wait",-260664777);
var G__36790 = expr__36777;
return (pred__36776.cljs$core$IFn$_invoke$arity$2 ? pred__36776.cljs$core$IFn$_invoke$arity$2(G__36789,G__36790) : pred__36776.call(null,G__36789,G__36790));
})())){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null)], 0));
} else {
return target;
}
} else {
if(cljs.core.truth_((function (){var G__36793 = new cljs.core.Keyword(null,"normal","normal",-1519123858);
var G__36794 = expr__36777;
return (pred__36776.cljs$core$IFn$_invoke$arity$2 ? pred__36776.cljs$core$IFn$_invoke$arity$2(G__36793,G__36794) : pred__36776.call(null,G__36793,G__36794));
})())){
return target;
} else {
return target;
}
}
}
}
});
app.t2.main.step = (function app$t2$main$step(ctx){
var handleEvents = (function (ctx__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ctx__$2,e){
var pred__36804 = cljs.core._EQ_;
var expr__36805 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_((function (){var G__36807 = new cljs.core.Keyword(null,"go","go",-146946655);
var G__36808 = expr__36805;
return (pred__36804.cljs$core$IFn$_invoke$arity$2 ? pred__36804.cljs$core$IFn$_invoke$arity$2(G__36807,G__36808) : pred__36804.call(null,G__36807,G__36808));
})())){
var targets = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(e);
var targetsAfterEffect = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t2.main.targetGo,ctx__$2),targets);
var replaceForm = cljs.core.zipmap(targets,targetsAfterEffect);
var replaceTargets = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(replaceForm,new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(ctx__$2));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"targets","targets",2014963406),replaceTargets], null)], 0));
} else {
return ctx__$2;
}
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY], null)], 0)),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx__$1));
});
var handleTargets = ((function (handleEvents){
return (function (ctx__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"targets","targets",2014963406),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t2.main.targetUpdate,ctx__$1),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(ctx__$1))], null)], 0));
});})(handleEvents))
;
var handleTime = ((function (handleEvents,handleTargets){
return (function (ctx__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()).getTime()], null)], 0));
});})(handleEvents,handleTargets))
;
return handleTime(handleTargets(handleEvents(ctx)));
});
app.t2.main.main = (function app$t2$main$main(){
app.t2.main.model = null;

app.t2.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

app.t2.main.useKeys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["q","w","e","a","s","d","z","x","c"], null);

setInterval((function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_36828){
var state_val_36829 = (state_36828[(1)]);
if((state_val_36829 === (1))){
var inst_36821 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36822 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_36823 = cljs.core.PersistentHashMap.fromArrays(inst_36821,inst_36822);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36828__$1,(2),app.t2.main.evt,inst_36823);
} else {
if((state_val_36829 === (2))){
var inst_36826 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36828__$1,inst_36826);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t2$main$main_$_state_machine__30005__auto__ = null;
var app$t2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36855 = [null,null,null,null,null,null,null];
(statearr_36855[(0)] = app$t2$main$main_$_state_machine__30005__auto__);

(statearr_36855[(1)] = (1));

return statearr_36855;
});
var app$t2$main$main_$_state_machine__30005__auto____1 = (function (state_36828){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36828);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36856){if((e36856 instanceof Object)){
var ex__30008__auto__ = e36856;
var statearr_36857_37578 = state_36828;
(statearr_36857_37578[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37579 = state_36828;
state_36828 = G__37579;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30005__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30005__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30005__auto____0;
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30005__auto____1;
return app$t2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_36860 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36860[(6)] = c__30213__auto__);

return statearr_36860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
}),(33));

setInterval((function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_36872){
var state_val_36873 = (state_36872[(1)]);
if((state_val_36873 === (1))){
var inst_36865 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36866 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_36867 = cljs.core.PersistentHashMap.fromArrays(inst_36865,inst_36866);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36872__$1,(2),app.t2.main.evt,inst_36867);
} else {
if((state_val_36873 === (2))){
var inst_36869 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36872__$1,inst_36869);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t2$main$main_$_state_machine__30005__auto__ = null;
var app$t2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36879 = [null,null,null,null,null,null,null];
(statearr_36879[(0)] = app$t2$main$main_$_state_machine__30005__auto__);

(statearr_36879[(1)] = (1));

return statearr_36879;
});
var app$t2$main$main_$_state_machine__30005__auto____1 = (function (state_36872){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36872);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36893){if((e36893 instanceof Object)){
var ex__30008__auto__ = e36893;
var statearr_36899_37582 = state_36872;
(statearr_36899_37582[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37583 = state_36872;
state_36872 = G__37583;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30005__auto__ = function(state_36872){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30005__auto____1.call(this,state_36872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30005__auto____0;
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30005__auto____1;
return app$t2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_36912 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36912[(6)] = c__30213__auto__);

return statearr_36912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
}),(1000));

var firstTarget_37584 = app.t2.main.targetCreate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__30213__auto___37585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___37585,firstTarget_37584){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___37585,firstTarget_37584){
return (function (state_37263){
var state_val_37264 = (state_37263[(1)]);
if((state_val_37264 === (7))){
var inst_37259 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37267_37586 = state_37263__$1;
(statearr_37267_37586[(2)] = inst_37259);

(statearr_37267_37586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (20))){
var state_37263__$1 = state_37263;
var statearr_37271_37587 = state_37263__$1;
(statearr_37271_37587[(2)] = true);

(statearr_37271_37587[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (27))){
var inst_37142 = (state_37263[(7)]);
var inst_37235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37236 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_37237 = (new cljs.core.PersistentVector(null,1,(5),inst_37235,inst_37236,null));
var inst_37238 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37142,inst_37237,cljs.core.inc);
var state_37263__$1 = state_37263;
var statearr_37272_37590 = state_37263__$1;
(statearr_37272_37590[(2)] = inst_37238);

(statearr_37272_37590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (1))){
var inst_36936 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_36940 = (new Date());
var inst_36941 = inst_36940.getTime();
var inst_36945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36946 = [firstTarget_37584];
var inst_36947 = (new cljs.core.PersistentVector(null,1,(5),inst_36945,inst_36946,null));
var inst_36949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36960 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_36963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36965 = [(200),(100)];
var inst_36967 = (new cljs.core.PersistentVector(null,2,(5),inst_36963,inst_36965,null));
var inst_36968 = [inst_36967];
var inst_36969 = cljs.core.PersistentHashMap.fromArrays(inst_36960,inst_36968);
var inst_36970 = app.t2.main.targetCreate(inst_36969);
var inst_36974 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_36975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36976 = [(300),(100)];
var inst_36977 = (new cljs.core.PersistentVector(null,2,(5),inst_36975,inst_36976,null));
var inst_36978 = [inst_36977];
var inst_36979 = cljs.core.PersistentHashMap.fromArrays(inst_36974,inst_36978);
var inst_36980 = app.t2.main.targetCreate(inst_36979);
var inst_36981 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_36982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36983 = [(100),(200)];
var inst_36984 = (new cljs.core.PersistentVector(null,2,(5),inst_36982,inst_36983,null));
var inst_36985 = [inst_36984];
var inst_36986 = cljs.core.PersistentHashMap.fromArrays(inst_36981,inst_36985);
var inst_36987 = app.t2.main.targetCreate(inst_36986);
var inst_36988 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37085 = [(200),(200)];
var inst_37086 = (new cljs.core.PersistentVector(null,2,(5),inst_37083,inst_37085,null));
var inst_37087 = [inst_37086];
var inst_37088 = cljs.core.PersistentHashMap.fromArrays(inst_36988,inst_37087);
var inst_37089 = app.t2.main.targetCreate(inst_37088);
var inst_37096 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37101 = [(300),(200)];
var inst_37102 = (new cljs.core.PersistentVector(null,2,(5),inst_37100,inst_37101,null));
var inst_37103 = [inst_37102];
var inst_37104 = cljs.core.PersistentHashMap.fromArrays(inst_37096,inst_37103);
var inst_37105 = app.t2.main.targetCreate(inst_37104);
var inst_37106 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37108 = [(100),(300)];
var inst_37109 = (new cljs.core.PersistentVector(null,2,(5),inst_37107,inst_37108,null));
var inst_37110 = [inst_37109];
var inst_37111 = cljs.core.PersistentHashMap.fromArrays(inst_37106,inst_37110);
var inst_37112 = app.t2.main.targetCreate(inst_37111);
var inst_37113 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37115 = [(200),(300)];
var inst_37116 = (new cljs.core.PersistentVector(null,2,(5),inst_37114,inst_37115,null));
var inst_37117 = [inst_37116];
var inst_37118 = cljs.core.PersistentHashMap.fromArrays(inst_37113,inst_37117);
var inst_37119 = app.t2.main.targetCreate(inst_37118);
var inst_37120 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37122 = [(300),(300)];
var inst_37123 = (new cljs.core.PersistentVector(null,2,(5),inst_37121,inst_37122,null));
var inst_37124 = [inst_37123];
var inst_37125 = cljs.core.PersistentHashMap.fromArrays(inst_37120,inst_37124);
var inst_37126 = app.t2.main.targetCreate(inst_37125);
var inst_37127 = [inst_36970,inst_36980,inst_36987,inst_37089,inst_37105,inst_37112,inst_37119,inst_37126];
var inst_37128 = (new cljs.core.PersistentVector(null,8,(5),inst_36949,inst_37127,null));
var inst_37129 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_36947,inst_37128);
var inst_37130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37131 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37134 = [firstTarget_37584];
var inst_37135 = (new cljs.core.PersistentVector(null,1,(5),inst_37133,inst_37134,null));
var inst_37136 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37135];
var inst_37137 = cljs.core.PersistentHashMap.fromArrays(inst_37131,inst_37136);
var inst_37138 = [inst_37137];
var inst_37139 = (new cljs.core.PersistentVector(null,1,(5),inst_37130,inst_37138,null));
var inst_37140 = [inst_36941,inst_37129,inst_37139,(0)];
var inst_37141 = cljs.core.PersistentHashMap.fromArrays(inst_36936,inst_37140);
var inst_37142 = inst_37141;
var state_37263__$1 = (function (){var statearr_37289 = state_37263;
(statearr_37289[(7)] = inst_37142);

return statearr_37289;
})();
var statearr_37290_37618 = state_37263__$1;
(statearr_37290_37618[(2)] = null);

(statearr_37290_37618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (24))){
var inst_37204 = (state_37263[(8)]);
var state_37263__$1 = state_37263;
var statearr_37291_37619 = state_37263__$1;
(statearr_37291_37619[(2)] = inst_37204);

(statearr_37291_37619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (4))){
var inst_37151 = (state_37263[(9)]);
var inst_37146 = (state_37263[(10)]);
var inst_37146__$1 = (state_37263[(2)]);
var inst_37151__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_37146__$1);
var inst_37152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_37151__$1);
var state_37263__$1 = (function (){var statearr_37294 = state_37263;
(statearr_37294[(9)] = inst_37151__$1);

(statearr_37294[(10)] = inst_37146__$1);

return statearr_37294;
})();
if(inst_37152){
var statearr_37296_37638 = state_37263__$1;
(statearr_37296_37638[(1)] = (5));

} else {
var statearr_37298_37639 = state_37263__$1;
(statearr_37298_37639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (15))){
var state_37263__$1 = state_37263;
var statearr_37300_37646 = state_37263__$1;
(statearr_37300_37646[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (21))){
var state_37263__$1 = state_37263;
var statearr_37302_37647 = state_37263__$1;
(statearr_37302_37647[(2)] = false);

(statearr_37302_37647[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (31))){
var inst_37246 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37303_37648 = state_37263__$1;
(statearr_37303_37648[(2)] = inst_37246);

(statearr_37303_37648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (13))){
var inst_37255 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37305_37649 = state_37263__$1;
(statearr_37305_37649[(2)] = inst_37255);

(statearr_37305_37649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (22))){
var inst_37217 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37306_37650 = state_37263__$1;
(statearr_37306_37650[(2)] = inst_37217);

(statearr_37306_37650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (29))){
var inst_37142 = (state_37263[(7)]);
var state_37263__$1 = state_37263;
var statearr_37307_37651 = state_37263__$1;
(statearr_37307_37651[(2)] = inst_37142);

(statearr_37307_37651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (6))){
var inst_37151 = (state_37263[(9)]);
var inst_37171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_37151);
var state_37263__$1 = state_37263;
if(inst_37171){
var statearr_37308_37656 = state_37263__$1;
(statearr_37308_37656[(1)] = (8));

} else {
var statearr_37309_37657 = state_37263__$1;
(statearr_37309_37657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (28))){
var inst_37240 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37310_37658 = state_37263__$1;
(statearr_37310_37658[(2)] = inst_37240);

(statearr_37310_37658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (25))){
var inst_37225 = (state_37263[(2)]);
var inst_37226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37225,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_37227 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_37226);
var inst_37228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37229 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_37230 = (new cljs.core.PersistentVector(null,2,(5),inst_37228,inst_37229,null));
var inst_37231 = cljs.core.some(inst_37227,inst_37230);
var inst_37232 = cljs.core.not(inst_37231);
var state_37263__$1 = state_37263;
if(inst_37232){
var statearr_37311_37659 = state_37263__$1;
(statearr_37311_37659[(1)] = (26));

} else {
var statearr_37312_37660 = state_37263__$1;
(statearr_37312_37660[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (17))){
var inst_37204 = (state_37263[(8)]);
var inst_37209 = inst_37204.cljs$lang$protocol_mask$partition0$;
var inst_37210 = (inst_37209 & (64));
var inst_37211 = inst_37204.cljs$core$ISeq$;
var inst_37212 = (cljs.core.PROTOCOL_SENTINEL === inst_37211);
var inst_37213 = ((inst_37210) || (inst_37212));
var state_37263__$1 = state_37263;
if(cljs.core.truth_(inst_37213)){
var statearr_37313_37667 = state_37263__$1;
(statearr_37313_37667[(1)] = (20));

} else {
var statearr_37314_37668 = state_37263__$1;
(statearr_37314_37668[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (3))){
var inst_37261 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37263__$1,inst_37261);
} else {
if((state_val_37264 === (12))){
var inst_37142 = (state_37263[(7)]);
var inst_37252 = app.t2.main.step(inst_37142);
var inst_37142__$1 = inst_37252;
var state_37263__$1 = (function (){var statearr_37317 = state_37263;
(statearr_37317[(7)] = inst_37142__$1);

return statearr_37317;
})();
var statearr_37318_37671 = state_37263__$1;
(statearr_37318_37671[(2)] = null);

(statearr_37318_37671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (2))){
var inst_37142 = (state_37263[(7)]);
var inst_37144 = app.t2.main.model = inst_37142;
var state_37263__$1 = (function (){var statearr_37319 = state_37263;
(statearr_37319[(11)] = inst_37144);

return statearr_37319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37263__$1,(4),app.t2.main.evt);
} else {
if((state_val_37264 === (23))){
var inst_37204 = (state_37263[(8)]);
var inst_37222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37204);
var state_37263__$1 = state_37263;
var statearr_37383_37684 = state_37263__$1;
(statearr_37383_37684[(2)] = inst_37222);

(statearr_37383_37684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (19))){
var inst_37220 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
if(cljs.core.truth_(inst_37220)){
var statearr_37387_37691 = state_37263__$1;
(statearr_37387_37691[(1)] = (23));

} else {
var statearr_37388_37692 = state_37263__$1;
(statearr_37388_37692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (11))){
var inst_37146 = (state_37263[(10)]);
var inst_37192 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_37146);
var inst_37194 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((9));
var inst_37195 = cljs.core.zipmap(app.t2.main.useKeys,inst_37194);
var inst_37196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37195,inst_37192);
var inst_37198 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_37192);
var inst_37199 = cljs.core.some(inst_37198,app.t2.main.useKeys);
var state_37263__$1 = (function (){var statearr_37390 = state_37263;
(statearr_37390[(12)] = inst_37196);

return statearr_37390;
})();
if(cljs.core.truth_(inst_37199)){
var statearr_37391_37703 = state_37263__$1;
(statearr_37391_37703[(1)] = (14));

} else {
var statearr_37392_37704 = state_37263__$1;
(statearr_37392_37704[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (9))){
var inst_37151 = (state_37263[(9)]);
var inst_37189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37151);
var state_37263__$1 = state_37263;
if(inst_37189){
var statearr_37393_37705 = state_37263__$1;
(statearr_37393_37705[(1)] = (11));

} else {
var statearr_37394_37706 = state_37263__$1;
(statearr_37394_37706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (5))){
var inst_37142 = (state_37263[(7)]);
var inst_37154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37155 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_37156 = (new cljs.core.PersistentVector(null,1,(5),inst_37154,inst_37155,null));
var inst_37157 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37160 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37142);
var inst_37161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37160,(2));
var inst_37162 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37142);
var inst_37163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37162,(3));
var inst_37164 = [inst_37161,inst_37163];
var inst_37165 = (new cljs.core.PersistentVector(null,2,(5),inst_37158,inst_37164,null));
var inst_37166 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37165];
var inst_37167 = cljs.core.PersistentHashMap.fromArrays(inst_37157,inst_37166);
var inst_37168 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37142,inst_37156,cljs.core.conj,inst_37167);
var inst_37142__$1 = inst_37168;
var state_37263__$1 = (function (){var statearr_37402 = state_37263;
(statearr_37402[(7)] = inst_37142__$1);

return statearr_37402;
})();
var statearr_37403_37707 = state_37263__$1;
(statearr_37403_37707[(2)] = null);

(statearr_37403_37707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (14))){
var inst_37196 = (state_37263[(12)]);
var inst_37142 = (state_37263[(7)]);
var inst_37204 = (state_37263[(8)]);
var inst_37203 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37142);
var inst_37204__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37203,inst_37196);
var inst_37206 = (inst_37204__$1 == null);
var inst_37207 = cljs.core.not(inst_37206);
var state_37263__$1 = (function (){var statearr_37407 = state_37263;
(statearr_37407[(8)] = inst_37204__$1);

return statearr_37407;
})();
if(inst_37207){
var statearr_37408_37714 = state_37263__$1;
(statearr_37408_37714[(1)] = (17));

} else {
var statearr_37409_37715 = state_37263__$1;
(statearr_37409_37715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (26))){
var inst_37142 = (state_37263[(7)]);
var state_37263__$1 = state_37263;
var statearr_37410_37716 = state_37263__$1;
(statearr_37410_37716[(2)] = inst_37142);

(statearr_37410_37716[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (16))){
var inst_37248 = (state_37263[(2)]);
var inst_37142 = inst_37248;
var state_37263__$1 = (function (){var statearr_37411 = state_37263;
(statearr_37411[(7)] = inst_37142);

return statearr_37411;
})();
var statearr_37412_37717 = state_37263__$1;
(statearr_37412_37717[(2)] = null);

(statearr_37412_37717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (30))){
var state_37263__$1 = state_37263;
var statearr_37413_37718 = state_37263__$1;
(statearr_37413_37718[(2)] = null);

(statearr_37413_37718[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (10))){
var inst_37257 = (state_37263[(2)]);
var state_37263__$1 = state_37263;
var statearr_37420_37719 = state_37263__$1;
(statearr_37420_37719[(2)] = inst_37257);

(statearr_37420_37719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (18))){
var state_37263__$1 = state_37263;
var statearr_37421_37720 = state_37263__$1;
(statearr_37421_37720[(2)] = false);

(statearr_37421_37720[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37264 === (8))){
var inst_37142 = (state_37263[(7)]);
var inst_37173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37175 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_37176 = (new cljs.core.PersistentVector(null,1,(5),inst_37173,inst_37175,null));
var inst_37177 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37179 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37142);
var inst_37180 = cljs.core.rand_int((9));
var inst_37181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37179,inst_37180);
var inst_37182 = [inst_37181];
var inst_37183 = (new cljs.core.PersistentVector(null,1,(5),inst_37178,inst_37182,null));
var inst_37184 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37183];
var inst_37185 = cljs.core.PersistentHashMap.fromArrays(inst_37177,inst_37184);
var inst_37186 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37142,inst_37176,cljs.core.conj,inst_37185);
var inst_37142__$1 = inst_37186;
var state_37263__$1 = (function (){var statearr_37422 = state_37263;
(statearr_37422[(7)] = inst_37142__$1);

return statearr_37422;
})();
var statearr_37423_37721 = state_37263__$1;
(statearr_37423_37721[(2)] = null);

(statearr_37423_37721[(1)] = (2));


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
});})(c__30213__auto___37585,firstTarget_37584))
;
return ((function (switch__30004__auto__,c__30213__auto___37585,firstTarget_37584){
return (function() {
var app$t2$main$main_$_state_machine__30005__auto__ = null;
var app$t2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37426 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37426[(0)] = app$t2$main$main_$_state_machine__30005__auto__);

(statearr_37426[(1)] = (1));

return statearr_37426;
});
var app$t2$main$main_$_state_machine__30005__auto____1 = (function (state_37263){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37263);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37428){if((e37428 instanceof Object)){
var ex__30008__auto__ = e37428;
var statearr_37429_37722 = state_37263;
(statearr_37429_37722[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37723 = state_37263;
state_37263 = G__37723;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30005__auto__ = function(state_37263){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30005__auto____1.call(this,state_37263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30005__auto____0;
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30005__auto____1;
return app$t2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___37585,firstTarget_37584))
})();
var state__30215__auto__ = (function (){var statearr_37431 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37431[(6)] = c__30213__auto___37585);

return statearr_37431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___37585,firstTarget_37584))
);


var p5 = window;
var setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(400));
var txt = p5.createDiv("string");
canvas.mousePressed(((function (canvas,txt,p5){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,canvas,txt,p5){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,canvas,txt,p5){
return (function (state_37441){
var state_val_37442 = (state_37441[(1)]);
if((state_val_37442 === (1))){
var inst_37435 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37436 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_37437 = cljs.core.PersistentHashMap.fromArrays(inst_37435,inst_37436);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37441__$1,(2),app.t2.main.evt,inst_37437);
} else {
if((state_val_37442 === (2))){
var inst_37439 = (state_37441[(2)]);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37441__$1,inst_37439);
} else {
return null;
}
}
});})(c__30213__auto__,canvas,txt,p5))
;
return ((function (switch__30004__auto__,c__30213__auto__,canvas,txt,p5){
return (function() {
var app$t2$main$main_$_state_machine__30005__auto__ = null;
var app$t2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37446 = [null,null,null,null,null,null,null];
(statearr_37446[(0)] = app$t2$main$main_$_state_machine__30005__auto__);

(statearr_37446[(1)] = (1));

return statearr_37446;
});
var app$t2$main$main_$_state_machine__30005__auto____1 = (function (state_37441){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37441);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37448){if((e37448 instanceof Object)){
var ex__30008__auto__ = e37448;
var statearr_37451_37725 = state_37441;
(statearr_37451_37725[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37726 = state_37441;
state_37441 = G__37726;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30005__auto__ = function(state_37441){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30005__auto____1.call(this,state_37441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30005__auto____0;
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30005__auto____1;
return app$t2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,canvas,txt,p5))
})();
var state__30215__auto__ = (function (){var statearr_37452 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37452[(6)] = c__30213__auto__);

return statearr_37452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,canvas,txt,p5))
);

return c__30213__auto__;
});})(canvas,txt,p5))
);

canvas.parent("container");

return txt.position((20),(20));
});})(p5))
;
var keyPressed = ((function (p5,setup){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,p5,setup){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,p5,setup){
return (function (state_37461){
var state_val_37462 = (state_37461[(1)]);
if((state_val_37462 === (1))){
var inst_37454 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37455 = p5.key;
var inst_37456 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37455];
var inst_37457 = cljs.core.PersistentHashMap.fromArrays(inst_37454,inst_37456);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37461__$1,(2),app.t2.main.evt,inst_37457);
} else {
if((state_val_37462 === (2))){
var inst_37459 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37461__$1,inst_37459);
} else {
return null;
}
}
});})(c__30213__auto__,p5,setup))
;
return ((function (switch__30004__auto__,c__30213__auto__,p5,setup){
return (function() {
var app$t2$main$main_$_state_machine__30005__auto__ = null;
var app$t2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_37468 = [null,null,null,null,null,null,null];
(statearr_37468[(0)] = app$t2$main$main_$_state_machine__30005__auto__);

(statearr_37468[(1)] = (1));

return statearr_37468;
});
var app$t2$main$main_$_state_machine__30005__auto____1 = (function (state_37461){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37461);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37469){if((e37469 instanceof Object)){
var ex__30008__auto__ = e37469;
var statearr_37470_37805 = state_37461;
(statearr_37470_37805[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37811 = state_37461;
state_37461 = G__37811;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30005__auto__ = function(state_37461){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30005__auto____1.call(this,state_37461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30005__auto____0;
app$t2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30005__auto____1;
return app$t2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,p5,setup))
})();
var state__30215__auto__ = (function (){var statearr_37478 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37478[(6)] = c__30213__auto__);

return statearr_37478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,p5,setup))
);

return c__30213__auto__;
});})(p5,setup))
;
var draw = ((function (p5,setup,keyPressed){
return (function (){
p5.background((0));

p5.fill((255));

p5.stroke((100));

if(cljs.core.truth_(app.t2.main.model)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__37484 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__37485 = null;
var count__37486 = (0);
var i__37487 = (0);
while(true){
if((i__37487 < count__37486)){
var vec__37511 = chunk__37485.cljs$core$IIndexed$_nth$arity$2(null,i__37487);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511,(0),null);
var map__37514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511,(1),null);
var map__37514__$1 = (((((!((map__37514 == null))))?(((((map__37514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37514):map__37514);
var t = map__37514__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__37516_37879 = pos;
var x_37880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516_37879,(0),null);
var y_37881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516_37879,(1),null);
var vec__37519_37882 = origin;
var ox_37883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37519_37882,(0),null);
var oy_37884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37519_37882,(1),null);
var showKey_37885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.t2.main.useKeys,idx);
p5.fill((255));

p5.ellipse(x_37880,y_37881,(50),(50));

p5.rect((ox_37883 - (25)),(oy_37884 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_37885,ox_37883,oy_37884);


var G__37888 = seq__37484;
var G__37889 = chunk__37485;
var G__37890 = count__37486;
var G__37891 = (i__37487 + (1));
seq__37484 = G__37888;
chunk__37485 = G__37889;
count__37486 = G__37890;
i__37487 = G__37891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37484);
if(temp__5735__auto__){
var seq__37484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37484__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37484__$1);
var G__37892 = cljs.core.chunk_rest(seq__37484__$1);
var G__37893 = c__4550__auto__;
var G__37894 = cljs.core.count(c__4550__auto__);
var G__37895 = (0);
seq__37484 = G__37892;
chunk__37485 = G__37893;
count__37486 = G__37894;
i__37487 = G__37895;
continue;
} else {
var vec__37522 = cljs.core.first(seq__37484__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37522,(0),null);
var map__37525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37522,(1),null);
var map__37525__$1 = (((((!((map__37525 == null))))?(((((map__37525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37525):map__37525);
var t = map__37525__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__37527_37899 = pos;
var x_37900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527_37899,(0),null);
var y_37901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527_37899,(1),null);
var vec__37530_37902 = origin;
var ox_37903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37530_37902,(0),null);
var oy_37904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37530_37902,(1),null);
var showKey_37905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.t2.main.useKeys,idx);
p5.fill((255));

p5.ellipse(x_37900,y_37901,(50),(50));

p5.rect((ox_37903 - (25)),(oy_37904 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_37905,ox_37903,oy_37904);


var G__37910 = cljs.core.next(seq__37484__$1);
var G__37911 = null;
var G__37912 = (0);
var G__37913 = (0);
seq__37484 = G__37910;
chunk__37485 = G__37911;
count__37486 = G__37912;
i__37487 = G__37913;
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
app.t2.main.main();

//# sourceMappingURL=app.t2.main.js.map
