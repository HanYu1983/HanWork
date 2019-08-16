goog.provide('app.t7.main');
goog.require('cljs.core');
goog.require('app.t7.platform');
goog.require('app.t7.tool');
app.t7.main.model = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.t7.main.move = (function app$t7$main$move(offset,self){
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null))))){
return self;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,offset));
}
});
app.t7.main.gravity = (function app$t7$main$gravity(p__38349){
var map__38350 = p__38349;
var map__38350__$1 = (((((!((map__38350 == null))))?(((((map__38350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38350):map__38350);
var self = map__38350__$1;
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"gravity","gravity",-1815198225)], null))))){
return self;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,g));
}
});
app.t7.main.velocity = (function app$t7$main$velocity(p__38352){
var map__38353 = p__38352;
var map__38353__$1 = (((((!((map__38353 == null))))?(((((map__38353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38353):map__38353);
var self = map__38353__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38353__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null))))){
return self;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,v));
}
});
app.t7.main.insideView = (function app$t7$main$insideView(p__38355){
var map__38356 = p__38355;
var map__38356__$1 = (((((!((map__38356 == null))))?(((((map__38356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38356):map__38356);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38356__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((pos == null)){
return true;
} else {
var vec__38360 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38360,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38360,(1),null);
return (x < (250));
}
});
app.t7.main.step = (function app$t7$main$step(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.t7.main.insideView,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(app.t7.platform.collideWall,app.t7.main.gravity,app.t7.main.velocity),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m)))], null)], 0));
});
app.t7.main.drawBox = (function app$t7$main$drawBox(p,p__38400){
var map__38401 = p__38400;
var map__38401__$1 = (((((!((map__38401 == null))))?(((((map__38401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38401):map__38401);
var self = map__38401__$1;
var vec__38402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(1),null);
var vec__38405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(1),null);
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null))))){
return self;
} else {
p.fill((255),(0),(0));

return p.rect(x,y,w,h);
}
});
app.t7.main.drawCircle = (function app$t7$main$drawCircle(p,p__38414){
var map__38415 = p__38414;
var map__38415__$1 = (((((!((map__38415 == null))))?(((((map__38415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38415):map__38415);
var self = map__38415__$1;
var vec__38417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38417,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38417,(1),null);
var radian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38415__$1,new cljs.core.Keyword(null,"radian","radian",-1613634577));
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radian","radian",-1613634577)], null))))){
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
var m = cljs.core.deref(app.t7.main.model);
var entity = new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m);
var draws = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (m,entity){
return (function (p1__38430_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__38430_SHARP_,p);
});})(m,entity))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.main.drawBox,app.t7.main.drawCircle], null)));
p.background((0));

app.t7.platform.draw(p);

var seq__38442 = cljs.core.seq(entity);
var chunk__38443 = null;
var count__38444 = (0);
var i__38445 = (0);
while(true){
if((i__38445 < count__38444)){
var e = chunk__38443.cljs$core$IIndexed$_nth$arity$2(null,i__38445);
(draws.cljs$core$IFn$_invoke$arity$1 ? draws.cljs$core$IFn$_invoke$arity$1(e) : draws.call(null,e));


var G__38649 = seq__38442;
var G__38650 = chunk__38443;
var G__38651 = count__38444;
var G__38652 = (i__38445 + (1));
seq__38442 = G__38649;
chunk__38443 = G__38650;
count__38444 = G__38651;
i__38445 = G__38652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38442);
if(temp__5735__auto__){
var seq__38442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38442__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38442__$1);
var G__38653 = cljs.core.chunk_rest(seq__38442__$1);
var G__38654 = c__4550__auto__;
var G__38655 = cljs.core.count(c__4550__auto__);
var G__38656 = (0);
seq__38442 = G__38653;
chunk__38443 = G__38654;
count__38444 = G__38655;
i__38445 = G__38656;
continue;
} else {
var e = cljs.core.first(seq__38442__$1);
(draws.cljs$core$IFn$_invoke$arity$1 ? draws.cljs$core$IFn$_invoke$arity$1(e) : draws.call(null,e));


var G__38706 = cljs.core.next(seq__38442__$1);
var G__38707 = null;
var G__38708 = (0);
var G__38709 = (0);
seq__38442 = G__38706;
chunk__38443 = G__38707;
count__38444 = G__38708;
i__38445 = G__38709;
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
var timer_38720 = rxjs.timer((0),(100)).pipe(rxjs.operators.map(cljs.core.constantly(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null))));
var click_38721 = rxjs.fromEvent(document,"keydown").pipe(rxjs.operators.map(((function (timer_38720){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(timer_38720))
));
var evt_38722 = rxjs.merge(timer_38720,click_38721).pipe(rxjs.operators.scan(((function (timer_38720,click_38721){
return (function (m,p__38502){
var vec__38503 = p__38502;
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38503,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38503,(1),null);
var pred__38506 = cljs.core._EQ_;
var expr__38507 = evt;
if(cljs.core.truth_((function (){var G__38513 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__38514 = expr__38507;
return (pred__38506.cljs$core$IFn$_invoke$arity$2 ? pred__38506.cljs$core$IFn$_invoke$arity$2(G__38513,G__38514) : pred__38506.call(null,G__38513,G__38514));
})())){
var key = args;
var pred__38519 = cljs.core._EQ_;
var expr__38520 = key;
if(cljs.core.truth_((pred__38519.cljs$core$IFn$_invoke$arity$2 ? pred__38519.cljs$core$IFn$_invoke$arity$2("a",expr__38520) : pred__38519.call(null,"a",expr__38520)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(0)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38519.cljs$core$IFn$_invoke$arity$2 ? pred__38519.cljs$core$IFn$_invoke$arity$2("d",expr__38520) : pred__38519.call(null,"d",expr__38520)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38519.cljs$core$IFn$_invoke$arity$2 ? pred__38519.cljs$core$IFn$_invoke$arity$2("w",expr__38520) : pred__38519.call(null,"w",expr__38520)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-20)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38519.cljs$core$IFn$_invoke$arity$2 ? pred__38519.cljs$core$IFn$_invoke$arity$2(" ",expr__38520) : pred__38519.call(null," ",expr__38520)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (players,pred__38519,expr__38520,key,pred__38506,expr__38507,vec__38503,evt,args,timer_38720,click_38721){
return (function (p__38556){
var map__38557 = p__38556;
var map__38557__$1 = (((((!((map__38557 == null))))?(((((map__38557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38557):map__38557);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38557__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"radian","radian",-1613634577),(3),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__38519,expr__38520,key,pred__38506,expr__38507,vec__38503,evt,args,timer_38720,click_38721))
,players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bullets));
} else {
if(cljs.core.truth_((pred__38519.cljs$core$IFn$_invoke$arity$2 ? pred__38519.cljs$core$IFn$_invoke$arity$2("s",expr__38520) : pred__38519.call(null,"s",expr__38520)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (players,pred__38519,expr__38520,key,pred__38506,expr__38507,vec__38503,evt,args,timer_38720,click_38721){
return (function (p__38568){
var map__38573 = p__38568;
var map__38573__$1 = (((((!((map__38573 == null))))?(((((map__38573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38573):map__38573);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38573__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__38519,expr__38520,key,pred__38506,expr__38507,vec__38503,evt,args,timer_38720,click_38721))
,players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bullets));
} else {
return m;
}
}
}
}
}
} else {
if(cljs.core.truth_((function (){var G__38589 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__38590 = expr__38507;
return (pred__38506.cljs$core$IFn$_invoke$arity$2 ? pred__38506.cljs$core$IFn$_invoke$arity$2(G__38589,G__38590) : pred__38506.call(null,G__38589,G__38590));
})())){
return app.t7.main.step(m);
} else {
if(cljs.core.truth_((function (){var G__38595 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__38596 = expr__38507;
return (pred__38506.cljs$core$IFn$_invoke$arity$2 ? pred__38506.cljs$core$IFn$_invoke$arity$2(G__38595,G__38596) : pred__38506.call(null,G__38595,G__38596));
})())){
return m;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38507)].join('')));
}
}
}
});})(timer_38720,click_38721))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null)], null)], null)));
evt_38722.subscribe(((function (timer_38720,click_38721,evt_38722){
return (function (m){
return cljs.core.reset_BANG_(app.t7.main.model,m);
});})(timer_38720,click_38721,evt_38722))
);

return (new p5(app.t7.main.sketch,"container"));
});
app.t7.main.main();

//# sourceMappingURL=app.t7.main.js.map
