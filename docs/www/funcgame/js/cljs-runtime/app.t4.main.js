goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__36567,ctx){
var vec__36568 = p__36567;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36568,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36568,(1),null);
var pos = vec__36568;
var openCnt = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36568,y,x,pos){
return (function (v){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__36568,y,x,pos))
,cljs.core.flatten(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__36568,y,x,pos){
return (function (v){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
});})(openCnt,isPass,vec__36568,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if((!(cljs.core.map_QMARK_(v)))){
return v;
} else {
var pred__36577 = cljs.core._EQ_;
var expr__36578 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_((function (){var G__36580 = new cljs.core.Keyword(null,"open","open",-1763596448);
var G__36581 = expr__36578;
return (pred__36577.cljs$core$IFn$_invoke$arity$2 ? pred__36577.cljs$core$IFn$_invoke$arity$2(G__36580,G__36581) : pred__36577.call(null,G__36580,G__36581));
})())){
if((!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000))))){
return v;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
}
} else {
if(cljs.core.truth_((function (){var G__36582 = new cljs.core.Keyword(null,"close","close",1835149582);
var G__36583 = expr__36578;
return (pred__36577.cljs$core$IFn$_invoke$arity$2 ? pred__36577.cljs$core$IFn$_invoke$arity$2(G__36582,G__36583) : pred__36577.call(null,G__36582,G__36583));
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
return (function (p__36584){
var vec__36585 = p__36584;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585,(1),null);
var id = vec__36585;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__36588){
var map__36589 = p__36588;
var map__36589__$1 = (((((!((map__36589 == null))))?(((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36589):map__36589);
var v = map__36589__$1;
var vec__36590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590,(1),null);
var id = vec__36590;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__36589,map__36589__$1,v,vec__36590,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null)], 0));
});})(map__36589,map__36589__$1,v,vec__36590,y,x,id,pass,waitView,waitCnt))
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_36628){
var state_val_36629 = (state_36628[(1)]);
if((state_val_36629 === (1))){
var inst_36619 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36620 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_36621 = cljs.core.PersistentHashMap.fromArrays(inst_36619,inst_36620);
var state_36628__$1 = state_36628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36628__$1,(2),app.t4.main.evt,inst_36621);
} else {
if((state_val_36629 === (2))){
var inst_36623 = (state_36628[(2)]);
var state_36628__$1 = state_36628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36628__$1,inst_36623);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t4$main$main_$_state_machine__30585__auto__ = null;
var app$t4$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36632 = [null,null,null,null,null,null,null];
(statearr_36632[(0)] = app$t4$main$main_$_state_machine__30585__auto__);

(statearr_36632[(1)] = (1));

return statearr_36632;
});
var app$t4$main$main_$_state_machine__30585__auto____1 = (function (state_36628){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36628);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36633){if((e36633 instanceof Object)){
var ex__30588__auto__ = e36633;
var statearr_36637_36964 = state_36628;
(statearr_36637_36964[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_36628;
state_36628 = G__36966;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30585__auto__ = function(state_36628){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30585__auto____1.call(this,state_36628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30585__auto____0;
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30585__auto____1;
return app$t4$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_36638 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36638[(6)] = c__30812__auto__);

return statearr_36638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
}),(33));

var data_36967 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_36968 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((6),(function (){var iter__4523__auto__ = ((function (data_36967){
return (function app$t4$main$main_$_iter__36645(s__36646){
return (new cljs.core.LazySeq(null,((function (data_36967){
return (function (){
var s__36646__$1 = s__36646;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36646__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36646__$1,y,xs__6292__auto__,temp__5735__auto__,data_36967){
return (function app$t4$main$main_$_iter__36645_$_iter__36647(s__36648){
return (new cljs.core.LazySeq(null,((function (s__36646__$1,y,xs__6292__auto__,temp__5735__auto__,data_36967){
return (function (){
var s__36648__$1 = s__36648;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36648__$1);
if(temp__5735__auto____$1){
var s__36648__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36648__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36648__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36650 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36649 = (0);
while(true){
if((i__36649 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36649);
cljs.core.chunk_append(b__36650,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__36970 = (i__36649 + (1));
i__36649 = G__36970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36650),app$t4$main$main_$_iter__36645_$_iter__36647(cljs.core.chunk_rest(s__36648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36650),null);
}
} else {
var x = cljs.core.first(s__36648__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__36645_$_iter__36647(cljs.core.rest(s__36648__$2)));
}
} else {
return null;
}
break;
}
});})(s__36646__$1,y,xs__6292__auto__,temp__5735__auto__,data_36967))
,null,null));
});})(s__36646__$1,y,xs__6292__auto__,temp__5735__auto__,data_36967))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t4$main$main_$_iter__36645(cljs.core.rest(s__36646__$1)));
} else {
var G__36971 = cljs.core.rest(s__36646__$1);
s__36646__$1 = G__36971;
continue;
}
} else {
return null;
}
break;
}
});})(data_36967))
,null,null));
});})(data_36967))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})())));
var c__30812__auto___36972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___36972,data_36967,view_36968){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___36972,data_36967,view_36968){
return (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var inst_36774 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36781_36973 = state_36778__$1;
(statearr_36781_36973[(2)] = inst_36774);

(statearr_36781_36973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (1))){
var inst_36651 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_36652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36653 = [(0),(0)];
var inst_36654 = (new cljs.core.PersistentVector(null,2,(5),inst_36652,inst_36653,null));
var inst_36655 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_36657 = (new Date());
var inst_36658 = inst_36657.getTime();
var inst_36660 = [inst_36658,(0)];
var inst_36661 = cljs.core.PersistentHashMap.fromArrays(inst_36655,inst_36660);
var inst_36662 = [inst_36654,data_36967,view_36968,inst_36661];
var inst_36663 = cljs.core.PersistentHashMap.fromArrays(inst_36651,inst_36662);
var inst_36664 = inst_36663;
var state_36778__$1 = (function (){var statearr_36786 = state_36778;
(statearr_36786[(7)] = inst_36664);

return statearr_36786;
})();
var statearr_36788_36974 = state_36778__$1;
(statearr_36788_36974[(2)] = null);

(statearr_36788_36974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var inst_36682 = (state_36778[(8)]);
var inst_36690 = (state_36778[(9)]);
var inst_36682__$1 = (state_36778[(2)]);
var inst_36690__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_36682__$1);
var inst_36692 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_36690__$1);
var state_36778__$1 = (function (){var statearr_36791 = state_36778;
(statearr_36791[(8)] = inst_36682__$1);

(statearr_36791[(9)] = inst_36690__$1);

return statearr_36791;
})();
if(inst_36692){
var statearr_36793_36975 = state_36778__$1;
(statearr_36793_36975[(1)] = (5));

} else {
var statearr_36795_36976 = state_36778__$1;
(statearr_36795_36976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (6))){
var inst_36690 = (state_36778[(9)]);
var inst_36712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_36690);
var state_36778__$1 = state_36778;
if(inst_36712){
var statearr_36797_36977 = state_36778__$1;
(statearr_36797_36977[(1)] = (8));

} else {
var statearr_36798_36978 = state_36778__$1;
(statearr_36798_36978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (3))){
var inst_36776 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36778__$1,inst_36776);
} else {
if((state_val_36779 === (2))){
var inst_36664 = (state_36778[(7)]);
var inst_36678 = app.t4.main.model = inst_36664;
var state_36778__$1 = (function (){var statearr_36802 = state_36778;
(statearr_36802[(10)] = inst_36678);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36778__$1,(4),app.t4.main.evt);
} else {
if((state_val_36779 === (9))){
var inst_36664 = (state_36778[(7)]);
var inst_36769 = app.t4.main.step(inst_36664);
var inst_36664__$1 = inst_36769;
var state_36778__$1 = (function (){var statearr_36803 = state_36778;
(statearr_36803[(7)] = inst_36664__$1);

return statearr_36803;
})();
var statearr_36804_36979 = state_36778__$1;
(statearr_36804_36979[(2)] = null);

(statearr_36804_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (5))){
var inst_36664 = (state_36778[(7)]);
var inst_36699 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_36664);
var inst_36702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36699,(0),null);
var inst_36704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36699,(1),null);
var inst_36705 = app.t4.main.flip(inst_36699,inst_36664);
var inst_36664__$1 = inst_36705;
var state_36778__$1 = (function (){var statearr_36809 = state_36778;
(statearr_36809[(7)] = inst_36664__$1);

(statearr_36809[(11)] = inst_36704);

(statearr_36809[(12)] = inst_36702);

return statearr_36809;
})();
var statearr_36810_36983 = state_36778__$1;
(statearr_36810_36983[(2)] = null);

(statearr_36810_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36772 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36811_36986 = state_36778__$1;
(statearr_36811_36986[(2)] = inst_36772);

(statearr_36811_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (8))){
var inst_36664 = (state_36778[(7)]);
var inst_36682 = (state_36778[(8)]);
var inst_36727 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_36682);
var inst_36730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36727,(0),null);
var inst_36732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36727,(1),null);
var inst_36745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36749 = [inst_36732,inst_36730];
var inst_36750 = (new cljs.core.PersistentVector(null,2,(5),inst_36745,inst_36749,null));
var inst_36751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36752 = [(100),(100)];
var inst_36753 = (new cljs.core.PersistentVector(null,2,(5),inst_36751,inst_36752,null));
var inst_36754 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,inst_36750,inst_36753);
var inst_36755 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,inst_36754);
var inst_36756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36755,(0),null);
var inst_36757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36755,(1),null);
var inst_36760 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_36761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36762 = [inst_36756,inst_36757];
var inst_36763 = (new cljs.core.PersistentVector(null,2,(5),inst_36761,inst_36762,null));
var inst_36764 = [inst_36763];
var inst_36765 = cljs.core.PersistentHashMap.fromArrays(inst_36760,inst_36764);
var inst_36766 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_36664,inst_36765], 0));
var inst_36664__$1 = inst_36766;
var state_36778__$1 = (function (){var statearr_36817 = state_36778;
(statearr_36817[(7)] = inst_36664__$1);

return statearr_36817;
})();
var statearr_36819_36990 = state_36778__$1;
(statearr_36819_36990[(2)] = null);

(statearr_36819_36990[(1)] = (2));


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
});})(c__30812__auto___36972,data_36967,view_36968))
;
return ((function (switch__30584__auto__,c__30812__auto___36972,data_36967,view_36968){
return (function() {
var app$t4$main$main_$_state_machine__30585__auto__ = null;
var app$t4$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36821 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36821[(0)] = app$t4$main$main_$_state_machine__30585__auto__);

(statearr_36821[(1)] = (1));

return statearr_36821;
});
var app$t4$main$main_$_state_machine__30585__auto____1 = (function (state_36778){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36778);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36838){if((e36838 instanceof Object)){
var ex__30588__auto__ = e36838;
var statearr_36839_36993 = state_36778;
(statearr_36839_36993[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36995 = state_36778;
state_36778 = G__36995;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30585__auto__ = function(state_36778){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30585__auto____1.call(this,state_36778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30585__auto____0;
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30585__auto____1;
return app$t4$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___36972,data_36967,view_36968))
})();
var state__30814__auto__ = (function (){var statearr_36841 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36841[(6)] = c__30812__auto___36972);

return statearr_36841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___36972,data_36967,view_36968))
);


var p5 = window;
p5.setup = ((function (p5){
return (function (){
var canvas = p5.createCanvas((600),(300));
canvas.mousePressed(((function (canvas,p5){
return (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,canvas,p5){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,canvas,p5){
return (function (state_36854){
var state_val_36855 = (state_36854[(1)]);
if((state_val_36855 === (1))){
var inst_36848 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_36849 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_36850 = cljs.core.PersistentHashMap.fromArrays(inst_36848,inst_36849);
var state_36854__$1 = state_36854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36854__$1,(2),app.t4.main.evt,inst_36850);
} else {
if((state_val_36855 === (2))){
var inst_36852 = (state_36854[(2)]);
var state_36854__$1 = state_36854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36854__$1,inst_36852);
} else {
return null;
}
}
});})(c__30812__auto__,canvas,p5))
;
return ((function (switch__30584__auto__,c__30812__auto__,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__30585__auto__ = null;
var app$t4$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36856 = [null,null,null,null,null,null,null];
(statearr_36856[(0)] = app$t4$main$main_$_state_machine__30585__auto__);

(statearr_36856[(1)] = (1));

return statearr_36856;
});
var app$t4$main$main_$_state_machine__30585__auto____1 = (function (state_36854){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36854);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36861){if((e36861 instanceof Object)){
var ex__30588__auto__ = e36861;
var statearr_36862_36999 = state_36854;
(statearr_36862_36999[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36854;
state_36854 = G__37000;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30585__auto__ = function(state_36854){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30585__auto____1.call(this,state_36854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30585__auto____0;
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30585__auto____1;
return app$t4$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,canvas,p5))
})();
var state__30814__auto__ = (function (){var statearr_36881 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36881[(6)] = c__30812__auto__);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,canvas,p5))
);

return c__30812__auto__;
});})(canvas,p5))
);

canvas.mouseMoved(((function (canvas,p5){
return (function (){
var x = p5.mouseX;
var y = p5.mouseY;
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,x,y,canvas,p5){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,x,y,canvas,p5){
return (function (state_36891){
var state_val_36892 = (state_36891[(1)]);
if((state_val_36892 === (1))){
var inst_36882 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_36883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36884 = [x,y];
var inst_36885 = (new cljs.core.PersistentVector(null,2,(5),inst_36883,inst_36884,null));
var inst_36886 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_36885];
var inst_36887 = cljs.core.PersistentHashMap.fromArrays(inst_36882,inst_36886);
var state_36891__$1 = state_36891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36891__$1,(2),app.t4.main.evt,inst_36887);
} else {
if((state_val_36892 === (2))){
var inst_36889 = (state_36891[(2)]);
var state_36891__$1 = state_36891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36891__$1,inst_36889);
} else {
return null;
}
}
});})(c__30812__auto__,x,y,canvas,p5))
;
return ((function (switch__30584__auto__,c__30812__auto__,x,y,canvas,p5){
return (function() {
var app$t4$main$main_$_state_machine__30585__auto__ = null;
var app$t4$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36897 = [null,null,null,null,null,null,null];
(statearr_36897[(0)] = app$t4$main$main_$_state_machine__30585__auto__);

(statearr_36897[(1)] = (1));

return statearr_36897;
});
var app$t4$main$main_$_state_machine__30585__auto____1 = (function (state_36891){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36891);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36898){if((e36898 instanceof Object)){
var ex__30588__auto__ = e36898;
var statearr_36899_37001 = state_36891;
(statearr_36899_37001[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_36891;
state_36891 = G__37003;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__30585__auto__ = function(state_36891){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__30585__auto____1.call(this,state_36891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__30585__auto____0;
app$t4$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__30585__auto____1;
return app$t4$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,x,y,canvas,p5))
})();
var state__30814__auto__ = (function (){var statearr_36900 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36900[(6)] = c__30812__auto__);

return statearr_36900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,x,y,canvas,p5))
);

return c__30812__auto__;
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
var map__36910 = v;
var map__36910__$1 = (((((!((map__36910 == null))))?(((((map__36910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36910):map__36910);
var vec__36911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(1),null);
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
