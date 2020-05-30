goog.provide('app.t8.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('app.t8.qlearning');
goog.require('app.t8.board');
app.t8.main.train = (function app$t8$main$train(qmodel,n){
var ctx = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"brain","brain",428499577),qmodel,new cljs.core.Keyword(null,"board","board",-1907017633),app.t8.board.board,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"win","win",-1624642689),(0),new cljs.core.Keyword(null,"draw","draw",1358331674),(0),new cljs.core.Keyword(null,"lose","lose",-1493527476),(0),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"action","action",-811238024),null], null)], null);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"lose","lose",-1493527476)], null))], 0));

return new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
var map__36943 = ctx;
var map__36943__$1 = (((((!((map__36943 == null))))?(((((map__36943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36943):map__36943);
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var activePlayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203));
var win = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"win","win",-1624642689));
var draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var lose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"lose","lose",-1493527476));
var self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"self","self",-1547428899));
var possibleActions = app.t8.board.possibleActions(board);
var isSelf = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(activePlayer,new cljs.core.Keyword(null,"o","o",-1350007228));
if((cljs.core.count(possibleActions) === (0))){
var G__37129 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),app.t8.board.board,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"draw","draw",1358331674),(draw + (1)),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null)], null)], 0));
var G__37130 = (n__$1 - (1));
ctx = G__37129;
n__$1 = G__37130;
continue;
} else {
if(isSelf){
var isWin = app.t8.board.checkWin(board,new cljs.core.Keyword(null,"o","o",-1350007228));
var isLose = ((cljs.core.not(isWin))?app.t8.board.checkWin(board,new cljs.core.Keyword(null,"x","x",2099068185)):false);
var reward = (cljs.core.truth_(isWin)?(1):(cljs.core.truth_(isLose)?(0):(0)
));
var brain__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(self);
} else {
return and__4120__auto__;
}
})())?app.t8.qlearning.learn(brain,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(self),reward,board):brain);
if(cljs.core.truth_((function (){var or__4131__auto__ = isWin;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return isLose;
}
})())){
var G__37131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1,new cljs.core.Keyword(null,"board","board",-1907017633),app.t8.board.board,new cljs.core.Keyword(null,"win","win",-1624642689),(cljs.core.truth_(isWin)?(win + (1)):win),new cljs.core.Keyword(null,"lose","lose",-1493527476),(cljs.core.truth_(isLose)?(lose + (1)):lose),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null)], null)], 0));
var G__37132 = (n__$1 - (1));
ctx = G__37131;
n__$1 = G__37132;
continue;
} else {
var selectAction = app.t8.qlearning.selectAction(brain__$1,board,possibleActions);
var nextBoard = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,selectAction,cljs.core.constantly(activePlayer));
var G__37133 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1,new cljs.core.Keyword(null,"board","board",-1907017633),nextBoard,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),activePlayer))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"self","self",-1547428899),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),board,new cljs.core.Keyword(null,"action","action",-811238024),selectAction], null)], 0))], null)], 0));
var G__37134 = (n__$1 - (1));
ctx = G__37133;
n__$1 = G__37134;
continue;
}
} else {
var selectAction = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(possibleActions,cljs.core.rand_int(cljs.core.count(possibleActions)));
var nextBoard = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,selectAction,cljs.core.constantly(activePlayer));
var G__37135 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"board","board",-1907017633),nextBoard,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),activePlayer))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228))], null)], 0));
var G__37136 = (n__$1 - (1));
ctx = G__37135;
n__$1 = G__37136;
continue;
}
}
}
break;
}
});
app.t8.main.background_train = (function app$t8$main$background_train(atomModel){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_36957){
var state_val_36958 = (state_36957[(1)]);
if((state_val_36958 === (1))){
var inst_36945 = cljs.core.deref(atomModel);
var inst_36946 = inst_36945;
var state_36957__$1 = (function (){var statearr_36959 = state_36957;
(statearr_36959[(7)] = inst_36946);

return statearr_36959;
})();
var statearr_36960_37137 = state_36957__$1;
(statearr_36960_37137[(2)] = null);

(statearr_36960_37137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (2))){
var inst_36948 = cljs.core.async.timeout((1000));
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36957__$1,(4),inst_36948);
} else {
if((state_val_36958 === (3))){
var inst_36955 = (state_36957[(2)]);
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36957__$1,inst_36955);
} else {
if((state_val_36958 === (4))){
var inst_36946 = (state_36957[(7)]);
var inst_36950 = (state_36957[(2)]);
var inst_36951 = app.t8.main.train(inst_36946,(75));
var inst_36952 = cljs.core.reset_BANG_(atomModel,inst_36951);
var inst_36946__$1 = inst_36951;
var state_36957__$1 = (function (){var statearr_36961 = state_36957;
(statearr_36961[(7)] = inst_36946__$1);

(statearr_36961[(8)] = inst_36952);

(statearr_36961[(9)] = inst_36950);

return statearr_36961;
})();
var statearr_36962_37138 = state_36957__$1;
(statearr_36962_37138[(2)] = null);

(statearr_36962_37138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$background_train_$_state_machine__25020__auto__ = null;
var app$t8$main$background_train_$_state_machine__25020__auto____0 = (function (){
var statearr_36963 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36963[(0)] = app$t8$main$background_train_$_state_machine__25020__auto__);

(statearr_36963[(1)] = (1));

return statearr_36963;
});
var app$t8$main$background_train_$_state_machine__25020__auto____1 = (function (state_36957){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_36957);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e36964){if((e36964 instanceof Object)){
var ex__25023__auto__ = e36964;
var statearr_36965_37139 = state_36957;
(statearr_36965_37139[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37140 = state_36957;
state_36957 = G__37140;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_train_$_state_machine__25020__auto__ = function(state_36957){
switch(arguments.length){
case 0:
return app$t8$main$background_train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_train_$_state_machine__25020__auto____1.call(this,state_36957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_train_$_state_machine__25020__auto____0;
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_train_$_state_machine__25020__auto____1;
return app$t8$main$background_train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_36966 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_36966[(6)] = c__25042__auto__);

return statearr_36966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.background_test = (function app$t8$main$background_test(atomModel){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_37014){
var state_val_37015 = (state_37014[(1)]);
if((state_val_37015 === (1))){
var state_37014__$1 = state_37014;
var statearr_37016_37141 = state_37014__$1;
(statearr_37016_37141[(2)] = null);

(statearr_37016_37141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (2))){
var inst_36968 = cljs.core.async.timeout((1000));
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37014__$1,(4),inst_36968);
} else {
if((state_val_37015 === (3))){
var inst_37012 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37014__$1,inst_37012);
} else {
if((state_val_37015 === (4))){
var inst_36970 = (state_37014[(2)]);
var inst_36971 = cljs.core.deref(atomModel);
var inst_36972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36974 = [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),null];
var inst_36975 = (new cljs.core.PersistentVector(null,3,(5),inst_36973,inst_36974,null));
var inst_36976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36977 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),null];
var inst_36978 = (new cljs.core.PersistentVector(null,3,(5),inst_36976,inst_36977,null));
var inst_36979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36980 = [null,null,null];
var inst_36981 = (new cljs.core.PersistentVector(null,3,(5),inst_36979,inst_36980,null));
var inst_36982 = [inst_36975,inst_36978,inst_36981];
var inst_36983 = (new cljs.core.PersistentVector(null,3,(5),inst_36972,inst_36982,null));
var inst_36984 = app.t8.board.possibleActions(inst_36983);
var inst_36989 = (function (){var qmodel = inst_36971;
var board = inst_36983;
var possibleActions = inst_36984;
return ((function (qmodel,board,possibleActions,inst_36970,inst_36971,inst_36972,inst_36973,inst_36974,inst_36975,inst_36976,inst_36977,inst_36978,inst_36979,inst_36980,inst_36981,inst_36982,inst_36983,inst_36984,state_val_37015,c__25042__auto__){
return (function app$t8$main$background_test_$_iter__36985(s__36986){
return (new cljs.core.LazySeq(null,((function (qmodel,board,possibleActions,inst_36970,inst_36971,inst_36972,inst_36973,inst_36974,inst_36975,inst_36976,inst_36977,inst_36978,inst_36979,inst_36980,inst_36981,inst_36982,inst_36983,inst_36984,state_val_37015,c__25042__auto__){
return (function (){
var s__36986__$1 = s__36986;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36986__$1);
if(temp__5735__auto__){
var s__36986__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36986__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36986__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36988 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36987 = (0);
while(true){
if((i__36987 < size__4522__auto__)){
var vec__37017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36987);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017,(1),null);
cljs.core.chunk_append(b__36988,cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action,value], 0)));

var G__37142 = (i__36987 + (1));
i__36987 = G__37142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36988),app$t8$main$background_test_$_iter__36985(cljs.core.chunk_rest(s__36986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36988),null);
}
} else {
var vec__37020 = cljs.core.first(s__36986__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020,(1),null);
return cljs.core.cons(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action,value], 0)),app$t8$main$background_test_$_iter__36985(cljs.core.rest(s__36986__$2)));
}
} else {
return null;
}
break;
}
});})(qmodel,board,possibleActions,inst_36970,inst_36971,inst_36972,inst_36973,inst_36974,inst_36975,inst_36976,inst_36977,inst_36978,inst_36979,inst_36980,inst_36981,inst_36982,inst_36983,inst_36984,state_val_37015,c__25042__auto__))
,null,null));
});
;})(qmodel,board,possibleActions,inst_36970,inst_36971,inst_36972,inst_36973,inst_36974,inst_36975,inst_36976,inst_36977,inst_36978,inst_36979,inst_36980,inst_36981,inst_36982,inst_36983,inst_36984,state_val_37015,c__25042__auto__))
})();
var inst_36990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36993 = [null,null,null];
var inst_36994 = (new cljs.core.PersistentVector(null,3,(5),inst_36992,inst_36993,null));
var inst_36995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36996 = [null,null,null];
var inst_36997 = (new cljs.core.PersistentVector(null,3,(5),inst_36995,inst_36996,null));
var inst_36998 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36999 = [null,null,null];
var inst_37000 = (new cljs.core.PersistentVector(null,3,(5),inst_36998,inst_36999,null));
var inst_37001 = [inst_36994,inst_36997,inst_37000];
var inst_37002 = (new cljs.core.PersistentVector(null,3,(5),inst_36991,inst_37001,null));
var inst_37003 = [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),inst_37002];
var inst_37004 = (new cljs.core.PersistentVector(null,2,(5),inst_36990,inst_37003,null));
var inst_37005 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36971,inst_37004);
var inst_37006 = (inst_36989.cljs$core$IFn$_invoke$arity$1 ? inst_36989.cljs$core$IFn$_invoke$arity$1(inst_37005) : inst_36989.call(null,inst_37005));
var inst_37007 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37006], 0));
var inst_37008 = app.t8.qlearning.bestAction(inst_36971,inst_36983,inst_36984);
var inst_37009 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["best:",inst_37008], 0));
var state_37014__$1 = (function (){var statearr_37023 = state_37014;
(statearr_37023[(7)] = inst_37009);

(statearr_37023[(8)] = inst_36970);

(statearr_37023[(9)] = inst_37007);

return statearr_37023;
})();
var statearr_37024_37143 = state_37014__$1;
(statearr_37024_37143[(2)] = null);

(statearr_37024_37143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$background_test_$_state_machine__25020__auto__ = null;
var app$t8$main$background_test_$_state_machine__25020__auto____0 = (function (){
var statearr_37025 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37025[(0)] = app$t8$main$background_test_$_state_machine__25020__auto__);

(statearr_37025[(1)] = (1));

return statearr_37025;
});
var app$t8$main$background_test_$_state_machine__25020__auto____1 = (function (state_37014){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_37014);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e37026){if((e37026 instanceof Object)){
var ex__25023__auto__ = e37026;
var statearr_37027_37144 = state_37014;
(statearr_37027_37144[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37145 = state_37014;
state_37014 = G__37145;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_test_$_state_machine__25020__auto__ = function(state_37014){
switch(arguments.length){
case 0:
return app$t8$main$background_test_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_test_$_state_machine__25020__auto____1.call(this,state_37014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_test_$_state_machine__25020__auto____0;
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_test_$_state_machine__25020__auto____1;
return app$t8$main$background_test_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_37028 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_37028[(6)] = c__25042__auto__);

return statearr_37028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.render_board = (function app$t8$main$render_board(atomModel){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.t8.board.board);
var active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"enemy","enemy",-956472047));
var result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__25042__auto___37146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___37146,state,active,result){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto___37146,state,active,result){
return (function (state_37077){
var state_val_37078 = (state_37077[(1)]);
if((state_val_37078 === (7))){
var inst_37038 = (state_37077[(7)]);
var inst_37036 = (state_37077[(8)]);
var inst_37046 = (state_37077[(9)]);
var inst_37040 = (state_37077[(10)]);
var inst_37033 = (state_37077[(11)]);
var inst_37050 = (function (){var pred__37030 = cljs.core._EQ_;
var expr__37031 = inst_37033;
var brain = inst_37036;
var actions = inst_37038;
var bestAction = inst_37040;
var _ = inst_37046;
return ((function (pred__37030,expr__37031,brain,actions,bestAction,_,inst_37038,inst_37036,inst_37046,inst_37040,inst_37033,state_val_37078,c__25042__auto___37146,state,active,result){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,bestAction,cljs.core.constantly(new cljs.core.Keyword(null,"o","o",-1350007228)));
});
;})(pred__37030,expr__37031,brain,actions,bestAction,_,inst_37038,inst_37036,inst_37046,inst_37040,inst_37033,state_val_37078,c__25042__auto___37146,state,active,result))
})();
var inst_37051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_37050);
var inst_37052 = cljs.core.deref(active);
var inst_37053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_37052);
var state_37077__$1 = (function (){var statearr_37079 = state_37077;
(statearr_37079[(12)] = inst_37051);

return statearr_37079;
})();
if(inst_37053){
var statearr_37080_37147 = state_37077__$1;
(statearr_37080_37147[(1)] = (10));

} else {
var statearr_37081_37148 = state_37077__$1;
(statearr_37081_37148[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (1))){
var state_37077__$1 = state_37077;
var statearr_37082_37149 = state_37077__$1;
(statearr_37082_37149[(2)] = null);

(statearr_37082_37149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (4))){
var inst_37038 = (state_37077[(7)]);
var inst_37036 = (state_37077[(8)]);
var inst_37036__$1 = cljs.core.deref(atomModel);
var inst_37037 = cljs.core.deref(state);
var inst_37038__$1 = app.t8.board.possibleActions(inst_37037);
var inst_37039 = cljs.core.deref(state);
var inst_37040 = app.t8.qlearning.bestAction(inst_37036__$1,inst_37039,inst_37038__$1);
var inst_37041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37042 = cljs.core.deref(state);
var inst_37043 = [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),inst_37042];
var inst_37044 = (new cljs.core.PersistentVector(null,2,(5),inst_37041,inst_37043,null));
var inst_37045 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37036__$1,inst_37044);
var inst_37046 = cljs.core.reset_BANG_(result,inst_37045);
var inst_37047 = cljs.core.count(inst_37038__$1);
var inst_37048 = (inst_37047 > (0));
var state_37077__$1 = (function (){var statearr_37083 = state_37077;
(statearr_37083[(7)] = inst_37038__$1);

(statearr_37083[(8)] = inst_37036__$1);

(statearr_37083[(9)] = inst_37046);

(statearr_37083[(10)] = inst_37040);

return statearr_37083;
})();
if(cljs.core.truth_(inst_37048)){
var statearr_37084_37150 = state_37077__$1;
(statearr_37084_37150[(1)] = (7));

} else {
var statearr_37085_37151 = state_37077__$1;
(statearr_37085_37151[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (13))){
var inst_37063 = (state_37077[(2)]);
var state_37077__$1 = (function (){var statearr_37086 = state_37077;
(statearr_37086[(13)] = inst_37063);

return statearr_37086;
})();
var statearr_37087_37152 = state_37077__$1;
(statearr_37087_37152[(2)] = null);

(statearr_37087_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (6))){
var inst_37073 = (state_37077[(2)]);
var state_37077__$1 = state_37077;
var statearr_37088_37153 = state_37077__$1;
(statearr_37088_37153[(2)] = inst_37073);

(statearr_37088_37153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (3))){
var inst_37075 = (state_37077[(2)]);
var state_37077__$1 = state_37077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37077__$1,inst_37075);
} else {
if((state_val_37078 === (12))){
var inst_37057 = (state_37077[(2)]);
var inst_37058 = cljs.core.reset_BANG_(active,inst_37057);
var state_37077__$1 = (function (){var statearr_37089 = state_37077;
(statearr_37089[(14)] = inst_37058);

return statearr_37089;
})();
var statearr_37090_37154 = state_37077__$1;
(statearr_37090_37154[(2)] = null);

(statearr_37090_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (2))){
var inst_37033 = (state_37077[(11)]);
var inst_37033__$1 = cljs.core.deref(active);
var inst_37034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),inst_37033__$1);
var state_37077__$1 = (function (){var statearr_37091 = state_37077;
(statearr_37091[(11)] = inst_37033__$1);

return statearr_37091;
})();
if(inst_37034){
var statearr_37092_37155 = state_37077__$1;
(statearr_37092_37155[(1)] = (4));

} else {
var statearr_37093_37156 = state_37077__$1;
(statearr_37093_37156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (11))){
var state_37077__$1 = state_37077;
var statearr_37094_37157 = state_37077__$1;
(statearr_37094_37157[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_37094_37157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (9))){
var inst_37066 = (state_37077[(2)]);
var state_37077__$1 = state_37077;
var statearr_37095_37158 = state_37077__$1;
(statearr_37095_37158[(2)] = inst_37066);

(statearr_37095_37158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (5))){
var inst_37068 = cljs.core.async.timeout((300));
var state_37077__$1 = state_37077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37077__$1,(14),inst_37068);
} else {
if((state_val_37078 === (14))){
var inst_37070 = (state_37077[(2)]);
var state_37077__$1 = (function (){var statearr_37096 = state_37077;
(statearr_37096[(15)] = inst_37070);

return statearr_37096;
})();
var statearr_37097_37159 = state_37077__$1;
(statearr_37097_37159[(2)] = null);

(statearr_37097_37159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (10))){
var state_37077__$1 = state_37077;
var statearr_37098_37160 = state_37077__$1;
(statearr_37098_37160[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_37098_37160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37078 === (8))){
var inst_37061 = cljs.core.async.timeout((1000));
var state_37077__$1 = state_37077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37077__$1,(13),inst_37061);
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
});})(c__25042__auto___37146,state,active,result))
;
return ((function (switch__25019__auto__,c__25042__auto___37146,state,active,result){
return (function() {
var app$t8$main$render_board_$_state_machine__25020__auto__ = null;
var app$t8$main$render_board_$_state_machine__25020__auto____0 = (function (){
var statearr_37099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37099[(0)] = app$t8$main$render_board_$_state_machine__25020__auto__);

(statearr_37099[(1)] = (1));

return statearr_37099;
});
var app$t8$main$render_board_$_state_machine__25020__auto____1 = (function (state_37077){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_37077);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e37100){if((e37100 instanceof Object)){
var ex__25023__auto__ = e37100;
var statearr_37101_37161 = state_37077;
(statearr_37101_37161[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37100;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37162 = state_37077;
state_37077 = G__37162;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$render_board_$_state_machine__25020__auto__ = function(state_37077){
switch(arguments.length){
case 0:
return app$t8$main$render_board_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$render_board_$_state_machine__25020__auto____1.call(this,state_37077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$render_board_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$render_board_$_state_machine__25020__auto____0;
app$t8$main$render_board_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$render_board_$_state_machine__25020__auto____1;
return app$t8$main$render_board_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto___37146,state,active,result))
})();
var state__25044__auto__ = (function (){var statearr_37102 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_37102[(6)] = c__25042__auto___37146);

return statearr_37102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___37146,state,active,result))
);


app.t8.main.drawPlayground = ((function (state,active,result){
return (function app$t8$main$render_board_$_drawPlayground(){
var s = cljs.core.deref(state);
var ac = cljs.core.deref(active);
var r = cljs.core.deref(result);
var drawValue = ((function (s,ac,r,state,active,result){
return (function (y,x){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var pred__37103 = cljs.core._EQ_;
var expr__37104 = v;
if(cljs.core.truth_((function (){var G__37106 = new cljs.core.Keyword(null,"o","o",-1350007228);
var G__37107 = expr__37104;
return (pred__37103.cljs$core$IFn$_invoke$arity$2 ? pred__37103.cljs$core$IFn$_invoke$arity$2(G__37106,G__37107) : pred__37103.call(null,G__37106,G__37107));
})())){
return "O";
} else {
if(cljs.core.truth_((function (){var G__37108 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37109 = expr__37104;
return (pred__37103.cljs$core$IFn$_invoke$arity$2 ? pred__37103.cljs$core$IFn$_invoke$arity$2(G__37108,G__37109) : pred__37103.call(null,G__37108,G__37109));
})())){
return "X";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__37103,expr__37104,v,s,ac,r,state,active,result){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (pred__37103,expr__37104,v,s,ac,r,state,active,result){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.constantly(new cljs.core.Keyword(null,"x","x",2099068185)));
});})(pred__37103,expr__37104,v,s,ac,r,state,active,result))
);

return cljs.core.reset_BANG_(active,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref(active)))?new cljs.core.Keyword(null,"enemy","enemy",-956472047):new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__37103,expr__37104,v,s,ac,r,state,active,result))
], null),"O"], null);
}
}
});})(s,ac,r,state,active,result))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,ac,r,drawValue,state,active,result){
return (function (){
cljs.core.reset_BANG_(state,app.t8.board.board);

return cljs.core.reset_BANG_(active,new cljs.core.Keyword(null,"enemy","enemy",-956472047));
});})(s,ac,r,drawValue,state,active,result))
], null),"clear"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["active ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ac)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["actions ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (s,ac,r,drawValue,state,active,result){
return (function app$t8$main$render_board_$_drawPlayground_$_iter__37110(s__37111){
return (new cljs.core.LazySeq(null,((function (s,ac,r,drawValue,state,active,result){
return (function (){
var s__37111__$1 = s__37111;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37111__$1);
if(temp__5735__auto__){
var s__37111__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37111__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37111__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37113 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37112 = (0);
while(true){
if((i__37112 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37112);
cljs.core.chunk_append(b__37113,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__37163 = (i__37112 + (1));
i__37112 = G__37163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37113),app$t8$main$render_board_$_drawPlayground_$_iter__37110(cljs.core.chunk_rest(s__37111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37113),null);
}
} else {
var y = cljs.core.first(s__37111__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app$t8$main$render_board_$_drawPlayground_$_iter__37110(cljs.core.rest(s__37111__$2)));
}
} else {
return null;
}
break;
}
});})(s,ac,r,drawValue,state,active,result))
,null,null));
});})(s,ac,r,drawValue,state,active,result))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null)], null)], null);
});})(state,active,result))
;

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t8.main.drawPlayground], null),document.getElementById("playground"));
});
app.t8.main.main = (function app$t8$main$main(){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_37122){
var state_val_37123 = (state_37122[(1)]);
if((state_val_37123 === (1))){
var inst_37114 = [new cljs.core.Keyword(null,"learningRate","learningRate",2143591057),new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427)];
var inst_37115 = [0.7,(1)];
var inst_37116 = cljs.core.PersistentHashMap.fromArrays(inst_37114,inst_37115);
var inst_37117 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.t8.qlearning.model,inst_37116], 0));
var inst_37118 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_37117);
var inst_37119 = app.t8.main.background_train(inst_37118);
var inst_37120 = app.t8.main.render_board(inst_37118);
var state_37122__$1 = (function (){var statearr_37124 = state_37122;
(statearr_37124[(7)] = inst_37120);

(statearr_37124[(8)] = inst_37119);

return statearr_37124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37122__$1,null);
} else {
return null;
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$main_$_state_machine__25020__auto__ = null;
var app$t8$main$main_$_state_machine__25020__auto____0 = (function (){
var statearr_37125 = [null,null,null,null,null,null,null,null,null];
(statearr_37125[(0)] = app$t8$main$main_$_state_machine__25020__auto__);

(statearr_37125[(1)] = (1));

return statearr_37125;
});
var app$t8$main$main_$_state_machine__25020__auto____1 = (function (state_37122){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_37122);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e37126){if((e37126 instanceof Object)){
var ex__25023__auto__ = e37126;
var statearr_37127_37164 = state_37122;
(statearr_37127_37164[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37165 = state_37122;
state_37122 = G__37165;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$main_$_state_machine__25020__auto__ = function(state_37122){
switch(arguments.length){
case 0:
return app$t8$main$main_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$main_$_state_machine__25020__auto____1.call(this,state_37122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$main_$_state_machine__25020__auto____0;
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$main_$_state_machine__25020__auto____1;
return app$t8$main$main_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_37128 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_37128[(6)] = c__25042__auto__);

return statearr_37128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.main();

//# sourceMappingURL=app.t8.main.js.map
