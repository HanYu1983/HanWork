// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__14135,ctx){
var vec__14136 = p__14135;
var y = cljs.core.nth.call(null,vec__14136,(0),null);
var x = cljs.core.nth.call(null,vec__14136,(1),null);
var pos = vec__14136;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__14136,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__14136,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__14136,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__14136,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__14139 = cljs.core._EQ_;
var expr__14140 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__14139.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__14140))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__14139.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__14140))){
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
return (function (p__14142){
var vec__14143 = p__14142;
var y = cljs.core.nth.call(null,vec__14143,(0),null);
var x = cljs.core.nth.call(null,vec__14143,(1),null);
var id = vec__14143;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__14146){
var map__14147 = p__14146;
var map__14147__$1 = ((((!((map__14147 == null)))?(((((map__14147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14147):map__14147);
var v = map__14147__$1;
var vec__14148 = cljs.core.get.call(null,map__14147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__14148,(0),null);
var x = cljs.core.nth.call(null,vec__14148,(1),null);
var id = vec__14148;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__14147,map__14147__$1,v,vec__14148,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__14147,map__14147__$1,v,vec__14148,y,x,id,pass,waitView,waitCnt))
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
return (function (state_14158){
var state_val_14159 = (state_14158[(1)]);
if((state_val_14159 === (1))){
var inst_14152 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_14153 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_14154 = cljs.core.PersistentHashMap.fromArrays(inst_14152,inst_14153);
var state_14158__$1 = state_14158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14158__$1,(2),app.t4.main.evt,inst_14154);
} else {
if((state_val_14159 === (2))){
var inst_14156 = (state_14158[(2)]);
var state_14158__$1 = state_14158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14158__$1,inst_14156);
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
var statearr_14160 = [null,null,null,null,null,null,null];
(statearr_14160[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_14160[(1)] = (1));

return statearr_14160;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_14158){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14161){if((e14161 instanceof Object)){
var ex__2796__auto__ = e14161;
var statearr_14162_14294 = state_14158;
(statearr_14162_14294[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14295 = state_14158;
state_14158 = G__14295;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_14158){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_14158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_14163 = f__2883__auto__.call(null);
(statearr_14163[(6)] = c__2882__auto__);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var data_14296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_14297 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_14296){
return (function app$t4$main$main_$_iter__14164(s__14165){
return (new cljs.core.LazySeq(null,((function (data_14296){
return (function (){
var s__14165__$1 = s__14165;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14165__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__14165__$1,y,xs__6012__auto__,temp__5457__auto__,data_14296){
return (function app$t4$main$main_$_iter__14164_$_iter__14166(s__14167){
return (new cljs.core.LazySeq(null,((function (s__14165__$1,y,xs__6012__auto__,temp__5457__auto__,data_14296){
return (function (){
var s__14167__$1 = s__14167;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14167__$1);
if(temp__5457__auto____$1){
var s__14167__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14167__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14167__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14169 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14168 = (0);
while(true){
if((i__14168 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__14168);
cljs.core.chunk_append.call(null,b__14169,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__14298 = (i__14168 + (1));
i__14168 = G__14298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14169),app$t4$main$main_$_iter__14164_$_iter__14166.call(null,cljs.core.chunk_rest.call(null,s__14167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14169),null);
}
} else {
var x = cljs.core.first.call(null,s__14167__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__14164_$_iter__14166.call(null,cljs.core.rest.call(null,s__14167__$2)));
}
} else {
return null;
}
break;
}
});})(s__14165__$1,y,xs__6012__auto__,temp__5457__auto__,data_14296))
,null,null));
});})(s__14165__$1,y,xs__6012__auto__,temp__5457__auto__,data_14296))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__14164.call(null,cljs.core.rest.call(null,s__14165__$1)));
} else {
var G__14299 = cljs.core.rest.call(null,s__14165__$1);
s__14165__$1 = G__14299;
continue;
}
} else {
return null;
}
break;
}
});})(data_14296))
,null,null));
});})(data_14296))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2882__auto___14300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___14300,data_14296,view_14297){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___14300,data_14296,view_14297){
return (function (state_14240){
var state_val_14241 = (state_14240[(1)]);
if((state_val_14241 === (7))){
var inst_14236 = (state_14240[(2)]);
var state_14240__$1 = state_14240;
var statearr_14242_14301 = state_14240__$1;
(statearr_14242_14301[(2)] = inst_14236);

(statearr_14242_14301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (1))){
var inst_14170 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_14171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14172 = [(0),(0)];
var inst_14173 = (new cljs.core.PersistentVector(null,2,(5),inst_14171,inst_14172,null));
var inst_14174 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_14175 = (new Date());
var inst_14176 = inst_14175.getTime();
var inst_14177 = [inst_14176,(0)];
var inst_14178 = cljs.core.PersistentHashMap.fromArrays(inst_14174,inst_14177);
var inst_14179 = [inst_14173,data_14296,view_14297,inst_14178];
var inst_14180 = cljs.core.PersistentHashMap.fromArrays(inst_14170,inst_14179);
var inst_14181 = inst_14180;
var state_14240__$1 = (function (){var statearr_14243 = state_14240;
(statearr_14243[(7)] = inst_14181);

return statearr_14243;
})();
var statearr_14244_14302 = state_14240__$1;
(statearr_14244_14302[(2)] = null);

(statearr_14244_14302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (4))){
var inst_14185 = (state_14240[(8)]);
var inst_14189 = (state_14240[(9)]);
var inst_14185__$1 = (state_14240[(2)]);
var inst_14189__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_14185__$1);
var inst_14190 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_14189__$1);
var state_14240__$1 = (function (){var statearr_14245 = state_14240;
(statearr_14245[(8)] = inst_14185__$1);

(statearr_14245[(9)] = inst_14189__$1);

return statearr_14245;
})();
if(inst_14190){
var statearr_14246_14303 = state_14240__$1;
(statearr_14246_14303[(1)] = (5));

} else {
var statearr_14247_14304 = state_14240__$1;
(statearr_14247_14304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (6))){
var inst_14189 = (state_14240[(9)]);
var inst_14201 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_14189);
var state_14240__$1 = state_14240;
if(inst_14201){
var statearr_14248_14305 = state_14240__$1;
(statearr_14248_14305[(1)] = (8));

} else {
var statearr_14249_14306 = state_14240__$1;
(statearr_14249_14306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (3))){
var inst_14238 = (state_14240[(2)]);
var state_14240__$1 = state_14240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14240__$1,inst_14238);
} else {
if((state_val_14241 === (2))){
var inst_14181 = (state_14240[(7)]);
var inst_14183 = app.t4.main.model = inst_14181;
var state_14240__$1 = (function (){var statearr_14250 = state_14240;
(statearr_14250[(10)] = inst_14183);

return statearr_14250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14240__$1,(4),app.t4.main.evt);
} else {
if((state_val_14241 === (9))){
var inst_14181 = (state_14240[(7)]);
var inst_14231 = app.t4.main.update.call(null,inst_14181);
var inst_14181__$1 = inst_14231;
var state_14240__$1 = (function (){var statearr_14251 = state_14240;
(statearr_14251[(7)] = inst_14181__$1);

return statearr_14251;
})();
var statearr_14252_14307 = state_14240__$1;
(statearr_14252_14307[(2)] = null);

(statearr_14252_14307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (5))){
var inst_14181 = (state_14240[(7)]);
var inst_14195 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_14181);
var inst_14196 = cljs.core.nth.call(null,inst_14195,(0),null);
var inst_14197 = cljs.core.nth.call(null,inst_14195,(1),null);
var inst_14198 = app.t4.main.flip.call(null,inst_14195,inst_14181);
var inst_14181__$1 = inst_14198;
var state_14240__$1 = (function (){var statearr_14253 = state_14240;
(statearr_14253[(11)] = inst_14196);

(statearr_14253[(12)] = inst_14197);

(statearr_14253[(7)] = inst_14181__$1);

return statearr_14253;
})();
var statearr_14254_14308 = state_14240__$1;
(statearr_14254_14308[(2)] = null);

(statearr_14254_14308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (10))){
var inst_14234 = (state_14240[(2)]);
var state_14240__$1 = state_14240;
var statearr_14255_14309 = state_14240__$1;
(statearr_14255_14309[(2)] = inst_14234);

(statearr_14255_14309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14241 === (8))){
var inst_14185 = (state_14240[(8)]);
var inst_14181 = (state_14240[(7)]);
var inst_14209 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_14185);
var inst_14210 = cljs.core.nth.call(null,inst_14209,(0),null);
var inst_14211 = cljs.core.nth.call(null,inst_14209,(1),null);
var inst_14212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14213 = [inst_14211,inst_14210];
var inst_14214 = (new cljs.core.PersistentVector(null,2,(5),inst_14212,inst_14213,null));
var inst_14215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14216 = [(100),(100)];
var inst_14217 = (new cljs.core.PersistentVector(null,2,(5),inst_14215,inst_14216,null));
var inst_14218 = cljs.core.map.call(null,cljs.core._SLASH_,inst_14214,inst_14217);
var inst_14219 = cljs.core.map.call(null,cljs.core.int$,inst_14218);
var inst_14220 = cljs.core.nth.call(null,inst_14219,(0),null);
var inst_14221 = cljs.core.nth.call(null,inst_14219,(1),null);
var inst_14222 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_14223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14224 = [inst_14220,inst_14221];
var inst_14225 = (new cljs.core.PersistentVector(null,2,(5),inst_14223,inst_14224,null));
var inst_14226 = [inst_14225];
var inst_14227 = cljs.core.PersistentHashMap.fromArrays(inst_14222,inst_14226);
var inst_14228 = cljs.core.merge.call(null,inst_14181,inst_14227);
var inst_14181__$1 = inst_14228;
var state_14240__$1 = (function (){var statearr_14256 = state_14240;
(statearr_14256[(7)] = inst_14181__$1);

return statearr_14256;
})();
var statearr_14257_14310 = state_14240__$1;
(statearr_14257_14310[(2)] = null);

(statearr_14257_14310[(1)] = (2));


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
});})(c__2882__auto___14300,data_14296,view_14297))
;
return ((function (switch__2792__auto__,c__2882__auto___14300,data_14296,view_14297){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_14258 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14258[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_14258[(1)] = (1));

return statearr_14258;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_14240){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14259){if((e14259 instanceof Object)){
var ex__2796__auto__ = e14259;
var statearr_14260_14311 = state_14240;
(statearr_14260_14311[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14312 = state_14240;
state_14240 = G__14312;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_14240){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_14240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___14300,data_14296,view_14297))
})();
var state__2884__auto__ = (function (){var statearr_14261 = f__2883__auto__.call(null);
(statearr_14261[(6)] = c__2882__auto___14300);

return statearr_14261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___14300,data_14296,view_14297))
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
return (function (state_14268){
var state_val_14269 = (state_14268[(1)]);
if((state_val_14269 === (1))){
var inst_14262 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_14263 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_14264 = cljs.core.PersistentHashMap.fromArrays(inst_14262,inst_14263);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14268__$1,(2),app.t4.main.evt,inst_14264);
} else {
if((state_val_14269 === (2))){
var inst_14266 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14268__$1,inst_14266);
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
var statearr_14270 = [null,null,null,null,null,null,null];
(statearr_14270[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_14270[(1)] = (1));

return statearr_14270;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_14268){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object)){
var ex__2796__auto__ = e14271;
var statearr_14272_14313 = state_14268;
(statearr_14272_14313[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14314 = state_14268;
state_14268 = G__14314;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_14268){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_14268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_14273 = f__2883__auto__.call(null);
(statearr_14273[(6)] = c__2882__auto__);

return statearr_14273;
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
return (function (state_14283){
var state_val_14284 = (state_14283[(1)]);
if((state_val_14284 === (1))){
var inst_14274 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_14275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14276 = [x,y];
var inst_14277 = (new cljs.core.PersistentVector(null,2,(5),inst_14275,inst_14276,null));
var inst_14278 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_14277];
var inst_14279 = cljs.core.PersistentHashMap.fromArrays(inst_14274,inst_14278);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(2),app.t4.main.evt,inst_14279);
} else {
if((state_val_14284 === (2))){
var inst_14281 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14283__$1,inst_14281);
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
var statearr_14285 = [null,null,null,null,null,null,null];
(statearr_14285[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_14285[(1)] = (1));

return statearr_14285;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_14283){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_14283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e14286){if((e14286 instanceof Object)){
var ex__2796__auto__ = e14286;
var statearr_14287_14315 = state_14283;
(statearr_14287_14315[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14316 = state_14283;
state_14283 = G__14316;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,x,y,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_14288 = f__2883__auto__.call(null);
(statearr_14288[(6)] = c__2882__auto__);

return statearr_14288;
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
var map__14289 = v;
var map__14289__$1 = ((((!((map__14289 == null)))?(((((map__14289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289):map__14289);
var vec__14290 = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__14290,(0),null);
var x = cljs.core.nth.call(null,vec__14290,(1),null);
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
