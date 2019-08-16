goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var canvas_38723 = document.getElementById("canvas1");
canvas_38723.addEventListener("mousedown",((function (canvas_38723){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,canvas_38723){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,canvas_38723){
return (function (state_37939){
var state_val_37940 = (state_37939[(1)]);
if((state_val_37940 === (1))){
var inst_37933 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37934 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_37935 = cljs.core.PersistentHashMap.fromArrays(inst_37933,inst_37934);
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37939__$1,(2),app.t1.main.evt,inst_37935);
} else {
if((state_val_37940 === (2))){
var inst_37937 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37939__$1,inst_37937);
} else {
return null;
}
}
});})(c__30213__auto__,canvas_38723))
;
return ((function (switch__30004__auto__,c__30213__auto__,canvas_38723){
return (function() {
var app$t1$main$state_machine__30005__auto__ = null;
var app$t1$main$state_machine__30005__auto____0 = (function (){
var statearr_37951 = [null,null,null,null,null,null,null];
(statearr_37951[(0)] = app$t1$main$state_machine__30005__auto__);

(statearr_37951[(1)] = (1));

return statearr_37951;
});
var app$t1$main$state_machine__30005__auto____1 = (function (state_37939){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37939);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e37961){if((e37961 instanceof Object)){
var ex__30008__auto__ = e37961;
var statearr_37966_38724 = state_37939;
(statearr_37966_38724[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38725 = state_37939;
state_37939 = G__38725;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t1$main$state_machine__30005__auto__ = function(state_37939){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30005__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30005__auto____1.call(this,state_37939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30005__auto____0;
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30005__auto____1;
return app$t1$main$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,canvas_38723))
})();
var state__30215__auto__ = (function (){var statearr_37968 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_37968[(6)] = c__30213__auto__);

return statearr_37968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,canvas_38723))
);

return c__30213__auto__;
});})(canvas_38723))
,false);

canvas_38723.addEventListener("mouseup",((function (canvas_38723){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,canvas_38723){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,canvas_38723){
return (function (state_37986){
var state_val_37987 = (state_37986[(1)]);
if((state_val_37987 === (1))){
var inst_37980 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_37981 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_37982 = cljs.core.PersistentHashMap.fromArrays(inst_37980,inst_37981);
var state_37986__$1 = state_37986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37986__$1,(2),app.t1.main.evt,inst_37982);
} else {
if((state_val_37987 === (2))){
var inst_37984 = (state_37986[(2)]);
var state_37986__$1 = state_37986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37986__$1,inst_37984);
} else {
return null;
}
}
});})(c__30213__auto__,canvas_38723))
;
return ((function (switch__30004__auto__,c__30213__auto__,canvas_38723){
return (function() {
var app$t1$main$state_machine__30005__auto__ = null;
var app$t1$main$state_machine__30005__auto____0 = (function (){
var statearr_38006 = [null,null,null,null,null,null,null];
(statearr_38006[(0)] = app$t1$main$state_machine__30005__auto__);

(statearr_38006[(1)] = (1));

return statearr_38006;
});
var app$t1$main$state_machine__30005__auto____1 = (function (state_37986){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37986);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38013){if((e38013 instanceof Object)){
var ex__30008__auto__ = e38013;
var statearr_38014_38726 = state_37986;
(statearr_38014_38726[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38727 = state_37986;
state_37986 = G__38727;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t1$main$state_machine__30005__auto__ = function(state_37986){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30005__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30005__auto____1.call(this,state_37986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30005__auto____0;
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30005__auto____1;
return app$t1$main$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,canvas_38723))
})();
var state__30215__auto__ = (function (){var statearr_38020 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38020[(6)] = c__30213__auto__);

return statearr_38020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,canvas_38723))
);

return c__30213__auto__;
});})(canvas_38723))
,false);

canvas_38723.addEventListener("mousemove",((function (canvas_38723){
return (function (evt2){
var rect = canvas_38723.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,rect,x,y,canvas_38723){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,rect,x,y,canvas_38723){
return (function (state_38040){
var state_val_38041 = (state_38040[(1)]);
if((state_val_38041 === (1))){
var inst_38031 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_38032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38033 = [x,y];
var inst_38034 = (new cljs.core.PersistentVector(null,2,(5),inst_38032,inst_38033,null));
var inst_38035 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_38034];
var inst_38036 = cljs.core.PersistentHashMap.fromArrays(inst_38031,inst_38035);
var state_38040__$1 = state_38040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38040__$1,(2),app.t1.main.evt,inst_38036);
} else {
if((state_val_38041 === (2))){
var inst_38038 = (state_38040[(2)]);
var state_38040__$1 = state_38040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38040__$1,inst_38038);
} else {
return null;
}
}
});})(c__30213__auto__,rect,x,y,canvas_38723))
;
return ((function (switch__30004__auto__,c__30213__auto__,rect,x,y,canvas_38723){
return (function() {
var app$t1$main$state_machine__30005__auto__ = null;
var app$t1$main$state_machine__30005__auto____0 = (function (){
var statearr_38043 = [null,null,null,null,null,null,null];
(statearr_38043[(0)] = app$t1$main$state_machine__30005__auto__);

(statearr_38043[(1)] = (1));

return statearr_38043;
});
var app$t1$main$state_machine__30005__auto____1 = (function (state_38040){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38040);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38045){if((e38045 instanceof Object)){
var ex__30008__auto__ = e38045;
var statearr_38058_38728 = state_38040;
(statearr_38058_38728[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38729 = state_38040;
state_38040 = G__38729;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t1$main$state_machine__30005__auto__ = function(state_38040){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30005__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30005__auto____1.call(this,state_38040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30005__auto____0;
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30005__auto____1;
return app$t1$main$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,rect,x,y,canvas_38723))
})();
var state__30215__auto__ = (function (){var statearr_38061 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38061[(6)] = c__30213__auto__);

return statearr_38061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,rect,x,y,canvas_38723))
);

return c__30213__auto__;
});})(canvas_38723))
,false);

setInterval(((function (canvas_38723){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,canvas_38723){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,canvas_38723){
return (function (state_38070){
var state_val_38071 = (state_38070[(1)]);
if((state_val_38071 === (1))){
var inst_38063 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38065 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_38066 = cljs.core.PersistentHashMap.fromArrays(inst_38063,inst_38065);
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38070__$1,(2),app.t1.main.evt,inst_38066);
} else {
if((state_val_38071 === (2))){
var inst_38068 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38070__$1,inst_38068);
} else {
return null;
}
}
});})(c__30213__auto__,canvas_38723))
;
return ((function (switch__30004__auto__,c__30213__auto__,canvas_38723){
return (function() {
var app$t1$main$state_machine__30005__auto__ = null;
var app$t1$main$state_machine__30005__auto____0 = (function (){
var statearr_38073 = [null,null,null,null,null,null,null];
(statearr_38073[(0)] = app$t1$main$state_machine__30005__auto__);

(statearr_38073[(1)] = (1));

return statearr_38073;
});
var app$t1$main$state_machine__30005__auto____1 = (function (state_38070){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38070);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38074){if((e38074 instanceof Object)){
var ex__30008__auto__ = e38074;
var statearr_38075_38732 = state_38070;
(statearr_38075_38732[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38735 = state_38070;
state_38070 = G__38735;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t1$main$state_machine__30005__auto__ = function(state_38070){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30005__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30005__auto____1.call(this,state_38070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30005__auto____0;
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30005__auto____1;
return app$t1$main$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,canvas_38723))
})();
var state__30215__auto__ = (function (){var statearr_38077 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38077[(6)] = c__30213__auto__);

return statearr_38077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,canvas_38723))
);

return c__30213__auto__;
});})(canvas_38723))
,(33));
var c__30213__auto___38736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___38736){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___38736){
return (function (state_38186){
var state_val_38188 = (state_38186[(1)]);
if((state_val_38188 === (7))){
var inst_38169 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38209_38737 = state_38186__$1;
(statearr_38209_38737[(2)] = inst_38169);

(statearr_38209_38737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (1))){
var inst_38082 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_38083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38084 = [(0),(0)];
var inst_38085 = (new cljs.core.PersistentVector(null,2,(5),inst_38083,inst_38084,null));
var inst_38086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38088 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_38089 = (new cljs.core.PersistentVector(null,4,(5),inst_38087,inst_38088,null));
var inst_38090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38091 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_38092 = (new cljs.core.PersistentVector(null,4,(5),inst_38090,inst_38091,null));
var inst_38093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38094 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_38095 = (new cljs.core.PersistentVector(null,4,(5),inst_38093,inst_38094,null));
var inst_38096 = [inst_38089,inst_38092,inst_38095];
var inst_38097 = (new cljs.core.PersistentVector(null,3,(5),inst_38086,inst_38096,null));
var inst_38098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38101 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38103 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_38104 = (new cljs.core.PersistentVector(null,4,(5),inst_38101,inst_38103,null));
var inst_38105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38106 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_38107 = (new cljs.core.PersistentVector(null,4,(5),inst_38105,inst_38106,null));
var inst_38108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38109 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_38110 = (new cljs.core.PersistentVector(null,4,(5),inst_38108,inst_38109,null));
var inst_38111 = [inst_38104,inst_38107,inst_38110];
var inst_38112 = (new cljs.core.PersistentVector(null,3,(5),inst_38098,inst_38111,null));
var inst_38113 = cljs.core.PersistentHashSet.EMPTY;
var inst_38114 = [false,inst_38085,inst_38097,inst_38112,null,null,inst_38113];
var inst_38115 = cljs.core.PersistentHashMap.fromArrays(inst_38082,inst_38114);
var inst_38116 = inst_38115;
var state_38186__$1 = (function (){var statearr_38214 = state_38186;
(statearr_38214[(7)] = inst_38116);

return statearr_38214;
})();
var statearr_38215_38742 = state_38186__$1;
(statearr_38215_38742[(2)] = null);

(statearr_38215_38742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (4))){
var inst_38125 = (state_38186[(8)]);
var inst_38121 = (state_38186[(9)]);
var inst_38121__$1 = (state_38186[(2)]);
var inst_38125__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_38121__$1);
var inst_38126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),inst_38125__$1);
var state_38186__$1 = (function (){var statearr_38220 = state_38186;
(statearr_38220[(8)] = inst_38125__$1);

(statearr_38220[(9)] = inst_38121__$1);

return statearr_38220;
})();
if(inst_38126){
var statearr_38225_38743 = state_38186__$1;
(statearr_38225_38743[(1)] = (5));

} else {
var statearr_38226_38744 = state_38186__$1;
(statearr_38226_38744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (15))){
var inst_38116 = (state_38186[(7)]);
var tmp38197 = inst_38116;
var inst_38116__$1 = tmp38197;
var state_38186__$1 = (function (){var statearr_38230 = state_38186;
(statearr_38230[(7)] = inst_38116__$1);

return statearr_38230;
})();
var statearr_38231_38747 = state_38186__$1;
(statearr_38231_38747[(2)] = null);

(statearr_38231_38747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (13))){
var inst_38165 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38232_38748 = state_38186__$1;
(statearr_38232_38748[(2)] = inst_38165);

(statearr_38232_38748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (6))){
var inst_38125 = (state_38186[(8)]);
var inst_38131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_38125);
var state_38186__$1 = state_38186;
if(inst_38131){
var statearr_38238_38750 = state_38186__$1;
(statearr_38238_38750[(1)] = (8));

} else {
var statearr_38239_38752 = state_38186__$1;
(statearr_38239_38752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (3))){
var inst_38171 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38186__$1,inst_38171);
} else {
if((state_val_38188 === (12))){
var inst_38125 = (state_38186[(8)]);
var inst_38151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_38125);
var state_38186__$1 = state_38186;
if(inst_38151){
var statearr_38244_38753 = state_38186__$1;
(statearr_38244_38753[(1)] = (14));

} else {
var statearr_38245_38754 = state_38186__$1;
(statearr_38245_38754[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (2))){
var inst_38116 = (state_38186[(7)]);
var inst_38118 = app.t1.main.model = inst_38116;
var state_38186__$1 = (function (){var statearr_38255 = state_38186;
(statearr_38255[(10)] = inst_38118);

return statearr_38255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38186__$1,(4),app.t1.main.evt);
} else {
if((state_val_38188 === (11))){
var inst_38116 = (state_38186[(7)]);
var inst_38144 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_38145 = [false,true];
var inst_38146 = cljs.core.PersistentHashMap.fromArrays(inst_38144,inst_38145);
var inst_38147 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38116,inst_38146], 0));
var inst_38116__$1 = inst_38147;
var state_38186__$1 = (function (){var statearr_38256 = state_38186;
(statearr_38256[(7)] = inst_38116__$1);

return statearr_38256;
})();
var statearr_38257_38755 = state_38186__$1;
(statearr_38257_38755[(2)] = null);

(statearr_38257_38755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (9))){
var inst_38125 = (state_38186[(8)]);
var inst_38140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_38125);
var state_38186__$1 = state_38186;
if(inst_38140){
var statearr_38262_38756 = state_38186__$1;
(statearr_38262_38756[(1)] = (11));

} else {
var statearr_38267_38757 = state_38186__$1;
(statearr_38267_38757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (5))){
var inst_38116 = (state_38186[(7)]);
var inst_38128 = (app.t1.main.step.cljs$core$IFn$_invoke$arity$1 ? app.t1.main.step.cljs$core$IFn$_invoke$arity$1(inst_38116) : app.t1.main.step.call(null,inst_38116));
var inst_38116__$1 = inst_38128;
var state_38186__$1 = (function (){var statearr_38276 = state_38186;
(statearr_38276[(7)] = inst_38116__$1);

return statearr_38276;
})();
var statearr_38292_38760 = state_38186__$1;
(statearr_38292_38760[(2)] = null);

(statearr_38292_38760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (14))){
var inst_38116 = (state_38186[(7)]);
var inst_38155 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_38156 = [true,true];
var inst_38157 = cljs.core.PersistentHashMap.fromArrays(inst_38155,inst_38156);
var inst_38158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38116,inst_38157], 0));
var inst_38116__$1 = inst_38158;
var state_38186__$1 = (function (){var statearr_38308 = state_38186;
(statearr_38308[(7)] = inst_38116__$1);

return statearr_38308;
})();
var statearr_38309_38761 = state_38186__$1;
(statearr_38309_38761[(2)] = null);

(statearr_38309_38761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (16))){
var inst_38163 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38313_38764 = state_38186__$1;
(statearr_38313_38764[(2)] = inst_38163);

(statearr_38313_38764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (10))){
var inst_38167 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38314_38765 = state_38186__$1;
(statearr_38314_38765[(2)] = inst_38167);

(statearr_38314_38765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38188 === (8))){
var inst_38116 = (state_38186[(7)]);
var inst_38121 = (state_38186[(9)]);
var inst_38133 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_38134 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_38121);
var inst_38135 = [inst_38134];
var inst_38136 = cljs.core.PersistentHashMap.fromArrays(inst_38133,inst_38135);
var inst_38137 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38116,inst_38136], 0));
var inst_38116__$1 = inst_38137;
var state_38186__$1 = (function (){var statearr_38315 = state_38186;
(statearr_38315[(7)] = inst_38116__$1);

return statearr_38315;
})();
var statearr_38316_38770 = state_38186__$1;
(statearr_38316_38770[(2)] = null);

(statearr_38316_38770[(1)] = (2));


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
});})(c__30213__auto___38736))
;
return ((function (switch__30004__auto__,c__30213__auto___38736){
return (function() {
var app$t1$main$state_machine__30005__auto__ = null;
var app$t1$main$state_machine__30005__auto____0 = (function (){
var statearr_38320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38320[(0)] = app$t1$main$state_machine__30005__auto__);

(statearr_38320[(1)] = (1));

return statearr_38320;
});
var app$t1$main$state_machine__30005__auto____1 = (function (state_38186){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38186);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38322){if((e38322 instanceof Object)){
var ex__30008__auto__ = e38322;
var statearr_38323_38771 = state_38186;
(statearr_38323_38771[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38772 = state_38186;
state_38186 = G__38772;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t1$main$state_machine__30005__auto__ = function(state_38186){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30005__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30005__auto____1.call(this,state_38186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30005__auto____0;
app$t1$main$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30005__auto____1;
return app$t1$main$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___38736))
})();
var state__30215__auto__ = (function (){var statearr_38330 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38330[(6)] = c__30213__auto___38736);

return statearr_38330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___38736))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__38333){
var vec__38334 = p__38333;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(1),null);
var radius = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(2),null);
return ((radius * radius) > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._STAR_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__38340 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(2),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(3),null);
var vec__38343 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(2),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,a2);
});
app.t1.main.step = (function app$t1$main$step(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38591){
var vec__38592 = p__38591;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(1),null);
return selected;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38603){
var vec__38604 = p__38603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38604,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38604,(1),null);
return selected;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(ctx)))));
if(cljs.core.not(idx)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null)], 0));
} else {
var s1 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(ctx);
var s2 = idx;
var pass = app.t1.main.checkAnswer(ctx,s1,s2);
if((!(pass))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,s2], null))], null)], 0));
}
}
} else {
return ctx;

}
}
});
app.t1.main.sketchProc = (function app$t1$main$sketchProc(pc){
app.t1.main.pg = (0);

app.t1.main.circleRadius = (5);

pc.setup = (function (){
pc.size((200),(200));

return app.t1.main.pg = pc.createGraphics((200),(200),pc.P3D);
});

return pc.draw = (function (){
if(cljs.core.not(app.t1.main.model)){
return pc.text("no model",(30),(30));
} else {
var mousePos = new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
var vec__38618 = mousePos;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38618,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38618,(1),null);
pc.background((200));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38629 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__38630 = null;
var count__38631 = (0);
var i__38632 = (0);
while(true){
if((i__38632 < count__38631)){
var c = chunk__38630.cljs$core$IIndexed$_nth$arity$2(null,i__38632);
var isLeft_38776 = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__38646_38777 = c;
var x_38778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646_38777,(0),null);
var y_38779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646_38777,(1),null);
var radius_38780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646_38777,(2),null);
var a_38781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646_38777,(3),null);
var radius2_38782 = (radius_38780 * (2));
var showText_38783 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_38781,(cljs.core.truth_(isLeft_38776)?(0):(1))], null));
var showTextOffsetX_38784 = (- (pc.textWidth(showText_38783) / (2)));
var selected_38785 = app.t1.main.isPointInCircle(mousePos,c);
if((!(selected_38785))){
pc.fill((255));

pc.ellipse(x_38778,y_38779,radius2_38782,radius2_38782);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_38778,y_38779,radius2_38782,radius2_38782);
}

pc.fill((0));

pc.text(showText_38783,(x_38778 + showTextOffsetX_38784),y_38779);


var G__38786 = seq__38629;
var G__38787 = chunk__38630;
var G__38788 = count__38631;
var G__38789 = (i__38632 + (1));
seq__38629 = G__38786;
chunk__38630 = G__38787;
count__38631 = G__38788;
i__38632 = G__38789;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38629);
if(temp__5735__auto__){
var seq__38629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38629__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38629__$1);
var G__38790 = cljs.core.chunk_rest(seq__38629__$1);
var G__38791 = c__4550__auto__;
var G__38792 = cljs.core.count(c__4550__auto__);
var G__38793 = (0);
seq__38629 = G__38790;
chunk__38630 = G__38791;
count__38631 = G__38792;
i__38632 = G__38793;
continue;
} else {
var c = cljs.core.first(seq__38629__$1);
var isLeft_38794 = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__38657_38795 = c;
var x_38796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38795,(0),null);
var y_38797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38795,(1),null);
var radius_38798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38795,(2),null);
var a_38799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38795,(3),null);
var radius2_38800 = (radius_38798 * (2));
var showText_38801 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_38799,(cljs.core.truth_(isLeft_38794)?(0):(1))], null));
var showTextOffsetX_38802 = (- (pc.textWidth(showText_38801) / (2)));
var selected_38803 = app.t1.main.isPointInCircle(mousePos,c);
if((!(selected_38803))){
pc.fill((255));

pc.ellipse(x_38796,y_38797,radius2_38800,radius2_38800);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_38796,y_38797,radius2_38800,radius2_38800);
}

pc.fill((0));

pc.text(showText_38801,(x_38796 + showTextOffsetX_38802),y_38797);


var G__38804 = cljs.core.next(seq__38629__$1);
var G__38805 = null;
var G__38806 = (0);
var G__38807 = (0);
seq__38629 = G__38804;
chunk__38630 = G__38805;
count__38631 = G__38806;
i__38632 = G__38807;
continue;
}
} else {
return null;
}
}
break;
}
})());

pc.fill((0));

var temp__5733__auto___38808 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5733__auto___38808)){
var s1_38809 = temp__5733__auto___38808;
var vec__38660_38810 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_38809], null));
var x_38811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660_38810,(0),null);
var y_38812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660_38810,(1),null);
pc.line(x_38811,y_38812,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38663 = cljs.core.seq(new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__38664 = null;
var count__38665 = (0);
var i__38666 = (0);
while(true){
if((i__38666 < count__38665)){
var line = chunk__38664.cljs$core$IIndexed$_nth$arity$2(null,i__38666);
var vec__38694_38816 = line;
var s1_38817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694_38816,(0),null);
var s2_38818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694_38816,(1),null);
var vec__38698_38819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_38817);
var x_38820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38698_38819,(0),null);
var y_38821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38698_38819,(1),null);
var vec__38701_38822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_38818);
var x2_38823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38701_38822,(0),null);
var y2_38824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38701_38822,(1),null);
pc.line(x_38820,y_38821,x2_38823,y2_38824);


var G__38833 = seq__38663;
var G__38834 = chunk__38664;
var G__38835 = count__38665;
var G__38836 = (i__38666 + (1));
seq__38663 = G__38833;
chunk__38664 = G__38834;
count__38665 = G__38835;
i__38666 = G__38836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38663);
if(temp__5735__auto__){
var seq__38663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38663__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38663__$1);
var G__38840 = cljs.core.chunk_rest(seq__38663__$1);
var G__38841 = c__4550__auto__;
var G__38842 = cljs.core.count(c__4550__auto__);
var G__38843 = (0);
seq__38663 = G__38840;
chunk__38664 = G__38841;
count__38665 = G__38842;
i__38666 = G__38843;
continue;
} else {
var line = cljs.core.first(seq__38663__$1);
var vec__38711_38848 = line;
var s1_38849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38711_38848,(0),null);
var s2_38850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38711_38848,(1),null);
var vec__38714_38851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_38849);
var x_38852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38714_38851,(0),null);
var y_38853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38714_38851,(1),null);
var vec__38717_38854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_38850);
var x2_38855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717_38854,(0),null);
var y2_38856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717_38854,(1),null);
pc.line(x_38852,y_38853,x2_38855,y2_38856);


var G__38857 = cljs.core.next(seq__38663__$1);
var G__38858 = null;
var G__38859 = (0);
var G__38860 = (0);
seq__38663 = G__38857;
chunk__38664 = G__38858;
count__38665 = G__38859;
i__38666 = G__38860;
continue;
}
} else {
return null;
}
}
break;
}
})());

pc.fill((255));

return pc.ellipse(mx,my,(10),(10));
}
});
});
var canvas_38861 = document.getElementById("canvas1");
var p_38862 = (new Processing(canvas_38861,app.t1.main.sketchProc));

//# sourceMappingURL=app.t1.main.js.map
