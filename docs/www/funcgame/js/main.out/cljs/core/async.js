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
var G__2942 = arguments.length;
switch (G__2942) {
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
if(typeof cljs.core.async.t_cljs$core$async2943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2943 = (function (f,blockable,meta2944){
this.f = f;
this.blockable = blockable;
this.meta2944 = meta2944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2945,meta2944__$1){
var self__ = this;
var _2945__$1 = this;
return (new cljs.core.async.t_cljs$core$async2943(self__.f,self__.blockable,meta2944__$1));
});

cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2945){
var self__ = this;
var _2945__$1 = this;
return self__.meta2944;
});

cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async2943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async2943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2944","meta2944",2091926993,null)], null);
});

cljs.core.async.t_cljs$core$async2943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2943";

cljs.core.async.t_cljs$core$async2943.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2943");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2943.
 */
cljs.core.async.__GT_t_cljs$core$async2943 = (function cljs$core$async$__GT_t_cljs$core$async2943(f__$1,blockable__$1,meta2944){
return (new cljs.core.async.t_cljs$core$async2943(f__$1,blockable__$1,meta2944));
});

}

return (new cljs.core.async.t_cljs$core$async2943(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__2949 = arguments.length;
switch (G__2949) {
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
var G__2952 = arguments.length;
switch (G__2952) {
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
var G__2955 = arguments.length;
switch (G__2955) {
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
var val_2957 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2957);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_2957,ret){
return (function (){
return fn1.call(null,val_2957);
});})(val_2957,ret))
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
var G__2959 = arguments.length;
switch (G__2959) {
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
var n__4376__auto___2961 = n;
var x_2962 = (0);
while(true){
if((x_2962 < n__4376__auto___2961)){
(a[x_2962] = (0));

var G__2963 = (x_2962 + (1));
x_2962 = G__2963;
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

var G__2964 = (i + (1));
i = G__2964;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async2965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2965 = (function (flag,meta2966){
this.flag = flag;
this.meta2966 = meta2966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_2967,meta2966__$1){
var self__ = this;
var _2967__$1 = this;
return (new cljs.core.async.t_cljs$core$async2965(self__.flag,meta2966__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_2967){
var self__ = this;
var _2967__$1 = this;
return self__.meta2966;
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2966","meta2966",503259768,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async2965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2965";

cljs.core.async.t_cljs$core$async2965.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2965");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2965.
 */
cljs.core.async.__GT_t_cljs$core$async2965 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2965(flag__$1,meta2966){
return (new cljs.core.async.t_cljs$core$async2965(flag__$1,meta2966));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async2965(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async2968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2968 = (function (flag,cb,meta2969){
this.flag = flag;
this.cb = cb;
this.meta2969 = meta2969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2970,meta2969__$1){
var self__ = this;
var _2970__$1 = this;
return (new cljs.core.async.t_cljs$core$async2968(self__.flag,self__.cb,meta2969__$1));
});

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2970){
var self__ = this;
var _2970__$1 = this;
return self__.meta2969;
});

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async2968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2969","meta2969",2013054203,null)], null);
});

cljs.core.async.t_cljs$core$async2968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2968";

cljs.core.async.t_cljs$core$async2968.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2968");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2968.
 */
cljs.core.async.__GT_t_cljs$core$async2968 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2968(flag__$1,cb__$1,meta2969){
return (new cljs.core.async.t_cljs$core$async2968(flag__$1,cb__$1,meta2969));
});

}

return (new cljs.core.async.t_cljs$core$async2968(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__2971_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2971_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2972_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2972_SHARP_,port], null));
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
var G__2973 = (i + (1));
i = G__2973;
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
var len__4499__auto___2979 = arguments.length;
var i__4500__auto___2980 = (0);
while(true){
if((i__4500__auto___2980 < len__4499__auto___2979)){
args__4502__auto__.push((arguments[i__4500__auto___2980]));

var G__2981 = (i__4500__auto___2980 + (1));
i__4500__auto___2980 = G__2981;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2976){
var map__2977 = p__2976;
var map__2977__$1 = ((((!((map__2977 == null)))?(((((map__2977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2977):map__2977);
var opts = map__2977__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2974){
var G__2975 = cljs.core.first.call(null,seq2974);
var seq2974__$1 = cljs.core.next.call(null,seq2974);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2975,seq2974__$1);
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
var G__2983 = arguments.length;
switch (G__2983) {
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
var c__2882__auto___3029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3029){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3029){
return (function (state_3007){
var state_val_3008 = (state_3007[(1)]);
if((state_val_3008 === (7))){
var inst_3003 = (state_3007[(2)]);
var state_3007__$1 = state_3007;
var statearr_3009_3030 = state_3007__$1;
(statearr_3009_3030[(2)] = inst_3003);

(statearr_3009_3030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (1))){
var state_3007__$1 = state_3007;
var statearr_3010_3031 = state_3007__$1;
(statearr_3010_3031[(2)] = null);

(statearr_3010_3031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (4))){
var inst_2986 = (state_3007[(7)]);
var inst_2986__$1 = (state_3007[(2)]);
var inst_2987 = (inst_2986__$1 == null);
var state_3007__$1 = (function (){var statearr_3011 = state_3007;
(statearr_3011[(7)] = inst_2986__$1);

return statearr_3011;
})();
if(cljs.core.truth_(inst_2987)){
var statearr_3012_3032 = state_3007__$1;
(statearr_3012_3032[(1)] = (5));

} else {
var statearr_3013_3033 = state_3007__$1;
(statearr_3013_3033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (13))){
var state_3007__$1 = state_3007;
var statearr_3014_3034 = state_3007__$1;
(statearr_3014_3034[(2)] = null);

(statearr_3014_3034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (6))){
var inst_2986 = (state_3007[(7)]);
var state_3007__$1 = state_3007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3007__$1,(11),to,inst_2986);
} else {
if((state_val_3008 === (3))){
var inst_3005 = (state_3007[(2)]);
var state_3007__$1 = state_3007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3007__$1,inst_3005);
} else {
if((state_val_3008 === (12))){
var state_3007__$1 = state_3007;
var statearr_3015_3035 = state_3007__$1;
(statearr_3015_3035[(2)] = null);

(statearr_3015_3035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (2))){
var state_3007__$1 = state_3007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3007__$1,(4),from);
} else {
if((state_val_3008 === (11))){
var inst_2996 = (state_3007[(2)]);
var state_3007__$1 = state_3007;
if(cljs.core.truth_(inst_2996)){
var statearr_3016_3036 = state_3007__$1;
(statearr_3016_3036[(1)] = (12));

} else {
var statearr_3017_3037 = state_3007__$1;
(statearr_3017_3037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (9))){
var state_3007__$1 = state_3007;
var statearr_3018_3038 = state_3007__$1;
(statearr_3018_3038[(2)] = null);

(statearr_3018_3038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (5))){
var state_3007__$1 = state_3007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3019_3039 = state_3007__$1;
(statearr_3019_3039[(1)] = (8));

} else {
var statearr_3020_3040 = state_3007__$1;
(statearr_3020_3040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (14))){
var inst_3001 = (state_3007[(2)]);
var state_3007__$1 = state_3007;
var statearr_3021_3041 = state_3007__$1;
(statearr_3021_3041[(2)] = inst_3001);

(statearr_3021_3041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (10))){
var inst_2993 = (state_3007[(2)]);
var state_3007__$1 = state_3007;
var statearr_3022_3042 = state_3007__$1;
(statearr_3022_3042[(2)] = inst_2993);

(statearr_3022_3042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3008 === (8))){
var inst_2990 = cljs.core.async.close_BANG_.call(null,to);
var state_3007__$1 = state_3007;
var statearr_3023_3043 = state_3007__$1;
(statearr_3023_3043[(2)] = inst_2990);

(statearr_3023_3043[(1)] = (10));


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
});})(c__2882__auto___3029))
;
return ((function (switch__2792__auto__,c__2882__auto___3029){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_3024 = [null,null,null,null,null,null,null,null];
(statearr_3024[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_3024[(1)] = (1));

return statearr_3024;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_3007){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3025){if((e3025 instanceof Object)){
var ex__2796__auto__ = e3025;
var statearr_3026_3044 = state_3007;
(statearr_3026_3044[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3045 = state_3007;
state_3007 = G__3045;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_3007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_3007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3029))
})();
var state__2884__auto__ = (function (){var statearr_3027 = f__2883__auto__.call(null);
(statearr_3027[(6)] = c__2882__auto___3029);

return statearr_3027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3029))
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
return (function (p__3046){
var vec__3047 = p__3046;
var v = cljs.core.nth.call(null,vec__3047,(0),null);
var p = cljs.core.nth.call(null,vec__3047,(1),null);
var job = vec__3047;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2882__auto___3218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results){
return (function (state_3054){
var state_val_3055 = (state_3054[(1)]);
if((state_val_3055 === (1))){
var state_3054__$1 = state_3054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3054__$1,(2),res,v);
} else {
if((state_val_3055 === (2))){
var inst_3051 = (state_3054[(2)]);
var inst_3052 = cljs.core.async.close_BANG_.call(null,res);
var state_3054__$1 = (function (){var statearr_3056 = state_3054;
(statearr_3056[(7)] = inst_3051);

return statearr_3056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3054__$1,inst_3052);
} else {
return null;
}
}
});})(c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results))
;
return ((function (switch__2792__auto__,c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_3057 = [null,null,null,null,null,null,null,null];
(statearr_3057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__);

(statearr_3057[(1)] = (1));

return statearr_3057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1 = (function (state_3054){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3058){if((e3058 instanceof Object)){
var ex__2796__auto__ = e3058;
var statearr_3059_3219 = state_3054;
(statearr_3059_3219[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3220 = state_3054;
state_3054 = G__3220;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = function(state_3054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1.call(this,state_3054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results))
})();
var state__2884__auto__ = (function (){var statearr_3060 = f__2883__auto__.call(null);
(statearr_3060[(6)] = c__2882__auto___3218);

return statearr_3060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3218,res,vec__3047,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3061){
var vec__3062 = p__3061;
var v = cljs.core.nth.call(null,vec__3062,(0),null);
var p = cljs.core.nth.call(null,vec__3062,(1),null);
var job = vec__3062;
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
var n__4376__auto___3221 = n;
var __3222 = (0);
while(true){
if((__3222 < n__4376__auto___3221)){
var G__3065_3223 = type;
var G__3065_3224__$1 = (((G__3065_3223 instanceof cljs.core.Keyword))?G__3065_3223.fqn:null);
switch (G__3065_3224__$1) {
case "compute":
var c__2882__auto___3226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3222,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (__3222,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function (state_3078){
var state_val_3079 = (state_3078[(1)]);
if((state_val_3079 === (1))){
var state_3078__$1 = state_3078;
var statearr_3080_3227 = state_3078__$1;
(statearr_3080_3227[(2)] = null);

(statearr_3080_3227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3079 === (2))){
var state_3078__$1 = state_3078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3078__$1,(4),jobs);
} else {
if((state_val_3079 === (3))){
var inst_3076 = (state_3078[(2)]);
var state_3078__$1 = state_3078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3078__$1,inst_3076);
} else {
if((state_val_3079 === (4))){
var inst_3068 = (state_3078[(2)]);
var inst_3069 = process.call(null,inst_3068);
var state_3078__$1 = state_3078;
if(cljs.core.truth_(inst_3069)){
var statearr_3081_3228 = state_3078__$1;
(statearr_3081_3228[(1)] = (5));

} else {
var statearr_3082_3229 = state_3078__$1;
(statearr_3082_3229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3079 === (5))){
var state_3078__$1 = state_3078;
var statearr_3083_3230 = state_3078__$1;
(statearr_3083_3230[(2)] = null);

(statearr_3083_3230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3079 === (6))){
var state_3078__$1 = state_3078;
var statearr_3084_3231 = state_3078__$1;
(statearr_3084_3231[(2)] = null);

(statearr_3084_3231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3079 === (7))){
var inst_3074 = (state_3078[(2)]);
var state_3078__$1 = state_3078;
var statearr_3085_3232 = state_3078__$1;
(statearr_3085_3232[(2)] = inst_3074);

(statearr_3085_3232[(1)] = (3));


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
});})(__3222,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
;
return ((function (__3222,switch__2792__auto__,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_3086 = [null,null,null,null,null,null,null];
(statearr_3086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__);

(statearr_3086[(1)] = (1));

return statearr_3086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1 = (function (state_3078){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3087){if((e3087 instanceof Object)){
var ex__2796__auto__ = e3087;
var statearr_3088_3233 = state_3078;
(statearr_3088_3233[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3234 = state_3078;
state_3078 = G__3234;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = function(state_3078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1.call(this,state_3078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__;
})()
;})(__3222,switch__2792__auto__,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
})();
var state__2884__auto__ = (function (){var statearr_3089 = f__2883__auto__.call(null);
(statearr_3089[(6)] = c__2882__auto___3226);

return statearr_3089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(__3222,c__2882__auto___3226,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
);


break;
case "async":
var c__2882__auto___3235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3222,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (__3222,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function (state_3102){
var state_val_3103 = (state_3102[(1)]);
if((state_val_3103 === (1))){
var state_3102__$1 = state_3102;
var statearr_3104_3236 = state_3102__$1;
(statearr_3104_3236[(2)] = null);

(statearr_3104_3236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3103 === (2))){
var state_3102__$1 = state_3102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3102__$1,(4),jobs);
} else {
if((state_val_3103 === (3))){
var inst_3100 = (state_3102[(2)]);
var state_3102__$1 = state_3102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3102__$1,inst_3100);
} else {
if((state_val_3103 === (4))){
var inst_3092 = (state_3102[(2)]);
var inst_3093 = async.call(null,inst_3092);
var state_3102__$1 = state_3102;
if(cljs.core.truth_(inst_3093)){
var statearr_3105_3237 = state_3102__$1;
(statearr_3105_3237[(1)] = (5));

} else {
var statearr_3106_3238 = state_3102__$1;
(statearr_3106_3238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3103 === (5))){
var state_3102__$1 = state_3102;
var statearr_3107_3239 = state_3102__$1;
(statearr_3107_3239[(2)] = null);

(statearr_3107_3239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3103 === (6))){
var state_3102__$1 = state_3102;
var statearr_3108_3240 = state_3102__$1;
(statearr_3108_3240[(2)] = null);

(statearr_3108_3240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3103 === (7))){
var inst_3098 = (state_3102[(2)]);
var state_3102__$1 = state_3102;
var statearr_3109_3241 = state_3102__$1;
(statearr_3109_3241[(2)] = inst_3098);

(statearr_3109_3241[(1)] = (3));


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
});})(__3222,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
;
return ((function (__3222,switch__2792__auto__,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_3110 = [null,null,null,null,null,null,null];
(statearr_3110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__);

(statearr_3110[(1)] = (1));

return statearr_3110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1 = (function (state_3102){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3111){if((e3111 instanceof Object)){
var ex__2796__auto__ = e3111;
var statearr_3112_3242 = state_3102;
(statearr_3112_3242[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3243 = state_3102;
state_3102 = G__3243;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = function(state_3102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1.call(this,state_3102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__;
})()
;})(__3222,switch__2792__auto__,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
})();
var state__2884__auto__ = (function (){var statearr_3113 = f__2883__auto__.call(null);
(statearr_3113[(6)] = c__2882__auto___3235);

return statearr_3113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(__3222,c__2882__auto___3235,G__3065_3223,G__3065_3224__$1,n__4376__auto___3221,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3065_3224__$1)].join('')));

}

var G__3244 = (__3222 + (1));
__3222 = G__3244;
continue;
} else {
}
break;
}

var c__2882__auto___3245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3245,jobs,results,process,async){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3245,jobs,results,process,async){
return (function (state_3135){
var state_val_3136 = (state_3135[(1)]);
if((state_val_3136 === (1))){
var state_3135__$1 = state_3135;
var statearr_3137_3246 = state_3135__$1;
(statearr_3137_3246[(2)] = null);

(statearr_3137_3246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3136 === (2))){
var state_3135__$1 = state_3135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3135__$1,(4),from);
} else {
if((state_val_3136 === (3))){
var inst_3133 = (state_3135[(2)]);
var state_3135__$1 = state_3135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3135__$1,inst_3133);
} else {
if((state_val_3136 === (4))){
var inst_3116 = (state_3135[(7)]);
var inst_3116__$1 = (state_3135[(2)]);
var inst_3117 = (inst_3116__$1 == null);
var state_3135__$1 = (function (){var statearr_3138 = state_3135;
(statearr_3138[(7)] = inst_3116__$1);

return statearr_3138;
})();
if(cljs.core.truth_(inst_3117)){
var statearr_3139_3247 = state_3135__$1;
(statearr_3139_3247[(1)] = (5));

} else {
var statearr_3140_3248 = state_3135__$1;
(statearr_3140_3248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3136 === (5))){
var inst_3119 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3135__$1 = state_3135;
var statearr_3141_3249 = state_3135__$1;
(statearr_3141_3249[(2)] = inst_3119);

(statearr_3141_3249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3136 === (6))){
var inst_3116 = (state_3135[(7)]);
var inst_3121 = (state_3135[(8)]);
var inst_3121__$1 = cljs.core.async.chan.call(null,(1));
var inst_3122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3123 = [inst_3116,inst_3121__$1];
var inst_3124 = (new cljs.core.PersistentVector(null,2,(5),inst_3122,inst_3123,null));
var state_3135__$1 = (function (){var statearr_3142 = state_3135;
(statearr_3142[(8)] = inst_3121__$1);

return statearr_3142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3135__$1,(8),jobs,inst_3124);
} else {
if((state_val_3136 === (7))){
var inst_3131 = (state_3135[(2)]);
var state_3135__$1 = state_3135;
var statearr_3143_3250 = state_3135__$1;
(statearr_3143_3250[(2)] = inst_3131);

(statearr_3143_3250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3136 === (8))){
var inst_3121 = (state_3135[(8)]);
var inst_3126 = (state_3135[(2)]);
var state_3135__$1 = (function (){var statearr_3144 = state_3135;
(statearr_3144[(9)] = inst_3126);

return statearr_3144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3135__$1,(9),results,inst_3121);
} else {
if((state_val_3136 === (9))){
var inst_3128 = (state_3135[(2)]);
var state_3135__$1 = (function (){var statearr_3145 = state_3135;
(statearr_3145[(10)] = inst_3128);

return statearr_3145;
})();
var statearr_3146_3251 = state_3135__$1;
(statearr_3146_3251[(2)] = null);

(statearr_3146_3251[(1)] = (2));


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
});})(c__2882__auto___3245,jobs,results,process,async))
;
return ((function (switch__2792__auto__,c__2882__auto___3245,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_3147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__);

(statearr_3147[(1)] = (1));

return statearr_3147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1 = (function (state_3135){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3148){if((e3148 instanceof Object)){
var ex__2796__auto__ = e3148;
var statearr_3149_3252 = state_3135;
(statearr_3149_3252[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3253 = state_3135;
state_3135 = G__3253;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = function(state_3135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1.call(this,state_3135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3245,jobs,results,process,async))
})();
var state__2884__auto__ = (function (){var statearr_3150 = f__2883__auto__.call(null);
(statearr_3150[(6)] = c__2882__auto___3245);

return statearr_3150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3245,jobs,results,process,async))
);


var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,jobs,results,process,async){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,jobs,results,process,async){
return (function (state_3188){
var state_val_3189 = (state_3188[(1)]);
if((state_val_3189 === (7))){
var inst_3184 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
var statearr_3190_3254 = state_3188__$1;
(statearr_3190_3254[(2)] = inst_3184);

(statearr_3190_3254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (20))){
var state_3188__$1 = state_3188;
var statearr_3191_3255 = state_3188__$1;
(statearr_3191_3255[(2)] = null);

(statearr_3191_3255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (1))){
var state_3188__$1 = state_3188;
var statearr_3192_3256 = state_3188__$1;
(statearr_3192_3256[(2)] = null);

(statearr_3192_3256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (4))){
var inst_3153 = (state_3188[(7)]);
var inst_3153__$1 = (state_3188[(2)]);
var inst_3154 = (inst_3153__$1 == null);
var state_3188__$1 = (function (){var statearr_3193 = state_3188;
(statearr_3193[(7)] = inst_3153__$1);

return statearr_3193;
})();
if(cljs.core.truth_(inst_3154)){
var statearr_3194_3257 = state_3188__$1;
(statearr_3194_3257[(1)] = (5));

} else {
var statearr_3195_3258 = state_3188__$1;
(statearr_3195_3258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (15))){
var inst_3166 = (state_3188[(8)]);
var state_3188__$1 = state_3188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3188__$1,(18),to,inst_3166);
} else {
if((state_val_3189 === (21))){
var inst_3179 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
var statearr_3196_3259 = state_3188__$1;
(statearr_3196_3259[(2)] = inst_3179);

(statearr_3196_3259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (13))){
var inst_3181 = (state_3188[(2)]);
var state_3188__$1 = (function (){var statearr_3197 = state_3188;
(statearr_3197[(9)] = inst_3181);

return statearr_3197;
})();
var statearr_3198_3260 = state_3188__$1;
(statearr_3198_3260[(2)] = null);

(statearr_3198_3260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (6))){
var inst_3153 = (state_3188[(7)]);
var state_3188__$1 = state_3188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3188__$1,(11),inst_3153);
} else {
if((state_val_3189 === (17))){
var inst_3174 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
if(cljs.core.truth_(inst_3174)){
var statearr_3199_3261 = state_3188__$1;
(statearr_3199_3261[(1)] = (19));

} else {
var statearr_3200_3262 = state_3188__$1;
(statearr_3200_3262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (3))){
var inst_3186 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3188__$1,inst_3186);
} else {
if((state_val_3189 === (12))){
var inst_3163 = (state_3188[(10)]);
var state_3188__$1 = state_3188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3188__$1,(14),inst_3163);
} else {
if((state_val_3189 === (2))){
var state_3188__$1 = state_3188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3188__$1,(4),results);
} else {
if((state_val_3189 === (19))){
var state_3188__$1 = state_3188;
var statearr_3201_3263 = state_3188__$1;
(statearr_3201_3263[(2)] = null);

(statearr_3201_3263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (11))){
var inst_3163 = (state_3188[(2)]);
var state_3188__$1 = (function (){var statearr_3202 = state_3188;
(statearr_3202[(10)] = inst_3163);

return statearr_3202;
})();
var statearr_3203_3264 = state_3188__$1;
(statearr_3203_3264[(2)] = null);

(statearr_3203_3264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (9))){
var state_3188__$1 = state_3188;
var statearr_3204_3265 = state_3188__$1;
(statearr_3204_3265[(2)] = null);

(statearr_3204_3265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (5))){
var state_3188__$1 = state_3188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3205_3266 = state_3188__$1;
(statearr_3205_3266[(1)] = (8));

} else {
var statearr_3206_3267 = state_3188__$1;
(statearr_3206_3267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (14))){
var inst_3168 = (state_3188[(11)]);
var inst_3166 = (state_3188[(8)]);
var inst_3166__$1 = (state_3188[(2)]);
var inst_3167 = (inst_3166__$1 == null);
var inst_3168__$1 = cljs.core.not.call(null,inst_3167);
var state_3188__$1 = (function (){var statearr_3207 = state_3188;
(statearr_3207[(11)] = inst_3168__$1);

(statearr_3207[(8)] = inst_3166__$1);

return statearr_3207;
})();
if(inst_3168__$1){
var statearr_3208_3268 = state_3188__$1;
(statearr_3208_3268[(1)] = (15));

} else {
var statearr_3209_3269 = state_3188__$1;
(statearr_3209_3269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (16))){
var inst_3168 = (state_3188[(11)]);
var state_3188__$1 = state_3188;
var statearr_3210_3270 = state_3188__$1;
(statearr_3210_3270[(2)] = inst_3168);

(statearr_3210_3270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (10))){
var inst_3160 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
var statearr_3211_3271 = state_3188__$1;
(statearr_3211_3271[(2)] = inst_3160);

(statearr_3211_3271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (18))){
var inst_3171 = (state_3188[(2)]);
var state_3188__$1 = state_3188;
var statearr_3212_3272 = state_3188__$1;
(statearr_3212_3272[(2)] = inst_3171);

(statearr_3212_3272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3189 === (8))){
var inst_3157 = cljs.core.async.close_BANG_.call(null,to);
var state_3188__$1 = state_3188;
var statearr_3213_3273 = state_3188__$1;
(statearr_3213_3273[(2)] = inst_3157);

(statearr_3213_3273[(1)] = (10));


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
});})(c__2882__auto__,jobs,results,process,async))
;
return ((function (switch__2792__auto__,c__2882__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_3214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__);

(statearr_3214[(1)] = (1));

return statearr_3214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1 = (function (state_3188){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3215){if((e3215 instanceof Object)){
var ex__2796__auto__ = e3215;
var statearr_3216_3274 = state_3188;
(statearr_3216_3274[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3275 = state_3188;
state_3188 = G__3275;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__ = function(state_3188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1.call(this,state_3188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,jobs,results,process,async))
})();
var state__2884__auto__ = (function (){var statearr_3217 = f__2883__auto__.call(null);
(statearr_3217[(6)] = c__2882__auto__);

return statearr_3217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,jobs,results,process,async))
);

return c__2882__auto__;
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
var G__3277 = arguments.length;
switch (G__3277) {
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
var G__3280 = arguments.length;
switch (G__3280) {
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
var G__3283 = arguments.length;
switch (G__3283) {
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
var c__2882__auto___3332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3332,tc,fc){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3332,tc,fc){
return (function (state_3309){
var state_val_3310 = (state_3309[(1)]);
if((state_val_3310 === (7))){
var inst_3305 = (state_3309[(2)]);
var state_3309__$1 = state_3309;
var statearr_3311_3333 = state_3309__$1;
(statearr_3311_3333[(2)] = inst_3305);

(statearr_3311_3333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (1))){
var state_3309__$1 = state_3309;
var statearr_3312_3334 = state_3309__$1;
(statearr_3312_3334[(2)] = null);

(statearr_3312_3334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (4))){
var inst_3286 = (state_3309[(7)]);
var inst_3286__$1 = (state_3309[(2)]);
var inst_3287 = (inst_3286__$1 == null);
var state_3309__$1 = (function (){var statearr_3313 = state_3309;
(statearr_3313[(7)] = inst_3286__$1);

return statearr_3313;
})();
if(cljs.core.truth_(inst_3287)){
var statearr_3314_3335 = state_3309__$1;
(statearr_3314_3335[(1)] = (5));

} else {
var statearr_3315_3336 = state_3309__$1;
(statearr_3315_3336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (13))){
var state_3309__$1 = state_3309;
var statearr_3316_3337 = state_3309__$1;
(statearr_3316_3337[(2)] = null);

(statearr_3316_3337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (6))){
var inst_3286 = (state_3309[(7)]);
var inst_3292 = p.call(null,inst_3286);
var state_3309__$1 = state_3309;
if(cljs.core.truth_(inst_3292)){
var statearr_3317_3338 = state_3309__$1;
(statearr_3317_3338[(1)] = (9));

} else {
var statearr_3318_3339 = state_3309__$1;
(statearr_3318_3339[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (3))){
var inst_3307 = (state_3309[(2)]);
var state_3309__$1 = state_3309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3309__$1,inst_3307);
} else {
if((state_val_3310 === (12))){
var state_3309__$1 = state_3309;
var statearr_3319_3340 = state_3309__$1;
(statearr_3319_3340[(2)] = null);

(statearr_3319_3340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (2))){
var state_3309__$1 = state_3309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3309__$1,(4),ch);
} else {
if((state_val_3310 === (11))){
var inst_3286 = (state_3309[(7)]);
var inst_3296 = (state_3309[(2)]);
var state_3309__$1 = state_3309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3309__$1,(8),inst_3296,inst_3286);
} else {
if((state_val_3310 === (9))){
var state_3309__$1 = state_3309;
var statearr_3320_3341 = state_3309__$1;
(statearr_3320_3341[(2)] = tc);

(statearr_3320_3341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (5))){
var inst_3289 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3290 = cljs.core.async.close_BANG_.call(null,fc);
var state_3309__$1 = (function (){var statearr_3321 = state_3309;
(statearr_3321[(8)] = inst_3289);

return statearr_3321;
})();
var statearr_3322_3342 = state_3309__$1;
(statearr_3322_3342[(2)] = inst_3290);

(statearr_3322_3342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (14))){
var inst_3303 = (state_3309[(2)]);
var state_3309__$1 = state_3309;
var statearr_3323_3343 = state_3309__$1;
(statearr_3323_3343[(2)] = inst_3303);

(statearr_3323_3343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (10))){
var state_3309__$1 = state_3309;
var statearr_3324_3344 = state_3309__$1;
(statearr_3324_3344[(2)] = fc);

(statearr_3324_3344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3310 === (8))){
var inst_3298 = (state_3309[(2)]);
var state_3309__$1 = state_3309;
if(cljs.core.truth_(inst_3298)){
var statearr_3325_3345 = state_3309__$1;
(statearr_3325_3345[(1)] = (12));

} else {
var statearr_3326_3346 = state_3309__$1;
(statearr_3326_3346[(1)] = (13));

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
});})(c__2882__auto___3332,tc,fc))
;
return ((function (switch__2792__auto__,c__2882__auto___3332,tc,fc){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_3327 = [null,null,null,null,null,null,null,null,null];
(statearr_3327[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_3327[(1)] = (1));

return statearr_3327;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_3309){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3328){if((e3328 instanceof Object)){
var ex__2796__auto__ = e3328;
var statearr_3329_3347 = state_3309;
(statearr_3329_3347[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3348 = state_3309;
state_3309 = G__3348;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_3309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_3309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3332,tc,fc))
})();
var state__2884__auto__ = (function (){var statearr_3330 = f__2883__auto__.call(null);
(statearr_3330[(6)] = c__2882__auto___3332);

return statearr_3330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3332,tc,fc))
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
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_3369){
var state_val_3370 = (state_3369[(1)]);
if((state_val_3370 === (7))){
var inst_3365 = (state_3369[(2)]);
var state_3369__$1 = state_3369;
var statearr_3371_3389 = state_3369__$1;
(statearr_3371_3389[(2)] = inst_3365);

(statearr_3371_3389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (1))){
var inst_3349 = init;
var state_3369__$1 = (function (){var statearr_3372 = state_3369;
(statearr_3372[(7)] = inst_3349);

return statearr_3372;
})();
var statearr_3373_3390 = state_3369__$1;
(statearr_3373_3390[(2)] = null);

(statearr_3373_3390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (4))){
var inst_3352 = (state_3369[(8)]);
var inst_3352__$1 = (state_3369[(2)]);
var inst_3353 = (inst_3352__$1 == null);
var state_3369__$1 = (function (){var statearr_3374 = state_3369;
(statearr_3374[(8)] = inst_3352__$1);

return statearr_3374;
})();
if(cljs.core.truth_(inst_3353)){
var statearr_3375_3391 = state_3369__$1;
(statearr_3375_3391[(1)] = (5));

} else {
var statearr_3376_3392 = state_3369__$1;
(statearr_3376_3392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (6))){
var inst_3349 = (state_3369[(7)]);
var inst_3352 = (state_3369[(8)]);
var inst_3356 = (state_3369[(9)]);
var inst_3356__$1 = f.call(null,inst_3349,inst_3352);
var inst_3357 = cljs.core.reduced_QMARK_.call(null,inst_3356__$1);
var state_3369__$1 = (function (){var statearr_3377 = state_3369;
(statearr_3377[(9)] = inst_3356__$1);

return statearr_3377;
})();
if(inst_3357){
var statearr_3378_3393 = state_3369__$1;
(statearr_3378_3393[(1)] = (8));

} else {
var statearr_3379_3394 = state_3369__$1;
(statearr_3379_3394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (3))){
var inst_3367 = (state_3369[(2)]);
var state_3369__$1 = state_3369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3369__$1,inst_3367);
} else {
if((state_val_3370 === (2))){
var state_3369__$1 = state_3369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3369__$1,(4),ch);
} else {
if((state_val_3370 === (9))){
var inst_3356 = (state_3369[(9)]);
var inst_3349 = inst_3356;
var state_3369__$1 = (function (){var statearr_3380 = state_3369;
(statearr_3380[(7)] = inst_3349);

return statearr_3380;
})();
var statearr_3381_3395 = state_3369__$1;
(statearr_3381_3395[(2)] = null);

(statearr_3381_3395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (5))){
var inst_3349 = (state_3369[(7)]);
var state_3369__$1 = state_3369;
var statearr_3382_3396 = state_3369__$1;
(statearr_3382_3396[(2)] = inst_3349);

(statearr_3382_3396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (10))){
var inst_3363 = (state_3369[(2)]);
var state_3369__$1 = state_3369;
var statearr_3383_3397 = state_3369__$1;
(statearr_3383_3397[(2)] = inst_3363);

(statearr_3383_3397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3370 === (8))){
var inst_3356 = (state_3369[(9)]);
var inst_3359 = cljs.core.deref.call(null,inst_3356);
var state_3369__$1 = state_3369;
var statearr_3384_3398 = state_3369__$1;
(statearr_3384_3398[(2)] = inst_3359);

(statearr_3384_3398[(1)] = (10));


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
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2793__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2793__auto____0 = (function (){
var statearr_3385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3385[(0)] = cljs$core$async$reduce_$_state_machine__2793__auto__);

(statearr_3385[(1)] = (1));

return statearr_3385;
});
var cljs$core$async$reduce_$_state_machine__2793__auto____1 = (function (state_3369){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3386){if((e3386 instanceof Object)){
var ex__2796__auto__ = e3386;
var statearr_3387_3399 = state_3369;
(statearr_3387_3399[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3400 = state_3369;
state_3369 = G__3400;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2793__auto__ = function(state_3369){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2793__auto____1.call(this,state_3369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2793__auto____0;
cljs$core$async$reduce_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2793__auto____1;
return cljs$core$async$reduce_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_3388 = f__2883__auto__.call(null);
(statearr_3388[(6)] = c__2882__auto__);

return statearr_3388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,f__$1){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,f__$1){
return (function (state_3406){
var state_val_3407 = (state_3406[(1)]);
if((state_val_3407 === (1))){
var inst_3401 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3406__$1 = state_3406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3406__$1,(2),inst_3401);
} else {
if((state_val_3407 === (2))){
var inst_3403 = (state_3406[(2)]);
var inst_3404 = f__$1.call(null,inst_3403);
var state_3406__$1 = state_3406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3406__$1,inst_3404);
} else {
return null;
}
}
});})(c__2882__auto__,f__$1))
;
return ((function (switch__2792__auto__,c__2882__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2793__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2793__auto____0 = (function (){
var statearr_3408 = [null,null,null,null,null,null,null];
(statearr_3408[(0)] = cljs$core$async$transduce_$_state_machine__2793__auto__);

(statearr_3408[(1)] = (1));

return statearr_3408;
});
var cljs$core$async$transduce_$_state_machine__2793__auto____1 = (function (state_3406){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3409){if((e3409 instanceof Object)){
var ex__2796__auto__ = e3409;
var statearr_3410_3412 = state_3406;
(statearr_3410_3412[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3413 = state_3406;
state_3406 = G__3413;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2793__auto__ = function(state_3406){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2793__auto____1.call(this,state_3406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2793__auto____0;
cljs$core$async$transduce_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2793__auto____1;
return cljs$core$async$transduce_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,f__$1))
})();
var state__2884__auto__ = (function (){var statearr_3411 = f__2883__auto__.call(null);
(statearr_3411[(6)] = c__2882__auto__);

return statearr_3411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,f__$1))
);

return c__2882__auto__;
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
var G__3415 = arguments.length;
switch (G__3415) {
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
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_3440){
var state_val_3441 = (state_3440[(1)]);
if((state_val_3441 === (7))){
var inst_3422 = (state_3440[(2)]);
var state_3440__$1 = state_3440;
var statearr_3442_3463 = state_3440__$1;
(statearr_3442_3463[(2)] = inst_3422);

(statearr_3442_3463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (1))){
var inst_3416 = cljs.core.seq.call(null,coll);
var inst_3417 = inst_3416;
var state_3440__$1 = (function (){var statearr_3443 = state_3440;
(statearr_3443[(7)] = inst_3417);

return statearr_3443;
})();
var statearr_3444_3464 = state_3440__$1;
(statearr_3444_3464[(2)] = null);

(statearr_3444_3464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (4))){
var inst_3417 = (state_3440[(7)]);
var inst_3420 = cljs.core.first.call(null,inst_3417);
var state_3440__$1 = state_3440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3440__$1,(7),ch,inst_3420);
} else {
if((state_val_3441 === (13))){
var inst_3434 = (state_3440[(2)]);
var state_3440__$1 = state_3440;
var statearr_3445_3465 = state_3440__$1;
(statearr_3445_3465[(2)] = inst_3434);

(statearr_3445_3465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (6))){
var inst_3425 = (state_3440[(2)]);
var state_3440__$1 = state_3440;
if(cljs.core.truth_(inst_3425)){
var statearr_3446_3466 = state_3440__$1;
(statearr_3446_3466[(1)] = (8));

} else {
var statearr_3447_3467 = state_3440__$1;
(statearr_3447_3467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (3))){
var inst_3438 = (state_3440[(2)]);
var state_3440__$1 = state_3440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3440__$1,inst_3438);
} else {
if((state_val_3441 === (12))){
var state_3440__$1 = state_3440;
var statearr_3448_3468 = state_3440__$1;
(statearr_3448_3468[(2)] = null);

(statearr_3448_3468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (2))){
var inst_3417 = (state_3440[(7)]);
var state_3440__$1 = state_3440;
if(cljs.core.truth_(inst_3417)){
var statearr_3449_3469 = state_3440__$1;
(statearr_3449_3469[(1)] = (4));

} else {
var statearr_3450_3470 = state_3440__$1;
(statearr_3450_3470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (11))){
var inst_3431 = cljs.core.async.close_BANG_.call(null,ch);
var state_3440__$1 = state_3440;
var statearr_3451_3471 = state_3440__$1;
(statearr_3451_3471[(2)] = inst_3431);

(statearr_3451_3471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (9))){
var state_3440__$1 = state_3440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3452_3472 = state_3440__$1;
(statearr_3452_3472[(1)] = (11));

} else {
var statearr_3453_3473 = state_3440__$1;
(statearr_3453_3473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (5))){
var inst_3417 = (state_3440[(7)]);
var state_3440__$1 = state_3440;
var statearr_3454_3474 = state_3440__$1;
(statearr_3454_3474[(2)] = inst_3417);

(statearr_3454_3474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (10))){
var inst_3436 = (state_3440[(2)]);
var state_3440__$1 = state_3440;
var statearr_3455_3475 = state_3440__$1;
(statearr_3455_3475[(2)] = inst_3436);

(statearr_3455_3475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3441 === (8))){
var inst_3417 = (state_3440[(7)]);
var inst_3427 = cljs.core.next.call(null,inst_3417);
var inst_3417__$1 = inst_3427;
var state_3440__$1 = (function (){var statearr_3456 = state_3440;
(statearr_3456[(7)] = inst_3417__$1);

return statearr_3456;
})();
var statearr_3457_3476 = state_3440__$1;
(statearr_3457_3476[(2)] = null);

(statearr_3457_3476[(1)] = (2));


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
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_3458 = [null,null,null,null,null,null,null,null];
(statearr_3458[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_3458[(1)] = (1));

return statearr_3458;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_3440){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3459){if((e3459 instanceof Object)){
var ex__2796__auto__ = e3459;
var statearr_3460_3477 = state_3440;
(statearr_3460_3477[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3478 = state_3440;
state_3440 = G__3478;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_3440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_3440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_3461 = f__2883__auto__.call(null);
(statearr_3461[(6)] = c__2882__auto__);

return statearr_3461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async3479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3479 = (function (ch,cs,meta3480){
this.ch = ch;
this.cs = cs;
this.meta3480 = meta3480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3481,meta3480__$1){
var self__ = this;
var _3481__$1 = this;
return (new cljs.core.async.t_cljs$core$async3479(self__.ch,self__.cs,meta3480__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3481){
var self__ = this;
var _3481__$1 = this;
return self__.meta3480;
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3480","meta3480",-960504767,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3479";

cljs.core.async.t_cljs$core$async3479.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3479");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3479.
 */
cljs.core.async.__GT_t_cljs$core$async3479 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3479(ch__$1,cs__$1,meta3480){
return (new cljs.core.async.t_cljs$core$async3479(ch__$1,cs__$1,meta3480));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3479(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__2882__auto___3701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3701,cs,m,dchan,dctr,done){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3701,cs,m,dchan,dctr,done){
return (function (state_3616){
var state_val_3617 = (state_3616[(1)]);
if((state_val_3617 === (7))){
var inst_3612 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3618_3702 = state_3616__$1;
(statearr_3618_3702[(2)] = inst_3612);

(statearr_3618_3702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (20))){
var inst_3515 = (state_3616[(7)]);
var inst_3527 = cljs.core.first.call(null,inst_3515);
var inst_3528 = cljs.core.nth.call(null,inst_3527,(0),null);
var inst_3529 = cljs.core.nth.call(null,inst_3527,(1),null);
var state_3616__$1 = (function (){var statearr_3619 = state_3616;
(statearr_3619[(8)] = inst_3528);

return statearr_3619;
})();
if(cljs.core.truth_(inst_3529)){
var statearr_3620_3703 = state_3616__$1;
(statearr_3620_3703[(1)] = (22));

} else {
var statearr_3621_3704 = state_3616__$1;
(statearr_3621_3704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (27))){
var inst_3564 = (state_3616[(9)]);
var inst_3484 = (state_3616[(10)]);
var inst_3557 = (state_3616[(11)]);
var inst_3559 = (state_3616[(12)]);
var inst_3564__$1 = cljs.core._nth.call(null,inst_3557,inst_3559);
var inst_3565 = cljs.core.async.put_BANG_.call(null,inst_3564__$1,inst_3484,done);
var state_3616__$1 = (function (){var statearr_3622 = state_3616;
(statearr_3622[(9)] = inst_3564__$1);

return statearr_3622;
})();
if(cljs.core.truth_(inst_3565)){
var statearr_3623_3705 = state_3616__$1;
(statearr_3623_3705[(1)] = (30));

} else {
var statearr_3624_3706 = state_3616__$1;
(statearr_3624_3706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (1))){
var state_3616__$1 = state_3616;
var statearr_3625_3707 = state_3616__$1;
(statearr_3625_3707[(2)] = null);

(statearr_3625_3707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (24))){
var inst_3515 = (state_3616[(7)]);
var inst_3534 = (state_3616[(2)]);
var inst_3535 = cljs.core.next.call(null,inst_3515);
var inst_3493 = inst_3535;
var inst_3494 = null;
var inst_3495 = (0);
var inst_3496 = (0);
var state_3616__$1 = (function (){var statearr_3626 = state_3616;
(statearr_3626[(13)] = inst_3493);

(statearr_3626[(14)] = inst_3534);

(statearr_3626[(15)] = inst_3495);

(statearr_3626[(16)] = inst_3494);

(statearr_3626[(17)] = inst_3496);

return statearr_3626;
})();
var statearr_3627_3708 = state_3616__$1;
(statearr_3627_3708[(2)] = null);

(statearr_3627_3708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (39))){
var state_3616__$1 = state_3616;
var statearr_3631_3709 = state_3616__$1;
(statearr_3631_3709[(2)] = null);

(statearr_3631_3709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (4))){
var inst_3484 = (state_3616[(10)]);
var inst_3484__$1 = (state_3616[(2)]);
var inst_3485 = (inst_3484__$1 == null);
var state_3616__$1 = (function (){var statearr_3632 = state_3616;
(statearr_3632[(10)] = inst_3484__$1);

return statearr_3632;
})();
if(cljs.core.truth_(inst_3485)){
var statearr_3633_3710 = state_3616__$1;
(statearr_3633_3710[(1)] = (5));

} else {
var statearr_3634_3711 = state_3616__$1;
(statearr_3634_3711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (15))){
var inst_3493 = (state_3616[(13)]);
var inst_3495 = (state_3616[(15)]);
var inst_3494 = (state_3616[(16)]);
var inst_3496 = (state_3616[(17)]);
var inst_3511 = (state_3616[(2)]);
var inst_3512 = (inst_3496 + (1));
var tmp3628 = inst_3493;
var tmp3629 = inst_3495;
var tmp3630 = inst_3494;
var inst_3493__$1 = tmp3628;
var inst_3494__$1 = tmp3630;
var inst_3495__$1 = tmp3629;
var inst_3496__$1 = inst_3512;
var state_3616__$1 = (function (){var statearr_3635 = state_3616;
(statearr_3635[(13)] = inst_3493__$1);

(statearr_3635[(15)] = inst_3495__$1);

(statearr_3635[(16)] = inst_3494__$1);

(statearr_3635[(18)] = inst_3511);

(statearr_3635[(17)] = inst_3496__$1);

return statearr_3635;
})();
var statearr_3636_3712 = state_3616__$1;
(statearr_3636_3712[(2)] = null);

(statearr_3636_3712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (21))){
var inst_3538 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3640_3713 = state_3616__$1;
(statearr_3640_3713[(2)] = inst_3538);

(statearr_3640_3713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (31))){
var inst_3564 = (state_3616[(9)]);
var inst_3568 = done.call(null,null);
var inst_3569 = cljs.core.async.untap_STAR_.call(null,m,inst_3564);
var state_3616__$1 = (function (){var statearr_3641 = state_3616;
(statearr_3641[(19)] = inst_3568);

return statearr_3641;
})();
var statearr_3642_3714 = state_3616__$1;
(statearr_3642_3714[(2)] = inst_3569);

(statearr_3642_3714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (32))){
var inst_3558 = (state_3616[(20)]);
var inst_3557 = (state_3616[(11)]);
var inst_3556 = (state_3616[(21)]);
var inst_3559 = (state_3616[(12)]);
var inst_3571 = (state_3616[(2)]);
var inst_3572 = (inst_3559 + (1));
var tmp3637 = inst_3558;
var tmp3638 = inst_3557;
var tmp3639 = inst_3556;
var inst_3556__$1 = tmp3639;
var inst_3557__$1 = tmp3638;
var inst_3558__$1 = tmp3637;
var inst_3559__$1 = inst_3572;
var state_3616__$1 = (function (){var statearr_3643 = state_3616;
(statearr_3643[(20)] = inst_3558__$1);

(statearr_3643[(22)] = inst_3571);

(statearr_3643[(11)] = inst_3557__$1);

(statearr_3643[(21)] = inst_3556__$1);

(statearr_3643[(12)] = inst_3559__$1);

return statearr_3643;
})();
var statearr_3644_3715 = state_3616__$1;
(statearr_3644_3715[(2)] = null);

(statearr_3644_3715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (40))){
var inst_3584 = (state_3616[(23)]);
var inst_3588 = done.call(null,null);
var inst_3589 = cljs.core.async.untap_STAR_.call(null,m,inst_3584);
var state_3616__$1 = (function (){var statearr_3645 = state_3616;
(statearr_3645[(24)] = inst_3588);

return statearr_3645;
})();
var statearr_3646_3716 = state_3616__$1;
(statearr_3646_3716[(2)] = inst_3589);

(statearr_3646_3716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (33))){
var inst_3575 = (state_3616[(25)]);
var inst_3577 = cljs.core.chunked_seq_QMARK_.call(null,inst_3575);
var state_3616__$1 = state_3616;
if(inst_3577){
var statearr_3647_3717 = state_3616__$1;
(statearr_3647_3717[(1)] = (36));

} else {
var statearr_3648_3718 = state_3616__$1;
(statearr_3648_3718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (13))){
var inst_3505 = (state_3616[(26)]);
var inst_3508 = cljs.core.async.close_BANG_.call(null,inst_3505);
var state_3616__$1 = state_3616;
var statearr_3649_3719 = state_3616__$1;
(statearr_3649_3719[(2)] = inst_3508);

(statearr_3649_3719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (22))){
var inst_3528 = (state_3616[(8)]);
var inst_3531 = cljs.core.async.close_BANG_.call(null,inst_3528);
var state_3616__$1 = state_3616;
var statearr_3650_3720 = state_3616__$1;
(statearr_3650_3720[(2)] = inst_3531);

(statearr_3650_3720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (36))){
var inst_3575 = (state_3616[(25)]);
var inst_3579 = cljs.core.chunk_first.call(null,inst_3575);
var inst_3580 = cljs.core.chunk_rest.call(null,inst_3575);
var inst_3581 = cljs.core.count.call(null,inst_3579);
var inst_3556 = inst_3580;
var inst_3557 = inst_3579;
var inst_3558 = inst_3581;
var inst_3559 = (0);
var state_3616__$1 = (function (){var statearr_3651 = state_3616;
(statearr_3651[(20)] = inst_3558);

(statearr_3651[(11)] = inst_3557);

(statearr_3651[(21)] = inst_3556);

(statearr_3651[(12)] = inst_3559);

return statearr_3651;
})();
var statearr_3652_3721 = state_3616__$1;
(statearr_3652_3721[(2)] = null);

(statearr_3652_3721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (41))){
var inst_3575 = (state_3616[(25)]);
var inst_3591 = (state_3616[(2)]);
var inst_3592 = cljs.core.next.call(null,inst_3575);
var inst_3556 = inst_3592;
var inst_3557 = null;
var inst_3558 = (0);
var inst_3559 = (0);
var state_3616__$1 = (function (){var statearr_3653 = state_3616;
(statearr_3653[(20)] = inst_3558);

(statearr_3653[(11)] = inst_3557);

(statearr_3653[(21)] = inst_3556);

(statearr_3653[(12)] = inst_3559);

(statearr_3653[(27)] = inst_3591);

return statearr_3653;
})();
var statearr_3654_3722 = state_3616__$1;
(statearr_3654_3722[(2)] = null);

(statearr_3654_3722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (43))){
var state_3616__$1 = state_3616;
var statearr_3655_3723 = state_3616__$1;
(statearr_3655_3723[(2)] = null);

(statearr_3655_3723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (29))){
var inst_3600 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3656_3724 = state_3616__$1;
(statearr_3656_3724[(2)] = inst_3600);

(statearr_3656_3724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (44))){
var inst_3609 = (state_3616[(2)]);
var state_3616__$1 = (function (){var statearr_3657 = state_3616;
(statearr_3657[(28)] = inst_3609);

return statearr_3657;
})();
var statearr_3658_3725 = state_3616__$1;
(statearr_3658_3725[(2)] = null);

(statearr_3658_3725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (6))){
var inst_3548 = (state_3616[(29)]);
var inst_3547 = cljs.core.deref.call(null,cs);
var inst_3548__$1 = cljs.core.keys.call(null,inst_3547);
var inst_3549 = cljs.core.count.call(null,inst_3548__$1);
var inst_3550 = cljs.core.reset_BANG_.call(null,dctr,inst_3549);
var inst_3555 = cljs.core.seq.call(null,inst_3548__$1);
var inst_3556 = inst_3555;
var inst_3557 = null;
var inst_3558 = (0);
var inst_3559 = (0);
var state_3616__$1 = (function (){var statearr_3659 = state_3616;
(statearr_3659[(20)] = inst_3558);

(statearr_3659[(11)] = inst_3557);

(statearr_3659[(21)] = inst_3556);

(statearr_3659[(30)] = inst_3550);

(statearr_3659[(12)] = inst_3559);

(statearr_3659[(29)] = inst_3548__$1);

return statearr_3659;
})();
var statearr_3660_3726 = state_3616__$1;
(statearr_3660_3726[(2)] = null);

(statearr_3660_3726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (28))){
var inst_3575 = (state_3616[(25)]);
var inst_3556 = (state_3616[(21)]);
var inst_3575__$1 = cljs.core.seq.call(null,inst_3556);
var state_3616__$1 = (function (){var statearr_3661 = state_3616;
(statearr_3661[(25)] = inst_3575__$1);

return statearr_3661;
})();
if(inst_3575__$1){
var statearr_3662_3727 = state_3616__$1;
(statearr_3662_3727[(1)] = (33));

} else {
var statearr_3663_3728 = state_3616__$1;
(statearr_3663_3728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (25))){
var inst_3558 = (state_3616[(20)]);
var inst_3559 = (state_3616[(12)]);
var inst_3561 = (inst_3559 < inst_3558);
var inst_3562 = inst_3561;
var state_3616__$1 = state_3616;
if(cljs.core.truth_(inst_3562)){
var statearr_3664_3729 = state_3616__$1;
(statearr_3664_3729[(1)] = (27));

} else {
var statearr_3665_3730 = state_3616__$1;
(statearr_3665_3730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (34))){
var state_3616__$1 = state_3616;
var statearr_3666_3731 = state_3616__$1;
(statearr_3666_3731[(2)] = null);

(statearr_3666_3731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (17))){
var state_3616__$1 = state_3616;
var statearr_3667_3732 = state_3616__$1;
(statearr_3667_3732[(2)] = null);

(statearr_3667_3732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (3))){
var inst_3614 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3616__$1,inst_3614);
} else {
if((state_val_3617 === (12))){
var inst_3543 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3668_3733 = state_3616__$1;
(statearr_3668_3733[(2)] = inst_3543);

(statearr_3668_3733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (2))){
var state_3616__$1 = state_3616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3616__$1,(4),ch);
} else {
if((state_val_3617 === (23))){
var state_3616__$1 = state_3616;
var statearr_3669_3734 = state_3616__$1;
(statearr_3669_3734[(2)] = null);

(statearr_3669_3734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (35))){
var inst_3598 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3670_3735 = state_3616__$1;
(statearr_3670_3735[(2)] = inst_3598);

(statearr_3670_3735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (19))){
var inst_3515 = (state_3616[(7)]);
var inst_3519 = cljs.core.chunk_first.call(null,inst_3515);
var inst_3520 = cljs.core.chunk_rest.call(null,inst_3515);
var inst_3521 = cljs.core.count.call(null,inst_3519);
var inst_3493 = inst_3520;
var inst_3494 = inst_3519;
var inst_3495 = inst_3521;
var inst_3496 = (0);
var state_3616__$1 = (function (){var statearr_3671 = state_3616;
(statearr_3671[(13)] = inst_3493);

(statearr_3671[(15)] = inst_3495);

(statearr_3671[(16)] = inst_3494);

(statearr_3671[(17)] = inst_3496);

return statearr_3671;
})();
var statearr_3672_3736 = state_3616__$1;
(statearr_3672_3736[(2)] = null);

(statearr_3672_3736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (11))){
var inst_3515 = (state_3616[(7)]);
var inst_3493 = (state_3616[(13)]);
var inst_3515__$1 = cljs.core.seq.call(null,inst_3493);
var state_3616__$1 = (function (){var statearr_3673 = state_3616;
(statearr_3673[(7)] = inst_3515__$1);

return statearr_3673;
})();
if(inst_3515__$1){
var statearr_3674_3737 = state_3616__$1;
(statearr_3674_3737[(1)] = (16));

} else {
var statearr_3675_3738 = state_3616__$1;
(statearr_3675_3738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (9))){
var inst_3545 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3676_3739 = state_3616__$1;
(statearr_3676_3739[(2)] = inst_3545);

(statearr_3676_3739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (5))){
var inst_3491 = cljs.core.deref.call(null,cs);
var inst_3492 = cljs.core.seq.call(null,inst_3491);
var inst_3493 = inst_3492;
var inst_3494 = null;
var inst_3495 = (0);
var inst_3496 = (0);
var state_3616__$1 = (function (){var statearr_3677 = state_3616;
(statearr_3677[(13)] = inst_3493);

(statearr_3677[(15)] = inst_3495);

(statearr_3677[(16)] = inst_3494);

(statearr_3677[(17)] = inst_3496);

return statearr_3677;
})();
var statearr_3678_3740 = state_3616__$1;
(statearr_3678_3740[(2)] = null);

(statearr_3678_3740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (14))){
var state_3616__$1 = state_3616;
var statearr_3679_3741 = state_3616__$1;
(statearr_3679_3741[(2)] = null);

(statearr_3679_3741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (45))){
var inst_3606 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3680_3742 = state_3616__$1;
(statearr_3680_3742[(2)] = inst_3606);

(statearr_3680_3742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (26))){
var inst_3548 = (state_3616[(29)]);
var inst_3602 = (state_3616[(2)]);
var inst_3603 = cljs.core.seq.call(null,inst_3548);
var state_3616__$1 = (function (){var statearr_3681 = state_3616;
(statearr_3681[(31)] = inst_3602);

return statearr_3681;
})();
if(inst_3603){
var statearr_3682_3743 = state_3616__$1;
(statearr_3682_3743[(1)] = (42));

} else {
var statearr_3683_3744 = state_3616__$1;
(statearr_3683_3744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (16))){
var inst_3515 = (state_3616[(7)]);
var inst_3517 = cljs.core.chunked_seq_QMARK_.call(null,inst_3515);
var state_3616__$1 = state_3616;
if(inst_3517){
var statearr_3684_3745 = state_3616__$1;
(statearr_3684_3745[(1)] = (19));

} else {
var statearr_3685_3746 = state_3616__$1;
(statearr_3685_3746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (38))){
var inst_3595 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3686_3747 = state_3616__$1;
(statearr_3686_3747[(2)] = inst_3595);

(statearr_3686_3747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (30))){
var state_3616__$1 = state_3616;
var statearr_3687_3748 = state_3616__$1;
(statearr_3687_3748[(2)] = null);

(statearr_3687_3748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (10))){
var inst_3494 = (state_3616[(16)]);
var inst_3496 = (state_3616[(17)]);
var inst_3504 = cljs.core._nth.call(null,inst_3494,inst_3496);
var inst_3505 = cljs.core.nth.call(null,inst_3504,(0),null);
var inst_3506 = cljs.core.nth.call(null,inst_3504,(1),null);
var state_3616__$1 = (function (){var statearr_3688 = state_3616;
(statearr_3688[(26)] = inst_3505);

return statearr_3688;
})();
if(cljs.core.truth_(inst_3506)){
var statearr_3689_3749 = state_3616__$1;
(statearr_3689_3749[(1)] = (13));

} else {
var statearr_3690_3750 = state_3616__$1;
(statearr_3690_3750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (18))){
var inst_3541 = (state_3616[(2)]);
var state_3616__$1 = state_3616;
var statearr_3691_3751 = state_3616__$1;
(statearr_3691_3751[(2)] = inst_3541);

(statearr_3691_3751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (42))){
var state_3616__$1 = state_3616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3616__$1,(45),dchan);
} else {
if((state_val_3617 === (37))){
var inst_3575 = (state_3616[(25)]);
var inst_3484 = (state_3616[(10)]);
var inst_3584 = (state_3616[(23)]);
var inst_3584__$1 = cljs.core.first.call(null,inst_3575);
var inst_3585 = cljs.core.async.put_BANG_.call(null,inst_3584__$1,inst_3484,done);
var state_3616__$1 = (function (){var statearr_3692 = state_3616;
(statearr_3692[(23)] = inst_3584__$1);

return statearr_3692;
})();
if(cljs.core.truth_(inst_3585)){
var statearr_3693_3752 = state_3616__$1;
(statearr_3693_3752[(1)] = (39));

} else {
var statearr_3694_3753 = state_3616__$1;
(statearr_3694_3753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3617 === (8))){
var inst_3495 = (state_3616[(15)]);
var inst_3496 = (state_3616[(17)]);
var inst_3498 = (inst_3496 < inst_3495);
var inst_3499 = inst_3498;
var state_3616__$1 = state_3616;
if(cljs.core.truth_(inst_3499)){
var statearr_3695_3754 = state_3616__$1;
(statearr_3695_3754[(1)] = (10));

} else {
var statearr_3696_3755 = state_3616__$1;
(statearr_3696_3755[(1)] = (11));

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
});})(c__2882__auto___3701,cs,m,dchan,dctr,done))
;
return ((function (switch__2792__auto__,c__2882__auto___3701,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2793__auto__ = null;
var cljs$core$async$mult_$_state_machine__2793__auto____0 = (function (){
var statearr_3697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3697[(0)] = cljs$core$async$mult_$_state_machine__2793__auto__);

(statearr_3697[(1)] = (1));

return statearr_3697;
});
var cljs$core$async$mult_$_state_machine__2793__auto____1 = (function (state_3616){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3698){if((e3698 instanceof Object)){
var ex__2796__auto__ = e3698;
var statearr_3699_3756 = state_3616;
(statearr_3699_3756[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3757 = state_3616;
state_3616 = G__3757;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2793__auto__ = function(state_3616){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2793__auto____1.call(this,state_3616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2793__auto____0;
cljs$core$async$mult_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2793__auto____1;
return cljs$core$async$mult_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3701,cs,m,dchan,dctr,done))
})();
var state__2884__auto__ = (function (){var statearr_3700 = f__2883__auto__.call(null);
(statearr_3700[(6)] = c__2882__auto___3701);

return statearr_3700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3701,cs,m,dchan,dctr,done))
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
var G__3759 = arguments.length;
switch (G__3759) {
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
var len__4499__auto___3771 = arguments.length;
var i__4500__auto___3772 = (0);
while(true){
if((i__4500__auto___3772 < len__4499__auto___3771)){
args__4502__auto__.push((arguments[i__4500__auto___3772]));

var G__3773 = (i__4500__auto___3772 + (1));
i__4500__auto___3772 = G__3773;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3765){
var map__3766 = p__3765;
var map__3766__$1 = ((((!((map__3766 == null)))?(((((map__3766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3766):map__3766);
var opts = map__3766__$1;
var statearr_3768_3774 = state;
(statearr_3768_3774[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__3766,map__3766__$1,opts){
return (function (val){
var statearr_3769_3775 = state;
(statearr_3769_3775[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3766,map__3766__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_3770_3776 = state;
(statearr_3770_3776[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3761){
var G__3762 = cljs.core.first.call(null,seq3761);
var seq3761__$1 = cljs.core.next.call(null,seq3761);
var G__3763 = cljs.core.first.call(null,seq3761__$1);
var seq3761__$2 = cljs.core.next.call(null,seq3761__$1);
var G__3764 = cljs.core.first.call(null,seq3761__$2);
var seq3761__$3 = cljs.core.next.call(null,seq3761__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3762,G__3763,G__3764,seq3761__$3);
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
if(typeof cljs.core.async.t_cljs$core$async3777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3777 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta3778){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta3778 = meta3778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3779,meta3778__$1){
var self__ = this;
var _3779__$1 = this;
return (new cljs.core.async.t_cljs$core$async3777(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta3778__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3779){
var self__ = this;
var _3779__$1 = this;
return self__.meta3778;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async3777.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta3778","meta3778",1679195084,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3777";

cljs.core.async.t_cljs$core$async3777.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3777");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3777.
 */
cljs.core.async.__GT_t_cljs$core$async3777 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3777(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3778){
return (new cljs.core.async.t_cljs$core$async3777(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3778));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3777(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2882__auto___3941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_3881){
var state_val_3882 = (state_3881[(1)]);
if((state_val_3882 === (7))){
var inst_3796 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
var statearr_3883_3942 = state_3881__$1;
(statearr_3883_3942[(2)] = inst_3796);

(statearr_3883_3942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (20))){
var inst_3808 = (state_3881[(7)]);
var state_3881__$1 = state_3881;
var statearr_3884_3943 = state_3881__$1;
(statearr_3884_3943[(2)] = inst_3808);

(statearr_3884_3943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (27))){
var state_3881__$1 = state_3881;
var statearr_3885_3944 = state_3881__$1;
(statearr_3885_3944[(2)] = null);

(statearr_3885_3944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (1))){
var inst_3783 = (state_3881[(8)]);
var inst_3783__$1 = calc_state.call(null);
var inst_3785 = (inst_3783__$1 == null);
var inst_3786 = cljs.core.not.call(null,inst_3785);
var state_3881__$1 = (function (){var statearr_3886 = state_3881;
(statearr_3886[(8)] = inst_3783__$1);

return statearr_3886;
})();
if(inst_3786){
var statearr_3887_3945 = state_3881__$1;
(statearr_3887_3945[(1)] = (2));

} else {
var statearr_3888_3946 = state_3881__$1;
(statearr_3888_3946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (24))){
var inst_3841 = (state_3881[(9)]);
var inst_3855 = (state_3881[(10)]);
var inst_3832 = (state_3881[(11)]);
var inst_3855__$1 = inst_3832.call(null,inst_3841);
var state_3881__$1 = (function (){var statearr_3889 = state_3881;
(statearr_3889[(10)] = inst_3855__$1);

return statearr_3889;
})();
if(cljs.core.truth_(inst_3855__$1)){
var statearr_3890_3947 = state_3881__$1;
(statearr_3890_3947[(1)] = (29));

} else {
var statearr_3891_3948 = state_3881__$1;
(statearr_3891_3948[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (4))){
var inst_3799 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3799)){
var statearr_3892_3949 = state_3881__$1;
(statearr_3892_3949[(1)] = (8));

} else {
var statearr_3893_3950 = state_3881__$1;
(statearr_3893_3950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (15))){
var inst_3826 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3826)){
var statearr_3894_3951 = state_3881__$1;
(statearr_3894_3951[(1)] = (19));

} else {
var statearr_3895_3952 = state_3881__$1;
(statearr_3895_3952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (21))){
var inst_3831 = (state_3881[(12)]);
var inst_3831__$1 = (state_3881[(2)]);
var inst_3832 = cljs.core.get.call(null,inst_3831__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3833 = cljs.core.get.call(null,inst_3831__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3834 = cljs.core.get.call(null,inst_3831__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3881__$1 = (function (){var statearr_3896 = state_3881;
(statearr_3896[(12)] = inst_3831__$1);

(statearr_3896[(11)] = inst_3832);

(statearr_3896[(13)] = inst_3833);

return statearr_3896;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3881__$1,(22),inst_3834);
} else {
if((state_val_3882 === (31))){
var inst_3863 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3863)){
var statearr_3897_3953 = state_3881__$1;
(statearr_3897_3953[(1)] = (32));

} else {
var statearr_3898_3954 = state_3881__$1;
(statearr_3898_3954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (32))){
var inst_3840 = (state_3881[(14)]);
var state_3881__$1 = state_3881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3881__$1,(35),out,inst_3840);
} else {
if((state_val_3882 === (33))){
var inst_3831 = (state_3881[(12)]);
var inst_3808 = inst_3831;
var state_3881__$1 = (function (){var statearr_3899 = state_3881;
(statearr_3899[(7)] = inst_3808);

return statearr_3899;
})();
var statearr_3900_3955 = state_3881__$1;
(statearr_3900_3955[(2)] = null);

(statearr_3900_3955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (13))){
var inst_3808 = (state_3881[(7)]);
var inst_3815 = inst_3808.cljs$lang$protocol_mask$partition0$;
var inst_3816 = (inst_3815 & (64));
var inst_3817 = inst_3808.cljs$core$ISeq$;
var inst_3818 = (cljs.core.PROTOCOL_SENTINEL === inst_3817);
var inst_3819 = ((inst_3816) || (inst_3818));
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3819)){
var statearr_3901_3956 = state_3881__$1;
(statearr_3901_3956[(1)] = (16));

} else {
var statearr_3902_3957 = state_3881__$1;
(statearr_3902_3957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (22))){
var inst_3840 = (state_3881[(14)]);
var inst_3841 = (state_3881[(9)]);
var inst_3839 = (state_3881[(2)]);
var inst_3840__$1 = cljs.core.nth.call(null,inst_3839,(0),null);
var inst_3841__$1 = cljs.core.nth.call(null,inst_3839,(1),null);
var inst_3842 = (inst_3840__$1 == null);
var inst_3843 = cljs.core._EQ_.call(null,inst_3841__$1,change);
var inst_3844 = ((inst_3842) || (inst_3843));
var state_3881__$1 = (function (){var statearr_3903 = state_3881;
(statearr_3903[(14)] = inst_3840__$1);

(statearr_3903[(9)] = inst_3841__$1);

return statearr_3903;
})();
if(cljs.core.truth_(inst_3844)){
var statearr_3904_3958 = state_3881__$1;
(statearr_3904_3958[(1)] = (23));

} else {
var statearr_3905_3959 = state_3881__$1;
(statearr_3905_3959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (36))){
var inst_3831 = (state_3881[(12)]);
var inst_3808 = inst_3831;
var state_3881__$1 = (function (){var statearr_3906 = state_3881;
(statearr_3906[(7)] = inst_3808);

return statearr_3906;
})();
var statearr_3907_3960 = state_3881__$1;
(statearr_3907_3960[(2)] = null);

(statearr_3907_3960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (29))){
var inst_3855 = (state_3881[(10)]);
var state_3881__$1 = state_3881;
var statearr_3908_3961 = state_3881__$1;
(statearr_3908_3961[(2)] = inst_3855);

(statearr_3908_3961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (6))){
var state_3881__$1 = state_3881;
var statearr_3909_3962 = state_3881__$1;
(statearr_3909_3962[(2)] = false);

(statearr_3909_3962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (28))){
var inst_3851 = (state_3881[(2)]);
var inst_3852 = calc_state.call(null);
var inst_3808 = inst_3852;
var state_3881__$1 = (function (){var statearr_3910 = state_3881;
(statearr_3910[(7)] = inst_3808);

(statearr_3910[(15)] = inst_3851);

return statearr_3910;
})();
var statearr_3911_3963 = state_3881__$1;
(statearr_3911_3963[(2)] = null);

(statearr_3911_3963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (25))){
var inst_3877 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
var statearr_3912_3964 = state_3881__$1;
(statearr_3912_3964[(2)] = inst_3877);

(statearr_3912_3964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (34))){
var inst_3875 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
var statearr_3913_3965 = state_3881__$1;
(statearr_3913_3965[(2)] = inst_3875);

(statearr_3913_3965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (17))){
var state_3881__$1 = state_3881;
var statearr_3914_3966 = state_3881__$1;
(statearr_3914_3966[(2)] = false);

(statearr_3914_3966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (3))){
var state_3881__$1 = state_3881;
var statearr_3915_3967 = state_3881__$1;
(statearr_3915_3967[(2)] = false);

(statearr_3915_3967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (12))){
var inst_3879 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3881__$1,inst_3879);
} else {
if((state_val_3882 === (2))){
var inst_3783 = (state_3881[(8)]);
var inst_3788 = inst_3783.cljs$lang$protocol_mask$partition0$;
var inst_3789 = (inst_3788 & (64));
var inst_3790 = inst_3783.cljs$core$ISeq$;
var inst_3791 = (cljs.core.PROTOCOL_SENTINEL === inst_3790);
var inst_3792 = ((inst_3789) || (inst_3791));
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3792)){
var statearr_3916_3968 = state_3881__$1;
(statearr_3916_3968[(1)] = (5));

} else {
var statearr_3917_3969 = state_3881__$1;
(statearr_3917_3969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (23))){
var inst_3840 = (state_3881[(14)]);
var inst_3846 = (inst_3840 == null);
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3846)){
var statearr_3918_3970 = state_3881__$1;
(statearr_3918_3970[(1)] = (26));

} else {
var statearr_3919_3971 = state_3881__$1;
(statearr_3919_3971[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (35))){
var inst_3866 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
if(cljs.core.truth_(inst_3866)){
var statearr_3920_3972 = state_3881__$1;
(statearr_3920_3972[(1)] = (36));

} else {
var statearr_3921_3973 = state_3881__$1;
(statearr_3921_3973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (19))){
var inst_3808 = (state_3881[(7)]);
var inst_3828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3808);
var state_3881__$1 = state_3881;
var statearr_3922_3974 = state_3881__$1;
(statearr_3922_3974[(2)] = inst_3828);

(statearr_3922_3974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (11))){
var inst_3808 = (state_3881[(7)]);
var inst_3812 = (inst_3808 == null);
var inst_3813 = cljs.core.not.call(null,inst_3812);
var state_3881__$1 = state_3881;
if(inst_3813){
var statearr_3923_3975 = state_3881__$1;
(statearr_3923_3975[(1)] = (13));

} else {
var statearr_3924_3976 = state_3881__$1;
(statearr_3924_3976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (9))){
var inst_3783 = (state_3881[(8)]);
var state_3881__$1 = state_3881;
var statearr_3925_3977 = state_3881__$1;
(statearr_3925_3977[(2)] = inst_3783);

(statearr_3925_3977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (5))){
var state_3881__$1 = state_3881;
var statearr_3926_3978 = state_3881__$1;
(statearr_3926_3978[(2)] = true);

(statearr_3926_3978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (14))){
var state_3881__$1 = state_3881;
var statearr_3927_3979 = state_3881__$1;
(statearr_3927_3979[(2)] = false);

(statearr_3927_3979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (26))){
var inst_3841 = (state_3881[(9)]);
var inst_3848 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3841);
var state_3881__$1 = state_3881;
var statearr_3928_3980 = state_3881__$1;
(statearr_3928_3980[(2)] = inst_3848);

(statearr_3928_3980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (16))){
var state_3881__$1 = state_3881;
var statearr_3929_3981 = state_3881__$1;
(statearr_3929_3981[(2)] = true);

(statearr_3929_3981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (38))){
var inst_3871 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
var statearr_3930_3982 = state_3881__$1;
(statearr_3930_3982[(2)] = inst_3871);

(statearr_3930_3982[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (30))){
var inst_3841 = (state_3881[(9)]);
var inst_3832 = (state_3881[(11)]);
var inst_3833 = (state_3881[(13)]);
var inst_3858 = cljs.core.empty_QMARK_.call(null,inst_3832);
var inst_3859 = inst_3833.call(null,inst_3841);
var inst_3860 = cljs.core.not.call(null,inst_3859);
var inst_3861 = ((inst_3858) && (inst_3860));
var state_3881__$1 = state_3881;
var statearr_3931_3983 = state_3881__$1;
(statearr_3931_3983[(2)] = inst_3861);

(statearr_3931_3983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (10))){
var inst_3783 = (state_3881[(8)]);
var inst_3804 = (state_3881[(2)]);
var inst_3805 = cljs.core.get.call(null,inst_3804,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3806 = cljs.core.get.call(null,inst_3804,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3807 = cljs.core.get.call(null,inst_3804,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3808 = inst_3783;
var state_3881__$1 = (function (){var statearr_3932 = state_3881;
(statearr_3932[(16)] = inst_3806);

(statearr_3932[(17)] = inst_3807);

(statearr_3932[(7)] = inst_3808);

(statearr_3932[(18)] = inst_3805);

return statearr_3932;
})();
var statearr_3933_3984 = state_3881__$1;
(statearr_3933_3984[(2)] = null);

(statearr_3933_3984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (18))){
var inst_3823 = (state_3881[(2)]);
var state_3881__$1 = state_3881;
var statearr_3934_3985 = state_3881__$1;
(statearr_3934_3985[(2)] = inst_3823);

(statearr_3934_3985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (37))){
var state_3881__$1 = state_3881;
var statearr_3935_3986 = state_3881__$1;
(statearr_3935_3986[(2)] = null);

(statearr_3935_3986[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3882 === (8))){
var inst_3783 = (state_3881[(8)]);
var inst_3801 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3783);
var state_3881__$1 = state_3881;
var statearr_3936_3987 = state_3881__$1;
(statearr_3936_3987[(2)] = inst_3801);

(statearr_3936_3987[(1)] = (10));


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
});})(c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2792__auto__,c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2793__auto__ = null;
var cljs$core$async$mix_$_state_machine__2793__auto____0 = (function (){
var statearr_3937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3937[(0)] = cljs$core$async$mix_$_state_machine__2793__auto__);

(statearr_3937[(1)] = (1));

return statearr_3937;
});
var cljs$core$async$mix_$_state_machine__2793__auto____1 = (function (state_3881){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_3881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e3938){if((e3938 instanceof Object)){
var ex__2796__auto__ = e3938;
var statearr_3939_3988 = state_3881;
(statearr_3939_3988[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3989 = state_3881;
state_3881 = G__3989;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2793__auto__ = function(state_3881){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2793__auto____1.call(this,state_3881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2793__auto____0;
cljs$core$async$mix_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2793__auto____1;
return cljs$core$async$mix_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2884__auto__ = (function (){var statearr_3940 = f__2883__auto__.call(null);
(statearr_3940[(6)] = c__2882__auto___3941);

return statearr_3940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___3941,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__3991 = arguments.length;
switch (G__3991) {
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
var G__3995 = arguments.length;
switch (G__3995) {
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
return (function (p1__3993_SHARP_){
if(cljs.core.truth_(p1__3993_SHARP_.call(null,topic))){
return p1__3993_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3993_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async3996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3996 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3997){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3997 = meta3997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_3998,meta3997__$1){
var self__ = this;
var _3998__$1 = this;
return (new cljs.core.async.t_cljs$core$async3996(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3997__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_3998){
var self__ = this;
var _3998__$1 = this;
return self__.meta3997;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3997","meta3997",-127768485,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3996";

cljs.core.async.t_cljs$core$async3996.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3996");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3996.
 */
cljs.core.async.__GT_t_cljs$core$async3996 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async3996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3997){
return (new cljs.core.async.t_cljs$core$async3996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3997));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async3996(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2882__auto___4116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4116,mults,ensure_mult,p){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4116,mults,ensure_mult,p){
return (function (state_4070){
var state_val_4071 = (state_4070[(1)]);
if((state_val_4071 === (7))){
var inst_4066 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4072_4117 = state_4070__$1;
(statearr_4072_4117[(2)] = inst_4066);

(statearr_4072_4117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (20))){
var state_4070__$1 = state_4070;
var statearr_4073_4118 = state_4070__$1;
(statearr_4073_4118[(2)] = null);

(statearr_4073_4118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (1))){
var state_4070__$1 = state_4070;
var statearr_4074_4119 = state_4070__$1;
(statearr_4074_4119[(2)] = null);

(statearr_4074_4119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (24))){
var inst_4049 = (state_4070[(7)]);
var inst_4058 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4049);
var state_4070__$1 = state_4070;
var statearr_4075_4120 = state_4070__$1;
(statearr_4075_4120[(2)] = inst_4058);

(statearr_4075_4120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (4))){
var inst_4001 = (state_4070[(8)]);
var inst_4001__$1 = (state_4070[(2)]);
var inst_4002 = (inst_4001__$1 == null);
var state_4070__$1 = (function (){var statearr_4076 = state_4070;
(statearr_4076[(8)] = inst_4001__$1);

return statearr_4076;
})();
if(cljs.core.truth_(inst_4002)){
var statearr_4077_4121 = state_4070__$1;
(statearr_4077_4121[(1)] = (5));

} else {
var statearr_4078_4122 = state_4070__$1;
(statearr_4078_4122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (15))){
var inst_4043 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4079_4123 = state_4070__$1;
(statearr_4079_4123[(2)] = inst_4043);

(statearr_4079_4123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (21))){
var inst_4063 = (state_4070[(2)]);
var state_4070__$1 = (function (){var statearr_4080 = state_4070;
(statearr_4080[(9)] = inst_4063);

return statearr_4080;
})();
var statearr_4081_4124 = state_4070__$1;
(statearr_4081_4124[(2)] = null);

(statearr_4081_4124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (13))){
var inst_4025 = (state_4070[(10)]);
var inst_4027 = cljs.core.chunked_seq_QMARK_.call(null,inst_4025);
var state_4070__$1 = state_4070;
if(inst_4027){
var statearr_4082_4125 = state_4070__$1;
(statearr_4082_4125[(1)] = (16));

} else {
var statearr_4083_4126 = state_4070__$1;
(statearr_4083_4126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (22))){
var inst_4055 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
if(cljs.core.truth_(inst_4055)){
var statearr_4084_4127 = state_4070__$1;
(statearr_4084_4127[(1)] = (23));

} else {
var statearr_4085_4128 = state_4070__$1;
(statearr_4085_4128[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (6))){
var inst_4001 = (state_4070[(8)]);
var inst_4049 = (state_4070[(7)]);
var inst_4051 = (state_4070[(11)]);
var inst_4049__$1 = topic_fn.call(null,inst_4001);
var inst_4050 = cljs.core.deref.call(null,mults);
var inst_4051__$1 = cljs.core.get.call(null,inst_4050,inst_4049__$1);
var state_4070__$1 = (function (){var statearr_4086 = state_4070;
(statearr_4086[(7)] = inst_4049__$1);

(statearr_4086[(11)] = inst_4051__$1);

return statearr_4086;
})();
if(cljs.core.truth_(inst_4051__$1)){
var statearr_4087_4129 = state_4070__$1;
(statearr_4087_4129[(1)] = (19));

} else {
var statearr_4088_4130 = state_4070__$1;
(statearr_4088_4130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (25))){
var inst_4060 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4089_4131 = state_4070__$1;
(statearr_4089_4131[(2)] = inst_4060);

(statearr_4089_4131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (17))){
var inst_4025 = (state_4070[(10)]);
var inst_4034 = cljs.core.first.call(null,inst_4025);
var inst_4035 = cljs.core.async.muxch_STAR_.call(null,inst_4034);
var inst_4036 = cljs.core.async.close_BANG_.call(null,inst_4035);
var inst_4037 = cljs.core.next.call(null,inst_4025);
var inst_4011 = inst_4037;
var inst_4012 = null;
var inst_4013 = (0);
var inst_4014 = (0);
var state_4070__$1 = (function (){var statearr_4090 = state_4070;
(statearr_4090[(12)] = inst_4036);

(statearr_4090[(13)] = inst_4013);

(statearr_4090[(14)] = inst_4011);

(statearr_4090[(15)] = inst_4014);

(statearr_4090[(16)] = inst_4012);

return statearr_4090;
})();
var statearr_4091_4132 = state_4070__$1;
(statearr_4091_4132[(2)] = null);

(statearr_4091_4132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (3))){
var inst_4068 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4070__$1,inst_4068);
} else {
if((state_val_4071 === (12))){
var inst_4045 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4092_4133 = state_4070__$1;
(statearr_4092_4133[(2)] = inst_4045);

(statearr_4092_4133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (2))){
var state_4070__$1 = state_4070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4070__$1,(4),ch);
} else {
if((state_val_4071 === (23))){
var state_4070__$1 = state_4070;
var statearr_4093_4134 = state_4070__$1;
(statearr_4093_4134[(2)] = null);

(statearr_4093_4134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (19))){
var inst_4001 = (state_4070[(8)]);
var inst_4051 = (state_4070[(11)]);
var inst_4053 = cljs.core.async.muxch_STAR_.call(null,inst_4051);
var state_4070__$1 = state_4070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4070__$1,(22),inst_4053,inst_4001);
} else {
if((state_val_4071 === (11))){
var inst_4011 = (state_4070[(14)]);
var inst_4025 = (state_4070[(10)]);
var inst_4025__$1 = cljs.core.seq.call(null,inst_4011);
var state_4070__$1 = (function (){var statearr_4094 = state_4070;
(statearr_4094[(10)] = inst_4025__$1);

return statearr_4094;
})();
if(inst_4025__$1){
var statearr_4095_4135 = state_4070__$1;
(statearr_4095_4135[(1)] = (13));

} else {
var statearr_4096_4136 = state_4070__$1;
(statearr_4096_4136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (9))){
var inst_4047 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4097_4137 = state_4070__$1;
(statearr_4097_4137[(2)] = inst_4047);

(statearr_4097_4137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (5))){
var inst_4008 = cljs.core.deref.call(null,mults);
var inst_4009 = cljs.core.vals.call(null,inst_4008);
var inst_4010 = cljs.core.seq.call(null,inst_4009);
var inst_4011 = inst_4010;
var inst_4012 = null;
var inst_4013 = (0);
var inst_4014 = (0);
var state_4070__$1 = (function (){var statearr_4098 = state_4070;
(statearr_4098[(13)] = inst_4013);

(statearr_4098[(14)] = inst_4011);

(statearr_4098[(15)] = inst_4014);

(statearr_4098[(16)] = inst_4012);

return statearr_4098;
})();
var statearr_4099_4138 = state_4070__$1;
(statearr_4099_4138[(2)] = null);

(statearr_4099_4138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (14))){
var state_4070__$1 = state_4070;
var statearr_4103_4139 = state_4070__$1;
(statearr_4103_4139[(2)] = null);

(statearr_4103_4139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (16))){
var inst_4025 = (state_4070[(10)]);
var inst_4029 = cljs.core.chunk_first.call(null,inst_4025);
var inst_4030 = cljs.core.chunk_rest.call(null,inst_4025);
var inst_4031 = cljs.core.count.call(null,inst_4029);
var inst_4011 = inst_4030;
var inst_4012 = inst_4029;
var inst_4013 = inst_4031;
var inst_4014 = (0);
var state_4070__$1 = (function (){var statearr_4104 = state_4070;
(statearr_4104[(13)] = inst_4013);

(statearr_4104[(14)] = inst_4011);

(statearr_4104[(15)] = inst_4014);

(statearr_4104[(16)] = inst_4012);

return statearr_4104;
})();
var statearr_4105_4140 = state_4070__$1;
(statearr_4105_4140[(2)] = null);

(statearr_4105_4140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (10))){
var inst_4013 = (state_4070[(13)]);
var inst_4011 = (state_4070[(14)]);
var inst_4014 = (state_4070[(15)]);
var inst_4012 = (state_4070[(16)]);
var inst_4019 = cljs.core._nth.call(null,inst_4012,inst_4014);
var inst_4020 = cljs.core.async.muxch_STAR_.call(null,inst_4019);
var inst_4021 = cljs.core.async.close_BANG_.call(null,inst_4020);
var inst_4022 = (inst_4014 + (1));
var tmp4100 = inst_4013;
var tmp4101 = inst_4011;
var tmp4102 = inst_4012;
var inst_4011__$1 = tmp4101;
var inst_4012__$1 = tmp4102;
var inst_4013__$1 = tmp4100;
var inst_4014__$1 = inst_4022;
var state_4070__$1 = (function (){var statearr_4106 = state_4070;
(statearr_4106[(17)] = inst_4021);

(statearr_4106[(13)] = inst_4013__$1);

(statearr_4106[(14)] = inst_4011__$1);

(statearr_4106[(15)] = inst_4014__$1);

(statearr_4106[(16)] = inst_4012__$1);

return statearr_4106;
})();
var statearr_4107_4141 = state_4070__$1;
(statearr_4107_4141[(2)] = null);

(statearr_4107_4141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (18))){
var inst_4040 = (state_4070[(2)]);
var state_4070__$1 = state_4070;
var statearr_4108_4142 = state_4070__$1;
(statearr_4108_4142[(2)] = inst_4040);

(statearr_4108_4142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4071 === (8))){
var inst_4013 = (state_4070[(13)]);
var inst_4014 = (state_4070[(15)]);
var inst_4016 = (inst_4014 < inst_4013);
var inst_4017 = inst_4016;
var state_4070__$1 = state_4070;
if(cljs.core.truth_(inst_4017)){
var statearr_4109_4143 = state_4070__$1;
(statearr_4109_4143[(1)] = (10));

} else {
var statearr_4110_4144 = state_4070__$1;
(statearr_4110_4144[(1)] = (11));

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
});})(c__2882__auto___4116,mults,ensure_mult,p))
;
return ((function (switch__2792__auto__,c__2882__auto___4116,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4111[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4111[(1)] = (1));

return statearr_4111;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4070){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4112){if((e4112 instanceof Object)){
var ex__2796__auto__ = e4112;
var statearr_4113_4145 = state_4070;
(statearr_4113_4145[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4146 = state_4070;
state_4070 = G__4146;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4116,mults,ensure_mult,p))
})();
var state__2884__auto__ = (function (){var statearr_4114 = f__2883__auto__.call(null);
(statearr_4114[(6)] = c__2882__auto___4116);

return statearr_4114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4116,mults,ensure_mult,p))
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
var G__4148 = arguments.length;
switch (G__4148) {
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
var G__4151 = arguments.length;
switch (G__4151) {
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
var G__4154 = arguments.length;
switch (G__4154) {
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
var c__2882__auto___4221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4193){
var state_val_4194 = (state_4193[(1)]);
if((state_val_4194 === (7))){
var state_4193__$1 = state_4193;
var statearr_4195_4222 = state_4193__$1;
(statearr_4195_4222[(2)] = null);

(statearr_4195_4222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (1))){
var state_4193__$1 = state_4193;
var statearr_4196_4223 = state_4193__$1;
(statearr_4196_4223[(2)] = null);

(statearr_4196_4223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (4))){
var inst_4157 = (state_4193[(7)]);
var inst_4159 = (inst_4157 < cnt);
var state_4193__$1 = state_4193;
if(cljs.core.truth_(inst_4159)){
var statearr_4197_4224 = state_4193__$1;
(statearr_4197_4224[(1)] = (6));

} else {
var statearr_4198_4225 = state_4193__$1;
(statearr_4198_4225[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (15))){
var inst_4189 = (state_4193[(2)]);
var state_4193__$1 = state_4193;
var statearr_4199_4226 = state_4193__$1;
(statearr_4199_4226[(2)] = inst_4189);

(statearr_4199_4226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (13))){
var inst_4182 = cljs.core.async.close_BANG_.call(null,out);
var state_4193__$1 = state_4193;
var statearr_4200_4227 = state_4193__$1;
(statearr_4200_4227[(2)] = inst_4182);

(statearr_4200_4227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (6))){
var state_4193__$1 = state_4193;
var statearr_4201_4228 = state_4193__$1;
(statearr_4201_4228[(2)] = null);

(statearr_4201_4228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (3))){
var inst_4191 = (state_4193[(2)]);
var state_4193__$1 = state_4193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4193__$1,inst_4191);
} else {
if((state_val_4194 === (12))){
var inst_4179 = (state_4193[(8)]);
var inst_4179__$1 = (state_4193[(2)]);
var inst_4180 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4179__$1);
var state_4193__$1 = (function (){var statearr_4202 = state_4193;
(statearr_4202[(8)] = inst_4179__$1);

return statearr_4202;
})();
if(cljs.core.truth_(inst_4180)){
var statearr_4203_4229 = state_4193__$1;
(statearr_4203_4229[(1)] = (13));

} else {
var statearr_4204_4230 = state_4193__$1;
(statearr_4204_4230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (2))){
var inst_4156 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4157 = (0);
var state_4193__$1 = (function (){var statearr_4205 = state_4193;
(statearr_4205[(7)] = inst_4157);

(statearr_4205[(9)] = inst_4156);

return statearr_4205;
})();
var statearr_4206_4231 = state_4193__$1;
(statearr_4206_4231[(2)] = null);

(statearr_4206_4231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (11))){
var inst_4157 = (state_4193[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4193,(10),Object,null,(9));
var inst_4166 = chs__$1.call(null,inst_4157);
var inst_4167 = done.call(null,inst_4157);
var inst_4168 = cljs.core.async.take_BANG_.call(null,inst_4166,inst_4167);
var state_4193__$1 = state_4193;
var statearr_4207_4232 = state_4193__$1;
(statearr_4207_4232[(2)] = inst_4168);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4193__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (9))){
var inst_4157 = (state_4193[(7)]);
var inst_4170 = (state_4193[(2)]);
var inst_4171 = (inst_4157 + (1));
var inst_4157__$1 = inst_4171;
var state_4193__$1 = (function (){var statearr_4208 = state_4193;
(statearr_4208[(7)] = inst_4157__$1);

(statearr_4208[(10)] = inst_4170);

return statearr_4208;
})();
var statearr_4209_4233 = state_4193__$1;
(statearr_4209_4233[(2)] = null);

(statearr_4209_4233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (5))){
var inst_4177 = (state_4193[(2)]);
var state_4193__$1 = (function (){var statearr_4210 = state_4193;
(statearr_4210[(11)] = inst_4177);

return statearr_4210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4193__$1,(12),dchan);
} else {
if((state_val_4194 === (14))){
var inst_4179 = (state_4193[(8)]);
var inst_4184 = cljs.core.apply.call(null,f,inst_4179);
var state_4193__$1 = state_4193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4193__$1,(16),out,inst_4184);
} else {
if((state_val_4194 === (16))){
var inst_4186 = (state_4193[(2)]);
var state_4193__$1 = (function (){var statearr_4211 = state_4193;
(statearr_4211[(12)] = inst_4186);

return statearr_4211;
})();
var statearr_4212_4234 = state_4193__$1;
(statearr_4212_4234[(2)] = null);

(statearr_4212_4234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (10))){
var inst_4161 = (state_4193[(2)]);
var inst_4162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4193__$1 = (function (){var statearr_4213 = state_4193;
(statearr_4213[(13)] = inst_4161);

return statearr_4213;
})();
var statearr_4214_4235 = state_4193__$1;
(statearr_4214_4235[(2)] = inst_4162);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4193__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4194 === (8))){
var inst_4175 = (state_4193[(2)]);
var state_4193__$1 = state_4193;
var statearr_4215_4236 = state_4193__$1;
(statearr_4215_4236[(2)] = inst_4175);

(statearr_4215_4236[(1)] = (5));


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
});})(c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2792__auto__,c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4216[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4216[(1)] = (1));

return statearr_4216;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4193){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4217){if((e4217 instanceof Object)){
var ex__2796__auto__ = e4217;
var statearr_4218_4237 = state_4193;
(statearr_4218_4237[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4238 = state_4193;
state_4193 = G__4238;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2884__auto__ = (function (){var statearr_4219 = f__2883__auto__.call(null);
(statearr_4219[(6)] = c__2882__auto___4221);

return statearr_4219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4221,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__4241 = arguments.length;
switch (G__4241) {
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
var c__2882__auto___4295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4295,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4295,out){
return (function (state_4273){
var state_val_4274 = (state_4273[(1)]);
if((state_val_4274 === (7))){
var inst_4253 = (state_4273[(7)]);
var inst_4252 = (state_4273[(8)]);
var inst_4252__$1 = (state_4273[(2)]);
var inst_4253__$1 = cljs.core.nth.call(null,inst_4252__$1,(0),null);
var inst_4254 = cljs.core.nth.call(null,inst_4252__$1,(1),null);
var inst_4255 = (inst_4253__$1 == null);
var state_4273__$1 = (function (){var statearr_4275 = state_4273;
(statearr_4275[(7)] = inst_4253__$1);

(statearr_4275[(9)] = inst_4254);

(statearr_4275[(8)] = inst_4252__$1);

return statearr_4275;
})();
if(cljs.core.truth_(inst_4255)){
var statearr_4276_4296 = state_4273__$1;
(statearr_4276_4296[(1)] = (8));

} else {
var statearr_4277_4297 = state_4273__$1;
(statearr_4277_4297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (1))){
var inst_4242 = cljs.core.vec.call(null,chs);
var inst_4243 = inst_4242;
var state_4273__$1 = (function (){var statearr_4278 = state_4273;
(statearr_4278[(10)] = inst_4243);

return statearr_4278;
})();
var statearr_4279_4298 = state_4273__$1;
(statearr_4279_4298[(2)] = null);

(statearr_4279_4298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (4))){
var inst_4243 = (state_4273[(10)]);
var state_4273__$1 = state_4273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4273__$1,(7),inst_4243);
} else {
if((state_val_4274 === (6))){
var inst_4269 = (state_4273[(2)]);
var state_4273__$1 = state_4273;
var statearr_4280_4299 = state_4273__$1;
(statearr_4280_4299[(2)] = inst_4269);

(statearr_4280_4299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (3))){
var inst_4271 = (state_4273[(2)]);
var state_4273__$1 = state_4273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4273__$1,inst_4271);
} else {
if((state_val_4274 === (2))){
var inst_4243 = (state_4273[(10)]);
var inst_4245 = cljs.core.count.call(null,inst_4243);
var inst_4246 = (inst_4245 > (0));
var state_4273__$1 = state_4273;
if(cljs.core.truth_(inst_4246)){
var statearr_4282_4300 = state_4273__$1;
(statearr_4282_4300[(1)] = (4));

} else {
var statearr_4283_4301 = state_4273__$1;
(statearr_4283_4301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (11))){
var inst_4243 = (state_4273[(10)]);
var inst_4262 = (state_4273[(2)]);
var tmp4281 = inst_4243;
var inst_4243__$1 = tmp4281;
var state_4273__$1 = (function (){var statearr_4284 = state_4273;
(statearr_4284[(10)] = inst_4243__$1);

(statearr_4284[(11)] = inst_4262);

return statearr_4284;
})();
var statearr_4285_4302 = state_4273__$1;
(statearr_4285_4302[(2)] = null);

(statearr_4285_4302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (9))){
var inst_4253 = (state_4273[(7)]);
var state_4273__$1 = state_4273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4273__$1,(11),out,inst_4253);
} else {
if((state_val_4274 === (5))){
var inst_4267 = cljs.core.async.close_BANG_.call(null,out);
var state_4273__$1 = state_4273;
var statearr_4286_4303 = state_4273__$1;
(statearr_4286_4303[(2)] = inst_4267);

(statearr_4286_4303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (10))){
var inst_4265 = (state_4273[(2)]);
var state_4273__$1 = state_4273;
var statearr_4287_4304 = state_4273__$1;
(statearr_4287_4304[(2)] = inst_4265);

(statearr_4287_4304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4274 === (8))){
var inst_4253 = (state_4273[(7)]);
var inst_4254 = (state_4273[(9)]);
var inst_4252 = (state_4273[(8)]);
var inst_4243 = (state_4273[(10)]);
var inst_4257 = (function (){var cs = inst_4243;
var vec__4248 = inst_4252;
var v = inst_4253;
var c = inst_4254;
return ((function (cs,vec__4248,v,c,inst_4253,inst_4254,inst_4252,inst_4243,state_val_4274,c__2882__auto___4295,out){
return (function (p1__4239_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4239_SHARP_);
});
;})(cs,vec__4248,v,c,inst_4253,inst_4254,inst_4252,inst_4243,state_val_4274,c__2882__auto___4295,out))
})();
var inst_4258 = cljs.core.filterv.call(null,inst_4257,inst_4243);
var inst_4243__$1 = inst_4258;
var state_4273__$1 = (function (){var statearr_4288 = state_4273;
(statearr_4288[(10)] = inst_4243__$1);

return statearr_4288;
})();
var statearr_4289_4305 = state_4273__$1;
(statearr_4289_4305[(2)] = null);

(statearr_4289_4305[(1)] = (2));


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
});})(c__2882__auto___4295,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4295,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4290[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4290[(1)] = (1));

return statearr_4290;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4273){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4291){if((e4291 instanceof Object)){
var ex__2796__auto__ = e4291;
var statearr_4292_4306 = state_4273;
(statearr_4292_4306[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4307 = state_4273;
state_4273 = G__4307;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4295,out))
})();
var state__2884__auto__ = (function (){var statearr_4293 = f__2883__auto__.call(null);
(statearr_4293[(6)] = c__2882__auto___4295);

return statearr_4293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4295,out))
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
var G__4309 = arguments.length;
switch (G__4309) {
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
var c__2882__auto___4354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4354,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4354,out){
return (function (state_4333){
var state_val_4334 = (state_4333[(1)]);
if((state_val_4334 === (7))){
var inst_4315 = (state_4333[(7)]);
var inst_4315__$1 = (state_4333[(2)]);
var inst_4316 = (inst_4315__$1 == null);
var inst_4317 = cljs.core.not.call(null,inst_4316);
var state_4333__$1 = (function (){var statearr_4335 = state_4333;
(statearr_4335[(7)] = inst_4315__$1);

return statearr_4335;
})();
if(inst_4317){
var statearr_4336_4355 = state_4333__$1;
(statearr_4336_4355[(1)] = (8));

} else {
var statearr_4337_4356 = state_4333__$1;
(statearr_4337_4356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (1))){
var inst_4310 = (0);
var state_4333__$1 = (function (){var statearr_4338 = state_4333;
(statearr_4338[(8)] = inst_4310);

return statearr_4338;
})();
var statearr_4339_4357 = state_4333__$1;
(statearr_4339_4357[(2)] = null);

(statearr_4339_4357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (4))){
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4333__$1,(7),ch);
} else {
if((state_val_4334 === (6))){
var inst_4328 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4340_4358 = state_4333__$1;
(statearr_4340_4358[(2)] = inst_4328);

(statearr_4340_4358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (3))){
var inst_4330 = (state_4333[(2)]);
var inst_4331 = cljs.core.async.close_BANG_.call(null,out);
var state_4333__$1 = (function (){var statearr_4341 = state_4333;
(statearr_4341[(9)] = inst_4330);

return statearr_4341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4333__$1,inst_4331);
} else {
if((state_val_4334 === (2))){
var inst_4310 = (state_4333[(8)]);
var inst_4312 = (inst_4310 < n);
var state_4333__$1 = state_4333;
if(cljs.core.truth_(inst_4312)){
var statearr_4342_4359 = state_4333__$1;
(statearr_4342_4359[(1)] = (4));

} else {
var statearr_4343_4360 = state_4333__$1;
(statearr_4343_4360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (11))){
var inst_4310 = (state_4333[(8)]);
var inst_4320 = (state_4333[(2)]);
var inst_4321 = (inst_4310 + (1));
var inst_4310__$1 = inst_4321;
var state_4333__$1 = (function (){var statearr_4344 = state_4333;
(statearr_4344[(8)] = inst_4310__$1);

(statearr_4344[(10)] = inst_4320);

return statearr_4344;
})();
var statearr_4345_4361 = state_4333__$1;
(statearr_4345_4361[(2)] = null);

(statearr_4345_4361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (9))){
var state_4333__$1 = state_4333;
var statearr_4346_4362 = state_4333__$1;
(statearr_4346_4362[(2)] = null);

(statearr_4346_4362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (5))){
var state_4333__$1 = state_4333;
var statearr_4347_4363 = state_4333__$1;
(statearr_4347_4363[(2)] = null);

(statearr_4347_4363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (10))){
var inst_4325 = (state_4333[(2)]);
var state_4333__$1 = state_4333;
var statearr_4348_4364 = state_4333__$1;
(statearr_4348_4364[(2)] = inst_4325);

(statearr_4348_4364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4334 === (8))){
var inst_4315 = (state_4333[(7)]);
var state_4333__$1 = state_4333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4333__$1,(11),out,inst_4315);
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
});})(c__2882__auto___4354,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4354,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4349[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4349[(1)] = (1));

return statearr_4349;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4333){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4350){if((e4350 instanceof Object)){
var ex__2796__auto__ = e4350;
var statearr_4351_4365 = state_4333;
(statearr_4351_4365[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4366 = state_4333;
state_4333 = G__4366;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4354,out))
})();
var state__2884__auto__ = (function (){var statearr_4352 = f__2883__auto__.call(null);
(statearr_4352[(6)] = c__2882__auto___4354);

return statearr_4352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4354,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4368 = (function (f,ch,meta4369){
this.f = f;
this.ch = ch;
this.meta4369 = meta4369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4370,meta4369__$1){
var self__ = this;
var _4370__$1 = this;
return (new cljs.core.async.t_cljs$core$async4368(self__.f,self__.ch,meta4369__$1));
});

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4370){
var self__ = this;
var _4370__$1 = this;
return self__.meta4369;
});

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4371 = (function (f,ch,meta4369,_,fn1,meta4372){
this.f = f;
this.ch = ch;
this.meta4369 = meta4369;
this._ = _;
this.fn1 = fn1;
this.meta4372 = meta4372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4373,meta4372__$1){
var self__ = this;
var _4373__$1 = this;
return (new cljs.core.async.t_cljs$core$async4371(self__.f,self__.ch,self__.meta4369,self__._,self__.fn1,meta4372__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4373){
var self__ = this;
var _4373__$1 = this;
return self__.meta4372;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4367_SHARP_){
return f1.call(null,(((p1__4367_SHARP_ == null))?null:self__.f.call(null,p1__4367_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4369","meta4369",756710194,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4368","cljs.core.async/t_cljs$core$async4368",1523517920,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4372","meta4372",1489752394,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4371";

cljs.core.async.t_cljs$core$async4371.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4371");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4371.
 */
cljs.core.async.__GT_t_cljs$core$async4371 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4371(f__$1,ch__$1,meta4369__$1,___$2,fn1__$1,meta4372){
return (new cljs.core.async.t_cljs$core$async4371(f__$1,ch__$1,meta4369__$1,___$2,fn1__$1,meta4372));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4371(self__.f,self__.ch,self__.meta4369,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4369","meta4369",756710194,null)], null);
});

cljs.core.async.t_cljs$core$async4368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4368";

cljs.core.async.t_cljs$core$async4368.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4368");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4368.
 */
cljs.core.async.__GT_t_cljs$core$async4368 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4368(f__$1,ch__$1,meta4369){
return (new cljs.core.async.t_cljs$core$async4368(f__$1,ch__$1,meta4369));
});

}

return (new cljs.core.async.t_cljs$core$async4368(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4374 = (function (f,ch,meta4375){
this.f = f;
this.ch = ch;
this.meta4375 = meta4375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4376,meta4375__$1){
var self__ = this;
var _4376__$1 = this;
return (new cljs.core.async.t_cljs$core$async4374(self__.f,self__.ch,meta4375__$1));
});

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4376){
var self__ = this;
var _4376__$1 = this;
return self__.meta4375;
});

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4375","meta4375",-1937582461,null)], null);
});

cljs.core.async.t_cljs$core$async4374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4374";

cljs.core.async.t_cljs$core$async4374.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4374");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4374.
 */
cljs.core.async.__GT_t_cljs$core$async4374 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4374(f__$1,ch__$1,meta4375){
return (new cljs.core.async.t_cljs$core$async4374(f__$1,ch__$1,meta4375));
});

}

return (new cljs.core.async.t_cljs$core$async4374(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async4377 = (function (p,ch,meta4378){
this.p = p;
this.ch = ch;
this.meta4378 = meta4378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4379,meta4378__$1){
var self__ = this;
var _4379__$1 = this;
return (new cljs.core.async.t_cljs$core$async4377(self__.p,self__.ch,meta4378__$1));
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

cljs.core.async.t_cljs$core$async4377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
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
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4378","meta4378",416836808,null)], null);
});

cljs.core.async.t_cljs$core$async4377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4377";

cljs.core.async.t_cljs$core$async4377.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4377");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4377.
 */
cljs.core.async.__GT_t_cljs$core$async4377 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4377(p__$1,ch__$1,meta4378){
return (new cljs.core.async.t_cljs$core$async4377(p__$1,ch__$1,meta4378));
});

}

return (new cljs.core.async.t_cljs$core$async4377(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4381 = arguments.length;
switch (G__4381) {
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
var c__2882__auto___4421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4421,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4421,out){
return (function (state_4402){
var state_val_4403 = (state_4402[(1)]);
if((state_val_4403 === (7))){
var inst_4398 = (state_4402[(2)]);
var state_4402__$1 = state_4402;
var statearr_4404_4422 = state_4402__$1;
(statearr_4404_4422[(2)] = inst_4398);

(statearr_4404_4422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (1))){
var state_4402__$1 = state_4402;
var statearr_4405_4423 = state_4402__$1;
(statearr_4405_4423[(2)] = null);

(statearr_4405_4423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (4))){
var inst_4384 = (state_4402[(7)]);
var inst_4384__$1 = (state_4402[(2)]);
var inst_4385 = (inst_4384__$1 == null);
var state_4402__$1 = (function (){var statearr_4406 = state_4402;
(statearr_4406[(7)] = inst_4384__$1);

return statearr_4406;
})();
if(cljs.core.truth_(inst_4385)){
var statearr_4407_4424 = state_4402__$1;
(statearr_4407_4424[(1)] = (5));

} else {
var statearr_4408_4425 = state_4402__$1;
(statearr_4408_4425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (6))){
var inst_4384 = (state_4402[(7)]);
var inst_4389 = p.call(null,inst_4384);
var state_4402__$1 = state_4402;
if(cljs.core.truth_(inst_4389)){
var statearr_4409_4426 = state_4402__$1;
(statearr_4409_4426[(1)] = (8));

} else {
var statearr_4410_4427 = state_4402__$1;
(statearr_4410_4427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (3))){
var inst_4400 = (state_4402[(2)]);
var state_4402__$1 = state_4402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4402__$1,inst_4400);
} else {
if((state_val_4403 === (2))){
var state_4402__$1 = state_4402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4402__$1,(4),ch);
} else {
if((state_val_4403 === (11))){
var inst_4392 = (state_4402[(2)]);
var state_4402__$1 = state_4402;
var statearr_4411_4428 = state_4402__$1;
(statearr_4411_4428[(2)] = inst_4392);

(statearr_4411_4428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (9))){
var state_4402__$1 = state_4402;
var statearr_4412_4429 = state_4402__$1;
(statearr_4412_4429[(2)] = null);

(statearr_4412_4429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (5))){
var inst_4387 = cljs.core.async.close_BANG_.call(null,out);
var state_4402__$1 = state_4402;
var statearr_4413_4430 = state_4402__$1;
(statearr_4413_4430[(2)] = inst_4387);

(statearr_4413_4430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (10))){
var inst_4395 = (state_4402[(2)]);
var state_4402__$1 = (function (){var statearr_4414 = state_4402;
(statearr_4414[(8)] = inst_4395);

return statearr_4414;
})();
var statearr_4415_4431 = state_4402__$1;
(statearr_4415_4431[(2)] = null);

(statearr_4415_4431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4403 === (8))){
var inst_4384 = (state_4402[(7)]);
var state_4402__$1 = state_4402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4402__$1,(11),out,inst_4384);
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
});})(c__2882__auto___4421,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4421,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4416 = [null,null,null,null,null,null,null,null,null];
(statearr_4416[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4416[(1)] = (1));

return statearr_4416;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4402){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4417){if((e4417 instanceof Object)){
var ex__2796__auto__ = e4417;
var statearr_4418_4432 = state_4402;
(statearr_4418_4432[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4433 = state_4402;
state_4402 = G__4433;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4421,out))
})();
var state__2884__auto__ = (function (){var statearr_4419 = f__2883__auto__.call(null);
(statearr_4419[(6)] = c__2882__auto___4421);

return statearr_4419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4421,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4435 = arguments.length;
switch (G__4435) {
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
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_4498){
var state_val_4499 = (state_4498[(1)]);
if((state_val_4499 === (7))){
var inst_4494 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
var statearr_4500_4538 = state_4498__$1;
(statearr_4500_4538[(2)] = inst_4494);

(statearr_4500_4538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (20))){
var inst_4464 = (state_4498[(7)]);
var inst_4475 = (state_4498[(2)]);
var inst_4476 = cljs.core.next.call(null,inst_4464);
var inst_4450 = inst_4476;
var inst_4451 = null;
var inst_4452 = (0);
var inst_4453 = (0);
var state_4498__$1 = (function (){var statearr_4501 = state_4498;
(statearr_4501[(8)] = inst_4450);

(statearr_4501[(9)] = inst_4453);

(statearr_4501[(10)] = inst_4452);

(statearr_4501[(11)] = inst_4451);

(statearr_4501[(12)] = inst_4475);

return statearr_4501;
})();
var statearr_4502_4539 = state_4498__$1;
(statearr_4502_4539[(2)] = null);

(statearr_4502_4539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (1))){
var state_4498__$1 = state_4498;
var statearr_4503_4540 = state_4498__$1;
(statearr_4503_4540[(2)] = null);

(statearr_4503_4540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (4))){
var inst_4439 = (state_4498[(13)]);
var inst_4439__$1 = (state_4498[(2)]);
var inst_4440 = (inst_4439__$1 == null);
var state_4498__$1 = (function (){var statearr_4504 = state_4498;
(statearr_4504[(13)] = inst_4439__$1);

return statearr_4504;
})();
if(cljs.core.truth_(inst_4440)){
var statearr_4505_4541 = state_4498__$1;
(statearr_4505_4541[(1)] = (5));

} else {
var statearr_4506_4542 = state_4498__$1;
(statearr_4506_4542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (15))){
var state_4498__$1 = state_4498;
var statearr_4510_4543 = state_4498__$1;
(statearr_4510_4543[(2)] = null);

(statearr_4510_4543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (21))){
var state_4498__$1 = state_4498;
var statearr_4511_4544 = state_4498__$1;
(statearr_4511_4544[(2)] = null);

(statearr_4511_4544[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (13))){
var inst_4450 = (state_4498[(8)]);
var inst_4453 = (state_4498[(9)]);
var inst_4452 = (state_4498[(10)]);
var inst_4451 = (state_4498[(11)]);
var inst_4460 = (state_4498[(2)]);
var inst_4461 = (inst_4453 + (1));
var tmp4507 = inst_4450;
var tmp4508 = inst_4452;
var tmp4509 = inst_4451;
var inst_4450__$1 = tmp4507;
var inst_4451__$1 = tmp4509;
var inst_4452__$1 = tmp4508;
var inst_4453__$1 = inst_4461;
var state_4498__$1 = (function (){var statearr_4512 = state_4498;
(statearr_4512[(14)] = inst_4460);

(statearr_4512[(8)] = inst_4450__$1);

(statearr_4512[(9)] = inst_4453__$1);

(statearr_4512[(10)] = inst_4452__$1);

(statearr_4512[(11)] = inst_4451__$1);

return statearr_4512;
})();
var statearr_4513_4545 = state_4498__$1;
(statearr_4513_4545[(2)] = null);

(statearr_4513_4545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (22))){
var state_4498__$1 = state_4498;
var statearr_4514_4546 = state_4498__$1;
(statearr_4514_4546[(2)] = null);

(statearr_4514_4546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (6))){
var inst_4439 = (state_4498[(13)]);
var inst_4448 = f.call(null,inst_4439);
var inst_4449 = cljs.core.seq.call(null,inst_4448);
var inst_4450 = inst_4449;
var inst_4451 = null;
var inst_4452 = (0);
var inst_4453 = (0);
var state_4498__$1 = (function (){var statearr_4515 = state_4498;
(statearr_4515[(8)] = inst_4450);

(statearr_4515[(9)] = inst_4453);

(statearr_4515[(10)] = inst_4452);

(statearr_4515[(11)] = inst_4451);

return statearr_4515;
})();
var statearr_4516_4547 = state_4498__$1;
(statearr_4516_4547[(2)] = null);

(statearr_4516_4547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (17))){
var inst_4464 = (state_4498[(7)]);
var inst_4468 = cljs.core.chunk_first.call(null,inst_4464);
var inst_4469 = cljs.core.chunk_rest.call(null,inst_4464);
var inst_4470 = cljs.core.count.call(null,inst_4468);
var inst_4450 = inst_4469;
var inst_4451 = inst_4468;
var inst_4452 = inst_4470;
var inst_4453 = (0);
var state_4498__$1 = (function (){var statearr_4517 = state_4498;
(statearr_4517[(8)] = inst_4450);

(statearr_4517[(9)] = inst_4453);

(statearr_4517[(10)] = inst_4452);

(statearr_4517[(11)] = inst_4451);

return statearr_4517;
})();
var statearr_4518_4548 = state_4498__$1;
(statearr_4518_4548[(2)] = null);

(statearr_4518_4548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (3))){
var inst_4496 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4498__$1,inst_4496);
} else {
if((state_val_4499 === (12))){
var inst_4484 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
var statearr_4519_4549 = state_4498__$1;
(statearr_4519_4549[(2)] = inst_4484);

(statearr_4519_4549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (2))){
var state_4498__$1 = state_4498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4498__$1,(4),in$);
} else {
if((state_val_4499 === (23))){
var inst_4492 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
var statearr_4520_4550 = state_4498__$1;
(statearr_4520_4550[(2)] = inst_4492);

(statearr_4520_4550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (19))){
var inst_4479 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
var statearr_4521_4551 = state_4498__$1;
(statearr_4521_4551[(2)] = inst_4479);

(statearr_4521_4551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (11))){
var inst_4450 = (state_4498[(8)]);
var inst_4464 = (state_4498[(7)]);
var inst_4464__$1 = cljs.core.seq.call(null,inst_4450);
var state_4498__$1 = (function (){var statearr_4522 = state_4498;
(statearr_4522[(7)] = inst_4464__$1);

return statearr_4522;
})();
if(inst_4464__$1){
var statearr_4523_4552 = state_4498__$1;
(statearr_4523_4552[(1)] = (14));

} else {
var statearr_4524_4553 = state_4498__$1;
(statearr_4524_4553[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (9))){
var inst_4486 = (state_4498[(2)]);
var inst_4487 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4498__$1 = (function (){var statearr_4525 = state_4498;
(statearr_4525[(15)] = inst_4486);

return statearr_4525;
})();
if(cljs.core.truth_(inst_4487)){
var statearr_4526_4554 = state_4498__$1;
(statearr_4526_4554[(1)] = (21));

} else {
var statearr_4527_4555 = state_4498__$1;
(statearr_4527_4555[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (5))){
var inst_4442 = cljs.core.async.close_BANG_.call(null,out);
var state_4498__$1 = state_4498;
var statearr_4528_4556 = state_4498__$1;
(statearr_4528_4556[(2)] = inst_4442);

(statearr_4528_4556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (14))){
var inst_4464 = (state_4498[(7)]);
var inst_4466 = cljs.core.chunked_seq_QMARK_.call(null,inst_4464);
var state_4498__$1 = state_4498;
if(inst_4466){
var statearr_4529_4557 = state_4498__$1;
(statearr_4529_4557[(1)] = (17));

} else {
var statearr_4530_4558 = state_4498__$1;
(statearr_4530_4558[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (16))){
var inst_4482 = (state_4498[(2)]);
var state_4498__$1 = state_4498;
var statearr_4531_4559 = state_4498__$1;
(statearr_4531_4559[(2)] = inst_4482);

(statearr_4531_4559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4499 === (10))){
var inst_4453 = (state_4498[(9)]);
var inst_4451 = (state_4498[(11)]);
var inst_4458 = cljs.core._nth.call(null,inst_4451,inst_4453);
var state_4498__$1 = state_4498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4498__$1,(13),out,inst_4458);
} else {
if((state_val_4499 === (18))){
var inst_4464 = (state_4498[(7)]);
var inst_4473 = cljs.core.first.call(null,inst_4464);
var state_4498__$1 = state_4498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4498__$1,(20),out,inst_4473);
} else {
if((state_val_4499 === (8))){
var inst_4453 = (state_4498[(9)]);
var inst_4452 = (state_4498[(10)]);
var inst_4455 = (inst_4453 < inst_4452);
var inst_4456 = inst_4455;
var state_4498__$1 = state_4498;
if(cljs.core.truth_(inst_4456)){
var statearr_4532_4560 = state_4498__$1;
(statearr_4532_4560[(1)] = (10));

} else {
var statearr_4533_4561 = state_4498__$1;
(statearr_4533_4561[(1)] = (11));

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
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____0 = (function (){
var statearr_4534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4534[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__);

(statearr_4534[(1)] = (1));

return statearr_4534;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____1 = (function (state_4498){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4535){if((e4535 instanceof Object)){
var ex__2796__auto__ = e4535;
var statearr_4536_4562 = state_4498;
(statearr_4536_4562[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4563 = state_4498;
state_4498 = G__4563;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__ = function(state_4498){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____1.call(this,state_4498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2793__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_4537 = f__2883__auto__.call(null);
(statearr_4537[(6)] = c__2882__auto__);

return statearr_4537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4565 = arguments.length;
switch (G__4565) {
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
var G__4568 = arguments.length;
switch (G__4568) {
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
var G__4571 = arguments.length;
switch (G__4571) {
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
var c__2882__auto___4618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4618,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4618,out){
return (function (state_4595){
var state_val_4596 = (state_4595[(1)]);
if((state_val_4596 === (7))){
var inst_4590 = (state_4595[(2)]);
var state_4595__$1 = state_4595;
var statearr_4597_4619 = state_4595__$1;
(statearr_4597_4619[(2)] = inst_4590);

(statearr_4597_4619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (1))){
var inst_4572 = null;
var state_4595__$1 = (function (){var statearr_4598 = state_4595;
(statearr_4598[(7)] = inst_4572);

return statearr_4598;
})();
var statearr_4599_4620 = state_4595__$1;
(statearr_4599_4620[(2)] = null);

(statearr_4599_4620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (4))){
var inst_4575 = (state_4595[(8)]);
var inst_4575__$1 = (state_4595[(2)]);
var inst_4576 = (inst_4575__$1 == null);
var inst_4577 = cljs.core.not.call(null,inst_4576);
var state_4595__$1 = (function (){var statearr_4600 = state_4595;
(statearr_4600[(8)] = inst_4575__$1);

return statearr_4600;
})();
if(inst_4577){
var statearr_4601_4621 = state_4595__$1;
(statearr_4601_4621[(1)] = (5));

} else {
var statearr_4602_4622 = state_4595__$1;
(statearr_4602_4622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (6))){
var state_4595__$1 = state_4595;
var statearr_4603_4623 = state_4595__$1;
(statearr_4603_4623[(2)] = null);

(statearr_4603_4623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (3))){
var inst_4592 = (state_4595[(2)]);
var inst_4593 = cljs.core.async.close_BANG_.call(null,out);
var state_4595__$1 = (function (){var statearr_4604 = state_4595;
(statearr_4604[(9)] = inst_4592);

return statearr_4604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4595__$1,inst_4593);
} else {
if((state_val_4596 === (2))){
var state_4595__$1 = state_4595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4595__$1,(4),ch);
} else {
if((state_val_4596 === (11))){
var inst_4575 = (state_4595[(8)]);
var inst_4584 = (state_4595[(2)]);
var inst_4572 = inst_4575;
var state_4595__$1 = (function (){var statearr_4605 = state_4595;
(statearr_4605[(7)] = inst_4572);

(statearr_4605[(10)] = inst_4584);

return statearr_4605;
})();
var statearr_4606_4624 = state_4595__$1;
(statearr_4606_4624[(2)] = null);

(statearr_4606_4624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (9))){
var inst_4575 = (state_4595[(8)]);
var state_4595__$1 = state_4595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4595__$1,(11),out,inst_4575);
} else {
if((state_val_4596 === (5))){
var inst_4572 = (state_4595[(7)]);
var inst_4575 = (state_4595[(8)]);
var inst_4579 = cljs.core._EQ_.call(null,inst_4575,inst_4572);
var state_4595__$1 = state_4595;
if(inst_4579){
var statearr_4608_4625 = state_4595__$1;
(statearr_4608_4625[(1)] = (8));

} else {
var statearr_4609_4626 = state_4595__$1;
(statearr_4609_4626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (10))){
var inst_4587 = (state_4595[(2)]);
var state_4595__$1 = state_4595;
var statearr_4610_4627 = state_4595__$1;
(statearr_4610_4627[(2)] = inst_4587);

(statearr_4610_4627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4596 === (8))){
var inst_4572 = (state_4595[(7)]);
var tmp4607 = inst_4572;
var inst_4572__$1 = tmp4607;
var state_4595__$1 = (function (){var statearr_4611 = state_4595;
(statearr_4611[(7)] = inst_4572__$1);

return statearr_4611;
})();
var statearr_4612_4628 = state_4595__$1;
(statearr_4612_4628[(2)] = null);

(statearr_4612_4628[(1)] = (2));


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
});})(c__2882__auto___4618,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4618,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4613[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4613[(1)] = (1));

return statearr_4613;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4595){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4614){if((e4614 instanceof Object)){
var ex__2796__auto__ = e4614;
var statearr_4615_4629 = state_4595;
(statearr_4615_4629[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4630 = state_4595;
state_4595 = G__4630;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4618,out))
})();
var state__2884__auto__ = (function (){var statearr_4616 = f__2883__auto__.call(null);
(statearr_4616[(6)] = c__2882__auto___4618);

return statearr_4616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4632 = arguments.length;
switch (G__4632) {
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
var c__2882__auto___4698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4698,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4698,out){
return (function (state_4670){
var state_val_4671 = (state_4670[(1)]);
if((state_val_4671 === (7))){
var inst_4666 = (state_4670[(2)]);
var state_4670__$1 = state_4670;
var statearr_4672_4699 = state_4670__$1;
(statearr_4672_4699[(2)] = inst_4666);

(statearr_4672_4699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (1))){
var inst_4633 = (new Array(n));
var inst_4634 = inst_4633;
var inst_4635 = (0);
var state_4670__$1 = (function (){var statearr_4673 = state_4670;
(statearr_4673[(7)] = inst_4635);

(statearr_4673[(8)] = inst_4634);

return statearr_4673;
})();
var statearr_4674_4700 = state_4670__$1;
(statearr_4674_4700[(2)] = null);

(statearr_4674_4700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (4))){
var inst_4638 = (state_4670[(9)]);
var inst_4638__$1 = (state_4670[(2)]);
var inst_4639 = (inst_4638__$1 == null);
var inst_4640 = cljs.core.not.call(null,inst_4639);
var state_4670__$1 = (function (){var statearr_4675 = state_4670;
(statearr_4675[(9)] = inst_4638__$1);

return statearr_4675;
})();
if(inst_4640){
var statearr_4676_4701 = state_4670__$1;
(statearr_4676_4701[(1)] = (5));

} else {
var statearr_4677_4702 = state_4670__$1;
(statearr_4677_4702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (15))){
var inst_4660 = (state_4670[(2)]);
var state_4670__$1 = state_4670;
var statearr_4678_4703 = state_4670__$1;
(statearr_4678_4703[(2)] = inst_4660);

(statearr_4678_4703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (13))){
var state_4670__$1 = state_4670;
var statearr_4679_4704 = state_4670__$1;
(statearr_4679_4704[(2)] = null);

(statearr_4679_4704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (6))){
var inst_4635 = (state_4670[(7)]);
var inst_4656 = (inst_4635 > (0));
var state_4670__$1 = state_4670;
if(cljs.core.truth_(inst_4656)){
var statearr_4680_4705 = state_4670__$1;
(statearr_4680_4705[(1)] = (12));

} else {
var statearr_4681_4706 = state_4670__$1;
(statearr_4681_4706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (3))){
var inst_4668 = (state_4670[(2)]);
var state_4670__$1 = state_4670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4670__$1,inst_4668);
} else {
if((state_val_4671 === (12))){
var inst_4634 = (state_4670[(8)]);
var inst_4658 = cljs.core.vec.call(null,inst_4634);
var state_4670__$1 = state_4670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4670__$1,(15),out,inst_4658);
} else {
if((state_val_4671 === (2))){
var state_4670__$1 = state_4670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4670__$1,(4),ch);
} else {
if((state_val_4671 === (11))){
var inst_4650 = (state_4670[(2)]);
var inst_4651 = (new Array(n));
var inst_4634 = inst_4651;
var inst_4635 = (0);
var state_4670__$1 = (function (){var statearr_4682 = state_4670;
(statearr_4682[(7)] = inst_4635);

(statearr_4682[(8)] = inst_4634);

(statearr_4682[(10)] = inst_4650);

return statearr_4682;
})();
var statearr_4683_4707 = state_4670__$1;
(statearr_4683_4707[(2)] = null);

(statearr_4683_4707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (9))){
var inst_4634 = (state_4670[(8)]);
var inst_4648 = cljs.core.vec.call(null,inst_4634);
var state_4670__$1 = state_4670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4670__$1,(11),out,inst_4648);
} else {
if((state_val_4671 === (5))){
var inst_4635 = (state_4670[(7)]);
var inst_4638 = (state_4670[(9)]);
var inst_4643 = (state_4670[(11)]);
var inst_4634 = (state_4670[(8)]);
var inst_4642 = (inst_4634[inst_4635] = inst_4638);
var inst_4643__$1 = (inst_4635 + (1));
var inst_4644 = (inst_4643__$1 < n);
var state_4670__$1 = (function (){var statearr_4684 = state_4670;
(statearr_4684[(11)] = inst_4643__$1);

(statearr_4684[(12)] = inst_4642);

return statearr_4684;
})();
if(cljs.core.truth_(inst_4644)){
var statearr_4685_4708 = state_4670__$1;
(statearr_4685_4708[(1)] = (8));

} else {
var statearr_4686_4709 = state_4670__$1;
(statearr_4686_4709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (14))){
var inst_4663 = (state_4670[(2)]);
var inst_4664 = cljs.core.async.close_BANG_.call(null,out);
var state_4670__$1 = (function (){var statearr_4688 = state_4670;
(statearr_4688[(13)] = inst_4663);

return statearr_4688;
})();
var statearr_4689_4710 = state_4670__$1;
(statearr_4689_4710[(2)] = inst_4664);

(statearr_4689_4710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (10))){
var inst_4654 = (state_4670[(2)]);
var state_4670__$1 = state_4670;
var statearr_4690_4711 = state_4670__$1;
(statearr_4690_4711[(2)] = inst_4654);

(statearr_4690_4711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4671 === (8))){
var inst_4643 = (state_4670[(11)]);
var inst_4634 = (state_4670[(8)]);
var tmp4687 = inst_4634;
var inst_4634__$1 = tmp4687;
var inst_4635 = inst_4643;
var state_4670__$1 = (function (){var statearr_4691 = state_4670;
(statearr_4691[(7)] = inst_4635);

(statearr_4691[(8)] = inst_4634__$1);

return statearr_4691;
})();
var statearr_4692_4712 = state_4670__$1;
(statearr_4692_4712[(2)] = null);

(statearr_4692_4712[(1)] = (2));


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
});})(c__2882__auto___4698,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4698,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4693[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4693[(1)] = (1));

return statearr_4693;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4670){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4694){if((e4694 instanceof Object)){
var ex__2796__auto__ = e4694;
var statearr_4695_4713 = state_4670;
(statearr_4695_4713[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4714 = state_4670;
state_4670 = G__4714;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4698,out))
})();
var state__2884__auto__ = (function (){var statearr_4696 = f__2883__auto__.call(null);
(statearr_4696[(6)] = c__2882__auto___4698);

return statearr_4696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4698,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4716 = arguments.length;
switch (G__4716) {
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
var c__2882__auto___4786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___4786,out){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___4786,out){
return (function (state_4758){
var state_val_4759 = (state_4758[(1)]);
if((state_val_4759 === (7))){
var inst_4754 = (state_4758[(2)]);
var state_4758__$1 = state_4758;
var statearr_4760_4787 = state_4758__$1;
(statearr_4760_4787[(2)] = inst_4754);

(statearr_4760_4787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (1))){
var inst_4717 = [];
var inst_4718 = inst_4717;
var inst_4719 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4758__$1 = (function (){var statearr_4761 = state_4758;
(statearr_4761[(7)] = inst_4718);

(statearr_4761[(8)] = inst_4719);

return statearr_4761;
})();
var statearr_4762_4788 = state_4758__$1;
(statearr_4762_4788[(2)] = null);

(statearr_4762_4788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (4))){
var inst_4722 = (state_4758[(9)]);
var inst_4722__$1 = (state_4758[(2)]);
var inst_4723 = (inst_4722__$1 == null);
var inst_4724 = cljs.core.not.call(null,inst_4723);
var state_4758__$1 = (function (){var statearr_4763 = state_4758;
(statearr_4763[(9)] = inst_4722__$1);

return statearr_4763;
})();
if(inst_4724){
var statearr_4764_4789 = state_4758__$1;
(statearr_4764_4789[(1)] = (5));

} else {
var statearr_4765_4790 = state_4758__$1;
(statearr_4765_4790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (15))){
var inst_4748 = (state_4758[(2)]);
var state_4758__$1 = state_4758;
var statearr_4766_4791 = state_4758__$1;
(statearr_4766_4791[(2)] = inst_4748);

(statearr_4766_4791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (13))){
var state_4758__$1 = state_4758;
var statearr_4767_4792 = state_4758__$1;
(statearr_4767_4792[(2)] = null);

(statearr_4767_4792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (6))){
var inst_4718 = (state_4758[(7)]);
var inst_4743 = inst_4718.length;
var inst_4744 = (inst_4743 > (0));
var state_4758__$1 = state_4758;
if(cljs.core.truth_(inst_4744)){
var statearr_4768_4793 = state_4758__$1;
(statearr_4768_4793[(1)] = (12));

} else {
var statearr_4769_4794 = state_4758__$1;
(statearr_4769_4794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (3))){
var inst_4756 = (state_4758[(2)]);
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4758__$1,inst_4756);
} else {
if((state_val_4759 === (12))){
var inst_4718 = (state_4758[(7)]);
var inst_4746 = cljs.core.vec.call(null,inst_4718);
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4758__$1,(15),out,inst_4746);
} else {
if((state_val_4759 === (2))){
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4758__$1,(4),ch);
} else {
if((state_val_4759 === (11))){
var inst_4722 = (state_4758[(9)]);
var inst_4726 = (state_4758[(10)]);
var inst_4736 = (state_4758[(2)]);
var inst_4737 = [];
var inst_4738 = inst_4737.push(inst_4722);
var inst_4718 = inst_4737;
var inst_4719 = inst_4726;
var state_4758__$1 = (function (){var statearr_4770 = state_4758;
(statearr_4770[(7)] = inst_4718);

(statearr_4770[(11)] = inst_4738);

(statearr_4770[(12)] = inst_4736);

(statearr_4770[(8)] = inst_4719);

return statearr_4770;
})();
var statearr_4771_4795 = state_4758__$1;
(statearr_4771_4795[(2)] = null);

(statearr_4771_4795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (9))){
var inst_4718 = (state_4758[(7)]);
var inst_4734 = cljs.core.vec.call(null,inst_4718);
var state_4758__$1 = state_4758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4758__$1,(11),out,inst_4734);
} else {
if((state_val_4759 === (5))){
var inst_4722 = (state_4758[(9)]);
var inst_4726 = (state_4758[(10)]);
var inst_4719 = (state_4758[(8)]);
var inst_4726__$1 = f.call(null,inst_4722);
var inst_4727 = cljs.core._EQ_.call(null,inst_4726__$1,inst_4719);
var inst_4728 = cljs.core.keyword_identical_QMARK_.call(null,inst_4719,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4729 = ((inst_4727) || (inst_4728));
var state_4758__$1 = (function (){var statearr_4772 = state_4758;
(statearr_4772[(10)] = inst_4726__$1);

return statearr_4772;
})();
if(cljs.core.truth_(inst_4729)){
var statearr_4773_4796 = state_4758__$1;
(statearr_4773_4796[(1)] = (8));

} else {
var statearr_4774_4797 = state_4758__$1;
(statearr_4774_4797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (14))){
var inst_4751 = (state_4758[(2)]);
var inst_4752 = cljs.core.async.close_BANG_.call(null,out);
var state_4758__$1 = (function (){var statearr_4776 = state_4758;
(statearr_4776[(13)] = inst_4751);

return statearr_4776;
})();
var statearr_4777_4798 = state_4758__$1;
(statearr_4777_4798[(2)] = inst_4752);

(statearr_4777_4798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (10))){
var inst_4741 = (state_4758[(2)]);
var state_4758__$1 = state_4758;
var statearr_4778_4799 = state_4758__$1;
(statearr_4778_4799[(2)] = inst_4741);

(statearr_4778_4799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4759 === (8))){
var inst_4718 = (state_4758[(7)]);
var inst_4722 = (state_4758[(9)]);
var inst_4726 = (state_4758[(10)]);
var inst_4731 = inst_4718.push(inst_4722);
var tmp4775 = inst_4718;
var inst_4718__$1 = tmp4775;
var inst_4719 = inst_4726;
var state_4758__$1 = (function (){var statearr_4779 = state_4758;
(statearr_4779[(7)] = inst_4718__$1);

(statearr_4779[(8)] = inst_4719);

(statearr_4779[(14)] = inst_4731);

return statearr_4779;
})();
var statearr_4780_4800 = state_4758__$1;
(statearr_4780_4800[(2)] = null);

(statearr_4780_4800[(1)] = (2));


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
});})(c__2882__auto___4786,out))
;
return ((function (switch__2792__auto__,c__2882__auto___4786,out){
return (function() {
var cljs$core$async$state_machine__2793__auto__ = null;
var cljs$core$async$state_machine__2793__auto____0 = (function (){
var statearr_4781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4781[(0)] = cljs$core$async$state_machine__2793__auto__);

(statearr_4781[(1)] = (1));

return statearr_4781;
});
var cljs$core$async$state_machine__2793__auto____1 = (function (state_4758){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_4758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e4782){if((e4782 instanceof Object)){
var ex__2796__auto__ = e4782;
var statearr_4783_4801 = state_4758;
(statearr_4783_4801[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4802 = state_4758;
state_4758 = G__4802;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
cljs$core$async$state_machine__2793__auto__ = function(state_4758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2793__auto____1.call(this,state_4758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2793__auto____0;
cljs$core$async$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2793__auto____1;
return cljs$core$async$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___4786,out))
})();
var state__2884__auto__ = (function (){var statearr_4784 = f__2883__auto__.call(null);
(statearr_4784[(6)] = c__2882__auto___4786);

return statearr_4784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___4786,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
