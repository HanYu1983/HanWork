goog.provide('app2.main');
goog.require('cljs.core');
goog.require('app2.brain');
goog.require('cljs.core.async');
goog.require('reagent.core');
app2.main.board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null))));
app2.main.lines = (function (){var hs = (function (){var iter__4523__auto__ = (function app2$main$iter__37610(s__37611){
return (new cljs.core.LazySeq(null,(function (){
var s__37611__$1 = s__37611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37611__$1);
if(temp__5735__auto__){
var s__37611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37611__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37611__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37613 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37612 = (0);
while(true){
if((i__37612 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37612);
cljs.core.chunk_append(b__37613,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null));

var G__38112 = (i__37612 + (1));
i__37612 = G__38112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37613),app2$main$iter__37610(cljs.core.chunk_rest(s__37611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37613),null);
}
} else {
var x = cljs.core.first(s__37611__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null),app2$main$iter__37610(cljs.core.rest(s__37611__$2)));
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
return (function app2$main$iter__37614(s__37615){
return (new cljs.core.LazySeq(null,((function (hs){
return (function (){
var s__37615__$1 = s__37615;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37615__$1);
if(temp__5735__auto__){
var s__37615__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37615__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37615__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37617 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37616 = (0);
while(true){
if((i__37616 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37616);
cljs.core.chunk_append(b__37617,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null));

var G__38123 = (i__37616 + (1));
i__37616 = G__38123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37617),app2$main$iter__37614(cljs.core.chunk_rest(s__37615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37617),null);
}
} else {
var y = cljs.core.first(s__37615__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null),app2$main$iter__37614(cljs.core.rest(s__37615__$2)));
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
return (function app2$main$iter__37619(s__37620){
return (new cljs.core.LazySeq(null,((function (hs,vs){
return (function (){
var s__37620__$1 = s__37620;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37620__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37620__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function app2$main$iter__37619_$_iter__37621(s__37622){
return (new cljs.core.LazySeq(null,((function (s__37620__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function (){
var s__37622__$1 = s__37622;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37622__$1);
if(temp__5735__auto____$1){
var s__37622__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37622__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37622__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37624 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37623 = (0);
while(true){
if((i__37623 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37623);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__37624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38135 = (i__37623 + (1));
i__37623 = G__38135;
continue;
} else {
var G__38136 = (i__37623 + (1));
i__37623 = G__38136;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37624),app2$main$iter__37619_$_iter__37621(cljs.core.chunk_rest(s__37622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37624),null);
}
} else {
var y = cljs.core.first(s__37622__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__37619_$_iter__37621(cljs.core.rest(s__37622__$2)));
} else {
var G__38141 = cljs.core.rest(s__37622__$2);
s__37622__$1 = G__38141;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37620__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
,null,null));
});})(s__37620__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__37619(cljs.core.rest(s__37620__$1)));
} else {
var G__38146 = cljs.core.rest(s__37620__$1);
s__37620__$1 = G__38146;
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
return (function app2$main$iter__37633(s__37634){
return (new cljs.core.LazySeq(null,((function (hs,vs,x1){
return (function (){
var s__37634__$1 = s__37634;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37634__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37634__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function app2$main$iter__37633_$_iter__37635(s__37636){
return (new cljs.core.LazySeq(null,((function (s__37634__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function (){
var s__37636__$1 = s__37636;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37636__$1);
if(temp__5735__auto____$1){
var s__37636__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37636__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37636__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37638 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37637 = (0);
while(true){
if((i__37637 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37637);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
cljs.core.chunk_append(b__37638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38163 = (i__37637 + (1));
i__37637 = G__38163;
continue;
} else {
var G__38164 = (i__37637 + (1));
i__37637 = G__38164;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37638),app2$main$iter__37633_$_iter__37635(cljs.core.chunk_rest(s__37636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37638),null);
}
} else {
var y = cljs.core.first(s__37636__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$iter__37633_$_iter__37635(cljs.core.rest(s__37636__$2)));
} else {
var G__38165 = cljs.core.rest(s__37636__$2);
s__37636__$1 = G__38165;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37634__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
,null,null));
});})(s__37634__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$iter__37633(cljs.core.rest(s__37634__$1)));
} else {
var G__38166 = cljs.core.rest(s__37634__$1);
s__37634__$1 = G__38166;
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
var iter__4523__auto__ = (function app2$main$possibleActions_$_iter__37641(s__37642){
return (new cljs.core.LazySeq(null,(function (){
var s__37642__$1 = s__37642;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37642__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__37642__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app2$main$possibleActions_$_iter__37641_$_iter__37643(s__37644){
return (new cljs.core.LazySeq(null,((function (s__37642__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__37644__$1 = s__37644;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37644__$1);
if(temp__5735__auto____$1){
var s__37644__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37644__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37644__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37646 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37645 = (0);
while(true){
if((i__37645 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37645);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
cljs.core.chunk_append(b__37646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__38167 = (i__37645 + (1));
i__37645 = G__38167;
continue;
} else {
var G__38168 = (i__37645 + (1));
i__37645 = G__38168;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37646),app2$main$possibleActions_$_iter__37641_$_iter__37643(cljs.core.chunk_rest(s__37644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37646),null);
}
} else {
var y = cljs.core.first(s__37644__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app2$main$possibleActions_$_iter__37641_$_iter__37643(cljs.core.rest(s__37644__$2)));
} else {
var G__38169 = cljs.core.rest(s__37644__$2);
s__37644__$1 = G__38169;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37642__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__37642__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$possibleActions_$_iter__37641(cljs.core.rest(s__37642__$1)));
} else {
var G__38170 = cljs.core.rest(s__37642__$1);
s__37642__$1 = G__38170;
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
var c__30812__auto___38171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___38171,userInput,data){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___38171,userInput,data){
return (function (state_37838){
var state_val_37840 = (state_37838[(1)]);
if((state_val_37840 === (7))){
var inst_37831 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37846_38172 = state_37838__$1;
(statearr_37846_38172[(2)] = inst_37831);

(statearr_37846_38172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (20))){
var inst_37823 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37848_38173 = state_37838__$1;
(statearr_37848_38173[(2)] = inst_37823);

(statearr_37848_38173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (1))){
var inst_37673 = [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_37675 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_37676 = [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)];
var inst_37677 = cljs.core.PersistentHashMap.fromArrays(inst_37675,inst_37676);
var inst_37678 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047)];
var inst_37679 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37680 = [app2.brain.brain];
var inst_37681 = cljs.core.PersistentHashMap.fromArrays(inst_37679,inst_37680);
var inst_37682 = [new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37683 = [app2.brain.brain];
var inst_37684 = cljs.core.PersistentHashMap.fromArrays(inst_37682,inst_37683);
var inst_37685 = [inst_37681,inst_37684];
var inst_37686 = cljs.core.PersistentHashMap.fromArrays(inst_37678,inst_37685);
var inst_37687 = [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_37689 = [(0),(0),(0)];
var inst_37690 = cljs.core.PersistentHashMap.fromArrays(inst_37687,inst_37689);
var inst_37691 = [inst_37677,new cljs.core.Keyword(null,"player","player",-97687400),inst_37686,app2.main.board,inst_37690];
var inst_37692 = cljs.core.PersistentHashMap.fromArrays(inst_37673,inst_37691);
var inst_37693 = inst_37692;
var state_37838__$1 = (function (){var statearr_37853 = state_37838;
(statearr_37853[(7)] = inst_37693);

return statearr_37853;
})();
var statearr_37854_38174 = state_37838__$1;
(statearr_37854_38174[(2)] = null);

(statearr_37854_38174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (4))){
var inst_37700 = (state_37838[(8)]);
var inst_37703 = (state_37838[(2)]);
var inst_37707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_37700);
var state_37838__$1 = (function (){var statearr_37863 = state_37838;
(statearr_37863[(9)] = inst_37703);

return statearr_37863;
})();
if(inst_37707){
var statearr_37867_38175 = state_37838__$1;
(statearr_37867_38175[(1)] = (5));

} else {
var statearr_37868_38176 = state_37838__$1;
(statearr_37868_38176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (15))){
var inst_37693 = (state_37838[(7)]);
var inst_37722 = (state_37838[(10)]);
var inst_37729 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37730 = [app2.main.board,inst_37722];
var inst_37731 = cljs.core.PersistentHashMap.fromArrays(inst_37729,inst_37730);
var inst_37732 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37693,inst_37731], 0));
var inst_37734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37736 = [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"draw","draw",1358331674)];
var inst_37737 = (new cljs.core.PersistentVector(null,2,(5),inst_37734,inst_37736,null));
var inst_37738 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37732,inst_37737,cljs.core.inc);
var inst_37739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37740 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37741 = (new cljs.core.PersistentVector(null,3,(5),inst_37739,inst_37740,null));
var inst_37742 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37738,inst_37741,app2.brain.clearState);
var inst_37743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37744 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37745 = (new cljs.core.PersistentVector(null,3,(5),inst_37743,inst_37744,null));
var inst_37746 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37742,inst_37745,app2.brain.clearState);
var inst_37693__$1 = inst_37746;
var state_37838__$1 = (function (){var statearr_37875 = state_37838;
(statearr_37875[(7)] = inst_37693__$1);

return statearr_37875;
})();
var statearr_37876_38177 = state_37838__$1;
(statearr_37876_38177[(2)] = null);

(statearr_37876_38177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (21))){
var inst_37723 = (state_37838[(11)]);
var inst_37759 = (state_37838[(12)]);
var inst_37716 = (state_37838[(13)]);
var inst_37693 = (state_37838[(7)]);
var inst_37725 = (state_37838[(14)]);
var inst_37754 = (state_37838[(15)]);
var inst_37722 = (state_37838[(10)]);
var inst_37765 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(10));
var inst_37766 = app2.brain.updateR(inst_37759,inst_37765);
var inst_37768 = app2.brain.updateQ(inst_37766,inst_37723,inst_37754,inst_37725);
var inst_37769 = app2.brain.clearState(inst_37768);
var inst_37770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37771 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37722,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37772 = (new cljs.core.PersistentVector(null,3,(5),inst_37770,inst_37771,null));
var inst_37773 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37693,inst_37772);
var inst_37774 = (- (100));
var inst_37775 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_37774);
var inst_37776 = app2.brain.updateR(inst_37773,inst_37775);
var inst_37777 = app2.brain.updateQ(inst_37776,null,null,inst_37725);
var inst_37778 = app2.brain.clearState(inst_37777);
var inst_37779 = cljs.core.reset_BANG_(data,inst_37693);
var inst_37781 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37782 = [app2.main.board,inst_37722];
var inst_37783 = cljs.core.PersistentHashMap.fromArrays(inst_37781,inst_37782);
var inst_37784 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37693,inst_37783], 0));
var inst_37785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37787 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37716,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37788 = (new cljs.core.PersistentVector(null,3,(5),inst_37785,inst_37787,null));
var inst_37789 = cljs.core.constantly(inst_37769);
var inst_37790 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37784,inst_37788,inst_37789);
var inst_37793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37794 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37722,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37795 = (new cljs.core.PersistentVector(null,3,(5),inst_37793,inst_37794,null));
var inst_37796 = cljs.core.constantly(inst_37778);
var inst_37797 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37790,inst_37795,inst_37796);
var inst_37798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37799 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_37716];
var inst_37800 = (new cljs.core.PersistentVector(null,2,(5),inst_37798,inst_37799,null));
var inst_37801 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37797,inst_37800,cljs.core.inc);
var inst_37693__$1 = inst_37801;
var state_37838__$1 = (function (){var statearr_37881 = state_37838;
(statearr_37881[(16)] = inst_37779);

(statearr_37881[(7)] = inst_37693__$1);

return statearr_37881;
})();
var statearr_37882_38178 = state_37838__$1;
(statearr_37882_38178[(2)] = null);

(statearr_37882_38178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (13))){
var state_37838__$1 = state_37838;
var statearr_37883_38179 = state_37838__$1;
(statearr_37883_38179[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_37883_38179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (22))){
var inst_37759 = (state_37838[(12)]);
var inst_37716 = (state_37838[(13)]);
var inst_37762 = (state_37838[(17)]);
var inst_37693 = (state_37838[(7)]);
var inst_37722 = (state_37838[(10)]);
var inst_37806 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(1));
var inst_37807 = app2.brain.updateR(inst_37759,inst_37806);
var inst_37808 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_37809 = [inst_37762,inst_37722];
var inst_37810 = cljs.core.PersistentHashMap.fromArrays(inst_37808,inst_37809);
var inst_37811 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37693,inst_37810], 0));
var inst_37813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37815 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37716,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37816 = (new cljs.core.PersistentVector(null,3,(5),inst_37813,inst_37815,null));
var inst_37817 = cljs.core.constantly(inst_37807);
var inst_37818 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37811,inst_37816,inst_37817);
var inst_37693__$1 = inst_37818;
var state_37838__$1 = (function (){var statearr_37885 = state_37838;
(statearr_37885[(7)] = inst_37693__$1);

return statearr_37885;
})();
var statearr_37886_38180 = state_37838__$1;
(statearr_37886_38180[(2)] = null);

(statearr_37886_38180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (6))){
var inst_37700 = (state_37838[(8)]);
var inst_37713 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ai","ai",760454697),inst_37700);
var state_37838__$1 = state_37838;
if(inst_37713){
var statearr_37888_38181 = state_37838__$1;
(statearr_37888_38181[(1)] = (9));

} else {
var statearr_37889_38182 = state_37838__$1;
(statearr_37889_38182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (17))){
var inst_37825 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37890_38183 = state_37838__$1;
(statearr_37890_38183[(2)] = inst_37825);

(statearr_37890_38183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (3))){
var inst_37833 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37838__$1,inst_37833);
} else {
if((state_val_37840 === (12))){
var state_37838__$1 = state_37838;
var statearr_37891_38184 = state_37838__$1;
(statearr_37891_38184[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_37891_38184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (2))){
var inst_37693 = (state_37838[(7)]);
var inst_37696 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37697 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_37693);
var inst_37698 = [new cljs.core.Keyword(null,"players","players",-1361554569),inst_37697];
var inst_37699 = (new cljs.core.PersistentVector(null,2,(5),inst_37696,inst_37698,null));
var inst_37700 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37693,inst_37699);
var inst_37701 = cljs.core.async.timeout((10));
var state_37838__$1 = (function (){var statearr_37899 = state_37838;
(statearr_37899[(8)] = inst_37700);

return statearr_37899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37838__$1,(4),inst_37701);
} else {
if((state_val_37840 === (23))){
var inst_37821 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37900_38185 = state_37838__$1;
(statearr_37900_38185[(2)] = inst_37821);

(statearr_37900_38185[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (19))){
var inst_37723 = (state_37838[(11)]);
var inst_37716 = (state_37838[(13)]);
var inst_37762 = (state_37838[(17)]);
var inst_37753 = (state_37838[(18)]);
var inst_37725 = (state_37838[(14)]);
var inst_37754 = (state_37838[(15)]);
var inst_37759 = app2.brain.updateQ(inst_37753,inst_37723,inst_37754,inst_37725);
var inst_37761 = cljs.core.constantly(inst_37716);
var inst_37762__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_37723,inst_37754,inst_37761);
var inst_37763 = app2.main.checkWin(inst_37762__$1,inst_37716);
var state_37838__$1 = (function (){var statearr_37905 = state_37838;
(statearr_37905[(12)] = inst_37759);

(statearr_37905[(17)] = inst_37762__$1);

return statearr_37905;
})();
if(cljs.core.truth_(inst_37763)){
var statearr_37906_38186 = state_37838__$1;
(statearr_37906_38186[(1)] = (21));

} else {
var statearr_37908_38187 = state_37838__$1;
(statearr_37908_38187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (11))){
var inst_37829 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37912_38188 = state_37838__$1;
(statearr_37912_38188[(2)] = inst_37829);

(statearr_37912_38188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (9))){
var inst_37716 = (state_37838[(13)]);
var inst_37693 = (state_37838[(7)]);
var inst_37716__$1 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(inst_37693);
var inst_37718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37716__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var state_37838__$1 = (function (){var statearr_37913 = state_37838;
(statearr_37913[(13)] = inst_37716__$1);

return statearr_37913;
})();
if(inst_37718){
var statearr_37914_38189 = state_37838__$1;
(statearr_37914_38189[(1)] = (12));

} else {
var statearr_37915_38190 = state_37838__$1;
(statearr_37915_38190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (5))){
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37838__$1,(8),userInput);
} else {
if((state_val_37840 === (14))){
var inst_37723 = (state_37838[(11)]);
var inst_37693 = (state_37838[(7)]);
var inst_37725 = (state_37838[(14)]);
var inst_37722 = (state_37838[(2)]);
var inst_37723__$1 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(inst_37693);
var inst_37725__$1 = app2.main.possibleActions(inst_37723__$1);
var inst_37726 = cljs.core.count(inst_37725__$1);
var inst_37727 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_37726);
var state_37838__$1 = (function (){var statearr_37928 = state_37838;
(statearr_37928[(11)] = inst_37723__$1);

(statearr_37928[(14)] = inst_37725__$1);

(statearr_37928[(10)] = inst_37722);

return statearr_37928;
})();
if(inst_37727){
var statearr_37929_38194 = state_37838__$1;
(statearr_37929_38194[(1)] = (15));

} else {
var statearr_37930_38195 = state_37838__$1;
(statearr_37930_38195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (16))){
var inst_37723 = (state_37838[(11)]);
var inst_37716 = (state_37838[(13)]);
var inst_37753 = (state_37838[(18)]);
var inst_37693 = (state_37838[(7)]);
var inst_37725 = (state_37838[(14)]);
var inst_37754 = (state_37838[(15)]);
var inst_37750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37751 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),inst_37716,new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37752 = (new cljs.core.PersistentVector(null,3,(5),inst_37750,inst_37751,null));
var inst_37753__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37693,inst_37752);
var inst_37754__$1 = app2.brain.selectAction(inst_37753__$1,inst_37723,inst_37725);
var inst_37755 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37723,inst_37754__$1);
var state_37838__$1 = (function (){var statearr_37931 = state_37838;
(statearr_37931[(18)] = inst_37753__$1);

(statearr_37931[(15)] = inst_37754__$1);

return statearr_37931;
})();
if(cljs.core.truth_(inst_37755)){
var statearr_37932_38199 = state_37838__$1;
(statearr_37932_38199[(1)] = (18));

} else {
var statearr_37933_38200 = state_37838__$1;
(statearr_37933_38200[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (10))){
var inst_37693 = (state_37838[(7)]);
var tmp37923 = inst_37693;
var inst_37693__$1 = tmp37923;
var state_37838__$1 = (function (){var statearr_37935 = state_37838;
(statearr_37935[(7)] = inst_37693__$1);

return statearr_37935;
})();
var statearr_37936_38202 = state_37838__$1;
(statearr_37936_38202[(2)] = null);

(statearr_37936_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (18))){
var inst_37757 = throw$("\u4F4D\u7F6E\u5DF2\u88AB\u4E0B\u904E. \u9019\u88E1\u4E0D\u8A72\u88AB\u57F7\u884C\u5230");
var state_37838__$1 = state_37838;
var statearr_37937_38205 = state_37838__$1;
(statearr_37937_38205[(2)] = inst_37757);

(statearr_37937_38205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37840 === (8))){
var inst_37693 = (state_37838[(7)]);
var inst_37710 = (state_37838[(2)]);
var tmp37934 = inst_37693;
var inst_37693__$1 = tmp37934;
var state_37838__$1 = (function (){var statearr_37938 = state_37838;
(statearr_37938[(19)] = inst_37710);

(statearr_37938[(7)] = inst_37693__$1);

return statearr_37938;
})();
var statearr_37939_38206 = state_37838__$1;
(statearr_37939_38206[(2)] = null);

(statearr_37939_38206[(1)] = (2));


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
});})(c__30812__auto___38171,userInput,data))
;
return ((function (switch__30584__auto__,c__30812__auto___38171,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30585__auto__ = null;
var app2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_37940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37940[(0)] = app2$main$main_$_state_machine__30585__auto__);

(statearr_37940[(1)] = (1));

return statearr_37940;
});
var app2$main$main_$_state_machine__30585__auto____1 = (function (state_37838){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37838);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e37941){if((e37941 instanceof Object)){
var ex__30588__auto__ = e37941;
var statearr_37942_38208 = state_37838;
(statearr_37942_38208[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38209 = state_37838;
state_37838 = G__38209;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30585__auto__ = function(state_37838){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30585__auto____1.call(this,state_37838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30585__auto____0;
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30585__auto____1;
return app2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___38171,userInput,data))
})();
var state__30814__auto__ = (function (){var statearr_37943 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_37943[(6)] = c__30812__auto___38171);

return statearr_37943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___38171,userInput,data))
);


var state_38210 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app2.main.board);
var active_38211 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400));
var result_38212 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__30812__auto___38213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data){
return (function (state_37993){
var state_val_37994 = (state_37993[(1)]);
if((state_val_37994 === (7))){
var inst_37948 = (state_37993[(7)]);
var inst_37959 = (state_37993[(8)]);
var inst_37957 = (state_37993[(9)]);
var inst_37955 = (state_37993[(10)]);
var inst_37951 = (state_37993[(11)]);
var inst_37963 = (function (){var pred__37945 = cljs.core._EQ_;
var expr__37946 = inst_37948;
var model = inst_37951;
var brain = inst_37955;
var actions = inst_37957;
var bestAction = inst_37959;
return ((function (pred__37945,expr__37946,model,brain,actions,bestAction,inst_37948,inst_37959,inst_37957,inst_37955,inst_37951,state_val_37994,c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,bestAction,cljs.core.constantly(new cljs.core.Keyword(null,"enemy","enemy",-956472047)));
});
;})(pred__37945,expr__37946,model,brain,actions,bestAction,inst_37948,inst_37959,inst_37957,inst_37955,inst_37951,state_val_37994,c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data))
})();
var inst_37964 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_38210,inst_37963);
var inst_37965 = cljs.core.deref(active_38211);
var inst_37966 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),inst_37965);
var state_37993__$1 = (function (){var statearr_37995 = state_37993;
(statearr_37995[(12)] = inst_37964);

return statearr_37995;
})();
if(inst_37966){
var statearr_37996_38214 = state_37993__$1;
(statearr_37996_38214[(1)] = (10));

} else {
var statearr_37997_38215 = state_37993__$1;
(statearr_37997_38215[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (1))){
var state_37993__$1 = state_37993;
var statearr_37998_38216 = state_37993__$1;
(statearr_37998_38216[(2)] = null);

(statearr_37998_38216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (4))){
var inst_37957 = (state_37993[(9)]);
var inst_37955 = (state_37993[(10)]);
var inst_37951 = (state_37993[(11)]);
var inst_37951__$1 = cljs.core.deref(data);
var inst_37952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37953 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_37954 = (new cljs.core.PersistentVector(null,3,(5),inst_37952,inst_37953,null));
var inst_37955__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37951__$1,inst_37954);
var inst_37956 = cljs.core.deref(state_38210);
var inst_37957__$1 = app2.main.possibleActions(inst_37956);
var inst_37958 = cljs.core.deref(state_38210);
var inst_37959 = app2.brain.bestAction(inst_37955__$1,inst_37958,inst_37957__$1);
var inst_37960 = cljs.core.count(inst_37957__$1);
var inst_37961 = (inst_37960 > (0));
var state_37993__$1 = (function (){var statearr_37999 = state_37993;
(statearr_37999[(8)] = inst_37959);

(statearr_37999[(9)] = inst_37957__$1);

(statearr_37999[(10)] = inst_37955__$1);

(statearr_37999[(11)] = inst_37951__$1);

return statearr_37999;
})();
if(cljs.core.truth_(inst_37961)){
var statearr_38000_38217 = state_37993__$1;
(statearr_38000_38217[(1)] = (7));

} else {
var statearr_38001_38218 = state_37993__$1;
(statearr_38001_38218[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (13))){
var inst_37976 = (state_37993[(2)]);
var state_37993__$1 = (function (){var statearr_38002 = state_37993;
(statearr_38002[(13)] = inst_37976);

return statearr_38002;
})();
var statearr_38003_38219 = state_37993__$1;
(statearr_38003_38219[(2)] = null);

(statearr_38003_38219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (6))){
var inst_37989 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
var statearr_38004_38220 = state_37993__$1;
(statearr_38004_38220[(2)] = inst_37989);

(statearr_38004_38220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (3))){
var inst_37991 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37993__$1,inst_37991);
} else {
if((state_val_37994 === (12))){
var inst_37970 = (state_37993[(2)]);
var inst_37971 = cljs.core.reset_BANG_(active_38211,inst_37970);
var state_37993__$1 = (function (){var statearr_38005 = state_37993;
(statearr_38005[(14)] = inst_37971);

return statearr_38005;
})();
var statearr_38006_38228 = state_37993__$1;
(statearr_38006_38228[(2)] = null);

(statearr_38006_38228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (2))){
var inst_37948 = (state_37993[(7)]);
var inst_37948__$1 = cljs.core.deref(active_38211);
var inst_37949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enemy","enemy",-956472047),inst_37948__$1);
var state_37993__$1 = (function (){var statearr_38007 = state_37993;
(statearr_38007[(7)] = inst_37948__$1);

return statearr_38007;
})();
if(inst_37949){
var statearr_38008_38229 = state_37993__$1;
(statearr_38008_38229[(1)] = (4));

} else {
var statearr_38009_38230 = state_37993__$1;
(statearr_38009_38230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (11))){
var state_37993__$1 = state_37993;
var statearr_38010_38231 = state_37993__$1;
(statearr_38010_38231[(2)] = new cljs.core.Keyword(null,"player","player",-97687400));

(statearr_38010_38231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (9))){
var inst_37979 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
var statearr_38011_38232 = state_37993__$1;
(statearr_38011_38232[(2)] = inst_37979);

(statearr_38011_38232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (5))){
var inst_37981 = cljs.core.async.timeout((1000));
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37993__$1,(14),inst_37981);
} else {
if((state_val_37994 === (14))){
var inst_37983 = (state_37993[(2)]);
var inst_37984 = cljs.core.deref(data);
var inst_37985 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_37984);
var inst_37986 = cljs.core.reset_BANG_(result_38212,inst_37985);
var state_37993__$1 = (function (){var statearr_38012 = state_37993;
(statearr_38012[(15)] = inst_37986);

(statearr_38012[(16)] = inst_37983);

return statearr_38012;
})();
var statearr_38013_38296 = state_37993__$1;
(statearr_38013_38296[(2)] = null);

(statearr_38013_38296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (10))){
var state_37993__$1 = state_37993;
var statearr_38014_38304 = state_37993__$1;
(statearr_38014_38304[(2)] = new cljs.core.Keyword(null,"enemy","enemy",-956472047));

(statearr_38014_38304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (8))){
var inst_37974 = cljs.core.async.timeout((1000));
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37993__$1,(13),inst_37974);
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
});})(c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data))
;
return ((function (switch__30584__auto__,c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30585__auto__ = null;
var app2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38015[(0)] = app2$main$main_$_state_machine__30585__auto__);

(statearr_38015[(1)] = (1));

return statearr_38015;
});
var app2$main$main_$_state_machine__30585__auto____1 = (function (state_37993){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_37993);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38016){if((e38016 instanceof Object)){
var ex__30588__auto__ = e38016;
var statearr_38017_38313 = state_37993;
(statearr_38017_38313[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38314 = state_37993;
state_37993 = G__38314;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30585__auto__ = function(state_37993){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30585__auto____1.call(this,state_37993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30585__auto____0;
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30585__auto____1;
return app2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data))
})();
var state__30814__auto__ = (function (){var statearr_38018 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38018[(6)] = c__30812__auto___38213);

return statearr_38018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___38213,state_38210,active_38211,result_38212,userInput,data))
);


app2.main.drawPlayground = ((function (state_38210,active_38211,result_38212,userInput,data){
return (function app2$main$main_$_drawPlayground(){
var s = cljs.core.deref(state_38210);
var ac = cljs.core.deref(active_38211);
var r = cljs.core.deref(result_38212);
var drawValue = ((function (s,ac,r,state_38210,active_38211,result_38212,userInput,data){
return (function (y,x){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var pred__38019 = cljs.core._EQ_;
var expr__38020 = v;
if(cljs.core.truth_((function (){var G__38022 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__38023 = expr__38020;
return (pred__38019.cljs$core$IFn$_invoke$arity$2 ? pred__38019.cljs$core$IFn$_invoke$arity$2(G__38022,G__38023) : pred__38019.call(null,G__38022,G__38023));
})())){
return "O";
} else {
if(cljs.core.truth_((function (){var G__38024 = new cljs.core.Keyword(null,"enemy","enemy",-956472047);
var G__38025 = expr__38020;
return (pred__38019.cljs$core$IFn$_invoke$arity$2 ? pred__38019.cljs$core$IFn$_invoke$arity$2(G__38024,G__38025) : pred__38019.call(null,G__38024,G__38025));
})())){
return "X";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pred__38019,expr__38020,v,s,ac,r,state_38210,active_38211,result_38212,userInput,data){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_38210,((function (pred__38019,expr__38020,v,s,ac,r,state_38210,active_38211,result_38212,userInput,data){
return (function (origin){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.constantly(new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__38019,expr__38020,v,s,ac,r,state_38210,active_38211,result_38212,userInput,data))
);

return cljs.core.reset_BANG_(active_38211,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref(active_38211)))?new cljs.core.Keyword(null,"enemy","enemy",-956472047):new cljs.core.Keyword(null,"player","player",-97687400)));
});})(pred__38019,expr__38020,v,s,ac,r,state_38210,active_38211,result_38212,userInput,data))
], null),"O"], null);
}
}
});})(s,ac,r,state_38210,active_38211,result_38212,userInput,data))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data){
return (function (){
return cljs.core.reset_BANG_(state_38210,app2.main.board);
});})(s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data))
], null),"clear"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["active ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ac)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var pred__38026 = cljs.core._EQ_;
var expr__38027 = ac;
if(cljs.core.truth_((function (){var G__38029 = new cljs.core.Keyword(null,"player","player",-97687400);
var G__38030 = expr__38027;
return (pred__38026.cljs$core$IFn$_invoke$arity$2 ? pred__38026.cljs$core$IFn$_invoke$arity$2(G__38029,G__38030) : pred__38026.call(null,G__38029,G__38030));
})())){
var iter__4523__auto__ = ((function (pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__38032(s__38033){
return (new cljs.core.LazySeq(null,((function (pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data){
return (function (){
var s__38033__$1 = s__38033;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38033__$1);
if(temp__5735__auto__){
var s__38033__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38033__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38033__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38035 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38034 = (0);
while(true){
if((i__38034 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38034);
cljs.core.chunk_append(b__38035,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__38332 = (i__38034 + (1));
i__38034 = G__38332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38035),app2$main$main_$_drawPlayground_$_iter__38032(cljs.core.chunk_rest(s__38033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38035),null);
}
} else {
var y = cljs.core.first(s__38033__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__38032(cljs.core.rest(s__38033__$2)));
}
} else {
return null;
}
break;
}
});})(pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data))
,null,null));
});})(pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
} else {
var iter__4523__auto__ = ((function (pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data){
return (function app2$main$main_$_drawPlayground_$_iter__38036(s__38037){
return (new cljs.core.LazySeq(null,((function (pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data){
return (function (){
var s__38037__$1 = s__38037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38037__$1);
if(temp__5735__auto__){
var s__38037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38037__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38037__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38039 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38038 = (0);
while(true){
if((i__38038 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38038);
cljs.core.chunk_append(b__38039,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)));

var G__38338 = (i__38038 + (1));
i__38038 = G__38338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),app2$main$main_$_drawPlayground_$_iter__38036(cljs.core.chunk_rest(s__38037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38039),null);
}
} else {
var y = cljs.core.first(s__38037__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),drawValue(y,(2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)], null)),app2$main$main_$_drawPlayground_$_iter__38036(cljs.core.rest(s__38037__$2)));
}
} else {
return null;
}
break;
}
});})(pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data))
,null,null));
});})(pred__38026,expr__38027,s,ac,r,drawValue,state_38210,active_38211,result_38212,userInput,data))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
}
})()], null)], null)], null);
});})(state_38210,active_38211,result_38212,userInput,data))
;

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app2.main.drawPlayground], null),document.getElementById("playground"));

var tmodel = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var c__30812__auto___38339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___38339,tmodel,table,userInput,data){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___38339,tmodel,table,userInput,data){
return (function (state_38055){
var state_val_38056 = (state_38055[(1)]);
if((state_val_38056 === (1))){
var state_38055__$1 = state_38055;
var statearr_38057_38340 = state_38055__$1;
(statearr_38057_38340[(2)] = null);

(statearr_38057_38340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38056 === (2))){
var inst_38041 = cljs.core.deref(data);
var inst_38042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38043 = [new cljs.core.Keyword(null,"playerInfos","playerInfos",-999450495),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"brain","brain",428499577)];
var inst_38044 = (new cljs.core.PersistentVector(null,3,(5),inst_38042,inst_38043,null));
var inst_38045 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38041,inst_38044);
var inst_38046 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(inst_38045);
var inst_38047 = cljs.core.reset_BANG_(table,inst_38046);
var inst_38048 = cljs.core.async.timeout((1000));
var state_38055__$1 = (function (){var statearr_38061 = state_38055;
(statearr_38061[(7)] = inst_38047);

return statearr_38061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38055__$1,(4),inst_38048);
} else {
if((state_val_38056 === (3))){
var inst_38053 = (state_38055[(2)]);
var state_38055__$1 = state_38055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38055__$1,inst_38053);
} else {
if((state_val_38056 === (4))){
var inst_38050 = (state_38055[(2)]);
var state_38055__$1 = (function (){var statearr_38065 = state_38055;
(statearr_38065[(8)] = inst_38050);

return statearr_38065;
})();
var statearr_38066_38341 = state_38055__$1;
(statearr_38066_38341[(2)] = null);

(statearr_38066_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30812__auto___38339,tmodel,table,userInput,data))
;
return ((function (switch__30584__auto__,c__30812__auto___38339,tmodel,table,userInput,data){
return (function() {
var app2$main$main_$_state_machine__30585__auto__ = null;
var app2$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_38067 = [null,null,null,null,null,null,null,null,null];
(statearr_38067[(0)] = app2$main$main_$_state_machine__30585__auto__);

(statearr_38067[(1)] = (1));

return statearr_38067;
});
var app2$main$main_$_state_machine__30585__auto____1 = (function (state_38055){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_38055);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e38068){if((e38068 instanceof Object)){
var ex__30588__auto__ = e38068;
var statearr_38070_38346 = state_38055;
(statearr_38070_38346[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38351 = state_38055;
state_38055 = G__38351;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app2$main$main_$_state_machine__30585__auto__ = function(state_38055){
switch(arguments.length){
case 0:
return app2$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app2$main$main_$_state_machine__30585__auto____1.call(this,state_38055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app2$main$main_$_state_machine__30585__auto____0;
app2$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app2$main$main_$_state_machine__30585__auto____1;
return app2$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___38339,tmodel,table,userInput,data))
})();
var state__30814__auto__ = (function (){var statearr_38074 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_38074[(6)] = c__30812__auto___38339);

return statearr_38074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___38339,tmodel,table,userInput,data))
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
return (function app2$main$main_$_drawQtable_$_iter__38075(s__38076){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel,table,userInput,data){
return (function (){
var s__38076__$1 = s__38076;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38076__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__38084 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38084,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38084,(1),null);
var iterys__4519__auto__ = ((function (s__38076__$1,vec__38084,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function app2$main$main_$_drawQtable_$_iter__38075_$_iter__38077(s__38078){
return (new cljs.core.LazySeq(null,((function (s__38076__$1,vec__38084,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data){
return (function (){
var s__38078__$1 = s__38078;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38078__$1);
if(temp__5735__auto____$1){
var s__38078__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38078__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38078__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38080 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38079 = (0);
while(true){
if((i__38079 < size__4522__auto__)){
var vec__38089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38079);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(1),null);
cljs.core.chunk_append(b__38080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__38359 = (i__38079 + (1));
i__38079 = G__38359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38080),app2$main$main_$_drawQtable_$_iter__38075_$_iter__38077(cljs.core.chunk_rest(s__38078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38080),null);
}
} else {
var vec__38094 = cljs.core.first(s__38078__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app2$main$main_$_drawQtable_$_iter__38075_$_iter__38077(cljs.core.rest(s__38078__$2)));
}
} else {
return null;
}
break;
}
});})(s__38076__$1,vec__38084,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
,null,null));
});})(s__38076__$1,vec__38084,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel,table,userInput,data))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app2$main$main_$_drawQtable_$_iter__38075(cljs.core.rest(s__38076__$1)));
} else {
var G__38360 = cljs.core.rest(s__38076__$1);
s__38076__$1 = G__38360;
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
