// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__5558,ctx){
var vec__5559 = p__5558;
var y = cljs.core.nth.call(null,vec__5559,(0),null);
var x = cljs.core.nth.call(null,vec__5559,(1),null);
var pos = vec__5559;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__5559,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__5559,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__5559,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__5559,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__5562 = cljs.core._EQ_;
var expr__5563 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__5562.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__5563))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__5562.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__5563))){
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
return (function (p__5565){
var vec__5566 = p__5565;
var y = cljs.core.nth.call(null,vec__5566,(0),null);
var x = cljs.core.nth.call(null,vec__5566,(1),null);
var id = vec__5566;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__5569){
var map__5570 = p__5569;
var map__5570__$1 = ((((!((map__5570 == null)))?(((((map__5570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5570):map__5570);
var v = map__5570__$1;
var vec__5571 = cljs.core.get.call(null,map__5570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__5571,(0),null);
var x = cljs.core.nth.call(null,vec__5571,(1),null);
var id = vec__5571;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__5570,map__5570__$1,v,vec__5571,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__5570,map__5570__$1,v,vec__5571,y,x,id,pass,waitView,waitCnt))
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
return (function (state_5581){
var state_val_5582 = (state_5581[(1)]);
if((state_val_5582 === (1))){
var inst_5575 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5576 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_5577 = cljs.core.PersistentHashMap.fromArrays(inst_5575,inst_5576);
var state_5581__$1 = state_5581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5581__$1,(2),app.t4.main.evt,inst_5577);
} else {
if((state_val_5582 === (2))){
var inst_5579 = (state_5581[(2)]);
var state_5581__$1 = state_5581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5581__$1,inst_5579);
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
var statearr_5583 = [null,null,null,null,null,null,null];
(statearr_5583[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_5583[(1)] = (1));

return statearr_5583;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_5581){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5584){if((e5584 instanceof Object)){
var ex__2796__auto__ = e5584;
var statearr_5585_5717 = state_5581;
(statearr_5585_5717[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5718 = state_5581;
state_5581 = G__5718;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_5581){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_5581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5586 = f__2883__auto__.call(null);
(statearr_5586[(6)] = c__2882__auto__);

return statearr_5586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var data_5719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_5720 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_5719){
return (function app$t4$main$main_$_iter__5587(s__5588){
return (new cljs.core.LazySeq(null,((function (data_5719){
return (function (){
var s__5588__$1 = s__5588;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5588__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__5588__$1,y,xs__6012__auto__,temp__5457__auto__,data_5719){
return (function app$t4$main$main_$_iter__5587_$_iter__5589(s__5590){
return (new cljs.core.LazySeq(null,((function (s__5588__$1,y,xs__6012__auto__,temp__5457__auto__,data_5719){
return (function (){
var s__5590__$1 = s__5590;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5590__$1);
if(temp__5457__auto____$1){
var s__5590__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5590__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__5590__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__5592 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__5591 = (0);
while(true){
if((i__5591 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__5591);
cljs.core.chunk_append.call(null,b__5592,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__5721 = (i__5591 + (1));
i__5591 = G__5721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5592),app$t4$main$main_$_iter__5587_$_iter__5589.call(null,cljs.core.chunk_rest.call(null,s__5590__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5592),null);
}
} else {
var x = cljs.core.first.call(null,s__5590__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__5587_$_iter__5589.call(null,cljs.core.rest.call(null,s__5590__$2)));
}
} else {
return null;
}
break;
}
});})(s__5588__$1,y,xs__6012__auto__,temp__5457__auto__,data_5719))
,null,null));
});})(s__5588__$1,y,xs__6012__auto__,temp__5457__auto__,data_5719))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__5587.call(null,cljs.core.rest.call(null,s__5588__$1)));
} else {
var G__5722 = cljs.core.rest.call(null,s__5588__$1);
s__5588__$1 = G__5722;
continue;
}
} else {
return null;
}
break;
}
});})(data_5719))
,null,null));
});})(data_5719))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2882__auto___5723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5723,data_5719,view_5720){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5723,data_5719,view_5720){
return (function (state_5663){
var state_val_5664 = (state_5663[(1)]);
if((state_val_5664 === (7))){
var inst_5659 = (state_5663[(2)]);
var state_5663__$1 = state_5663;
var statearr_5665_5724 = state_5663__$1;
(statearr_5665_5724[(2)] = inst_5659);

(statearr_5665_5724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (1))){
var inst_5593 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_5594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5595 = [(0),(0)];
var inst_5596 = (new cljs.core.PersistentVector(null,2,(5),inst_5594,inst_5595,null));
var inst_5597 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_5598 = (new Date());
var inst_5599 = inst_5598.getTime();
var inst_5600 = [inst_5599,(0)];
var inst_5601 = cljs.core.PersistentHashMap.fromArrays(inst_5597,inst_5600);
var inst_5602 = [inst_5596,data_5719,view_5720,inst_5601];
var inst_5603 = cljs.core.PersistentHashMap.fromArrays(inst_5593,inst_5602);
var inst_5604 = inst_5603;
var state_5663__$1 = (function (){var statearr_5666 = state_5663;
(statearr_5666[(7)] = inst_5604);

return statearr_5666;
})();
var statearr_5667_5725 = state_5663__$1;
(statearr_5667_5725[(2)] = null);

(statearr_5667_5725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (4))){
var inst_5612 = (state_5663[(8)]);
var inst_5608 = (state_5663[(9)]);
var inst_5608__$1 = (state_5663[(2)]);
var inst_5612__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_5608__$1);
var inst_5613 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_5612__$1);
var state_5663__$1 = (function (){var statearr_5668 = state_5663;
(statearr_5668[(8)] = inst_5612__$1);

(statearr_5668[(9)] = inst_5608__$1);

return statearr_5668;
})();
if(inst_5613){
var statearr_5669_5726 = state_5663__$1;
(statearr_5669_5726[(1)] = (5));

} else {
var statearr_5670_5727 = state_5663__$1;
(statearr_5670_5727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (6))){
var inst_5612 = (state_5663[(8)]);
var inst_5624 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_5612);
var state_5663__$1 = state_5663;
if(inst_5624){
var statearr_5671_5728 = state_5663__$1;
(statearr_5671_5728[(1)] = (8));

} else {
var statearr_5672_5729 = state_5663__$1;
(statearr_5672_5729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (3))){
var inst_5661 = (state_5663[(2)]);
var state_5663__$1 = state_5663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5663__$1,inst_5661);
} else {
if((state_val_5664 === (2))){
var inst_5604 = (state_5663[(7)]);
var inst_5606 = app.t4.main.model = inst_5604;
var state_5663__$1 = (function (){var statearr_5673 = state_5663;
(statearr_5673[(10)] = inst_5606);

return statearr_5673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5663__$1,(4),app.t4.main.evt);
} else {
if((state_val_5664 === (9))){
var inst_5604 = (state_5663[(7)]);
var inst_5654 = app.t4.main.update.call(null,inst_5604);
var inst_5604__$1 = inst_5654;
var state_5663__$1 = (function (){var statearr_5674 = state_5663;
(statearr_5674[(7)] = inst_5604__$1);

return statearr_5674;
})();
var statearr_5675_5730 = state_5663__$1;
(statearr_5675_5730[(2)] = null);

(statearr_5675_5730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (5))){
var inst_5604 = (state_5663[(7)]);
var inst_5618 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_5604);
var inst_5619 = cljs.core.nth.call(null,inst_5618,(0),null);
var inst_5620 = cljs.core.nth.call(null,inst_5618,(1),null);
var inst_5621 = app.t4.main.flip.call(null,inst_5618,inst_5604);
var inst_5604__$1 = inst_5621;
var state_5663__$1 = (function (){var statearr_5676 = state_5663;
(statearr_5676[(11)] = inst_5620);

(statearr_5676[(12)] = inst_5619);

(statearr_5676[(7)] = inst_5604__$1);

return statearr_5676;
})();
var statearr_5677_5731 = state_5663__$1;
(statearr_5677_5731[(2)] = null);

(statearr_5677_5731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (10))){
var inst_5657 = (state_5663[(2)]);
var state_5663__$1 = state_5663;
var statearr_5678_5732 = state_5663__$1;
(statearr_5678_5732[(2)] = inst_5657);

(statearr_5678_5732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5664 === (8))){
var inst_5608 = (state_5663[(9)]);
var inst_5604 = (state_5663[(7)]);
var inst_5632 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_5608);
var inst_5633 = cljs.core.nth.call(null,inst_5632,(0),null);
var inst_5634 = cljs.core.nth.call(null,inst_5632,(1),null);
var inst_5635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5636 = [inst_5634,inst_5633];
var inst_5637 = (new cljs.core.PersistentVector(null,2,(5),inst_5635,inst_5636,null));
var inst_5638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5639 = [(100),(100)];
var inst_5640 = (new cljs.core.PersistentVector(null,2,(5),inst_5638,inst_5639,null));
var inst_5641 = cljs.core.map.call(null,cljs.core._SLASH_,inst_5637,inst_5640);
var inst_5642 = cljs.core.map.call(null,cljs.core.int$,inst_5641);
var inst_5643 = cljs.core.nth.call(null,inst_5642,(0),null);
var inst_5644 = cljs.core.nth.call(null,inst_5642,(1),null);
var inst_5645 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_5646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5647 = [inst_5643,inst_5644];
var inst_5648 = (new cljs.core.PersistentVector(null,2,(5),inst_5646,inst_5647,null));
var inst_5649 = [inst_5648];
var inst_5650 = cljs.core.PersistentHashMap.fromArrays(inst_5645,inst_5649);
var inst_5651 = cljs.core.merge.call(null,inst_5604,inst_5650);
var inst_5604__$1 = inst_5651;
var state_5663__$1 = (function (){var statearr_5679 = state_5663;
(statearr_5679[(7)] = inst_5604__$1);

return statearr_5679;
})();
var statearr_5680_5733 = state_5663__$1;
(statearr_5680_5733[(2)] = null);

(statearr_5680_5733[(1)] = (2));


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
});})(c__2882__auto___5723,data_5719,view_5720))
;
return ((function (switch__2792__auto__,c__2882__auto___5723,data_5719,view_5720){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5681 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5681[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_5681[(1)] = (1));

return statearr_5681;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_5663){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5682){if((e5682 instanceof Object)){
var ex__2796__auto__ = e5682;
var statearr_5683_5734 = state_5663;
(statearr_5683_5734[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5735 = state_5663;
state_5663 = G__5735;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_5663){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_5663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5723,data_5719,view_5720))
})();
var state__2884__auto__ = (function (){var statearr_5684 = f__2883__auto__.call(null);
(statearr_5684[(6)] = c__2882__auto___5723);

return statearr_5684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5723,data_5719,view_5720))
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
return (function (state_5691){
var state_val_5692 = (state_5691[(1)]);
if((state_val_5692 === (1))){
var inst_5685 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5686 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_5687 = cljs.core.PersistentHashMap.fromArrays(inst_5685,inst_5686);
var state_5691__$1 = state_5691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5691__$1,(2),app.t4.main.evt,inst_5687);
} else {
if((state_val_5692 === (2))){
var inst_5689 = (state_5691[(2)]);
var state_5691__$1 = state_5691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5691__$1,inst_5689);
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
var statearr_5693 = [null,null,null,null,null,null,null];
(statearr_5693[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_5693[(1)] = (1));

return statearr_5693;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_5691){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5694){if((e5694 instanceof Object)){
var ex__2796__auto__ = e5694;
var statearr_5695_5736 = state_5691;
(statearr_5695_5736[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5737 = state_5691;
state_5691 = G__5737;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_5691){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_5691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_5696 = f__2883__auto__.call(null);
(statearr_5696[(6)] = c__2882__auto__);

return statearr_5696;
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
return (function (state_5706){
var state_val_5707 = (state_5706[(1)]);
if((state_val_5707 === (1))){
var inst_5697 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_5698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5699 = [x,y];
var inst_5700 = (new cljs.core.PersistentVector(null,2,(5),inst_5698,inst_5699,null));
var inst_5701 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_5700];
var inst_5702 = cljs.core.PersistentHashMap.fromArrays(inst_5697,inst_5701);
var state_5706__$1 = state_5706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5706__$1,(2),app.t4.main.evt,inst_5702);
} else {
if((state_val_5707 === (2))){
var inst_5704 = (state_5706[(2)]);
var state_5706__$1 = state_5706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5706__$1,inst_5704);
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
var statearr_5708 = [null,null,null,null,null,null,null];
(statearr_5708[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_5708[(1)] = (1));

return statearr_5708;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_5706){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5709){if((e5709 instanceof Object)){
var ex__2796__auto__ = e5709;
var statearr_5710_5738 = state_5706;
(statearr_5710_5738[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5739 = state_5706;
state_5706 = G__5739;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_5706){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_5706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,x,y,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_5711 = f__2883__auto__.call(null);
(statearr_5711[(6)] = c__2882__auto__);

return statearr_5711;
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
var map__5712 = v;
var map__5712__$1 = ((((!((map__5712 == null)))?(((((map__5712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5712):map__5712);
var vec__5713 = cljs.core.get.call(null,map__5712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__5713,(0),null);
var x = cljs.core.nth.call(null,vec__5713,(1),null);
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
