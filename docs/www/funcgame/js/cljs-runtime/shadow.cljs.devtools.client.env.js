goog.provide('shadow.cljs.devtools.client.env');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.runtime_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.runtime_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.enabled",false);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.autoload",true);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.module_format","goog");

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.build_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.proc_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.server_host","");

/** @define {number} */
goog.define("shadow.cljs.devtools.client.env.server_port",(8200));

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.repl_pprint",false);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.use_document_host",true);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.devtools_url","");

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.ssl",false);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.ignore_warnings",false);
shadow.cljs.devtools.client.env.devtools_info = (function shadow$cljs$devtools$client$env$devtools_info(){
return ({"server-port": shadow.cljs.devtools.client.env.server_port, "server-host": shadow.cljs.devtools.client.env.server_host, "build-id": shadow.cljs.devtools.client.env.build_id, "proc-id": shadow.cljs.devtools.client.env.proc_id, "runtime-id": shadow.cljs.devtools.client.env.runtime_id});
});
shadow.cljs.devtools.client.env.get_server_host = (function shadow$cljs$devtools$client$env$get_server_host(){
if(cljs.core.truth_((function (){var and__4120__auto__ = shadow.cljs.devtools.client.env.use_document_host;
if(and__4120__auto__){
var and__4120__auto____$1 = goog.global.document;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = goog.global.document.location;
if(cljs.core.truth_(and__4120__auto____$2)){
return cljs.core.seq(goog.global.document.location.hostname);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return document.location.hostname;
} else {
if(cljs.core.seq(shadow.cljs.devtools.client.env.server_host)){
return shadow.cljs.devtools.client.env.server_host;
} else {
return "localhost";

}
}
});
shadow.cljs.devtools.client.env.get_url_base = (function shadow$cljs$devtools$client$env$get_url_base(){
if(cljs.core.seq(shadow.cljs.devtools.client.env.devtools_url)){
return shadow.cljs.devtools.client.env.devtools_url;
} else {
return ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_server_host()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port)].join('');
}
});
shadow.cljs.devtools.client.env.get_ws_url_base = (function shadow$cljs$devtools$client$env$get_ws_url_base(){
return clojure.string.replace(shadow.cljs.devtools.client.env.get_url_base(),/^http/,"ws");
});
shadow.cljs.devtools.client.env.ws_url = (function shadow$cljs$devtools$client$env$ws_url(runtime_type){
if((runtime_type instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? runtime-type)"));
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_ws_url_base()),"/ws/worker/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id,"/",cljs.core.name(runtime_type)].join('');
});
shadow.cljs.devtools.client.env.ws_listener_url = (function shadow$cljs$devtools$client$env$ws_listener_url(client_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_ws_url_base()),"/ws/listener/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.files_url = (function shadow$cljs$devtools$client$env$files_url(){
return [shadow.cljs.devtools.client.env.get_url_base(),"/worker/files/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.repl_print_fn = (((!(shadow.cljs.devtools.client.env.repl_pprint)))?cljs.core.pr_str:(function shadow$cljs$devtools$client$env$repl_pprint(obj){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30947_31128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30948_31129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30949_31130 = true;
var _STAR_print_fn_STAR__temp_val__30950_31131 = ((function (_STAR_print_newline_STAR__orig_val__30947_31128,_STAR_print_fn_STAR__orig_val__30948_31129,_STAR_print_newline_STAR__temp_val__30949_31130,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30947_31128,_STAR_print_fn_STAR__orig_val__30948_31129,_STAR_print_newline_STAR__temp_val__30949_31130,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30949_31130;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30950_31131;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30948_31129;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30947_31128;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
}));
shadow.cljs.devtools.client.env.repl_error = (function shadow$cljs$devtools$client$env$repl_error(e){
var G__30953 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","invoke-error","repl/invoke-error",839951858),new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
if(cljs.core.truth_(e.hasOwnProperty("stack"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30953,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack);
} else {
return G__30953;
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.repl_results_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.repl_results_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.repl_call = (function shadow$cljs$devtools$client$env$repl_call(repl_expr,repl_error){
try{var result_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.Keyword(null,"result-id","result-id",-2004530966),result_id], null);
var ret = (repl_expr.cljs$core$IFn$_invoke$arity$0 ? repl_expr.cljs$core$IFn$_invoke$arity$0() : repl_expr.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc,result_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now(),new cljs.core.Keyword(null,"result","result",1415092211),ret], null));

cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;

try{var printed = (shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1(ret) : shadow.cljs.devtools.client.env.repl_print_fn.call(null,ret));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_id,new cljs.core.Keyword(null,"printed","printed",1871492381)], null),printed);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"value","value",305978217),printed);
}catch (e30961){var e = e30961;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e30958){var e = e30958;
cljs.core._STAR_e = e;

return (repl_error.cljs$core$IFn$_invoke$arity$1 ? repl_error.cljs$core$IFn$_invoke$arity$1(e) : repl_error.call(null,e));
}});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.reset_print_fn_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.reset_print_fn_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.env.set_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$set_print_fns_BANG_(msg_fn){
var original_print_fn = cljs.core._STAR_print_fn_STAR_;
var original_print_err_fn = cljs.core._STAR_print_err_fn_STAR_;
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,((function (original_print_fn,original_print_err_fn){
return (function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_reset_print_fns_BANG_(){
cljs.core.set_print_fn_BANG_(original_print_fn);

return cljs.core.set_print_err_fn_BANG_(original_print_err_fn);
});})(original_print_fn,original_print_err_fn))
);

cljs.core.set_print_fn_BANG_(((function (original_print_fn,original_print_err_fn){
return (function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate = function (args){
var G__30987_31132 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__30987_31132) : msg_fn.call(null,G__30987_31132));

if(cljs.core.truth_(original_print_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31133__i = 0, G__31133__a = new Array(arguments.length -  0);
while (G__31133__i < G__31133__a.length) {G__31133__a[G__31133__i] = arguments[G__31133__i + 0]; ++G__31133__i;}
  args = new cljs.core.IndexedSeq(G__31133__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$applyTo = (function (arglist__31134){
var args = cljs.core.seq(arglist__31134);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn;
})()
;})(original_print_fn,original_print_err_fn))
);

return cljs.core.set_print_err_fn_BANG_(((function (original_print_fn,original_print_err_fn){
return (function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate = function (args){
var G__30990_31135 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","err","repl/err",-2086562244),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__30990_31135) : msg_fn.call(null,G__30990_31135));

if(cljs.core.truth_(original_print_err_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_err_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31136__i = 0, G__31136__a = new Array(arguments.length -  0);
while (G__31136__i < G__31136__a.length) {G__31136__a[G__31136__i] = arguments[G__31136__i + 0]; ++G__31136__i;}
  args = new cljs.core.IndexedSeq(G__31136__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$applyTo = (function (arglist__31137){
var args = cljs.core.seq(arglist__31137);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn;
})()
;})(original_print_fn,original_print_err_fn))
);
});
shadow.cljs.devtools.client.env.reset_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$reset_print_fns_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.env.reset_print_fn_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,null);
} else {
return null;
}
});
shadow.cljs.devtools.client.env.process_ws_msg = (function shadow$cljs$devtools$client$env$process_ws_msg(text,handler){
var _STAR_default_data_reader_fn_STAR__orig_val__31000 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
var _STAR_default_data_reader_fn_STAR__temp_val__31001 = ((function (_STAR_default_data_reader_fn_STAR__orig_val__31000){
return (function (tag,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tagged-literal","tagged-literal",1758013066),tag,value], null);
});})(_STAR_default_data_reader_fn_STAR__orig_val__31000))
;
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__temp_val__31001;

try{try{var msg = cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(msg) : handler.call(null,msg));
}catch (e31002){var e = e31002;
console.warn("failed to parse websocket message",text,e);

throw e;
}}finally {cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__orig_val__31000;
}});
shadow.cljs.devtools.client.env.make_task_fn = (function shadow$cljs$devtools$client$env$make_task_fn(p__31006,p__31007){
var map__31008 = p__31006;
var map__31008__$1 = (((((!((map__31008 == null))))?(((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31008):map__31008);
var log_missing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765));
var log_call_async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192));
var log_call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"log-call","log-call",412404391));
var map__31010 = p__31007;
var map__31010__$1 = (((((!((map__31010 == null))))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31010):map__31010);
var fn_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,new cljs.core.Keyword(null,"async","async",1050769601));
return ((function (map__31008,map__31008__$1,log_missing_fn,log_call_async,log_call,map__31010,map__31010__$1,fn_sym,fn_str,async){
return (function (next){
try{var fn_obj = goog.getObjectByName(fn_str,$CLJS);
if((fn_obj == null)){
if(cljs.core.truth_(log_missing_fn)){
(log_missing_fn.cljs$core$IFn$_invoke$arity$1 ? log_missing_fn.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_missing_fn.call(null,fn_sym));
} else {
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
} else {
if(cljs.core.truth_(async)){
if(cljs.core.truth_(log_call_async)){
(log_call_async.cljs$core$IFn$_invoke$arity$1 ? log_call_async.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call_async.call(null,fn_sym));
} else {
}

return (fn_obj.cljs$core$IFn$_invoke$arity$1 ? fn_obj.cljs$core$IFn$_invoke$arity$1(next) : fn_obj.call(null,next));
} else {
if(cljs.core.truth_(log_call)){
(log_call.cljs$core$IFn$_invoke$arity$1 ? log_call.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call.call(null,fn_sym));
} else {
}

(fn_obj.cljs$core$IFn$_invoke$arity$0 ? fn_obj.cljs$core$IFn$_invoke$arity$0() : fn_obj.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));

}
}
}catch (e31016){var ex = e31016;
console.warn("error when calling lifecycle function",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym),ex);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}});
;})(map__31008,map__31008__$1,log_missing_fn,log_call_async,log_call,map__31010,map__31010__$1,fn_sym,fn_str,async))
});
shadow.cljs.devtools.client.env.do_js_reload_STAR_ = (function shadow$cljs$devtools$client$env$do_js_reload_STAR_(failure_fn,p__31023){
var vec__31024 = p__31023;
var seq__31025 = cljs.core.seq(vec__31024);
var first__31026 = cljs.core.first(seq__31025);
var seq__31025__$1 = cljs.core.next(seq__31025);
var task = first__31026;
var remaining_tasks = seq__31025__$1;
if(cljs.core.truth_(task)){
try{var G__31029 = ((function (vec__31024,seq__31025,first__31026,seq__31025__$1,task,remaining_tasks){
return (function (){
return (shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2(failure_fn,remaining_tasks) : shadow.cljs.devtools.client.env.do_js_reload_STAR_.call(null,failure_fn,remaining_tasks));
});})(vec__31024,seq__31025,first__31026,seq__31025__$1,task,remaining_tasks))
;
return (task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(G__31029) : task.call(null,G__31029));
}catch (e31028){var e = e31028;
return (failure_fn.cljs$core$IFn$_invoke$arity$3 ? failure_fn.cljs$core$IFn$_invoke$arity$3(e,task,remaining_tasks) : failure_fn.call(null,e,task,remaining_tasks));
}} else {
return null;
}
});
/**
 * should pass the :build-complete message and an additional callback
 * which performs the actual loading of the code (sync)
 * will call all before/after callbacks in order
 */
shadow.cljs.devtools.client.env.do_js_reload = (function shadow$cljs$devtools$client$env$do_js_reload(var_args){
var G__31033 = arguments.length;
switch (G__31033) {
case 2:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2 = (function (msg,load_code_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(msg,load_code_fn,(function (){
return null;
}));
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3 = (function (msg,load_code_fn,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(msg,load_code_fn,complete_fn,(function (error,task,remaining){
return console.warn("JS reload failed",error);
}));
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4 = (function (p__31044,load_code_fn,complete_fn,failure_fn){
var map__31045 = p__31044;
var map__31045__$1 = (((((!((map__31045 == null))))?(((((map__31045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31045):map__31045);
var msg = map__31045__$1;
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31045__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var load_tasks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__31045,map__31045__$1,msg,reload_info){
return (function (p1__31030_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__31030_SHARP_);
});})(map__31045,map__31045__$1,msg,reload_info))
,new cljs.core.Keyword(null,"before-load","before-load",-2060117064).cljs$core$IFn$_invoke$arity$1(reload_info)))),((function (map__31045,map__31045__$1,msg,reload_info){
return (function (next){
(load_code_fn.cljs$core$IFn$_invoke$arity$0 ? load_code_fn.cljs$core$IFn$_invoke$arity$0() : load_code_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
});})(map__31045,map__31045__$1,msg,reload_info))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__31045,map__31045__$1,msg,reload_info){
return (function (p1__31031_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__31031_SHARP_);
});})(map__31045,map__31045__$1,msg,reload_info))
),new cljs.core.Keyword(null,"after-load","after-load",-1278503285).cljs$core$IFn$_invoke$arity$1(reload_info)),((function (map__31045,map__31045__$1,msg,reload_info){
return (function (next){
(complete_fn.cljs$core$IFn$_invoke$arity$0 ? complete_fn.cljs$core$IFn$_invoke$arity$0() : complete_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
});})(map__31045,map__31045__$1,msg,reload_info))
);
return shadow.cljs.devtools.client.env.do_js_reload_STAR_(failure_fn,load_tasks);
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$lang$maxFixedArity = 4;

shadow.cljs.devtools.client.env.before_load_src = (function shadow$cljs$devtools$client$env$before_load_src(p__31050){
var map__31051 = p__31050;
var map__31051__$1 = (((((!((map__31051 == null))))?(((((map__31051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31051):map__31051);
var src = map__31051__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),type)){
var seq__31081 = cljs.core.seq(goog.global.SHADOW_NS_RESET);
var chunk__31082 = null;
var count__31083 = (0);
var i__31084 = (0);
while(true){
if((i__31084 < count__31083)){
var x = chunk__31082.cljs$core$IIndexed$_nth$arity$2(null,i__31084);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__31143 = seq__31081;
var G__31144 = chunk__31082;
var G__31145 = count__31083;
var G__31146 = (i__31084 + (1));
seq__31081 = G__31143;
chunk__31082 = G__31144;
count__31083 = G__31145;
i__31084 = G__31146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31081);
if(temp__5735__auto__){
var seq__31081__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31081__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31081__$1);
var G__31147 = cljs.core.chunk_rest(seq__31081__$1);
var G__31148 = c__4550__auto__;
var G__31149 = cljs.core.count(c__4550__auto__);
var G__31150 = (0);
seq__31081 = G__31147;
chunk__31082 = G__31148;
count__31083 = G__31149;
i__31084 = G__31150;
continue;
} else {
var x = cljs.core.first(seq__31081__$1);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__31151 = cljs.core.next(seq__31081__$1);
var G__31152 = null;
var G__31153 = (0);
var G__31154 = (0);
seq__31081 = G__31151;
chunk__31082 = G__31152;
count__31083 = G__31153;
i__31084 = G__31154;
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
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.custom_msg_subscribers_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.custom_msg_subscribers_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.subscribe_BANG_ = (function shadow$cljs$devtools$client$env$subscribe_BANG_(sub_id,callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref,cljs.core.assoc,sub_id,callback);
});
shadow.cljs.devtools.client.env.publish_BANG_ = (function shadow$cljs$devtools$client$env$publish_BANG_(msg){
var seq__31101 = cljs.core.seq(cljs.core.deref(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref));
var chunk__31102 = null;
var count__31103 = (0);
var i__31104 = (0);
while(true){
if((i__31104 < count__31103)){
var vec__31119 = chunk__31102.cljs$core$IIndexed$_nth$arity$2(null,i__31104);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31119,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31119,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e31122){var e_31155 = e31122;
console.warn("failed to handle custom msg",id,msg);
}

var G__31156 = seq__31101;
var G__31157 = chunk__31102;
var G__31158 = count__31103;
var G__31159 = (i__31104 + (1));
seq__31101 = G__31156;
chunk__31102 = G__31157;
count__31103 = G__31158;
i__31104 = G__31159;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31101);
if(temp__5735__auto__){
var seq__31101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31101__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31101__$1);
var G__31163 = cljs.core.chunk_rest(seq__31101__$1);
var G__31164 = c__4550__auto__;
var G__31165 = cljs.core.count(c__4550__auto__);
var G__31166 = (0);
seq__31101 = G__31163;
chunk__31102 = G__31164;
count__31103 = G__31165;
i__31104 = G__31166;
continue;
} else {
var vec__31123 = cljs.core.first(seq__31101__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e31126){var e_31167 = e31126;
console.warn("failed to handle custom msg",id,msg);
}

var G__31168 = cljs.core.next(seq__31101__$1);
var G__31169 = null;
var G__31170 = (0);
var G__31171 = (0);
seq__31101 = G__31168;
chunk__31102 = G__31169;
count__31103 = G__31170;
i__31104 = G__31171;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.cljs.devtools.client.env.js.map
