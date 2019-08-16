goog.provide('app3.weapon.meleeGun');
goog.require('cljs.core');
goog.require('app3.interface$.weapon');
app3.weapon.meleeGun.meleeGun = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"meleeGun","meleeGun",-639914475),new cljs.core.Keyword(null,"hot","hot",1928470441),(0),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
app3.weapon.meleeGun.rotateDir = (function app3$weapon$meleeGun$rotateDir(radians,dir){
var dirV = Vector.create((new Array(cljs.core.first(dir),cljs.core.second(dir),(0))));
var rotV = dirV.rotate(radians,Line.Z);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rotV.elements[(0)]),(rotV.elements[(1)])], null);
});
app3.weapon.meleeGun.createBullet = (function app3$weapon$meleeGun$createBullet(self,plyr,target){
var dir = app3.tool.seek(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(plyr),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(target));
var iter__4523__auto__ = ((function (dir){
return (function app3$weapon$meleeGun$createBullet_$_iter__36037(s__36038){
return (new cljs.core.LazySeq(null,((function (dir){
return (function (){
var s__36038__$1 = s__36038;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36038__$1);
if(temp__5735__auto__){
var s__36038__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36038__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36038__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36040 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36039 = (0);
while(true){
if((i__36039 < size__4522__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36039);
cljs.core.chunk_append(b__36040,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(plyr),new cljs.core.Keyword(null,"velocity","velocity",-581524355),app3.tool.makeLength((15),app3.weapon.meleeGun.rotateDir(a,dir)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"from","from",1815293044),plyr,new cljs.core.Keyword(null,"bullet","bullet",726988937),(0),new cljs.core.Keyword(null,"flyLength","flyLength",-656492776),(100)], null));

var G__36056 = (i__36039 + (1));
i__36039 = G__36056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36040),app3$weapon$meleeGun$createBullet_$_iter__36037(cljs.core.chunk_rest(s__36038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36040),null);
}
} else {
var a = cljs.core.first(s__36038__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(plyr),new cljs.core.Keyword(null,"velocity","velocity",-581524355),app3.tool.makeLength((15),app3.weapon.meleeGun.rotateDir(a,dir)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"from","from",1815293044),plyr,new cljs.core.Keyword(null,"bullet","bullet",726988937),(0),new cljs.core.Keyword(null,"flyLength","flyLength",-656492776),(100)], null),app3$weapon$meleeGun$createBullet_$_iter__36037(cljs.core.rest(s__36038__$2)));
}
} else {
return null;
}
break;
}
});})(dir))
,null,null));
});})(dir))
;
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.2),-0.4)));
});
app3.interface$.weapon.createBullet.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meleeGun","meleeGun",-639914475),(function (self,plyr,target){
return app3.weapon.meleeGun.createBullet(self,plyr,target);
}));

//# sourceMappingURL=app3.weapon.meleeGun.js.map
