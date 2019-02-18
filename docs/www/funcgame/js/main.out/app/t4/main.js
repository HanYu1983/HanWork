// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t4.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
app.t4.main.flip = (function app$t4$main$flip(p__13763,ctx){
var vec__13764 = p__13763;
var y = cljs.core.nth.call(null,vec__13764,(0),null);
var x = cljs.core.nth.call(null,vec__13764,(1),null);
var pos = vec__13764;
var openCnt = cljs.core.count.call(null,cljs.core.filter.call(null,((function (vec__13764,y,x,pos){
return (function (v){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"wait","wait",-260664777)], null));
});})(vec__13764,y,x,pos))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(ctx))));
var isPass = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),y,x,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993));
if(((isPass) || ((openCnt >= (2))))){
return ctx;
} else {
return cljs.core.update_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),pos),((function (openCnt,isPass,vec__13764,y,x,pos){
return (function (v){
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(openCnt,isPass,vec__13764,y,x,pos))
);
}
});
app.t4.main.updateView = (function app$t4$main$updateView(ctx){
var changeState = (function (v){
if(!(cljs.core.map_QMARK_.call(null,v))){
return v;
} else {
var pred__13767 = cljs.core._EQ_;
var expr__13768 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(pred__13767.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__13768))){
if(!((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(v) > (1000)))){
return v;
} else {
return cljs.core.merge.call(null,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"wait","wait",-260664777),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
}
} else {
if(cljs.core.truth_(pred__13767.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__13768))){
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
return (function (p__13770){
var vec__13771 = p__13770;
var y = cljs.core.nth.call(null,vec__13771,(0),null);
var x = cljs.core.nth.call(null,vec__13771,(1),null);
var id = vec__13771;
return cljs.core.get_in.call(null,ctx,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),id));
});})(waitView,waitCnt))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),waitView)));
return cljs.core.reduce.call(null,((function (pass,waitView,waitCnt){
return (function (ctx__$1,p__13774){
var map__13775 = p__13774;
var map__13775__$1 = ((((!((map__13775 == null)))?(((((map__13775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13775):map__13775);
var v = map__13775__$1;
var vec__13776 = cljs.core.get.call(null,map__13775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__13776,(0),null);
var x = cljs.core.nth.call(null,vec__13776,(1),null);
var id = vec__13776;
return cljs.core.update_in.call(null,ctx__$1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),id),((function (map__13775,map__13775__$1,v,vec__13776,y,x,id,pass,waitView,waitCnt){
return (function (v__$1){
return cljs.core.merge.call(null,v__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(cljs.core.truth_(pass)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"close","close",1835149582)),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));
});})(map__13775,map__13775__$1,v,vec__13776,y,x,id,pass,waitView,waitCnt))
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
return (function (state_13786){
var state_val_13787 = (state_13786[(1)]);
if((state_val_13787 === (1))){
var inst_13780 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_13781 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_13782 = cljs.core.PersistentHashMap.fromArrays(inst_13780,inst_13781);
var state_13786__$1 = state_13786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13786__$1,(2),app.t4.main.evt,inst_13782);
} else {
if((state_val_13787 === (2))){
var inst_13784 = (state_13786[(2)]);
var state_13786__$1 = state_13786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13786__$1,inst_13784);
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
var statearr_13788 = [null,null,null,null,null,null,null];
(statearr_13788[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_13788[(1)] = (1));

return statearr_13788;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_13786){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13789){if((e13789 instanceof Object)){
var ex__2796__auto__ = e13789;
var statearr_13790_13922 = state_13786;
(statearr_13790_13922[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13923 = state_13786;
state_13786 = G__13923;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_13786){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_13786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_13791 = f__2883__auto__.call(null);
(statearr_13791[(6)] = c__2882__auto__);

return statearr_13791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));

var data_13924 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(2),(2)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(4),(5),(5)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6),(7),(7),(8),(8)], null)], null);
var view_13925 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,(6),(function (){var iter__4292__auto__ = ((function (data_13924){
return (function app$t4$main$main_$_iter__13792(s__13793){
return (new cljs.core.LazySeq(null,((function (data_13924){
return (function (){
var s__13793__$1 = s__13793;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13793__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__13793__$1,y,xs__6012__auto__,temp__5457__auto__,data_13924){
return (function app$t4$main$main_$_iter__13792_$_iter__13794(s__13795){
return (new cljs.core.LazySeq(null,((function (s__13793__$1,y,xs__6012__auto__,temp__5457__auto__,data_13924){
return (function (){
var s__13795__$1 = s__13795;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13795__$1);
if(temp__5457__auto____$1){
var s__13795__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13795__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13795__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13797 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13796 = (0);
while(true){
if((i__13796 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13796);
cljs.core.chunk_append.call(null,b__13797,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null));

var G__13926 = (i__13796 + (1));
i__13796 = G__13926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13797),app$t4$main$main_$_iter__13792_$_iter__13794.call(null,cljs.core.chunk_rest.call(null,s__13795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13797),null);
}
} else {
var x = cljs.core.first.call(null,s__13795__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"timer","timer",-1266967739),(0)], null),app$t4$main$main_$_iter__13792_$_iter__13794.call(null,cljs.core.rest.call(null,s__13795__$2)));
}
} else {
return null;
}
break;
}
});})(s__13793__$1,y,xs__6012__auto__,temp__5457__auto__,data_13924))
,null,null));
});})(s__13793__$1,y,xs__6012__auto__,temp__5457__auto__,data_13924))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(6))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t4$main$main_$_iter__13792.call(null,cljs.core.rest.call(null,s__13793__$1)));
} else {
var G__13927 = cljs.core.rest.call(null,s__13793__$1);
s__13793__$1 = G__13927;
continue;
}
} else {
return null;
}
break;
}
});})(data_13924))
,null,null));
});})(data_13924))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())));
var c__2882__auto___13928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___13928,data_13924,view_13925){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___13928,data_13924,view_13925){
return (function (state_13868){
var state_val_13869 = (state_13868[(1)]);
if((state_val_13869 === (7))){
var inst_13864 = (state_13868[(2)]);
var state_13868__$1 = state_13868;
var statearr_13870_13929 = state_13868__$1;
(statearr_13870_13929[(2)] = inst_13864);

(statearr_13870_13929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (1))){
var inst_13798 = [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"timer","timer",-1266967739)];
var inst_13799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13800 = [(0),(0)];
var inst_13801 = (new cljs.core.PersistentVector(null,2,(5),inst_13799,inst_13800,null));
var inst_13802 = [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)];
var inst_13803 = (new Date());
var inst_13804 = inst_13803.getTime();
var inst_13805 = [inst_13804,(0)];
var inst_13806 = cljs.core.PersistentHashMap.fromArrays(inst_13802,inst_13805);
var inst_13807 = [inst_13801,data_13924,view_13925,inst_13806];
var inst_13808 = cljs.core.PersistentHashMap.fromArrays(inst_13798,inst_13807);
var inst_13809 = inst_13808;
var state_13868__$1 = (function (){var statearr_13871 = state_13868;
(statearr_13871[(7)] = inst_13809);

return statearr_13871;
})();
var statearr_13872_13930 = state_13868__$1;
(statearr_13872_13930[(2)] = null);

(statearr_13872_13930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (4))){
var inst_13817 = (state_13868[(8)]);
var inst_13813 = (state_13868[(9)]);
var inst_13813__$1 = (state_13868[(2)]);
var inst_13817__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_13813__$1);
var inst_13818 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),inst_13817__$1);
var state_13868__$1 = (function (){var statearr_13873 = state_13868;
(statearr_13873[(8)] = inst_13817__$1);

(statearr_13873[(9)] = inst_13813__$1);

return statearr_13873;
})();
if(inst_13818){
var statearr_13874_13931 = state_13868__$1;
(statearr_13874_13931[(1)] = (5));

} else {
var statearr_13875_13932 = state_13868__$1;
(statearr_13875_13932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (6))){
var inst_13817 = (state_13868[(8)]);
var inst_13829 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_13817);
var state_13868__$1 = state_13868;
if(inst_13829){
var statearr_13876_13933 = state_13868__$1;
(statearr_13876_13933[(1)] = (8));

} else {
var statearr_13877_13934 = state_13868__$1;
(statearr_13877_13934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (3))){
var inst_13866 = (state_13868[(2)]);
var state_13868__$1 = state_13868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13868__$1,inst_13866);
} else {
if((state_val_13869 === (2))){
var inst_13809 = (state_13868[(7)]);
var inst_13811 = app.t4.main.model = inst_13809;
var state_13868__$1 = (function (){var statearr_13878 = state_13868;
(statearr_13878[(10)] = inst_13811);

return statearr_13878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13868__$1,(4),app.t4.main.evt);
} else {
if((state_val_13869 === (9))){
var inst_13809 = (state_13868[(7)]);
var inst_13859 = app.t4.main.update.call(null,inst_13809);
var inst_13809__$1 = inst_13859;
var state_13868__$1 = (function (){var statearr_13879 = state_13868;
(statearr_13879[(7)] = inst_13809__$1);

return statearr_13879;
})();
var statearr_13880_13935 = state_13868__$1;
(statearr_13880_13935[(2)] = null);

(statearr_13880_13935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (5))){
var inst_13809 = (state_13868[(7)]);
var inst_13823 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_13809);
var inst_13824 = cljs.core.nth.call(null,inst_13823,(0),null);
var inst_13825 = cljs.core.nth.call(null,inst_13823,(1),null);
var inst_13826 = app.t4.main.flip.call(null,inst_13823,inst_13809);
var inst_13809__$1 = inst_13826;
var state_13868__$1 = (function (){var statearr_13881 = state_13868;
(statearr_13881[(7)] = inst_13809__$1);

(statearr_13881[(11)] = inst_13825);

(statearr_13881[(12)] = inst_13824);

return statearr_13881;
})();
var statearr_13882_13936 = state_13868__$1;
(statearr_13882_13936[(2)] = null);

(statearr_13882_13936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (10))){
var inst_13862 = (state_13868[(2)]);
var state_13868__$1 = state_13868;
var statearr_13883_13937 = state_13868__$1;
(statearr_13883_13937[(2)] = inst_13862);

(statearr_13883_13937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13869 === (8))){
var inst_13809 = (state_13868[(7)]);
var inst_13813 = (state_13868[(9)]);
var inst_13837 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_13813);
var inst_13838 = cljs.core.nth.call(null,inst_13837,(0),null);
var inst_13839 = cljs.core.nth.call(null,inst_13837,(1),null);
var inst_13840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13841 = [inst_13839,inst_13838];
var inst_13842 = (new cljs.core.PersistentVector(null,2,(5),inst_13840,inst_13841,null));
var inst_13843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13844 = [(100),(100)];
var inst_13845 = (new cljs.core.PersistentVector(null,2,(5),inst_13843,inst_13844,null));
var inst_13846 = cljs.core.map.call(null,cljs.core._SLASH_,inst_13842,inst_13845);
var inst_13847 = cljs.core.map.call(null,cljs.core.int$,inst_13846);
var inst_13848 = cljs.core.nth.call(null,inst_13847,(0),null);
var inst_13849 = cljs.core.nth.call(null,inst_13847,(1),null);
var inst_13850 = [new cljs.core.Keyword(null,"select","select",1147833503)];
var inst_13851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13852 = [inst_13848,inst_13849];
var inst_13853 = (new cljs.core.PersistentVector(null,2,(5),inst_13851,inst_13852,null));
var inst_13854 = [inst_13853];
var inst_13855 = cljs.core.PersistentHashMap.fromArrays(inst_13850,inst_13854);
var inst_13856 = cljs.core.merge.call(null,inst_13809,inst_13855);
var inst_13809__$1 = inst_13856;
var state_13868__$1 = (function (){var statearr_13884 = state_13868;
(statearr_13884[(7)] = inst_13809__$1);

return statearr_13884;
})();
var statearr_13885_13938 = state_13868__$1;
(statearr_13885_13938[(2)] = null);

(statearr_13885_13938[(1)] = (2));


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
});})(c__2882__auto___13928,data_13924,view_13925))
;
return ((function (switch__2792__auto__,c__2882__auto___13928,data_13924,view_13925){
return (function() {
var app$t4$main$main_$_state_machine__2793__auto__ = null;
var app$t4$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_13886 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13886[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_13886[(1)] = (1));

return statearr_13886;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_13868){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13887){if((e13887 instanceof Object)){
var ex__2796__auto__ = e13887;
var statearr_13888_13939 = state_13868;
(statearr_13888_13939[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13940 = state_13868;
state_13868 = G__13940;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_13868){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_13868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___13928,data_13924,view_13925))
})();
var state__2884__auto__ = (function (){var statearr_13889 = f__2883__auto__.call(null);
(statearr_13889[(6)] = c__2882__auto___13928);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___13928,data_13924,view_13925))
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
return (function (state_13896){
var state_val_13897 = (state_13896[(1)]);
if((state_val_13897 === (1))){
var inst_13890 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_13891 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454)];
var inst_13892 = cljs.core.PersistentHashMap.fromArrays(inst_13890,inst_13891);
var state_13896__$1 = state_13896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13896__$1,(2),app.t4.main.evt,inst_13892);
} else {
if((state_val_13897 === (2))){
var inst_13894 = (state_13896[(2)]);
var state_13896__$1 = state_13896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13896__$1,inst_13894);
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
var statearr_13898 = [null,null,null,null,null,null,null];
(statearr_13898[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_13898[(1)] = (1));

return statearr_13898;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_13896){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13899){if((e13899 instanceof Object)){
var ex__2796__auto__ = e13899;
var statearr_13900_13941 = state_13896;
(statearr_13900_13941[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13942 = state_13896;
state_13896 = G__13942;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_13896){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_13896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_13901 = f__2883__auto__.call(null);
(statearr_13901[(6)] = c__2882__auto__);

return statearr_13901;
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
return (function (state_13911){
var state_val_13912 = (state_13911[(1)]);
if((state_val_13912 === (1))){
var inst_13902 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_13903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13904 = [x,y];
var inst_13905 = (new cljs.core.PersistentVector(null,2,(5),inst_13903,inst_13904,null));
var inst_13906 = [new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),inst_13905];
var inst_13907 = cljs.core.PersistentHashMap.fromArrays(inst_13902,inst_13906);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,(2),app.t4.main.evt,inst_13907);
} else {
if((state_val_13912 === (2))){
var inst_13909 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13911__$1,inst_13909);
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
var statearr_13913 = [null,null,null,null,null,null,null];
(statearr_13913[(0)] = app$t4$main$main_$_state_machine__2793__auto__);

(statearr_13913[(1)] = (1));

return statearr_13913;
});
var app$t4$main$main_$_state_machine__2793__auto____1 = (function (state_13911){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_13911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e13914){if((e13914 instanceof Object)){
var ex__2796__auto__ = e13914;
var statearr_13915_13943 = state_13911;
(statearr_13915_13943[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13944 = state_13911;
state_13911 = G__13944;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t4$main$main_$_state_machine__2793__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return app$t4$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t4$main$main_$_state_machine__2793__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t4$main$main_$_state_machine__2793__auto____0;
app$t4$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t4$main$main_$_state_machine__2793__auto____1;
return app$t4$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,x,y,canvas,p5))
})();
var state__2884__auto__ = (function (){var statearr_13916 = f__2883__auto__.call(null);
(statearr_13916[(6)] = c__2882__auto__);

return statearr_13916;
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
var map__13917 = v;
var map__13917__$1 = ((((!((map__13917 == null)))?(((((map__13917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13917):map__13917);
var vec__13918 = cljs.core.get.call(null,map__13917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var y = cljs.core.nth.call(null,vec__13918,(0),null);
var x = cljs.core.nth.call(null,vec__13918,(1),null);
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
