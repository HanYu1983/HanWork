// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__8438,ctx){
var vec__8439 = p__8438;
var y = cljs.core.nth.call(null,vec__8439,(0),null);
var x = cljs.core.nth.call(null,vec__8439,(1),null);
var pos = vec__8439;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__8439,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__8439,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__8439,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__8439,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__8442 = cljs.core._EQ_;
var expr__8443 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__8442.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__8443))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__8442.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__8443))){
return v;
} else {
return v;
}
}
}
});
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),clojure.walk.prewalk.call(null,changeState,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))], null));
});
app.t4.main.checkWait = (function app$t4$main$checkWait(ctx){
var waitView = cljs.core.filter.call(null,(function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
}),cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx)));
var waitCnt = cljs.core.count.call(null,waitView);
if((waitCnt < (2))){
return ctx;
} else {
var pass = cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,((function (waitView,waitCnt){
return (function (p__8445){
var vec__8446 = p__8445;
var y = cljs.core.nth.call(null,vec__8446,(0),null);
var x = cljs.core.nth.call(null,vec__8446,(1),null);
var id = vec__8446;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__8449){
var map__8450 = p__8449;
var map__8450__$1 = ((((!((map__8450 == null)))?(((((map__8450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8450):map__8450);
var v = map__8450__$1;
var vec__8451 = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8451,(0),null);
var x = cljs.core.nth.call(null,vec__8451,(1),null);
var id = vec__8451;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__8450,map__8450__$1,v,vec__8451,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__8450,map__8450__$1,v,vec__8451,y,x,id,pass,waitView,waitCnt))
);
});})(pass,waitView,waitCnt))
,ctx,waitView);
}
});
app.t4.main.updateViewTimer = (function app$t4$main$updateViewTimer(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.update_in.call(null,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),cljs.core.partial.call(null,cljs.core._PLUS_,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null))));
}
});
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),clojure.walk.prewalk.call(null,changeState,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))], null));
});
app.t4.main.updateTimer = (function app$t4$main$updateTimer(ctx){
var now = (new Date()).getTime();
var last = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"last","last",1105735132)], null));
var elapsed = (now - last);
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last","last",1105735132),now,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),elapsed], null)], null));
});
app.t4.main.update = (function app$t4$main$update(ctx){
return app.t4.main.updateViewTimer.call(null,app.t4.main.checkWait.call(null,app.t4.main.updateView.call(null,app.t4.main.updateTimer.call(null,ctx))));
});
app.t4.main.main = (function app$t4$main$main(){
app.t4.main.model = null;

app.t4.main.evt = cljs.core.async.chan.call(null);

setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_8461){
var state_val_8462 = (state_8461[(1)]);
if((state_val_8462 === (1))){
var inst_8455 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8456 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8457 = cljs.core.PersistentHashMap.fromArrays(inst_8455,inst_8456);
var state_8461__$1 = state_8461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8461__$1,(2),app.t4.main.evt,inst_8457);
} else {
if((state_val_8462 === (2))){
var inst_8459 = (state_8461[(2)]);
var state_8461__$1 = state_8461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8461__$1,inst_8459);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8463 = [null,null,null,null,null,null,null];
(statearr_8463[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8463[(1)] = (1));

return statearr_8463;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8461){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8464){if((e8464 instanceof Object)){
var ex__2796__auto__ = e8464;
var statearr_8465_8597 = state_8461;
(statearr_8465_8597[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8598 = state_8461;
state_8461 = G__8598;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8461){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8466 = f__2883__auto__.call(null);
(statearr_8466[(6)] = c__2882__auto__);

return statearr_8466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var data_8599 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_8600 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_8599){
return (function app$t4$main$main_$_iter__8467(s__8468){
return (new cljs.core.LazySeq(null,((function (data_8599){
return (function (){
var s__8468__$1 = s__8468;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8468__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__8468__$1,y,xs__6012__auto__,temp__5457__auto__,data_8599){
return (function app$t4$main$main_$_iter__8467_$_iter__8469(s__8470){
return (new cljs.core.LazySeq(null,((function (s__8468__$1,y,xs__6012__auto__,temp__5457__auto__,data_8599){
return (function (){
var s__8470__$1 = s__8470;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8470__$1);
if(temp__5457__auto____$1){
var s__8470__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8470__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8470__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8472 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8471 = (0);
while(true){
if((i__8471 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__8471);
cljs.core.chunk_append.call(null,b__8472,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__8601 = (i__8471 + (1));
i__8471 = G__8601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8472),app$t4$main$main_$_iter__8467_$_iter__8469.call(null,cljs.core.chunk_rest.call(null,s__8470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8472),null);
}
} else {
var x = cljs.core.first.call(null,s__8470__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__8467_$_iter__8469.call(null,cljs.core.rest.call(null,s__8470__$2)));
}
} else {
return null;
}
break;
}
});})(s__8468__$1,y,xs__6012__auto__,temp__5457__auto__,data_8599))
,null,null));
});})(s__8468__$1,y,xs__6012__auto__,temp__5457__auto__,data_8599))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__8467.call(null,cljs.core.rest.call(null,s__8468__$1)));
} else {
var G__8602 = cljs.core.rest.call(null,s__8468__$1);
s__8468__$1 = G__8602;
continue;
}
} else {
return null;
}
break;
}
});})(data_8599))
,null,null));
});})(data_8599))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2882__auto___8603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8603,data_8599,view_8600){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8603,data_8599,view_8600){
return (function (state_8543){
var state_val_8544 = (state_8543[(1)]);
if((state_val_8544 === (7))){
var inst_8539 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8545_8604 = state_8543__$1;
(statearr_8545_8604[(2)] = inst_8539);

(statearr_8545_8604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (1))){
var inst_8473 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_8474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8475 = [(0),(0)];
var inst_8476 = (new cljs.core.PersistentVector(null,2,(5),inst_8474,inst_8475,null));
var inst_8477 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_8478 = (new Date());
var inst_8479 = inst_8478.getTime();
var inst_8480 = [inst_8479,(0)];
var inst_8481 = cljs.core.PersistentHashMap.fromArrays(inst_8477,inst_8480);
var inst_8482 = [inst_8476,data_8599,view_8600,inst_8481];
var inst_8483 = cljs.core.PersistentHashMap.fromArrays(inst_8473,inst_8482);
var inst_8484 = inst_8483;
var state_8543__$1 = (function (){var statearr_8546 = state_8543;
(statearr_8546[(7)] = inst_8484);

return statearr_8546;
})();
var statearr_8547_8605 = state_8543__$1;
(statearr_8547_8605[(2)] = null);

(statearr_8547_8605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (4))){
var inst_8488 = (state_8543[(8)]);
var inst_8492 = (state_8543[(9)]);
var inst_8488__$1 = (state_8543[(2)]);
var inst_8492__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8488__$1);
var inst_8493 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_8492__$1);
var state_8543__$1 = (function (){var statearr_8548 = state_8543;
(statearr_8548[(8)] = inst_8488__$1);

(statearr_8548[(9)] = inst_8492__$1);

return statearr_8548;
})();
if(inst_8493){
var statearr_8549_8606 = state_8543__$1;
(statearr_8549_8606[(1)] = (5));

} else {
var statearr_8550_8607 = state_8543__$1;
(statearr_8550_8607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (6))){
var inst_8492 = (state_8543[(9)]);
var inst_8504 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8492);
var state_8543__$1 = state_8543;
if(inst_8504){
var statearr_8551_8608 = state_8543__$1;
(statearr_8551_8608[(1)] = (8));

} else {
var statearr_8552_8609 = state_8543__$1;
(statearr_8552_8609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (3))){
var inst_8541 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8543__$1,inst_8541);
} else {
if((state_val_8544 === (2))){
var inst_8484 = (state_8543[(7)]);
var inst_8486 = app.t4.main.model = inst_8484;
var state_8543__$1 = (function (){var statearr_8553 = state_8543;
(statearr_8553[(10)] = inst_8486);

return statearr_8553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8543__$1,(4),app.t4.main.evt);
} else {
if((state_val_8544 === (9))){
var inst_8484 = (state_8543[(7)]);
var inst_8534 = app.t4.main.update.call(null,inst_8484);
var inst_8484__$1 = inst_8534;
var state_8543__$1 = (function (){var statearr_8554 = state_8543;
(statearr_8554[(7)] = inst_8484__$1);

return statearr_8554;
})();
var statearr_8555_8610 = state_8543__$1;
(statearr_8555_8610[(2)] = null);

(statearr_8555_8610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (5))){
var inst_8484 = (state_8543[(7)]);
var inst_8498 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_8484);
var inst_8499 = cljs.core.nth.call(null,inst_8498,(0),null);
var inst_8500 = cljs.core.nth.call(null,inst_8498,(1),null);
var inst_8501 = app.t4.main.flip.call(null,inst_8498,inst_8484);
var inst_8484__$1 = inst_8501;
var state_8543__$1 = (function (){var statearr_8556 = state_8543;
(statearr_8556[(7)] = inst_8484__$1);

(statearr_8556[(11)] = inst_8499);

(statearr_8556[(12)] = inst_8500);

return statearr_8556;
})();
var statearr_8557_8611 = state_8543__$1;
(statearr_8557_8611[(2)] = null);

(statearr_8557_8611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (10))){
var inst_8537 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8558_8612 = state_8543__$1;
(statearr_8558_8612[(2)] = inst_8537);

(statearr_8558_8612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8544 === (8))){
var inst_8484 = (state_8543[(7)]);
var inst_8488 = (state_8543[(8)]);
var inst_8512 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_8488);
var inst_8513 = cljs.core.nth.call(null,inst_8512,(0),null);
var inst_8514 = cljs.core.nth.call(null,inst_8512,(1),null);
var inst_8515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8516 = [inst_8514,inst_8513];
var inst_8517 = (new cljs.core.PersistentVector(null,2,(5),inst_8515,inst_8516,null));
var inst_8518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8519 = [(100),(100)];
var inst_8520 = (new cljs.core.PersistentVector(null,2,(5),inst_8518,inst_8519,null));
var inst_8521 = cljs.core.map.call(null,cljs.core._SLASH_,inst_8517,inst_8520);
var inst_8522 = cljs.core.map.call(null,cljs.core.int$,inst_8521);
var inst_8523 = cljs.core.nth.call(null,inst_8522,(0),null);
var inst_8524 = cljs.core.nth.call(null,inst_8522,(1),null);
var inst_8525 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_8526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8527 = [inst_8523,inst_8524];
var inst_8528 = (new cljs.core.PersistentVector(null,2,(5),inst_8526,inst_8527,null));
var inst_8529 = [inst_8528];
var inst_8530 = cljs.core.PersistentHashMap.fromArrays(inst_8525,inst_8529);
var inst_8531 = cljs.core.merge.call(null,inst_8484,inst_8530);
var inst_8484__$1 = inst_8531;
var state_8543__$1 = (function (){var statearr_8559 = state_8543;
(statearr_8559[(7)] = inst_8484__$1);

return statearr_8559;
})();
var statearr_8560_8613 = state_8543__$1;
(statearr_8560_8613[(2)] = null);

(statearr_8560_8613[(1)] = (2));


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
});})(c__2882__auto___8603,data_8599,view_8600))
;
return ((function (switch__2792__auto__,c__2882__auto___8603,data_8599,view_8600){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8561 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8561[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8561[(1)] = (1));

return statearr_8561;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8543){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8562){if((e8562 instanceof Object)){
var ex__2796__auto__ = e8562;
var statearr_8563_8614 = state_8543;
(statearr_8563_8614[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8615 = state_8543;
state_8543 = G__8615;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8543){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8603,data_8599,view_8600))
})();
var state__2884__auto__ = (function (){var statearr_8564 = f__2883__auto__.call(null);
(statearr_8564[(6)] = c__2882__auto___8603);

return statearr_8564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8603,data_8599,view_8600))
);


var p5 = window;
p5.setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(300));
canvas.mousePressed(((function (canvas,p5){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas,p5){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas,p5){
return (function (state_8571){
var state_val_8572 = (state_8571[(1)]);
if((state_val_8572 === (1))){
var inst_8565 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8566 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_8567 = cljs.core.PersistentHashMap.fromArrays(inst_8565,inst_8566);
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8571__$1,(2),app.t4.main.evt,inst_8567);
} else {
if((state_val_8572 === (2))){
var inst_8569 = (state_8571[(2)]);
var state_8571__$1 = state_8571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8571__$1,inst_8569);
} else {
return null;
}
}
});})(c__2882__auto__,canvas,p5))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8573 = [null,null,null,null,null,null,null];
(statearr_8573[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8573[(1)] = (1));

return statearr_8573;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8571){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8574){if((e8574 instanceof Object)){
var ex__2796__auto__ = e8574;
var statearr_8575_8616 = state_8571;
(statearr_8575_8616[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8617 = state_8571;
state_8571 = G__8617;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8571){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_8576 = f__2883__auto__.call(null);
(statearr_8576[(6)] = c__2882__auto__);

return statearr_8576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas,p5))
);

return c__2882__auto__;
});})(canvas,p5))
);

canvas.mouseMoved(((function (canvas,p5){
return (function (){
var x = p5.mouseX;
var y = p5.mouseY;
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,x,y,canvas,p5){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,x,y,canvas,p5){
return (function (state_8586){
var state_val_8587 = (state_8586[(1)]);
if((state_val_8587 === (1))){
var inst_8577 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_8578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8579 = [x,y];
var inst_8580 = (new cljs.core.PersistentVector(null,2,(5),inst_8578,inst_8579,null));
var inst_8581 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8580];
var inst_8582 = cljs.core.PersistentHashMap.fromArrays(inst_8577,inst_8581);
var state_8586__$1 = state_8586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8586__$1,(2),app.t4.main.evt,inst_8582);
} else {
if((state_val_8587 === (2))){
var inst_8584 = (state_8586[(2)]);
var state_8586__$1 = state_8586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8586__$1,inst_8584);
} else {
return null;
}
}
});})(c__2882__auto__,x,y,canvas,p5))
;
return ((function (switch__2792__auto__,c__2882__auto__,x,y,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8588 = [null,null,null,null,null,null,null];
(statearr_8588[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8588[(1)] = (1));

return statearr_8588;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8586){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8589){if((e8589 instanceof Object)){
var ex__2796__auto__ = e8589;
var statearr_8590_8618 = state_8586;
(statearr_8590_8618[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8619 = state_8586;
state_8586 = G__8619;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8586){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,x,y,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_8591 = f__2883__auto__.call(null);
(statearr_8591[(6)] = c__2882__auto__);

return statearr_8591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,x,y,canvas,p5))
);

return c__2882__auto__;
});})(canvas,p5))
);

return canvas.parent("container");
});})(p5))
;

return p5.draw = ((function (p5){
return (function (){
p5.fill((255));

p5.rect((0),(0),(600),(300));

if(cljs.core.truth_(app.t4.main.model)){
return cljs.core.dorun.call(null,clojure.walk.prewalk.call(null,((function (p5){
return (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var map__8592 = v;
var map__8592__$1 = ((((!((map__8592 == null)))?(((((map__8592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8592):map__8592);
var vec__8593 = cljs.core.get.call(null,map__8592__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8593,(0),null);
var x = cljs.core.nth.call(null,vec__8593,(1),null);
var txt = cljs.core.get_in.call(null,app.t4.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),y,x], null));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null)))){
p5.fill((255));

p5.rect(((100) * x),((100) * y),(100),(100));

p5.fill((255),(0),(0));

return p5.text(txt,((50) + ((100) * x)),((50) + ((100) * y)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v))){
p5.fill((0),(255),(0));

p5.rect(((100) * x),((100) * y),(100),(100));

p5.fill((255),(0),(0));

return p5.text(txt,((50) + ((100) * x)),((50) + ((100) * y)));
} else {
p5.fill((255),(0),(0));

return p5.rect(((100) * x),((100) * y),(100),(100));

}
}
}
});})(p5))
,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app.t4.main.model)));
} else {
return null;
}
});})(p5))
;
});
app.t4.main.main.call(null);

//# sourceMappingURL=main.js.map
