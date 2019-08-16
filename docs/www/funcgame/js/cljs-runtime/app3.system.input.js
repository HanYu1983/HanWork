goog.provide('app3.system.input');
goog.require('cljs.core');
app3.system.input.playerController = (function app3$system$input$playerController(model,event){
var pred__36255 = cljs.core._EQ_;
var expr__36256 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36258 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__36259 = expr__36256;
return (pred__36255.cljs$core$IFn$_invoke$arity$2 ? pred__36255.cljs$core$IFn$_invoke$arity$2(G__36258,G__36259) : pred__36255.call(null,G__36258,G__36259));
})())){
var vec__36260 = cljs.core.rest(event);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36260,(0),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36260,key,pred__36255,expr__36256){
return (function (p__36275){
var map__36276 = p__36275;
var map__36276__$1 = (((((!((map__36276 == null))))?(((((map__36276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36276):map__36276);
var entity = map__36276__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d"," "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fire","fire",-144730624)], null)),key);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([action])));
});})(entities,origin,vec__36260,key,pred__36255,expr__36256))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
if(cljs.core.truth_((function (){var G__36278 = new cljs.core.Keyword(null,"keyup","keyup",-794526927);
var G__36279 = expr__36256;
return (pred__36255.cljs$core$IFn$_invoke$arity$2 ? pred__36255.cljs$core$IFn$_invoke$arity$2(G__36278,G__36279) : pred__36255.call(null,G__36278,G__36279));
})())){
var vec__36280 = cljs.core.rest(event);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36280,(0),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36280,key,pred__36255,expr__36256){
return (function (p__36283){
var map__36284 = p__36283;
var map__36284__$1 = (((((!((map__36284 == null))))?(((((map__36284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36284):map__36284);
var entity = map__36284__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36284__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d"," "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fire","fire",-144730624)], null)),key);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),((function (action,map__36284,map__36284__$1,entity,player,entities,origin,vec__36280,key,pred__36255,expr__36256){
return (function (origin__$1){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(origin__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([action]));
});})(action,map__36284,map__36284__$1,entity,player,entities,origin,vec__36280,key,pred__36255,expr__36256))
);
});})(entities,origin,vec__36280,key,pred__36255,expr__36256))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
}
});

//# sourceMappingURL=app3.system.input.js.map
