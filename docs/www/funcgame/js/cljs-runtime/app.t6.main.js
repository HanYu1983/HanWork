goog.provide('app.t6.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t6.main.p5 = window;
app.t6.main.cw = (600);
app.t6.main.ch = (600);
app.t6.main.w = (30);
app.t6.main.h = (30);
app.t6.main.mineCnt = (100);
app.t6.main.gw = ((app.t6.main.cw / app.t6.main.w) | (0));
app.t6.main.gh = ((app.t6.main.ch / app.t6.main.h) | (0));
app.t6.main.mine = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(app.t6.main.w,cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(app.t6.main.mineCnt,(1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((app.t6.main.w * app.t6.main.h) - app.t6.main.mineCnt),(0)))))));
app.t6.main.cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(app.t6.main.w,(function (){var iter__4523__auto__ = (function app$t6$main$iter__36571(s__36572){
return (new cljs.core.LazySeq(null,(function (){
var s__36572__$1 = s__36572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36572__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36572__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function app$t6$main$iter__36571_$_iter__36573(s__36574){
return (new cljs.core.LazySeq(null,((function (s__36572__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36574__$1 = s__36574;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36574__$1);
if(temp__5735__auto____$1){
var s__36574__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36574__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36574__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36576 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36575 = (0);
while(true){
if((i__36575 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36575);
cljs.core.chunk_append(b__36576,(function (){var isMine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(1)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count(lazyBorderMineCnt);
}
})());

var G__36962 = (i__36575 + (1));
i__36575 = G__36962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36576),app$t6$main$iter__36571_$_iter__36573(cljs.core.chunk_rest(s__36574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36576),null);
}
} else {
var x = cljs.core.first(s__36574__$2);
return cljs.core.cons((function (){var isMine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(1)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count(lazyBorderMineCnt);
}
})(),app$t6$main$iter__36571_$_iter__36573(cljs.core.rest(s__36574__$2)));
}
} else {
return null;
}
break;
}
});})(s__36572__$1,y,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36572__$1,y,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.w)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t6$main$iter__36571(cljs.core.rest(s__36572__$1)));
} else {
var G__36969 = cljs.core.rest(s__36572__$1);
s__36572__$1 = G__36969;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.h));
})())));
app.t6.main.flag = (function app$t6$main$flag(p__36603,ctx){
var vec__36604 = p__36603;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(1),null);
var rc = vec__36604;
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__36607 = cljs.core._EQ_;
var expr__36608 = s;
if(cljs.core.truth_((function (){var G__36610 = new cljs.core.Keyword(null,"close","close",1835149582);
var G__36611 = expr__36608;
return (pred__36607.cljs$core$IFn$_invoke$arity$2 ? pred__36607.cljs$core$IFn$_invoke$arity$2(G__36610,G__36611) : pred__36607.call(null,G__36610,G__36611));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_((function (){var G__36612 = new cljs.core.Keyword(null,"flag","flag",1088647881);
var G__36613 = expr__36608;
return (pred__36607.cljs$core$IFn$_invoke$arity$2 ? pred__36607.cljs$core$IFn$_invoke$arity$2(G__36612,G__36613) : pred__36607.call(null,G__36612,G__36613));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__36614,ctx){
var vec__36615 = p__36614;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36615,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36615,(1),null);
var rc = vec__36615;
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null));
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),s)){
return ctx;
} else {
if((v == null)){
return ctx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),v)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameState","gameState",1531780829)], null),cljs.core.constantly(new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (v,s,vec__36615,r,c,rc){
return (function (ctx__$1,p__36618){
var vec__36625 = p__36618;
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(0),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36625,(1),null);
var offset = vec__36625;
var G__36630 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,offset,rc);
var G__36631 = ctx__$1;
return (app.t6.main.flip.cljs$core$IFn$_invoke$arity$2 ? app.t6.main.flip.cljs$core$IFn$_invoke$arity$2(G__36630,G__36631) : app.t6.main.flip.call(null,G__36630,G__36631));
});})(v,s,vec__36615,r,c,rc))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.drawOpen = (function app$t6$main$drawOpen(p5,v,x,y,w,h){
var pred__36634 = cljs.core._EQ_;
var expr__36635 = v;
if(cljs.core.truth_((pred__36634.cljs$core$IFn$_invoke$arity$2 ? pred__36634.cljs$core$IFn$_invoke$arity$2((9),expr__36635) : pred__36634.call(null,(9),expr__36635)))){
var size = h;
p5.fill((0));

return p5.circle((x + (w / (2))),(y + (h / (2))),((function (){var x__4222__auto__ = w;
var y__4223__auto__ = h;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() / (2)));
} else {
var vec__36639 = (function (){var pred__36642 = cljs.core._EQ_;
var expr__36643 = ((v / (3)) | (0));
if(cljs.core.truth_((pred__36642.cljs$core$IFn$_invoke$arity$2 ? pred__36642.cljs$core$IFn$_invoke$arity$2((0),expr__36643) : pred__36642.call(null,(0),expr__36643)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
} else {
if(cljs.core.truth_((pred__36642.cljs$core$IFn$_invoke$arity$2 ? pred__36642.cljs$core$IFn$_invoke$arity$2((1),expr__36643) : pred__36642.call(null,(1),expr__36643)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null);
} else {
if(cljs.core.truth_((pred__36642.cljs$core$IFn$_invoke$arity$2 ? pred__36642.cljs$core$IFn$_invoke$arity$2((2),expr__36643) : pred__36642.call(null,(2),expr__36643)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36643)].join('')));
}
}
}
})();
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(2),null);
p5.textSize(h);

p5.fill(r,g,b);

return p5.text(v,(x + (p5.textWidth(v) / (2))),(h + y));
}
});
app.t6.main.drawFlag = (function app$t6$main$drawFlag(p5,x,y,w,h){
return p5.triangle((x + (w / (2))),y,x,(y + h),(x + w),(y + h));
});
app.t6.main.main = (function app$t6$main$main(){
app.t6.main.model = null;

app.t6.main.evt = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

var c__30812__auto___36980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___36980){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___36980){
return (function (state_36758){
var state_val_36759 = (state_36758[(1)]);
if((state_val_36759 === (7))){
var inst_36744 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36780_36981 = state_36758__$1;
(statearr_36780_36981[(2)] = inst_36744);

(statearr_36780_36981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (1))){
var inst_36656 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_36659 = cljs.core.PersistentVector.EMPTY;
var inst_36665 = cljs.core.PersistentVector.EMPTY;
var inst_36667 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,inst_36665);
var inst_36668 = (app.t6.main.w * app.t6.main.h);
var inst_36669 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(inst_36668,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_36670 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(app.t6.main.w,inst_36669);
var inst_36671 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_36667,inst_36670);
var inst_36672 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_36659,inst_36671);
var inst_36673 = [app.t6.main.cells,inst_36672,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_36674 = cljs.core.PersistentHashMap.fromArrays(inst_36656,inst_36673);
var inst_36675 = inst_36674;
var state_36758__$1 = (function (){var statearr_36782 = state_36758;
(statearr_36782[(7)] = inst_36675);

return statearr_36782;
})();
var statearr_36783_36982 = state_36758__$1;
(statearr_36783_36982[(2)] = null);

(statearr_36783_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (4))){
var inst_36681 = (state_36758[(8)]);
var inst_36681__$1 = (state_36758[(2)]);
var inst_36689 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_36681__$1);
var inst_36691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_36689);
var state_36758__$1 = (function (){var statearr_36785 = state_36758;
(statearr_36785[(8)] = inst_36681__$1);

return statearr_36785;
})();
if(inst_36691){
var statearr_36787_36984 = state_36758__$1;
(statearr_36787_36984[(1)] = (5));

} else {
var statearr_36789_36985 = state_36758__$1;
(statearr_36789_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (13))){
var inst_36738 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36790_36987 = state_36758__$1;
(statearr_36790_36987[(2)] = inst_36738);

(statearr_36790_36987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var inst_36675 = (state_36758[(7)]);
var tmp36784 = inst_36675;
var inst_36675__$1 = tmp36784;
var state_36758__$1 = (function (){var statearr_36794 = state_36758;
(statearr_36794[(7)] = inst_36675__$1);

return statearr_36794;
})();
var statearr_36796_36988 = state_36758__$1;
(statearr_36796_36988[(2)] = null);

(statearr_36796_36988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (3))){
var inst_36747 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36758__$1,inst_36747);
} else {
if((state_val_36759 === (12))){
var inst_36675 = (state_36758[(7)]);
var tmp36792 = inst_36675;
var inst_36675__$1 = tmp36792;
var state_36758__$1 = (function (){var statearr_36799 = state_36758;
(statearr_36799[(7)] = inst_36675__$1);

return statearr_36799;
})();
var statearr_36800_36989 = state_36758__$1;
(statearr_36800_36989[(2)] = null);

(statearr_36800_36989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (2))){
var inst_36675 = (state_36758[(7)]);
var inst_36677 = app.t6.main.model = inst_36675;
var state_36758__$1 = (function (){var statearr_36801 = state_36758;
(statearr_36801[(9)] = inst_36677);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36758__$1,(4),app.t6.main.evt);
} else {
if((state_val_36759 === (11))){
var inst_36675 = (state_36758[(7)]);
var inst_36711 = (state_36758[(10)]);
var inst_36733 = app.t6.main.flag(inst_36711,inst_36675);
var inst_36675__$1 = inst_36733;
var state_36758__$1 = (function (){var statearr_36805 = state_36758;
(statearr_36805[(7)] = inst_36675__$1);

return statearr_36805;
})();
var statearr_36806_36991 = state_36758__$1;
(statearr_36806_36991[(2)] = null);

(statearr_36806_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (9))){
var inst_36703 = (state_36758[(11)]);
var inst_36729 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),inst_36703);
var state_36758__$1 = state_36758;
if(inst_36729){
var statearr_36807_36992 = state_36758__$1;
(statearr_36807_36992[(1)] = (11));

} else {
var statearr_36808_36994 = state_36758__$1;
(statearr_36808_36994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (5))){
var inst_36703 = (state_36758[(11)]);
var inst_36681 = (state_36758[(8)]);
var inst_36698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36700 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_36701 = (new cljs.core.PersistentVector(null,2,(5),inst_36698,inst_36700,null));
var inst_36703__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36681,inst_36701);
var inst_36707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36709 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_36710 = (new cljs.core.PersistentVector(null,2,(5),inst_36707,inst_36709,null));
var inst_36711 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36681,inst_36710);
var inst_36717 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),inst_36703__$1);
var state_36758__$1 = (function (){var statearr_36812 = state_36758;
(statearr_36812[(11)] = inst_36703__$1);

(statearr_36812[(10)] = inst_36711);

return statearr_36812;
})();
if(inst_36717){
var statearr_36813_36996 = state_36758__$1;
(statearr_36813_36996[(1)] = (8));

} else {
var statearr_36814_36997 = state_36758__$1;
(statearr_36814_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (10))){
var inst_36740 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36815_36998 = state_36758__$1;
(statearr_36815_36998[(2)] = inst_36740);

(statearr_36815_36998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (8))){
var inst_36675 = (state_36758[(7)]);
var inst_36711 = (state_36758[(10)]);
var inst_36725 = app.t6.main.flip(inst_36711,inst_36675);
var inst_36675__$1 = inst_36725;
var state_36758__$1 = (function (){var statearr_36816 = state_36758;
(statearr_36816[(7)] = inst_36675__$1);

return statearr_36816;
})();
var statearr_36818_37002 = state_36758__$1;
(statearr_36818_37002[(2)] = null);

(statearr_36818_37002[(1)] = (2));


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
});})(c__30812__auto___36980))
;
return ((function (switch__30584__auto__,c__30812__auto___36980){
return (function() {
var app$t6$main$main_$_state_machine__30585__auto__ = null;
var app$t6$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36820[(0)] = app$t6$main$main_$_state_machine__30585__auto__);

(statearr_36820[(1)] = (1));

return statearr_36820;
});
var app$t6$main$main_$_state_machine__30585__auto____1 = (function (state_36758){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36758);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36822){if((e36822 instanceof Object)){
var ex__30588__auto__ = e36822;
var statearr_36837_37004 = state_36758;
(statearr_36837_37004[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37005 = state_36758;
state_36758 = G__37005;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__30585__auto__ = function(state_36758){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__30585__auto____1.call(this,state_36758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t6$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__30585__auto____0;
app$t6$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__30585__auto____1;
return app$t6$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___36980))
})();
var state__30814__auto__ = (function (){var statearr_36840 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36840[(6)] = c__30812__auto___36980);

return statearr_36840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___36980))
);


app.t6.main.p5.setup = (function (){
app.t6.main.p5.noStroke();

var canvas = app.t6.main.p5.createCanvas(app.t6.main.cw,app.t6.main.ch);
return canvas.parent("container");
});

app.t6.main.p5.draw = (function (){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((0),(0),app.t6.main.cw,app.t6.main.ch);

if(cljs.core.truth_(app.t6.main.model)){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function app$t6$main$main_$_iter__36842(s__36843){
return (new cljs.core.LazySeq(null,(function (){
var s__36843__$1 = s__36843;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36843__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36843__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function app$t6$main$main_$_iter__36842_$_iter__36844(s__36845){
return (new cljs.core.LazySeq(null,((function (s__36843__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36845__$1 = s__36845;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36845__$1);
if(temp__5735__auto____$1){
var s__36845__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36845__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36845__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36847 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36846 = (0);
while(true){
if((i__36846 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36846);
cljs.core.chunk_append(b__36847,(function (){var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),s)) || ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag","flag",1088647881),s)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen(app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag(app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})());

var G__37006 = (i__36846 + (1));
i__36846 = G__37006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36847),app$t6$main$main_$_iter__36842_$_iter__36844(cljs.core.chunk_rest(s__36845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36847),null);
}
} else {
var x = cljs.core.first(s__36845__$2);
return cljs.core.cons((function (){var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),s)) || ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag","flag",1088647881),s)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen(app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag(app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})(),app$t6$main$main_$_iter__36842_$_iter__36844(cljs.core.rest(s__36845__$2)));
}
} else {
return null;
}
break;
}
});})(s__36843__$1,y,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36843__$1,y,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.w)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t6$main$main_$_iter__36842(cljs.core.rest(s__36843__$1)));
} else {
var G__37007 = cljs.core.rest(s__36843__$1);
s__36843__$1 = G__37007;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.h));
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))){
app.t6.main.p5.fill((0),(0),(255));

app.t6.main.p5.textSize((50));

return app.t6.main.p5.text("Game Over",((app.t6.main.cw / (2)) - (app.t6.main.p5.textWidth("Game Over") / (2))),(app.t6.main.ch / (2)));
} else {
return null;
}
} else {
return null;
}
});

return app.t6.main.p5.mouseReleased = (function (){
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_36939){
var state_val_36940 = (state_36939[(1)]);
if((state_val_36940 === (1))){
var inst_36919 = app.t6.main.p5.mouseX;
var inst_36920 = app.t6.main.p5.mouseY;
var inst_36921 = app.t6.main.p5.mouseButton;
var inst_36922 = (inst_36919 / app.t6.main.gw);
var inst_36923 = (inst_36922 | (0));
var inst_36924 = (inst_36920 / app.t6.main.gh);
var inst_36925 = (inst_36924 | (0));
var inst_36926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_36927 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_36928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36929 = [inst_36925,inst_36923];
var inst_36930 = (new cljs.core.PersistentVector(null,2,(5),inst_36928,inst_36929,null));
var inst_36931 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_36921);
var inst_36932 = [inst_36930,inst_36931];
var inst_36933 = cljs.core.PersistentHashMap.fromArrays(inst_36927,inst_36932);
var inst_36934 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_36933];
var inst_36935 = cljs.core.PersistentHashMap.fromArrays(inst_36926,inst_36934);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36939__$1,(2),app.t6.main.evt,inst_36935);
} else {
if((state_val_36940 === (2))){
var inst_36937 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36939__$1,inst_36937);
} else {
return null;
}
}
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var app$t6$main$main_$_state_machine__30585__auto__ = null;
var app$t6$main$main_$_state_machine__30585__auto____0 = (function (){
var statearr_36941 = [null,null,null,null,null,null,null];
(statearr_36941[(0)] = app$t6$main$main_$_state_machine__30585__auto__);

(statearr_36941[(1)] = (1));

return statearr_36941;
});
var app$t6$main$main_$_state_machine__30585__auto____1 = (function (state_36939){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_36939);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e36942){if((e36942 instanceof Object)){
var ex__30588__auto__ = e36942;
var statearr_36943_37008 = state_36939;
(statearr_36943_37008[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37009 = state_36939;
state_36939 = G__37009;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__30585__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__30585__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__30585__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t6$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__30585__auto____0;
app$t6$main$main_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__30585__auto____1;
return app$t6$main$main_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_36944 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_36944[(6)] = c__30812__auto__);

return statearr_36944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
});
});
app.t6.main.main();

//# sourceMappingURL=app.t6.main.js.map
