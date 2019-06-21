// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.call(null);
var canvas_8498 = document.getElementById("canvas1");
canvas_8498.addEventListener("mousedown",((function (canvas_8498){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,canvas_8498){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,canvas_8498){
return (function (state_8453){
var state_val_8454 = (state_8453[(1)]);
if((state_val_8454 === (1))){
var inst_8447 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8448 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_8449 = cljs.core.PersistentHashMap.fromArrays(inst_8447,inst_8448);
var state_8453__$1 = state_8453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8453__$1,(2),app.t1.main.evt,inst_8449);
} else {
if((state_val_8454 === (2))){
var inst_8451 = (state_8453[(2)]);
var state_8453__$1 = state_8453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8453__$1,inst_8451);
} else {
return null;
}
}
});})(c__2885__auto__,canvas_8498))
;
return ((function (switch__2795__auto__,c__2885__auto__,canvas_8498){
return (function() {
var app$t1$main$state_machine__2796__auto__ = null;
var app$t1$main$state_machine__2796__auto____0 = (function (){
var statearr_8455 = [null,null,null,null,null,null,null];
(statearr_8455[(0)] = app$t1$main$state_machine__2796__auto__);

(statearr_8455[(1)] = (1));

return statearr_8455;
});
var app$t1$main$state_machine__2796__auto____1 = (function (state_8453){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8456){if((e8456 instanceof Object)){
var ex__2799__auto__ = e8456;
var statearr_8457_8499 = state_8453;
(statearr_8457_8499[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8500 = state_8453;
state_8453 = G__8500;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t1$main$state_machine__2796__auto__ = function(state_8453){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2796__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2796__auto____1.call(this,state_8453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2796__auto____0;
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2796__auto____1;
return app$t1$main$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,canvas_8498))
})();
var state__2887__auto__ = (function (){var statearr_8458 = f__2886__auto__.call(null);
(statearr_8458[(6)] = c__2885__auto__);

return statearr_8458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,canvas_8498))
);

return c__2885__auto__;
});})(canvas_8498))
,false);

canvas_8498.addEventListener("mouseup",((function (canvas_8498){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,canvas_8498){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,canvas_8498){
return (function (state_8465){
var state_val_8466 = (state_8465[(1)]);
if((state_val_8466 === (1))){
var inst_8459 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8460 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_8461 = cljs.core.PersistentHashMap.fromArrays(inst_8459,inst_8460);
var state_8465__$1 = state_8465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8465__$1,(2),app.t1.main.evt,inst_8461);
} else {
if((state_val_8466 === (2))){
var inst_8463 = (state_8465[(2)]);
var state_8465__$1 = state_8465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8465__$1,inst_8463);
} else {
return null;
}
}
});})(c__2885__auto__,canvas_8498))
;
return ((function (switch__2795__auto__,c__2885__auto__,canvas_8498){
return (function() {
var app$t1$main$state_machine__2796__auto__ = null;
var app$t1$main$state_machine__2796__auto____0 = (function (){
var statearr_8467 = [null,null,null,null,null,null,null];
(statearr_8467[(0)] = app$t1$main$state_machine__2796__auto__);

(statearr_8467[(1)] = (1));

return statearr_8467;
});
var app$t1$main$state_machine__2796__auto____1 = (function (state_8465){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8468){if((e8468 instanceof Object)){
var ex__2799__auto__ = e8468;
var statearr_8469_8501 = state_8465;
(statearr_8469_8501[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8502 = state_8465;
state_8465 = G__8502;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t1$main$state_machine__2796__auto__ = function(state_8465){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2796__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2796__auto____1.call(this,state_8465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2796__auto____0;
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2796__auto____1;
return app$t1$main$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,canvas_8498))
})();
var state__2887__auto__ = (function (){var statearr_8470 = f__2886__auto__.call(null);
(statearr_8470[(6)] = c__2885__auto__);

return statearr_8470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,canvas_8498))
);

return c__2885__auto__;
});})(canvas_8498))
,false);

canvas_8498.addEventListener("mousemove",((function (canvas_8498){
return (function (evt2){
var rect = canvas_8498.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,rect,x,y,canvas_8498){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,rect,x,y,canvas_8498){
return (function (state_8480){
var state_val_8481 = (state_8480[(1)]);
if((state_val_8481 === (1))){
var inst_8471 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_8472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8473 = [x,y];
var inst_8474 = (new cljs.core.PersistentVector(null,2,(5),inst_8472,inst_8473,null));
var inst_8475 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_8474];
var inst_8476 = cljs.core.PersistentHashMap.fromArrays(inst_8471,inst_8475);
var state_8480__$1 = state_8480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8480__$1,(2),app.t1.main.evt,inst_8476);
} else {
if((state_val_8481 === (2))){
var inst_8478 = (state_8480[(2)]);
var state_8480__$1 = state_8480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8480__$1,inst_8478);
} else {
return null;
}
}
});})(c__2885__auto__,rect,x,y,canvas_8498))
;
return ((function (switch__2795__auto__,c__2885__auto__,rect,x,y,canvas_8498){
return (function() {
var app$t1$main$state_machine__2796__auto__ = null;
var app$t1$main$state_machine__2796__auto____0 = (function (){
var statearr_8482 = [null,null,null,null,null,null,null];
(statearr_8482[(0)] = app$t1$main$state_machine__2796__auto__);

(statearr_8482[(1)] = (1));

return statearr_8482;
});
var app$t1$main$state_machine__2796__auto____1 = (function (state_8480){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8483){if((e8483 instanceof Object)){
var ex__2799__auto__ = e8483;
var statearr_8484_8503 = state_8480;
(statearr_8484_8503[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8504 = state_8480;
state_8480 = G__8504;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t1$main$state_machine__2796__auto__ = function(state_8480){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2796__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2796__auto____1.call(this,state_8480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2796__auto____0;
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2796__auto____1;
return app$t1$main$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,rect,x,y,canvas_8498))
})();
var state__2887__auto__ = (function (){var statearr_8485 = f__2886__auto__.call(null);
(statearr_8485[(6)] = c__2885__auto__);

return statearr_8485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,rect,x,y,canvas_8498))
);

return c__2885__auto__;
});})(canvas_8498))
,false);

setInterval(((function (canvas_8498){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,canvas_8498){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,canvas_8498){
return (function (state_8492){
var state_val_8493 = (state_8492[(1)]);
if((state_val_8493 === (1))){
var inst_8486 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8487 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8488 = cljs.core.PersistentHashMap.fromArrays(inst_8486,inst_8487);
var state_8492__$1 = state_8492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8492__$1,(2),app.t1.main.evt,inst_8488);
} else {
if((state_val_8493 === (2))){
var inst_8490 = (state_8492[(2)]);
var state_8492__$1 = state_8492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8492__$1,inst_8490);
} else {
return null;
}
}
});})(c__2885__auto__,canvas_8498))
;
return ((function (switch__2795__auto__,c__2885__auto__,canvas_8498){
return (function() {
var app$t1$main$state_machine__2796__auto__ = null;
var app$t1$main$state_machine__2796__auto____0 = (function (){
var statearr_8494 = [null,null,null,null,null,null,null];
(statearr_8494[(0)] = app$t1$main$state_machine__2796__auto__);

(statearr_8494[(1)] = (1));

return statearr_8494;
});
var app$t1$main$state_machine__2796__auto____1 = (function (state_8492){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8495){if((e8495 instanceof Object)){
var ex__2799__auto__ = e8495;
var statearr_8496_8505 = state_8492;
(statearr_8496_8505[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8506 = state_8492;
state_8492 = G__8506;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t1$main$state_machine__2796__auto__ = function(state_8492){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2796__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2796__auto____1.call(this,state_8492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2796__auto____0;
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2796__auto____1;
return app$t1$main$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,canvas_8498))
})();
var state__2887__auto__ = (function (){var statearr_8497 = f__2886__auto__.call(null);
(statearr_8497[(6)] = c__2885__auto__);

return statearr_8497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,canvas_8498))
);

return c__2885__auto__;
});})(canvas_8498))
,(33));
var c__2885__auto___8622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___8622){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___8622){
return (function (state_8589){
var state_val_8590 = (state_8589[(1)]);
if((state_val_8590 === (7))){
var inst_8585 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8592_8623 = state_8589__$1;
(statearr_8592_8623[(2)] = inst_8585);

(statearr_8592_8623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (1))){
var inst_8507 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_8508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8509 = [(0),(0)];
var inst_8510 = (new cljs.core.PersistentVector(null,2,(5),inst_8508,inst_8509,null));
var inst_8511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8513 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_8514 = (new cljs.core.PersistentVector(null,4,(5),inst_8512,inst_8513,null));
var inst_8515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8516 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_8517 = (new cljs.core.PersistentVector(null,4,(5),inst_8515,inst_8516,null));
var inst_8518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8519 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_8520 = (new cljs.core.PersistentVector(null,4,(5),inst_8518,inst_8519,null));
var inst_8521 = [inst_8514,inst_8517,inst_8520];
var inst_8522 = (new cljs.core.PersistentVector(null,3,(5),inst_8511,inst_8521,null));
var inst_8523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8525 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_8526 = (new cljs.core.PersistentVector(null,4,(5),inst_8524,inst_8525,null));
var inst_8527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8528 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_8529 = (new cljs.core.PersistentVector(null,4,(5),inst_8527,inst_8528,null));
var inst_8530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8531 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_8532 = (new cljs.core.PersistentVector(null,4,(5),inst_8530,inst_8531,null));
var inst_8533 = [inst_8526,inst_8529,inst_8532];
var inst_8534 = (new cljs.core.PersistentVector(null,3,(5),inst_8523,inst_8533,null));
var inst_8535 = cljs.core.PersistentHashSet.EMPTY;
var inst_8536 = [false,inst_8510,inst_8522,inst_8534,null,null,inst_8535];
var inst_8537 = cljs.core.PersistentHashMap.fromArrays(inst_8507,inst_8536);
var inst_8538 = inst_8537;
var state_8589__$1 = (function (){var statearr_8593 = state_8589;
(statearr_8593[(7)] = inst_8538);

return statearr_8593;
})();
var statearr_8594_8624 = state_8589__$1;
(statearr_8594_8624[(2)] = null);

(statearr_8594_8624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (4))){
var inst_8546 = (state_8589[(8)]);
var inst_8542 = (state_8589[(9)]);
var inst_8542__$1 = (state_8589[(2)]);
var inst_8546__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8542__$1);
var inst_8547 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_8546__$1);
var state_8589__$1 = (function (){var statearr_8595 = state_8589;
(statearr_8595[(8)] = inst_8546__$1);

(statearr_8595[(9)] = inst_8542__$1);

return statearr_8595;
})();
if(inst_8547){
var statearr_8596_8625 = state_8589__$1;
(statearr_8596_8625[(1)] = (5));

} else {
var statearr_8597_8626 = state_8589__$1;
(statearr_8597_8626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (15))){
var inst_8538 = (state_8589[(7)]);
var tmp8591 = inst_8538;
var inst_8538__$1 = tmp8591;
var state_8589__$1 = (function (){var statearr_8598 = state_8589;
(statearr_8598[(7)] = inst_8538__$1);

return statearr_8598;
})();
var statearr_8599_8627 = state_8589__$1;
(statearr_8599_8627[(2)] = null);

(statearr_8599_8627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (13))){
var inst_8581 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8600_8628 = state_8589__$1;
(statearr_8600_8628[(2)] = inst_8581);

(statearr_8600_8628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (6))){
var inst_8546 = (state_8589[(8)]);
var inst_8552 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_8546);
var state_8589__$1 = state_8589;
if(inst_8552){
var statearr_8601_8629 = state_8589__$1;
(statearr_8601_8629[(1)] = (8));

} else {
var statearr_8602_8630 = state_8589__$1;
(statearr_8602_8630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (3))){
var inst_8587 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8589__$1,inst_8587);
} else {
if((state_val_8590 === (12))){
var inst_8546 = (state_8589[(8)]);
var inst_8569 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_8546);
var state_8589__$1 = state_8589;
if(inst_8569){
var statearr_8603_8631 = state_8589__$1;
(statearr_8603_8631[(1)] = (14));

} else {
var statearr_8604_8632 = state_8589__$1;
(statearr_8604_8632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (2))){
var inst_8538 = (state_8589[(7)]);
var inst_8540 = app.t1.main.model = inst_8538;
var state_8589__$1 = (function (){var statearr_8605 = state_8589;
(statearr_8605[(10)] = inst_8540);

return statearr_8605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8589__$1,(4),app.t1.main.evt);
} else {
if((state_val_8590 === (11))){
var inst_8538 = (state_8589[(7)]);
var inst_8563 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_8564 = [false,true];
var inst_8565 = cljs.core.PersistentHashMap.fromArrays(inst_8563,inst_8564);
var inst_8566 = cljs.core.merge.call(null,inst_8538,inst_8565);
var inst_8538__$1 = inst_8566;
var state_8589__$1 = (function (){var statearr_8606 = state_8589;
(statearr_8606[(7)] = inst_8538__$1);

return statearr_8606;
})();
var statearr_8607_8633 = state_8589__$1;
(statearr_8607_8633[(2)] = null);

(statearr_8607_8633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (9))){
var inst_8546 = (state_8589[(8)]);
var inst_8561 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_8546);
var state_8589__$1 = state_8589;
if(inst_8561){
var statearr_8608_8634 = state_8589__$1;
(statearr_8608_8634[(1)] = (11));

} else {
var statearr_8609_8635 = state_8589__$1;
(statearr_8609_8635[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (5))){
var inst_8538 = (state_8589[(7)]);
var inst_8549 = app.t1.main.update.call(null,inst_8538);
var inst_8538__$1 = inst_8549;
var state_8589__$1 = (function (){var statearr_8610 = state_8589;
(statearr_8610[(7)] = inst_8538__$1);

return statearr_8610;
})();
var statearr_8611_8636 = state_8589__$1;
(statearr_8611_8636[(2)] = null);

(statearr_8611_8636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (14))){
var inst_8538 = (state_8589[(7)]);
var inst_8571 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_8572 = [true,true];
var inst_8573 = cljs.core.PersistentHashMap.fromArrays(inst_8571,inst_8572);
var inst_8574 = cljs.core.merge.call(null,inst_8538,inst_8573);
var inst_8538__$1 = inst_8574;
var state_8589__$1 = (function (){var statearr_8612 = state_8589;
(statearr_8612[(7)] = inst_8538__$1);

return statearr_8612;
})();
var statearr_8613_8637 = state_8589__$1;
(statearr_8613_8637[(2)] = null);

(statearr_8613_8637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (16))){
var inst_8579 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8614_8638 = state_8589__$1;
(statearr_8614_8638[(2)] = inst_8579);

(statearr_8614_8638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (10))){
var inst_8583 = (state_8589[(2)]);
var state_8589__$1 = state_8589;
var statearr_8615_8639 = state_8589__$1;
(statearr_8615_8639[(2)] = inst_8583);

(statearr_8615_8639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8590 === (8))){
var inst_8538 = (state_8589[(7)]);
var inst_8542 = (state_8589[(9)]);
var inst_8554 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_8555 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_8542);
var inst_8556 = [inst_8555];
var inst_8557 = cljs.core.PersistentHashMap.fromArrays(inst_8554,inst_8556);
var inst_8558 = cljs.core.merge.call(null,inst_8538,inst_8557);
var inst_8538__$1 = inst_8558;
var state_8589__$1 = (function (){var statearr_8616 = state_8589;
(statearr_8616[(7)] = inst_8538__$1);

return statearr_8616;
})();
var statearr_8617_8640 = state_8589__$1;
(statearr_8617_8640[(2)] = null);

(statearr_8617_8640[(1)] = (2));


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
});})(c__2885__auto___8622))
;
return ((function (switch__2795__auto__,c__2885__auto___8622){
return (function() {
var app$t1$main$state_machine__2796__auto__ = null;
var app$t1$main$state_machine__2796__auto____0 = (function (){
var statearr_8618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8618[(0)] = app$t1$main$state_machine__2796__auto__);

(statearr_8618[(1)] = (1));

return statearr_8618;
});
var app$t1$main$state_machine__2796__auto____1 = (function (state_8589){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8619){if((e8619 instanceof Object)){
var ex__2799__auto__ = e8619;
var statearr_8620_8641 = state_8589;
(statearr_8620_8641[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8642 = state_8589;
state_8589 = G__8642;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t1$main$state_machine__2796__auto__ = function(state_8589){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2796__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2796__auto____1.call(this,state_8589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2796__auto____0;
app$t1$main$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2796__auto____1;
return app$t1$main$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___8622))
})();
var state__2887__auto__ = (function (){var statearr_8621 = f__2886__auto__.call(null);
(statearr_8621[(6)] = c__2885__auto___8622);

return statearr_8621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___8622))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__8643){
var vec__8644 = p__8643;
var x = cljs.core.nth.call(null,vec__8644,(0),null);
var y = cljs.core.nth.call(null,vec__8644,(1),null);
var radius = cljs.core.nth.call(null,vec__8644,(2),null);
return ((radius * radius) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.take.call(null,(2),cljs.core.repeat.call(null,cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__8647 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.call(null,vec__8647,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8647,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__8647,(2),null);
var a1 = cljs.core.nth.call(null,vec__8647,(3),null);
var vec__8650 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.call(null,vec__8650,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__8650,(1),null);
var ___$5 = cljs.core.nth.call(null,vec__8650,(2),null);
var a2 = cljs.core.nth.call(null,vec__8650,(3),null);
return cljs.core._EQ_.call(null,a1,a2);
});
app.t1.main.update = (function app$t1$main$update(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__8653){
var vec__8654 = p__8653;
var _ = cljs.core.nth.call(null,vec__8654,(0),null);
var selected = cljs.core.nth.call(null,vec__8654,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__8657){
var vec__8658 = p__8657;
var _ = cljs.core.nth.call(null,vec__8658,(0),null);
var selected = cljs.core.nth.call(null,vec__8658,(1),null);
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
var vec__8661 = mousePos;
var mx = cljs.core.nth.call(null,vec__8661,(0),null);
var my = cljs.core.nth.call(null,vec__8661,(1),null);
pc.background((200));

cljs.core.dorun.call(null,(function (){var seq__8664 = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__8665 = null;
var count__8666 = (0);
var i__8667 = (0);
while(true){
if((i__8667 < count__8666)){
var c = cljs.core._nth.call(null,chunk__8665,i__8667);
var isLeft_8699 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__8668_8700 = c;
var x_8701 = cljs.core.nth.call(null,vec__8668_8700,(0),null);
var y_8702 = cljs.core.nth.call(null,vec__8668_8700,(1),null);
var radius_8703 = cljs.core.nth.call(null,vec__8668_8700,(2),null);
var a_8704 = cljs.core.nth.call(null,vec__8668_8700,(3),null);
var radius2_8705 = (radius_8703 * (2));
var showText_8706 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_8704,(cljs.core.truth_(isLeft_8699)?(0):(1))], null));
var showTextOffsetX_8707 = (- (pc.textWidth(showText_8706) / (2)));
var selected_8708 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_8708)){
pc.fill((255));

pc.ellipse(x_8701,y_8702,radius2_8705,radius2_8705);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_8701,y_8702,radius2_8705,radius2_8705);
}

pc.fill((0));

pc.text(showText_8706,(x_8701 + showTextOffsetX_8707),y_8702);


var G__8709 = seq__8664;
var G__8710 = chunk__8665;
var G__8711 = count__8666;
var G__8712 = (i__8667 + (1));
seq__8664 = G__8709;
chunk__8665 = G__8710;
count__8666 = G__8711;
i__8667 = G__8712;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8664);
if(temp__5457__auto__){
var seq__8664__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8664__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8664__$1);
var G__8713 = cljs.core.chunk_rest.call(null,seq__8664__$1);
var G__8714 = c__4319__auto__;
var G__8715 = cljs.core.count.call(null,c__4319__auto__);
var G__8716 = (0);
seq__8664 = G__8713;
chunk__8665 = G__8714;
count__8666 = G__8715;
i__8667 = G__8716;
continue;
} else {
var c = cljs.core.first.call(null,seq__8664__$1);
var isLeft_8717 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__8671_8718 = c;
var x_8719 = cljs.core.nth.call(null,vec__8671_8718,(0),null);
var y_8720 = cljs.core.nth.call(null,vec__8671_8718,(1),null);
var radius_8721 = cljs.core.nth.call(null,vec__8671_8718,(2),null);
var a_8722 = cljs.core.nth.call(null,vec__8671_8718,(3),null);
var radius2_8723 = (radius_8721 * (2));
var showText_8724 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_8722,(cljs.core.truth_(isLeft_8717)?(0):(1))], null));
var showTextOffsetX_8725 = (- (pc.textWidth(showText_8724) / (2)));
var selected_8726 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_8726)){
pc.fill((255));

pc.ellipse(x_8719,y_8720,radius2_8723,radius2_8723);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_8719,y_8720,radius2_8723,radius2_8723);
}

pc.fill((0));

pc.text(showText_8724,(x_8719 + showTextOffsetX_8725),y_8720);


var G__8727 = cljs.core.next.call(null,seq__8664__$1);
var G__8728 = null;
var G__8729 = (0);
var G__8730 = (0);
seq__8664 = G__8727;
chunk__8665 = G__8728;
count__8666 = G__8729;
i__8667 = G__8730;
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

var temp__5455__auto___8731 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5455__auto___8731)){
var s1_8732 = temp__5455__auto___8731;
var vec__8674_8733 = cljs.core.get_in.call(null,app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_8732], null));
var x_8734 = cljs.core.nth.call(null,vec__8674_8733,(0),null);
var y_8735 = cljs.core.nth.call(null,vec__8674_8733,(1),null);
pc.line(x_8734,y_8735,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.call(null,(function (){var seq__8677 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__8678 = null;
var count__8679 = (0);
var i__8680 = (0);
while(true){
if((i__8680 < count__8679)){
var line = cljs.core._nth.call(null,chunk__8678,i__8680);
var vec__8681_8736 = line;
var s1_8737 = cljs.core.nth.call(null,vec__8681_8736,(0),null);
var s2_8738 = cljs.core.nth.call(null,vec__8681_8736,(1),null);
var vec__8684_8739 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_8737);
var x_8740 = cljs.core.nth.call(null,vec__8684_8739,(0),null);
var y_8741 = cljs.core.nth.call(null,vec__8684_8739,(1),null);
var vec__8687_8742 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_8738);
var x2_8743 = cljs.core.nth.call(null,vec__8687_8742,(0),null);
var y2_8744 = cljs.core.nth.call(null,vec__8687_8742,(1),null);
pc.line(x_8740,y_8741,x2_8743,y2_8744);


var G__8745 = seq__8677;
var G__8746 = chunk__8678;
var G__8747 = count__8679;
var G__8748 = (i__8680 + (1));
seq__8677 = G__8745;
chunk__8678 = G__8746;
count__8679 = G__8747;
i__8680 = G__8748;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8677);
if(temp__5457__auto__){
var seq__8677__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8677__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8677__$1);
var G__8749 = cljs.core.chunk_rest.call(null,seq__8677__$1);
var G__8750 = c__4319__auto__;
var G__8751 = cljs.core.count.call(null,c__4319__auto__);
var G__8752 = (0);
seq__8677 = G__8749;
chunk__8678 = G__8750;
count__8679 = G__8751;
i__8680 = G__8752;
continue;
} else {
var line = cljs.core.first.call(null,seq__8677__$1);
var vec__8690_8753 = line;
var s1_8754 = cljs.core.nth.call(null,vec__8690_8753,(0),null);
var s2_8755 = cljs.core.nth.call(null,vec__8690_8753,(1),null);
var vec__8693_8756 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_8754);
var x_8757 = cljs.core.nth.call(null,vec__8693_8756,(0),null);
var y_8758 = cljs.core.nth.call(null,vec__8693_8756,(1),null);
var vec__8696_8759 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_8755);
var x2_8760 = cljs.core.nth.call(null,vec__8696_8759,(0),null);
var y2_8761 = cljs.core.nth.call(null,vec__8696_8759,(1),null);
pc.line(x_8757,y_8758,x2_8760,y2_8761);


var G__8762 = cljs.core.next.call(null,seq__8677__$1);
var G__8763 = null;
var G__8764 = (0);
var G__8765 = (0);
seq__8677 = G__8762;
chunk__8678 = G__8763;
count__8679 = G__8764;
i__8680 = G__8765;
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
var canvas_8766 = document.getElementById("canvas1");
var p_8767 = (new Processing(canvas_8766,app.t1.main.sketchProc));

//# sourceMappingURL=main.js.map
