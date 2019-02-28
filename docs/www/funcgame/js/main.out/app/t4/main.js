// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__8258,ctx){
var vec__8259 = p__8258;
var y = cljs.core.nth.call(null,vec__8259,(0),null);
var x = cljs.core.nth.call(null,vec__8259,(1),null);
var pos = vec__8259;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__8259,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__8259,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__8259,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__8259,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__8262 = cljs.core._EQ_;
var expr__8263 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__8262.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__8263))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__8262.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__8263))){
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
return (function (p__8265){
var vec__8266 = p__8265;
var y = cljs.core.nth.call(null,vec__8266,(0),null);
var x = cljs.core.nth.call(null,vec__8266,(1),null);
var id = vec__8266;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__8269){
var map__8270 = p__8269;
var map__8270__$1 = ((((!((map__8270 == null)))?(((((map__8270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8270):map__8270);
var v = map__8270__$1;
var vec__8271 = cljs.core.get.call(null,map__8270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8271,(0),null);
var x = cljs.core.nth.call(null,vec__8271,(1),null);
var id = vec__8271;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__8270,map__8270__$1,v,vec__8271,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__8270,map__8270__$1,v,vec__8271,y,x,id,pass,waitView,waitCnt))
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
return (function (state_8281){
var state_val_8282 = (state_8281[(1)]);
if((state_val_8282 === (1))){
var inst_8275 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8276 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_8277 = cljs.core.PersistentHashMap.fromArrays(inst_8275,inst_8276);
var state_8281__$1 = state_8281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8281__$1,(2),app.t4.main.evt,inst_8277);
} else {
if((state_val_8282 === (2))){
var inst_8279 = (state_8281[(2)]);
var state_8281__$1 = state_8281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8281__$1,inst_8279);
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
var statearr_8283 = [null,null,null,null,null,null,null];
(statearr_8283[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8283[(1)] = (1));

return statearr_8283;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8281){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8284){if((e8284 instanceof Object)){
var ex__2796__auto__ = e8284;
var statearr_8285_8417 = state_8281;
(statearr_8285_8417[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8418 = state_8281;
state_8281 = G__8418;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8281){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_8286 = f__2883__auto__.call(null);
(statearr_8286[(6)] = c__2882__auto__);

return statearr_8286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var data_8419 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_8420 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_8419){
return (function app$t4$main$main_$_iter__8287(s__8288){
return (new cljs.core.LazySeq(null,((function (data_8419){
return (function (){
var s__8288__$1 = s__8288;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8288__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__8288__$1,y,xs__6012__auto__,temp__5457__auto__,data_8419){
return (function app$t4$main$main_$_iter__8287_$_iter__8289(s__8290){
return (new cljs.core.LazySeq(null,((function (s__8288__$1,y,xs__6012__auto__,temp__5457__auto__,data_8419){
return (function (){
var s__8290__$1 = s__8290;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8290__$1);
if(temp__5457__auto____$1){
var s__8290__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8290__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__8290__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__8292 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__8291 = (0);
while(true){
if((i__8291 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__8291);
cljs.core.chunk_append.call(null,b__8292,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__8421 = (i__8291 + (1));
i__8291 = G__8421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8292),app$t4$main$main_$_iter__8287_$_iter__8289.call(null,cljs.core.chunk_rest.call(null,s__8290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8292),null);
}
} else {
var x = cljs.core.first.call(null,s__8290__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__8287_$_iter__8289.call(null,cljs.core.rest.call(null,s__8290__$2)));
}
} else {
return null;
}
break;
}
});})(s__8288__$1,y,xs__6012__auto__,temp__5457__auto__,data_8419))
,null,null));
});})(s__8288__$1,y,xs__6012__auto__,temp__5457__auto__,data_8419))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__8287.call(null,cljs.core.rest.call(null,s__8288__$1)));
} else {
var G__8422 = cljs.core.rest.call(null,s__8288__$1);
s__8288__$1 = G__8422;
continue;
}
} else {
return null;
}
break;
}
});})(data_8419))
,null,null));
});})(data_8419))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2882__auto___8423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8423,data_8419,view_8420){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8423,data_8419,view_8420){
return (function (state_8363){
var state_val_8364 = (state_8363[(1)]);
if((state_val_8364 === (7))){
var inst_8359 = (state_8363[(2)]);
var state_8363__$1 = state_8363;
var statearr_8365_8424 = state_8363__$1;
(statearr_8365_8424[(2)] = inst_8359);

(statearr_8365_8424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (1))){
var inst_8293 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_8294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8295 = [(0),(0)];
var inst_8296 = (new cljs.core.PersistentVector(null,2,(5),inst_8294,inst_8295,null));
var inst_8297 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_8298 = (new Date());
var inst_8299 = inst_8298.getTime();
var inst_8300 = [inst_8299,(0)];
var inst_8301 = cljs.core.PersistentHashMap.fromArrays(inst_8297,inst_8300);
var inst_8302 = [inst_8296,data_8419,view_8420,inst_8301];
var inst_8303 = cljs.core.PersistentHashMap.fromArrays(inst_8293,inst_8302);
var inst_8304 = inst_8303;
var state_8363__$1 = (function (){var statearr_8366 = state_8363;
(statearr_8366[(7)] = inst_8304);

return statearr_8366;
})();
var statearr_8367_8425 = state_8363__$1;
(statearr_8367_8425[(2)] = null);

(statearr_8367_8425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (4))){
var inst_8312 = (state_8363[(8)]);
var inst_8308 = (state_8363[(9)]);
var inst_8308__$1 = (state_8363[(2)]);
var inst_8312__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_8308__$1);
var inst_8313 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_8312__$1);
var state_8363__$1 = (function (){var statearr_8368 = state_8363;
(statearr_8368[(8)] = inst_8312__$1);

(statearr_8368[(9)] = inst_8308__$1);

return statearr_8368;
})();
if(inst_8313){
var statearr_8369_8426 = state_8363__$1;
(statearr_8369_8426[(1)] = (5));

} else {
var statearr_8370_8427 = state_8363__$1;
(statearr_8370_8427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (6))){
var inst_8312 = (state_8363[(8)]);
var inst_8324 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8312);
var state_8363__$1 = state_8363;
if(inst_8324){
var statearr_8371_8428 = state_8363__$1;
(statearr_8371_8428[(1)] = (8));

} else {
var statearr_8372_8429 = state_8363__$1;
(statearr_8372_8429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (3))){
var inst_8361 = (state_8363[(2)]);
var state_8363__$1 = state_8363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8363__$1,inst_8361);
} else {
if((state_val_8364 === (2))){
var inst_8304 = (state_8363[(7)]);
var inst_8306 = app.t4.main.model = inst_8304;
var state_8363__$1 = (function (){var statearr_8373 = state_8363;
(statearr_8373[(10)] = inst_8306);

return statearr_8373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8363__$1,(4),app.t4.main.evt);
} else {
if((state_val_8364 === (9))){
var inst_8304 = (state_8363[(7)]);
var inst_8354 = app.t4.main.update.call(null,inst_8304);
var inst_8304__$1 = inst_8354;
var state_8363__$1 = (function (){var statearr_8374 = state_8363;
(statearr_8374[(7)] = inst_8304__$1);

return statearr_8374;
})();
var statearr_8375_8430 = state_8363__$1;
(statearr_8375_8430[(2)] = null);

(statearr_8375_8430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (5))){
var inst_8304 = (state_8363[(7)]);
var inst_8318 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_8304);
var inst_8319 = cljs.core.nth.call(null,inst_8318,(0),null);
var inst_8320 = cljs.core.nth.call(null,inst_8318,(1),null);
var inst_8321 = app.t4.main.flip.call(null,inst_8318,inst_8304);
var inst_8304__$1 = inst_8321;
var state_8363__$1 = (function (){var statearr_8376 = state_8363;
(statearr_8376[(7)] = inst_8304__$1);

(statearr_8376[(11)] = inst_8319);

(statearr_8376[(12)] = inst_8320);

return statearr_8376;
})();
var statearr_8377_8431 = state_8363__$1;
(statearr_8377_8431[(2)] = null);

(statearr_8377_8431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (10))){
var inst_8357 = (state_8363[(2)]);
var state_8363__$1 = state_8363;
var statearr_8378_8432 = state_8363__$1;
(statearr_8378_8432[(2)] = inst_8357);

(statearr_8378_8432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8364 === (8))){
var inst_8304 = (state_8363[(7)]);
var inst_8308 = (state_8363[(9)]);
var inst_8332 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_8308);
var inst_8333 = cljs.core.nth.call(null,inst_8332,(0),null);
var inst_8334 = cljs.core.nth.call(null,inst_8332,(1),null);
var inst_8335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8336 = [inst_8334,inst_8333];
var inst_8337 = (new cljs.core.PersistentVector(null,2,(5),inst_8335,inst_8336,null));
var inst_8338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8339 = [(100),(100)];
var inst_8340 = (new cljs.core.PersistentVector(null,2,(5),inst_8338,inst_8339,null));
var inst_8341 = cljs.core.map.call(null,cljs.core._SLASH_,inst_8337,inst_8340);
var inst_8342 = cljs.core.map.call(null,cljs.core.int$,inst_8341);
var inst_8343 = cljs.core.nth.call(null,inst_8342,(0),null);
var inst_8344 = cljs.core.nth.call(null,inst_8342,(1),null);
var inst_8345 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_8346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8347 = [inst_8343,inst_8344];
var inst_8348 = (new cljs.core.PersistentVector(null,2,(5),inst_8346,inst_8347,null));
var inst_8349 = [inst_8348];
var inst_8350 = cljs.core.PersistentHashMap.fromArrays(inst_8345,inst_8349);
var inst_8351 = cljs.core.merge.call(null,inst_8304,inst_8350);
var inst_8304__$1 = inst_8351;
var state_8363__$1 = (function (){var statearr_8379 = state_8363;
(statearr_8379[(7)] = inst_8304__$1);

return statearr_8379;
})();
var statearr_8380_8433 = state_8363__$1;
(statearr_8380_8433[(2)] = null);

(statearr_8380_8433[(1)] = (2));


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
});})(c__2882__auto___8423,data_8419,view_8420))
;
return ((function (switch__2792__auto__,c__2882__auto___8423,data_8419,view_8420){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8381[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8381[(1)] = (1));

return statearr_8381;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8363){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8382){if((e8382 instanceof Object)){
var ex__2796__auto__ = e8382;
var statearr_8383_8434 = state_8363;
(statearr_8383_8434[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8435 = state_8363;
state_8363 = G__8435;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8363){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8423,data_8419,view_8420))
})();
var state__2884__auto__ = (function (){var statearr_8384 = f__2883__auto__.call(null);
(statearr_8384[(6)] = c__2882__auto___8423);

return statearr_8384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8423,data_8419,view_8420))
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
return (function (state_8391){
var state_val_8392 = (state_8391[(1)]);
if((state_val_8392 === (1))){
var inst_8385 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_8386 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_8387 = cljs.core.PersistentHashMap.fromArrays(inst_8385,inst_8386);
var state_8391__$1 = state_8391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8391__$1,(2),app.t4.main.evt,inst_8387);
} else {
if((state_val_8392 === (2))){
var inst_8389 = (state_8391[(2)]);
var state_8391__$1 = state_8391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8391__$1,inst_8389);
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
var statearr_8393 = [null,null,null,null,null,null,null];
(statearr_8393[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8393[(1)] = (1));

return statearr_8393;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8391){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8394){if((e8394 instanceof Object)){
var ex__2796__auto__ = e8394;
var statearr_8395_8436 = state_8391;
(statearr_8395_8436[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8437 = state_8391;
state_8391 = G__8437;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8391){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_8396 = f__2883__auto__.call(null);
(statearr_8396[(6)] = c__2882__auto__);

return statearr_8396;
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
return (function (state_8406){
var state_val_8407 = (state_8406[(1)]);
if((state_val_8407 === (1))){
var inst_8397 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_8398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8399 = [x,y];
var inst_8400 = (new cljs.core.PersistentVector(null,2,(5),inst_8398,inst_8399,null));
var inst_8401 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_8400];
var inst_8402 = cljs.core.PersistentHashMap.fromArrays(inst_8397,inst_8401);
var state_8406__$1 = state_8406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8406__$1,(2),app.t4.main.evt,inst_8402);
} else {
if((state_val_8407 === (2))){
var inst_8404 = (state_8406[(2)]);
var state_8406__$1 = state_8406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8406__$1,inst_8404);
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
var statearr_8408 = [null,null,null,null,null,null,null];
(statearr_8408[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_8408[(1)] = (1));

return statearr_8408;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_8406){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8409){if((e8409 instanceof Object)){
var ex__2796__auto__ = e8409;
var statearr_8410_8438 = state_8406;
(statearr_8410_8438[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8439 = state_8406;
state_8406 = G__8439;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_8406){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_8406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,x,y,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_8411 = f__2883__auto__.call(null);
(statearr_8411[(6)] = c__2882__auto__);

return statearr_8411;
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
var map__8412 = v;
var map__8412__$1 = ((((!((map__8412 == null)))?(((((map__8412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8412):map__8412);
var vec__8413 = cljs.core.get.call(null,map__8412__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__8413,(0),null);
var x = cljs.core.nth.call(null,vec__8413,(1),null);
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
