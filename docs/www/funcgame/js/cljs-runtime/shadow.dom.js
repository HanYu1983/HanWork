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
return cljs.core.cons((coll[idx]),(function (){var G__33004 = coll;
var G__33005 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33004,G__33005) : shadow.dom.lazy_native_coll_seq.call(null,G__33004,G__33005));
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
var G__33015 = arguments.length;
switch (G__33015) {
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
var G__33023 = arguments.length;
switch (G__33023) {
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
var G__33035 = arguments.length;
switch (G__33035) {
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
var G__33094 = arguments.length;
switch (G__33094) {
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
var G__33097 = arguments.length;
switch (G__33097) {
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
var G__33107 = document;
var G__33108 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33107,G__33108);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33111 = shadow.dom.dom_node(parent);
var G__33112 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33111,G__33112);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33115 = shadow.dom.dom_node(el);
var G__33116 = cls;
return goog.dom.classlist.add(G__33115,G__33116);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33118 = shadow.dom.dom_node(el);
var G__33119 = cls;
return goog.dom.classlist.remove(G__33118,G__33119);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
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
var G__33125 = shadow.dom.dom_node(el);
var G__33126 = cls;
return goog.dom.classlist.toggle(G__33125,G__33126);
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
}catch (e33132){if((e33132 instanceof Object)){
var e = e33132;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33132;

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
var seq__33141 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33142 = null;
var count__33143 = (0);
var i__33144 = (0);
while(true){
if((i__33144 < count__33143)){
var el = chunk__33142.cljs$core$IIndexed$_nth$arity$2(null,i__33144);
var handler_33801__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el))
;
var G__33156_33803 = el;
var G__33157_33804 = cljs.core.name(ev);
var G__33158_33805 = handler_33801__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33156_33803,G__33157_33804,G__33158_33805) : shadow.dom.dom_listen.call(null,G__33156_33803,G__33157_33804,G__33158_33805));


var G__33806 = seq__33141;
var G__33807 = chunk__33142;
var G__33808 = count__33143;
var G__33809 = (i__33144 + (1));
seq__33141 = G__33806;
chunk__33142 = G__33807;
count__33143 = G__33808;
i__33144 = G__33809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33141);
if(temp__5735__auto__){
var seq__33141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33141__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33141__$1);
var G__33812 = cljs.core.chunk_rest(seq__33141__$1);
var G__33813 = c__4550__auto__;
var G__33814 = cljs.core.count(c__4550__auto__);
var G__33815 = (0);
seq__33141 = G__33812;
chunk__33142 = G__33813;
count__33143 = G__33814;
i__33144 = G__33815;
continue;
} else {
var el = cljs.core.first(seq__33141__$1);
var handler_33816__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__))
;
var G__33167_33817 = el;
var G__33168_33818 = cljs.core.name(ev);
var G__33169_33819 = handler_33816__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33167_33817,G__33168_33818,G__33169_33819) : shadow.dom.dom_listen.call(null,G__33167_33817,G__33168_33818,G__33169_33819));


var G__33820 = cljs.core.next(seq__33141__$1);
var G__33821 = null;
var G__33822 = (0);
var G__33823 = (0);
seq__33141 = G__33820;
chunk__33142 = G__33821;
count__33143 = G__33822;
i__33144 = G__33823;
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
var G__33171 = arguments.length;
switch (G__33171) {
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
var G__33195 = shadow.dom.dom_node(el);
var G__33196 = cljs.core.name(ev);
var G__33197 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33195,G__33196,G__33197) : shadow.dom.dom_listen.call(null,G__33195,G__33196,G__33197));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33198 = shadow.dom.dom_node(el);
var G__33199 = cljs.core.name(ev);
var G__33200 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33198,G__33199,G__33200) : shadow.dom.dom_listen_remove.call(null,G__33198,G__33199,G__33200));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33201 = cljs.core.seq(events);
var chunk__33202 = null;
var count__33203 = (0);
var i__33204 = (0);
while(true){
if((i__33204 < count__33203)){
var vec__33212 = chunk__33202.cljs$core$IIndexed$_nth$arity$2(null,i__33204);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33212,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33829 = seq__33201;
var G__33830 = chunk__33202;
var G__33831 = count__33203;
var G__33832 = (i__33204 + (1));
seq__33201 = G__33829;
chunk__33202 = G__33830;
count__33203 = G__33831;
i__33204 = G__33832;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33201);
if(temp__5735__auto__){
var seq__33201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33201__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33201__$1);
var G__33833 = cljs.core.chunk_rest(seq__33201__$1);
var G__33834 = c__4550__auto__;
var G__33835 = cljs.core.count(c__4550__auto__);
var G__33836 = (0);
seq__33201 = G__33833;
chunk__33202 = G__33834;
count__33203 = G__33835;
i__33204 = G__33836;
continue;
} else {
var vec__33215 = cljs.core.first(seq__33201__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33837 = cljs.core.next(seq__33201__$1);
var G__33838 = null;
var G__33839 = (0);
var G__33840 = (0);
seq__33201 = G__33837;
chunk__33202 = G__33838;
count__33203 = G__33839;
i__33204 = G__33840;
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
var seq__33218 = cljs.core.seq(styles);
var chunk__33219 = null;
var count__33220 = (0);
var i__33221 = (0);
while(true){
if((i__33221 < count__33220)){
var vec__33235 = chunk__33219.cljs$core$IIndexed$_nth$arity$2(null,i__33221);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33235,(1),null);
var G__33239_33841 = dom;
var G__33240_33842 = cljs.core.name(k);
var G__33241_33843 = (((v == null))?"":v);
goog.style.setStyle(G__33239_33841,G__33240_33842,G__33241_33843);


var G__33844 = seq__33218;
var G__33845 = chunk__33219;
var G__33846 = count__33220;
var G__33847 = (i__33221 + (1));
seq__33218 = G__33844;
chunk__33219 = G__33845;
count__33220 = G__33846;
i__33221 = G__33847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33218);
if(temp__5735__auto__){
var seq__33218__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33218__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33218__$1);
var G__33848 = cljs.core.chunk_rest(seq__33218__$1);
var G__33849 = c__4550__auto__;
var G__33850 = cljs.core.count(c__4550__auto__);
var G__33851 = (0);
seq__33218 = G__33848;
chunk__33219 = G__33849;
count__33220 = G__33850;
i__33221 = G__33851;
continue;
} else {
var vec__33246 = cljs.core.first(seq__33218__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(1),null);
var G__33249_33854 = dom;
var G__33250_33855 = cljs.core.name(k);
var G__33251_33856 = (((v == null))?"":v);
goog.style.setStyle(G__33249_33854,G__33250_33855,G__33251_33856);


var G__33857 = cljs.core.next(seq__33218__$1);
var G__33858 = null;
var G__33859 = (0);
var G__33860 = (0);
seq__33218 = G__33857;
chunk__33219 = G__33858;
count__33220 = G__33859;
i__33221 = G__33860;
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
var G__33252_33861 = key;
var G__33252_33862__$1 = (((G__33252_33861 instanceof cljs.core.Keyword))?G__33252_33861.fqn:null);
switch (G__33252_33862__$1) {
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
var ks_33867 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33867,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33867,"aria-");
}
})())){
el.setAttribute(ks_33867,value);
} else {
(el[ks_33867] = value);
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
var G__33254 = shadow.dom.dom_node(el);
var G__33255 = cls;
return goog.dom.classlist.contains(G__33254,G__33255);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33265){
var map__33266 = p__33265;
var map__33266__$1 = (((((!((map__33266 == null))))?(((((map__33266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33266):map__33266);
var props = map__33266__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33269 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33273 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33273,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33273;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33278 = arguments.length;
switch (G__33278) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33341){
var vec__33342 = p__33341;
var seq__33343 = cljs.core.seq(vec__33342);
var first__33344 = cljs.core.first(seq__33343);
var seq__33343__$1 = cljs.core.next(seq__33343);
var nn = first__33344;
var first__33344__$1 = cljs.core.first(seq__33343__$1);
var seq__33343__$2 = cljs.core.next(seq__33343__$1);
var np = first__33344__$1;
var nc = seq__33343__$2;
var node = vec__33342;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33346 = nn;
var G__33347 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33346,G__33347) : create_fn.call(null,G__33346,G__33347));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33349 = nn;
var G__33350 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33349,G__33350) : create_fn.call(null,G__33349,G__33350));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33353 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33353,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33353,(1),null);
var seq__33356_33888 = cljs.core.seq(node_children);
var chunk__33357_33889 = null;
var count__33358_33890 = (0);
var i__33359_33891 = (0);
while(true){
if((i__33359_33891 < count__33358_33890)){
var child_struct_33892 = chunk__33357_33889.cljs$core$IIndexed$_nth$arity$2(null,i__33359_33891);
var children_33893 = shadow.dom.dom_node(child_struct_33892);
if(cljs.core.seq_QMARK_(children_33893)){
var seq__33377_33894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33893));
var chunk__33379_33895 = null;
var count__33380_33896 = (0);
var i__33381_33897 = (0);
while(true){
if((i__33381_33897 < count__33380_33896)){
var child_33898 = chunk__33379_33895.cljs$core$IIndexed$_nth$arity$2(null,i__33381_33897);
if(cljs.core.truth_(child_33898)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33898);


var G__33899 = seq__33377_33894;
var G__33900 = chunk__33379_33895;
var G__33901 = count__33380_33896;
var G__33902 = (i__33381_33897 + (1));
seq__33377_33894 = G__33899;
chunk__33379_33895 = G__33900;
count__33380_33896 = G__33901;
i__33381_33897 = G__33902;
continue;
} else {
var G__33904 = seq__33377_33894;
var G__33905 = chunk__33379_33895;
var G__33906 = count__33380_33896;
var G__33907 = (i__33381_33897 + (1));
seq__33377_33894 = G__33904;
chunk__33379_33895 = G__33905;
count__33380_33896 = G__33906;
i__33381_33897 = G__33907;
continue;
}
} else {
var temp__5735__auto___33909 = cljs.core.seq(seq__33377_33894);
if(temp__5735__auto___33909){
var seq__33377_33910__$1 = temp__5735__auto___33909;
if(cljs.core.chunked_seq_QMARK_(seq__33377_33910__$1)){
var c__4550__auto___33911 = cljs.core.chunk_first(seq__33377_33910__$1);
var G__33913 = cljs.core.chunk_rest(seq__33377_33910__$1);
var G__33914 = c__4550__auto___33911;
var G__33915 = cljs.core.count(c__4550__auto___33911);
var G__33916 = (0);
seq__33377_33894 = G__33913;
chunk__33379_33895 = G__33914;
count__33380_33896 = G__33915;
i__33381_33897 = G__33916;
continue;
} else {
var child_33918 = cljs.core.first(seq__33377_33910__$1);
if(cljs.core.truth_(child_33918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33918);


var G__33920 = cljs.core.next(seq__33377_33910__$1);
var G__33921 = null;
var G__33922 = (0);
var G__33923 = (0);
seq__33377_33894 = G__33920;
chunk__33379_33895 = G__33921;
count__33380_33896 = G__33922;
i__33381_33897 = G__33923;
continue;
} else {
var G__33924 = cljs.core.next(seq__33377_33910__$1);
var G__33925 = null;
var G__33926 = (0);
var G__33927 = (0);
seq__33377_33894 = G__33924;
chunk__33379_33895 = G__33925;
count__33380_33896 = G__33926;
i__33381_33897 = G__33927;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33893);
}


var G__33928 = seq__33356_33888;
var G__33929 = chunk__33357_33889;
var G__33930 = count__33358_33890;
var G__33931 = (i__33359_33891 + (1));
seq__33356_33888 = G__33928;
chunk__33357_33889 = G__33929;
count__33358_33890 = G__33930;
i__33359_33891 = G__33931;
continue;
} else {
var temp__5735__auto___33932 = cljs.core.seq(seq__33356_33888);
if(temp__5735__auto___33932){
var seq__33356_33933__$1 = temp__5735__auto___33932;
if(cljs.core.chunked_seq_QMARK_(seq__33356_33933__$1)){
var c__4550__auto___33934 = cljs.core.chunk_first(seq__33356_33933__$1);
var G__33935 = cljs.core.chunk_rest(seq__33356_33933__$1);
var G__33936 = c__4550__auto___33934;
var G__33937 = cljs.core.count(c__4550__auto___33934);
var G__33938 = (0);
seq__33356_33888 = G__33935;
chunk__33357_33889 = G__33936;
count__33358_33890 = G__33937;
i__33359_33891 = G__33938;
continue;
} else {
var child_struct_33939 = cljs.core.first(seq__33356_33933__$1);
var children_33940 = shadow.dom.dom_node(child_struct_33939);
if(cljs.core.seq_QMARK_(children_33940)){
var seq__33385_33941 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33940));
var chunk__33387_33942 = null;
var count__33388_33943 = (0);
var i__33389_33944 = (0);
while(true){
if((i__33389_33944 < count__33388_33943)){
var child_33945 = chunk__33387_33942.cljs$core$IIndexed$_nth$arity$2(null,i__33389_33944);
if(cljs.core.truth_(child_33945)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33945);


var G__33946 = seq__33385_33941;
var G__33947 = chunk__33387_33942;
var G__33948 = count__33388_33943;
var G__33949 = (i__33389_33944 + (1));
seq__33385_33941 = G__33946;
chunk__33387_33942 = G__33947;
count__33388_33943 = G__33948;
i__33389_33944 = G__33949;
continue;
} else {
var G__33950 = seq__33385_33941;
var G__33951 = chunk__33387_33942;
var G__33952 = count__33388_33943;
var G__33953 = (i__33389_33944 + (1));
seq__33385_33941 = G__33950;
chunk__33387_33942 = G__33951;
count__33388_33943 = G__33952;
i__33389_33944 = G__33953;
continue;
}
} else {
var temp__5735__auto___33954__$1 = cljs.core.seq(seq__33385_33941);
if(temp__5735__auto___33954__$1){
var seq__33385_33955__$1 = temp__5735__auto___33954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33385_33955__$1)){
var c__4550__auto___33956 = cljs.core.chunk_first(seq__33385_33955__$1);
var G__33957 = cljs.core.chunk_rest(seq__33385_33955__$1);
var G__33958 = c__4550__auto___33956;
var G__33959 = cljs.core.count(c__4550__auto___33956);
var G__33960 = (0);
seq__33385_33941 = G__33957;
chunk__33387_33942 = G__33958;
count__33388_33943 = G__33959;
i__33389_33944 = G__33960;
continue;
} else {
var child_33961 = cljs.core.first(seq__33385_33955__$1);
if(cljs.core.truth_(child_33961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33961);


var G__33962 = cljs.core.next(seq__33385_33955__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33385_33941 = G__33962;
chunk__33387_33942 = G__33963;
count__33388_33943 = G__33964;
i__33389_33944 = G__33965;
continue;
} else {
var G__33966 = cljs.core.next(seq__33385_33955__$1);
var G__33967 = null;
var G__33968 = (0);
var G__33969 = (0);
seq__33385_33941 = G__33966;
chunk__33387_33942 = G__33967;
count__33388_33943 = G__33968;
i__33389_33944 = G__33969;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33940);
}


var G__33970 = cljs.core.next(seq__33356_33933__$1);
var G__33971 = null;
var G__33972 = (0);
var G__33973 = (0);
seq__33356_33888 = G__33970;
chunk__33357_33889 = G__33971;
count__33358_33890 = G__33972;
i__33359_33891 = G__33973;
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
var G__33415 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33415);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33421 = cljs.core.seq(node);
var chunk__33422 = null;
var count__33423 = (0);
var i__33424 = (0);
while(true){
if((i__33424 < count__33423)){
var n = chunk__33422.cljs$core$IIndexed$_nth$arity$2(null,i__33424);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33977 = seq__33421;
var G__33978 = chunk__33422;
var G__33979 = count__33423;
var G__33980 = (i__33424 + (1));
seq__33421 = G__33977;
chunk__33422 = G__33978;
count__33423 = G__33979;
i__33424 = G__33980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33421);
if(temp__5735__auto__){
var seq__33421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33421__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33421__$1);
var G__33985 = cljs.core.chunk_rest(seq__33421__$1);
var G__33986 = c__4550__auto__;
var G__33987 = cljs.core.count(c__4550__auto__);
var G__33988 = (0);
seq__33421 = G__33985;
chunk__33422 = G__33986;
count__33423 = G__33987;
i__33424 = G__33988;
continue;
} else {
var n = cljs.core.first(seq__33421__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33989 = cljs.core.next(seq__33421__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33421 = G__33989;
chunk__33422 = G__33990;
count__33423 = G__33991;
i__33424 = G__33992;
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
var G__33428 = shadow.dom.dom_node(new$);
var G__33429 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33428,G__33429);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33431 = arguments.length;
switch (G__33431) {
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
var G__33433 = arguments.length;
switch (G__33433) {
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
var G__33456 = arguments.length;
switch (G__33456) {
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
var len__4730__auto___34000 = arguments.length;
var i__4731__auto___34001 = (0);
while(true){
if((i__4731__auto___34001 < len__4730__auto___34000)){
args__4736__auto__.push((arguments[i__4731__auto___34001]));

var G__34002 = (i__4731__auto___34001 + (1));
i__4731__auto___34001 = G__34002;
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
var seq__33458_34004 = cljs.core.seq(nodes);
var chunk__33459_34005 = null;
var count__33460_34006 = (0);
var i__33461_34007 = (0);
while(true){
if((i__33461_34007 < count__33460_34006)){
var node_34008 = chunk__33459_34005.cljs$core$IIndexed$_nth$arity$2(null,i__33461_34007);
fragment.appendChild(shadow.dom._to_dom(node_34008));


var G__34009 = seq__33458_34004;
var G__34010 = chunk__33459_34005;
var G__34011 = count__33460_34006;
var G__34012 = (i__33461_34007 + (1));
seq__33458_34004 = G__34009;
chunk__33459_34005 = G__34010;
count__33460_34006 = G__34011;
i__33461_34007 = G__34012;
continue;
} else {
var temp__5735__auto___34013 = cljs.core.seq(seq__33458_34004);
if(temp__5735__auto___34013){
var seq__33458_34015__$1 = temp__5735__auto___34013;
if(cljs.core.chunked_seq_QMARK_(seq__33458_34015__$1)){
var c__4550__auto___34016 = cljs.core.chunk_first(seq__33458_34015__$1);
var G__34017 = cljs.core.chunk_rest(seq__33458_34015__$1);
var G__34018 = c__4550__auto___34016;
var G__34019 = cljs.core.count(c__4550__auto___34016);
var G__34020 = (0);
seq__33458_34004 = G__34017;
chunk__33459_34005 = G__34018;
count__33460_34006 = G__34019;
i__33461_34007 = G__34020;
continue;
} else {
var node_34021 = cljs.core.first(seq__33458_34015__$1);
fragment.appendChild(shadow.dom._to_dom(node_34021));


var G__34023 = cljs.core.next(seq__33458_34015__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__33458_34004 = G__34023;
chunk__33459_34005 = G__34024;
count__33460_34006 = G__34025;
i__33461_34007 = G__34026;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33457){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33457));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33484_34033 = cljs.core.seq(scripts);
var chunk__33485_34034 = null;
var count__33486_34035 = (0);
var i__33487_34036 = (0);
while(true){
if((i__33487_34036 < count__33486_34035)){
var vec__33497_34038 = chunk__33485_34034.cljs$core$IIndexed$_nth$arity$2(null,i__33487_34036);
var script_tag_34039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497_34038,(0),null);
var script_body_34040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497_34038,(1),null);
eval(script_body_34040);


var G__34042 = seq__33484_34033;
var G__34043 = chunk__33485_34034;
var G__34044 = count__33486_34035;
var G__34045 = (i__33487_34036 + (1));
seq__33484_34033 = G__34042;
chunk__33485_34034 = G__34043;
count__33486_34035 = G__34044;
i__33487_34036 = G__34045;
continue;
} else {
var temp__5735__auto___34046 = cljs.core.seq(seq__33484_34033);
if(temp__5735__auto___34046){
var seq__33484_34047__$1 = temp__5735__auto___34046;
if(cljs.core.chunked_seq_QMARK_(seq__33484_34047__$1)){
var c__4550__auto___34048 = cljs.core.chunk_first(seq__33484_34047__$1);
var G__34049 = cljs.core.chunk_rest(seq__33484_34047__$1);
var G__34050 = c__4550__auto___34048;
var G__34051 = cljs.core.count(c__4550__auto___34048);
var G__34052 = (0);
seq__33484_34033 = G__34049;
chunk__33485_34034 = G__34050;
count__33486_34035 = G__34051;
i__33487_34036 = G__34052;
continue;
} else {
var vec__33503_34054 = cljs.core.first(seq__33484_34047__$1);
var script_tag_34055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503_34054,(0),null);
var script_body_34056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503_34054,(1),null);
eval(script_body_34056);


var G__34058 = cljs.core.next(seq__33484_34047__$1);
var G__34059 = null;
var G__34060 = (0);
var G__34061 = (0);
seq__33484_34033 = G__34058;
chunk__33485_34034 = G__34059;
count__33486_34035 = G__34060;
i__33487_34036 = G__34061;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33507){
var vec__33509 = p__33507;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(1),null);
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
var G__33516 = shadow.dom.dom_node(el);
var G__33517 = cls;
return goog.dom.getAncestorByClass(G__33516,G__33517);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33521 = arguments.length;
switch (G__33521) {
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
var G__33523 = shadow.dom.dom_node(el);
var G__33524 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33523,G__33524);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33527 = shadow.dom.dom_node(el);
var G__33528 = cljs.core.name(tag);
var G__33529 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33527,G__33528,G__33529);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33532 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33532);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33534 = shadow.dom.dom_node(dom);
var G__33535 = value;
return goog.dom.forms.setValue(G__33534,G__33535);
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
var seq__33538 = cljs.core.seq(style_keys);
var chunk__33539 = null;
var count__33540 = (0);
var i__33541 = (0);
while(true){
if((i__33541 < count__33540)){
var it = chunk__33539.cljs$core$IIndexed$_nth$arity$2(null,i__33541);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34071 = seq__33538;
var G__34072 = chunk__33539;
var G__34073 = count__33540;
var G__34074 = (i__33541 + (1));
seq__33538 = G__34071;
chunk__33539 = G__34072;
count__33540 = G__34073;
i__33541 = G__34074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33538);
if(temp__5735__auto__){
var seq__33538__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33538__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33538__$1);
var G__34076 = cljs.core.chunk_rest(seq__33538__$1);
var G__34077 = c__4550__auto__;
var G__34078 = cljs.core.count(c__4550__auto__);
var G__34079 = (0);
seq__33538 = G__34076;
chunk__33539 = G__34077;
count__33540 = G__34078;
i__33541 = G__34079;
continue;
} else {
var it = cljs.core.first(seq__33538__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34080 = cljs.core.next(seq__33538__$1);
var G__34081 = null;
var G__34082 = (0);
var G__34083 = (0);
seq__33538 = G__34080;
chunk__33539 = G__34081;
count__33540 = G__34082;
i__33541 = G__34083;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33543,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33550 = k33543;
var G__33550__$1 = (((G__33550 instanceof cljs.core.Keyword))?G__33550.fqn:null);
switch (G__33550__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33543,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33554){
var vec__33555 = p__33554;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33542){
var self__ = this;
var G__33542__$1 = this;
return (new cljs.core.RecordIter((0),G__33542__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__33558 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33558(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33544,other33545){
var self__ = this;
var this33544__$1 = this;
return (((!((other33545 == null)))) && ((this33544__$1.constructor === other33545.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33544__$1.x,other33545.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33544__$1.y,other33545.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33544__$1.__extmap,other33545.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33542){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33559 = cljs.core.keyword_identical_QMARK_;
var expr__33560 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33562 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33563 = expr__33560;
return (pred__33559.cljs$core$IFn$_invoke$arity$2 ? pred__33559.cljs$core$IFn$_invoke$arity$2(G__33562,G__33563) : pred__33559.call(null,G__33562,G__33563));
})())){
return (new shadow.dom.Coordinate(G__33542,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33564 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33565 = expr__33560;
return (pred__33559.cljs$core$IFn$_invoke$arity$2 ? pred__33559.cljs$core$IFn$_invoke$arity$2(G__33564,G__33565) : pred__33559.call(null,G__33564,G__33565));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33542,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33542),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33542){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33542,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33546){
var extmap__4424__auto__ = (function (){var G__33567 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33546,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33546)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33567);
} else {
return G__33567;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33546),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33546),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33571 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33571);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33575 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33575);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33579 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33579);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33583,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33589 = k33583;
var G__33589__$1 = (((G__33589 instanceof cljs.core.Keyword))?G__33589.fqn:null);
switch (G__33589__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33583,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33593){
var vec__33594 = p__33593;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33594,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33594,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33582){
var self__ = this;
var G__33582__$1 = this;
return (new cljs.core.RecordIter((0),G__33582__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__33608 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33608(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33584,other33585){
var self__ = this;
var this33584__$1 = this;
return (((!((other33585 == null)))) && ((this33584__$1.constructor === other33585.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33584__$1.w,other33585.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33584__$1.h,other33585.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33584__$1.__extmap,other33585.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33582){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33627 = cljs.core.keyword_identical_QMARK_;
var expr__33628 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33630 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33631 = expr__33628;
return (pred__33627.cljs$core$IFn$_invoke$arity$2 ? pred__33627.cljs$core$IFn$_invoke$arity$2(G__33630,G__33631) : pred__33627.call(null,G__33630,G__33631));
})())){
return (new shadow.dom.Size(G__33582,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33633 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33634 = expr__33628;
return (pred__33627.cljs$core$IFn$_invoke$arity$2 ? pred__33627.cljs$core$IFn$_invoke$arity$2(G__33633,G__33634) : pred__33627.call(null,G__33633,G__33634));
})())){
return (new shadow.dom.Size(self__.w,G__33582,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33582),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33582){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33582,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33586){
var extmap__4424__auto__ = (function (){var G__33637 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33586,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33637);
} else {
return G__33637;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33586),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33586),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33638 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33638);
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
var G__34147 = (i + (1));
var G__34148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34147;
ret = G__34148;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33645){
var vec__33646 = p__33645;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33650 = arguments.length;
switch (G__33650) {
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
var G__33651_34161 = new_node;
var G__33652_34162 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33651_34161,G__33652_34162);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33653_34163 = new_node;
var G__33654_34164 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33653_34163,G__33654_34164);

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
var G__34165 = ps;
var G__34166 = (i + (1));
el__$1 = G__34165;
i = G__34166;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33655 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33655);
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
var G__33656 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33656);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33658 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33658);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33666 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33669_34170 = cljs.core.seq(props);
var chunk__33670_34171 = null;
var count__33671_34172 = (0);
var i__33672_34173 = (0);
while(true){
if((i__33672_34173 < count__33671_34172)){
var vec__33679_34176 = chunk__33670_34171.cljs$core$IIndexed$_nth$arity$2(null,i__33672_34173);
var k_34177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679_34176,(0),null);
var v_34178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679_34176,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34177);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34177),v_34178);


var G__34183 = seq__33669_34170;
var G__34184 = chunk__33670_34171;
var G__34185 = count__33671_34172;
var G__34186 = (i__33672_34173 + (1));
seq__33669_34170 = G__34183;
chunk__33670_34171 = G__34184;
count__33671_34172 = G__34185;
i__33672_34173 = G__34186;
continue;
} else {
var temp__5735__auto___34187 = cljs.core.seq(seq__33669_34170);
if(temp__5735__auto___34187){
var seq__33669_34188__$1 = temp__5735__auto___34187;
if(cljs.core.chunked_seq_QMARK_(seq__33669_34188__$1)){
var c__4550__auto___34189 = cljs.core.chunk_first(seq__33669_34188__$1);
var G__34190 = cljs.core.chunk_rest(seq__33669_34188__$1);
var G__34191 = c__4550__auto___34189;
var G__34192 = cljs.core.count(c__4550__auto___34189);
var G__34193 = (0);
seq__33669_34170 = G__34190;
chunk__33670_34171 = G__34191;
count__33671_34172 = G__34192;
i__33672_34173 = G__34193;
continue;
} else {
var vec__33682_34194 = cljs.core.first(seq__33669_34188__$1);
var k_34195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682_34194,(0),null);
var v_34196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682_34194,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34195);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34195),v_34196);


var G__34198 = cljs.core.next(seq__33669_34188__$1);
var G__34199 = null;
var G__34200 = (0);
var G__34201 = (0);
seq__33669_34170 = G__34198;
chunk__33670_34171 = G__34199;
count__33671_34172 = G__34200;
i__33672_34173 = G__34201;
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
var vec__33686 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33686,(1),null);
var seq__33689_34203 = cljs.core.seq(node_children);
var chunk__33691_34204 = null;
var count__33692_34205 = (0);
var i__33693_34206 = (0);
while(true){
if((i__33693_34206 < count__33692_34205)){
var child_struct_34208 = chunk__33691_34204.cljs$core$IIndexed$_nth$arity$2(null,i__33693_34206);
if((!((child_struct_34208 == null)))){
if(typeof child_struct_34208 === 'string'){
var text_34209 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34209),child_struct_34208].join(''));
} else {
var children_34211 = shadow.dom.svg_node(child_struct_34208);
if(cljs.core.seq_QMARK_(children_34211)){
var seq__33716_34214 = cljs.core.seq(children_34211);
var chunk__33718_34215 = null;
var count__33719_34216 = (0);
var i__33720_34217 = (0);
while(true){
if((i__33720_34217 < count__33719_34216)){
var child_34218 = chunk__33718_34215.cljs$core$IIndexed$_nth$arity$2(null,i__33720_34217);
if(cljs.core.truth_(child_34218)){
node.appendChild(child_34218);


var G__34219 = seq__33716_34214;
var G__34220 = chunk__33718_34215;
var G__34221 = count__33719_34216;
var G__34222 = (i__33720_34217 + (1));
seq__33716_34214 = G__34219;
chunk__33718_34215 = G__34220;
count__33719_34216 = G__34221;
i__33720_34217 = G__34222;
continue;
} else {
var G__34223 = seq__33716_34214;
var G__34224 = chunk__33718_34215;
var G__34225 = count__33719_34216;
var G__34226 = (i__33720_34217 + (1));
seq__33716_34214 = G__34223;
chunk__33718_34215 = G__34224;
count__33719_34216 = G__34225;
i__33720_34217 = G__34226;
continue;
}
} else {
var temp__5735__auto___34227 = cljs.core.seq(seq__33716_34214);
if(temp__5735__auto___34227){
var seq__33716_34228__$1 = temp__5735__auto___34227;
if(cljs.core.chunked_seq_QMARK_(seq__33716_34228__$1)){
var c__4550__auto___34229 = cljs.core.chunk_first(seq__33716_34228__$1);
var G__34230 = cljs.core.chunk_rest(seq__33716_34228__$1);
var G__34231 = c__4550__auto___34229;
var G__34232 = cljs.core.count(c__4550__auto___34229);
var G__34233 = (0);
seq__33716_34214 = G__34230;
chunk__33718_34215 = G__34231;
count__33719_34216 = G__34232;
i__33720_34217 = G__34233;
continue;
} else {
var child_34234 = cljs.core.first(seq__33716_34228__$1);
if(cljs.core.truth_(child_34234)){
node.appendChild(child_34234);


var G__34235 = cljs.core.next(seq__33716_34228__$1);
var G__34236 = null;
var G__34237 = (0);
var G__34238 = (0);
seq__33716_34214 = G__34235;
chunk__33718_34215 = G__34236;
count__33719_34216 = G__34237;
i__33720_34217 = G__34238;
continue;
} else {
var G__34239 = cljs.core.next(seq__33716_34228__$1);
var G__34240 = null;
var G__34241 = (0);
var G__34242 = (0);
seq__33716_34214 = G__34239;
chunk__33718_34215 = G__34240;
count__33719_34216 = G__34241;
i__33720_34217 = G__34242;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34211);
}
}


var G__34243 = seq__33689_34203;
var G__34244 = chunk__33691_34204;
var G__34245 = count__33692_34205;
var G__34246 = (i__33693_34206 + (1));
seq__33689_34203 = G__34243;
chunk__33691_34204 = G__34244;
count__33692_34205 = G__34245;
i__33693_34206 = G__34246;
continue;
} else {
var G__34247 = seq__33689_34203;
var G__34248 = chunk__33691_34204;
var G__34249 = count__33692_34205;
var G__34250 = (i__33693_34206 + (1));
seq__33689_34203 = G__34247;
chunk__33691_34204 = G__34248;
count__33692_34205 = G__34249;
i__33693_34206 = G__34250;
continue;
}
} else {
var temp__5735__auto___34252 = cljs.core.seq(seq__33689_34203);
if(temp__5735__auto___34252){
var seq__33689_34253__$1 = temp__5735__auto___34252;
if(cljs.core.chunked_seq_QMARK_(seq__33689_34253__$1)){
var c__4550__auto___34255 = cljs.core.chunk_first(seq__33689_34253__$1);
var G__34256 = cljs.core.chunk_rest(seq__33689_34253__$1);
var G__34257 = c__4550__auto___34255;
var G__34258 = cljs.core.count(c__4550__auto___34255);
var G__34259 = (0);
seq__33689_34203 = G__34256;
chunk__33691_34204 = G__34257;
count__33692_34205 = G__34258;
i__33693_34206 = G__34259;
continue;
} else {
var child_struct_34260 = cljs.core.first(seq__33689_34253__$1);
if((!((child_struct_34260 == null)))){
if(typeof child_struct_34260 === 'string'){
var text_34262 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34262),child_struct_34260].join(''));
} else {
var children_34263 = shadow.dom.svg_node(child_struct_34260);
if(cljs.core.seq_QMARK_(children_34263)){
var seq__33729_34264 = cljs.core.seq(children_34263);
var chunk__33731_34265 = null;
var count__33732_34266 = (0);
var i__33733_34267 = (0);
while(true){
if((i__33733_34267 < count__33732_34266)){
var child_34268 = chunk__33731_34265.cljs$core$IIndexed$_nth$arity$2(null,i__33733_34267);
if(cljs.core.truth_(child_34268)){
node.appendChild(child_34268);


var G__34300 = seq__33729_34264;
var G__34301 = chunk__33731_34265;
var G__34302 = count__33732_34266;
var G__34303 = (i__33733_34267 + (1));
seq__33729_34264 = G__34300;
chunk__33731_34265 = G__34301;
count__33732_34266 = G__34302;
i__33733_34267 = G__34303;
continue;
} else {
var G__34304 = seq__33729_34264;
var G__34305 = chunk__33731_34265;
var G__34306 = count__33732_34266;
var G__34307 = (i__33733_34267 + (1));
seq__33729_34264 = G__34304;
chunk__33731_34265 = G__34305;
count__33732_34266 = G__34306;
i__33733_34267 = G__34307;
continue;
}
} else {
var temp__5735__auto___34308__$1 = cljs.core.seq(seq__33729_34264);
if(temp__5735__auto___34308__$1){
var seq__33729_34309__$1 = temp__5735__auto___34308__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33729_34309__$1)){
var c__4550__auto___34310 = cljs.core.chunk_first(seq__33729_34309__$1);
var G__34311 = cljs.core.chunk_rest(seq__33729_34309__$1);
var G__34312 = c__4550__auto___34310;
var G__34313 = cljs.core.count(c__4550__auto___34310);
var G__34314 = (0);
seq__33729_34264 = G__34311;
chunk__33731_34265 = G__34312;
count__33732_34266 = G__34313;
i__33733_34267 = G__34314;
continue;
} else {
var child_34315 = cljs.core.first(seq__33729_34309__$1);
if(cljs.core.truth_(child_34315)){
node.appendChild(child_34315);


var G__34316 = cljs.core.next(seq__33729_34309__$1);
var G__34317 = null;
var G__34318 = (0);
var G__34319 = (0);
seq__33729_34264 = G__34316;
chunk__33731_34265 = G__34317;
count__33732_34266 = G__34318;
i__33733_34267 = G__34319;
continue;
} else {
var G__34320 = cljs.core.next(seq__33729_34309__$1);
var G__34321 = null;
var G__34322 = (0);
var G__34323 = (0);
seq__33729_34264 = G__34320;
chunk__33731_34265 = G__34321;
count__33732_34266 = G__34322;
i__33733_34267 = G__34323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34263);
}
}


var G__34324 = cljs.core.next(seq__33689_34253__$1);
var G__34325 = null;
var G__34326 = (0);
var G__34327 = (0);
seq__33689_34203 = G__34324;
chunk__33691_34204 = G__34325;
count__33692_34205 = G__34326;
i__33693_34206 = G__34327;
continue;
} else {
var G__34328 = cljs.core.next(seq__33689_34253__$1);
var G__34329 = null;
var G__34330 = (0);
var G__34331 = (0);
seq__33689_34203 = G__34328;
chunk__33691_34204 = G__34329;
count__33692_34205 = G__34330;
i__33693_34206 = G__34331;
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

var G__33740_34337 = shadow.dom._to_svg;
var G__33741_34338 = "string";
var G__33742_34339 = ((function (G__33740_34337,G__33741_34338){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33740_34337,G__33741_34338))
;
goog.object.set(G__33740_34337,G__33741_34338,G__33742_34339);

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

var G__33745_34342 = shadow.dom._to_svg;
var G__33746_34343 = "null";
var G__33747_34344 = ((function (G__33745_34342,G__33746_34343){
return (function (_){
return null;
});})(G__33745_34342,G__33746_34343))
;
goog.object.set(G__33745_34342,G__33746_34343,G__33747_34344);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34345 = arguments.length;
var i__4731__auto___34346 = (0);
while(true){
if((i__4731__auto___34346 < len__4730__auto___34345)){
args__4736__auto__.push((arguments[i__4731__auto___34346]));

var G__34347 = (i__4731__auto___34346 + (1));
i__4731__auto___34346 = G__34347;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq33749){
var G__33750 = cljs.core.first(seq33749);
var seq33749__$1 = cljs.core.next(seq33749);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33750,seq33749__$1);
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
var G__33752 = arguments.length;
switch (G__33752) {
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
var G__33755_34351 = shadow.dom.dom_node(el);
var G__33756_34352 = cljs.core.name(event);
var G__33757_34353 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33755_34351,G__33756_34352,G__33757_34353) : shadow.dom.dom_listen.call(null,G__33755_34351,G__33756_34352,G__33757_34353));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30812__auto___34354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___34354,buf,chan,event_fn){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___34354,buf,chan,event_fn){
return (function (state_33762){
var state_val_33763 = (state_33762[(1)]);
if((state_val_33763 === (1))){
var state_33762__$1 = state_33762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33762__$1,(2),once_or_cleanup);
} else {
if((state_val_33763 === (2))){
var inst_33759 = (state_33762[(2)]);
var inst_33760 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33762__$1 = (function (){var statearr_33764 = state_33762;
(statearr_33764[(7)] = inst_33759);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33762__$1,inst_33760);
} else {
return null;
}
}
});})(c__30812__auto___34354,buf,chan,event_fn))
;
return ((function (switch__30584__auto__,c__30812__auto___34354,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30585__auto__ = null;
var shadow$dom$state_machine__30585__auto____0 = (function (){
var statearr_33765 = [null,null,null,null,null,null,null,null];
(statearr_33765[(0)] = shadow$dom$state_machine__30585__auto__);

(statearr_33765[(1)] = (1));

return statearr_33765;
});
var shadow$dom$state_machine__30585__auto____1 = (function (state_33762){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_33762);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e33766){if((e33766 instanceof Object)){
var ex__30588__auto__ = e33766;
var statearr_33767_34355 = state_33762;
(statearr_33767_34355[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34356 = state_33762;
state_33762 = G__34356;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
shadow$dom$state_machine__30585__auto__ = function(state_33762){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30585__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30585__auto____1.call(this,state_33762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30585__auto____0;
shadow$dom$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30585__auto____1;
return shadow$dom$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___34354,buf,chan,event_fn))
})();
var state__30814__auto__ = (function (){var statearr_33769 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_33769[(6)] = c__30812__auto___34354);

return statearr_33769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___34354,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
