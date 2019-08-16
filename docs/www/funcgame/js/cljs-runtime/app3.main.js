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

var initialModel_37533 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"round","round",2009433328),(0),new cljs.core.Keyword(null,"playerWin","playerWin",-169970404),(0),new cljs.core.Keyword(null,"enemyWin","enemyWin",-1377599201),(0),new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0),new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(300)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(300)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0),new cljs.core.Keyword(null,"brain","brain",428499577),app3.qlearning.qtable], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"healing","healing",1329047497),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.gun.gun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.weapon.meleeGun.meleeGun,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(300)], null)], null)], 0))], null)], null);
var ontick_37534 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(0)) : app3.main.timer.call(null,(0),(0))).pipe((function (){var G__37066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__37066) : app3.main.mapTo.call(null,G__37066));
})());
var onkeydown_37535 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keydown") : app3.main.fromEvent.call(null,document,"keydown")).pipe(rxjs.operators.map(((function (initialModel_37533,ontick_37534){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),e.key], null);
});})(initialModel_37533,ontick_37534))
));
var onkeyup_37536 = (app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2 ? app3.main.fromEvent.cljs$core$IFn$_invoke$arity$2(document,"keyup") : app3.main.fromEvent.call(null,document,"keyup")).pipe(rxjs.operators.map(((function (initialModel_37533,ontick_37534,onkeydown_37535){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),e.key], null);
});})(initialModel_37533,ontick_37534,onkeydown_37535))
));
var trigger_37537 = (app3.main.timer.cljs$core$IFn$_invoke$arity$1 ? app3.main.timer.cljs$core$IFn$_invoke$arity$1((5000)) : app3.main.timer.call(null,(5000))).pipe((function (){var G__37069 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerCollideWeapon","playerCollideWeapon",1112104883),null,null], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__37069) : app3.main.mapTo.call(null,G__37069));
})());
var onSpawnHealing_37538 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__37071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"healing","healing",1329047497)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__37071) : app3.main.mapTo.call(null,G__37071));
})());
var onSpawnWeapon_37539 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(1000)) : app3.main.timer.call(null,(0),(1000))).pipe((function (){var G__37073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null);
return (app3.main.mapTo.cljs$core$IFn$_invoke$arity$1 ? app3.main.mapTo.cljs$core$IFn$_invoke$arity$1(G__37073) : app3.main.mapTo.call(null,G__37073));
})());
var evtStream_37540 = rxjs.merge(ontick_37534,onkeydown_37535,onkeyup_37536,app3.emitter.inputOb,onSpawnHealing_37538,onSpawnWeapon_37539).pipe((function (){var G__37075 = app3.tool.comduce(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.system.input.playerController,app3.system.action.actionController,app3.system.basic.moveSystem,app3.system.bulletSys.checkBulletHitPlayer,app3.system.healingSys.playerCollideHealing,app3.system.weaponSys.playerCollideWeapon,app3.system.weaponSys.tickWeapon,app3.system.weaponSys.fireBullet,app3.system.ai.updateBrain,app3.system.ai.syncBrainAction,app3.system.ai.brainReward,app3.system.bulletSys.removeBullet,app3.system.basic.boundPosition,app3.system.basic.resetPlayerVelocity,app3.system.basic.resetEnemyVelocity,app3.system.healingSys.spawnHealing,app3.system.weaponSys.spawnWeapon,app3.system.basic.dieSystem,app3.system.basic.roundSystem], null));
var G__37076 = initialModel_37533;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__37075,G__37076) : app3.main.scan.call(null,G__37075,G__37076));
})());
var testQlearn_37541 = rxjs.merge(ontick_37534,onkeydown_37535).pipe((function (){var G__37080 = ((function (initialModel_37533,ontick_37534,onkeydown_37535,onkeyup_37536,trigger_37537,onSpawnHealing_37538,onSpawnWeapon_37539,evtStream_37540){
return (function (model,evt){
return app3.system.ai.brainReward(app3.system.ai.syncBrainAction(app3.system.ai.updateBrain(model,evt),evt),evt);
});})(initialModel_37533,ontick_37534,onkeydown_37535,onkeyup_37536,trigger_37537,onSpawnHealing_37538,onSpawnWeapon_37539,evtStream_37540))
;
var G__37081 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app3.main.player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(50)], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),(0)], null)], 0))], null)], null);
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__37080,G__37081) : app3.main.scan.call(null,G__37080,G__37081));
})());
evtStream_37540.subscribe(((function (initialModel_37533,ontick_37534,onkeydown_37535,onkeyup_37536,trigger_37537,onSpawnHealing_37538,onSpawnWeapon_37539,evtStream_37540,testQlearn_37541){
return (function (m){
return cljs.core.reset_BANG_(app3.main.model,m);
});})(initialModel_37533,ontick_37534,onkeydown_37535,onkeyup_37536,trigger_37537,onSpawnHealing_37538,onSpawnWeapon_37539,evtStream_37540,testQlearn_37541))
);


app3.main.sketch = (function app3$main$main_$_sketch(p){
p.setup = (function (){
p.createCanvas((600),(600));

app3.main.drawCircle = (function app3$main$main_$_sketch_$_drawCircle(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),entity)){
var map__37191 = entity;
var map__37191__$1 = (((((!((map__37191 == null))))?(((((map__37191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37191):map__37191);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
p.fill((255));

p.circle(cljs.core.first(pos),cljs.core.second(pos),radius);

return model;
} else {
return model;
}
});

app3.main.drawRect = (function app3$main$main_$_sketch_$_drawRect(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null),entity)){
var map__37242 = entity;
var map__37242__$1 = (((((!((map__37242 == null))))?(((((map__37242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37242):map__37242);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"size","size",1098693007));
p.rect(cljs.core.first(pos),cljs.core.second(pos),cljs.core.first(size),cljs.core.second(size));

return model;
} else {
return model;
}
});

app3.main.drawWeapon = (function app3$main$main_$_sketch_$_drawWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"weapon","weapon",-504830232)], null),entity)){
var map__37265 = entity;
var map__37265__$1 = (((((!((map__37265 == null))))?(((((map__37265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37265):map__37265);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"weapon","weapon",-504830232));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawState = (function app3$main$main_$_sketch_$_drawState(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__37269 = entity;
var map__37269__$1 = (((((!((map__37269 == null))))?(((((map__37269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37269):map__37269);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
p.text(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type),cljs.core.first(pos),cljs.core.second(pos));

return model;
} else {
return model;
}
});

app3.main.drawUseWeapon = (function app3$main$main_$_sketch_$_drawUseWeapon(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145),new cljs.core.Keyword(null,"position","position",-2011731912)], null),entity)){
var map__37275 = entity;
var map__37275__$1 = (((((!((map__37275 == null))))?(((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37275):map__37275);
var useW = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"useWeapon","useWeapon",-65387145));
var vec__37276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37276,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37276,(1),null);
p.fill((0));

p.text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weapon","weapon",-504830232).cljs$core$IFn$_invoke$arity$1(useW))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bulletCount","bulletCount",1743690935).cljs$core$IFn$_invoke$arity$1(useW))].join(''),x,y);

return model;
} else {
return model;
}
});

app3.main.drawActionValue = (function app3$main$main_$_sketch_$_drawActionValue(model,entity){
if(app3.tool.checkProperty(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"action","action",-811238024)], null),entity)){
var map__37283 = entity;
var map__37283__$1 = (((((!((map__37283 == null))))?(((((map__37283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37283):map__37283);
var brain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"brain","brain",428499577));
var vec__37284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(1),null);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var _ = entities.pipe((function (){var G__37292 = ((function (entities,view){
return (function (a,entities__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (entities,view){
return (function (a__$1,p__37295){
var map__37297 = p__37295;
var map__37297__$1 = (((((!((map__37297 == null))))?(((((map__37297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37297):map__37297);
var obj = map__37297__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null));
var curr = hp;
var offset = (curr - old);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core.constantly(hp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.constantly(position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"old","old",-1825222690)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(offset / (10))));
});})(entities,view))
,a,entities__$1);
});})(entities,view))
;
var G__37293 = cljs.core.PersistentArrayMap.EMPTY;
return (app3.main.scan.cljs$core$IFn$_invoke$arity$2 ? app3.main.scan.cljs$core$IFn$_invoke$arity$2(G__37292,G__37293) : app3.main.scan.call(null,G__37292,G__37293));
})()).subscribe(((function (entities,view){
return (function (m){
return cljs.core.reset_BANG_(view,m);
});})(entities,view))
);
return ((function (entities,view,_){
return (function (){
var seq__37328 = cljs.core.seq(cljs.core.deref(view));
var chunk__37329 = null;
var count__37330 = (0);
var i__37331 = (0);
while(true){
if((i__37331 < count__37330)){
var hp = chunk__37329.cljs$core$IIndexed$_nth$arity$2(null,i__37331);
var barLen_37595 = (100);
var vec__37357_37596 = hp;
var id_37597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37357_37596,(0),null);
var map__37360_37598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37357_37596,(1),null);
var map__37360_37599__$1 = (((((!((map__37360_37598 == null))))?(((((map__37360_37598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360_37598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37360_37598):map__37360_37598);
var hp_37600__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360_37599__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_37601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360_37599__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_37602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360_37599__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__37361_37603 = position_37601;
var x_37604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37361_37603,(0),null);
var y_37605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37361_37603,(1),null);
var vec__37364_37606 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_37601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_37607__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37364_37606,(0),null);
var y_37608__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37364_37606,(1),null);
p.fill((0));

p.rect(x_37607__$1,y_37608__$1,barLen_37595,(5));

p.fill((255),(0),(0));

p.rect(x_37607__$1,y_37608__$1,((old_37602 / (100)) * barLen_37595),(5));

p.fill((0),(255),(0));

p.rect(x_37607__$1,y_37608__$1,((hp_37600__$1 / (100)) * barLen_37595),(5));



var G__37614 = seq__37328;
var G__37615 = chunk__37329;
var G__37616 = count__37330;
var G__37617 = (i__37331 + (1));
seq__37328 = G__37614;
chunk__37329 = G__37615;
count__37330 = G__37616;
i__37331 = G__37617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37328);
if(temp__5735__auto__){
var seq__37328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37328__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37328__$1);
var G__37620 = cljs.core.chunk_rest(seq__37328__$1);
var G__37621 = c__4550__auto__;
var G__37622 = cljs.core.count(c__4550__auto__);
var G__37623 = (0);
seq__37328 = G__37620;
chunk__37329 = G__37621;
count__37330 = G__37622;
i__37331 = G__37623;
continue;
} else {
var hp = cljs.core.first(seq__37328__$1);
var barLen_37624 = (100);
var vec__37368_37625 = hp;
var id_37626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368_37625,(0),null);
var map__37371_37627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368_37625,(1),null);
var map__37371_37628__$1 = (((((!((map__37371_37627 == null))))?(((((map__37371_37627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37371_37627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37371_37627):map__37371_37627);
var hp_37629__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371_37628__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var position_37630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371_37628__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var old_37631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371_37628__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var vec__37372_37632 = position_37630;
var x_37633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372_37632,(0),null);
var y_37634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372_37632,(1),null);
var vec__37375_37635 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,position_37630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-50),(20)], null));
var x_37636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37375_37635,(0),null);
var y_37637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37375_37635,(1),null);
p.fill((0));

p.rect(x_37636__$1,y_37637__$1,barLen_37624,(5));

p.fill((255),(0),(0));

p.rect(x_37636__$1,y_37637__$1,((old_37631 / (100)) * barLen_37624),(5));

p.fill((0),(255),(0));

p.rect(x_37636__$1,y_37637__$1,((hp_37629__$1 / (100)) * barLen_37624),(5));



var G__37652 = cljs.core.next(seq__37328__$1);
var G__37653 = null;
var G__37654 = (0);
var G__37655 = (0);
seq__37328 = G__37652;
chunk__37329 = G__37653;
count__37330 = G__37654;
i__37331 = G__37655;
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

var m_37669 = cljs.core.deref(app3.main.model);
var plyr_37670 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(m_37669)));
var seq__37379_37672 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plyr_37670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697)], null)));
var chunk__37380_37673 = null;
var count__37381_37674 = (0);
var i__37382_37675 = (0);
while(true){
if((i__37382_37675 < count__37381_37674)){
var vec__37399_37676 = chunk__37380_37673.cljs$core$IIndexed$_nth$arity$2(null,i__37382_37675);
var k_37677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37399_37676,(0),null);
var v_37678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37399_37676,(1),null);

var G__37679 = seq__37379_37672;
var G__37680 = chunk__37380_37673;
var G__37681 = count__37381_37674;
var G__37682 = (i__37382_37675 + (1));
seq__37379_37672 = G__37679;
chunk__37380_37673 = G__37680;
count__37381_37674 = G__37681;
i__37382_37675 = G__37682;
continue;
} else {
var temp__5735__auto___37683 = cljs.core.seq(seq__37379_37672);
if(temp__5735__auto___37683){
var seq__37379_37685__$1 = temp__5735__auto___37683;
if(cljs.core.chunked_seq_QMARK_(seq__37379_37685__$1)){
var c__4550__auto___37686 = cljs.core.chunk_first(seq__37379_37685__$1);
var G__37687 = cljs.core.chunk_rest(seq__37379_37685__$1);
var G__37688 = c__4550__auto___37686;
var G__37689 = cljs.core.count(c__4550__auto___37686);
var G__37690 = (0);
seq__37379_37672 = G__37687;
chunk__37380_37673 = G__37688;
count__37381_37674 = G__37689;
i__37382_37675 = G__37690;
continue;
} else {
var vec__37404_37693 = cljs.core.first(seq__37379_37685__$1);
var k_37694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404_37693,(0),null);
var v_37695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404_37693,(1),null);

var G__37696 = cljs.core.next(seq__37379_37685__$1);
var G__37697 = null;
var G__37698 = (0);
var G__37699 = (0);
seq__37379_37672 = G__37696;
chunk__37380_37673 = G__37697;
count__37381_37674 = G__37698;
i__37382_37675 = G__37699;
continue;
}
} else {
}
}
break;
}

var tmodel_37700 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var table_37701 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var __37702 = (app3.main.timer.cljs$core$IFn$_invoke$arity$2 ? app3.main.timer.cljs$core$IFn$_invoke$arity$2((0),(5000)) : app3.main.timer.call(null,(0),(5000))).pipe(rxjs.operators.map(((function (tmodel_37700,table_37701){
return (function (){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app3.main.model))));
});})(tmodel_37700,table_37701))
),rxjs.operators.map(((function (tmodel_37700,table_37701){
return (function (p1__37053_SHARP_){
return new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(p1__37053_SHARP_);
});})(tmodel_37700,table_37701))
)).subscribe(((function (tmodel_37700,table_37701){
return (function (brain){
return cljs.core.reset_BANG_(table_37701,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(brain));
});})(tmodel_37700,table_37701))
);
app3.main.drawQtable = ((function (tmodel_37700,table_37701,__37702){
return (function app3$main$main_$_drawQtable(){
var tm = cljs.core.deref(tmodel_37700);
var t = cljs.core.deref(table_37701);
if(cljs.core.truth_(tm)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_37700,table_37701,__37702){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_37700,cljs.core.not);
});})(tm,t,tmodel_37700,table_37701,__37702))
], null),"close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (tm,t,tmodel_37700,table_37701,__37702){
return (function app3$main$main_$_drawQtable_$_iter__37414(s__37415){
return (new cljs.core.LazySeq(null,((function (tm,t,tmodel_37700,table_37701,__37702){
return (function (){
var s__37415__$1 = s__37415;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37415__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__37464 = cljs.core.first(xs__6292__auto__);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37464,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37464,(1),null);
var iterys__4519__auto__ = ((function (s__37415__$1,vec__37464,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_37700,table_37701,__37702){
return (function app3$main$main_$_drawQtable_$_iter__37414_$_iter__37416(s__37417){
return (new cljs.core.LazySeq(null,((function (s__37415__$1,vec__37464,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_37700,table_37701,__37702){
return (function (){
var s__37417__$1 = s__37417;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37417__$1);
if(temp__5735__auto____$1){
var s__37417__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37417__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37417__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37419 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37418 = (0);
while(true){
if((i__37418 < size__4522__auto__)){
var vec__37471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37418);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37471,(1),null);
cljs.core.chunk_append(b__37419,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)));

var G__37724 = (i__37418 + (1));
i__37418 = G__37724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37419),app3$main$main_$_drawQtable_$_iter__37414_$_iter__37416(cljs.core.chunk_rest(s__37417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37419),null);
}
} else {
var vec__37474 = cljs.core.first(s__37417__$2);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37474,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37474,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((value < (0)))?"red":(((value > (5)))?"green":"white"))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')], null)),app3$main$main_$_drawQtable_$_iter__37414_$_iter__37416(cljs.core.rest(s__37417__$2)));
}
} else {
return null;
}
break;
}
});})(s__37415__$1,vec__37464,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_37700,table_37701,__37702))
,null,null));
});})(s__37415__$1,vec__37464,state,sub,xs__6292__auto__,temp__5735__auto__,tm,t,tmodel_37700,table_37701,__37702))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(sub));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$main$main_$_drawQtable_$_iter__37414(cljs.core.rest(s__37415__$1)));
} else {
var G__37727 = cljs.core.rest(s__37415__$1);
s__37415__$1 = G__37727;
continue;
}
} else {
return null;
}
break;
}
});})(tm,t,tmodel_37700,table_37701,__37702))
,null,null));
});})(tm,t,tmodel_37700,table_37701,__37702))
;
return iter__4523__auto__(t);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tm,t,tmodel_37700,table_37701,__37702){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tmodel_37700,cljs.core.not);
});})(tm,t,tmodel_37700,table_37701,__37702))
], null),"open"], null);
}
});})(tmodel_37700,table_37701,__37702))
;

app3.main.mountit = ((function (tmodel_37700,table_37701,__37702){
return (function app3$main$main_$_mountit(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app3.main.drawQtable], null),document.getElementById("qtable"));
});})(tmodel_37700,table_37701,__37702))
;

app3.main.mountit();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start app xx2"], 0));
});

//# sourceMappingURL=app3.main.js.map
