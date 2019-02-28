// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t6.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t6.main.p5 = window;
app.t6.main.cw = (300);
app.t6.main.ch = (300);
app.t6.main.w = (10);
app.t6.main.h = (10);
app.t6.main.gw = ((app.t6.main.cw / app.t6.main.w) | (0));
app.t6.main.gh = ((app.t6.main.ch / app.t6.main.h) | (0));
app.t6.main.mineCnt = (10);
app.t6.main.mine = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,app.t6.main.mineCnt,(1)),cljs.core.repeat.call(null,((app.t6.main.w * app.t6.main.h) - app.t6.main.mineCnt),(0)))))));
app.t6.main.cells = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.partition.call(null,app.t6.main.w,(function (){var iter__4292__auto__ = (function app$t6$main$iter__16921(s__16922){
return (new cljs.core.LazySeq(null,(function (){
var s__16922__$1 = s__16922;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16922__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__16922__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$iter__16921_$_iter__16923(s__16924){
return (new cljs.core.LazySeq(null,((function (s__16922__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16924__$1 = s__16924;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16924__$1);
if(temp__5457__auto____$1){
var s__16924__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16924__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__16924__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__16926 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__16925 = (0);
while(true){
if((i__16925 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__16925);
cljs.core.chunk_append.call(null,b__16926,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})());

var G__16927 = (i__16925 + (1));
i__16925 = G__16927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),app$t6$main$iter__16921_$_iter__16923.call(null,cljs.core.chunk_rest.call(null,s__16924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),null);
}
} else {
var x = cljs.core.first.call(null,s__16924__$2);
return cljs.core.cons.call(null,(function (){var isMine = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,app.t6.main.mine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),(1));
var borders = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
var lazyBorderMineCnt = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(1)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get_in,app.t6.main.mine),borders));
if(isMine){
return (9);
} else {
return cljs.core.count.call(null,lazyBorderMineCnt);
}
})(),app$t6$main$iter__16921_$_iter__16923.call(null,cljs.core.rest.call(null,s__16924__$2)));
}
} else {
return null;
}
break;
}
});})(s__16922__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16922__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$iter__16921.call(null,cljs.core.rest.call(null,s__16922__$1)));
} else {
var G__16928 = cljs.core.rest.call(null,s__16922__$1);
s__16922__$1 = G__16928;
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
app.t6.main.flag = (function app$t6$main$flag(p__16929,ctx){
var vec__16930 = p__16929;
var r = cljs.core.nth.call(null,vec__16930,(0),null);
var c = cljs.core.nth.call(null,vec__16930,(1),null);
var rc = vec__16930;
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
var pred__16933 = cljs.core._EQ_;
var expr__16934 = s;
if(cljs.core.truth_(pred__16933.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__16934))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881)));
} else {
if(cljs.core.truth_(pred__16933.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__16934))){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return ctx;
}
}
});
app.t6.main.flip = (function app$t6$main$flip(p__16936,ctx){
var vec__16937 = p__16936;
var r = cljs.core.nth.call(null,vec__16937,(0),null);
var c = cljs.core.nth.call(null,vec__16937,(1),null);
var rc = vec__16937;
var v = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),r,c], null));
var s = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),s)){
return ctx;
} else {
if((v == null)){
return ctx;
} else {
if(cljs.core._EQ_.call(null,(9),v)){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameState","gameState",1531780829)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
if(cljs.core._EQ_.call(null,(0),v)){
return cljs.core.reduce.call(null,((function (v,s,vec__16937,r,c,rc){
return (function (ctx__$1,p__16940){
var vec__16941 = p__16940;
var r__$1 = cljs.core.nth.call(null,vec__16941,(0),null);
var c__$1 = cljs.core.nth.call(null,vec__16941,(1),null);
var offset = vec__16941;
return app.t6.main.flip.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,rc),ctx__$1);
});})(v,s,vec__16937,r,c,rc))
,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),r,c], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

}
}
}
}
});
app.t6.main.main = (function app$t6$main$main(){
app.t6.main.model = null;

app.t6.main.evt = cljs.core.async.chan.call(null);

var c__2882__auto___17091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___17091){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___17091){
return (function (state_17005){
var state_val_17006 = (state_17005[(1)]);
if((state_val_17006 === (7))){
var inst_17001 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17008_17092 = state_17005__$1;
(statearr_17008_17092[(2)] = inst_17001);

(statearr_17008_17092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (1))){
var inst_16944 = [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"gameState","gameState",1531780829)];
var inst_16945 = cljs.core.PersistentVector.EMPTY;
var inst_16946 = cljs.core.PersistentVector.EMPTY;
var inst_16947 = cljs.core.partial.call(null,cljs.core.into,inst_16946);
var inst_16948 = (app.t6.main.w * app.t6.main.h);
var inst_16949 = cljs.core.repeat.call(null,inst_16948,new cljs.core.Keyword(null,"close","close",1835149582));
var inst_16950 = cljs.core.partition.call(null,app.t6.main.w,inst_16949);
var inst_16951 = cljs.core.map.call(null,inst_16947,inst_16950);
var inst_16952 = cljs.core.into.call(null,inst_16945,inst_16951);
var inst_16953 = [app.t6.main.cells,inst_16952,new cljs.core.Keyword(null,"play","play",-580418022)];
var inst_16954 = cljs.core.PersistentHashMap.fromArrays(inst_16944,inst_16953);
var inst_16955 = inst_16954;
var state_17005__$1 = (function (){var statearr_17009 = state_17005;
(statearr_17009[(7)] = inst_16955);

return statearr_17009;
})();
var statearr_17010_17093 = state_17005__$1;
(statearr_17010_17093[(2)] = null);

(statearr_17010_17093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (4))){
var inst_16963 = (state_17005[(8)]);
var inst_16959 = (state_17005[(9)]);
var inst_16959__$1 = (state_17005[(2)]);
var inst_16963__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_16959__$1);
var inst_16964 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_16963__$1);
var state_17005__$1 = (function (){var statearr_17011 = state_17005;
(statearr_17011[(8)] = inst_16963__$1);

(statearr_17011[(9)] = inst_16959__$1);

return statearr_17011;
})();
if(inst_16964){
var statearr_17012_17094 = state_17005__$1;
(statearr_17012_17094[(1)] = (5));

} else {
var statearr_17013_17095 = state_17005__$1;
(statearr_17013_17095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (15))){
var inst_16955 = (state_17005[(7)]);
var tmp17007 = inst_16955;
var inst_16955__$1 = tmp17007;
var state_17005__$1 = (function (){var statearr_17014 = state_17005;
(statearr_17014[(7)] = inst_16955__$1);

return statearr_17014;
})();
var statearr_17015_17096 = state_17005__$1;
(statearr_17015_17096[(2)] = null);

(statearr_17015_17096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (13))){
var inst_16989 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17016_17097 = state_17005__$1;
(statearr_17016_17097[(2)] = inst_16989);

(statearr_17016_17097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (6))){
var inst_16963 = (state_17005[(8)]);
var inst_16993 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_16963);
var state_17005__$1 = state_17005;
if(inst_16993){
var statearr_17018_17098 = state_17005__$1;
(statearr_17018_17098[(1)] = (14));

} else {
var statearr_17019_17099 = state_17005__$1;
(statearr_17019_17099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (3))){
var inst_17003 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17005__$1,inst_17003);
} else {
if((state_val_17006 === (12))){
var inst_16955 = (state_17005[(7)]);
var tmp17017 = inst_16955;
var inst_16955__$1 = tmp17017;
var state_17005__$1 = (function (){var statearr_17020 = state_17005;
(statearr_17020[(7)] = inst_16955__$1);

return statearr_17020;
})();
var statearr_17021_17100 = state_17005__$1;
(statearr_17021_17100[(2)] = null);

(statearr_17021_17100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (2))){
var inst_16955 = (state_17005[(7)]);
var inst_16957 = app.t6.main.model = inst_16955;
var state_17005__$1 = (function (){var statearr_17022 = state_17005;
(statearr_17022[(10)] = inst_16957);

return statearr_17022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17005__$1,(4),app.t6.main.evt);
} else {
if((state_val_17006 === (11))){
var inst_16955 = (state_17005[(7)]);
var inst_16973 = (state_17005[(11)]);
var inst_16984 = app.t6.main.flag.call(null,inst_16973,inst_16955);
var inst_16955__$1 = inst_16984;
var state_17005__$1 = (function (){var statearr_17023 = state_17005;
(statearr_17023[(7)] = inst_16955__$1);

return statearr_17023;
})();
var statearr_17024_17101 = state_17005__$1;
(statearr_17024_17101[(2)] = null);

(statearr_17024_17101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (9))){
var inst_16969 = (state_17005[(12)]);
var inst_16982 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),inst_16969);
var state_17005__$1 = state_17005;
if(inst_16982){
var statearr_17026_17102 = state_17005__$1;
(statearr_17026_17102[(1)] = (11));

} else {
var statearr_17027_17103 = state_17005__$1;
(statearr_17027_17103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (5))){
var inst_16969 = (state_17005[(12)]);
var inst_16959 = (state_17005[(9)]);
var inst_16966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16967 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_16968 = (new cljs.core.PersistentVector(null,2,(5),inst_16966,inst_16967,null));
var inst_16969__$1 = cljs.core.get_in.call(null,inst_16959,inst_16968);
var inst_16970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16971 = [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"rc","rc",-1948144765)];
var inst_16972 = (new cljs.core.PersistentVector(null,2,(5),inst_16970,inst_16971,null));
var inst_16973 = cljs.core.get_in.call(null,inst_16959,inst_16972);
var inst_16977 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),inst_16969__$1);
var state_17005__$1 = (function (){var statearr_17028 = state_17005;
(statearr_17028[(11)] = inst_16973);

(statearr_17028[(12)] = inst_16969__$1);

return statearr_17028;
})();
if(inst_16977){
var statearr_17029_17104 = state_17005__$1;
(statearr_17029_17104[(1)] = (8));

} else {
var statearr_17030_17105 = state_17005__$1;
(statearr_17030_17105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (14))){
var inst_16955 = (state_17005[(7)]);
var tmp17025 = inst_16955;
var inst_16955__$1 = tmp17025;
var state_17005__$1 = (function (){var statearr_17031 = state_17005;
(statearr_17031[(7)] = inst_16955__$1);

return statearr_17031;
})();
var statearr_17032_17106 = state_17005__$1;
(statearr_17032_17106[(2)] = null);

(statearr_17032_17106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (16))){
var inst_16999 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17033_17107 = state_17005__$1;
(statearr_17033_17107[(2)] = inst_16999);

(statearr_17033_17107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (10))){
var inst_16991 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17034_17108 = state_17005__$1;
(statearr_17034_17108[(2)] = inst_16991);

(statearr_17034_17108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17006 === (8))){
var inst_16955 = (state_17005[(7)]);
var inst_16973 = (state_17005[(11)]);
var inst_16979 = app.t6.main.flip.call(null,inst_16973,inst_16955);
var inst_16955__$1 = inst_16979;
var state_17005__$1 = (function (){var statearr_17035 = state_17005;
(statearr_17035[(7)] = inst_16955__$1);

return statearr_17035;
})();
var statearr_17036_17109 = state_17005__$1;
(statearr_17036_17109[(2)] = null);

(statearr_17036_17109[(1)] = (2));


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
}
}
}
});})(c__2882__auto___17091))
;
return ((function (switch__2792__auto__,c__2882__auto___17091){
return (function() {
var app$t6$main$main_$_state_machine__2793__auto__ = null;
var app$t6$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_17037 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17037[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_17037[(1)] = (1));

return statearr_17037;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_17005){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17038){if((e17038 instanceof Object)){
var ex__2796__auto__ = e17038;
var statearr_17039_17110 = state_17005;
(statearr_17039_17110[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17111 = state_17005;
state_17005 = G__17111;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_17005){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_17005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___17091))
})();
var state__2884__auto__ = (function (){var statearr_17040 = f__2883__auto__.call(null);
(statearr_17040[(6)] = c__2882__auto___17091);

return statearr_17040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___17091))
);


app.t6.main.p5.setup = (function (){
var canvas = app.t6.main.p5.createCanvas(app.t6.main.cw,app.t6.main.ch);
return canvas.parent("container");
});

app.t6.main.p5.draw = (function (){
app.t6.main.p5.fill((255));

app.t6.main.p5.stroke((0));

app.t6.main.p5.rect((0),(0),app.t6.main.cw,app.t6.main.ch);

if(cljs.core.truth_(app.t6.main.model)){
cljs.core.dorun.call(null,(function (){var iter__4292__auto__ = (function app$t6$main$main_$_iter__17041(s__17042){
return (new cljs.core.LazySeq(null,(function (){
var s__17042__$1 = s__17042;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__17042__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__17042__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function app$t6$main$main_$_iter__17041_$_iter__17043(s__17044){
return (new cljs.core.LazySeq(null,((function (s__17042__$1,y,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__17044__$1 = s__17044;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__17044__$1);
if(temp__5457__auto____$1){
var s__17044__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17044__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__17044__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__17046 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__17045 = (0);
while(true){
if((i__17045 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__17045);
cljs.core.chunk_append.call(null,b__17046,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
var pred__17047 = cljs.core._EQ_;
var expr__17048 = s;
if(cljs.core.truth_(pred__17047.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__17048))){
app.t6.main.p5.fill((255));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core.truth_(pred__17047.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__17048))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.p5.text(v,(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
if(cljs.core.truth_(pred__17047.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__17048))){
return app.t6.main.p5.text("flag",(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17048)].join('')));
}
}
}
})());

var G__17112 = (i__17045 + (1));
i__17045 = G__17112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17046),app$t6$main$main_$_iter__17041_$_iter__17043.call(null,cljs.core.chunk_rest.call(null,s__17044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17046),null);
}
} else {
var x = cljs.core.first.call(null,s__17044__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),y,x], null));
var s = cljs.core.get_in.call(null,app.t6.main.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),y,x], null));
var pred__17050 = cljs.core._EQ_;
var expr__17051 = s;
if(cljs.core.truth_(pred__17050.call(null,new cljs.core.Keyword(null,"close","close",1835149582),expr__17051))){
app.t6.main.p5.fill((255));

return app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);
} else {
if(cljs.core.truth_(pred__17050.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__17051))){
app.t6.main.p5.fill((255));

app.t6.main.p5.rect((x * app.t6.main.gw),(y * app.t6.main.gh),app.t6.main.gw,app.t6.main.gh);

app.t6.main.p5.fill((255),(0),(0));

return app.t6.main.p5.text(v,(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
if(cljs.core.truth_(pred__17050.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881),expr__17051))){
return app.t6.main.p5.text("flag",(x * app.t6.main.gw),((12) + (y * app.t6.main.gh)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17051)].join('')));
}
}
}
})(),app$t6$main$main_$_iter__17041_$_iter__17043.call(null,cljs.core.rest.call(null,s__17044__$2)));
}
} else {
return null;
}
break;
}
});})(s__17042__$1,y,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__17042__$1,y,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,app.t6.main.w)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,app$t6$main$main_$_iter__17041.call(null,cljs.core.rest.call(null,s__17042__$1)));
} else {
var G__17113 = cljs.core.rest.call(null,s__17042__$1);
s__17042__$1 = G__17113;
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
return app.t6.main.p5.text("DIED",(app.t6.main.cw / (2)),(app.t6.main.ch / (2)));
} else {
return null;
}
} else {
return null;
}
});

app.t6.main.p5.mouseReleased = (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_17073){
var state_val_17074 = (state_17073[(1)]);
if((state_val_17074 === (1))){
var inst_17053 = app.t6.main.p5.mouseX;
var inst_17054 = app.t6.main.p5.mouseY;
var inst_17055 = app.t6.main.p5.mouseButton;
var inst_17056 = (inst_17053 / app.t6.main.gw);
var inst_17057 = (inst_17056 | (0));
var inst_17058 = (inst_17054 / app.t6.main.gh);
var inst_17059 = (inst_17058 | (0));
var inst_17060 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_17061 = [new cljs.core.Keyword(null,"rc","rc",-1948144765),new cljs.core.Keyword(null,"btn","btn",1978294651)];
var inst_17062 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17063 = [inst_17059,inst_17057];
var inst_17064 = (new cljs.core.PersistentVector(null,2,(5),inst_17062,inst_17063,null));
var inst_17065 = cljs.core.keyword.call(null,inst_17055);
var inst_17066 = [inst_17064,inst_17065];
var inst_17067 = cljs.core.PersistentHashMap.fromArrays(inst_17061,inst_17066);
var inst_17068 = [new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),inst_17067];
var inst_17069 = cljs.core.PersistentHashMap.fromArrays(inst_17060,inst_17068);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17073__$1,(2),app.t6.main.evt,inst_17069);
} else {
if((state_val_17074 === (2))){
var inst_17071 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17073__$1,inst_17071);
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
var statearr_17075 = [null,null,null,null,null,null,null];
(statearr_17075[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_17075[(1)] = (1));

return statearr_17075;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_17073){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17076){if((e17076 instanceof Object)){
var ex__2796__auto__ = e17076;
var statearr_17077_17114 = state_17073;
(statearr_17077_17114[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17115 = state_17073;
state_17073 = G__17115;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_17073){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_17073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_17078 = f__2883__auto__.call(null);
(statearr_17078[(6)] = c__2882__auto__);

return statearr_17078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

return setInterval((function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_17085){
var state_val_17086 = (state_17085[(1)]);
if((state_val_17086 === (1))){
var inst_17079 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_17080 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_17081 = cljs.core.PersistentHashMap.fromArrays(inst_17079,inst_17080);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17085__$1,(2),app.t6.main.evt,inst_17081);
} else {
if((state_val_17086 === (2))){
var inst_17083 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17085__$1,inst_17083);
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
var statearr_17087 = [null,null,null,null,null,null,null];
(statearr_17087[(0)] = app$t6$main$main_$_state_machine__2793__auto__);

(statearr_17087[(1)] = (1));

return statearr_17087;
});
var app$t6$main$main_$_state_machine__2793__auto____1 = (function (state_17085){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_17085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e17088){if((e17088 instanceof Object)){
var ex__2796__auto__ = e17088;
var statearr_17089_17116 = state_17085;
(statearr_17089_17116[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17117 = state_17085;
state_17085 = G__17117;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t6$main$main_$_state_machine__2793__auto__ = function(state_17085){
switch(arguments.length){
case 0:
return app$t6$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$t6$main$main_$_state_machine__2793__auto____1.call(this,state_17085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t6$main$main_$_state_machine__2793__auto____0;
app$t6$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t6$main$main_$_state_machine__2793__auto____1;
return app$t6$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_17090 = f__2883__auto__.call(null);
(statearr_17090[(6)] = c__2882__auto__);

return statearr_17090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
}),(33));
});
app.t6.main.main.call(null);

//# sourceMappingURL=main.js.map
