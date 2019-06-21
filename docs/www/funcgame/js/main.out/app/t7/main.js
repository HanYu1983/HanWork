// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t7.main');
goog.require('cljs.core');
goog.require('app.t7.platform');
goog.require('app.t7.tool');
app.t7.main.model = cljs.core.atom.call(null,null);
app.t7.main.move = (function app$t7$main$move(offset,self){
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null)))){
return self;
} else {
return cljs.core.update_in.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,offset));
}
});
app.t7.main.gravity = (function app$t7$main$gravity(p__10639){
var map__10640 = p__10639;
var map__10640__$1 = ((((!((map__10640 == null)))?(((((map__10640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10640):map__10640);
var self = map__10640__$1;
var g = cljs.core.get.call(null,map__10640__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"gravity","gravity",-1815198225)], null)))){
return self;
} else {
return cljs.core.update_in.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,g));
}
});
app.t7.main.velocity = (function app$t7$main$velocity(p__10642){
var map__10643 = p__10642;
var map__10643__$1 = ((((!((map__10643 == null)))?(((((map__10643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10643):map__10643);
var self = map__10643__$1;
var v = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null)))){
return self;
} else {
return cljs.core.update_in.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,v));
}
});
app.t7.main.insideView = (function app$t7$main$insideView(p__10645){
var map__10646 = p__10645;
var map__10646__$1 = ((((!((map__10646 == null)))?(((((map__10646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10646):map__10646);
var pos = cljs.core.get.call(null,map__10646__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((pos == null)){
return true;
} else {
var vec__10648 = pos;
var x = cljs.core.nth.call(null,vec__10648,(0),null);
var _ = cljs.core.nth.call(null,vec__10648,(1),null);
return (x < (250));
}
});
app.t7.main.step = (function app$t7$main$step(m){
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.filter.call(null,app.t7.main.insideView,cljs.core.map.call(null,cljs.core.comp.call(null,app.t7.platform.collideWall,app.t7.main.gravity,app.t7.main.velocity),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m)))], null));
});
app.t7.main.drawBox = (function app$t7$main$drawBox(p,p__10651){
var map__10652 = p__10651;
var map__10652__$1 = ((((!((map__10652 == null)))?(((((map__10652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10652):map__10652);
var self = map__10652__$1;
var vec__10653 = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__10653,(0),null);
var y = cljs.core.nth.call(null,vec__10653,(1),null);
var vec__10656 = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__10656,(0),null);
var h = cljs.core.nth.call(null,vec__10656,(1),null);
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null)))){
return self;
} else {
p.fill((255),(0),(0));

return p.rect(x,y,w,h);
}
});
app.t7.main.drawCircle = (function app$t7$main$drawCircle(p,p__10660){
var map__10661 = p__10660;
var map__10661__$1 = ((((!((map__10661 == null)))?(((((map__10661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10661):map__10661);
var self = map__10661__$1;
var vec__10662 = cljs.core.get.call(null,map__10661__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__10662,(0),null);
var y = cljs.core.nth.call(null,vec__10662,(1),null);
var radian = cljs.core.get.call(null,map__10661__$1,new cljs.core.Keyword(null,"radian","radian",-1613634577));
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radian","radian",-1613634577)], null)))){
return self;
} else {
p.fill((0),(255),(0));

return p.circle(x,y,radian);
}
});
app.t7.main.sketch = (function app$t7$main$sketch(p){
p.setup = (function (){
return p.createCanvas((250),(150));
});

return p.draw = (function (){
var m = cljs.core.deref.call(null,app.t7.main.model);
var entity = new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m);
var draws = cljs.core.reduce.call(null,cljs.core.comp,cljs.core.map.call(null,((function (m,entity){
return (function (p1__10666_SHARP_){
return cljs.core.partial.call(null,p1__10666_SHARP_,p);
});})(m,entity))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.main.drawBox,app.t7.main.drawCircle], null)));
p.background((0));

app.t7.platform.draw.call(null,p);

var seq__10667 = cljs.core.seq.call(null,entity);
var chunk__10668 = null;
var count__10669 = (0);
var i__10670 = (0);
while(true){
if((i__10670 < count__10669)){
var e = cljs.core._nth.call(null,chunk__10668,i__10670);
draws.call(null,e);


var G__10671 = seq__10667;
var G__10672 = chunk__10668;
var G__10673 = count__10669;
var G__10674 = (i__10670 + (1));
seq__10667 = G__10671;
chunk__10668 = G__10672;
count__10669 = G__10673;
i__10670 = G__10674;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10667);
if(temp__5457__auto__){
var seq__10667__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10667__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10667__$1);
var G__10675 = cljs.core.chunk_rest.call(null,seq__10667__$1);
var G__10676 = c__4319__auto__;
var G__10677 = cljs.core.count.call(null,c__4319__auto__);
var G__10678 = (0);
seq__10667 = G__10675;
chunk__10668 = G__10676;
count__10669 = G__10677;
i__10670 = G__10678;
continue;
} else {
var e = cljs.core.first.call(null,seq__10667__$1);
draws.call(null,e);


var G__10679 = cljs.core.next.call(null,seq__10667__$1);
var G__10680 = null;
var G__10681 = (0);
var G__10682 = (0);
seq__10667 = G__10679;
chunk__10668 = G__10680;
count__10669 = G__10681;
i__10670 = G__10682;
continue;
}
} else {
return null;
}
}
break;
}
});
});
app.t7.main.main = (function app$t7$main$main(){
var timer_10699 = rxjs.timer((0),(100)).pipe(rxjs.operators.map(cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null))));
var click_10700 = rxjs.fromEvent(document,"keydown").pipe(rxjs.operators.map(((function (timer_10699){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(timer_10699))
));
var evt_10701 = rxjs.merge(timer_10699,click_10700).pipe(rxjs.operators.scan(((function (timer_10699,click_10700){
return (function (m,p__10683){
var vec__10684 = p__10683;
var evt = cljs.core.nth.call(null,vec__10684,(0),null);
var args = cljs.core.nth.call(null,vec__10684,(1),null);
var pred__10687 = cljs.core._EQ_;
var expr__10688 = evt;
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"keydown","keydown",-629268186),expr__10688))){
var key = args;
var pred__10690 = cljs.core._EQ_;
var expr__10691 = key;
if(cljs.core.truth_(pred__10690.call(null,"a",expr__10691))){
var players = cljs.core.filter.call(null,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.call(null,cljs.core.partial.call(null,app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(0)], null)),players);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.zipmap.call(null,players,newPlayers)));
} else {
if(cljs.core.truth_(pred__10690.call(null,"d",expr__10691))){
var players = cljs.core.filter.call(null,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.call(null,cljs.core.partial.call(null,app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)),players);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.zipmap.call(null,players,newPlayers)));
} else {
if(cljs.core.truth_(pred__10690.call(null,"w",expr__10691))){
var players = cljs.core.filter.call(null,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.call(null,cljs.core.partial.call(null,app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-20)], null)),players);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.zipmap.call(null,players,newPlayers)));
} else {
if(cljs.core.truth_(pred__10690.call(null," ",expr__10691))){
var players = cljs.core.filter.call(null,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.call(null,((function (players,pred__10690,expr__10691,key,pred__10687,expr__10688,vec__10684,evt,args,timer_10699,click_10700){
return (function (p__10693){
var map__10694 = p__10693;
var map__10694__$1 = ((((!((map__10694 == null)))?(((((map__10694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10694):map__10694);
var pos = cljs.core.get.call(null,map__10694__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"radian","radian",-1613634577),(3),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__10690,expr__10691,key,pred__10687,expr__10688,vec__10684,evt,args,timer_10699,click_10700))
,players);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.call(null,cljs.core.concat,bullets));
} else {
if(cljs.core.truth_(pred__10690.call(null,"s",expr__10691))){
var players = cljs.core.filter.call(null,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.call(null,((function (players,pred__10690,expr__10691,key,pred__10687,expr__10688,vec__10684,evt,args,timer_10699,click_10700){
return (function (p__10696){
var map__10697 = p__10696;
var map__10697__$1 = ((((!((map__10697 == null)))?(((((map__10697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10697):map__10697);
var pos = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__10690,expr__10691,key,pred__10687,expr__10688,vec__10684,evt,args,timer_10699,click_10700))
,players);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.call(null,cljs.core.concat,bullets));
} else {
return m;
}
}
}
}
}
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"update","update",1045576396),expr__10688))){
return app.t7.main.step.call(null,m);
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__10688))){
return m;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10688)].join('')));
}
}
}
});})(timer_10699,click_10700))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null)], null)], null)));
evt_10701.subscribe(((function (timer_10699,click_10700,evt_10701){
return (function (m){
return cljs.core.reset_BANG_.call(null,app.t7.main.model,m);
});})(timer_10699,click_10700,evt_10701))
);

return (new p5(app.t7.main.sketch,"container"));
});
app.t7.main.main.call(null);

//# sourceMappingURL=main.js.map
