// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__8781,ctx){
var vec__8782 = p__8781;
var y = cljs.core.nth.call(null,vec__8782,(0),null);
var x = cljs.core.nth.call(null,vec__8782,(1),null);
var pos = vec__8782;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__8782,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__8782,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__8782,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__8782,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__8785 = cljs.core._EQ_;
var expr__8786 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__8785.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__8786))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__8785.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__8786))){
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
return (function (p__8788){
var vec__8789 = p__8788;
var y = cljs.core.nth.call(null,vec__8789,(0),null);
var x = cljs.core.nth.call(null,vec__8789,(1),null);
var id = vec__8789;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__8792){
var map__8793 = p__8792;
var map__8793__$1 = ((((!((map__8793 == null)))?(((((map__8793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8793):map__8793);
var v = map__8793__$1;
var vec__8794 = cljs.core.get.call(null,map__8793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8794,(0),null);
var x = cljs.core.nth.call(null,vec__8794,(1),null);
var id = vec__8794;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__8793,map__8793__$1,v,vec__8794,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__8793,map__8793__$1,v,vec__8794,y,x,id,pass,waitView,waitCnt))
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
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_8804){
var state_val_8805 = (state_8804[(1)]);
if((state_val_8805 === (1))){
var inst_8798 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8799 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8800 = cljs.core.PersistentHashMap.fromArrays(inst_8798,inst_8799);
var state_8804__$1 = state_8804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8804__$1,(2),app.t4.main.evt,inst_8800);
} else {
if((state_val_8805 === (2))){
var inst_8802 = (state_8804[(2)]);
var state_8804__$1 = state_8804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8804__$1,inst_8802);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t4$main$main_$_state_machine__2796__auto__ = null;
var app$t4$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_8806 = [null,null,null,null,null,null,null];
(statearr_8806[(0)] = app$t4$main$main_$_state_machine__2796__auto__);

(statearr_8806[(1)] = (1));

return statearr_8806;
});
var app$t4$main$main_$_state_machine__2796__auto____1 = (function (state_8804){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8807){if((e8807 instanceof Object)){
var ex__2799__auto__ = e8807;
var statearr_8808_8940 = state_8804;
(statearr_8808_8940[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8941 = state_8804;
state_8804 = G__8941;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2796__auto__ = function(state_8804){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2796__auto____1.call(this,state_8804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2796__auto____0;
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2796__auto____1;
return app$t4$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_8809 = f__2886__auto__.call(null);
(statearr_8809[(6)] = c__2885__auto__);

return statearr_8809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
}),(33));

var data_8942 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_8943 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_8942){
return (function app$t4$main$main_$_iter__8810(s__8811){
return (new cljs.core.LazySeq(null,((function (data_8942){
return (function (){
var s__8811__$1 = s__8811;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8811__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__8811__$1,y,xs__6012__auto__,temp__5457__auto__,data_8942){
return (function app$t4$main$main_$_iter__8810_$_iter__8812(s__8813){
return (new cljs.core.LazySeq(null,((function (s__8811__$1,y,xs__6012__auto__,temp__5457__auto__,data_8942){
return (function (){
var s__8813__$1 = s__8813;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8813__$1);
if(temp__5457__auto____$1){
var s__8813__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8813__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8813__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8815 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8814 = (0);
while(true){
if((i__8814 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__8814);
cljs.core.chunk_append.call(null,b__8815,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__8944 = (i__8814 + (1));
i__8814 = G__8944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),app$t4$main$main_$_iter__8810_$_iter__8812.call(null,cljs.core.chunk_rest.call(null,s__8813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),null);
}
} else {
var x = cljs.core.first.call(null,s__8813__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__8810_$_iter__8812.call(null,cljs.core.rest.call(null,s__8813__$2)));
}
} else {
return null;
}
break;
}
});})(s__8811__$1,y,xs__6012__auto__,temp__5457__auto__,data_8942))
,null,null));
});})(s__8811__$1,y,xs__6012__auto__,temp__5457__auto__,data_8942))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__8810.call(null,cljs.core.rest.call(null,s__8811__$1)));
} else {
var G__8945 = cljs.core.rest.call(null,s__8811__$1);
s__8811__$1 = G__8945;
continue;
}
} else {
return null;
}
break;
}
});})(data_8942))
,null,null));
});})(data_8942))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2885__auto___8946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___8946,data_8942,view_8943){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___8946,data_8942,view_8943){
return (function (state_8886){
var state_val_8887 = (state_8886[(1)]);
if((state_val_8887 === (7))){
var inst_8882 = (state_8886[(2)]);
var state_8886__$1 = state_8886;
var statearr_8888_8947 = state_8886__$1;
(statearr_8888_8947[(2)] = inst_8882);

(statearr_8888_8947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (1))){
var inst_8816 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_8817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8818 = [(0),(0)];
var inst_8819 = (new cljs.core.PersistentVector(null,2,(5),inst_8817,inst_8818,null));
var inst_8820 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_8821 = (new Date());
var inst_8822 = inst_8821.getTime();
var inst_8823 = [inst_8822,(0)];
var inst_8824 = cljs.core.PersistentHashMap.fromArrays(inst_8820,inst_8823);
var inst_8825 = [inst_8819,data_8942,view_8943,inst_8824];
var inst_8826 = cljs.core.PersistentHashMap.fromArrays(inst_8816,inst_8825);
var inst_8827 = inst_8826;
var state_8886__$1 = (function (){var statearr_8889 = state_8886;
(statearr_8889[(7)] = inst_8827);

return statearr_8889;
})();
var statearr_8890_8948 = state_8886__$1;
(statearr_8890_8948[(2)] = null);

(statearr_8890_8948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (4))){
var inst_8831 = (state_8886[(8)]);
var inst_8835 = (state_8886[(9)]);
var inst_8831__$1 = (state_8886[(2)]);
var inst_8835__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8831__$1);
var inst_8836 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_8835__$1);
var state_8886__$1 = (function (){var statearr_8891 = state_8886;
(statearr_8891[(8)] = inst_8831__$1);

(statearr_8891[(9)] = inst_8835__$1);

return statearr_8891;
})();
if(inst_8836){
var statearr_8892_8949 = state_8886__$1;
(statearr_8892_8949[(1)] = (5));

} else {
var statearr_8893_8950 = state_8886__$1;
(statearr_8893_8950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (6))){
var inst_8835 = (state_8886[(9)]);
var inst_8847 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8835);
var state_8886__$1 = state_8886;
if(inst_8847){
var statearr_8894_8951 = state_8886__$1;
(statearr_8894_8951[(1)] = (8));

} else {
var statearr_8895_8952 = state_8886__$1;
(statearr_8895_8952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (3))){
var inst_8884 = (state_8886[(2)]);
var state_8886__$1 = state_8886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8886__$1,inst_8884);
} else {
if((state_val_8887 === (2))){
var inst_8827 = (state_8886[(7)]);
var inst_8829 = app.t4.main.model = inst_8827;
var state_8886__$1 = (function (){var statearr_8896 = state_8886;
(statearr_8896[(10)] = inst_8829);

return statearr_8896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8886__$1,(4),app.t4.main.evt);
} else {
if((state_val_8887 === (9))){
var inst_8827 = (state_8886[(7)]);
var inst_8877 = app.t4.main.update.call(null,inst_8827);
var inst_8827__$1 = inst_8877;
var state_8886__$1 = (function (){var statearr_8897 = state_8886;
(statearr_8897[(7)] = inst_8827__$1);

return statearr_8897;
})();
var statearr_8898_8953 = state_8886__$1;
(statearr_8898_8953[(2)] = null);

(statearr_8898_8953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (5))){
var inst_8827 = (state_8886[(7)]);
var inst_8841 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_8827);
var inst_8842 = cljs.core.nth.call(null,inst_8841,(0),null);
var inst_8843 = cljs.core.nth.call(null,inst_8841,(1),null);
var inst_8844 = app.t4.main.flip.call(null,inst_8841,inst_8827);
var inst_8827__$1 = inst_8844;
var state_8886__$1 = (function (){var statearr_8899 = state_8886;
(statearr_8899[(7)] = inst_8827__$1);

(statearr_8899[(11)] = inst_8843);

(statearr_8899[(12)] = inst_8842);

return statearr_8899;
})();
var statearr_8900_8954 = state_8886__$1;
(statearr_8900_8954[(2)] = null);

(statearr_8900_8954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (10))){
var inst_8880 = (state_8886[(2)]);
var state_8886__$1 = state_8886;
var statearr_8901_8955 = state_8886__$1;
(statearr_8901_8955[(2)] = inst_8880);

(statearr_8901_8955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8887 === (8))){
var inst_8827 = (state_8886[(7)]);
var inst_8831 = (state_8886[(8)]);
var inst_8855 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_8831);
var inst_8856 = cljs.core.nth.call(null,inst_8855,(0),null);
var inst_8857 = cljs.core.nth.call(null,inst_8855,(1),null);
var inst_8858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8859 = [inst_8857,inst_8856];
var inst_8860 = (new cljs.core.PersistentVector(null,2,(5),inst_8858,inst_8859,null));
var inst_8861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8862 = [(100),(100)];
var inst_8863 = (new cljs.core.PersistentVector(null,2,(5),inst_8861,inst_8862,null));
var inst_8864 = cljs.core.map.call(null,cljs.core._SLASH_,inst_8860,inst_8863);
var inst_8865 = cljs.core.map.call(null,cljs.core.int$,inst_8864);
var inst_8866 = cljs.core.nth.call(null,inst_8865,(0),null);
var inst_8867 = cljs.core.nth.call(null,inst_8865,(1),null);
var inst_8868 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_8869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8870 = [inst_8866,inst_8867];
var inst_8871 = (new cljs.core.PersistentVector(null,2,(5),inst_8869,inst_8870,null));
var inst_8872 = [inst_8871];
var inst_8873 = cljs.core.PersistentHashMap.fromArrays(inst_8868,inst_8872);
var inst_8874 = cljs.core.merge.call(null,inst_8827,inst_8873);
var inst_8827__$1 = inst_8874;
var state_8886__$1 = (function (){var statearr_8902 = state_8886;
(statearr_8902[(7)] = inst_8827__$1);

return statearr_8902;
})();
var statearr_8903_8956 = state_8886__$1;
(statearr_8903_8956[(2)] = null);

(statearr_8903_8956[(1)] = (2));


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
});})(c__2885__auto___8946,data_8942,view_8943))
;
return ((function (switch__2795__auto__,c__2885__auto___8946,data_8942,view_8943){
return (function() {
var app$t4$main$main_$_state_machine__2796__auto__ = null;
var app$t4$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_8904 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8904[(0)] = app$t4$main$main_$_state_machine__2796__auto__);

(statearr_8904[(1)] = (1));

return statearr_8904;
});
var app$t4$main$main_$_state_machine__2796__auto____1 = (function (state_8886){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8905){if((e8905 instanceof Object)){
var ex__2799__auto__ = e8905;
var statearr_8906_8957 = state_8886;
(statearr_8906_8957[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8958 = state_8886;
state_8886 = G__8958;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2796__auto__ = function(state_8886){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2796__auto____1.call(this,state_8886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2796__auto____0;
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2796__auto____1;
return app$t4$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___8946,data_8942,view_8943))
})();
var state__2887__auto__ = (function (){var statearr_8907 = f__2886__auto__.call(null);
(statearr_8907[(6)] = c__2885__auto___8946);

return statearr_8907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___8946,data_8942,view_8943))
);


var p5 = window;
p5.setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(300));
canvas.mousePressed(((function (canvas,p5){
return (function (){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,canvas,p5){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,canvas,p5){
return (function (state_8914){
var state_val_8915 = (state_8914[(1)]);
if((state_val_8915 === (1))){
var inst_8908 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8909 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_8910 = cljs.core.PersistentHashMap.fromArrays(inst_8908,inst_8909);
var state_8914__$1 = state_8914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8914__$1,(2),app.t4.main.evt,inst_8910);
} else {
if((state_val_8915 === (2))){
var inst_8912 = (state_8914[(2)]);
var state_8914__$1 = state_8914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8914__$1,inst_8912);
} else {
return null;
}
}
});})(c__2885__auto__,canvas,p5))
;
return ((function (switch__2795__auto__,c__2885__auto__,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__2796__auto__ = null;
var app$t4$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_8916 = [null,null,null,null,null,null,null];
(statearr_8916[(0)] = app$t4$main$main_$_state_machine__2796__auto__);

(statearr_8916[(1)] = (1));

return statearr_8916;
});
var app$t4$main$main_$_state_machine__2796__auto____1 = (function (state_8914){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8917){if((e8917 instanceof Object)){
var ex__2799__auto__ = e8917;
var statearr_8918_8959 = state_8914;
(statearr_8918_8959[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8960 = state_8914;
state_8914 = G__8960;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2796__auto__ = function(state_8914){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2796__auto____1.call(this,state_8914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2796__auto____0;
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2796__auto____1;
return app$t4$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,canvas,p5))
})();
var state__2887__auto__ = (function (){var statearr_8919 = f__2886__auto__.call(null);
(statearr_8919[(6)] = c__2885__auto__);

return statearr_8919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,canvas,p5))
);

return c__2885__auto__;
});})(canvas,p5))
);

canvas.mouseMoved(((function (canvas,p5){
return (function (){
var x = p5.mouseX;
var y = p5.mouseY;
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,x,y,canvas,p5){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,x,y,canvas,p5){
return (function (state_8929){
var state_val_8930 = (state_8929[(1)]);
if((state_val_8930 === (1))){
var inst_8920 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_8921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8922 = [x,y];
var inst_8923 = (new cljs.core.PersistentVector(null,2,(5),inst_8921,inst_8922,null));
var inst_8924 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8923];
var inst_8925 = cljs.core.PersistentHashMap.fromArrays(inst_8920,inst_8924);
var state_8929__$1 = state_8929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8929__$1,(2),app.t4.main.evt,inst_8925);
} else {
if((state_val_8930 === (2))){
var inst_8927 = (state_8929[(2)]);
var state_8929__$1 = state_8929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8929__$1,inst_8927);
} else {
return null;
}
}
});})(c__2885__auto__,x,y,canvas,p5))
;
return ((function (switch__2795__auto__,c__2885__auto__,x,y,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__2796__auto__ = null;
var app$t4$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_8931 = [null,null,null,null,null,null,null];
(statearr_8931[(0)] = app$t4$main$main_$_state_machine__2796__auto__);

(statearr_8931[(1)] = (1));

return statearr_8931;
});
var app$t4$main$main_$_state_machine__2796__auto____1 = (function (state_8929){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_8929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e8932){if((e8932 instanceof Object)){
var ex__2799__auto__ = e8932;
var statearr_8933_8961 = state_8929;
(statearr_8933_8961[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8962 = state_8929;
state_8929 = G__8962;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2796__auto__ = function(state_8929){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2796__auto____1.call(this,state_8929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2796__auto____0;
app$t4$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2796__auto____1;
return app$t4$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,x,y,canvas,p5))
})();
var state__2887__auto__ = (function (){var statearr_8934 = f__2886__auto__.call(null);
(statearr_8934[(6)] = c__2885__auto__);

return statearr_8934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,x,y,canvas,p5))
);

return c__2885__auto__;
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
var map__8935 = v;
var map__8935__$1 = ((((!((map__8935 == null)))?(((((map__8935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8935):map__8935);
var vec__8936 = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8936,(0),null);
var x = cljs.core.nth.call(null,vec__8936,(1),null);
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
