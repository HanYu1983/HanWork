// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2945 = arguments.length;
switch (G__2945) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async2946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2946 = (function (f,blockable,meta2947){
this.f = f;
this.blockable = blockable;
this.meta2947 = meta2947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2948,meta2947__$1){
var self__ = this;
var _2948__$1 = this;
return (new cljs.core.async.t_cljs$core$async2946(self__.f,self__.blockable,meta2947__$1));
});

cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2948){
var self__ = this;
var _2948__$1 = this;
return self__.meta2947;
});

cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async2946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async2946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2947","meta2947",-1568633633,null)], null);
});

cljs.core.async.t_cljs$core$async2946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2946";

cljs.core.async.t_cljs$core$async2946.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2946");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2946.
 */
cljs.core.async.__GT_t_cljs$core$async2946 = (function cljs$core$async$__GT_t_cljs$core$async2946(f__$1,blockable__$1,meta2947){
return (new cljs.core.async.t_cljs$core$async2946(f__$1,blockable__$1,meta2947));
});

}

return (new cljs.core.async.t_cljs$core$async2946(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__2952 = arguments.length;
switch (G__2952) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__2955 = arguments.length;
switch (G__2955) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__2958 = arguments.length;
switch (G__2958) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2960 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2960);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_2960,ret){
return (function (){
return fn1.call(null,val_2960);
});})(val_2960,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__2962 = arguments.length;
switch (G__2962) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___2964 = n;
var x_2965 = (0);
while(true){
if((x_2965 < n__4376__auto___2964)){
(a[x_2965] = (0));

var G__2966 = (x_2965 + (1));
x_2965 = G__2966;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__2967 = (i + (1));
i = G__2967;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async2968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2968 = (function (flag,meta2969){
this.flag = flag;
this.meta2969 = meta2969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_2970,meta2969__$1){
var self__ = this;
var _2970__$1 = this;
return (new cljs.core.async.t_cljs$core$async2968(self__.flag,meta2969__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_2970){
var self__ = this;
var _2970__$1 = this;
return self__.meta2969;
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2969","meta2969",2013054203,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async2968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2968";

cljs.core.async.t_cljs$core$async2968.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2968");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2968.
 */
cljs.core.async.__GT_t_cljs$core$async2968 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2968(flag__$1,meta2969){
return (new cljs.core.async.t_cljs$core$async2968(flag__$1,meta2969));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async2968(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async2971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2971 = (function (flag,cb,meta2972){
this.flag = flag;
this.cb = cb;
this.meta2972 = meta2972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2973,meta2972__$1){
var self__ = this;
var _2973__$1 = this;
return (new cljs.core.async.t_cljs$core$async2971(self__.flag,self__.cb,meta2972__$1));
});

cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2973){
var self__ = this;
var _2973__$1 = this;
return self__.meta2972;
});

cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async2971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2972","meta2972",1775884542,null)], null);
});

cljs.core.async.t_cljs$core$async2971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2971";

cljs.core.async.t_cljs$core$async2971.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2971");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2971.
 */
cljs.core.async.__GT_t_cljs$core$async2971 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2971(flag__$1,cb__$1,meta2972){
return (new cljs.core.async.t_cljs$core$async2971(flag__$1,cb__$1,meta2972));
});

}

return (new cljs.core.async.t_cljs$core$async2971(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2974_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2974_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2975_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2975_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2976 = (i + (1));
i = G__2976;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2982 = arguments.length;
var i__4500__auto___2983 = (0);
while(true){
if((i__4500__auto___2983 < len__4499__auto___2982)){
args__4502__auto__.push((arguments[i__4500__auto___2983]));

var G__2984 = (i__4500__auto___2983 + (1));
i__4500__auto___2983 = G__2984;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2979){
var map__2980 = p__2979;
var map__2980__$1 = ((((!((map__2980 == null)))?(((((map__2980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2980):map__2980);
var opts = map__2980__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2977){
var G__2978 = cljs.core.first.call(null,seq2977);
var seq2977__$1 = cljs.core.next.call(null,seq2977);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2978,seq2977__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__2986 = arguments.length;
switch (G__2986) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2885__auto___3032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3032){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3032){
return (function (state_3010){
var state_val_3011 = (state_3010[(1)]);
if((state_val_3011 === (7))){
var inst_3006 = (state_3010[(2)]);
var state_3010__$1 = state_3010;
var statearr_3012_3033 = state_3010__$1;
(statearr_3012_3033[(2)] = inst_3006);

(statearr_3012_3033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (1))){
var state_3010__$1 = state_3010;
var statearr_3013_3034 = state_3010__$1;
(statearr_3013_3034[(2)] = null);

(statearr_3013_3034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (4))){
var inst_2989 = (state_3010[(7)]);
var inst_2989__$1 = (state_3010[(2)]);
var inst_2990 = (inst_2989__$1 == null);
var state_3010__$1 = (function (){var statearr_3014 = state_3010;
(statearr_3014[(7)] = inst_2989__$1);

return statearr_3014;
})();
if(cljs.core.truth_(inst_2990)){
var statearr_3015_3035 = state_3010__$1;
(statearr_3015_3035[(1)] = (5));

} else {
var statearr_3016_3036 = state_3010__$1;
(statearr_3016_3036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (13))){
var state_3010__$1 = state_3010;
var statearr_3017_3037 = state_3010__$1;
(statearr_3017_3037[(2)] = null);

(statearr_3017_3037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (6))){
var inst_2989 = (state_3010[(7)]);
var state_3010__$1 = state_3010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3010__$1,(11),to,inst_2989);
} else {
if((state_val_3011 === (3))){
var inst_3008 = (state_3010[(2)]);
var state_3010__$1 = state_3010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3010__$1,inst_3008);
} else {
if((state_val_3011 === (12))){
var state_3010__$1 = state_3010;
var statearr_3018_3038 = state_3010__$1;
(statearr_3018_3038[(2)] = null);

(statearr_3018_3038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (2))){
var state_3010__$1 = state_3010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3010__$1,(4),from);
} else {
if((state_val_3011 === (11))){
var inst_2999 = (state_3010[(2)]);
var state_3010__$1 = state_3010;
if(cljs.core.truth_(inst_2999)){
var statearr_3019_3039 = state_3010__$1;
(statearr_3019_3039[(1)] = (12));

} else {
var statearr_3020_3040 = state_3010__$1;
(statearr_3020_3040[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (9))){
var state_3010__$1 = state_3010;
var statearr_3021_3041 = state_3010__$1;
(statearr_3021_3041[(2)] = null);

(statearr_3021_3041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (5))){
var state_3010__$1 = state_3010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3022_3042 = state_3010__$1;
(statearr_3022_3042[(1)] = (8));

} else {
var statearr_3023_3043 = state_3010__$1;
(statearr_3023_3043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (14))){
var inst_3004 = (state_3010[(2)]);
var state_3010__$1 = state_3010;
var statearr_3024_3044 = state_3010__$1;
(statearr_3024_3044[(2)] = inst_3004);

(statearr_3024_3044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (10))){
var inst_2996 = (state_3010[(2)]);
var state_3010__$1 = state_3010;
var statearr_3025_3045 = state_3010__$1;
(statearr_3025_3045[(2)] = inst_2996);

(statearr_3025_3045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3011 === (8))){
var inst_2993 = cljs.core.async.close_BANG_.call(null,to);
var state_3010__$1 = state_3010;
var statearr_3026_3046 = state_3010__$1;
(statearr_3026_3046[(2)] = inst_2993);

(statearr_3026_3046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___3032))
;
return ((function (switch__2795__auto__,c__2885__auto___3032){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_3027 = [null,null,null,null,null,null,null,null];
(statearr_3027[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_3027[(1)] = (1));

return statearr_3027;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_3010){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3028){if((e3028 instanceof Object)){
var ex__2799__auto__ = e3028;
var statearr_3029_3047 = state_3010;
(statearr_3029_3047[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3048 = state_3010;
state_3010 = G__3048;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_3010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_3010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3032))
})();
var state__2887__auto__ = (function (){var statearr_3030 = f__2886__auto__.call(null);
(statearr_3030[(6)] = c__2885__auto___3032);

return statearr_3030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3032))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3049){
var vec__3050 = p__3049;
var v = cljs.core.nth.call(null,vec__3050,(0),null);
var p = cljs.core.nth.call(null,vec__3050,(1),null);
var job = vec__3050;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2885__auto___3221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results){
return (function (state_3057){
var state_val_3058 = (state_3057[(1)]);
if((state_val_3058 === (1))){
var state_3057__$1 = state_3057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3057__$1,(2),res,v);
} else {
if((state_val_3058 === (2))){
var inst_3054 = (state_3057[(2)]);
var inst_3055 = cljs.core.async.close_BANG_.call(null,res);
var state_3057__$1 = (function (){var statearr_3059 = state_3057;
(statearr_3059[(7)] = inst_3054);

return statearr_3059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3057__$1,inst_3055);
} else {
return null;
}
}
});})(c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results))
;
return ((function (switch__2795__auto__,c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_3060 = [null,null,null,null,null,null,null,null];
(statearr_3060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__);

(statearr_3060[(1)] = (1));

return statearr_3060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1 = (function (state_3057){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3061){if((e3061 instanceof Object)){
var ex__2799__auto__ = e3061;
var statearr_3062_3222 = state_3057;
(statearr_3062_3222[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3223 = state_3057;
state_3057 = G__3223;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = function(state_3057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1.call(this,state_3057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results))
})();
var state__2887__auto__ = (function (){var statearr_3063 = f__2886__auto__.call(null);
(statearr_3063[(6)] = c__2885__auto___3221);

return statearr_3063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3221,res,vec__3050,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3064){
var vec__3065 = p__3064;
var v = cljs.core.nth.call(null,vec__3065,(0),null);
var p = cljs.core.nth.call(null,vec__3065,(1),null);
var job = vec__3065;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___3224 = n;
var __3225 = (0);
while(true){
if((__3225 < n__4376__auto___3224)){
var G__3068_3226 = type;
var G__3068_3227__$1 = (((G__3068_3226 instanceof cljs.core.Keyword))?G__3068_3226.fqn:null);
switch (G__3068_3227__$1) {
case "compute":
var c__2885__auto___3229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3225,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (__3225,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function (state_3081){
var state_val_3082 = (state_3081[(1)]);
if((state_val_3082 === (1))){
var state_3081__$1 = state_3081;
var statearr_3083_3230 = state_3081__$1;
(statearr_3083_3230[(2)] = null);

(statearr_3083_3230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3082 === (2))){
var state_3081__$1 = state_3081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3081__$1,(4),jobs);
} else {
if((state_val_3082 === (3))){
var inst_3079 = (state_3081[(2)]);
var state_3081__$1 = state_3081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3081__$1,inst_3079);
} else {
if((state_val_3082 === (4))){
var inst_3071 = (state_3081[(2)]);
var inst_3072 = process.call(null,inst_3071);
var state_3081__$1 = state_3081;
if(cljs.core.truth_(inst_3072)){
var statearr_3084_3231 = state_3081__$1;
(statearr_3084_3231[(1)] = (5));

} else {
var statearr_3085_3232 = state_3081__$1;
(statearr_3085_3232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3082 === (5))){
var state_3081__$1 = state_3081;
var statearr_3086_3233 = state_3081__$1;
(statearr_3086_3233[(2)] = null);

(statearr_3086_3233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3082 === (6))){
var state_3081__$1 = state_3081;
var statearr_3087_3234 = state_3081__$1;
(statearr_3087_3234[(2)] = null);

(statearr_3087_3234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3082 === (7))){
var inst_3077 = (state_3081[(2)]);
var state_3081__$1 = state_3081;
var statearr_3088_3235 = state_3081__$1;
(statearr_3088_3235[(2)] = inst_3077);

(statearr_3088_3235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3225,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
;
return ((function (__3225,switch__2795__auto__,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_3089 = [null,null,null,null,null,null,null];
(statearr_3089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__);

(statearr_3089[(1)] = (1));

return statearr_3089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1 = (function (state_3081){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3090){if((e3090 instanceof Object)){
var ex__2799__auto__ = e3090;
var statearr_3091_3236 = state_3081;
(statearr_3091_3236[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3237 = state_3081;
state_3081 = G__3237;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = function(state_3081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1.call(this,state_3081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__;
})()
;})(__3225,switch__2795__auto__,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
})();
var state__2887__auto__ = (function (){var statearr_3092 = f__2886__auto__.call(null);
(statearr_3092[(6)] = c__2885__auto___3229);

return statearr_3092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(__3225,c__2885__auto___3229,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
);


break;
case "async":
var c__2885__auto___3238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3225,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (__3225,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function (state_3105){
var state_val_3106 = (state_3105[(1)]);
if((state_val_3106 === (1))){
var state_3105__$1 = state_3105;
var statearr_3107_3239 = state_3105__$1;
(statearr_3107_3239[(2)] = null);

(statearr_3107_3239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3106 === (2))){
var state_3105__$1 = state_3105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3105__$1,(4),jobs);
} else {
if((state_val_3106 === (3))){
var inst_3103 = (state_3105[(2)]);
var state_3105__$1 = state_3105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3105__$1,inst_3103);
} else {
if((state_val_3106 === (4))){
var inst_3095 = (state_3105[(2)]);
var inst_3096 = async.call(null,inst_3095);
var state_3105__$1 = state_3105;
if(cljs.core.truth_(inst_3096)){
var statearr_3108_3240 = state_3105__$1;
(statearr_3108_3240[(1)] = (5));

} else {
var statearr_3109_3241 = state_3105__$1;
(statearr_3109_3241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3106 === (5))){
var state_3105__$1 = state_3105;
var statearr_3110_3242 = state_3105__$1;
(statearr_3110_3242[(2)] = null);

(statearr_3110_3242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3106 === (6))){
var state_3105__$1 = state_3105;
var statearr_3111_3243 = state_3105__$1;
(statearr_3111_3243[(2)] = null);

(statearr_3111_3243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3106 === (7))){
var inst_3101 = (state_3105[(2)]);
var state_3105__$1 = state_3105;
var statearr_3112_3244 = state_3105__$1;
(statearr_3112_3244[(2)] = inst_3101);

(statearr_3112_3244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3225,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
;
return ((function (__3225,switch__2795__auto__,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_3113 = [null,null,null,null,null,null,null];
(statearr_3113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__);

(statearr_3113[(1)] = (1));

return statearr_3113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1 = (function (state_3105){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3114){if((e3114 instanceof Object)){
var ex__2799__auto__ = e3114;
var statearr_3115_3245 = state_3105;
(statearr_3115_3245[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3246 = state_3105;
state_3105 = G__3246;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = function(state_3105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1.call(this,state_3105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__;
})()
;})(__3225,switch__2795__auto__,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
})();
var state__2887__auto__ = (function (){var statearr_3116 = f__2886__auto__.call(null);
(statearr_3116[(6)] = c__2885__auto___3238);

return statearr_3116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(__3225,c__2885__auto___3238,G__3068_3226,G__3068_3227__$1,n__4376__auto___3224,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3068_3227__$1)].join('')));

}

var G__3247 = (__3225 + (1));
__3225 = G__3247;
continue;
} else {
}
break;
}

var c__2885__auto___3248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3248,jobs,results,process,async){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3248,jobs,results,process,async){
return (function (state_3138){
var state_val_3139 = (state_3138[(1)]);
if((state_val_3139 === (1))){
var state_3138__$1 = state_3138;
var statearr_3140_3249 = state_3138__$1;
(statearr_3140_3249[(2)] = null);

(statearr_3140_3249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (2))){
var state_3138__$1 = state_3138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3138__$1,(4),from);
} else {
if((state_val_3139 === (3))){
var inst_3136 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3138__$1,inst_3136);
} else {
if((state_val_3139 === (4))){
var inst_3119 = (state_3138[(7)]);
var inst_3119__$1 = (state_3138[(2)]);
var inst_3120 = (inst_3119__$1 == null);
var state_3138__$1 = (function (){var statearr_3141 = state_3138;
(statearr_3141[(7)] = inst_3119__$1);

return statearr_3141;
})();
if(cljs.core.truth_(inst_3120)){
var statearr_3142_3250 = state_3138__$1;
(statearr_3142_3250[(1)] = (5));

} else {
var statearr_3143_3251 = state_3138__$1;
(statearr_3143_3251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (5))){
var inst_3122 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3138__$1 = state_3138;
var statearr_3144_3252 = state_3138__$1;
(statearr_3144_3252[(2)] = inst_3122);

(statearr_3144_3252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (6))){
var inst_3119 = (state_3138[(7)]);
var inst_3124 = (state_3138[(8)]);
var inst_3124__$1 = cljs.core.async.chan.call(null,(1));
var inst_3125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3126 = [inst_3119,inst_3124__$1];
var inst_3127 = (new cljs.core.PersistentVector(null,2,(5),inst_3125,inst_3126,null));
var state_3138__$1 = (function (){var statearr_3145 = state_3138;
(statearr_3145[(8)] = inst_3124__$1);

return statearr_3145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3138__$1,(8),jobs,inst_3127);
} else {
if((state_val_3139 === (7))){
var inst_3134 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
var statearr_3146_3253 = state_3138__$1;
(statearr_3146_3253[(2)] = inst_3134);

(statearr_3146_3253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3139 === (8))){
var inst_3124 = (state_3138[(8)]);
var inst_3129 = (state_3138[(2)]);
var state_3138__$1 = (function (){var statearr_3147 = state_3138;
(statearr_3147[(9)] = inst_3129);

return statearr_3147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3138__$1,(9),results,inst_3124);
} else {
if((state_val_3139 === (9))){
var inst_3131 = (state_3138[(2)]);
var state_3138__$1 = (function (){var statearr_3148 = state_3138;
(statearr_3148[(10)] = inst_3131);

return statearr_3148;
})();
var statearr_3149_3254 = state_3138__$1;
(statearr_3149_3254[(2)] = null);

(statearr_3149_3254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___3248,jobs,results,process,async))
;
return ((function (switch__2795__auto__,c__2885__auto___3248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_3150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__);

(statearr_3150[(1)] = (1));

return statearr_3150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1 = (function (state_3138){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3151){if((e3151 instanceof Object)){
var ex__2799__auto__ = e3151;
var statearr_3152_3255 = state_3138;
(statearr_3152_3255[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3256 = state_3138;
state_3138 = G__3256;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = function(state_3138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1.call(this,state_3138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3248,jobs,results,process,async))
})();
var state__2887__auto__ = (function (){var statearr_3153 = f__2886__auto__.call(null);
(statearr_3153[(6)] = c__2885__auto___3248);

return statearr_3153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3248,jobs,results,process,async))
);


var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,jobs,results,process,async){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,jobs,results,process,async){
return (function (state_3191){
var state_val_3192 = (state_3191[(1)]);
if((state_val_3192 === (7))){
var inst_3187 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
var statearr_3193_3257 = state_3191__$1;
(statearr_3193_3257[(2)] = inst_3187);

(statearr_3193_3257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (20))){
var state_3191__$1 = state_3191;
var statearr_3194_3258 = state_3191__$1;
(statearr_3194_3258[(2)] = null);

(statearr_3194_3258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (1))){
var state_3191__$1 = state_3191;
var statearr_3195_3259 = state_3191__$1;
(statearr_3195_3259[(2)] = null);

(statearr_3195_3259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (4))){
var inst_3156 = (state_3191[(7)]);
var inst_3156__$1 = (state_3191[(2)]);
var inst_3157 = (inst_3156__$1 == null);
var state_3191__$1 = (function (){var statearr_3196 = state_3191;
(statearr_3196[(7)] = inst_3156__$1);

return statearr_3196;
})();
if(cljs.core.truth_(inst_3157)){
var statearr_3197_3260 = state_3191__$1;
(statearr_3197_3260[(1)] = (5));

} else {
var statearr_3198_3261 = state_3191__$1;
(statearr_3198_3261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (15))){
var inst_3169 = (state_3191[(8)]);
var state_3191__$1 = state_3191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3191__$1,(18),to,inst_3169);
} else {
if((state_val_3192 === (21))){
var inst_3182 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
var statearr_3199_3262 = state_3191__$1;
(statearr_3199_3262[(2)] = inst_3182);

(statearr_3199_3262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (13))){
var inst_3184 = (state_3191[(2)]);
var state_3191__$1 = (function (){var statearr_3200 = state_3191;
(statearr_3200[(9)] = inst_3184);

return statearr_3200;
})();
var statearr_3201_3263 = state_3191__$1;
(statearr_3201_3263[(2)] = null);

(statearr_3201_3263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (6))){
var inst_3156 = (state_3191[(7)]);
var state_3191__$1 = state_3191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3191__$1,(11),inst_3156);
} else {
if((state_val_3192 === (17))){
var inst_3177 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
if(cljs.core.truth_(inst_3177)){
var statearr_3202_3264 = state_3191__$1;
(statearr_3202_3264[(1)] = (19));

} else {
var statearr_3203_3265 = state_3191__$1;
(statearr_3203_3265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (3))){
var inst_3189 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3191__$1,inst_3189);
} else {
if((state_val_3192 === (12))){
var inst_3166 = (state_3191[(10)]);
var state_3191__$1 = state_3191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3191__$1,(14),inst_3166);
} else {
if((state_val_3192 === (2))){
var state_3191__$1 = state_3191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3191__$1,(4),results);
} else {
if((state_val_3192 === (19))){
var state_3191__$1 = state_3191;
var statearr_3204_3266 = state_3191__$1;
(statearr_3204_3266[(2)] = null);

(statearr_3204_3266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (11))){
var inst_3166 = (state_3191[(2)]);
var state_3191__$1 = (function (){var statearr_3205 = state_3191;
(statearr_3205[(10)] = inst_3166);

return statearr_3205;
})();
var statearr_3206_3267 = state_3191__$1;
(statearr_3206_3267[(2)] = null);

(statearr_3206_3267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (9))){
var state_3191__$1 = state_3191;
var statearr_3207_3268 = state_3191__$1;
(statearr_3207_3268[(2)] = null);

(statearr_3207_3268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (5))){
var state_3191__$1 = state_3191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3208_3269 = state_3191__$1;
(statearr_3208_3269[(1)] = (8));

} else {
var statearr_3209_3270 = state_3191__$1;
(statearr_3209_3270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (14))){
var inst_3169 = (state_3191[(8)]);
var inst_3171 = (state_3191[(11)]);
var inst_3169__$1 = (state_3191[(2)]);
var inst_3170 = (inst_3169__$1 == null);
var inst_3171__$1 = cljs.core.not.call(null,inst_3170);
var state_3191__$1 = (function (){var statearr_3210 = state_3191;
(statearr_3210[(8)] = inst_3169__$1);

(statearr_3210[(11)] = inst_3171__$1);

return statearr_3210;
})();
if(inst_3171__$1){
var statearr_3211_3271 = state_3191__$1;
(statearr_3211_3271[(1)] = (15));

} else {
var statearr_3212_3272 = state_3191__$1;
(statearr_3212_3272[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (16))){
var inst_3171 = (state_3191[(11)]);
var state_3191__$1 = state_3191;
var statearr_3213_3273 = state_3191__$1;
(statearr_3213_3273[(2)] = inst_3171);

(statearr_3213_3273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (10))){
var inst_3163 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
var statearr_3214_3274 = state_3191__$1;
(statearr_3214_3274[(2)] = inst_3163);

(statearr_3214_3274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (18))){
var inst_3174 = (state_3191[(2)]);
var state_3191__$1 = state_3191;
var statearr_3215_3275 = state_3191__$1;
(statearr_3215_3275[(2)] = inst_3174);

(statearr_3215_3275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3192 === (8))){
var inst_3160 = cljs.core.async.close_BANG_.call(null,to);
var state_3191__$1 = state_3191;
var statearr_3216_3276 = state_3191__$1;
(statearr_3216_3276[(2)] = inst_3160);

(statearr_3216_3276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto__,jobs,results,process,async))
;
return ((function (switch__2795__auto__,c__2885__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_3217 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__);

(statearr_3217[(1)] = (1));

return statearr_3217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1 = (function (state_3191){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3218){if((e3218 instanceof Object)){
var ex__2799__auto__ = e3218;
var statearr_3219_3277 = state_3191;
(statearr_3219_3277[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3278 = state_3191;
state_3191 = G__3278;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__ = function(state_3191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1.call(this,state_3191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,jobs,results,process,async))
})();
var state__2887__auto__ = (function (){var statearr_3220 = f__2886__auto__.call(null);
(statearr_3220[(6)] = c__2885__auto__);

return statearr_3220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,jobs,results,process,async))
);

return c__2885__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__3280 = arguments.length;
switch (G__3280) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__3283 = arguments.length;
switch (G__3283) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__3286 = arguments.length;
switch (G__3286) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2885__auto___3335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3335,tc,fc){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3335,tc,fc){
return (function (state_3312){
var state_val_3313 = (state_3312[(1)]);
if((state_val_3313 === (7))){
var inst_3308 = (state_3312[(2)]);
var state_3312__$1 = state_3312;
var statearr_3314_3336 = state_3312__$1;
(statearr_3314_3336[(2)] = inst_3308);

(statearr_3314_3336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (1))){
var state_3312__$1 = state_3312;
var statearr_3315_3337 = state_3312__$1;
(statearr_3315_3337[(2)] = null);

(statearr_3315_3337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (4))){
var inst_3289 = (state_3312[(7)]);
var inst_3289__$1 = (state_3312[(2)]);
var inst_3290 = (inst_3289__$1 == null);
var state_3312__$1 = (function (){var statearr_3316 = state_3312;
(statearr_3316[(7)] = inst_3289__$1);

return statearr_3316;
})();
if(cljs.core.truth_(inst_3290)){
var statearr_3317_3338 = state_3312__$1;
(statearr_3317_3338[(1)] = (5));

} else {
var statearr_3318_3339 = state_3312__$1;
(statearr_3318_3339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (13))){
var state_3312__$1 = state_3312;
var statearr_3319_3340 = state_3312__$1;
(statearr_3319_3340[(2)] = null);

(statearr_3319_3340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (6))){
var inst_3289 = (state_3312[(7)]);
var inst_3295 = p.call(null,inst_3289);
var state_3312__$1 = state_3312;
if(cljs.core.truth_(inst_3295)){
var statearr_3320_3341 = state_3312__$1;
(statearr_3320_3341[(1)] = (9));

} else {
var statearr_3321_3342 = state_3312__$1;
(statearr_3321_3342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (3))){
var inst_3310 = (state_3312[(2)]);
var state_3312__$1 = state_3312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3312__$1,inst_3310);
} else {
if((state_val_3313 === (12))){
var state_3312__$1 = state_3312;
var statearr_3322_3343 = state_3312__$1;
(statearr_3322_3343[(2)] = null);

(statearr_3322_3343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (2))){
var state_3312__$1 = state_3312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3312__$1,(4),ch);
} else {
if((state_val_3313 === (11))){
var inst_3289 = (state_3312[(7)]);
var inst_3299 = (state_3312[(2)]);
var state_3312__$1 = state_3312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3312__$1,(8),inst_3299,inst_3289);
} else {
if((state_val_3313 === (9))){
var state_3312__$1 = state_3312;
var statearr_3323_3344 = state_3312__$1;
(statearr_3323_3344[(2)] = tc);

(statearr_3323_3344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (5))){
var inst_3292 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3293 = cljs.core.async.close_BANG_.call(null,fc);
var state_3312__$1 = (function (){var statearr_3324 = state_3312;
(statearr_3324[(8)] = inst_3292);

return statearr_3324;
})();
var statearr_3325_3345 = state_3312__$1;
(statearr_3325_3345[(2)] = inst_3293);

(statearr_3325_3345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (14))){
var inst_3306 = (state_3312[(2)]);
var state_3312__$1 = state_3312;
var statearr_3326_3346 = state_3312__$1;
(statearr_3326_3346[(2)] = inst_3306);

(statearr_3326_3346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (10))){
var state_3312__$1 = state_3312;
var statearr_3327_3347 = state_3312__$1;
(statearr_3327_3347[(2)] = fc);

(statearr_3327_3347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3313 === (8))){
var inst_3301 = (state_3312[(2)]);
var state_3312__$1 = state_3312;
if(cljs.core.truth_(inst_3301)){
var statearr_3328_3348 = state_3312__$1;
(statearr_3328_3348[(1)] = (12));

} else {
var statearr_3329_3349 = state_3312__$1;
(statearr_3329_3349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___3335,tc,fc))
;
return ((function (switch__2795__auto__,c__2885__auto___3335,tc,fc){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_3330 = [null,null,null,null,null,null,null,null,null];
(statearr_3330[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_3330[(1)] = (1));

return statearr_3330;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_3312){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3331){if((e3331 instanceof Object)){
var ex__2799__auto__ = e3331;
var statearr_3332_3350 = state_3312;
(statearr_3332_3350[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3351 = state_3312;
state_3312 = G__3351;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_3312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_3312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3335,tc,fc))
})();
var state__2887__auto__ = (function (){var statearr_3333 = f__2886__auto__.call(null);
(statearr_3333[(6)] = c__2885__auto___3335);

return statearr_3333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3335,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_3372){
var state_val_3373 = (state_3372[(1)]);
if((state_val_3373 === (7))){
var inst_3368 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
var statearr_3374_3392 = state_3372__$1;
(statearr_3374_3392[(2)] = inst_3368);

(statearr_3374_3392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (1))){
var inst_3352 = init;
var state_3372__$1 = (function (){var statearr_3375 = state_3372;
(statearr_3375[(7)] = inst_3352);

return statearr_3375;
})();
var statearr_3376_3393 = state_3372__$1;
(statearr_3376_3393[(2)] = null);

(statearr_3376_3393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (4))){
var inst_3355 = (state_3372[(8)]);
var inst_3355__$1 = (state_3372[(2)]);
var inst_3356 = (inst_3355__$1 == null);
var state_3372__$1 = (function (){var statearr_3377 = state_3372;
(statearr_3377[(8)] = inst_3355__$1);

return statearr_3377;
})();
if(cljs.core.truth_(inst_3356)){
var statearr_3378_3394 = state_3372__$1;
(statearr_3378_3394[(1)] = (5));

} else {
var statearr_3379_3395 = state_3372__$1;
(statearr_3379_3395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (6))){
var inst_3352 = (state_3372[(7)]);
var inst_3355 = (state_3372[(8)]);
var inst_3359 = (state_3372[(9)]);
var inst_3359__$1 = f.call(null,inst_3352,inst_3355);
var inst_3360 = cljs.core.reduced_QMARK_.call(null,inst_3359__$1);
var state_3372__$1 = (function (){var statearr_3380 = state_3372;
(statearr_3380[(9)] = inst_3359__$1);

return statearr_3380;
})();
if(inst_3360){
var statearr_3381_3396 = state_3372__$1;
(statearr_3381_3396[(1)] = (8));

} else {
var statearr_3382_3397 = state_3372__$1;
(statearr_3382_3397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (3))){
var inst_3370 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3372__$1,inst_3370);
} else {
if((state_val_3373 === (2))){
var state_3372__$1 = state_3372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3372__$1,(4),ch);
} else {
if((state_val_3373 === (9))){
var inst_3359 = (state_3372[(9)]);
var inst_3352 = inst_3359;
var state_3372__$1 = (function (){var statearr_3383 = state_3372;
(statearr_3383[(7)] = inst_3352);

return statearr_3383;
})();
var statearr_3384_3398 = state_3372__$1;
(statearr_3384_3398[(2)] = null);

(statearr_3384_3398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (5))){
var inst_3352 = (state_3372[(7)]);
var state_3372__$1 = state_3372;
var statearr_3385_3399 = state_3372__$1;
(statearr_3385_3399[(2)] = inst_3352);

(statearr_3385_3399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (10))){
var inst_3366 = (state_3372[(2)]);
var state_3372__$1 = state_3372;
var statearr_3386_3400 = state_3372__$1;
(statearr_3386_3400[(2)] = inst_3366);

(statearr_3386_3400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3373 === (8))){
var inst_3359 = (state_3372[(9)]);
var inst_3362 = cljs.core.deref.call(null,inst_3359);
var state_3372__$1 = state_3372;
var statearr_3387_3401 = state_3372__$1;
(statearr_3387_3401[(2)] = inst_3362);

(statearr_3387_3401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2796__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2796__auto____0 = (function (){
var statearr_3388 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3388[(0)] = cljs$core$async$reduce_$_state_machine__2796__auto__);

(statearr_3388[(1)] = (1));

return statearr_3388;
});
var cljs$core$async$reduce_$_state_machine__2796__auto____1 = (function (state_3372){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3389){if((e3389 instanceof Object)){
var ex__2799__auto__ = e3389;
var statearr_3390_3402 = state_3372;
(statearr_3390_3402[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3403 = state_3372;
state_3372 = G__3403;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2796__auto__ = function(state_3372){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2796__auto____1.call(this,state_3372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2796__auto____0;
cljs$core$async$reduce_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2796__auto____1;
return cljs$core$async$reduce_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_3391 = f__2886__auto__.call(null);
(statearr_3391[(6)] = c__2885__auto__);

return statearr_3391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__,f__$1){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__,f__$1){
return (function (state_3409){
var state_val_3410 = (state_3409[(1)]);
if((state_val_3410 === (1))){
var inst_3404 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3409__$1 = state_3409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3409__$1,(2),inst_3404);
} else {
if((state_val_3410 === (2))){
var inst_3406 = (state_3409[(2)]);
var inst_3407 = f__$1.call(null,inst_3406);
var state_3409__$1 = state_3409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3409__$1,inst_3407);
} else {
return null;
}
}
});})(c__2885__auto__,f__$1))
;
return ((function (switch__2795__auto__,c__2885__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2796__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2796__auto____0 = (function (){
var statearr_3411 = [null,null,null,null,null,null,null];
(statearr_3411[(0)] = cljs$core$async$transduce_$_state_machine__2796__auto__);

(statearr_3411[(1)] = (1));

return statearr_3411;
});
var cljs$core$async$transduce_$_state_machine__2796__auto____1 = (function (state_3409){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3412){if((e3412 instanceof Object)){
var ex__2799__auto__ = e3412;
var statearr_3413_3415 = state_3409;
(statearr_3413_3415[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3416 = state_3409;
state_3409 = G__3416;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2796__auto__ = function(state_3409){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2796__auto____1.call(this,state_3409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2796__auto____0;
cljs$core$async$transduce_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2796__auto____1;
return cljs$core$async$transduce_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__,f__$1))
})();
var state__2887__auto__ = (function (){var statearr_3414 = f__2886__auto__.call(null);
(statearr_3414[(6)] = c__2885__auto__);

return statearr_3414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__,f__$1))
);

return c__2885__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3418 = arguments.length;
switch (G__3418) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_3443){
var state_val_3444 = (state_3443[(1)]);
if((state_val_3444 === (7))){
var inst_3425 = (state_3443[(2)]);
var state_3443__$1 = state_3443;
var statearr_3445_3466 = state_3443__$1;
(statearr_3445_3466[(2)] = inst_3425);

(statearr_3445_3466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (1))){
var inst_3419 = cljs.core.seq.call(null,coll);
var inst_3420 = inst_3419;
var state_3443__$1 = (function (){var statearr_3446 = state_3443;
(statearr_3446[(7)] = inst_3420);

return statearr_3446;
})();
var statearr_3447_3467 = state_3443__$1;
(statearr_3447_3467[(2)] = null);

(statearr_3447_3467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (4))){
var inst_3420 = (state_3443[(7)]);
var inst_3423 = cljs.core.first.call(null,inst_3420);
var state_3443__$1 = state_3443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3443__$1,(7),ch,inst_3423);
} else {
if((state_val_3444 === (13))){
var inst_3437 = (state_3443[(2)]);
var state_3443__$1 = state_3443;
var statearr_3448_3468 = state_3443__$1;
(statearr_3448_3468[(2)] = inst_3437);

(statearr_3448_3468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (6))){
var inst_3428 = (state_3443[(2)]);
var state_3443__$1 = state_3443;
if(cljs.core.truth_(inst_3428)){
var statearr_3449_3469 = state_3443__$1;
(statearr_3449_3469[(1)] = (8));

} else {
var statearr_3450_3470 = state_3443__$1;
(statearr_3450_3470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (3))){
var inst_3441 = (state_3443[(2)]);
var state_3443__$1 = state_3443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3443__$1,inst_3441);
} else {
if((state_val_3444 === (12))){
var state_3443__$1 = state_3443;
var statearr_3451_3471 = state_3443__$1;
(statearr_3451_3471[(2)] = null);

(statearr_3451_3471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (2))){
var inst_3420 = (state_3443[(7)]);
var state_3443__$1 = state_3443;
if(cljs.core.truth_(inst_3420)){
var statearr_3452_3472 = state_3443__$1;
(statearr_3452_3472[(1)] = (4));

} else {
var statearr_3453_3473 = state_3443__$1;
(statearr_3453_3473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (11))){
var inst_3434 = cljs.core.async.close_BANG_.call(null,ch);
var state_3443__$1 = state_3443;
var statearr_3454_3474 = state_3443__$1;
(statearr_3454_3474[(2)] = inst_3434);

(statearr_3454_3474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (9))){
var state_3443__$1 = state_3443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3455_3475 = state_3443__$1;
(statearr_3455_3475[(1)] = (11));

} else {
var statearr_3456_3476 = state_3443__$1;
(statearr_3456_3476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (5))){
var inst_3420 = (state_3443[(7)]);
var state_3443__$1 = state_3443;
var statearr_3457_3477 = state_3443__$1;
(statearr_3457_3477[(2)] = inst_3420);

(statearr_3457_3477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (10))){
var inst_3439 = (state_3443[(2)]);
var state_3443__$1 = state_3443;
var statearr_3458_3478 = state_3443__$1;
(statearr_3458_3478[(2)] = inst_3439);

(statearr_3458_3478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3444 === (8))){
var inst_3420 = (state_3443[(7)]);
var inst_3430 = cljs.core.next.call(null,inst_3420);
var inst_3420__$1 = inst_3430;
var state_3443__$1 = (function (){var statearr_3459 = state_3443;
(statearr_3459[(7)] = inst_3420__$1);

return statearr_3459;
})();
var statearr_3460_3479 = state_3443__$1;
(statearr_3460_3479[(2)] = null);

(statearr_3460_3479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_3461 = [null,null,null,null,null,null,null,null];
(statearr_3461[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_3461[(1)] = (1));

return statearr_3461;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_3443){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3462){if((e3462 instanceof Object)){
var ex__2799__auto__ = e3462;
var statearr_3463_3480 = state_3443;
(statearr_3463_3480[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3481 = state_3443;
state_3443 = G__3481;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_3443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_3443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_3464 = f__2886__auto__.call(null);
(statearr_3464[(6)] = c__2885__auto__);

return statearr_3464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3482 = (function (ch,cs,meta3483){
this.ch = ch;
this.cs = cs;
this.meta3483 = meta3483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3484,meta3483__$1){
var self__ = this;
var _3484__$1 = this;
return (new cljs.core.async.t_cljs$core$async3482(self__.ch,self__.cs,meta3483__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3484){
var self__ = this;
var _3484__$1 = this;
return self__.meta3483;
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3483","meta3483",-1080468906,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3482";

cljs.core.async.t_cljs$core$async3482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3482");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3482.
 */
cljs.core.async.__GT_t_cljs$core$async3482 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3482(ch__$1,cs__$1,meta3483){
return (new cljs.core.async.t_cljs$core$async3482(ch__$1,cs__$1,meta3483));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3482(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__2885__auto___3704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3704,cs,m,dchan,dctr,done){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3704,cs,m,dchan,dctr,done){
return (function (state_3619){
var state_val_3620 = (state_3619[(1)]);
if((state_val_3620 === (7))){
var inst_3615 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3621_3705 = state_3619__$1;
(statearr_3621_3705[(2)] = inst_3615);

(statearr_3621_3705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (20))){
var inst_3518 = (state_3619[(7)]);
var inst_3530 = cljs.core.first.call(null,inst_3518);
var inst_3531 = cljs.core.nth.call(null,inst_3530,(0),null);
var inst_3532 = cljs.core.nth.call(null,inst_3530,(1),null);
var state_3619__$1 = (function (){var statearr_3622 = state_3619;
(statearr_3622[(8)] = inst_3531);

return statearr_3622;
})();
if(cljs.core.truth_(inst_3532)){
var statearr_3623_3706 = state_3619__$1;
(statearr_3623_3706[(1)] = (22));

} else {
var statearr_3624_3707 = state_3619__$1;
(statearr_3624_3707[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (27))){
var inst_3567 = (state_3619[(9)]);
var inst_3562 = (state_3619[(10)]);
var inst_3487 = (state_3619[(11)]);
var inst_3560 = (state_3619[(12)]);
var inst_3567__$1 = cljs.core._nth.call(null,inst_3560,inst_3562);
var inst_3568 = cljs.core.async.put_BANG_.call(null,inst_3567__$1,inst_3487,done);
var state_3619__$1 = (function (){var statearr_3625 = state_3619;
(statearr_3625[(9)] = inst_3567__$1);

return statearr_3625;
})();
if(cljs.core.truth_(inst_3568)){
var statearr_3626_3708 = state_3619__$1;
(statearr_3626_3708[(1)] = (30));

} else {
var statearr_3627_3709 = state_3619__$1;
(statearr_3627_3709[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (1))){
var state_3619__$1 = state_3619;
var statearr_3628_3710 = state_3619__$1;
(statearr_3628_3710[(2)] = null);

(statearr_3628_3710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (24))){
var inst_3518 = (state_3619[(7)]);
var inst_3537 = (state_3619[(2)]);
var inst_3538 = cljs.core.next.call(null,inst_3518);
var inst_3496 = inst_3538;
var inst_3497 = null;
var inst_3498 = (0);
var inst_3499 = (0);
var state_3619__$1 = (function (){var statearr_3629 = state_3619;
(statearr_3629[(13)] = inst_3537);

(statearr_3629[(14)] = inst_3497);

(statearr_3629[(15)] = inst_3498);

(statearr_3629[(16)] = inst_3499);

(statearr_3629[(17)] = inst_3496);

return statearr_3629;
})();
var statearr_3630_3711 = state_3619__$1;
(statearr_3630_3711[(2)] = null);

(statearr_3630_3711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (39))){
var state_3619__$1 = state_3619;
var statearr_3634_3712 = state_3619__$1;
(statearr_3634_3712[(2)] = null);

(statearr_3634_3712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (4))){
var inst_3487 = (state_3619[(11)]);
var inst_3487__$1 = (state_3619[(2)]);
var inst_3488 = (inst_3487__$1 == null);
var state_3619__$1 = (function (){var statearr_3635 = state_3619;
(statearr_3635[(11)] = inst_3487__$1);

return statearr_3635;
})();
if(cljs.core.truth_(inst_3488)){
var statearr_3636_3713 = state_3619__$1;
(statearr_3636_3713[(1)] = (5));

} else {
var statearr_3637_3714 = state_3619__$1;
(statearr_3637_3714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (15))){
var inst_3497 = (state_3619[(14)]);
var inst_3498 = (state_3619[(15)]);
var inst_3499 = (state_3619[(16)]);
var inst_3496 = (state_3619[(17)]);
var inst_3514 = (state_3619[(2)]);
var inst_3515 = (inst_3499 + (1));
var tmp3631 = inst_3497;
var tmp3632 = inst_3498;
var tmp3633 = inst_3496;
var inst_3496__$1 = tmp3633;
var inst_3497__$1 = tmp3631;
var inst_3498__$1 = tmp3632;
var inst_3499__$1 = inst_3515;
var state_3619__$1 = (function (){var statearr_3638 = state_3619;
(statearr_3638[(14)] = inst_3497__$1);

(statearr_3638[(15)] = inst_3498__$1);

(statearr_3638[(18)] = inst_3514);

(statearr_3638[(16)] = inst_3499__$1);

(statearr_3638[(17)] = inst_3496__$1);

return statearr_3638;
})();
var statearr_3639_3715 = state_3619__$1;
(statearr_3639_3715[(2)] = null);

(statearr_3639_3715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (21))){
var inst_3541 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3643_3716 = state_3619__$1;
(statearr_3643_3716[(2)] = inst_3541);

(statearr_3643_3716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (31))){
var inst_3567 = (state_3619[(9)]);
var inst_3571 = done.call(null,null);
var inst_3572 = cljs.core.async.untap_STAR_.call(null,m,inst_3567);
var state_3619__$1 = (function (){var statearr_3644 = state_3619;
(statearr_3644[(19)] = inst_3571);

return statearr_3644;
})();
var statearr_3645_3717 = state_3619__$1;
(statearr_3645_3717[(2)] = inst_3572);

(statearr_3645_3717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (32))){
var inst_3562 = (state_3619[(10)]);
var inst_3561 = (state_3619[(20)]);
var inst_3560 = (state_3619[(12)]);
var inst_3559 = (state_3619[(21)]);
var inst_3574 = (state_3619[(2)]);
var inst_3575 = (inst_3562 + (1));
var tmp3640 = inst_3561;
var tmp3641 = inst_3560;
var tmp3642 = inst_3559;
var inst_3559__$1 = tmp3642;
var inst_3560__$1 = tmp3641;
var inst_3561__$1 = tmp3640;
var inst_3562__$1 = inst_3575;
var state_3619__$1 = (function (){var statearr_3646 = state_3619;
(statearr_3646[(10)] = inst_3562__$1);

(statearr_3646[(20)] = inst_3561__$1);

(statearr_3646[(12)] = inst_3560__$1);

(statearr_3646[(22)] = inst_3574);

(statearr_3646[(21)] = inst_3559__$1);

return statearr_3646;
})();
var statearr_3647_3718 = state_3619__$1;
(statearr_3647_3718[(2)] = null);

(statearr_3647_3718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (40))){
var inst_3587 = (state_3619[(23)]);
var inst_3591 = done.call(null,null);
var inst_3592 = cljs.core.async.untap_STAR_.call(null,m,inst_3587);
var state_3619__$1 = (function (){var statearr_3648 = state_3619;
(statearr_3648[(24)] = inst_3591);

return statearr_3648;
})();
var statearr_3649_3719 = state_3619__$1;
(statearr_3649_3719[(2)] = inst_3592);

(statearr_3649_3719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (33))){
var inst_3578 = (state_3619[(25)]);
var inst_3580 = cljs.core.chunked_seq_QMARK_.call(null,inst_3578);
var state_3619__$1 = state_3619;
if(inst_3580){
var statearr_3650_3720 = state_3619__$1;
(statearr_3650_3720[(1)] = (36));

} else {
var statearr_3651_3721 = state_3619__$1;
(statearr_3651_3721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (13))){
var inst_3508 = (state_3619[(26)]);
var inst_3511 = cljs.core.async.close_BANG_.call(null,inst_3508);
var state_3619__$1 = state_3619;
var statearr_3652_3722 = state_3619__$1;
(statearr_3652_3722[(2)] = inst_3511);

(statearr_3652_3722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (22))){
var inst_3531 = (state_3619[(8)]);
var inst_3534 = cljs.core.async.close_BANG_.call(null,inst_3531);
var state_3619__$1 = state_3619;
var statearr_3653_3723 = state_3619__$1;
(statearr_3653_3723[(2)] = inst_3534);

(statearr_3653_3723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (36))){
var inst_3578 = (state_3619[(25)]);
var inst_3582 = cljs.core.chunk_first.call(null,inst_3578);
var inst_3583 = cljs.core.chunk_rest.call(null,inst_3578);
var inst_3584 = cljs.core.count.call(null,inst_3582);
var inst_3559 = inst_3583;
var inst_3560 = inst_3582;
var inst_3561 = inst_3584;
var inst_3562 = (0);
var state_3619__$1 = (function (){var statearr_3654 = state_3619;
(statearr_3654[(10)] = inst_3562);

(statearr_3654[(20)] = inst_3561);

(statearr_3654[(12)] = inst_3560);

(statearr_3654[(21)] = inst_3559);

return statearr_3654;
})();
var statearr_3655_3724 = state_3619__$1;
(statearr_3655_3724[(2)] = null);

(statearr_3655_3724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (41))){
var inst_3578 = (state_3619[(25)]);
var inst_3594 = (state_3619[(2)]);
var inst_3595 = cljs.core.next.call(null,inst_3578);
var inst_3559 = inst_3595;
var inst_3560 = null;
var inst_3561 = (0);
var inst_3562 = (0);
var state_3619__$1 = (function (){var statearr_3656 = state_3619;
(statearr_3656[(27)] = inst_3594);

(statearr_3656[(10)] = inst_3562);

(statearr_3656[(20)] = inst_3561);

(statearr_3656[(12)] = inst_3560);

(statearr_3656[(21)] = inst_3559);

return statearr_3656;
})();
var statearr_3657_3725 = state_3619__$1;
(statearr_3657_3725[(2)] = null);

(statearr_3657_3725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (43))){
var state_3619__$1 = state_3619;
var statearr_3658_3726 = state_3619__$1;
(statearr_3658_3726[(2)] = null);

(statearr_3658_3726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (29))){
var inst_3603 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3659_3727 = state_3619__$1;
(statearr_3659_3727[(2)] = inst_3603);

(statearr_3659_3727[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (44))){
var inst_3612 = (state_3619[(2)]);
var state_3619__$1 = (function (){var statearr_3660 = state_3619;
(statearr_3660[(28)] = inst_3612);

return statearr_3660;
})();
var statearr_3661_3728 = state_3619__$1;
(statearr_3661_3728[(2)] = null);

(statearr_3661_3728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (6))){
var inst_3551 = (state_3619[(29)]);
var inst_3550 = cljs.core.deref.call(null,cs);
var inst_3551__$1 = cljs.core.keys.call(null,inst_3550);
var inst_3552 = cljs.core.count.call(null,inst_3551__$1);
var inst_3553 = cljs.core.reset_BANG_.call(null,dctr,inst_3552);
var inst_3558 = cljs.core.seq.call(null,inst_3551__$1);
var inst_3559 = inst_3558;
var inst_3560 = null;
var inst_3561 = (0);
var inst_3562 = (0);
var state_3619__$1 = (function (){var statearr_3662 = state_3619;
(statearr_3662[(30)] = inst_3553);

(statearr_3662[(29)] = inst_3551__$1);

(statearr_3662[(10)] = inst_3562);

(statearr_3662[(20)] = inst_3561);

(statearr_3662[(12)] = inst_3560);

(statearr_3662[(21)] = inst_3559);

return statearr_3662;
})();
var statearr_3663_3729 = state_3619__$1;
(statearr_3663_3729[(2)] = null);

(statearr_3663_3729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (28))){
var inst_3578 = (state_3619[(25)]);
var inst_3559 = (state_3619[(21)]);
var inst_3578__$1 = cljs.core.seq.call(null,inst_3559);
var state_3619__$1 = (function (){var statearr_3664 = state_3619;
(statearr_3664[(25)] = inst_3578__$1);

return statearr_3664;
})();
if(inst_3578__$1){
var statearr_3665_3730 = state_3619__$1;
(statearr_3665_3730[(1)] = (33));

} else {
var statearr_3666_3731 = state_3619__$1;
(statearr_3666_3731[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (25))){
var inst_3562 = (state_3619[(10)]);
var inst_3561 = (state_3619[(20)]);
var inst_3564 = (inst_3562 < inst_3561);
var inst_3565 = inst_3564;
var state_3619__$1 = state_3619;
if(cljs.core.truth_(inst_3565)){
var statearr_3667_3732 = state_3619__$1;
(statearr_3667_3732[(1)] = (27));

} else {
var statearr_3668_3733 = state_3619__$1;
(statearr_3668_3733[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (34))){
var state_3619__$1 = state_3619;
var statearr_3669_3734 = state_3619__$1;
(statearr_3669_3734[(2)] = null);

(statearr_3669_3734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (17))){
var state_3619__$1 = state_3619;
var statearr_3670_3735 = state_3619__$1;
(statearr_3670_3735[(2)] = null);

(statearr_3670_3735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (3))){
var inst_3617 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3619__$1,inst_3617);
} else {
if((state_val_3620 === (12))){
var inst_3546 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3671_3736 = state_3619__$1;
(statearr_3671_3736[(2)] = inst_3546);

(statearr_3671_3736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (2))){
var state_3619__$1 = state_3619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3619__$1,(4),ch);
} else {
if((state_val_3620 === (23))){
var state_3619__$1 = state_3619;
var statearr_3672_3737 = state_3619__$1;
(statearr_3672_3737[(2)] = null);

(statearr_3672_3737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (35))){
var inst_3601 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3673_3738 = state_3619__$1;
(statearr_3673_3738[(2)] = inst_3601);

(statearr_3673_3738[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (19))){
var inst_3518 = (state_3619[(7)]);
var inst_3522 = cljs.core.chunk_first.call(null,inst_3518);
var inst_3523 = cljs.core.chunk_rest.call(null,inst_3518);
var inst_3524 = cljs.core.count.call(null,inst_3522);
var inst_3496 = inst_3523;
var inst_3497 = inst_3522;
var inst_3498 = inst_3524;
var inst_3499 = (0);
var state_3619__$1 = (function (){var statearr_3674 = state_3619;
(statearr_3674[(14)] = inst_3497);

(statearr_3674[(15)] = inst_3498);

(statearr_3674[(16)] = inst_3499);

(statearr_3674[(17)] = inst_3496);

return statearr_3674;
})();
var statearr_3675_3739 = state_3619__$1;
(statearr_3675_3739[(2)] = null);

(statearr_3675_3739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (11))){
var inst_3518 = (state_3619[(7)]);
var inst_3496 = (state_3619[(17)]);
var inst_3518__$1 = cljs.core.seq.call(null,inst_3496);
var state_3619__$1 = (function (){var statearr_3676 = state_3619;
(statearr_3676[(7)] = inst_3518__$1);

return statearr_3676;
})();
if(inst_3518__$1){
var statearr_3677_3740 = state_3619__$1;
(statearr_3677_3740[(1)] = (16));

} else {
var statearr_3678_3741 = state_3619__$1;
(statearr_3678_3741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (9))){
var inst_3548 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3679_3742 = state_3619__$1;
(statearr_3679_3742[(2)] = inst_3548);

(statearr_3679_3742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (5))){
var inst_3494 = cljs.core.deref.call(null,cs);
var inst_3495 = cljs.core.seq.call(null,inst_3494);
var inst_3496 = inst_3495;
var inst_3497 = null;
var inst_3498 = (0);
var inst_3499 = (0);
var state_3619__$1 = (function (){var statearr_3680 = state_3619;
(statearr_3680[(14)] = inst_3497);

(statearr_3680[(15)] = inst_3498);

(statearr_3680[(16)] = inst_3499);

(statearr_3680[(17)] = inst_3496);

return statearr_3680;
})();
var statearr_3681_3743 = state_3619__$1;
(statearr_3681_3743[(2)] = null);

(statearr_3681_3743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (14))){
var state_3619__$1 = state_3619;
var statearr_3682_3744 = state_3619__$1;
(statearr_3682_3744[(2)] = null);

(statearr_3682_3744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (45))){
var inst_3609 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3683_3745 = state_3619__$1;
(statearr_3683_3745[(2)] = inst_3609);

(statearr_3683_3745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (26))){
var inst_3551 = (state_3619[(29)]);
var inst_3605 = (state_3619[(2)]);
var inst_3606 = cljs.core.seq.call(null,inst_3551);
var state_3619__$1 = (function (){var statearr_3684 = state_3619;
(statearr_3684[(31)] = inst_3605);

return statearr_3684;
})();
if(inst_3606){
var statearr_3685_3746 = state_3619__$1;
(statearr_3685_3746[(1)] = (42));

} else {
var statearr_3686_3747 = state_3619__$1;
(statearr_3686_3747[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (16))){
var inst_3518 = (state_3619[(7)]);
var inst_3520 = cljs.core.chunked_seq_QMARK_.call(null,inst_3518);
var state_3619__$1 = state_3619;
if(inst_3520){
var statearr_3687_3748 = state_3619__$1;
(statearr_3687_3748[(1)] = (19));

} else {
var statearr_3688_3749 = state_3619__$1;
(statearr_3688_3749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (38))){
var inst_3598 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3689_3750 = state_3619__$1;
(statearr_3689_3750[(2)] = inst_3598);

(statearr_3689_3750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (30))){
var state_3619__$1 = state_3619;
var statearr_3690_3751 = state_3619__$1;
(statearr_3690_3751[(2)] = null);

(statearr_3690_3751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (10))){
var inst_3497 = (state_3619[(14)]);
var inst_3499 = (state_3619[(16)]);
var inst_3507 = cljs.core._nth.call(null,inst_3497,inst_3499);
var inst_3508 = cljs.core.nth.call(null,inst_3507,(0),null);
var inst_3509 = cljs.core.nth.call(null,inst_3507,(1),null);
var state_3619__$1 = (function (){var statearr_3691 = state_3619;
(statearr_3691[(26)] = inst_3508);

return statearr_3691;
})();
if(cljs.core.truth_(inst_3509)){
var statearr_3692_3752 = state_3619__$1;
(statearr_3692_3752[(1)] = (13));

} else {
var statearr_3693_3753 = state_3619__$1;
(statearr_3693_3753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (18))){
var inst_3544 = (state_3619[(2)]);
var state_3619__$1 = state_3619;
var statearr_3694_3754 = state_3619__$1;
(statearr_3694_3754[(2)] = inst_3544);

(statearr_3694_3754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (42))){
var state_3619__$1 = state_3619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3619__$1,(45),dchan);
} else {
if((state_val_3620 === (37))){
var inst_3587 = (state_3619[(23)]);
var inst_3578 = (state_3619[(25)]);
var inst_3487 = (state_3619[(11)]);
var inst_3587__$1 = cljs.core.first.call(null,inst_3578);
var inst_3588 = cljs.core.async.put_BANG_.call(null,inst_3587__$1,inst_3487,done);
var state_3619__$1 = (function (){var statearr_3695 = state_3619;
(statearr_3695[(23)] = inst_3587__$1);

return statearr_3695;
})();
if(cljs.core.truth_(inst_3588)){
var statearr_3696_3755 = state_3619__$1;
(statearr_3696_3755[(1)] = (39));

} else {
var statearr_3697_3756 = state_3619__$1;
(statearr_3697_3756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3620 === (8))){
var inst_3498 = (state_3619[(15)]);
var inst_3499 = (state_3619[(16)]);
var inst_3501 = (inst_3499 < inst_3498);
var inst_3502 = inst_3501;
var state_3619__$1 = state_3619;
if(cljs.core.truth_(inst_3502)){
var statearr_3698_3757 = state_3619__$1;
(statearr_3698_3757[(1)] = (10));

} else {
var statearr_3699_3758 = state_3619__$1;
(statearr_3699_3758[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___3704,cs,m,dchan,dctr,done))
;
return ((function (switch__2795__auto__,c__2885__auto___3704,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2796__auto__ = null;
var cljs$core$async$mult_$_state_machine__2796__auto____0 = (function (){
var statearr_3700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3700[(0)] = cljs$core$async$mult_$_state_machine__2796__auto__);

(statearr_3700[(1)] = (1));

return statearr_3700;
});
var cljs$core$async$mult_$_state_machine__2796__auto____1 = (function (state_3619){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3701){if((e3701 instanceof Object)){
var ex__2799__auto__ = e3701;
var statearr_3702_3759 = state_3619;
(statearr_3702_3759[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3760 = state_3619;
state_3619 = G__3760;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2796__auto__ = function(state_3619){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2796__auto____1.call(this,state_3619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2796__auto____0;
cljs$core$async$mult_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2796__auto____1;
return cljs$core$async$mult_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3704,cs,m,dchan,dctr,done))
})();
var state__2887__auto__ = (function (){var statearr_3703 = f__2886__auto__.call(null);
(statearr_3703[(6)] = c__2885__auto___3704);

return statearr_3703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3704,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__3762 = arguments.length;
switch (G__3762) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3774 = arguments.length;
var i__4500__auto___3775 = (0);
while(true){
if((i__4500__auto___3775 < len__4499__auto___3774)){
args__4502__auto__.push((arguments[i__4500__auto___3775]));

var G__3776 = (i__4500__auto___3775 + (1));
i__4500__auto___3775 = G__3776;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3768){
var map__3769 = p__3768;
var map__3769__$1 = ((((!((map__3769 == null)))?(((((map__3769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3769):map__3769);
var opts = map__3769__$1;
var statearr_3771_3777 = state;
(statearr_3771_3777[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__3769,map__3769__$1,opts){
return (function (val){
var statearr_3772_3778 = state;
(statearr_3772_3778[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3769,map__3769__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_3773_3779 = state;
(statearr_3773_3779[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3764){
var G__3765 = cljs.core.first.call(null,seq3764);
var seq3764__$1 = cljs.core.next.call(null,seq3764);
var G__3766 = cljs.core.first.call(null,seq3764__$1);
var seq3764__$2 = cljs.core.next.call(null,seq3764__$1);
var G__3767 = cljs.core.first.call(null,seq3764__$2);
var seq3764__$3 = cljs.core.next.call(null,seq3764__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3765,G__3766,G__3767,seq3764__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3780 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta3781){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta3781 = meta3781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3782,meta3781__$1){
var self__ = this;
var _3782__$1 = this;
return (new cljs.core.async.t_cljs$core$async3780(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta3781__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3782){
var self__ = this;
var _3782__$1 = this;
return self__.meta3781;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta3781","meta3781",-1687317507,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3780";

cljs.core.async.t_cljs$core$async3780.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3780");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3780.
 */
cljs.core.async.__GT_t_cljs$core$async3780 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3780(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3781){
return (new cljs.core.async.t_cljs$core$async3780(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3781));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3780(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2885__auto___3944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_3884){
var state_val_3885 = (state_3884[(1)]);
if((state_val_3885 === (7))){
var inst_3799 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3886_3945 = state_3884__$1;
(statearr_3886_3945[(2)] = inst_3799);

(statearr_3886_3945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (20))){
var inst_3811 = (state_3884[(7)]);
var state_3884__$1 = state_3884;
var statearr_3887_3946 = state_3884__$1;
(statearr_3887_3946[(2)] = inst_3811);

(statearr_3887_3946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (27))){
var state_3884__$1 = state_3884;
var statearr_3888_3947 = state_3884__$1;
(statearr_3888_3947[(2)] = null);

(statearr_3888_3947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (1))){
var inst_3786 = (state_3884[(8)]);
var inst_3786__$1 = calc_state.call(null);
var inst_3788 = (inst_3786__$1 == null);
var inst_3789 = cljs.core.not.call(null,inst_3788);
var state_3884__$1 = (function (){var statearr_3889 = state_3884;
(statearr_3889[(8)] = inst_3786__$1);

return statearr_3889;
})();
if(inst_3789){
var statearr_3890_3948 = state_3884__$1;
(statearr_3890_3948[(1)] = (2));

} else {
var statearr_3891_3949 = state_3884__$1;
(statearr_3891_3949[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (24))){
var inst_3835 = (state_3884[(9)]);
var inst_3858 = (state_3884[(10)]);
var inst_3844 = (state_3884[(11)]);
var inst_3858__$1 = inst_3835.call(null,inst_3844);
var state_3884__$1 = (function (){var statearr_3892 = state_3884;
(statearr_3892[(10)] = inst_3858__$1);

return statearr_3892;
})();
if(cljs.core.truth_(inst_3858__$1)){
var statearr_3893_3950 = state_3884__$1;
(statearr_3893_3950[(1)] = (29));

} else {
var statearr_3894_3951 = state_3884__$1;
(statearr_3894_3951[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (4))){
var inst_3802 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3802)){
var statearr_3895_3952 = state_3884__$1;
(statearr_3895_3952[(1)] = (8));

} else {
var statearr_3896_3953 = state_3884__$1;
(statearr_3896_3953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (15))){
var inst_3829 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3829)){
var statearr_3897_3954 = state_3884__$1;
(statearr_3897_3954[(1)] = (19));

} else {
var statearr_3898_3955 = state_3884__$1;
(statearr_3898_3955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (21))){
var inst_3834 = (state_3884[(12)]);
var inst_3834__$1 = (state_3884[(2)]);
var inst_3835 = cljs.core.get.call(null,inst_3834__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3836 = cljs.core.get.call(null,inst_3834__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3837 = cljs.core.get.call(null,inst_3834__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3884__$1 = (function (){var statearr_3899 = state_3884;
(statearr_3899[(9)] = inst_3835);

(statearr_3899[(13)] = inst_3836);

(statearr_3899[(12)] = inst_3834__$1);

return statearr_3899;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3884__$1,(22),inst_3837);
} else {
if((state_val_3885 === (31))){
var inst_3866 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3866)){
var statearr_3900_3956 = state_3884__$1;
(statearr_3900_3956[(1)] = (32));

} else {
var statearr_3901_3957 = state_3884__$1;
(statearr_3901_3957[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (32))){
var inst_3843 = (state_3884[(14)]);
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3884__$1,(35),out,inst_3843);
} else {
if((state_val_3885 === (33))){
var inst_3834 = (state_3884[(12)]);
var inst_3811 = inst_3834;
var state_3884__$1 = (function (){var statearr_3902 = state_3884;
(statearr_3902[(7)] = inst_3811);

return statearr_3902;
})();
var statearr_3903_3958 = state_3884__$1;
(statearr_3903_3958[(2)] = null);

(statearr_3903_3958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (13))){
var inst_3811 = (state_3884[(7)]);
var inst_3818 = inst_3811.cljs$lang$protocol_mask$partition0$;
var inst_3819 = (inst_3818 & (64));
var inst_3820 = inst_3811.cljs$core$ISeq$;
var inst_3821 = (cljs.core.PROTOCOL_SENTINEL === inst_3820);
var inst_3822 = ((inst_3819) || (inst_3821));
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3822)){
var statearr_3904_3959 = state_3884__$1;
(statearr_3904_3959[(1)] = (16));

} else {
var statearr_3905_3960 = state_3884__$1;
(statearr_3905_3960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (22))){
var inst_3843 = (state_3884[(14)]);
var inst_3844 = (state_3884[(11)]);
var inst_3842 = (state_3884[(2)]);
var inst_3843__$1 = cljs.core.nth.call(null,inst_3842,(0),null);
var inst_3844__$1 = cljs.core.nth.call(null,inst_3842,(1),null);
var inst_3845 = (inst_3843__$1 == null);
var inst_3846 = cljs.core._EQ_.call(null,inst_3844__$1,change);
var inst_3847 = ((inst_3845) || (inst_3846));
var state_3884__$1 = (function (){var statearr_3906 = state_3884;
(statearr_3906[(14)] = inst_3843__$1);

(statearr_3906[(11)] = inst_3844__$1);

return statearr_3906;
})();
if(cljs.core.truth_(inst_3847)){
var statearr_3907_3961 = state_3884__$1;
(statearr_3907_3961[(1)] = (23));

} else {
var statearr_3908_3962 = state_3884__$1;
(statearr_3908_3962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (36))){
var inst_3834 = (state_3884[(12)]);
var inst_3811 = inst_3834;
var state_3884__$1 = (function (){var statearr_3909 = state_3884;
(statearr_3909[(7)] = inst_3811);

return statearr_3909;
})();
var statearr_3910_3963 = state_3884__$1;
(statearr_3910_3963[(2)] = null);

(statearr_3910_3963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (29))){
var inst_3858 = (state_3884[(10)]);
var state_3884__$1 = state_3884;
var statearr_3911_3964 = state_3884__$1;
(statearr_3911_3964[(2)] = inst_3858);

(statearr_3911_3964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (6))){
var state_3884__$1 = state_3884;
var statearr_3912_3965 = state_3884__$1;
(statearr_3912_3965[(2)] = false);

(statearr_3912_3965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (28))){
var inst_3854 = (state_3884[(2)]);
var inst_3855 = calc_state.call(null);
var inst_3811 = inst_3855;
var state_3884__$1 = (function (){var statearr_3913 = state_3884;
(statearr_3913[(15)] = inst_3854);

(statearr_3913[(7)] = inst_3811);

return statearr_3913;
})();
var statearr_3914_3966 = state_3884__$1;
(statearr_3914_3966[(2)] = null);

(statearr_3914_3966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (25))){
var inst_3880 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3915_3967 = state_3884__$1;
(statearr_3915_3967[(2)] = inst_3880);

(statearr_3915_3967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (34))){
var inst_3878 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3916_3968 = state_3884__$1;
(statearr_3916_3968[(2)] = inst_3878);

(statearr_3916_3968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (17))){
var state_3884__$1 = state_3884;
var statearr_3917_3969 = state_3884__$1;
(statearr_3917_3969[(2)] = false);

(statearr_3917_3969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (3))){
var state_3884__$1 = state_3884;
var statearr_3918_3970 = state_3884__$1;
(statearr_3918_3970[(2)] = false);

(statearr_3918_3970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (12))){
var inst_3882 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3884__$1,inst_3882);
} else {
if((state_val_3885 === (2))){
var inst_3786 = (state_3884[(8)]);
var inst_3791 = inst_3786.cljs$lang$protocol_mask$partition0$;
var inst_3792 = (inst_3791 & (64));
var inst_3793 = inst_3786.cljs$core$ISeq$;
var inst_3794 = (cljs.core.PROTOCOL_SENTINEL === inst_3793);
var inst_3795 = ((inst_3792) || (inst_3794));
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3795)){
var statearr_3919_3971 = state_3884__$1;
(statearr_3919_3971[(1)] = (5));

} else {
var statearr_3920_3972 = state_3884__$1;
(statearr_3920_3972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (23))){
var inst_3843 = (state_3884[(14)]);
var inst_3849 = (inst_3843 == null);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3849)){
var statearr_3921_3973 = state_3884__$1;
(statearr_3921_3973[(1)] = (26));

} else {
var statearr_3922_3974 = state_3884__$1;
(statearr_3922_3974[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (35))){
var inst_3869 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3869)){
var statearr_3923_3975 = state_3884__$1;
(statearr_3923_3975[(1)] = (36));

} else {
var statearr_3924_3976 = state_3884__$1;
(statearr_3924_3976[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (19))){
var inst_3811 = (state_3884[(7)]);
var inst_3831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3811);
var state_3884__$1 = state_3884;
var statearr_3925_3977 = state_3884__$1;
(statearr_3925_3977[(2)] = inst_3831);

(statearr_3925_3977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (11))){
var inst_3811 = (state_3884[(7)]);
var inst_3815 = (inst_3811 == null);
var inst_3816 = cljs.core.not.call(null,inst_3815);
var state_3884__$1 = state_3884;
if(inst_3816){
var statearr_3926_3978 = state_3884__$1;
(statearr_3926_3978[(1)] = (13));

} else {
var statearr_3927_3979 = state_3884__$1;
(statearr_3927_3979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (9))){
var inst_3786 = (state_3884[(8)]);
var state_3884__$1 = state_3884;
var statearr_3928_3980 = state_3884__$1;
(statearr_3928_3980[(2)] = inst_3786);

(statearr_3928_3980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (5))){
var state_3884__$1 = state_3884;
var statearr_3929_3981 = state_3884__$1;
(statearr_3929_3981[(2)] = true);

(statearr_3929_3981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (14))){
var state_3884__$1 = state_3884;
var statearr_3930_3982 = state_3884__$1;
(statearr_3930_3982[(2)] = false);

(statearr_3930_3982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (26))){
var inst_3844 = (state_3884[(11)]);
var inst_3851 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3844);
var state_3884__$1 = state_3884;
var statearr_3931_3983 = state_3884__$1;
(statearr_3931_3983[(2)] = inst_3851);

(statearr_3931_3983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (16))){
var state_3884__$1 = state_3884;
var statearr_3932_3984 = state_3884__$1;
(statearr_3932_3984[(2)] = true);

(statearr_3932_3984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (38))){
var inst_3874 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3933_3985 = state_3884__$1;
(statearr_3933_3985[(2)] = inst_3874);

(statearr_3933_3985[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (30))){
var inst_3835 = (state_3884[(9)]);
var inst_3836 = (state_3884[(13)]);
var inst_3844 = (state_3884[(11)]);
var inst_3861 = cljs.core.empty_QMARK_.call(null,inst_3835);
var inst_3862 = inst_3836.call(null,inst_3844);
var inst_3863 = cljs.core.not.call(null,inst_3862);
var inst_3864 = ((inst_3861) && (inst_3863));
var state_3884__$1 = state_3884;
var statearr_3934_3986 = state_3884__$1;
(statearr_3934_3986[(2)] = inst_3864);

(statearr_3934_3986[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (10))){
var inst_3786 = (state_3884[(8)]);
var inst_3807 = (state_3884[(2)]);
var inst_3808 = cljs.core.get.call(null,inst_3807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3809 = cljs.core.get.call(null,inst_3807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3810 = cljs.core.get.call(null,inst_3807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3811 = inst_3786;
var state_3884__$1 = (function (){var statearr_3935 = state_3884;
(statearr_3935[(16)] = inst_3808);

(statearr_3935[(7)] = inst_3811);

(statearr_3935[(17)] = inst_3810);

(statearr_3935[(18)] = inst_3809);

return statearr_3935;
})();
var statearr_3936_3987 = state_3884__$1;
(statearr_3936_3987[(2)] = null);

(statearr_3936_3987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (18))){
var inst_3826 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3937_3988 = state_3884__$1;
(statearr_3937_3988[(2)] = inst_3826);

(statearr_3937_3988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (37))){
var state_3884__$1 = state_3884;
var statearr_3938_3989 = state_3884__$1;
(statearr_3938_3989[(2)] = null);

(statearr_3938_3989[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (8))){
var inst_3786 = (state_3884[(8)]);
var inst_3804 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3786);
var state_3884__$1 = state_3884;
var statearr_3939_3990 = state_3884__$1;
(statearr_3939_3990[(2)] = inst_3804);

(statearr_3939_3990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2795__auto__,c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2796__auto__ = null;
var cljs$core$async$mix_$_state_machine__2796__auto____0 = (function (){
var statearr_3940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3940[(0)] = cljs$core$async$mix_$_state_machine__2796__auto__);

(statearr_3940[(1)] = (1));

return statearr_3940;
});
var cljs$core$async$mix_$_state_machine__2796__auto____1 = (function (state_3884){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_3884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e3941){if((e3941 instanceof Object)){
var ex__2799__auto__ = e3941;
var statearr_3942_3991 = state_3884;
(statearr_3942_3991[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3992 = state_3884;
state_3884 = G__3992;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2796__auto__ = function(state_3884){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2796__auto____1.call(this,state_3884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2796__auto____0;
cljs$core$async$mix_$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2796__auto____1;
return cljs$core$async$mix_$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2887__auto__ = (function (){var statearr_3943 = f__2886__auto__.call(null);
(statearr_3943[(6)] = c__2885__auto___3944);

return statearr_3943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___3944,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3994 = arguments.length;
switch (G__3994) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__3998 = arguments.length;
switch (G__3998) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__3996_SHARP_){
if(cljs.core.truth_(p1__3996_SHARP_.call(null,topic))){
return p1__3996_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3996_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async3999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3999 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4000){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4000 = meta4000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4001,meta4000__$1){
var self__ = this;
var _4001__$1 = this;
return (new cljs.core.async.t_cljs$core$async3999(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4000__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4001){
var self__ = this;
var _4001__$1 = this;
return self__.meta4000;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4000","meta4000",-1462251631,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3999";

cljs.core.async.t_cljs$core$async3999.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3999");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3999.
 */
cljs.core.async.__GT_t_cljs$core$async3999 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async3999(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4000){
return (new cljs.core.async.t_cljs$core$async3999(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4000));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async3999(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2885__auto___4119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4119,mults,ensure_mult,p){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4119,mults,ensure_mult,p){
return (function (state_4073){
var state_val_4074 = (state_4073[(1)]);
if((state_val_4074 === (7))){
var inst_4069 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4075_4120 = state_4073__$1;
(statearr_4075_4120[(2)] = inst_4069);

(statearr_4075_4120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (20))){
var state_4073__$1 = state_4073;
var statearr_4076_4121 = state_4073__$1;
(statearr_4076_4121[(2)] = null);

(statearr_4076_4121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (1))){
var state_4073__$1 = state_4073;
var statearr_4077_4122 = state_4073__$1;
(statearr_4077_4122[(2)] = null);

(statearr_4077_4122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (24))){
var inst_4052 = (state_4073[(7)]);
var inst_4061 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4052);
var state_4073__$1 = state_4073;
var statearr_4078_4123 = state_4073__$1;
(statearr_4078_4123[(2)] = inst_4061);

(statearr_4078_4123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (4))){
var inst_4004 = (state_4073[(8)]);
var inst_4004__$1 = (state_4073[(2)]);
var inst_4005 = (inst_4004__$1 == null);
var state_4073__$1 = (function (){var statearr_4079 = state_4073;
(statearr_4079[(8)] = inst_4004__$1);

return statearr_4079;
})();
if(cljs.core.truth_(inst_4005)){
var statearr_4080_4124 = state_4073__$1;
(statearr_4080_4124[(1)] = (5));

} else {
var statearr_4081_4125 = state_4073__$1;
(statearr_4081_4125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (15))){
var inst_4046 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4082_4126 = state_4073__$1;
(statearr_4082_4126[(2)] = inst_4046);

(statearr_4082_4126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (21))){
var inst_4066 = (state_4073[(2)]);
var state_4073__$1 = (function (){var statearr_4083 = state_4073;
(statearr_4083[(9)] = inst_4066);

return statearr_4083;
})();
var statearr_4084_4127 = state_4073__$1;
(statearr_4084_4127[(2)] = null);

(statearr_4084_4127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (13))){
var inst_4028 = (state_4073[(10)]);
var inst_4030 = cljs.core.chunked_seq_QMARK_.call(null,inst_4028);
var state_4073__$1 = state_4073;
if(inst_4030){
var statearr_4085_4128 = state_4073__$1;
(statearr_4085_4128[(1)] = (16));

} else {
var statearr_4086_4129 = state_4073__$1;
(statearr_4086_4129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (22))){
var inst_4058 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
if(cljs.core.truth_(inst_4058)){
var statearr_4087_4130 = state_4073__$1;
(statearr_4087_4130[(1)] = (23));

} else {
var statearr_4088_4131 = state_4073__$1;
(statearr_4088_4131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (6))){
var inst_4054 = (state_4073[(11)]);
var inst_4004 = (state_4073[(8)]);
var inst_4052 = (state_4073[(7)]);
var inst_4052__$1 = topic_fn.call(null,inst_4004);
var inst_4053 = cljs.core.deref.call(null,mults);
var inst_4054__$1 = cljs.core.get.call(null,inst_4053,inst_4052__$1);
var state_4073__$1 = (function (){var statearr_4089 = state_4073;
(statearr_4089[(11)] = inst_4054__$1);

(statearr_4089[(7)] = inst_4052__$1);

return statearr_4089;
})();
if(cljs.core.truth_(inst_4054__$1)){
var statearr_4090_4132 = state_4073__$1;
(statearr_4090_4132[(1)] = (19));

} else {
var statearr_4091_4133 = state_4073__$1;
(statearr_4091_4133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (25))){
var inst_4063 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4092_4134 = state_4073__$1;
(statearr_4092_4134[(2)] = inst_4063);

(statearr_4092_4134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (17))){
var inst_4028 = (state_4073[(10)]);
var inst_4037 = cljs.core.first.call(null,inst_4028);
var inst_4038 = cljs.core.async.muxch_STAR_.call(null,inst_4037);
var inst_4039 = cljs.core.async.close_BANG_.call(null,inst_4038);
var inst_4040 = cljs.core.next.call(null,inst_4028);
var inst_4014 = inst_4040;
var inst_4015 = null;
var inst_4016 = (0);
var inst_4017 = (0);
var state_4073__$1 = (function (){var statearr_4093 = state_4073;
(statearr_4093[(12)] = inst_4016);

(statearr_4093[(13)] = inst_4017);

(statearr_4093[(14)] = inst_4014);

(statearr_4093[(15)] = inst_4015);

(statearr_4093[(16)] = inst_4039);

return statearr_4093;
})();
var statearr_4094_4135 = state_4073__$1;
(statearr_4094_4135[(2)] = null);

(statearr_4094_4135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (3))){
var inst_4071 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4073__$1,inst_4071);
} else {
if((state_val_4074 === (12))){
var inst_4048 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4095_4136 = state_4073__$1;
(statearr_4095_4136[(2)] = inst_4048);

(statearr_4095_4136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (2))){
var state_4073__$1 = state_4073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4073__$1,(4),ch);
} else {
if((state_val_4074 === (23))){
var state_4073__$1 = state_4073;
var statearr_4096_4137 = state_4073__$1;
(statearr_4096_4137[(2)] = null);

(statearr_4096_4137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (19))){
var inst_4054 = (state_4073[(11)]);
var inst_4004 = (state_4073[(8)]);
var inst_4056 = cljs.core.async.muxch_STAR_.call(null,inst_4054);
var state_4073__$1 = state_4073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4073__$1,(22),inst_4056,inst_4004);
} else {
if((state_val_4074 === (11))){
var inst_4014 = (state_4073[(14)]);
var inst_4028 = (state_4073[(10)]);
var inst_4028__$1 = cljs.core.seq.call(null,inst_4014);
var state_4073__$1 = (function (){var statearr_4097 = state_4073;
(statearr_4097[(10)] = inst_4028__$1);

return statearr_4097;
})();
if(inst_4028__$1){
var statearr_4098_4138 = state_4073__$1;
(statearr_4098_4138[(1)] = (13));

} else {
var statearr_4099_4139 = state_4073__$1;
(statearr_4099_4139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (9))){
var inst_4050 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4100_4140 = state_4073__$1;
(statearr_4100_4140[(2)] = inst_4050);

(statearr_4100_4140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (5))){
var inst_4011 = cljs.core.deref.call(null,mults);
var inst_4012 = cljs.core.vals.call(null,inst_4011);
var inst_4013 = cljs.core.seq.call(null,inst_4012);
var inst_4014 = inst_4013;
var inst_4015 = null;
var inst_4016 = (0);
var inst_4017 = (0);
var state_4073__$1 = (function (){var statearr_4101 = state_4073;
(statearr_4101[(12)] = inst_4016);

(statearr_4101[(13)] = inst_4017);

(statearr_4101[(14)] = inst_4014);

(statearr_4101[(15)] = inst_4015);

return statearr_4101;
})();
var statearr_4102_4141 = state_4073__$1;
(statearr_4102_4141[(2)] = null);

(statearr_4102_4141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (14))){
var state_4073__$1 = state_4073;
var statearr_4106_4142 = state_4073__$1;
(statearr_4106_4142[(2)] = null);

(statearr_4106_4142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (16))){
var inst_4028 = (state_4073[(10)]);
var inst_4032 = cljs.core.chunk_first.call(null,inst_4028);
var inst_4033 = cljs.core.chunk_rest.call(null,inst_4028);
var inst_4034 = cljs.core.count.call(null,inst_4032);
var inst_4014 = inst_4033;
var inst_4015 = inst_4032;
var inst_4016 = inst_4034;
var inst_4017 = (0);
var state_4073__$1 = (function (){var statearr_4107 = state_4073;
(statearr_4107[(12)] = inst_4016);

(statearr_4107[(13)] = inst_4017);

(statearr_4107[(14)] = inst_4014);

(statearr_4107[(15)] = inst_4015);

return statearr_4107;
})();
var statearr_4108_4143 = state_4073__$1;
(statearr_4108_4143[(2)] = null);

(statearr_4108_4143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (10))){
var inst_4016 = (state_4073[(12)]);
var inst_4017 = (state_4073[(13)]);
var inst_4014 = (state_4073[(14)]);
var inst_4015 = (state_4073[(15)]);
var inst_4022 = cljs.core._nth.call(null,inst_4015,inst_4017);
var inst_4023 = cljs.core.async.muxch_STAR_.call(null,inst_4022);
var inst_4024 = cljs.core.async.close_BANG_.call(null,inst_4023);
var inst_4025 = (inst_4017 + (1));
var tmp4103 = inst_4016;
var tmp4104 = inst_4014;
var tmp4105 = inst_4015;
var inst_4014__$1 = tmp4104;
var inst_4015__$1 = tmp4105;
var inst_4016__$1 = tmp4103;
var inst_4017__$1 = inst_4025;
var state_4073__$1 = (function (){var statearr_4109 = state_4073;
(statearr_4109[(12)] = inst_4016__$1);

(statearr_4109[(13)] = inst_4017__$1);

(statearr_4109[(14)] = inst_4014__$1);

(statearr_4109[(17)] = inst_4024);

(statearr_4109[(15)] = inst_4015__$1);

return statearr_4109;
})();
var statearr_4110_4144 = state_4073__$1;
(statearr_4110_4144[(2)] = null);

(statearr_4110_4144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (18))){
var inst_4043 = (state_4073[(2)]);
var state_4073__$1 = state_4073;
var statearr_4111_4145 = state_4073__$1;
(statearr_4111_4145[(2)] = inst_4043);

(statearr_4111_4145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4074 === (8))){
var inst_4016 = (state_4073[(12)]);
var inst_4017 = (state_4073[(13)]);
var inst_4019 = (inst_4017 < inst_4016);
var inst_4020 = inst_4019;
var state_4073__$1 = state_4073;
if(cljs.core.truth_(inst_4020)){
var statearr_4112_4146 = state_4073__$1;
(statearr_4112_4146[(1)] = (10));

} else {
var statearr_4113_4147 = state_4073__$1;
(statearr_4113_4147[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4119,mults,ensure_mult,p))
;
return ((function (switch__2795__auto__,c__2885__auto___4119,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4114[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4114[(1)] = (1));

return statearr_4114;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4073){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4115){if((e4115 instanceof Object)){
var ex__2799__auto__ = e4115;
var statearr_4116_4148 = state_4073;
(statearr_4116_4148[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4149 = state_4073;
state_4073 = G__4149;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4119,mults,ensure_mult,p))
})();
var state__2887__auto__ = (function (){var statearr_4117 = f__2886__auto__.call(null);
(statearr_4117[(6)] = c__2885__auto___4119);

return statearr_4117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4119,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4151 = arguments.length;
switch (G__4151) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4154 = arguments.length;
switch (G__4154) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4157 = arguments.length;
switch (G__4157) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__2885__auto___4224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4196){
var state_val_4197 = (state_4196[(1)]);
if((state_val_4197 === (7))){
var state_4196__$1 = state_4196;
var statearr_4198_4225 = state_4196__$1;
(statearr_4198_4225[(2)] = null);

(statearr_4198_4225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (1))){
var state_4196__$1 = state_4196;
var statearr_4199_4226 = state_4196__$1;
(statearr_4199_4226[(2)] = null);

(statearr_4199_4226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (4))){
var inst_4160 = (state_4196[(7)]);
var inst_4162 = (inst_4160 < cnt);
var state_4196__$1 = state_4196;
if(cljs.core.truth_(inst_4162)){
var statearr_4200_4227 = state_4196__$1;
(statearr_4200_4227[(1)] = (6));

} else {
var statearr_4201_4228 = state_4196__$1;
(statearr_4201_4228[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (15))){
var inst_4192 = (state_4196[(2)]);
var state_4196__$1 = state_4196;
var statearr_4202_4229 = state_4196__$1;
(statearr_4202_4229[(2)] = inst_4192);

(statearr_4202_4229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (13))){
var inst_4185 = cljs.core.async.close_BANG_.call(null,out);
var state_4196__$1 = state_4196;
var statearr_4203_4230 = state_4196__$1;
(statearr_4203_4230[(2)] = inst_4185);

(statearr_4203_4230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (6))){
var state_4196__$1 = state_4196;
var statearr_4204_4231 = state_4196__$1;
(statearr_4204_4231[(2)] = null);

(statearr_4204_4231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (3))){
var inst_4194 = (state_4196[(2)]);
var state_4196__$1 = state_4196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4196__$1,inst_4194);
} else {
if((state_val_4197 === (12))){
var inst_4182 = (state_4196[(8)]);
var inst_4182__$1 = (state_4196[(2)]);
var inst_4183 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4182__$1);
var state_4196__$1 = (function (){var statearr_4205 = state_4196;
(statearr_4205[(8)] = inst_4182__$1);

return statearr_4205;
})();
if(cljs.core.truth_(inst_4183)){
var statearr_4206_4232 = state_4196__$1;
(statearr_4206_4232[(1)] = (13));

} else {
var statearr_4207_4233 = state_4196__$1;
(statearr_4207_4233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (2))){
var inst_4159 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4160 = (0);
var state_4196__$1 = (function (){var statearr_4208 = state_4196;
(statearr_4208[(7)] = inst_4160);

(statearr_4208[(9)] = inst_4159);

return statearr_4208;
})();
var statearr_4209_4234 = state_4196__$1;
(statearr_4209_4234[(2)] = null);

(statearr_4209_4234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (11))){
var inst_4160 = (state_4196[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4196,(10),Object,null,(9));
var inst_4169 = chs__$1.call(null,inst_4160);
var inst_4170 = done.call(null,inst_4160);
var inst_4171 = cljs.core.async.take_BANG_.call(null,inst_4169,inst_4170);
var state_4196__$1 = state_4196;
var statearr_4210_4235 = state_4196__$1;
(statearr_4210_4235[(2)] = inst_4171);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4196__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (9))){
var inst_4160 = (state_4196[(7)]);
var inst_4173 = (state_4196[(2)]);
var inst_4174 = (inst_4160 + (1));
var inst_4160__$1 = inst_4174;
var state_4196__$1 = (function (){var statearr_4211 = state_4196;
(statearr_4211[(10)] = inst_4173);

(statearr_4211[(7)] = inst_4160__$1);

return statearr_4211;
})();
var statearr_4212_4236 = state_4196__$1;
(statearr_4212_4236[(2)] = null);

(statearr_4212_4236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (5))){
var inst_4180 = (state_4196[(2)]);
var state_4196__$1 = (function (){var statearr_4213 = state_4196;
(statearr_4213[(11)] = inst_4180);

return statearr_4213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4196__$1,(12),dchan);
} else {
if((state_val_4197 === (14))){
var inst_4182 = (state_4196[(8)]);
var inst_4187 = cljs.core.apply.call(null,f,inst_4182);
var state_4196__$1 = state_4196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4196__$1,(16),out,inst_4187);
} else {
if((state_val_4197 === (16))){
var inst_4189 = (state_4196[(2)]);
var state_4196__$1 = (function (){var statearr_4214 = state_4196;
(statearr_4214[(12)] = inst_4189);

return statearr_4214;
})();
var statearr_4215_4237 = state_4196__$1;
(statearr_4215_4237[(2)] = null);

(statearr_4215_4237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (10))){
var inst_4164 = (state_4196[(2)]);
var inst_4165 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4196__$1 = (function (){var statearr_4216 = state_4196;
(statearr_4216[(13)] = inst_4164);

return statearr_4216;
})();
var statearr_4217_4238 = state_4196__$1;
(statearr_4217_4238[(2)] = inst_4165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4196__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4197 === (8))){
var inst_4178 = (state_4196[(2)]);
var state_4196__$1 = state_4196;
var statearr_4218_4239 = state_4196__$1;
(statearr_4218_4239[(2)] = inst_4178);

(statearr_4218_4239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2795__auto__,c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4219[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4219[(1)] = (1));

return statearr_4219;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4196){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4220){if((e4220 instanceof Object)){
var ex__2799__auto__ = e4220;
var statearr_4221_4240 = state_4196;
(statearr_4221_4240[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4241 = state_4196;
state_4196 = G__4241;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2887__auto__ = (function (){var statearr_4222 = f__2886__auto__.call(null);
(statearr_4222[(6)] = c__2885__auto___4224);

return statearr_4222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4224,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__4244 = arguments.length;
switch (G__4244) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4298,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4298,out){
return (function (state_4276){
var state_val_4277 = (state_4276[(1)]);
if((state_val_4277 === (7))){
var inst_4256 = (state_4276[(7)]);
var inst_4255 = (state_4276[(8)]);
var inst_4255__$1 = (state_4276[(2)]);
var inst_4256__$1 = cljs.core.nth.call(null,inst_4255__$1,(0),null);
var inst_4257 = cljs.core.nth.call(null,inst_4255__$1,(1),null);
var inst_4258 = (inst_4256__$1 == null);
var state_4276__$1 = (function (){var statearr_4278 = state_4276;
(statearr_4278[(7)] = inst_4256__$1);

(statearr_4278[(9)] = inst_4257);

(statearr_4278[(8)] = inst_4255__$1);

return statearr_4278;
})();
if(cljs.core.truth_(inst_4258)){
var statearr_4279_4299 = state_4276__$1;
(statearr_4279_4299[(1)] = (8));

} else {
var statearr_4280_4300 = state_4276__$1;
(statearr_4280_4300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (1))){
var inst_4245 = cljs.core.vec.call(null,chs);
var inst_4246 = inst_4245;
var state_4276__$1 = (function (){var statearr_4281 = state_4276;
(statearr_4281[(10)] = inst_4246);

return statearr_4281;
})();
var statearr_4282_4301 = state_4276__$1;
(statearr_4282_4301[(2)] = null);

(statearr_4282_4301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (4))){
var inst_4246 = (state_4276[(10)]);
var state_4276__$1 = state_4276;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4276__$1,(7),inst_4246);
} else {
if((state_val_4277 === (6))){
var inst_4272 = (state_4276[(2)]);
var state_4276__$1 = state_4276;
var statearr_4283_4302 = state_4276__$1;
(statearr_4283_4302[(2)] = inst_4272);

(statearr_4283_4302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (3))){
var inst_4274 = (state_4276[(2)]);
var state_4276__$1 = state_4276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4276__$1,inst_4274);
} else {
if((state_val_4277 === (2))){
var inst_4246 = (state_4276[(10)]);
var inst_4248 = cljs.core.count.call(null,inst_4246);
var inst_4249 = (inst_4248 > (0));
var state_4276__$1 = state_4276;
if(cljs.core.truth_(inst_4249)){
var statearr_4285_4303 = state_4276__$1;
(statearr_4285_4303[(1)] = (4));

} else {
var statearr_4286_4304 = state_4276__$1;
(statearr_4286_4304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (11))){
var inst_4246 = (state_4276[(10)]);
var inst_4265 = (state_4276[(2)]);
var tmp4284 = inst_4246;
var inst_4246__$1 = tmp4284;
var state_4276__$1 = (function (){var statearr_4287 = state_4276;
(statearr_4287[(11)] = inst_4265);

(statearr_4287[(10)] = inst_4246__$1);

return statearr_4287;
})();
var statearr_4288_4305 = state_4276__$1;
(statearr_4288_4305[(2)] = null);

(statearr_4288_4305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (9))){
var inst_4256 = (state_4276[(7)]);
var state_4276__$1 = state_4276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4276__$1,(11),out,inst_4256);
} else {
if((state_val_4277 === (5))){
var inst_4270 = cljs.core.async.close_BANG_.call(null,out);
var state_4276__$1 = state_4276;
var statearr_4289_4306 = state_4276__$1;
(statearr_4289_4306[(2)] = inst_4270);

(statearr_4289_4306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (10))){
var inst_4268 = (state_4276[(2)]);
var state_4276__$1 = state_4276;
var statearr_4290_4307 = state_4276__$1;
(statearr_4290_4307[(2)] = inst_4268);

(statearr_4290_4307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4277 === (8))){
var inst_4256 = (state_4276[(7)]);
var inst_4257 = (state_4276[(9)]);
var inst_4246 = (state_4276[(10)]);
var inst_4255 = (state_4276[(8)]);
var inst_4260 = (function (){var cs = inst_4246;
var vec__4251 = inst_4255;
var v = inst_4256;
var c = inst_4257;
return ((function (cs,vec__4251,v,c,inst_4256,inst_4257,inst_4246,inst_4255,state_val_4277,c__2885__auto___4298,out){
return (function (p1__4242_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4242_SHARP_);
});
;})(cs,vec__4251,v,c,inst_4256,inst_4257,inst_4246,inst_4255,state_val_4277,c__2885__auto___4298,out))
})();
var inst_4261 = cljs.core.filterv.call(null,inst_4260,inst_4246);
var inst_4246__$1 = inst_4261;
var state_4276__$1 = (function (){var statearr_4291 = state_4276;
(statearr_4291[(10)] = inst_4246__$1);

return statearr_4291;
})();
var statearr_4292_4308 = state_4276__$1;
(statearr_4292_4308[(2)] = null);

(statearr_4292_4308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4298,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4298,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4293[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4293[(1)] = (1));

return statearr_4293;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4276){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4294){if((e4294 instanceof Object)){
var ex__2799__auto__ = e4294;
var statearr_4295_4309 = state_4276;
(statearr_4295_4309[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4310 = state_4276;
state_4276 = G__4310;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4298,out))
})();
var state__2887__auto__ = (function (){var statearr_4296 = f__2886__auto__.call(null);
(statearr_4296[(6)] = c__2885__auto___4298);

return statearr_4296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4298,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4312 = arguments.length;
switch (G__4312) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4357,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4357,out){
return (function (state_4336){
var state_val_4337 = (state_4336[(1)]);
if((state_val_4337 === (7))){
var inst_4318 = (state_4336[(7)]);
var inst_4318__$1 = (state_4336[(2)]);
var inst_4319 = (inst_4318__$1 == null);
var inst_4320 = cljs.core.not.call(null,inst_4319);
var state_4336__$1 = (function (){var statearr_4338 = state_4336;
(statearr_4338[(7)] = inst_4318__$1);

return statearr_4338;
})();
if(inst_4320){
var statearr_4339_4358 = state_4336__$1;
(statearr_4339_4358[(1)] = (8));

} else {
var statearr_4340_4359 = state_4336__$1;
(statearr_4340_4359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (1))){
var inst_4313 = (0);
var state_4336__$1 = (function (){var statearr_4341 = state_4336;
(statearr_4341[(8)] = inst_4313);

return statearr_4341;
})();
var statearr_4342_4360 = state_4336__$1;
(statearr_4342_4360[(2)] = null);

(statearr_4342_4360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (4))){
var state_4336__$1 = state_4336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4336__$1,(7),ch);
} else {
if((state_val_4337 === (6))){
var inst_4331 = (state_4336[(2)]);
var state_4336__$1 = state_4336;
var statearr_4343_4361 = state_4336__$1;
(statearr_4343_4361[(2)] = inst_4331);

(statearr_4343_4361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (3))){
var inst_4333 = (state_4336[(2)]);
var inst_4334 = cljs.core.async.close_BANG_.call(null,out);
var state_4336__$1 = (function (){var statearr_4344 = state_4336;
(statearr_4344[(9)] = inst_4333);

return statearr_4344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4336__$1,inst_4334);
} else {
if((state_val_4337 === (2))){
var inst_4313 = (state_4336[(8)]);
var inst_4315 = (inst_4313 < n);
var state_4336__$1 = state_4336;
if(cljs.core.truth_(inst_4315)){
var statearr_4345_4362 = state_4336__$1;
(statearr_4345_4362[(1)] = (4));

} else {
var statearr_4346_4363 = state_4336__$1;
(statearr_4346_4363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (11))){
var inst_4313 = (state_4336[(8)]);
var inst_4323 = (state_4336[(2)]);
var inst_4324 = (inst_4313 + (1));
var inst_4313__$1 = inst_4324;
var state_4336__$1 = (function (){var statearr_4347 = state_4336;
(statearr_4347[(8)] = inst_4313__$1);

(statearr_4347[(10)] = inst_4323);

return statearr_4347;
})();
var statearr_4348_4364 = state_4336__$1;
(statearr_4348_4364[(2)] = null);

(statearr_4348_4364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (9))){
var state_4336__$1 = state_4336;
var statearr_4349_4365 = state_4336__$1;
(statearr_4349_4365[(2)] = null);

(statearr_4349_4365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (5))){
var state_4336__$1 = state_4336;
var statearr_4350_4366 = state_4336__$1;
(statearr_4350_4366[(2)] = null);

(statearr_4350_4366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (10))){
var inst_4328 = (state_4336[(2)]);
var state_4336__$1 = state_4336;
var statearr_4351_4367 = state_4336__$1;
(statearr_4351_4367[(2)] = inst_4328);

(statearr_4351_4367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4337 === (8))){
var inst_4318 = (state_4336[(7)]);
var state_4336__$1 = state_4336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4336__$1,(11),out,inst_4318);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4357,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4357,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4352[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4352[(1)] = (1));

return statearr_4352;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4336){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4353){if((e4353 instanceof Object)){
var ex__2799__auto__ = e4353;
var statearr_4354_4368 = state_4336;
(statearr_4354_4368[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4369 = state_4336;
state_4336 = G__4369;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4357,out))
})();
var state__2887__auto__ = (function (){var statearr_4355 = f__2886__auto__.call(null);
(statearr_4355[(6)] = c__2885__auto___4357);

return statearr_4355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4357,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4371 = (function (f,ch,meta4372){
this.f = f;
this.ch = ch;
this.meta4372 = meta4372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4373,meta4372__$1){
var self__ = this;
var _4373__$1 = this;
return (new cljs.core.async.t_cljs$core$async4371(self__.f,self__.ch,meta4372__$1));
});

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4373){
var self__ = this;
var _4373__$1 = this;
return self__.meta4372;
});

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4374 = (function (f,ch,meta4372,_,fn1,meta4375){
this.f = f;
this.ch = ch;
this.meta4372 = meta4372;
this._ = _;
this.fn1 = fn1;
this.meta4375 = meta4375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4376,meta4375__$1){
var self__ = this;
var _4376__$1 = this;
return (new cljs.core.async.t_cljs$core$async4374(self__.f,self__.ch,self__.meta4372,self__._,self__.fn1,meta4375__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4376){
var self__ = this;
var _4376__$1 = this;
return self__.meta4375;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4370_SHARP_){
return f1.call(null,(((p1__4370_SHARP_ == null))?null:self__.f.call(null,p1__4370_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4372","meta4372",1489752394,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4371","cljs.core.async/t_cljs$core$async4371",1712967362,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4375","meta4375",-1937582461,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4374";

cljs.core.async.t_cljs$core$async4374.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4374");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4374.
 */
cljs.core.async.__GT_t_cljs$core$async4374 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4374(f__$1,ch__$1,meta4372__$1,___$2,fn1__$1,meta4375){
return (new cljs.core.async.t_cljs$core$async4374(f__$1,ch__$1,meta4372__$1,___$2,fn1__$1,meta4375));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4374(self__.f,self__.ch,self__.meta4372,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4372","meta4372",1489752394,null)], null);
});

cljs.core.async.t_cljs$core$async4371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4371";

cljs.core.async.t_cljs$core$async4371.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4371");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4371.
 */
cljs.core.async.__GT_t_cljs$core$async4371 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4371(f__$1,ch__$1,meta4372){
return (new cljs.core.async.t_cljs$core$async4371(f__$1,ch__$1,meta4372));
});

}

return (new cljs.core.async.t_cljs$core$async4371(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4377 = (function (f,ch,meta4378){
this.f = f;
this.ch = ch;
this.meta4378 = meta4378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4379,meta4378__$1){
var self__ = this;
var _4379__$1 = this;
return (new cljs.core.async.t_cljs$core$async4377(self__.f,self__.ch,meta4378__$1));
});

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4379){
var self__ = this;
var _4379__$1 = this;
return self__.meta4378;
});

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4378","meta4378",416836808,null)], null);
});

cljs.core.async.t_cljs$core$async4377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4377";

cljs.core.async.t_cljs$core$async4377.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4377");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4377.
 */
cljs.core.async.__GT_t_cljs$core$async4377 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4377(f__$1,ch__$1,meta4378){
return (new cljs.core.async.t_cljs$core$async4377(f__$1,ch__$1,meta4378));
});

}

return (new cljs.core.async.t_cljs$core$async4377(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4380 = (function (p,ch,meta4381){
this.p = p;
this.ch = ch;
this.meta4381 = meta4381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4382,meta4381__$1){
var self__ = this;
var _4382__$1 = this;
return (new cljs.core.async.t_cljs$core$async4380(self__.p,self__.ch,meta4381__$1));
});

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4382){
var self__ = this;
var _4382__$1 = this;
return self__.meta4381;
});

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4381","meta4381",692316978,null)], null);
});

cljs.core.async.t_cljs$core$async4380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4380";

cljs.core.async.t_cljs$core$async4380.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4380");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4380.
 */
cljs.core.async.__GT_t_cljs$core$async4380 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4380(p__$1,ch__$1,meta4381){
return (new cljs.core.async.t_cljs$core$async4380(p__$1,ch__$1,meta4381));
});

}

return (new cljs.core.async.t_cljs$core$async4380(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4384 = arguments.length;
switch (G__4384) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4424,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4424,out){
return (function (state_4405){
var state_val_4406 = (state_4405[(1)]);
if((state_val_4406 === (7))){
var inst_4401 = (state_4405[(2)]);
var state_4405__$1 = state_4405;
var statearr_4407_4425 = state_4405__$1;
(statearr_4407_4425[(2)] = inst_4401);

(statearr_4407_4425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (1))){
var state_4405__$1 = state_4405;
var statearr_4408_4426 = state_4405__$1;
(statearr_4408_4426[(2)] = null);

(statearr_4408_4426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (4))){
var inst_4387 = (state_4405[(7)]);
var inst_4387__$1 = (state_4405[(2)]);
var inst_4388 = (inst_4387__$1 == null);
var state_4405__$1 = (function (){var statearr_4409 = state_4405;
(statearr_4409[(7)] = inst_4387__$1);

return statearr_4409;
})();
if(cljs.core.truth_(inst_4388)){
var statearr_4410_4427 = state_4405__$1;
(statearr_4410_4427[(1)] = (5));

} else {
var statearr_4411_4428 = state_4405__$1;
(statearr_4411_4428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (6))){
var inst_4387 = (state_4405[(7)]);
var inst_4392 = p.call(null,inst_4387);
var state_4405__$1 = state_4405;
if(cljs.core.truth_(inst_4392)){
var statearr_4412_4429 = state_4405__$1;
(statearr_4412_4429[(1)] = (8));

} else {
var statearr_4413_4430 = state_4405__$1;
(statearr_4413_4430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (3))){
var inst_4403 = (state_4405[(2)]);
var state_4405__$1 = state_4405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4405__$1,inst_4403);
} else {
if((state_val_4406 === (2))){
var state_4405__$1 = state_4405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4405__$1,(4),ch);
} else {
if((state_val_4406 === (11))){
var inst_4395 = (state_4405[(2)]);
var state_4405__$1 = state_4405;
var statearr_4414_4431 = state_4405__$1;
(statearr_4414_4431[(2)] = inst_4395);

(statearr_4414_4431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (9))){
var state_4405__$1 = state_4405;
var statearr_4415_4432 = state_4405__$1;
(statearr_4415_4432[(2)] = null);

(statearr_4415_4432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (5))){
var inst_4390 = cljs.core.async.close_BANG_.call(null,out);
var state_4405__$1 = state_4405;
var statearr_4416_4433 = state_4405__$1;
(statearr_4416_4433[(2)] = inst_4390);

(statearr_4416_4433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (10))){
var inst_4398 = (state_4405[(2)]);
var state_4405__$1 = (function (){var statearr_4417 = state_4405;
(statearr_4417[(8)] = inst_4398);

return statearr_4417;
})();
var statearr_4418_4434 = state_4405__$1;
(statearr_4418_4434[(2)] = null);

(statearr_4418_4434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4406 === (8))){
var inst_4387 = (state_4405[(7)]);
var state_4405__$1 = state_4405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4405__$1,(11),out,inst_4387);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4424,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4424,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4419 = [null,null,null,null,null,null,null,null,null];
(statearr_4419[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4419[(1)] = (1));

return statearr_4419;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4405){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4420){if((e4420 instanceof Object)){
var ex__2799__auto__ = e4420;
var statearr_4421_4435 = state_4405;
(statearr_4421_4435[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4436 = state_4405;
state_4405 = G__4436;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4424,out))
})();
var state__2887__auto__ = (function (){var statearr_4422 = f__2886__auto__.call(null);
(statearr_4422[(6)] = c__2885__auto___4424);

return statearr_4422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4424,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4438 = arguments.length;
switch (G__4438) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto__){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto__){
return (function (state_4501){
var state_val_4502 = (state_4501[(1)]);
if((state_val_4502 === (7))){
var inst_4497 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4503_4541 = state_4501__$1;
(statearr_4503_4541[(2)] = inst_4497);

(statearr_4503_4541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (20))){
var inst_4467 = (state_4501[(7)]);
var inst_4478 = (state_4501[(2)]);
var inst_4479 = cljs.core.next.call(null,inst_4467);
var inst_4453 = inst_4479;
var inst_4454 = null;
var inst_4455 = (0);
var inst_4456 = (0);
var state_4501__$1 = (function (){var statearr_4504 = state_4501;
(statearr_4504[(8)] = inst_4455);

(statearr_4504[(9)] = inst_4456);

(statearr_4504[(10)] = inst_4453);

(statearr_4504[(11)] = inst_4478);

(statearr_4504[(12)] = inst_4454);

return statearr_4504;
})();
var statearr_4505_4542 = state_4501__$1;
(statearr_4505_4542[(2)] = null);

(statearr_4505_4542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (1))){
var state_4501__$1 = state_4501;
var statearr_4506_4543 = state_4501__$1;
(statearr_4506_4543[(2)] = null);

(statearr_4506_4543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (4))){
var inst_4442 = (state_4501[(13)]);
var inst_4442__$1 = (state_4501[(2)]);
var inst_4443 = (inst_4442__$1 == null);
var state_4501__$1 = (function (){var statearr_4507 = state_4501;
(statearr_4507[(13)] = inst_4442__$1);

return statearr_4507;
})();
if(cljs.core.truth_(inst_4443)){
var statearr_4508_4544 = state_4501__$1;
(statearr_4508_4544[(1)] = (5));

} else {
var statearr_4509_4545 = state_4501__$1;
(statearr_4509_4545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (15))){
var state_4501__$1 = state_4501;
var statearr_4513_4546 = state_4501__$1;
(statearr_4513_4546[(2)] = null);

(statearr_4513_4546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (21))){
var state_4501__$1 = state_4501;
var statearr_4514_4547 = state_4501__$1;
(statearr_4514_4547[(2)] = null);

(statearr_4514_4547[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (13))){
var inst_4455 = (state_4501[(8)]);
var inst_4456 = (state_4501[(9)]);
var inst_4453 = (state_4501[(10)]);
var inst_4454 = (state_4501[(12)]);
var inst_4463 = (state_4501[(2)]);
var inst_4464 = (inst_4456 + (1));
var tmp4510 = inst_4455;
var tmp4511 = inst_4453;
var tmp4512 = inst_4454;
var inst_4453__$1 = tmp4511;
var inst_4454__$1 = tmp4512;
var inst_4455__$1 = tmp4510;
var inst_4456__$1 = inst_4464;
var state_4501__$1 = (function (){var statearr_4515 = state_4501;
(statearr_4515[(8)] = inst_4455__$1);

(statearr_4515[(9)] = inst_4456__$1);

(statearr_4515[(10)] = inst_4453__$1);

(statearr_4515[(14)] = inst_4463);

(statearr_4515[(12)] = inst_4454__$1);

return statearr_4515;
})();
var statearr_4516_4548 = state_4501__$1;
(statearr_4516_4548[(2)] = null);

(statearr_4516_4548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (22))){
var state_4501__$1 = state_4501;
var statearr_4517_4549 = state_4501__$1;
(statearr_4517_4549[(2)] = null);

(statearr_4517_4549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (6))){
var inst_4442 = (state_4501[(13)]);
var inst_4451 = f.call(null,inst_4442);
var inst_4452 = cljs.core.seq.call(null,inst_4451);
var inst_4453 = inst_4452;
var inst_4454 = null;
var inst_4455 = (0);
var inst_4456 = (0);
var state_4501__$1 = (function (){var statearr_4518 = state_4501;
(statearr_4518[(8)] = inst_4455);

(statearr_4518[(9)] = inst_4456);

(statearr_4518[(10)] = inst_4453);

(statearr_4518[(12)] = inst_4454);

return statearr_4518;
})();
var statearr_4519_4550 = state_4501__$1;
(statearr_4519_4550[(2)] = null);

(statearr_4519_4550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (17))){
var inst_4467 = (state_4501[(7)]);
var inst_4471 = cljs.core.chunk_first.call(null,inst_4467);
var inst_4472 = cljs.core.chunk_rest.call(null,inst_4467);
var inst_4473 = cljs.core.count.call(null,inst_4471);
var inst_4453 = inst_4472;
var inst_4454 = inst_4471;
var inst_4455 = inst_4473;
var inst_4456 = (0);
var state_4501__$1 = (function (){var statearr_4520 = state_4501;
(statearr_4520[(8)] = inst_4455);

(statearr_4520[(9)] = inst_4456);

(statearr_4520[(10)] = inst_4453);

(statearr_4520[(12)] = inst_4454);

return statearr_4520;
})();
var statearr_4521_4551 = state_4501__$1;
(statearr_4521_4551[(2)] = null);

(statearr_4521_4551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (3))){
var inst_4499 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4501__$1,inst_4499);
} else {
if((state_val_4502 === (12))){
var inst_4487 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4522_4552 = state_4501__$1;
(statearr_4522_4552[(2)] = inst_4487);

(statearr_4522_4552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (2))){
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4501__$1,(4),in$);
} else {
if((state_val_4502 === (23))){
var inst_4495 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4523_4553 = state_4501__$1;
(statearr_4523_4553[(2)] = inst_4495);

(statearr_4523_4553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (19))){
var inst_4482 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4524_4554 = state_4501__$1;
(statearr_4524_4554[(2)] = inst_4482);

(statearr_4524_4554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (11))){
var inst_4453 = (state_4501[(10)]);
var inst_4467 = (state_4501[(7)]);
var inst_4467__$1 = cljs.core.seq.call(null,inst_4453);
var state_4501__$1 = (function (){var statearr_4525 = state_4501;
(statearr_4525[(7)] = inst_4467__$1);

return statearr_4525;
})();
if(inst_4467__$1){
var statearr_4526_4555 = state_4501__$1;
(statearr_4526_4555[(1)] = (14));

} else {
var statearr_4527_4556 = state_4501__$1;
(statearr_4527_4556[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (9))){
var inst_4489 = (state_4501[(2)]);
var inst_4490 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4501__$1 = (function (){var statearr_4528 = state_4501;
(statearr_4528[(15)] = inst_4489);

return statearr_4528;
})();
if(cljs.core.truth_(inst_4490)){
var statearr_4529_4557 = state_4501__$1;
(statearr_4529_4557[(1)] = (21));

} else {
var statearr_4530_4558 = state_4501__$1;
(statearr_4530_4558[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (5))){
var inst_4445 = cljs.core.async.close_BANG_.call(null,out);
var state_4501__$1 = state_4501;
var statearr_4531_4559 = state_4501__$1;
(statearr_4531_4559[(2)] = inst_4445);

(statearr_4531_4559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (14))){
var inst_4467 = (state_4501[(7)]);
var inst_4469 = cljs.core.chunked_seq_QMARK_.call(null,inst_4467);
var state_4501__$1 = state_4501;
if(inst_4469){
var statearr_4532_4560 = state_4501__$1;
(statearr_4532_4560[(1)] = (17));

} else {
var statearr_4533_4561 = state_4501__$1;
(statearr_4533_4561[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (16))){
var inst_4485 = (state_4501[(2)]);
var state_4501__$1 = state_4501;
var statearr_4534_4562 = state_4501__$1;
(statearr_4534_4562[(2)] = inst_4485);

(statearr_4534_4562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4502 === (10))){
var inst_4456 = (state_4501[(9)]);
var inst_4454 = (state_4501[(12)]);
var inst_4461 = cljs.core._nth.call(null,inst_4454,inst_4456);
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4501__$1,(13),out,inst_4461);
} else {
if((state_val_4502 === (18))){
var inst_4467 = (state_4501[(7)]);
var inst_4476 = cljs.core.first.call(null,inst_4467);
var state_4501__$1 = state_4501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4501__$1,(20),out,inst_4476);
} else {
if((state_val_4502 === (8))){
var inst_4455 = (state_4501[(8)]);
var inst_4456 = (state_4501[(9)]);
var inst_4458 = (inst_4456 < inst_4455);
var inst_4459 = inst_4458;
var state_4501__$1 = state_4501;
if(cljs.core.truth_(inst_4459)){
var statearr_4535_4563 = state_4501__$1;
(statearr_4535_4563[(1)] = (10));

} else {
var statearr_4536_4564 = state_4501__$1;
(statearr_4536_4564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto__))
;
return ((function (switch__2795__auto__,c__2885__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____0 = (function (){
var statearr_4537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4537[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__);

(statearr_4537[(1)] = (1));

return statearr_4537;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____1 = (function (state_4501){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4538){if((e4538 instanceof Object)){
var ex__2799__auto__ = e4538;
var statearr_4539_4565 = state_4501;
(statearr_4539_4565[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4566 = state_4501;
state_4501 = G__4566;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__ = function(state_4501){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____1.call(this,state_4501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2796__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto__))
})();
var state__2887__auto__ = (function (){var statearr_4540 = f__2886__auto__.call(null);
(statearr_4540[(6)] = c__2885__auto__);

return statearr_4540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto__))
);

return c__2885__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4568 = arguments.length;
switch (G__4568) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4571 = arguments.length;
switch (G__4571) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4574 = arguments.length;
switch (G__4574) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4621,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4621,out){
return (function (state_4598){
var state_val_4599 = (state_4598[(1)]);
if((state_val_4599 === (7))){
var inst_4593 = (state_4598[(2)]);
var state_4598__$1 = state_4598;
var statearr_4600_4622 = state_4598__$1;
(statearr_4600_4622[(2)] = inst_4593);

(statearr_4600_4622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (1))){
var inst_4575 = null;
var state_4598__$1 = (function (){var statearr_4601 = state_4598;
(statearr_4601[(7)] = inst_4575);

return statearr_4601;
})();
var statearr_4602_4623 = state_4598__$1;
(statearr_4602_4623[(2)] = null);

(statearr_4602_4623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (4))){
var inst_4578 = (state_4598[(8)]);
var inst_4578__$1 = (state_4598[(2)]);
var inst_4579 = (inst_4578__$1 == null);
var inst_4580 = cljs.core.not.call(null,inst_4579);
var state_4598__$1 = (function (){var statearr_4603 = state_4598;
(statearr_4603[(8)] = inst_4578__$1);

return statearr_4603;
})();
if(inst_4580){
var statearr_4604_4624 = state_4598__$1;
(statearr_4604_4624[(1)] = (5));

} else {
var statearr_4605_4625 = state_4598__$1;
(statearr_4605_4625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (6))){
var state_4598__$1 = state_4598;
var statearr_4606_4626 = state_4598__$1;
(statearr_4606_4626[(2)] = null);

(statearr_4606_4626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (3))){
var inst_4595 = (state_4598[(2)]);
var inst_4596 = cljs.core.async.close_BANG_.call(null,out);
var state_4598__$1 = (function (){var statearr_4607 = state_4598;
(statearr_4607[(9)] = inst_4595);

return statearr_4607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4598__$1,inst_4596);
} else {
if((state_val_4599 === (2))){
var state_4598__$1 = state_4598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4598__$1,(4),ch);
} else {
if((state_val_4599 === (11))){
var inst_4578 = (state_4598[(8)]);
var inst_4587 = (state_4598[(2)]);
var inst_4575 = inst_4578;
var state_4598__$1 = (function (){var statearr_4608 = state_4598;
(statearr_4608[(10)] = inst_4587);

(statearr_4608[(7)] = inst_4575);

return statearr_4608;
})();
var statearr_4609_4627 = state_4598__$1;
(statearr_4609_4627[(2)] = null);

(statearr_4609_4627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (9))){
var inst_4578 = (state_4598[(8)]);
var state_4598__$1 = state_4598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4598__$1,(11),out,inst_4578);
} else {
if((state_val_4599 === (5))){
var inst_4578 = (state_4598[(8)]);
var inst_4575 = (state_4598[(7)]);
var inst_4582 = cljs.core._EQ_.call(null,inst_4578,inst_4575);
var state_4598__$1 = state_4598;
if(inst_4582){
var statearr_4611_4628 = state_4598__$1;
(statearr_4611_4628[(1)] = (8));

} else {
var statearr_4612_4629 = state_4598__$1;
(statearr_4612_4629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (10))){
var inst_4590 = (state_4598[(2)]);
var state_4598__$1 = state_4598;
var statearr_4613_4630 = state_4598__$1;
(statearr_4613_4630[(2)] = inst_4590);

(statearr_4613_4630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4599 === (8))){
var inst_4575 = (state_4598[(7)]);
var tmp4610 = inst_4575;
var inst_4575__$1 = tmp4610;
var state_4598__$1 = (function (){var statearr_4614 = state_4598;
(statearr_4614[(7)] = inst_4575__$1);

return statearr_4614;
})();
var statearr_4615_4631 = state_4598__$1;
(statearr_4615_4631[(2)] = null);

(statearr_4615_4631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4621,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4621,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4616[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4616[(1)] = (1));

return statearr_4616;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4598){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4617){if((e4617 instanceof Object)){
var ex__2799__auto__ = e4617;
var statearr_4618_4632 = state_4598;
(statearr_4618_4632[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4633 = state_4598;
state_4598 = G__4633;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4621,out))
})();
var state__2887__auto__ = (function (){var statearr_4619 = f__2886__auto__.call(null);
(statearr_4619[(6)] = c__2885__auto___4621);

return statearr_4619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4621,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4635 = arguments.length;
switch (G__4635) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4701,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4701,out){
return (function (state_4673){
var state_val_4674 = (state_4673[(1)]);
if((state_val_4674 === (7))){
var inst_4669 = (state_4673[(2)]);
var state_4673__$1 = state_4673;
var statearr_4675_4702 = state_4673__$1;
(statearr_4675_4702[(2)] = inst_4669);

(statearr_4675_4702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (1))){
var inst_4636 = (new Array(n));
var inst_4637 = inst_4636;
var inst_4638 = (0);
var state_4673__$1 = (function (){var statearr_4676 = state_4673;
(statearr_4676[(7)] = inst_4638);

(statearr_4676[(8)] = inst_4637);

return statearr_4676;
})();
var statearr_4677_4703 = state_4673__$1;
(statearr_4677_4703[(2)] = null);

(statearr_4677_4703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (4))){
var inst_4641 = (state_4673[(9)]);
var inst_4641__$1 = (state_4673[(2)]);
var inst_4642 = (inst_4641__$1 == null);
var inst_4643 = cljs.core.not.call(null,inst_4642);
var state_4673__$1 = (function (){var statearr_4678 = state_4673;
(statearr_4678[(9)] = inst_4641__$1);

return statearr_4678;
})();
if(inst_4643){
var statearr_4679_4704 = state_4673__$1;
(statearr_4679_4704[(1)] = (5));

} else {
var statearr_4680_4705 = state_4673__$1;
(statearr_4680_4705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (15))){
var inst_4663 = (state_4673[(2)]);
var state_4673__$1 = state_4673;
var statearr_4681_4706 = state_4673__$1;
(statearr_4681_4706[(2)] = inst_4663);

(statearr_4681_4706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (13))){
var state_4673__$1 = state_4673;
var statearr_4682_4707 = state_4673__$1;
(statearr_4682_4707[(2)] = null);

(statearr_4682_4707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (6))){
var inst_4638 = (state_4673[(7)]);
var inst_4659 = (inst_4638 > (0));
var state_4673__$1 = state_4673;
if(cljs.core.truth_(inst_4659)){
var statearr_4683_4708 = state_4673__$1;
(statearr_4683_4708[(1)] = (12));

} else {
var statearr_4684_4709 = state_4673__$1;
(statearr_4684_4709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (3))){
var inst_4671 = (state_4673[(2)]);
var state_4673__$1 = state_4673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4673__$1,inst_4671);
} else {
if((state_val_4674 === (12))){
var inst_4637 = (state_4673[(8)]);
var inst_4661 = cljs.core.vec.call(null,inst_4637);
var state_4673__$1 = state_4673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4673__$1,(15),out,inst_4661);
} else {
if((state_val_4674 === (2))){
var state_4673__$1 = state_4673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4673__$1,(4),ch);
} else {
if((state_val_4674 === (11))){
var inst_4653 = (state_4673[(2)]);
var inst_4654 = (new Array(n));
var inst_4637 = inst_4654;
var inst_4638 = (0);
var state_4673__$1 = (function (){var statearr_4685 = state_4673;
(statearr_4685[(10)] = inst_4653);

(statearr_4685[(7)] = inst_4638);

(statearr_4685[(8)] = inst_4637);

return statearr_4685;
})();
var statearr_4686_4710 = state_4673__$1;
(statearr_4686_4710[(2)] = null);

(statearr_4686_4710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (9))){
var inst_4637 = (state_4673[(8)]);
var inst_4651 = cljs.core.vec.call(null,inst_4637);
var state_4673__$1 = state_4673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4673__$1,(11),out,inst_4651);
} else {
if((state_val_4674 === (5))){
var inst_4638 = (state_4673[(7)]);
var inst_4641 = (state_4673[(9)]);
var inst_4646 = (state_4673[(11)]);
var inst_4637 = (state_4673[(8)]);
var inst_4645 = (inst_4637[inst_4638] = inst_4641);
var inst_4646__$1 = (inst_4638 + (1));
var inst_4647 = (inst_4646__$1 < n);
var state_4673__$1 = (function (){var statearr_4687 = state_4673;
(statearr_4687[(11)] = inst_4646__$1);

(statearr_4687[(12)] = inst_4645);

return statearr_4687;
})();
if(cljs.core.truth_(inst_4647)){
var statearr_4688_4711 = state_4673__$1;
(statearr_4688_4711[(1)] = (8));

} else {
var statearr_4689_4712 = state_4673__$1;
(statearr_4689_4712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (14))){
var inst_4666 = (state_4673[(2)]);
var inst_4667 = cljs.core.async.close_BANG_.call(null,out);
var state_4673__$1 = (function (){var statearr_4691 = state_4673;
(statearr_4691[(13)] = inst_4666);

return statearr_4691;
})();
var statearr_4692_4713 = state_4673__$1;
(statearr_4692_4713[(2)] = inst_4667);

(statearr_4692_4713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (10))){
var inst_4657 = (state_4673[(2)]);
var state_4673__$1 = state_4673;
var statearr_4693_4714 = state_4673__$1;
(statearr_4693_4714[(2)] = inst_4657);

(statearr_4693_4714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4674 === (8))){
var inst_4646 = (state_4673[(11)]);
var inst_4637 = (state_4673[(8)]);
var tmp4690 = inst_4637;
var inst_4637__$1 = tmp4690;
var inst_4638 = inst_4646;
var state_4673__$1 = (function (){var statearr_4694 = state_4673;
(statearr_4694[(7)] = inst_4638);

(statearr_4694[(8)] = inst_4637__$1);

return statearr_4694;
})();
var statearr_4695_4715 = state_4673__$1;
(statearr_4695_4715[(2)] = null);

(statearr_4695_4715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4701,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4701,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4696[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4696[(1)] = (1));

return statearr_4696;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4673){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4697){if((e4697 instanceof Object)){
var ex__2799__auto__ = e4697;
var statearr_4698_4716 = state_4673;
(statearr_4698_4716[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4717 = state_4673;
state_4673 = G__4717;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4701,out))
})();
var state__2887__auto__ = (function (){var statearr_4699 = f__2886__auto__.call(null);
(statearr_4699[(6)] = c__2885__auto___4701);

return statearr_4699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4701,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4719 = arguments.length;
switch (G__4719) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2885__auto___4789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2885__auto___4789,out){
return (function (){
var f__2886__auto__ = (function (){var switch__2795__auto__ = ((function (c__2885__auto___4789,out){
return (function (state_4761){
var state_val_4762 = (state_4761[(1)]);
if((state_val_4762 === (7))){
var inst_4757 = (state_4761[(2)]);
var state_4761__$1 = state_4761;
var statearr_4763_4790 = state_4761__$1;
(statearr_4763_4790[(2)] = inst_4757);

(statearr_4763_4790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (1))){
var inst_4720 = [];
var inst_4721 = inst_4720;
var inst_4722 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4761__$1 = (function (){var statearr_4764 = state_4761;
(statearr_4764[(7)] = inst_4722);

(statearr_4764[(8)] = inst_4721);

return statearr_4764;
})();
var statearr_4765_4791 = state_4761__$1;
(statearr_4765_4791[(2)] = null);

(statearr_4765_4791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (4))){
var inst_4725 = (state_4761[(9)]);
var inst_4725__$1 = (state_4761[(2)]);
var inst_4726 = (inst_4725__$1 == null);
var inst_4727 = cljs.core.not.call(null,inst_4726);
var state_4761__$1 = (function (){var statearr_4766 = state_4761;
(statearr_4766[(9)] = inst_4725__$1);

return statearr_4766;
})();
if(inst_4727){
var statearr_4767_4792 = state_4761__$1;
(statearr_4767_4792[(1)] = (5));

} else {
var statearr_4768_4793 = state_4761__$1;
(statearr_4768_4793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (15))){
var inst_4751 = (state_4761[(2)]);
var state_4761__$1 = state_4761;
var statearr_4769_4794 = state_4761__$1;
(statearr_4769_4794[(2)] = inst_4751);

(statearr_4769_4794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (13))){
var state_4761__$1 = state_4761;
var statearr_4770_4795 = state_4761__$1;
(statearr_4770_4795[(2)] = null);

(statearr_4770_4795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (6))){
var inst_4721 = (state_4761[(8)]);
var inst_4746 = inst_4721.length;
var inst_4747 = (inst_4746 > (0));
var state_4761__$1 = state_4761;
if(cljs.core.truth_(inst_4747)){
var statearr_4771_4796 = state_4761__$1;
(statearr_4771_4796[(1)] = (12));

} else {
var statearr_4772_4797 = state_4761__$1;
(statearr_4772_4797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (3))){
var inst_4759 = (state_4761[(2)]);
var state_4761__$1 = state_4761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4761__$1,inst_4759);
} else {
if((state_val_4762 === (12))){
var inst_4721 = (state_4761[(8)]);
var inst_4749 = cljs.core.vec.call(null,inst_4721);
var state_4761__$1 = state_4761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4761__$1,(15),out,inst_4749);
} else {
if((state_val_4762 === (2))){
var state_4761__$1 = state_4761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4761__$1,(4),ch);
} else {
if((state_val_4762 === (11))){
var inst_4725 = (state_4761[(9)]);
var inst_4729 = (state_4761[(10)]);
var inst_4739 = (state_4761[(2)]);
var inst_4740 = [];
var inst_4741 = inst_4740.push(inst_4725);
var inst_4721 = inst_4740;
var inst_4722 = inst_4729;
var state_4761__$1 = (function (){var statearr_4773 = state_4761;
(statearr_4773[(7)] = inst_4722);

(statearr_4773[(11)] = inst_4741);

(statearr_4773[(8)] = inst_4721);

(statearr_4773[(12)] = inst_4739);

return statearr_4773;
})();
var statearr_4774_4798 = state_4761__$1;
(statearr_4774_4798[(2)] = null);

(statearr_4774_4798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (9))){
var inst_4721 = (state_4761[(8)]);
var inst_4737 = cljs.core.vec.call(null,inst_4721);
var state_4761__$1 = state_4761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4761__$1,(11),out,inst_4737);
} else {
if((state_val_4762 === (5))){
var inst_4725 = (state_4761[(9)]);
var inst_4722 = (state_4761[(7)]);
var inst_4729 = (state_4761[(10)]);
var inst_4729__$1 = f.call(null,inst_4725);
var inst_4730 = cljs.core._EQ_.call(null,inst_4729__$1,inst_4722);
var inst_4731 = cljs.core.keyword_identical_QMARK_.call(null,inst_4722,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4732 = ((inst_4730) || (inst_4731));
var state_4761__$1 = (function (){var statearr_4775 = state_4761;
(statearr_4775[(10)] = inst_4729__$1);

return statearr_4775;
})();
if(cljs.core.truth_(inst_4732)){
var statearr_4776_4799 = state_4761__$1;
(statearr_4776_4799[(1)] = (8));

} else {
var statearr_4777_4800 = state_4761__$1;
(statearr_4777_4800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (14))){
var inst_4754 = (state_4761[(2)]);
var inst_4755 = cljs.core.async.close_BANG_.call(null,out);
var state_4761__$1 = (function (){var statearr_4779 = state_4761;
(statearr_4779[(13)] = inst_4754);

return statearr_4779;
})();
var statearr_4780_4801 = state_4761__$1;
(statearr_4780_4801[(2)] = inst_4755);

(statearr_4780_4801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (10))){
var inst_4744 = (state_4761[(2)]);
var state_4761__$1 = state_4761;
var statearr_4781_4802 = state_4761__$1;
(statearr_4781_4802[(2)] = inst_4744);

(statearr_4781_4802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4762 === (8))){
var inst_4725 = (state_4761[(9)]);
var inst_4729 = (state_4761[(10)]);
var inst_4721 = (state_4761[(8)]);
var inst_4734 = inst_4721.push(inst_4725);
var tmp4778 = inst_4721;
var inst_4721__$1 = tmp4778;
var inst_4722 = inst_4729;
var state_4761__$1 = (function (){var statearr_4782 = state_4761;
(statearr_4782[(14)] = inst_4734);

(statearr_4782[(7)] = inst_4722);

(statearr_4782[(8)] = inst_4721__$1);

return statearr_4782;
})();
var statearr_4783_4803 = state_4761__$1;
(statearr_4783_4803[(2)] = null);

(statearr_4783_4803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2885__auto___4789,out))
;
return ((function (switch__2795__auto__,c__2885__auto___4789,out){
return (function() {
var cljs$core$async$state_machine__2796__auto__ = null;
var cljs$core$async$state_machine__2796__auto____0 = (function (){
var statearr_4784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4784[(0)] = cljs$core$async$state_machine__2796__auto__);

(statearr_4784[(1)] = (1));

return statearr_4784;
});
var cljs$core$async$state_machine__2796__auto____1 = (function (state_4761){
while(true){
var ret_value__2797__auto__ = (function (){try{while(true){
var result__2798__auto__ = switch__2795__auto__.call(null,state_4761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2798__auto__;
}
break;
}
}catch (e4785){if((e4785 instanceof Object)){
var ex__2799__auto__ = e4785;
var statearr_4786_4804 = state_4761;
(statearr_4786_4804[(5)] = ex__2799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4805 = state_4761;
state_4761 = G__4805;
continue;
} else {
return ret_value__2797__auto__;
}
break;
}
});
cljs$core$async$state_machine__2796__auto__ = function(state_4761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2796__auto____1.call(this,state_4761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2796__auto____0;
cljs$core$async$state_machine__2796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2796__auto____1;
return cljs$core$async$state_machine__2796__auto__;
})()
;})(switch__2795__auto__,c__2885__auto___4789,out))
})();
var state__2887__auto__ = (function (){var statearr_4787 = f__2886__auto__.call(null);
(statearr_4787[(6)] = c__2885__auto___4789);

return statearr_4787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2887__auto__);
});})(c__2885__auto___4789,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
