goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35580 = arguments.length;
var i__4731__auto___35581 = (0);
while(true){
if((i__4731__auto___35581 < len__4730__auto___35580)){
args__4736__auto__.push((arguments[i__4731__auto___35581]));

var G__35582 = (i__4731__auto___35581 + (1));
i__4731__auto___35581 = G__35582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35304){
var G__35305 = cljs.core.first(seq35304);
var seq35304__$1 = cljs.core.next(seq35304);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35305,seq35304__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35331){
var map__35332 = p__35331;
var map__35332__$1 = (((((!((map__35332 == null))))?(((((map__35332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35332):map__35332);
var src = map__35332__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35332__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35334 = cljs.core.seq(sources);
var chunk__35335 = null;
var count__35336 = (0);
var i__35337 = (0);
while(true){
if((i__35337 < count__35336)){
var map__35343 = chunk__35335.cljs$core$IIndexed$_nth$arity$2(null,i__35337);
var map__35343__$1 = (((((!((map__35343 == null))))?(((((map__35343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35343):map__35343);
var src = map__35343__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35620 = seq__35334;
var G__35621 = chunk__35335;
var G__35622 = count__35336;
var G__35623 = (i__35337 + (1));
seq__35334 = G__35620;
chunk__35335 = G__35621;
count__35336 = G__35622;
i__35337 = G__35623;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35334);
if(temp__5735__auto__){
var seq__35334__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35334__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35334__$1);
var G__35624 = cljs.core.chunk_rest(seq__35334__$1);
var G__35625 = c__4550__auto__;
var G__35626 = cljs.core.count(c__4550__auto__);
var G__35627 = (0);
seq__35334 = G__35624;
chunk__35335 = G__35625;
count__35336 = G__35626;
i__35337 = G__35627;
continue;
} else {
var map__35346 = cljs.core.first(seq__35334__$1);
var map__35346__$1 = (((((!((map__35346 == null))))?(((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35346):map__35346);
var src = map__35346__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35628 = cljs.core.next(seq__35334__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35334 = G__35628;
chunk__35335 = G__35629;
count__35336 = G__35630;
i__35337 = G__35631;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35353 = cljs.core.seq(js_requires);
var chunk__35354 = null;
var count__35355 = (0);
var i__35356 = (0);
while(true){
if((i__35356 < count__35355)){
var js_ns = chunk__35354.cljs$core$IIndexed$_nth$arity$2(null,i__35356);
var require_str_35632 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35632);


var G__35633 = seq__35353;
var G__35634 = chunk__35354;
var G__35635 = count__35355;
var G__35636 = (i__35356 + (1));
seq__35353 = G__35633;
chunk__35354 = G__35634;
count__35355 = G__35635;
i__35356 = G__35636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35353);
if(temp__5735__auto__){
var seq__35353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35353__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35353__$1);
var G__35637 = cljs.core.chunk_rest(seq__35353__$1);
var G__35638 = c__4550__auto__;
var G__35639 = cljs.core.count(c__4550__auto__);
var G__35640 = (0);
seq__35353 = G__35637;
chunk__35354 = G__35638;
count__35355 = G__35639;
i__35356 = G__35640;
continue;
} else {
var js_ns = cljs.core.first(seq__35353__$1);
var require_str_35641 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35641);


var G__35642 = cljs.core.next(seq__35353__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__35353 = G__35642;
chunk__35354 = G__35643;
count__35355 = G__35644;
i__35356 = G__35645;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35359 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35359) : callback.call(null,G__35359));
} else {
var G__35360 = shadow.cljs.devtools.client.env.files_url();
var G__35361 = ((function (G__35360){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35360))
;
var G__35362 = "POST";
var G__35363 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35364 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35360,G__35361,G__35362,G__35363,G__35364);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35366){
var map__35369 = p__35366;
var map__35369__$1 = (((((!((map__35369 == null))))?(((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35369):map__35369);
var msg = map__35369__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35371 = info;
var map__35371__$1 = (((((!((map__35371 == null))))?(((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35371):map__35371);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35373(s__35374){
return (new cljs.core.LazySeq(null,((function (map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info){
return (function (){
var s__35374__$1 = s__35374;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35374__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35379 = cljs.core.first(xs__6292__auto__);
var map__35379__$1 = (((((!((map__35379 == null))))?(((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35379):map__35379);
var src = map__35379__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35374__$1,map__35379,map__35379__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35373_$_iter__35375(s__35376){
return (new cljs.core.LazySeq(null,((function (s__35374__$1,map__35379,map__35379__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info){
return (function (){
var s__35376__$1 = s__35376;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35376__$1);
if(temp__5735__auto____$1){
var s__35376__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35376__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35376__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35378 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35377 = (0);
while(true){
if((i__35377 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35377);
cljs.core.chunk_append(b__35378,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35654 = (i__35377 + (1));
i__35377 = G__35654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35378),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35373_$_iter__35375(cljs.core.chunk_rest(s__35376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35378),null);
}
} else {
var warning = cljs.core.first(s__35376__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35373_$_iter__35375(cljs.core.rest(s__35376__$2)));
}
} else {
return null;
}
break;
}
});})(s__35374__$1,map__35379,map__35379__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info))
,null,null));
});})(s__35374__$1,map__35379,map__35379__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35373(cljs.core.rest(s__35374__$1)));
} else {
var G__35657 = cljs.core.rest(s__35374__$1);
s__35374__$1 = G__35657;
continue;
}
} else {
var G__35658 = cljs.core.rest(s__35374__$1);
s__35374__$1 = G__35658;
continue;
}
} else {
return null;
}
break;
}
});})(map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info))
,null,null));
});})(map__35371,map__35371__$1,sources,compiled,map__35369,map__35369__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35388_35659 = cljs.core.seq(warnings);
var chunk__35389_35660 = null;
var count__35390_35661 = (0);
var i__35391_35662 = (0);
while(true){
if((i__35391_35662 < count__35390_35661)){
var map__35396_35664 = chunk__35389_35660.cljs$core$IIndexed$_nth$arity$2(null,i__35391_35662);
var map__35396_35665__$1 = (((((!((map__35396_35664 == null))))?(((((map__35396_35664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35396_35664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35396_35664):map__35396_35664);
var w_35666 = map__35396_35665__$1;
var msg_35667__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35665__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35665__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35665__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396_35665__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35670)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35668),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35669),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35667__$1)].join(''));


var G__35673 = seq__35388_35659;
var G__35674 = chunk__35389_35660;
var G__35675 = count__35390_35661;
var G__35676 = (i__35391_35662 + (1));
seq__35388_35659 = G__35673;
chunk__35389_35660 = G__35674;
count__35390_35661 = G__35675;
i__35391_35662 = G__35676;
continue;
} else {
var temp__5735__auto___35679 = cljs.core.seq(seq__35388_35659);
if(temp__5735__auto___35679){
var seq__35388_35680__$1 = temp__5735__auto___35679;
if(cljs.core.chunked_seq_QMARK_(seq__35388_35680__$1)){
var c__4550__auto___35681 = cljs.core.chunk_first(seq__35388_35680__$1);
var G__35682 = cljs.core.chunk_rest(seq__35388_35680__$1);
var G__35683 = c__4550__auto___35681;
var G__35684 = cljs.core.count(c__4550__auto___35681);
var G__35685 = (0);
seq__35388_35659 = G__35682;
chunk__35389_35660 = G__35683;
count__35390_35661 = G__35684;
i__35391_35662 = G__35685;
continue;
} else {
var map__35398_35686 = cljs.core.first(seq__35388_35680__$1);
var map__35398_35687__$1 = (((((!((map__35398_35686 == null))))?(((((map__35398_35686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35398_35686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35398_35686):map__35398_35686);
var w_35688 = map__35398_35687__$1;
var msg_35689__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35687__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35687__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35687__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398_35687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35692)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35690),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35691),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35689__$1)].join(''));


var G__35693 = cljs.core.next(seq__35388_35680__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35388_35659 = G__35693;
chunk__35389_35660 = G__35694;
count__35390_35661 = G__35695;
i__35391_35662 = G__35696;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info){
return (function (p__35400){
var map__35401 = p__35400;
var map__35401__$1 = (((((!((map__35401 == null))))?(((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35401):map__35401);
var src = map__35401__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35401__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info){
return (function (p__35404){
var map__35405 = p__35404;
var map__35405__$1 = (((((!((map__35405 == null))))?(((((map__35405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35405):map__35405);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35405__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info){
return (function (p__35407){
var map__35408 = p__35407;
var map__35408__$1 = (((((!((map__35408 == null))))?(((((map__35408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35408):map__35408);
var rc = map__35408__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35408__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info){
return (function (p1__35365_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35365_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35371,map__35371__$1,sources,compiled,warnings,map__35369,map__35369__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35412){
var map__35413 = p__35412;
var map__35413__$1 = (((((!((map__35413 == null))))?(((((map__35413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35413):map__35413);
var msg = map__35413__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35413__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35415 = cljs.core.seq(updates);
var chunk__35417 = null;
var count__35418 = (0);
var i__35419 = (0);
while(true){
if((i__35419 < count__35418)){
var path = chunk__35417.cljs$core$IIndexed$_nth$arity$2(null,i__35419);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35455_35709 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35458_35710 = null;
var count__35459_35711 = (0);
var i__35460_35712 = (0);
while(true){
if((i__35460_35712 < count__35459_35711)){
var node_35713 = chunk__35458_35710.cljs$core$IIndexed$_nth$arity$2(null,i__35460_35712);
var path_match_35714 = shadow.cljs.devtools.client.browser.match_paths(node_35713.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35714)){
var new_link_35715 = (function (){var G__35465 = node_35713.cloneNode(true);
G__35465.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35714),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35465;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35714], 0));

goog.dom.insertSiblingAfter(new_link_35715,node_35713);

goog.dom.removeNode(node_35713);


var G__35716 = seq__35455_35709;
var G__35717 = chunk__35458_35710;
var G__35718 = count__35459_35711;
var G__35719 = (i__35460_35712 + (1));
seq__35455_35709 = G__35716;
chunk__35458_35710 = G__35717;
count__35459_35711 = G__35718;
i__35460_35712 = G__35719;
continue;
} else {
var G__35720 = seq__35455_35709;
var G__35721 = chunk__35458_35710;
var G__35722 = count__35459_35711;
var G__35723 = (i__35460_35712 + (1));
seq__35455_35709 = G__35720;
chunk__35458_35710 = G__35721;
count__35459_35711 = G__35722;
i__35460_35712 = G__35723;
continue;
}
} else {
var temp__5735__auto___35724 = cljs.core.seq(seq__35455_35709);
if(temp__5735__auto___35724){
var seq__35455_35725__$1 = temp__5735__auto___35724;
if(cljs.core.chunked_seq_QMARK_(seq__35455_35725__$1)){
var c__4550__auto___35726 = cljs.core.chunk_first(seq__35455_35725__$1);
var G__35727 = cljs.core.chunk_rest(seq__35455_35725__$1);
var G__35728 = c__4550__auto___35726;
var G__35729 = cljs.core.count(c__4550__auto___35726);
var G__35730 = (0);
seq__35455_35709 = G__35727;
chunk__35458_35710 = G__35728;
count__35459_35711 = G__35729;
i__35460_35712 = G__35730;
continue;
} else {
var node_35732 = cljs.core.first(seq__35455_35725__$1);
var path_match_35733 = shadow.cljs.devtools.client.browser.match_paths(node_35732.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35733)){
var new_link_35734 = (function (){var G__35466 = node_35732.cloneNode(true);
G__35466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35733),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35466;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35733], 0));

goog.dom.insertSiblingAfter(new_link_35734,node_35732);

goog.dom.removeNode(node_35732);


var G__35735 = cljs.core.next(seq__35455_35725__$1);
var G__35736 = null;
var G__35737 = (0);
var G__35738 = (0);
seq__35455_35709 = G__35735;
chunk__35458_35710 = G__35736;
count__35459_35711 = G__35737;
i__35460_35712 = G__35738;
continue;
} else {
var G__35739 = cljs.core.next(seq__35455_35725__$1);
var G__35740 = null;
var G__35741 = (0);
var G__35742 = (0);
seq__35455_35709 = G__35739;
chunk__35458_35710 = G__35740;
count__35459_35711 = G__35741;
i__35460_35712 = G__35742;
continue;
}
}
} else {
}
}
break;
}


var G__35743 = seq__35415;
var G__35744 = chunk__35417;
var G__35745 = count__35418;
var G__35746 = (i__35419 + (1));
seq__35415 = G__35743;
chunk__35417 = G__35744;
count__35418 = G__35745;
i__35419 = G__35746;
continue;
} else {
var G__35747 = seq__35415;
var G__35748 = chunk__35417;
var G__35749 = count__35418;
var G__35750 = (i__35419 + (1));
seq__35415 = G__35747;
chunk__35417 = G__35748;
count__35418 = G__35749;
i__35419 = G__35750;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35415);
if(temp__5735__auto__){
var seq__35415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35415__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35415__$1);
var G__35751 = cljs.core.chunk_rest(seq__35415__$1);
var G__35752 = c__4550__auto__;
var G__35753 = cljs.core.count(c__4550__auto__);
var G__35754 = (0);
seq__35415 = G__35751;
chunk__35417 = G__35752;
count__35418 = G__35753;
i__35419 = G__35754;
continue;
} else {
var path = cljs.core.first(seq__35415__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35467_35756 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35470_35757 = null;
var count__35471_35758 = (0);
var i__35472_35759 = (0);
while(true){
if((i__35472_35759 < count__35471_35758)){
var node_35761 = chunk__35470_35757.cljs$core$IIndexed$_nth$arity$2(null,i__35472_35759);
var path_match_35762 = shadow.cljs.devtools.client.browser.match_paths(node_35761.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35762)){
var new_link_35763 = (function (){var G__35478 = node_35761.cloneNode(true);
G__35478.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35762),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35478;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35762], 0));

goog.dom.insertSiblingAfter(new_link_35763,node_35761);

goog.dom.removeNode(node_35761);


var G__35765 = seq__35467_35756;
var G__35766 = chunk__35470_35757;
var G__35767 = count__35471_35758;
var G__35768 = (i__35472_35759 + (1));
seq__35467_35756 = G__35765;
chunk__35470_35757 = G__35766;
count__35471_35758 = G__35767;
i__35472_35759 = G__35768;
continue;
} else {
var G__35769 = seq__35467_35756;
var G__35770 = chunk__35470_35757;
var G__35771 = count__35471_35758;
var G__35772 = (i__35472_35759 + (1));
seq__35467_35756 = G__35769;
chunk__35470_35757 = G__35770;
count__35471_35758 = G__35771;
i__35472_35759 = G__35772;
continue;
}
} else {
var temp__5735__auto___35773__$1 = cljs.core.seq(seq__35467_35756);
if(temp__5735__auto___35773__$1){
var seq__35467_35774__$1 = temp__5735__auto___35773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35467_35774__$1)){
var c__4550__auto___35775 = cljs.core.chunk_first(seq__35467_35774__$1);
var G__35777 = cljs.core.chunk_rest(seq__35467_35774__$1);
var G__35778 = c__4550__auto___35775;
var G__35779 = cljs.core.count(c__4550__auto___35775);
var G__35780 = (0);
seq__35467_35756 = G__35777;
chunk__35470_35757 = G__35778;
count__35471_35758 = G__35779;
i__35472_35759 = G__35780;
continue;
} else {
var node_35781 = cljs.core.first(seq__35467_35774__$1);
var path_match_35782 = shadow.cljs.devtools.client.browser.match_paths(node_35781.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35782)){
var new_link_35783 = (function (){var G__35479 = node_35781.cloneNode(true);
G__35479.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35782),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35479;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35782], 0));

goog.dom.insertSiblingAfter(new_link_35783,node_35781);

goog.dom.removeNode(node_35781);


var G__35784 = cljs.core.next(seq__35467_35774__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35467_35756 = G__35784;
chunk__35470_35757 = G__35785;
count__35471_35758 = G__35786;
i__35472_35759 = G__35787;
continue;
} else {
var G__35788 = cljs.core.next(seq__35467_35774__$1);
var G__35789 = null;
var G__35790 = (0);
var G__35791 = (0);
seq__35467_35756 = G__35788;
chunk__35470_35757 = G__35789;
count__35471_35758 = G__35790;
i__35472_35759 = G__35791;
continue;
}
}
} else {
}
}
break;
}


var G__35792 = cljs.core.next(seq__35415__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__35415 = G__35792;
chunk__35417 = G__35793;
count__35418 = G__35794;
i__35419 = G__35795;
continue;
} else {
var G__35796 = cljs.core.next(seq__35415__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35415 = G__35796;
chunk__35417 = G__35797;
count__35418 = G__35798;
i__35419 = G__35799;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35489){
var map__35490 = p__35489;
var map__35490__$1 = (((((!((map__35490 == null))))?(((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35490):map__35490);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35490__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35490__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35490,map__35490__$1,id,js){
return (function (){
return eval(js);
});})(map__35490,map__35490__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35492){
var map__35494 = p__35492;
var map__35494__$1 = (((((!((map__35494 == null))))?(((((map__35494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35494):map__35494);
var msg = map__35494__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35494__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35494,map__35494__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35501){
var map__35502 = p__35501;
var map__35502__$1 = (((((!((map__35502 == null))))?(((((map__35502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35502):map__35502);
var src = map__35502__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35502__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35494,map__35494__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35494,map__35494__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35494,map__35494__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35504){
var map__35505 = p__35504;
var map__35505__$1 = (((((!((map__35505 == null))))?(((((map__35505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35505):map__35505);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35505__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35505,map__35505__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35505,map__35505__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35507){
var map__35508 = p__35507;
var map__35508__$1 = (((((!((map__35508 == null))))?(((((map__35508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35508):map__35508);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35508__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35510){
var map__35511 = p__35510;
var map__35511__$1 = (((((!((map__35511 == null))))?(((((map__35511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35511):map__35511);
var msg = map__35511__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35513 = type;
var G__35513__$1 = (((G__35513 instanceof cljs.core.Keyword))?G__35513.fqn:null);
switch (G__35513__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35516 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35517 = ((function (G__35516){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35516))
;
var G__35518 = "POST";
var G__35519 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35520 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35516,G__35517,G__35518,G__35519,G__35520);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35524){var e = e35524;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35808 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35808)){
var s_35809 = temp__5735__auto___35808;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35809.onclose = ((function (s_35809,temp__5735__auto___35808){
return (function (e){
return null;
});})(s_35809,temp__5735__auto___35808))
;

s_35809.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
