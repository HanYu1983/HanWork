// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t7.platform');
goog.require('cljs.core');
goog.require('app.t7.tool');
app.t7.platform.cw = (50);
app.t7.platform.ch = (50);
app.t7.platform.data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1)], null)], null);
app.t7.platform.boxCorner = (function app$t7$platform$boxCorner(p__10512,p__10513){
var vec__10514 = p__10512;
var x = cljs.core.nth.call(null,vec__10514,(0),null);
var y = cljs.core.nth.call(null,vec__10514,(1),null);
var vec__10517 = p__10513;
var w = cljs.core.nth.call(null,vec__10517,(0),null);
var h = cljs.core.nth.call(null,vec__10517,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null)], null);
});
app.t7.platform.collideWall = (function app$t7$platform$collideWall(p__10520){
var map__10521 = p__10520;
var map__10521__$1 = ((((!((map__10521 == null)))?(((((map__10521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10521):map__10521);
var self = map__10521__$1;
var vec__10522 = cljs.core.get.call(null,map__10521__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__10522,(0),null);
var y = cljs.core.nth.call(null,vec__10522,(1),null);
var pos = vec__10522;
var vec__10525 = cljs.core.get.call(null,map__10521__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__10525,(0),null);
var h = cljs.core.nth.call(null,vec__10525,(1),null);
var size = vec__10525;
if(cljs.core.not.call(null,app.t7.tool.checkProperty.call(null,self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null)))){
return self;
} else {
var vec__10529 = cljs.core.map.call(null,cljs.core.comp.call(null,Math.floor,cljs.core._SLASH_),pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null));
var c = cljs.core.nth.call(null,vec__10529,(0),null);
var r = cljs.core.nth.call(null,vec__10529,(1),null);
var vec__10532 = app.t7.platform.boxCorner.call(null,pos,size);
var lt = cljs.core.nth.call(null,vec__10532,(0),null);
var rt = cljs.core.nth.call(null,vec__10532,(1),null);
var rb = cljs.core.nth.call(null,vec__10532,(2),null);
var lb = cljs.core.nth.call(null,vec__10532,(3),null);
var corners = vec__10532;
var walls = (function (){var iter__4292__auto__ = ((function (vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function app$t7$platform$collideWall_$_iter__10535(s__10536){
return (new cljs.core.LazySeq(null,((function (vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (){
var s__10536__$1 = s__10536;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10536__$1);
if(temp__5457__auto__){
var s__10536__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10536__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__10536__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__10538 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__10537 = (0);
while(true){
if((i__10537 < size__4291__auto__)){
var c__$1 = cljs.core._nth.call(null,c__4290__auto__,i__10537);
cljs.core.chunk_append.call(null,b__10538,cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,app.t7.platform.data,cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))));

var G__10562 = (i__10537 + (1));
i__10537 = G__10562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),app$t7$platform$collideWall_$_iter__10535.call(null,cljs.core.chunk_rest.call(null,s__10536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),null);
}
} else {
var c__$1 = cljs.core.first.call(null,s__10536__$2);
return cljs.core.cons.call(null,cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,app.t7.platform.data,cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))),app$t7$platform$collideWall_$_iter__10535.call(null,cljs.core.rest.call(null,s__10536__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
,null,null));
});})(vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
;
return iter__4292__auto__.call(null,corners);
})();
return cljs.core.reduce.call(null,((function (vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (self__$1,p__10539){
var vec__10540 = p__10539;
var corner = cljs.core.nth.call(null,vec__10540,(0),null);
var wall_QMARK_ = cljs.core.nth.call(null,vec__10540,(1),null);
if(cljs.core.not.call(null,wall_QMARK_)){
return self__$1;
} else {
var pred__10543 = cljs.core._EQ_;
var expr__10544 = corner;
if(cljs.core.truth_(pred__10543.call(null,lt,expr__10544))){
return cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (p__10546){
var vec__10547 = p__10546;
var x__$1 = cljs.core.nth.call(null,vec__10547,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10547,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((c + (1)) * app.t7.platform.cw),y__$1], null);
});})(pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
);
} else {
if(cljs.core.truth_(pred__10543.call(null,lb,expr__10544))){
return cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (p__10550){
var vec__10551 = p__10550;
var x__$1 = cljs.core.nth.call(null,vec__10551,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10551,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
);
} else {
if(cljs.core.truth_(pred__10543.call(null,rt,expr__10544))){
return cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (p__10554){
var vec__10555 = p__10554;
var x__$1 = cljs.core.nth.call(null,vec__10555,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10555,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c + (1)) * app.t7.platform.cw) - w),y__$1], null);
});})(pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
);
} else {
if(cljs.core.truth_(pred__10543.call(null,rb,expr__10544))){
return cljs.core.update_in.call(null,self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size){
return (function (p__10558){
var vec__10559 = p__10558;
var x__$1 = cljs.core.nth.call(null,vec__10559,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10559,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__10543,expr__10544,vec__10540,corner,wall_QMARK_,vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
);
} else {
return self__$1;
}
}
}
}
}
});})(vec__10529,c,r,vec__10532,lt,rt,rb,lb,corners,walls,map__10521,map__10521__$1,self,vec__10522,x,y,pos,vec__10525,w,h,size))
,self,cljs.core.map.call(null,cljs.core.vector,corners,walls));
}
});
app.t7.platform.draw = (function app$t7$platform$draw(p){
return cljs.core.doall.call(null,(function (){var seq__10563 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,app.t7.platform.data)));
var chunk__10568 = null;
var count__10569 = (0);
var i__10570 = (0);
while(true){
if((i__10570 < count__10569)){
var y = cljs.core._nth.call(null,chunk__10568,i__10570);
var seq__10571_10575 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,app.t7.platform.data))));
var chunk__10572_10576 = null;
var count__10573_10577 = (0);
var i__10574_10578 = (0);
while(true){
if((i__10574_10578 < count__10573_10577)){
var x_10579 = cljs.core._nth.call(null,chunk__10572_10576,i__10574_10578);
var val_10580 = cljs.core.get_in.call(null,app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_10579], null));
var color_10581 = ((cljs.core._EQ_.call(null,(1),val_10580))?(100):(255));
p.fill(color_10581);

p.rect((x_10579 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__10582 = seq__10571_10575;
var G__10583 = chunk__10572_10576;
var G__10584 = count__10573_10577;
var G__10585 = (i__10574_10578 + (1));
seq__10571_10575 = G__10582;
chunk__10572_10576 = G__10583;
count__10573_10577 = G__10584;
i__10574_10578 = G__10585;
continue;
} else {
var temp__5457__auto___10586 = cljs.core.seq.call(null,seq__10571_10575);
if(temp__5457__auto___10586){
var seq__10571_10587__$1 = temp__5457__auto___10586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10571_10587__$1)){
var c__4319__auto___10588 = cljs.core.chunk_first.call(null,seq__10571_10587__$1);
var G__10589 = cljs.core.chunk_rest.call(null,seq__10571_10587__$1);
var G__10590 = c__4319__auto___10588;
var G__10591 = cljs.core.count.call(null,c__4319__auto___10588);
var G__10592 = (0);
seq__10571_10575 = G__10589;
chunk__10572_10576 = G__10590;
count__10573_10577 = G__10591;
i__10574_10578 = G__10592;
continue;
} else {
var x_10593 = cljs.core.first.call(null,seq__10571_10587__$1);
var val_10594 = cljs.core.get_in.call(null,app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_10593], null));
var color_10595 = ((cljs.core._EQ_.call(null,(1),val_10594))?(100):(255));
p.fill(color_10595);

p.rect((x_10593 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__10596 = cljs.core.next.call(null,seq__10571_10587__$1);
var G__10597 = null;
var G__10598 = (0);
var G__10599 = (0);
seq__10571_10575 = G__10596;
chunk__10572_10576 = G__10597;
count__10573_10577 = G__10598;
i__10574_10578 = G__10599;
continue;
}
} else {
}
}
break;
}

var G__10600 = seq__10563;
var G__10601 = chunk__10568;
var G__10602 = count__10569;
var G__10603 = (i__10570 + (1));
seq__10563 = G__10600;
chunk__10568 = G__10601;
count__10569 = G__10602;
i__10570 = G__10603;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10563);
if(temp__5457__auto__){
var seq__10563__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10563__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10563__$1);
var G__10604 = cljs.core.chunk_rest.call(null,seq__10563__$1);
var G__10605 = c__4319__auto__;
var G__10606 = cljs.core.count.call(null,c__4319__auto__);
var G__10607 = (0);
seq__10563 = G__10604;
chunk__10568 = G__10605;
count__10569 = G__10606;
i__10570 = G__10607;
continue;
} else {
var y = cljs.core.first.call(null,seq__10563__$1);
var seq__10564_10608 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,app.t7.platform.data))));
var chunk__10565_10609 = null;
var count__10566_10610 = (0);
var i__10567_10611 = (0);
while(true){
if((i__10567_10611 < count__10566_10610)){
var x_10612 = cljs.core._nth.call(null,chunk__10565_10609,i__10567_10611);
var val_10613 = cljs.core.get_in.call(null,app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_10612], null));
var color_10614 = ((cljs.core._EQ_.call(null,(1),val_10613))?(100):(255));
p.fill(color_10614);

p.rect((x_10612 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__10615 = seq__10564_10608;
var G__10616 = chunk__10565_10609;
var G__10617 = count__10566_10610;
var G__10618 = (i__10567_10611 + (1));
seq__10564_10608 = G__10615;
chunk__10565_10609 = G__10616;
count__10566_10610 = G__10617;
i__10567_10611 = G__10618;
continue;
} else {
var temp__5457__auto___10619__$1 = cljs.core.seq.call(null,seq__10564_10608);
if(temp__5457__auto___10619__$1){
var seq__10564_10620__$1 = temp__5457__auto___10619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10564_10620__$1)){
var c__4319__auto___10621 = cljs.core.chunk_first.call(null,seq__10564_10620__$1);
var G__10622 = cljs.core.chunk_rest.call(null,seq__10564_10620__$1);
var G__10623 = c__4319__auto___10621;
var G__10624 = cljs.core.count.call(null,c__4319__auto___10621);
var G__10625 = (0);
seq__10564_10608 = G__10622;
chunk__10565_10609 = G__10623;
count__10566_10610 = G__10624;
i__10567_10611 = G__10625;
continue;
} else {
var x_10626 = cljs.core.first.call(null,seq__10564_10620__$1);
var val_10627 = cljs.core.get_in.call(null,app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_10626], null));
var color_10628 = ((cljs.core._EQ_.call(null,(1),val_10627))?(100):(255));
p.fill(color_10628);

p.rect((x_10626 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__10629 = cljs.core.next.call(null,seq__10564_10620__$1);
var G__10630 = null;
var G__10631 = (0);
var G__10632 = (0);
seq__10564_10608 = G__10629;
chunk__10565_10609 = G__10630;
count__10566_10610 = G__10631;
i__10567_10611 = G__10632;
continue;
}
} else {
}
}
break;
}

var G__10633 = cljs.core.next.call(null,seq__10563__$1);
var G__10634 = null;
var G__10635 = (0);
var G__10636 = (0);
seq__10563 = G__10633;
chunk__10568 = G__10634;
count__10569 = G__10635;
i__10570 = G__10636;
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

//# sourceMappingURL=platform.js.map
