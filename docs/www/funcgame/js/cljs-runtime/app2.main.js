goog.provide('app2.main');
goog.require('cljs.core');
goog.require('app2.brain');
goog.require('cljs.core.async');
goog.require('reagent.core');
app2.main.board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null))));
app2.main.lines = (function (){var hs = (function (){var iter__4523__auto__ = (function app2$main$iter__37591(s__37592){
return (new cljs.core.LazySeq(null,(function (){
var s__37592__$1 = s__37592;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37592__$1);
if(temp__5735__auto__){
var s__37592__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37592__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37592__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37594 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37593 = (0);
while(true){
if((i__37593 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37593);
cljs.core.chunk_append(b__37594,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null));

var G__38730 = (i__37593 + (1));
i__37593 = G__38730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37594),app2$main$iter__37591(cljs.core.chunk_rest(s__37592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37594),null);
}
} else {
var x = cljs.core.first(s__37592__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null),app2$main$iter__37591(cljs.core.rest(s__37592__$2)));
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
return (function app2$main$iter__37609(s__37610){
return (new cljs.core.LazySeq(null,((function (hs){
return (function (){
var s__37610__$1 = s__37610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37610__$1);
if(temp__5735__auto__){
var s__37610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37610__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37610__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37612 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37611 = (0);
while(true){
if((i__37611 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37611);
cljs.core.chunk_append(b__37612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null));

var G__38731 = (i__37611 + (1));
i__37611 = G__38731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37612),app2$main$iter__37609(cljs.core.chunk_rest(s__37610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37612),null);
}
} else {
var y = cljs.core.first(s__37610__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null),app2$main$iter__37609(cljs.core.rest(s__37610__$2)));
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
return (function app2$main$iter__37640(s__37641){
return (new cljs.core.LazySeq(null,((function (hs,vs){
return (function (){
var s__37641__$1 = s__37641;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37641__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37641__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function app2$main$iter__37640_$_iter__37642(s__37643){
return (new cljs.core.LazySeq(null,((function (s__37641__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function (){
var s__37643__$1 = s__37643;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37643__$1);
if(temp__5735__auto____$1){
var s__37643__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37643__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37643__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37645 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37644 = (0);
while(true){
if((i__37644 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37644);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__37645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38738 = (i__37644 + (1));
i__37644 = G__38738;
continue;
} else {
var G__38739 = (i__37644 + (1));
i__37644 = G__38739;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37645),app2$main$iter__37640_$_iter__37642(cljs.core.chunk_rest(s__37643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37645),null);
}
} else {
var y = cljs.core.first(s__37643__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__37640_$_iter__37642(cljs.core.rest(s__37643__$2)));
} else {
var G__38740 = cljs.core.rest(s__37643__$2);
s__37643__$1 = G__38740;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37641__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
,null,null));
});})(s__37641__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__37640(cljs.core.rest(s__37641__$1)));
} else {
var G__38741 = cljs.core.rest(s__37641__$1);
s__37641__$1 = G__38741;
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
return (function app2$main$iter__37661(s__37662){
return (new cljs.core.LazySeq(null,((function (hs,vs,x1){
return (function (){
var s__37662__$1 = s__37662;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37662__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37662__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function app2$main$iter__37661_$_iter__37663(s__37664){
return (new cljs.core.LazySeq(null,((function (s__37662__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function (){
var s__37664__$1 = s__37664;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37664__$1);
if(temp__5735__auto____$1){
var s__37664__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37664__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37664__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37666 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37665 = (0);
while(true){
if((i__37665 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37665);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
cljs.core.chunk_append(b__37666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38745 = (i__37665 + (1));
i__37665 = G__38745;
continue;
} else {
var G__38746 = (i__37665 + (1));
i__37665 = G__38746;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37666),app2$main$iter__37661_$_iter__37663(cljs.core.chunk_rest(s__37664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37666),null);
}
} else {
var y = cljs.core.first(s__37664__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__37661_$_iter__37663(cljs.core.rest(s__37664__$2)));
} else {
var G__38749 = cljs.core.rest(s__37664__$2);
s__37664__$1 = G__38749;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37662__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
,null,null));
});})(s__37662__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__37661(cljs.core.rest(s__37662__$1)));
} else {
var G__38751 = cljs.core.rest(s__37662__$1);
s__37662__$1 = G__38751;
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
var iter__4523__auto__ = (function app2$main$possibleActions_$_iter__37708(s__37709){
return (new cljs.core.LazySeq(null,(function (){
var s__37709__$1 = s__37709;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37709__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37709__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app2$main$possibleActions_$_iter__37708_$_iter__37710(s__37711){
return (new cljs.core.LazySeq(null,((function (s__37709__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__37711__$1 = s__37711;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37711__$1);
if(temp__5735__auto____$1){
var s__37711__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37711__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37711__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37713 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37712 = (0);
while(true){
if((i__37712 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37712);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
cljs.core.chunk_append(b__37713,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38758 = (i__37712 + (1));
i__37712 = G__38758;
continue;
} else {
var G__38759 = (i__37712 + (1));
i__37712 = G__38759;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37713),app2$main$possibleActions_$_iter__37708_$_iter__37710(cljs.core.chunk_rest(s__37711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37713),null);
}
} else {
var y = cljs.core.first(s__37711__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$possibleActions_$_iter__37708_$_iter__37710(cljs.core.rest(s__37711__$2)));
} else {
var G__38762 = cljs.core.rest(s__37711__$2);
s__37711__$1 = G__38762;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37709__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__37709__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$possibleActions_$_iter__37708(cljs.core.rest(s__37709__$1)));
} else {
var G__38763 = cljs.core.rest(s__37709__$1);
s__37709__$1 = G__38763;
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
var c__30213__auto___38766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___38766,userInput,data){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___38766,userInput,data){
return (function (state_37878){
var state_val_37886 = (state_37878[(1)]);
if((state_val_37886 === (7))){
var inst_37873 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37896_38767 = state_37878__$1;
(statearr_37896_38767[(2)] = inst_37873);

(statearr_37896_38767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (20))){
var inst_37865 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_37897_38768 = state_37878__$1;
(statearr_37897_38768[(2)] = inst_37865);

(statearr_37897_38768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (1))){
var inst_37728 = [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_37729 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_37730 = [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)];
var inst_37731 = cljs.core.PersistentHashMap.fromArrays(inst_37729,inst_37730);
var inst_37732 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_37733 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37734 = [app2.brain.brain];
var inst_37735 = cljs.core.PersistentHashMap.fromArrays(inst_37733,inst_37734);
var inst_37736 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37737 = [app2.brain.brain];
var inst_37738 = cljs.core.PersistentHashMap.fromArrays(inst_37736,inst_37737);
var inst_37739 = [inst_37735,inst_37738];
var inst_37740 = cljs.core.PersistentHashMap.fromArrays(inst_37732,inst_37739);
var inst_37741 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_37742 = [(0),(0),(0)];
var inst_37743 = cljs.core.PersistentHashMap.fromArrays(inst_37741,inst_37742);
var inst_37744 = [inst_37731,new cljs.core.Keyword(null,"player","player",-97687400),inst_37740,app2.main.board,inst_37743];
var inst_37745 = cljs.core.PersistentHashMap.fromArrays(inst_37728,inst_37744);
var inst_37746 = inst_37745;
var state_37878__$1 = (function (){var statearr_37909 = state_37878;
(statearr_37909[(7)] = inst_37746);

return statearr_37909;
})();
var statearr_37914_38769 = state_37878__$1;
(statearr_37914_38769[(2)] = null);

(statearr_37914_38769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (4))){
var inst_37752 = (state_37878[(8)]);
var inst_37755 = (state_37878[(2)]);
var inst_37759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_37752);
var state_37878__$1 = (function (){var statearr_37915 = state_37878;
(statearr_37915[(9)] = inst_37755);

return statearr_37915;
})();
if(inst_37759){
var statearr_37916_38773 = state_37878__$1;
(statearr_37916_38773[(1)] = (5));

} else {
var statearr_37917_38774 = state_37878__$1;
(statearr_37917_38774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (15))){
var inst_37746 = (state_37878[(7)]);
var inst_37772 = (state_37878[(10)]);
var inst_37778 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37779 = [app2.main.board,inst_37772];
var inst_37780 = cljs.core.PersistentHashMap.fromArrays(inst_37778,inst_37779);
var inst_37781 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37746,inst_37780], 0));
var inst_37782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37783 = [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_37784 = (new cljs.core.PersistentVector(null,2,(5),inst_37782,inst_37783,null));
var inst_37785 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37781,inst_37784,cljs.core.inc);
var inst_37786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37787 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37788 = (new cljs.core.PersistentVector(null,3,(5),inst_37786,inst_37787,null));
var inst_37789 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37785,inst_37788,app2.brain.clearState);
var inst_37790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37791 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37792 = (new cljs.core.PersistentVector(null,3,(5),inst_37790,inst_37791,null));
var inst_37793 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37789,inst_37792,app2.brain.clearState);
var inst_37746__$1 = inst_37793;
var state_37878__$1 = (function (){var statearr_37919 = state_37878;
(statearr_37919[(7)] = inst_37746__$1);

return statearr_37919;
})();
var statearr_37920_38775 = state_37878__$1;
(statearr_37920_38775[(2)] = null);

(statearr_37920_38775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (21))){
var inst_37773 = (state_37878[(11)]);
var inst_37746 = (state_37878[(7)]);
var inst_37772 = (state_37878[(10)]);
var inst_37767 = (state_37878[(12)]);
var inst_37800 = (state_37878[(13)]);
var inst_37806 = (state_37878[(14)]);
var inst_37774 = (state_37878[(15)]);
var inst_37812 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(10));
var inst_37813 = app2.brain.updateR(inst_37806,inst_37812);
var inst_37814 = app2.brain.updateQ(inst_37813,inst_37773,inst_37800,inst_37774);
var inst_37815 = app2.brain.clearState(inst_37814);
var inst_37816 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37817 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37772,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37818 = (new cljs.core.PersistentVector(null,3,(5),inst_37816,inst_37817,null));
var inst_37819 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37746,inst_37818);
var inst_37821 = (- (100));
var inst_37822 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_37821);
var inst_37823 = app2.brain.updateR(inst_37819,inst_37822);
var inst_37824 = app2.brain.updateQ(inst_37823,null,null,inst_37774);
var inst_37825 = app2.brain.clearState(inst_37824);
var inst_37826 = cljs.core.reset_BANG_(data,inst_37746);
var inst_37828 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37829 = [app2.main.board,inst_37772];
var inst_37830 = cljs.core.PersistentHashMap.fromArrays(inst_37828,inst_37829);
var inst_37831 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37746,inst_37830], 0));
var inst_37832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37833 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37767,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37834 = (new cljs.core.PersistentVector(null,3,(5),inst_37832,inst_37833,null));
var inst_37835 = cljs.core.constantly(inst_37815);
var inst_37836 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37831,inst_37834,inst_37835);
var inst_37837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37838 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37772,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37839 = (new cljs.core.PersistentVector(null,3,(5),inst_37837,inst_37838,null));
var inst_37840 = cljs.core.constantly(inst_37825);
var inst_37841 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37836,inst_37839,inst_37840);
var inst_37842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37843 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_37767];
var inst_37844 = (new cljs.core.PersistentVector(null,2,(5),inst_37842,inst_37843,null));
var inst_37845 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37841,inst_37844,cljs.core.inc);
var inst_37746__$1 = inst_37845;
var state_37878__$1 = (function (){var statearr_37978 = state_37878;
(statearr_37978[(7)] = inst_37746__$1);

(statearr_37978[(16)] = inst_37826);

return statearr_37978;
})();
var statearr_37979_38864 = state_37878__$1;
(statearr_37979_38864[(2)] = null);

(statearr_37979_38864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (13))){
var state_37878__$1 = state_37878;
var statearr_37989_38866 = state_37878__$1;
(statearr_37989_38866[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_37989_38866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (22))){
var inst_37746 = (state_37878[(7)]);
var inst_37772 = (state_37878[(10)]);
var inst_37767 = (state_37878[(12)]);
var inst_37808 = (state_37878[(17)]);
var inst_37806 = (state_37878[(14)]);
var inst_37848 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(1));
var inst_37849 = app2.brain.updateR(inst_37806,inst_37848);
var inst_37851 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37852 = [inst_37808,inst_37772];
var inst_37853 = cljs.core.PersistentHashMap.fromArrays(inst_37851,inst_37852);
var inst_37854 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37746,inst_37853], 0));
var inst_37855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37856 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37767,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37858 = (new cljs.core.PersistentVector(null,3,(5),inst_37855,inst_37856,null));
var inst_37859 = cljs.core.constantly(inst_37849);
var inst_37860 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37854,inst_37858,inst_37859);
var inst_37746__$1 = inst_37860;
var state_37878__$1 = (function (){var statearr_38042 = state_37878;
(statearr_38042[(7)] = inst_37746__$1);

return statearr_38042;
})();
var statearr_38044_38868 = state_37878__$1;
(statearr_38044_38868[(2)] = null);

(statearr_38044_38868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (6))){
var inst_37752 = (state_37878[(8)]);
var inst_37765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ai","ai",760454697),inst_37752);
var state_37878__$1 = state_37878;
if(inst_37765){
var statearr_38059_38871 = state_37878__$1;
(statearr_38059_38871[(1)] = (9));

} else {
var statearr_38060_38872 = state_37878__$1;
(statearr_38060_38872[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (17))){
var inst_37867 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_38062_38875 = state_37878__$1;
(statearr_38062_38875[(2)] = inst_37867);

(statearr_38062_38875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (3))){
var inst_37875 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37878__$1,inst_37875);
} else {
if((state_val_37886 === (12))){
var state_37878__$1 = state_37878;
var statearr_38064_38876 = state_37878__$1;
(statearr_38064_38876[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_38064_38876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (2))){
var inst_37746 = (state_37878[(7)]);
var inst_37748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37749 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_37746);
var inst_37750 = [new cljs.core.Keyword(null,"players","players",-1361554569),inst_37749];
var inst_37751 = (new cljs.core.PersistentVector(null,2,(5),inst_37748,inst_37750,null));
var inst_37752 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37746,inst_37751);
var inst_37753 = cljs.core.async.timeout((10));
var state_37878__$1 = (function (){var statearr_38072 = state_37878;
(statearr_38072[(8)] = inst_37752);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37878__$1,(4),inst_37753);
} else {
if((state_val_37886 === (23))){
var inst_37863 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_38076_38879 = state_37878__$1;
(statearr_38076_38879[(2)] = inst_37863);

(statearr_38076_38879[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (19))){
var inst_37773 = (state_37878[(11)]);
var inst_37767 = (state_37878[(12)]);
var inst_37808 = (state_37878[(17)]);
var inst_37800 = (state_37878[(13)]);
var inst_37799 = (state_37878[(18)]);
var inst_37774 = (state_37878[(15)]);
var inst_37806 = app2.brain.updateQ(inst_37799,inst_37773,inst_37800,inst_37774);
var inst_37807 = cljs.core.constantly(inst_37767);
var inst_37808__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37773,inst_37800,inst_37807);
var inst_37809 = app2.main.checkWin(inst_37808__$1,inst_37767);
var state_37878__$1 = (function (){var statearr_38099 = state_37878;
(statearr_38099[(17)] = inst_37808__$1);

(statearr_38099[(14)] = inst_37806);

return statearr_38099;
})();
if(cljs.core.truth_(inst_37809)){
var statearr_38100_38882 = state_37878__$1;
(statearr_38100_38882[(1)] = (21));

} else {
var statearr_38102_38883 = state_37878__$1;
(statearr_38102_38883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (11))){
var inst_37871 = (state_37878[(2)]);
var state_37878__$1 = state_37878;
var statearr_38119_38885 = state_37878__$1;
(statearr_38119_38885[(2)] = inst_37871);

(statearr_38119_38885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (9))){
var inst_37746 = (state_37878[(7)]);
var inst_37767 = (state_37878[(12)]);
var inst_37767__$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_37746);
var inst_37768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37767__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var state_37878__$1 = (function (){var statearr_38141 = state_37878;
(statearr_38141[(12)] = inst_37767__$1);

return statearr_38141;
})();
if(inst_37768){
var statearr_38149_38887 = state_37878__$1;
(statearr_38149_38887[(1)] = (12));

} else {
var statearr_38153_38888 = state_37878__$1;
(statearr_38153_38888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (5))){
var state_37878__$1 = state_37878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37878__$1,(8),userInput);
} else {
if((state_val_37886 === (14))){
var inst_37773 = (state_37878[(11)]);
var inst_37746 = (state_37878[(7)]);
var inst_37774 = (state_37878[(15)]);
var inst_37772 = (state_37878[(2)]);
var inst_37773__$1 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(inst_37746);
var inst_37774__$1 = app2.main.possibleActions(inst_37773__$1);
var inst_37775 = cljs.core.count(inst_37774__$1);
var inst_37776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_37775);
var state_37878__$1 = (function (){var statearr_38185 = state_37878;
(statearr_38185[(11)] = inst_37773__$1);

(statearr_38185[(10)] = inst_37772);

(statearr_38185[(15)] = inst_37774__$1);

return statearr_38185;
})();
if(inst_37776){
var statearr_38187_38889 = state_37878__$1;
(statearr_38187_38889[(1)] = (15));

} else {
var statearr_38189_38890 = state_37878__$1;
(statearr_38189_38890[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (16))){
var inst_37773 = (state_37878[(11)]);
var inst_37746 = (state_37878[(7)]);
var inst_37767 = (state_37878[(12)]);
var inst_37800 = (state_37878[(13)]);
var inst_37799 = (state_37878[(18)]);
var inst_37774 = (state_37878[(15)]);
var inst_37796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37797 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37767,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37798 = (new cljs.core.PersistentVector(null,3,(5),inst_37796,inst_37797,null));
var inst_37799__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37746,inst_37798);
var inst_37800__$1 = app2.brain.selectAction(inst_37799__$1,inst_37773,inst_37774);
var inst_37801 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37773,inst_37800__$1);
var state_37878__$1 = (function (){var statearr_38196 = state_37878;
(statearr_38196[(13)] = inst_37800__$1);

(statearr_38196[(18)] = inst_37799__$1);

return statearr_38196;
})();
if(cljs.core.truth_(inst_37801)){
var statearr_38198_38891 = state_37878__$1;
(statearr_38198_38891[(1)] = (18));

} else {
var statearr_38199_38892 = state_37878__$1;
(statearr_38199_38892[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (10))){
var inst_37746 = (state_37878[(7)]);
var tmp38178 = inst_37746;
var inst_37746__$1 = tmp38178;
var state_37878__$1 = (function (){var statearr_38207 = state_37878;
(statearr_38207[(7)] = inst_37746__$1);

return statearr_38207;
})();
var statearr_38208_38893 = state_37878__$1;
(statearr_38208_38893[(2)] = null);

(statearr_38208_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (18))){
var inst_37803 = throw$("xxxx");
var state_37878__$1 = state_37878;
var statearr_38210_38894 = state_37878__$1;
(statearr_38210_38894[(2)] = inst_37803);

(statearr_38210_38894[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37886 === (8))){
var inst_37746 = (state_37878[(7)]);
var inst_37762 = (state_37878[(2)]);
var tmp38200 = inst_37746;
var inst_37746__$1 = tmp38200;
var state_37878__$1 = (function (){var statearr_38211 = state_37878;
(statearr_38211[(7)] = inst_37746__$1);

(statearr_38211[(19)] = inst_37762);

return statearr_38211;
})();
var statearr_38212_38895 = state_37878__$1;
(statearr_38212_38895[(2)] = null);

(statearr_38212_38895[(1)] = (2));


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
});})(c__30213__auto___38766,userInput,data))
;
return ((function (switch__30004__auto__,c__30213__auto___38766,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30005__auto__ = null;
var app2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38213[(0)] = app2$main$main_$_state_machine__30005__auto__);

(statearr_38213[(1)] = (1));

return statearr_38213;
});
var app2$main$main_$_state_machine__30005__auto____1 = (function (state_37878){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_37878);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38236){if((e38236 instanceof Object)){
var ex__30008__auto__ = e38236;
var statearr_38237_38896 = state_37878;
(statearr_38237_38896[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38897 = state_37878;
state_37878 = G__38897;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30005__auto__ = function(state_37878){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30005__auto____1.call(this,state_37878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30005__auto____0;
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30005__auto____1;
return app2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___38766,userInput,data))
})();
var state__30215__auto__ = (function (){var statearr_38240 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38240[(6)] = c__30213__auto___38766);

return statearr_38240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___38766,userInput,data))
);


var state_38898 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app2.main.board);
var active_38899 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400));
var result_38900 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__30213__auto___38901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data){
return (function (state_38310){
var state_val_38311 = (state_38310[(1)]);
if((state_val_38311 === (7))){
var inst_38264 = (state_38310[(7)]);
var inst_38253 = (state_38310[(8)]);
var inst_38269 = (state_38310[(9)]);
var inst_38266 = (state_38310[(10)]);
var inst_38250 = (state_38310[(11)]);
var inst_38273 = (function (){var pred__38247 = cljs.core._EQ_;
var expr__38248 = inst_38250;
var model = inst_38253;
var brain = inst_38264;
var actions = inst_38266;
var bestAction = inst_38269;
return ((function (pred__38247,expr__38248,model,brain,actions,bestAction,inst_38264,inst_38253,inst_38269,inst_38266,inst_38250,state_val_38311,c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,bestAction,cljs.core.constantly(new cljs.core.Keyword(null,"enemy","enemy",-956472047)));
});
;})(pred__38247,expr__38248,model,brain,actions,bestAction,inst_38264,inst_38253,inst_38269,inst_38266,inst_38250,state_val_38311,c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data))
})();
var inst_38274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_38898,inst_38273);
var inst_38275 = cljs.core.deref(active_38899);
var inst_38277 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_38275);
var state_38310__$1 = (function (){var statearr_38317 = state_38310;
(statearr_38317[(12)] = inst_38274);

return statearr_38317;
})();
if(inst_38277){
var statearr_38318_38902 = state_38310__$1;
(statearr_38318_38902[(1)] = (10));

} else {
var statearr_38319_38903 = state_38310__$1;
(statearr_38319_38903[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (1))){
var state_38310__$1 = state_38310;
var statearr_38321_38904 = state_38310__$1;
(statearr_38321_38904[(2)] = null);

(statearr_38321_38904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (4))){
var inst_38264 = (state_38310[(7)]);
var inst_38253 = (state_38310[(8)]);
var inst_38266 = (state_38310[(10)]);
var inst_38253__$1 = cljs.core.deref(data);
var inst_38254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38261 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_38263 = (new cljs.core.PersistentVector(null,3,(5),inst_38254,inst_38261,null));
var inst_38264__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38253__$1,inst_38263);
var inst_38265 = cljs.core.deref(state_38898);
var inst_38266__$1 = app2.main.possibleActions(inst_38265);
var inst_38268 = cljs.core.deref(state_38898);
var inst_38269 = app2.brain.bestAction(inst_38264__$1,inst_38268,inst_38266__$1);
var inst_38270 = cljs.core.count(inst_38266__$1);
var inst_38271 = (inst_38270 > (0));
var state_38310__$1 = (function (){var statearr_38324 = state_38310;
(statearr_38324[(7)] = inst_38264__$1);

(statearr_38324[(8)] = inst_38253__$1);

(statearr_38324[(9)] = inst_38269);

(statearr_38324[(10)] = inst_38266__$1);

return statearr_38324;
})();
if(cljs.core.truth_(inst_38271)){
var statearr_38325_38905 = state_38310__$1;
(statearr_38325_38905[(1)] = (7));

} else {
var statearr_38326_38906 = state_38310__$1;
(statearr_38326_38906[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (13))){
var inst_38287 = (state_38310[(2)]);
var state_38310__$1 = (function (){var statearr_38327 = state_38310;
(statearr_38327[(13)] = inst_38287);

return statearr_38327;
})();
var statearr_38328_38907 = state_38310__$1;
(statearr_38328_38907[(2)] = null);

(statearr_38328_38907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (6))){
var inst_38304 = (state_38310[(2)]);
var state_38310__$1 = state_38310;
var statearr_38329_38908 = state_38310__$1;
(statearr_38329_38908[(2)] = inst_38304);

(statearr_38329_38908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (3))){
var inst_38306 = (state_38310[(2)]);
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38310__$1,inst_38306);
} else {
if((state_val_38311 === (12))){
var inst_38281 = (state_38310[(2)]);
var inst_38282 = cljs.core.reset_BANG_(active_38899,inst_38281);
var state_38310__$1 = (function (){var statearr_38331 = state_38310;
(statearr_38331[(14)] = inst_38282);

return statearr_38331;
})();
var statearr_38332_38910 = state_38310__$1;
(statearr_38332_38910[(2)] = null);

(statearr_38332_38910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (2))){
var inst_38250 = (state_38310[(11)]);
var inst_38250__$1 = cljs.core.deref(active_38899);
var inst_38251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),inst_38250__$1);
var state_38310__$1 = (function (){var statearr_38337 = state_38310;
(statearr_38337[(11)] = inst_38250__$1);

return statearr_38337;
})();
if(inst_38251){
var statearr_38338_38911 = state_38310__$1;
(statearr_38338_38911[(1)] = (4));

} else {
var statearr_38339_38912 = state_38310__$1;
(statearr_38339_38912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (11))){
var state_38310__$1 = state_38310;
var statearr_38346_38913 = state_38310__$1;
(statearr_38346_38913[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_38346_38913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (9))){
var inst_38290 = (state_38310[(2)]);
var state_38310__$1 = state_38310;
var statearr_38347_38914 = state_38310__$1;
(statearr_38347_38914[(2)] = inst_38290);

(statearr_38347_38914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (5))){
var inst_38293 = cljs.core.async.timeout((1000));
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38310__$1,(14),inst_38293);
} else {
if((state_val_38311 === (14))){
var inst_38295 = (state_38310[(2)]);
var inst_38296 = cljs.core.deref(data);
var inst_38297 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_38296);
var inst_38298 = cljs.core.reset_BANG_(result_38900,inst_38297);
var state_38310__$1 = (function (){var statearr_38348 = state_38310;
(statearr_38348[(15)] = inst_38298);

(statearr_38348[(16)] = inst_38295);

return statearr_38348;
})();
var statearr_38410_38916 = state_38310__$1;
(statearr_38410_38916[(2)] = null);

(statearr_38410_38916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (10))){
var state_38310__$1 = state_38310;
var statearr_38412_38917 = state_38310__$1;
(statearr_38412_38917[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_38412_38917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38311 === (8))){
var inst_38285 = cljs.core.async.timeout((1000));
var state_38310__$1 = state_38310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38310__$1,(13),inst_38285);
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
});})(c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data))
;
return ((function (switch__30004__auto__,c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30005__auto__ = null;
var app2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38420[(0)] = app2$main$main_$_state_machine__30005__auto__);

(statearr_38420[(1)] = (1));

return statearr_38420;
});
var app2$main$main_$_state_machine__30005__auto____1 = (function (state_38310){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38310);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38424){if((e38424 instanceof Object)){
var ex__30008__auto__ = e38424;
var statearr_38425_38918 = state_38310;
(statearr_38425_38918[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38920 = state_38310;
state_38310 = G__38920;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30005__auto__ = function(state_38310){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30005__auto____1.call(this,state_38310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30005__auto____0;
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30005__auto____1;
return app2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data))
})();
var state__30215__auto__ = (function (){var statearr_38429 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38429[(6)] = c__30213__auto___38901);

return statearr_38429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___38901,state_38898,active_38899,result_38900,userInput,data))
);


app2.main.drawPlayground = ((function (state_38898,active_38899,result_38900,userInput,data){
return (function app2$main$main_$_drawPlayground(){
var s = cljs.core.deref(state_38898);
var ac = cljs.core.deref(active_38899);
var r = cljs.core.deref(result_38900);
var drawValue = ((function (s,ac,r,state_38898,active_38899,result_38900,userInput,data){
return (function (y,x){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var pred__38434 = cljs.core._EQ_;
var expr__38435 = v;
if(cljs.core.truth_((function (){var G__38437 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__38438 = expr__38435;
return (pred__38434.cljs$core$IFn$_invoke$arity$2 ? pred__38434.cljs$core$IFn$_invoke$arity$2(G__38437,G__38438) : pred__38434.call(null,G__38437,G__38438));
})())){
return "O";
} else {
if(cljs.core.truth_((function (){var G__38439 = new cljs.core.Keyword(null,"enemy","enemy",-956472047);
var G__38440 = expr__38435;
return (pred__38434.cljs$core$IFn$_invoke$arity$2 ? pred__38434.cljs$core$IFn$_invoke$arity$2(G__38439,G__38440) : pred__38434.call(null,G__38439,G__38440));
})())){
return "X";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__38434,expr__38435,v,s,ac,r,state_38898,active_38899,result_38900,userInput,data){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_38898,((function (pred__38434,expr__38435,v,s,ac,r,state_38898,active_38899,result_38900,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.constantly(new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__38434,expr__38435,v,s,ac,r,state_38898,active_38899,result_38900,userInput,data))
);

return cljs.core.reset_BANG_(active_38899,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref(active_38899)))?new cljs.core.Keyword(null,"enemy","enemy",-956472047):new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__38434,expr__38435,v,s,ac,r,state_38898,active_38899,result_38900,userInput,data))
], null),"O"], null);
}
}
});})(s,ac,r,state_38898,active_38899,result_38900,userInput,data))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data){
return (function (){
return cljs.core.reset_BANG_(state_38898,app2.main.board);
});})(s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data))
], null),"clear"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["active ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ac)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var pred__38449 = cljs.core._EQ_;
var expr__38450 = ac;
if(cljs.core.truth_((function (){var G__38457 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__38458 = expr__38450;
return (pred__38449.cljs$core$IFn$_invoke$arity$2 ? pred__38449.cljs$core$IFn$_invoke$arity$2(G__38457,G__38458) : pred__38449.call(null,G__38457,G__38458));
})())){
var iter__4523__auto__ = ((function (pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__38459(s__38460){
return (new cljs.core.LazySeq(null,((function (pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data){
return (function (){
var s__38460__$1 = s__38460;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38460__$1);
if(temp__5735__auto__){
var s__38460__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38460__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38460__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38462 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38461 = (0);
while(true){
if((i__38461 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38461);
cljs.core.chunk_append(b__38462,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__38926 = (i__38461 + (1));
i__38461 = G__38926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38462),app2$main$main_$_drawPlayground_$_iter__38459(cljs.core.chunk_rest(s__38460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38462),null);
}
} else {
var y = cljs.core.first(s__38460__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__38459(cljs.core.rest(s__38460__$2)));
}
} else {
return null;
}
break;
}
});})(pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data))
,null,null));
});})(pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
} else {
var iter__4523__auto__ = ((function (pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__38481(s__38482){
return (new cljs.core.LazySeq(null,((function (pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data){
return (function (){
var s__38482__$1 = s__38482;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38482__$1);
if(temp__5735__auto__){
var s__38482__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38482__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38482__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38484 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38483 = (0);
while(true){
if((i__38483 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38483);
cljs.core.chunk_append(b__38484,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__38927 = (i__38483 + (1));
i__38483 = G__38927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38484),app2$main$main_$_drawPlayground_$_iter__38481(cljs.core.chunk_rest(s__38482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38484),null);
}
} else {
var y = cljs.core.first(s__38482__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__38481(cljs.core.rest(s__38482__$2)));
}
} else {
return null;
}
break;
}
});})(pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data))
,null,null));
});})(pred__38449,expr__38450,s,ac,r,drawValue,state_38898,active_38899,result_38900,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
}
})()], null)], null)], null);
});})(state_38898,active_38899,result_38900,userInput,data))
;

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app2.main.drawPlayground], null),document.getElementById("playground"));

var tmodel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var c__30213__auto___38928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___38928,tmodel,table,userInput,data){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___38928,tmodel,table,userInput,data){
return (function (state_38551){
var state_val_38552 = (state_38551[(1)]);
if((state_val_38552 === (1))){
var state_38551__$1 = state_38551;
var statearr_38567_38929 = state_38551__$1;
(statearr_38567_38929[(2)] = null);

(statearr_38567_38929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (2))){
var inst_38530 = cljs.core.deref(data);
var inst_38532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38534 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_38535 = (new cljs.core.PersistentVector(null,3,(5),inst_38532,inst_38534,null));
var inst_38536 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38530,inst_38535);
var inst_38537 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(inst_38536);
var inst_38538 = cljs.core.reset_BANG_(table,inst_38537);
var inst_38540 = cljs.core.async.timeout((1000));
var state_38551__$1 = (function (){var statearr_38572 = state_38551;
(statearr_38572[(7)] = inst_38538);

return statearr_38572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38551__$1,(4),inst_38540);
} else {
if((state_val_38552 === (3))){
var inst_38549 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38551__$1,inst_38549);
} else {
if((state_val_38552 === (4))){
var inst_38542 = (state_38551[(2)]);
var state_38551__$1 = (function (){var statearr_38575 = state_38551;
(statearr_38575[(8)] = inst_38542);

return statearr_38575;
})();
var statearr_38576_38930 = state_38551__$1;
(statearr_38576_38930[(2)] = null);

(statearr_38576_38930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30213__auto___38928,tmodel,table,userInput,data))
;
return ((function (switch__30004__auto__,c__30213__auto___38928,tmodel,table,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30005__auto__ = null;
var app2$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_38577 = [null,null,null,null,null,null,null,null,null];
(statearr_38577[(0)] = app2$main$main_$_state_machine__30005__auto__);

(statearr_38577[(1)] = (1));

return statearr_38577;
});
var app2$main$main_$_state_machine__30005__auto____1 = (function (state_38551){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_38551);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e38586){if((e38586 instanceof Object)){
var ex__30008__auto__ = e38586;
var statearr_38587_38931 = state_38551;
(statearr_38587_38931[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38932 = state_38551;
state_38551 = G__38932;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30005__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30005__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30005__auto____0;
app2$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30005__auto____1;
return app2$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___38928,tmodel,table,userInput,data))
})();
var state__30215__auto__ = (function (){var statearr_38588 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_38588[(6)] = c__30213__auto___38928);

return statearr_38588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___38928,tmodel,table,userInput,data))
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
return (function app2$main$main_$_drawQtable_$_iter__38597(s__38598){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel,table,userInput,data){
return (function (){
var s__38598__$1 = s__38598;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38598__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__38607 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38607,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38607,(1),null);
var iterys__4519__auto__ = ((function (s__38598__$1,vec__38607,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function app2$main$main_$_drawQtable_$_iter__38597_$_iter__38599(s__38600){
return (new cljs.core.LazySeq(null,((function (s__38598__$1,vec__38607,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function (){
var s__38600__$1 = s__38600;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38600__$1);
if(temp__5735__auto____$1){
var s__38600__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38600__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38600__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38602 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38601 = (0);
while(true){
if((i__38601 < size__4522__auto__)){
var vec__38614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38601);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(1),null);
cljs.core.chunk_append(b__38602,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__38933 = (i__38601 + (1));
i__38601 = G__38933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38602),app2$main$main_$_drawQtable_$_iter__38597_$_iter__38599(cljs.core.chunk_rest(s__38600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38602),null);
}
} else {
var vec__38640 = cljs.core.first(s__38600__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app2$main$main_$_drawQtable_$_iter__38597_$_iter__38599(cljs.core.rest(s__38600__$2)));
}
} else {
return null;
}
break;
}
});})(s__38598__$1,vec__38607,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
,null,null));
});})(s__38598__$1,vec__38607,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$main_$_drawQtable_$_iter__38597(cljs.core.rest(s__38598__$1)));
} else {
var G__38934 = cljs.core.rest(s__38598__$1);
s__38598__$1 = G__38934;
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
