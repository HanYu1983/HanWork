goog.provide('app3.system.bulletSys');
goog.require('cljs.core');
goog.require('app3.emitter');
app3.system.bulletSys.checkBulletHitPlayer = (function app3$system$bulletSys$checkBulletHitPlayer(model,event){
var pred__36222 = cljs.core._EQ_;
var expr__36223 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36226 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36227 = expr__36223;
return (pred__36222.cljs$core$IFn$_invoke$arity$2 ? pred__36222.cljs$core$IFn$_invoke$arity$2(G__36226,G__36227) : pred__36222.call(null,G__36226,G__36227));
})())){
var vec__36228 = cljs.core.rest(event);
var players = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var enemies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var bullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var collides = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (p__36231){
var vec__36232 = p__36231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232,(0),null);
var isCollide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232,(1),null);
return isCollide;
});})(players,enemies,bullets,vec__36228,pred__36222,expr__36223))
,(function (){var iter__4523__auto__ = ((function (players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function app3$system$bulletSys$checkBulletHitPlayer_$_iter__36238(s__36239){
return (new cljs.core.LazySeq(null,((function (players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (){
var s__36239__$1 = s__36239;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36239__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var o1 = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__36239__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function app3$system$bulletSys$checkBulletHitPlayer_$_iter__36238_$_iter__36242(s__36243){
return (new cljs.core.LazySeq(null,((function (s__36239__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (){
var s__36243__$1 = s__36243;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36243__$1);
if(temp__5735__auto____$1){
var s__36243__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36243__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36243__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36245 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36244 = (0);
while(true){
if((i__36244 < size__4522__auto__)){
var o2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36244);
cljs.core.chunk_append(b__36245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),(function (){var fromPlyrId = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(o2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var toId = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o1);
var shouldIgnore = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fromPlyrId,toId);
if(shouldIgnore){
return false;
} else {
return app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(30));
}
})()], null));

var G__36292 = (i__36244 + (1));
i__36244 = G__36292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36245),app3$system$bulletSys$checkBulletHitPlayer_$_iter__36238_$_iter__36242(cljs.core.chunk_rest(s__36243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36245),null);
}
} else {
var o2 = cljs.core.first(s__36243__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2], null),(function (){var fromPlyrId = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(o2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var toId = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o1);
var shouldIgnore = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fromPlyrId,toId);
if(shouldIgnore){
return false;
} else {
return app3.tool.checkCollide(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o2),(30));
}
})()], null),app3$system$bulletSys$checkBulletHitPlayer_$_iter__36238_$_iter__36242(cljs.core.rest(s__36243__$2)));
}
} else {
return null;
}
break;
}
});})(s__36239__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36228,pred__36222,expr__36223))
,null,null));
});})(s__36239__$1,o1,xs__6292__auto__,temp__5735__auto__,players,enemies,bullets,vec__36228,pred__36222,expr__36223))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(bullets));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,app3$system$bulletSys$checkBulletHitPlayer_$_iter__36238(cljs.core.rest(s__36239__$1)));
} else {
var G__36299 = cljs.core.rest(s__36239__$1);
s__36239__$1 = G__36299;
continue;
}
} else {
return null;
}
break;
}
});})(players,enemies,bullets,vec__36228,pred__36222,expr__36223))
,null,null));
});})(players,enemies,bullets,vec__36228,pred__36222,expr__36223))
;
return iter__4523__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(players,enemies));
})()));
if((cljs.core.count(collides) > (0))){
var hitPlyrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,collides);
var hitBullets = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,collides);
var plyrGroup = cljs.core.group_by(cljs.core.identity,hitPlyrs);
var plyrs = cljs.core.keys(plyrGroup);
var hitCounts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(plyrGroup));
return app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bulletCollidePlayer","bulletCollidePlayer",-286669229),collides], null),(function (){var fexpr__36254 = ((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (model__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(plyrs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223){
return (function (e,hitCnt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"hp","hp",-1541237831),(function (){var x__4219__auto__ = (new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(e) - ((10) * hitCnt));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223))
,plyrs,hitCounts)),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(hitBullets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),origin)));
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223))
);
});})(hitPlyrs,hitBullets,plyrGroup,plyrs,hitCounts,collides,players,enemies,bullets,vec__36228,pred__36222,expr__36223))
;
return fexpr__36254(model);
})());
} else {
return model;
}
} else {
return model;
}
});
app3.system.bulletSys.removeBullet = (function app3$system$bulletSys$removeBullet(model,event){
var pred__36259 = cljs.core._EQ_;
var expr__36260 = cljs.core.first(event);
if(cljs.core.truth_((function (){var G__36265 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__36266 = expr__36260;
return (pred__36259.cljs$core$IFn$_invoke$arity$2 ? pred__36259.cljs$core$IFn$_invoke$arity$2(G__36265,G__36266) : pred__36259.call(null,G__36265,G__36266));
})())){
var vec__36267 = cljs.core.rest(event);
var bullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app3.tool.checkProperty,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullet","bullet",726988937)], null)),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(model));
var outBullets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bullets,vec__36267,pred__36259,expr__36260){
return (function (p__36270){
var map__36271 = p__36270;
var map__36271__$1 = (((((!((map__36271 == null))))?(((((map__36271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36271):map__36271);
var bullet = map__36271__$1;
var vec__36272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(1),null);
var maxFlyLength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271__$1,new cljs.core.Keyword(null,"flyLength","flyLength",-656492776));
var fly = app3.tool.length(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bullet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"position","position",-2011731912)], null))));
return (((fly > maxFlyLength)) || ((x < (0))) || ((x > (600))) || ((y < (0))) || ((y > (600))));
});})(bullets,vec__36267,pred__36259,expr__36260))
,bullets);
if((cljs.core.count(outBullets) > (0))){
app3.emitter.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bulletHitWall","bulletHitWall",-1352075893),outBullets], null),null);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.Keyword(null,"entities","entities",1940967403),((function (outBullets,bullets,vec__36267,pred__36259,expr__36260){
return (function (origin){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(outBullets,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),origin));
});})(outBullets,bullets,vec__36267,pred__36259,expr__36260))
);
} else {
return model;
}
} else {
return model;
}
});

//# sourceMappingURL=app3.system.bulletSys.js.map
