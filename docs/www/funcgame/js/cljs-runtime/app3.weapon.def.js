goog.provide('app3.weapon.def');
goog.require('cljs.core');
goog.require('app3.interface$.weapon');
app3.weapon.def.fire = (function app3$weapon$def$fire(self){
if((new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(self) <= (0))){
return self;
} else {
if((new cljs.core.Keyword(null,"hot","hot",1928470441).cljs$core$IFn$_invoke$arity$1(self) > (0))){
return self;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935),(new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(self) - (1)),new cljs.core.Keyword(null,"hot","hot",1928470441),(10)], null)], 0));
}
}
});
app3.weapon.def.tick = (function app3$weapon$def$tick(self){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.Keyword(null,"hot","hot",1928470441),(function (origin){
var x__4219__auto__ = (origin - (1));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}));
});
app3.weapon.def.bulletCount = (function app3$weapon$def$bulletCount(self){
return new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(self);
});
app3.interface$.weapon.fire.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self){
return app3.weapon.def.fire(self);
}));
app3.interface$.weapon.tick.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self){
return app3.weapon.def.tick(self);
}));
app3.interface$.weapon.bulletCount.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self){
return app3.weapon.def.bulletCount(self);
}));

//# sourceMappingURL=app3.weapon.def.js.map
