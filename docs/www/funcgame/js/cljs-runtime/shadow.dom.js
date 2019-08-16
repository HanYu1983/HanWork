goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33142 = coll;
var G__33143 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33142,G__33143) : shadow.dom.lazy_native_coll_seq.call(null,G__33142,G__33143));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33207 = arguments.length;
switch (G__33207) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33214 = arguments.length;
switch (G__33214) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33241 = arguments.length;
switch (G__33241) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33247 = arguments.length;
switch (G__33247) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33248 = document;
var G__33249 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33248,G__33249);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33253 = shadow.dom.dom_node(parent);
var G__33254 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33253,G__33254);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33258 = shadow.dom.dom_node(el);
var G__33259 = cls;
return goog.dom.classlist.add(G__33258,G__33259);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33263 = shadow.dom.dom_node(el);
var G__33264 = cls;
return goog.dom.classlist.remove(G__33263,G__33264);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33304 = arguments.length;
switch (G__33304) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33306 = shadow.dom.dom_node(el);
var G__33307 = cls;
return goog.dom.classlist.toggle(G__33306,G__33307);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33309){if((e33309 instanceof Object)){
var e = e33309;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33309;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33310 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33311 = null;
var count__33312 = (0);
var i__33313 = (0);
while(true){
if((i__33313 < count__33312)){
var el = chunk__33311.cljs$core$IIndexed$_nth$arity$2(null,i__33313);
var handler_33916__$1 = ((function (seq__33310,chunk__33311,count__33312,i__33313,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33310,chunk__33311,count__33312,i__33313,el))
;
var G__33322_33917 = el;
var G__33323_33918 = cljs.core.name(ev);
var G__33324_33919 = handler_33916__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33322_33917,G__33323_33918,G__33324_33919) : shadow.dom.dom_listen.call(null,G__33322_33917,G__33323_33918,G__33324_33919));


var G__33920 = seq__33310;
var G__33921 = chunk__33311;
var G__33922 = count__33312;
var G__33923 = (i__33313 + (1));
seq__33310 = G__33920;
chunk__33311 = G__33921;
count__33312 = G__33922;
i__33313 = G__33923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33310);
if(temp__5735__auto__){
var seq__33310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33310__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33310__$1);
var G__33924 = cljs.core.chunk_rest(seq__33310__$1);
var G__33925 = c__4550__auto__;
var G__33926 = cljs.core.count(c__4550__auto__);
var G__33927 = (0);
seq__33310 = G__33924;
chunk__33311 = G__33925;
count__33312 = G__33926;
i__33313 = G__33927;
continue;
} else {
var el = cljs.core.first(seq__33310__$1);
var handler_33928__$1 = ((function (seq__33310,chunk__33311,count__33312,i__33313,el,seq__33310__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33310,chunk__33311,count__33312,i__33313,el,seq__33310__$1,temp__5735__auto__))
;
var G__33329_33929 = el;
var G__33330_33930 = cljs.core.name(ev);
var G__33331_33931 = handler_33928__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33329_33929,G__33330_33930,G__33331_33931) : shadow.dom.dom_listen.call(null,G__33329_33929,G__33330_33930,G__33331_33931));


var G__33932 = cljs.core.next(seq__33310__$1);
var G__33933 = null;
var G__33934 = (0);
var G__33935 = (0);
seq__33310 = G__33932;
chunk__33311 = G__33933;
count__33312 = G__33934;
i__33313 = G__33935;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33342 = shadow.dom.dom_node(el);
var G__33343 = cljs.core.name(ev);
var G__33344 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33342,G__33343,G__33344) : shadow.dom.dom_listen.call(null,G__33342,G__33343,G__33344));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33346 = shadow.dom.dom_node(el);
var G__33347 = cljs.core.name(ev);
var G__33348 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33346,G__33347,G__33348) : shadow.dom.dom_listen_remove.call(null,G__33346,G__33347,G__33348));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33392 = cljs.core.seq(events);
var chunk__33393 = null;
var count__33394 = (0);
var i__33395 = (0);
while(true){
if((i__33395 < count__33394)){
var vec__33402 = chunk__33393.cljs$core$IIndexed$_nth$arity$2(null,i__33395);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33940 = seq__33392;
var G__33941 = chunk__33393;
var G__33942 = count__33394;
var G__33943 = (i__33395 + (1));
seq__33392 = G__33940;
chunk__33393 = G__33941;
count__33394 = G__33942;
i__33395 = G__33943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33392);
if(temp__5735__auto__){
var seq__33392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33392__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33392__$1);
var G__33945 = cljs.core.chunk_rest(seq__33392__$1);
var G__33946 = c__4550__auto__;
var G__33947 = cljs.core.count(c__4550__auto__);
var G__33948 = (0);
seq__33392 = G__33945;
chunk__33393 = G__33946;
count__33394 = G__33947;
i__33395 = G__33948;
continue;
} else {
var vec__33405 = cljs.core.first(seq__33392__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33405,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33405,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33949 = cljs.core.next(seq__33392__$1);
var G__33950 = null;
var G__33951 = (0);
var G__33952 = (0);
seq__33392 = G__33949;
chunk__33393 = G__33950;
count__33394 = G__33951;
i__33395 = G__33952;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33411 = cljs.core.seq(styles);
var chunk__33412 = null;
var count__33413 = (0);
var i__33414 = (0);
while(true){
if((i__33414 < count__33413)){
var vec__33430 = chunk__33412.cljs$core$IIndexed$_nth$arity$2(null,i__33414);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
var G__33433_33953 = dom;
var G__33434_33954 = cljs.core.name(k);
var G__33435_33955 = (((v == null))?"":v);
goog.style.setStyle(G__33433_33953,G__33434_33954,G__33435_33955);


var G__33956 = seq__33411;
var G__33957 = chunk__33412;
var G__33958 = count__33413;
var G__33959 = (i__33414 + (1));
seq__33411 = G__33956;
chunk__33412 = G__33957;
count__33413 = G__33958;
i__33414 = G__33959;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33411);
if(temp__5735__auto__){
var seq__33411__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33411__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33411__$1);
var G__33960 = cljs.core.chunk_rest(seq__33411__$1);
var G__33961 = c__4550__auto__;
var G__33962 = cljs.core.count(c__4550__auto__);
var G__33963 = (0);
seq__33411 = G__33960;
chunk__33412 = G__33961;
count__33413 = G__33962;
i__33414 = G__33963;
continue;
} else {
var vec__33436 = cljs.core.first(seq__33411__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(1),null);
var G__33439_33964 = dom;
var G__33440_33965 = cljs.core.name(k);
var G__33441_33966 = (((v == null))?"":v);
goog.style.setStyle(G__33439_33964,G__33440_33965,G__33441_33966);


var G__33968 = cljs.core.next(seq__33411__$1);
var G__33969 = null;
var G__33970 = (0);
var G__33971 = (0);
seq__33411 = G__33968;
chunk__33412 = G__33969;
count__33413 = G__33970;
i__33414 = G__33971;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33442_33972 = key;
var G__33442_33973__$1 = (((G__33442_33972 instanceof cljs.core.Keyword))?G__33442_33972.fqn:null);
switch (G__33442_33973__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33977 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33977,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33977,"aria-");
}
})())){
el.setAttribute(ks_33977,value);
} else {
(el[ks_33977] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33447 = shadow.dom.dom_node(el);
var G__33448 = cls;
return goog.dom.classlist.contains(G__33447,G__33448);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33459){
var map__33461 = p__33459;
var map__33461__$1 = (((((!((map__33461 == null))))?(((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33461):map__33461);
var props = map__33461__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33461__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33463 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33463,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33463,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33463,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33467 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33467,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33467;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33472 = arguments.length;
switch (G__33472) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33483){
var vec__33484 = p__33483;
var seq__33485 = cljs.core.seq(vec__33484);
var first__33486 = cljs.core.first(seq__33485);
var seq__33485__$1 = cljs.core.next(seq__33485);
var nn = first__33486;
var first__33486__$1 = cljs.core.first(seq__33485__$1);
var seq__33485__$2 = cljs.core.next(seq__33485__$1);
var np = first__33486__$1;
var nc = seq__33485__$2;
var node = vec__33484;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33491 = nn;
var G__33492 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33491,G__33492) : create_fn.call(null,G__33491,G__33492));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33494 = nn;
var G__33495 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33494,G__33495) : create_fn.call(null,G__33494,G__33495));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33501 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33501,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33501,(1),null);
var seq__33505_33986 = cljs.core.seq(node_children);
var chunk__33506_33987 = null;
var count__33507_33988 = (0);
var i__33508_33989 = (0);
while(true){
if((i__33508_33989 < count__33507_33988)){
var child_struct_33990 = chunk__33506_33987.cljs$core$IIndexed$_nth$arity$2(null,i__33508_33989);
var children_33991 = shadow.dom.dom_node(child_struct_33990);
if(cljs.core.seq_QMARK_(children_33991)){
var seq__33531_33995 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33991));
var chunk__33533_33996 = null;
var count__33534_33997 = (0);
var i__33535_33998 = (0);
while(true){
if((i__33535_33998 < count__33534_33997)){
var child_33999 = chunk__33533_33996.cljs$core$IIndexed$_nth$arity$2(null,i__33535_33998);
if(cljs.core.truth_(child_33999)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33999);


var G__34000 = seq__33531_33995;
var G__34001 = chunk__33533_33996;
var G__34002 = count__33534_33997;
var G__34003 = (i__33535_33998 + (1));
seq__33531_33995 = G__34000;
chunk__33533_33996 = G__34001;
count__33534_33997 = G__34002;
i__33535_33998 = G__34003;
continue;
} else {
var G__34004 = seq__33531_33995;
var G__34005 = chunk__33533_33996;
var G__34006 = count__33534_33997;
var G__34007 = (i__33535_33998 + (1));
seq__33531_33995 = G__34004;
chunk__33533_33996 = G__34005;
count__33534_33997 = G__34006;
i__33535_33998 = G__34007;
continue;
}
} else {
var temp__5735__auto___34008 = cljs.core.seq(seq__33531_33995);
if(temp__5735__auto___34008){
var seq__33531_34009__$1 = temp__5735__auto___34008;
if(cljs.core.chunked_seq_QMARK_(seq__33531_34009__$1)){
var c__4550__auto___34010 = cljs.core.chunk_first(seq__33531_34009__$1);
var G__34011 = cljs.core.chunk_rest(seq__33531_34009__$1);
var G__34012 = c__4550__auto___34010;
var G__34013 = cljs.core.count(c__4550__auto___34010);
var G__34014 = (0);
seq__33531_33995 = G__34011;
chunk__33533_33996 = G__34012;
count__33534_33997 = G__34013;
i__33535_33998 = G__34014;
continue;
} else {
var child_34029 = cljs.core.first(seq__33531_34009__$1);
if(cljs.core.truth_(child_34029)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34029);


var G__34030 = cljs.core.next(seq__33531_34009__$1);
var G__34031 = null;
var G__34032 = (0);
var G__34033 = (0);
seq__33531_33995 = G__34030;
chunk__33533_33996 = G__34031;
count__33534_33997 = G__34032;
i__33535_33998 = G__34033;
continue;
} else {
var G__34034 = cljs.core.next(seq__33531_34009__$1);
var G__34035 = null;
var G__34036 = (0);
var G__34037 = (0);
seq__33531_33995 = G__34034;
chunk__33533_33996 = G__34035;
count__33534_33997 = G__34036;
i__33535_33998 = G__34037;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33991);
}


var G__34038 = seq__33505_33986;
var G__34039 = chunk__33506_33987;
var G__34040 = count__33507_33988;
var G__34041 = (i__33508_33989 + (1));
seq__33505_33986 = G__34038;
chunk__33506_33987 = G__34039;
count__33507_33988 = G__34040;
i__33508_33989 = G__34041;
continue;
} else {
var temp__5735__auto___34042 = cljs.core.seq(seq__33505_33986);
if(temp__5735__auto___34042){
var seq__33505_34043__$1 = temp__5735__auto___34042;
if(cljs.core.chunked_seq_QMARK_(seq__33505_34043__$1)){
var c__4550__auto___34044 = cljs.core.chunk_first(seq__33505_34043__$1);
var G__34045 = cljs.core.chunk_rest(seq__33505_34043__$1);
var G__34046 = c__4550__auto___34044;
var G__34047 = cljs.core.count(c__4550__auto___34044);
var G__34048 = (0);
seq__33505_33986 = G__34045;
chunk__33506_33987 = G__34046;
count__33507_33988 = G__34047;
i__33508_33989 = G__34048;
continue;
} else {
var child_struct_34049 = cljs.core.first(seq__33505_34043__$1);
var children_34050 = shadow.dom.dom_node(child_struct_34049);
if(cljs.core.seq_QMARK_(children_34050)){
var seq__33538_34051 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34050));
var chunk__33540_34052 = null;
var count__33541_34053 = (0);
var i__33542_34054 = (0);
while(true){
if((i__33542_34054 < count__33541_34053)){
var child_34055 = chunk__33540_34052.cljs$core$IIndexed$_nth$arity$2(null,i__33542_34054);
if(cljs.core.truth_(child_34055)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34055);


var G__34056 = seq__33538_34051;
var G__34057 = chunk__33540_34052;
var G__34058 = count__33541_34053;
var G__34059 = (i__33542_34054 + (1));
seq__33538_34051 = G__34056;
chunk__33540_34052 = G__34057;
count__33541_34053 = G__34058;
i__33542_34054 = G__34059;
continue;
} else {
var G__34060 = seq__33538_34051;
var G__34061 = chunk__33540_34052;
var G__34062 = count__33541_34053;
var G__34063 = (i__33542_34054 + (1));
seq__33538_34051 = G__34060;
chunk__33540_34052 = G__34061;
count__33541_34053 = G__34062;
i__33542_34054 = G__34063;
continue;
}
} else {
var temp__5735__auto___34064__$1 = cljs.core.seq(seq__33538_34051);
if(temp__5735__auto___34064__$1){
var seq__33538_34065__$1 = temp__5735__auto___34064__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33538_34065__$1)){
var c__4550__auto___34066 = cljs.core.chunk_first(seq__33538_34065__$1);
var G__34067 = cljs.core.chunk_rest(seq__33538_34065__$1);
var G__34068 = c__4550__auto___34066;
var G__34069 = cljs.core.count(c__4550__auto___34066);
var G__34070 = (0);
seq__33538_34051 = G__34067;
chunk__33540_34052 = G__34068;
count__33541_34053 = G__34069;
i__33542_34054 = G__34070;
continue;
} else {
var child_34074 = cljs.core.first(seq__33538_34065__$1);
if(cljs.core.truth_(child_34074)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34074);


var G__34075 = cljs.core.next(seq__33538_34065__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__33538_34051 = G__34075;
chunk__33540_34052 = G__34076;
count__33541_34053 = G__34077;
i__33542_34054 = G__34078;
continue;
} else {
var G__34079 = cljs.core.next(seq__33538_34065__$1);
var G__34080 = null;
var G__34081 = (0);
var G__34082 = (0);
seq__33538_34051 = G__34079;
chunk__33540_34052 = G__34080;
count__33541_34053 = G__34081;
i__33542_34054 = G__34082;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34050);
}


var G__34083 = cljs.core.next(seq__33505_34043__$1);
var G__34084 = null;
var G__34085 = (0);
var G__34086 = (0);
seq__33505_33986 = G__34083;
chunk__33506_33987 = G__34084;
count__33507_33988 = G__34085;
i__33508_33989 = G__34086;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33565 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33565);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33568 = cljs.core.seq(node);
var chunk__33569 = null;
var count__33570 = (0);
var i__33571 = (0);
while(true){
if((i__33571 < count__33570)){
var n = chunk__33569.cljs$core$IIndexed$_nth$arity$2(null,i__33571);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34087 = seq__33568;
var G__34088 = chunk__33569;
var G__34089 = count__33570;
var G__34090 = (i__33571 + (1));
seq__33568 = G__34087;
chunk__33569 = G__34088;
count__33570 = G__34089;
i__33571 = G__34090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33568);
if(temp__5735__auto__){
var seq__33568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33568__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33568__$1);
var G__34091 = cljs.core.chunk_rest(seq__33568__$1);
var G__34092 = c__4550__auto__;
var G__34093 = cljs.core.count(c__4550__auto__);
var G__34094 = (0);
seq__33568 = G__34091;
chunk__33569 = G__34092;
count__33570 = G__34093;
i__33571 = G__34094;
continue;
} else {
var n = cljs.core.first(seq__33568__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34097 = cljs.core.next(seq__33568__$1);
var G__34098 = null;
var G__34099 = (0);
var G__34100 = (0);
seq__33568 = G__34097;
chunk__33569 = G__34098;
count__33570 = G__34099;
i__33571 = G__34100;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33581 = shadow.dom.dom_node(new$);
var G__33582 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33581,G__33582);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33589 = arguments.length;
switch (G__33589) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33610 = arguments.length;
switch (G__33610) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34113 = arguments.length;
var i__4731__auto___34114 = (0);
while(true){
if((i__4731__auto___34114 < len__4730__auto___34113)){
args__4736__auto__.push((arguments[i__4731__auto___34114]));

var G__34115 = (i__4731__auto___34114 + (1));
i__4731__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33630_34119 = cljs.core.seq(nodes);
var chunk__33631_34120 = null;
var count__33632_34121 = (0);
var i__33633_34122 = (0);
while(true){
if((i__33633_34122 < count__33632_34121)){
var node_34123 = chunk__33631_34120.cljs$core$IIndexed$_nth$arity$2(null,i__33633_34122);
fragment.appendChild(shadow.dom._to_dom(node_34123));


var G__34124 = seq__33630_34119;
var G__34125 = chunk__33631_34120;
var G__34126 = count__33632_34121;
var G__34127 = (i__33633_34122 + (1));
seq__33630_34119 = G__34124;
chunk__33631_34120 = G__34125;
count__33632_34121 = G__34126;
i__33633_34122 = G__34127;
continue;
} else {
var temp__5735__auto___34128 = cljs.core.seq(seq__33630_34119);
if(temp__5735__auto___34128){
var seq__33630_34129__$1 = temp__5735__auto___34128;
if(cljs.core.chunked_seq_QMARK_(seq__33630_34129__$1)){
var c__4550__auto___34130 = cljs.core.chunk_first(seq__33630_34129__$1);
var G__34131 = cljs.core.chunk_rest(seq__33630_34129__$1);
var G__34132 = c__4550__auto___34130;
var G__34133 = cljs.core.count(c__4550__auto___34130);
var G__34134 = (0);
seq__33630_34119 = G__34131;
chunk__33631_34120 = G__34132;
count__33632_34121 = G__34133;
i__33633_34122 = G__34134;
continue;
} else {
var node_34135 = cljs.core.first(seq__33630_34129__$1);
fragment.appendChild(shadow.dom._to_dom(node_34135));


var G__34136 = cljs.core.next(seq__33630_34129__$1);
var G__34137 = null;
var G__34138 = (0);
var G__34139 = (0);
seq__33630_34119 = G__34136;
chunk__33631_34120 = G__34137;
count__33632_34121 = G__34138;
i__33633_34122 = G__34139;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33626));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33643_34140 = cljs.core.seq(scripts);
var chunk__33644_34141 = null;
var count__33645_34142 = (0);
var i__33646_34143 = (0);
while(true){
if((i__33646_34143 < count__33645_34142)){
var vec__33653_34147 = chunk__33644_34141.cljs$core$IIndexed$_nth$arity$2(null,i__33646_34143);
var script_tag_34148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653_34147,(0),null);
var script_body_34149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653_34147,(1),null);
eval(script_body_34149);


var G__34150 = seq__33643_34140;
var G__34151 = chunk__33644_34141;
var G__34152 = count__33645_34142;
var G__34153 = (i__33646_34143 + (1));
seq__33643_34140 = G__34150;
chunk__33644_34141 = G__34151;
count__33645_34142 = G__34152;
i__33646_34143 = G__34153;
continue;
} else {
var temp__5735__auto___34154 = cljs.core.seq(seq__33643_34140);
if(temp__5735__auto___34154){
var seq__33643_34155__$1 = temp__5735__auto___34154;
if(cljs.core.chunked_seq_QMARK_(seq__33643_34155__$1)){
var c__4550__auto___34156 = cljs.core.chunk_first(seq__33643_34155__$1);
var G__34157 = cljs.core.chunk_rest(seq__33643_34155__$1);
var G__34158 = c__4550__auto___34156;
var G__34159 = cljs.core.count(c__4550__auto___34156);
var G__34160 = (0);
seq__33643_34140 = G__34157;
chunk__33644_34141 = G__34158;
count__33645_34142 = G__34159;
i__33646_34143 = G__34160;
continue;
} else {
var vec__33656_34161 = cljs.core.first(seq__33643_34155__$1);
var script_tag_34162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33656_34161,(0),null);
var script_body_34163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33656_34161,(1),null);
eval(script_body_34163);


var G__34164 = cljs.core.next(seq__33643_34155__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__33643_34140 = G__34164;
chunk__33644_34141 = G__34165;
count__33645_34142 = G__34166;
i__33646_34143 = G__34167;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33659){
var vec__33660 = p__33659;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33660,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33660,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33663 = shadow.dom.dom_node(el);
var G__33664 = cls;
return goog.dom.getAncestorByClass(G__33663,G__33664);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33666 = arguments.length;
switch (G__33666) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33673 = shadow.dom.dom_node(el);
var G__33674 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33673,G__33674);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33675 = shadow.dom.dom_node(el);
var G__33676 = cljs.core.name(tag);
var G__33677 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33675,G__33676,G__33677);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33678 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33678);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33681 = shadow.dom.dom_node(dom);
var G__33682 = value;
return goog.dom.forms.setValue(G__33681,G__33682);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33689 = cljs.core.seq(style_keys);
var chunk__33690 = null;
var count__33691 = (0);
var i__33692 = (0);
while(true){
if((i__33692 < count__33691)){
var it = chunk__33690.cljs$core$IIndexed$_nth$arity$2(null,i__33692);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34172 = seq__33689;
var G__34173 = chunk__33690;
var G__34174 = count__33691;
var G__34175 = (i__33692 + (1));
seq__33689 = G__34172;
chunk__33690 = G__34173;
count__33691 = G__34174;
i__33692 = G__34175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33689);
if(temp__5735__auto__){
var seq__33689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33689__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33689__$1);
var G__34176 = cljs.core.chunk_rest(seq__33689__$1);
var G__34177 = c__4550__auto__;
var G__34178 = cljs.core.count(c__4550__auto__);
var G__34179 = (0);
seq__33689 = G__34176;
chunk__33690 = G__34177;
count__33691 = G__34178;
i__33692 = G__34179;
continue;
} else {
var it = cljs.core.first(seq__33689__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34181 = cljs.core.next(seq__33689__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33689 = G__34181;
chunk__33690 = G__34182;
count__33691 = G__34183;
i__33692 = G__34184;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33696,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33706 = k33696;
var G__33706__$1 = (((G__33706 instanceof cljs.core.Keyword))?G__33706.fqn:null);
switch (G__33706__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33696,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33707){
var vec__33708 = p__33707;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33695){
var self__ = this;
var G__33695__$1 = this;
return (new cljs.core.RecordIter((0),G__33695__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33720 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33720(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33697,other33698){
var self__ = this;
var this33697__$1 = this;
return (((!((other33698 == null)))) && ((this33697__$1.constructor === other33698.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33697__$1.x,other33698.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33697__$1.y,other33698.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33697__$1.__extmap,other33698.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33695){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33729 = cljs.core.keyword_identical_QMARK_;
var expr__33730 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33732 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33733 = expr__33730;
return (pred__33729.cljs$core$IFn$_invoke$arity$2 ? pred__33729.cljs$core$IFn$_invoke$arity$2(G__33732,G__33733) : pred__33729.call(null,G__33732,G__33733));
})())){
return (new shadow.dom.Coordinate(G__33695,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33734 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33735 = expr__33730;
return (pred__33729.cljs$core$IFn$_invoke$arity$2 ? pred__33729.cljs$core$IFn$_invoke$arity$2(G__33734,G__33735) : pred__33729.call(null,G__33734,G__33735));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33695,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33695),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33695){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33695,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33701){
var extmap__4424__auto__ = (function (){var G__33743 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33701,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33701)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33743);
} else {
return G__33743;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33701),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33701),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33748 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33748);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33749 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33749);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33753 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33753);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33757,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33763 = k33757;
var G__33763__$1 = (((G__33763 instanceof cljs.core.Keyword))?G__33763.fqn:null);
switch (G__33763__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33757,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33765){
var vec__33767 = p__33765;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33756){
var self__ = this;
var G__33756__$1 = this;
return (new cljs.core.RecordIter((0),G__33756__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33778 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33778(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33758,other33759){
var self__ = this;
var this33758__$1 = this;
return (((!((other33759 == null)))) && ((this33758__$1.constructor === other33759.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33758__$1.w,other33759.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33758__$1.h,other33759.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33758__$1.__extmap,other33759.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33756){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33782 = cljs.core.keyword_identical_QMARK_;
var expr__33783 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33785 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33786 = expr__33783;
return (pred__33782.cljs$core$IFn$_invoke$arity$2 ? pred__33782.cljs$core$IFn$_invoke$arity$2(G__33785,G__33786) : pred__33782.call(null,G__33785,G__33786));
})())){
return (new shadow.dom.Size(G__33756,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33788 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33789 = expr__33783;
return (pred__33782.cljs$core$IFn$_invoke$arity$2 ? pred__33782.cljs$core$IFn$_invoke$arity$2(G__33788,G__33789) : pred__33782.call(null,G__33788,G__33789));
})())){
return (new shadow.dom.Size(self__.w,G__33756,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33756),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33756){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33756,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33760){
var extmap__4424__auto__ = (function (){var G__33795 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33760,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33760)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33795);
} else {
return G__33795;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33760),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33760),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33805 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33805);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34216 = (i + (1));
var G__34217 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34216;
ret = G__34217;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33815){
var vec__33816 = p__33815;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33821 = arguments.length;
switch (G__33821) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33824_34219 = new_node;
var G__33825_34220 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33824_34219,G__33825_34220);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33826_34223 = new_node;
var G__33827_34224 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33826_34223,G__33827_34224);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34229 = ps;
var G__34230 = (i + (1));
el__$1 = G__34229;
i = G__34230;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33828 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33828);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33829 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33829);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33830 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33830);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33831 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33831,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33834_34251 = cljs.core.seq(props);
var chunk__33835_34252 = null;
var count__33836_34253 = (0);
var i__33837_34254 = (0);
while(true){
if((i__33837_34254 < count__33836_34253)){
var vec__33844_34255 = chunk__33835_34252.cljs$core$IIndexed$_nth$arity$2(null,i__33837_34254);
var k_34256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33844_34255,(0),null);
var v_34257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33844_34255,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34256);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34256),v_34257);


var G__34262 = seq__33834_34251;
var G__34263 = chunk__33835_34252;
var G__34264 = count__33836_34253;
var G__34265 = (i__33837_34254 + (1));
seq__33834_34251 = G__34262;
chunk__33835_34252 = G__34263;
count__33836_34253 = G__34264;
i__33837_34254 = G__34265;
continue;
} else {
var temp__5735__auto___34266 = cljs.core.seq(seq__33834_34251);
if(temp__5735__auto___34266){
var seq__33834_34267__$1 = temp__5735__auto___34266;
if(cljs.core.chunked_seq_QMARK_(seq__33834_34267__$1)){
var c__4550__auto___34268 = cljs.core.chunk_first(seq__33834_34267__$1);
var G__34270 = cljs.core.chunk_rest(seq__33834_34267__$1);
var G__34271 = c__4550__auto___34268;
var G__34272 = cljs.core.count(c__4550__auto___34268);
var G__34273 = (0);
seq__33834_34251 = G__34270;
chunk__33835_34252 = G__34271;
count__33836_34253 = G__34272;
i__33837_34254 = G__34273;
continue;
} else {
var vec__33847_34274 = cljs.core.first(seq__33834_34267__$1);
var k_34275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34274,(0),null);
var v_34276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34274,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34275);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34275),v_34276);


var G__34277 = cljs.core.next(seq__33834_34267__$1);
var G__34278 = null;
var G__34279 = (0);
var G__34280 = (0);
seq__33834_34251 = G__34277;
chunk__33835_34252 = G__34278;
count__33836_34253 = G__34279;
i__33837_34254 = G__34280;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33851 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(1),null);
var seq__33854_34285 = cljs.core.seq(node_children);
var chunk__33856_34286 = null;
var count__33857_34287 = (0);
var i__33858_34288 = (0);
while(true){
if((i__33858_34288 < count__33857_34287)){
var child_struct_34289 = chunk__33856_34286.cljs$core$IIndexed$_nth$arity$2(null,i__33858_34288);
if((!((child_struct_34289 == null)))){
if(typeof child_struct_34289 === 'string'){
var text_34290 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34290),child_struct_34289].join(''));
} else {
var children_34295 = shadow.dom.svg_node(child_struct_34289);
if(cljs.core.seq_QMARK_(children_34295)){
var seq__33872_34297 = cljs.core.seq(children_34295);
var chunk__33874_34298 = null;
var count__33875_34299 = (0);
var i__33876_34300 = (0);
while(true){
if((i__33876_34300 < count__33875_34299)){
var child_34311 = chunk__33874_34298.cljs$core$IIndexed$_nth$arity$2(null,i__33876_34300);
if(cljs.core.truth_(child_34311)){
node.appendChild(child_34311);


var G__34314 = seq__33872_34297;
var G__34315 = chunk__33874_34298;
var G__34316 = count__33875_34299;
var G__34317 = (i__33876_34300 + (1));
seq__33872_34297 = G__34314;
chunk__33874_34298 = G__34315;
count__33875_34299 = G__34316;
i__33876_34300 = G__34317;
continue;
} else {
var G__34318 = seq__33872_34297;
var G__34319 = chunk__33874_34298;
var G__34320 = count__33875_34299;
var G__34321 = (i__33876_34300 + (1));
seq__33872_34297 = G__34318;
chunk__33874_34298 = G__34319;
count__33875_34299 = G__34320;
i__33876_34300 = G__34321;
continue;
}
} else {
var temp__5735__auto___34324 = cljs.core.seq(seq__33872_34297);
if(temp__5735__auto___34324){
var seq__33872_34325__$1 = temp__5735__auto___34324;
if(cljs.core.chunked_seq_QMARK_(seq__33872_34325__$1)){
var c__4550__auto___34326 = cljs.core.chunk_first(seq__33872_34325__$1);
var G__34327 = cljs.core.chunk_rest(seq__33872_34325__$1);
var G__34328 = c__4550__auto___34326;
var G__34329 = cljs.core.count(c__4550__auto___34326);
var G__34330 = (0);
seq__33872_34297 = G__34327;
chunk__33874_34298 = G__34328;
count__33875_34299 = G__34329;
i__33876_34300 = G__34330;
continue;
} else {
var child_34333 = cljs.core.first(seq__33872_34325__$1);
if(cljs.core.truth_(child_34333)){
node.appendChild(child_34333);


var G__34334 = cljs.core.next(seq__33872_34325__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__33872_34297 = G__34334;
chunk__33874_34298 = G__34335;
count__33875_34299 = G__34336;
i__33876_34300 = G__34337;
continue;
} else {
var G__34339 = cljs.core.next(seq__33872_34325__$1);
var G__34340 = null;
var G__34341 = (0);
var G__34342 = (0);
seq__33872_34297 = G__34339;
chunk__33874_34298 = G__34340;
count__33875_34299 = G__34341;
i__33876_34300 = G__34342;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34295);
}
}


var G__34343 = seq__33854_34285;
var G__34344 = chunk__33856_34286;
var G__34345 = count__33857_34287;
var G__34346 = (i__33858_34288 + (1));
seq__33854_34285 = G__34343;
chunk__33856_34286 = G__34344;
count__33857_34287 = G__34345;
i__33858_34288 = G__34346;
continue;
} else {
var G__34349 = seq__33854_34285;
var G__34350 = chunk__33856_34286;
var G__34351 = count__33857_34287;
var G__34352 = (i__33858_34288 + (1));
seq__33854_34285 = G__34349;
chunk__33856_34286 = G__34350;
count__33857_34287 = G__34351;
i__33858_34288 = G__34352;
continue;
}
} else {
var temp__5735__auto___34353 = cljs.core.seq(seq__33854_34285);
if(temp__5735__auto___34353){
var seq__33854_34356__$1 = temp__5735__auto___34353;
if(cljs.core.chunked_seq_QMARK_(seq__33854_34356__$1)){
var c__4550__auto___34357 = cljs.core.chunk_first(seq__33854_34356__$1);
var G__34358 = cljs.core.chunk_rest(seq__33854_34356__$1);
var G__34359 = c__4550__auto___34357;
var G__34360 = cljs.core.count(c__4550__auto___34357);
var G__34361 = (0);
seq__33854_34285 = G__34358;
chunk__33856_34286 = G__34359;
count__33857_34287 = G__34360;
i__33858_34288 = G__34361;
continue;
} else {
var child_struct_34363 = cljs.core.first(seq__33854_34356__$1);
if((!((child_struct_34363 == null)))){
if(typeof child_struct_34363 === 'string'){
var text_34367 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34367),child_struct_34363].join(''));
} else {
var children_34368 = shadow.dom.svg_node(child_struct_34363);
if(cljs.core.seq_QMARK_(children_34368)){
var seq__33878_34369 = cljs.core.seq(children_34368);
var chunk__33880_34370 = null;
var count__33881_34371 = (0);
var i__33882_34372 = (0);
while(true){
if((i__33882_34372 < count__33881_34371)){
var child_34373 = chunk__33880_34370.cljs$core$IIndexed$_nth$arity$2(null,i__33882_34372);
if(cljs.core.truth_(child_34373)){
node.appendChild(child_34373);


var G__34375 = seq__33878_34369;
var G__34376 = chunk__33880_34370;
var G__34377 = count__33881_34371;
var G__34378 = (i__33882_34372 + (1));
seq__33878_34369 = G__34375;
chunk__33880_34370 = G__34376;
count__33881_34371 = G__34377;
i__33882_34372 = G__34378;
continue;
} else {
var G__34379 = seq__33878_34369;
var G__34380 = chunk__33880_34370;
var G__34381 = count__33881_34371;
var G__34382 = (i__33882_34372 + (1));
seq__33878_34369 = G__34379;
chunk__33880_34370 = G__34380;
count__33881_34371 = G__34381;
i__33882_34372 = G__34382;
continue;
}
} else {
var temp__5735__auto___34383__$1 = cljs.core.seq(seq__33878_34369);
if(temp__5735__auto___34383__$1){
var seq__33878_34388__$1 = temp__5735__auto___34383__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33878_34388__$1)){
var c__4550__auto___34389 = cljs.core.chunk_first(seq__33878_34388__$1);
var G__34390 = cljs.core.chunk_rest(seq__33878_34388__$1);
var G__34391 = c__4550__auto___34389;
var G__34392 = cljs.core.count(c__4550__auto___34389);
var G__34393 = (0);
seq__33878_34369 = G__34390;
chunk__33880_34370 = G__34391;
count__33881_34371 = G__34392;
i__33882_34372 = G__34393;
continue;
} else {
var child_34394 = cljs.core.first(seq__33878_34388__$1);
if(cljs.core.truth_(child_34394)){
node.appendChild(child_34394);


var G__34397 = cljs.core.next(seq__33878_34388__$1);
var G__34398 = null;
var G__34399 = (0);
var G__34400 = (0);
seq__33878_34369 = G__34397;
chunk__33880_34370 = G__34398;
count__33881_34371 = G__34399;
i__33882_34372 = G__34400;
continue;
} else {
var G__34401 = cljs.core.next(seq__33878_34388__$1);
var G__34402 = null;
var G__34403 = (0);
var G__34404 = (0);
seq__33878_34369 = G__34401;
chunk__33880_34370 = G__34402;
count__33881_34371 = G__34403;
i__33882_34372 = G__34404;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34368);
}
}


var G__34407 = cljs.core.next(seq__33854_34356__$1);
var G__34408 = null;
var G__34409 = (0);
var G__34410 = (0);
seq__33854_34285 = G__34407;
chunk__33856_34286 = G__34408;
count__33857_34287 = G__34409;
i__33858_34288 = G__34410;
continue;
} else {
var G__34411 = cljs.core.next(seq__33854_34356__$1);
var G__34412 = null;
var G__34413 = (0);
var G__34414 = (0);
seq__33854_34285 = G__34411;
chunk__33856_34286 = G__34412;
count__33857_34287 = G__34413;
i__33858_34288 = G__34414;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33884_34415 = shadow.dom._to_svg;
var G__33885_34416 = "string";
var G__33886_34417 = ((function (G__33884_34415,G__33885_34416){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33884_34415,G__33885_34416))
;
goog.object.set(G__33884_34415,G__33885_34416,G__33886_34417);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33887_34421 = shadow.dom._to_svg;
var G__33888_34422 = "null";
var G__33889_34423 = ((function (G__33887_34421,G__33888_34422){
return (function (_){
return null;
});})(G__33887_34421,G__33888_34422))
;
goog.object.set(G__33887_34421,G__33888_34422,G__33889_34423);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34425 = arguments.length;
var i__4731__auto___34427 = (0);
while(true){
if((i__4731__auto___34427 < len__4730__auto___34425)){
args__4736__auto__.push((arguments[i__4731__auto___34427]));

var G__34433 = (i__4731__auto___34427 + (1));
i__4731__auto___34427 = G__34433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33890){
var G__33891 = cljs.core.first(seq33890);
var seq33890__$1 = cljs.core.next(seq33890);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33891,seq33890__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33893 = arguments.length;
switch (G__33893) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33894_34440 = shadow.dom.dom_node(el);
var G__33895_34441 = cljs.core.name(event);
var G__33896_34442 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33894_34440,G__33895_34441,G__33896_34442) : shadow.dom.dom_listen.call(null,G__33894_34440,G__33895_34441,G__33896_34442));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30213__auto___34443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___34443,buf,chan,event_fn){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___34443,buf,chan,event_fn){
return (function (state_33901){
var state_val_33902 = (state_33901[(1)]);
if((state_val_33902 === (1))){
var state_33901__$1 = state_33901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33901__$1,(2),once_or_cleanup);
} else {
if((state_val_33902 === (2))){
var inst_33898 = (state_33901[(2)]);
var inst_33899 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33901__$1 = (function (){var statearr_33903 = state_33901;
(statearr_33903[(7)] = inst_33898);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33901__$1,inst_33899);
} else {
return null;
}
}
});})(c__30213__auto___34443,buf,chan,event_fn))
;
return ((function (switch__30004__auto__,c__30213__auto___34443,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30005__auto__ = null;
var shadow$dom$state_machine__30005__auto____0 = (function (){
var statearr_33904 = [null,null,null,null,null,null,null,null];
(statearr_33904[(0)] = shadow$dom$state_machine__30005__auto__);

(statearr_33904[(1)] = (1));

return statearr_33904;
});
var shadow$dom$state_machine__30005__auto____1 = (function (state_33901){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_33901);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e33905){if((e33905 instanceof Object)){
var ex__30008__auto__ = e33905;
var statearr_33906_34445 = state_33901;
(statearr_33906_34445[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_33901;
state_33901 = G__34448;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
shadow$dom$state_machine__30005__auto__ = function(state_33901){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30005__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30005__auto____1.call(this,state_33901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30005__auto____0;
shadow$dom$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30005__auto____1;
return shadow$dom$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___34443,buf,chan,event_fn))
})();
var state__30215__auto__ = (function (){var statearr_33907 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_33907[(6)] = c__30213__auto___34443);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___34443,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
