goog.provide('app3.main');
goog.require('cljs.core');
goog.require('app3.tool');
goog.require('app3.emitter');
goog.require('app3.qlearning');
goog.require('app3.system.basic');
goog.require('app3.system.weaponSys');
goog.require('app3.system.bulletSys');
goog.require('app3.system.healingSys');
goog.require('app3.system.input');
goog.require('app3.system.action');
goog.require('app3.system.ai');
goog.require('app3.system.debug');
goog.require('app3.playerImpl');
goog.require('app3.weapon.def');
goog.require('app3.weapon.fist');
goog.require('app3.weapon.gun');
goog.require('app3.weapon.meleeGun');
goog.require('reagent.core');
app3.main.fromEvent = rxjs.fromEvent;

app3.main.timer = rxjs.timer;

app3.main.Subject = rxjs.Subject;
app3.main.mapTo = rxjs.operators.mapTo;

app3.main.scan = rxjs.operators.scan;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),cljs.core.with_meta(new cljs.core.Symbol(null,"playerCollideHealing","playerCollideHealing",349541610,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)))], null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),cljs.core.list(new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("clojure.core","rest","clojure.core/rest",-517971889,null),new cljs.core.Symbol(null,"event","event",1941966969,null))], null),cljs.core.list(new cljs.core.Symbol("app3.macros","lete","app3.macros/lete",-8084548,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"players","players",278976958,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.Symbol(null,"enemies","enemies",-540150047,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null),new cljs.core.Symbol(null,"others","others",-569561186,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"healing","healing",1329047497)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collides","collides",2001950250,null),cljs.core.list(new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),cljs.core.list(new cljs.core.Symbol("clojure.core","for","clojure.core/for",-993162653,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o1","o1",-1322267789,null),cljs.core.list(new cljs.core.Symbol("clojure.core","concat","clojure.core/concat",-1236478952,null),new cljs.core.Symbol(null,"players","players",278976958,null),new cljs.core.Symbol(null,"enemies","enemies",-540150047,null)),new cljs.core.Symbol(null,"o2","o2",-1392027197,null),new cljs.core.Symbol(null,"others","others",-569561186,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o1","o1",-1322267789,null),new cljs.core.Symbol(null,"o2","o2",-1392027197,null)], null),cljs.core.list(new cljs.core.Symbol("app3.tool","checkCollide","app3.tool/checkCollide",-454457462,null),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o1","o1",-1322267789,null)),cljs.core.list(new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o2","o2",-1392027197,null)),(50))], null)),cljs.core.list(new cljs.core.Symbol("clojure.core","filter","clojure.core/filter",-149790826,null),cljs.core.list(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"isCollide","isCollide",1009273138,null)], null)], null),new cljs.core.Symbol(null,"isCollide","isCollide",1009273138,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","map","clojure.core/map",-505055043,null),new cljs.core.Symbol("clojure.core","first","clojure.core/first",-716493206,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("clojure.core",">","clojure.core/>",1984489172,null),cljs.core.list(new cljs.core.Symbol("clojure.core","count","clojure.core/count",-1284476907,null),new cljs.core.Symbol(null,"collides","collides",2001950250,null)),(0)),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plyr","plyr",1939257721,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","first","clojure.core/first",-716493206,null),new cljs.core.Symbol(null,"collides","collides",2001950250,null))], null),cljs.core.list(new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),new cljs.core.Symbol(null,"model","model",1971684742,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"model","model",1971684742,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","update","clojure.core/update",-805410120,null),new cljs.core.Symbol(null,"model","model",1971684742,null),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.list(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"origin","origin",-1617063681,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","->>","clojure.core/->>",-1104981692,null),new cljs.core.Symbol(null,"origin","origin",-1617063681,null),cljs.core.list(new cljs.core.Symbol("clojure.core","replace","clojure.core/replace",-456984156,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"plyr","plyr",1939257721,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plyr","plyr",1939257721,null)], null),new cljs.core.Symbol(null,"plyr","plyr",1939257721,null)),new cljs.core.Symbol(null,"plyr","plyr",1939257721,null),new cljs.core.Symbol(null,"other","other",-1658642225,null))], null)),cljs.core.list(new cljs.core.Symbol("clojure.core","filter","clojure.core/filter",-149790826,null),cljs.core.list(new cljs.core.Symbol("clojure.core","comp","clojure.core/comp",2130241458,null),new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),cljs.core.list(new cljs.core.Symbol("clojure.core","partial","clojure.core/partial",-1572506921,null),new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"other","other",-1658642225,null))))))))),cljs.core.list(new cljs.core.Symbol("app3.emitter","send","app3.emitter/send",2021505195,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideHealing","playerCollideHealing",-1290989917),new cljs.core.Symbol(null,"plyr","plyr",1939257721,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)], null)))),new cljs.core.Symbol(null,"model","model",1971684742,null))))),new cljs.core.Symbol(null,"model","model",1971684742,null)))))], 0));
app3.main.player = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"hp","hp",-1541237831),(100),new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),app3.weapon.fist.fist,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"radius","radius",-2073122258),(50)], null);
app3.main.box = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(200),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(100)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10)], null);
app3.main.healing = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"healing","healing",1329047497),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10)], null);
app3.main.bullet = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"power","power",-937852079),(0),new cljs.core.Keyword(null,"bullet","bullet",726988937),(0)], null);
app3.main.model = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app3.main.main = (function app3$main$main(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ddeddee"], 0));

var initialModel_36594 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"round","round",2009433328),(0),new cljs.core.Keyword(null,"playerWin","playerWin",-169970404),(0),new cljs.core.Keyword(null,"enemyWin","enemyWin",-1377599201),(0),new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(300)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(300)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"healing","healing",1329047497),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.gun.gun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.meleeGun.meleeGun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(300)], null)], null)], 0))], null)], null);
var ontick_36595 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(0)) : app3.main.timer.call(null,(0),(0))).pipe((function (){var G__36457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__36457) : app3.main.mapTo.call(null,G__36457));
})());
var onkeydown_36596 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keydown") : app3.main.fromEvent.call(null,document,"keydown")).pipe(rxjs.operators.map(((function (initialModel_36594,ontick_36595){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(initialModel_36594,ontick_36595))
));
var onkeyup_36597 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keyup") : app3.main.fromEvent.call(null,document,"keyup")).pipe(rxjs.operators.map(((function (initialModel_36594,ontick_36595,onkeydown_36596){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),e.key], null);
});})(initialModel_36594,ontick_36595,onkeydown_36596))
));
var trigger_36598 = (app3.main.timer.cljs$core$IFn$_invoke$arity$1 ? app3.main.timer.cljs$core$IFn$_invoke$arity$1((5000)) : app3.main.timer.call(null,(5000))).pipe((function (){var G__36458 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883),null,null], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__36458) : app3.main.mapTo.call(null,G__36458));
})());
var onSpawnHealing_36599 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__36459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"healing","healing",1329047497)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__36459) : app3.main.mapTo.call(null,G__36459));
})());
var onSpawnWeapon_36600 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__36460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__36460) : app3.main.mapTo.call(null,G__36460));
})());
var evtStream_36601 = rxjs.merge(ontick_36595,onkeydown_36596,onkeyup_36597,app3.emitter.inputOb,onSpawnHealing_36599,onSpawnWeapon_36600).pipe((function (){var G__36461 = app3.tool.comduce(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.system.input.playerController,app3.system.action.actionController,app3.system.basic.moveSystem,app3.system.bulletSys.checkBulletHitPlayer,app3.system.healingSys.playerCollideHealing,app3.system.weaponSys.playerCollideWeapon,app3.system.weaponSys.tickWeapon,app3.system.weaponSys.fireBullet,app3.system.ai.updateBrain,app3.system.ai.syncBrainAction,app3.system.ai.brainReward,app3.system.bulletSys.removeBullet,app3.system.basic.boundPosition,app3.system.basic.resetPlayerVelocity,app3.system.basic.resetEnemyVelocity,app3.system.healingSys.spawnHealing,app3.system.weaponSys.spawnWeapon,app3.system.basic.dieSystem,app3.system.basic.roundSystem], null));
var G__36462 = initialModel_36594;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__36461,G__36462) : app3.main.scan.call(null,G__36461,G__36462));
})());
var testQlearn_36602 = rxjs.merge(ontick_36595,onkeydown_36596).pipe((function (){var G__36463 = ((function (initialModel_36594,ontick_36595,onkeydown_36596,onkeyup_36597,trigger_36598,onSpawnHealing_36599,onSpawnWeapon_36600,evtStream_36601){
return (function (model,evt){
return app3.system.ai.brainReward(app3.system.ai.syncBrainAction(app3.system.ai.updateBrain(model,evt),evt),evt);
});})(initialModel_36594,ontick_36595,onkeydown_36596,onkeyup_36597,trigger_36598,onSpawnHealing_36599,onSpawnWeapon_36600,evtStream_36601))
;
var G__36464 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(50)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0)], null)], 0))], null)], null);
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__36463,G__36464) : app3.main.scan.call(null,G__36463,G__36464));
})());
evtStream_36601.subscribe(((function (initialModel_36594,ontick_36595,onkeydown_36596,onkeyup_36597,trigger_36598,onSpawnHealing_36599,onSpawnWeapon_36600,evtStream_36601,testQlearn_36602){
return (function (m){
return cljs.core.reset_BANG_(app3.main.model,m);
});})(initialModel_36594,ontick_36595,onkeydown_36596,onkeyup_36597,trigger_36598,onSpawnHealing_36599,onSpawnWeapon_36600,evtStream_36601,testQlearn_36602))
);


app3.main.sketch = (function app3$main$main_$_sketch(p){
p.setup = (function (){
p.createCanvas((600),(600));

app3.main.drawCircle = (function app3$main$main_$_sketch_$_drawCircle(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),entity)){
var map__36465 = entity;
var map__36465__$1 = (((((!((map__36465 == null))))?(((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36465):map__36465);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
p.fill((255));

p.circle(cljs.core.first(pos),cljs.core.second(pos),radius);

return model;
} else {
return model;
}
});

app3.main.drawRect = (function app3$main$main_$_sketch_$_drawRect(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null),entity)){
var map__36467 = entity;
var map__36467__$1 = (((((!((map__36467 == null))))?(((((map__36467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36467):map__36467);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467__$1,new cljs.core.Keyword(null,"size","size",1098693007));
p.rect(cljs.core.first(pos),cljs.core.second(pos),cljs.core.first(size),cljs.core.second(size));

return model;
} else {
return model;
}
});

app3.main.drawWeapon = (function app3$main$main_$_sketch_$_drawWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null),entity)){
var map__36469 = entity;
var map__36469__$1 = (((((!((map__36469 == null))))?(((((map__36469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36469):map__36469);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36469__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36469__$1,new cljs.core.Keyword(null,"weapon","weapon",-504830232));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawState = (function app3$main$main_$_sketch_$_drawState(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__36471 = entity;
var map__36471__$1 = (((((!((map__36471 == null))))?(((((map__36471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36471):map__36471);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36471__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawUseWeapon = (function app3$main$main_$_sketch_$_drawUseWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__36473 = entity;
var map__36473__$1 = (((((!((map__36473 == null))))?(((((map__36473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36473):map__36473);
var useW = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145));
var vec__36474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474,(1),null);
p.fill((0));

p.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(useW))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(useW))].join(''),x,y);

return model;
} else {
return model;
}
});

app3.main.drawActionValue = (function app3$main$main_$_sketch_$_drawActionValue(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"action","action",-811238024)], null),entity)){
var map__36478 = entity;
var map__36478__$1 = (((((!((map__36478 == null))))?(((((map__36478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36478):map__36478);
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__36479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36479,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36479,(1),null);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword(null,"action","action",-811238024));
p.fill((0));

p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lastAction","lastAction",-1557545249).cljs$core$IFn$_invoke$arity$1(brain)),x,(y + (40)));

p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(action),x,(y + (60)));

return model;
} else {
return model;
}
});

app3.main.drawHp = (function (){var entities = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(33)) : app3.main.timer.call(null,(0),(33))).pipe(rxjs.operators.map((function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app3.main.model)));
})));
var view = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = entities.pipe((function (){var G__36483 = ((function (entities,view){
return (function (a,entities__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (entities,view){
return (function (a__$1,p__36485){
var map__36486 = p__36485;
var map__36486__$1 = (((((!((map__36486 == null))))?(((((map__36486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36486):map__36486);
var obj = map__36486__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null));
var curr = hp;
var offset = (curr - old);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core.constantly(hp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.constantly(position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(offset / (10))));
});})(entities,view))
,a,entities__$1);
});})(entities,view))
;
var G__36484 = cljs.core.PersistentArrayMap.EMPTY;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__36483,G__36484) : app3.main.scan.call(null,G__36483,G__36484));
})()).subscribe(((function (entities,view){
return (function (m){
return cljs.core.reset_BANG_(view,m);
});})(entities,view))
);
return ((function (entities,view,_){
return (function (){
var seq__36488 = cljs.core.seq(cljs.core.deref(view));
var chunk__36489 = null;
var count__36490 = (0);
var i__36491 = (0);
while(true){
if((i__36491 < count__36490)){
var hp = chunk__36489.cljs$core$IIndexed$_nth$arity$2(null,i__36491);
var barLen_36823 = (100);
var vec__36514_36824 = hp;
var id_36825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36514_36824,(0),null);
var map__36517_36826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36514_36824,(1),null);
var map__36517_36827__$1 = (((((!((map__36517_36826 == null))))?(((((map__36517_36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36517_36826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36517_36826):map__36517_36826);
var hp_36828__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36517_36827__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_36829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36517_36827__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_36830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36517_36827__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__36518_36831 = position_36829;
var x_36832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36518_36831,(0),null);
var y_36833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36518_36831,(1),null);
var vec__36521_36834 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_36829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_36835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36521_36834,(0),null);
var y_36836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36521_36834,(1),null);
p.fill((0));

p.rect(x_36835__$1,y_36836__$1,barLen_36823,(5));

p.fill((255),(0),(0));

p.rect(x_36835__$1,y_36836__$1,((old_36830 / (100)) * barLen_36823),(5));

p.fill((0),(255),(0));

p.rect(x_36835__$1,y_36836__$1,((hp_36828__$1 / (100)) * barLen_36823),(5));



var G__36857 = seq__36488;
var G__36858 = chunk__36489;
var G__36859 = count__36490;
var G__36860 = (i__36491 + (1));
seq__36488 = G__36857;
chunk__36489 = G__36858;
count__36490 = G__36859;
i__36491 = G__36860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36488);
if(temp__5735__auto__){
var seq__36488__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36488__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36488__$1);
var G__36863 = cljs.core.chunk_rest(seq__36488__$1);
var G__36864 = c__4550__auto__;
var G__36865 = cljs.core.count(c__4550__auto__);
var G__36866 = (0);
seq__36488 = G__36863;
chunk__36489 = G__36864;
count__36490 = G__36865;
i__36491 = G__36866;
continue;
} else {
var hp = cljs.core.first(seq__36488__$1);
var barLen_36867 = (100);
var vec__36525_36868 = hp;
var id_36869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525_36868,(0),null);
var map__36528_36870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36525_36868,(1),null);
var map__36528_36871__$1 = (((((!((map__36528_36870 == null))))?(((((map__36528_36870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36528_36870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36528_36870):map__36528_36870);
var hp_36872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36528_36871__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_36873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36528_36871__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_36874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36528_36871__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__36529_36875 = position_36873;
var x_36876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529_36875,(0),null);
var y_36877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529_36875,(1),null);
var vec__36532_36878 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_36873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_36879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532_36878,(0),null);
var y_36880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532_36878,(1),null);
p.fill((0));

p.rect(x_36879__$1,y_36880__$1,barLen_36867,(5));

p.fill((255),(0),(0));

p.rect(x_36879__$1,y_36880__$1,((old_36874 / (100)) * barLen_36867),(5));

p.fill((0),(255),(0));

p.rect(x_36879__$1,y_36880__$1,((hp_36872__$1 / (100)) * barLen_36867),(5));



var G__36893 = cljs.core.next(seq__36488__$1);
var G__36894 = null;
var G__36895 = (0);
var G__36896 = (0);
seq__36488 = G__36893;
chunk__36489 = G__36894;
count__36490 = G__36895;
i__36491 = G__36896;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(entities,view,_))
})();

return (
app3.main.drawRoundState = (function app3$main$main_$_sketch_$_drawRoundState(){
var m = cljs.core.deref(app3.main.model);
p.fill((0));

p.text(["round: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(m))].join(''),(0),(20));

p.text(["playerWin: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"playerWin","playerWin",-169970404).cljs$core$IFn$_invoke$arity$1(m))].join(''),(0),(40));

p.text(["enemyWin: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"enemyWin","enemyWin",-1377599201).cljs$core$IFn$_invoke$arity$1(m))].join(''),(0),(60));

return p.text(["ticks: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(m))].join(''),(0),(80));
}))
;
});

return p.draw = (function (){
var m = cljs.core.deref(app3.main.model);
var entities = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(m);
p.fill((255),(255),(255));

p.rect((0),(0),(600),(600));

p.fill((0));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app3.tool.comduce(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.main.drawCircle,app3.main.drawRect,app3.main.drawWeapon,app3.main.drawUseWeapon,app3.main.drawActionValue], null)),m,entities)], null));

(app3.main.drawHp.cljs$core$IFn$_invoke$arity$0 ? app3.main.drawHp.cljs$core$IFn$_invoke$arity$0() : app3.main.drawHp.call(null));

return app3.main.drawRoundState();
});
});

(new p5(app3.main.sketch,"container"));

var m_36901 = cljs.core.deref(app3.main.model);
var plyr_36902 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(m_36901)));
var seq__36536_36903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plyr_36902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697)], null)));
var chunk__36537_36904 = null;
var count__36538_36905 = (0);
var i__36539_36906 = (0);
while(true){
if((i__36539_36906 < count__36538_36905)){
var vec__36546_36907 = chunk__36537_36904.cljs$core$IIndexed$_nth$arity$2(null,i__36539_36906);
var k_36908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36546_36907,(0),null);
var v_36909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36546_36907,(1),null);

var G__36914 = seq__36536_36903;
var G__36915 = chunk__36537_36904;
var G__36916 = count__36538_36905;
var G__36917 = (i__36539_36906 + (1));
seq__36536_36903 = G__36914;
chunk__36537_36904 = G__36915;
count__36538_36905 = G__36916;
i__36539_36906 = G__36917;
continue;
} else {
var temp__5735__auto___36945 = cljs.core.seq(seq__36536_36903);
if(temp__5735__auto___36945){
var seq__36536_36946__$1 = temp__5735__auto___36945;
if(cljs.core.chunked_seq_QMARK_(seq__36536_36946__$1)){
var c__4550__auto___36947 = cljs.core.chunk_first(seq__36536_36946__$1);
var G__36948 = cljs.core.chunk_rest(seq__36536_36946__$1);
var G__36949 = c__4550__auto___36947;
var G__36950 = cljs.core.count(c__4550__auto___36947);
var G__36951 = (0);
seq__36536_36903 = G__36948;
chunk__36537_36904 = G__36949;
count__36538_36905 = G__36950;
i__36539_36906 = G__36951;
continue;
} else {
var vec__36549_36952 = cljs.core.first(seq__36536_36946__$1);
var k_36953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36549_36952,(0),null);
var v_36954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36549_36952,(1),null);

var G__36955 = cljs.core.next(seq__36536_36946__$1);
var G__36956 = null;
var G__36957 = (0);
var G__36958 = (0);
seq__36536_36903 = G__36955;
chunk__36537_36904 = G__36956;
count__36538_36905 = G__36957;
i__36539_36906 = G__36958;
continue;
}
} else {
}
}
break;
}

var tmodel_36959 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table_36960 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var __36961 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(5000)) : app3.main.timer.call(null,(0),(5000))).pipe(rxjs.operators.map(((function (tmodel_36959,table_36960){
return (function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app3.main.model))));
});})(tmodel_36959,table_36960))
),rxjs.operators.map(((function (tmodel_36959,table_36960){
return (function (p1__36456_SHARP_){
return new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(p1__36456_SHARP_);
});})(tmodel_36959,table_36960))
)).subscribe(((function (tmodel_36959,table_36960){
return (function (brain){
return cljs.core.reset_BANG_(table_36960,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(brain));
});})(tmodel_36959,table_36960))
);
app3.main.drawQtable = ((function (tmodel_36959,table_36960,__36961){
return (function app3$main$main_$_drawQtable(){
var tm = cljs.core.deref(tmodel_36959);
var t = cljs.core.deref(table_36960);
if(cljs.core.truth_(tm)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_36959,table_36960,__36961){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_36959,cljs.core.not);
});})(tm,t,tmodel_36959,table_36960,__36961))
], null),"close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (tm,t,tmodel_36959,table_36960,__36961){
return (function app3$main$main_$_drawQtable_$_iter__36552(s__36553){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel_36959,table_36960,__36961){
return (function (){
var s__36553__$1 = s__36553;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36553__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__36558 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36558,(1),null);
var iterys__4519__auto__ = ((function (s__36553__$1,vec__36558,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_36959,table_36960,__36961){
return (function app3$main$main_$_drawQtable_$_iter__36552_$_iter__36554(s__36555){
return (new cljs.core.LazySeq(null,((function (s__36553__$1,vec__36558,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_36959,table_36960,__36961){
return (function (){
var s__36555__$1 = s__36555;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36555__$1);
if(temp__5735__auto____$1){
var s__36555__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36555__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36555__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36557 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36556 = (0);
while(true){
if((i__36556 < size__4522__auto__)){
var vec__36561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36556);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(1),null);
cljs.core.chunk_append(b__36557,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__36963 = (i__36556 + (1));
i__36556 = G__36963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36557),app3$main$main_$_drawQtable_$_iter__36552_$_iter__36554(cljs.core.chunk_rest(s__36555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36557),null);
}
} else {
var vec__36564 = cljs.core.first(s__36555__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app3$main$main_$_drawQtable_$_iter__36552_$_iter__36554(cljs.core.rest(s__36555__$2)));
}
} else {
return null;
}
break;
}
});})(s__36553__$1,vec__36558,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_36959,table_36960,__36961))
,null,null));
});})(s__36553__$1,vec__36558,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_36959,table_36960,__36961))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$main$main_$_drawQtable_$_iter__36552(cljs.core.rest(s__36553__$1)));
} else {
var G__36965 = cljs.core.rest(s__36553__$1);
s__36553__$1 = G__36965;
continue;
}
} else {
return null;
}
break;
}
});})(tm,t,tmodel_36959,table_36960,__36961))
,null,null));
});})(tm,t,tmodel_36959,table_36960,__36961))
;
return iter__4523__auto__(t);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_36959,table_36960,__36961){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_36959,cljs.core.not);
});})(tm,t,tmodel_36959,table_36960,__36961))
], null),"open"], null);
}
});})(tmodel_36959,table_36960,__36961))
;

app3.main.mountit = ((function (tmodel_36959,table_36960,__36961){
return (function app3$main$main_$_mountit(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.main.drawQtable], null),document.getElementById("qtable"));
});})(tmodel_36959,table_36960,__36961))
;

app3.main.mountit();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start app xx2"], 0));
});

//# sourceMappingURL=app3.main.js.map
