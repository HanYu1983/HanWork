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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__32810){
var vec__32811 = p__32810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32811,(1),null);
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
var vec__32819 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32819,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32819,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32819,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__32826 = arguments.length;
switch (G__32826) {
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

var G__32899_33016 = clojure.data.equality_partition;
var G__32900_33017 = "null";
var G__32901_33018 = ((function (G__32899_33016,G__32900_33017){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32899_33016,G__32900_33017))
;
goog.object.set(G__32899_33016,G__32900_33017,G__32901_33018);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__32902_33020 = clojure.data.equality_partition;
var G__32903_33021 = "string";
var G__32904_33022 = ((function (G__32902_33020,G__32903_33021){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32902_33020,G__32903_33021))
;
goog.object.set(G__32902_33020,G__32903_33021,G__32904_33022);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__32905_33024 = clojure.data.equality_partition;
var G__32906_33025 = "number";
var G__32907_33026 = ((function (G__32905_33024,G__32906_33025){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32905_33024,G__32906_33025))
;
goog.object.set(G__32905_33024,G__32906_33025,G__32907_33026);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__32908_33027 = clojure.data.equality_partition;
var G__32909_33028 = "array";
var G__32910_33029 = ((function (G__32908_33027,G__32909_33028){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__32908_33027,G__32909_33028))
;
goog.object.set(G__32908_33027,G__32909_33028,G__32910_33029);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__32912_33030 = clojure.data.equality_partition;
var G__32913_33031 = "function";
var G__32914_33032 = ((function (G__32912_33030,G__32913_33031){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32912_33030,G__32913_33031))
;
goog.object.set(G__32912_33030,G__32913_33031,G__32914_33032);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__32915_33036 = clojure.data.equality_partition;
var G__32916_33037 = "boolean";
var G__32917_33038 = ((function (G__32915_33036,G__32916_33037){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32915_33036,G__32916_33037))
;
goog.object.set(G__32915_33036,G__32916_33037,G__32917_33038);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__32922_33040 = clojure.data.equality_partition;
var G__32923_33041 = "_";
var G__32924_33042 = ((function (G__32922_33040,G__32923_33041){
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
});})(G__32922_33040,G__32923_33041))
;
goog.object.set(G__32922_33040,G__32923_33041,G__32924_33042);
goog.object.set(clojure.data.Diff,"null",true);

var G__32938_33047 = clojure.data.diff_similar;
var G__32939_33048 = "null";
var G__32940_33049 = ((function (G__32938_33047,G__32939_33048){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32938_33047,G__32939_33048))
;
goog.object.set(G__32938_33047,G__32939_33048,G__32940_33049);

goog.object.set(clojure.data.Diff,"string",true);

var G__32946_33055 = clojure.data.diff_similar;
var G__32947_33056 = "string";
var G__32948_33057 = ((function (G__32946_33055,G__32947_33056){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32946_33055,G__32947_33056))
;
goog.object.set(G__32946_33055,G__32947_33056,G__32948_33057);

goog.object.set(clojure.data.Diff,"number",true);

var G__32950_33060 = clojure.data.diff_similar;
var G__32951_33061 = "number";
var G__32952_33062 = ((function (G__32950_33060,G__32951_33061){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32950_33060,G__32951_33061))
;
goog.object.set(G__32950_33060,G__32951_33061,G__32952_33062);

goog.object.set(clojure.data.Diff,"array",true);

var G__32957_33064 = clojure.data.diff_similar;
var G__32958_33065 = "array";
var G__32959_33066 = ((function (G__32957_33064,G__32958_33065){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__32957_33064,G__32958_33065))
;
goog.object.set(G__32957_33064,G__32958_33065,G__32959_33066);

goog.object.set(clojure.data.Diff,"function",true);

var G__32962_33069 = clojure.data.diff_similar;
var G__32963_33070 = "function";
var G__32964_33071 = ((function (G__32962_33069,G__32963_33070){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32962_33069,G__32963_33070))
;
goog.object.set(G__32962_33069,G__32963_33070,G__32964_33071);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__32971_33076 = clojure.data.diff_similar;
var G__32972_33077 = "boolean";
var G__32973_33078 = ((function (G__32971_33076,G__32972_33077){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32971_33076,G__32972_33077))
;
goog.object.set(G__32971_33076,G__32972_33077,G__32973_33078);

goog.object.set(clojure.data.Diff,"_",true);

var G__32974_33081 = clojure.data.diff_similar;
var G__32975_33082 = "_";
var G__32976_33083 = ((function (G__32974_33081,G__32975_33082){
return (function (a,b){
var fexpr__32984 = (function (){var G__32985 = clojure.data.equality_partition(a);
var G__32985__$1 = (((G__32985 instanceof cljs.core.Keyword))?G__32985.fqn:null);
switch (G__32985__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32985__$1)].join('')));

}
})();
return (fexpr__32984.cljs$core$IFn$_invoke$arity$2 ? fexpr__32984.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__32984.call(null,a,b));
});})(G__32974_33081,G__32975_33082))
;
goog.object.set(G__32974_33081,G__32975_33082,G__32976_33083);
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
