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
var G__30877 = arguments.length;
switch (G__30877) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30882 = (function (f,blockable,meta30883){
this.f = f;
this.blockable = blockable;
this.meta30883 = meta30883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30884,meta30883__$1){
var self__ = this;
var _30884__$1 = this;
return (new cljs.core.async.t_cljs$core$async30882(self__.f,self__.blockable,meta30883__$1));
});

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30884){
var self__ = this;
var _30884__$1 = this;
return self__.meta30883;
});

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30883","meta30883",-208343412,null)], null);
});

cljs.core.async.t_cljs$core$async30882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30882";

cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30882");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30882.
 */
cljs.core.async.__GT_t_cljs$core$async30882 = (function cljs$core$async$__GT_t_cljs$core$async30882(f__$1,blockable__$1,meta30883){
return (new cljs.core.async.t_cljs$core$async30882(f__$1,blockable__$1,meta30883));
});

}

return (new cljs.core.async.t_cljs$core$async30882(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30907 = arguments.length;
switch (G__30907) {
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
var G__30936 = arguments.length;
switch (G__30936) {
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
var G__30941 = arguments.length;
switch (G__30941) {
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
var val_32930 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32930) : fn1.call(null,val_32930));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32930,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32930) : fn1.call(null,val_32930));
});})(val_32930,ret))
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
var G__30946 = arguments.length;
switch (G__30946) {
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
var n__4607__auto___32955 = n;
var x_32956 = (0);
while(true){
if((x_32956 < n__4607__auto___32955)){
(a[x_32956] = x_32956);

var G__32960 = (x_32956 + (1));
x_32956 = G__32960;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30949 = (function (flag,meta30950){
this.flag = flag;
this.meta30950 = meta30950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30951,meta30950__$1){
var self__ = this;
var _30951__$1 = this;
return (new cljs.core.async.t_cljs$core$async30949(self__.flag,meta30950__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30951){
var self__ = this;
var _30951__$1 = this;
return self__.meta30950;
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30950","meta30950",2077422788,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30949";

cljs.core.async.t_cljs$core$async30949.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30949");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30949.
 */
cljs.core.async.__GT_t_cljs$core$async30949 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30949(flag__$1,meta30950){
return (new cljs.core.async.t_cljs$core$async30949(flag__$1,meta30950));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30949(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30962 = (function (flag,cb,meta30963){
this.flag = flag;
this.cb = cb;
this.meta30963 = meta30963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30964,meta30963__$1){
var self__ = this;
var _30964__$1 = this;
return (new cljs.core.async.t_cljs$core$async30962(self__.flag,self__.cb,meta30963__$1));
});

cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30964){
var self__ = this;
var _30964__$1 = this;
return self__.meta30963;
});

cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30963","meta30963",-2121388688,null)], null);
});

cljs.core.async.t_cljs$core$async30962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30962";

cljs.core.async.t_cljs$core$async30962.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30962");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30962.
 */
cljs.core.async.__GT_t_cljs$core$async30962 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30962(flag__$1,cb__$1,meta30963){
return (new cljs.core.async.t_cljs$core$async30962(flag__$1,cb__$1,meta30963));
});

}

return (new cljs.core.async.t_cljs$core$async30962(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30975_SHARP_){
var G__30980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30975_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30980) : fret.call(null,G__30980));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30976_SHARP_){
var G__30982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30976_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30982) : fret.call(null,G__30982));
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
var G__33001 = (i + (1));
i = G__33001;
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
var len__4730__auto___33010 = arguments.length;
var i__4731__auto___33011 = (0);
while(true){
if((i__4731__auto___33011 < len__4730__auto___33010)){
args__4736__auto__.push((arguments[i__4731__auto___33011]));

var G__33012 = (i__4731__auto___33011 + (1));
i__4731__auto___33011 = G__33012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30992){
var map__30993 = p__30992;
var map__30993__$1 = (((((!((map__30993 == null))))?(((((map__30993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30993):map__30993);
var opts = map__30993__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30983){
var G__30984 = cljs.core.first(seq30983);
var seq30983__$1 = cljs.core.next(seq30983);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30984,seq30983__$1);
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
var G__31020 = arguments.length;
switch (G__31020) {
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
var c__30812__auto___33039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33039){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33039){
return (function (state_31044){
var state_val_31045 = (state_31044[(1)]);
if((state_val_31045 === (7))){
var inst_31040 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31046_33043 = state_31044__$1;
(statearr_31046_33043[(2)] = inst_31040);

(statearr_31046_33043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (1))){
var state_31044__$1 = state_31044;
var statearr_31047_33044 = state_31044__$1;
(statearr_31047_33044[(2)] = null);

(statearr_31047_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (4))){
var inst_31023 = (state_31044[(7)]);
var inst_31023__$1 = (state_31044[(2)]);
var inst_31024 = (inst_31023__$1 == null);
var state_31044__$1 = (function (){var statearr_31057 = state_31044;
(statearr_31057[(7)] = inst_31023__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_31024)){
var statearr_31058_33045 = state_31044__$1;
(statearr_31058_33045[(1)] = (5));

} else {
var statearr_31059_33046 = state_31044__$1;
(statearr_31059_33046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (13))){
var state_31044__$1 = state_31044;
var statearr_31060_33050 = state_31044__$1;
(statearr_31060_33050[(2)] = null);

(statearr_31060_33050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (6))){
var inst_31023 = (state_31044[(7)]);
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31044__$1,(11),to,inst_31023);
} else {
if((state_val_31045 === (3))){
var inst_31042 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31044__$1,inst_31042);
} else {
if((state_val_31045 === (12))){
var state_31044__$1 = state_31044;
var statearr_31061_33063 = state_31044__$1;
(statearr_31061_33063[(2)] = null);

(statearr_31061_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (2))){
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31044__$1,(4),from);
} else {
if((state_val_31045 === (11))){
var inst_31033 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
if(cljs.core.truth_(inst_31033)){
var statearr_31062_33067 = state_31044__$1;
(statearr_31062_33067[(1)] = (12));

} else {
var statearr_31063_33068 = state_31044__$1;
(statearr_31063_33068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (9))){
var state_31044__$1 = state_31044;
var statearr_31064_33072 = state_31044__$1;
(statearr_31064_33072[(2)] = null);

(statearr_31064_33072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (5))){
var state_31044__$1 = state_31044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31065_33075 = state_31044__$1;
(statearr_31065_33075[(1)] = (8));

} else {
var statearr_31066_33079 = state_31044__$1;
(statearr_31066_33079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (14))){
var inst_31038 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31067_33080 = state_31044__$1;
(statearr_31067_33080[(2)] = inst_31038);

(statearr_31067_33080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (10))){
var inst_31030 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31068_33084 = state_31044__$1;
(statearr_31068_33084[(2)] = inst_31030);

(statearr_31068_33084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (8))){
var inst_31027 = cljs.core.async.close_BANG_(to);
var state_31044__$1 = state_31044;
var statearr_31069_33085 = state_31044__$1;
(statearr_31069_33085[(2)] = inst_31027);

(statearr_31069_33085[(1)] = (10));


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
});})(c__30812__auto___33039))
;
return ((function (switch__30584__auto__,c__30812__auto___33039){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_31070 = [null,null,null,null,null,null,null,null];
(statearr_31070[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_31070[(1)] = (1));

return statearr_31070;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_31044){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31044);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31071){if((e31071 instanceof Object)){
var ex__30588__auto__ = e31071;
var statearr_31072_33087 = state_31044;
(statearr_31072_33087[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33088 = state_31044;
state_31044 = G__33088;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_31044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_31044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33039))
})();
var state__30814__auto__ = (function (){var statearr_31073 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31073[(6)] = c__30812__auto___33039);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33039))
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
return (function (p__31074){
var vec__31075 = p__31074;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31075,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31075,(1),null);
var job = vec__31075;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30812__auto___33089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results){
return (function (state_31082){
var state_val_31083 = (state_31082[(1)]);
if((state_val_31083 === (1))){
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31082__$1,(2),res,v);
} else {
if((state_val_31083 === (2))){
var inst_31079 = (state_31082[(2)]);
var inst_31080 = cljs.core.async.close_BANG_(res);
var state_31082__$1 = (function (){var statearr_31084 = state_31082;
(statearr_31084[(7)] = inst_31079);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31082__$1,inst_31080);
} else {
return null;
}
}
});})(c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results))
;
return ((function (switch__30584__auto__,c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_31085 = [null,null,null,null,null,null,null,null];
(statearr_31085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__);

(statearr_31085[(1)] = (1));

return statearr_31085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1 = (function (state_31082){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31082);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31086){if((e31086 instanceof Object)){
var ex__30588__auto__ = e31086;
var statearr_31087_33090 = state_31082;
(statearr_31087_33090[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33091 = state_31082;
state_31082 = G__33091;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = function(state_31082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1.call(this,state_31082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results))
})();
var state__30814__auto__ = (function (){var statearr_31088 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31088[(6)] = c__30812__auto___33089);

return statearr_31088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33089,res,vec__31075,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31089){
var vec__31117 = p__31089;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(1),null);
var job = vec__31117;
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
var n__4607__auto___33098 = n;
var __33099 = (0);
while(true){
if((__33099 < n__4607__auto___33098)){
var G__31120_33100 = type;
var G__31120_33101__$1 = (((G__31120_33100 instanceof cljs.core.Keyword))?G__31120_33100.fqn:null);
switch (G__31120_33101__$1) {
case "compute":
var c__30812__auto___33103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33099,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (__33099,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31135_33105 = state_31133__$1;
(statearr_31135_33105[(2)] = null);

(statearr_31135_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31133__$1,(4),jobs);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (4))){
var inst_31123 = (state_31133[(2)]);
var inst_31124 = process(inst_31123);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31124)){
var statearr_31136_33106 = state_31133__$1;
(statearr_31136_33106[(1)] = (5));

} else {
var statearr_31137_33109 = state_31133__$1;
(statearr_31137_33109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var state_31133__$1 = state_31133;
var statearr_31138_33110 = state_31133__$1;
(statearr_31138_33110[(2)] = null);

(statearr_31138_33110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var state_31133__$1 = state_31133;
var statearr_31139_33113 = state_31133__$1;
(statearr_31139_33113[(2)] = null);

(statearr_31139_33113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31140_33114 = state_31133__$1;
(statearr_31140_33114[(2)] = inst_31129);

(statearr_31140_33114[(1)] = (3));


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
});})(__33099,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
;
return ((function (__33099,switch__30584__auto__,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_31141 = [null,null,null,null,null,null,null];
(statearr_31141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__);

(statearr_31141[(1)] = (1));

return statearr_31141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1 = (function (state_31133){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31133);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31142){if((e31142 instanceof Object)){
var ex__30588__auto__ = e31142;
var statearr_31143_33117 = state_31133;
(statearr_31143_33117[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33120 = state_31133;
state_31133 = G__33120;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__;
})()
;})(__33099,switch__30584__auto__,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
})();
var state__30814__auto__ = (function (){var statearr_31144 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31144[(6)] = c__30812__auto___33103);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(__33099,c__30812__auto___33103,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
);


break;
case "async":
var c__30812__auto___33122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33099,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (__33099,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function (state_31157){
var state_val_31158 = (state_31157[(1)]);
if((state_val_31158 === (1))){
var state_31157__$1 = state_31157;
var statearr_31159_33124 = state_31157__$1;
(statearr_31159_33124[(2)] = null);

(statearr_31159_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (2))){
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31157__$1,(4),jobs);
} else {
if((state_val_31158 === (3))){
var inst_31155 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31157__$1,inst_31155);
} else {
if((state_val_31158 === (4))){
var inst_31147 = (state_31157[(2)]);
var inst_31148 = async(inst_31147);
var state_31157__$1 = state_31157;
if(cljs.core.truth_(inst_31148)){
var statearr_31160_33127 = state_31157__$1;
(statearr_31160_33127[(1)] = (5));

} else {
var statearr_31161_33128 = state_31157__$1;
(statearr_31161_33128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (5))){
var state_31157__$1 = state_31157;
var statearr_31162_33129 = state_31157__$1;
(statearr_31162_33129[(2)] = null);

(statearr_31162_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (6))){
var state_31157__$1 = state_31157;
var statearr_31163_33130 = state_31157__$1;
(statearr_31163_33130[(2)] = null);

(statearr_31163_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (7))){
var inst_31153 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
var statearr_31164_33131 = state_31157__$1;
(statearr_31164_33131[(2)] = inst_31153);

(statearr_31164_33131[(1)] = (3));


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
});})(__33099,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
;
return ((function (__33099,switch__30584__auto__,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_31165 = [null,null,null,null,null,null,null];
(statearr_31165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__);

(statearr_31165[(1)] = (1));

return statearr_31165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1 = (function (state_31157){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31157);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31166){if((e31166 instanceof Object)){
var ex__30588__auto__ = e31166;
var statearr_31167_33133 = state_31157;
(statearr_31167_33133[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_31157;
state_31157 = G__33134;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = function(state_31157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1.call(this,state_31157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__;
})()
;})(__33099,switch__30584__auto__,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
})();
var state__30814__auto__ = (function (){var statearr_31168 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31168[(6)] = c__30812__auto___33122);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(__33099,c__30812__auto___33122,G__31120_33100,G__31120_33101__$1,n__4607__auto___33098,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31120_33101__$1)].join('')));

}

var G__33135 = (__33099 + (1));
__33099 = G__33135;
continue;
} else {
}
break;
}

var c__30812__auto___33136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33136,jobs,results,process,async){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33136,jobs,results,process,async){
return (function (state_31191){
var state_val_31192 = (state_31191[(1)]);
if((state_val_31192 === (7))){
var inst_31187 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
var statearr_31193_33137 = state_31191__$1;
(statearr_31193_33137[(2)] = inst_31187);

(statearr_31193_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (1))){
var state_31191__$1 = state_31191;
var statearr_31194_33138 = state_31191__$1;
(statearr_31194_33138[(2)] = null);

(statearr_31194_33138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (4))){
var inst_31171 = (state_31191[(7)]);
var inst_31171__$1 = (state_31191[(2)]);
var inst_31172 = (inst_31171__$1 == null);
var state_31191__$1 = (function (){var statearr_31195 = state_31191;
(statearr_31195[(7)] = inst_31171__$1);

return statearr_31195;
})();
if(cljs.core.truth_(inst_31172)){
var statearr_31196_33139 = state_31191__$1;
(statearr_31196_33139[(1)] = (5));

} else {
var statearr_31197_33140 = state_31191__$1;
(statearr_31197_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (6))){
var inst_31171 = (state_31191[(7)]);
var inst_31177 = (state_31191[(8)]);
var inst_31177__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31179 = [inst_31171,inst_31177__$1];
var inst_31180 = (new cljs.core.PersistentVector(null,2,(5),inst_31178,inst_31179,null));
var state_31191__$1 = (function (){var statearr_31198 = state_31191;
(statearr_31198[(8)] = inst_31177__$1);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31191__$1,(8),jobs,inst_31180);
} else {
if((state_val_31192 === (3))){
var inst_31189 = (state_31191[(2)]);
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31191__$1,inst_31189);
} else {
if((state_val_31192 === (2))){
var state_31191__$1 = state_31191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31191__$1,(4),from);
} else {
if((state_val_31192 === (9))){
var inst_31184 = (state_31191[(2)]);
var state_31191__$1 = (function (){var statearr_31199 = state_31191;
(statearr_31199[(9)] = inst_31184);

return statearr_31199;
})();
var statearr_31200_33148 = state_31191__$1;
(statearr_31200_33148[(2)] = null);

(statearr_31200_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (5))){
var inst_31174 = cljs.core.async.close_BANG_(jobs);
var state_31191__$1 = state_31191;
var statearr_31201_33172 = state_31191__$1;
(statearr_31201_33172[(2)] = inst_31174);

(statearr_31201_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31192 === (8))){
var inst_31177 = (state_31191[(8)]);
var inst_31182 = (state_31191[(2)]);
var state_31191__$1 = (function (){var statearr_31202 = state_31191;
(statearr_31202[(10)] = inst_31182);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31191__$1,(9),results,inst_31177);
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
});})(c__30812__auto___33136,jobs,results,process,async))
;
return ((function (switch__30584__auto__,c__30812__auto___33136,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1 = (function (state_31191){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31191);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31204){if((e31204 instanceof Object)){
var ex__30588__auto__ = e31204;
var statearr_31205_33173 = state_31191;
(statearr_31205_33173[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33174 = state_31191;
state_31191 = G__33174;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = function(state_31191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1.call(this,state_31191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33136,jobs,results,process,async))
})();
var state__30814__auto__ = (function (){var statearr_31206 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31206[(6)] = c__30812__auto___33136);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33136,jobs,results,process,async))
);


var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,jobs,results,process,async){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,jobs,results,process,async){
return (function (state_31244){
var state_val_31245 = (state_31244[(1)]);
if((state_val_31245 === (7))){
var inst_31240 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31246_33175 = state_31244__$1;
(statearr_31246_33175[(2)] = inst_31240);

(statearr_31246_33175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (20))){
var state_31244__$1 = state_31244;
var statearr_31247_33176 = state_31244__$1;
(statearr_31247_33176[(2)] = null);

(statearr_31247_33176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (1))){
var state_31244__$1 = state_31244;
var statearr_31248_33177 = state_31244__$1;
(statearr_31248_33177[(2)] = null);

(statearr_31248_33177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (4))){
var inst_31209 = (state_31244[(7)]);
var inst_31209__$1 = (state_31244[(2)]);
var inst_31210 = (inst_31209__$1 == null);
var state_31244__$1 = (function (){var statearr_31249 = state_31244;
(statearr_31249[(7)] = inst_31209__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31210)){
var statearr_31250_33178 = state_31244__$1;
(statearr_31250_33178[(1)] = (5));

} else {
var statearr_31251_33179 = state_31244__$1;
(statearr_31251_33179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (15))){
var inst_31222 = (state_31244[(8)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31244__$1,(18),to,inst_31222);
} else {
if((state_val_31245 === (21))){
var inst_31235 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31252_33180 = state_31244__$1;
(statearr_31252_33180[(2)] = inst_31235);

(statearr_31252_33180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (13))){
var inst_31237 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31253 = state_31244;
(statearr_31253[(9)] = inst_31237);

return statearr_31253;
})();
var statearr_31254_33181 = state_31244__$1;
(statearr_31254_33181[(2)] = null);

(statearr_31254_33181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (6))){
var inst_31209 = (state_31244[(7)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31244__$1,(11),inst_31209);
} else {
if((state_val_31245 === (17))){
var inst_31230 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31230)){
var statearr_31255_33182 = state_31244__$1;
(statearr_31255_33182[(1)] = (19));

} else {
var statearr_31256_33183 = state_31244__$1;
(statearr_31256_33183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (3))){
var inst_31242 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31244__$1,inst_31242);
} else {
if((state_val_31245 === (12))){
var inst_31219 = (state_31244[(10)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31244__$1,(14),inst_31219);
} else {
if((state_val_31245 === (2))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31244__$1,(4),results);
} else {
if((state_val_31245 === (19))){
var state_31244__$1 = state_31244;
var statearr_31258_33184 = state_31244__$1;
(statearr_31258_33184[(2)] = null);

(statearr_31258_33184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (11))){
var inst_31219 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31259 = state_31244;
(statearr_31259[(10)] = inst_31219);

return statearr_31259;
})();
var statearr_31260_33185 = state_31244__$1;
(statearr_31260_33185[(2)] = null);

(statearr_31260_33185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (9))){
var state_31244__$1 = state_31244;
var statearr_31261_33186 = state_31244__$1;
(statearr_31261_33186[(2)] = null);

(statearr_31261_33186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (5))){
var state_31244__$1 = state_31244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31262_33187 = state_31244__$1;
(statearr_31262_33187[(1)] = (8));

} else {
var statearr_31263_33188 = state_31244__$1;
(statearr_31263_33188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (14))){
var inst_31224 = (state_31244[(11)]);
var inst_31222 = (state_31244[(8)]);
var inst_31222__$1 = (state_31244[(2)]);
var inst_31223 = (inst_31222__$1 == null);
var inst_31224__$1 = cljs.core.not(inst_31223);
var state_31244__$1 = (function (){var statearr_31264 = state_31244;
(statearr_31264[(11)] = inst_31224__$1);

(statearr_31264[(8)] = inst_31222__$1);

return statearr_31264;
})();
if(inst_31224__$1){
var statearr_31265_33189 = state_31244__$1;
(statearr_31265_33189[(1)] = (15));

} else {
var statearr_31266_33190 = state_31244__$1;
(statearr_31266_33190[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (16))){
var inst_31224 = (state_31244[(11)]);
var state_31244__$1 = state_31244;
var statearr_31267_33191 = state_31244__$1;
(statearr_31267_33191[(2)] = inst_31224);

(statearr_31267_33191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (10))){
var inst_31216 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31268_33192 = state_31244__$1;
(statearr_31268_33192[(2)] = inst_31216);

(statearr_31268_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (18))){
var inst_31227 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31269_33193 = state_31244__$1;
(statearr_31269_33193[(2)] = inst_31227);

(statearr_31269_33193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (8))){
var inst_31213 = cljs.core.async.close_BANG_(to);
var state_31244__$1 = state_31244;
var statearr_31270_33194 = state_31244__$1;
(statearr_31270_33194[(2)] = inst_31213);

(statearr_31270_33194[(1)] = (10));


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
});})(c__30812__auto__,jobs,results,process,async))
;
return ((function (switch__30584__auto__,c__30812__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_31271 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__);

(statearr_31271[(1)] = (1));

return statearr_31271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1 = (function (state_31244){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31244);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31272){if((e31272 instanceof Object)){
var ex__30588__auto__ = e31272;
var statearr_31273_33208 = state_31244;
(statearr_31273_33208[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_31244;
state_31244 = G__33234;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__ = function(state_31244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1.call(this,state_31244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,jobs,results,process,async))
})();
var state__30814__auto__ = (function (){var statearr_31274 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31274[(6)] = c__30812__auto__);

return statearr_31274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,jobs,results,process,async))
);

return c__30812__auto__;
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
var G__31276 = arguments.length;
switch (G__31276) {
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
var G__31279 = arguments.length;
switch (G__31279) {
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
var G__31281 = arguments.length;
switch (G__31281) {
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
var c__30812__auto___33257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33257,tc,fc){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33257,tc,fc){
return (function (state_31307){
var state_val_31308 = (state_31307[(1)]);
if((state_val_31308 === (7))){
var inst_31303 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31309_33258 = state_31307__$1;
(statearr_31309_33258[(2)] = inst_31303);

(statearr_31309_33258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (1))){
var state_31307__$1 = state_31307;
var statearr_31310_33259 = state_31307__$1;
(statearr_31310_33259[(2)] = null);

(statearr_31310_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (4))){
var inst_31284 = (state_31307[(7)]);
var inst_31284__$1 = (state_31307[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var state_31307__$1 = (function (){var statearr_31311 = state_31307;
(statearr_31311[(7)] = inst_31284__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31312_33260 = state_31307__$1;
(statearr_31312_33260[(1)] = (5));

} else {
var statearr_31313_33261 = state_31307__$1;
(statearr_31313_33261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (13))){
var state_31307__$1 = state_31307;
var statearr_31314_33262 = state_31307__$1;
(statearr_31314_33262[(2)] = null);

(statearr_31314_33262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (6))){
var inst_31284 = (state_31307[(7)]);
var inst_31290 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31284) : p.call(null,inst_31284));
var state_31307__$1 = state_31307;
if(cljs.core.truth_(inst_31290)){
var statearr_31315_33263 = state_31307__$1;
(statearr_31315_33263[(1)] = (9));

} else {
var statearr_31316_33264 = state_31307__$1;
(statearr_31316_33264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (3))){
var inst_31305 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31307__$1,inst_31305);
} else {
if((state_val_31308 === (12))){
var state_31307__$1 = state_31307;
var statearr_31317_33268 = state_31307__$1;
(statearr_31317_33268[(2)] = null);

(statearr_31317_33268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (2))){
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31307__$1,(4),ch);
} else {
if((state_val_31308 === (11))){
var inst_31284 = (state_31307[(7)]);
var inst_31294 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31307__$1,(8),inst_31294,inst_31284);
} else {
if((state_val_31308 === (9))){
var state_31307__$1 = state_31307;
var statearr_31318_33272 = state_31307__$1;
(statearr_31318_33272[(2)] = tc);

(statearr_31318_33272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (5))){
var inst_31287 = cljs.core.async.close_BANG_(tc);
var inst_31288 = cljs.core.async.close_BANG_(fc);
var state_31307__$1 = (function (){var statearr_31319 = state_31307;
(statearr_31319[(8)] = inst_31287);

return statearr_31319;
})();
var statearr_31320_33274 = state_31307__$1;
(statearr_31320_33274[(2)] = inst_31288);

(statearr_31320_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (14))){
var inst_31301 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31321_33275 = state_31307__$1;
(statearr_31321_33275[(2)] = inst_31301);

(statearr_31321_33275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (10))){
var state_31307__$1 = state_31307;
var statearr_31322_33277 = state_31307__$1;
(statearr_31322_33277[(2)] = fc);

(statearr_31322_33277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (8))){
var inst_31296 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
if(cljs.core.truth_(inst_31296)){
var statearr_31323_33279 = state_31307__$1;
(statearr_31323_33279[(1)] = (12));

} else {
var statearr_31324_33280 = state_31307__$1;
(statearr_31324_33280[(1)] = (13));

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
});})(c__30812__auto___33257,tc,fc))
;
return ((function (switch__30584__auto__,c__30812__auto___33257,tc,fc){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_31325 = [null,null,null,null,null,null,null,null,null];
(statearr_31325[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_31325[(1)] = (1));

return statearr_31325;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_31307){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31307);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31326){if((e31326 instanceof Object)){
var ex__30588__auto__ = e31326;
var statearr_31327_33281 = state_31307;
(statearr_31327_33281[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33282 = state_31307;
state_31307 = G__33282;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_31307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_31307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33257,tc,fc))
})();
var state__30814__auto__ = (function (){var statearr_31328 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31328[(6)] = c__30812__auto___33257);

return statearr_31328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33257,tc,fc))
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31345 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31364_33285 = state_31349__$1;
(statearr_31364_33285[(2)] = inst_31345);

(statearr_31364_33285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (1))){
var inst_31329 = init;
var state_31349__$1 = (function (){var statearr_31369 = state_31349;
(statearr_31369[(7)] = inst_31329);

return statearr_31369;
})();
var statearr_31370_33287 = state_31349__$1;
(statearr_31370_33287[(2)] = null);

(statearr_31370_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31332 = (state_31349[(8)]);
var inst_31332__$1 = (state_31349[(2)]);
var inst_31333 = (inst_31332__$1 == null);
var state_31349__$1 = (function (){var statearr_31375 = state_31349;
(statearr_31375[(8)] = inst_31332__$1);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31376_33291 = state_31349__$1;
(statearr_31376_33291[(1)] = (5));

} else {
var statearr_31377_33292 = state_31349__$1;
(statearr_31377_33292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31332 = (state_31349[(8)]);
var inst_31329 = (state_31349[(7)]);
var inst_31336 = (state_31349[(9)]);
var inst_31336__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31329,inst_31332) : f.call(null,inst_31329,inst_31332));
var inst_31337 = cljs.core.reduced_QMARK_(inst_31336__$1);
var state_31349__$1 = (function (){var statearr_31378 = state_31349;
(statearr_31378[(9)] = inst_31336__$1);

return statearr_31378;
})();
if(inst_31337){
var statearr_31379_33294 = state_31349__$1;
(statearr_31379_33294[(1)] = (8));

} else {
var statearr_31380_33299 = state_31349__$1;
(statearr_31380_33299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (2))){
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31349__$1,(4),ch);
} else {
if((state_val_31350 === (9))){
var inst_31336 = (state_31349[(9)]);
var inst_31329 = inst_31336;
var state_31349__$1 = (function (){var statearr_31381 = state_31349;
(statearr_31381[(7)] = inst_31329);

return statearr_31381;
})();
var statearr_31382_33345 = state_31349__$1;
(statearr_31382_33345[(2)] = null);

(statearr_31382_33345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31329 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
var statearr_31383_33348 = state_31349__$1;
(statearr_31383_33348[(2)] = inst_31329);

(statearr_31383_33348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31343 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31384_33351 = state_31349__$1;
(statearr_31384_33351[(2)] = inst_31343);

(statearr_31384_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (8))){
var inst_31336 = (state_31349[(9)]);
var inst_31339 = cljs.core.deref(inst_31336);
var state_31349__$1 = state_31349;
var statearr_31385_33352 = state_31349__$1;
(statearr_31385_33352[(2)] = inst_31339);

(statearr_31385_33352[(1)] = (10));


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
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30585__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30585__auto____0 = (function (){
var statearr_31386 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31386[(0)] = cljs$core$async$reduce_$_state_machine__30585__auto__);

(statearr_31386[(1)] = (1));

return statearr_31386;
});
var cljs$core$async$reduce_$_state_machine__30585__auto____1 = (function (state_31349){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31349);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31387){if((e31387 instanceof Object)){
var ex__30588__auto__ = e31387;
var statearr_31388_33366 = state_31349;
(statearr_31388_33366[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33367 = state_31349;
state_31349 = G__33367;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30585__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30585__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30585__auto____0;
cljs$core$async$reduce_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30585__auto____1;
return cljs$core$async$reduce_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_31389 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31389[(6)] = c__30812__auto__);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__,f__$1){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__,f__$1){
return (function (state_31398){
var state_val_31399 = (state_31398[(1)]);
if((state_val_31399 === (1))){
var inst_31393 = cljs.core.async.reduce(f__$1,init,ch);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(2),inst_31393);
} else {
if((state_val_31399 === (2))){
var inst_31395 = (state_31398[(2)]);
var inst_31396 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31395) : f__$1.call(null,inst_31395));
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31398__$1,inst_31396);
} else {
return null;
}
}
});})(c__30812__auto__,f__$1))
;
return ((function (switch__30584__auto__,c__30812__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30585__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30585__auto____0 = (function (){
var statearr_31404 = [null,null,null,null,null,null,null];
(statearr_31404[(0)] = cljs$core$async$transduce_$_state_machine__30585__auto__);

(statearr_31404[(1)] = (1));

return statearr_31404;
});
var cljs$core$async$transduce_$_state_machine__30585__auto____1 = (function (state_31398){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31398);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31405){if((e31405 instanceof Object)){
var ex__30588__auto__ = e31405;
var statearr_31406_33368 = state_31398;
(statearr_31406_33368[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33375 = state_31398;
state_31398 = G__33375;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30585__auto__ = function(state_31398){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30585__auto____1.call(this,state_31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30585__auto____0;
cljs$core$async$transduce_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30585__auto____1;
return cljs$core$async$transduce_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__,f__$1))
})();
var state__30814__auto__ = (function (){var statearr_31407 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31407[(6)] = c__30812__auto__);

return statearr_31407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__,f__$1))
);

return c__30812__auto__;
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
var G__31409 = arguments.length;
switch (G__31409) {
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (7))){
var inst_31418 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31438_33383 = state_31436__$1;
(statearr_31438_33383[(2)] = inst_31418);

(statearr_31438_33383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (1))){
var inst_31412 = cljs.core.seq(coll);
var inst_31413 = inst_31412;
var state_31436__$1 = (function (){var statearr_31439 = state_31436;
(statearr_31439[(7)] = inst_31413);

return statearr_31439;
})();
var statearr_31440_33384 = state_31436__$1;
(statearr_31440_33384[(2)] = null);

(statearr_31440_33384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (4))){
var inst_31413 = (state_31436[(7)]);
var inst_31416 = cljs.core.first(inst_31413);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31436__$1,(7),ch,inst_31416);
} else {
if((state_val_31437 === (13))){
var inst_31430 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31441_33391 = state_31436__$1;
(statearr_31441_33391[(2)] = inst_31430);

(statearr_31441_33391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (6))){
var inst_31421 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31421)){
var statearr_31442_33392 = state_31436__$1;
(statearr_31442_33392[(1)] = (8));

} else {
var statearr_31443_33393 = state_31436__$1;
(statearr_31443_33393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (3))){
var inst_31434 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31436__$1,inst_31434);
} else {
if((state_val_31437 === (12))){
var state_31436__$1 = state_31436;
var statearr_31444_33394 = state_31436__$1;
(statearr_31444_33394[(2)] = null);

(statearr_31444_33394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (2))){
var inst_31413 = (state_31436[(7)]);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31413)){
var statearr_31445_33395 = state_31436__$1;
(statearr_31445_33395[(1)] = (4));

} else {
var statearr_31446_33396 = state_31436__$1;
(statearr_31446_33396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (11))){
var inst_31427 = cljs.core.async.close_BANG_(ch);
var state_31436__$1 = state_31436;
var statearr_31447_33397 = state_31436__$1;
(statearr_31447_33397[(2)] = inst_31427);

(statearr_31447_33397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (9))){
var state_31436__$1 = state_31436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31448_33398 = state_31436__$1;
(statearr_31448_33398[(1)] = (11));

} else {
var statearr_31449_33399 = state_31436__$1;
(statearr_31449_33399[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (5))){
var inst_31413 = (state_31436[(7)]);
var state_31436__$1 = state_31436;
var statearr_31450_33401 = state_31436__$1;
(statearr_31450_33401[(2)] = inst_31413);

(statearr_31450_33401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (10))){
var inst_31432 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31451_33402 = state_31436__$1;
(statearr_31451_33402[(2)] = inst_31432);

(statearr_31451_33402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (8))){
var inst_31413 = (state_31436[(7)]);
var inst_31423 = cljs.core.next(inst_31413);
var inst_31413__$1 = inst_31423;
var state_31436__$1 = (function (){var statearr_31452 = state_31436;
(statearr_31452[(7)] = inst_31413__$1);

return statearr_31452;
})();
var statearr_31453_33403 = state_31436__$1;
(statearr_31453_33403[(2)] = null);

(statearr_31453_33403[(1)] = (2));


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
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_31454 = [null,null,null,null,null,null,null,null];
(statearr_31454[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_31454[(1)] = (1));

return statearr_31454;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_31436){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31436);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31455){if((e31455 instanceof Object)){
var ex__30588__auto__ = e31455;
var statearr_31456_33404 = state_31436;
(statearr_31456_33404[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33405 = state_31436;
state_31436 = G__33405;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_31458 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31458[(6)] = c__30812__auto__);

return statearr_31458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31485 = (function (ch,cs,meta31486){
this.ch = ch;
this.cs = cs;
this.meta31486 = meta31486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31487,meta31486__$1){
var self__ = this;
var _31487__$1 = this;
return (new cljs.core.async.t_cljs$core$async31485(self__.ch,self__.cs,meta31486__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31487){
var self__ = this;
var _31487__$1 = this;
return self__.meta31486;
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31486","meta31486",-410306285,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31485";

cljs.core.async.t_cljs$core$async31485.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31485");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31485.
 */
cljs.core.async.__GT_t_cljs$core$async31485 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31485(ch__$1,cs__$1,meta31486){
return (new cljs.core.async.t_cljs$core$async31485(ch__$1,cs__$1,meta31486));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30812__auto___33438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33438,cs,m,dchan,dctr,done){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33438,cs,m,dchan,dctr,done){
return (function (state_31627){
var state_val_31628 = (state_31627[(1)]);
if((state_val_31628 === (7))){
var inst_31623 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31632_33439 = state_31627__$1;
(statearr_31632_33439[(2)] = inst_31623);

(statearr_31632_33439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (20))){
var inst_31526 = (state_31627[(7)]);
var inst_31538 = cljs.core.first(inst_31526);
var inst_31539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31538,(0),null);
var inst_31540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31538,(1),null);
var state_31627__$1 = (function (){var statearr_31633 = state_31627;
(statearr_31633[(8)] = inst_31539);

return statearr_31633;
})();
if(cljs.core.truth_(inst_31540)){
var statearr_31634_33443 = state_31627__$1;
(statearr_31634_33443[(1)] = (22));

} else {
var statearr_31635_33444 = state_31627__$1;
(statearr_31635_33444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (27))){
var inst_31570 = (state_31627[(9)]);
var inst_31575 = (state_31627[(10)]);
var inst_31568 = (state_31627[(11)]);
var inst_31495 = (state_31627[(12)]);
var inst_31575__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31568,inst_31570);
var inst_31576 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31575__$1,inst_31495,done);
var state_31627__$1 = (function (){var statearr_31636 = state_31627;
(statearr_31636[(10)] = inst_31575__$1);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31576)){
var statearr_31637_33445 = state_31627__$1;
(statearr_31637_33445[(1)] = (30));

} else {
var statearr_31638_33446 = state_31627__$1;
(statearr_31638_33446[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (1))){
var state_31627__$1 = state_31627;
var statearr_31639_33447 = state_31627__$1;
(statearr_31639_33447[(2)] = null);

(statearr_31639_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (24))){
var inst_31526 = (state_31627[(7)]);
var inst_31545 = (state_31627[(2)]);
var inst_31546 = cljs.core.next(inst_31526);
var inst_31504 = inst_31546;
var inst_31505 = null;
var inst_31506 = (0);
var inst_31507 = (0);
var state_31627__$1 = (function (){var statearr_31640 = state_31627;
(statearr_31640[(13)] = inst_31505);

(statearr_31640[(14)] = inst_31545);

(statearr_31640[(15)] = inst_31507);

(statearr_31640[(16)] = inst_31506);

(statearr_31640[(17)] = inst_31504);

return statearr_31640;
})();
var statearr_31641_33448 = state_31627__$1;
(statearr_31641_33448[(2)] = null);

(statearr_31641_33448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (39))){
var state_31627__$1 = state_31627;
var statearr_31645_33449 = state_31627__$1;
(statearr_31645_33449[(2)] = null);

(statearr_31645_33449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (4))){
var inst_31495 = (state_31627[(12)]);
var inst_31495__$1 = (state_31627[(2)]);
var inst_31496 = (inst_31495__$1 == null);
var state_31627__$1 = (function (){var statearr_31646 = state_31627;
(statearr_31646[(12)] = inst_31495__$1);

return statearr_31646;
})();
if(cljs.core.truth_(inst_31496)){
var statearr_31647_33450 = state_31627__$1;
(statearr_31647_33450[(1)] = (5));

} else {
var statearr_31648_33451 = state_31627__$1;
(statearr_31648_33451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (15))){
var inst_31505 = (state_31627[(13)]);
var inst_31507 = (state_31627[(15)]);
var inst_31506 = (state_31627[(16)]);
var inst_31504 = (state_31627[(17)]);
var inst_31522 = (state_31627[(2)]);
var inst_31523 = (inst_31507 + (1));
var tmp31642 = inst_31505;
var tmp31643 = inst_31506;
var tmp31644 = inst_31504;
var inst_31504__$1 = tmp31644;
var inst_31505__$1 = tmp31642;
var inst_31506__$1 = tmp31643;
var inst_31507__$1 = inst_31523;
var state_31627__$1 = (function (){var statearr_31649 = state_31627;
(statearr_31649[(13)] = inst_31505__$1);

(statearr_31649[(18)] = inst_31522);

(statearr_31649[(15)] = inst_31507__$1);

(statearr_31649[(16)] = inst_31506__$1);

(statearr_31649[(17)] = inst_31504__$1);

return statearr_31649;
})();
var statearr_31650_33452 = state_31627__$1;
(statearr_31650_33452[(2)] = null);

(statearr_31650_33452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (21))){
var inst_31549 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31658_33453 = state_31627__$1;
(statearr_31658_33453[(2)] = inst_31549);

(statearr_31658_33453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (31))){
var inst_31575 = (state_31627[(10)]);
var inst_31579 = done(null);
var inst_31580 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31575);
var state_31627__$1 = (function (){var statearr_31661 = state_31627;
(statearr_31661[(19)] = inst_31579);

return statearr_31661;
})();
var statearr_31662_33454 = state_31627__$1;
(statearr_31662_33454[(2)] = inst_31580);

(statearr_31662_33454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (32))){
var inst_31567 = (state_31627[(20)]);
var inst_31570 = (state_31627[(9)]);
var inst_31569 = (state_31627[(21)]);
var inst_31568 = (state_31627[(11)]);
var inst_31582 = (state_31627[(2)]);
var inst_31583 = (inst_31570 + (1));
var tmp31653 = inst_31567;
var tmp31654 = inst_31569;
var tmp31655 = inst_31568;
var inst_31567__$1 = tmp31653;
var inst_31568__$1 = tmp31655;
var inst_31569__$1 = tmp31654;
var inst_31570__$1 = inst_31583;
var state_31627__$1 = (function (){var statearr_31664 = state_31627;
(statearr_31664[(20)] = inst_31567__$1);

(statearr_31664[(22)] = inst_31582);

(statearr_31664[(9)] = inst_31570__$1);

(statearr_31664[(21)] = inst_31569__$1);

(statearr_31664[(11)] = inst_31568__$1);

return statearr_31664;
})();
var statearr_31665_33462 = state_31627__$1;
(statearr_31665_33462[(2)] = null);

(statearr_31665_33462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (40))){
var inst_31595 = (state_31627[(23)]);
var inst_31599 = done(null);
var inst_31600 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31595);
var state_31627__$1 = (function (){var statearr_31666 = state_31627;
(statearr_31666[(24)] = inst_31599);

return statearr_31666;
})();
var statearr_31667_33463 = state_31627__$1;
(statearr_31667_33463[(2)] = inst_31600);

(statearr_31667_33463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (33))){
var inst_31586 = (state_31627[(25)]);
var inst_31588 = cljs.core.chunked_seq_QMARK_(inst_31586);
var state_31627__$1 = state_31627;
if(inst_31588){
var statearr_31668_33464 = state_31627__$1;
(statearr_31668_33464[(1)] = (36));

} else {
var statearr_31669_33465 = state_31627__$1;
(statearr_31669_33465[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (13))){
var inst_31516 = (state_31627[(26)]);
var inst_31519 = cljs.core.async.close_BANG_(inst_31516);
var state_31627__$1 = state_31627;
var statearr_31670_33466 = state_31627__$1;
(statearr_31670_33466[(2)] = inst_31519);

(statearr_31670_33466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (22))){
var inst_31539 = (state_31627[(8)]);
var inst_31542 = cljs.core.async.close_BANG_(inst_31539);
var state_31627__$1 = state_31627;
var statearr_31673_33467 = state_31627__$1;
(statearr_31673_33467[(2)] = inst_31542);

(statearr_31673_33467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (36))){
var inst_31586 = (state_31627[(25)]);
var inst_31590 = cljs.core.chunk_first(inst_31586);
var inst_31591 = cljs.core.chunk_rest(inst_31586);
var inst_31592 = cljs.core.count(inst_31590);
var inst_31567 = inst_31591;
var inst_31568 = inst_31590;
var inst_31569 = inst_31592;
var inst_31570 = (0);
var state_31627__$1 = (function (){var statearr_31674 = state_31627;
(statearr_31674[(20)] = inst_31567);

(statearr_31674[(9)] = inst_31570);

(statearr_31674[(21)] = inst_31569);

(statearr_31674[(11)] = inst_31568);

return statearr_31674;
})();
var statearr_31675_33468 = state_31627__$1;
(statearr_31675_33468[(2)] = null);

(statearr_31675_33468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (41))){
var inst_31586 = (state_31627[(25)]);
var inst_31602 = (state_31627[(2)]);
var inst_31603 = cljs.core.next(inst_31586);
var inst_31567 = inst_31603;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31627__$1 = (function (){var statearr_31676 = state_31627;
(statearr_31676[(20)] = inst_31567);

(statearr_31676[(9)] = inst_31570);

(statearr_31676[(21)] = inst_31569);

(statearr_31676[(11)] = inst_31568);

(statearr_31676[(27)] = inst_31602);

return statearr_31676;
})();
var statearr_31677_33469 = state_31627__$1;
(statearr_31677_33469[(2)] = null);

(statearr_31677_33469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (43))){
var state_31627__$1 = state_31627;
var statearr_31678_33470 = state_31627__$1;
(statearr_31678_33470[(2)] = null);

(statearr_31678_33470[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (29))){
var inst_31611 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31679_33471 = state_31627__$1;
(statearr_31679_33471[(2)] = inst_31611);

(statearr_31679_33471[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (44))){
var inst_31620 = (state_31627[(2)]);
var state_31627__$1 = (function (){var statearr_31680 = state_31627;
(statearr_31680[(28)] = inst_31620);

return statearr_31680;
})();
var statearr_31681_33472 = state_31627__$1;
(statearr_31681_33472[(2)] = null);

(statearr_31681_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (6))){
var inst_31559 = (state_31627[(29)]);
var inst_31558 = cljs.core.deref(cs);
var inst_31559__$1 = cljs.core.keys(inst_31558);
var inst_31560 = cljs.core.count(inst_31559__$1);
var inst_31561 = cljs.core.reset_BANG_(dctr,inst_31560);
var inst_31566 = cljs.core.seq(inst_31559__$1);
var inst_31567 = inst_31566;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31627__$1 = (function (){var statearr_31682 = state_31627;
(statearr_31682[(20)] = inst_31567);

(statearr_31682[(30)] = inst_31561);

(statearr_31682[(9)] = inst_31570);

(statearr_31682[(21)] = inst_31569);

(statearr_31682[(11)] = inst_31568);

(statearr_31682[(29)] = inst_31559__$1);

return statearr_31682;
})();
var statearr_31683_33473 = state_31627__$1;
(statearr_31683_33473[(2)] = null);

(statearr_31683_33473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (28))){
var inst_31567 = (state_31627[(20)]);
var inst_31586 = (state_31627[(25)]);
var inst_31586__$1 = cljs.core.seq(inst_31567);
var state_31627__$1 = (function (){var statearr_31684 = state_31627;
(statearr_31684[(25)] = inst_31586__$1);

return statearr_31684;
})();
if(inst_31586__$1){
var statearr_31685_33474 = state_31627__$1;
(statearr_31685_33474[(1)] = (33));

} else {
var statearr_31686_33475 = state_31627__$1;
(statearr_31686_33475[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (25))){
var inst_31570 = (state_31627[(9)]);
var inst_31569 = (state_31627[(21)]);
var inst_31572 = (inst_31570 < inst_31569);
var inst_31573 = inst_31572;
var state_31627__$1 = state_31627;
if(cljs.core.truth_(inst_31573)){
var statearr_31687_33476 = state_31627__$1;
(statearr_31687_33476[(1)] = (27));

} else {
var statearr_31688_33477 = state_31627__$1;
(statearr_31688_33477[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (34))){
var state_31627__$1 = state_31627;
var statearr_31689_33478 = state_31627__$1;
(statearr_31689_33478[(2)] = null);

(statearr_31689_33478[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (17))){
var state_31627__$1 = state_31627;
var statearr_31690_33479 = state_31627__$1;
(statearr_31690_33479[(2)] = null);

(statearr_31690_33479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (3))){
var inst_31625 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31627__$1,inst_31625);
} else {
if((state_val_31628 === (12))){
var inst_31554 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31691_33480 = state_31627__$1;
(statearr_31691_33480[(2)] = inst_31554);

(statearr_31691_33480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (2))){
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31627__$1,(4),ch);
} else {
if((state_val_31628 === (23))){
var state_31627__$1 = state_31627;
var statearr_31692_33481 = state_31627__$1;
(statearr_31692_33481[(2)] = null);

(statearr_31692_33481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (35))){
var inst_31609 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31693_33482 = state_31627__$1;
(statearr_31693_33482[(2)] = inst_31609);

(statearr_31693_33482[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (19))){
var inst_31526 = (state_31627[(7)]);
var inst_31530 = cljs.core.chunk_first(inst_31526);
var inst_31531 = cljs.core.chunk_rest(inst_31526);
var inst_31532 = cljs.core.count(inst_31530);
var inst_31504 = inst_31531;
var inst_31505 = inst_31530;
var inst_31506 = inst_31532;
var inst_31507 = (0);
var state_31627__$1 = (function (){var statearr_31694 = state_31627;
(statearr_31694[(13)] = inst_31505);

(statearr_31694[(15)] = inst_31507);

(statearr_31694[(16)] = inst_31506);

(statearr_31694[(17)] = inst_31504);

return statearr_31694;
})();
var statearr_31695_33483 = state_31627__$1;
(statearr_31695_33483[(2)] = null);

(statearr_31695_33483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (11))){
var inst_31504 = (state_31627[(17)]);
var inst_31526 = (state_31627[(7)]);
var inst_31526__$1 = cljs.core.seq(inst_31504);
var state_31627__$1 = (function (){var statearr_31696 = state_31627;
(statearr_31696[(7)] = inst_31526__$1);

return statearr_31696;
})();
if(inst_31526__$1){
var statearr_31697_33491 = state_31627__$1;
(statearr_31697_33491[(1)] = (16));

} else {
var statearr_31698_33492 = state_31627__$1;
(statearr_31698_33492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (9))){
var inst_31556 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31699_33493 = state_31627__$1;
(statearr_31699_33493[(2)] = inst_31556);

(statearr_31699_33493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (5))){
var inst_31502 = cljs.core.deref(cs);
var inst_31503 = cljs.core.seq(inst_31502);
var inst_31504 = inst_31503;
var inst_31505 = null;
var inst_31506 = (0);
var inst_31507 = (0);
var state_31627__$1 = (function (){var statearr_31700 = state_31627;
(statearr_31700[(13)] = inst_31505);

(statearr_31700[(15)] = inst_31507);

(statearr_31700[(16)] = inst_31506);

(statearr_31700[(17)] = inst_31504);

return statearr_31700;
})();
var statearr_31704_33500 = state_31627__$1;
(statearr_31704_33500[(2)] = null);

(statearr_31704_33500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (14))){
var state_31627__$1 = state_31627;
var statearr_31705_33501 = state_31627__$1;
(statearr_31705_33501[(2)] = null);

(statearr_31705_33501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (45))){
var inst_31617 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31706_33502 = state_31627__$1;
(statearr_31706_33502[(2)] = inst_31617);

(statearr_31706_33502[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (26))){
var inst_31559 = (state_31627[(29)]);
var inst_31613 = (state_31627[(2)]);
var inst_31614 = cljs.core.seq(inst_31559);
var state_31627__$1 = (function (){var statearr_31707 = state_31627;
(statearr_31707[(31)] = inst_31613);

return statearr_31707;
})();
if(inst_31614){
var statearr_31708_33506 = state_31627__$1;
(statearr_31708_33506[(1)] = (42));

} else {
var statearr_31709_33508 = state_31627__$1;
(statearr_31709_33508[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (16))){
var inst_31526 = (state_31627[(7)]);
var inst_31528 = cljs.core.chunked_seq_QMARK_(inst_31526);
var state_31627__$1 = state_31627;
if(inst_31528){
var statearr_31711_33512 = state_31627__$1;
(statearr_31711_33512[(1)] = (19));

} else {
var statearr_31712_33513 = state_31627__$1;
(statearr_31712_33513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (38))){
var inst_31606 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31713_33514 = state_31627__$1;
(statearr_31713_33514[(2)] = inst_31606);

(statearr_31713_33514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (30))){
var state_31627__$1 = state_31627;
var statearr_31714_33515 = state_31627__$1;
(statearr_31714_33515[(2)] = null);

(statearr_31714_33515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (10))){
var inst_31505 = (state_31627[(13)]);
var inst_31507 = (state_31627[(15)]);
var inst_31515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31505,inst_31507);
var inst_31516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31515,(0),null);
var inst_31517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31515,(1),null);
var state_31627__$1 = (function (){var statearr_31715 = state_31627;
(statearr_31715[(26)] = inst_31516);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31517)){
var statearr_31716_33519 = state_31627__$1;
(statearr_31716_33519[(1)] = (13));

} else {
var statearr_31717_33520 = state_31627__$1;
(statearr_31717_33520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (18))){
var inst_31552 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31718_33522 = state_31627__$1;
(statearr_31718_33522[(2)] = inst_31552);

(statearr_31718_33522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (42))){
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31627__$1,(45),dchan);
} else {
if((state_val_31628 === (37))){
var inst_31586 = (state_31627[(25)]);
var inst_31595 = (state_31627[(23)]);
var inst_31495 = (state_31627[(12)]);
var inst_31595__$1 = cljs.core.first(inst_31586);
var inst_31596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31595__$1,inst_31495,done);
var state_31627__$1 = (function (){var statearr_31719 = state_31627;
(statearr_31719[(23)] = inst_31595__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31720_33525 = state_31627__$1;
(statearr_31720_33525[(1)] = (39));

} else {
var statearr_31721_33526 = state_31627__$1;
(statearr_31721_33526[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (8))){
var inst_31507 = (state_31627[(15)]);
var inst_31506 = (state_31627[(16)]);
var inst_31509 = (inst_31507 < inst_31506);
var inst_31510 = inst_31509;
var state_31627__$1 = state_31627;
if(cljs.core.truth_(inst_31510)){
var statearr_31722_33530 = state_31627__$1;
(statearr_31722_33530[(1)] = (10));

} else {
var statearr_31723_33531 = state_31627__$1;
(statearr_31723_33531[(1)] = (11));

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
});})(c__30812__auto___33438,cs,m,dchan,dctr,done))
;
return ((function (switch__30584__auto__,c__30812__auto___33438,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30585__auto__ = null;
var cljs$core$async$mult_$_state_machine__30585__auto____0 = (function (){
var statearr_31724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31724[(0)] = cljs$core$async$mult_$_state_machine__30585__auto__);

(statearr_31724[(1)] = (1));

return statearr_31724;
});
var cljs$core$async$mult_$_state_machine__30585__auto____1 = (function (state_31627){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31627);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31725){if((e31725 instanceof Object)){
var ex__30588__auto__ = e31725;
var statearr_31726_33533 = state_31627;
(statearr_31726_33533[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_31627;
state_31627 = G__33536;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30585__auto__ = function(state_31627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30585__auto____1.call(this,state_31627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30585__auto____0;
cljs$core$async$mult_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30585__auto____1;
return cljs$core$async$mult_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33438,cs,m,dchan,dctr,done))
})();
var state__30814__auto__ = (function (){var statearr_31727 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31727[(6)] = c__30812__auto___33438);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33438,cs,m,dchan,dctr,done))
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
var G__31729 = arguments.length;
switch (G__31729) {
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
var len__4730__auto___33547 = arguments.length;
var i__4731__auto___33548 = (0);
while(true){
if((i__4731__auto___33548 < len__4730__auto___33547)){
args__4736__auto__.push((arguments[i__4731__auto___33548]));

var G__33549 = (i__4731__auto___33548 + (1));
i__4731__auto___33548 = G__33549;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31735){
var map__31736 = p__31735;
var map__31736__$1 = (((((!((map__31736 == null))))?(((((map__31736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31736):map__31736);
var opts = map__31736__$1;
var statearr_31738_33551 = state;
(statearr_31738_33551[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__31736,map__31736__$1,opts){
return (function (val){
var statearr_31739_33552 = state;
(statearr_31739_33552[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31736,map__31736__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31740_33553 = state;
(statearr_31740_33553[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31731){
var G__31732 = cljs.core.first(seq31731);
var seq31731__$1 = cljs.core.next(seq31731);
var G__31733 = cljs.core.first(seq31731__$1);
var seq31731__$2 = cljs.core.next(seq31731__$1);
var G__31734 = cljs.core.first(seq31731__$2);
var seq31731__$3 = cljs.core.next(seq31731__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31732,G__31733,G__31734,seq31731__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31741 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31742){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31742 = meta31742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31743,meta31742__$1){
var self__ = this;
var _31743__$1 = this;
return (new cljs.core.async.t_cljs$core$async31741(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31742__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31743){
var self__ = this;
var _31743__$1 = this;
return self__.meta31742;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31741.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31742","meta31742",-833623526,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31741";

cljs.core.async.t_cljs$core$async31741.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31741");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31741.
 */
cljs.core.async.__GT_t_cljs$core$async31741 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31742){
return (new cljs.core.async.t_cljs$core$async31741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31742));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31741(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30812__auto___33566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31845){
var state_val_31846 = (state_31845[(1)]);
if((state_val_31846 === (7))){
var inst_31760 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31847_33568 = state_31845__$1;
(statearr_31847_33568[(2)] = inst_31760);

(statearr_31847_33568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (20))){
var inst_31772 = (state_31845[(7)]);
var state_31845__$1 = state_31845;
var statearr_31848_33569 = state_31845__$1;
(statearr_31848_33569[(2)] = inst_31772);

(statearr_31848_33569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (27))){
var state_31845__$1 = state_31845;
var statearr_31849_33570 = state_31845__$1;
(statearr_31849_33570[(2)] = null);

(statearr_31849_33570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (1))){
var inst_31747 = (state_31845[(8)]);
var inst_31747__$1 = calc_state();
var inst_31749 = (inst_31747__$1 == null);
var inst_31750 = cljs.core.not(inst_31749);
var state_31845__$1 = (function (){var statearr_31850 = state_31845;
(statearr_31850[(8)] = inst_31747__$1);

return statearr_31850;
})();
if(inst_31750){
var statearr_31851_33572 = state_31845__$1;
(statearr_31851_33572[(1)] = (2));

} else {
var statearr_31852_33573 = state_31845__$1;
(statearr_31852_33573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (24))){
var inst_31805 = (state_31845[(9)]);
var inst_31819 = (state_31845[(10)]);
var inst_31796 = (state_31845[(11)]);
var inst_31819__$1 = (inst_31796.cljs$core$IFn$_invoke$arity$1 ? inst_31796.cljs$core$IFn$_invoke$arity$1(inst_31805) : inst_31796.call(null,inst_31805));
var state_31845__$1 = (function (){var statearr_31853 = state_31845;
(statearr_31853[(10)] = inst_31819__$1);

return statearr_31853;
})();
if(cljs.core.truth_(inst_31819__$1)){
var statearr_31854_33574 = state_31845__$1;
(statearr_31854_33574[(1)] = (29));

} else {
var statearr_31869_33576 = state_31845__$1;
(statearr_31869_33576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (4))){
var inst_31763 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31763)){
var statearr_31870_33577 = state_31845__$1;
(statearr_31870_33577[(1)] = (8));

} else {
var statearr_31871_33578 = state_31845__$1;
(statearr_31871_33578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (15))){
var inst_31790 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31790)){
var statearr_31872_33580 = state_31845__$1;
(statearr_31872_33580[(1)] = (19));

} else {
var statearr_31873_33581 = state_31845__$1;
(statearr_31873_33581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (21))){
var inst_31795 = (state_31845[(12)]);
var inst_31795__$1 = (state_31845[(2)]);
var inst_31796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31795__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31795__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31795__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31845__$1 = (function (){var statearr_31874 = state_31845;
(statearr_31874[(13)] = inst_31797);

(statearr_31874[(12)] = inst_31795__$1);

(statearr_31874[(11)] = inst_31796);

return statearr_31874;
})();
return cljs.core.async.ioc_alts_BANG_(state_31845__$1,(22),inst_31798);
} else {
if((state_val_31846 === (31))){
var inst_31827 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31827)){
var statearr_31875_33587 = state_31845__$1;
(statearr_31875_33587[(1)] = (32));

} else {
var statearr_31876_33588 = state_31845__$1;
(statearr_31876_33588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (32))){
var inst_31804 = (state_31845[(14)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31845__$1,(35),out,inst_31804);
} else {
if((state_val_31846 === (33))){
var inst_31795 = (state_31845[(12)]);
var inst_31772 = inst_31795;
var state_31845__$1 = (function (){var statearr_31877 = state_31845;
(statearr_31877[(7)] = inst_31772);

return statearr_31877;
})();
var statearr_31878_33590 = state_31845__$1;
(statearr_31878_33590[(2)] = null);

(statearr_31878_33590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (13))){
var inst_31772 = (state_31845[(7)]);
var inst_31779 = inst_31772.cljs$lang$protocol_mask$partition0$;
var inst_31780 = (inst_31779 & (64));
var inst_31781 = inst_31772.cljs$core$ISeq$;
var inst_31782 = (cljs.core.PROTOCOL_SENTINEL === inst_31781);
var inst_31783 = ((inst_31780) || (inst_31782));
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31783)){
var statearr_31879_33591 = state_31845__$1;
(statearr_31879_33591[(1)] = (16));

} else {
var statearr_31882_33592 = state_31845__$1;
(statearr_31882_33592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (22))){
var inst_31805 = (state_31845[(9)]);
var inst_31804 = (state_31845[(14)]);
var inst_31803 = (state_31845[(2)]);
var inst_31804__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31803,(0),null);
var inst_31805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31803,(1),null);
var inst_31806 = (inst_31804__$1 == null);
var inst_31807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31805__$1,change);
var inst_31808 = ((inst_31806) || (inst_31807));
var state_31845__$1 = (function (){var statearr_31886 = state_31845;
(statearr_31886[(9)] = inst_31805__$1);

(statearr_31886[(14)] = inst_31804__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_31887_33597 = state_31845__$1;
(statearr_31887_33597[(1)] = (23));

} else {
var statearr_31888_33598 = state_31845__$1;
(statearr_31888_33598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (36))){
var inst_31795 = (state_31845[(12)]);
var inst_31772 = inst_31795;
var state_31845__$1 = (function (){var statearr_31889 = state_31845;
(statearr_31889[(7)] = inst_31772);

return statearr_31889;
})();
var statearr_31890_33599 = state_31845__$1;
(statearr_31890_33599[(2)] = null);

(statearr_31890_33599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (29))){
var inst_31819 = (state_31845[(10)]);
var state_31845__$1 = state_31845;
var statearr_31894_33600 = state_31845__$1;
(statearr_31894_33600[(2)] = inst_31819);

(statearr_31894_33600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (6))){
var state_31845__$1 = state_31845;
var statearr_31895_33601 = state_31845__$1;
(statearr_31895_33601[(2)] = false);

(statearr_31895_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (28))){
var inst_31815 = (state_31845[(2)]);
var inst_31816 = calc_state();
var inst_31772 = inst_31816;
var state_31845__$1 = (function (){var statearr_31896 = state_31845;
(statearr_31896[(15)] = inst_31815);

(statearr_31896[(7)] = inst_31772);

return statearr_31896;
})();
var statearr_31897_33602 = state_31845__$1;
(statearr_31897_33602[(2)] = null);

(statearr_31897_33602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (25))){
var inst_31841 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31898_33603 = state_31845__$1;
(statearr_31898_33603[(2)] = inst_31841);

(statearr_31898_33603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (34))){
var inst_31839 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31899_33604 = state_31845__$1;
(statearr_31899_33604[(2)] = inst_31839);

(statearr_31899_33604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (17))){
var state_31845__$1 = state_31845;
var statearr_31901_33605 = state_31845__$1;
(statearr_31901_33605[(2)] = false);

(statearr_31901_33605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (3))){
var state_31845__$1 = state_31845;
var statearr_31905_33606 = state_31845__$1;
(statearr_31905_33606[(2)] = false);

(statearr_31905_33606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (12))){
var inst_31843 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31845__$1,inst_31843);
} else {
if((state_val_31846 === (2))){
var inst_31747 = (state_31845[(8)]);
var inst_31752 = inst_31747.cljs$lang$protocol_mask$partition0$;
var inst_31753 = (inst_31752 & (64));
var inst_31754 = inst_31747.cljs$core$ISeq$;
var inst_31755 = (cljs.core.PROTOCOL_SENTINEL === inst_31754);
var inst_31756 = ((inst_31753) || (inst_31755));
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31756)){
var statearr_31910_33607 = state_31845__$1;
(statearr_31910_33607[(1)] = (5));

} else {
var statearr_31911_33609 = state_31845__$1;
(statearr_31911_33609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (23))){
var inst_31804 = (state_31845[(14)]);
var inst_31810 = (inst_31804 == null);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31810)){
var statearr_31912_33610 = state_31845__$1;
(statearr_31912_33610[(1)] = (26));

} else {
var statearr_31913_33611 = state_31845__$1;
(statearr_31913_33611[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (35))){
var inst_31830 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31830)){
var statearr_31914_33612 = state_31845__$1;
(statearr_31914_33612[(1)] = (36));

} else {
var statearr_31915_33613 = state_31845__$1;
(statearr_31915_33613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (19))){
var inst_31772 = (state_31845[(7)]);
var inst_31792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31772);
var state_31845__$1 = state_31845;
var statearr_31916_33614 = state_31845__$1;
(statearr_31916_33614[(2)] = inst_31792);

(statearr_31916_33614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (11))){
var inst_31772 = (state_31845[(7)]);
var inst_31776 = (inst_31772 == null);
var inst_31777 = cljs.core.not(inst_31776);
var state_31845__$1 = state_31845;
if(inst_31777){
var statearr_31917_33615 = state_31845__$1;
(statearr_31917_33615[(1)] = (13));

} else {
var statearr_31918_33616 = state_31845__$1;
(statearr_31918_33616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (9))){
var inst_31747 = (state_31845[(8)]);
var state_31845__$1 = state_31845;
var statearr_31921_33617 = state_31845__$1;
(statearr_31921_33617[(2)] = inst_31747);

(statearr_31921_33617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (5))){
var state_31845__$1 = state_31845;
var statearr_31922_33618 = state_31845__$1;
(statearr_31922_33618[(2)] = true);

(statearr_31922_33618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (14))){
var state_31845__$1 = state_31845;
var statearr_31923_33619 = state_31845__$1;
(statearr_31923_33619[(2)] = false);

(statearr_31923_33619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (26))){
var inst_31805 = (state_31845[(9)]);
var inst_31812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31805);
var state_31845__$1 = state_31845;
var statearr_31924_33620 = state_31845__$1;
(statearr_31924_33620[(2)] = inst_31812);

(statearr_31924_33620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (16))){
var state_31845__$1 = state_31845;
var statearr_31925_33621 = state_31845__$1;
(statearr_31925_33621[(2)] = true);

(statearr_31925_33621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (38))){
var inst_31835 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31926_33622 = state_31845__$1;
(statearr_31926_33622[(2)] = inst_31835);

(statearr_31926_33622[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (30))){
var inst_31797 = (state_31845[(13)]);
var inst_31805 = (state_31845[(9)]);
var inst_31796 = (state_31845[(11)]);
var inst_31822 = cljs.core.empty_QMARK_(inst_31796);
var inst_31823 = (inst_31797.cljs$core$IFn$_invoke$arity$1 ? inst_31797.cljs$core$IFn$_invoke$arity$1(inst_31805) : inst_31797.call(null,inst_31805));
var inst_31824 = cljs.core.not(inst_31823);
var inst_31825 = ((inst_31822) && (inst_31824));
var state_31845__$1 = state_31845;
var statearr_31927_33623 = state_31845__$1;
(statearr_31927_33623[(2)] = inst_31825);

(statearr_31927_33623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (10))){
var inst_31747 = (state_31845[(8)]);
var inst_31768 = (state_31845[(2)]);
var inst_31769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31768,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31768,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31768,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31772 = inst_31747;
var state_31845__$1 = (function (){var statearr_31928 = state_31845;
(statearr_31928[(16)] = inst_31770);

(statearr_31928[(17)] = inst_31771);

(statearr_31928[(18)] = inst_31769);

(statearr_31928[(7)] = inst_31772);

return statearr_31928;
})();
var statearr_31929_33624 = state_31845__$1;
(statearr_31929_33624[(2)] = null);

(statearr_31929_33624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (18))){
var inst_31787 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31930_33625 = state_31845__$1;
(statearr_31930_33625[(2)] = inst_31787);

(statearr_31930_33625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (37))){
var state_31845__$1 = state_31845;
var statearr_31931_33626 = state_31845__$1;
(statearr_31931_33626[(2)] = null);

(statearr_31931_33626[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (8))){
var inst_31747 = (state_31845[(8)]);
var inst_31765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31747);
var state_31845__$1 = state_31845;
var statearr_31932_33632 = state_31845__$1;
(statearr_31932_33632[(2)] = inst_31765);

(statearr_31932_33632[(1)] = (10));


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
});})(c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30584__auto__,c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30585__auto__ = null;
var cljs$core$async$mix_$_state_machine__30585__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = cljs$core$async$mix_$_state_machine__30585__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var cljs$core$async$mix_$_state_machine__30585__auto____1 = (function (state_31845){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_31845);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object)){
var ex__30588__auto__ = e31934;
var statearr_31935_33635 = state_31845;
(statearr_31935_33635[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33636 = state_31845;
state_31845 = G__33636;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30585__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30585__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30585__auto____0;
cljs$core$async$mix_$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30585__auto____1;
return cljs$core$async$mix_$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30814__auto__ = (function (){var statearr_31936 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_31936[(6)] = c__30812__auto___33566);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__31939 = arguments.length;
switch (G__31939) {
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
var G__31942 = arguments.length;
switch (G__31942) {
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
return (function (p1__31940_SHARP_){
if(cljs.core.truth_((p1__31940_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31940_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31940_SHARP_.call(null,topic)))){
return p1__31940_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31940_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31943 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31944){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31944 = meta31944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31945,meta31944__$1){
var self__ = this;
var _31945__$1 = this;
return (new cljs.core.async.t_cljs$core$async31943(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31944__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31945){
var self__ = this;
var _31945__$1 = this;
return self__.meta31944;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31944","meta31944",697356050,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31943";

cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31943");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31943.
 */
cljs.core.async.__GT_t_cljs$core$async31943 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31944){
return (new cljs.core.async.t_cljs$core$async31943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31944));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31943(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30812__auto___33657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33657,mults,ensure_mult,p){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33657,mults,ensure_mult,p){
return (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (7))){
var inst_32052 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32058_33659 = state_32056__$1;
(statearr_32058_33659[(2)] = inst_32052);

(statearr_32058_33659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (20))){
var state_32056__$1 = state_32056;
var statearr_32059_33660 = state_32056__$1;
(statearr_32059_33660[(2)] = null);

(statearr_32059_33660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (1))){
var state_32056__$1 = state_32056;
var statearr_32060_33661 = state_32056__$1;
(statearr_32060_33661[(2)] = null);

(statearr_32060_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (24))){
var inst_32034 = (state_32056[(7)]);
var inst_32043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32034);
var state_32056__$1 = state_32056;
var statearr_32061_33662 = state_32056__$1;
(statearr_32061_33662[(2)] = inst_32043);

(statearr_32061_33662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (4))){
var inst_31981 = (state_32056[(8)]);
var inst_31981__$1 = (state_32056[(2)]);
var inst_31982 = (inst_31981__$1 == null);
var state_32056__$1 = (function (){var statearr_32062 = state_32056;
(statearr_32062[(8)] = inst_31981__$1);

return statearr_32062;
})();
if(cljs.core.truth_(inst_31982)){
var statearr_32063_33663 = state_32056__$1;
(statearr_32063_33663[(1)] = (5));

} else {
var statearr_32064_33664 = state_32056__$1;
(statearr_32064_33664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (15))){
var inst_32028 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32065_33665 = state_32056__$1;
(statearr_32065_33665[(2)] = inst_32028);

(statearr_32065_33665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (21))){
var inst_32049 = (state_32056[(2)]);
var state_32056__$1 = (function (){var statearr_32066 = state_32056;
(statearr_32066[(9)] = inst_32049);

return statearr_32066;
})();
var statearr_32067_33707 = state_32056__$1;
(statearr_32067_33707[(2)] = null);

(statearr_32067_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (13))){
var inst_32010 = (state_32056[(10)]);
var inst_32012 = cljs.core.chunked_seq_QMARK_(inst_32010);
var state_32056__$1 = state_32056;
if(inst_32012){
var statearr_32068_33708 = state_32056__$1;
(statearr_32068_33708[(1)] = (16));

} else {
var statearr_32069_33709 = state_32056__$1;
(statearr_32069_33709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (22))){
var inst_32040 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_32040)){
var statearr_32070_33710 = state_32056__$1;
(statearr_32070_33710[(1)] = (23));

} else {
var statearr_32071_33711 = state_32056__$1;
(statearr_32071_33711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (6))){
var inst_32036 = (state_32056[(11)]);
var inst_32034 = (state_32056[(7)]);
var inst_31981 = (state_32056[(8)]);
var inst_32034__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31981) : topic_fn.call(null,inst_31981));
var inst_32035 = cljs.core.deref(mults);
var inst_32036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32035,inst_32034__$1);
var state_32056__$1 = (function (){var statearr_32072 = state_32056;
(statearr_32072[(11)] = inst_32036__$1);

(statearr_32072[(7)] = inst_32034__$1);

return statearr_32072;
})();
if(cljs.core.truth_(inst_32036__$1)){
var statearr_32073_33712 = state_32056__$1;
(statearr_32073_33712[(1)] = (19));

} else {
var statearr_32074_33713 = state_32056__$1;
(statearr_32074_33713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (25))){
var inst_32045 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32075_33714 = state_32056__$1;
(statearr_32075_33714[(2)] = inst_32045);

(statearr_32075_33714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (17))){
var inst_32010 = (state_32056[(10)]);
var inst_32019 = cljs.core.first(inst_32010);
var inst_32020 = cljs.core.async.muxch_STAR_(inst_32019);
var inst_32021 = cljs.core.async.close_BANG_(inst_32020);
var inst_32022 = cljs.core.next(inst_32010);
var inst_31991 = inst_32022;
var inst_31992 = null;
var inst_31993 = (0);
var inst_31994 = (0);
var state_32056__$1 = (function (){var statearr_32076 = state_32056;
(statearr_32076[(12)] = inst_32021);

(statearr_32076[(13)] = inst_31992);

(statearr_32076[(14)] = inst_31991);

(statearr_32076[(15)] = inst_31993);

(statearr_32076[(16)] = inst_31994);

return statearr_32076;
})();
var statearr_32077_33715 = state_32056__$1;
(statearr_32077_33715[(2)] = null);

(statearr_32077_33715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (3))){
var inst_32054 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (12))){
var inst_32030 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32078_33722 = state_32056__$1;
(statearr_32078_33722[(2)] = inst_32030);

(statearr_32078_33722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (2))){
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32056__$1,(4),ch);
} else {
if((state_val_32057 === (23))){
var state_32056__$1 = state_32056;
var statearr_32079_33723 = state_32056__$1;
(statearr_32079_33723[(2)] = null);

(statearr_32079_33723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (19))){
var inst_32036 = (state_32056[(11)]);
var inst_31981 = (state_32056[(8)]);
var inst_32038 = cljs.core.async.muxch_STAR_(inst_32036);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32056__$1,(22),inst_32038,inst_31981);
} else {
if((state_val_32057 === (11))){
var inst_31991 = (state_32056[(14)]);
var inst_32010 = (state_32056[(10)]);
var inst_32010__$1 = cljs.core.seq(inst_31991);
var state_32056__$1 = (function (){var statearr_32080 = state_32056;
(statearr_32080[(10)] = inst_32010__$1);

return statearr_32080;
})();
if(inst_32010__$1){
var statearr_32081_33724 = state_32056__$1;
(statearr_32081_33724[(1)] = (13));

} else {
var statearr_32082_33725 = state_32056__$1;
(statearr_32082_33725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (9))){
var inst_32032 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32083_33726 = state_32056__$1;
(statearr_32083_33726[(2)] = inst_32032);

(statearr_32083_33726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (5))){
var inst_31988 = cljs.core.deref(mults);
var inst_31989 = cljs.core.vals(inst_31988);
var inst_31990 = cljs.core.seq(inst_31989);
var inst_31991 = inst_31990;
var inst_31992 = null;
var inst_31993 = (0);
var inst_31994 = (0);
var state_32056__$1 = (function (){var statearr_32084 = state_32056;
(statearr_32084[(13)] = inst_31992);

(statearr_32084[(14)] = inst_31991);

(statearr_32084[(15)] = inst_31993);

(statearr_32084[(16)] = inst_31994);

return statearr_32084;
})();
var statearr_32085_33727 = state_32056__$1;
(statearr_32085_33727[(2)] = null);

(statearr_32085_33727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (14))){
var state_32056__$1 = state_32056;
var statearr_32089_33728 = state_32056__$1;
(statearr_32089_33728[(2)] = null);

(statearr_32089_33728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (16))){
var inst_32010 = (state_32056[(10)]);
var inst_32014 = cljs.core.chunk_first(inst_32010);
var inst_32015 = cljs.core.chunk_rest(inst_32010);
var inst_32016 = cljs.core.count(inst_32014);
var inst_31991 = inst_32015;
var inst_31992 = inst_32014;
var inst_31993 = inst_32016;
var inst_31994 = (0);
var state_32056__$1 = (function (){var statearr_32090 = state_32056;
(statearr_32090[(13)] = inst_31992);

(statearr_32090[(14)] = inst_31991);

(statearr_32090[(15)] = inst_31993);

(statearr_32090[(16)] = inst_31994);

return statearr_32090;
})();
var statearr_32091_33735 = state_32056__$1;
(statearr_32091_33735[(2)] = null);

(statearr_32091_33735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (10))){
var inst_31992 = (state_32056[(13)]);
var inst_31991 = (state_32056[(14)]);
var inst_31993 = (state_32056[(15)]);
var inst_31994 = (state_32056[(16)]);
var inst_31999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31992,inst_31994);
var inst_32005 = cljs.core.async.muxch_STAR_(inst_31999);
var inst_32006 = cljs.core.async.close_BANG_(inst_32005);
var inst_32007 = (inst_31994 + (1));
var tmp32086 = inst_31992;
var tmp32087 = inst_31991;
var tmp32088 = inst_31993;
var inst_31991__$1 = tmp32087;
var inst_31992__$1 = tmp32086;
var inst_31993__$1 = tmp32088;
var inst_31994__$1 = inst_32007;
var state_32056__$1 = (function (){var statearr_32092 = state_32056;
(statearr_32092[(13)] = inst_31992__$1);

(statearr_32092[(14)] = inst_31991__$1);

(statearr_32092[(15)] = inst_31993__$1);

(statearr_32092[(17)] = inst_32006);

(statearr_32092[(16)] = inst_31994__$1);

return statearr_32092;
})();
var statearr_32093_33736 = state_32056__$1;
(statearr_32093_33736[(2)] = null);

(statearr_32093_33736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (18))){
var inst_32025 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32094_33737 = state_32056__$1;
(statearr_32094_33737[(2)] = inst_32025);

(statearr_32094_33737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (8))){
var inst_31993 = (state_32056[(15)]);
var inst_31994 = (state_32056[(16)]);
var inst_31996 = (inst_31994 < inst_31993);
var inst_31997 = inst_31996;
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_31997)){
var statearr_32095_33738 = state_32056__$1;
(statearr_32095_33738[(1)] = (10));

} else {
var statearr_32096_33739 = state_32056__$1;
(statearr_32096_33739[(1)] = (11));

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
});})(c__30812__auto___33657,mults,ensure_mult,p))
;
return ((function (switch__30584__auto__,c__30812__auto___33657,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32097[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32097[(1)] = (1));

return statearr_32097;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32056){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32056);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32098){if((e32098 instanceof Object)){
var ex__30588__auto__ = e32098;
var statearr_32102_33743 = state_32056;
(statearr_32102_33743[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_32056;
state_32056 = G__33744;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33657,mults,ensure_mult,p))
})();
var state__30814__auto__ = (function (){var statearr_32103 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32103[(6)] = c__30812__auto___33657);

return statearr_32103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33657,mults,ensure_mult,p))
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
var G__32105 = arguments.length;
switch (G__32105) {
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
var G__32109 = arguments.length;
switch (G__32109) {
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
var G__32114 = arguments.length;
switch (G__32114) {
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
var c__30812__auto___33768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32158){
var state_val_32159 = (state_32158[(1)]);
if((state_val_32159 === (7))){
var state_32158__$1 = state_32158;
var statearr_32160_33770 = state_32158__$1;
(statearr_32160_33770[(2)] = null);

(statearr_32160_33770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (1))){
var state_32158__$1 = state_32158;
var statearr_32161_33771 = state_32158__$1;
(statearr_32161_33771[(2)] = null);

(statearr_32161_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (4))){
var inst_32119 = (state_32158[(7)]);
var inst_32121 = (inst_32119 < cnt);
var state_32158__$1 = state_32158;
if(cljs.core.truth_(inst_32121)){
var statearr_32162_33772 = state_32158__$1;
(statearr_32162_33772[(1)] = (6));

} else {
var statearr_32163_33773 = state_32158__$1;
(statearr_32163_33773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (15))){
var inst_32154 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32164_33774 = state_32158__$1;
(statearr_32164_33774[(2)] = inst_32154);

(statearr_32164_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (13))){
var inst_32147 = cljs.core.async.close_BANG_(out);
var state_32158__$1 = state_32158;
var statearr_32165_33775 = state_32158__$1;
(statearr_32165_33775[(2)] = inst_32147);

(statearr_32165_33775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (6))){
var state_32158__$1 = state_32158;
var statearr_32166_33776 = state_32158__$1;
(statearr_32166_33776[(2)] = null);

(statearr_32166_33776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (3))){
var inst_32156 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32158__$1,inst_32156);
} else {
if((state_val_32159 === (12))){
var inst_32144 = (state_32158[(8)]);
var inst_32144__$1 = (state_32158[(2)]);
var inst_32145 = cljs.core.some(cljs.core.nil_QMARK_,inst_32144__$1);
var state_32158__$1 = (function (){var statearr_32171 = state_32158;
(statearr_32171[(8)] = inst_32144__$1);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32145)){
var statearr_32172_33777 = state_32158__$1;
(statearr_32172_33777[(1)] = (13));

} else {
var statearr_32173_33778 = state_32158__$1;
(statearr_32173_33778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (2))){
var inst_32118 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32119 = (0);
var state_32158__$1 = (function (){var statearr_32178 = state_32158;
(statearr_32178[(7)] = inst_32119);

(statearr_32178[(9)] = inst_32118);

return statearr_32178;
})();
var statearr_32179_33779 = state_32158__$1;
(statearr_32179_33779[(2)] = null);

(statearr_32179_33779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (11))){
var inst_32119 = (state_32158[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32158,(10),Object,null,(9));
var inst_32128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32119) : chs__$1.call(null,inst_32119));
var inst_32132 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32119) : done.call(null,inst_32119));
var inst_32133 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32128,inst_32132);
var state_32158__$1 = state_32158;
var statearr_32180_33780 = state_32158__$1;
(statearr_32180_33780[(2)] = inst_32133);


cljs.core.async.impl.ioc_helpers.process_exception(state_32158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (9))){
var inst_32119 = (state_32158[(7)]);
var inst_32135 = (state_32158[(2)]);
var inst_32136 = (inst_32119 + (1));
var inst_32119__$1 = inst_32136;
var state_32158__$1 = (function (){var statearr_32181 = state_32158;
(statearr_32181[(10)] = inst_32135);

(statearr_32181[(7)] = inst_32119__$1);

return statearr_32181;
})();
var statearr_32182_33781 = state_32158__$1;
(statearr_32182_33781[(2)] = null);

(statearr_32182_33781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (5))){
var inst_32142 = (state_32158[(2)]);
var state_32158__$1 = (function (){var statearr_32183 = state_32158;
(statearr_32183[(11)] = inst_32142);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32158__$1,(12),dchan);
} else {
if((state_val_32159 === (14))){
var inst_32144 = (state_32158[(8)]);
var inst_32149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32144);
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32158__$1,(16),out,inst_32149);
} else {
if((state_val_32159 === (16))){
var inst_32151 = (state_32158[(2)]);
var state_32158__$1 = (function (){var statearr_32184 = state_32158;
(statearr_32184[(12)] = inst_32151);

return statearr_32184;
})();
var statearr_32185_33783 = state_32158__$1;
(statearr_32185_33783[(2)] = null);

(statearr_32185_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (10))){
var inst_32123 = (state_32158[(2)]);
var inst_32124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32158__$1 = (function (){var statearr_32186 = state_32158;
(statearr_32186[(13)] = inst_32123);

return statearr_32186;
})();
var statearr_32187_33784 = state_32158__$1;
(statearr_32187_33784[(2)] = inst_32124);


cljs.core.async.impl.ioc_helpers.process_exception(state_32158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (8))){
var inst_32140 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32188_33786 = state_32158__$1;
(statearr_32188_33786[(2)] = inst_32140);

(statearr_32188_33786[(1)] = (5));


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
});})(c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30584__auto__,c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32158){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32158);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32190){if((e32190 instanceof Object)){
var ex__30588__auto__ = e32190;
var statearr_32191_33788 = state_32158;
(statearr_32191_33788[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33790 = state_32158;
state_32158 = G__33790;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30814__auto__ = (function (){var statearr_32192 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32192[(6)] = c__30812__auto___33768);

return statearr_32192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33768,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32195 = arguments.length;
switch (G__32195) {
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
var c__30812__auto___33793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33793,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33793,out){
return (function (state_32227){
var state_val_32228 = (state_32227[(1)]);
if((state_val_32228 === (7))){
var inst_32207 = (state_32227[(7)]);
var inst_32206 = (state_32227[(8)]);
var inst_32206__$1 = (state_32227[(2)]);
var inst_32207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32206__$1,(0),null);
var inst_32208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32206__$1,(1),null);
var inst_32209 = (inst_32207__$1 == null);
var state_32227__$1 = (function (){var statearr_32229 = state_32227;
(statearr_32229[(9)] = inst_32208);

(statearr_32229[(7)] = inst_32207__$1);

(statearr_32229[(8)] = inst_32206__$1);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32209)){
var statearr_32230_33795 = state_32227__$1;
(statearr_32230_33795[(1)] = (8));

} else {
var statearr_32231_33796 = state_32227__$1;
(statearr_32231_33796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (1))){
var inst_32196 = cljs.core.vec(chs);
var inst_32197 = inst_32196;
var state_32227__$1 = (function (){var statearr_32232 = state_32227;
(statearr_32232[(10)] = inst_32197);

return statearr_32232;
})();
var statearr_32233_33797 = state_32227__$1;
(statearr_32233_33797[(2)] = null);

(statearr_32233_33797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (4))){
var inst_32197 = (state_32227[(10)]);
var state_32227__$1 = state_32227;
return cljs.core.async.ioc_alts_BANG_(state_32227__$1,(7),inst_32197);
} else {
if((state_val_32228 === (6))){
var inst_32223 = (state_32227[(2)]);
var state_32227__$1 = state_32227;
var statearr_32234_33798 = state_32227__$1;
(statearr_32234_33798[(2)] = inst_32223);

(statearr_32234_33798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (3))){
var inst_32225 = (state_32227[(2)]);
var state_32227__$1 = state_32227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32227__$1,inst_32225);
} else {
if((state_val_32228 === (2))){
var inst_32197 = (state_32227[(10)]);
var inst_32199 = cljs.core.count(inst_32197);
var inst_32200 = (inst_32199 > (0));
var state_32227__$1 = state_32227;
if(cljs.core.truth_(inst_32200)){
var statearr_32236_33799 = state_32227__$1;
(statearr_32236_33799[(1)] = (4));

} else {
var statearr_32237_33800 = state_32227__$1;
(statearr_32237_33800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (11))){
var inst_32197 = (state_32227[(10)]);
var inst_32216 = (state_32227[(2)]);
var tmp32235 = inst_32197;
var inst_32197__$1 = tmp32235;
var state_32227__$1 = (function (){var statearr_32238 = state_32227;
(statearr_32238[(11)] = inst_32216);

(statearr_32238[(10)] = inst_32197__$1);

return statearr_32238;
})();
var statearr_32239_33802 = state_32227__$1;
(statearr_32239_33802[(2)] = null);

(statearr_32239_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (9))){
var inst_32207 = (state_32227[(7)]);
var state_32227__$1 = state_32227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32227__$1,(11),out,inst_32207);
} else {
if((state_val_32228 === (5))){
var inst_32221 = cljs.core.async.close_BANG_(out);
var state_32227__$1 = state_32227;
var statearr_32240_33810 = state_32227__$1;
(statearr_32240_33810[(2)] = inst_32221);

(statearr_32240_33810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (10))){
var inst_32219 = (state_32227[(2)]);
var state_32227__$1 = state_32227;
var statearr_32241_33811 = state_32227__$1;
(statearr_32241_33811[(2)] = inst_32219);

(statearr_32241_33811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32228 === (8))){
var inst_32208 = (state_32227[(9)]);
var inst_32207 = (state_32227[(7)]);
var inst_32197 = (state_32227[(10)]);
var inst_32206 = (state_32227[(8)]);
var inst_32211 = (function (){var cs = inst_32197;
var vec__32202 = inst_32206;
var v = inst_32207;
var c = inst_32208;
return ((function (cs,vec__32202,v,c,inst_32208,inst_32207,inst_32197,inst_32206,state_val_32228,c__30812__auto___33793,out){
return (function (p1__32193_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32193_SHARP_);
});
;})(cs,vec__32202,v,c,inst_32208,inst_32207,inst_32197,inst_32206,state_val_32228,c__30812__auto___33793,out))
})();
var inst_32212 = cljs.core.filterv(inst_32211,inst_32197);
var inst_32197__$1 = inst_32212;
var state_32227__$1 = (function (){var statearr_32242 = state_32227;
(statearr_32242[(10)] = inst_32197__$1);

return statearr_32242;
})();
var statearr_32243_33825 = state_32227__$1;
(statearr_32243_33825[(2)] = null);

(statearr_32243_33825[(1)] = (2));


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
});})(c__30812__auto___33793,out))
;
return ((function (switch__30584__auto__,c__30812__auto___33793,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32244[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32244[(1)] = (1));

return statearr_32244;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32227){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32227);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32245){if((e32245 instanceof Object)){
var ex__30588__auto__ = e32245;
var statearr_32246_33826 = state_32227;
(statearr_32246_33826[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33864 = state_32227;
state_32227 = G__33864;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33793,out))
})();
var state__30814__auto__ = (function (){var statearr_32247 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32247[(6)] = c__30812__auto___33793);

return statearr_32247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33793,out))
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
var G__32253 = arguments.length;
switch (G__32253) {
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
var c__30812__auto___33869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___33869,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___33869,out){
return (function (state_32282){
var state_val_32283 = (state_32282[(1)]);
if((state_val_32283 === (7))){
var inst_32264 = (state_32282[(7)]);
var inst_32264__$1 = (state_32282[(2)]);
var inst_32265 = (inst_32264__$1 == null);
var inst_32266 = cljs.core.not(inst_32265);
var state_32282__$1 = (function (){var statearr_32284 = state_32282;
(statearr_32284[(7)] = inst_32264__$1);

return statearr_32284;
})();
if(inst_32266){
var statearr_32285_33871 = state_32282__$1;
(statearr_32285_33871[(1)] = (8));

} else {
var statearr_32290_33872 = state_32282__$1;
(statearr_32290_33872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (1))){
var inst_32259 = (0);
var state_32282__$1 = (function (){var statearr_32291 = state_32282;
(statearr_32291[(8)] = inst_32259);

return statearr_32291;
})();
var statearr_32292_33873 = state_32282__$1;
(statearr_32292_33873[(2)] = null);

(statearr_32292_33873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (4))){
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32282__$1,(7),ch);
} else {
if((state_val_32283 === (6))){
var inst_32277 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32293_33876 = state_32282__$1;
(statearr_32293_33876[(2)] = inst_32277);

(statearr_32293_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (3))){
var inst_32279 = (state_32282[(2)]);
var inst_32280 = cljs.core.async.close_BANG_(out);
var state_32282__$1 = (function (){var statearr_32294 = state_32282;
(statearr_32294[(9)] = inst_32279);

return statearr_32294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32282__$1,inst_32280);
} else {
if((state_val_32283 === (2))){
var inst_32259 = (state_32282[(8)]);
var inst_32261 = (inst_32259 < n);
var state_32282__$1 = state_32282;
if(cljs.core.truth_(inst_32261)){
var statearr_32295_33878 = state_32282__$1;
(statearr_32295_33878[(1)] = (4));

} else {
var statearr_32296_33879 = state_32282__$1;
(statearr_32296_33879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (11))){
var inst_32259 = (state_32282[(8)]);
var inst_32269 = (state_32282[(2)]);
var inst_32270 = (inst_32259 + (1));
var inst_32259__$1 = inst_32270;
var state_32282__$1 = (function (){var statearr_32297 = state_32282;
(statearr_32297[(10)] = inst_32269);

(statearr_32297[(8)] = inst_32259__$1);

return statearr_32297;
})();
var statearr_32298_33881 = state_32282__$1;
(statearr_32298_33881[(2)] = null);

(statearr_32298_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (9))){
var state_32282__$1 = state_32282;
var statearr_32299_33882 = state_32282__$1;
(statearr_32299_33882[(2)] = null);

(statearr_32299_33882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (5))){
var state_32282__$1 = state_32282;
var statearr_32300_33883 = state_32282__$1;
(statearr_32300_33883[(2)] = null);

(statearr_32300_33883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (10))){
var inst_32274 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32301_33884 = state_32282__$1;
(statearr_32301_33884[(2)] = inst_32274);

(statearr_32301_33884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (8))){
var inst_32264 = (state_32282[(7)]);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32282__$1,(11),out,inst_32264);
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
});})(c__30812__auto___33869,out))
;
return ((function (switch__30584__auto__,c__30812__auto___33869,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32302[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32302[(1)] = (1));

return statearr_32302;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32282){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32282);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32303){if((e32303 instanceof Object)){
var ex__30588__auto__ = e32303;
var statearr_32304_33903 = state_32282;
(statearr_32304_33903[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33912 = state_32282;
state_32282 = G__33912;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___33869,out))
})();
var state__30814__auto__ = (function (){var statearr_32305 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32305[(6)] = c__30812__auto___33869);

return statearr_32305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___33869,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32307 = (function (f,ch,meta32308){
this.f = f;
this.ch = ch;
this.meta32308 = meta32308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32309,meta32308__$1){
var self__ = this;
var _32309__$1 = this;
return (new cljs.core.async.t_cljs$core$async32307(self__.f,self__.ch,meta32308__$1));
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32309){
var self__ = this;
var _32309__$1 = this;
return self__.meta32308;
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32310 = (function (f,ch,meta32308,_,fn1,meta32311){
this.f = f;
this.ch = ch;
this.meta32308 = meta32308;
this._ = _;
this.fn1 = fn1;
this.meta32311 = meta32311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32312,meta32311__$1){
var self__ = this;
var _32312__$1 = this;
return (new cljs.core.async.t_cljs$core$async32310(self__.f,self__.ch,self__.meta32308,self__._,self__.fn1,meta32311__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32312){
var self__ = this;
var _32312__$1 = this;
return self__.meta32311;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32306_SHARP_){
var G__32313 = (((p1__32306_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32306_SHARP_) : self__.f.call(null,p1__32306_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32313) : f1.call(null,G__32313));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32308","meta32308",-1477013793,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32307","cljs.core.async/t_cljs$core$async32307",1170332114,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32311","meta32311",529177708,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32310";

cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32310");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32310.
 */
cljs.core.async.__GT_t_cljs$core$async32310 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32310(f__$1,ch__$1,meta32308__$1,___$2,fn1__$1,meta32311){
return (new cljs.core.async.t_cljs$core$async32310(f__$1,ch__$1,meta32308__$1,___$2,fn1__$1,meta32311));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32310(self__.f,self__.ch,self__.meta32308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32325 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32325) : self__.f.call(null,G__32325));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32308","meta32308",-1477013793,null)], null);
});

cljs.core.async.t_cljs$core$async32307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32307";

cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32307");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32307.
 */
cljs.core.async.__GT_t_cljs$core$async32307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32307(f__$1,ch__$1,meta32308){
return (new cljs.core.async.t_cljs$core$async32307(f__$1,ch__$1,meta32308));
});

}

return (new cljs.core.async.t_cljs$core$async32307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32331 = (function (f,ch,meta32332){
this.f = f;
this.ch = ch;
this.meta32332 = meta32332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32333,meta32332__$1){
var self__ = this;
var _32333__$1 = this;
return (new cljs.core.async.t_cljs$core$async32331(self__.f,self__.ch,meta32332__$1));
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32333){
var self__ = this;
var _32333__$1 = this;
return self__.meta32332;
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32332","meta32332",1136831492,null)], null);
});

cljs.core.async.t_cljs$core$async32331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32331";

cljs.core.async.t_cljs$core$async32331.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32331");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32331.
 */
cljs.core.async.__GT_t_cljs$core$async32331 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32331(f__$1,ch__$1,meta32332){
return (new cljs.core.async.t_cljs$core$async32331(f__$1,ch__$1,meta32332));
});

}

return (new cljs.core.async.t_cljs$core$async32331(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32334 = (function (p,ch,meta32335){
this.p = p;
this.ch = ch;
this.meta32335 = meta32335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32336,meta32335__$1){
var self__ = this;
var _32336__$1 = this;
return (new cljs.core.async.t_cljs$core$async32334(self__.p,self__.ch,meta32335__$1));
});

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32336){
var self__ = this;
var _32336__$1 = this;
return self__.meta32335;
});

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32335","meta32335",2145125917,null)], null);
});

cljs.core.async.t_cljs$core$async32334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32334";

cljs.core.async.t_cljs$core$async32334.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32334");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32334.
 */
cljs.core.async.__GT_t_cljs$core$async32334 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32334(p__$1,ch__$1,meta32335){
return (new cljs.core.async.t_cljs$core$async32334(p__$1,ch__$1,meta32335));
});

}

return (new cljs.core.async.t_cljs$core$async32334(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32344 = arguments.length;
switch (G__32344) {
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
var c__30812__auto___34014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___34014,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___34014,out){
return (function (state_32370){
var state_val_32371 = (state_32370[(1)]);
if((state_val_32371 === (7))){
var inst_32366 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32372_34022 = state_32370__$1;
(statearr_32372_34022[(2)] = inst_32366);

(statearr_32372_34022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (1))){
var state_32370__$1 = state_32370;
var statearr_32373_34027 = state_32370__$1;
(statearr_32373_34027[(2)] = null);

(statearr_32373_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (4))){
var inst_32351 = (state_32370[(7)]);
var inst_32351__$1 = (state_32370[(2)]);
var inst_32353 = (inst_32351__$1 == null);
var state_32370__$1 = (function (){var statearr_32374 = state_32370;
(statearr_32374[(7)] = inst_32351__$1);

return statearr_32374;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32375_34028 = state_32370__$1;
(statearr_32375_34028[(1)] = (5));

} else {
var statearr_32376_34029 = state_32370__$1;
(statearr_32376_34029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (6))){
var inst_32351 = (state_32370[(7)]);
var inst_32357 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32351) : p.call(null,inst_32351));
var state_32370__$1 = state_32370;
if(cljs.core.truth_(inst_32357)){
var statearr_32377_34037 = state_32370__$1;
(statearr_32377_34037[(1)] = (8));

} else {
var statearr_32378_34041 = state_32370__$1;
(statearr_32378_34041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (3))){
var inst_32368 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32370__$1,inst_32368);
} else {
if((state_val_32371 === (2))){
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32370__$1,(4),ch);
} else {
if((state_val_32371 === (11))){
var inst_32360 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32379_34053 = state_32370__$1;
(statearr_32379_34053[(2)] = inst_32360);

(statearr_32379_34053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (9))){
var state_32370__$1 = state_32370;
var statearr_32380_34057 = state_32370__$1;
(statearr_32380_34057[(2)] = null);

(statearr_32380_34057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (5))){
var inst_32355 = cljs.core.async.close_BANG_(out);
var state_32370__$1 = state_32370;
var statearr_32381_34062 = state_32370__$1;
(statearr_32381_34062[(2)] = inst_32355);

(statearr_32381_34062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (10))){
var inst_32363 = (state_32370[(2)]);
var state_32370__$1 = (function (){var statearr_32382 = state_32370;
(statearr_32382[(8)] = inst_32363);

return statearr_32382;
})();
var statearr_32383_34063 = state_32370__$1;
(statearr_32383_34063[(2)] = null);

(statearr_32383_34063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (8))){
var inst_32351 = (state_32370[(7)]);
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32370__$1,(11),out,inst_32351);
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
});})(c__30812__auto___34014,out))
;
return ((function (switch__30584__auto__,c__30812__auto___34014,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32385 = [null,null,null,null,null,null,null,null,null];
(statearr_32385[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32385[(1)] = (1));

return statearr_32385;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32370){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32370);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32386){if((e32386 instanceof Object)){
var ex__30588__auto__ = e32386;
var statearr_32387_34068 = state_32370;
(statearr_32387_34068[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34069 = state_32370;
state_32370 = G__34069;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___34014,out))
})();
var state__30814__auto__ = (function (){var statearr_32392 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32392[(6)] = c__30812__auto___34014);

return statearr_32392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___34014,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32395 = arguments.length;
switch (G__32395) {
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
var c__30812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto__){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto__){
return (function (state_32467){
var state_val_32468 = (state_32467[(1)]);
if((state_val_32468 === (7))){
var inst_32463 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32472_34075 = state_32467__$1;
(statearr_32472_34075[(2)] = inst_32463);

(statearr_32472_34075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (20))){
var inst_32431 = (state_32467[(7)]);
var inst_32444 = (state_32467[(2)]);
var inst_32445 = cljs.core.next(inst_32431);
var inst_32413 = inst_32445;
var inst_32414 = null;
var inst_32415 = (0);
var inst_32416 = (0);
var state_32467__$1 = (function (){var statearr_32474 = state_32467;
(statearr_32474[(8)] = inst_32414);

(statearr_32474[(9)] = inst_32444);

(statearr_32474[(10)] = inst_32416);

(statearr_32474[(11)] = inst_32415);

(statearr_32474[(12)] = inst_32413);

return statearr_32474;
})();
var statearr_32475_34084 = state_32467__$1;
(statearr_32475_34084[(2)] = null);

(statearr_32475_34084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (1))){
var state_32467__$1 = state_32467;
var statearr_32476_34085 = state_32467__$1;
(statearr_32476_34085[(2)] = null);

(statearr_32476_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (4))){
var inst_32398 = (state_32467[(13)]);
var inst_32398__$1 = (state_32467[(2)]);
var inst_32400 = (inst_32398__$1 == null);
var state_32467__$1 = (function (){var statearr_32477 = state_32467;
(statearr_32477[(13)] = inst_32398__$1);

return statearr_32477;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32481_34087 = state_32467__$1;
(statearr_32481_34087[(1)] = (5));

} else {
var statearr_32482_34088 = state_32467__$1;
(statearr_32482_34088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (15))){
var state_32467__$1 = state_32467;
var statearr_32486_34092 = state_32467__$1;
(statearr_32486_34092[(2)] = null);

(statearr_32486_34092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (21))){
var state_32467__$1 = state_32467;
var statearr_32488_34093 = state_32467__$1;
(statearr_32488_34093[(2)] = null);

(statearr_32488_34093[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (13))){
var inst_32414 = (state_32467[(8)]);
var inst_32416 = (state_32467[(10)]);
var inst_32415 = (state_32467[(11)]);
var inst_32413 = (state_32467[(12)]);
var inst_32424 = (state_32467[(2)]);
var inst_32426 = (inst_32416 + (1));
var tmp32483 = inst_32414;
var tmp32484 = inst_32415;
var tmp32485 = inst_32413;
var inst_32413__$1 = tmp32485;
var inst_32414__$1 = tmp32483;
var inst_32415__$1 = tmp32484;
var inst_32416__$1 = inst_32426;
var state_32467__$1 = (function (){var statearr_32490 = state_32467;
(statearr_32490[(14)] = inst_32424);

(statearr_32490[(8)] = inst_32414__$1);

(statearr_32490[(10)] = inst_32416__$1);

(statearr_32490[(11)] = inst_32415__$1);

(statearr_32490[(12)] = inst_32413__$1);

return statearr_32490;
})();
var statearr_32491_34094 = state_32467__$1;
(statearr_32491_34094[(2)] = null);

(statearr_32491_34094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (22))){
var state_32467__$1 = state_32467;
var statearr_32493_34095 = state_32467__$1;
(statearr_32493_34095[(2)] = null);

(statearr_32493_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (6))){
var inst_32398 = (state_32467[(13)]);
var inst_32411 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32398) : f.call(null,inst_32398));
var inst_32412 = cljs.core.seq(inst_32411);
var inst_32413 = inst_32412;
var inst_32414 = null;
var inst_32415 = (0);
var inst_32416 = (0);
var state_32467__$1 = (function (){var statearr_32494 = state_32467;
(statearr_32494[(8)] = inst_32414);

(statearr_32494[(10)] = inst_32416);

(statearr_32494[(11)] = inst_32415);

(statearr_32494[(12)] = inst_32413);

return statearr_32494;
})();
var statearr_32495_34096 = state_32467__$1;
(statearr_32495_34096[(2)] = null);

(statearr_32495_34096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (17))){
var inst_32431 = (state_32467[(7)]);
var inst_32436 = cljs.core.chunk_first(inst_32431);
var inst_32437 = cljs.core.chunk_rest(inst_32431);
var inst_32438 = cljs.core.count(inst_32436);
var inst_32413 = inst_32437;
var inst_32414 = inst_32436;
var inst_32415 = inst_32438;
var inst_32416 = (0);
var state_32467__$1 = (function (){var statearr_32496 = state_32467;
(statearr_32496[(8)] = inst_32414);

(statearr_32496[(10)] = inst_32416);

(statearr_32496[(11)] = inst_32415);

(statearr_32496[(12)] = inst_32413);

return statearr_32496;
})();
var statearr_32498_34097 = state_32467__$1;
(statearr_32498_34097[(2)] = null);

(statearr_32498_34097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (3))){
var inst_32465 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32467__$1,inst_32465);
} else {
if((state_val_32468 === (12))){
var inst_32453 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32503_34098 = state_32467__$1;
(statearr_32503_34098[(2)] = inst_32453);

(statearr_32503_34098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (2))){
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32467__$1,(4),in$);
} else {
if((state_val_32468 === (23))){
var inst_32461 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32504_34099 = state_32467__$1;
(statearr_32504_34099[(2)] = inst_32461);

(statearr_32504_34099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (19))){
var inst_32448 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32505_34102 = state_32467__$1;
(statearr_32505_34102[(2)] = inst_32448);

(statearr_32505_34102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (11))){
var inst_32431 = (state_32467[(7)]);
var inst_32413 = (state_32467[(12)]);
var inst_32431__$1 = cljs.core.seq(inst_32413);
var state_32467__$1 = (function (){var statearr_32506 = state_32467;
(statearr_32506[(7)] = inst_32431__$1);

return statearr_32506;
})();
if(inst_32431__$1){
var statearr_32508_34103 = state_32467__$1;
(statearr_32508_34103[(1)] = (14));

} else {
var statearr_32509_34104 = state_32467__$1;
(statearr_32509_34104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (9))){
var inst_32455 = (state_32467[(2)]);
var inst_32456 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32467__$1 = (function (){var statearr_32513 = state_32467;
(statearr_32513[(15)] = inst_32455);

return statearr_32513;
})();
if(cljs.core.truth_(inst_32456)){
var statearr_32514_34106 = state_32467__$1;
(statearr_32514_34106[(1)] = (21));

} else {
var statearr_32515_34107 = state_32467__$1;
(statearr_32515_34107[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (5))){
var inst_32402 = cljs.core.async.close_BANG_(out);
var state_32467__$1 = state_32467;
var statearr_32518_34108 = state_32467__$1;
(statearr_32518_34108[(2)] = inst_32402);

(statearr_32518_34108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (14))){
var inst_32431 = (state_32467[(7)]);
var inst_32433 = cljs.core.chunked_seq_QMARK_(inst_32431);
var state_32467__$1 = state_32467;
if(inst_32433){
var statearr_32519_34110 = state_32467__$1;
(statearr_32519_34110[(1)] = (17));

} else {
var statearr_32520_34111 = state_32467__$1;
(statearr_32520_34111[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (16))){
var inst_32451 = (state_32467[(2)]);
var state_32467__$1 = state_32467;
var statearr_32521_34112 = state_32467__$1;
(statearr_32521_34112[(2)] = inst_32451);

(statearr_32521_34112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32468 === (10))){
var inst_32414 = (state_32467[(8)]);
var inst_32416 = (state_32467[(10)]);
var inst_32421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32414,inst_32416);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32467__$1,(13),out,inst_32421);
} else {
if((state_val_32468 === (18))){
var inst_32431 = (state_32467[(7)]);
var inst_32442 = cljs.core.first(inst_32431);
var state_32467__$1 = state_32467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32467__$1,(20),out,inst_32442);
} else {
if((state_val_32468 === (8))){
var inst_32416 = (state_32467[(10)]);
var inst_32415 = (state_32467[(11)]);
var inst_32418 = (inst_32416 < inst_32415);
var inst_32419 = inst_32418;
var state_32467__$1 = state_32467;
if(cljs.core.truth_(inst_32419)){
var statearr_32526_34113 = state_32467__$1;
(statearr_32526_34113[(1)] = (10));

} else {
var statearr_32527_34114 = state_32467__$1;
(statearr_32527_34114[(1)] = (11));

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
});})(c__30812__auto__))
;
return ((function (switch__30584__auto__,c__30812__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____0 = (function (){
var statearr_32528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32528[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__);

(statearr_32528[(1)] = (1));

return statearr_32528;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____1 = (function (state_32467){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32467);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32529){if((e32529 instanceof Object)){
var ex__30588__auto__ = e32529;
var statearr_32530_34122 = state_32467;
(statearr_32530_34122[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34123 = state_32467;
state_32467 = G__34123;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__ = function(state_32467){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____1.call(this,state_32467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto__))
})();
var state__30814__auto__ = (function (){var statearr_32531 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32531[(6)] = c__30812__auto__);

return statearr_32531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto__))
);

return c__30812__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32533 = arguments.length;
switch (G__32533) {
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
var G__32536 = arguments.length;
switch (G__32536) {
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
var G__32538 = arguments.length;
switch (G__32538) {
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
var c__30812__auto___34134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___34134,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___34134,out){
return (function (state_32562){
var state_val_32563 = (state_32562[(1)]);
if((state_val_32563 === (7))){
var inst_32557 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32565_34135 = state_32562__$1;
(statearr_32565_34135[(2)] = inst_32557);

(statearr_32565_34135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (1))){
var inst_32539 = null;
var state_32562__$1 = (function (){var statearr_32566 = state_32562;
(statearr_32566[(7)] = inst_32539);

return statearr_32566;
})();
var statearr_32568_34136 = state_32562__$1;
(statearr_32568_34136[(2)] = null);

(statearr_32568_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (4))){
var inst_32542 = (state_32562[(8)]);
var inst_32542__$1 = (state_32562[(2)]);
var inst_32543 = (inst_32542__$1 == null);
var inst_32544 = cljs.core.not(inst_32543);
var state_32562__$1 = (function (){var statearr_32569 = state_32562;
(statearr_32569[(8)] = inst_32542__$1);

return statearr_32569;
})();
if(inst_32544){
var statearr_32570_34140 = state_32562__$1;
(statearr_32570_34140[(1)] = (5));

} else {
var statearr_32571_34141 = state_32562__$1;
(statearr_32571_34141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (6))){
var state_32562__$1 = state_32562;
var statearr_32572_34142 = state_32562__$1;
(statearr_32572_34142[(2)] = null);

(statearr_32572_34142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (3))){
var inst_32559 = (state_32562[(2)]);
var inst_32560 = cljs.core.async.close_BANG_(out);
var state_32562__$1 = (function (){var statearr_32573 = state_32562;
(statearr_32573[(9)] = inst_32559);

return statearr_32573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32562__$1,inst_32560);
} else {
if((state_val_32563 === (2))){
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32562__$1,(4),ch);
} else {
if((state_val_32563 === (11))){
var inst_32542 = (state_32562[(8)]);
var inst_32551 = (state_32562[(2)]);
var inst_32539 = inst_32542;
var state_32562__$1 = (function (){var statearr_32586 = state_32562;
(statearr_32586[(10)] = inst_32551);

(statearr_32586[(7)] = inst_32539);

return statearr_32586;
})();
var statearr_32589_34152 = state_32562__$1;
(statearr_32589_34152[(2)] = null);

(statearr_32589_34152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (9))){
var inst_32542 = (state_32562[(8)]);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32562__$1,(11),out,inst_32542);
} else {
if((state_val_32563 === (5))){
var inst_32539 = (state_32562[(7)]);
var inst_32542 = (state_32562[(8)]);
var inst_32546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32542,inst_32539);
var state_32562__$1 = state_32562;
if(inst_32546){
var statearr_32593_34153 = state_32562__$1;
(statearr_32593_34153[(1)] = (8));

} else {
var statearr_32594_34154 = state_32562__$1;
(statearr_32594_34154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (10))){
var inst_32554 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32596_34155 = state_32562__$1;
(statearr_32596_34155[(2)] = inst_32554);

(statearr_32596_34155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (8))){
var inst_32539 = (state_32562[(7)]);
var tmp32592 = inst_32539;
var inst_32539__$1 = tmp32592;
var state_32562__$1 = (function (){var statearr_32598 = state_32562;
(statearr_32598[(7)] = inst_32539__$1);

return statearr_32598;
})();
var statearr_32600_34156 = state_32562__$1;
(statearr_32600_34156[(2)] = null);

(statearr_32600_34156[(1)] = (2));


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
});})(c__30812__auto___34134,out))
;
return ((function (switch__30584__auto__,c__30812__auto___34134,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32601[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32601[(1)] = (1));

return statearr_32601;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32562){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32562);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32602){if((e32602 instanceof Object)){
var ex__30588__auto__ = e32602;
var statearr_32603_34158 = state_32562;
(statearr_32603_34158[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34159 = state_32562;
state_32562 = G__34159;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___34134,out))
})();
var state__30814__auto__ = (function (){var statearr_32604 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32604[(6)] = c__30812__auto___34134);

return statearr_32604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___34134,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32606 = arguments.length;
switch (G__32606) {
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
var c__30812__auto___34167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___34167,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___34167,out){
return (function (state_32644){
var state_val_32645 = (state_32644[(1)]);
if((state_val_32645 === (7))){
var inst_32640 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32646_34168 = state_32644__$1;
(statearr_32646_34168[(2)] = inst_32640);

(statearr_32646_34168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (1))){
var inst_32607 = (new Array(n));
var inst_32608 = inst_32607;
var inst_32609 = (0);
var state_32644__$1 = (function (){var statearr_32669 = state_32644;
(statearr_32669[(7)] = inst_32609);

(statearr_32669[(8)] = inst_32608);

return statearr_32669;
})();
var statearr_32670_34169 = state_32644__$1;
(statearr_32670_34169[(2)] = null);

(statearr_32670_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (4))){
var inst_32612 = (state_32644[(9)]);
var inst_32612__$1 = (state_32644[(2)]);
var inst_32613 = (inst_32612__$1 == null);
var inst_32614 = cljs.core.not(inst_32613);
var state_32644__$1 = (function (){var statearr_32671 = state_32644;
(statearr_32671[(9)] = inst_32612__$1);

return statearr_32671;
})();
if(inst_32614){
var statearr_32672_34174 = state_32644__$1;
(statearr_32672_34174[(1)] = (5));

} else {
var statearr_32673_34175 = state_32644__$1;
(statearr_32673_34175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (15))){
var inst_32634 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32674_34179 = state_32644__$1;
(statearr_32674_34179[(2)] = inst_32634);

(statearr_32674_34179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (13))){
var state_32644__$1 = state_32644;
var statearr_32675_34180 = state_32644__$1;
(statearr_32675_34180[(2)] = null);

(statearr_32675_34180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (6))){
var inst_32609 = (state_32644[(7)]);
var inst_32630 = (inst_32609 > (0));
var state_32644__$1 = state_32644;
if(cljs.core.truth_(inst_32630)){
var statearr_32676_34181 = state_32644__$1;
(statearr_32676_34181[(1)] = (12));

} else {
var statearr_32677_34182 = state_32644__$1;
(statearr_32677_34182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (3))){
var inst_32642 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32644__$1,inst_32642);
} else {
if((state_val_32645 === (12))){
var inst_32608 = (state_32644[(8)]);
var inst_32632 = cljs.core.vec(inst_32608);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32644__$1,(15),out,inst_32632);
} else {
if((state_val_32645 === (2))){
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32644__$1,(4),ch);
} else {
if((state_val_32645 === (11))){
var inst_32624 = (state_32644[(2)]);
var inst_32625 = (new Array(n));
var inst_32608 = inst_32625;
var inst_32609 = (0);
var state_32644__$1 = (function (){var statearr_32682 = state_32644;
(statearr_32682[(7)] = inst_32609);

(statearr_32682[(8)] = inst_32608);

(statearr_32682[(10)] = inst_32624);

return statearr_32682;
})();
var statearr_32683_34197 = state_32644__$1;
(statearr_32683_34197[(2)] = null);

(statearr_32683_34197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (9))){
var inst_32608 = (state_32644[(8)]);
var inst_32622 = cljs.core.vec(inst_32608);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32644__$1,(11),out,inst_32622);
} else {
if((state_val_32645 === (5))){
var inst_32609 = (state_32644[(7)]);
var inst_32608 = (state_32644[(8)]);
var inst_32612 = (state_32644[(9)]);
var inst_32617 = (state_32644[(11)]);
var inst_32616 = (inst_32608[inst_32609] = inst_32612);
var inst_32617__$1 = (inst_32609 + (1));
var inst_32618 = (inst_32617__$1 < n);
var state_32644__$1 = (function (){var statearr_32688 = state_32644;
(statearr_32688[(12)] = inst_32616);

(statearr_32688[(11)] = inst_32617__$1);

return statearr_32688;
})();
if(cljs.core.truth_(inst_32618)){
var statearr_32689_34202 = state_32644__$1;
(statearr_32689_34202[(1)] = (8));

} else {
var statearr_32691_34207 = state_32644__$1;
(statearr_32691_34207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (14))){
var inst_32637 = (state_32644[(2)]);
var inst_32638 = cljs.core.async.close_BANG_(out);
var state_32644__$1 = (function (){var statearr_32694 = state_32644;
(statearr_32694[(13)] = inst_32637);

return statearr_32694;
})();
var statearr_32696_34210 = state_32644__$1;
(statearr_32696_34210[(2)] = inst_32638);

(statearr_32696_34210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (10))){
var inst_32628 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32698_34212 = state_32644__$1;
(statearr_32698_34212[(2)] = inst_32628);

(statearr_32698_34212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (8))){
var inst_32608 = (state_32644[(8)]);
var inst_32617 = (state_32644[(11)]);
var tmp32693 = inst_32608;
var inst_32608__$1 = tmp32693;
var inst_32609 = inst_32617;
var state_32644__$1 = (function (){var statearr_32701 = state_32644;
(statearr_32701[(7)] = inst_32609);

(statearr_32701[(8)] = inst_32608__$1);

return statearr_32701;
})();
var statearr_32702_34213 = state_32644__$1;
(statearr_32702_34213[(2)] = null);

(statearr_32702_34213[(1)] = (2));


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
});})(c__30812__auto___34167,out))
;
return ((function (switch__30584__auto__,c__30812__auto___34167,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32710[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32710[(1)] = (1));

return statearr_32710;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32644){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32644);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32711){if((e32711 instanceof Object)){
var ex__30588__auto__ = e32711;
var statearr_32712_34251 = state_32644;
(statearr_32712_34251[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34254 = state_32644;
state_32644 = G__34254;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___34167,out))
})();
var state__30814__auto__ = (function (){var statearr_32713 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32713[(6)] = c__30812__auto___34167);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___34167,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32715 = arguments.length;
switch (G__32715) {
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
var c__30812__auto___34269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30812__auto___34269,out){
return (function (){
var f__30813__auto__ = (function (){var switch__30584__auto__ = ((function (c__30812__auto___34269,out){
return (function (state_32757){
var state_val_32758 = (state_32757[(1)]);
if((state_val_32758 === (7))){
var inst_32753 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32792_34272 = state_32757__$1;
(statearr_32792_34272[(2)] = inst_32753);

(statearr_32792_34272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (1))){
var inst_32716 = [];
var inst_32717 = inst_32716;
var inst_32718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32757__$1 = (function (){var statearr_32793 = state_32757;
(statearr_32793[(7)] = inst_32718);

(statearr_32793[(8)] = inst_32717);

return statearr_32793;
})();
var statearr_32795_34273 = state_32757__$1;
(statearr_32795_34273[(2)] = null);

(statearr_32795_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (4))){
var inst_32721 = (state_32757[(9)]);
var inst_32721__$1 = (state_32757[(2)]);
var inst_32722 = (inst_32721__$1 == null);
var inst_32723 = cljs.core.not(inst_32722);
var state_32757__$1 = (function (){var statearr_32798 = state_32757;
(statearr_32798[(9)] = inst_32721__$1);

return statearr_32798;
})();
if(inst_32723){
var statearr_32799_34275 = state_32757__$1;
(statearr_32799_34275[(1)] = (5));

} else {
var statearr_32800_34276 = state_32757__$1;
(statearr_32800_34276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (15))){
var inst_32747 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32801_34277 = state_32757__$1;
(statearr_32801_34277[(2)] = inst_32747);

(statearr_32801_34277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (13))){
var state_32757__$1 = state_32757;
var statearr_32802_34278 = state_32757__$1;
(statearr_32802_34278[(2)] = null);

(statearr_32802_34278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (6))){
var inst_32717 = (state_32757[(8)]);
var inst_32742 = inst_32717.length;
var inst_32743 = (inst_32742 > (0));
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32743)){
var statearr_32803_34283 = state_32757__$1;
(statearr_32803_34283[(1)] = (12));

} else {
var statearr_32804_34284 = state_32757__$1;
(statearr_32804_34284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (3))){
var inst_32755 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32757__$1,inst_32755);
} else {
if((state_val_32758 === (12))){
var inst_32717 = (state_32757[(8)]);
var inst_32745 = cljs.core.vec(inst_32717);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32757__$1,(15),out,inst_32745);
} else {
if((state_val_32758 === (2))){
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32757__$1,(4),ch);
} else {
if((state_val_32758 === (11))){
var inst_32725 = (state_32757[(10)]);
var inst_32721 = (state_32757[(9)]);
var inst_32735 = (state_32757[(2)]);
var inst_32736 = [];
var inst_32737 = inst_32736.push(inst_32721);
var inst_32717 = inst_32736;
var inst_32718 = inst_32725;
var state_32757__$1 = (function (){var statearr_32805 = state_32757;
(statearr_32805[(11)] = inst_32737);

(statearr_32805[(12)] = inst_32735);

(statearr_32805[(7)] = inst_32718);

(statearr_32805[(8)] = inst_32717);

return statearr_32805;
})();
var statearr_32806_34287 = state_32757__$1;
(statearr_32806_34287[(2)] = null);

(statearr_32806_34287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (9))){
var inst_32717 = (state_32757[(8)]);
var inst_32733 = cljs.core.vec(inst_32717);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32757__$1,(11),out,inst_32733);
} else {
if((state_val_32758 === (5))){
var inst_32725 = (state_32757[(10)]);
var inst_32718 = (state_32757[(7)]);
var inst_32721 = (state_32757[(9)]);
var inst_32725__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32721) : f.call(null,inst_32721));
var inst_32726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32725__$1,inst_32718);
var inst_32727 = cljs.core.keyword_identical_QMARK_(inst_32718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32728 = ((inst_32726) || (inst_32727));
var state_32757__$1 = (function (){var statearr_32807 = state_32757;
(statearr_32807[(10)] = inst_32725__$1);

return statearr_32807;
})();
if(cljs.core.truth_(inst_32728)){
var statearr_32808_34292 = state_32757__$1;
(statearr_32808_34292[(1)] = (8));

} else {
var statearr_32809_34293 = state_32757__$1;
(statearr_32809_34293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (14))){
var inst_32750 = (state_32757[(2)]);
var inst_32751 = cljs.core.async.close_BANG_(out);
var state_32757__$1 = (function (){var statearr_32815 = state_32757;
(statearr_32815[(13)] = inst_32750);

return statearr_32815;
})();
var statearr_32816_34294 = state_32757__$1;
(statearr_32816_34294[(2)] = inst_32751);

(statearr_32816_34294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (10))){
var inst_32740 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32817_34295 = state_32757__$1;
(statearr_32817_34295[(2)] = inst_32740);

(statearr_32817_34295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (8))){
var inst_32725 = (state_32757[(10)]);
var inst_32721 = (state_32757[(9)]);
var inst_32717 = (state_32757[(8)]);
var inst_32730 = inst_32717.push(inst_32721);
var tmp32814 = inst_32717;
var inst_32717__$1 = tmp32814;
var inst_32718 = inst_32725;
var state_32757__$1 = (function (){var statearr_32818 = state_32757;
(statearr_32818[(7)] = inst_32718);

(statearr_32818[(14)] = inst_32730);

(statearr_32818[(8)] = inst_32717__$1);

return statearr_32818;
})();
var statearr_32822_34296 = state_32757__$1;
(statearr_32822_34296[(2)] = null);

(statearr_32822_34296[(1)] = (2));


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
});})(c__30812__auto___34269,out))
;
return ((function (switch__30584__auto__,c__30812__auto___34269,out){
return (function() {
var cljs$core$async$state_machine__30585__auto__ = null;
var cljs$core$async$state_machine__30585__auto____0 = (function (){
var statearr_32823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32823[(0)] = cljs$core$async$state_machine__30585__auto__);

(statearr_32823[(1)] = (1));

return statearr_32823;
});
var cljs$core$async$state_machine__30585__auto____1 = (function (state_32757){
while(true){
var ret_value__30586__auto__ = (function (){try{while(true){
var result__30587__auto__ = switch__30584__auto__(state_32757);
if(cljs.core.keyword_identical_QMARK_(result__30587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30587__auto__;
}
break;
}
}catch (e32824){if((e32824 instanceof Object)){
var ex__30588__auto__ = e32824;
var statearr_32827_34297 = state_32757;
(statearr_32827_34297[(5)] = ex__30588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34298 = state_32757;
state_32757 = G__34298;
continue;
} else {
return ret_value__30586__auto__;
}
break;
}
});
cljs$core$async$state_machine__30585__auto__ = function(state_32757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30585__auto____1.call(this,state_32757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30585__auto____0;
cljs$core$async$state_machine__30585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30585__auto____1;
return cljs$core$async$state_machine__30585__auto__;
})()
;})(switch__30584__auto__,c__30812__auto___34269,out))
})();
var state__30814__auto__ = (function (){var statearr_32828 = (f__30813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30813__auto__.cljs$core$IFn$_invoke$arity$0() : f__30813__auto__.call(null));
(statearr_32828[(6)] = c__30812__auto___34269);

return statearr_32828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30814__auto__);
});})(c__30812__auto___34269,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
