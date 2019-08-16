goog.provide('app3.playerImpl');
goog.require('cljs.core');
goog.require('app3.interface$.player');
goog.require('app3.qlearning');
app3.interface$.player.target.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,model,self){
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
if(cljs.core.truth_(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(self))){
return cljs.core.first(enemies);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(self))){
return cljs.core.first(players);
} else {
return (new Error("must have :player or :enemy"));

}
}
}));
app3.interface$.player.updateBrain.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,model,target,self){
var brain = new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(self);
var lastState = new cljs.core.Keyword(null,"lastState","lastState",767733421).cljs$core$IFn$_invoke$arity$1(brain);
var currState = app3.qlearning.mapState(self,target);
var isStateChange = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lastState,currState)));
if(isStateChange){
var action = app3.qlearning.selectAction(brain,currState);
var brain__$1 = app3.qlearning.updateQ(brain,currState,action);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1], null)], 0));
} else {
var offsetTime = ((new Date()).getTime() - new cljs.core.Keyword(null,"lastTime","lastTime",-253375342).cljs$core$IFn$_invoke$arity$1(brain));
if((offsetTime > (3000))){
var action = app3.qlearning.selectAction(brain,currState);
var brain__$1 = app3.qlearning.updateQ(brain,currState,action);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1], null)], 0));
} else {
return self;
}
}
}));
app3.interface$.player.updateBrain.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fast","fast",-24391997),(function (_,model,target,self){
var brain = new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(self);
var lastState = new cljs.core.Keyword(null,"lastState","lastState",767733421).cljs$core$IFn$_invoke$arity$1(brain);
var currState = app3.qlearning.mapState(self,target);
var action = app3.qlearning.selectAction(brain,currState);
var brain__$1 = app3.qlearning.updateQ(brain,currState,action);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brain","brain",428499577),brain__$1], null)], 0));
}));

//# sourceMappingURL=app3.playerImpl.js.map
