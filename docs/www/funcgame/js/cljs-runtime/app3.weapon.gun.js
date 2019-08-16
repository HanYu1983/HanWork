goog.provide('app3.weapon.gun');
goog.require('cljs.core');
goog.require('app3.interface$.weapon');
app3.weapon.gun.gun = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"weapon","weapon",-504830232),new cljs.core.Keyword(null,"gun","gun",972516263),new cljs.core.Keyword(null,"hot","hot",1928470441),(0),new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
app3.weapon.gun.createBullet = (function app3$weapon$gun$createBullet(self,plyr,target){
var dir = app3.tool.seek(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(plyr),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(target));
var vel = app3.tool.makeLength((20),dir);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(plyr),new cljs.core.Keyword(null,"velocity","velocity",-581524355),vel,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"from","from",1815293044),plyr,new cljs.core.Keyword(null,"bullet","bullet",726988937),(0),new cljs.core.Keyword(null,"flyLength","flyLength",-656492776),(1000)], null)], null);
});
app3.interface$.weapon.createBullet.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"gun","gun",972516263),(function (self,plyr,target){
return app3.weapon.gun.createBullet(self,plyr,target);
}));

//# sourceMappingURL=app3.weapon.gun.js.map
