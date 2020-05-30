goog.provide('app.t7.platform');
goog.require('cljs.core');
goog.require('app.t7.tool');
app.t7.platform.cw = (50);
app.t7.platform.ch = (50);
app.t7.platform.data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1)], null)], null);
app.t7.platform.boxCorner = (function app$t7$platform$boxCorner(p__38092,p__38093){
var vec__38097 = p__38092;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(1),null);
var vec__38100 = p__38093;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38100,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38100,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null)], null);
});
app.t7.platform.collideWall = (function app$t7$platform$collideWall(p__38103){
var map__38104 = p__38103;
var map__38104__$1 = (((((!((map__38104 == null))))?(((((map__38104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38104):map__38104);
var self = map__38104__$1;
var vec__38105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38104__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(1),null);
var pos = vec__38105;
var vec__38108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38104__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108,(1),null);
var size = vec__38108;
if((!(app.t7.tool.checkProperty(self,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"size","size",1098693007)], null))))){
return self;
} else {
var vec__38113 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(1),null);
var vec__38116 = app.t7.platform.boxCorner(pos,size);
var lt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(0),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(1),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(2),null);
var lb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(3),null);
var corners = vec__38116;
var walls = (function (){var iter__4523__auto__ = ((function (vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function app$t7$platform$collideWall_$_iter__38119(s__38120){
return (new cljs.core.LazySeq(null,((function (vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (){
var s__38120__$1 = s__38120;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38120__$1);
if(temp__5735__auto__){
var s__38120__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38120__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38120__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38122 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38121 = (0);
while(true){
if((i__38121 < size__4522__auto__)){
var c__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38121);
cljs.core.chunk_append(b__38122,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))));

var G__38207 = (i__38121 + (1));
i__38121 = G__38207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38122),app$t7$platform$collideWall_$_iter__38119(cljs.core.chunk_rest(s__38120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38122),null);
}
} else {
var c__$1 = cljs.core.first(s__38120__$2);
return cljs.core.cons(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Math.floor,cljs.core._SLASH_),c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.t7.platform.cw,app.t7.platform.ch], null))))),app$t7$platform$collideWall_$_iter__38119(cljs.core.rest(s__38120__$2)));
}
} else {
return null;
}
break;
}
});})(vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
,null,null));
});})(vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
;
return iter__4523__auto__(corners);
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (self__$1,p__38124){
var vec__38125 = p__38124;
var corner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125,(0),null);
var wall_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125,(1),null);
if(cljs.core.not(wall_QMARK_)){
return self__$1;
} else {
var pred__38128 = cljs.core._EQ_;
var expr__38129 = corner;
if(cljs.core.truth_((pred__38128.cljs$core$IFn$_invoke$arity$2 ? pred__38128.cljs$core$IFn$_invoke$arity$2(lt,expr__38129) : pred__38128.call(null,lt,expr__38129)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (p__38131){
var vec__38132 = p__38131;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((c + (1)) * app.t7.platform.cw),y__$1], null);
});})(pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
);
} else {
if(cljs.core.truth_((pred__38128.cljs$core$IFn$_invoke$arity$2 ? pred__38128.cljs$core$IFn$_invoke$arity$2(lb,expr__38129) : pred__38128.call(null,lb,expr__38129)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (p__38137){
var vec__38138 = p__38137;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38138,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
);
} else {
if(cljs.core.truth_((pred__38128.cljs$core$IFn$_invoke$arity$2 ? pred__38128.cljs$core$IFn$_invoke$arity$2(rt,expr__38129) : pred__38128.call(null,rt,expr__38129)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (p__38142){
var vec__38143 = p__38142;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38143,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38143,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c + (1)) * app.t7.platform.cw) - w),y__$1], null);
});})(pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
);
} else {
if(cljs.core.truth_((pred__38128.cljs$core$IFn$_invoke$arity$2 ? pred__38128.cljs$core$IFn$_invoke$arity$2(rb,expr__38129) : pred__38128.call(null,rb,expr__38129)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(self__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size){
return (function (p__38147){
var vec__38148 = p__38147;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,(((r + (1)) * app.t7.platform.ch) - h)], null);
});})(pred__38128,expr__38129,vec__38125,corner,wall_QMARK_,vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
);
} else {
return self__$1;
}
}
}
}
}
});})(vec__38113,c,r,vec__38116,lt,rt,rb,lb,corners,walls,map__38104,map__38104__$1,self,vec__38105,x,y,pos,vec__38108,w,h,size))
,self,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,corners,walls));
}
});
app.t7.platform.draw = (function app$t7$platform$draw(p){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var seq__38151 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(app.t7.platform.data)));
var chunk__38156 = null;
var count__38157 = (0);
var i__38158 = (0);
while(true){
if((i__38158 < count__38157)){
var y = chunk__38156.cljs$core$IIndexed$_nth$arity$2(null,i__38158);
var seq__38159_38221 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(app.t7.platform.data))));
var chunk__38160_38222 = null;
var count__38161_38223 = (0);
var i__38162_38224 = (0);
while(true){
if((i__38162_38224 < count__38161_38223)){
var x_38225 = chunk__38160_38222.cljs$core$IIndexed$_nth$arity$2(null,i__38162_38224);
var val_38226 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38225], null));
var color_38227 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38226))?(100):(255));
p.fill(color_38227);

p.rect((x_38225 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38245 = seq__38159_38221;
var G__38246 = chunk__38160_38222;
var G__38247 = count__38161_38223;
var G__38248 = (i__38162_38224 + (1));
seq__38159_38221 = G__38245;
chunk__38160_38222 = G__38246;
count__38161_38223 = G__38247;
i__38162_38224 = G__38248;
continue;
} else {
var temp__5735__auto___38249 = cljs.core.seq(seq__38159_38221);
if(temp__5735__auto___38249){
var seq__38159_38250__$1 = temp__5735__auto___38249;
if(cljs.core.chunked_seq_QMARK_(seq__38159_38250__$1)){
var c__4550__auto___38251 = cljs.core.chunk_first(seq__38159_38250__$1);
var G__38252 = cljs.core.chunk_rest(seq__38159_38250__$1);
var G__38253 = c__4550__auto___38251;
var G__38254 = cljs.core.count(c__4550__auto___38251);
var G__38255 = (0);
seq__38159_38221 = G__38252;
chunk__38160_38222 = G__38253;
count__38161_38223 = G__38254;
i__38162_38224 = G__38255;
continue;
} else {
var x_38256 = cljs.core.first(seq__38159_38250__$1);
var val_38257 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38256], null));
var color_38258 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38257))?(100):(255));
p.fill(color_38258);

p.rect((x_38256 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38259 = cljs.core.next(seq__38159_38250__$1);
var G__38260 = null;
var G__38261 = (0);
var G__38262 = (0);
seq__38159_38221 = G__38259;
chunk__38160_38222 = G__38260;
count__38161_38223 = G__38261;
i__38162_38224 = G__38262;
continue;
}
} else {
}
}
break;
}

var G__38263 = seq__38151;
var G__38264 = chunk__38156;
var G__38265 = count__38157;
var G__38266 = (i__38158 + (1));
seq__38151 = G__38263;
chunk__38156 = G__38264;
count__38157 = G__38265;
i__38158 = G__38266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38151);
if(temp__5735__auto__){
var seq__38151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38151__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38151__$1);
var G__38273 = cljs.core.chunk_rest(seq__38151__$1);
var G__38274 = c__4550__auto__;
var G__38275 = cljs.core.count(c__4550__auto__);
var G__38276 = (0);
seq__38151 = G__38273;
chunk__38156 = G__38274;
count__38157 = G__38275;
i__38158 = G__38276;
continue;
} else {
var y = cljs.core.first(seq__38151__$1);
var seq__38152_38277 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(app.t7.platform.data))));
var chunk__38153_38278 = null;
var count__38154_38279 = (0);
var i__38155_38280 = (0);
while(true){
if((i__38155_38280 < count__38154_38279)){
var x_38281 = chunk__38153_38278.cljs$core$IIndexed$_nth$arity$2(null,i__38155_38280);
var val_38282 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38281], null));
var color_38283 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38282))?(100):(255));
p.fill(color_38283);

p.rect((x_38281 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38285 = seq__38152_38277;
var G__38286 = chunk__38153_38278;
var G__38287 = count__38154_38279;
var G__38288 = (i__38155_38280 + (1));
seq__38152_38277 = G__38285;
chunk__38153_38278 = G__38286;
count__38154_38279 = G__38287;
i__38155_38280 = G__38288;
continue;
} else {
var temp__5735__auto___38289__$1 = cljs.core.seq(seq__38152_38277);
if(temp__5735__auto___38289__$1){
var seq__38152_38290__$1 = temp__5735__auto___38289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38152_38290__$1)){
var c__4550__auto___38291 = cljs.core.chunk_first(seq__38152_38290__$1);
var G__38292 = cljs.core.chunk_rest(seq__38152_38290__$1);
var G__38293 = c__4550__auto___38291;
var G__38294 = cljs.core.count(c__4550__auto___38291);
var G__38295 = (0);
seq__38152_38277 = G__38292;
chunk__38153_38278 = G__38293;
count__38154_38279 = G__38294;
i__38155_38280 = G__38295;
continue;
} else {
var x_38297 = cljs.core.first(seq__38152_38290__$1);
var val_38302 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.t7.platform.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_38297], null));
var color_38303 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),val_38302))?(100):(255));
p.fill(color_38303);

p.rect((x_38297 * app.t7.platform.cw),(y * app.t7.platform.ch),app.t7.platform.cw,app.t7.platform.ch);


var G__38305 = cljs.core.next(seq__38152_38290__$1);
var G__38306 = null;
var G__38307 = (0);
var G__38308 = (0);
seq__38152_38277 = G__38305;
chunk__38153_38278 = G__38306;
count__38154_38279 = G__38307;
i__38155_38280 = G__38308;
continue;
}
} else {
}
}
break;
}

var G__38309 = cljs.core.next(seq__38151__$1);
var G__38310 = null;
var G__38311 = (0);
var G__38312 = (0);
seq__38151 = G__38309;
chunk__38156 = G__38310;
count__38157 = G__38311;
i__38158 = G__38312;
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
