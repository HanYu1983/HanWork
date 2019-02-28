// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.call(null);
var canvas_7975 = document.getElementById("canvas1");
canvas_7975.addEventListener("mousedown",((function (canvas_7975){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_7975){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_7975){
return (function (state_7930){
var state_val_7931 = (state_7930[(1)]);
if((state_val_7931 === (1))){
var inst_7924 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_7925 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_7926 = cljs.core.PersistentHashMap.fromArrays(inst_7924,inst_7925);
var state_7930__$1 = state_7930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7930__$1,(2),app.t1.main.evt,inst_7926);
} else {
if((state_val_7931 === (2))){
var inst_7928 = (state_7930[(2)]);
var state_7930__$1 = state_7930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7930__$1,inst_7928);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_7975))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_7975){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_7932 = [null,null,null,null,null,null,null];
(statearr_7932[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_7932[(1)] = (1));

return statearr_7932;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_7930){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7933){if((e7933 instanceof Object)){
var ex__2796__auto__ = e7933;
var statearr_7934_7976 = state_7930;
(statearr_7934_7976[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7977 = state_7930;
state_7930 = G__7977;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_7930){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_7930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_7975))
})();
var state__2884__auto__ = (function (){var statearr_7935 = f__2883__auto__.call(null);
(statearr_7935[(6)] = c__2882__auto__);

return statearr_7935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_7975))
);

return c__2882__auto__;
});})(canvas_7975))
,false);

canvas_7975.addEventListener("mouseup",((function (canvas_7975){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_7975){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_7975){
return (function (state_7942){
var state_val_7943 = (state_7942[(1)]);
if((state_val_7943 === (1))){
var inst_7936 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_7937 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_7938 = cljs.core.PersistentHashMap.fromArrays(inst_7936,inst_7937);
var state_7942__$1 = state_7942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7942__$1,(2),app.t1.main.evt,inst_7938);
} else {
if((state_val_7943 === (2))){
var inst_7940 = (state_7942[(2)]);
var state_7942__$1 = state_7942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7942__$1,inst_7940);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_7975))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_7975){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_7944 = [null,null,null,null,null,null,null];
(statearr_7944[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_7944[(1)] = (1));

return statearr_7944;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_7942){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7945){if((e7945 instanceof Object)){
var ex__2796__auto__ = e7945;
var statearr_7946_7978 = state_7942;
(statearr_7946_7978[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7979 = state_7942;
state_7942 = G__7979;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_7942){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_7942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_7975))
})();
var state__2884__auto__ = (function (){var statearr_7947 = f__2883__auto__.call(null);
(statearr_7947[(6)] = c__2882__auto__);

return statearr_7947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_7975))
);

return c__2882__auto__;
});})(canvas_7975))
,false);

canvas_7975.addEventListener("mousemove",((function (canvas_7975){
return (function (evt2){
var rect = canvas_7975.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,rect,x,y,canvas_7975){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,rect,x,y,canvas_7975){
return (function (state_7957){
var state_val_7958 = (state_7957[(1)]);
if((state_val_7958 === (1))){
var inst_7948 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_7949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7950 = [x,y];
var inst_7951 = (new cljs.core.PersistentVector(null,2,(5),inst_7949,inst_7950,null));
var inst_7952 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_7951];
var inst_7953 = cljs.core.PersistentHashMap.fromArrays(inst_7948,inst_7952);
var state_7957__$1 = state_7957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7957__$1,(2),app.t1.main.evt,inst_7953);
} else {
if((state_val_7958 === (2))){
var inst_7955 = (state_7957[(2)]);
var state_7957__$1 = state_7957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7957__$1,inst_7955);
} else {
return null;
}
}
});})(c__2882__auto__,rect,x,y,canvas_7975))
;
return ((function (switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_7975){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_7959 = [null,null,null,null,null,null,null];
(statearr_7959[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_7959[(1)] = (1));

return statearr_7959;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_7957){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7960){if((e7960 instanceof Object)){
var ex__2796__auto__ = e7960;
var statearr_7961_7980 = state_7957;
(statearr_7961_7980[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7981 = state_7957;
state_7957 = G__7981;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_7957){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_7957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_7975))
})();
var state__2884__auto__ = (function (){var statearr_7962 = f__2883__auto__.call(null);
(statearr_7962[(6)] = c__2882__auto__);

return statearr_7962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,rect,x,y,canvas_7975))
);

return c__2882__auto__;
});})(canvas_7975))
,false);

setInterval(((function (canvas_7975){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_7975){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_7975){
return (function (state_7969){
var state_val_7970 = (state_7969[(1)]);
if((state_val_7970 === (1))){
var inst_7963 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_7964 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_7965 = cljs.core.PersistentHashMap.fromArrays(inst_7963,inst_7964);
var state_7969__$1 = state_7969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7969__$1,(2),app.t1.main.evt,inst_7965);
} else {
if((state_val_7970 === (2))){
var inst_7967 = (state_7969[(2)]);
var state_7969__$1 = state_7969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7969__$1,inst_7967);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_7975))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_7975){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_7971 = [null,null,null,null,null,null,null];
(statearr_7971[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_7971[(1)] = (1));

return statearr_7971;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_7969){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7972){if((e7972 instanceof Object)){
var ex__2796__auto__ = e7972;
var statearr_7973_7982 = state_7969;
(statearr_7973_7982[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7983 = state_7969;
state_7969 = G__7983;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_7969){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_7969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_7975))
})();
var state__2884__auto__ = (function (){var statearr_7974 = f__2883__auto__.call(null);
(statearr_7974[(6)] = c__2882__auto__);

return statearr_7974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_7975))
);

return c__2882__auto__;
});})(canvas_7975))
,(33));
var c__2882__auto___8099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8099){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8099){
return (function (state_8066){
var state_val_8067 = (state_8066[(1)]);
if((state_val_8067 === (7))){
var inst_8062 = (state_8066[(2)]);
var state_8066__$1 = state_8066;
var statearr_8069_8100 = state_8066__$1;
(statearr_8069_8100[(2)] = inst_8062);

(statearr_8069_8100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (1))){
var inst_7984 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_7985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7986 = [(0),(0)];
var inst_7987 = (new cljs.core.PersistentVector(null,2,(5),inst_7985,inst_7986,null));
var inst_7988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7990 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_7991 = (new cljs.core.PersistentVector(null,4,(5),inst_7989,inst_7990,null));
var inst_7992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7993 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_7994 = (new cljs.core.PersistentVector(null,4,(5),inst_7992,inst_7993,null));
var inst_7995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7996 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_7997 = (new cljs.core.PersistentVector(null,4,(5),inst_7995,inst_7996,null));
var inst_7998 = [inst_7991,inst_7994,inst_7997];
var inst_7999 = (new cljs.core.PersistentVector(null,3,(5),inst_7988,inst_7998,null));
var inst_8000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8002 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_8003 = (new cljs.core.PersistentVector(null,4,(5),inst_8001,inst_8002,null));
var inst_8004 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8005 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_8006 = (new cljs.core.PersistentVector(null,4,(5),inst_8004,inst_8005,null));
var inst_8007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8008 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_8009 = (new cljs.core.PersistentVector(null,4,(5),inst_8007,inst_8008,null));
var inst_8010 = [inst_8003,inst_8006,inst_8009];
var inst_8011 = (new cljs.core.PersistentVector(null,3,(5),inst_8000,inst_8010,null));
var inst_8012 = cljs.core.PersistentHashSet.EMPTY;
var inst_8013 = [false,inst_7987,inst_7999,inst_8011,null,null,inst_8012];
var inst_8014 = cljs.core.PersistentHashMap.fromArrays(inst_7984,inst_8013);
var inst_8015 = inst_8014;
var state_8066__$1 = (function (){var statearr_8070 = state_8066;
(statearr_8070[(7)] = inst_8015);

return statearr_8070;
})();
var statearr_8071_8101 = state_8066__$1;
(statearr_8071_8101[(2)] = null);

(statearr_8071_8101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (4))){
var inst_8019 = (state_8066[(8)]);
var inst_8023 = (state_8066[(9)]);
var inst_8019__$1 = (state_8066[(2)]);
var inst_8023__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8019__$1);
var inst_8024 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_8023__$1);
var state_8066__$1 = (function (){var statearr_8072 = state_8066;
(statearr_8072[(8)] = inst_8019__$1);

(statearr_8072[(9)] = inst_8023__$1);

return statearr_8072;
})();
if(inst_8024){
var statearr_8073_8102 = state_8066__$1;
(statearr_8073_8102[(1)] = (5));

} else {
var statearr_8074_8103 = state_8066__$1;
(statearr_8074_8103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (15))){
var inst_8015 = (state_8066[(7)]);
var tmp8068 = inst_8015;
var inst_8015__$1 = tmp8068;
var state_8066__$1 = (function (){var statearr_8075 = state_8066;
(statearr_8075[(7)] = inst_8015__$1);

return statearr_8075;
})();
var statearr_8076_8104 = state_8066__$1;
(statearr_8076_8104[(2)] = null);

(statearr_8076_8104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (13))){
var inst_8058 = (state_8066[(2)]);
var state_8066__$1 = state_8066;
var statearr_8077_8105 = state_8066__$1;
(statearr_8077_8105[(2)] = inst_8058);

(statearr_8077_8105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (6))){
var inst_8023 = (state_8066[(9)]);
var inst_8029 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_8023);
var state_8066__$1 = state_8066;
if(inst_8029){
var statearr_8078_8106 = state_8066__$1;
(statearr_8078_8106[(1)] = (8));

} else {
var statearr_8079_8107 = state_8066__$1;
(statearr_8079_8107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (3))){
var inst_8064 = (state_8066[(2)]);
var state_8066__$1 = state_8066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8066__$1,inst_8064);
} else {
if((state_val_8067 === (12))){
var inst_8023 = (state_8066[(9)]);
var inst_8046 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_8023);
var state_8066__$1 = state_8066;
if(inst_8046){
var statearr_8080_8108 = state_8066__$1;
(statearr_8080_8108[(1)] = (14));

} else {
var statearr_8081_8109 = state_8066__$1;
(statearr_8081_8109[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (2))){
var inst_8015 = (state_8066[(7)]);
var inst_8017 = app.t1.main.model = inst_8015;
var state_8066__$1 = (function (){var statearr_8082 = state_8066;
(statearr_8082[(10)] = inst_8017);

return statearr_8082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8066__$1,(4),app.t1.main.evt);
} else {
if((state_val_8067 === (11))){
var inst_8015 = (state_8066[(7)]);
var inst_8040 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_8041 = [false,true];
var inst_8042 = cljs.core.PersistentHashMap.fromArrays(inst_8040,inst_8041);
var inst_8043 = cljs.core.merge.call(null,inst_8015,inst_8042);
var inst_8015__$1 = inst_8043;
var state_8066__$1 = (function (){var statearr_8083 = state_8066;
(statearr_8083[(7)] = inst_8015__$1);

return statearr_8083;
})();
var statearr_8084_8110 = state_8066__$1;
(statearr_8084_8110[(2)] = null);

(statearr_8084_8110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (9))){
var inst_8023 = (state_8066[(9)]);
var inst_8038 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_8023);
var state_8066__$1 = state_8066;
if(inst_8038){
var statearr_8085_8111 = state_8066__$1;
(statearr_8085_8111[(1)] = (11));

} else {
var statearr_8086_8112 = state_8066__$1;
(statearr_8086_8112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (5))){
var inst_8015 = (state_8066[(7)]);
var inst_8026 = app.t1.main.update.call(null,inst_8015);
var inst_8015__$1 = inst_8026;
var state_8066__$1 = (function (){var statearr_8087 = state_8066;
(statearr_8087[(7)] = inst_8015__$1);

return statearr_8087;
})();
var statearr_8088_8113 = state_8066__$1;
(statearr_8088_8113[(2)] = null);

(statearr_8088_8113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (14))){
var inst_8015 = (state_8066[(7)]);
var inst_8048 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_8049 = [true,true];
var inst_8050 = cljs.core.PersistentHashMap.fromArrays(inst_8048,inst_8049);
var inst_8051 = cljs.core.merge.call(null,inst_8015,inst_8050);
var inst_8015__$1 = inst_8051;
var state_8066__$1 = (function (){var statearr_8089 = state_8066;
(statearr_8089[(7)] = inst_8015__$1);

return statearr_8089;
})();
var statearr_8090_8114 = state_8066__$1;
(statearr_8090_8114[(2)] = null);

(statearr_8090_8114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (16))){
var inst_8056 = (state_8066[(2)]);
var state_8066__$1 = state_8066;
var statearr_8091_8115 = state_8066__$1;
(statearr_8091_8115[(2)] = inst_8056);

(statearr_8091_8115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (10))){
var inst_8060 = (state_8066[(2)]);
var state_8066__$1 = state_8066;
var statearr_8092_8116 = state_8066__$1;
(statearr_8092_8116[(2)] = inst_8060);

(statearr_8092_8116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8067 === (8))){
var inst_8019 = (state_8066[(8)]);
var inst_8015 = (state_8066[(7)]);
var inst_8031 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_8032 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_8019);
var inst_8033 = [inst_8032];
var inst_8034 = cljs.core.PersistentHashMap.fromArrays(inst_8031,inst_8033);
var inst_8035 = cljs.core.merge.call(null,inst_8015,inst_8034);
var inst_8015__$1 = inst_8035;
var state_8066__$1 = (function (){var statearr_8093 = state_8066;
(statearr_8093[(7)] = inst_8015__$1);

return statearr_8093;
})();
var statearr_8094_8117 = state_8066__$1;
(statearr_8094_8117[(2)] = null);

(statearr_8094_8117[(1)] = (2));


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
});})(c__2882__auto___8099))
;
return ((function (switch__2792__auto__,c__2882__auto___8099){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_8095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8095[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_8095[(1)] = (1));

return statearr_8095;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_8066){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8096){if((e8096 instanceof Object)){
var ex__2796__auto__ = e8096;
var statearr_8097_8118 = state_8066;
(statearr_8097_8118[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8119 = state_8066;
state_8066 = G__8119;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_8066){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_8066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8099))
})();
var state__2884__auto__ = (function (){var statearr_8098 = f__2883__auto__.call(null);
(statearr_8098[(6)] = c__2882__auto___8099);

return statearr_8098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8099))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__8120){
var vec__8121 = p__8120;
var x = cljs.core.nth.call(null,vec__8121,(0),null);
var y = cljs.core.nth.call(null,vec__8121,(1),null);
var radius = cljs.core.nth.call(null,vec__8121,(2),null);
return ((radius * radius) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.take.call(null,(2),cljs.core.repeat.call(null,cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__8124 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.call(null,vec__8124,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8124,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__8124,(2),null);
var a1 = cljs.core.nth.call(null,vec__8124,(3),null);
var vec__8127 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.call(null,vec__8127,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__8127,(1),null);
var ___$5 = cljs.core.nth.call(null,vec__8127,(2),null);
var a2 = cljs.core.nth.call(null,vec__8127,(3),null);
return cljs.core._EQ_.call(null,a1,a2);
});
app.t1.main.update = (function app$t1$main$update(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__8130){
var vec__8131 = p__8130;
var _ = cljs.core.nth.call(null,vec__8131,(0),null);
var selected = cljs.core.nth.call(null,vec__8131,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__8134){
var vec__8135 = p__8134;
var _ = cljs.core.nth.call(null,vec__8135,(0),null);
var selected = cljs.core.nth.call(null,vec__8135,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(ctx)))));
if(cljs.core.not.call(null,idx)){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null));
} else {
var s1 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(ctx);
var s2 = idx;
var pass = app.t1.main.checkAnswer.call(null,ctx,s1,s2);
if(cljs.core.not.call(null,pass)){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null));
} else {
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,s2], null))], null));
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
if(cljs.core.not.call(null,app.t1.main.model)){
return pc.text("no model",(30),(30));
} else {
var mousePos = new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
var vec__8138 = mousePos;
var mx = cljs.core.nth.call(null,vec__8138,(0),null);
var my = cljs.core.nth.call(null,vec__8138,(1),null);
pc.background((200));

cljs.core.dorun.call(null,(function (){var seq__8141 = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__8142 = null;
var count__8143 = (0);
var i__8144 = (0);
while(true){
if((i__8144 < count__8143)){
var c = cljs.core._nth.call(null,chunk__8142,i__8144);
var isLeft_8176 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__8145_8177 = c;
var x_8178 = cljs.core.nth.call(null,vec__8145_8177,(0),null);
var y_8179 = cljs.core.nth.call(null,vec__8145_8177,(1),null);
var radius_8180 = cljs.core.nth.call(null,vec__8145_8177,(2),null);
var a_8181 = cljs.core.nth.call(null,vec__8145_8177,(3),null);
var radius2_8182 = (radius_8180 * (2));
var showText_8183 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_8181,(cljs.core.truth_(isLeft_8176)?(0):(1))], null));
var showTextOffsetX_8184 = (- (pc.textWidth(showText_8183) / (2)));
var selected_8185 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_8185)){
pc.fill((255));

pc.ellipse(x_8178,y_8179,radius2_8182,radius2_8182);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_8178,y_8179,radius2_8182,radius2_8182);
}

pc.fill((0));

pc.text(showText_8183,(x_8178 + showTextOffsetX_8184),y_8179);


var G__8186 = seq__8141;
var G__8187 = chunk__8142;
var G__8188 = count__8143;
var G__8189 = (i__8144 + (1));
seq__8141 = G__8186;
chunk__8142 = G__8187;
count__8143 = G__8188;
i__8144 = G__8189;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8141);
if(temp__5457__auto__){
var seq__8141__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8141__$1);
var G__8190 = cljs.core.chunk_rest.call(null,seq__8141__$1);
var G__8191 = c__4319__auto__;
var G__8192 = cljs.core.count.call(null,c__4319__auto__);
var G__8193 = (0);
seq__8141 = G__8190;
chunk__8142 = G__8191;
count__8143 = G__8192;
i__8144 = G__8193;
continue;
} else {
var c = cljs.core.first.call(null,seq__8141__$1);
var isLeft_8194 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__8148_8195 = c;
var x_8196 = cljs.core.nth.call(null,vec__8148_8195,(0),null);
var y_8197 = cljs.core.nth.call(null,vec__8148_8195,(1),null);
var radius_8198 = cljs.core.nth.call(null,vec__8148_8195,(2),null);
var a_8199 = cljs.core.nth.call(null,vec__8148_8195,(3),null);
var radius2_8200 = (radius_8198 * (2));
var showText_8201 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_8199,(cljs.core.truth_(isLeft_8194)?(0):(1))], null));
var showTextOffsetX_8202 = (- (pc.textWidth(showText_8201) / (2)));
var selected_8203 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_8203)){
pc.fill((255));

pc.ellipse(x_8196,y_8197,radius2_8200,radius2_8200);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_8196,y_8197,radius2_8200,radius2_8200);
}

pc.fill((0));

pc.text(showText_8201,(x_8196 + showTextOffsetX_8202),y_8197);


var G__8204 = cljs.core.next.call(null,seq__8141__$1);
var G__8205 = null;
var G__8206 = (0);
var G__8207 = (0);
seq__8141 = G__8204;
chunk__8142 = G__8205;
count__8143 = G__8206;
i__8144 = G__8207;
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

var temp__5455__auto___8208 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5455__auto___8208)){
var s1_8209 = temp__5455__auto___8208;
var vec__8151_8210 = cljs.core.get_in.call(null,app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_8209], null));
var x_8211 = cljs.core.nth.call(null,vec__8151_8210,(0),null);
var y_8212 = cljs.core.nth.call(null,vec__8151_8210,(1),null);
pc.line(x_8211,y_8212,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.call(null,(function (){var seq__8154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__8155 = null;
var count__8156 = (0);
var i__8157 = (0);
while(true){
if((i__8157 < count__8156)){
var line = cljs.core._nth.call(null,chunk__8155,i__8157);
var vec__8158_8213 = line;
var s1_8214 = cljs.core.nth.call(null,vec__8158_8213,(0),null);
var s2_8215 = cljs.core.nth.call(null,vec__8158_8213,(1),null);
var vec__8161_8216 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_8214);
var x_8217 = cljs.core.nth.call(null,vec__8161_8216,(0),null);
var y_8218 = cljs.core.nth.call(null,vec__8161_8216,(1),null);
var vec__8164_8219 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_8215);
var x2_8220 = cljs.core.nth.call(null,vec__8164_8219,(0),null);
var y2_8221 = cljs.core.nth.call(null,vec__8164_8219,(1),null);
pc.line(x_8217,y_8218,x2_8220,y2_8221);


var G__8222 = seq__8154;
var G__8223 = chunk__8155;
var G__8224 = count__8156;
var G__8225 = (i__8157 + (1));
seq__8154 = G__8222;
chunk__8155 = G__8223;
count__8156 = G__8224;
i__8157 = G__8225;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8154);
if(temp__5457__auto__){
var seq__8154__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8154__$1);
var G__8226 = cljs.core.chunk_rest.call(null,seq__8154__$1);
var G__8227 = c__4319__auto__;
var G__8228 = cljs.core.count.call(null,c__4319__auto__);
var G__8229 = (0);
seq__8154 = G__8226;
chunk__8155 = G__8227;
count__8156 = G__8228;
i__8157 = G__8229;
continue;
} else {
var line = cljs.core.first.call(null,seq__8154__$1);
var vec__8167_8230 = line;
var s1_8231 = cljs.core.nth.call(null,vec__8167_8230,(0),null);
var s2_8232 = cljs.core.nth.call(null,vec__8167_8230,(1),null);
var vec__8170_8233 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_8231);
var x_8234 = cljs.core.nth.call(null,vec__8170_8233,(0),null);
var y_8235 = cljs.core.nth.call(null,vec__8170_8233,(1),null);
var vec__8173_8236 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_8232);
var x2_8237 = cljs.core.nth.call(null,vec__8173_8236,(0),null);
var y2_8238 = cljs.core.nth.call(null,vec__8173_8236,(1),null);
pc.line(x_8234,y_8235,x2_8237,y2_8238);


var G__8239 = cljs.core.next.call(null,seq__8154__$1);
var G__8240 = null;
var G__8241 = (0);
var G__8242 = (0);
seq__8154 = G__8239;
chunk__8155 = G__8240;
count__8156 = G__8241;
i__8157 = G__8242;
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
var canvas_8243 = document.getElementById("canvas1");
var p_8244 = (new Processing(canvas_8243,app.t1.main.sketchProc));

//# sourceMappingURL=main.js.map
