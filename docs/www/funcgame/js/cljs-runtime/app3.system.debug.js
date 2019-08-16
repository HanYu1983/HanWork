goog.provide('app3.system.debug');
goog.require('cljs.core');
app3.system.debug.logSystem = (function app3$system$debug$logSystem(model,p__36353){
var vec__36354 = p__36353;
var seq__36355 = cljs.core.seq(vec__36354);
var first__36356 = cljs.core.first(seq__36355);
var seq__36355__$1 = cljs.core.next(seq__36355);
var evt = first__36356;
var args = seq__36355__$1;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword(null,"update","update",1045576396))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword(null,"fire","fire",-144730624))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword(null,"keydown","keydown",-629268186))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword(null,"keyup","keyup",-794526927))))))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([evt], 0));



return model;
} else {
return model;
}
});

//# sourceMappingURL=app3.system.debug.js.map
