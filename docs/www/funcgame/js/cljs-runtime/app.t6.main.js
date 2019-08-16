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
app.t6.main.cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(app.t6.main.w,(function (){var iter__4523__auto__ = (function app$t6$main$iter__36380(s__36381){
return (new cljs.core.LazySeq(null,(function (){
var s__36381__$1 = s__36381;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36381__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36381__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function app$t6$main$iter__36380_$_iter__36382(s__36383){
return (new cljs.core.LazySeq(null,((function (s__36381__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36383__$1 = s__36383;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36383__$1);
if(temp__5735__auto____$1){
var s__36383__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36383__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36383__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36385 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36384 = (0);
while(true){
if((i__36384 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36384);
cljs.core.chunk_append(b__36385,(function (){var isMine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(1)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count(lazyBorderMineCnt);
}
})());

var G__36991 = (i__36384 + (1));
i__36384 = G__36991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36385),app$t6$main$iter__36380_$_iter__36382(cljs.core.chunk_rest(s__36383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36385),null);
}
} else {
var x = cljs.core.first(s__36383__$2);
return cljs.core.cons((function (){var isMine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(1)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count(lazyBorderMineCnt);
}
})(),app$t6$main$iter__36380_$_iter__36382(cljs.core.rest(s__36383__$2)));
}
} else {
return null;
}
break;
}
});})(s__36381__$1,y,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36381__$1,y,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.w)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t6$main$iter__36380(cljs.core.rest(s__36381__$1)));
} else {
var G__36993 = cljs.core.rest(s__36381__$1);
s__36381__$1 = G__36993;
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
app.t6.main.flag = (function app$t6$main$flag(p__36402,ctx){
var vec__36403 = p__36402;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36403,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36403,(1),null);
var rc = vec__36403;
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__36406 = cljs.core._EQ_;
var expr__36407 = s;
if(cljs.core.truth_((function (){var G__36409 = new cljs.core.Keyword(null,"close","close",1835149582);
var G__36410 = expr__36407;
return (pred__36406.cljs$core$IFn$_invoke$arity$2 ? pred__36406.cljs$core$IFn$_invoke$arity$2(G__36409,G__36410) : pred__36406.call(null,G__36409,G__36410));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_((function (){var G__36411 = new cljs.core.Keyword(null,"flag","flag",1088647881);
var G__36412 = expr__36407;
return (pred__36406.cljs$core$IFn$_invoke$arity$2 ? pred__36406.cljs$core$IFn$_invoke$arity$2(G__36411,G__36412) : pred__36406.call(null,G__36411,G__36412));
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__36414,ctx){
var vec__36415 = p__36414;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(1),null);
var rc = vec__36415;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (v,s,vec__36415,r,c,rc){
return (function (ctx__$1,p__36422){
var vec__36423 = p__36422;
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36423,(0),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36423,(1),null);
var offset = vec__36423;
var G__36427 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,offset,rc);
var G__36428 = ctx__$1;
return (app.t6.main.flip.cljs$core$IFn$_invoke$arity$2 ? app.t6.main.flip.cljs$core$IFn$_invoke$arity$2(G__36427,G__36428) : app.t6.main.flip.call(null,G__36427,G__36428));
});})(v,s,vec__36415,r,c,rc))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly(new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.drawOpen = (function app$t6$main$drawOpen(p5,v,x,y,w,h){
var pred__36433 = cljs.core._EQ_;
var expr__36434 = v;
if(cljs.core.truth_((pred__36433.cljs$core$IFn$_invoke$arity$2 ? pred__36433.cljs$core$IFn$_invoke$arity$2((9),expr__36434) : pred__36433.call(null,(9),expr__36434)))){
var size = h;
p5.fill((0));

return p5.circle((x + (w / (2))),(y + (h / (2))),((function (){var x__4222__auto__ = w;
var y__4223__auto__ = h;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() / (2)));
} else {
var vec__36444 = (function (){var pred__36447 = cljs.core._EQ_;
var expr__36448 = ((v / (3)) | (0));
if(cljs.core.truth_((pred__36447.cljs$core$IFn$_invoke$arity$2 ? pred__36447.cljs$core$IFn$_invoke$arity$2((0),expr__36448) : pred__36447.call(null,(0),expr__36448)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
} else {
if(cljs.core.truth_((pred__36447.cljs$core$IFn$_invoke$arity$2 ? pred__36447.cljs$core$IFn$_invoke$arity$2((1),expr__36448) : pred__36447.call(null,(1),expr__36448)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null);
} else {
if(cljs.core.truth_((pred__36447.cljs$core$IFn$_invoke$arity$2 ? pred__36447.cljs$core$IFn$_invoke$arity$2((2),expr__36448) : pred__36447.call(null,(2),expr__36448)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36448)].join('')));
}
}
}
})();
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36444,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36444,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36444,(2),null);
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

var c__30213__auto___37042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___37042){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___37042){
return (function (state_36531){
var state_val_36533 = (state_36531[(1)]);
if((state_val_36533 === (7))){
var inst_36525 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36544_37043 = state_36531__$1;
(statearr_36544_37043[(2)] = inst_36525);

(statearr_36544_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (1))){
var inst_36456 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_36457 = cljs.core.PersistentVector.EMPTY;
var inst_36458 = cljs.core.PersistentVector.EMPTY;
var inst_36459 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,inst_36458);
var inst_36465 = (app.t6.main.w * app.t6.main.h);
var inst_36466 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(inst_36465,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_36467 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(app.t6.main.w,inst_36466);
var inst_36468 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_36459,inst_36467);
var inst_36469 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_36457,inst_36468);
var inst_36470 = [app.t6.main.cells,inst_36469,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_36471 = cljs.core.PersistentHashMap.fromArrays(inst_36456,inst_36470);
var inst_36472 = inst_36471;
var state_36531__$1 = (function (){var statearr_36553 = state_36531;
(statearr_36553[(7)] = inst_36472);

return statearr_36553;
})();
var statearr_36554_37044 = state_36531__$1;
(statearr_36554_37044[(2)] = null);

(statearr_36554_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (4))){
var inst_36484 = (state_36531[(8)]);
var inst_36484__$1 = (state_36531[(2)]);
var inst_36488 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_36484__$1);
var inst_36489 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_36488);
var state_36531__$1 = (function (){var statearr_36556 = state_36531;
(statearr_36556[(8)] = inst_36484__$1);

return statearr_36556;
})();
if(inst_36489){
var statearr_36557_37045 = state_36531__$1;
(statearr_36557_37045[(1)] = (5));

} else {
var statearr_36558_37046 = state_36531__$1;
(statearr_36558_37046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (13))){
var inst_36519 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36562_37052 = state_36531__$1;
(statearr_36562_37052[(2)] = inst_36519);

(statearr_36562_37052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (6))){
var inst_36472 = (state_36531[(7)]);
var tmp36555 = inst_36472;
var inst_36472__$1 = tmp36555;
var state_36531__$1 = (function (){var statearr_36570 = state_36531;
(statearr_36570[(7)] = inst_36472__$1);

return statearr_36570;
})();
var statearr_36575_37054 = state_36531__$1;
(statearr_36575_37054[(2)] = null);

(statearr_36575_37054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (3))){
var inst_36527 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36531__$1,inst_36527);
} else {
if((state_val_36533 === (12))){
var inst_36472 = (state_36531[(7)]);
var tmp36565 = inst_36472;
var inst_36472__$1 = tmp36565;
var state_36531__$1 = (function (){var statearr_36581 = state_36531;
(statearr_36581[(7)] = inst_36472__$1);

return statearr_36581;
})();
var statearr_36583_37055 = state_36531__$1;
(statearr_36583_37055[(2)] = null);

(statearr_36583_37055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (2))){
var inst_36472 = (state_36531[(7)]);
var inst_36481 = app.t6.main.model = inst_36472;
var state_36531__$1 = (function (){var statearr_36612 = state_36531;
(statearr_36612[(9)] = inst_36481);

return statearr_36612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36531__$1,(4),app.t6.main.evt);
} else {
if((state_val_36533 === (11))){
var inst_36503 = (state_36531[(10)]);
var inst_36472 = (state_36531[(7)]);
var inst_36514 = app.t6.main.flag(inst_36503,inst_36472);
var inst_36472__$1 = inst_36514;
var state_36531__$1 = (function (){var statearr_36619 = state_36531;
(statearr_36619[(7)] = inst_36472__$1);

return statearr_36619;
})();
var statearr_36624_37065 = state_36531__$1;
(statearr_36624_37065[(2)] = null);

(statearr_36624_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (9))){
var inst_36496 = (state_36531[(11)]);
var inst_36512 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),inst_36496);
var state_36531__$1 = state_36531;
if(inst_36512){
var statearr_36635_37067 = state_36531__$1;
(statearr_36635_37067[(1)] = (11));

} else {
var statearr_36639_37068 = state_36531__$1;
(statearr_36639_37068[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (5))){
var inst_36484 = (state_36531[(8)]);
var inst_36496 = (state_36531[(11)]);
var inst_36493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36494 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_36495 = (new cljs.core.PersistentVector(null,2,(5),inst_36493,inst_36494,null));
var inst_36496__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36484,inst_36495);
var inst_36497 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36498 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_36499 = (new cljs.core.PersistentVector(null,2,(5),inst_36497,inst_36498,null));
var inst_36503 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36484,inst_36499);
var inst_36507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),inst_36496__$1);
var state_36531__$1 = (function (){var statearr_36649 = state_36531;
(statearr_36649[(10)] = inst_36503);

(statearr_36649[(11)] = inst_36496__$1);

return statearr_36649;
})();
if(inst_36507){
var statearr_36656_37077 = state_36531__$1;
(statearr_36656_37077[(1)] = (8));

} else {
var statearr_36658_37078 = state_36531__$1;
(statearr_36658_37078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (10))){
var inst_36521 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36668_37082 = state_36531__$1;
(statearr_36668_37082[(2)] = inst_36521);

(statearr_36668_37082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (8))){
var inst_36503 = (state_36531[(10)]);
var inst_36472 = (state_36531[(7)]);
var inst_36509 = app.t6.main.flip(inst_36503,inst_36472);
var inst_36472__$1 = inst_36509;
var state_36531__$1 = (function (){var statearr_36671 = state_36531;
(statearr_36671[(7)] = inst_36472__$1);

return statearr_36671;
})();
var statearr_36672_37098 = state_36531__$1;
(statearr_36672_37098[(2)] = null);

(statearr_36672_37098[(1)] = (2));


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
});})(c__30213__auto___37042))
;
return ((function (switch__30004__auto__,c__30213__auto___37042){
return (function() {
var app$t6$main$main_$_state_machine__30005__auto__ = null;
var app$t6$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36675 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36675[(0)] = app$t6$main$main_$_state_machine__30005__auto__);

(statearr_36675[(1)] = (1));

return statearr_36675;
});
var app$t6$main$main_$_state_machine__30005__auto____1 = (function (state_36531){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36531);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36682){if((e36682 instanceof Object)){
var ex__30008__auto__ = e36682;
var statearr_36683_37132 = state_36531;
(statearr_36683_37132[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37197 = state_36531;
state_36531 = G__37197;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__30005__auto__ = function(state_36531){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__30005__auto____1.call(this,state_36531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t6$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__30005__auto____0;
app$t6$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__30005__auto____1;
return app$t6$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___37042))
})();
var state__30215__auto__ = (function (){var statearr_36693 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36693[(6)] = c__30213__auto___37042);

return statearr_36693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___37042))
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
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function app$t6$main$main_$_iter__36697(s__36698){
return (new cljs.core.LazySeq(null,(function (){
var s__36698__$1 = s__36698;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36698__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36698__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function app$t6$main$main_$_iter__36697_$_iter__36699(s__36700){
return (new cljs.core.LazySeq(null,((function (s__36698__$1,y,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36700__$1 = s__36700;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36700__$1);
if(temp__5735__auto____$1){
var s__36700__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36700__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36700__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36702 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36701 = (0);
while(true){
if((i__36701 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36701);
cljs.core.chunk_append(b__36702,(function (){var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
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

var G__37268 = (i__36701 + (1));
i__36701 = G__37268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36702),app$t6$main$main_$_iter__36697_$_iter__36699(cljs.core.chunk_rest(s__36700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36702),null);
}
} else {
var x = cljs.core.first(s__36700__$2);
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
})(),app$t6$main$main_$_iter__36697_$_iter__36699(cljs.core.rest(s__36700__$2)));
}
} else {
return null;
}
break;
}
});})(s__36698__$1,y,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36698__$1,y,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(app.t6.main.w)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app$t6$main$main_$_iter__36697(cljs.core.rest(s__36698__$1)));
} else {
var G__37282 = cljs.core.rest(s__36698__$1);
s__36698__$1 = G__37282;
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
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_36841){
var state_val_36842 = (state_36841[(1)]);
if((state_val_36842 === (1))){
var inst_36812 = app.t6.main.p5.mouseX;
var inst_36813 = app.t6.main.p5.mouseY;
var inst_36814 = app.t6.main.p5.mouseButton;
var inst_36815 = (inst_36812 / app.t6.main.gw);
var inst_36816 = (inst_36815 | (0));
var inst_36817 = (inst_36813 / app.t6.main.gh);
var inst_36818 = (inst_36817 | (0));
var inst_36819 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_36825 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_36830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36831 = [inst_36818,inst_36816];
var inst_36832 = (new cljs.core.PersistentVector(null,2,(5),inst_36830,inst_36831,null));
var inst_36833 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_36814);
var inst_36834 = [inst_36832,inst_36833];
var inst_36835 = cljs.core.PersistentHashMap.fromArrays(inst_36825,inst_36834);
var inst_36836 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_36835];
var inst_36837 = cljs.core.PersistentHashMap.fromArrays(inst_36819,inst_36836);
var state_36841__$1 = state_36841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36841__$1,(2),app.t6.main.evt,inst_36837);
} else {
if((state_val_36842 === (2))){
var inst_36839 = (state_36841[(2)]);
var state_36841__$1 = state_36841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36841__$1,inst_36839);
} else {
return null;
}
}
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var app$t6$main$main_$_state_machine__30005__auto__ = null;
var app$t6$main$main_$_state_machine__30005__auto____0 = (function (){
var statearr_36859 = [null,null,null,null,null,null,null];
(statearr_36859[(0)] = app$t6$main$main_$_state_machine__30005__auto__);

(statearr_36859[(1)] = (1));

return statearr_36859;
});
var app$t6$main$main_$_state_machine__30005__auto____1 = (function (state_36841){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_36841);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e36861){if((e36861 instanceof Object)){
var ex__30008__auto__ = e36861;
var statearr_36862_37315 = state_36841;
(statearr_36862_37315[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37316 = state_36841;
state_36841 = G__37316;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__30005__auto__ = function(state_36841){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__30005__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__30005__auto____1.call(this,state_36841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t6$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__30005__auto____0;
app$t6$main$main_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__30005__auto____1;
return app$t6$main$main_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_36874 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_36874[(6)] = c__30213__auto__);

return statearr_36874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});
});
app.t6.main.main();

//# sourceMappingURL=app.t6.main.js.map
