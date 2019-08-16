goog.provide('app3.system.bulletSys');
goog.require('cljs.core');
goog.require('app3.emitter');
app3.system.bulletSys.checkBulletHitPlayer = (function app3$system$bulletSys$checkBulletHitPlayer(model,event){
var pred__36188 = cljs.core._EQ_;
var expr__36189 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36191 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36192 = expr__36189;
return (pred__36188.cljs$core$IFn$_invoke$arity$2 ? pred__36188.cljs$core$IFn$_invoke$arity$2(G__36191,G__36192) : pred__36188.call(null,G__36191,G__36192));
})())){
var vec__36193 = cljs.core.rest(event);
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var bullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var collides = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (p__36204){
var vec__36205 = p__36204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205,(0),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205,(1),null);
return isCollide;
});})(players,enemies,bullets,vec__36193,pred__36188,expr__36189))
,(function (){var iter__4523__auto__ = ((function (players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function app3$system$bulletSys$checkBulletHitPlayer_$_iter__36208(s__36209){
return (new cljs.core.LazySeq(null,((function (players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (){
var s__36209__$1 = s__36209;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36209__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var o1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36209__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function app3$system$bulletSys$checkBulletHitPlayer_$_iter__36208_$_iter__36210(s__36211){
return (new cljs.core.LazySeq(null,((function (s__36209__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (){
var s__36211__$1 = s__36211;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36211__$1);
if(temp__5735__auto____$1){
var s__36211__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36211__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36211__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36213 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36212 = (0);
while(true){
if((i__36212 < size__4522__auto__)){
var o2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36212);
cljs.core.chunk_append(b__36213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),(function (){var fromPlyrId = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(o2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var toId = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o1);
var shouldIgnore = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fromPlyrId,toId);
if(shouldIgnore){
return false;
} else {
return app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(30));
}
})()], null));

var G__36361 = (i__36212 + (1));
i__36212 = G__36361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36213),app3$system$bulletSys$checkBulletHitPlayer_$_iter__36208_$_iter__36210(cljs.core.chunk_rest(s__36211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36213),null);
}
} else {
var o2 = cljs.core.first(s__36211__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),(function (){var fromPlyrId = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(o2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var toId = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o1);
var shouldIgnore = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fromPlyrId,toId);
if(shouldIgnore){
return false;
} else {
return app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(30));
}
})()], null),app3$system$bulletSys$checkBulletHitPlayer_$_iter__36208_$_iter__36210(cljs.core.rest(s__36211__$2)));
}
} else {
return null;
}
break;
}
});})(s__36209__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36193,pred__36188,expr__36189))
,null,null));
});})(s__36209__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36193,pred__36188,expr__36189))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(bullets));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$system$bulletSys$checkBulletHitPlayer_$_iter__36208(cljs.core.rest(s__36209__$1)));
} else {
var G__36362 = cljs.core.rest(s__36209__$1);
s__36209__$1 = G__36362;
continue;
}
} else {
return null;
}
break;
}
});})(players,enemies,bullets,vec__36193,pred__36188,expr__36189))
,null,null));
});})(players,enemies,bullets,vec__36193,pred__36188,expr__36189))
;
return iter__4523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(players,enemies));
})()));
if((cljs.core.count(collides) > (0))){
var hitPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,collides);
var hitBullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collides);
var plyrGroup = cljs.core.group_by(cljs.core.identity,hitPlyrs);
var plyrs = cljs.core.keys(plyrGroup);
var hitCounts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(plyrGroup));
return app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bulletCollidePlayer","bulletCollidePlayer",-286669229),collides], null),(function (){var fexpr__36232 = ((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (model__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189){
return (function (e,hitCnt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"hp","hp",-1541237831),(function (){var x__4219__auto__ = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(e) - ((10) * hitCnt));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189))
,plyrs,hitCounts)),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(hitBullets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),origin)));
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189))
);
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36193,pred__36188,expr__36189))
;
return fexpr__36232(model);
})());
} else {
return model;
}
} else {
return model;
}
});
app3.system.bulletSys.removeBullet = (function app3$system$bulletSys$removeBullet(model,event){
var pred__36233 = cljs.core._EQ_;
var expr__36234 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36236 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36237 = expr__36234;
return (pred__36233.cljs$core$IFn$_invoke$arity$2 ? pred__36233.cljs$core$IFn$_invoke$arity$2(G__36236,G__36237) : pred__36233.call(null,G__36236,G__36237));
})())){
var vec__36238 = cljs.core.rest(event);
var bullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var outBullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bullets,vec__36238,pred__36233,expr__36234){
return (function (p__36241){
var map__36242 = p__36241;
var map__36242__$1 = (((((!((map__36242 == null))))?(((((map__36242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36242):map__36242);
var bullet = map__36242__$1;
var vec__36243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36243,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36243,(1),null);
var maxFlyLength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242__$1,new cljs.core.Keyword(null,"flyLength","flyLength",-656492776));
var fly = app3.tool.length(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bullet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"position","position",-2011731912)], null))));
return (((fly > maxFlyLength)) || ((x < (0))) || ((x > (600))) || ((y < (0))) || ((y > (600))));
});})(bullets,vec__36238,pred__36233,expr__36234))
,bullets);
if((cljs.core.count(outBullets) > (0))){
app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bulletHitWall","bulletHitWall",-1352075893),outBullets], null),null);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (outBullets,bullets,vec__36238,pred__36233,expr__36234){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(outBullets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),origin));
});})(outBullets,bullets,vec__36238,pred__36233,expr__36234))
);
} else {
return model;
}
} else {
return model;
}
});

//# sourceMappingURL=app3.system.bulletSys.js.map
