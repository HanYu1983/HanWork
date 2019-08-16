goog.provide('app.t7.platform');
goog.require('cljs.core');
goog.require('app.t7.tool');
app.t7.platform.cw = (50);
app.t7.platform.ch = (50);
app.t7.platform.data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1)], null)], null);
app.t7.platform.boxCorner = (function app$t7$platform$boxCorner(p__37925,p__37926){
var vec__37927 = p__37925;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(1),null);
var vec__37930 = p__37926;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37930,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37930,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null)], null);
});
app.t7.platform.collideWall = (function app$t7$platform$collideWall(p__37941){
var map__37942 = p__37941;
var map__37942__$1 = (((((!((map__37942 == null))))?(((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37942):map__37942);
var self = map__37942__$1;
var vec__37943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943,(1),null);
var pos = vec__37943;
var vec__37946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(1),null);
var size = vec__37946;
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null))))){
return self;
} else {
var vec__37955 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(1),null);
var vec__37958 = app.t7.platform.boxCorner(pos,size);
var lt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(0),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(1),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(2),null);
var lb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(3),null);
var corners = vec__37958;
var walls = (function (){var iter__4523__auto__ = ((function (vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function app$t7$platform$collideWall_$_iter__37962(s__37963){
return (new cljs.core.LazySeq(null,((function (vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (){
var s__37963__$1 = s__37963;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37963__$1);
if(temp__5735__auto__){
var s__37963__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37963__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37963__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37965 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37964 = (0);
while(true){
if((i__37964 < size__4522__auto__)){
var c__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37964);
cljs.core.chunk_append(b__37965,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))));

var G__38378 = (i__37964 + (1));
i__37964 = G__38378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37965),app$t7$platform$collideWall_$_iter__37962(cljs.core.chunk_rest(s__37963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37965),null);
}
} else {
var c__$1 = cljs.core.first(s__37963__$2);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))),app$t7$platform$collideWall_$_iter__37962(cljs.core.rest(s__37963__$2)));
}
} else {
return null;
}
break;
}
});})(vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
,null,null));
});})(vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
;
return iter__4523__auto__(corners);
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (self__$1,p__37988){
var vec__37990 = p__37988;
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(0),null);
var wall_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(1),null);
if(cljs.core.not(wall_QMARK_)){
return self__$1;
} else {
var pred__37994 = cljs.core._EQ_;
var expr__37997 = corner;
if(cljs.core.truth_((pred__37994.cljs$core$IFn$_invoke$arity$2 ? pred__37994.cljs$core$IFn$_invoke$arity$2(lt,expr__37997) : pred__37994.call(null,lt,expr__37997)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (p__38000){
var vec__38001 = p__38000;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38001,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38001,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((c + (1)) * app.t7.platform.cw),y__$1], null);
});})(pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
);
} else {
if(cljs.core.truth_((pred__37994.cljs$core$IFn$_invoke$arity$2 ? pred__37994.cljs$core$IFn$_invoke$arity$2(lb,expr__37997) : pred__37994.call(null,lb,expr__37997)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (p__38004){
var vec__38007 = p__38004;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
);
} else {
if(cljs.core.truth_((pred__37994.cljs$core$IFn$_invoke$arity$2 ? pred__37994.cljs$core$IFn$_invoke$arity$2(rt,expr__37997) : pred__37994.call(null,rt,expr__37997)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (p__38016){
var vec__38017 = p__38016;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38017,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38017,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c + (1)) * app.t7.platform.cw) - w),y__$1], null);
});})(pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
);
} else {
if(cljs.core.truth_((pred__37994.cljs$core$IFn$_invoke$arity$2 ? pred__37994.cljs$core$IFn$_invoke$arity$2(rb,expr__37997) : pred__37994.call(null,rb,expr__37997)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size){
return (function (p__38021){
var vec__38028 = p__38021;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__37994,expr__37997,vec__37990,corner,wall_QMARK_,vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
);
} else {
return self__$1;
}
}
}
}
}
});})(vec__37955,c,r,vec__37958,lt,rt,rb,lb,corners,walls,map__37942,map__37942__$1,self,vec__37943,x,y,pos,vec__37946,w,h,size))
,self,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,corners,walls));
}
});
app.t7.platform.draw = (function app$t7$platform$draw(p){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var seq__38046 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(app.t7.platform.data)));
var chunk__38051 = null;
var count__38052 = (0);
var i__38053 = (0);
while(true){
if((i__38053 < count__38052)){
var y = chunk__38051.cljs$core$IIndexed$_nth$arity$2(null,i__38053);
var seq__38054_38452 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(app.t7.platform.data))));
var chunk__38055_38453 = null;
var count__38056_38454 = (0);
var i__38057_38455 = (0);
while(true){
if((i__38057_38455 < count__38056_38454)){
var x_38463 = chunk__38055_38453.cljs$core$IIndexed$_nth$arity$2(null,i__38057_38455);
var val_38465 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38463], null));
var color_38466 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38465))?(100):(255));
p.fill(color_38466);

p.rect((x_38463 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38469 = seq__38054_38452;
var G__38470 = chunk__38055_38453;
var G__38471 = count__38056_38454;
var G__38472 = (i__38057_38455 + (1));
seq__38054_38452 = G__38469;
chunk__38055_38453 = G__38470;
count__38056_38454 = G__38471;
i__38057_38455 = G__38472;
continue;
} else {
var temp__5735__auto___38473 = cljs.core.seq(seq__38054_38452);
if(temp__5735__auto___38473){
var seq__38054_38475__$1 = temp__5735__auto___38473;
if(cljs.core.chunked_seq_QMARK_(seq__38054_38475__$1)){
var c__4550__auto___38476 = cljs.core.chunk_first(seq__38054_38475__$1);
var G__38477 = cljs.core.chunk_rest(seq__38054_38475__$1);
var G__38478 = c__4550__auto___38476;
var G__38479 = cljs.core.count(c__4550__auto___38476);
var G__38480 = (0);
seq__38054_38452 = G__38477;
chunk__38055_38453 = G__38478;
count__38056_38454 = G__38479;
i__38057_38455 = G__38480;
continue;
} else {
var x_38485 = cljs.core.first(seq__38054_38475__$1);
var val_38486 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38485], null));
var color_38487 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38486))?(100):(255));
p.fill(color_38487);

p.rect((x_38485 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38488 = cljs.core.next(seq__38054_38475__$1);
var G__38489 = null;
var G__38490 = (0);
var G__38491 = (0);
seq__38054_38452 = G__38488;
chunk__38055_38453 = G__38489;
count__38056_38454 = G__38490;
i__38057_38455 = G__38491;
continue;
}
} else {
}
}
break;
}

var G__38498 = seq__38046;
var G__38499 = chunk__38051;
var G__38500 = count__38052;
var G__38501 = (i__38053 + (1));
seq__38046 = G__38498;
chunk__38051 = G__38499;
count__38052 = G__38500;
i__38053 = G__38501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38046);
if(temp__5735__auto__){
var seq__38046__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38046__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38046__$1);
var G__38509 = cljs.core.chunk_rest(seq__38046__$1);
var G__38510 = c__4550__auto__;
var G__38511 = cljs.core.count(c__4550__auto__);
var G__38512 = (0);
seq__38046 = G__38509;
chunk__38051 = G__38510;
count__38052 = G__38511;
i__38053 = G__38512;
continue;
} else {
var y = cljs.core.first(seq__38046__$1);
var seq__38047_38515 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(app.t7.platform.data))));
var chunk__38048_38516 = null;
var count__38049_38517 = (0);
var i__38050_38518 = (0);
while(true){
if((i__38050_38518 < count__38049_38517)){
var x_38522 = chunk__38048_38516.cljs$core$IIndexed$_nth$arity$2(null,i__38050_38518);
var val_38523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38522], null));
var color_38524 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38523))?(100):(255));
p.fill(color_38524);

p.rect((x_38522 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38525 = seq__38047_38515;
var G__38526 = chunk__38048_38516;
var G__38527 = count__38049_38517;
var G__38528 = (i__38050_38518 + (1));
seq__38047_38515 = G__38525;
chunk__38048_38516 = G__38526;
count__38049_38517 = G__38527;
i__38050_38518 = G__38528;
continue;
} else {
var temp__5735__auto___38531__$1 = cljs.core.seq(seq__38047_38515);
if(temp__5735__auto___38531__$1){
var seq__38047_38533__$1 = temp__5735__auto___38531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38047_38533__$1)){
var c__4550__auto___38539 = cljs.core.chunk_first(seq__38047_38533__$1);
var G__38545 = cljs.core.chunk_rest(seq__38047_38533__$1);
var G__38546 = c__4550__auto___38539;
var G__38547 = cljs.core.count(c__4550__auto___38539);
var G__38548 = (0);
seq__38047_38515 = G__38545;
chunk__38048_38516 = G__38546;
count__38049_38517 = G__38547;
i__38050_38518 = G__38548;
continue;
} else {
var x_38553 = cljs.core.first(seq__38047_38533__$1);
var val_38554 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38553], null));
var color_38555 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38554))?(100):(255));
p.fill(color_38555);

p.rect((x_38553 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38559 = cljs.core.next(seq__38047_38533__$1);
var G__38560 = null;
var G__38561 = (0);
var G__38562 = (0);
seq__38047_38515 = G__38559;
chunk__38048_38516 = G__38560;
count__38049_38517 = G__38561;
i__38050_38518 = G__38562;
continue;
}
} else {
}
}
break;
}

var G__38563 = cljs.core.next(seq__38046__$1);
var G__38564 = null;
var G__38565 = (0);
var G__38566 = (0);
seq__38046 = G__38563;
chunk__38051 = G__38564;
count__38052 = G__38565;
i__38053 = G__38566;
continue;
}
} else {
return null;
}
}
break;
}
})());
});

//# sourceMappingURL=app.t7.platform.js.map
