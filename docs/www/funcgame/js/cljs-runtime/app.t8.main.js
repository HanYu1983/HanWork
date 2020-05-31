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
var map__25506 = ctx;
var map__25506__$1 = (((((!((map__25506 == null))))?(((((map__25506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25506):map__25506);
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var activePlayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203));
var win = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"win","win",-1624642689));
var draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var lose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"lose","lose",-1493527476));
var self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"self","self",-1547428899));
var possibleActions = app.t8.board.possibleActions(board);
var isSelf = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(activePlayer,new cljs.core.Keyword(null,"o","o",-1350007228));
if((cljs.core.count(possibleActions) === (0))){
var G__25692 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),app.t8.board.board,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"draw","draw",1358331674),(draw + (1)),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null)], null)], 0));
var G__25693 = (n__$1 - (1));
ctx = G__25692;
n__$1 = G__25693;
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
var G__25694 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1,new cljs.core.Keyword(null,"board","board",-1907017633),app.t8.board.board,new cljs.core.Keyword(null,"win","win",-1624642689),(cljs.core.truth_(isWin)?(win + (1)):win),new cljs.core.Keyword(null,"lose","lose",-1493527476),(cljs.core.truth_(isLose)?(lose + (1)):lose),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null)], null)], 0));
var G__25695 = (n__$1 - (1));
ctx = G__25694;
n__$1 = G__25695;
continue;
} else {
var selectAction = app.t8.qlearning.selectAction(brain__$1,board,possibleActions);
var nextBoard = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,selectAction,cljs.core.constantly(activePlayer));
var G__25696 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1,new cljs.core.Keyword(null,"board","board",-1907017633),nextBoard,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),activePlayer))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228)),new cljs.core.Keyword(null,"self","self",-1547428899),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),board,new cljs.core.Keyword(null,"action","action",-811238024),selectAction], null)], 0))], null)], 0));
var G__25697 = (n__$1 - (1));
ctx = G__25696;
n__$1 = G__25697;
continue;
}
} else {
var selectAction = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(possibleActions,cljs.core.rand_int(cljs.core.count(possibleActions)));
var nextBoard = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,selectAction,cljs.core.constantly(activePlayer));
var G__25698 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"brain","brain",428499577),brain,new cljs.core.Keyword(null,"board","board",-1907017633),nextBoard,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),activePlayer))?new cljs.core.Keyword(null,"x","x",2099068185):new cljs.core.Keyword(null,"o","o",-1350007228))], null)], 0));
var G__25699 = (n__$1 - (1));
ctx = G__25698;
n__$1 = G__25699;
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
return (function (state_25520){
var state_val_25521 = (state_25520[(1)]);
if((state_val_25521 === (1))){
var inst_25508 = cljs.core.deref(atomModel);
var inst_25509 = inst_25508;
var state_25520__$1 = (function (){var statearr_25522 = state_25520;
(statearr_25522[(7)] = inst_25509);

return statearr_25522;
})();
var statearr_25523_25700 = state_25520__$1;
(statearr_25523_25700[(2)] = null);

(statearr_25523_25700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25521 === (2))){
var inst_25511 = cljs.core.async.timeout((1000));
var state_25520__$1 = state_25520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25520__$1,(4),inst_25511);
} else {
if((state_val_25521 === (3))){
var inst_25518 = (state_25520[(2)]);
var state_25520__$1 = state_25520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25520__$1,inst_25518);
} else {
if((state_val_25521 === (4))){
var inst_25509 = (state_25520[(7)]);
var inst_25513 = (state_25520[(2)]);
var inst_25514 = app.t8.main.train(inst_25509,(50));
var inst_25515 = cljs.core.reset_BANG_(atomModel,inst_25514);
var inst_25509__$1 = inst_25514;
var state_25520__$1 = (function (){var statearr_25524 = state_25520;
(statearr_25524[(7)] = inst_25509__$1);

(statearr_25524[(8)] = inst_25513);

(statearr_25524[(9)] = inst_25515);

return statearr_25524;
})();
var statearr_25525_25701 = state_25520__$1;
(statearr_25525_25701[(2)] = null);

(statearr_25525_25701[(1)] = (2));


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
var statearr_25526 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25526[(0)] = app$t8$main$background_train_$_state_machine__25020__auto__);

(statearr_25526[(1)] = (1));

return statearr_25526;
});
var app$t8$main$background_train_$_state_machine__25020__auto____1 = (function (state_25520){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_25520);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object)){
var ex__25023__auto__ = e25527;
var statearr_25528_25702 = state_25520;
(statearr_25528_25702[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25703 = state_25520;
state_25520 = G__25703;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_train_$_state_machine__25020__auto__ = function(state_25520){
switch(arguments.length){
case 0:
return app$t8$main$background_train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_train_$_state_machine__25020__auto____1.call(this,state_25520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_train_$_state_machine__25020__auto____0;
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_train_$_state_machine__25020__auto____1;
return app$t8$main$background_train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_25529 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_25529[(6)] = c__25042__auto__);

return statearr_25529;
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
return (function (state_25577){
var state_val_25578 = (state_25577[(1)]);
if((state_val_25578 === (1))){
var state_25577__$1 = state_25577;
var statearr_25579_25704 = state_25577__$1;
(statearr_25579_25704[(2)] = null);

(statearr_25579_25704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (2))){
var inst_25531 = cljs.core.async.timeout((1000));
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25577__$1,(4),inst_25531);
} else {
if((state_val_25578 === (3))){
var inst_25575 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25577__$1,inst_25575);
} else {
if((state_val_25578 === (4))){
var inst_25533 = (state_25577[(2)]);
var inst_25534 = cljs.core.deref(atomModel);
var inst_25535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25537 = [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),null];
var inst_25538 = (new cljs.core.PersistentVector(null,3,(5),inst_25536,inst_25537,null));
var inst_25539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25540 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),null];
var inst_25541 = (new cljs.core.PersistentVector(null,3,(5),inst_25539,inst_25540,null));
var inst_25542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25543 = [null,null,null];
var inst_25544 = (new cljs.core.PersistentVector(null,3,(5),inst_25542,inst_25543,null));
var inst_25545 = [inst_25538,inst_25541,inst_25544];
var inst_25546 = (new cljs.core.PersistentVector(null,3,(5),inst_25535,inst_25545,null));
var inst_25547 = app.t8.board.possibleActions(inst_25546);
var inst_25552 = (function (){var qmodel = inst_25534;
var board = inst_25546;
var possibleActions = inst_25547;
return ((function (qmodel,board,possibleActions,inst_25533,inst_25534,inst_25535,inst_25536,inst_25537,inst_25538,inst_25539,inst_25540,inst_25541,inst_25542,inst_25543,inst_25544,inst_25545,inst_25546,inst_25547,state_val_25578,c__25042__auto__){
return (function app$t8$main$background_test_$_iter__25548(s__25549){
return (new cljs.core.LazySeq(null,((function (qmodel,board,possibleActions,inst_25533,inst_25534,inst_25535,inst_25536,inst_25537,inst_25538,inst_25539,inst_25540,inst_25541,inst_25542,inst_25543,inst_25544,inst_25545,inst_25546,inst_25547,state_val_25578,c__25042__auto__){
return (function (){
var s__25549__$1 = s__25549;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25549__$1);
if(temp__5735__auto__){
var s__25549__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25549__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__25549__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__25551 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__25550 = (0);
while(true){
if((i__25550 < size__4522__auto__)){
var vec__25580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__25550);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25580,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25580,(1),null);
cljs.core.chunk_append(b__25551,cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action,value], 0)));

var G__25705 = (i__25550 + (1));
i__25550 = G__25705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25551),app$t8$main$background_test_$_iter__25548(cljs.core.chunk_rest(s__25549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25551),null);
}
} else {
var vec__25583 = cljs.core.first(s__25549__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25583,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25583,(1),null);
return cljs.core.cons(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action,value], 0)),app$t8$main$background_test_$_iter__25548(cljs.core.rest(s__25549__$2)));
}
} else {
return null;
}
break;
}
});})(qmodel,board,possibleActions,inst_25533,inst_25534,inst_25535,inst_25536,inst_25537,inst_25538,inst_25539,inst_25540,inst_25541,inst_25542,inst_25543,inst_25544,inst_25545,inst_25546,inst_25547,state_val_25578,c__25042__auto__))
,null,null));
});
;})(qmodel,board,possibleActions,inst_25533,inst_25534,inst_25535,inst_25536,inst_25537,inst_25538,inst_25539,inst_25540,inst_25541,inst_25542,inst_25543,inst_25544,inst_25545,inst_25546,inst_25547,state_val_25578,c__25042__auto__))
})();
var inst_25553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25556 = [null,null,null];
var inst_25557 = (new cljs.core.PersistentVector(null,3,(5),inst_25555,inst_25556,null));
var inst_25558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25559 = [null,null,null];
var inst_25560 = (new cljs.core.PersistentVector(null,3,(5),inst_25558,inst_25559,null));
var inst_25561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25562 = [null,null,null];
var inst_25563 = (new cljs.core.PersistentVector(null,3,(5),inst_25561,inst_25562,null));
var inst_25564 = [inst_25557,inst_25560,inst_25563];
var inst_25565 = (new cljs.core.PersistentVector(null,3,(5),inst_25554,inst_25564,null));
var inst_25566 = [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),inst_25565];
var inst_25567 = (new cljs.core.PersistentVector(null,2,(5),inst_25553,inst_25566,null));
var inst_25568 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_25534,inst_25567);
var inst_25569 = (inst_25552.cljs$core$IFn$_invoke$arity$1 ? inst_25552.cljs$core$IFn$_invoke$arity$1(inst_25568) : inst_25552.call(null,inst_25568));
var inst_25570 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_25569], 0));
var inst_25571 = app.t8.qlearning.bestAction(inst_25534,inst_25546,inst_25547);
var inst_25572 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["best:",inst_25571], 0));
var state_25577__$1 = (function (){var statearr_25586 = state_25577;
(statearr_25586[(7)] = inst_25533);

(statearr_25586[(8)] = inst_25570);

(statearr_25586[(9)] = inst_25572);

return statearr_25586;
})();
var statearr_25587_25706 = state_25577__$1;
(statearr_25587_25706[(2)] = null);

(statearr_25587_25706[(1)] = (2));


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
var statearr_25588 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25588[(0)] = app$t8$main$background_test_$_state_machine__25020__auto__);

(statearr_25588[(1)] = (1));

return statearr_25588;
});
var app$t8$main$background_test_$_state_machine__25020__auto____1 = (function (state_25577){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_25577);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e25589){if((e25589 instanceof Object)){
var ex__25023__auto__ = e25589;
var statearr_25590_25707 = state_25577;
(statearr_25590_25707[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25708 = state_25577;
state_25577 = G__25708;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_test_$_state_machine__25020__auto__ = function(state_25577){
switch(arguments.length){
case 0:
return app$t8$main$background_test_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_test_$_state_machine__25020__auto____1.call(this,state_25577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_test_$_state_machine__25020__auto____0;
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_test_$_state_machine__25020__auto____1;
return app$t8$main$background_test_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_25591 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_25591[(6)] = c__25042__auto__);

return statearr_25591;
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
var c__25042__auto___25709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___25709,state,active,result){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto___25709,state,active,result){
return (function (state_25640){
var state_val_25641 = (state_25640[(1)]);
if((state_val_25641 === (7))){
var inst_25603 = (state_25640[(7)]);
var inst_25609 = (state_25640[(8)]);
var inst_25601 = (state_25640[(9)]);
var inst_25599 = (state_25640[(10)]);
var inst_25596 = (state_25640[(11)]);
var inst_25613 = (function (){var pred__25593 = cljs.core._EQ_;
var expr__25594 = inst_25596;
var brain = inst_25599;
var actions = inst_25601;
var bestAction = inst_25603;
var _ = inst_25609;
return ((function (pred__25593,expr__25594,brain,actions,bestAction,_,inst_25603,inst_25609,inst_25601,inst_25599,inst_25596,state_val_25641,c__25042__auto___25709,state,active,result){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,bestAction,cljs.core.constantly(new cljs.core.Keyword(null,"o","o",-1350007228)));
});
;})(pred__25593,expr__25594,brain,actions,bestAction,_,inst_25603,inst_25609,inst_25601,inst_25599,inst_25596,state_val_25641,c__25042__auto___25709,state,active,result))
})();
var inst_25614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_25613);
var inst_25615 = cljs.core.deref(active);
var inst_25616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_25615);
var state_25640__$1 = (function (){var statearr_25642 = state_25640;
(statearr_25642[(12)] = inst_25614);

return statearr_25642;
})();
if(inst_25616){
var statearr_25643_25710 = state_25640__$1;
(statearr_25643_25710[(1)] = (10));

} else {
var statearr_25644_25711 = state_25640__$1;
(statearr_25644_25711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (1))){
var state_25640__$1 = state_25640;
var statearr_25645_25712 = state_25640__$1;
(statearr_25645_25712[(2)] = null);

(statearr_25645_25712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (4))){
var inst_25601 = (state_25640[(9)]);
var inst_25599 = (state_25640[(10)]);
var inst_25599__$1 = cljs.core.deref(atomModel);
var inst_25600 = cljs.core.deref(state);
var inst_25601__$1 = app.t8.board.possibleActions(inst_25600);
var inst_25602 = cljs.core.deref(state);
var inst_25603 = app.t8.qlearning.bestAction(inst_25599__$1,inst_25602,inst_25601__$1);
var inst_25604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25605 = cljs.core.deref(state);
var inst_25606 = [new cljs.core.Keyword(null,"qtable","qtable",-1752712086),inst_25605];
var inst_25607 = (new cljs.core.PersistentVector(null,2,(5),inst_25604,inst_25606,null));
var inst_25608 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_25599__$1,inst_25607);
var inst_25609 = cljs.core.reset_BANG_(result,inst_25608);
var inst_25610 = cljs.core.count(inst_25601__$1);
var inst_25611 = (inst_25610 > (0));
var state_25640__$1 = (function (){var statearr_25646 = state_25640;
(statearr_25646[(7)] = inst_25603);

(statearr_25646[(8)] = inst_25609);

(statearr_25646[(9)] = inst_25601__$1);

(statearr_25646[(10)] = inst_25599__$1);

return statearr_25646;
})();
if(cljs.core.truth_(inst_25611)){
var statearr_25647_25713 = state_25640__$1;
(statearr_25647_25713[(1)] = (7));

} else {
var statearr_25648_25714 = state_25640__$1;
(statearr_25648_25714[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (13))){
var inst_25626 = (state_25640[(2)]);
var state_25640__$1 = (function (){var statearr_25649 = state_25640;
(statearr_25649[(13)] = inst_25626);

return statearr_25649;
})();
var statearr_25650_25715 = state_25640__$1;
(statearr_25650_25715[(2)] = null);

(statearr_25650_25715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (6))){
var inst_25636 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25651_25716 = state_25640__$1;
(statearr_25651_25716[(2)] = inst_25636);

(statearr_25651_25716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (3))){
var inst_25638 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25640__$1,inst_25638);
} else {
if((state_val_25641 === (12))){
var inst_25620 = (state_25640[(2)]);
var inst_25621 = cljs.core.reset_BANG_(active,inst_25620);
var state_25640__$1 = (function (){var statearr_25652 = state_25640;
(statearr_25652[(14)] = inst_25621);

return statearr_25652;
})();
var statearr_25653_25717 = state_25640__$1;
(statearr_25653_25717[(2)] = null);

(statearr_25653_25717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (2))){
var inst_25596 = (state_25640[(11)]);
var inst_25596__$1 = cljs.core.deref(active);
var inst_25597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),inst_25596__$1);
var state_25640__$1 = (function (){var statearr_25654 = state_25640;
(statearr_25654[(11)] = inst_25596__$1);

return statearr_25654;
})();
if(inst_25597){
var statearr_25655_25718 = state_25640__$1;
(statearr_25655_25718[(1)] = (4));

} else {
var statearr_25656_25719 = state_25640__$1;
(statearr_25656_25719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (11))){
var state_25640__$1 = state_25640;
var statearr_25657_25720 = state_25640__$1;
(statearr_25657_25720[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_25657_25720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (9))){
var inst_25629 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25658_25721 = state_25640__$1;
(statearr_25658_25721[(2)] = inst_25629);

(statearr_25658_25721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (5))){
var inst_25631 = cljs.core.async.timeout((300));
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25640__$1,(14),inst_25631);
} else {
if((state_val_25641 === (14))){
var inst_25633 = (state_25640[(2)]);
var state_25640__$1 = (function (){var statearr_25659 = state_25640;
(statearr_25659[(15)] = inst_25633);

return statearr_25659;
})();
var statearr_25660_25722 = state_25640__$1;
(statearr_25660_25722[(2)] = null);

(statearr_25660_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (10))){
var state_25640__$1 = state_25640;
var statearr_25661_25723 = state_25640__$1;
(statearr_25661_25723[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_25661_25723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (8))){
var inst_25624 = cljs.core.async.timeout((1000));
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25640__$1,(13),inst_25624);
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
});})(c__25042__auto___25709,state,active,result))
;
return ((function (switch__25019__auto__,c__25042__auto___25709,state,active,result){
return (function() {
var app$t8$main$render_board_$_state_machine__25020__auto__ = null;
var app$t8$main$render_board_$_state_machine__25020__auto____0 = (function (){
var statearr_25662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25662[(0)] = app$t8$main$render_board_$_state_machine__25020__auto__);

(statearr_25662[(1)] = (1));

return statearr_25662;
});
var app$t8$main$render_board_$_state_machine__25020__auto____1 = (function (state_25640){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_25640);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e25663){if((e25663 instanceof Object)){
var ex__25023__auto__ = e25663;
var statearr_25664_25724 = state_25640;
(statearr_25664_25724[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25725 = state_25640;
state_25640 = G__25725;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$render_board_$_state_machine__25020__auto__ = function(state_25640){
switch(arguments.length){
case 0:
return app$t8$main$render_board_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$render_board_$_state_machine__25020__auto____1.call(this,state_25640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$render_board_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$render_board_$_state_machine__25020__auto____0;
app$t8$main$render_board_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$render_board_$_state_machine__25020__auto____1;
return app$t8$main$render_board_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto___25709,state,active,result))
})();
var state__25044__auto__ = (function (){var statearr_25665 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_25665[(6)] = c__25042__auto___25709);

return statearr_25665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___25709,state,active,result))
);


app.t8.main.drawPlayground = ((function (state,active,result){
return (function app$t8$main$render_board_$_drawPlayground(){
var s = cljs.core.deref(state);
var ac = cljs.core.deref(active);
var r = cljs.core.deref(result);
var drawValue = ((function (s,ac,r,state,active,result){
return (function (y,x){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var pred__25666 = cljs.core._EQ_;
var expr__25667 = v;
if(cljs.core.truth_((function (){var G__25669 = new cljs.core.Keyword(null,"o","o",-1350007228);
var G__25670 = expr__25667;
return (pred__25666.cljs$core$IFn$_invoke$arity$2 ? pred__25666.cljs$core$IFn$_invoke$arity$2(G__25669,G__25670) : pred__25666.call(null,G__25669,G__25670));
})())){
return "O";
} else {
if(cljs.core.truth_((function (){var G__25671 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__25672 = expr__25667;
return (pred__25666.cljs$core$IFn$_invoke$arity$2 ? pred__25666.cljs$core$IFn$_invoke$arity$2(G__25671,G__25672) : pred__25666.call(null,G__25671,G__25672));
})())){
return "X";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__25666,expr__25667,v,s,ac,r,state,active,result){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (pred__25666,expr__25667,v,s,ac,r,state,active,result){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.constantly(new cljs.core.Keyword(null,"x","x",2099068185)));
});})(pred__25666,expr__25667,v,s,ac,r,state,active,result))
);

return cljs.core.reset_BANG_(active,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref(active)))?new cljs.core.Keyword(null,"enemy","enemy",-956472047):new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__25666,expr__25667,v,s,ac,r,state,active,result))
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
return (function app$t8$main$render_board_$_drawPlayground_$_iter__25673(s__25674){
return (new cljs.core.LazySeq(null,((function (s,ac,r,drawValue,state,active,result){
return (function (){
var s__25674__$1 = s__25674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25674__$1);
if(temp__5735__auto__){
var s__25674__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25674__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__25674__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__25676 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__25675 = (0);
while(true){
if((i__25675 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__25675);
cljs.core.chunk_append(b__25676,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__25726 = (i__25675 + (1));
i__25675 = G__25726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25676),app$t8$main$render_board_$_drawPlayground_$_iter__25673(cljs.core.chunk_rest(s__25674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25676),null);
}
} else {
var y = cljs.core.first(s__25674__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app$t8$main$render_board_$_drawPlayground_$_iter__25673(cljs.core.rest(s__25674__$2)));
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
return (function (state_25685){
var state_val_25686 = (state_25685[(1)]);
if((state_val_25686 === (1))){
var inst_25677 = [new cljs.core.Keyword(null,"learningRate","learningRate",2143591057),new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427)];
var inst_25678 = [0.7,(1)];
var inst_25679 = cljs.core.PersistentHashMap.fromArrays(inst_25677,inst_25678);
var inst_25680 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.t8.qlearning.model,inst_25679], 0));
var inst_25681 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_25680);
var inst_25682 = app.t8.main.background_train(inst_25681);
var inst_25683 = app.t8.main.render_board(inst_25681);
var state_25685__$1 = (function (){var statearr_25687 = state_25685;
(statearr_25687[(7)] = inst_25682);

(statearr_25687[(8)] = inst_25683);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25685__$1,null);
} else {
return null;
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$main_$_state_machine__25020__auto__ = null;
var app$t8$main$main_$_state_machine__25020__auto____0 = (function (){
var statearr_25688 = [null,null,null,null,null,null,null,null,null];
(statearr_25688[(0)] = app$t8$main$main_$_state_machine__25020__auto__);

(statearr_25688[(1)] = (1));

return statearr_25688;
});
var app$t8$main$main_$_state_machine__25020__auto____1 = (function (state_25685){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_25685);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e25689){if((e25689 instanceof Object)){
var ex__25023__auto__ = e25689;
var statearr_25690_25727 = state_25685;
(statearr_25690_25727[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25728 = state_25685;
state_25685 = G__25728;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$main_$_state_machine__25020__auto__ = function(state_25685){
switch(arguments.length){
case 0:
return app$t8$main$main_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$main_$_state_machine__25020__auto____1.call(this,state_25685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$main_$_state_machine__25020__auto____0;
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$main_$_state_machine__25020__auto____1;
return app$t8$main$main_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_25691 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_25691[(6)] = c__25042__auto__);

return statearr_25691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.main();

//# sourceMappingURL=app.t8.main.js.map
