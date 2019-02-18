// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.call(null);
var canvas_11515 = document.getElementById("canvas1");
canvas_11515.addEventListener("mousedown",((function (canvas_11515){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_11515){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_11515){
return (function (state_11470){
var state_val_11471 = (state_11470[(1)]);
if((state_val_11471 === (1))){
var inst_11464 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_11465 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_11466 = cljs.core.PersistentHashMap.fromArrays(inst_11464,inst_11465);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11470__$1,(2),app.t1.main.evt,inst_11466);
} else {
if((state_val_11471 === (2))){
var inst_11468 = (state_11470[(2)]);
var state_11470__$1 = state_11470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11470__$1,inst_11468);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_11515))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_11515){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_11472 = [null,null,null,null,null,null,null];
(statearr_11472[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_11472[(1)] = (1));

return statearr_11472;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_11470){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_11470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e11473){if((e11473 instanceof Object)){
var ex__2796__auto__ = e11473;
var statearr_11474_11516 = state_11470;
(statearr_11474_11516[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11517 = state_11470;
state_11470 = G__11517;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_11470){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_11470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_11515))
})();
var state__2884__auto__ = (function (){var statearr_11475 = f__2883__auto__.call(null);
(statearr_11475[(6)] = c__2882__auto__);

return statearr_11475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_11515))
);

return c__2882__auto__;
});})(canvas_11515))
,false);

canvas_11515.addEventListener("mouseup",((function (canvas_11515){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_11515){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_11515){
return (function (state_11482){
var state_val_11483 = (state_11482[(1)]);
if((state_val_11483 === (1))){
var inst_11476 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_11477 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_11478 = cljs.core.PersistentHashMap.fromArrays(inst_11476,inst_11477);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11482__$1,(2),app.t1.main.evt,inst_11478);
} else {
if((state_val_11483 === (2))){
var inst_11480 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11482__$1,inst_11480);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_11515))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_11515){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_11484 = [null,null,null,null,null,null,null];
(statearr_11484[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_11484[(1)] = (1));

return statearr_11484;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_11482){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_11482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e11485){if((e11485 instanceof Object)){
var ex__2796__auto__ = e11485;
var statearr_11486_11518 = state_11482;
(statearr_11486_11518[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11519 = state_11482;
state_11482 = G__11519;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_11515))
})();
var state__2884__auto__ = (function (){var statearr_11487 = f__2883__auto__.call(null);
(statearr_11487[(6)] = c__2882__auto__);

return statearr_11487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_11515))
);

return c__2882__auto__;
});})(canvas_11515))
,false);

canvas_11515.addEventListener("mousemove",((function (canvas_11515){
return (function (evt2){
var rect = canvas_11515.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,rect,x,y,canvas_11515){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,rect,x,y,canvas_11515){
return (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (1))){
var inst_11488 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_11489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11490 = [x,y];
var inst_11491 = (new cljs.core.PersistentVector(null,2,(5),inst_11489,inst_11490,null));
var inst_11492 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_11491];
var inst_11493 = cljs.core.PersistentHashMap.fromArrays(inst_11488,inst_11492);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(2),app.t1.main.evt,inst_11493);
} else {
if((state_val_11498 === (2))){
var inst_11495 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else {
return null;
}
}
});})(c__2882__auto__,rect,x,y,canvas_11515))
;
return ((function (switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_11515){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_11499 = [null,null,null,null,null,null,null];
(statearr_11499[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_11499[(1)] = (1));

return statearr_11499;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_11497){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_11497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e11500){if((e11500 instanceof Object)){
var ex__2796__auto__ = e11500;
var statearr_11501_11520 = state_11497;
(statearr_11501_11520[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11521 = state_11497;
state_11497 = G__11521;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_11515))
})();
var state__2884__auto__ = (function (){var statearr_11502 = f__2883__auto__.call(null);
(statearr_11502[(6)] = c__2882__auto__);

return statearr_11502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,rect,x,y,canvas_11515))
);

return c__2882__auto__;
});})(canvas_11515))
,false);

setInterval(((function (canvas_11515){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_11515){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_11515){
return (function (state_11509){
var state_val_11510 = (state_11509[(1)]);
if((state_val_11510 === (1))){
var inst_11503 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_11504 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_11505 = cljs.core.PersistentHashMap.fromArrays(inst_11503,inst_11504);
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11509__$1,(2),app.t1.main.evt,inst_11505);
} else {
if((state_val_11510 === (2))){
var inst_11507 = (state_11509[(2)]);
var state_11509__$1 = state_11509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11509__$1,inst_11507);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_11515))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_11515){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_11511 = [null,null,null,null,null,null,null];
(statearr_11511[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_11511[(1)] = (1));

return statearr_11511;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_11509){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_11509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e11512){if((e11512 instanceof Object)){
var ex__2796__auto__ = e11512;
var statearr_11513_11522 = state_11509;
(statearr_11513_11522[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11523 = state_11509;
state_11509 = G__11523;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_11509){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_11509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_11515))
})();
var state__2884__auto__ = (function (){var statearr_11514 = f__2883__auto__.call(null);
(statearr_11514[(6)] = c__2882__auto__);

return statearr_11514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_11515))
);

return c__2882__auto__;
});})(canvas_11515))
,(33));
var c__2882__auto___11639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___11639){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___11639){
return (function (state_11606){
var state_val_11607 = (state_11606[(1)]);
if((state_val_11607 === (7))){
var inst_11602 = (state_11606[(2)]);
var state_11606__$1 = state_11606;
var statearr_11609_11640 = state_11606__$1;
(statearr_11609_11640[(2)] = inst_11602);

(statearr_11609_11640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (1))){
var inst_11524 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_11525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11526 = [(0),(0)];
var inst_11527 = (new cljs.core.PersistentVector(null,2,(5),inst_11525,inst_11526,null));
var inst_11528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11530 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_11531 = (new cljs.core.PersistentVector(null,4,(5),inst_11529,inst_11530,null));
var inst_11532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11533 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_11534 = (new cljs.core.PersistentVector(null,4,(5),inst_11532,inst_11533,null));
var inst_11535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11536 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_11537 = (new cljs.core.PersistentVector(null,4,(5),inst_11535,inst_11536,null));
var inst_11538 = [inst_11531,inst_11534,inst_11537];
var inst_11539 = (new cljs.core.PersistentVector(null,3,(5),inst_11528,inst_11538,null));
var inst_11540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11542 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_11543 = (new cljs.core.PersistentVector(null,4,(5),inst_11541,inst_11542,null));
var inst_11544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11545 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_11546 = (new cljs.core.PersistentVector(null,4,(5),inst_11544,inst_11545,null));
var inst_11547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11548 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_11549 = (new cljs.core.PersistentVector(null,4,(5),inst_11547,inst_11548,null));
var inst_11550 = [inst_11543,inst_11546,inst_11549];
var inst_11551 = (new cljs.core.PersistentVector(null,3,(5),inst_11540,inst_11550,null));
var inst_11552 = cljs.core.PersistentHashSet.EMPTY;
var inst_11553 = [false,inst_11527,inst_11539,inst_11551,null,null,inst_11552];
var inst_11554 = cljs.core.PersistentHashMap.fromArrays(inst_11524,inst_11553);
var inst_11555 = inst_11554;
var state_11606__$1 = (function (){var statearr_11610 = state_11606;
(statearr_11610[(7)] = inst_11555);

return statearr_11610;
})();
var statearr_11611_11641 = state_11606__$1;
(statearr_11611_11641[(2)] = null);

(statearr_11611_11641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (4))){
var inst_11559 = (state_11606[(8)]);
var inst_11563 = (state_11606[(9)]);
var inst_11559__$1 = (state_11606[(2)]);
var inst_11563__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_11559__$1);
var inst_11564 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_11563__$1);
var state_11606__$1 = (function (){var statearr_11612 = state_11606;
(statearr_11612[(8)] = inst_11559__$1);

(statearr_11612[(9)] = inst_11563__$1);

return statearr_11612;
})();
if(inst_11564){
var statearr_11613_11642 = state_11606__$1;
(statearr_11613_11642[(1)] = (5));

} else {
var statearr_11614_11643 = state_11606__$1;
(statearr_11614_11643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (15))){
var inst_11555 = (state_11606[(7)]);
var tmp11608 = inst_11555;
var inst_11555__$1 = tmp11608;
var state_11606__$1 = (function (){var statearr_11615 = state_11606;
(statearr_11615[(7)] = inst_11555__$1);

return statearr_11615;
})();
var statearr_11616_11644 = state_11606__$1;
(statearr_11616_11644[(2)] = null);

(statearr_11616_11644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (13))){
var inst_11598 = (state_11606[(2)]);
var state_11606__$1 = state_11606;
var statearr_11617_11645 = state_11606__$1;
(statearr_11617_11645[(2)] = inst_11598);

(statearr_11617_11645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (6))){
var inst_11563 = (state_11606[(9)]);
var inst_11569 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_11563);
var state_11606__$1 = state_11606;
if(inst_11569){
var statearr_11618_11646 = state_11606__$1;
(statearr_11618_11646[(1)] = (8));

} else {
var statearr_11619_11647 = state_11606__$1;
(statearr_11619_11647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (3))){
var inst_11604 = (state_11606[(2)]);
var state_11606__$1 = state_11606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11606__$1,inst_11604);
} else {
if((state_val_11607 === (12))){
var inst_11563 = (state_11606[(9)]);
var inst_11586 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_11563);
var state_11606__$1 = state_11606;
if(inst_11586){
var statearr_11620_11648 = state_11606__$1;
(statearr_11620_11648[(1)] = (14));

} else {
var statearr_11621_11649 = state_11606__$1;
(statearr_11621_11649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (2))){
var inst_11555 = (state_11606[(7)]);
var inst_11557 = app.t1.main.model = inst_11555;
var state_11606__$1 = (function (){var statearr_11622 = state_11606;
(statearr_11622[(10)] = inst_11557);

return statearr_11622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11606__$1,(4),app.t1.main.evt);
} else {
if((state_val_11607 === (11))){
var inst_11555 = (state_11606[(7)]);
var inst_11580 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_11581 = [false,true];
var inst_11582 = cljs.core.PersistentHashMap.fromArrays(inst_11580,inst_11581);
var inst_11583 = cljs.core.merge.call(null,inst_11555,inst_11582);
var inst_11555__$1 = inst_11583;
var state_11606__$1 = (function (){var statearr_11623 = state_11606;
(statearr_11623[(7)] = inst_11555__$1);

return statearr_11623;
})();
var statearr_11624_11650 = state_11606__$1;
(statearr_11624_11650[(2)] = null);

(statearr_11624_11650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (9))){
var inst_11563 = (state_11606[(9)]);
var inst_11578 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_11563);
var state_11606__$1 = state_11606;
if(inst_11578){
var statearr_11625_11651 = state_11606__$1;
(statearr_11625_11651[(1)] = (11));

} else {
var statearr_11626_11652 = state_11606__$1;
(statearr_11626_11652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (5))){
var inst_11555 = (state_11606[(7)]);
var inst_11566 = app.t1.main.update.call(null,inst_11555);
var inst_11555__$1 = inst_11566;
var state_11606__$1 = (function (){var statearr_11627 = state_11606;
(statearr_11627[(7)] = inst_11555__$1);

return statearr_11627;
})();
var statearr_11628_11653 = state_11606__$1;
(statearr_11628_11653[(2)] = null);

(statearr_11628_11653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (14))){
var inst_11555 = (state_11606[(7)]);
var inst_11588 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_11589 = [true,true];
var inst_11590 = cljs.core.PersistentHashMap.fromArrays(inst_11588,inst_11589);
var inst_11591 = cljs.core.merge.call(null,inst_11555,inst_11590);
var inst_11555__$1 = inst_11591;
var state_11606__$1 = (function (){var statearr_11629 = state_11606;
(statearr_11629[(7)] = inst_11555__$1);

return statearr_11629;
})();
var statearr_11630_11654 = state_11606__$1;
(statearr_11630_11654[(2)] = null);

(statearr_11630_11654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (16))){
var inst_11596 = (state_11606[(2)]);
var state_11606__$1 = state_11606;
var statearr_11631_11655 = state_11606__$1;
(statearr_11631_11655[(2)] = inst_11596);

(statearr_11631_11655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (10))){
var inst_11600 = (state_11606[(2)]);
var state_11606__$1 = state_11606;
var statearr_11632_11656 = state_11606__$1;
(statearr_11632_11656[(2)] = inst_11600);

(statearr_11632_11656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11607 === (8))){
var inst_11555 = (state_11606[(7)]);
var inst_11559 = (state_11606[(8)]);
var inst_11571 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_11572 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_11559);
var inst_11573 = [inst_11572];
var inst_11574 = cljs.core.PersistentHashMap.fromArrays(inst_11571,inst_11573);
var inst_11575 = cljs.core.merge.call(null,inst_11555,inst_11574);
var inst_11555__$1 = inst_11575;
var state_11606__$1 = (function (){var statearr_11633 = state_11606;
(statearr_11633[(7)] = inst_11555__$1);

return statearr_11633;
})();
var statearr_11634_11657 = state_11606__$1;
(statearr_11634_11657[(2)] = null);

(statearr_11634_11657[(1)] = (2));


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
});})(c__2882__auto___11639))
;
return ((function (switch__2792__auto__,c__2882__auto___11639){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_11635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11635[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_11635[(1)] = (1));

return statearr_11635;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_11606){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_11606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e11636){if((e11636 instanceof Object)){
var ex__2796__auto__ = e11636;
var statearr_11637_11658 = state_11606;
(statearr_11637_11658[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11659 = state_11606;
state_11606 = G__11659;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_11606){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_11606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___11639))
})();
var state__2884__auto__ = (function (){var statearr_11638 = f__2883__auto__.call(null);
(statearr_11638[(6)] = c__2882__auto___11639);

return statearr_11638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___11639))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__11660){
var vec__11661 = p__11660;
var x = cljs.core.nth.call(null,vec__11661,(0),null);
var y = cljs.core.nth.call(null,vec__11661,(1),null);
var radius = cljs.core.nth.call(null,vec__11661,(2),null);
return ((radius * radius) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.take.call(null,(2),cljs.core.repeat.call(null,cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__11664 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.call(null,vec__11664,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11664,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11664,(2),null);
var a1 = cljs.core.nth.call(null,vec__11664,(3),null);
var vec__11667 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.call(null,vec__11667,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__11667,(1),null);
var ___$5 = cljs.core.nth.call(null,vec__11667,(2),null);
var a2 = cljs.core.nth.call(null,vec__11667,(3),null);
return cljs.core._EQ_.call(null,a1,a2);
});
app.t1.main.update = (function app$t1$main$update(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__11670){
var vec__11671 = p__11670;
var _ = cljs.core.nth.call(null,vec__11671,(0),null);
var selected = cljs.core.nth.call(null,vec__11671,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__11674){
var vec__11675 = p__11674;
var _ = cljs.core.nth.call(null,vec__11675,(0),null);
var selected = cljs.core.nth.call(null,vec__11675,(1),null);
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
var vec__11678 = mousePos;
var mx = cljs.core.nth.call(null,vec__11678,(0),null);
var my = cljs.core.nth.call(null,vec__11678,(1),null);
pc.background((200));

cljs.core.dorun.call(null,(function (){var seq__11681 = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__11682 = null;
var count__11683 = (0);
var i__11684 = (0);
while(true){
if((i__11684 < count__11683)){
var c = cljs.core._nth.call(null,chunk__11682,i__11684);
var isLeft_11716 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__11685_11717 = c;
var x_11718 = cljs.core.nth.call(null,vec__11685_11717,(0),null);
var y_11719 = cljs.core.nth.call(null,vec__11685_11717,(1),null);
var radius_11720 = cljs.core.nth.call(null,vec__11685_11717,(2),null);
var a_11721 = cljs.core.nth.call(null,vec__11685_11717,(3),null);
var radius2_11722 = (radius_11720 * (2));
var showText_11723 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_11721,(cljs.core.truth_(isLeft_11716)?(0):(1))], null));
var showTextOffsetX_11724 = (- (pc.textWidth(showText_11723) / (2)));
var selected_11725 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_11725)){
pc.fill((255));

pc.ellipse(x_11718,y_11719,radius2_11722,radius2_11722);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_11718,y_11719,radius2_11722,radius2_11722);
}

pc.fill((0));

pc.text(showText_11723,(x_11718 + showTextOffsetX_11724),y_11719);


var G__11726 = seq__11681;
var G__11727 = chunk__11682;
var G__11728 = count__11683;
var G__11729 = (i__11684 + (1));
seq__11681 = G__11726;
chunk__11682 = G__11727;
count__11683 = G__11728;
i__11684 = G__11729;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11681);
if(temp__5457__auto__){
var seq__11681__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11681__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__11681__$1);
var G__11730 = cljs.core.chunk_rest.call(null,seq__11681__$1);
var G__11731 = c__4319__auto__;
var G__11732 = cljs.core.count.call(null,c__4319__auto__);
var G__11733 = (0);
seq__11681 = G__11730;
chunk__11682 = G__11731;
count__11683 = G__11732;
i__11684 = G__11733;
continue;
} else {
var c = cljs.core.first.call(null,seq__11681__$1);
var isLeft_11734 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__11688_11735 = c;
var x_11736 = cljs.core.nth.call(null,vec__11688_11735,(0),null);
var y_11737 = cljs.core.nth.call(null,vec__11688_11735,(1),null);
var radius_11738 = cljs.core.nth.call(null,vec__11688_11735,(2),null);
var a_11739 = cljs.core.nth.call(null,vec__11688_11735,(3),null);
var radius2_11740 = (radius_11738 * (2));
var showText_11741 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_11739,(cljs.core.truth_(isLeft_11734)?(0):(1))], null));
var showTextOffsetX_11742 = (- (pc.textWidth(showText_11741) / (2)));
var selected_11743 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_11743)){
pc.fill((255));

pc.ellipse(x_11736,y_11737,radius2_11740,radius2_11740);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_11736,y_11737,radius2_11740,radius2_11740);
}

pc.fill((0));

pc.text(showText_11741,(x_11736 + showTextOffsetX_11742),y_11737);


var G__11744 = cljs.core.next.call(null,seq__11681__$1);
var G__11745 = null;
var G__11746 = (0);
var G__11747 = (0);
seq__11681 = G__11744;
chunk__11682 = G__11745;
count__11683 = G__11746;
i__11684 = G__11747;
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

var temp__5455__auto___11748 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5455__auto___11748)){
var s1_11749 = temp__5455__auto___11748;
var vec__11691_11750 = cljs.core.get_in.call(null,app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_11749], null));
var x_11751 = cljs.core.nth.call(null,vec__11691_11750,(0),null);
var y_11752 = cljs.core.nth.call(null,vec__11691_11750,(1),null);
pc.line(x_11751,y_11752,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.call(null,(function (){var seq__11694 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__11695 = null;
var count__11696 = (0);
var i__11697 = (0);
while(true){
if((i__11697 < count__11696)){
var line = cljs.core._nth.call(null,chunk__11695,i__11697);
var vec__11698_11753 = line;
var s1_11754 = cljs.core.nth.call(null,vec__11698_11753,(0),null);
var s2_11755 = cljs.core.nth.call(null,vec__11698_11753,(1),null);
var vec__11701_11756 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_11754);
var x_11757 = cljs.core.nth.call(null,vec__11701_11756,(0),null);
var y_11758 = cljs.core.nth.call(null,vec__11701_11756,(1),null);
var vec__11704_11759 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_11755);
var x2_11760 = cljs.core.nth.call(null,vec__11704_11759,(0),null);
var y2_11761 = cljs.core.nth.call(null,vec__11704_11759,(1),null);
pc.line(x_11757,y_11758,x2_11760,y2_11761);


var G__11762 = seq__11694;
var G__11763 = chunk__11695;
var G__11764 = count__11696;
var G__11765 = (i__11697 + (1));
seq__11694 = G__11762;
chunk__11695 = G__11763;
count__11696 = G__11764;
i__11697 = G__11765;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11694);
if(temp__5457__auto__){
var seq__11694__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11694__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__11694__$1);
var G__11766 = cljs.core.chunk_rest.call(null,seq__11694__$1);
var G__11767 = c__4319__auto__;
var G__11768 = cljs.core.count.call(null,c__4319__auto__);
var G__11769 = (0);
seq__11694 = G__11766;
chunk__11695 = G__11767;
count__11696 = G__11768;
i__11697 = G__11769;
continue;
} else {
var line = cljs.core.first.call(null,seq__11694__$1);
var vec__11707_11770 = line;
var s1_11771 = cljs.core.nth.call(null,vec__11707_11770,(0),null);
var s2_11772 = cljs.core.nth.call(null,vec__11707_11770,(1),null);
var vec__11710_11773 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_11771);
var x_11774 = cljs.core.nth.call(null,vec__11710_11773,(0),null);
var y_11775 = cljs.core.nth.call(null,vec__11710_11773,(1),null);
var vec__11713_11776 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_11772);
var x2_11777 = cljs.core.nth.call(null,vec__11713_11776,(0),null);
var y2_11778 = cljs.core.nth.call(null,vec__11713_11776,(1),null);
pc.line(x_11774,y_11775,x2_11777,y2_11778);


var G__11779 = cljs.core.next.call(null,seq__11694__$1);
var G__11780 = null;
var G__11781 = (0);
var G__11782 = (0);
seq__11694 = G__11779;
chunk__11695 = G__11780;
count__11696 = G__11781;
i__11697 = G__11782;
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
var canvas_11783 = document.getElementById("canvas1");
var p_11784 = (new Processing(canvas_11783,app.t1.main.sketchProc));

//# sourceMappingURL=main.js.map
