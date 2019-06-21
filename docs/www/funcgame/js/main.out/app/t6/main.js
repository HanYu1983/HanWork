// Compiled by ClojureScript 1.10.238 {}
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
app.t6.main.mine = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,app.t6.main.mineCnt,(1)),cljs.core.repeat.call(null,((app.t6.main.w * app.t6.main.h) - app.t6.main.mineCnt),(0)))))));
app.t6.main.cells = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,(function (){var iter__4292__auto__ = (function app$t6$main$iter__9382(s__9383){
return (new cljs.core.LazySeq(null,(function (){
var s__9383__$1 = s__9383;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9383__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__9383__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$iter__9382_$_iter__9384(s__9385){
return (new cljs.core.LazySeq(null,((function (s__9383__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__9385__$1 = s__9385;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__9385__$1);
if(temp__5457__auto____$1){
var s__9385__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9385__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9385__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9387 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9386 = (0);
while(true){
if((i__9386 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__9386);
cljs.core.chunk_append.call(null,b__9387,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})());

var G__9388 = (i__9386 + (1));
i__9386 = G__9388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9387),app$t6$main$iter__9382_$_iter__9384.call(null,cljs.core.chunk_rest.call(null,s__9385__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9387),null);
}
} else {
var x = cljs.core.first.call(null,s__9385__$2);
return cljs.core.cons.call(null,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})(),app$t6$main$iter__9382_$_iter__9384.call(null,cljs.core.rest.call(null,s__9385__$2)));
}
} else {
return null;
}
break;
}
});})(s__9383__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__9383__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$iter__9382.call(null,cljs.core.rest.call(null,s__9383__$1)));
} else {
var G__9389 = cljs.core.rest.call(null,s__9383__$1);
s__9383__$1 = G__9389;
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
app.t6.main.flag = (function app$t6$main$flag(p__9390,ctx){
var vec__9391 = p__9390;
var r = cljs.core.nth.call(null,vec__9391,(0),null);
var c = cljs.core.nth.call(null,vec__9391,(1),null);
var rc = vec__9391;
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__9394 = cljs.core._EQ_;
var expr__9395 = s;
if(cljs.core.truth_(pred__9394.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__9395))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_(pred__9394.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__9395))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__9397,ctx){
var vec__9398 = p__9397;
var r = cljs.core.nth.call(null,vec__9398,(0),null);
var c = cljs.core.nth.call(null,vec__9398,(1),null);
var rc = vec__9398;
var v = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null));
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)){
return ctx;
} else {
if((v == null)){
return ctx;
} else {
if(cljs.core._EQ_.call(null,(9),v)){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameState","gameState",1531780829)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
if(cljs.core._EQ_.call(null,(0),v)){
return cljs.core.reduce.call(null,((function (v,s,vec__9398,r,c,rc){
return (function (ctx__$1,p__9401){
var vec__9402 = p__9401;
var r__$1 = cljs.core.nth.call(null,vec__9402,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__9402,(1),null);
var offset = vec__9402;
return app.t6.main.flip.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,rc),ctx__$1);
});})(v,s,vec__9398,r,c,rc))
,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.drawOpen = (function app$t6$main$drawOpen(p5,v,x,y,w,h){
var pred__9405 = cljs.core._EQ_;
var expr__9406 = v;
if(cljs.core.truth_(pred__9405.call(null,(9),expr__9406))){
var size = h;
p5.fill((0));

return p5.circle((x + (w / (2))),(y + (h / (2))),((function (){var x__4009__auto__ = w;
var y__4010__auto__ = h;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() / (2)));
} else {
var vec__9408 = (function (){var pred__9411 = cljs.core._EQ_;
var expr__9412 = ((v / (3)) | (0));
if(cljs.core.truth_(pred__9411.call(null,(0),expr__9412))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
} else {
if(cljs.core.truth_(pred__9411.call(null,(1),expr__9412))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null);
} else {
if(cljs.core.truth_(pred__9411.call(null,(2),expr__9412))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9412)].join('')));
}
}
}
})();
var r = cljs.core.nth.call(null,vec__9408,(0),null);
var g = cljs.core.nth.call(null,vec__9408,(1),null);
var b = cljs.core.nth.call(null,vec__9408,(2),null);
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

app.t6.main.evt = cljs.core.async.chan.call(null);

var c__2885__auto___9531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___9531){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___9531){
return (function (state_9469){
var state_val_9470 = (state_9469[(1)]);
if((state_val_9470 === (7))){
var inst_9465 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
var statearr_9471_9532 = state_9469__$1;
(statearr_9471_9532[(2)] = inst_9465);

(statearr_9471_9532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (1))){
var inst_9414 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_9415 = cljs.core.PersistentVector.EMPTY;
var inst_9416 = cljs.core.PersistentVector.EMPTY;
var inst_9417 = cljs.core.partial.call(null,cljs.core.into,inst_9416);
var inst_9418 = (app.t6.main.w * app.t6.main.h);
var inst_9419 = cljs.core.repeat.call(null,inst_9418,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_9420 = cljs.core.partition.call(null,app.t6.main.w,inst_9419);
var inst_9421 = cljs.core.map.call(null,inst_9417,inst_9420);
var inst_9422 = cljs.core.into.call(null,inst_9415,inst_9421);
var inst_9423 = [app.t6.main.cells,inst_9422,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_9424 = cljs.core.PersistentHashMap.fromArrays(inst_9414,inst_9423);
var inst_9425 = inst_9424;
var state_9469__$1 = (function (){var statearr_9472 = state_9469;
(statearr_9472[(7)] = inst_9425);

return statearr_9472;
})();
var statearr_9473_9533 = state_9469__$1;
(statearr_9473_9533[(2)] = null);

(statearr_9473_9533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (4))){
var inst_9429 = (state_9469[(8)]);
var inst_9429__$1 = (state_9469[(2)]);
var inst_9433 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_9429__$1);
var inst_9434 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_9433);
var state_9469__$1 = (function (){var statearr_9475 = state_9469;
(statearr_9475[(8)] = inst_9429__$1);

return statearr_9475;
})();
if(inst_9434){
var statearr_9476_9534 = state_9469__$1;
(statearr_9476_9534[(1)] = (5));

} else {
var statearr_9477_9535 = state_9469__$1;
(statearr_9477_9535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (13))){
var inst_9459 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
var statearr_9478_9536 = state_9469__$1;
(statearr_9478_9536[(2)] = inst_9459);

(statearr_9478_9536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (6))){
var inst_9425 = (state_9469[(7)]);
var tmp9474 = inst_9425;
var inst_9425__$1 = tmp9474;
var state_9469__$1 = (function (){var statearr_9480 = state_9469;
(statearr_9480[(7)] = inst_9425__$1);

return statearr_9480;
})();
var statearr_9481_9537 = state_9469__$1;
(statearr_9481_9537[(2)] = null);

(statearr_9481_9537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (3))){
var inst_9467 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9469__$1,inst_9467);
} else {
if((state_val_9470 === (12))){
var inst_9425 = (state_9469[(7)]);
var tmp9479 = inst_9425;
var inst_9425__$1 = tmp9479;
var state_9469__$1 = (function (){var statearr_9482 = state_9469;
(statearr_9482[(7)] = inst_9425__$1);

return statearr_9482;
})();
var statearr_9483_9538 = state_9469__$1;
(statearr_9483_9538[(2)] = null);

(statearr_9483_9538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (2))){
var inst_9425 = (state_9469[(7)]);
var inst_9427 = app.t6.main.model = inst_9425;
var state_9469__$1 = (function (){var statearr_9484 = state_9469;
(statearr_9484[(9)] = inst_9427);

return statearr_9484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9469__$1,(4),app.t6.main.evt);
} else {
if((state_val_9470 === (11))){
var inst_9425 = (state_9469[(7)]);
var inst_9443 = (state_9469[(10)]);
var inst_9454 = app.t6.main.flag.call(null,inst_9443,inst_9425);
var inst_9425__$1 = inst_9454;
var state_9469__$1 = (function (){var statearr_9485 = state_9469;
(statearr_9485[(7)] = inst_9425__$1);

return statearr_9485;
})();
var statearr_9486_9539 = state_9469__$1;
(statearr_9486_9539[(2)] = null);

(statearr_9486_9539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (9))){
var inst_9439 = (state_9469[(11)]);
var inst_9452 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),inst_9439);
var state_9469__$1 = state_9469;
if(inst_9452){
var statearr_9487_9540 = state_9469__$1;
(statearr_9487_9540[(1)] = (11));

} else {
var statearr_9488_9541 = state_9469__$1;
(statearr_9488_9541[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (5))){
var inst_9429 = (state_9469[(8)]);
var inst_9439 = (state_9469[(11)]);
var inst_9436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9437 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_9438 = (new cljs.core.PersistentVector(null,2,(5),inst_9436,inst_9437,null));
var inst_9439__$1 = cljs.core.get_in.call(null,inst_9429,inst_9438);
var inst_9440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9441 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_9442 = (new cljs.core.PersistentVector(null,2,(5),inst_9440,inst_9441,null));
var inst_9443 = cljs.core.get_in.call(null,inst_9429,inst_9442);
var inst_9447 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),inst_9439__$1);
var state_9469__$1 = (function (){var statearr_9489 = state_9469;
(statearr_9489[(11)] = inst_9439__$1);

(statearr_9489[(10)] = inst_9443);

return statearr_9489;
})();
if(inst_9447){
var statearr_9490_9542 = state_9469__$1;
(statearr_9490_9542[(1)] = (8));

} else {
var statearr_9491_9543 = state_9469__$1;
(statearr_9491_9543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (10))){
var inst_9461 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
var statearr_9492_9544 = state_9469__$1;
(statearr_9492_9544[(2)] = inst_9461);

(statearr_9492_9544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (8))){
var inst_9425 = (state_9469[(7)]);
var inst_9443 = (state_9469[(10)]);
var inst_9449 = app.t6.main.flip.call(null,inst_9443,inst_9425);
var inst_9425__$1 = inst_9449;
var state_9469__$1 = (function (){var statearr_9493 = state_9469;
(statearr_9493[(7)] = inst_9425__$1);

return statearr_9493;
})();
var statearr_9494_9545 = state_9469__$1;
(statearr_9494_9545[(2)] = null);

(statearr_9494_9545[(1)] = (2));


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
});})(c__2885__auto___9531))
;
return ((function (switch__2795__auto__,c__2885__auto___9531){
return (function() {
var app$t6$main$main_$_state_machine__2796__auto__ = null;
var app$t6$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9495[(0)] = app$t6$main$main_$_state_machine__2796__auto__);

(statearr_9495[(1)] = (1));

return statearr_9495;
});
var app$t6$main$main_$_state_machine__2796__auto____1 = (function (state_9469){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9496){if((e9496 instanceof Object)){
var ex__2799__auto__ = e9496;
var statearr_9497_9546 = state_9469;
(statearr_9497_9546[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9547 = state_9469;
state_9469 = G__9547;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2796__auto__ = function(state_9469){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2796__auto____1.call(this,state_9469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2796__auto____0;
app$t6$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2796__auto____1;
return app$t6$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___9531))
})();
var state__2887__auto__ = (function (){var statearr_9498 = f__2886__auto__.call(null);
(statearr_9498[(6)] = c__2885__auto___9531);

return statearr_9498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___9531))
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
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t6$main$main_$_iter__9499(s__9500){
return (new cljs.core.LazySeq(null,(function (){
var s__9500__$1 = s__9500;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9500__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__9500__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$main_$_iter__9499_$_iter__9501(s__9502){
return (new cljs.core.LazySeq(null,((function (s__9500__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__9502__$1 = s__9502;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__9502__$1);
if(temp__5457__auto____$1){
var s__9502__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9502__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9502__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9504 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9503 = (0);
while(true){
if((i__9503 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__9503);
cljs.core.chunk_append.call(null,b__9504,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)) || (((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.call(null,(9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen.call(null,app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag.call(null,app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})());

var G__9548 = (i__9503 + (1));
i__9503 = G__9548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9504),app$t6$main$main_$_iter__9499_$_iter__9501.call(null,cljs.core.chunk_rest.call(null,s__9502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9504),null);
}
} else {
var x = cljs.core.first.call(null,s__9502__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)) || (((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.call(null,(9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen.call(null,app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag.call(null,app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})(),app$t6$main$main_$_iter__9499_$_iter__9501.call(null,cljs.core.rest.call(null,s__9502__$2)));
}
} else {
return null;
}
break;
}
});})(s__9500__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__9500__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$main_$_iter__9499.call(null,cljs.core.rest.call(null,s__9500__$1)));
} else {
var G__9549 = cljs.core.rest.call(null,s__9500__$1);
s__9500__$1 = G__9549;
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
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_9525){
var state_val_9526 = (state_9525[(1)]);
if((state_val_9526 === (1))){
var inst_9505 = app.t6.main.p5.mouseX;
var inst_9506 = app.t6.main.p5.mouseY;
var inst_9507 = app.t6.main.p5.mouseButton;
var inst_9508 = (inst_9505 / app.t6.main.gw);
var inst_9509 = (inst_9508 | (0));
var inst_9510 = (inst_9506 / app.t6.main.gh);
var inst_9511 = (inst_9510 | (0));
var inst_9512 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_9513 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_9514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9515 = [inst_9511,inst_9509];
var inst_9516 = (new cljs.core.PersistentVector(null,2,(5),inst_9514,inst_9515,null));
var inst_9517 = cljs.core.keyword.call(null,inst_9507);
var inst_9518 = [inst_9516,inst_9517];
var inst_9519 = cljs.core.PersistentHashMap.fromArrays(inst_9513,inst_9518);
var inst_9520 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_9519];
var inst_9521 = cljs.core.PersistentHashMap.fromArrays(inst_9512,inst_9520);
var state_9525__$1 = state_9525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9525__$1,(2),app.t6.main.evt,inst_9521);
} else {
if((state_val_9526 === (2))){
var inst_9523 = (state_9525[(2)]);
var state_9525__$1 = state_9525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9525__$1,inst_9523);
} else {
return null;
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var app$t6$main$main_$_state_machine__2796__auto__ = null;
var app$t6$main$main_$_state_machine__2796__auto____0 = (function (){
var statearr_9527 = [null,null,null,null,null,null,null];
(statearr_9527[(0)] = app$t6$main$main_$_state_machine__2796__auto__);

(statearr_9527[(1)] = (1));

return statearr_9527;
});
var app$t6$main$main_$_state_machine__2796__auto____1 = (function (state_9525){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_9525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e9528){if((e9528 instanceof Object)){
var ex__2799__auto__ = e9528;
var statearr_9529_9550 = state_9525;
(statearr_9529_9550[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9551 = state_9525;
state_9525 = G__9551;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2796__auto__ = function(state_9525){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2796__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2796__auto____1.call(this,state_9525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2796__auto____0;
app$t6$main$main_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2796__auto____1;
return app$t6$main$main_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_9530 = f__2886__auto__.call(null);
(statearr_9530[(6)] = c__2885__auto__);

return statearr_9530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});
});
app.t6.main.main.call(null);

//# sourceMappingURL=main.js.map
