goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30329 = arguments.length;
switch (G__30329) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30339 = (function (f,blockable,meta30340){
this.f = f;
this.blockable = blockable;
this.meta30340 = meta30340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30341,meta30340__$1){
var self__ = this;
var _30341__$1 = this;
return (new cljs.core.async.t_cljs$core$async30339(self__.f,self__.blockable,meta30340__$1));
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30341){
var self__ = this;
var _30341__$1 = this;
return self__.meta30340;
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30340","meta30340",-1976693178,null)], null);
});

cljs.core.async.t_cljs$core$async30339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30339";

cljs.core.async.t_cljs$core$async30339.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30339");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30339.
 */
cljs.core.async.__GT_t_cljs$core$async30339 = (function cljs$core$async$__GT_t_cljs$core$async30339(f__$1,blockable__$1,meta30340){
return (new cljs.core.async.t_cljs$core$async30339(f__$1,blockable__$1,meta30340));
});

}

return (new cljs.core.async.t_cljs$core$async30339(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30354 = arguments.length;
switch (G__30354) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__30361 = arguments.length;
switch (G__30361) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30366 = arguments.length;
switch (G__30366) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32981 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32981) : fn1.call(null,val_32981));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32981,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32981) : fn1.call(null,val_32981));
});})(val_32981,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30384 = arguments.length;
switch (G__30384) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32989 = n;
var x_32990 = (0);
while(true){
if((x_32990 < n__4607__auto___32989)){
(a[x_32990] = x_32990);

var G__32992 = (x_32990 + (1));
x_32990 = G__32992;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30385 = (function (flag,meta30386){
this.flag = flag;
this.meta30386 = meta30386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30387,meta30386__$1){
var self__ = this;
var _30387__$1 = this;
return (new cljs.core.async.t_cljs$core$async30385(self__.flag,meta30386__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30387){
var self__ = this;
var _30387__$1 = this;
return self__.meta30386;
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30386","meta30386",-1438686521,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30385";

cljs.core.async.t_cljs$core$async30385.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30385");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30385.
 */
cljs.core.async.__GT_t_cljs$core$async30385 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30385(flag__$1,meta30386){
return (new cljs.core.async.t_cljs$core$async30385(flag__$1,meta30386));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30385(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30407 = (function (flag,cb,meta30408){
this.flag = flag;
this.cb = cb;
this.meta30408 = meta30408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30409,meta30408__$1){
var self__ = this;
var _30409__$1 = this;
return (new cljs.core.async.t_cljs$core$async30407(self__.flag,self__.cb,meta30408__$1));
});

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30409){
var self__ = this;
var _30409__$1 = this;
return self__.meta30408;
});

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30408","meta30408",-1023906258,null)], null);
});

cljs.core.async.t_cljs$core$async30407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30407";

cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30407");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30407.
 */
cljs.core.async.__GT_t_cljs$core$async30407 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30407(flag__$1,cb__$1,meta30408){
return (new cljs.core.async.t_cljs$core$async30407(flag__$1,cb__$1,meta30408));
});

}

return (new cljs.core.async.t_cljs$core$async30407(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30419_SHARP_){
var G__30421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30419_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30421) : fret.call(null,G__30421));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30420_SHARP_){
var G__30422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30420_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30422) : fret.call(null,G__30422));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33016 = (i + (1));
i = G__33016;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___33022 = arguments.length;
var i__4731__auto___33023 = (0);
while(true){
if((i__4731__auto___33023 < len__4730__auto___33022)){
args__4736__auto__.push((arguments[i__4731__auto___33023]));

var G__33025 = (i__4731__auto___33023 + (1));
i__4731__auto___33023 = G__33025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30435){
var map__30436 = p__30435;
var map__30436__$1 = (((((!((map__30436 == null))))?(((((map__30436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30436):map__30436);
var opts = map__30436__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30423){
var G__30424 = cljs.core.first(seq30423);
var seq30423__$1 = cljs.core.next(seq30423);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30424,seq30423__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30457 = arguments.length;
switch (G__30457) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30213__auto___33035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33035){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33035){
return (function (state_30508){
var state_val_30509 = (state_30508[(1)]);
if((state_val_30509 === (7))){
var inst_30503 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
var statearr_30510_33038 = state_30508__$1;
(statearr_30510_33038[(2)] = inst_30503);

(statearr_30510_33038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (1))){
var state_30508__$1 = state_30508;
var statearr_30512_33039 = state_30508__$1;
(statearr_30512_33039[(2)] = null);

(statearr_30512_33039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (4))){
var inst_30485 = (state_30508[(7)]);
var inst_30485__$1 = (state_30508[(2)]);
var inst_30486 = (inst_30485__$1 == null);
var state_30508__$1 = (function (){var statearr_30514 = state_30508;
(statearr_30514[(7)] = inst_30485__$1);

return statearr_30514;
})();
if(cljs.core.truth_(inst_30486)){
var statearr_30515_33041 = state_30508__$1;
(statearr_30515_33041[(1)] = (5));

} else {
var statearr_30516_33042 = state_30508__$1;
(statearr_30516_33042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (13))){
var state_30508__$1 = state_30508;
var statearr_30517_33043 = state_30508__$1;
(statearr_30517_33043[(2)] = null);

(statearr_30517_33043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (6))){
var inst_30485 = (state_30508[(7)]);
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30508__$1,(11),to,inst_30485);
} else {
if((state_val_30509 === (3))){
var inst_30506 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30508__$1,inst_30506);
} else {
if((state_val_30509 === (12))){
var state_30508__$1 = state_30508;
var statearr_30527_33047 = state_30508__$1;
(statearr_30527_33047[(2)] = null);

(statearr_30527_33047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (2))){
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30508__$1,(4),from);
} else {
if((state_val_30509 === (11))){
var inst_30496 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
if(cljs.core.truth_(inst_30496)){
var statearr_30535_33050 = state_30508__$1;
(statearr_30535_33050[(1)] = (12));

} else {
var statearr_30539_33051 = state_30508__$1;
(statearr_30539_33051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (9))){
var state_30508__$1 = state_30508;
var statearr_30548_33053 = state_30508__$1;
(statearr_30548_33053[(2)] = null);

(statearr_30548_33053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (5))){
var state_30508__$1 = state_30508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30552_33058 = state_30508__$1;
(statearr_30552_33058[(1)] = (8));

} else {
var statearr_30553_33059 = state_30508__$1;
(statearr_30553_33059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (14))){
var inst_30501 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
var statearr_30554_33061 = state_30508__$1;
(statearr_30554_33061[(2)] = inst_30501);

(statearr_30554_33061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (10))){
var inst_30493 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
var statearr_30555_33069 = state_30508__$1;
(statearr_30555_33069[(2)] = inst_30493);

(statearr_30555_33069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (8))){
var inst_30490 = cljs.core.async.close_BANG_(to);
var state_30508__$1 = state_30508;
var statearr_30556_33075 = state_30508__$1;
(statearr_30556_33075[(2)] = inst_30490);

(statearr_30556_33075[(1)] = (10));


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
});})(c__30213__auto___33035))
;
return ((function (switch__30004__auto__,c__30213__auto___33035){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_30561 = [null,null,null,null,null,null,null,null];
(statearr_30561[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_30561[(1)] = (1));

return statearr_30561;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_30508){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30508);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30565){if((e30565 instanceof Object)){
var ex__30008__auto__ = e30565;
var statearr_30570_33078 = state_30508;
(statearr_30570_33078[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33090 = state_30508;
state_30508 = G__33090;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_30508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_30508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33035))
})();
var state__30215__auto__ = (function (){var statearr_30574 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30574[(6)] = c__30213__auto___33035);

return statearr_30574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33035))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30596){
var vec__30597 = p__30596;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(1),null);
var job = vec__30597;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30213__auto___33098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results){
return (function (state_30604){
var state_val_30605 = (state_30604[(1)]);
if((state_val_30605 === (1))){
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30604__$1,(2),res,v);
} else {
if((state_val_30605 === (2))){
var inst_30601 = (state_30604[(2)]);
var inst_30602 = cljs.core.async.close_BANG_(res);
var state_30604__$1 = (function (){var statearr_30606 = state_30604;
(statearr_30606[(7)] = inst_30601);

return statearr_30606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30604__$1,inst_30602);
} else {
return null;
}
}
});})(c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results))
;
return ((function (switch__30004__auto__,c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_30607 = [null,null,null,null,null,null,null,null];
(statearr_30607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__);

(statearr_30607[(1)] = (1));

return statearr_30607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1 = (function (state_30604){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30604);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30608){if((e30608 instanceof Object)){
var ex__30008__auto__ = e30608;
var statearr_30609_33107 = state_30604;
(statearr_30609_33107[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33108 = state_30604;
state_30604 = G__33108;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = function(state_30604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1.call(this,state_30604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results))
})();
var state__30215__auto__ = (function (){var statearr_30615 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30615[(6)] = c__30213__auto___33098);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33098,res,vec__30597,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30622){
var vec__30623 = p__30622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30623,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30623,(1),null);
var job = vec__30623;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33113 = n;
var __33114 = (0);
while(true){
if((__33114 < n__4607__auto___33113)){
var G__30626_33116 = type;
var G__30626_33117__$1 = (((G__30626_33116 instanceof cljs.core.Keyword))?G__30626_33116.fqn:null);
switch (G__30626_33117__$1) {
case "compute":
var c__30213__auto___33120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33114,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (__33114,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function (state_30646){
var state_val_30647 = (state_30646[(1)]);
if((state_val_30647 === (1))){
var state_30646__$1 = state_30646;
var statearr_30649_33130 = state_30646__$1;
(statearr_30649_33130[(2)] = null);

(statearr_30649_33130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (2))){
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30646__$1,(4),jobs);
} else {
if((state_val_30647 === (3))){
var inst_30643 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30646__$1,inst_30643);
} else {
if((state_val_30647 === (4))){
var inst_30632 = (state_30646[(2)]);
var inst_30633 = process(inst_30632);
var state_30646__$1 = state_30646;
if(cljs.core.truth_(inst_30633)){
var statearr_30653_33133 = state_30646__$1;
(statearr_30653_33133[(1)] = (5));

} else {
var statearr_30654_33134 = state_30646__$1;
(statearr_30654_33134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (5))){
var state_30646__$1 = state_30646;
var statearr_30659_33135 = state_30646__$1;
(statearr_30659_33135[(2)] = null);

(statearr_30659_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (6))){
var state_30646__$1 = state_30646;
var statearr_30660_33137 = state_30646__$1;
(statearr_30660_33137[(2)] = null);

(statearr_30660_33137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (7))){
var inst_30638 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30661_33141 = state_30646__$1;
(statearr_30661_33141[(2)] = inst_30638);

(statearr_30661_33141[(1)] = (3));


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
});})(__33114,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
;
return ((function (__33114,switch__30004__auto__,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_30662 = [null,null,null,null,null,null,null];
(statearr_30662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__);

(statearr_30662[(1)] = (1));

return statearr_30662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1 = (function (state_30646){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30646);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30663){if((e30663 instanceof Object)){
var ex__30008__auto__ = e30663;
var statearr_30666_33146 = state_30646;
(statearr_30666_33146[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33152 = state_30646;
state_30646 = G__33152;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = function(state_30646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1.call(this,state_30646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__;
})()
;})(__33114,switch__30004__auto__,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
})();
var state__30215__auto__ = (function (){var statearr_30667 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30667[(6)] = c__30213__auto___33120);

return statearr_30667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(__33114,c__30213__auto___33120,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
);


break;
case "async":
var c__30213__auto___33161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33114,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (__33114,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (1))){
var state_30682__$1 = state_30682;
var statearr_30689_33167 = state_30682__$1;
(statearr_30689_33167[(2)] = null);

(statearr_30689_33167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (2))){
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30682__$1,(4),jobs);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (4))){
var inst_30672 = (state_30682[(2)]);
var inst_30673 = async(inst_30672);
var state_30682__$1 = state_30682;
if(cljs.core.truth_(inst_30673)){
var statearr_30694_33174 = state_30682__$1;
(statearr_30694_33174[(1)] = (5));

} else {
var statearr_30699_33179 = state_30682__$1;
(statearr_30699_33179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var state_30682__$1 = state_30682;
var statearr_30700_33180 = state_30682__$1;
(statearr_30700_33180[(2)] = null);

(statearr_30700_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var state_30682__$1 = state_30682;
var statearr_30701_33187 = state_30682__$1;
(statearr_30701_33187[(2)] = null);

(statearr_30701_33187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (7))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30706_33188 = state_30682__$1;
(statearr_30706_33188[(2)] = inst_30678);

(statearr_30706_33188[(1)] = (3));


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
});})(__33114,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
;
return ((function (__33114,switch__30004__auto__,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_30708 = [null,null,null,null,null,null,null];
(statearr_30708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__);

(statearr_30708[(1)] = (1));

return statearr_30708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1 = (function (state_30682){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30682);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30709){if((e30709 instanceof Object)){
var ex__30008__auto__ = e30709;
var statearr_30710_33190 = state_30682;
(statearr_30710_33190[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33194 = state_30682;
state_30682 = G__33194;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__;
})()
;})(__33114,switch__30004__auto__,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
})();
var state__30215__auto__ = (function (){var statearr_30711 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30711[(6)] = c__30213__auto___33161);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(__33114,c__30213__auto___33161,G__30626_33116,G__30626_33117__$1,n__4607__auto___33113,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30626_33117__$1)].join('')));

}

var G__33195 = (__33114 + (1));
__33114 = G__33195;
continue;
} else {
}
break;
}

var c__30213__auto___33196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33196,jobs,results,process,async){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33196,jobs,results,process,async){
return (function (state_30737){
var state_val_30738 = (state_30737[(1)]);
if((state_val_30738 === (7))){
var inst_30733 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30740_33197 = state_30737__$1;
(statearr_30740_33197[(2)] = inst_30733);

(statearr_30740_33197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (1))){
var state_30737__$1 = state_30737;
var statearr_30741_33199 = state_30737__$1;
(statearr_30741_33199[(2)] = null);

(statearr_30741_33199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (4))){
var inst_30718 = (state_30737[(7)]);
var inst_30718__$1 = (state_30737[(2)]);
var inst_30719 = (inst_30718__$1 == null);
var state_30737__$1 = (function (){var statearr_30745 = state_30737;
(statearr_30745[(7)] = inst_30718__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30746_33201 = state_30737__$1;
(statearr_30746_33201[(1)] = (5));

} else {
var statearr_30747_33202 = state_30737__$1;
(statearr_30747_33202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (6))){
var inst_30718 = (state_30737[(7)]);
var inst_30723 = (state_30737[(8)]);
var inst_30723__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30725 = [inst_30718,inst_30723__$1];
var inst_30726 = (new cljs.core.PersistentVector(null,2,(5),inst_30724,inst_30725,null));
var state_30737__$1 = (function (){var statearr_30748 = state_30737;
(statearr_30748[(8)] = inst_30723__$1);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30737__$1,(8),jobs,inst_30726);
} else {
if((state_val_30738 === (3))){
var inst_30735 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30737__$1,inst_30735);
} else {
if((state_val_30738 === (2))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30737__$1,(4),from);
} else {
if((state_val_30738 === (9))){
var inst_30730 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30749 = state_30737;
(statearr_30749[(9)] = inst_30730);

return statearr_30749;
})();
var statearr_30750_33210 = state_30737__$1;
(statearr_30750_33210[(2)] = null);

(statearr_30750_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (5))){
var inst_30721 = cljs.core.async.close_BANG_(jobs);
var state_30737__$1 = state_30737;
var statearr_30752_33212 = state_30737__$1;
(statearr_30752_33212[(2)] = inst_30721);

(statearr_30752_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (8))){
var inst_30723 = (state_30737[(8)]);
var inst_30728 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30753 = state_30737;
(statearr_30753[(10)] = inst_30728);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30737__$1,(9),results,inst_30723);
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
});})(c__30213__auto___33196,jobs,results,process,async))
;
return ((function (switch__30004__auto__,c__30213__auto___33196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_30757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__);

(statearr_30757[(1)] = (1));

return statearr_30757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1 = (function (state_30737){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30737);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30758){if((e30758 instanceof Object)){
var ex__30008__auto__ = e30758;
var statearr_30759_33215 = state_30737;
(statearr_30759_33215[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_30737;
state_30737 = G__33216;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = function(state_30737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1.call(this,state_30737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33196,jobs,results,process,async))
})();
var state__30215__auto__ = (function (){var statearr_30761 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30761[(6)] = c__30213__auto___33196);

return statearr_30761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33196,jobs,results,process,async))
);


var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,jobs,results,process,async){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,jobs,results,process,async){
return (function (state_30801){
var state_val_30802 = (state_30801[(1)]);
if((state_val_30802 === (7))){
var inst_30795 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30809_33218 = state_30801__$1;
(statearr_30809_33218[(2)] = inst_30795);

(statearr_30809_33218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (20))){
var state_30801__$1 = state_30801;
var statearr_30810_33219 = state_30801__$1;
(statearr_30810_33219[(2)] = null);

(statearr_30810_33219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (1))){
var state_30801__$1 = state_30801;
var statearr_30813_33220 = state_30801__$1;
(statearr_30813_33220[(2)] = null);

(statearr_30813_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (4))){
var inst_30764 = (state_30801[(7)]);
var inst_30764__$1 = (state_30801[(2)]);
var inst_30765 = (inst_30764__$1 == null);
var state_30801__$1 = (function (){var statearr_30818 = state_30801;
(statearr_30818[(7)] = inst_30764__$1);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30765)){
var statearr_30819_33221 = state_30801__$1;
(statearr_30819_33221[(1)] = (5));

} else {
var statearr_30820_33222 = state_30801__$1;
(statearr_30820_33222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (15))){
var inst_30777 = (state_30801[(8)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30801__$1,(18),to,inst_30777);
} else {
if((state_val_30802 === (21))){
var inst_30790 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30821_33223 = state_30801__$1;
(statearr_30821_33223[(2)] = inst_30790);

(statearr_30821_33223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (13))){
var inst_30792 = (state_30801[(2)]);
var state_30801__$1 = (function (){var statearr_30822 = state_30801;
(statearr_30822[(9)] = inst_30792);

return statearr_30822;
})();
var statearr_30827_33224 = state_30801__$1;
(statearr_30827_33224[(2)] = null);

(statearr_30827_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (6))){
var inst_30764 = (state_30801[(7)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(11),inst_30764);
} else {
if((state_val_30802 === (17))){
var inst_30785 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
if(cljs.core.truth_(inst_30785)){
var statearr_30833_33225 = state_30801__$1;
(statearr_30833_33225[(1)] = (19));

} else {
var statearr_30834_33226 = state_30801__$1;
(statearr_30834_33226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (3))){
var inst_30797 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30801__$1,inst_30797);
} else {
if((state_val_30802 === (12))){
var inst_30774 = (state_30801[(10)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(14),inst_30774);
} else {
if((state_val_30802 === (2))){
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(4),results);
} else {
if((state_val_30802 === (19))){
var state_30801__$1 = state_30801;
var statearr_30835_33228 = state_30801__$1;
(statearr_30835_33228[(2)] = null);

(statearr_30835_33228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (11))){
var inst_30774 = (state_30801[(2)]);
var state_30801__$1 = (function (){var statearr_30839 = state_30801;
(statearr_30839[(10)] = inst_30774);

return statearr_30839;
})();
var statearr_30840_33230 = state_30801__$1;
(statearr_30840_33230[(2)] = null);

(statearr_30840_33230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (9))){
var state_30801__$1 = state_30801;
var statearr_30845_33231 = state_30801__$1;
(statearr_30845_33231[(2)] = null);

(statearr_30845_33231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (5))){
var state_30801__$1 = state_30801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30846_33232 = state_30801__$1;
(statearr_30846_33232[(1)] = (8));

} else {
var statearr_30847_33233 = state_30801__$1;
(statearr_30847_33233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (14))){
var inst_30777 = (state_30801[(8)]);
var inst_30779 = (state_30801[(11)]);
var inst_30777__$1 = (state_30801[(2)]);
var inst_30778 = (inst_30777__$1 == null);
var inst_30779__$1 = cljs.core.not(inst_30778);
var state_30801__$1 = (function (){var statearr_30848 = state_30801;
(statearr_30848[(8)] = inst_30777__$1);

(statearr_30848[(11)] = inst_30779__$1);

return statearr_30848;
})();
if(inst_30779__$1){
var statearr_30852_33234 = state_30801__$1;
(statearr_30852_33234[(1)] = (15));

} else {
var statearr_30853_33235 = state_30801__$1;
(statearr_30853_33235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (16))){
var inst_30779 = (state_30801[(11)]);
var state_30801__$1 = state_30801;
var statearr_30861_33236 = state_30801__$1;
(statearr_30861_33236[(2)] = inst_30779);

(statearr_30861_33236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (10))){
var inst_30771 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30862_33237 = state_30801__$1;
(statearr_30862_33237[(2)] = inst_30771);

(statearr_30862_33237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (18))){
var inst_30782 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30863_33238 = state_30801__$1;
(statearr_30863_33238[(2)] = inst_30782);

(statearr_30863_33238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (8))){
var inst_30768 = cljs.core.async.close_BANG_(to);
var state_30801__$1 = state_30801;
var statearr_30864_33239 = state_30801__$1;
(statearr_30864_33239[(2)] = inst_30768);

(statearr_30864_33239[(1)] = (10));


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
});})(c__30213__auto__,jobs,results,process,async))
;
return ((function (switch__30004__auto__,c__30213__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1 = (function (state_30801){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30801);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30867){if((e30867 instanceof Object)){
var ex__30008__auto__ = e30867;
var statearr_30868_33242 = state_30801;
(statearr_30868_33242[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33243 = state_30801;
state_30801 = G__33243;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__ = function(state_30801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1.call(this,state_30801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,jobs,results,process,async))
})();
var state__30215__auto__ = (function (){var statearr_30869 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30869[(6)] = c__30213__auto__);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,jobs,results,process,async))
);

return c__30213__auto__;
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
var G__30872 = arguments.length;
switch (G__30872) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__30881 = arguments.length;
switch (G__30881) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__30885 = arguments.length;
switch (G__30885) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30213__auto___33251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33251,tc,fc){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33251,tc,fc){
return (function (state_30917){
var state_val_30918 = (state_30917[(1)]);
if((state_val_30918 === (7))){
var inst_30913 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
var statearr_30922_33252 = state_30917__$1;
(statearr_30922_33252[(2)] = inst_30913);

(statearr_30922_33252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (1))){
var state_30917__$1 = state_30917;
var statearr_30923_33255 = state_30917__$1;
(statearr_30923_33255[(2)] = null);

(statearr_30923_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (4))){
var inst_30894 = (state_30917[(7)]);
var inst_30894__$1 = (state_30917[(2)]);
var inst_30895 = (inst_30894__$1 == null);
var state_30917__$1 = (function (){var statearr_30924 = state_30917;
(statearr_30924[(7)] = inst_30894__$1);

return statearr_30924;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30928_33256 = state_30917__$1;
(statearr_30928_33256[(1)] = (5));

} else {
var statearr_30929_33257 = state_30917__$1;
(statearr_30929_33257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (13))){
var state_30917__$1 = state_30917;
var statearr_30930_33260 = state_30917__$1;
(statearr_30930_33260[(2)] = null);

(statearr_30930_33260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (6))){
var inst_30894 = (state_30917[(7)]);
var inst_30900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30894) : p.call(null,inst_30894));
var state_30917__$1 = state_30917;
if(cljs.core.truth_(inst_30900)){
var statearr_30933_33261 = state_30917__$1;
(statearr_30933_33261[(1)] = (9));

} else {
var statearr_30934_33262 = state_30917__$1;
(statearr_30934_33262[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (3))){
var inst_30915 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30917__$1,inst_30915);
} else {
if((state_val_30918 === (12))){
var state_30917__$1 = state_30917;
var statearr_30937_33265 = state_30917__$1;
(statearr_30937_33265[(2)] = null);

(statearr_30937_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (2))){
var state_30917__$1 = state_30917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30917__$1,(4),ch);
} else {
if((state_val_30918 === (11))){
var inst_30894 = (state_30917[(7)]);
var inst_30904 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30917__$1,(8),inst_30904,inst_30894);
} else {
if((state_val_30918 === (9))){
var state_30917__$1 = state_30917;
var statearr_30939_33266 = state_30917__$1;
(statearr_30939_33266[(2)] = tc);

(statearr_30939_33266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (5))){
var inst_30897 = cljs.core.async.close_BANG_(tc);
var inst_30898 = cljs.core.async.close_BANG_(fc);
var state_30917__$1 = (function (){var statearr_30940 = state_30917;
(statearr_30940[(8)] = inst_30897);

return statearr_30940;
})();
var statearr_30941_33267 = state_30917__$1;
(statearr_30941_33267[(2)] = inst_30898);

(statearr_30941_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (14))){
var inst_30911 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
var statearr_30942_33268 = state_30917__$1;
(statearr_30942_33268[(2)] = inst_30911);

(statearr_30942_33268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (10))){
var state_30917__$1 = state_30917;
var statearr_30943_33269 = state_30917__$1;
(statearr_30943_33269[(2)] = fc);

(statearr_30943_33269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30918 === (8))){
var inst_30906 = (state_30917[(2)]);
var state_30917__$1 = state_30917;
if(cljs.core.truth_(inst_30906)){
var statearr_30944_33270 = state_30917__$1;
(statearr_30944_33270[(1)] = (12));

} else {
var statearr_30945_33271 = state_30917__$1;
(statearr_30945_33271[(1)] = (13));

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
});})(c__30213__auto___33251,tc,fc))
;
return ((function (switch__30004__auto__,c__30213__auto___33251,tc,fc){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_30917){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30917);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e30957){if((e30957 instanceof Object)){
var ex__30008__auto__ = e30957;
var statearr_30959_33272 = state_30917;
(statearr_30959_33272[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33273 = state_30917;
state_30917 = G__33273;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_30917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_30917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33251,tc,fc))
})();
var state__30215__auto__ = (function (){var statearr_30963 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_30963[(6)] = c__30213__auto___33251);

return statearr_30963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33251,tc,fc))
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
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30989_33274 = state_30985__$1;
(statearr_30989_33274[(2)] = inst_30981);

(statearr_30989_33274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var inst_30965 = init;
var state_30985__$1 = (function (){var statearr_30991 = state_30985;
(statearr_30991[(7)] = inst_30965);

return statearr_30991;
})();
var statearr_30992_33275 = state_30985__$1;
(statearr_30992_33275[(2)] = null);

(statearr_30992_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30968 = (state_30985[(8)]);
var inst_30968__$1 = (state_30985[(2)]);
var inst_30969 = (inst_30968__$1 == null);
var state_30985__$1 = (function (){var statearr_30993 = state_30985;
(statearr_30993[(8)] = inst_30968__$1);

return statearr_30993;
})();
if(cljs.core.truth_(inst_30969)){
var statearr_30994_33276 = state_30985__$1;
(statearr_30994_33276[(1)] = (5));

} else {
var statearr_30995_33277 = state_30985__$1;
(statearr_30995_33277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (6))){
var inst_30968 = (state_30985[(8)]);
var inst_30972 = (state_30985[(9)]);
var inst_30965 = (state_30985[(7)]);
var inst_30972__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30965,inst_30968) : f.call(null,inst_30965,inst_30968));
var inst_30973 = cljs.core.reduced_QMARK_(inst_30972__$1);
var state_30985__$1 = (function (){var statearr_30996 = state_30985;
(statearr_30996[(9)] = inst_30972__$1);

return statearr_30996;
})();
if(inst_30973){
var statearr_30998_33278 = state_30985__$1;
(statearr_30998_33278[(1)] = (8));

} else {
var statearr_30999_33279 = state_30985__$1;
(statearr_30999_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (2))){
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30985__$1,(4),ch);
} else {
if((state_val_30986 === (9))){
var inst_30972 = (state_30985[(9)]);
var inst_30965 = inst_30972;
var state_30985__$1 = (function (){var statearr_31009 = state_30985;
(statearr_31009[(7)] = inst_30965);

return statearr_31009;
})();
var statearr_31012_33280 = state_30985__$1;
(statearr_31012_33280[(2)] = null);

(statearr_31012_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (5))){
var inst_30965 = (state_30985[(7)]);
var state_30985__$1 = state_30985;
var statearr_31015_33281 = state_30985__$1;
(statearr_31015_33281[(2)] = inst_30965);

(statearr_31015_33281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var inst_30979 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31017_33282 = state_30985__$1;
(statearr_31017_33282[(2)] = inst_30979);

(statearr_31017_33282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30972 = (state_30985[(9)]);
var inst_30975 = cljs.core.deref(inst_30972);
var state_30985__$1 = state_30985;
var statearr_31018_33283 = state_30985__$1;
(statearr_31018_33283[(2)] = inst_30975);

(statearr_31018_33283[(1)] = (10));


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
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30005__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30005__auto____0 = (function (){
var statearr_31020 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31020[(0)] = cljs$core$async$reduce_$_state_machine__30005__auto__);

(statearr_31020[(1)] = (1));

return statearr_31020;
});
var cljs$core$async$reduce_$_state_machine__30005__auto____1 = (function (state_30985){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_30985);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e31021){if((e31021 instanceof Object)){
var ex__30008__auto__ = e31021;
var statearr_31022_33284 = state_30985;
(statearr_31022_33284[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_30985;
state_30985 = G__33285;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30005__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30005__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30005__auto____0;
cljs$core$async$reduce_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30005__auto____1;
return cljs$core$async$reduce_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_31027 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_31027[(6)] = c__30213__auto__);

return statearr_31027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__,f__$1){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__,f__$1){
return (function (state_31039){
var state_val_31040 = (state_31039[(1)]);
if((state_val_31040 === (1))){
var inst_31034 = cljs.core.async.reduce(f__$1,init,ch);
var state_31039__$1 = state_31039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31039__$1,(2),inst_31034);
} else {
if((state_val_31040 === (2))){
var inst_31036 = (state_31039[(2)]);
var inst_31037 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31036) : f__$1.call(null,inst_31036));
var state_31039__$1 = state_31039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31039__$1,inst_31037);
} else {
return null;
}
}
});})(c__30213__auto__,f__$1))
;
return ((function (switch__30004__auto__,c__30213__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30005__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30005__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null];
(statearr_31041[(0)] = cljs$core$async$transduce_$_state_machine__30005__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var cljs$core$async$transduce_$_state_machine__30005__auto____1 = (function (state_31039){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_31039);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e31042){if((e31042 instanceof Object)){
var ex__30008__auto__ = e31042;
var statearr_31043_33286 = state_31039;
(statearr_31043_33286[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_31039;
state_31039 = G__33287;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30005__auto__ = function(state_31039){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30005__auto____1.call(this,state_31039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30005__auto____0;
cljs$core$async$transduce_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30005__auto____1;
return cljs$core$async$transduce_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__,f__$1))
})();
var state__30215__auto__ = (function (){var statearr_31047 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_31047[(6)] = c__30213__auto__);

return statearr_31047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__,f__$1))
);

return c__30213__auto__;
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
var G__31049 = arguments.length;
switch (G__31049) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31060 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31085_33289 = state_31079__$1;
(statearr_31085_33289[(2)] = inst_31060);

(statearr_31085_33289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var inst_31054 = cljs.core.seq(coll);
var inst_31055 = inst_31054;
var state_31079__$1 = (function (){var statearr_31086 = state_31079;
(statearr_31086[(7)] = inst_31055);

return statearr_31086;
})();
var statearr_31087_33290 = state_31079__$1;
(statearr_31087_33290[(2)] = null);

(statearr_31087_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31055 = (state_31079[(7)]);
var inst_31058 = cljs.core.first(inst_31055);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31079__$1,(7),ch,inst_31058);
} else {
if((state_val_31080 === (13))){
var inst_31073 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31088_33291 = state_31079__$1;
(statearr_31088_33291[(2)] = inst_31073);

(statearr_31088_33291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var inst_31063 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31063)){
var statearr_31089_33292 = state_31079__$1;
(statearr_31089_33292[(1)] = (8));

} else {
var statearr_31090_33293 = state_31079__$1;
(statearr_31090_33293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31077 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31079__$1,inst_31077);
} else {
if((state_val_31080 === (12))){
var state_31079__$1 = state_31079;
var statearr_31091_33294 = state_31079__$1;
(statearr_31091_33294[(2)] = null);

(statearr_31091_33294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (2))){
var inst_31055 = (state_31079[(7)]);
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31055)){
var statearr_31092_33295 = state_31079__$1;
(statearr_31092_33295[(1)] = (4));

} else {
var statearr_31093_33296 = state_31079__$1;
(statearr_31093_33296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (11))){
var inst_31070 = cljs.core.async.close_BANG_(ch);
var state_31079__$1 = state_31079;
var statearr_31094_33297 = state_31079__$1;
(statearr_31094_33297[(2)] = inst_31070);

(statearr_31094_33297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var state_31079__$1 = state_31079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31095_33298 = state_31079__$1;
(statearr_31095_33298[(1)] = (11));

} else {
var statearr_31096_33299 = state_31079__$1;
(statearr_31096_33299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (5))){
var inst_31055 = (state_31079[(7)]);
var state_31079__$1 = state_31079;
var statearr_31097_33300 = state_31079__$1;
(statearr_31097_33300[(2)] = inst_31055);

(statearr_31097_33300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (10))){
var inst_31075 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31098_33301 = state_31079__$1;
(statearr_31098_33301[(2)] = inst_31075);

(statearr_31098_33301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (8))){
var inst_31055 = (state_31079[(7)]);
var inst_31065 = cljs.core.next(inst_31055);
var inst_31055__$1 = inst_31065;
var state_31079__$1 = (function (){var statearr_31099 = state_31079;
(statearr_31099[(7)] = inst_31055__$1);

return statearr_31099;
})();
var statearr_31100_33303 = state_31079__$1;
(statearr_31100_33303[(2)] = null);

(statearr_31100_33303[(1)] = (2));


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
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_31109 = [null,null,null,null,null,null,null,null];
(statearr_31109[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_31109[(1)] = (1));

return statearr_31109;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_31079){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_31079);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e31111){if((e31111 instanceof Object)){
var ex__30008__auto__ = e31111;
var statearr_31112_33305 = state_31079;
(statearr_31112_33305[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_31079;
state_31079 = G__33308;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_31118 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_31118[(6)] = c__30213__auto__);

return statearr_31118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31160 = (function (ch,cs,meta31161){
this.ch = ch;
this.cs = cs;
this.meta31161 = meta31161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31162,meta31161__$1){
var self__ = this;
var _31162__$1 = this;
return (new cljs.core.async.t_cljs$core$async31160(self__.ch,self__.cs,meta31161__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31162){
var self__ = this;
var _31162__$1 = this;
return self__.meta31161;
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31161","meta31161",-1272599477,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31160";

cljs.core.async.t_cljs$core$async31160.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31160");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31160.
 */
cljs.core.async.__GT_t_cljs$core$async31160 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31160(ch__$1,cs__$1,meta31161){
return (new cljs.core.async.t_cljs$core$async31160(ch__$1,cs__$1,meta31161));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31160(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30213__auto___33317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33317,cs,m,dchan,dctr,done){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33317,cs,m,dchan,dctr,done){
return (function (state_31336){
var state_val_31339 = (state_31336[(1)]);
if((state_val_31339 === (7))){
var inst_31329 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31341_33321 = state_31336__$1;
(statearr_31341_33321[(2)] = inst_31329);

(statearr_31341_33321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (20))){
var inst_31222 = (state_31336[(7)]);
var inst_31236 = cljs.core.first(inst_31222);
var inst_31237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31236,(0),null);
var inst_31238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31236,(1),null);
var state_31336__$1 = (function (){var statearr_31342 = state_31336;
(statearr_31342[(8)] = inst_31237);

return statearr_31342;
})();
if(cljs.core.truth_(inst_31238)){
var statearr_31343_33325 = state_31336__$1;
(statearr_31343_33325[(1)] = (22));

} else {
var statearr_31346_33326 = state_31336__$1;
(statearr_31346_33326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (27))){
var inst_31187 = (state_31336[(9)]);
var inst_31266 = (state_31336[(10)]);
var inst_31268 = (state_31336[(11)]);
var inst_31275 = (state_31336[(12)]);
var inst_31275__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31266,inst_31268);
var inst_31280 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31275__$1,inst_31187,done);
var state_31336__$1 = (function (){var statearr_31349 = state_31336;
(statearr_31349[(12)] = inst_31275__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31280)){
var statearr_31351_33327 = state_31336__$1;
(statearr_31351_33327[(1)] = (30));

} else {
var statearr_31352_33328 = state_31336__$1;
(statearr_31352_33328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (1))){
var state_31336__$1 = state_31336;
var statearr_31353_33332 = state_31336__$1;
(statearr_31353_33332[(2)] = null);

(statearr_31353_33332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (24))){
var inst_31222 = (state_31336[(7)]);
var inst_31243 = (state_31336[(2)]);
var inst_31244 = cljs.core.next(inst_31222);
var inst_31196 = inst_31244;
var inst_31197 = null;
var inst_31198 = (0);
var inst_31199 = (0);
var state_31336__$1 = (function (){var statearr_31355 = state_31336;
(statearr_31355[(13)] = inst_31198);

(statearr_31355[(14)] = inst_31197);

(statearr_31355[(15)] = inst_31243);

(statearr_31355[(16)] = inst_31199);

(statearr_31355[(17)] = inst_31196);

return statearr_31355;
})();
var statearr_31357_33333 = state_31336__$1;
(statearr_31357_33333[(2)] = null);

(statearr_31357_33333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (39))){
var state_31336__$1 = state_31336;
var statearr_31363_33335 = state_31336__$1;
(statearr_31363_33335[(2)] = null);

(statearr_31363_33335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (4))){
var inst_31187 = (state_31336[(9)]);
var inst_31187__$1 = (state_31336[(2)]);
var inst_31188 = (inst_31187__$1 == null);
var state_31336__$1 = (function (){var statearr_31368 = state_31336;
(statearr_31368[(9)] = inst_31187__$1);

return statearr_31368;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31369_33337 = state_31336__$1;
(statearr_31369_33337[(1)] = (5));

} else {
var statearr_31372_33338 = state_31336__$1;
(statearr_31372_33338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (15))){
var inst_31198 = (state_31336[(13)]);
var inst_31197 = (state_31336[(14)]);
var inst_31199 = (state_31336[(16)]);
var inst_31196 = (state_31336[(17)]);
var inst_31216 = (state_31336[(2)]);
var inst_31217 = (inst_31199 + (1));
var tmp31359 = inst_31198;
var tmp31360 = inst_31197;
var tmp31361 = inst_31196;
var inst_31196__$1 = tmp31361;
var inst_31197__$1 = tmp31360;
var inst_31198__$1 = tmp31359;
var inst_31199__$1 = inst_31217;
var state_31336__$1 = (function (){var statearr_31378 = state_31336;
(statearr_31378[(13)] = inst_31198__$1);

(statearr_31378[(14)] = inst_31197__$1);

(statearr_31378[(18)] = inst_31216);

(statearr_31378[(16)] = inst_31199__$1);

(statearr_31378[(17)] = inst_31196__$1);

return statearr_31378;
})();
var statearr_31380_33339 = state_31336__$1;
(statearr_31380_33339[(2)] = null);

(statearr_31380_33339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (21))){
var inst_31247 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31386_33340 = state_31336__$1;
(statearr_31386_33340[(2)] = inst_31247);

(statearr_31386_33340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (31))){
var inst_31275 = (state_31336[(12)]);
var inst_31283 = done(null);
var inst_31284 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31275);
var state_31336__$1 = (function (){var statearr_31387 = state_31336;
(statearr_31387[(19)] = inst_31283);

return statearr_31387;
})();
var statearr_31388_33341 = state_31336__$1;
(statearr_31388_33341[(2)] = inst_31284);

(statearr_31388_33341[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (32))){
var inst_31265 = (state_31336[(20)]);
var inst_31267 = (state_31336[(21)]);
var inst_31266 = (state_31336[(10)]);
var inst_31268 = (state_31336[(11)]);
var inst_31287 = (state_31336[(2)]);
var inst_31289 = (inst_31268 + (1));
var tmp31381 = inst_31265;
var tmp31382 = inst_31267;
var tmp31383 = inst_31266;
var inst_31265__$1 = tmp31381;
var inst_31266__$1 = tmp31383;
var inst_31267__$1 = tmp31382;
var inst_31268__$1 = inst_31289;
var state_31336__$1 = (function (){var statearr_31391 = state_31336;
(statearr_31391[(20)] = inst_31265__$1);

(statearr_31391[(21)] = inst_31267__$1);

(statearr_31391[(10)] = inst_31266__$1);

(statearr_31391[(22)] = inst_31287);

(statearr_31391[(11)] = inst_31268__$1);

return statearr_31391;
})();
var statearr_31392_33345 = state_31336__$1;
(statearr_31392_33345[(2)] = null);

(statearr_31392_33345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (40))){
var inst_31301 = (state_31336[(23)]);
var inst_31305 = done(null);
var inst_31306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31301);
var state_31336__$1 = (function (){var statearr_31393 = state_31336;
(statearr_31393[(24)] = inst_31305);

return statearr_31393;
})();
var statearr_31394_33349 = state_31336__$1;
(statearr_31394_33349[(2)] = inst_31306);

(statearr_31394_33349[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (33))){
var inst_31292 = (state_31336[(25)]);
var inst_31294 = cljs.core.chunked_seq_QMARK_(inst_31292);
var state_31336__$1 = state_31336;
if(inst_31294){
var statearr_31395_33350 = state_31336__$1;
(statearr_31395_33350[(1)] = (36));

} else {
var statearr_31396_33351 = state_31336__$1;
(statearr_31396_33351[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (13))){
var inst_31210 = (state_31336[(26)]);
var inst_31213 = cljs.core.async.close_BANG_(inst_31210);
var state_31336__$1 = state_31336;
var statearr_31397_33352 = state_31336__$1;
(statearr_31397_33352[(2)] = inst_31213);

(statearr_31397_33352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (22))){
var inst_31237 = (state_31336[(8)]);
var inst_31240 = cljs.core.async.close_BANG_(inst_31237);
var state_31336__$1 = state_31336;
var statearr_31398_33353 = state_31336__$1;
(statearr_31398_33353[(2)] = inst_31240);

(statearr_31398_33353[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (36))){
var inst_31292 = (state_31336[(25)]);
var inst_31296 = cljs.core.chunk_first(inst_31292);
var inst_31297 = cljs.core.chunk_rest(inst_31292);
var inst_31298 = cljs.core.count(inst_31296);
var inst_31265 = inst_31297;
var inst_31266 = inst_31296;
var inst_31267 = inst_31298;
var inst_31268 = (0);
var state_31336__$1 = (function (){var statearr_31399 = state_31336;
(statearr_31399[(20)] = inst_31265);

(statearr_31399[(21)] = inst_31267);

(statearr_31399[(10)] = inst_31266);

(statearr_31399[(11)] = inst_31268);

return statearr_31399;
})();
var statearr_31400_33354 = state_31336__$1;
(statearr_31400_33354[(2)] = null);

(statearr_31400_33354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (41))){
var inst_31292 = (state_31336[(25)]);
var inst_31308 = (state_31336[(2)]);
var inst_31309 = cljs.core.next(inst_31292);
var inst_31265 = inst_31309;
var inst_31266 = null;
var inst_31267 = (0);
var inst_31268 = (0);
var state_31336__$1 = (function (){var statearr_31401 = state_31336;
(statearr_31401[(27)] = inst_31308);

(statearr_31401[(20)] = inst_31265);

(statearr_31401[(21)] = inst_31267);

(statearr_31401[(10)] = inst_31266);

(statearr_31401[(11)] = inst_31268);

return statearr_31401;
})();
var statearr_31405_33355 = state_31336__$1;
(statearr_31405_33355[(2)] = null);

(statearr_31405_33355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (43))){
var state_31336__$1 = state_31336;
var statearr_31406_33356 = state_31336__$1;
(statearr_31406_33356[(2)] = null);

(statearr_31406_33356[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (29))){
var inst_31317 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31408_33357 = state_31336__$1;
(statearr_31408_33357[(2)] = inst_31317);

(statearr_31408_33357[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (44))){
var inst_31326 = (state_31336[(2)]);
var state_31336__$1 = (function (){var statearr_31409 = state_31336;
(statearr_31409[(28)] = inst_31326);

return statearr_31409;
})();
var statearr_31410_33358 = state_31336__$1;
(statearr_31410_33358[(2)] = null);

(statearr_31410_33358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (6))){
var inst_31257 = (state_31336[(29)]);
var inst_31256 = cljs.core.deref(cs);
var inst_31257__$1 = cljs.core.keys(inst_31256);
var inst_31258 = cljs.core.count(inst_31257__$1);
var inst_31259 = cljs.core.reset_BANG_(dctr,inst_31258);
var inst_31264 = cljs.core.seq(inst_31257__$1);
var inst_31265 = inst_31264;
var inst_31266 = null;
var inst_31267 = (0);
var inst_31268 = (0);
var state_31336__$1 = (function (){var statearr_31412 = state_31336;
(statearr_31412[(20)] = inst_31265);

(statearr_31412[(21)] = inst_31267);

(statearr_31412[(30)] = inst_31259);

(statearr_31412[(10)] = inst_31266);

(statearr_31412[(11)] = inst_31268);

(statearr_31412[(29)] = inst_31257__$1);

return statearr_31412;
})();
var statearr_31418_33359 = state_31336__$1;
(statearr_31418_33359[(2)] = null);

(statearr_31418_33359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (28))){
var inst_31265 = (state_31336[(20)]);
var inst_31292 = (state_31336[(25)]);
var inst_31292__$1 = cljs.core.seq(inst_31265);
var state_31336__$1 = (function (){var statearr_31420 = state_31336;
(statearr_31420[(25)] = inst_31292__$1);

return statearr_31420;
})();
if(inst_31292__$1){
var statearr_31421_33360 = state_31336__$1;
(statearr_31421_33360[(1)] = (33));

} else {
var statearr_31424_33361 = state_31336__$1;
(statearr_31424_33361[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (25))){
var inst_31267 = (state_31336[(21)]);
var inst_31268 = (state_31336[(11)]);
var inst_31270 = (inst_31268 < inst_31267);
var inst_31271 = inst_31270;
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31271)){
var statearr_31425_33362 = state_31336__$1;
(statearr_31425_33362[(1)] = (27));

} else {
var statearr_31426_33363 = state_31336__$1;
(statearr_31426_33363[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (34))){
var state_31336__$1 = state_31336;
var statearr_31427_33364 = state_31336__$1;
(statearr_31427_33364[(2)] = null);

(statearr_31427_33364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (17))){
var state_31336__$1 = state_31336;
var statearr_31428_33365 = state_31336__$1;
(statearr_31428_33365[(2)] = null);

(statearr_31428_33365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (3))){
var inst_31331 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31336__$1,inst_31331);
} else {
if((state_val_31339 === (12))){
var inst_31252 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31432_33366 = state_31336__$1;
(statearr_31432_33366[(2)] = inst_31252);

(statearr_31432_33366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31336__$1,(4),ch);
} else {
if((state_val_31339 === (23))){
var state_31336__$1 = state_31336;
var statearr_31436_33367 = state_31336__$1;
(statearr_31436_33367[(2)] = null);

(statearr_31436_33367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (35))){
var inst_31315 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31439_33368 = state_31336__$1;
(statearr_31439_33368[(2)] = inst_31315);

(statearr_31439_33368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (19))){
var inst_31222 = (state_31336[(7)]);
var inst_31227 = cljs.core.chunk_first(inst_31222);
var inst_31228 = cljs.core.chunk_rest(inst_31222);
var inst_31229 = cljs.core.count(inst_31227);
var inst_31196 = inst_31228;
var inst_31197 = inst_31227;
var inst_31198 = inst_31229;
var inst_31199 = (0);
var state_31336__$1 = (function (){var statearr_31443 = state_31336;
(statearr_31443[(13)] = inst_31198);

(statearr_31443[(14)] = inst_31197);

(statearr_31443[(16)] = inst_31199);

(statearr_31443[(17)] = inst_31196);

return statearr_31443;
})();
var statearr_31446_33369 = state_31336__$1;
(statearr_31446_33369[(2)] = null);

(statearr_31446_33369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (11))){
var inst_31222 = (state_31336[(7)]);
var inst_31196 = (state_31336[(17)]);
var inst_31222__$1 = cljs.core.seq(inst_31196);
var state_31336__$1 = (function (){var statearr_31448 = state_31336;
(statearr_31448[(7)] = inst_31222__$1);

return statearr_31448;
})();
if(inst_31222__$1){
var statearr_31449_33370 = state_31336__$1;
(statearr_31449_33370[(1)] = (16));

} else {
var statearr_31450_33371 = state_31336__$1;
(statearr_31450_33371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (9))){
var inst_31254 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31455_33372 = state_31336__$1;
(statearr_31455_33372[(2)] = inst_31254);

(statearr_31455_33372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (5))){
var inst_31194 = cljs.core.deref(cs);
var inst_31195 = cljs.core.seq(inst_31194);
var inst_31196 = inst_31195;
var inst_31197 = null;
var inst_31198 = (0);
var inst_31199 = (0);
var state_31336__$1 = (function (){var statearr_31463 = state_31336;
(statearr_31463[(13)] = inst_31198);

(statearr_31463[(14)] = inst_31197);

(statearr_31463[(16)] = inst_31199);

(statearr_31463[(17)] = inst_31196);

return statearr_31463;
})();
var statearr_31465_33373 = state_31336__$1;
(statearr_31465_33373[(2)] = null);

(statearr_31465_33373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (14))){
var state_31336__$1 = state_31336;
var statearr_31467_33374 = state_31336__$1;
(statearr_31467_33374[(2)] = null);

(statearr_31467_33374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (45))){
var inst_31323 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31472_33375 = state_31336__$1;
(statearr_31472_33375[(2)] = inst_31323);

(statearr_31472_33375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (26))){
var inst_31257 = (state_31336[(29)]);
var inst_31319 = (state_31336[(2)]);
var inst_31320 = cljs.core.seq(inst_31257);
var state_31336__$1 = (function (){var statearr_31473 = state_31336;
(statearr_31473[(31)] = inst_31319);

return statearr_31473;
})();
if(inst_31320){
var statearr_31474_33376 = state_31336__$1;
(statearr_31474_33376[(1)] = (42));

} else {
var statearr_31475_33377 = state_31336__$1;
(statearr_31475_33377[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (16))){
var inst_31222 = (state_31336[(7)]);
var inst_31225 = cljs.core.chunked_seq_QMARK_(inst_31222);
var state_31336__$1 = state_31336;
if(inst_31225){
var statearr_31476_33378 = state_31336__$1;
(statearr_31476_33378[(1)] = (19));

} else {
var statearr_31477_33379 = state_31336__$1;
(statearr_31477_33379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (38))){
var inst_31312 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31478_33380 = state_31336__$1;
(statearr_31478_33380[(2)] = inst_31312);

(statearr_31478_33380[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (30))){
var state_31336__$1 = state_31336;
var statearr_31479_33381 = state_31336__$1;
(statearr_31479_33381[(2)] = null);

(statearr_31479_33381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (10))){
var inst_31197 = (state_31336[(14)]);
var inst_31199 = (state_31336[(16)]);
var inst_31209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31197,inst_31199);
var inst_31210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31209,(0),null);
var inst_31211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31209,(1),null);
var state_31336__$1 = (function (){var statearr_31488 = state_31336;
(statearr_31488[(26)] = inst_31210);

return statearr_31488;
})();
if(cljs.core.truth_(inst_31211)){
var statearr_31489_33382 = state_31336__$1;
(statearr_31489_33382[(1)] = (13));

} else {
var statearr_31494_33383 = state_31336__$1;
(statearr_31494_33383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (18))){
var inst_31250 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31495_33384 = state_31336__$1;
(statearr_31495_33384[(2)] = inst_31250);

(statearr_31495_33384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (42))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31336__$1,(45),dchan);
} else {
if((state_val_31339 === (37))){
var inst_31187 = (state_31336[(9)]);
var inst_31292 = (state_31336[(25)]);
var inst_31301 = (state_31336[(23)]);
var inst_31301__$1 = cljs.core.first(inst_31292);
var inst_31302 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31301__$1,inst_31187,done);
var state_31336__$1 = (function (){var statearr_31496 = state_31336;
(statearr_31496[(23)] = inst_31301__$1);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31302)){
var statearr_31497_33385 = state_31336__$1;
(statearr_31497_33385[(1)] = (39));

} else {
var statearr_31498_33386 = state_31336__$1;
(statearr_31498_33386[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31198 = (state_31336[(13)]);
var inst_31199 = (state_31336[(16)]);
var inst_31201 = (inst_31199 < inst_31198);
var inst_31202 = inst_31201;
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31202)){
var statearr_31499_33387 = state_31336__$1;
(statearr_31499_33387[(1)] = (10));

} else {
var statearr_31500_33388 = state_31336__$1;
(statearr_31500_33388[(1)] = (11));

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
});})(c__30213__auto___33317,cs,m,dchan,dctr,done))
;
return ((function (switch__30004__auto__,c__30213__auto___33317,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30005__auto__ = null;
var cljs$core$async$mult_$_state_machine__30005__auto____0 = (function (){
var statearr_31502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31502[(0)] = cljs$core$async$mult_$_state_machine__30005__auto__);

(statearr_31502[(1)] = (1));

return statearr_31502;
});
var cljs$core$async$mult_$_state_machine__30005__auto____1 = (function (state_31336){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_31336);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e31503){if((e31503 instanceof Object)){
var ex__30008__auto__ = e31503;
var statearr_31505_33389 = state_31336;
(statearr_31505_33389[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_31336;
state_31336 = G__33390;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30005__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30005__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30005__auto____0;
cljs$core$async$mult_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30005__auto____1;
return cljs$core$async$mult_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33317,cs,m,dchan,dctr,done))
})();
var state__30215__auto__ = (function (){var statearr_31507 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_31507[(6)] = c__30213__auto___33317);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33317,cs,m,dchan,dctr,done))
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
var G__31509 = arguments.length;
switch (G__31509) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33408 = arguments.length;
var i__4731__auto___33409 = (0);
while(true){
if((i__4731__auto___33409 < len__4730__auto___33408)){
args__4736__auto__.push((arguments[i__4731__auto___33409]));

var G__33410 = (i__4731__auto___33409 + (1));
i__4731__auto___33409 = G__33410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31565){
var map__31566 = p__31565;
var map__31566__$1 = (((((!((map__31566 == null))))?(((((map__31566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31566):map__31566);
var opts = map__31566__$1;
var statearr_31568_33415 = state;
(statearr_31568_33415[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__31566,map__31566__$1,opts){
return (function (val){
var statearr_31569_33419 = state;
(statearr_31569_33419[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31566,map__31566__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31573_33423 = state;
(statearr_31573_33423[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31561){
var G__31562 = cljs.core.first(seq31561);
var seq31561__$1 = cljs.core.next(seq31561);
var G__31563 = cljs.core.first(seq31561__$1);
var seq31561__$2 = cljs.core.next(seq31561__$1);
var G__31564 = cljs.core.first(seq31561__$2);
var seq31561__$3 = cljs.core.next(seq31561__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31562,G__31563,G__31564,seq31561__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31597 = meta31597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31598,meta31597__$1){
var self__ = this;
var _31598__$1 = this;
return (new cljs.core.async.t_cljs$core$async31596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31597__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31598){
var self__ = this;
var _31598__$1 = this;
return self__.meta31597;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31597","meta31597",98521996,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31596";

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31596");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31596.
 */
cljs.core.async.__GT_t_cljs$core$async31596 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31597){
return (new cljs.core.async.t_cljs$core$async31596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31597));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30213__auto___33443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31733){
var state_val_31734 = (state_31733[(1)]);
if((state_val_31734 === (7))){
var inst_31639 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31737_33444 = state_31733__$1;
(statearr_31737_33444[(2)] = inst_31639);

(statearr_31737_33444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (20))){
var inst_31651 = (state_31733[(7)]);
var state_31733__$1 = state_31733;
var statearr_31739_33445 = state_31733__$1;
(statearr_31739_33445[(2)] = inst_31651);

(statearr_31739_33445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (27))){
var state_31733__$1 = state_31733;
var statearr_31740_33446 = state_31733__$1;
(statearr_31740_33446[(2)] = null);

(statearr_31740_33446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (1))){
var inst_31620 = (state_31733[(8)]);
var inst_31620__$1 = calc_state();
var inst_31624 = (inst_31620__$1 == null);
var inst_31625 = cljs.core.not(inst_31624);
var state_31733__$1 = (function (){var statearr_31741 = state_31733;
(statearr_31741[(8)] = inst_31620__$1);

return statearr_31741;
})();
if(inst_31625){
var statearr_31742_33449 = state_31733__$1;
(statearr_31742_33449[(1)] = (2));

} else {
var statearr_31743_33450 = state_31733__$1;
(statearr_31743_33450[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (24))){
var inst_31690 = (state_31733[(9)]);
var inst_31704 = (state_31733[(10)]);
var inst_31681 = (state_31733[(11)]);
var inst_31704__$1 = (inst_31681.cljs$core$IFn$_invoke$arity$1 ? inst_31681.cljs$core$IFn$_invoke$arity$1(inst_31690) : inst_31681.call(null,inst_31690));
var state_31733__$1 = (function (){var statearr_31745 = state_31733;
(statearr_31745[(10)] = inst_31704__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31704__$1)){
var statearr_31747_33451 = state_31733__$1;
(statearr_31747_33451[(1)] = (29));

} else {
var statearr_31748_33452 = state_31733__$1;
(statearr_31748_33452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (4))){
var inst_31642 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31642)){
var statearr_31749_33453 = state_31733__$1;
(statearr_31749_33453[(1)] = (8));

} else {
var statearr_31750_33454 = state_31733__$1;
(statearr_31750_33454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (15))){
var inst_31675 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31675)){
var statearr_31751_33455 = state_31733__$1;
(statearr_31751_33455[(1)] = (19));

} else {
var statearr_31752_33456 = state_31733__$1;
(statearr_31752_33456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (21))){
var inst_31680 = (state_31733[(12)]);
var inst_31680__$1 = (state_31733[(2)]);
var inst_31681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31680__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31680__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31680__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31733__$1 = (function (){var statearr_31753 = state_31733;
(statearr_31753[(13)] = inst_31682);

(statearr_31753[(11)] = inst_31681);

(statearr_31753[(12)] = inst_31680__$1);

return statearr_31753;
})();
return cljs.core.async.ioc_alts_BANG_(state_31733__$1,(22),inst_31683);
} else {
if((state_val_31734 === (31))){
var inst_31714 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31714)){
var statearr_31755_33457 = state_31733__$1;
(statearr_31755_33457[(1)] = (32));

} else {
var statearr_31756_33458 = state_31733__$1;
(statearr_31756_33458[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (32))){
var inst_31689 = (state_31733[(14)]);
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31733__$1,(35),out,inst_31689);
} else {
if((state_val_31734 === (33))){
var inst_31680 = (state_31733[(12)]);
var inst_31651 = inst_31680;
var state_31733__$1 = (function (){var statearr_31757 = state_31733;
(statearr_31757[(7)] = inst_31651);

return statearr_31757;
})();
var statearr_31758_33460 = state_31733__$1;
(statearr_31758_33460[(2)] = null);

(statearr_31758_33460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (13))){
var inst_31651 = (state_31733[(7)]);
var inst_31663 = inst_31651.cljs$lang$protocol_mask$partition0$;
var inst_31664 = (inst_31663 & (64));
var inst_31666 = inst_31651.cljs$core$ISeq$;
var inst_31667 = (cljs.core.PROTOCOL_SENTINEL === inst_31666);
var inst_31668 = ((inst_31664) || (inst_31667));
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31668)){
var statearr_31760_33466 = state_31733__$1;
(statearr_31760_33466[(1)] = (16));

} else {
var statearr_31761_33468 = state_31733__$1;
(statearr_31761_33468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (22))){
var inst_31690 = (state_31733[(9)]);
var inst_31689 = (state_31733[(14)]);
var inst_31688 = (state_31733[(2)]);
var inst_31689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31688,(0),null);
var inst_31690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31688,(1),null);
var inst_31691 = (inst_31689__$1 == null);
var inst_31692 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31690__$1,change);
var inst_31693 = ((inst_31691) || (inst_31692));
var state_31733__$1 = (function (){var statearr_31762 = state_31733;
(statearr_31762[(9)] = inst_31690__$1);

(statearr_31762[(14)] = inst_31689__$1);

return statearr_31762;
})();
if(cljs.core.truth_(inst_31693)){
var statearr_31763_33470 = state_31733__$1;
(statearr_31763_33470[(1)] = (23));

} else {
var statearr_31764_33471 = state_31733__$1;
(statearr_31764_33471[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (36))){
var inst_31680 = (state_31733[(12)]);
var inst_31651 = inst_31680;
var state_31733__$1 = (function (){var statearr_31765 = state_31733;
(statearr_31765[(7)] = inst_31651);

return statearr_31765;
})();
var statearr_31766_33473 = state_31733__$1;
(statearr_31766_33473[(2)] = null);

(statearr_31766_33473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (29))){
var inst_31704 = (state_31733[(10)]);
var state_31733__$1 = state_31733;
var statearr_31767_33474 = state_31733__$1;
(statearr_31767_33474[(2)] = inst_31704);

(statearr_31767_33474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (6))){
var state_31733__$1 = state_31733;
var statearr_31768_33475 = state_31733__$1;
(statearr_31768_33475[(2)] = false);

(statearr_31768_33475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (28))){
var inst_31700 = (state_31733[(2)]);
var inst_31701 = calc_state();
var inst_31651 = inst_31701;
var state_31733__$1 = (function (){var statearr_31769 = state_31733;
(statearr_31769[(15)] = inst_31700);

(statearr_31769[(7)] = inst_31651);

return statearr_31769;
})();
var statearr_31770_33476 = state_31733__$1;
(statearr_31770_33476[(2)] = null);

(statearr_31770_33476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (25))){
var inst_31729 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31771_33477 = state_31733__$1;
(statearr_31771_33477[(2)] = inst_31729);

(statearr_31771_33477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (34))){
var inst_31727 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31772_33478 = state_31733__$1;
(statearr_31772_33478[(2)] = inst_31727);

(statearr_31772_33478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (17))){
var state_31733__$1 = state_31733;
var statearr_31774_33479 = state_31733__$1;
(statearr_31774_33479[(2)] = false);

(statearr_31774_33479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (3))){
var state_31733__$1 = state_31733;
var statearr_31775_33480 = state_31733__$1;
(statearr_31775_33480[(2)] = false);

(statearr_31775_33480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (12))){
var inst_31731 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31733__$1,inst_31731);
} else {
if((state_val_31734 === (2))){
var inst_31620 = (state_31733[(8)]);
var inst_31630 = inst_31620.cljs$lang$protocol_mask$partition0$;
var inst_31631 = (inst_31630 & (64));
var inst_31632 = inst_31620.cljs$core$ISeq$;
var inst_31633 = (cljs.core.PROTOCOL_SENTINEL === inst_31632);
var inst_31634 = ((inst_31631) || (inst_31633));
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31634)){
var statearr_31778_33481 = state_31733__$1;
(statearr_31778_33481[(1)] = (5));

} else {
var statearr_31779_33482 = state_31733__$1;
(statearr_31779_33482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (23))){
var inst_31689 = (state_31733[(14)]);
var inst_31695 = (inst_31689 == null);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31695)){
var statearr_31788_33487 = state_31733__$1;
(statearr_31788_33487[(1)] = (26));

} else {
var statearr_31789_33488 = state_31733__$1;
(statearr_31789_33488[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (35))){
var inst_31718 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31718)){
var statearr_31790_33489 = state_31733__$1;
(statearr_31790_33489[(1)] = (36));

} else {
var statearr_31791_33490 = state_31733__$1;
(statearr_31791_33490[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (19))){
var inst_31651 = (state_31733[(7)]);
var inst_31677 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31651);
var state_31733__$1 = state_31733;
var statearr_31792_33493 = state_31733__$1;
(statearr_31792_33493[(2)] = inst_31677);

(statearr_31792_33493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (11))){
var inst_31651 = (state_31733[(7)]);
var inst_31656 = (inst_31651 == null);
var inst_31657 = cljs.core.not(inst_31656);
var state_31733__$1 = state_31733;
if(inst_31657){
var statearr_31793_33496 = state_31733__$1;
(statearr_31793_33496[(1)] = (13));

} else {
var statearr_31795_33497 = state_31733__$1;
(statearr_31795_33497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (9))){
var inst_31620 = (state_31733[(8)]);
var state_31733__$1 = state_31733;
var statearr_31796_33498 = state_31733__$1;
(statearr_31796_33498[(2)] = inst_31620);

(statearr_31796_33498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (5))){
var state_31733__$1 = state_31733;
var statearr_31798_33499 = state_31733__$1;
(statearr_31798_33499[(2)] = true);

(statearr_31798_33499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (14))){
var state_31733__$1 = state_31733;
var statearr_31799_33500 = state_31733__$1;
(statearr_31799_33500[(2)] = false);

(statearr_31799_33500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (26))){
var inst_31690 = (state_31733[(9)]);
var inst_31697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31690);
var state_31733__$1 = state_31733;
var statearr_31800_33504 = state_31733__$1;
(statearr_31800_33504[(2)] = inst_31697);

(statearr_31800_33504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (16))){
var state_31733__$1 = state_31733;
var statearr_31807_33515 = state_31733__$1;
(statearr_31807_33515[(2)] = true);

(statearr_31807_33515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (38))){
var inst_31723 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31808_33516 = state_31733__$1;
(statearr_31808_33516[(2)] = inst_31723);

(statearr_31808_33516[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (30))){
var inst_31690 = (state_31733[(9)]);
var inst_31682 = (state_31733[(13)]);
var inst_31681 = (state_31733[(11)]);
var inst_31708 = cljs.core.empty_QMARK_(inst_31681);
var inst_31710 = (inst_31682.cljs$core$IFn$_invoke$arity$1 ? inst_31682.cljs$core$IFn$_invoke$arity$1(inst_31690) : inst_31682.call(null,inst_31690));
var inst_31711 = cljs.core.not(inst_31710);
var inst_31712 = ((inst_31708) && (inst_31711));
var state_31733__$1 = state_31733;
var statearr_31810_33517 = state_31733__$1;
(statearr_31810_33517[(2)] = inst_31712);

(statearr_31810_33517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (10))){
var inst_31620 = (state_31733[(8)]);
var inst_31647 = (state_31733[(2)]);
var inst_31648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31651 = inst_31620;
var state_31733__$1 = (function (){var statearr_31811 = state_31733;
(statearr_31811[(16)] = inst_31649);

(statearr_31811[(17)] = inst_31650);

(statearr_31811[(18)] = inst_31648);

(statearr_31811[(7)] = inst_31651);

return statearr_31811;
})();
var statearr_31812_33518 = state_31733__$1;
(statearr_31812_33518[(2)] = null);

(statearr_31812_33518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (18))){
var inst_31672 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31813_33519 = state_31733__$1;
(statearr_31813_33519[(2)] = inst_31672);

(statearr_31813_33519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (37))){
var state_31733__$1 = state_31733;
var statearr_31814_33520 = state_31733__$1;
(statearr_31814_33520[(2)] = null);

(statearr_31814_33520[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (8))){
var inst_31620 = (state_31733[(8)]);
var inst_31644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31620);
var state_31733__$1 = state_31733;
var statearr_31815_33521 = state_31733__$1;
(statearr_31815_33521[(2)] = inst_31644);

(statearr_31815_33521[(1)] = (10));


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
});})(c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30004__auto__,c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30005__auto__ = null;
var cljs$core$async$mix_$_state_machine__30005__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = cljs$core$async$mix_$_state_machine__30005__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var cljs$core$async$mix_$_state_machine__30005__auto____1 = (function (state_31733){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_31733);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e31821){if((e31821 instanceof Object)){
var ex__30008__auto__ = e31821;
var statearr_31824_33522 = state_31733;
(statearr_31824_33522[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33523 = state_31733;
state_31733 = G__33523;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30005__auto__ = function(state_31733){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30005__auto____1.call(this,state_31733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30005__auto____0;
cljs$core$async$mix_$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30005__auto____1;
return cljs$core$async$mix_$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30215__auto__ = (function (){var statearr_31827 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_31827[(6)] = c__30213__auto___33443);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33443,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31862 = arguments.length;
switch (G__31862) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__31874 = arguments.length;
switch (G__31874) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__31871_SHARP_){
if(cljs.core.truth_((p1__31871_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31871_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31871_SHARP_.call(null,topic)))){
return p1__31871_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31871_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31879 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31880){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31881,meta31880__$1){
var self__ = this;
var _31881__$1 = this;
return (new cljs.core.async.t_cljs$core$async31879(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31880__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31881){
var self__ = this;
var _31881__$1 = this;
return self__.meta31880;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31880","meta31880",-1831454650,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31879";

cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31879");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31879.
 */
cljs.core.async.__GT_t_cljs$core$async31879 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31880){
return (new cljs.core.async.t_cljs$core$async31879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31880));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31879(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30213__auto___33544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33544,mults,ensure_mult,p){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33544,mults,ensure_mult,p){
return (function (state_32027){
var state_val_32028 = (state_32027[(1)]);
if((state_val_32028 === (7))){
var inst_32023 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32029_33545 = state_32027__$1;
(statearr_32029_33545[(2)] = inst_32023);

(statearr_32029_33545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (20))){
var state_32027__$1 = state_32027;
var statearr_32030_33546 = state_32027__$1;
(statearr_32030_33546[(2)] = null);

(statearr_32030_33546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (1))){
var state_32027__$1 = state_32027;
var statearr_32053_33547 = state_32027__$1;
(statearr_32053_33547[(2)] = null);

(statearr_32053_33547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (24))){
var inst_32006 = (state_32027[(7)]);
var inst_32015 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32006);
var state_32027__$1 = state_32027;
var statearr_32057_33548 = state_32027__$1;
(statearr_32057_33548[(2)] = inst_32015);

(statearr_32057_33548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (4))){
var inst_31890 = (state_32027[(8)]);
var inst_31890__$1 = (state_32027[(2)]);
var inst_31891 = (inst_31890__$1 == null);
var state_32027__$1 = (function (){var statearr_32059 = state_32027;
(statearr_32059[(8)] = inst_31890__$1);

return statearr_32059;
})();
if(cljs.core.truth_(inst_31891)){
var statearr_32061_33549 = state_32027__$1;
(statearr_32061_33549[(1)] = (5));

} else {
var statearr_32062_33550 = state_32027__$1;
(statearr_32062_33550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (15))){
var inst_32000 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32066_33551 = state_32027__$1;
(statearr_32066_33551[(2)] = inst_32000);

(statearr_32066_33551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (21))){
var inst_32020 = (state_32027[(2)]);
var state_32027__$1 = (function (){var statearr_32067 = state_32027;
(statearr_32067[(9)] = inst_32020);

return statearr_32067;
})();
var statearr_32068_33552 = state_32027__$1;
(statearr_32068_33552[(2)] = null);

(statearr_32068_33552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (13))){
var inst_31914 = (state_32027[(10)]);
var inst_31919 = cljs.core.chunked_seq_QMARK_(inst_31914);
var state_32027__$1 = state_32027;
if(inst_31919){
var statearr_32073_33553 = state_32027__$1;
(statearr_32073_33553[(1)] = (16));

} else {
var statearr_32075_33554 = state_32027__$1;
(statearr_32075_33554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (22))){
var inst_32012 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
if(cljs.core.truth_(inst_32012)){
var statearr_32076_33555 = state_32027__$1;
(statearr_32076_33555[(1)] = (23));

} else {
var statearr_32077_33556 = state_32027__$1;
(statearr_32077_33556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (6))){
var inst_32008 = (state_32027[(11)]);
var inst_32006 = (state_32027[(7)]);
var inst_31890 = (state_32027[(8)]);
var inst_32006__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31890) : topic_fn.call(null,inst_31890));
var inst_32007 = cljs.core.deref(mults);
var inst_32008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32007,inst_32006__$1);
var state_32027__$1 = (function (){var statearr_32082 = state_32027;
(statearr_32082[(11)] = inst_32008__$1);

(statearr_32082[(7)] = inst_32006__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_32008__$1)){
var statearr_32085_33557 = state_32027__$1;
(statearr_32085_33557[(1)] = (19));

} else {
var statearr_32086_33558 = state_32027__$1;
(statearr_32086_33558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (25))){
var inst_32017 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32087_33559 = state_32027__$1;
(statearr_32087_33559[(2)] = inst_32017);

(statearr_32087_33559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (17))){
var inst_31914 = (state_32027[(10)]);
var inst_31990 = cljs.core.first(inst_31914);
var inst_31991 = cljs.core.async.muxch_STAR_(inst_31990);
var inst_31992 = cljs.core.async.close_BANG_(inst_31991);
var inst_31994 = cljs.core.next(inst_31914);
var inst_31900 = inst_31994;
var inst_31901 = null;
var inst_31902 = (0);
var inst_31903 = (0);
var state_32027__$1 = (function (){var statearr_32090 = state_32027;
(statearr_32090[(12)] = inst_31900);

(statearr_32090[(13)] = inst_31903);

(statearr_32090[(14)] = inst_31902);

(statearr_32090[(15)] = inst_31992);

(statearr_32090[(16)] = inst_31901);

return statearr_32090;
})();
var statearr_32092_33560 = state_32027__$1;
(statearr_32092_33560[(2)] = null);

(statearr_32092_33560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (3))){
var inst_32025 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32027__$1,inst_32025);
} else {
if((state_val_32028 === (12))){
var inst_32002 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32095_33561 = state_32027__$1;
(statearr_32095_33561[(2)] = inst_32002);

(statearr_32095_33561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (2))){
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32027__$1,(4),ch);
} else {
if((state_val_32028 === (23))){
var state_32027__$1 = state_32027;
var statearr_32096_33562 = state_32027__$1;
(statearr_32096_33562[(2)] = null);

(statearr_32096_33562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (19))){
var inst_32008 = (state_32027[(11)]);
var inst_31890 = (state_32027[(8)]);
var inst_32010 = cljs.core.async.muxch_STAR_(inst_32008);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32027__$1,(22),inst_32010,inst_31890);
} else {
if((state_val_32028 === (11))){
var inst_31900 = (state_32027[(12)]);
var inst_31914 = (state_32027[(10)]);
var inst_31914__$1 = cljs.core.seq(inst_31900);
var state_32027__$1 = (function (){var statearr_32100 = state_32027;
(statearr_32100[(10)] = inst_31914__$1);

return statearr_32100;
})();
if(inst_31914__$1){
var statearr_32101_33563 = state_32027__$1;
(statearr_32101_33563[(1)] = (13));

} else {
var statearr_32102_33564 = state_32027__$1;
(statearr_32102_33564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (9))){
var inst_32004 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32103_33567 = state_32027__$1;
(statearr_32103_33567[(2)] = inst_32004);

(statearr_32103_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (5))){
var inst_31897 = cljs.core.deref(mults);
var inst_31898 = cljs.core.vals(inst_31897);
var inst_31899 = cljs.core.seq(inst_31898);
var inst_31900 = inst_31899;
var inst_31901 = null;
var inst_31902 = (0);
var inst_31903 = (0);
var state_32027__$1 = (function (){var statearr_32104 = state_32027;
(statearr_32104[(12)] = inst_31900);

(statearr_32104[(13)] = inst_31903);

(statearr_32104[(14)] = inst_31902);

(statearr_32104[(16)] = inst_31901);

return statearr_32104;
})();
var statearr_32105_33572 = state_32027__$1;
(statearr_32105_33572[(2)] = null);

(statearr_32105_33572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (14))){
var state_32027__$1 = state_32027;
var statearr_32109_33573 = state_32027__$1;
(statearr_32109_33573[(2)] = null);

(statearr_32109_33573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (16))){
var inst_31914 = (state_32027[(10)]);
var inst_31923 = cljs.core.chunk_first(inst_31914);
var inst_31986 = cljs.core.chunk_rest(inst_31914);
var inst_31987 = cljs.core.count(inst_31923);
var inst_31900 = inst_31986;
var inst_31901 = inst_31923;
var inst_31902 = inst_31987;
var inst_31903 = (0);
var state_32027__$1 = (function (){var statearr_32110 = state_32027;
(statearr_32110[(12)] = inst_31900);

(statearr_32110[(13)] = inst_31903);

(statearr_32110[(14)] = inst_31902);

(statearr_32110[(16)] = inst_31901);

return statearr_32110;
})();
var statearr_32111_33574 = state_32027__$1;
(statearr_32111_33574[(2)] = null);

(statearr_32111_33574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (10))){
var inst_31900 = (state_32027[(12)]);
var inst_31903 = (state_32027[(13)]);
var inst_31902 = (state_32027[(14)]);
var inst_31901 = (state_32027[(16)]);
var inst_31908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31901,inst_31903);
var inst_31909 = cljs.core.async.muxch_STAR_(inst_31908);
var inst_31910 = cljs.core.async.close_BANG_(inst_31909);
var inst_31911 = (inst_31903 + (1));
var tmp32106 = inst_31900;
var tmp32107 = inst_31902;
var tmp32108 = inst_31901;
var inst_31900__$1 = tmp32106;
var inst_31901__$1 = tmp32108;
var inst_31902__$1 = tmp32107;
var inst_31903__$1 = inst_31911;
var state_32027__$1 = (function (){var statearr_32112 = state_32027;
(statearr_32112[(12)] = inst_31900__$1);

(statearr_32112[(13)] = inst_31903__$1);

(statearr_32112[(14)] = inst_31902__$1);

(statearr_32112[(17)] = inst_31910);

(statearr_32112[(16)] = inst_31901__$1);

return statearr_32112;
})();
var statearr_32130_33575 = state_32027__$1;
(statearr_32130_33575[(2)] = null);

(statearr_32130_33575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (18))){
var inst_31997 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32131_33576 = state_32027__$1;
(statearr_32131_33576[(2)] = inst_31997);

(statearr_32131_33576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (8))){
var inst_31903 = (state_32027[(13)]);
var inst_31902 = (state_32027[(14)]);
var inst_31905 = (inst_31903 < inst_31902);
var inst_31906 = inst_31905;
var state_32027__$1 = state_32027;
if(cljs.core.truth_(inst_31906)){
var statearr_32132_33577 = state_32027__$1;
(statearr_32132_33577[(1)] = (10));

} else {
var statearr_32133_33578 = state_32027__$1;
(statearr_32133_33578[(1)] = (11));

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
});})(c__30213__auto___33544,mults,ensure_mult,p))
;
return ((function (switch__30004__auto__,c__30213__auto___33544,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32134[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32134[(1)] = (1));

return statearr_32134;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32027){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32027);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32135){if((e32135 instanceof Object)){
var ex__30008__auto__ = e32135;
var statearr_32136_33579 = state_32027;
(statearr_32136_33579[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33580 = state_32027;
state_32027 = G__33580;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33544,mults,ensure_mult,p))
})();
var state__30215__auto__ = (function (){var statearr_32137 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32137[(6)] = c__30213__auto___33544);

return statearr_32137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33544,mults,ensure_mult,p))
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
var G__32139 = arguments.length;
switch (G__32139) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32141 = arguments.length;
switch (G__32141) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__32143 = arguments.length;
switch (G__32143) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30213__auto___33590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32191){
var state_val_32192 = (state_32191[(1)]);
if((state_val_32192 === (7))){
var state_32191__$1 = state_32191;
var statearr_32197_33591 = state_32191__$1;
(statearr_32197_33591[(2)] = null);

(statearr_32197_33591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (1))){
var state_32191__$1 = state_32191;
var statearr_32198_33592 = state_32191__$1;
(statearr_32198_33592[(2)] = null);

(statearr_32198_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (4))){
var inst_32155 = (state_32191[(7)]);
var inst_32157 = (inst_32155 < cnt);
var state_32191__$1 = state_32191;
if(cljs.core.truth_(inst_32157)){
var statearr_32199_33593 = state_32191__$1;
(statearr_32199_33593[(1)] = (6));

} else {
var statearr_32200_33594 = state_32191__$1;
(statearr_32200_33594[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (15))){
var inst_32187 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
var statearr_32201_33595 = state_32191__$1;
(statearr_32201_33595[(2)] = inst_32187);

(statearr_32201_33595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (13))){
var inst_32180 = cljs.core.async.close_BANG_(out);
var state_32191__$1 = state_32191;
var statearr_32202_33596 = state_32191__$1;
(statearr_32202_33596[(2)] = inst_32180);

(statearr_32202_33596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (6))){
var state_32191__$1 = state_32191;
var statearr_32203_33597 = state_32191__$1;
(statearr_32203_33597[(2)] = null);

(statearr_32203_33597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (3))){
var inst_32189 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32191__$1,inst_32189);
} else {
if((state_val_32192 === (12))){
var inst_32177 = (state_32191[(8)]);
var inst_32177__$1 = (state_32191[(2)]);
var inst_32178 = cljs.core.some(cljs.core.nil_QMARK_,inst_32177__$1);
var state_32191__$1 = (function (){var statearr_32207 = state_32191;
(statearr_32207[(8)] = inst_32177__$1);

return statearr_32207;
})();
if(cljs.core.truth_(inst_32178)){
var statearr_32208_33598 = state_32191__$1;
(statearr_32208_33598[(1)] = (13));

} else {
var statearr_32209_33599 = state_32191__$1;
(statearr_32209_33599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (2))){
var inst_32154 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32155 = (0);
var state_32191__$1 = (function (){var statearr_32210 = state_32191;
(statearr_32210[(7)] = inst_32155);

(statearr_32210[(9)] = inst_32154);

return statearr_32210;
})();
var statearr_32211_33600 = state_32191__$1;
(statearr_32211_33600[(2)] = null);

(statearr_32211_33600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (11))){
var inst_32155 = (state_32191[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32191,(10),Object,null,(9));
var inst_32164 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32155) : chs__$1.call(null,inst_32155));
var inst_32165 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32155) : done.call(null,inst_32155));
var inst_32166 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32164,inst_32165);
var state_32191__$1 = state_32191;
var statearr_32212_33601 = state_32191__$1;
(statearr_32212_33601[(2)] = inst_32166);


cljs.core.async.impl.ioc_helpers.process_exception(state_32191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (9))){
var inst_32155 = (state_32191[(7)]);
var inst_32168 = (state_32191[(2)]);
var inst_32169 = (inst_32155 + (1));
var inst_32155__$1 = inst_32169;
var state_32191__$1 = (function (){var statearr_32214 = state_32191;
(statearr_32214[(7)] = inst_32155__$1);

(statearr_32214[(10)] = inst_32168);

return statearr_32214;
})();
var statearr_32215_33602 = state_32191__$1;
(statearr_32215_33602[(2)] = null);

(statearr_32215_33602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (5))){
var inst_32175 = (state_32191[(2)]);
var state_32191__$1 = (function (){var statearr_32216 = state_32191;
(statearr_32216[(11)] = inst_32175);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32191__$1,(12),dchan);
} else {
if((state_val_32192 === (14))){
var inst_32177 = (state_32191[(8)]);
var inst_32182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32177);
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32191__$1,(16),out,inst_32182);
} else {
if((state_val_32192 === (16))){
var inst_32184 = (state_32191[(2)]);
var state_32191__$1 = (function (){var statearr_32217 = state_32191;
(statearr_32217[(12)] = inst_32184);

return statearr_32217;
})();
var statearr_32218_33603 = state_32191__$1;
(statearr_32218_33603[(2)] = null);

(statearr_32218_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (10))){
var inst_32159 = (state_32191[(2)]);
var inst_32160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32191__$1 = (function (){var statearr_32219 = state_32191;
(statearr_32219[(13)] = inst_32159);

return statearr_32219;
})();
var statearr_32220_33604 = state_32191__$1;
(statearr_32220_33604[(2)] = inst_32160);


cljs.core.async.impl.ioc_helpers.process_exception(state_32191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32192 === (8))){
var inst_32173 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
var statearr_32221_33605 = state_32191__$1;
(statearr_32221_33605[(2)] = inst_32173);

(statearr_32221_33605[(1)] = (5));


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
});})(c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30004__auto__,c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32222[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32222[(1)] = (1));

return statearr_32222;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32191){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32191);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32223){if((e32223 instanceof Object)){
var ex__30008__auto__ = e32223;
var statearr_32224_33606 = state_32191;
(statearr_32224_33606[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_32191;
state_32191 = G__33607;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30215__auto__ = (function (){var statearr_32225 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32225[(6)] = c__30213__auto___33590);

return statearr_32225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33590,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32229 = arguments.length;
switch (G__32229) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33611,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33611,out){
return (function (state_32265){
var state_val_32266 = (state_32265[(1)]);
if((state_val_32266 === (7))){
var inst_32242 = (state_32265[(7)]);
var inst_32241 = (state_32265[(8)]);
var inst_32241__$1 = (state_32265[(2)]);
var inst_32242__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32241__$1,(0),null);
var inst_32243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32241__$1,(1),null);
var inst_32245 = (inst_32242__$1 == null);
var state_32265__$1 = (function (){var statearr_32271 = state_32265;
(statearr_32271[(7)] = inst_32242__$1);

(statearr_32271[(9)] = inst_32243);

(statearr_32271[(8)] = inst_32241__$1);

return statearr_32271;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32274_33612 = state_32265__$1;
(statearr_32274_33612[(1)] = (8));

} else {
var statearr_32275_33613 = state_32265__$1;
(statearr_32275_33613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (1))){
var inst_32231 = cljs.core.vec(chs);
var inst_32232 = inst_32231;
var state_32265__$1 = (function (){var statearr_32279 = state_32265;
(statearr_32279[(10)] = inst_32232);

return statearr_32279;
})();
var statearr_32280_33614 = state_32265__$1;
(statearr_32280_33614[(2)] = null);

(statearr_32280_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (4))){
var inst_32232 = (state_32265[(10)]);
var state_32265__$1 = state_32265;
return cljs.core.async.ioc_alts_BANG_(state_32265__$1,(7),inst_32232);
} else {
if((state_val_32266 === (6))){
var inst_32259 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32282_33615 = state_32265__$1;
(statearr_32282_33615[(2)] = inst_32259);

(statearr_32282_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (3))){
var inst_32261 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32265__$1,inst_32261);
} else {
if((state_val_32266 === (2))){
var inst_32232 = (state_32265[(10)]);
var inst_32234 = cljs.core.count(inst_32232);
var inst_32235 = (inst_32234 > (0));
var state_32265__$1 = state_32265;
if(cljs.core.truth_(inst_32235)){
var statearr_32285_33616 = state_32265__$1;
(statearr_32285_33616[(1)] = (4));

} else {
var statearr_32286_33617 = state_32265__$1;
(statearr_32286_33617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (11))){
var inst_32232 = (state_32265[(10)]);
var inst_32252 = (state_32265[(2)]);
var tmp32283 = inst_32232;
var inst_32232__$1 = tmp32283;
var state_32265__$1 = (function (){var statearr_32288 = state_32265;
(statearr_32288[(10)] = inst_32232__$1);

(statearr_32288[(11)] = inst_32252);

return statearr_32288;
})();
var statearr_32289_33618 = state_32265__$1;
(statearr_32289_33618[(2)] = null);

(statearr_32289_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (9))){
var inst_32242 = (state_32265[(7)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32265__$1,(11),out,inst_32242);
} else {
if((state_val_32266 === (5))){
var inst_32257 = cljs.core.async.close_BANG_(out);
var state_32265__$1 = state_32265;
var statearr_32291_33619 = state_32265__$1;
(statearr_32291_33619[(2)] = inst_32257);

(statearr_32291_33619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (10))){
var inst_32255 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32292_33620 = state_32265__$1;
(statearr_32292_33620[(2)] = inst_32255);

(statearr_32292_33620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (8))){
var inst_32242 = (state_32265[(7)]);
var inst_32232 = (state_32265[(10)]);
var inst_32243 = (state_32265[(9)]);
var inst_32241 = (state_32265[(8)]);
var inst_32247 = (function (){var cs = inst_32232;
var vec__32237 = inst_32241;
var v = inst_32242;
var c = inst_32243;
return ((function (cs,vec__32237,v,c,inst_32242,inst_32232,inst_32243,inst_32241,state_val_32266,c__30213__auto___33611,out){
return (function (p1__32226_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32226_SHARP_);
});
;})(cs,vec__32237,v,c,inst_32242,inst_32232,inst_32243,inst_32241,state_val_32266,c__30213__auto___33611,out))
})();
var inst_32248 = cljs.core.filterv(inst_32247,inst_32232);
var inst_32232__$1 = inst_32248;
var state_32265__$1 = (function (){var statearr_32299 = state_32265;
(statearr_32299[(10)] = inst_32232__$1);

return statearr_32299;
})();
var statearr_32300_33621 = state_32265__$1;
(statearr_32300_33621[(2)] = null);

(statearr_32300_33621[(1)] = (2));


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
});})(c__30213__auto___33611,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33611,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32301[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32301[(1)] = (1));

return statearr_32301;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32265){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32265);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32302){if((e32302 instanceof Object)){
var ex__30008__auto__ = e32302;
var statearr_32303_33622 = state_32265;
(statearr_32303_33622[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33623 = state_32265;
state_32265 = G__33623;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33611,out))
})();
var state__30215__auto__ = (function (){var statearr_32304 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32304[(6)] = c__30213__auto___33611);

return statearr_32304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33611,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32307 = arguments.length;
switch (G__32307) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33625,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33625,out){
return (function (state_32341){
var state_val_32342 = (state_32341[(1)]);
if((state_val_32342 === (7))){
var inst_32316 = (state_32341[(7)]);
var inst_32316__$1 = (state_32341[(2)]);
var inst_32317 = (inst_32316__$1 == null);
var inst_32318 = cljs.core.not(inst_32317);
var state_32341__$1 = (function (){var statearr_32363 = state_32341;
(statearr_32363[(7)] = inst_32316__$1);

return statearr_32363;
})();
if(inst_32318){
var statearr_32368_33627 = state_32341__$1;
(statearr_32368_33627[(1)] = (8));

} else {
var statearr_32369_33628 = state_32341__$1;
(statearr_32369_33628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (1))){
var inst_32311 = (0);
var state_32341__$1 = (function (){var statearr_32374 = state_32341;
(statearr_32374[(8)] = inst_32311);

return statearr_32374;
})();
var statearr_32376_33629 = state_32341__$1;
(statearr_32376_33629[(2)] = null);

(statearr_32376_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (4))){
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32341__$1,(7),ch);
} else {
if((state_val_32342 === (6))){
var inst_32333 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32393_33634 = state_32341__$1;
(statearr_32393_33634[(2)] = inst_32333);

(statearr_32393_33634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (3))){
var inst_32335 = (state_32341[(2)]);
var inst_32339 = cljs.core.async.close_BANG_(out);
var state_32341__$1 = (function (){var statearr_32397 = state_32341;
(statearr_32397[(9)] = inst_32335);

return statearr_32397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32341__$1,inst_32339);
} else {
if((state_val_32342 === (2))){
var inst_32311 = (state_32341[(8)]);
var inst_32313 = (inst_32311 < n);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32313)){
var statearr_32399_33635 = state_32341__$1;
(statearr_32399_33635[(1)] = (4));

} else {
var statearr_32400_33636 = state_32341__$1;
(statearr_32400_33636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (11))){
var inst_32311 = (state_32341[(8)]);
var inst_32325 = (state_32341[(2)]);
var inst_32326 = (inst_32311 + (1));
var inst_32311__$1 = inst_32326;
var state_32341__$1 = (function (){var statearr_32401 = state_32341;
(statearr_32401[(8)] = inst_32311__$1);

(statearr_32401[(10)] = inst_32325);

return statearr_32401;
})();
var statearr_32402_33637 = state_32341__$1;
(statearr_32402_33637[(2)] = null);

(statearr_32402_33637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (9))){
var state_32341__$1 = state_32341;
var statearr_32403_33638 = state_32341__$1;
(statearr_32403_33638[(2)] = null);

(statearr_32403_33638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (5))){
var state_32341__$1 = state_32341;
var statearr_32404_33639 = state_32341__$1;
(statearr_32404_33639[(2)] = null);

(statearr_32404_33639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (10))){
var inst_32330 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32405_33640 = state_32341__$1;
(statearr_32405_33640[(2)] = inst_32330);

(statearr_32405_33640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (8))){
var inst_32316 = (state_32341[(7)]);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32341__$1,(11),out,inst_32316);
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
});})(c__30213__auto___33625,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33625,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32406[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32406[(1)] = (1));

return statearr_32406;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32341){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32341);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32407){if((e32407 instanceof Object)){
var ex__30008__auto__ = e32407;
var statearr_32408_33641 = state_32341;
(statearr_32408_33641[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_32341;
state_32341 = G__33642;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33625,out))
})();
var state__30215__auto__ = (function (){var statearr_32410 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32410[(6)] = c__30213__auto___33625);

return statearr_32410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33625,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32418 = (function (f,ch,meta32419){
this.f = f;
this.ch = ch;
this.meta32419 = meta32419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32420,meta32419__$1){
var self__ = this;
var _32420__$1 = this;
return (new cljs.core.async.t_cljs$core$async32418(self__.f,self__.ch,meta32419__$1));
});

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32420){
var self__ = this;
var _32420__$1 = this;
return self__.meta32419;
});

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32423 = (function (f,ch,meta32419,_,fn1,meta32424){
this.f = f;
this.ch = ch;
this.meta32419 = meta32419;
this._ = _;
this.fn1 = fn1;
this.meta32424 = meta32424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32425,meta32424__$1){
var self__ = this;
var _32425__$1 = this;
return (new cljs.core.async.t_cljs$core$async32423(self__.f,self__.ch,self__.meta32419,self__._,self__.fn1,meta32424__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32425){
var self__ = this;
var _32425__$1 = this;
return self__.meta32424;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32413_SHARP_){
var G__32429 = (((p1__32413_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32413_SHARP_) : self__.f.call(null,p1__32413_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32429) : f1.call(null,G__32429));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32419","meta32419",-1868550293,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32418","cljs.core.async/t_cljs$core$async32418",-486510406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32424","meta32424",-1348244333,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32423";

cljs.core.async.t_cljs$core$async32423.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32423");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32423.
 */
cljs.core.async.__GT_t_cljs$core$async32423 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32423(f__$1,ch__$1,meta32419__$1,___$2,fn1__$1,meta32424){
return (new cljs.core.async.t_cljs$core$async32423(f__$1,ch__$1,meta32419__$1,___$2,fn1__$1,meta32424));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32423(self__.f,self__.ch,self__.meta32419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32433 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32433) : self__.f.call(null,G__32433));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32419","meta32419",-1868550293,null)], null);
});

cljs.core.async.t_cljs$core$async32418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32418";

cljs.core.async.t_cljs$core$async32418.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32418");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32418.
 */
cljs.core.async.__GT_t_cljs$core$async32418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32418(f__$1,ch__$1,meta32419){
return (new cljs.core.async.t_cljs$core$async32418(f__$1,ch__$1,meta32419));
});

}

return (new cljs.core.async.t_cljs$core$async32418(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32439 = (function (f,ch,meta32440){
this.f = f;
this.ch = ch;
this.meta32440 = meta32440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32441,meta32440__$1){
var self__ = this;
var _32441__$1 = this;
return (new cljs.core.async.t_cljs$core$async32439(self__.f,self__.ch,meta32440__$1));
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32441){
var self__ = this;
var _32441__$1 = this;
return self__.meta32440;
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32440","meta32440",-1264590006,null)], null);
});

cljs.core.async.t_cljs$core$async32439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32439";

cljs.core.async.t_cljs$core$async32439.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32439");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32439.
 */
cljs.core.async.__GT_t_cljs$core$async32439 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32439(f__$1,ch__$1,meta32440){
return (new cljs.core.async.t_cljs$core$async32439(f__$1,ch__$1,meta32440));
});

}

return (new cljs.core.async.t_cljs$core$async32439(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32442 = (function (p,ch,meta32443){
this.p = p;
this.ch = ch;
this.meta32443 = meta32443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32444,meta32443__$1){
var self__ = this;
var _32444__$1 = this;
return (new cljs.core.async.t_cljs$core$async32442(self__.p,self__.ch,meta32443__$1));
});

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32444){
var self__ = this;
var _32444__$1 = this;
return self__.meta32443;
});

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32443","meta32443",-510484461,null)], null);
});

cljs.core.async.t_cljs$core$async32442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32442";

cljs.core.async.t_cljs$core$async32442.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32442");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32442.
 */
cljs.core.async.__GT_t_cljs$core$async32442 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32442(p__$1,ch__$1,meta32443){
return (new cljs.core.async.t_cljs$core$async32442(p__$1,ch__$1,meta32443));
});

}

return (new cljs.core.async.t_cljs$core$async32442(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32447 = arguments.length;
switch (G__32447) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33668,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33668,out){
return (function (state_32470){
var state_val_32471 = (state_32470[(1)]);
if((state_val_32471 === (7))){
var inst_32466 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32472_33669 = state_32470__$1;
(statearr_32472_33669[(2)] = inst_32466);

(statearr_32472_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (1))){
var state_32470__$1 = state_32470;
var statearr_32473_33670 = state_32470__$1;
(statearr_32473_33670[(2)] = null);

(statearr_32473_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (4))){
var inst_32452 = (state_32470[(7)]);
var inst_32452__$1 = (state_32470[(2)]);
var inst_32453 = (inst_32452__$1 == null);
var state_32470__$1 = (function (){var statearr_32474 = state_32470;
(statearr_32474[(7)] = inst_32452__$1);

return statearr_32474;
})();
if(cljs.core.truth_(inst_32453)){
var statearr_32475_33671 = state_32470__$1;
(statearr_32475_33671[(1)] = (5));

} else {
var statearr_32476_33672 = state_32470__$1;
(statearr_32476_33672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (6))){
var inst_32452 = (state_32470[(7)]);
var inst_32457 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32452) : p.call(null,inst_32452));
var state_32470__$1 = state_32470;
if(cljs.core.truth_(inst_32457)){
var statearr_32477_33679 = state_32470__$1;
(statearr_32477_33679[(1)] = (8));

} else {
var statearr_32478_33680 = state_32470__$1;
(statearr_32478_33680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (3))){
var inst_32468 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32470__$1,inst_32468);
} else {
if((state_val_32471 === (2))){
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32470__$1,(4),ch);
} else {
if((state_val_32471 === (11))){
var inst_32460 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32479_33683 = state_32470__$1;
(statearr_32479_33683[(2)] = inst_32460);

(statearr_32479_33683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (9))){
var state_32470__$1 = state_32470;
var statearr_32480_33684 = state_32470__$1;
(statearr_32480_33684[(2)] = null);

(statearr_32480_33684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (5))){
var inst_32455 = cljs.core.async.close_BANG_(out);
var state_32470__$1 = state_32470;
var statearr_32481_33685 = state_32470__$1;
(statearr_32481_33685[(2)] = inst_32455);

(statearr_32481_33685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (10))){
var inst_32463 = (state_32470[(2)]);
var state_32470__$1 = (function (){var statearr_32482 = state_32470;
(statearr_32482[(8)] = inst_32463);

return statearr_32482;
})();
var statearr_32483_33686 = state_32470__$1;
(statearr_32483_33686[(2)] = null);

(statearr_32483_33686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (8))){
var inst_32452 = (state_32470[(7)]);
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32470__$1,(11),out,inst_32452);
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
});})(c__30213__auto___33668,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33668,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null,null,null];
(statearr_32484[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32470){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32470);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32485){if((e32485 instanceof Object)){
var ex__30008__auto__ = e32485;
var statearr_32486_33687 = state_32470;
(statearr_32486_33687[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33688 = state_32470;
state_32470 = G__33688;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33668,out))
})();
var state__30215__auto__ = (function (){var statearr_32488 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32488[(6)] = c__30213__auto___33668);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32491 = arguments.length;
switch (G__32491) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30213__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto__){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto__){
return (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32559_33694 = state_32553__$1;
(statearr_32559_33694[(2)] = inst_32549);

(statearr_32559_33694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (20))){
var inst_32519 = (state_32553[(7)]);
var inst_32530 = (state_32553[(2)]);
var inst_32531 = cljs.core.next(inst_32519);
var inst_32505 = inst_32531;
var inst_32506 = null;
var inst_32507 = (0);
var inst_32508 = (0);
var state_32553__$1 = (function (){var statearr_32562 = state_32553;
(statearr_32562[(8)] = inst_32506);

(statearr_32562[(9)] = inst_32530);

(statearr_32562[(10)] = inst_32508);

(statearr_32562[(11)] = inst_32507);

(statearr_32562[(12)] = inst_32505);

return statearr_32562;
})();
var statearr_32565_33699 = state_32553__$1;
(statearr_32565_33699[(2)] = null);

(statearr_32565_33699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var state_32553__$1 = state_32553;
var statearr_32566_33700 = state_32553__$1;
(statearr_32566_33700[(2)] = null);

(statearr_32566_33700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32494 = (state_32553[(13)]);
var inst_32494__$1 = (state_32553[(2)]);
var inst_32495 = (inst_32494__$1 == null);
var state_32553__$1 = (function (){var statearr_32567 = state_32553;
(statearr_32567[(13)] = inst_32494__$1);

return statearr_32567;
})();
if(cljs.core.truth_(inst_32495)){
var statearr_32572_33702 = state_32553__$1;
(statearr_32572_33702[(1)] = (5));

} else {
var statearr_32573_33703 = state_32553__$1;
(statearr_32573_33703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (15))){
var state_32553__$1 = state_32553;
var statearr_32579_33704 = state_32553__$1;
(statearr_32579_33704[(2)] = null);

(statearr_32579_33704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (21))){
var state_32553__$1 = state_32553;
var statearr_32582_33705 = state_32553__$1;
(statearr_32582_33705[(2)] = null);

(statearr_32582_33705[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (13))){
var inst_32506 = (state_32553[(8)]);
var inst_32508 = (state_32553[(10)]);
var inst_32507 = (state_32553[(11)]);
var inst_32505 = (state_32553[(12)]);
var inst_32515 = (state_32553[(2)]);
var inst_32516 = (inst_32508 + (1));
var tmp32576 = inst_32506;
var tmp32577 = inst_32507;
var tmp32578 = inst_32505;
var inst_32505__$1 = tmp32578;
var inst_32506__$1 = tmp32576;
var inst_32507__$1 = tmp32577;
var inst_32508__$1 = inst_32516;
var state_32553__$1 = (function (){var statearr_32584 = state_32553;
(statearr_32584[(14)] = inst_32515);

(statearr_32584[(8)] = inst_32506__$1);

(statearr_32584[(10)] = inst_32508__$1);

(statearr_32584[(11)] = inst_32507__$1);

(statearr_32584[(12)] = inst_32505__$1);

return statearr_32584;
})();
var statearr_32585_33711 = state_32553__$1;
(statearr_32585_33711[(2)] = null);

(statearr_32585_33711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (22))){
var state_32553__$1 = state_32553;
var statearr_32586_33712 = state_32553__$1;
(statearr_32586_33712[(2)] = null);

(statearr_32586_33712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (6))){
var inst_32494 = (state_32553[(13)]);
var inst_32503 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32494) : f.call(null,inst_32494));
var inst_32504 = cljs.core.seq(inst_32503);
var inst_32505 = inst_32504;
var inst_32506 = null;
var inst_32507 = (0);
var inst_32508 = (0);
var state_32553__$1 = (function (){var statearr_32589 = state_32553;
(statearr_32589[(8)] = inst_32506);

(statearr_32589[(10)] = inst_32508);

(statearr_32589[(11)] = inst_32507);

(statearr_32589[(12)] = inst_32505);

return statearr_32589;
})();
var statearr_32590_33713 = state_32553__$1;
(statearr_32590_33713[(2)] = null);

(statearr_32590_33713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (17))){
var inst_32519 = (state_32553[(7)]);
var inst_32523 = cljs.core.chunk_first(inst_32519);
var inst_32524 = cljs.core.chunk_rest(inst_32519);
var inst_32525 = cljs.core.count(inst_32523);
var inst_32505 = inst_32524;
var inst_32506 = inst_32523;
var inst_32507 = inst_32525;
var inst_32508 = (0);
var state_32553__$1 = (function (){var statearr_32591 = state_32553;
(statearr_32591[(8)] = inst_32506);

(statearr_32591[(10)] = inst_32508);

(statearr_32591[(11)] = inst_32507);

(statearr_32591[(12)] = inst_32505);

return statearr_32591;
})();
var statearr_32592_33714 = state_32553__$1;
(statearr_32592_33714[(2)] = null);

(statearr_32592_33714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (12))){
var inst_32539 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32598_33715 = state_32553__$1;
(statearr_32598_33715[(2)] = inst_32539);

(statearr_32598_33715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (2))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32553__$1,(4),in$);
} else {
if((state_val_32554 === (23))){
var inst_32547 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32601_33716 = state_32553__$1;
(statearr_32601_33716[(2)] = inst_32547);

(statearr_32601_33716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (19))){
var inst_32534 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32606_33717 = state_32553__$1;
(statearr_32606_33717[(2)] = inst_32534);

(statearr_32606_33717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (11))){
var inst_32519 = (state_32553[(7)]);
var inst_32505 = (state_32553[(12)]);
var inst_32519__$1 = cljs.core.seq(inst_32505);
var state_32553__$1 = (function (){var statearr_32607 = state_32553;
(statearr_32607[(7)] = inst_32519__$1);

return statearr_32607;
})();
if(inst_32519__$1){
var statearr_32610_33718 = state_32553__$1;
(statearr_32610_33718[(1)] = (14));

} else {
var statearr_32611_33719 = state_32553__$1;
(statearr_32611_33719[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32541 = (state_32553[(2)]);
var inst_32542 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32553__$1 = (function (){var statearr_32612 = state_32553;
(statearr_32612[(15)] = inst_32541);

return statearr_32612;
})();
if(cljs.core.truth_(inst_32542)){
var statearr_32613_33721 = state_32553__$1;
(statearr_32613_33721[(1)] = (21));

} else {
var statearr_32615_33722 = state_32553__$1;
(statearr_32615_33722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (5))){
var inst_32497 = cljs.core.async.close_BANG_(out);
var state_32553__$1 = state_32553;
var statearr_32617_33723 = state_32553__$1;
(statearr_32617_33723[(2)] = inst_32497);

(statearr_32617_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (14))){
var inst_32519 = (state_32553[(7)]);
var inst_32521 = cljs.core.chunked_seq_QMARK_(inst_32519);
var state_32553__$1 = state_32553;
if(inst_32521){
var statearr_32619_33724 = state_32553__$1;
(statearr_32619_33724[(1)] = (17));

} else {
var statearr_32620_33725 = state_32553__$1;
(statearr_32620_33725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (16))){
var inst_32537 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32621_33726 = state_32553__$1;
(statearr_32621_33726[(2)] = inst_32537);

(statearr_32621_33726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var inst_32506 = (state_32553[(8)]);
var inst_32508 = (state_32553[(10)]);
var inst_32513 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32506,inst_32508);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(13),out,inst_32513);
} else {
if((state_val_32554 === (18))){
var inst_32519 = (state_32553[(7)]);
var inst_32528 = cljs.core.first(inst_32519);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(20),out,inst_32528);
} else {
if((state_val_32554 === (8))){
var inst_32508 = (state_32553[(10)]);
var inst_32507 = (state_32553[(11)]);
var inst_32510 = (inst_32508 < inst_32507);
var inst_32511 = inst_32510;
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32511)){
var statearr_32626_33727 = state_32553__$1;
(statearr_32626_33727[(1)] = (10));

} else {
var statearr_32627_33728 = state_32553__$1;
(statearr_32627_33728[(1)] = (11));

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
});})(c__30213__auto__))
;
return ((function (switch__30004__auto__,c__30213__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____1 = (function (state_32553){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32553);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32632){if((e32632 instanceof Object)){
var ex__30008__auto__ = e32632;
var statearr_32633_33736 = state_32553;
(statearr_32633_33736[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_32553;
state_32553 = G__33737;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30005__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto__))
})();
var state__30215__auto__ = (function (){var statearr_32634 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32634[(6)] = c__30213__auto__);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto__))
);

return c__30213__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32638 = arguments.length;
switch (G__32638) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33741,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33741,out){
return (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (7))){
var inst_32659 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32666_33742 = state_32664__$1;
(statearr_32666_33742[(2)] = inst_32659);

(statearr_32666_33742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (1))){
var inst_32641 = null;
var state_32664__$1 = (function (){var statearr_32667 = state_32664;
(statearr_32667[(7)] = inst_32641);

return statearr_32667;
})();
var statearr_32668_33744 = state_32664__$1;
(statearr_32668_33744[(2)] = null);

(statearr_32668_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (4))){
var inst_32644 = (state_32664[(8)]);
var inst_32644__$1 = (state_32664[(2)]);
var inst_32645 = (inst_32644__$1 == null);
var inst_32646 = cljs.core.not(inst_32645);
var state_32664__$1 = (function (){var statearr_32669 = state_32664;
(statearr_32669[(8)] = inst_32644__$1);

return statearr_32669;
})();
if(inst_32646){
var statearr_32670_33745 = state_32664__$1;
(statearr_32670_33745[(1)] = (5));

} else {
var statearr_32671_33746 = state_32664__$1;
(statearr_32671_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (6))){
var state_32664__$1 = state_32664;
var statearr_32672_33747 = state_32664__$1;
(statearr_32672_33747[(2)] = null);

(statearr_32672_33747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (3))){
var inst_32661 = (state_32664[(2)]);
var inst_32662 = cljs.core.async.close_BANG_(out);
var state_32664__$1 = (function (){var statearr_32673 = state_32664;
(statearr_32673[(9)] = inst_32661);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32664__$1,inst_32662);
} else {
if((state_val_32665 === (2))){
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32664__$1,(4),ch);
} else {
if((state_val_32665 === (11))){
var inst_32644 = (state_32664[(8)]);
var inst_32653 = (state_32664[(2)]);
var inst_32641 = inst_32644;
var state_32664__$1 = (function (){var statearr_32674 = state_32664;
(statearr_32674[(7)] = inst_32641);

(statearr_32674[(10)] = inst_32653);

return statearr_32674;
})();
var statearr_32675_33750 = state_32664__$1;
(statearr_32675_33750[(2)] = null);

(statearr_32675_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (9))){
var inst_32644 = (state_32664[(8)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32664__$1,(11),out,inst_32644);
} else {
if((state_val_32665 === (5))){
var inst_32641 = (state_32664[(7)]);
var inst_32644 = (state_32664[(8)]);
var inst_32648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32644,inst_32641);
var state_32664__$1 = state_32664;
if(inst_32648){
var statearr_32677_33751 = state_32664__$1;
(statearr_32677_33751[(1)] = (8));

} else {
var statearr_32678_33752 = state_32664__$1;
(statearr_32678_33752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (10))){
var inst_32656 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32679_33754 = state_32664__$1;
(statearr_32679_33754[(2)] = inst_32656);

(statearr_32679_33754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (8))){
var inst_32641 = (state_32664[(7)]);
var tmp32676 = inst_32641;
var inst_32641__$1 = tmp32676;
var state_32664__$1 = (function (){var statearr_32680 = state_32664;
(statearr_32680[(7)] = inst_32641__$1);

return statearr_32680;
})();
var statearr_32681_33755 = state_32664__$1;
(statearr_32681_33755[(2)] = null);

(statearr_32681_33755[(1)] = (2));


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
});})(c__30213__auto___33741,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33741,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32682[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32682[(1)] = (1));

return statearr_32682;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32664){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32664);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32683){if((e32683 instanceof Object)){
var ex__30008__auto__ = e32683;
var statearr_32684_33761 = state_32664;
(statearr_32684_33761[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_32664;
state_32664 = G__33762;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33741,out))
})();
var state__30215__auto__ = (function (){var statearr_32685 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32685[(6)] = c__30213__auto___33741);

return statearr_32685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33766,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33766,out){
return (function (state_32738){
var state_val_32739 = (state_32738[(1)]);
if((state_val_32739 === (7))){
var inst_32734 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32740_33770 = state_32738__$1;
(statearr_32740_33770[(2)] = inst_32734);

(statearr_32740_33770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (1))){
var inst_32697 = (new Array(n));
var inst_32698 = inst_32697;
var inst_32699 = (0);
var state_32738__$1 = (function (){var statearr_32745 = state_32738;
(statearr_32745[(7)] = inst_32699);

(statearr_32745[(8)] = inst_32698);

return statearr_32745;
})();
var statearr_32746_33771 = state_32738__$1;
(statearr_32746_33771[(2)] = null);

(statearr_32746_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (4))){
var inst_32702 = (state_32738[(9)]);
var inst_32702__$1 = (state_32738[(2)]);
var inst_32704 = (inst_32702__$1 == null);
var inst_32705 = cljs.core.not(inst_32704);
var state_32738__$1 = (function (){var statearr_32755 = state_32738;
(statearr_32755[(9)] = inst_32702__$1);

return statearr_32755;
})();
if(inst_32705){
var statearr_32757_33772 = state_32738__$1;
(statearr_32757_33772[(1)] = (5));

} else {
var statearr_32758_33773 = state_32738__$1;
(statearr_32758_33773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (15))){
var inst_32727 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32760_33774 = state_32738__$1;
(statearr_32760_33774[(2)] = inst_32727);

(statearr_32760_33774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (13))){
var state_32738__$1 = state_32738;
var statearr_32763_33775 = state_32738__$1;
(statearr_32763_33775[(2)] = null);

(statearr_32763_33775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (6))){
var inst_32699 = (state_32738[(7)]);
var inst_32722 = (inst_32699 > (0));
var state_32738__$1 = state_32738;
if(cljs.core.truth_(inst_32722)){
var statearr_32765_33776 = state_32738__$1;
(statearr_32765_33776[(1)] = (12));

} else {
var statearr_32766_33777 = state_32738__$1;
(statearr_32766_33777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (3))){
var inst_32736 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32738__$1,inst_32736);
} else {
if((state_val_32739 === (12))){
var inst_32698 = (state_32738[(8)]);
var inst_32725 = cljs.core.vec(inst_32698);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32738__$1,(15),out,inst_32725);
} else {
if((state_val_32739 === (2))){
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32738__$1,(4),ch);
} else {
if((state_val_32739 === (11))){
var inst_32716 = (state_32738[(2)]);
var inst_32717 = (new Array(n));
var inst_32698 = inst_32717;
var inst_32699 = (0);
var state_32738__$1 = (function (){var statearr_32773 = state_32738;
(statearr_32773[(10)] = inst_32716);

(statearr_32773[(7)] = inst_32699);

(statearr_32773[(8)] = inst_32698);

return statearr_32773;
})();
var statearr_32775_33779 = state_32738__$1;
(statearr_32775_33779[(2)] = null);

(statearr_32775_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (9))){
var inst_32698 = (state_32738[(8)]);
var inst_32714 = cljs.core.vec(inst_32698);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32738__$1,(11),out,inst_32714);
} else {
if((state_val_32739 === (5))){
var inst_32708 = (state_32738[(11)]);
var inst_32702 = (state_32738[(9)]);
var inst_32699 = (state_32738[(7)]);
var inst_32698 = (state_32738[(8)]);
var inst_32707 = (inst_32698[inst_32699] = inst_32702);
var inst_32708__$1 = (inst_32699 + (1));
var inst_32709 = (inst_32708__$1 < n);
var state_32738__$1 = (function (){var statearr_32784 = state_32738;
(statearr_32784[(11)] = inst_32708__$1);

(statearr_32784[(12)] = inst_32707);

return statearr_32784;
})();
if(cljs.core.truth_(inst_32709)){
var statearr_32785_33780 = state_32738__$1;
(statearr_32785_33780[(1)] = (8));

} else {
var statearr_32786_33781 = state_32738__$1;
(statearr_32786_33781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (14))){
var inst_32730 = (state_32738[(2)]);
var inst_32732 = cljs.core.async.close_BANG_(out);
var state_32738__$1 = (function (){var statearr_32788 = state_32738;
(statearr_32788[(13)] = inst_32730);

return statearr_32788;
})();
var statearr_32793_33787 = state_32738__$1;
(statearr_32793_33787[(2)] = inst_32732);

(statearr_32793_33787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (10))){
var inst_32720 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32796_33790 = state_32738__$1;
(statearr_32796_33790[(2)] = inst_32720);

(statearr_32796_33790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (8))){
var inst_32708 = (state_32738[(11)]);
var inst_32698 = (state_32738[(8)]);
var tmp32787 = inst_32698;
var inst_32698__$1 = tmp32787;
var inst_32699 = inst_32708;
var state_32738__$1 = (function (){var statearr_32799 = state_32738;
(statearr_32799[(7)] = inst_32699);

(statearr_32799[(8)] = inst_32698__$1);

return statearr_32799;
})();
var statearr_32800_33791 = state_32738__$1;
(statearr_32800_33791[(2)] = null);

(statearr_32800_33791[(1)] = (2));


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
});})(c__30213__auto___33766,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33766,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32802[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32802[(1)] = (1));

return statearr_32802;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32738){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32738);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__30008__auto__ = e32804;
var statearr_32807_33792 = state_32738;
(statearr_32807_33792[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33793 = state_32738;
state_32738 = G__33793;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33766,out))
})();
var state__30215__auto__ = (function (){var statearr_32811 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32811[(6)] = c__30213__auto___33766);

return statearr_32811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33766,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32820 = arguments.length;
switch (G__32820) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30213__auto___33796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30213__auto___33796,out){
return (function (){
var f__30214__auto__ = (function (){var switch__30004__auto__ = ((function (c__30213__auto___33796,out){
return (function (state_32870){
var state_val_32872 = (state_32870[(1)]);
if((state_val_32872 === (7))){
var inst_32866 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32877_33797 = state_32870__$1;
(statearr_32877_33797[(2)] = inst_32866);

(statearr_32877_33797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (1))){
var inst_32825 = [];
var inst_32826 = inst_32825;
var inst_32827 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32870__$1 = (function (){var statearr_32879 = state_32870;
(statearr_32879[(7)] = inst_32826);

(statearr_32879[(8)] = inst_32827);

return statearr_32879;
})();
var statearr_32880_33798 = state_32870__$1;
(statearr_32880_33798[(2)] = null);

(statearr_32880_33798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (4))){
var inst_32830 = (state_32870[(9)]);
var inst_32830__$1 = (state_32870[(2)]);
var inst_32831 = (inst_32830__$1 == null);
var inst_32832 = cljs.core.not(inst_32831);
var state_32870__$1 = (function (){var statearr_32881 = state_32870;
(statearr_32881[(9)] = inst_32830__$1);

return statearr_32881;
})();
if(inst_32832){
var statearr_32882_33799 = state_32870__$1;
(statearr_32882_33799[(1)] = (5));

} else {
var statearr_32883_33800 = state_32870__$1;
(statearr_32883_33800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (15))){
var inst_32860 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32884_33801 = state_32870__$1;
(statearr_32884_33801[(2)] = inst_32860);

(statearr_32884_33801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (13))){
var state_32870__$1 = state_32870;
var statearr_32885_33802 = state_32870__$1;
(statearr_32885_33802[(2)] = null);

(statearr_32885_33802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var inst_32826 = (state_32870[(7)]);
var inst_32855 = inst_32826.length;
var inst_32856 = (inst_32855 > (0));
var state_32870__$1 = state_32870;
if(cljs.core.truth_(inst_32856)){
var statearr_32886_33803 = state_32870__$1;
(statearr_32886_33803[(1)] = (12));

} else {
var statearr_32887_33804 = state_32870__$1;
(statearr_32887_33804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (3))){
var inst_32868 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32870__$1,inst_32868);
} else {
if((state_val_32872 === (12))){
var inst_32826 = (state_32870[(7)]);
var inst_32858 = cljs.core.vec(inst_32826);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32870__$1,(15),out,inst_32858);
} else {
if((state_val_32872 === (2))){
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32870__$1,(4),ch);
} else {
if((state_val_32872 === (11))){
var inst_32835 = (state_32870[(10)]);
var inst_32830 = (state_32870[(9)]);
var inst_32846 = (state_32870[(2)]);
var inst_32848 = [];
var inst_32849 = inst_32848.push(inst_32830);
var inst_32826 = inst_32848;
var inst_32827 = inst_32835;
var state_32870__$1 = (function (){var statearr_32891 = state_32870;
(statearr_32891[(11)] = inst_32849);

(statearr_32891[(12)] = inst_32846);

(statearr_32891[(7)] = inst_32826);

(statearr_32891[(8)] = inst_32827);

return statearr_32891;
})();
var statearr_32892_33806 = state_32870__$1;
(statearr_32892_33806[(2)] = null);

(statearr_32892_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (9))){
var inst_32826 = (state_32870[(7)]);
var inst_32844 = cljs.core.vec(inst_32826);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32870__$1,(11),out,inst_32844);
} else {
if((state_val_32872 === (5))){
var inst_32835 = (state_32870[(10)]);
var inst_32827 = (state_32870[(8)]);
var inst_32830 = (state_32870[(9)]);
var inst_32835__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32830) : f.call(null,inst_32830));
var inst_32837 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32835__$1,inst_32827);
var inst_32838 = cljs.core.keyword_identical_QMARK_(inst_32827,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32839 = ((inst_32837) || (inst_32838));
var state_32870__$1 = (function (){var statearr_32901 = state_32870;
(statearr_32901[(10)] = inst_32835__$1);

return statearr_32901;
})();
if(cljs.core.truth_(inst_32839)){
var statearr_32906_33807 = state_32870__$1;
(statearr_32906_33807[(1)] = (8));

} else {
var statearr_32908_33808 = state_32870__$1;
(statearr_32908_33808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (14))){
var inst_32863 = (state_32870[(2)]);
var inst_32864 = cljs.core.async.close_BANG_(out);
var state_32870__$1 = (function (){var statearr_32910 = state_32870;
(statearr_32910[(13)] = inst_32863);

return statearr_32910;
})();
var statearr_32911_33809 = state_32870__$1;
(statearr_32911_33809[(2)] = inst_32864);

(statearr_32911_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (10))){
var inst_32852 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32912_33814 = state_32870__$1;
(statearr_32912_33814[(2)] = inst_32852);

(statearr_32912_33814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (8))){
var inst_32826 = (state_32870[(7)]);
var inst_32835 = (state_32870[(10)]);
var inst_32830 = (state_32870[(9)]);
var inst_32841 = inst_32826.push(inst_32830);
var tmp32909 = inst_32826;
var inst_32826__$1 = tmp32909;
var inst_32827 = inst_32835;
var state_32870__$1 = (function (){var statearr_32915 = state_32870;
(statearr_32915[(7)] = inst_32826__$1);

(statearr_32915[(8)] = inst_32827);

(statearr_32915[(14)] = inst_32841);

return statearr_32915;
})();
var statearr_32917_33819 = state_32870__$1;
(statearr_32917_33819[(2)] = null);

(statearr_32917_33819[(1)] = (2));


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
});})(c__30213__auto___33796,out))
;
return ((function (switch__30004__auto__,c__30213__auto___33796,out){
return (function() {
var cljs$core$async$state_machine__30005__auto__ = null;
var cljs$core$async$state_machine__30005__auto____0 = (function (){
var statearr_32918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32918[(0)] = cljs$core$async$state_machine__30005__auto__);

(statearr_32918[(1)] = (1));

return statearr_32918;
});
var cljs$core$async$state_machine__30005__auto____1 = (function (state_32870){
while(true){
var ret_value__30006__auto__ = (function (){try{while(true){
var result__30007__auto__ = switch__30004__auto__(state_32870);
if(cljs.core.keyword_identical_QMARK_(result__30007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30007__auto__;
}
break;
}
}catch (e32919){if((e32919 instanceof Object)){
var ex__30008__auto__ = e32919;
var statearr_32920_33822 = state_32870;
(statearr_32920_33822[(5)] = ex__30008__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33823 = state_32870;
state_32870 = G__33823;
continue;
} else {
return ret_value__30006__auto__;
}
break;
}
});
cljs$core$async$state_machine__30005__auto__ = function(state_32870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30005__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30005__auto____1.call(this,state_32870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30005__auto____0;
cljs$core$async$state_machine__30005__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30005__auto____1;
return cljs$core$async$state_machine__30005__auto__;
})()
;})(switch__30004__auto__,c__30213__auto___33796,out))
})();
var state__30215__auto__ = (function (){var statearr_32931 = (f__30214__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30214__auto__.cljs$core$IFn$_invoke$arity$0() : f__30214__auto__.call(null));
(statearr_32931[(6)] = c__30213__auto___33796);

return statearr_32931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30215__auto__);
});})(c__30213__auto___33796,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
