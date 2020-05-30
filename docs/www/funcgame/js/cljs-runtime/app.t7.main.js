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
app.t7.main.gravity = (function app$t7$main$gravity(p__38191){
var map__38192 = p__38191;
var map__38192__$1 = (((((!((map__38192 == null))))?(((((map__38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38192):map__38192);
var self = map__38192__$1;
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"gravity","gravity",-1815198225)], null))))){
return self;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,g));
}
});
app.t7.main.velocity = (function app$t7$main$velocity(p__38196){
var map__38197 = p__38196;
var map__38197__$1 = (((((!((map__38197 == null))))?(((((map__38197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38197):map__38197);
var self = map__38197__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38197__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null))))){
return self;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,v));
}
});
app.t7.main.insideView = (function app$t7$main$insideView(p__38201){
var map__38203 = p__38201;
var map__38203__$1 = (((((!((map__38203 == null))))?(((((map__38203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38203):map__38203);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38203__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((pos == null)){
return true;
} else {
var vec__38233 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(1),null);
return (x < (250));
}
});
app.t7.main.step = (function app$t7$main$step(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.t7.main.insideView,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(app.t7.platform.collideWall,app.t7.main.gravity,app.t7.main.velocity),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m)))], null)], 0));
});
app.t7.main.drawBox = (function app$t7$main$drawBox(p,p__38236){
var map__38237 = p__38236;
var map__38237__$1 = (((((!((map__38237 == null))))?(((((map__38237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38237):map__38237);
var self = map__38237__$1;
var vec__38238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38237__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38238,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38238,(1),null);
var vec__38241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38237__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38241,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38241,(1),null);
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null))))){
return self;
} else {
p.fill((255),(0),(0));

return p.rect(x,y,w,h);
}
});
app.t7.main.drawCircle = (function app$t7$main$drawCircle(p,p__38267){
var map__38268 = p__38267;
var map__38268__$1 = (((((!((map__38268 == null))))?(((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38268):map__38268);
var self = map__38268__$1;
var vec__38269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38269,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38269,(1),null);
var radian = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,new cljs.core.Keyword(null,"radian","radian",-1613634577));
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
return (function (p1__38284_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__38284_SHARP_,p);
});})(m,entity))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.main.drawBox,app.t7.main.drawCircle], null)));
p.background((0));

app.t7.platform.draw(p);

var seq__38298 = cljs.core.seq(entity);
var chunk__38299 = null;
var count__38300 = (0);
var i__38301 = (0);
while(true){
if((i__38301 < count__38300)){
var e = chunk__38299.cljs$core$IIndexed$_nth$arity$2(null,i__38301);
(draws.cljs$core$IFn$_invoke$arity$1 ? draws.cljs$core$IFn$_invoke$arity$1(e) : draws.call(null,e));


var G__38342 = seq__38298;
var G__38343 = chunk__38299;
var G__38344 = count__38300;
var G__38345 = (i__38301 + (1));
seq__38298 = G__38342;
chunk__38299 = G__38343;
count__38300 = G__38344;
i__38301 = G__38345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38298);
if(temp__5735__auto__){
var seq__38298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38298__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38298__$1);
var G__38347 = cljs.core.chunk_rest(seq__38298__$1);
var G__38348 = c__4550__auto__;
var G__38349 = cljs.core.count(c__4550__auto__);
var G__38350 = (0);
seq__38298 = G__38347;
chunk__38299 = G__38348;
count__38300 = G__38349;
i__38301 = G__38350;
continue;
} else {
var e = cljs.core.first(seq__38298__$1);
(draws.cljs$core$IFn$_invoke$arity$1 ? draws.cljs$core$IFn$_invoke$arity$1(e) : draws.call(null,e));


var G__38352 = cljs.core.next(seq__38298__$1);
var G__38353 = null;
var G__38354 = (0);
var G__38355 = (0);
seq__38298 = G__38352;
chunk__38299 = G__38353;
count__38300 = G__38354;
i__38301 = G__38355;
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
var timer_38356 = rxjs.timer((0),(100)).pipe(rxjs.operators.map(cljs.core.constantly(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null))));
var click_38357 = rxjs.fromEvent(document,"keydown").pipe(rxjs.operators.map(((function (timer_38356){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(timer_38356))
));
var evt_38358 = rxjs.merge(timer_38356,click_38357).pipe(rxjs.operators.scan(((function (timer_38356,click_38357){
return (function (m,p__38315){
var vec__38316 = p__38315;
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38316,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38316,(1),null);
var pred__38319 = cljs.core._EQ_;
var expr__38320 = evt;
if(cljs.core.truth_((function (){var G__38322 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__38323 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38322,G__38323) : pred__38319.call(null,G__38322,G__38323));
})())){
var key = args;
var pred__38324 = cljs.core._EQ_;
var expr__38325 = key;
if(cljs.core.truth_((pred__38324.cljs$core$IFn$_invoke$arity$2 ? pred__38324.cljs$core$IFn$_invoke$arity$2("a",expr__38325) : pred__38324.call(null,"a",expr__38325)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(0)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38324.cljs$core$IFn$_invoke$arity$2 ? pred__38324.cljs$core$IFn$_invoke$arity$2("d",expr__38325) : pred__38324.call(null,"d",expr__38325)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38324.cljs$core$IFn$_invoke$arity$2 ? pred__38324.cljs$core$IFn$_invoke$arity$2("w",expr__38325) : pred__38324.call(null,"w",expr__38325)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var newPlayers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.t7.main.move,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-20)], null)),players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(players,newPlayers)));
} else {
if(cljs.core.truth_((pred__38324.cljs$core$IFn$_invoke$arity$2 ? pred__38324.cljs$core$IFn$_invoke$arity$2(" ",expr__38325) : pred__38324.call(null," ",expr__38325)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (players,pred__38324,expr__38325,key,pred__38319,expr__38320,vec__38316,evt,args,timer_38356,click_38357){
return (function (p__38327){
var map__38328 = p__38327;
var map__38328__$1 = (((((!((map__38328 == null))))?(((((map__38328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38328):map__38328);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38328__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"radian","radian",-1613634577),(3),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__38324,expr__38325,key,pred__38319,expr__38320,vec__38316,evt,args,timer_38356,click_38357))
,players);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bullets));
} else {
if(cljs.core.truth_((pred__38324.cljs$core$IFn$_invoke$arity$2 ? pred__38324.cljs$core$IFn$_invoke$arity$2("s",expr__38325) : pred__38324.call(null,"s",expr__38325)))){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(m));
var bullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (players,pred__38324,expr__38325,key,pred__38319,expr__38320,vec__38316,evt,args,timer_38356,click_38357){
return (function (p__38330){
var map__38331 = p__38330;
var map__38331__$1 = (((((!((map__38331 == null))))?(((((map__38331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38331):map__38331);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)], null);
});})(players,pred__38324,expr__38325,key,pred__38319,expr__38320,vec__38316,evt,args,timer_38356,click_38357))
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
if(cljs.core.truth_((function (){var G__38334 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__38335 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38334,G__38335) : pred__38319.call(null,G__38334,G__38335));
})())){
return app.t7.main.step(m);
} else {
if(cljs.core.truth_((function (){var G__38336 = new cljs.core.Keyword(null,"default","default",-1987822328);
var G__38337 = expr__38320;
return (pred__38319.cljs$core$IFn$_invoke$arity$2 ? pred__38319.cljs$core$IFn$_invoke$arity$2(G__38336,G__38337) : pred__38319.call(null,G__38336,G__38337));
})())){
return m;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38320)].join('')));
}
}
}
});})(timer_38356,click_38357))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(0)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"player","player",-97687400),true], null)], null)], null)));
evt_38358.subscribe(((function (timer_38356,click_38357,evt_38358){
return (function (m){
return cljs.core.reset_BANG_(app.t7.main.model,m);
});})(timer_38356,click_38357,evt_38358))
);

return (new p5(app.t7.main.sketch,"container"));
});
app.t7.main.main();

//# sourceMappingURL=app.t7.main.js.map
