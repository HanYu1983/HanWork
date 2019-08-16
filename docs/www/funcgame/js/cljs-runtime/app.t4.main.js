goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__36369,ctx){
var vec__36370 = p__36369;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36370,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36370,(1),null);
var pos = vec__36370;
var openCnt = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36370,y,x,pos){
return (function (v){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__36370,y,x,pos))
,cljs.core.flatten(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__36370,y,x,pos){
return (function (v){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
});})(openCnt,isPass,vec__36370,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if((!(cljs.core.map_QMARK_(v)))){
return v;
} else {
var pred__36375 = cljs.core._EQ_;
var expr__36376 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_((function (){var G__36378 = new cljs.core.Keyword(null,"open","open",-1763596448);
var G__36379 = expr__36376;
return (pred__36375.cljs$core$IFn$_invoke$arity$2 ? pred__36375.cljs$core$IFn$_invoke$arity$2(G__36378,G__36379) : pred__36375.call(null,G__36378,G__36379));
})())){
if((!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000))))){
return v;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
}
} else {
if(cljs.core.truth_((function (){var G__36386 = new cljs.core.Keyword(null,"close","close",1835149582);
var G__36387 = expr__36376;
return (pred__36375.cljs$core$IFn$_invoke$arity$2 ? pred__36375.cljs$core$IFn$_invoke$arity$2(G__36386,G__36387) : pred__36375.call(null,G__36386,G__36387));
})())){
return v;
} else {
return v;
}
}
}
});
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),clojure.walk.prewalk(changeState,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))], null)], 0));
});
app.t4.main.checkWait = (function app$t4$main$checkWait(ctx){
var waitView = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
}),cljs.core.flatten(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx)));
var waitCnt = cljs.core.count(waitView);
if((waitCnt < (2))){
return ctx;
} else {
var pass = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (waitView,waitCnt){
return (function (p__36392){
var vec__36393 = p__36392;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36393,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36393,(1),null);
var id = vec__36393;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__36396){
var map__36397 = p__36396;
var map__36397__$1 = (((((!((map__36397 == null))))?(((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36397):map__36397);
var v = map__36397__$1;
var vec__36398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36398,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36398,(1),null);
var id = vec__36398;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__36397,map__36397__$1,v,vec__36398,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
});})(map__36397,map__36397__$1,v,vec__36398,y,x,id,pass,waitView,waitCnt))
);
});})(pass,waitView,waitCnt))
,ctx,waitView);
}
});
app.t4.main.updateViewTimer = (function app$t4$main$updateViewTimer(ctx){
var changeState = (function (v){
if((!(cljs.core.map_QMARK_(v)))){
return v;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null))));
}
});
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),clojure.walk.prewalk(changeState,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))], null)], 0));
});
app.t4.main.updateTimer = (function app$t4$main$updateTimer(ctx){
var now = (new Date()).getTime();
var last = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"last","last",1105735132)], null));
var elapsed = (now - last);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last","last",1105735132),now,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),elapsed], null)], null)], 0));
});
app.t4.main.step = (function app$t4$main$step(ctx){
return app.t4.main.updateViewTimer(app.t4.main.checkWait(app.t4.main.updateView(app.t4.main.updateTimer(ctx))));
});
app.t4.main.main = (function app$t4$main$main(){
app.t4.main.model = null;

app.t4.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

setInterval((function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_36480){
var state_val_36482 = (state_36480[(1)]);
if((state_val_36482 === (1))){
var inst_36474 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36475 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_36476 = cljs.core.PersistentHashMap.fromArrays(inst_36474,inst_36475);
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36480__$1,(2),app.t4.main.evt,inst_36476);
} else {
if((state_val_36482 === (2))){
var inst_36478 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36480__$1,inst_36478);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t4$main$main_$_state_machine__30005__auto__ = null;
var app$t4$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null];
(statearr_36530[(0)] = app$t4$main$main_$_state_machine__30005__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var app$t4$main$main_$_state_machine__30005__auto____1 = (function (state_36480){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36480);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36532){if((e36532 instanceof Object)){
var ex__30008__auto__ = e36532;
var statearr_36534_37273 = state_36480;
(statearr_36534_37273[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37274 = state_36480;
state_36480 = G__37274;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30005__auto__ = function(state_36480){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30005__auto____1.call(this,state_36480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30005__auto____0;
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30005__auto____1;
return app$t4$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_36543 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36543[(6)] = c__30213__auto__);

return statearr_36543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
}),(33));

var data_37280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_37281 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((6),(function (){var iter__4523__auto__ = ((function (data_37280){
return (function app$t4$main$main_$_iter__36545(s__36546){
return (new cljs.core.LazySeq(null,((function (data_37280){
return (function (){
var s__36546__$1 = s__36546;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36546__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36546__$1,y,xs__6292__auto__,temp__5735__auto__,data_37280){
return (function app$t4$main$main_$_iter__36545_$_iter__36547(s__36548){
return (new cljs.core.LazySeq(null,((function (s__36546__$1,y,xs__6292__auto__,temp__5735__auto__,data_37280){
return (function (){
var s__36548__$1 = s__36548;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36548__$1);
if(temp__5735__auto____$1){
var s__36548__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36548__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36548__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36550 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36549 = (0);
while(true){
if((i__36549 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36549);
cljs.core.chunk_append(b__36550,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__37288 = (i__36549 + (1));
i__36549 = G__37288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36550),app$t4$main$main_$_iter__36545_$_iter__36547(cljs.core.chunk_rest(s__36548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36550),null);
}
} else {
var x = cljs.core.first(s__36548__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__36545_$_iter__36547(cljs.core.rest(s__36548__$2)));
}
} else {
return null;
}
break;
}
});})(s__36546__$1,y,xs__6292__auto__,temp__5735__auto__,data_37280))
,null,null));
});})(s__36546__$1,y,xs__6292__auto__,temp__5735__auto__,data_37280))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t4$main$main_$_iter__36545(cljs.core.rest(s__36546__$1)));
} else {
var G__37320 = cljs.core.rest(s__36546__$1);
s__36546__$1 = G__37320;
continue;
}
} else {
return null;
}
break;
}
});})(data_37280))
,null,null));
});})(data_37280))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})())));
var c__30213__auto___37321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___37321,data_37280,view_37281){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___37321,data_37280,view_37281){
return (function (state_36669){
var state_val_36670 = (state_36669[(1)]);
if((state_val_36670 === (7))){
var inst_36664 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36679_37322 = state_36669__$1;
(statearr_36679_37322[(2)] = inst_36664);

(statearr_36679_37322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (1))){
var inst_36582 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_36591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36592 = [(0),(0)];
var inst_36593 = (new cljs.core.PersistentVector(null,2,(5),inst_36591,inst_36592,null));
var inst_36594 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_36595 = (new Date());
var inst_36596 = inst_36595.getTime();
var inst_36597 = [inst_36596,(0)];
var inst_36598 = cljs.core.PersistentHashMap.fromArrays(inst_36594,inst_36597);
var inst_36599 = [inst_36593,data_37280,view_37281,inst_36598];
var inst_36600 = cljs.core.PersistentHashMap.fromArrays(inst_36582,inst_36599);
var inst_36601 = inst_36600;
var state_36669__$1 = (function (){var statearr_36691 = state_36669;
(statearr_36691[(7)] = inst_36601);

return statearr_36691;
})();
var statearr_36692_37323 = state_36669__$1;
(statearr_36692_37323[(2)] = null);

(statearr_36692_37323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (4))){
var inst_36605 = (state_36669[(8)]);
var inst_36609 = (state_36669[(9)]);
var inst_36605__$1 = (state_36669[(2)]);
var inst_36609__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_36605__$1);
var inst_36610 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_36609__$1);
var state_36669__$1 = (function (){var statearr_36736 = state_36669;
(statearr_36736[(8)] = inst_36605__$1);

(statearr_36736[(9)] = inst_36609__$1);

return statearr_36736;
})();
if(inst_36610){
var statearr_36738_37324 = state_36669__$1;
(statearr_36738_37324[(1)] = (5));

} else {
var statearr_36739_37325 = state_36669__$1;
(statearr_36739_37325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (6))){
var inst_36609 = (state_36669[(9)]);
var inst_36623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_36609);
var state_36669__$1 = state_36669;
if(inst_36623){
var statearr_36743_37326 = state_36669__$1;
(statearr_36743_37326[(1)] = (8));

} else {
var statearr_36744_37327 = state_36669__$1;
(statearr_36744_37327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (3))){
var inst_36666 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36669__$1,inst_36666);
} else {
if((state_val_36670 === (2))){
var inst_36601 = (state_36669[(7)]);
var inst_36603 = app.t4.main.model = inst_36601;
var state_36669__$1 = (function (){var statearr_36748 = state_36669;
(statearr_36748[(10)] = inst_36603);

return statearr_36748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36669__$1,(4),app.t4.main.evt);
} else {
if((state_val_36670 === (9))){
var inst_36601 = (state_36669[(7)]);
var inst_36659 = app.t4.main.step(inst_36601);
var inst_36601__$1 = inst_36659;
var state_36669__$1 = (function (){var statearr_36749 = state_36669;
(statearr_36749[(7)] = inst_36601__$1);

return statearr_36749;
})();
var statearr_36750_37332 = state_36669__$1;
(statearr_36750_37332[(2)] = null);

(statearr_36750_37332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (5))){
var inst_36601 = (state_36669[(7)]);
var inst_36616 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_36601);
var inst_36617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36616,(0),null);
var inst_36618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36616,(1),null);
var inst_36620 = app.t4.main.flip(inst_36616,inst_36601);
var inst_36601__$1 = inst_36620;
var state_36669__$1 = (function (){var statearr_36757 = state_36669;
(statearr_36757[(11)] = inst_36617);

(statearr_36757[(7)] = inst_36601__$1);

(statearr_36757[(12)] = inst_36618);

return statearr_36757;
})();
var statearr_36758_37344 = state_36669__$1;
(statearr_36758_37344[(2)] = null);

(statearr_36758_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (10))){
var inst_36662 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36760_37345 = state_36669__$1;
(statearr_36760_37345[(2)] = inst_36662);

(statearr_36760_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (8))){
var inst_36605 = (state_36669[(8)]);
var inst_36601 = (state_36669[(7)]);
var inst_36632 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_36605);
var inst_36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36632,(0),null);
var inst_36634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36632,(1),null);
var inst_36636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36637 = [inst_36634,inst_36633];
var inst_36638 = (new cljs.core.PersistentVector(null,2,(5),inst_36636,inst_36637,null));
var inst_36640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36641 = [(100),(100)];
var inst_36642 = (new cljs.core.PersistentVector(null,2,(5),inst_36640,inst_36641,null));
var inst_36643 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,inst_36638,inst_36642);
var inst_36644 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,inst_36643);
var inst_36645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36644,(0),null);
var inst_36646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36644,(1),null);
var inst_36647 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_36648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36650 = [inst_36645,inst_36646];
var inst_36651 = (new cljs.core.PersistentVector(null,2,(5),inst_36648,inst_36650,null));
var inst_36652 = [inst_36651];
var inst_36653 = cljs.core.PersistentHashMap.fromArrays(inst_36647,inst_36652);
var inst_36654 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_36601,inst_36653], 0));
var inst_36601__$1 = inst_36654;
var state_36669__$1 = (function (){var statearr_36772 = state_36669;
(statearr_36772[(7)] = inst_36601__$1);

return statearr_36772;
})();
var statearr_36775_37425 = state_36669__$1;
(statearr_36775_37425[(2)] = null);

(statearr_36775_37425[(1)] = (2));


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
});})(c__30213__auto___37321,data_37280,view_37281))
;
return ((function (switch__30004__auto__,c__30213__auto___37321,data_37280,view_37281){
return (function() {
var app$t4$main$main_$_state_machine__30005__auto__ = null;
var app$t4$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36781 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36781[(0)] = app$t4$main$main_$_state_machine__30005__auto__);

(statearr_36781[(1)] = (1));

return statearr_36781;
});
var app$t4$main$main_$_state_machine__30005__auto____1 = (function (state_36669){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36669);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36782){if((e36782 instanceof Object)){
var ex__30008__auto__ = e36782;
var statearr_36785_37433 = state_36669;
(statearr_36785_37433[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37434 = state_36669;
state_36669 = G__37434;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30005__auto__ = function(state_36669){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30005__auto____1.call(this,state_36669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30005__auto____0;
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30005__auto____1;
return app$t4$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___37321,data_37280,view_37281))
})();
var state__30215__auto__ = (function (){var statearr_36788 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36788[(6)] = c__30213__auto___37321);

return statearr_36788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___37321,data_37280,view_37281))
);


var p5 = window;
p5.setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(300));
canvas.mousePressed(((function (canvas,p5){
return (function (){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,canvas,p5){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,canvas,p5){
return (function (state_36802){
var state_val_36803 = (state_36802[(1)]);
if((state_val_36803 === (1))){
var inst_36796 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36797 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_36798 = cljs.core.PersistentHashMap.fromArrays(inst_36796,inst_36797);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36802__$1,(2),app.t4.main.evt,inst_36798);
} else {
if((state_val_36803 === (2))){
var inst_36800 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36802__$1,inst_36800);
} else {
return null;
}
}
});})(c__30213__auto__,canvas,p5))
;
return ((function (switch__30004__auto__,c__30213__auto__,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__30005__auto__ = null;
var app$t4$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36809 = [null,null,null,null,null,null,null];
(statearr_36809[(0)] = app$t4$main$main_$_state_machine__30005__auto__);

(statearr_36809[(1)] = (1));

return statearr_36809;
});
var app$t4$main$main_$_state_machine__30005__auto____1 = (function (state_36802){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36802);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36810){if((e36810 instanceof Object)){
var ex__30008__auto__ = e36810;
var statearr_36811_37463 = state_36802;
(statearr_36811_37463[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37467 = state_36802;
state_36802 = G__37467;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30005__auto__ = function(state_36802){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30005__auto____1.call(this,state_36802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30005__auto____0;
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30005__auto____1;
return app$t4$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,canvas,p5))
})();
var state__30215__auto__ = (function (){var statearr_36820 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36820[(6)] = c__30213__auto__);

return statearr_36820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,canvas,p5))
);

return c__30213__auto__;
});})(canvas,p5))
);

canvas.mouseMoved(((function (canvas,p5){
return (function (){
var x = p5.mouseX;
var y = p5.mouseY;
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,x,y,canvas,p5){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,x,y,canvas,p5){
return (function (state_36853){
var state_val_36854 = (state_36853[(1)]);
if((state_val_36854 === (1))){
var inst_36844 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_36845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36846 = [x,y];
var inst_36847 = (new cljs.core.PersistentVector(null,2,(5),inst_36845,inst_36846,null));
var inst_36848 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_36847];
var inst_36849 = cljs.core.PersistentHashMap.fromArrays(inst_36844,inst_36848);
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36853__$1,(2),app.t4.main.evt,inst_36849);
} else {
if((state_val_36854 === (2))){
var inst_36851 = (state_36853[(2)]);
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36853__$1,inst_36851);
} else {
return null;
}
}
});})(c__30213__auto__,x,y,canvas,p5))
;
return ((function (switch__30004__auto__,c__30213__auto__,x,y,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__30005__auto__ = null;
var app$t4$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36863 = [null,null,null,null,null,null,null];
(statearr_36863[(0)] = app$t4$main$main_$_state_machine__30005__auto__);

(statearr_36863[(1)] = (1));

return statearr_36863;
});
var app$t4$main$main_$_state_machine__30005__auto____1 = (function (state_36853){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36853);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36864){if((e36864 instanceof Object)){
var ex__30008__auto__ = e36864;
var statearr_36871_37477 = state_36853;
(statearr_36871_37477[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37479 = state_36853;
state_36853 = G__37479;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30005__auto__ = function(state_36853){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30005__auto____1.call(this,state_36853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30005__auto____0;
app$t4$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30005__auto____1;
return app$t4$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,x,y,canvas,p5))
})();
var state__30215__auto__ = (function (){var statearr_36875 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36875[(6)] = c__30213__auto__);

return statearr_36875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,x,y,canvas,p5))
);

return c__30213__auto__;
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk(((function (p5){
return (function (v){
if((!(cljs.core.map_QMARK_(v)))){
return v;
} else {
var map__36883 = v;
var map__36883__$1 = (((((!((map__36883 == null))))?(((((map__36883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36883):map__36883);
var vec__36886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36883__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(1),null);
var txt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t4.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),y,x], null));
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null)))){
p5.fill((255));

p5.rect(((100) * x),((100) * y),(100),(100));

p5.fill((255),(0),(0));

return p5.text(txt,((50) + ((100) * x)),((50) + ((100) * y)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v))){
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
app.t4.main.main();

//# sourceMappingURL=app.t4.main.js.map
