goog.provide('app3.system.healingSys');
goog.require('cljs.core');
app3.system.healingSys.playerCollideHealing = (function app3$system$healingSys$playerCollideHealing(model,event){
var pred__36293 = cljs.core._EQ_;
var expr__36294 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36296 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36297 = expr__36294;
return (pred__36293.cljs$core$IFn$_invoke$arity$2 ? pred__36293.cljs$core$IFn$_invoke$arity$2(G__36296,G__36297) : pred__36293.call(null,G__36296,G__36297));
})())){
var vec__36301 = cljs.core.rest(event);
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"healing","healing",1329047497)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var collides = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (p__36304){
var vec__36305 = p__36304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(0),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(1),null);
return isCollide;
});})(players,enemies,others,vec__36301,pred__36293,expr__36294))
,(function (){var iter__4523__auto__ = ((function (players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function app3$system$healingSys$playerCollideHealing_$_iter__36308(s__36309){
return (new cljs.core.LazySeq(null,((function (players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (){
var s__36309__$1 = s__36309;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36309__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var o1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36309__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function app3$system$healingSys$playerCollideHealing_$_iter__36308_$_iter__36310(s__36311){
return (new cljs.core.LazySeq(null,((function (s__36309__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (){
var s__36311__$1 = s__36311;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36311__$1);
if(temp__5735__auto____$1){
var s__36311__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36311__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36311__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36313 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36312 = (0);
while(true){
if((i__36312 < size__4522__auto__)){
var o2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36312);
cljs.core.chunk_append(b__36313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null));

var G__36328 = (i__36312 + (1));
i__36312 = G__36328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36313),app3$system$healingSys$playerCollideHealing_$_iter__36308_$_iter__36310(cljs.core.chunk_rest(s__36311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36313),null);
}
} else {
var o2 = cljs.core.first(s__36311__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(50))], null),app3$system$healingSys$playerCollideHealing_$_iter__36308_$_iter__36310(cljs.core.rest(s__36311__$2)));
}
} else {
return null;
}
break;
}
});})(s__36309__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36301,pred__36293,expr__36294))
,null,null));
});})(s__36309__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,others,vec__36301,pred__36293,expr__36294))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(others));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$system$healingSys$playerCollideHealing_$_iter__36308(cljs.core.rest(s__36309__$1)));
} else {
var G__36329 = cljs.core.rest(s__36309__$1);
s__36309__$1 = G__36329;
continue;
}
} else {
return null;
}
break;
}
});})(players,enemies,others,vec__36301,pred__36293,expr__36294))
,null,null));
});})(players,enemies,others,vec__36301,pred__36293,expr__36294))
;
return iter__4523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(players,enemies));
})()));
if((cljs.core.count(collides) > (0))){
var vec__36314 = cljs.core.first(collides);
var plyr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(0),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(1),null);
return app3.emitter.send(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideHealing","playerCollideHealing",-1290989917),plyr,other], null),(function (){var fexpr__36318 = ((function (vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (model__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,other)),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([plyr,(function (){var fexpr__36319 = ((function (vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294){
return (function (plyr__$1,other__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plyr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(function (){var x__4222__auto__ = (100);
var y__4223__auto__ = ((50) + new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(plyr__$1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()], null)], 0));
});})(vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294))
;
return fexpr__36319(plyr,other);
})()]),origin));
});})(vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294))
);
});})(vec__36314,plyr,other,collides,players,enemies,others,vec__36301,pred__36293,expr__36294))
;
return fexpr__36318(model);
})());
} else {
return model;
}
} else {
return model;
}
});
app3.system.healingSys.spawnHealing = (function app3$system$healingSys$spawnHealing(model,event){
var pred__36320 = cljs.core._EQ_;
var expr__36321 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36323 = new cljs.core.Keyword(null,"spawn","spawn",-1213583293);
var G__36324 = expr__36321;
return (pred__36320.cljs$core$IFn$_invoke$arity$2 ? pred__36320.cljs$core$IFn$_invoke$arity$2(G__36323,G__36324) : pred__36320.call(null,G__36323,G__36324));
})())){
var vec__36325 = cljs.core.rest(event);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36325,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"healing","healing",1329047497),what)){
var healings = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"healing","healing",1329047497)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
if((cljs.core.count(healings) < (3))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((600)),cljs.core.rand_int((600))], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.Keyword(null,"healing","healing",1329047497),(0)], null)));
} else {
return model;
}
} else {
return model;
}
} else {
return model;
}
});

//# sourceMappingURL=app3.system.healingSys.js.map
