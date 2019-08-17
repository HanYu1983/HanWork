goog.provide('app2.main');
goog.require('cljs.core');
goog.require('app2.brain');
goog.require('cljs.core.async');
goog.require('reagent.core');
app2.main.board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null))));
app2.main.lines = (function (){var hs = (function (){var iter__4523__auto__ = (function app2$main$iter__26348(s__26349){
return (new cljs.core.LazySeq(null,(function (){
var s__26349__$1 = s__26349;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26349__$1);
if(temp__5735__auto__){
var s__26349__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26349__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26349__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26351 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26350 = (0);
while(true){
if((i__26350 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26350);
cljs.core.chunk_append(b__26351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null));

var G__26698 = (i__26350 + (1));
i__26350 = G__26698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26351),app2$main$iter__26348(cljs.core.chunk_rest(s__26349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26351),null);
}
} else {
var x = cljs.core.first(s__26349__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null),app2$main$iter__26348(cljs.core.rest(s__26349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var vs = (function (){var iter__4523__auto__ = ((function (hs){
return (function app2$main$iter__26352(s__26353){
return (new cljs.core.LazySeq(null,((function (hs){
return (function (){
var s__26353__$1 = s__26353;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26353__$1);
if(temp__5735__auto__){
var s__26353__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26353__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26353__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26355 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26354 = (0);
while(true){
if((i__26354 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26354);
cljs.core.chunk_append(b__26355,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null));

var G__26699 = (i__26354 + (1));
i__26354 = G__26699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26355),app2$main$iter__26352(cljs.core.chunk_rest(s__26353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26355),null);
}
} else {
var y = cljs.core.first(s__26353__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null),app2$main$iter__26352(cljs.core.rest(s__26353__$2)));
}
} else {
return null;
}
break;
}
});})(hs))
,null,null));
});})(hs))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var x1 = (function (){var iter__4523__auto__ = ((function (hs,vs){
return (function app2$main$iter__26356(s__26357){
return (new cljs.core.LazySeq(null,((function (hs,vs){
return (function (){
var s__26357__$1 = s__26357;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26357__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__26357__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function app2$main$iter__26356_$_iter__26358(s__26359){
return (new cljs.core.LazySeq(null,((function (s__26357__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function (){
var s__26359__$1 = s__26359;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26359__$1);
if(temp__5735__auto____$1){
var s__26359__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26359__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26359__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26361 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26360 = (0);
while(true){
if((i__26360 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26360);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__26361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__26700 = (i__26360 + (1));
i__26360 = G__26700;
continue;
} else {
var G__26701 = (i__26360 + (1));
i__26360 = G__26701;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26361),app2$main$iter__26356_$_iter__26358(cljs.core.chunk_rest(s__26359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26361),null);
}
} else {
var y = cljs.core.first(s__26359__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__26356_$_iter__26358(cljs.core.rest(s__26359__$2)));
} else {
var G__26702 = cljs.core.rest(s__26359__$2);
s__26359__$1 = G__26702;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26357__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
,null,null));
});})(s__26357__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__26356(cljs.core.rest(s__26357__$1)));
} else {
var G__26703 = cljs.core.rest(s__26357__$1);
s__26357__$1 = G__26703;
continue;
}
} else {
return null;
}
break;
}
});})(hs,vs))
,null,null));
});})(hs,vs))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var x2 = (function (){var iter__4523__auto__ = ((function (hs,vs,x1){
return (function app2$main$iter__26362(s__26363){
return (new cljs.core.LazySeq(null,((function (hs,vs,x1){
return (function (){
var s__26363__$1 = s__26363;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26363__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__26363__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function app2$main$iter__26362_$_iter__26364(s__26365){
return (new cljs.core.LazySeq(null,((function (s__26363__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function (){
var s__26365__$1 = s__26365;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26365__$1);
if(temp__5735__auto____$1){
var s__26365__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26365__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26365__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26367 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26366 = (0);
while(true){
if((i__26366 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26366);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
cljs.core.chunk_append(b__26367,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__26704 = (i__26366 + (1));
i__26366 = G__26704;
continue;
} else {
var G__26705 = (i__26366 + (1));
i__26366 = G__26705;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26367),app2$main$iter__26362_$_iter__26364(cljs.core.chunk_rest(s__26365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26367),null);
}
} else {
var y = cljs.core.first(s__26365__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__26362_$_iter__26364(cljs.core.rest(s__26365__$2)));
} else {
var G__26706 = cljs.core.rest(s__26365__$2);
s__26365__$1 = G__26706;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26363__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
,null,null));
});})(s__26363__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__26362(cljs.core.rest(s__26363__$1)));
} else {
var G__26707 = cljs.core.rest(s__26363__$1);
s__26363__$1 = G__26707;
continue;
}
} else {
return null;
}
break;
}
});})(hs,vs,x1))
,null,null));
});})(hs,vs,x1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(hs,vs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2], null)], 0));
})();
app2.main.checkWin = (function app2$main$checkWin(board,player){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,player),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,pos);
}),line));
}),app2.main.lines));
});
app2.main.possibleActions = (function app2$main$possibleActions(board){
var iter__4523__auto__ = (function app2$main$possibleActions_$_iter__26368(s__26369){
return (new cljs.core.LazySeq(null,(function (){
var s__26369__$1 = s__26369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26369__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__26369__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app2$main$possibleActions_$_iter__26368_$_iter__26370(s__26371){
return (new cljs.core.LazySeq(null,((function (s__26369__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__26371__$1 = s__26371;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26371__$1);
if(temp__5735__auto____$1){
var s__26371__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26371__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26371__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26373 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26372 = (0);
while(true){
if((i__26372 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26372);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
cljs.core.chunk_append(b__26373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__26708 = (i__26372 + (1));
i__26372 = G__26708;
continue;
} else {
var G__26709 = (i__26372 + (1));
i__26372 = G__26709;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26373),app2$main$possibleActions_$_iter__26368_$_iter__26370(cljs.core.chunk_rest(s__26371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26373),null);
}
} else {
var y = cljs.core.first(s__26371__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$possibleActions_$_iter__26368_$_iter__26370(cljs.core.rest(s__26371__$2)));
} else {
var G__26710 = cljs.core.rest(s__26371__$2);
s__26371__$1 = G__26710;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26369__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__26369__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$possibleActions_$_iter__26368(cljs.core.rest(s__26369__$1)));
} else {
var G__26711 = cljs.core.rest(s__26369__$1);
s__26369__$1 = G__26711;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});
app2.main.log = (function app2$main$log(a){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));

return a;
});
app2.main.main = (function app2$main$main(){
var userInput = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__25042__auto___26712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___26712,userInput,data){
return (function (){
var f__25043__auto__ = (function (){var switch__24997__auto__ = ((function (c__25042__auto___26712,userInput,data){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26513 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26519_26713 = state_26517__$1;
(statearr_26519_26713[(2)] = inst_26513);

(statearr_26519_26713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (20))){
var inst_26505 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26520_26714 = state_26517__$1;
(statearr_26520_26714[(2)] = inst_26505);

(statearr_26520_26714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (1))){
var inst_26374 = [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_26375 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_26376 = [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)];
var inst_26377 = cljs.core.PersistentHashMap.fromArrays(inst_26375,inst_26376);
var inst_26378 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_26379 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26380 = [app2.brain.brain];
var inst_26381 = cljs.core.PersistentHashMap.fromArrays(inst_26379,inst_26380);
var inst_26382 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26383 = [app2.brain.brain];
var inst_26384 = cljs.core.PersistentHashMap.fromArrays(inst_26382,inst_26383);
var inst_26385 = [inst_26381,inst_26384];
var inst_26386 = cljs.core.PersistentHashMap.fromArrays(inst_26378,inst_26385);
var inst_26387 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_26388 = [(0),(0),(0)];
var inst_26389 = cljs.core.PersistentHashMap.fromArrays(inst_26387,inst_26388);
var inst_26390 = [inst_26377,new cljs.core.Keyword(null,"player","player",-97687400),inst_26386,app2.main.board,inst_26389];
var inst_26391 = cljs.core.PersistentHashMap.fromArrays(inst_26374,inst_26390);
var inst_26392 = inst_26391;
var state_26517__$1 = (function (){var statearr_26521 = state_26517;
(statearr_26521[(7)] = inst_26392);

return statearr_26521;
})();
var statearr_26522_26715 = state_26517__$1;
(statearr_26522_26715[(2)] = null);

(statearr_26522_26715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (4))){
var inst_26398 = (state_26517[(8)]);
var inst_26401 = (state_26517[(2)]);
var inst_26405 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_26398);
var state_26517__$1 = (function (){var statearr_26523 = state_26517;
(statearr_26523[(9)] = inst_26401);

return statearr_26523;
})();
if(inst_26405){
var statearr_26524_26716 = state_26517__$1;
(statearr_26524_26716[(1)] = (5));

} else {
var statearr_26525_26717 = state_26517__$1;
(statearr_26525_26717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (15))){
var inst_26418 = (state_26517[(10)]);
var inst_26392 = (state_26517[(7)]);
var inst_26424 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_26425 = [app2.main.board,inst_26418];
var inst_26426 = cljs.core.PersistentHashMap.fromArrays(inst_26424,inst_26425);
var inst_26427 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26392,inst_26426], 0));
var inst_26428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26429 = [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_26430 = (new cljs.core.PersistentVector(null,2,(5),inst_26428,inst_26429,null));
var inst_26431 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26427,inst_26430,cljs.core.inc);
var inst_26432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26433 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26434 = (new cljs.core.PersistentVector(null,3,(5),inst_26432,inst_26433,null));
var inst_26435 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26431,inst_26434,app2.brain.clearState);
var inst_26436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26437 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26438 = (new cljs.core.PersistentVector(null,3,(5),inst_26436,inst_26437,null));
var inst_26439 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26435,inst_26438,app2.brain.clearState);
var inst_26392__$1 = inst_26439;
var state_26517__$1 = (function (){var statearr_26526 = state_26517;
(statearr_26526[(7)] = inst_26392__$1);

return statearr_26526;
})();
var statearr_26527_26718 = state_26517__$1;
(statearr_26527_26718[(2)] = null);

(statearr_26527_26718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (21))){
var inst_26420 = (state_26517[(11)]);
var inst_26418 = (state_26517[(10)]);
var inst_26413 = (state_26517[(12)]);
var inst_26451 = (state_26517[(13)]);
var inst_26419 = (state_26517[(14)]);
var inst_26392 = (state_26517[(7)]);
var inst_26446 = (state_26517[(15)]);
var inst_26456 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(10));
var inst_26457 = app2.brain.updateR(inst_26451,inst_26456);
var inst_26458 = app2.brain.updateQ(inst_26457,inst_26419,inst_26446,inst_26420);
var inst_26459 = app2.brain.clearState(inst_26458);
var inst_26460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26461 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_26418,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26462 = (new cljs.core.PersistentVector(null,3,(5),inst_26460,inst_26461,null));
var inst_26463 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26392,inst_26462);
var inst_26464 = (- (100));
var inst_26465 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_26464);
var inst_26466 = app2.brain.updateR(inst_26463,inst_26465);
var inst_26467 = app2.brain.updateQ(inst_26466,null,null,inst_26420);
var inst_26468 = app2.brain.clearState(inst_26467);
var inst_26469 = cljs.core.reset_BANG_(data,inst_26392);
var inst_26470 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_26471 = [app2.main.board,inst_26418];
var inst_26472 = cljs.core.PersistentHashMap.fromArrays(inst_26470,inst_26471);
var inst_26473 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26392,inst_26472], 0));
var inst_26474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26475 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_26413,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26476 = (new cljs.core.PersistentVector(null,3,(5),inst_26474,inst_26475,null));
var inst_26477 = cljs.core.constantly(inst_26459);
var inst_26478 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26473,inst_26476,inst_26477);
var inst_26479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26480 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_26418,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26481 = (new cljs.core.PersistentVector(null,3,(5),inst_26479,inst_26480,null));
var inst_26482 = cljs.core.constantly(inst_26468);
var inst_26483 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26478,inst_26481,inst_26482);
var inst_26484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26485 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_26413];
var inst_26486 = (new cljs.core.PersistentVector(null,2,(5),inst_26484,inst_26485,null));
var inst_26487 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26483,inst_26486,cljs.core.inc);
var inst_26392__$1 = inst_26487;
var state_26517__$1 = (function (){var statearr_26528 = state_26517;
(statearr_26528[(16)] = inst_26469);

(statearr_26528[(7)] = inst_26392__$1);

return statearr_26528;
})();
var statearr_26529_26719 = state_26517__$1;
(statearr_26529_26719[(2)] = null);

(statearr_26529_26719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (13))){
var state_26517__$1 = state_26517;
var statearr_26530_26720 = state_26517__$1;
(statearr_26530_26720[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_26530_26720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (22))){
var inst_26418 = (state_26517[(10)]);
var inst_26413 = (state_26517[(12)]);
var inst_26453 = (state_26517[(17)]);
var inst_26451 = (state_26517[(13)]);
var inst_26392 = (state_26517[(7)]);
var inst_26490 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(1));
var inst_26491 = app2.brain.updateR(inst_26451,inst_26490);
var inst_26492 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_26493 = [inst_26453,inst_26418];
var inst_26494 = cljs.core.PersistentHashMap.fromArrays(inst_26492,inst_26493);
var inst_26495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26392,inst_26494], 0));
var inst_26496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26497 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_26413,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26498 = (new cljs.core.PersistentVector(null,3,(5),inst_26496,inst_26497,null));
var inst_26499 = cljs.core.constantly(inst_26491);
var inst_26500 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26495,inst_26498,inst_26499);
var inst_26392__$1 = inst_26500;
var state_26517__$1 = (function (){var statearr_26531 = state_26517;
(statearr_26531[(7)] = inst_26392__$1);

return statearr_26531;
})();
var statearr_26532_26721 = state_26517__$1;
(statearr_26532_26721[(2)] = null);

(statearr_26532_26721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (6))){
var inst_26398 = (state_26517[(8)]);
var inst_26411 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ai","ai",760454697),inst_26398);
var state_26517__$1 = state_26517;
if(inst_26411){
var statearr_26533_26722 = state_26517__$1;
(statearr_26533_26722[(1)] = (9));

} else {
var statearr_26534_26723 = state_26517__$1;
(statearr_26534_26723[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (17))){
var inst_26507 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26535_26724 = state_26517__$1;
(statearr_26535_26724[(2)] = inst_26507);

(statearr_26535_26724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (3))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (12))){
var state_26517__$1 = state_26517;
var statearr_26536_26725 = state_26517__$1;
(statearr_26536_26725[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_26536_26725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (2))){
var inst_26392 = (state_26517[(7)]);
var inst_26394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26395 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_26392);
var inst_26396 = [new cljs.core.Keyword(null,"players","players",-1361554569),inst_26395];
var inst_26397 = (new cljs.core.PersistentVector(null,2,(5),inst_26394,inst_26396,null));
var inst_26398 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26392,inst_26397);
var inst_26399 = cljs.core.async.timeout((10));
var state_26517__$1 = (function (){var statearr_26537 = state_26517;
(statearr_26537[(8)] = inst_26398);

return statearr_26537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26517__$1,(4),inst_26399);
} else {
if((state_val_26518 === (23))){
var inst_26503 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26538_26726 = state_26517__$1;
(statearr_26538_26726[(2)] = inst_26503);

(statearr_26538_26726[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (19))){
var inst_26445 = (state_26517[(18)]);
var inst_26420 = (state_26517[(11)]);
var inst_26413 = (state_26517[(12)]);
var inst_26453 = (state_26517[(17)]);
var inst_26419 = (state_26517[(14)]);
var inst_26446 = (state_26517[(15)]);
var inst_26451 = app2.brain.updateQ(inst_26445,inst_26419,inst_26446,inst_26420);
var inst_26452 = cljs.core.constantly(inst_26413);
var inst_26453__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_26419,inst_26446,inst_26452);
var inst_26454 = app2.main.checkWin(inst_26453__$1,inst_26413);
var state_26517__$1 = (function (){var statearr_26539 = state_26517;
(statearr_26539[(17)] = inst_26453__$1);

(statearr_26539[(13)] = inst_26451);

return statearr_26539;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26540_26727 = state_26517__$1;
(statearr_26540_26727[(1)] = (21));

} else {
var statearr_26541_26728 = state_26517__$1;
(statearr_26541_26728[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (11))){
var inst_26511 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26542_26729 = state_26517__$1;
(statearr_26542_26729[(2)] = inst_26511);

(statearr_26542_26729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (9))){
var inst_26413 = (state_26517[(12)]);
var inst_26392 = (state_26517[(7)]);
var inst_26413__$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_26392);
var inst_26414 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26413__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var state_26517__$1 = (function (){var statearr_26543 = state_26517;
(statearr_26543[(12)] = inst_26413__$1);

return statearr_26543;
})();
if(inst_26414){
var statearr_26544_26730 = state_26517__$1;
(statearr_26544_26730[(1)] = (12));

} else {
var statearr_26545_26731 = state_26517__$1;
(statearr_26545_26731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (5))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26517__$1,(8),userInput);
} else {
if((state_val_26518 === (14))){
var inst_26420 = (state_26517[(11)]);
var inst_26419 = (state_26517[(14)]);
var inst_26392 = (state_26517[(7)]);
var inst_26418 = (state_26517[(2)]);
var inst_26419__$1 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(inst_26392);
var inst_26420__$1 = app2.main.possibleActions(inst_26419__$1);
var inst_26421 = cljs.core.count(inst_26420__$1);
var inst_26422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_26421);
var state_26517__$1 = (function (){var statearr_26547 = state_26517;
(statearr_26547[(11)] = inst_26420__$1);

(statearr_26547[(10)] = inst_26418);

(statearr_26547[(14)] = inst_26419__$1);

return statearr_26547;
})();
if(inst_26422){
var statearr_26548_26732 = state_26517__$1;
(statearr_26548_26732[(1)] = (15));

} else {
var statearr_26549_26733 = state_26517__$1;
(statearr_26549_26733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (16))){
var inst_26445 = (state_26517[(18)]);
var inst_26420 = (state_26517[(11)]);
var inst_26413 = (state_26517[(12)]);
var inst_26419 = (state_26517[(14)]);
var inst_26392 = (state_26517[(7)]);
var inst_26446 = (state_26517[(15)]);
var inst_26442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26443 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_26413,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26444 = (new cljs.core.PersistentVector(null,3,(5),inst_26442,inst_26443,null));
var inst_26445__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26392,inst_26444);
var inst_26446__$1 = app2.brain.selectAction(inst_26445__$1,inst_26419,inst_26420);
var inst_26447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26419,inst_26446__$1);
var state_26517__$1 = (function (){var statearr_26550 = state_26517;
(statearr_26550[(18)] = inst_26445__$1);

(statearr_26550[(15)] = inst_26446__$1);

return statearr_26550;
})();
if(cljs.core.truth_(inst_26447)){
var statearr_26551_26734 = state_26517__$1;
(statearr_26551_26734[(1)] = (18));

} else {
var statearr_26552_26735 = state_26517__$1;
(statearr_26552_26735[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (10))){
var inst_26392 = (state_26517[(7)]);
var tmp26546 = inst_26392;
var inst_26392__$1 = tmp26546;
var state_26517__$1 = (function (){var statearr_26554 = state_26517;
(statearr_26554[(7)] = inst_26392__$1);

return statearr_26554;
})();
var statearr_26555_26736 = state_26517__$1;
(statearr_26555_26736[(2)] = null);

(statearr_26555_26736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (18))){
var inst_26449 = throw$("\u4F4D\u7F6E\u5DF2\u88AB\u4E0B\u904E. \u9019\u88E1\u4E0D\u8A72\u88AB\u57F7\u884C\u5230");
var state_26517__$1 = state_26517;
var statearr_26556_26737 = state_26517__$1;
(statearr_26556_26737[(2)] = inst_26449);

(statearr_26556_26737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (8))){
var inst_26392 = (state_26517[(7)]);
var inst_26408 = (state_26517[(2)]);
var tmp26553 = inst_26392;
var inst_26392__$1 = tmp26553;
var state_26517__$1 = (function (){var statearr_26557 = state_26517;
(statearr_26557[(19)] = inst_26408);

(statearr_26557[(7)] = inst_26392__$1);

return statearr_26557;
})();
var statearr_26558_26738 = state_26517__$1;
(statearr_26558_26738[(2)] = null);

(statearr_26558_26738[(1)] = (2));


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
});})(c__25042__auto___26712,userInput,data))
;
return ((function (switch__24997__auto__,c__25042__auto___26712,userInput,data){
return (function() {
var app2$main$main_$_state_machine__24998__auto__ = null;
var app2$main$main_$_state_machine__24998__auto____0 = (function (){
var statearr_26559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26559[(0)] = app2$main$main_$_state_machine__24998__auto__);

(statearr_26559[(1)] = (1));

return statearr_26559;
});
var app2$main$main_$_state_machine__24998__auto____1 = (function (state_26517){
while(true){
var ret_value__24999__auto__ = (function (){try{while(true){
var result__25000__auto__ = switch__24997__auto__(state_26517);
if(cljs.core.keyword_identical_QMARK_(result__25000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25000__auto__;
}
break;
}
}catch (e26560){if((e26560 instanceof Object)){
var ex__25001__auto__ = e26560;
var statearr_26561_26739 = state_26517;
(statearr_26561_26739[(5)] = ex__25001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26740 = state_26517;
state_26517 = G__26740;
continue;
} else {
return ret_value__24999__auto__;
}
break;
}
});
app2$main$main_$_state_machine__24998__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__24998__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__24998__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__24998__auto____0;
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__24998__auto____1;
return app2$main$main_$_state_machine__24998__auto__;
})()
;})(switch__24997__auto__,c__25042__auto___26712,userInput,data))
})();
var state__25044__auto__ = (function (){var statearr_26562 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_26562[(6)] = c__25042__auto___26712);

return statearr_26562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___26712,userInput,data))
);


var state_26741 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app2.main.board);
var active_26742 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400));
var result_26743 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__25042__auto___26744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data){
return (function (){
var f__25043__auto__ = (function (){var switch__24997__auto__ = ((function (c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26576 = (state_26612[(7)]);
var inst_26567 = (state_26612[(8)]);
var inst_26574 = (state_26612[(9)]);
var inst_26578 = (state_26612[(10)]);
var inst_26570 = (state_26612[(11)]);
var inst_26582 = (function (){var pred__26564 = cljs.core._EQ_;
var expr__26565 = inst_26567;
var model = inst_26570;
var brain = inst_26574;
var actions = inst_26576;
var bestAction = inst_26578;
return ((function (pred__26564,expr__26565,model,brain,actions,bestAction,inst_26576,inst_26567,inst_26574,inst_26578,inst_26570,state_val_26613,c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,bestAction,cljs.core.constantly(new cljs.core.Keyword(null,"enemy","enemy",-956472047)));
});
;})(pred__26564,expr__26565,model,brain,actions,bestAction,inst_26576,inst_26567,inst_26574,inst_26578,inst_26570,state_val_26613,c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data))
})();
var inst_26583 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_26741,inst_26582);
var inst_26584 = cljs.core.deref(active_26742);
var inst_26585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_26584);
var state_26612__$1 = (function (){var statearr_26614 = state_26612;
(statearr_26614[(12)] = inst_26583);

return statearr_26614;
})();
if(inst_26585){
var statearr_26615_26745 = state_26612__$1;
(statearr_26615_26745[(1)] = (10));

} else {
var statearr_26616_26746 = state_26612__$1;
(statearr_26616_26746[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26617_26747 = state_26612__$1;
(statearr_26617_26747[(2)] = null);

(statearr_26617_26747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26576 = (state_26612[(7)]);
var inst_26574 = (state_26612[(9)]);
var inst_26570 = (state_26612[(11)]);
var inst_26570__$1 = cljs.core.deref(data);
var inst_26571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26572 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26573 = (new cljs.core.PersistentVector(null,3,(5),inst_26571,inst_26572,null));
var inst_26574__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26570__$1,inst_26573);
var inst_26575 = cljs.core.deref(state_26741);
var inst_26576__$1 = app2.main.possibleActions(inst_26575);
var inst_26577 = cljs.core.deref(state_26741);
var inst_26578 = app2.brain.bestAction(inst_26574__$1,inst_26577,inst_26576__$1);
var inst_26579 = cljs.core.count(inst_26576__$1);
var inst_26580 = (inst_26579 > (0));
var state_26612__$1 = (function (){var statearr_26618 = state_26612;
(statearr_26618[(7)] = inst_26576__$1);

(statearr_26618[(9)] = inst_26574__$1);

(statearr_26618[(10)] = inst_26578);

(statearr_26618[(11)] = inst_26570__$1);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26580)){
var statearr_26619_26748 = state_26612__$1;
(statearr_26619_26748[(1)] = (7));

} else {
var statearr_26620_26749 = state_26612__$1;
(statearr_26620_26749[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (13))){
var inst_26595 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26621 = state_26612;
(statearr_26621[(13)] = inst_26595);

return statearr_26621;
})();
var statearr_26622_26750 = state_26612__$1;
(statearr_26622_26750[(2)] = null);

(statearr_26622_26750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26623_26751 = state_26612__$1;
(statearr_26623_26751[(2)] = inst_26608);

(statearr_26623_26751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (12))){
var inst_26589 = (state_26612[(2)]);
var inst_26590 = cljs.core.reset_BANG_(active_26742,inst_26589);
var state_26612__$1 = (function (){var statearr_26624 = state_26612;
(statearr_26624[(14)] = inst_26590);

return statearr_26624;
})();
var statearr_26625_26752 = state_26612__$1;
(statearr_26625_26752[(2)] = null);

(statearr_26625_26752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var inst_26567 = (state_26612[(8)]);
var inst_26567__$1 = cljs.core.deref(active_26742);
var inst_26568 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),inst_26567__$1);
var state_26612__$1 = (function (){var statearr_26626 = state_26612;
(statearr_26626[(8)] = inst_26567__$1);

return statearr_26626;
})();
if(inst_26568){
var statearr_26627_26753 = state_26612__$1;
(statearr_26627_26753[(1)] = (4));

} else {
var statearr_26628_26754 = state_26612__$1;
(statearr_26628_26754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (11))){
var state_26612__$1 = state_26612;
var statearr_26629_26755 = state_26612__$1;
(statearr_26629_26755[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_26629_26755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (9))){
var inst_26598 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26630_26756 = state_26612__$1;
(statearr_26630_26756[(2)] = inst_26598);

(statearr_26630_26756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26600 = cljs.core.async.timeout((1000));
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26612__$1,(14),inst_26600);
} else {
if((state_val_26613 === (14))){
var inst_26602 = (state_26612[(2)]);
var inst_26603 = cljs.core.deref(data);
var inst_26604 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_26603);
var inst_26605 = cljs.core.reset_BANG_(result_26743,inst_26604);
var state_26612__$1 = (function (){var statearr_26631 = state_26612;
(statearr_26631[(15)] = inst_26602);

(statearr_26631[(16)] = inst_26605);

return statearr_26631;
})();
var statearr_26632_26757 = state_26612__$1;
(statearr_26632_26757[(2)] = null);

(statearr_26632_26757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var state_26612__$1 = state_26612;
var statearr_26633_26758 = state_26612__$1;
(statearr_26633_26758[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_26633_26758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26593 = cljs.core.async.timeout((1000));
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26612__$1,(13),inst_26593);
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
});})(c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data))
;
return ((function (switch__24997__auto__,c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data){
return (function() {
var app2$main$main_$_state_machine__24998__auto__ = null;
var app2$main$main_$_state_machine__24998__auto____0 = (function (){
var statearr_26634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26634[(0)] = app2$main$main_$_state_machine__24998__auto__);

(statearr_26634[(1)] = (1));

return statearr_26634;
});
var app2$main$main_$_state_machine__24998__auto____1 = (function (state_26612){
while(true){
var ret_value__24999__auto__ = (function (){try{while(true){
var result__25000__auto__ = switch__24997__auto__(state_26612);
if(cljs.core.keyword_identical_QMARK_(result__25000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25000__auto__;
}
break;
}
}catch (e26635){if((e26635 instanceof Object)){
var ex__25001__auto__ = e26635;
var statearr_26636_26759 = state_26612;
(statearr_26636_26759[(5)] = ex__25001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26760 = state_26612;
state_26612 = G__26760;
continue;
} else {
return ret_value__24999__auto__;
}
break;
}
});
app2$main$main_$_state_machine__24998__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__24998__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__24998__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__24998__auto____0;
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__24998__auto____1;
return app2$main$main_$_state_machine__24998__auto__;
})()
;})(switch__24997__auto__,c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data))
})();
var state__25044__auto__ = (function (){var statearr_26637 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_26637[(6)] = c__25042__auto___26744);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___26744,state_26741,active_26742,result_26743,userInput,data))
);


app2.main.drawPlayground = ((function (state_26741,active_26742,result_26743,userInput,data){
return (function app2$main$main_$_drawPlayground(){
var s = cljs.core.deref(state_26741);
var ac = cljs.core.deref(active_26742);
var r = cljs.core.deref(result_26743);
var drawValue = ((function (s,ac,r,state_26741,active_26742,result_26743,userInput,data){
return (function (y,x){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var pred__26638 = cljs.core._EQ_;
var expr__26639 = v;
if(cljs.core.truth_((function (){var G__26641 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__26642 = expr__26639;
return (pred__26638.cljs$core$IFn$_invoke$arity$2 ? pred__26638.cljs$core$IFn$_invoke$arity$2(G__26641,G__26642) : pred__26638.call(null,G__26641,G__26642));
})())){
return "O";
} else {
if(cljs.core.truth_((function (){var G__26643 = new cljs.core.Keyword(null,"enemy","enemy",-956472047);
var G__26644 = expr__26639;
return (pred__26638.cljs$core$IFn$_invoke$arity$2 ? pred__26638.cljs$core$IFn$_invoke$arity$2(G__26643,G__26644) : pred__26638.call(null,G__26643,G__26644));
})())){
return "X";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__26638,expr__26639,v,s,ac,r,state_26741,active_26742,result_26743,userInput,data){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_26741,((function (pred__26638,expr__26639,v,s,ac,r,state_26741,active_26742,result_26743,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.constantly(new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__26638,expr__26639,v,s,ac,r,state_26741,active_26742,result_26743,userInput,data))
);

return cljs.core.reset_BANG_(active_26742,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref(active_26742)))?new cljs.core.Keyword(null,"enemy","enemy",-956472047):new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__26638,expr__26639,v,s,ac,r,state_26741,active_26742,result_26743,userInput,data))
], null),"O"], null);
}
}
});})(s,ac,r,state_26741,active_26742,result_26743,userInput,data))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data){
return (function (){
return cljs.core.reset_BANG_(state_26741,app2.main.board);
});})(s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data))
], null),"clear"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["active ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ac)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var pred__26645 = cljs.core._EQ_;
var expr__26646 = ac;
if(cljs.core.truth_((function (){var G__26648 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__26649 = expr__26646;
return (pred__26645.cljs$core$IFn$_invoke$arity$2 ? pred__26645.cljs$core$IFn$_invoke$arity$2(G__26648,G__26649) : pred__26645.call(null,G__26648,G__26649));
})())){
var iter__4523__auto__ = ((function (pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__26650(s__26651){
return (new cljs.core.LazySeq(null,((function (pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data){
return (function (){
var s__26651__$1 = s__26651;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26651__$1);
if(temp__5735__auto__){
var s__26651__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26651__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26651__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26653 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26652 = (0);
while(true){
if((i__26652 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26652);
cljs.core.chunk_append(b__26653,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__26761 = (i__26652 + (1));
i__26652 = G__26761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26653),app2$main$main_$_drawPlayground_$_iter__26650(cljs.core.chunk_rest(s__26651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26653),null);
}
} else {
var y = cljs.core.first(s__26651__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__26650(cljs.core.rest(s__26651__$2)));
}
} else {
return null;
}
break;
}
});})(pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data))
,null,null));
});})(pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
} else {
var iter__4523__auto__ = ((function (pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__26654(s__26655){
return (new cljs.core.LazySeq(null,((function (pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data){
return (function (){
var s__26655__$1 = s__26655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26655__$1);
if(temp__5735__auto__){
var s__26655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26655__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26655__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26657 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26656 = (0);
while(true){
if((i__26656 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26656);
cljs.core.chunk_append(b__26657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__26762 = (i__26656 + (1));
i__26656 = G__26762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26657),app2$main$main_$_drawPlayground_$_iter__26654(cljs.core.chunk_rest(s__26655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26657),null);
}
} else {
var y = cljs.core.first(s__26655__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__26654(cljs.core.rest(s__26655__$2)));
}
} else {
return null;
}
break;
}
});})(pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data))
,null,null));
});})(pred__26645,expr__26646,s,ac,r,drawValue,state_26741,active_26742,result_26743,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
}
})()], null)], null)], null);
});})(state_26741,active_26742,result_26743,userInput,data))
;

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app2.main.drawPlayground], null),document.getElementById("playground"));

var tmodel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var c__25042__auto___26763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___26763,tmodel,table,userInput,data){
return (function (){
var f__25043__auto__ = (function (){var switch__24997__auto__ = ((function (c__25042__auto___26763,tmodel,table,userInput,data){
return (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (1))){
var state_26673__$1 = state_26673;
var statearr_26675_26764 = state_26673__$1;
(statearr_26675_26764[(2)] = null);

(statearr_26675_26764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (2))){
var inst_26659 = cljs.core.deref(data);
var inst_26660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26661 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_26662 = (new cljs.core.PersistentVector(null,3,(5),inst_26660,inst_26661,null));
var inst_26663 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26659,inst_26662);
var inst_26664 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(inst_26663);
var inst_26665 = cljs.core.reset_BANG_(table,inst_26664);
var inst_26666 = cljs.core.async.timeout((1000));
var state_26673__$1 = (function (){var statearr_26676 = state_26673;
(statearr_26676[(7)] = inst_26665);

return statearr_26676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26673__$1,(4),inst_26666);
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (4))){
var inst_26668 = (state_26673[(2)]);
var state_26673__$1 = (function (){var statearr_26677 = state_26673;
(statearr_26677[(8)] = inst_26668);

return statearr_26677;
})();
var statearr_26678_26765 = state_26673__$1;
(statearr_26678_26765[(2)] = null);

(statearr_26678_26765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto___26763,tmodel,table,userInput,data))
;
return ((function (switch__24997__auto__,c__25042__auto___26763,tmodel,table,userInput,data){
return (function() {
var app2$main$main_$_state_machine__24998__auto__ = null;
var app2$main$main_$_state_machine__24998__auto____0 = (function (){
var statearr_26679 = [null,null,null,null,null,null,null,null,null];
(statearr_26679[(0)] = app2$main$main_$_state_machine__24998__auto__);

(statearr_26679[(1)] = (1));

return statearr_26679;
});
var app2$main$main_$_state_machine__24998__auto____1 = (function (state_26673){
while(true){
var ret_value__24999__auto__ = (function (){try{while(true){
var result__25000__auto__ = switch__24997__auto__(state_26673);
if(cljs.core.keyword_identical_QMARK_(result__25000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25000__auto__;
}
break;
}
}catch (e26680){if((e26680 instanceof Object)){
var ex__25001__auto__ = e26680;
var statearr_26681_26766 = state_26673;
(statearr_26681_26766[(5)] = ex__25001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26767 = state_26673;
state_26673 = G__26767;
continue;
} else {
return ret_value__24999__auto__;
}
break;
}
});
app2$main$main_$_state_machine__24998__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__24998__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__24998__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__24998__auto____0;
app2$main$main_$_state_machine__24998__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__24998__auto____1;
return app2$main$main_$_state_machine__24998__auto__;
})()
;})(switch__24997__auto__,c__25042__auto___26763,tmodel,table,userInput,data))
})();
var state__25044__auto__ = (function (){var statearr_26682 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_26682[(6)] = c__25042__auto___26763);

return statearr_26682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___26763,tmodel,table,userInput,data))
);


app2.main.drawQtable = ((function (tmodel,table,userInput,data){
return (function app2$main$main_$_drawQtable(){
var tm = cljs.core.deref(tmodel);
var t = cljs.core.deref(table);
if(cljs.core.truth_(tm)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel,table,userInput,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel,cljs.core.not);
});})(tm,t,tmodel,table,userInput,data))
], null),"close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (tm,t,tmodel,table,userInput,data){
return (function app2$main$main_$_drawQtable_$_iter__26683(s__26684){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel,table,userInput,data){
return (function (){
var s__26684__$1 = s__26684;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26684__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__26689 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689,(1),null);
var iterys__4519__auto__ = ((function (s__26684__$1,vec__26689,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function app2$main$main_$_drawQtable_$_iter__26683_$_iter__26685(s__26686){
return (new cljs.core.LazySeq(null,((function (s__26684__$1,vec__26689,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function (){
var s__26686__$1 = s__26686;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26686__$1);
if(temp__5735__auto____$1){
var s__26686__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26686__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26686__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26688 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26687 = (0);
while(true){
if((i__26687 < size__4522__auto__)){
var vec__26692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26687);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26692,(1),null);
cljs.core.chunk_append(b__26688,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__26768 = (i__26687 + (1));
i__26687 = G__26768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26688),app2$main$main_$_drawQtable_$_iter__26683_$_iter__26685(cljs.core.chunk_rest(s__26686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26688),null);
}
} else {
var vec__26695 = cljs.core.first(s__26686__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app2$main$main_$_drawQtable_$_iter__26683_$_iter__26685(cljs.core.rest(s__26686__$2)));
}
} else {
return null;
}
break;
}
});})(s__26684__$1,vec__26689,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
,null,null));
});})(s__26684__$1,vec__26689,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$main_$_drawQtable_$_iter__26683(cljs.core.rest(s__26684__$1)));
} else {
var G__26769 = cljs.core.rest(s__26684__$1);
s__26684__$1 = G__26769;
continue;
}
} else {
return null;
}
break;
}
});})(tm,t,tmodel,table,userInput,data))
,null,null));
});})(tm,t,tmodel,table,userInput,data))
;
return iter__4523__auto__(t);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel,table,userInput,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel,cljs.core.not);
});})(tm,t,tmodel,table,userInput,data))
], null),"open"], null);
}
});})(tmodel,table,userInput,data))
;

app2.main.mountit = ((function (tmodel,table,userInput,data){
return (function app2$main$main_$_mountit(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app2.main.drawQtable], null),document.getElementById("qtable"));
});})(tmodel,table,userInput,data))
;

return app2.main.mountit();
});

//# sourceMappingURL=app2.main.js.map
