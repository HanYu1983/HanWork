goog.provide('app3.tool');
goog.require('cljs.core');
app3.tool.comduce = (function app3$tool$comduce(fns){
return (function (a,c){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,f){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a__$1,c) : f.call(null,a__$1,c));
}),a,fns);
});
});
app3.tool.checkProperty = (function app3$tool$checkProperty(coms,self){
return cljs.core.every_QMARK_((function (p1__35856_SHARP_){
return (p1__35856_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35856_SHARP_.cljs$core$IFn$_invoke$arity$1(self) : p1__35856_SHARP_.call(null,self));
}),coms);
});
app3.tool.seek = (function app3$tool$seek(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,v2,v1);
});
app3.tool.length = (function app3$tool$length(dir){
return Math.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,dir,dir)));
});
app3.tool.makeLength = (function app3$tool$makeLength(l,dir){
var oriLen = app3.tool.length(dir);
var nor = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oriLen,oriLen], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,nor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,l], null));
});
app3.tool.checkCollide = (function app3$tool$checkCollide(v1,v2,len){
return (app3.tool.length(app3.tool.seek(v1,v2)) < len);
});

//# sourceMappingURL=app3.tool.js.map
