goog.provide('app.t8.board');
goog.require('cljs.core');
app.t8.board.board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null))));
app.t8.board.lines = (function (){var hs = (function (){var iter__4523__auto__ = (function app$t8$board$iter__39097(s__39098){
return (new cljs.core.LazySeq(null,(function (){
var s__39098__$1 = s__39098;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39098__$1);
if(temp__5735__auto__){
var s__39098__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39098__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39098__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39100 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39099 = (0);
while(true){
if((i__39099 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39099);
cljs.core.chunk_append(b__39100,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null));

var G__39123 = (i__39099 + (1));
i__39099 = G__39123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39100),app$t8$board$iter__39097(cljs.core.chunk_rest(s__39098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39100),null);
}
} else {
var x = cljs.core.first(s__39098__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x], null)], null),app$t8$board$iter__39097(cljs.core.rest(s__39098__$2)));
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
return (function app$t8$board$iter__39101(s__39102){
return (new cljs.core.LazySeq(null,((function (hs){
return (function (){
var s__39102__$1 = s__39102;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39102__$1);
if(temp__5735__auto__){
var s__39102__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39102__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39102__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39104 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39103 = (0);
while(true){
if((i__39103 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39103);
cljs.core.chunk_append(b__39104,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null));

var G__39124 = (i__39103 + (1));
i__39103 = G__39124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39104),app$t8$board$iter__39101(cljs.core.chunk_rest(s__39102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39104),null);
}
} else {
var y = cljs.core.first(s__39102__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(2)], null)], null),app$t8$board$iter__39101(cljs.core.rest(s__39102__$2)));
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
return (function app$t8$board$iter__39105(s__39106){
return (new cljs.core.LazySeq(null,((function (hs,vs){
return (function (){
var s__39106__$1 = s__39106;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39106__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__39106__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function app$t8$board$iter__39105_$_iter__39107(s__39108){
return (new cljs.core.LazySeq(null,((function (s__39106__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs){
return (function (){
var s__39108__$1 = s__39108;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39108__$1);
if(temp__5735__auto____$1){
var s__39108__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39108__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39108__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39110 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39109 = (0);
while(true){
if((i__39109 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39109);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__39110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__39125 = (i__39109 + (1));
i__39109 = G__39125;
continue;
} else {
var G__39126 = (i__39109 + (1));
i__39109 = G__39126;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39110),app$t8$board$iter__39105_$_iter__39107(cljs.core.chunk_rest(s__39108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39110),null);
}
} else {
var y = cljs.core.first(s__39108__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app$t8$board$iter__39105_$_iter__39107(cljs.core.rest(s__39108__$2)));
} else {
var G__39127 = cljs.core.rest(s__39108__$2);
s__39108__$1 = G__39127;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39106__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
,null,null));
});})(s__39106__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t8$board$iter__39105(cljs.core.rest(s__39106__$1)));
} else {
var G__39128 = cljs.core.rest(s__39106__$1);
s__39106__$1 = G__39128;
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
return (function app$t8$board$iter__39111(s__39112){
return (new cljs.core.LazySeq(null,((function (hs,vs,x1){
return (function (){
var s__39112__$1 = s__39112;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39112__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__39112__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function app$t8$board$iter__39111_$_iter__39113(s__39114){
return (new cljs.core.LazySeq(null,((function (s__39112__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1){
return (function (){
var s__39114__$1 = s__39114;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39114__$1);
if(temp__5735__auto____$1){
var s__39114__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39114__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39114__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39116 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39115 = (0);
while(true){
if((i__39115 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39115);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
cljs.core.chunk_append(b__39116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__39129 = (i__39115 + (1));
i__39115 = G__39129;
continue;
} else {
var G__39130 = (i__39115 + (1));
i__39115 = G__39130;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39116),app$t8$board$iter__39111_$_iter__39113(cljs.core.chunk_rest(s__39114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39116),null);
}
} else {
var y = cljs.core.first(s__39114__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(x + y))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app$t8$board$iter__39111_$_iter__39113(cljs.core.rest(s__39114__$2)));
} else {
var G__39131 = cljs.core.rest(s__39114__$2);
s__39114__$1 = G__39131;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39112__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
,null,null));
});})(s__39112__$1,x,xs__6292__auto__,temp__5735__auto__,hs,vs,x1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t8$board$iter__39111(cljs.core.rest(s__39112__$1)));
} else {
var G__39132 = cljs.core.rest(s__39112__$1);
s__39112__$1 = G__39132;
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
app.t8.board.checkWin = (function app$t8$board$checkWin(board,player){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,player),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,pos);
}),line));
}),app.t8.board.lines));
});
app.t8.board.possibleActions = (function app$t8$board$possibleActions(board){
var iter__4523__auto__ = (function app$t8$board$possibleActions_$_iter__39117(s__39118){
return (new cljs.core.LazySeq(null,(function (){
var s__39118__$1 = s__39118;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39118__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__39118__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function app$t8$board$possibleActions_$_iter__39117_$_iter__39119(s__39120){
return (new cljs.core.LazySeq(null,((function (s__39118__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__39120__$1 = s__39120;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39120__$1);
if(temp__5735__auto____$1){
var s__39120__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39120__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39120__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39122 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39121 = (0);
while(true){
if((i__39121 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39121);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
cljs.core.chunk_append(b__39122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__39133 = (i__39121 + (1));
i__39121 = G__39133;
continue;
} else {
var G__39134 = (i__39121 + (1));
i__39121 = G__39134;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39122),app$t8$board$possibleActions_$_iter__39117_$_iter__39119(cljs.core.chunk_rest(s__39120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39122),null);
}
} else {
var y = cljs.core.first(s__39120__$2);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)) == null)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),app$t8$board$possibleActions_$_iter__39117_$_iter__39119(cljs.core.rest(s__39120__$2)));
} else {
var G__39135 = cljs.core.rest(s__39120__$2);
s__39120__$1 = G__39135;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39118__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__39118__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t8$board$possibleActions_$_iter__39117(cljs.core.rest(s__39118__$1)));
} else {
var G__39136 = cljs.core.rest(s__39118__$1);
s__39118__$1 = G__39136;
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

//# sourceMappingURL=app.t8.board.js.map
