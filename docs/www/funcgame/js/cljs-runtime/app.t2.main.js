goog.provide('app.t2.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t2.main.targetCreate = (function app$t2$main$targetCreate(p__37010){
var map__37011 = p__37010;
var map__37011__$1 = (((((!((map__37011 == null))))?(((((map__37011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37011):map__37011);
var info = map__37011__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"origin","origin",1037372088),pos,new cljs.core.Keyword(null,"startTime","startTime",1583467878),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),info], 0));
});
app.t2.main.targetGo = (function app$t2$main$targetGo(p__37013,target){
var map__37014 = p__37013;
var map__37014__$1 = (((((!((map__37014 == null))))?(((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37014):map__37014);
var ctx = map__37014__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"normal","normal",-1519123858))))){
return target;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startTime","startTime",1583467878),time,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"go","go",-146946655)], null)], 0));
}
});
app.t2.main.targetUpdate = (function app$t2$main$targetUpdate(p__37016,target){
var map__37017 = p__37016;
var map__37017__$1 = (((((!((map__37017 == null))))?(((((map__37017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37017):map__37017);
var ctx = map__37017__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pred__37020 = cljs.core._EQ_;
var expr__37021 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_((function (){var G__37023 = new cljs.core.Keyword(null,"go","go",-146946655);
var G__37024 = expr__37021;
return (pred__37020.cljs$core$IFn$_invoke$arity$2 ? pred__37020.cljs$core$IFn$_invoke$arity$2(G__37023,G__37024) : pred__37020.call(null,G__37023,G__37024));
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
if(cljs.core.truth_((function (){var G__37028 = new cljs.core.Keyword(null,"goback","goback",1168265173);
var G__37029 = expr__37021;
return (pred__37020.cljs$core$IFn$_invoke$arity$2 ? pred__37020.cljs$core$IFn$_invoke$arity$2(G__37028,G__37029) : pred__37020.call(null,G__37028,G__37029));
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
if(cljs.core.truth_((function (){var G__37030 = new cljs.core.Keyword(null,"wait","wait",-260664777);
var G__37031 = expr__37021;
return (pred__37020.cljs$core$IFn$_invoke$arity$2 ? pred__37020.cljs$core$IFn$_invoke$arity$2(G__37030,G__37031) : pred__37020.call(null,G__37030,G__37031));
})())){
var offsetTime = (time - new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(target));
if((offsetTime > (500))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"goback","goback",1168265173),new cljs.core.Keyword(null,"startTime","startTime",1583467878),time], null)], 0));
} else {
return target;
}
} else {
if(cljs.core.truth_((function (){var G__37032 = new cljs.core.Keyword(null,"normal","normal",-1519123858);
var G__37033 = expr__37021;
return (pred__37020.cljs$core$IFn$_invoke$arity$2 ? pred__37020.cljs$core$IFn$_invoke$arity$2(G__37032,G__37033) : pred__37020.call(null,G__37032,G__37033));
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
var pred__37034 = cljs.core._EQ_;
var expr__37035 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_((function (){var G__37037 = new cljs.core.Keyword(null,"go","go",-146946655);
var G__37038 = expr__37035;
return (pred__37034.cljs$core$IFn$_invoke$arity$2 ? pred__37034.cljs$core$IFn$_invoke$arity$2(G__37037,G__37038) : pred__37034.call(null,G__37037,G__37038));
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_37045){
var state_val_37046 = (state_37045[(1)]);
if((state_val_37046 === (1))){
var inst_37039 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37040 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_37041 = cljs.core.PersistentHashMap.fromArrays(inst_37039,inst_37040);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37045__$1,(2),app.t2.main.evt,inst_37041);
} else {
if((state_val_37046 === (2))){
var inst_37043 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37045__$1,inst_37043);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t2$main$main_$_state_machine__30585__auto__ = null;
var app$t2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37051 = [null,null,null,null,null,null,null];
(statearr_37051[(0)] = app$t2$main$main_$_state_machine__30585__auto__);

(statearr_37051[(1)] = (1));

return statearr_37051;
});
var app$t2$main$main_$_state_machine__30585__auto____1 = (function (state_37045){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37045);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37057){if((e37057 instanceof Object)){
var ex__30588__auto__ = e37057;
var statearr_37058_37607 = state_37045;
(statearr_37058_37607[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37608 = state_37045;
state_37045 = G__37608;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30585__auto__ = function(state_37045){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30585__auto____1.call(this,state_37045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30585__auto____0;
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30585__auto____1;
return app$t2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_37059 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37059[(6)] = c__30812__auto__);

return statearr_37059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
}),(33));

setInterval((function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_37067){
var state_val_37068 = (state_37067[(1)]);
if((state_val_37068 === (1))){
var inst_37061 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37062 = [new cljs.core.Keyword(null,"randomGo","randomGo",-829852536)];
var inst_37063 = cljs.core.PersistentHashMap.fromArrays(inst_37061,inst_37062);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37067__$1,(2),app.t2.main.evt,inst_37063);
} else {
if((state_val_37068 === (2))){
var inst_37065 = (state_37067[(2)]);
var state_37067__$1 = state_37067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37067__$1,inst_37065);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t2$main$main_$_state_machine__30585__auto__ = null;
var app$t2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37076 = [null,null,null,null,null,null,null];
(statearr_37076[(0)] = app$t2$main$main_$_state_machine__30585__auto__);

(statearr_37076[(1)] = (1));

return statearr_37076;
});
var app$t2$main$main_$_state_machine__30585__auto____1 = (function (state_37067){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37067);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37077){if((e37077 instanceof Object)){
var ex__30588__auto__ = e37077;
var statearr_37078_37618 = state_37067;
(statearr_37078_37618[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37625 = state_37067;
state_37067 = G__37625;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30585__auto__ = function(state_37067){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30585__auto____1.call(this,state_37067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30585__auto____0;
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30585__auto____1;
return app$t2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_37079 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37079[(6)] = c__30812__auto__);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
}),(1000));

var firstTarget_37627 = app.t2.main.targetCreate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)], null));
var c__30812__auto___37628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___37628,firstTarget_37627){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___37628,firstTarget_37627){
return (function (state_37272){
var state_val_37273 = (state_37272[(1)]);
if((state_val_37273 === (7))){
var inst_37268 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37274_37629 = state_37272__$1;
(statearr_37274_37629[(2)] = inst_37268);

(statearr_37274_37629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (20))){
var state_37272__$1 = state_37272;
var statearr_37275_37630 = state_37272__$1;
(statearr_37275_37630[(2)] = true);

(statearr_37275_37630[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (27))){
var inst_37157 = (state_37272[(7)]);
var inst_37246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37247 = [new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_37248 = (new cljs.core.PersistentVector(null,1,(5),inst_37246,inst_37247,null));
var inst_37249 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37157,inst_37248,cljs.core.inc);
var state_37272__$1 = state_37272;
var statearr_37276_37632 = state_37272__$1;
(statearr_37276_37632[(2)] = inst_37249);

(statearr_37276_37632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (1))){
var inst_37080 = [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"score","score",-1963588780)];
var inst_37081 = (new Date());
var inst_37082 = inst_37081.getTime();
var inst_37083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37084 = [firstTarget_37627];
var inst_37085 = (new cljs.core.PersistentVector(null,1,(5),inst_37083,inst_37084,null));
var inst_37086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37087 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37089 = [(200),(100)];
var inst_37090 = (new cljs.core.PersistentVector(null,2,(5),inst_37088,inst_37089,null));
var inst_37091 = [inst_37090];
var inst_37092 = cljs.core.PersistentHashMap.fromArrays(inst_37087,inst_37091);
var inst_37093 = app.t2.main.targetCreate(inst_37092);
var inst_37094 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37096 = [(300),(100)];
var inst_37097 = (new cljs.core.PersistentVector(null,2,(5),inst_37095,inst_37096,null));
var inst_37098 = [inst_37097];
var inst_37099 = cljs.core.PersistentHashMap.fromArrays(inst_37094,inst_37098);
var inst_37100 = app.t2.main.targetCreate(inst_37099);
var inst_37101 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37103 = [(100),(200)];
var inst_37104 = (new cljs.core.PersistentVector(null,2,(5),inst_37102,inst_37103,null));
var inst_37105 = [inst_37104];
var inst_37106 = cljs.core.PersistentHashMap.fromArrays(inst_37101,inst_37105);
var inst_37107 = app.t2.main.targetCreate(inst_37106);
var inst_37108 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37110 = [(200),(200)];
var inst_37111 = (new cljs.core.PersistentVector(null,2,(5),inst_37109,inst_37110,null));
var inst_37112 = [inst_37111];
var inst_37113 = cljs.core.PersistentHashMap.fromArrays(inst_37108,inst_37112);
var inst_37114 = app.t2.main.targetCreate(inst_37113);
var inst_37115 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37117 = [(300),(200)];
var inst_37118 = (new cljs.core.PersistentVector(null,2,(5),inst_37116,inst_37117,null));
var inst_37119 = [inst_37118];
var inst_37120 = cljs.core.PersistentHashMap.fromArrays(inst_37115,inst_37119);
var inst_37121 = app.t2.main.targetCreate(inst_37120);
var inst_37122 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37124 = [(100),(300)];
var inst_37125 = (new cljs.core.PersistentVector(null,2,(5),inst_37123,inst_37124,null));
var inst_37126 = [inst_37125];
var inst_37127 = cljs.core.PersistentHashMap.fromArrays(inst_37122,inst_37126);
var inst_37128 = app.t2.main.targetCreate(inst_37127);
var inst_37129 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37131 = [(200),(300)];
var inst_37132 = (new cljs.core.PersistentVector(null,2,(5),inst_37130,inst_37131,null));
var inst_37133 = [inst_37132];
var inst_37134 = cljs.core.PersistentHashMap.fromArrays(inst_37129,inst_37133);
var inst_37135 = app.t2.main.targetCreate(inst_37134);
var inst_37136 = [new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_37137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37138 = [(300),(300)];
var inst_37139 = (new cljs.core.PersistentVector(null,2,(5),inst_37137,inst_37138,null));
var inst_37140 = [inst_37139];
var inst_37141 = cljs.core.PersistentHashMap.fromArrays(inst_37136,inst_37140);
var inst_37142 = app.t2.main.targetCreate(inst_37141);
var inst_37143 = [inst_37093,inst_37100,inst_37107,inst_37114,inst_37121,inst_37128,inst_37135,inst_37142];
var inst_37144 = (new cljs.core.PersistentVector(null,8,(5),inst_37086,inst_37143,null));
var inst_37145 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_37085,inst_37144);
var inst_37146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37147 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37149 = [firstTarget_37627];
var inst_37150 = (new cljs.core.PersistentVector(null,1,(5),inst_37148,inst_37149,null));
var inst_37151 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37150];
var inst_37152 = cljs.core.PersistentHashMap.fromArrays(inst_37147,inst_37151);
var inst_37153 = [inst_37152];
var inst_37154 = (new cljs.core.PersistentVector(null,1,(5),inst_37146,inst_37153,null));
var inst_37155 = [inst_37082,inst_37145,inst_37154,(0)];
var inst_37156 = cljs.core.PersistentHashMap.fromArrays(inst_37080,inst_37155);
var inst_37157 = inst_37156;
var state_37272__$1 = (function (){var statearr_37299 = state_37272;
(statearr_37299[(7)] = inst_37157);

return statearr_37299;
})();
var statearr_37300_37639 = state_37272__$1;
(statearr_37300_37639[(2)] = null);

(statearr_37300_37639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (24))){
var inst_37215 = (state_37272[(8)]);
var state_37272__$1 = state_37272;
var statearr_37301_37640 = state_37272__$1;
(statearr_37301_37640[(2)] = inst_37215);

(statearr_37301_37640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (4))){
var inst_37165 = (state_37272[(9)]);
var inst_37161 = (state_37272[(10)]);
var inst_37161__$1 = (state_37272[(2)]);
var inst_37165__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_37161__$1);
var inst_37166 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_37165__$1);
var state_37272__$1 = (function (){var statearr_37308 = state_37272;
(statearr_37308[(9)] = inst_37165__$1);

(statearr_37308[(10)] = inst_37161__$1);

return statearr_37308;
})();
if(inst_37166){
var statearr_37309_37647 = state_37272__$1;
(statearr_37309_37647[(1)] = (5));

} else {
var statearr_37316_37648 = state_37272__$1;
(statearr_37316_37648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (15))){
var state_37272__$1 = state_37272;
var statearr_37317_37649 = state_37272__$1;
(statearr_37317_37649[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (21))){
var state_37272__$1 = state_37272;
var statearr_37319_37651 = state_37272__$1;
(statearr_37319_37651[(2)] = false);

(statearr_37319_37651[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (31))){
var inst_37256 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37321_37653 = state_37272__$1;
(statearr_37321_37653[(2)] = inst_37256);

(statearr_37321_37653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (13))){
var inst_37264 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37325_37655 = state_37272__$1;
(statearr_37325_37655[(2)] = inst_37264);

(statearr_37325_37655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (22))){
var inst_37228 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37326_37656 = state_37272__$1;
(statearr_37326_37656[(2)] = inst_37228);

(statearr_37326_37656[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (29))){
var inst_37157 = (state_37272[(7)]);
var state_37272__$1 = state_37272;
var statearr_37327_37658 = state_37272__$1;
(statearr_37327_37658[(2)] = inst_37157);

(statearr_37327_37658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (6))){
var inst_37165 = (state_37272[(9)]);
var inst_37187 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"randomGo","randomGo",-829852536),inst_37165);
var state_37272__$1 = state_37272;
if(inst_37187){
var statearr_37328_37659 = state_37272__$1;
(statearr_37328_37659[(1)] = (8));

} else {
var statearr_37330_37660 = state_37272__$1;
(statearr_37330_37660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (28))){
var inst_37251 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37333_37661 = state_37272__$1;
(statearr_37333_37661[(2)] = inst_37251);

(statearr_37333_37661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (25))){
var inst_37236 = (state_37272[(2)]);
var inst_37237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37236,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_37238 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_37237);
var inst_37239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37240 = [new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"go","go",-146946655)];
var inst_37241 = (new cljs.core.PersistentVector(null,2,(5),inst_37239,inst_37240,null));
var inst_37242 = cljs.core.some(inst_37238,inst_37241);
var inst_37243 = cljs.core.not(inst_37242);
var state_37272__$1 = state_37272;
if(inst_37243){
var statearr_37334_37662 = state_37272__$1;
(statearr_37334_37662[(1)] = (26));

} else {
var statearr_37335_37663 = state_37272__$1;
(statearr_37335_37663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (17))){
var inst_37215 = (state_37272[(8)]);
var inst_37220 = inst_37215.cljs$lang$protocol_mask$partition0$;
var inst_37221 = (inst_37220 & (64));
var inst_37222 = inst_37215.cljs$core$ISeq$;
var inst_37223 = (cljs.core.PROTOCOL_SENTINEL === inst_37222);
var inst_37224 = ((inst_37221) || (inst_37223));
var state_37272__$1 = state_37272;
if(cljs.core.truth_(inst_37224)){
var statearr_37336_37664 = state_37272__$1;
(statearr_37336_37664[(1)] = (20));

} else {
var statearr_37337_37665 = state_37272__$1;
(statearr_37337_37665[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (3))){
var inst_37270 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37272__$1,inst_37270);
} else {
if((state_val_37273 === (12))){
var inst_37157 = (state_37272[(7)]);
var inst_37261 = app.t2.main.step(inst_37157);
var inst_37157__$1 = inst_37261;
var state_37272__$1 = (function (){var statearr_37338 = state_37272;
(statearr_37338[(7)] = inst_37157__$1);

return statearr_37338;
})();
var statearr_37339_37667 = state_37272__$1;
(statearr_37339_37667[(2)] = null);

(statearr_37339_37667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (2))){
var inst_37157 = (state_37272[(7)]);
var inst_37159 = app.t2.main.model = inst_37157;
var state_37272__$1 = (function (){var statearr_37342 = state_37272;
(statearr_37342[(11)] = inst_37159);

return statearr_37342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37272__$1,(4),app.t2.main.evt);
} else {
if((state_val_37273 === (23))){
var inst_37215 = (state_37272[(8)]);
var inst_37233 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37215);
var state_37272__$1 = state_37272;
var statearr_37349_37671 = state_37272__$1;
(statearr_37349_37671[(2)] = inst_37233);

(statearr_37349_37671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (19))){
var inst_37231 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
if(cljs.core.truth_(inst_37231)){
var statearr_37350_37688 = state_37272__$1;
(statearr_37350_37688[(1)] = (23));

} else {
var statearr_37351_37695 = state_37272__$1;
(statearr_37351_37695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (11))){
var inst_37161 = (state_37272[(10)]);
var inst_37206 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_37161);
var inst_37207 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((9));
var inst_37208 = cljs.core.zipmap(app.t2.main.useKeys,inst_37207);
var inst_37209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37208,inst_37206);
var inst_37210 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_37206);
var inst_37211 = cljs.core.some(inst_37210,app.t2.main.useKeys);
var state_37272__$1 = (function (){var statearr_37353 = state_37272;
(statearr_37353[(12)] = inst_37209);

return statearr_37353;
})();
if(cljs.core.truth_(inst_37211)){
var statearr_37355_37717 = state_37272__$1;
(statearr_37355_37717[(1)] = (14));

} else {
var statearr_37357_37724 = state_37272__$1;
(statearr_37357_37724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (9))){
var inst_37165 = (state_37272[(9)]);
var inst_37204 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37165);
var state_37272__$1 = state_37272;
if(inst_37204){
var statearr_37358_37733 = state_37272__$1;
(statearr_37358_37733[(1)] = (11));

} else {
var statearr_37360_37735 = state_37272__$1;
(statearr_37360_37735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (5))){
var inst_37157 = (state_37272[(7)]);
var inst_37171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37172 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_37173 = (new cljs.core.PersistentVector(null,1,(5),inst_37171,inst_37172,null));
var inst_37174 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37176 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37176,(2));
var inst_37178 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37178,(3));
var inst_37180 = [inst_37177,inst_37179];
var inst_37181 = (new cljs.core.PersistentVector(null,2,(5),inst_37175,inst_37180,null));
var inst_37182 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37181];
var inst_37183 = cljs.core.PersistentHashMap.fromArrays(inst_37174,inst_37182);
var inst_37184 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37157,inst_37173,cljs.core.conj,inst_37183);
var inst_37157__$1 = inst_37184;
var state_37272__$1 = (function (){var statearr_37370 = state_37272;
(statearr_37370[(7)] = inst_37157__$1);

return statearr_37370;
})();
var statearr_37373_37767 = state_37272__$1;
(statearr_37373_37767[(2)] = null);

(statearr_37373_37767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (14))){
var inst_37209 = (state_37272[(12)]);
var inst_37157 = (state_37272[(7)]);
var inst_37215 = (state_37272[(8)]);
var inst_37214 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37214,inst_37209);
var inst_37217 = (inst_37215__$1 == null);
var inst_37218 = cljs.core.not(inst_37217);
var state_37272__$1 = (function (){var statearr_37395 = state_37272;
(statearr_37395[(8)] = inst_37215__$1);

return statearr_37395;
})();
if(inst_37218){
var statearr_37396_37786 = state_37272__$1;
(statearr_37396_37786[(1)] = (17));

} else {
var statearr_37397_37792 = state_37272__$1;
(statearr_37397_37792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (26))){
var inst_37157 = (state_37272[(7)]);
var state_37272__$1 = state_37272;
var statearr_37398_37803 = state_37272__$1;
(statearr_37398_37803[(2)] = inst_37157);

(statearr_37398_37803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (16))){
var inst_37258 = (state_37272[(2)]);
var inst_37157 = inst_37258;
var state_37272__$1 = (function (){var statearr_37399 = state_37272;
(statearr_37399[(7)] = inst_37157);

return statearr_37399;
})();
var statearr_37400_37812 = state_37272__$1;
(statearr_37400_37812[(2)] = null);

(statearr_37400_37812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (30))){
var state_37272__$1 = state_37272;
var statearr_37401_37834 = state_37272__$1;
(statearr_37401_37834[(2)] = null);

(statearr_37401_37834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (10))){
var inst_37266 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37402_37836 = state_37272__$1;
(statearr_37402_37836[(2)] = inst_37266);

(statearr_37402_37836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (18))){
var state_37272__$1 = state_37272;
var statearr_37403_37837 = state_37272__$1;
(statearr_37403_37837[(2)] = false);

(statearr_37403_37837[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (8))){
var inst_37157 = (state_37272[(7)]);
var inst_37189 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37190 = [new cljs.core.Keyword(null,"events","events",1792552201)];
var inst_37191 = (new cljs.core.PersistentVector(null,1,(5),inst_37189,inst_37190,null));
var inst_37192 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"targets","targets",2014963406)];
var inst_37193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37194 = new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(inst_37157);
var inst_37195 = cljs.core.rand_int((9));
var inst_37196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_37194,inst_37195);
var inst_37197 = [inst_37196];
var inst_37198 = (new cljs.core.PersistentVector(null,1,(5),inst_37193,inst_37197,null));
var inst_37199 = [new cljs.core.Keyword(null,"go","go",-146946655),inst_37198];
var inst_37200 = cljs.core.PersistentHashMap.fromArrays(inst_37192,inst_37199);
var inst_37201 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(inst_37157,inst_37191,cljs.core.conj,inst_37200);
var inst_37157__$1 = inst_37201;
var state_37272__$1 = (function (){var statearr_37448 = state_37272;
(statearr_37448[(7)] = inst_37157__$1);

return statearr_37448;
})();
var statearr_37449_37842 = state_37272__$1;
(statearr_37449_37842[(2)] = null);

(statearr_37449_37842[(1)] = (2));


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
});})(c__30812__auto___37628,firstTarget_37627))
;
return ((function (switch__30584__auto__,c__30812__auto___37628,firstTarget_37627){
return (function() {
var app$t2$main$main_$_state_machine__30585__auto__ = null;
var app$t2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37451[(0)] = app$t2$main$main_$_state_machine__30585__auto__);

(statearr_37451[(1)] = (1));

return statearr_37451;
});
var app$t2$main$main_$_state_machine__30585__auto____1 = (function (state_37272){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37272);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37452){if((e37452 instanceof Object)){
var ex__30588__auto__ = e37452;
var statearr_37453_37847 = state_37272;
(statearr_37453_37847[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37849 = state_37272;
state_37272 = G__37849;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30585__auto__ = function(state_37272){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30585__auto____1.call(this,state_37272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30585__auto____0;
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30585__auto____1;
return app$t2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___37628,firstTarget_37627))
})();
var state__30814__auto__ = (function (){var statearr_37456 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37456[(6)] = c__30812__auto___37628);

return statearr_37456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___37628,firstTarget_37627))
);


var p5 = window;
var setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(400));
var txt = p5.createDiv("string");
canvas.mousePressed(((function (canvas,txt,p5){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,canvas,txt,p5){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,canvas,txt,p5){
return (function (state_37474){
var state_val_37475 = (state_37474[(1)]);
if((state_val_37475 === (1))){
var inst_37467 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37468 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_37469 = cljs.core.PersistentHashMap.fromArrays(inst_37467,inst_37468);
var state_37474__$1 = state_37474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37474__$1,(2),app.t2.main.evt,inst_37469);
} else {
if((state_val_37475 === (2))){
var inst_37471 = (state_37474[(2)]);
var state_37474__$1 = state_37474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37474__$1,inst_37471);
} else {
return null;
}
}
});})(c__30812__auto__,canvas,txt,p5))
;
return ((function (switch__30584__auto__,c__30812__auto__,canvas,txt,p5){
return (function() {
var app$t2$main$main_$_state_machine__30585__auto__ = null;
var app$t2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null];
(statearr_37479[(0)] = app$t2$main$main_$_state_machine__30585__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var app$t2$main$main_$_state_machine__30585__auto____1 = (function (state_37474){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37474);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37482){if((e37482 instanceof Object)){
var ex__30588__auto__ = e37482;
var statearr_37483_37869 = state_37474;
(statearr_37483_37869[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37874 = state_37474;
state_37474 = G__37874;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30585__auto__ = function(state_37474){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30585__auto____1.call(this,state_37474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30585__auto____0;
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30585__auto____1;
return app$t2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,canvas,txt,p5))
})();
var state__30814__auto__ = (function (){var statearr_37486 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37486[(6)] = c__30812__auto__);

return statearr_37486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,canvas,txt,p5))
);

return c__30812__auto__;
});})(canvas,txt,p5))
);

canvas.parent("container");

return txt.position((20),(20));
});})(p5))
;
var keyPressed = ((function (p5,setup){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,p5,setup){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,p5,setup){
return (function (state_37497){
var state_val_37498 = (state_37497[(1)]);
if((state_val_37498 === (1))){
var inst_37488 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_37489 = p5.key;
var inst_37490 = [new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),inst_37489];
var inst_37491 = cljs.core.PersistentHashMap.fromArrays(inst_37488,inst_37490);
var state_37497__$1 = state_37497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37497__$1,(2),app.t2.main.evt,inst_37491);
} else {
if((state_val_37498 === (2))){
var inst_37493 = (state_37497[(2)]);
var state_37497__$1 = state_37497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37497__$1,inst_37493);
} else {
return null;
}
}
});})(c__30812__auto__,p5,setup))
;
return ((function (switch__30584__auto__,c__30812__auto__,p5,setup){
return (function() {
var app$t2$main$main_$_state_machine__30585__auto__ = null;
var app$t2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37500 = [null,null,null,null,null,null,null];
(statearr_37500[(0)] = app$t2$main$main_$_state_machine__30585__auto__);

(statearr_37500[(1)] = (1));

return statearr_37500;
});
var app$t2$main$main_$_state_machine__30585__auto____1 = (function (state_37497){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37497);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37506){if((e37506 instanceof Object)){
var ex__30588__auto__ = e37506;
var statearr_37507_37878 = state_37497;
(statearr_37507_37878[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37880 = state_37497;
state_37497 = G__37880;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t2$main$main_$_state_machine__30585__auto__ = function(state_37497){
switch(arguments.length){
case 0:
return app$t2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t2$main$main_$_state_machine__30585__auto____1.call(this,state_37497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t2$main$main_$_state_machine__30585__auto____0;
app$t2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t2$main$main_$_state_machine__30585__auto____1;
return app$t2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,p5,setup))
})();
var state__30814__auto__ = (function (){var statearr_37512 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37512[(6)] = c__30812__auto__);

return statearr_37512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,p5,setup))
);

return c__30812__auto__;
});})(p5,setup))
;
var draw = ((function (p5,setup,keyPressed){
return (function (){
p5.background((0));

p5.fill((255));

p5.stroke((100));

if(cljs.core.truth_(app.t2.main.model)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__37518 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(app.t2.main.model)));
var chunk__37519 = null;
var count__37520 = (0);
var i__37521 = (0);
while(true){
if((i__37521 < count__37520)){
var vec__37544 = chunk__37519.cljs$core$IIndexed$_nth$arity$2(null,i__37521);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(0),null);
var map__37547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(1),null);
var map__37547__$1 = (((((!((map__37547 == null))))?(((((map__37547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37547):map__37547);
var t = map__37547__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__37574_37892 = pos;
var x_37893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37574_37892,(0),null);
var y_37894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37574_37892,(1),null);
var vec__37577_37895 = origin;
var ox_37896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577_37895,(0),null);
var oy_37897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577_37895,(1),null);
var showKey_37898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.t2.main.useKeys,idx);
p5.fill((255));

p5.ellipse(x_37893,y_37894,(50),(50));

p5.rect((ox_37896 - (25)),(oy_37897 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_37898,ox_37896,oy_37897);


var G__37901 = seq__37518;
var G__37902 = chunk__37519;
var G__37903 = count__37520;
var G__37904 = (i__37521 + (1));
seq__37518 = G__37901;
chunk__37519 = G__37902;
count__37520 = G__37903;
i__37521 = G__37904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37518);
if(temp__5735__auto__){
var seq__37518__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37518__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37518__$1);
var G__37907 = cljs.core.chunk_rest(seq__37518__$1);
var G__37909 = c__4550__auto__;
var G__37910 = cljs.core.count(c__4550__auto__);
var G__37911 = (0);
seq__37518 = G__37907;
chunk__37519 = G__37909;
count__37520 = G__37910;
i__37521 = G__37911;
continue;
} else {
var vec__37583 = cljs.core.first(seq__37518__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37583,(0),null);
var map__37586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37583,(1),null);
var map__37586__$1 = (((((!((map__37586 == null))))?(((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37586):map__37586);
var t = map__37586__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var vec__37597_37916 = pos;
var x_37917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37597_37916,(0),null);
var y_37918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37597_37916,(1),null);
var vec__37600_37919 = origin;
var ox_37920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37600_37919,(0),null);
var oy_37921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37600_37919,(1),null);
var showKey_37922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.t2.main.useKeys,idx);
p5.fill((255));

p5.ellipse(x_37917,y_37918,(50),(50));

p5.rect((ox_37920 - (25)),(oy_37921 - (25)),(50),(50));

p5.fill((100),(0),(0));

p5.text(showKey_37922,ox_37920,oy_37921);


var G__37924 = cljs.core.next(seq__37518__$1);
var G__37925 = null;
var G__37926 = (0);
var G__37927 = (0);
seq__37518 = G__37924;
chunk__37519 = G__37925;
count__37520 = G__37926;
i__37521 = G__37927;
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
