goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27744){
var map__27745 = p__27744;
var map__27745__$1 = (((((!((map__27745 == null))))?(((((map__27745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27745):map__27745);
var m = map__27745__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27745__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27747_27899 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27748_27900 = null;
var count__27749_27901 = (0);
var i__27750_27902 = (0);
while(true){
if((i__27750_27902 < count__27749_27901)){
var f_27905 = chunk__27748_27900.cljs$core$IIndexed$_nth$arity$2(null,i__27750_27902);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27905], 0));


var G__27906 = seq__27747_27899;
var G__27907 = chunk__27748_27900;
var G__27908 = count__27749_27901;
var G__27909 = (i__27750_27902 + (1));
seq__27747_27899 = G__27906;
chunk__27748_27900 = G__27907;
count__27749_27901 = G__27908;
i__27750_27902 = G__27909;
continue;
} else {
var temp__5735__auto___27910 = cljs.core.seq(seq__27747_27899);
if(temp__5735__auto___27910){
var seq__27747_27911__$1 = temp__5735__auto___27910;
if(cljs.core.chunked_seq_QMARK_(seq__27747_27911__$1)){
var c__4550__auto___27912 = cljs.core.chunk_first(seq__27747_27911__$1);
var G__27913 = cljs.core.chunk_rest(seq__27747_27911__$1);
var G__27914 = c__4550__auto___27912;
var G__27915 = cljs.core.count(c__4550__auto___27912);
var G__27916 = (0);
seq__27747_27899 = G__27913;
chunk__27748_27900 = G__27914;
count__27749_27901 = G__27915;
i__27750_27902 = G__27916;
continue;
} else {
var f_27917 = cljs.core.first(seq__27747_27911__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27917], 0));


var G__27918 = cljs.core.next(seq__27747_27911__$1);
var G__27919 = null;
var G__27920 = (0);
var G__27921 = (0);
seq__27747_27899 = G__27918;
chunk__27748_27900 = G__27919;
count__27749_27901 = G__27920;
i__27750_27902 = G__27921;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27927], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27927)))?cljs.core.second(arglists_27927):arglists_27927)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27752_27938 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27753_27939 = null;
var count__27754_27940 = (0);
var i__27755_27941 = (0);
while(true){
if((i__27755_27941 < count__27754_27940)){
var vec__27767_27942 = chunk__27753_27939.cljs$core$IIndexed$_nth$arity$2(null,i__27755_27941);
var name_27943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767_27942,(0),null);
var map__27770_27944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767_27942,(1),null);
var map__27770_27945__$1 = (((((!((map__27770_27944 == null))))?(((((map__27770_27944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27770_27944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27770_27944):map__27770_27944);
var doc_27946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27770_27945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27770_27945__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27943], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27947], 0));

if(cljs.core.truth_(doc_27946)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27946], 0));
} else {
}


var G__27948 = seq__27752_27938;
var G__27949 = chunk__27753_27939;
var G__27950 = count__27754_27940;
var G__27951 = (i__27755_27941 + (1));
seq__27752_27938 = G__27948;
chunk__27753_27939 = G__27949;
count__27754_27940 = G__27950;
i__27755_27941 = G__27951;
continue;
} else {
var temp__5735__auto___27952 = cljs.core.seq(seq__27752_27938);
if(temp__5735__auto___27952){
var seq__27752_27953__$1 = temp__5735__auto___27952;
if(cljs.core.chunked_seq_QMARK_(seq__27752_27953__$1)){
var c__4550__auto___27954 = cljs.core.chunk_first(seq__27752_27953__$1);
var G__27955 = cljs.core.chunk_rest(seq__27752_27953__$1);
var G__27956 = c__4550__auto___27954;
var G__27957 = cljs.core.count(c__4550__auto___27954);
var G__27958 = (0);
seq__27752_27938 = G__27955;
chunk__27753_27939 = G__27956;
count__27754_27940 = G__27957;
i__27755_27941 = G__27958;
continue;
} else {
var vec__27772_27959 = cljs.core.first(seq__27752_27953__$1);
var name_27960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27772_27959,(0),null);
var map__27775_27961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27772_27959,(1),null);
var map__27775_27962__$1 = (((((!((map__27775_27961 == null))))?(((((map__27775_27961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27775_27961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27775_27961):map__27775_27961);
var doc_27963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775_27962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775_27962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27960], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27964], 0));

if(cljs.core.truth_(doc_27963)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27963], 0));
} else {
}


var G__27965 = cljs.core.next(seq__27752_27953__$1);
var G__27966 = null;
var G__27967 = (0);
var G__27968 = (0);
seq__27752_27938 = G__27965;
chunk__27753_27939 = G__27966;
count__27754_27940 = G__27967;
i__27755_27941 = G__27968;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27782 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27783 = null;
var count__27784 = (0);
var i__27785 = (0);
while(true){
if((i__27785 < count__27784)){
var role = chunk__27783.cljs$core$IIndexed$_nth$arity$2(null,i__27785);
var temp__5735__auto___27970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27970__$1)){
var spec_27971 = temp__5735__auto___27970__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27971)], 0));
} else {
}


var G__27978 = seq__27782;
var G__27979 = chunk__27783;
var G__27980 = count__27784;
var G__27981 = (i__27785 + (1));
seq__27782 = G__27978;
chunk__27783 = G__27979;
count__27784 = G__27980;
i__27785 = G__27981;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27782);
if(temp__5735__auto____$1){
var seq__27782__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27782__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27782__$1);
var G__27985 = cljs.core.chunk_rest(seq__27782__$1);
var G__27986 = c__4550__auto__;
var G__27987 = cljs.core.count(c__4550__auto__);
var G__27988 = (0);
seq__27782 = G__27985;
chunk__27783 = G__27986;
count__27784 = G__27987;
i__27785 = G__27988;
continue;
} else {
var role = cljs.core.first(seq__27782__$1);
var temp__5735__auto___27989__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27989__$2)){
var spec_27990 = temp__5735__auto___27989__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27990)], 0));
} else {
}


var G__27991 = cljs.core.next(seq__27782__$1);
var G__27992 = null;
var G__27993 = (0);
var G__27994 = (0);
seq__27782 = G__27991;
chunk__27783 = G__27992;
count__27784 = G__27993;
i__27785 = G__27994;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27999 = cljs.core.ex_cause(t);
via = G__27998;
t = G__27999;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27805 = datafied_throwable;
var map__27805__$1 = (((((!((map__27805 == null))))?(((((map__27805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27805):map__27805);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27805__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27806 = cljs.core.last(via);
var map__27806__$1 = (((((!((map__27806 == null))))?(((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27806):map__27806);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27807 = data;
var map__27807__$1 = (((((!((map__27807 == null))))?(((((map__27807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27807):map__27807);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27807__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27807__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27807__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27808 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27808__$1 = (((((!((map__27808 == null))))?(((((map__27808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27808):map__27808);
var top_data = map__27808__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27815 = phase;
var G__27815__$1 = (((G__27815 instanceof cljs.core.Keyword))?G__27815.fqn:null);
switch (G__27815__$1) {
case "read-source":
var map__27819 = data;
var map__27819__$1 = (((((!((map__27819 == null))))?(((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27819):map__27819);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27819__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27819__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27821 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27821__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27821,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27821);
var G__27821__$2 = (cljs.core.truth_((function (){var fexpr__27822 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27822.cljs$core$IFn$_invoke$arity$1 ? fexpr__27822.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27822.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27821__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27821__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27821__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27823 = top_data;
var G__27823__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27823,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27823);
var G__27823__$2 = (cljs.core.truth_((function (){var fexpr__27824 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27824.cljs$core$IFn$_invoke$arity$1 ? fexpr__27824.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27824.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27823__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27823__$1);
var G__27823__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27823__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27823__$2);
var G__27823__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27823__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27823__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27823__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27823__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27825 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27825,(3),null);
var G__27828 = top_data;
var G__27828__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27828,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27828);
var G__27828__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27828__$1);
var G__27828__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27828__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27828__$2);
var G__27828__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27828__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27828__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27828__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27828__$4;
}

break;
case "execution":
var vec__27829 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27829,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__27829,source__$1,method,file,line,G__27815,G__27815__$1,map__27805,map__27805__$1,via,trace,phase,map__27806,map__27806__$1,type,message,data,map__27807,map__27807__$1,problems,fn,caller,map__27808,map__27808__$1,top_data,source){
return (function (p1__27801_SHARP_){
var or__4131__auto__ = (p1__27801_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__27833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27833.cljs$core$IFn$_invoke$arity$1 ? fexpr__27833.cljs$core$IFn$_invoke$arity$1(p1__27801_SHARP_) : fexpr__27833.call(null,p1__27801_SHARP_));
}
});})(vec__27829,source__$1,method,file,line,G__27815,G__27815__$1,map__27805,map__27805__$1,via,trace,phase,map__27806,map__27806__$1,type,message,data,map__27807,map__27807__$1,problems,fn,caller,map__27808,map__27808__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27838 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27838__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27838,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27838);
var G__27838__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27838__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27838__$1);
var G__27838__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27838__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27838__$2);
var G__27838__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27838__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27838__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27838__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27838__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27815__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27843){
var map__27845 = p__27843;
var map__27845__$1 = (((((!((map__27845 == null))))?(((((map__27845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27845):map__27845);
var triage_data = map__27845__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27845__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27848 = phase;
var G__27848__$1 = (((G__27848 instanceof cljs.core.Keyword))?G__27848.fqn:null);
switch (G__27848__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27849 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27850 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27851 = loc;
var G__27852 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27853_28046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27854_28047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27855_28048 = true;
var _STAR_print_fn_STAR__temp_val__27856_28049 = ((function (_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27855_28048;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27856_28049;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,_STAR_print_fn_STAR__temp_val__27856_28049,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,_STAR_print_fn_STAR__temp_val__27856_28049,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27839_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27839_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,_STAR_print_fn_STAR__temp_val__27856_28049,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27853_28046,_STAR_print_fn_STAR__orig_val__27854_28047,_STAR_print_newline_STAR__temp_val__27855_28048,_STAR_print_fn_STAR__temp_val__27856_28049,sb__4661__auto__,G__27849,G__27850,G__27851,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27854_28047;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27853_28046;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27849,G__27850,G__27851,G__27852) : format.call(null,G__27849,G__27850,G__27851,G__27852));

break;
case "macroexpansion":
var G__27857 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27858 = cause_type;
var G__27859 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27860 = loc;
var G__27861 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27857,G__27858,G__27859,G__27860,G__27861) : format.call(null,G__27857,G__27858,G__27859,G__27860,G__27861));

break;
case "compile-syntax-check":
var G__27862 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27863 = cause_type;
var G__27864 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27865 = loc;
var G__27866 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27862,G__27863,G__27864,G__27865,G__27866) : format.call(null,G__27862,G__27863,G__27864,G__27865,G__27866));

break;
case "compilation":
var G__27867 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27868 = cause_type;
var G__27869 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27870 = loc;
var G__27871 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27867,G__27868,G__27869,G__27870,G__27871) : format.call(null,G__27867,G__27868,G__27869,G__27870,G__27871));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27872 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27873 = symbol;
var G__27874 = loc;
var G__27875 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27876_28078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27877_28079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27878_28080 = true;
var _STAR_print_fn_STAR__temp_val__27879_28081 = ((function (_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27878_28080;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27879_28081;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,_STAR_print_fn_STAR__temp_val__27879_28081,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,_STAR_print_fn_STAR__temp_val__27879_28081,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27840_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27840_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,_STAR_print_fn_STAR__temp_val__27879_28081,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27876_28078,_STAR_print_fn_STAR__orig_val__27877_28079,_STAR_print_newline_STAR__temp_val__27878_28080,_STAR_print_fn_STAR__temp_val__27879_28081,sb__4661__auto__,G__27872,G__27873,G__27874,G__27848,G__27848__$1,loc,class_name,simple_class,cause_type,format,map__27845,map__27845__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27877_28079;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27876_28078;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27872,G__27873,G__27874,G__27875) : format.call(null,G__27872,G__27873,G__27874,G__27875));
} else {
var G__27892 = "Execution error%s at %s(%s).\n%s\n";
var G__27893 = cause_type;
var G__27894 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27895 = loc;
var G__27896 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27892,G__27893,G__27894,G__27895,G__27896) : format.call(null,G__27892,G__27893,G__27894,G__27895,G__27896));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27848__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
