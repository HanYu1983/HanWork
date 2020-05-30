goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var canvas_38768 = document.getElementById("canvas1");
canvas_38768.addEventListener("mousedown",((function (canvas_38768){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,canvas_38768){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,canvas_38768){
return (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (1))){
var inst_38361 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38362 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_38363 = cljs.core.PersistentHashMap.fromArrays(inst_38361,inst_38362);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38367__$1,(2),app.t1.main.evt,inst_38363);
} else {
if((state_val_38368 === (2))){
var inst_38365 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38367__$1,inst_38365);
} else {
return null;
}
}
});})(c__30812__auto__,canvas_38768))
;
return ((function (switch__30584__auto__,c__30812__auto__,canvas_38768){
return (function() {
var app$t1$main$state_machine__30585__auto__ = null;
var app$t1$main$state_machine__30585__auto____0 = (function (){
var statearr_38369 = [null,null,null,null,null,null,null];
(statearr_38369[(0)] = app$t1$main$state_machine__30585__auto__);

(statearr_38369[(1)] = (1));

return statearr_38369;
});
var app$t1$main$state_machine__30585__auto____1 = (function (state_38367){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38367);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38370){if((e38370 instanceof Object)){
var ex__30588__auto__ = e38370;
var statearr_38371_38769 = state_38367;
(statearr_38371_38769[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38770 = state_38367;
state_38367 = G__38770;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t1$main$state_machine__30585__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30585__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30585__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30585__auto____0;
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30585__auto____1;
return app$t1$main$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,canvas_38768))
})();
var state__30814__auto__ = (function (){var statearr_38372 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38372[(6)] = c__30812__auto__);

return statearr_38372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,canvas_38768))
);

return c__30812__auto__;
});})(canvas_38768))
,false);

canvas_38768.addEventListener("mouseup",((function (canvas_38768){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,canvas_38768){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,canvas_38768){
return (function (state_38379){
var state_val_38380 = (state_38379[(1)]);
if((state_val_38380 === (1))){
var inst_38373 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38374 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_38375 = cljs.core.PersistentHashMap.fromArrays(inst_38373,inst_38374);
var state_38379__$1 = state_38379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38379__$1,(2),app.t1.main.evt,inst_38375);
} else {
if((state_val_38380 === (2))){
var inst_38377 = (state_38379[(2)]);
var state_38379__$1 = state_38379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38379__$1,inst_38377);
} else {
return null;
}
}
});})(c__30812__auto__,canvas_38768))
;
return ((function (switch__30584__auto__,c__30812__auto__,canvas_38768){
return (function() {
var app$t1$main$state_machine__30585__auto__ = null;
var app$t1$main$state_machine__30585__auto____0 = (function (){
var statearr_38381 = [null,null,null,null,null,null,null];
(statearr_38381[(0)] = app$t1$main$state_machine__30585__auto__);

(statearr_38381[(1)] = (1));

return statearr_38381;
});
var app$t1$main$state_machine__30585__auto____1 = (function (state_38379){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38379);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38382){if((e38382 instanceof Object)){
var ex__30588__auto__ = e38382;
var statearr_38383_38771 = state_38379;
(statearr_38383_38771[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38772 = state_38379;
state_38379 = G__38772;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t1$main$state_machine__30585__auto__ = function(state_38379){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30585__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30585__auto____1.call(this,state_38379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30585__auto____0;
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30585__auto____1;
return app$t1$main$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,canvas_38768))
})();
var state__30814__auto__ = (function (){var statearr_38384 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38384[(6)] = c__30812__auto__);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,canvas_38768))
);

return c__30812__auto__;
});})(canvas_38768))
,false);

canvas_38768.addEventListener("mousemove",((function (canvas_38768){
return (function (evt2){
var rect = canvas_38768.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,rect,x,y,canvas_38768){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,rect,x,y,canvas_38768){
return (function (state_38394){
var state_val_38395 = (state_38394[(1)]);
if((state_val_38395 === (1))){
var inst_38385 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_38386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38387 = [x,y];
var inst_38388 = (new cljs.core.PersistentVector(null,2,(5),inst_38386,inst_38387,null));
var inst_38389 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_38388];
var inst_38390 = cljs.core.PersistentHashMap.fromArrays(inst_38385,inst_38389);
var state_38394__$1 = state_38394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38394__$1,(2),app.t1.main.evt,inst_38390);
} else {
if((state_val_38395 === (2))){
var inst_38392 = (state_38394[(2)]);
var state_38394__$1 = state_38394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38394__$1,inst_38392);
} else {
return null;
}
}
});})(c__30812__auto__,rect,x,y,canvas_38768))
;
return ((function (switch__30584__auto__,c__30812__auto__,rect,x,y,canvas_38768){
return (function() {
var app$t1$main$state_machine__30585__auto__ = null;
var app$t1$main$state_machine__30585__auto____0 = (function (){
var statearr_38396 = [null,null,null,null,null,null,null];
(statearr_38396[(0)] = app$t1$main$state_machine__30585__auto__);

(statearr_38396[(1)] = (1));

return statearr_38396;
});
var app$t1$main$state_machine__30585__auto____1 = (function (state_38394){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38394);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38397){if((e38397 instanceof Object)){
var ex__30588__auto__ = e38397;
var statearr_38398_38773 = state_38394;
(statearr_38398_38773[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38775 = state_38394;
state_38394 = G__38775;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t1$main$state_machine__30585__auto__ = function(state_38394){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30585__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30585__auto____1.call(this,state_38394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30585__auto____0;
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30585__auto____1;
return app$t1$main$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,rect,x,y,canvas_38768))
})();
var state__30814__auto__ = (function (){var statearr_38399 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38399[(6)] = c__30812__auto__);

return statearr_38399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,rect,x,y,canvas_38768))
);

return c__30812__auto__;
});})(canvas_38768))
,false);

setInterval(((function (canvas_38768){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,canvas_38768){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,canvas_38768){
return (function (state_38406){
var state_val_38407 = (state_38406[(1)]);
if((state_val_38407 === (1))){
var inst_38400 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_38401 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_38402 = cljs.core.PersistentHashMap.fromArrays(inst_38400,inst_38401);
var state_38406__$1 = state_38406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38406__$1,(2),app.t1.main.evt,inst_38402);
} else {
if((state_val_38407 === (2))){
var inst_38404 = (state_38406[(2)]);
var state_38406__$1 = state_38406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38406__$1,inst_38404);
} else {
return null;
}
}
});})(c__30812__auto__,canvas_38768))
;
return ((function (switch__30584__auto__,c__30812__auto__,canvas_38768){
return (function() {
var app$t1$main$state_machine__30585__auto__ = null;
var app$t1$main$state_machine__30585__auto____0 = (function (){
var statearr_38408 = [null,null,null,null,null,null,null];
(statearr_38408[(0)] = app$t1$main$state_machine__30585__auto__);

(statearr_38408[(1)] = (1));

return statearr_38408;
});
var app$t1$main$state_machine__30585__auto____1 = (function (state_38406){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38406);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38409){if((e38409 instanceof Object)){
var ex__30588__auto__ = e38409;
var statearr_38410_38798 = state_38406;
(statearr_38410_38798[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38799 = state_38406;
state_38406 = G__38799;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t1$main$state_machine__30585__auto__ = function(state_38406){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30585__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30585__auto____1.call(this,state_38406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30585__auto____0;
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30585__auto____1;
return app$t1$main$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,canvas_38768))
})();
var state__30814__auto__ = (function (){var statearr_38411 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38411[(6)] = c__30812__auto__);

return statearr_38411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,canvas_38768))
);

return c__30812__auto__;
});})(canvas_38768))
,(33));
var c__30812__auto___38802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___38802){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___38802){
return (function (state_38494){
var state_val_38495 = (state_38494[(1)]);
if((state_val_38495 === (7))){
var inst_38490 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38497_38804 = state_38494__$1;
(statearr_38497_38804[(2)] = inst_38490);

(statearr_38497_38804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (1))){
var inst_38412 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_38413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38414 = [(0),(0)];
var inst_38415 = (new cljs.core.PersistentVector(null,2,(5),inst_38413,inst_38414,null));
var inst_38416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38418 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_38419 = (new cljs.core.PersistentVector(null,4,(5),inst_38417,inst_38418,null));
var inst_38420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38421 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_38422 = (new cljs.core.PersistentVector(null,4,(5),inst_38420,inst_38421,null));
var inst_38423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38424 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_38425 = (new cljs.core.PersistentVector(null,4,(5),inst_38423,inst_38424,null));
var inst_38426 = [inst_38419,inst_38422,inst_38425];
var inst_38427 = (new cljs.core.PersistentVector(null,3,(5),inst_38416,inst_38426,null));
var inst_38428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38430 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_38431 = (new cljs.core.PersistentVector(null,4,(5),inst_38429,inst_38430,null));
var inst_38432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38433 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_38434 = (new cljs.core.PersistentVector(null,4,(5),inst_38432,inst_38433,null));
var inst_38435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38436 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_38437 = (new cljs.core.PersistentVector(null,4,(5),inst_38435,inst_38436,null));
var inst_38438 = [inst_38431,inst_38434,inst_38437];
var inst_38439 = (new cljs.core.PersistentVector(null,3,(5),inst_38428,inst_38438,null));
var inst_38440 = cljs.core.PersistentHashSet.EMPTY;
var inst_38441 = [false,inst_38415,inst_38427,inst_38439,null,null,inst_38440];
var inst_38442 = cljs.core.PersistentHashMap.fromArrays(inst_38412,inst_38441);
var inst_38443 = inst_38442;
var state_38494__$1 = (function (){var statearr_38498 = state_38494;
(statearr_38498[(7)] = inst_38443);

return statearr_38498;
})();
var statearr_38499_38806 = state_38494__$1;
(statearr_38499_38806[(2)] = null);

(statearr_38499_38806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (4))){
var inst_38451 = (state_38494[(8)]);
var inst_38447 = (state_38494[(9)]);
var inst_38447__$1 = (state_38494[(2)]);
var inst_38451__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_38447__$1);
var inst_38452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),inst_38451__$1);
var state_38494__$1 = (function (){var statearr_38500 = state_38494;
(statearr_38500[(8)] = inst_38451__$1);

(statearr_38500[(9)] = inst_38447__$1);

return statearr_38500;
})();
if(inst_38452){
var statearr_38501_38807 = state_38494__$1;
(statearr_38501_38807[(1)] = (5));

} else {
var statearr_38502_38808 = state_38494__$1;
(statearr_38502_38808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (15))){
var inst_38443 = (state_38494[(7)]);
var tmp38496 = inst_38443;
var inst_38443__$1 = tmp38496;
var state_38494__$1 = (function (){var statearr_38503 = state_38494;
(statearr_38503[(7)] = inst_38443__$1);

return statearr_38503;
})();
var statearr_38504_38809 = state_38494__$1;
(statearr_38504_38809[(2)] = null);

(statearr_38504_38809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (13))){
var inst_38486 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38505_38810 = state_38494__$1;
(statearr_38505_38810[(2)] = inst_38486);

(statearr_38505_38810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (6))){
var inst_38451 = (state_38494[(8)]);
var inst_38457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_38451);
var state_38494__$1 = state_38494;
if(inst_38457){
var statearr_38506_38811 = state_38494__$1;
(statearr_38506_38811[(1)] = (8));

} else {
var statearr_38507_38812 = state_38494__$1;
(statearr_38507_38812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (3))){
var inst_38492 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38494__$1,inst_38492);
} else {
if((state_val_38495 === (12))){
var inst_38451 = (state_38494[(8)]);
var inst_38474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_38451);
var state_38494__$1 = state_38494;
if(inst_38474){
var statearr_38508_38813 = state_38494__$1;
(statearr_38508_38813[(1)] = (14));

} else {
var statearr_38509_38814 = state_38494__$1;
(statearr_38509_38814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (2))){
var inst_38443 = (state_38494[(7)]);
var inst_38445 = app.t1.main.model = inst_38443;
var state_38494__$1 = (function (){var statearr_38510 = state_38494;
(statearr_38510[(10)] = inst_38445);

return statearr_38510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38494__$1,(4),app.t1.main.evt);
} else {
if((state_val_38495 === (11))){
var inst_38443 = (state_38494[(7)]);
var inst_38468 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_38469 = [false,true];
var inst_38470 = cljs.core.PersistentHashMap.fromArrays(inst_38468,inst_38469);
var inst_38471 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38443,inst_38470], 0));
var inst_38443__$1 = inst_38471;
var state_38494__$1 = (function (){var statearr_38515 = state_38494;
(statearr_38515[(7)] = inst_38443__$1);

return statearr_38515;
})();
var statearr_38516_38815 = state_38494__$1;
(statearr_38516_38815[(2)] = null);

(statearr_38516_38815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (9))){
var inst_38451 = (state_38494[(8)]);
var inst_38466 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_38451);
var state_38494__$1 = state_38494;
if(inst_38466){
var statearr_38517_38816 = state_38494__$1;
(statearr_38517_38816[(1)] = (11));

} else {
var statearr_38519_38817 = state_38494__$1;
(statearr_38519_38817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (5))){
var inst_38443 = (state_38494[(7)]);
var inst_38454 = (app.t1.main.step.cljs$core$IFn$_invoke$arity$1 ? app.t1.main.step.cljs$core$IFn$_invoke$arity$1(inst_38443) : app.t1.main.step.call(null,inst_38443));
var inst_38443__$1 = inst_38454;
var state_38494__$1 = (function (){var statearr_38523 = state_38494;
(statearr_38523[(7)] = inst_38443__$1);

return statearr_38523;
})();
var statearr_38524_38818 = state_38494__$1;
(statearr_38524_38818[(2)] = null);

(statearr_38524_38818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (14))){
var inst_38443 = (state_38494[(7)]);
var inst_38476 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_38477 = [true,true];
var inst_38478 = cljs.core.PersistentHashMap.fromArrays(inst_38476,inst_38477);
var inst_38479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38443,inst_38478], 0));
var inst_38443__$1 = inst_38479;
var state_38494__$1 = (function (){var statearr_38528 = state_38494;
(statearr_38528[(7)] = inst_38443__$1);

return statearr_38528;
})();
var statearr_38529_38819 = state_38494__$1;
(statearr_38529_38819[(2)] = null);

(statearr_38529_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (16))){
var inst_38484 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38533_38820 = state_38494__$1;
(statearr_38533_38820[(2)] = inst_38484);

(statearr_38533_38820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (10))){
var inst_38488 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38534_38821 = state_38494__$1;
(statearr_38534_38821[(2)] = inst_38488);

(statearr_38534_38821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (8))){
var inst_38443 = (state_38494[(7)]);
var inst_38447 = (state_38494[(9)]);
var inst_38459 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_38460 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_38447);
var inst_38461 = [inst_38460];
var inst_38462 = cljs.core.PersistentHashMap.fromArrays(inst_38459,inst_38461);
var inst_38463 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38443,inst_38462], 0));
var inst_38443__$1 = inst_38463;
var state_38494__$1 = (function (){var statearr_38554 = state_38494;
(statearr_38554[(7)] = inst_38443__$1);

return statearr_38554;
})();
var statearr_38555_38822 = state_38494__$1;
(statearr_38555_38822[(2)] = null);

(statearr_38555_38822[(1)] = (2));


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
});})(c__30812__auto___38802))
;
return ((function (switch__30584__auto__,c__30812__auto___38802){
return (function() {
var app$t1$main$state_machine__30585__auto__ = null;
var app$t1$main$state_machine__30585__auto____0 = (function (){
var statearr_38556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38556[(0)] = app$t1$main$state_machine__30585__auto__);

(statearr_38556[(1)] = (1));

return statearr_38556;
});
var app$t1$main$state_machine__30585__auto____1 = (function (state_38494){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38494);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38570){if((e38570 instanceof Object)){
var ex__30588__auto__ = e38570;
var statearr_38577_38823 = state_38494;
(statearr_38577_38823[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38824 = state_38494;
state_38494 = G__38824;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t1$main$state_machine__30585__auto__ = function(state_38494){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__30585__auto____0.call(this);
case 1:
return app$t1$main$state_machine__30585__auto____1.call(this,state_38494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__30585__auto____0;
app$t1$main$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__30585__auto____1;
return app$t1$main$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___38802))
})();
var state__30814__auto__ = (function (){var statearr_38578 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38578[(6)] = c__30812__auto___38802);

return statearr_38578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___38802))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__38585){
var vec__38586 = p__38585;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(1),null);
var radius = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(2),null);
return ((radius * radius) > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._STAR_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__38589 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(2),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(3),null);
var vec__38592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(1),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(2),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,a2);
});
app.t1.main.step = (function app$t1$main$step(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38603){
var vec__38604 = p__38603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38604,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38604,(1),null);
return selected;
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38610){
var vec__38611 = p__38610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38611,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38611,(1),null);
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
var vec__38623 = mousePos;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(1),null);
pc.background((200));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38626 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__38627 = null;
var count__38628 = (0);
var i__38629 = (0);
while(true){
if((i__38629 < count__38628)){
var c = chunk__38627.cljs$core$IIndexed$_nth$arity$2(null,i__38629);
var isLeft_38845 = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__38666_38846 = c;
var x_38847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38846,(0),null);
var y_38848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38846,(1),null);
var radius_38849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38846,(2),null);
var a_38850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38846,(3),null);
var radius2_38851 = (radius_38849 * (2));
var showText_38852 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_38850,(cljs.core.truth_(isLeft_38845)?(0):(1))], null));
var showTextOffsetX_38853 = (- (pc.textWidth(showText_38852) / (2)));
var selected_38854 = app.t1.main.isPointInCircle(mousePos,c);
if((!(selected_38854))){
pc.fill((255));

pc.ellipse(x_38847,y_38848,radius2_38851,radius2_38851);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_38847,y_38848,radius2_38851,radius2_38851);
}

pc.fill((0));

pc.text(showText_38852,(x_38847 + showTextOffsetX_38853),y_38848);


var G__38855 = seq__38626;
var G__38856 = chunk__38627;
var G__38857 = count__38628;
var G__38858 = (i__38629 + (1));
seq__38626 = G__38855;
chunk__38627 = G__38856;
count__38628 = G__38857;
i__38629 = G__38858;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38626);
if(temp__5735__auto__){
var seq__38626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38626__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38626__$1);
var G__38859 = cljs.core.chunk_rest(seq__38626__$1);
var G__38860 = c__4550__auto__;
var G__38861 = cljs.core.count(c__4550__auto__);
var G__38862 = (0);
seq__38626 = G__38859;
chunk__38627 = G__38860;
count__38628 = G__38861;
i__38629 = G__38862;
continue;
} else {
var c = cljs.core.first(seq__38626__$1);
var isLeft_38863 = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__38722_38864 = c;
var x_38865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38722_38864,(0),null);
var y_38866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38722_38864,(1),null);
var radius_38867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38722_38864,(2),null);
var a_38868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38722_38864,(3),null);
var radius2_38869 = (radius_38867 * (2));
var showText_38870 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_38868,(cljs.core.truth_(isLeft_38863)?(0):(1))], null));
var showTextOffsetX_38871 = (- (pc.textWidth(showText_38870) / (2)));
var selected_38872 = app.t1.main.isPointInCircle(mousePos,c);
if((!(selected_38872))){
pc.fill((255));

pc.ellipse(x_38865,y_38866,radius2_38869,radius2_38869);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_38865,y_38866,radius2_38869,radius2_38869);
}

pc.fill((0));

pc.text(showText_38870,(x_38865 + showTextOffsetX_38871),y_38866);


var G__38873 = cljs.core.next(seq__38626__$1);
var G__38874 = null;
var G__38875 = (0);
var G__38876 = (0);
seq__38626 = G__38873;
chunk__38627 = G__38874;
count__38628 = G__38875;
i__38629 = G__38876;
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

var temp__5733__auto___38877 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5733__auto___38877)){
var s1_38878 = temp__5733__auto___38877;
var vec__38725_38879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_38878], null));
var x_38880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725_38879,(0),null);
var y_38881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725_38879,(1),null);
pc.line(x_38880,y_38881,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var seq__38728 = cljs.core.seq(new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__38729 = null;
var count__38730 = (0);
var i__38731 = (0);
while(true){
if((i__38731 < count__38730)){
var line = chunk__38729.cljs$core$IIndexed$_nth$arity$2(null,i__38731);
var vec__38750_38882 = line;
var s1_38883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38750_38882,(0),null);
var s2_38884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38750_38882,(1),null);
var vec__38753_38885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_38883);
var x_38886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38753_38885,(0),null);
var y_38887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38753_38885,(1),null);
var vec__38756_38888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_38884);
var x2_38889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38756_38888,(0),null);
var y2_38890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38756_38888,(1),null);
pc.line(x_38886,y_38887,x2_38889,y2_38890);


var G__38891 = seq__38728;
var G__38892 = chunk__38729;
var G__38893 = count__38730;
var G__38894 = (i__38731 + (1));
seq__38728 = G__38891;
chunk__38729 = G__38892;
count__38730 = G__38893;
i__38731 = G__38894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38728);
if(temp__5735__auto__){
var seq__38728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38728__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38728__$1);
var G__38895 = cljs.core.chunk_rest(seq__38728__$1);
var G__38896 = c__4550__auto__;
var G__38897 = cljs.core.count(c__4550__auto__);
var G__38898 = (0);
seq__38728 = G__38895;
chunk__38729 = G__38896;
count__38730 = G__38897;
i__38731 = G__38898;
continue;
} else {
var line = cljs.core.first(seq__38728__$1);
var vec__38759_38899 = line;
var s1_38900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38759_38899,(0),null);
var s2_38901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38759_38899,(1),null);
var vec__38762_38902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_38900);
var x_38903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762_38902,(0),null);
var y_38904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762_38902,(1),null);
var vec__38765_38905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_38901);
var x2_38906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38765_38905,(0),null);
var y2_38907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38765_38905,(1),null);
pc.line(x_38903,y_38904,x2_38906,y2_38907);


var G__38908 = cljs.core.next(seq__38728__$1);
var G__38909 = null;
var G__38910 = (0);
var G__38911 = (0);
seq__38728 = G__38908;
chunk__38729 = G__38909;
count__38730 = G__38910;
i__38731 = G__38911;
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
var canvas_38912 = document.getElementById("canvas1");
var p_38913 = (new Processing(canvas_38912,app.t1.main.sketchProc));

//# sourceMappingURL=app.t1.main.js.map
