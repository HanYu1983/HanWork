// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t6.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t6.main.p5 = window;
app.t6.main.cw = (300);
app.t6.main.ch = (300);
app.t6.main.w = (10);
app.t6.main.h = (10);
app.t6.main.gw = ((app.t6.main.cw / app.t6.main.w) | (0));
app.t6.main.gh = ((app.t6.main.ch / app.t6.main.h) | (0));
app.t6.main.mineCnt = (10);
app.t6.main.mine = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,app.t6.main.mineCnt,(1)),cljs.core.repeat.call(null,((app.t6.main.w * app.t6.main.h) - app.t6.main.mineCnt),(0)))))));
app.t6.main.cells = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,(function (){var iter__4292__auto__ = (function app$t6$main$iter__16466(s__16467){
return (new cljs.core.LazySeq(null,(function (){
var s__16467__$1 = s__16467;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16467__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__16467__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$iter__16466_$_iter__16468(s__16469){
return (new cljs.core.LazySeq(null,((function (s__16467__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16469__$1 = s__16469;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16469__$1);
if(temp__5457__auto____$1){
var s__16469__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16469__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16469__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16471 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16470 = (0);
while(true){
if((i__16470 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__16470);
cljs.core.chunk_append.call(null,b__16471,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})());

var G__16472 = (i__16470 + (1));
i__16470 = G__16472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16471),app$t6$main$iter__16466_$_iter__16468.call(null,cljs.core.chunk_rest.call(null,s__16469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16471),null);
}
} else {
var x = cljs.core.first.call(null,s__16469__$2);
return cljs.core.cons.call(null,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})(),app$t6$main$iter__16466_$_iter__16468.call(null,cljs.core.rest.call(null,s__16469__$2)));
}
} else {
return null;
}
break;
}
});})(s__16467__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16467__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$iter__16466.call(null,cljs.core.rest.call(null,s__16467__$1)));
} else {
var G__16473 = cljs.core.rest.call(null,s__16467__$1);
s__16467__$1 = G__16473;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,app.t6.main.h));
})())));
app.t6.main.flag = (function app$t6$main$flag(p__16474,ctx){
var vec__16475 = p__16474;
var r = cljs.core.nth.call(null,vec__16475,(0),null);
var c = cljs.core.nth.call(null,vec__16475,(1),null);
var rc = vec__16475;
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__16478 = cljs.core._EQ_;
var expr__16479 = s;
if(cljs.core.truth_(pred__16478.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__16479))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_(pred__16478.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__16479))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__16481,ctx){
var vec__16482 = p__16481;
var r = cljs.core.nth.call(null,vec__16482,(0),null);
var c = cljs.core.nth.call(null,vec__16482,(1),null);
var rc = vec__16482;
var v = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null));
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),s))){
return ctx;
} else {
if((v == null)){
return ctx;
} else {
if(cljs.core._EQ_.call(null,(9),v)){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameState","gameState",1531780829)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
if(cljs.core._EQ_.call(null,(0),v)){
return cljs.core.reduce.call(null,((function (v,s,vec__16482,r,c,rc){
return (function (ctx__$1,p__16485){
var vec__16486 = p__16485;
var r__$1 = cljs.core.nth.call(null,vec__16486,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__16486,(1),null);
var offset = vec__16486;
return app.t6.main.flip.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,rc),ctx__$1);
});})(v,s,vec__16482,r,c,rc))
,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.main = (function app$t6$main$main(){
app.t6.main.model = null;

app.t6.main.evt = cljs.core.async.chan.call(null);

var c__2882__auto___16636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___16636){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___16636){
return (function (state_16550){
var state_val_16551 = (state_16550[(1)]);
if((state_val_16551 === (7))){
var inst_16546 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16553_16637 = state_16550__$1;
(statearr_16553_16637[(2)] = inst_16546);

(statearr_16553_16637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (1))){
var inst_16489 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_16490 = cljs.core.PersistentVector.EMPTY;
var inst_16491 = cljs.core.PersistentVector.EMPTY;
var inst_16492 = cljs.core.partial.call(null,cljs.core.into,inst_16491);
var inst_16493 = (app.t6.main.w * app.t6.main.h);
var inst_16494 = cljs.core.repeat.call(null,inst_16493,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_16495 = cljs.core.partition.call(null,app.t6.main.w,inst_16494);
var inst_16496 = cljs.core.map.call(null,inst_16492,inst_16495);
var inst_16497 = cljs.core.into.call(null,inst_16490,inst_16496);
var inst_16498 = [app.t6.main.cells,inst_16497,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_16499 = cljs.core.PersistentHashMap.fromArrays(inst_16489,inst_16498);
var inst_16500 = inst_16499;
var state_16550__$1 = (function (){var statearr_16554 = state_16550;
(statearr_16554[(7)] = inst_16500);

return statearr_16554;
})();
var statearr_16555_16638 = state_16550__$1;
(statearr_16555_16638[(2)] = null);

(statearr_16555_16638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (4))){
var inst_16504 = (state_16550[(8)]);
var inst_16508 = (state_16550[(9)]);
var inst_16504__$1 = (state_16550[(2)]);
var inst_16508__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_16504__$1);
var inst_16509 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_16508__$1);
var state_16550__$1 = (function (){var statearr_16556 = state_16550;
(statearr_16556[(8)] = inst_16504__$1);

(statearr_16556[(9)] = inst_16508__$1);

return statearr_16556;
})();
if(inst_16509){
var statearr_16557_16639 = state_16550__$1;
(statearr_16557_16639[(1)] = (5));

} else {
var statearr_16558_16640 = state_16550__$1;
(statearr_16558_16640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (15))){
var inst_16500 = (state_16550[(7)]);
var tmp16552 = inst_16500;
var inst_16500__$1 = tmp16552;
var state_16550__$1 = (function (){var statearr_16559 = state_16550;
(statearr_16559[(7)] = inst_16500__$1);

return statearr_16559;
})();
var statearr_16560_16641 = state_16550__$1;
(statearr_16560_16641[(2)] = null);

(statearr_16560_16641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (13))){
var inst_16534 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16561_16642 = state_16550__$1;
(statearr_16561_16642[(2)] = inst_16534);

(statearr_16561_16642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (6))){
var inst_16508 = (state_16550[(9)]);
var inst_16538 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_16508);
var state_16550__$1 = state_16550;
if(inst_16538){
var statearr_16563_16643 = state_16550__$1;
(statearr_16563_16643[(1)] = (14));

} else {
var statearr_16564_16644 = state_16550__$1;
(statearr_16564_16644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (3))){
var inst_16548 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16550__$1,inst_16548);
} else {
if((state_val_16551 === (12))){
var inst_16500 = (state_16550[(7)]);
var tmp16562 = inst_16500;
var inst_16500__$1 = tmp16562;
var state_16550__$1 = (function (){var statearr_16565 = state_16550;
(statearr_16565[(7)] = inst_16500__$1);

return statearr_16565;
})();
var statearr_16566_16645 = state_16550__$1;
(statearr_16566_16645[(2)] = null);

(statearr_16566_16645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (2))){
var inst_16500 = (state_16550[(7)]);
var inst_16502 = app.t6.main.model = inst_16500;
var state_16550__$1 = (function (){var statearr_16567 = state_16550;
(statearr_16567[(10)] = inst_16502);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16550__$1,(4),app.t6.main.evt);
} else {
if((state_val_16551 === (11))){
var inst_16518 = (state_16550[(11)]);
var inst_16500 = (state_16550[(7)]);
var inst_16529 = app.t6.main.flag.call(null,inst_16518,inst_16500);
var inst_16500__$1 = inst_16529;
var state_16550__$1 = (function (){var statearr_16568 = state_16550;
(statearr_16568[(7)] = inst_16500__$1);

return statearr_16568;
})();
var statearr_16569_16646 = state_16550__$1;
(statearr_16569_16646[(2)] = null);

(statearr_16569_16646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (9))){
var inst_16514 = (state_16550[(12)]);
var inst_16527 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),inst_16514);
var state_16550__$1 = state_16550;
if(inst_16527){
var statearr_16571_16647 = state_16550__$1;
(statearr_16571_16647[(1)] = (11));

} else {
var statearr_16572_16648 = state_16550__$1;
(statearr_16572_16648[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (5))){
var inst_16504 = (state_16550[(8)]);
var inst_16514 = (state_16550[(12)]);
var inst_16511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16512 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_16513 = (new cljs.core.PersistentVector(null,2,(5),inst_16511,inst_16512,null));
var inst_16514__$1 = cljs.core.get_in.call(null,inst_16504,inst_16513);
var inst_16515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16516 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_16517 = (new cljs.core.PersistentVector(null,2,(5),inst_16515,inst_16516,null));
var inst_16518 = cljs.core.get_in.call(null,inst_16504,inst_16517);
var inst_16522 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),inst_16514__$1);
var state_16550__$1 = (function (){var statearr_16573 = state_16550;
(statearr_16573[(12)] = inst_16514__$1);

(statearr_16573[(11)] = inst_16518);

return statearr_16573;
})();
if(inst_16522){
var statearr_16574_16649 = state_16550__$1;
(statearr_16574_16649[(1)] = (8));

} else {
var statearr_16575_16650 = state_16550__$1;
(statearr_16575_16650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (14))){
var inst_16500 = (state_16550[(7)]);
var tmp16570 = inst_16500;
var inst_16500__$1 = tmp16570;
var state_16550__$1 = (function (){var statearr_16576 = state_16550;
(statearr_16576[(7)] = inst_16500__$1);

return statearr_16576;
})();
var statearr_16577_16651 = state_16550__$1;
(statearr_16577_16651[(2)] = null);

(statearr_16577_16651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (16))){
var inst_16544 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16578_16652 = state_16550__$1;
(statearr_16578_16652[(2)] = inst_16544);

(statearr_16578_16652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (10))){
var inst_16536 = (state_16550[(2)]);
var state_16550__$1 = state_16550;
var statearr_16579_16653 = state_16550__$1;
(statearr_16579_16653[(2)] = inst_16536);

(statearr_16579_16653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16551 === (8))){
var inst_16518 = (state_16550[(11)]);
var inst_16500 = (state_16550[(7)]);
var inst_16524 = app.t6.main.flip.call(null,inst_16518,inst_16500);
var inst_16500__$1 = inst_16524;
var state_16550__$1 = (function (){var statearr_16580 = state_16550;
(statearr_16580[(7)] = inst_16500__$1);

return statearr_16580;
})();
var statearr_16581_16654 = state_16550__$1;
(statearr_16581_16654[(2)] = null);

(statearr_16581_16654[(1)] = (2));


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
});})(c__2882__auto___16636))
;
return ((function (switch__2792__auto__,c__2882__auto___16636){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16582 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16582[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_16582[(1)] = (1));

return statearr_16582;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_16550){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16583){if((e16583 instanceof Object)){
var ex__2796__auto__ = e16583;
var statearr_16584_16655 = state_16550;
(statearr_16584_16655[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16656 = state_16550;
state_16550 = G__16656;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_16550){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_16550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___16636))
})();
var state__2884__auto__ = (function (){var statearr_16585 = f__2883__auto__.call(null);
(statearr_16585[(6)] = c__2882__auto___16636);

return statearr_16585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___16636))
);


app.t6.main.p5.setup = (function (){
var canvas = app.t6.main.p5.createCanvas(app.t6.main.cw,app.t6.main.ch);
return canvas.parent("container");
});

app.t6.main.p5.draw = (function (){
app.t6.main.p5.fill((255));

app.t6.main.p5.stroke((0));

app.t6.main.p5.rect((0),(0),app.t6.main.cw,app.t6.main.ch);

if(cljs.core.truth_(app.t6.main.model)){
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t6$main$main_$_iter__16586(s__16587){
return (new cljs.core.LazySeq(null,(function (){
var s__16587__$1 = s__16587;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16587__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__16587__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$main_$_iter__16586_$_iter__16588(s__16589){
return (new cljs.core.LazySeq(null,((function (s__16587__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16589__$1 = s__16589;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16589__$1);
if(temp__5457__auto____$1){
var s__16589__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16589__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16589__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16591 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16590 = (0);
while(true){
if((i__16590 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__16590);
cljs.core.chunk_append.call(null,b__16591,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
var pred__16592 = cljs.core._EQ_;
var expr__16593 = s;
if(cljs.core.truth_(pred__16592.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__16593))){
app.t6.main.p5.fill((255));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core.truth_(pred__16592.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__16593))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.p5.text(v,(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
if(cljs.core.truth_(pred__16592.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__16593))){
return app.t6.main.p5.text("flag",(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16593)].join('')));
}
}
}
})());

var G__16657 = (i__16590 + (1));
i__16590 = G__16657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16591),app$t6$main$main_$_iter__16586_$_iter__16588.call(null,cljs.core.chunk_rest.call(null,s__16589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16591),null);
}
} else {
var x = cljs.core.first.call(null,s__16589__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
var pred__16595 = cljs.core._EQ_;
var expr__16596 = s;
if(cljs.core.truth_(pred__16595.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__16596))){
app.t6.main.p5.fill((255));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core.truth_(pred__16595.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__16596))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.p5.text(v,(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
if(cljs.core.truth_(pred__16595.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__16596))){
return app.t6.main.p5.text("flag",(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16596)].join('')));
}
}
}
})(),app$t6$main$main_$_iter__16586_$_iter__16588.call(null,cljs.core.rest.call(null,s__16589__$2)));
}
} else {
return null;
}
break;
}
});})(s__16587__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16587__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$main_$_iter__16586.call(null,cljs.core.rest.call(null,s__16587__$1)));
} else {
var G__16658 = cljs.core.rest.call(null,s__16587__$1);
s__16587__$1 = G__16658;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,app.t6.main.h));
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))){
return app.t6.main.p5.text("DIED",(app.t6.main.cw / (2)),(app.t6.main.ch / (2)));
} else {
return null;
}
} else {
return null;
}
});

app.t6.main.p5.mouseReleased = (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_16618){
var state_val_16619 = (state_16618[(1)]);
if((state_val_16619 === (1))){
var inst_16598 = app.t6.main.p5.mouseX;
var inst_16599 = app.t6.main.p5.mouseY;
var inst_16600 = app.t6.main.p5.mouseButton;
var inst_16601 = (inst_16598 / app.t6.main.gw);
var inst_16602 = (inst_16601 | (0));
var inst_16603 = (inst_16599 / app.t6.main.gh);
var inst_16604 = (inst_16603 | (0));
var inst_16605 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_16606 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_16607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16608 = [inst_16604,inst_16602];
var inst_16609 = (new cljs.core.PersistentVector(null,2,(5),inst_16607,inst_16608,null));
var inst_16610 = cljs.core.keyword.call(null,inst_16600);
var inst_16611 = [inst_16609,inst_16610];
var inst_16612 = cljs.core.PersistentHashMap.fromArrays(inst_16606,inst_16611);
var inst_16613 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_16612];
var inst_16614 = cljs.core.PersistentHashMap.fromArrays(inst_16605,inst_16613);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16618__$1,(2),app.t6.main.evt,inst_16614);
} else {
if((state_val_16619 === (2))){
var inst_16616 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16618__$1,inst_16616);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16620 = [null,null,null,null,null,null,null];
(statearr_16620[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_16620[(1)] = (1));

return statearr_16620;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_16618){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16621){if((e16621 instanceof Object)){
var ex__2796__auto__ = e16621;
var statearr_16622_16659 = state_16618;
(statearr_16622_16659[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16660 = state_16618;
state_16618 = G__16660;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_16618){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_16618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_16623 = f__2883__auto__.call(null);
(statearr_16623[(6)] = c__2882__auto__);

return statearr_16623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

return setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_16630){
var state_val_16631 = (state_16630[(1)]);
if((state_val_16631 === (1))){
var inst_16624 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_16625 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_16626 = cljs.core.PersistentHashMap.fromArrays(inst_16624,inst_16625);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16630__$1,(2),app.t6.main.evt,inst_16626);
} else {
if((state_val_16631 === (2))){
var inst_16628 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16630__$1,inst_16628);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_16632 = [null,null,null,null,null,null,null];
(statearr_16632[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_16632[(1)] = (1));

return statearr_16632;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_16630){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_16630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e16633){if((e16633 instanceof Object)){
var ex__2796__auto__ = e16633;
var statearr_16634_16661 = state_16630;
(statearr_16634_16661[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16662 = state_16630;
state_16630 = G__16662;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_16630){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_16630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_16635 = f__2883__auto__.call(null);
(statearr_16635[(6)] = c__2882__auto__);

return statearr_16635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));
});
app.t6.main.main.call(null);

//# sourceMappingURL=main.js.map
