// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.call(null);
var canvas_10540 = document.getElementById("canvas1");
canvas_10540.addEventListener("mousedown",((function (canvas_10540){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_10540){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_10540){
return (function (state_10495){
var state_val_10496 = (state_10495[(1)]);
if((state_val_10496 === (1))){
var inst_10489 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_10490 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_10491 = cljs.core.PersistentHashMap.fromArrays(inst_10489,inst_10490);
var state_10495__$1 = state_10495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10495__$1,(2),app.t1.main.evt,inst_10491);
} else {
if((state_val_10496 === (2))){
var inst_10493 = (state_10495[(2)]);
var state_10495__$1 = state_10495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10495__$1,inst_10493);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_10540))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_10540){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_10497 = [null,null,null,null,null,null,null];
(statearr_10497[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_10497[(1)] = (1));

return statearr_10497;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_10495){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_10495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e10498){if((e10498 instanceof Object)){
var ex__2796__auto__ = e10498;
var statearr_10499_10541 = state_10495;
(statearr_10499_10541[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10542 = state_10495;
state_10495 = G__10542;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_10495){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_10495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_10540))
})();
var state__2884__auto__ = (function (){var statearr_10500 = f__2883__auto__.call(null);
(statearr_10500[(6)] = c__2882__auto__);

return statearr_10500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_10540))
);

return c__2882__auto__;
});})(canvas_10540))
,false);

canvas_10540.addEventListener("mouseup",((function (canvas_10540){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_10540){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_10540){
return (function (state_10507){
var state_val_10508 = (state_10507[(1)]);
if((state_val_10508 === (1))){
var inst_10501 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_10502 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_10503 = cljs.core.PersistentHashMap.fromArrays(inst_10501,inst_10502);
var state_10507__$1 = state_10507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10507__$1,(2),app.t1.main.evt,inst_10503);
} else {
if((state_val_10508 === (2))){
var inst_10505 = (state_10507[(2)]);
var state_10507__$1 = state_10507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10507__$1,inst_10505);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_10540))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_10540){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_10509 = [null,null,null,null,null,null,null];
(statearr_10509[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_10509[(1)] = (1));

return statearr_10509;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_10507){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_10507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e10510){if((e10510 instanceof Object)){
var ex__2796__auto__ = e10510;
var statearr_10511_10543 = state_10507;
(statearr_10511_10543[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10544 = state_10507;
state_10507 = G__10544;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_10507){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_10507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_10540))
})();
var state__2884__auto__ = (function (){var statearr_10512 = f__2883__auto__.call(null);
(statearr_10512[(6)] = c__2882__auto__);

return statearr_10512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_10540))
);

return c__2882__auto__;
});})(canvas_10540))
,false);

canvas_10540.addEventListener("mousemove",((function (canvas_10540){
return (function (evt2){
var rect = canvas_10540.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,rect,x,y,canvas_10540){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,rect,x,y,canvas_10540){
return (function (state_10522){
var state_val_10523 = (state_10522[(1)]);
if((state_val_10523 === (1))){
var inst_10513 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_10514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10515 = [x,y];
var inst_10516 = (new cljs.core.PersistentVector(null,2,(5),inst_10514,inst_10515,null));
var inst_10517 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_10516];
var inst_10518 = cljs.core.PersistentHashMap.fromArrays(inst_10513,inst_10517);
var state_10522__$1 = state_10522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10522__$1,(2),app.t1.main.evt,inst_10518);
} else {
if((state_val_10523 === (2))){
var inst_10520 = (state_10522[(2)]);
var state_10522__$1 = state_10522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10522__$1,inst_10520);
} else {
return null;
}
}
});})(c__2882__auto__,rect,x,y,canvas_10540))
;
return ((function (switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_10540){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_10524 = [null,null,null,null,null,null,null];
(statearr_10524[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_10524[(1)] = (1));

return statearr_10524;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_10522){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_10522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e10525){if((e10525 instanceof Object)){
var ex__2796__auto__ = e10525;
var statearr_10526_10545 = state_10522;
(statearr_10526_10545[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10546 = state_10522;
state_10522 = G__10546;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_10522){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_10522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_10540))
})();
var state__2884__auto__ = (function (){var statearr_10527 = f__2883__auto__.call(null);
(statearr_10527[(6)] = c__2882__auto__);

return statearr_10527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,rect,x,y,canvas_10540))
);

return c__2882__auto__;
});})(canvas_10540))
,false);

setInterval(((function (canvas_10540){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_10540){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_10540){
return (function (state_10534){
var state_val_10535 = (state_10534[(1)]);
if((state_val_10535 === (1))){
var inst_10528 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_10529 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_10530 = cljs.core.PersistentHashMap.fromArrays(inst_10528,inst_10529);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10534__$1,(2),app.t1.main.evt,inst_10530);
} else {
if((state_val_10535 === (2))){
var inst_10532 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10534__$1,inst_10532);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_10540))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_10540){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_10536 = [null,null,null,null,null,null,null];
(statearr_10536[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_10536[(1)] = (1));

return statearr_10536;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_10534){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_10534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e10537){if((e10537 instanceof Object)){
var ex__2796__auto__ = e10537;
var statearr_10538_10547 = state_10534;
(statearr_10538_10547[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10548 = state_10534;
state_10534 = G__10548;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_10534){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_10534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_10540))
})();
var state__2884__auto__ = (function (){var statearr_10539 = f__2883__auto__.call(null);
(statearr_10539[(6)] = c__2882__auto__);

return statearr_10539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_10540))
);

return c__2882__auto__;
});})(canvas_10540))
,(33));
var c__2882__auto___10664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___10664){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___10664){
return (function (state_10631){
var state_val_10632 = (state_10631[(1)]);
if((state_val_10632 === (7))){
var inst_10627 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10634_10665 = state_10631__$1;
(statearr_10634_10665[(2)] = inst_10627);

(statearr_10634_10665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (1))){
var inst_10549 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_10550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10551 = [(0),(0)];
var inst_10552 = (new cljs.core.PersistentVector(null,2,(5),inst_10550,inst_10551,null));
var inst_10553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10555 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_10556 = (new cljs.core.PersistentVector(null,4,(5),inst_10554,inst_10555,null));
var inst_10557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10558 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_10559 = (new cljs.core.PersistentVector(null,4,(5),inst_10557,inst_10558,null));
var inst_10560 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10561 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_10562 = (new cljs.core.PersistentVector(null,4,(5),inst_10560,inst_10561,null));
var inst_10563 = [inst_10556,inst_10559,inst_10562];
var inst_10564 = (new cljs.core.PersistentVector(null,3,(5),inst_10553,inst_10563,null));
var inst_10565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10567 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_10568 = (new cljs.core.PersistentVector(null,4,(5),inst_10566,inst_10567,null));
var inst_10569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10570 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_10571 = (new cljs.core.PersistentVector(null,4,(5),inst_10569,inst_10570,null));
var inst_10572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10573 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_10574 = (new cljs.core.PersistentVector(null,4,(5),inst_10572,inst_10573,null));
var inst_10575 = [inst_10568,inst_10571,inst_10574];
var inst_10576 = (new cljs.core.PersistentVector(null,3,(5),inst_10565,inst_10575,null));
var inst_10577 = cljs.core.PersistentHashSet.EMPTY;
var inst_10578 = [false,inst_10552,inst_10564,inst_10576,null,null,inst_10577];
var inst_10579 = cljs.core.PersistentHashMap.fromArrays(inst_10549,inst_10578);
var inst_10580 = inst_10579;
var state_10631__$1 = (function (){var statearr_10635 = state_10631;
(statearr_10635[(7)] = inst_10580);

return statearr_10635;
})();
var statearr_10636_10666 = state_10631__$1;
(statearr_10636_10666[(2)] = null);

(statearr_10636_10666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (4))){
var inst_10588 = (state_10631[(8)]);
var inst_10584 = (state_10631[(9)]);
var inst_10584__$1 = (state_10631[(2)]);
var inst_10588__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_10584__$1);
var inst_10589 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_10588__$1);
var state_10631__$1 = (function (){var statearr_10637 = state_10631;
(statearr_10637[(8)] = inst_10588__$1);

(statearr_10637[(9)] = inst_10584__$1);

return statearr_10637;
})();
if(inst_10589){
var statearr_10638_10667 = state_10631__$1;
(statearr_10638_10667[(1)] = (5));

} else {
var statearr_10639_10668 = state_10631__$1;
(statearr_10639_10668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (15))){
var inst_10580 = (state_10631[(7)]);
var tmp10633 = inst_10580;
var inst_10580__$1 = tmp10633;
var state_10631__$1 = (function (){var statearr_10640 = state_10631;
(statearr_10640[(7)] = inst_10580__$1);

return statearr_10640;
})();
var statearr_10641_10669 = state_10631__$1;
(statearr_10641_10669[(2)] = null);

(statearr_10641_10669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (13))){
var inst_10623 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10642_10670 = state_10631__$1;
(statearr_10642_10670[(2)] = inst_10623);

(statearr_10642_10670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (6))){
var inst_10588 = (state_10631[(8)]);
var inst_10594 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_10588);
var state_10631__$1 = state_10631;
if(inst_10594){
var statearr_10643_10671 = state_10631__$1;
(statearr_10643_10671[(1)] = (8));

} else {
var statearr_10644_10672 = state_10631__$1;
(statearr_10644_10672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (3))){
var inst_10629 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10631__$1,inst_10629);
} else {
if((state_val_10632 === (12))){
var inst_10588 = (state_10631[(8)]);
var inst_10611 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_10588);
var state_10631__$1 = state_10631;
if(inst_10611){
var statearr_10645_10673 = state_10631__$1;
(statearr_10645_10673[(1)] = (14));

} else {
var statearr_10646_10674 = state_10631__$1;
(statearr_10646_10674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (2))){
var inst_10580 = (state_10631[(7)]);
var inst_10582 = app.t1.main.model = inst_10580;
var state_10631__$1 = (function (){var statearr_10647 = state_10631;
(statearr_10647[(10)] = inst_10582);

return statearr_10647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10631__$1,(4),app.t1.main.evt);
} else {
if((state_val_10632 === (11))){
var inst_10580 = (state_10631[(7)]);
var inst_10605 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_10606 = [false,true];
var inst_10607 = cljs.core.PersistentHashMap.fromArrays(inst_10605,inst_10606);
var inst_10608 = cljs.core.merge.call(null,inst_10580,inst_10607);
var inst_10580__$1 = inst_10608;
var state_10631__$1 = (function (){var statearr_10648 = state_10631;
(statearr_10648[(7)] = inst_10580__$1);

return statearr_10648;
})();
var statearr_10649_10675 = state_10631__$1;
(statearr_10649_10675[(2)] = null);

(statearr_10649_10675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (9))){
var inst_10588 = (state_10631[(8)]);
var inst_10603 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_10588);
var state_10631__$1 = state_10631;
if(inst_10603){
var statearr_10650_10676 = state_10631__$1;
(statearr_10650_10676[(1)] = (11));

} else {
var statearr_10651_10677 = state_10631__$1;
(statearr_10651_10677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (5))){
var inst_10580 = (state_10631[(7)]);
var inst_10591 = app.t1.main.update.call(null,inst_10580);
var inst_10580__$1 = inst_10591;
var state_10631__$1 = (function (){var statearr_10652 = state_10631;
(statearr_10652[(7)] = inst_10580__$1);

return statearr_10652;
})();
var statearr_10653_10678 = state_10631__$1;
(statearr_10653_10678[(2)] = null);

(statearr_10653_10678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (14))){
var inst_10580 = (state_10631[(7)]);
var inst_10613 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_10614 = [true,true];
var inst_10615 = cljs.core.PersistentHashMap.fromArrays(inst_10613,inst_10614);
var inst_10616 = cljs.core.merge.call(null,inst_10580,inst_10615);
var inst_10580__$1 = inst_10616;
var state_10631__$1 = (function (){var statearr_10654 = state_10631;
(statearr_10654[(7)] = inst_10580__$1);

return statearr_10654;
})();
var statearr_10655_10679 = state_10631__$1;
(statearr_10655_10679[(2)] = null);

(statearr_10655_10679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (16))){
var inst_10621 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10656_10680 = state_10631__$1;
(statearr_10656_10680[(2)] = inst_10621);

(statearr_10656_10680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (10))){
var inst_10625 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10657_10681 = state_10631__$1;
(statearr_10657_10681[(2)] = inst_10625);

(statearr_10657_10681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10632 === (8))){
var inst_10580 = (state_10631[(7)]);
var inst_10584 = (state_10631[(9)]);
var inst_10596 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_10597 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_10584);
var inst_10598 = [inst_10597];
var inst_10599 = cljs.core.PersistentHashMap.fromArrays(inst_10596,inst_10598);
var inst_10600 = cljs.core.merge.call(null,inst_10580,inst_10599);
var inst_10580__$1 = inst_10600;
var state_10631__$1 = (function (){var statearr_10658 = state_10631;
(statearr_10658[(7)] = inst_10580__$1);

return statearr_10658;
})();
var statearr_10659_10682 = state_10631__$1;
(statearr_10659_10682[(2)] = null);

(statearr_10659_10682[(1)] = (2));


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
});})(c__2882__auto___10664))
;
return ((function (switch__2792__auto__,c__2882__auto___10664){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_10660 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10660[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_10660[(1)] = (1));

return statearr_10660;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_10631){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_10631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e10661){if((e10661 instanceof Object)){
var ex__2796__auto__ = e10661;
var statearr_10662_10683 = state_10631;
(statearr_10662_10683[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10684 = state_10631;
state_10631 = G__10684;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_10631){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_10631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___10664))
})();
var state__2884__auto__ = (function (){var statearr_10663 = f__2883__auto__.call(null);
(statearr_10663[(6)] = c__2882__auto___10664);

return statearr_10663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___10664))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__10685){
var vec__10686 = p__10685;
var x = cljs.core.nth.call(null,vec__10686,(0),null);
var y = cljs.core.nth.call(null,vec__10686,(1),null);
var radius = cljs.core.nth.call(null,vec__10686,(2),null);
return ((radius * radius) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.take.call(null,(2),cljs.core.repeat.call(null,cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__10689 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.call(null,vec__10689,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10689,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10689,(2),null);
var a1 = cljs.core.nth.call(null,vec__10689,(3),null);
var vec__10692 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.call(null,vec__10692,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__10692,(1),null);
var ___$5 = cljs.core.nth.call(null,vec__10692,(2),null);
var a2 = cljs.core.nth.call(null,vec__10692,(3),null);
return cljs.core._EQ_.call(null,a1,a2);
});
app.t1.main.update = (function app$t1$main$update(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__10695){
var vec__10696 = p__10695;
var _ = cljs.core.nth.call(null,vec__10696,(0),null);
var selected = cljs.core.nth.call(null,vec__10696,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__10699){
var vec__10700 = p__10699;
var _ = cljs.core.nth.call(null,vec__10700,(0),null);
var selected = cljs.core.nth.call(null,vec__10700,(1),null);
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
var vec__10703 = mousePos;
var mx = cljs.core.nth.call(null,vec__10703,(0),null);
var my = cljs.core.nth.call(null,vec__10703,(1),null);
pc.background((200));

cljs.core.dorun.call(null,(function (){var seq__10706 = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__10707 = null;
var count__10708 = (0);
var i__10709 = (0);
while(true){
if((i__10709 < count__10708)){
var c = cljs.core._nth.call(null,chunk__10707,i__10709);
var isLeft_10741 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__10710_10742 = c;
var x_10743 = cljs.core.nth.call(null,vec__10710_10742,(0),null);
var y_10744 = cljs.core.nth.call(null,vec__10710_10742,(1),null);
var radius_10745 = cljs.core.nth.call(null,vec__10710_10742,(2),null);
var a_10746 = cljs.core.nth.call(null,vec__10710_10742,(3),null);
var radius2_10747 = (radius_10745 * (2));
var showText_10748 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_10746,(cljs.core.truth_(isLeft_10741)?(0):(1))], null));
var showTextOffsetX_10749 = (- (pc.textWidth(showText_10748) / (2)));
var selected_10750 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_10750)){
pc.fill((255));

pc.ellipse(x_10743,y_10744,radius2_10747,radius2_10747);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_10743,y_10744,radius2_10747,radius2_10747);
}

pc.fill((0));

pc.text(showText_10748,(x_10743 + showTextOffsetX_10749),y_10744);


var G__10751 = seq__10706;
var G__10752 = chunk__10707;
var G__10753 = count__10708;
var G__10754 = (i__10709 + (1));
seq__10706 = G__10751;
chunk__10707 = G__10752;
count__10708 = G__10753;
i__10709 = G__10754;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10706);
if(temp__5457__auto__){
var seq__10706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10706__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10706__$1);
var G__10755 = cljs.core.chunk_rest.call(null,seq__10706__$1);
var G__10756 = c__4319__auto__;
var G__10757 = cljs.core.count.call(null,c__4319__auto__);
var G__10758 = (0);
seq__10706 = G__10755;
chunk__10707 = G__10756;
count__10708 = G__10757;
i__10709 = G__10758;
continue;
} else {
var c = cljs.core.first.call(null,seq__10706__$1);
var isLeft_10759 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__10713_10760 = c;
var x_10761 = cljs.core.nth.call(null,vec__10713_10760,(0),null);
var y_10762 = cljs.core.nth.call(null,vec__10713_10760,(1),null);
var radius_10763 = cljs.core.nth.call(null,vec__10713_10760,(2),null);
var a_10764 = cljs.core.nth.call(null,vec__10713_10760,(3),null);
var radius2_10765 = (radius_10763 * (2));
var showText_10766 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_10764,(cljs.core.truth_(isLeft_10759)?(0):(1))], null));
var showTextOffsetX_10767 = (- (pc.textWidth(showText_10766) / (2)));
var selected_10768 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_10768)){
pc.fill((255));

pc.ellipse(x_10761,y_10762,radius2_10765,radius2_10765);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_10761,y_10762,radius2_10765,radius2_10765);
}

pc.fill((0));

pc.text(showText_10766,(x_10761 + showTextOffsetX_10767),y_10762);


var G__10769 = cljs.core.next.call(null,seq__10706__$1);
var G__10770 = null;
var G__10771 = (0);
var G__10772 = (0);
seq__10706 = G__10769;
chunk__10707 = G__10770;
count__10708 = G__10771;
i__10709 = G__10772;
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

var temp__5455__auto___10773 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5455__auto___10773)){
var s1_10774 = temp__5455__auto___10773;
var vec__10716_10775 = cljs.core.get_in.call(null,app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_10774], null));
var x_10776 = cljs.core.nth.call(null,vec__10716_10775,(0),null);
var y_10777 = cljs.core.nth.call(null,vec__10716_10775,(1),null);
pc.line(x_10776,y_10777,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.call(null,(function (){var seq__10719 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__10720 = null;
var count__10721 = (0);
var i__10722 = (0);
while(true){
if((i__10722 < count__10721)){
var line = cljs.core._nth.call(null,chunk__10720,i__10722);
var vec__10723_10778 = line;
var s1_10779 = cljs.core.nth.call(null,vec__10723_10778,(0),null);
var s2_10780 = cljs.core.nth.call(null,vec__10723_10778,(1),null);
var vec__10726_10781 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_10779);
var x_10782 = cljs.core.nth.call(null,vec__10726_10781,(0),null);
var y_10783 = cljs.core.nth.call(null,vec__10726_10781,(1),null);
var vec__10729_10784 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_10780);
var x2_10785 = cljs.core.nth.call(null,vec__10729_10784,(0),null);
var y2_10786 = cljs.core.nth.call(null,vec__10729_10784,(1),null);
pc.line(x_10782,y_10783,x2_10785,y2_10786);


var G__10787 = seq__10719;
var G__10788 = chunk__10720;
var G__10789 = count__10721;
var G__10790 = (i__10722 + (1));
seq__10719 = G__10787;
chunk__10720 = G__10788;
count__10721 = G__10789;
i__10722 = G__10790;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10719);
if(temp__5457__auto__){
var seq__10719__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10719__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10719__$1);
var G__10791 = cljs.core.chunk_rest.call(null,seq__10719__$1);
var G__10792 = c__4319__auto__;
var G__10793 = cljs.core.count.call(null,c__4319__auto__);
var G__10794 = (0);
seq__10719 = G__10791;
chunk__10720 = G__10792;
count__10721 = G__10793;
i__10722 = G__10794;
continue;
} else {
var line = cljs.core.first.call(null,seq__10719__$1);
var vec__10732_10795 = line;
var s1_10796 = cljs.core.nth.call(null,vec__10732_10795,(0),null);
var s2_10797 = cljs.core.nth.call(null,vec__10732_10795,(1),null);
var vec__10735_10798 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_10796);
var x_10799 = cljs.core.nth.call(null,vec__10735_10798,(0),null);
var y_10800 = cljs.core.nth.call(null,vec__10735_10798,(1),null);
var vec__10738_10801 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_10797);
var x2_10802 = cljs.core.nth.call(null,vec__10738_10801,(0),null);
var y2_10803 = cljs.core.nth.call(null,vec__10738_10801,(1),null);
pc.line(x_10799,y_10800,x2_10802,y2_10803);


var G__10804 = cljs.core.next.call(null,seq__10719__$1);
var G__10805 = null;
var G__10806 = (0);
var G__10807 = (0);
seq__10719 = G__10804;
chunk__10720 = G__10805;
count__10721 = G__10806;
i__10722 = G__10807;
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
var canvas_10808 = document.getElementById("canvas1");
var p_10809 = (new Processing(canvas_10808,app.t1.main.sketchProc));

//# sourceMappingURL=main.js.map
