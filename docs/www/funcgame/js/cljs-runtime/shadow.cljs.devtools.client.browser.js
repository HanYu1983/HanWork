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
var len__4730__auto___35411 = arguments.length;
var i__4731__auto___35412 = (0);
while(true){
if((i__4731__auto___35412 < len__4730__auto___35411)){
args__4736__auto__.push((arguments[i__4731__auto___35412]));

var G__35413 = (i__4731__auto___35412 + (1));
i__4731__auto___35412 = G__35413;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35218){
var G__35219 = cljs.core.first(seq35218);
var seq35218__$1 = cljs.core.next(seq35218);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35219,seq35218__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35226){
var map__35227 = p__35226;
var map__35227__$1 = (((((!((map__35227 == null))))?(((((map__35227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35227):map__35227);
var src = map__35227__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__35229 = cljs.core.seq(sources);
var chunk__35230 = null;
var count__35231 = (0);
var i__35232 = (0);
while(true){
if((i__35232 < count__35231)){
var map__35238 = chunk__35230.cljs$core$IIndexed$_nth$arity$2(null,i__35232);
var map__35238__$1 = (((((!((map__35238 == null))))?(((((map__35238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35238):map__35238);
var src = map__35238__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35238__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35238__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35238__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35414 = seq__35229;
var G__35415 = chunk__35230;
var G__35416 = count__35231;
var G__35417 = (i__35232 + (1));
seq__35229 = G__35414;
chunk__35230 = G__35415;
count__35231 = G__35416;
i__35232 = G__35417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35229);
if(temp__5735__auto__){
var seq__35229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35229__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35229__$1);
var G__35418 = cljs.core.chunk_rest(seq__35229__$1);
var G__35419 = c__4550__auto__;
var G__35420 = cljs.core.count(c__4550__auto__);
var G__35421 = (0);
seq__35229 = G__35418;
chunk__35230 = G__35419;
count__35231 = G__35420;
i__35232 = G__35421;
continue;
} else {
var map__35241 = cljs.core.first(seq__35229__$1);
var map__35241__$1 = (((((!((map__35241 == null))))?(((((map__35241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35241):map__35241);
var src = map__35241__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35422 = cljs.core.next(seq__35229__$1);
var G__35423 = null;
var G__35424 = (0);
var G__35425 = (0);
seq__35229 = G__35422;
chunk__35230 = G__35423;
count__35231 = G__35424;
i__35232 = G__35425;
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
var seq__35243 = cljs.core.seq(js_requires);
var chunk__35244 = null;
var count__35245 = (0);
var i__35246 = (0);
while(true){
if((i__35246 < count__35245)){
var js_ns = chunk__35244.cljs$core$IIndexed$_nth$arity$2(null,i__35246);
var require_str_35426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35426);


var G__35427 = seq__35243;
var G__35428 = chunk__35244;
var G__35429 = count__35245;
var G__35430 = (i__35246 + (1));
seq__35243 = G__35427;
chunk__35244 = G__35428;
count__35245 = G__35429;
i__35246 = G__35430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35243);
if(temp__5735__auto__){
var seq__35243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35243__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35243__$1);
var G__35431 = cljs.core.chunk_rest(seq__35243__$1);
var G__35432 = c__4550__auto__;
var G__35433 = cljs.core.count(c__4550__auto__);
var G__35434 = (0);
seq__35243 = G__35431;
chunk__35244 = G__35432;
count__35245 = G__35433;
i__35246 = G__35434;
continue;
} else {
var js_ns = cljs.core.first(seq__35243__$1);
var require_str_35435 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35435);


var G__35436 = cljs.core.next(seq__35243__$1);
var G__35437 = null;
var G__35438 = (0);
var G__35439 = (0);
seq__35243 = G__35436;
chunk__35244 = G__35437;
count__35245 = G__35438;
i__35246 = G__35439;
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
var G__35247 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35247) : callback.call(null,G__35247));
} else {
var G__35248 = shadow.cljs.devtools.client.env.files_url();
var G__35249 = ((function (G__35248){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35248))
;
var G__35250 = "POST";
var G__35251 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35252 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35248,G__35249,G__35250,G__35251,G__35252);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35254){
var map__35255 = p__35254;
var map__35255__$1 = (((((!((map__35255 == null))))?(((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);
var msg = map__35255__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35257 = info;
var map__35257__$1 = (((((!((map__35257 == null))))?(((((map__35257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35257):map__35257);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35259(s__35260){
return (new cljs.core.LazySeq(null,((function (map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info){
return (function (){
var s__35260__$1 = s__35260;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35260__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35265 = cljs.core.first(xs__6292__auto__);
var map__35265__$1 = (((((!((map__35265 == null))))?(((((map__35265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35265):map__35265);
var src = map__35265__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35265__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35260__$1,map__35265,map__35265__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35259_$_iter__35261(s__35262){
return (new cljs.core.LazySeq(null,((function (s__35260__$1,map__35265,map__35265__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info){
return (function (){
var s__35262__$1 = s__35262;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35262__$1);
if(temp__5735__auto____$1){
var s__35262__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35262__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35262__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35264 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35263 = (0);
while(true){
if((i__35263 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35263);
cljs.core.chunk_append(b__35264,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35440 = (i__35263 + (1));
i__35263 = G__35440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35264),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35259_$_iter__35261(cljs.core.chunk_rest(s__35262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35264),null);
}
} else {
var warning = cljs.core.first(s__35262__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35259_$_iter__35261(cljs.core.rest(s__35262__$2)));
}
} else {
return null;
}
break;
}
});})(s__35260__$1,map__35265,map__35265__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info))
,null,null));
});})(s__35260__$1,map__35265,map__35265__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35259(cljs.core.rest(s__35260__$1)));
} else {
var G__35441 = cljs.core.rest(s__35260__$1);
s__35260__$1 = G__35441;
continue;
}
} else {
var G__35442 = cljs.core.rest(s__35260__$1);
s__35260__$1 = G__35442;
continue;
}
} else {
return null;
}
break;
}
});})(map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info))
,null,null));
});})(map__35257,map__35257__$1,sources,compiled,map__35255,map__35255__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35267_35443 = cljs.core.seq(warnings);
var chunk__35268_35444 = null;
var count__35269_35445 = (0);
var i__35270_35446 = (0);
while(true){
if((i__35270_35446 < count__35269_35445)){
var map__35275_35447 = chunk__35268_35444.cljs$core$IIndexed$_nth$arity$2(null,i__35270_35446);
var map__35275_35448__$1 = (((((!((map__35275_35447 == null))))?(((((map__35275_35447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35275_35447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35275_35447):map__35275_35447);
var w_35449 = map__35275_35448__$1;
var msg_35450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275_35448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275_35448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275_35448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275_35448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35450__$1)].join(''));


var G__35454 = seq__35267_35443;
var G__35455 = chunk__35268_35444;
var G__35456 = count__35269_35445;
var G__35457 = (i__35270_35446 + (1));
seq__35267_35443 = G__35454;
chunk__35268_35444 = G__35455;
count__35269_35445 = G__35456;
i__35270_35446 = G__35457;
continue;
} else {
var temp__5735__auto___35458 = cljs.core.seq(seq__35267_35443);
if(temp__5735__auto___35458){
var seq__35267_35459__$1 = temp__5735__auto___35458;
if(cljs.core.chunked_seq_QMARK_(seq__35267_35459__$1)){
var c__4550__auto___35460 = cljs.core.chunk_first(seq__35267_35459__$1);
var G__35461 = cljs.core.chunk_rest(seq__35267_35459__$1);
var G__35462 = c__4550__auto___35460;
var G__35463 = cljs.core.count(c__4550__auto___35460);
var G__35464 = (0);
seq__35267_35443 = G__35461;
chunk__35268_35444 = G__35462;
count__35269_35445 = G__35463;
i__35270_35446 = G__35464;
continue;
} else {
var map__35279_35465 = cljs.core.first(seq__35267_35459__$1);
var map__35279_35466__$1 = (((((!((map__35279_35465 == null))))?(((((map__35279_35465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279_35465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35279_35465):map__35279_35465);
var w_35467 = map__35279_35466__$1;
var msg_35468__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279_35466__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279_35466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279_35466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279_35466__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35471)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35469),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35470),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35468__$1)].join(''));


var G__35472 = cljs.core.next(seq__35267_35459__$1);
var G__35473 = null;
var G__35474 = (0);
var G__35475 = (0);
seq__35267_35443 = G__35472;
chunk__35268_35444 = G__35473;
count__35269_35445 = G__35474;
i__35270_35446 = G__35475;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info){
return (function (p__35281){
var map__35282 = p__35281;
var map__35282__$1 = (((((!((map__35282 == null))))?(((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35282):map__35282);
var src = map__35282__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info){
return (function (p__35284){
var map__35285 = p__35284;
var map__35285__$1 = (((((!((map__35285 == null))))?(((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35285):map__35285);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info){
return (function (p__35287){
var map__35288 = p__35287;
var map__35288__$1 = (((((!((map__35288 == null))))?(((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35288):map__35288);
var rc = map__35288__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35288__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info){
return (function (p1__35253_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35253_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35257,map__35257__$1,sources,compiled,warnings,map__35255,map__35255__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35290){
var map__35291 = p__35290;
var map__35291__$1 = (((((!((map__35291 == null))))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35291):map__35291);
var msg = map__35291__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35293 = cljs.core.seq(updates);
var chunk__35295 = null;
var count__35296 = (0);
var i__35297 = (0);
while(true){
if((i__35297 < count__35296)){
var path = chunk__35295.cljs$core$IIndexed$_nth$arity$2(null,i__35297);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35323_35479 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35326_35480 = null;
var count__35327_35481 = (0);
var i__35328_35482 = (0);
while(true){
if((i__35328_35482 < count__35327_35481)){
var node_35483 = chunk__35326_35480.cljs$core$IIndexed$_nth$arity$2(null,i__35328_35482);
var path_match_35484 = shadow.cljs.devtools.client.browser.match_paths(node_35483.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35484)){
var new_link_35485 = (function (){var G__35338 = node_35483.cloneNode(true);
G__35338.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35484),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35338;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35484], 0));

goog.dom.insertSiblingAfter(new_link_35485,node_35483);

goog.dom.removeNode(node_35483);


var G__35486 = seq__35323_35479;
var G__35487 = chunk__35326_35480;
var G__35488 = count__35327_35481;
var G__35489 = (i__35328_35482 + (1));
seq__35323_35479 = G__35486;
chunk__35326_35480 = G__35487;
count__35327_35481 = G__35488;
i__35328_35482 = G__35489;
continue;
} else {
var G__35490 = seq__35323_35479;
var G__35491 = chunk__35326_35480;
var G__35492 = count__35327_35481;
var G__35493 = (i__35328_35482 + (1));
seq__35323_35479 = G__35490;
chunk__35326_35480 = G__35491;
count__35327_35481 = G__35492;
i__35328_35482 = G__35493;
continue;
}
} else {
var temp__5735__auto___35494 = cljs.core.seq(seq__35323_35479);
if(temp__5735__auto___35494){
var seq__35323_35495__$1 = temp__5735__auto___35494;
if(cljs.core.chunked_seq_QMARK_(seq__35323_35495__$1)){
var c__4550__auto___35496 = cljs.core.chunk_first(seq__35323_35495__$1);
var G__35497 = cljs.core.chunk_rest(seq__35323_35495__$1);
var G__35498 = c__4550__auto___35496;
var G__35499 = cljs.core.count(c__4550__auto___35496);
var G__35500 = (0);
seq__35323_35479 = G__35497;
chunk__35326_35480 = G__35498;
count__35327_35481 = G__35499;
i__35328_35482 = G__35500;
continue;
} else {
var node_35501 = cljs.core.first(seq__35323_35495__$1);
var path_match_35502 = shadow.cljs.devtools.client.browser.match_paths(node_35501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35502)){
var new_link_35503 = (function (){var G__35339 = node_35501.cloneNode(true);
G__35339.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35502),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35339;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35502], 0));

goog.dom.insertSiblingAfter(new_link_35503,node_35501);

goog.dom.removeNode(node_35501);


var G__35504 = cljs.core.next(seq__35323_35495__$1);
var G__35505 = null;
var G__35506 = (0);
var G__35507 = (0);
seq__35323_35479 = G__35504;
chunk__35326_35480 = G__35505;
count__35327_35481 = G__35506;
i__35328_35482 = G__35507;
continue;
} else {
var G__35508 = cljs.core.next(seq__35323_35495__$1);
var G__35509 = null;
var G__35510 = (0);
var G__35511 = (0);
seq__35323_35479 = G__35508;
chunk__35326_35480 = G__35509;
count__35327_35481 = G__35510;
i__35328_35482 = G__35511;
continue;
}
}
} else {
}
}
break;
}


var G__35512 = seq__35293;
var G__35513 = chunk__35295;
var G__35514 = count__35296;
var G__35515 = (i__35297 + (1));
seq__35293 = G__35512;
chunk__35295 = G__35513;
count__35296 = G__35514;
i__35297 = G__35515;
continue;
} else {
var G__35516 = seq__35293;
var G__35517 = chunk__35295;
var G__35518 = count__35296;
var G__35519 = (i__35297 + (1));
seq__35293 = G__35516;
chunk__35295 = G__35517;
count__35296 = G__35518;
i__35297 = G__35519;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35293);
if(temp__5735__auto__){
var seq__35293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35293__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35293__$1);
var G__35520 = cljs.core.chunk_rest(seq__35293__$1);
var G__35521 = c__4550__auto__;
var G__35522 = cljs.core.count(c__4550__auto__);
var G__35523 = (0);
seq__35293 = G__35520;
chunk__35295 = G__35521;
count__35296 = G__35522;
i__35297 = G__35523;
continue;
} else {
var path = cljs.core.first(seq__35293__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35340_35524 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35343_35525 = null;
var count__35344_35526 = (0);
var i__35345_35527 = (0);
while(true){
if((i__35345_35527 < count__35344_35526)){
var node_35528 = chunk__35343_35525.cljs$core$IIndexed$_nth$arity$2(null,i__35345_35527);
var path_match_35529 = shadow.cljs.devtools.client.browser.match_paths(node_35528.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35529)){
var new_link_35530 = (function (){var G__35356 = node_35528.cloneNode(true);
G__35356.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35529),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35356;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35529], 0));

goog.dom.insertSiblingAfter(new_link_35530,node_35528);

goog.dom.removeNode(node_35528);


var G__35531 = seq__35340_35524;
var G__35532 = chunk__35343_35525;
var G__35533 = count__35344_35526;
var G__35534 = (i__35345_35527 + (1));
seq__35340_35524 = G__35531;
chunk__35343_35525 = G__35532;
count__35344_35526 = G__35533;
i__35345_35527 = G__35534;
continue;
} else {
var G__35535 = seq__35340_35524;
var G__35536 = chunk__35343_35525;
var G__35537 = count__35344_35526;
var G__35538 = (i__35345_35527 + (1));
seq__35340_35524 = G__35535;
chunk__35343_35525 = G__35536;
count__35344_35526 = G__35537;
i__35345_35527 = G__35538;
continue;
}
} else {
var temp__5735__auto___35539__$1 = cljs.core.seq(seq__35340_35524);
if(temp__5735__auto___35539__$1){
var seq__35340_35540__$1 = temp__5735__auto___35539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35340_35540__$1)){
var c__4550__auto___35541 = cljs.core.chunk_first(seq__35340_35540__$1);
var G__35542 = cljs.core.chunk_rest(seq__35340_35540__$1);
var G__35543 = c__4550__auto___35541;
var G__35544 = cljs.core.count(c__4550__auto___35541);
var G__35545 = (0);
seq__35340_35524 = G__35542;
chunk__35343_35525 = G__35543;
count__35344_35526 = G__35544;
i__35345_35527 = G__35545;
continue;
} else {
var node_35546 = cljs.core.first(seq__35340_35540__$1);
var path_match_35547 = shadow.cljs.devtools.client.browser.match_paths(node_35546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35547)){
var new_link_35548 = (function (){var G__35361 = node_35546.cloneNode(true);
G__35361.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35547),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35361;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35547], 0));

goog.dom.insertSiblingAfter(new_link_35548,node_35546);

goog.dom.removeNode(node_35546);


var G__35549 = cljs.core.next(seq__35340_35540__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__35340_35524 = G__35549;
chunk__35343_35525 = G__35550;
count__35344_35526 = G__35551;
i__35345_35527 = G__35552;
continue;
} else {
var G__35553 = cljs.core.next(seq__35340_35540__$1);
var G__35554 = null;
var G__35555 = (0);
var G__35556 = (0);
seq__35340_35524 = G__35553;
chunk__35343_35525 = G__35554;
count__35344_35526 = G__35555;
i__35345_35527 = G__35556;
continue;
}
}
} else {
}
}
break;
}


var G__35557 = cljs.core.next(seq__35293__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35293 = G__35557;
chunk__35295 = G__35558;
count__35296 = G__35559;
i__35297 = G__35560;
continue;
} else {
var G__35561 = cljs.core.next(seq__35293__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35293 = G__35561;
chunk__35295 = G__35562;
count__35296 = G__35563;
i__35297 = G__35564;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35370){
var map__35371 = p__35370;
var map__35371__$1 = (((((!((map__35371 == null))))?(((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35371):map__35371);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35371,map__35371__$1,id,js){
return (function (){
return eval(js);
});})(map__35371,map__35371__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35381){
var map__35382 = p__35381;
var map__35382__$1 = (((((!((map__35382 == null))))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35382):map__35382);
var msg = map__35382__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35382,map__35382__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35384){
var map__35385 = p__35384;
var map__35385__$1 = (((((!((map__35385 == null))))?(((((map__35385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35385):map__35385);
var src = map__35385__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35385__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35382,map__35382__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35382,map__35382__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35382,map__35382__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35387){
var map__35388 = p__35387;
var map__35388__$1 = (((((!((map__35388 == null))))?(((((map__35388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35388):map__35388);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35388__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35388__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35388,map__35388__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35388,map__35388__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35390){
var map__35391 = p__35390;
var map__35391__$1 = (((((!((map__35391 == null))))?(((((map__35391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35391):map__35391);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35391__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35400){
var map__35401 = p__35400;
var map__35401__$1 = (((((!((map__35401 == null))))?(((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35401):map__35401);
var msg = map__35401__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35401__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35403 = type;
var G__35403__$1 = (((G__35403 instanceof cljs.core.Keyword))?G__35403.fqn:null);
switch (G__35403__$1) {
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
var G__35405 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35406 = ((function (G__35405){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35405))
;
var G__35407 = "POST";
var G__35408 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35409 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35405,G__35406,G__35407,G__35408,G__35409);
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
}catch (e35410){var e = e35410;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35570 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35570)){
var s_35571 = temp__5735__auto___35570;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35571.onclose = ((function (s_35571,temp__5735__auto___35570){
return (function (e){
return null;
});})(s_35571,temp__5735__auto___35570))
;

s_35571.close();

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
