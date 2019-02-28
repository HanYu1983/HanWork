// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t6.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t6.main.p5 = window;
app.t6.main.cw = (600);
app.t6.main.ch = (600);
app.t6.main.w = (30);
app.t6.main.h = (30);
app.t6.main.mineCnt = (100);
app.t6.main.gw = ((app.t6.main.cw / app.t6.main.w) | (0));
app.t6.main.gh = ((app.t6.main.ch / app.t6.main.h) | (0));
app.t6.main.mine = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,app.t6.main.mineCnt,(1)),cljs.core.repeat.call(null,((app.t6.main.w * app.t6.main.h) - app.t6.main.mineCnt),(0)))))));
app.t6.main.cells = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,(function (){var iter__4292__auto__ = (function app$t6$main$iter__26896(s__26897){
return (new cljs.core.LazySeq(null,(function (){
var s__26897__$1 = s__26897;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26897__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__26897__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$iter__26896_$_iter__26898(s__26899){
return (new cljs.core.LazySeq(null,((function (s__26897__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__26899__$1 = s__26899;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26899__$1);
if(temp__5457__auto____$1){
var s__26899__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26899__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26899__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26901 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26900 = (0);
while(true){
if((i__26900 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__26900);
cljs.core.chunk_append.call(null,b__26901,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})());

var G__26902 = (i__26900 + (1));
i__26900 = G__26902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26901),app$t6$main$iter__26896_$_iter__26898.call(null,cljs.core.chunk_rest.call(null,s__26899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26901),null);
}
} else {
var x = cljs.core.first.call(null,s__26899__$2);
return cljs.core.cons.call(null,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})(),app$t6$main$iter__26896_$_iter__26898.call(null,cljs.core.rest.call(null,s__26899__$2)));
}
} else {
return null;
}
break;
}
});})(s__26897__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__26897__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$iter__26896.call(null,cljs.core.rest.call(null,s__26897__$1)));
} else {
var G__26903 = cljs.core.rest.call(null,s__26897__$1);
s__26897__$1 = G__26903;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,app.t6.main.h));
})())));
app.t6.main.flag = (function app$t6$main$flag(p__26904,ctx){
var vec__26905 = p__26904;
var r = cljs.core.nth.call(null,vec__26905,(0),null);
var c = cljs.core.nth.call(null,vec__26905,(1),null);
var rc = vec__26905;
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__26908 = cljs.core._EQ_;
var expr__26909 = s;
if(cljs.core.truth_(pred__26908.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__26909))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_(pred__26908.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__26909))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__26911,ctx){
var vec__26912 = p__26911;
var r = cljs.core.nth.call(null,vec__26912,(0),null);
var c = cljs.core.nth.call(null,vec__26912,(1),null);
var rc = vec__26912;
var v = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null));
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)){
return ctx;
} else {
if((v == null)){
return ctx;
} else {
if(cljs.core._EQ_.call(null,(9),v)){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameState","gameState",1531780829)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
if(cljs.core._EQ_.call(null,(0),v)){
return cljs.core.reduce.call(null,((function (v,s,vec__26912,r,c,rc){
return (function (ctx__$1,p__26915){
var vec__26916 = p__26915;
var r__$1 = cljs.core.nth.call(null,vec__26916,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__26916,(1),null);
var offset = vec__26916;
return app.t6.main.flip.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,rc),ctx__$1);
});})(v,s,vec__26912,r,c,rc))
,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.drawOpen = (function app$t6$main$drawOpen(p5,v,x,y,w,h){
var pred__26919 = cljs.core._EQ_;
var expr__26920 = v;
if(cljs.core.truth_(pred__26919.call(null,(9),expr__26920))){
var size = h;
p5.fill((0));

return p5.circle((x + (w / (2))),(y + (h / (2))),((function (){var x__4009__auto__ = w;
var y__4010__auto__ = h;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() / (2)));
} else {
var vec__26922 = (function (){var pred__26925 = cljs.core._EQ_;
var expr__26926 = ((v / (3)) | (0));
if(cljs.core.truth_(pred__26925.call(null,(0),expr__26926))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
} else {
if(cljs.core.truth_(pred__26925.call(null,(1),expr__26926))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null);
} else {
if(cljs.core.truth_(pred__26925.call(null,(2),expr__26926))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26926)].join('')));
}
}
}
})();
var r = cljs.core.nth.call(null,vec__26922,(0),null);
var g = cljs.core.nth.call(null,vec__26922,(1),null);
var b = cljs.core.nth.call(null,vec__26922,(2),null);
p5.textSize(h);

p5.fill(r,g,b);

return p5.text(v,(x + (p5.textWidth(v) / (2))),(h + y));
}
});
app.t6.main.drawFlag = (function app$t6$main$drawFlag(p5,x,y,w,h){
return p5.triangle((x + (w / (2))),y,x,(y + h),(x + w),(y + h));
});
app.t6.main.main = (function app$t6$main$main(){
app.t6.main.model = null;

app.t6.main.evt = cljs.core.async.chan.call(null);

var c__2882__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___27045){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___27045){
return (function (state_26983){
var state_val_26984 = (state_26983[(1)]);
if((state_val_26984 === (7))){
var inst_26979 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_26985_27046 = state_26983__$1;
(statearr_26985_27046[(2)] = inst_26979);

(statearr_26985_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (1))){
var inst_26928 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_26929 = cljs.core.PersistentVector.EMPTY;
var inst_26930 = cljs.core.PersistentVector.EMPTY;
var inst_26931 = cljs.core.partial.call(null,cljs.core.into,inst_26930);
var inst_26932 = (app.t6.main.w * app.t6.main.h);
var inst_26933 = cljs.core.repeat.call(null,inst_26932,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_26934 = cljs.core.partition.call(null,app.t6.main.w,inst_26933);
var inst_26935 = cljs.core.map.call(null,inst_26931,inst_26934);
var inst_26936 = cljs.core.into.call(null,inst_26929,inst_26935);
var inst_26937 = [app.t6.main.cells,inst_26936,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_26938 = cljs.core.PersistentHashMap.fromArrays(inst_26928,inst_26937);
var inst_26939 = inst_26938;
var state_26983__$1 = (function (){var statearr_26986 = state_26983;
(statearr_26986[(7)] = inst_26939);

return statearr_26986;
})();
var statearr_26987_27047 = state_26983__$1;
(statearr_26987_27047[(2)] = null);

(statearr_26987_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (4))){
var inst_26943 = (state_26983[(8)]);
var inst_26943__$1 = (state_26983[(2)]);
var inst_26947 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_26943__$1);
var inst_26948 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_26947);
var state_26983__$1 = (function (){var statearr_26989 = state_26983;
(statearr_26989[(8)] = inst_26943__$1);

return statearr_26989;
})();
if(inst_26948){
var statearr_26990_27048 = state_26983__$1;
(statearr_26990_27048[(1)] = (5));

} else {
var statearr_26991_27049 = state_26983__$1;
(statearr_26991_27049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (13))){
var inst_26973 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_26992_27050 = state_26983__$1;
(statearr_26992_27050[(2)] = inst_26973);

(statearr_26992_27050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (6))){
var inst_26939 = (state_26983[(7)]);
var tmp26988 = inst_26939;
var inst_26939__$1 = tmp26988;
var state_26983__$1 = (function (){var statearr_26994 = state_26983;
(statearr_26994[(7)] = inst_26939__$1);

return statearr_26994;
})();
var statearr_26995_27051 = state_26983__$1;
(statearr_26995_27051[(2)] = null);

(statearr_26995_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (3))){
var inst_26981 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26983__$1,inst_26981);
} else {
if((state_val_26984 === (12))){
var inst_26939 = (state_26983[(7)]);
var tmp26993 = inst_26939;
var inst_26939__$1 = tmp26993;
var state_26983__$1 = (function (){var statearr_26996 = state_26983;
(statearr_26996[(7)] = inst_26939__$1);

return statearr_26996;
})();
var statearr_26997_27052 = state_26983__$1;
(statearr_26997_27052[(2)] = null);

(statearr_26997_27052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (2))){
var inst_26939 = (state_26983[(7)]);
var inst_26941 = app.t6.main.model = inst_26939;
var state_26983__$1 = (function (){var statearr_26998 = state_26983;
(statearr_26998[(9)] = inst_26941);

return statearr_26998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26983__$1,(4),app.t6.main.evt);
} else {
if((state_val_26984 === (11))){
var inst_26939 = (state_26983[(7)]);
var inst_26957 = (state_26983[(10)]);
var inst_26968 = app.t6.main.flag.call(null,inst_26957,inst_26939);
var inst_26939__$1 = inst_26968;
var state_26983__$1 = (function (){var statearr_26999 = state_26983;
(statearr_26999[(7)] = inst_26939__$1);

return statearr_26999;
})();
var statearr_27000_27053 = state_26983__$1;
(statearr_27000_27053[(2)] = null);

(statearr_27000_27053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (9))){
var inst_26953 = (state_26983[(11)]);
var inst_26966 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),inst_26953);
var state_26983__$1 = state_26983;
if(inst_26966){
var statearr_27001_27054 = state_26983__$1;
(statearr_27001_27054[(1)] = (11));

} else {
var statearr_27002_27055 = state_26983__$1;
(statearr_27002_27055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (5))){
var inst_26943 = (state_26983[(8)]);
var inst_26953 = (state_26983[(11)]);
var inst_26950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26951 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_26952 = (new cljs.core.PersistentVector(null,2,(5),inst_26950,inst_26951,null));
var inst_26953__$1 = cljs.core.get_in.call(null,inst_26943,inst_26952);
var inst_26954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26955 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_26956 = (new cljs.core.PersistentVector(null,2,(5),inst_26954,inst_26955,null));
var inst_26957 = cljs.core.get_in.call(null,inst_26943,inst_26956);
var inst_26961 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),inst_26953__$1);
var state_26983__$1 = (function (){var statearr_27003 = state_26983;
(statearr_27003[(11)] = inst_26953__$1);

(statearr_27003[(10)] = inst_26957);

return statearr_27003;
})();
if(inst_26961){
var statearr_27004_27056 = state_26983__$1;
(statearr_27004_27056[(1)] = (8));

} else {
var statearr_27005_27057 = state_26983__$1;
(statearr_27005_27057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (10))){
var inst_26975 = (state_26983[(2)]);
var state_26983__$1 = state_26983;
var statearr_27006_27058 = state_26983__$1;
(statearr_27006_27058[(2)] = inst_26975);

(statearr_27006_27058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26984 === (8))){
var inst_26939 = (state_26983[(7)]);
var inst_26957 = (state_26983[(10)]);
var inst_26963 = app.t6.main.flip.call(null,inst_26957,inst_26939);
var inst_26939__$1 = inst_26963;
var state_26983__$1 = (function (){var statearr_27007 = state_26983;
(statearr_27007[(7)] = inst_26939__$1);

return statearr_27007;
})();
var statearr_27008_27059 = state_26983__$1;
(statearr_27008_27059[(2)] = null);

(statearr_27008_27059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2882__auto___27045))
;
return ((function (switch__2792__auto__,c__2882__auto___27045){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_27009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27009[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_27009[(1)] = (1));

return statearr_27009;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_26983){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_26983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e27010){if((e27010 instanceof Object)){
var ex__2796__auto__ = e27010;
var statearr_27011_27060 = state_26983;
(statearr_27011_27060[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27061 = state_26983;
state_26983 = G__27061;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_26983){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_26983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___27045))
})();
var state__2884__auto__ = (function (){var statearr_27012 = f__2883__auto__.call(null);
(statearr_27012[(6)] = c__2882__auto___27045);

return statearr_27012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___27045))
);


app.t6.main.p5.setup = (function (){
app.t6.main.p5.noStroke();

var canvas = app.t6.main.p5.createCanvas(app.t6.main.cw,app.t6.main.ch);
return canvas.parent("container");
});

app.t6.main.p5.draw = (function (){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((0),(0),app.t6.main.cw,app.t6.main.ch);

if(cljs.core.truth_(app.t6.main.model)){
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t6$main$main_$_iter__27013(s__27014){
return (new cljs.core.LazySeq(null,(function (){
var s__27014__$1 = s__27014;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27014__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__27014__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$main_$_iter__27013_$_iter__27015(s__27016){
return (new cljs.core.LazySeq(null,((function (s__27014__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__27016__$1 = s__27016;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27016__$1);
if(temp__5457__auto____$1){
var s__27016__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27016__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27016__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27018 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27017 = (0);
while(true){
if((i__27017 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__27017);
cljs.core.chunk_append.call(null,b__27018,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)) || (((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.call(null,(9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen.call(null,app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag.call(null,app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})());

var G__27062 = (i__27017 + (1));
i__27017 = G__27062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27018),app$t6$main$main_$_iter__27013_$_iter__27015.call(null,cljs.core.chunk_rest.call(null,s__27016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27018),null);
}
} else {
var x = cljs.core.first.call(null,s__27016__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)) || (((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))) && (cljs.core._EQ_.call(null,(9),v)))))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

return app.t6.main.drawOpen.call(null,app.t6.main.p5,v,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),s)){
app.t6.main.p5.fill((122),(61),(122));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),s)){
app.t6.main.p5.fill((122),(61),(122));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.drawFlag.call(null,app.t6.main.p5,(x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
return null;

}
}
}
})(),app$t6$main$main_$_iter__27013_$_iter__27015.call(null,cljs.core.rest.call(null,s__27016__$2)));
}
} else {
return null;
}
break;
}
});})(s__27014__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__27014__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$main_$_iter__27013.call(null,cljs.core.rest.call(null,s__27014__$1)));
} else {
var G__27063 = cljs.core.rest.call(null,s__27014__$1);
s__27014__$1 = G__27063;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,app.t6.main.h));
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"died","died",1083960752),new cljs.core.Keyword(null,"gameState","gameState",1531780829).cljs$core$IFn$_invoke$arity$1(app.t6.main.model))){
app.t6.main.p5.fill((0),(0),(255));

app.t6.main.p5.textSize((50));

return app.t6.main.p5.text("Game Over",((app.t6.main.cw / (2)) - (app.t6.main.p5.textWidth("Game Over") / (2))),(app.t6.main.ch / (2)));
} else {
return null;
}
} else {
return null;
}
});

return app.t6.main.p5.mouseReleased = (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_27039){
var state_val_27040 = (state_27039[(1)]);
if((state_val_27040 === (1))){
var inst_27019 = app.t6.main.p5.mouseX;
var inst_27020 = app.t6.main.p5.mouseY;
var inst_27021 = app.t6.main.p5.mouseButton;
var inst_27022 = (inst_27019 / app.t6.main.gw);
var inst_27023 = (inst_27022 | (0));
var inst_27024 = (inst_27020 / app.t6.main.gh);
var inst_27025 = (inst_27024 | (0));
var inst_27026 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_27027 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_27028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27029 = [inst_27025,inst_27023];
var inst_27030 = (new cljs.core.PersistentVector(null,2,(5),inst_27028,inst_27029,null));
var inst_27031 = cljs.core.keyword.call(null,inst_27021);
var inst_27032 = [inst_27030,inst_27031];
var inst_27033 = cljs.core.PersistentHashMap.fromArrays(inst_27027,inst_27032);
var inst_27034 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_27033];
var inst_27035 = cljs.core.PersistentHashMap.fromArrays(inst_27026,inst_27034);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27039__$1,(2),app.t6.main.evt,inst_27035);
} else {
if((state_val_27040 === (2))){
var inst_27037 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27039__$1,inst_27037);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_27041 = [null,null,null,null,null,null,null];
(statearr_27041[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_27041[(1)] = (1));

return statearr_27041;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_27039){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_27039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e27042){if((e27042 instanceof Object)){
var ex__2796__auto__ = e27042;
var statearr_27043_27064 = state_27039;
(statearr_27043_27064[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27065 = state_27039;
state_27039 = G__27065;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_27039){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_27039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_27044 = f__2883__auto__.call(null);
(statearr_27044[(6)] = c__2882__auto__);

return statearr_27044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
});
app.t6.main.main.call(null);

//# sourceMappingURL=main.js.map
