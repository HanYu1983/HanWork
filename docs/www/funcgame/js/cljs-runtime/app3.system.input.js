goog.provide('app3.system.input');
goog.require('cljs.core');
app3.system.input.playerController = (function app3$system$input$playerController(model,event){
var pred__36330 = cljs.core._EQ_;
var expr__36331 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36333 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__36334 = expr__36331;
return (pred__36330.cljs$core$IFn$_invoke$arity$2 ? pred__36330.cljs$core$IFn$_invoke$arity$2(G__36333,G__36334) : pred__36330.call(null,G__36333,G__36334));
})())){
var vec__36335 = cljs.core.rest(event);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36335,(0),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36335,key,pred__36330,expr__36331){
return (function (p__36338){
var map__36339 = p__36338;
var map__36339__$1 = (((((!((map__36339 == null))))?(((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36339):map__36339);
var entity = map__36339__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d"," "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fire","fire",-144730624)], null)),key);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([action])));
});})(entities,origin,vec__36335,key,pred__36330,expr__36331))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
if(cljs.core.truth_((function (){var G__36342 = new cljs.core.Keyword(null,"keyup","keyup",-794526927);
var G__36343 = expr__36331;
return (pred__36330.cljs$core$IFn$_invoke$arity$2 ? pred__36330.cljs$core$IFn$_invoke$arity$2(G__36342,G__36343) : pred__36330.call(null,G__36342,G__36343));
})())){
var vec__36344 = cljs.core.rest(event);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(0),null);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model);
var origin = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),entities);
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entities,origin,vec__36344,key,pred__36330,expr__36331){
return (function (p__36348){
var map__36349 = p__36348;
var map__36349__$1 = (((((!((map__36349 == null))))?(((((map__36349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36349):map__36349);
var entity = map__36349__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","a","s","d"," "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fire","fire",-144730624)], null)),key);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"action","action",-811238024),((function (action,map__36349,map__36349__$1,entity,player,entities,origin,vec__36344,key,pred__36330,expr__36331){
return (function (origin__$1){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(origin__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([action]));
});})(action,map__36349,map__36349__$1,entity,player,entities,origin,vec__36344,key,pred__36330,expr__36331))
);
});})(entities,origin,vec__36344,key,pred__36330,expr__36331))
,origin);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.replace,cljs.core.zipmap(origin,next)));
} else {
return model;
}
}
});

//# sourceMappingURL=app3.system.input.js.map
