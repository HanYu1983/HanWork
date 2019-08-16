goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30394){
var vec__30395 = p__30394;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30395,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30398 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30406 = arguments.length;
switch (G__30406) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30425_30518 = clojure.data.equality_partition;
var G__30426_30519 = "null";
var G__30427_30520 = ((function (G__30425_30518,G__30426_30519){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30425_30518,G__30426_30519))
;
goog.object.set(G__30425_30518,G__30426_30519,G__30427_30520);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30432_30521 = clojure.data.equality_partition;
var G__30433_30522 = "string";
var G__30434_30523 = ((function (G__30432_30521,G__30433_30522){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30432_30521,G__30433_30522))
;
goog.object.set(G__30432_30521,G__30433_30522,G__30434_30523);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30437_30524 = clojure.data.equality_partition;
var G__30438_30525 = "number";
var G__30439_30526 = ((function (G__30437_30524,G__30438_30525){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30437_30524,G__30438_30525))
;
goog.object.set(G__30437_30524,G__30438_30525,G__30439_30526);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30441_30528 = clojure.data.equality_partition;
var G__30442_30529 = "array";
var G__30443_30530 = ((function (G__30441_30528,G__30442_30529){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30441_30528,G__30442_30529))
;
goog.object.set(G__30441_30528,G__30442_30529,G__30443_30530);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30444_30536 = clojure.data.equality_partition;
var G__30445_30537 = "function";
var G__30446_30538 = ((function (G__30444_30536,G__30445_30537){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30444_30536,G__30445_30537))
;
goog.object.set(G__30444_30536,G__30445_30537,G__30446_30538);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30447_30541 = clojure.data.equality_partition;
var G__30448_30542 = "boolean";
var G__30449_30543 = ((function (G__30447_30541,G__30448_30542){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30447_30541,G__30448_30542))
;
goog.object.set(G__30447_30541,G__30448_30542,G__30449_30543);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30450_30549 = clojure.data.equality_partition;
var G__30451_30550 = "_";
var G__30452_30551 = ((function (G__30450_30549,G__30451_30550){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30450_30549,G__30451_30550))
;
goog.object.set(G__30450_30549,G__30451_30550,G__30452_30551);
goog.object.set(clojure.data.Diff,"null",true);

var G__30459_30562 = clojure.data.diff_similar;
var G__30460_30563 = "null";
var G__30461_30564 = ((function (G__30459_30562,G__30460_30563){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30459_30562,G__30460_30563))
;
goog.object.set(G__30459_30562,G__30460_30563,G__30461_30564);

goog.object.set(clojure.data.Diff,"string",true);

var G__30462_30571 = clojure.data.diff_similar;
var G__30463_30572 = "string";
var G__30464_30573 = ((function (G__30462_30571,G__30463_30572){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30462_30571,G__30463_30572))
;
goog.object.set(G__30462_30571,G__30463_30572,G__30464_30573);

goog.object.set(clojure.data.Diff,"number",true);

var G__30465_30575 = clojure.data.diff_similar;
var G__30466_30576 = "number";
var G__30467_30577 = ((function (G__30465_30575,G__30466_30576){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30465_30575,G__30466_30576))
;
goog.object.set(G__30465_30575,G__30466_30576,G__30467_30577);

goog.object.set(clojure.data.Diff,"array",true);

var G__30468_30579 = clojure.data.diff_similar;
var G__30469_30580 = "array";
var G__30470_30581 = ((function (G__30468_30579,G__30469_30580){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30468_30579,G__30469_30580))
;
goog.object.set(G__30468_30579,G__30469_30580,G__30470_30581);

goog.object.set(clojure.data.Diff,"function",true);

var G__30471_30582 = clojure.data.diff_similar;
var G__30472_30583 = "function";
var G__30473_30584 = ((function (G__30471_30582,G__30472_30583){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30471_30582,G__30472_30583))
;
goog.object.set(G__30471_30582,G__30472_30583,G__30473_30584);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30474_30585 = clojure.data.diff_similar;
var G__30475_30586 = "boolean";
var G__30476_30587 = ((function (G__30474_30585,G__30475_30586){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30474_30585,G__30475_30586))
;
goog.object.set(G__30474_30585,G__30475_30586,G__30476_30587);

goog.object.set(clojure.data.Diff,"_",true);

var G__30477_30590 = clojure.data.diff_similar;
var G__30478_30591 = "_";
var G__30479_30592 = ((function (G__30477_30590,G__30478_30591){
return (function (a,b){
var fexpr__30481 = (function (){var G__30482 = clojure.data.equality_partition(a);
var G__30482__$1 = (((G__30482 instanceof cljs.core.Keyword))?G__30482.fqn:null);
switch (G__30482__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30482__$1)].join('')));

}
})();
return (fexpr__30481.cljs$core$IFn$_invoke$arity$2 ? fexpr__30481.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30481.call(null,a,b));
});})(G__30477_30590,G__30478_30591))
;
goog.object.set(G__30477_30590,G__30478_30591,G__30479_30592);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
