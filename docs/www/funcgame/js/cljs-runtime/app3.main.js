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

var initialModel_26962 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"round","round",2009433328),(0),new cljs.core.Keyword(null,"playerWin","playerWin",-169970404),(0),new cljs.core.Keyword(null,"enemyWin","enemyWin",-1377599201),(0),new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(300)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(300)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"healing","healing",1329047497),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.gun.gun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.meleeGun.meleeGun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(300)], null)], null)], 0))], null)], null);
var ontick_26963 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(0)) : app3.main.timer.call(null,(0),(0))).pipe((function (){var G__26852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__26852) : app3.main.mapTo.call(null,G__26852));
})());
var onkeydown_26964 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keydown") : app3.main.fromEvent.call(null,document,"keydown")).pipe(rxjs.operators.map(((function (initialModel_26962,ontick_26963){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(initialModel_26962,ontick_26963))
));
var onkeyup_26965 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keyup") : app3.main.fromEvent.call(null,document,"keyup")).pipe(rxjs.operators.map(((function (initialModel_26962,ontick_26963,onkeydown_26964){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),e.key], null);
});})(initialModel_26962,ontick_26963,onkeydown_26964))
));
var trigger_26966 = (app3.main.timer.cljs$core$IFn$_invoke$arity$1 ? app3.main.timer.cljs$core$IFn$_invoke$arity$1((5000)) : app3.main.timer.call(null,(5000))).pipe((function (){var G__26853 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883),null,null], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__26853) : app3.main.mapTo.call(null,G__26853));
})());
var onSpawnHealing_26967 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__26854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"healing","healing",1329047497)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__26854) : app3.main.mapTo.call(null,G__26854));
})());
var onSpawnWeapon_26968 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__26855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__26855) : app3.main.mapTo.call(null,G__26855));
})());
var evtStream_26969 = rxjs.merge(ontick_26963,onkeydown_26964,onkeyup_26965,app3.emitter.inputOb,onSpawnHealing_26967,onSpawnWeapon_26968).pipe((function (){var G__26856 = app3.tool.comduce(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.system.input.playerController,app3.system.action.actionController,app3.system.basic.moveSystem,app3.system.bulletSys.checkBulletHitPlayer,app3.system.healingSys.playerCollideHealing,app3.system.weaponSys.playerCollideWeapon,app3.system.weaponSys.tickWeapon,app3.system.weaponSys.fireBullet,app3.system.ai.updateBrain,app3.system.ai.syncBrainAction,app3.system.ai.brainReward,app3.system.bulletSys.removeBullet,app3.system.basic.boundPosition,app3.system.basic.resetPlayerVelocity,app3.system.basic.resetEnemyVelocity,app3.system.healingSys.spawnHealing,app3.system.weaponSys.spawnWeapon,app3.system.basic.dieSystem,app3.system.basic.roundSystem], null));
var G__26857 = initialModel_26962;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__26856,G__26857) : app3.main.scan.call(null,G__26856,G__26857));
})());
var testQlearn_26970 = rxjs.merge(ontick_26963,onkeydown_26964).pipe((function (){var G__26858 = ((function (initialModel_26962,ontick_26963,onkeydown_26964,onkeyup_26965,trigger_26966,onSpawnHealing_26967,onSpawnWeapon_26968,evtStream_26969){
return (function (model,evt){
return app3.system.ai.brainReward(app3.system.ai.syncBrainAction(app3.system.ai.updateBrain(model,evt),evt),evt);
});})(initialModel_26962,ontick_26963,onkeydown_26964,onkeyup_26965,trigger_26966,onSpawnHealing_26967,onSpawnWeapon_26968,evtStream_26969))
;
var G__26859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(50)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0)], null)], 0))], null)], null);
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__26858,G__26859) : app3.main.scan.call(null,G__26858,G__26859));
})());
evtStream_26969.subscribe(((function (initialModel_26962,ontick_26963,onkeydown_26964,onkeyup_26965,trigger_26966,onSpawnHealing_26967,onSpawnWeapon_26968,evtStream_26969,testQlearn_26970){
return (function (m){
return cljs.core.reset_BANG_(app3.main.model,m);
});})(initialModel_26962,ontick_26963,onkeydown_26964,onkeyup_26965,trigger_26966,onSpawnHealing_26967,onSpawnWeapon_26968,evtStream_26969,testQlearn_26970))
);


app3.main.sketch = (function app3$main$main_$_sketch(p){
p.setup = (function (){
p.createCanvas((600),(600));

app3.main.drawCircle = (function app3$main$main_$_sketch_$_drawCircle(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),entity)){
var map__26860 = entity;
var map__26860__$1 = (((((!((map__26860 == null))))?(((((map__26860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26860):map__26860);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
p.fill((255));

p.circle(cljs.core.first(pos),cljs.core.second(pos),radius);

return model;
} else {
return model;
}
});

app3.main.drawRect = (function app3$main$main_$_sketch_$_drawRect(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null),entity)){
var map__26862 = entity;
var map__26862__$1 = (((((!((map__26862 == null))))?(((((map__26862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26862):map__26862);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862__$1,new cljs.core.Keyword(null,"size","size",1098693007));
p.rect(cljs.core.first(pos),cljs.core.second(pos),cljs.core.first(size),cljs.core.second(size));

return model;
} else {
return model;
}
});

app3.main.drawWeapon = (function app3$main$main_$_sketch_$_drawWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null),entity)){
var map__26864 = entity;
var map__26864__$1 = (((((!((map__26864 == null))))?(((((map__26864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26864):map__26864);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,new cljs.core.Keyword(null,"weapon","weapon",-504830232));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawState = (function app3$main$main_$_sketch_$_drawState(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__26866 = entity;
var map__26866__$1 = (((((!((map__26866 == null))))?(((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26866):map__26866);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawUseWeapon = (function app3$main$main_$_sketch_$_drawUseWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__26868 = entity;
var map__26868__$1 = (((((!((map__26868 == null))))?(((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26868):map__26868);
var useW = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145));
var vec__26869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26869,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26869,(1),null);
p.fill((0));

p.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(useW))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(useW))].join(''),x,y);

return model;
} else {
return model;
}
});

app3.main.drawActionValue = (function app3$main$main_$_sketch_$_drawActionValue(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"action","action",-811238024)], null),entity)){
var map__26873 = entity;
var map__26873__$1 = (((((!((map__26873 == null))))?(((((map__26873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26873):map__26873);
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26873__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__26874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26873__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26874,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26874,(1),null);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26873__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var _ = entities.pipe((function (){var G__26878 = ((function (entities,view){
return (function (a,entities__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (entities,view){
return (function (a__$1,p__26880){
var map__26881 = p__26880;
var map__26881__$1 = (((((!((map__26881 == null))))?(((((map__26881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26881):map__26881);
var obj = map__26881__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null));
var curr = hp;
var offset = (curr - old);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core.constantly(hp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.constantly(position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(offset / (10))));
});})(entities,view))
,a,entities__$1);
});})(entities,view))
;
var G__26879 = cljs.core.PersistentArrayMap.EMPTY;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__26878,G__26879) : app3.main.scan.call(null,G__26878,G__26879));
})()).subscribe(((function (entities,view){
return (function (m){
return cljs.core.reset_BANG_(view,m);
});})(entities,view))
);
return ((function (entities,view,_){
return (function (){
var seq__26883 = cljs.core.seq(cljs.core.deref(view));
var chunk__26884 = null;
var count__26885 = (0);
var i__26886 = (0);
while(true){
if((i__26886 < count__26885)){
var hp = chunk__26884.cljs$core$IIndexed$_nth$arity$2(null,i__26886);
var barLen_26971 = (100);
var vec__26909_26972 = hp;
var id_26973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26909_26972,(0),null);
var map__26912_26974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26909_26972,(1),null);
var map__26912_26975__$1 = (((((!((map__26912_26974 == null))))?(((((map__26912_26974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26912_26974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26912_26974):map__26912_26974);
var hp_26976__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912_26975__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_26977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912_26975__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_26978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912_26975__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__26913_26979 = position_26977;
var x_26980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913_26979,(0),null);
var y_26981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26913_26979,(1),null);
var vec__26916_26982 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_26977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_26983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26916_26982,(0),null);
var y_26984__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26916_26982,(1),null);
p.fill((0));

p.rect(x_26983__$1,y_26984__$1,barLen_26971,(5));

p.fill((255),(0),(0));

p.rect(x_26983__$1,y_26984__$1,((old_26978 / (100)) * barLen_26971),(5));

p.fill((0),(255),(0));

p.rect(x_26983__$1,y_26984__$1,((hp_26976__$1 / (100)) * barLen_26971),(5));



var G__26985 = seq__26883;
var G__26986 = chunk__26884;
var G__26987 = count__26885;
var G__26988 = (i__26886 + (1));
seq__26883 = G__26985;
chunk__26884 = G__26986;
count__26885 = G__26987;
i__26886 = G__26988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26883);
if(temp__5735__auto__){
var seq__26883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26883__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26883__$1);
var G__26989 = cljs.core.chunk_rest(seq__26883__$1);
var G__26990 = c__4550__auto__;
var G__26991 = cljs.core.count(c__4550__auto__);
var G__26992 = (0);
seq__26883 = G__26989;
chunk__26884 = G__26990;
count__26885 = G__26991;
i__26886 = G__26992;
continue;
} else {
var hp = cljs.core.first(seq__26883__$1);
var barLen_26993 = (100);
var vec__26920_26994 = hp;
var id_26995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26920_26994,(0),null);
var map__26923_26996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26920_26994,(1),null);
var map__26923_26997__$1 = (((((!((map__26923_26996 == null))))?(((((map__26923_26996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26923_26996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26923_26996):map__26923_26996);
var hp_26998__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923_26997__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_26999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923_26997__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_27000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26923_26997__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__26924_27001 = position_26999;
var x_27002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26924_27001,(0),null);
var y_27003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26924_27001,(1),null);
var vec__26927_27004 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_26999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_27005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927_27004,(0),null);
var y_27006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927_27004,(1),null);
p.fill((0));

p.rect(x_27005__$1,y_27006__$1,barLen_26993,(5));

p.fill((255),(0),(0));

p.rect(x_27005__$1,y_27006__$1,((old_27000 / (100)) * barLen_26993),(5));

p.fill((0),(255),(0));

p.rect(x_27005__$1,y_27006__$1,((hp_26998__$1 / (100)) * barLen_26993),(5));



var G__27007 = cljs.core.next(seq__26883__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26883 = G__27007;
chunk__26884 = G__27008;
count__26885 = G__27009;
i__26886 = G__27010;
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

var m_27011 = cljs.core.deref(app3.main.model);
var plyr_27012 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(m_27011)));
var seq__26931_27013 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plyr_27012,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697)], null)));
var chunk__26932_27014 = null;
var count__26933_27015 = (0);
var i__26934_27016 = (0);
while(true){
if((i__26934_27016 < count__26933_27015)){
var vec__26941_27017 = chunk__26932_27014.cljs$core$IIndexed$_nth$arity$2(null,i__26934_27016);
var k_27018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941_27017,(0),null);
var v_27019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941_27017,(1),null);

var G__27020 = seq__26931_27013;
var G__27021 = chunk__26932_27014;
var G__27022 = count__26933_27015;
var G__27023 = (i__26934_27016 + (1));
seq__26931_27013 = G__27020;
chunk__26932_27014 = G__27021;
count__26933_27015 = G__27022;
i__26934_27016 = G__27023;
continue;
} else {
var temp__5735__auto___27024 = cljs.core.seq(seq__26931_27013);
if(temp__5735__auto___27024){
var seq__26931_27025__$1 = temp__5735__auto___27024;
if(cljs.core.chunked_seq_QMARK_(seq__26931_27025__$1)){
var c__4550__auto___27026 = cljs.core.chunk_first(seq__26931_27025__$1);
var G__27027 = cljs.core.chunk_rest(seq__26931_27025__$1);
var G__27028 = c__4550__auto___27026;
var G__27029 = cljs.core.count(c__4550__auto___27026);
var G__27030 = (0);
seq__26931_27013 = G__27027;
chunk__26932_27014 = G__27028;
count__26933_27015 = G__27029;
i__26934_27016 = G__27030;
continue;
} else {
var vec__26944_27031 = cljs.core.first(seq__26931_27025__$1);
var k_27032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26944_27031,(0),null);
var v_27033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26944_27031,(1),null);

var G__27034 = cljs.core.next(seq__26931_27025__$1);
var G__27035 = null;
var G__27036 = (0);
var G__27037 = (0);
seq__26931_27013 = G__27034;
chunk__26932_27014 = G__27035;
count__26933_27015 = G__27036;
i__26934_27016 = G__27037;
continue;
}
} else {
}
}
break;
}

var tmodel_27038 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table_27039 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var __27040 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(5000)) : app3.main.timer.call(null,(0),(5000))).pipe(rxjs.operators.map(((function (tmodel_27038,table_27039){
return (function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app3.main.model))));
});})(tmodel_27038,table_27039))
),rxjs.operators.map(((function (tmodel_27038,table_27039){
return (function (p1__26851_SHARP_){
return new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(p1__26851_SHARP_);
});})(tmodel_27038,table_27039))
)).subscribe(((function (tmodel_27038,table_27039){
return (function (brain){
return cljs.core.reset_BANG_(table_27039,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(brain));
});})(tmodel_27038,table_27039))
);
app3.main.drawQtable = ((function (tmodel_27038,table_27039,__27040){
return (function app3$main$main_$_drawQtable(){
var tm = cljs.core.deref(tmodel_27038);
var t = cljs.core.deref(table_27039);
if(cljs.core.truth_(tm)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_27038,table_27039,__27040){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_27038,cljs.core.not);
});})(tm,t,tmodel_27038,table_27039,__27040))
], null),"close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (tm,t,tmodel_27038,table_27039,__27040){
return (function app3$main$main_$_drawQtable_$_iter__26947(s__26948){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel_27038,table_27039,__27040){
return (function (){
var s__26948__$1 = s__26948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26948__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__26953 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26953,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26953,(1),null);
var iterys__4519__auto__ = ((function (s__26948__$1,vec__26953,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_27038,table_27039,__27040){
return (function app3$main$main_$_drawQtable_$_iter__26947_$_iter__26949(s__26950){
return (new cljs.core.LazySeq(null,((function (s__26948__$1,vec__26953,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_27038,table_27039,__27040){
return (function (){
var s__26950__$1 = s__26950;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26950__$1);
if(temp__5735__auto____$1){
var s__26950__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26950__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26950__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26952 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26951 = (0);
while(true){
if((i__26951 < size__4522__auto__)){
var vec__26956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26951);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26956,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26956,(1),null);
cljs.core.chunk_append(b__26952,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__27041 = (i__26951 + (1));
i__26951 = G__27041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26952),app3$main$main_$_drawQtable_$_iter__26947_$_iter__26949(cljs.core.chunk_rest(s__26950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26952),null);
}
} else {
var vec__26959 = cljs.core.first(s__26950__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26959,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26959,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app3$main$main_$_drawQtable_$_iter__26947_$_iter__26949(cljs.core.rest(s__26950__$2)));
}
} else {
return null;
}
break;
}
});})(s__26948__$1,vec__26953,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_27038,table_27039,__27040))
,null,null));
});})(s__26948__$1,vec__26953,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_27038,table_27039,__27040))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$main$main_$_drawQtable_$_iter__26947(cljs.core.rest(s__26948__$1)));
} else {
var G__27042 = cljs.core.rest(s__26948__$1);
s__26948__$1 = G__27042;
continue;
}
} else {
return null;
}
break;
}
});})(tm,t,tmodel_27038,table_27039,__27040))
,null,null));
});})(tm,t,tmodel_27038,table_27039,__27040))
;
return iter__4523__auto__(t);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_27038,table_27039,__27040){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_27038,cljs.core.not);
});})(tm,t,tmodel_27038,table_27039,__27040))
], null),"open"], null);
}
});})(tmodel_27038,table_27039,__27040))
;

app3.main.mountit = ((function (tmodel_27038,table_27039,__27040){
return (function app3$main$main_$_mountit(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.main.drawQtable], null),document.getElementById("qtable"));
});})(tmodel_27038,table_27039,__27040))
;

app3.main.mountit();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start app xx2"], 0));
});

//# sourceMappingURL=app3.main.js.map
