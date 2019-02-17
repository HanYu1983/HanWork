// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.t1.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.t1.main.data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fish","fish",-1871685900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fish","\u9B5A"], null),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["family","\u5BB6\u4EBA"], null),new cljs.core.Keyword(null,"rock","rock",946709275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rock","\u5CA9\u77F3"], null)], null);
app.t1.main.model = null;
app.t1.main.evt = cljs.core.async.chan.call(null);
var canvas_5265 = document.getElementById("canvas1");
canvas_5265.addEventListener("mousedown",((function (canvas_5265){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_5265){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_5265){
return (function (state_5220){
var state_val_5221 = (state_5220[(1)]);
if((state_val_5221 === (1))){
var inst_5214 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5215 = [new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)];
var inst_5216 = cljs.core.PersistentHashMap.fromArrays(inst_5214,inst_5215);
var state_5220__$1 = state_5220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5220__$1,(2),app.t1.main.evt,inst_5216);
} else {
if((state_val_5221 === (2))){
var inst_5218 = (state_5220[(2)]);
var state_5220__$1 = state_5220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5220__$1,inst_5218);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_5265))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_5265){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_5222 = [null,null,null,null,null,null,null];
(statearr_5222[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_5222[(1)] = (1));

return statearr_5222;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_5220){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5223){if((e5223 instanceof Object)){
var ex__2796__auto__ = e5223;
var statearr_5224_5266 = state_5220;
(statearr_5224_5266[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5267 = state_5220;
state_5220 = G__5267;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_5220){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_5220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_5265))
})();
var state__2884__auto__ = (function (){var statearr_5225 = f__2883__auto__.call(null);
(statearr_5225[(6)] = c__2882__auto__);

return statearr_5225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_5265))
);

return c__2882__auto__;
});})(canvas_5265))
,false);

canvas_5265.addEventListener("mouseup",((function (canvas_5265){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_5265){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_5265){
return (function (state_5232){
var state_val_5233 = (state_5232[(1)]);
if((state_val_5233 === (1))){
var inst_5226 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5227 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456)];
var inst_5228 = cljs.core.PersistentHashMap.fromArrays(inst_5226,inst_5227);
var state_5232__$1 = state_5232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5232__$1,(2),app.t1.main.evt,inst_5228);
} else {
if((state_val_5233 === (2))){
var inst_5230 = (state_5232[(2)]);
var state_5232__$1 = state_5232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5232__$1,inst_5230);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_5265))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_5265){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_5234 = [null,null,null,null,null,null,null];
(statearr_5234[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_5234[(1)] = (1));

return statearr_5234;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_5232){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5235){if((e5235 instanceof Object)){
var ex__2796__auto__ = e5235;
var statearr_5236_5268 = state_5232;
(statearr_5236_5268[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5269 = state_5232;
state_5232 = G__5269;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_5232){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_5232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_5265))
})();
var state__2884__auto__ = (function (){var statearr_5237 = f__2883__auto__.call(null);
(statearr_5237[(6)] = c__2882__auto__);

return statearr_5237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_5265))
);

return c__2882__auto__;
});})(canvas_5265))
,false);

canvas_5265.addEventListener("mousemove",((function (canvas_5265){
return (function (evt2){
var rect = canvas_5265.getBoundingClientRect();
var x = (evt2.clientX - rect.left);
var y = (evt2.clientY - rect.top);
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,rect,x,y,canvas_5265){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,rect,x,y,canvas_5265){
return (function (state_5247){
var state_val_5248 = (state_5247[(1)]);
if((state_val_5248 === (1))){
var inst_5238 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002)];
var inst_5239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5240 = [x,y];
var inst_5241 = (new cljs.core.PersistentVector(null,2,(5),inst_5239,inst_5240,null));
var inst_5242 = [new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_5241];
var inst_5243 = cljs.core.PersistentHashMap.fromArrays(inst_5238,inst_5242);
var state_5247__$1 = state_5247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5247__$1,(2),app.t1.main.evt,inst_5243);
} else {
if((state_val_5248 === (2))){
var inst_5245 = (state_5247[(2)]);
var state_5247__$1 = state_5247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5247__$1,inst_5245);
} else {
return null;
}
}
});})(c__2882__auto__,rect,x,y,canvas_5265))
;
return ((function (switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_5265){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_5249 = [null,null,null,null,null,null,null];
(statearr_5249[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_5249[(1)] = (1));

return statearr_5249;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_5247){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5250){if((e5250 instanceof Object)){
var ex__2796__auto__ = e5250;
var statearr_5251_5270 = state_5247;
(statearr_5251_5270[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5271 = state_5247;
state_5247 = G__5271;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_5247){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_5247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,rect,x,y,canvas_5265))
})();
var state__2884__auto__ = (function (){var statearr_5252 = f__2883__auto__.call(null);
(statearr_5252[(6)] = c__2882__auto__);

return statearr_5252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,rect,x,y,canvas_5265))
);

return c__2882__auto__;
});})(canvas_5265))
,false);

setInterval(((function (canvas_5265){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,canvas_5265){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,canvas_5265){
return (function (state_5259){
var state_val_5260 = (state_5259[(1)]);
if((state_val_5260 === (1))){
var inst_5253 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_5254 = [new cljs.core.Keyword(null,"update","update",1045576396)];
var inst_5255 = cljs.core.PersistentHashMap.fromArrays(inst_5253,inst_5254);
var state_5259__$1 = state_5259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5259__$1,(2),app.t1.main.evt,inst_5255);
} else {
if((state_val_5260 === (2))){
var inst_5257 = (state_5259[(2)]);
var state_5259__$1 = state_5259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5259__$1,inst_5257);
} else {
return null;
}
}
});})(c__2882__auto__,canvas_5265))
;
return ((function (switch__2792__auto__,c__2882__auto__,canvas_5265){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_5261 = [null,null,null,null,null,null,null];
(statearr_5261[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_5261[(1)] = (1));

return statearr_5261;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_5259){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5262){if((e5262 instanceof Object)){
var ex__2796__auto__ = e5262;
var statearr_5263_5272 = state_5259;
(statearr_5263_5272[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5273 = state_5259;
state_5259 = G__5273;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_5259){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_5259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,canvas_5265))
})();
var state__2884__auto__ = (function (){var statearr_5264 = f__2883__auto__.call(null);
(statearr_5264[(6)] = c__2882__auto__);

return statearr_5264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,canvas_5265))
);

return c__2882__auto__;
});})(canvas_5265))
,(33));
var c__2882__auto___5389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5389){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5389){
return (function (state_5356){
var state_val_5357 = (state_5356[(1)]);
if((state_val_5357 === (7))){
var inst_5352 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5359_5390 = state_5356__$1;
(statearr_5359_5390[(2)] = inst_5352);

(statearr_5359_5390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (1))){
var inst_5274 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"select1","select1",1717049172),new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717)];
var inst_5275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5276 = [(0),(0)];
var inst_5277 = (new cljs.core.PersistentVector(null,2,(5),inst_5275,inst_5276,null));
var inst_5278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5280 = [(50),(50),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_5281 = (new cljs.core.PersistentVector(null,4,(5),inst_5279,inst_5280,null));
var inst_5282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5283 = [(50),(100),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_5284 = (new cljs.core.PersistentVector(null,4,(5),inst_5282,inst_5283,null));
var inst_5285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5286 = [(50),(150),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_5287 = (new cljs.core.PersistentVector(null,4,(5),inst_5285,inst_5286,null));
var inst_5288 = [inst_5281,inst_5284,inst_5287];
var inst_5289 = (new cljs.core.PersistentVector(null,3,(5),inst_5278,inst_5288,null));
var inst_5290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5292 = [(150),(50),(20),new cljs.core.Keyword(null,"rock","rock",946709275)];
var inst_5293 = (new cljs.core.PersistentVector(null,4,(5),inst_5291,inst_5292,null));
var inst_5294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5295 = [(150),(100),(20),new cljs.core.Keyword(null,"fish","fish",-1871685900)];
var inst_5296 = (new cljs.core.PersistentVector(null,4,(5),inst_5294,inst_5295,null));
var inst_5297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5298 = [(150),(150),(20),new cljs.core.Keyword(null,"family","family",-1313145692)];
var inst_5299 = (new cljs.core.PersistentVector(null,4,(5),inst_5297,inst_5298,null));
var inst_5300 = [inst_5293,inst_5296,inst_5299];
var inst_5301 = (new cljs.core.PersistentVector(null,3,(5),inst_5290,inst_5300,null));
var inst_5302 = cljs.core.PersistentHashSet.EMPTY;
var inst_5303 = [false,inst_5277,inst_5289,inst_5301,null,null,inst_5302];
var inst_5304 = cljs.core.PersistentHashMap.fromArrays(inst_5274,inst_5303);
var inst_5305 = inst_5304;
var state_5356__$1 = (function (){var statearr_5360 = state_5356;
(statearr_5360[(7)] = inst_5305);

return statearr_5360;
})();
var statearr_5361_5391 = state_5356__$1;
(statearr_5361_5391[(2)] = null);

(statearr_5361_5391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (4))){
var inst_5309 = (state_5356[(8)]);
var inst_5313 = (state_5356[(9)]);
var inst_5309__$1 = (state_5356[(2)]);
var inst_5313__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_5309__$1);
var inst_5314 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),inst_5313__$1);
var state_5356__$1 = (function (){var statearr_5362 = state_5356;
(statearr_5362[(8)] = inst_5309__$1);

(statearr_5362[(9)] = inst_5313__$1);

return statearr_5362;
})();
if(inst_5314){
var statearr_5363_5392 = state_5356__$1;
(statearr_5363_5392[(1)] = (5));

} else {
var statearr_5364_5393 = state_5356__$1;
(statearr_5364_5393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (15))){
var inst_5305 = (state_5356[(7)]);
var tmp5358 = inst_5305;
var inst_5305__$1 = tmp5358;
var state_5356__$1 = (function (){var statearr_5365 = state_5356;
(statearr_5365[(7)] = inst_5305__$1);

return statearr_5365;
})();
var statearr_5366_5394 = state_5356__$1;
(statearr_5366_5394[(2)] = null);

(statearr_5366_5394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (13))){
var inst_5348 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5367_5395 = state_5356__$1;
(statearr_5367_5395[(2)] = inst_5348);

(statearr_5367_5395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (6))){
var inst_5313 = (state_5356[(9)]);
var inst_5319 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),inst_5313);
var state_5356__$1 = state_5356;
if(inst_5319){
var statearr_5368_5396 = state_5356__$1;
(statearr_5368_5396[(1)] = (8));

} else {
var statearr_5369_5397 = state_5356__$1;
(statearr_5369_5397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (3))){
var inst_5354 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5356__$1,inst_5354);
} else {
if((state_val_5357 === (12))){
var inst_5313 = (state_5356[(9)]);
var inst_5336 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),inst_5313);
var state_5356__$1 = state_5356;
if(inst_5336){
var statearr_5370_5398 = state_5356__$1;
(statearr_5370_5398[(1)] = (14));

} else {
var statearr_5371_5399 = state_5356__$1;
(statearr_5371_5399[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (2))){
var inst_5305 = (state_5356[(7)]);
var inst_5307 = app.t1.main.model = inst_5305;
var state_5356__$1 = (function (){var statearr_5372 = state_5356;
(statearr_5372[(10)] = inst_5307);

return statearr_5372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5356__$1,(4),app.t1.main.evt);
} else {
if((state_val_5357 === (11))){
var inst_5305 = (state_5356[(7)]);
var inst_5330 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398)];
var inst_5331 = [false,true];
var inst_5332 = cljs.core.PersistentHashMap.fromArrays(inst_5330,inst_5331);
var inst_5333 = cljs.core.merge.call(null,inst_5305,inst_5332);
var inst_5305__$1 = inst_5333;
var state_5356__$1 = (function (){var statearr_5373 = state_5356;
(statearr_5373[(7)] = inst_5305__$1);

return statearr_5373;
})();
var statearr_5374_5400 = state_5356__$1;
(statearr_5374_5400[(2)] = null);

(statearr_5374_5400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (9))){
var inst_5313 = (state_5356[(9)]);
var inst_5328 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),inst_5313);
var state_5356__$1 = state_5356;
if(inst_5328){
var statearr_5375_5401 = state_5356__$1;
(statearr_5375_5401[(1)] = (11));

} else {
var statearr_5376_5402 = state_5356__$1;
(statearr_5376_5402[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (5))){
var inst_5305 = (state_5356[(7)]);
var inst_5316 = app.t1.main.update.call(null,inst_5305);
var inst_5305__$1 = inst_5316;
var state_5356__$1 = (function (){var statearr_5377 = state_5356;
(statearr_5377[(7)] = inst_5305__$1);

return statearr_5377;
})();
var statearr_5378_5403 = state_5356__$1;
(statearr_5378_5403[(2)] = null);

(statearr_5378_5403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (14))){
var inst_5305 = (state_5356[(7)]);
var inst_5338 = [new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128)];
var inst_5339 = [true,true];
var inst_5340 = cljs.core.PersistentHashMap.fromArrays(inst_5338,inst_5339);
var inst_5341 = cljs.core.merge.call(null,inst_5305,inst_5340);
var inst_5305__$1 = inst_5341;
var state_5356__$1 = (function (){var statearr_5379 = state_5356;
(statearr_5379[(7)] = inst_5305__$1);

return statearr_5379;
})();
var statearr_5380_5404 = state_5356__$1;
(statearr_5380_5404[(2)] = null);

(statearr_5380_5404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (16))){
var inst_5346 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5381_5405 = state_5356__$1;
(statearr_5381_5405[(2)] = inst_5346);

(statearr_5381_5405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (10))){
var inst_5350 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5382_5406 = state_5356__$1;
(statearr_5382_5406[(2)] = inst_5350);

(statearr_5382_5406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (8))){
var inst_5305 = (state_5356[(7)]);
var inst_5309 = (state_5356[(8)]);
var inst_5321 = [new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336)];
var inst_5322 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_5309);
var inst_5323 = [inst_5322];
var inst_5324 = cljs.core.PersistentHashMap.fromArrays(inst_5321,inst_5323);
var inst_5325 = cljs.core.merge.call(null,inst_5305,inst_5324);
var inst_5305__$1 = inst_5325;
var state_5356__$1 = (function (){var statearr_5383 = state_5356;
(statearr_5383[(7)] = inst_5305__$1);

return statearr_5383;
})();
var statearr_5384_5407 = state_5356__$1;
(statearr_5384_5407[(2)] = null);

(statearr_5384_5407[(1)] = (2));


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
});})(c__2882__auto___5389))
;
return ((function (switch__2792__auto__,c__2882__auto___5389){
return (function() {
var app$t1$main$state_machine__2793__auto__ = null;
var app$t1$main$state_machine__2793__auto____0 = (function (){
var statearr_5385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5385[(0)] = app$t1$main$state_machine__2793__auto__);

(statearr_5385[(1)] = (1));

return statearr_5385;
});
var app$t1$main$state_machine__2793__auto____1 = (function (state_5356){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5386){if((e5386 instanceof Object)){
var ex__2796__auto__ = e5386;
var statearr_5387_5408 = state_5356;
(statearr_5387_5408[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5409 = state_5356;
state_5356 = G__5409;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$t1$main$state_machine__2793__auto__ = function(state_5356){
switch(arguments.length){
case 0:
return app$t1$main$state_machine__2793__auto____0.call(this);
case 1:
return app$t1$main$state_machine__2793__auto____1.call(this,state_5356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$t1$main$state_machine__2793__auto____0;
app$t1$main$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$t1$main$state_machine__2793__auto____1;
return app$t1$main$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5389))
})();
var state__2884__auto__ = (function (){var statearr_5388 = f__2883__auto__.call(null);
(statearr_5388[(6)] = c__2882__auto___5389);

return statearr_5388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5389))
);

app.t1.main.isPointInCircle = (function app$t1$main$isPointInCircle(p,p__5410){
var vec__5411 = p__5410;
var x = cljs.core.nth.call(null,vec__5411,(0),null);
var y = cljs.core.nth.call(null,vec__5411,(1),null);
var radius = cljs.core.nth.call(null,vec__5411,(2),null);
return ((radius * radius) > cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.take.call(null,(2),cljs.core.repeat.call(null,cljs.core.map.call(null,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p))))));
});
app.t1.main.checkAnswer = (function app$t1$main$checkAnswer(ctx,s1,s2){
var vec__5414 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1], null));
var _ = cljs.core.nth.call(null,vec__5414,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5414,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__5414,(2),null);
var a1 = cljs.core.nth.call(null,vec__5414,(3),null);
var vec__5417 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611),s2], null));
var ___$3 = cljs.core.nth.call(null,vec__5417,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__5417,(1),null);
var ___$5 = cljs.core.nth.call(null,vec__5417,(2),null);
var a2 = cljs.core.nth.call(null,vec__5417,(3),null);
return cljs.core._EQ_.call(null,a1,a2);
});
app.t1.main.update = (function app$t1$main$update(ctx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__5420){
var vec__5421 = p__5420;
var _ = cljs.core.nth.call(null,vec__5421,(0),null);
var selected = cljs.core.nth.call(null,vec__5421,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(ctx)))));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseDown","mouseDown",-930987128),false,new cljs.core.Keyword(null,"select1","select1",1717049172),idx], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398).cljs$core$IFn$_invoke$arity$1(ctx))){
var idx = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__5424){
var vec__5425 = p__5424;
var _ = cljs.core.nth.call(null,vec__5425,(0),null);
var selected = cljs.core.nth.call(null,vec__5425,(1),null);
return selected;
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,app.t1.main.isPointInCircle,new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(ctx)))));
if(cljs.core.not.call(null,idx)){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null));
} else {
var s1 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(ctx);
var s2 = idx;
var pass = app.t1.main.checkAnswer.call(null,ctx,s1,s2);
if(cljs.core.not.call(null,pass)){
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null], null));
} else {
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouseUp","mouseUp",431809398),false,new cljs.core.Keyword(null,"select1","select1",1717049172),null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,s2], null))], null));
}
}
} else {
return ctx;

}
}
});
app.t1.main.sketchProc = (function app$t1$main$sketchProc(pc){
app.t1.main.pg = (0);

app.t1.main.circleRadius = (5);

pc.setup = (function (){
pc.size((200),(200));

return app.t1.main.pg = pc.createGraphics((200),(200),pc.P3D);
});

return pc.draw = (function (){
if(cljs.core.not.call(null,app.t1.main.model)){
return pc.text("no model",(30),(30));
} else {
var mousePos = new cljs.core.Keyword(null,"mousePos","mousePos",-1199647336).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
var vec__5428 = mousePos;
var mx = cljs.core.nth.call(null,vec__5428,(0),null);
var my = cljs.core.nth.call(null,vec__5428,(1),null);
pc.background((200));

cljs.core.dorun.call(null,(function (){var seq__5431 = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model)));
var chunk__5432 = null;
var count__5433 = (0);
var i__5434 = (0);
while(true){
if((i__5434 < count__5433)){
var c = cljs.core._nth.call(null,chunk__5432,i__5434);
var isLeft_5466 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__5435_5467 = c;
var x_5468 = cljs.core.nth.call(null,vec__5435_5467,(0),null);
var y_5469 = cljs.core.nth.call(null,vec__5435_5467,(1),null);
var radius_5470 = cljs.core.nth.call(null,vec__5435_5467,(2),null);
var a_5471 = cljs.core.nth.call(null,vec__5435_5467,(3),null);
var radius2_5472 = (radius_5470 * (2));
var showText_5473 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_5471,(cljs.core.truth_(isLeft_5466)?(0):(1))], null));
var showTextOffsetX_5474 = (- (pc.textWidth(showText_5473) / (2)));
var selected_5475 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_5475)){
pc.fill((255));

pc.ellipse(x_5468,y_5469,radius2_5472,radius2_5472);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_5468,y_5469,radius2_5472,radius2_5472);
}

pc.fill((0));

pc.text(showText_5473,(x_5468 + showTextOffsetX_5474),y_5469);


var G__5476 = seq__5431;
var G__5477 = chunk__5432;
var G__5478 = count__5433;
var G__5479 = (i__5434 + (1));
seq__5431 = G__5476;
chunk__5432 = G__5477;
count__5433 = G__5478;
i__5434 = G__5479;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5431);
if(temp__5457__auto__){
var seq__5431__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5431__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5431__$1);
var G__5480 = cljs.core.chunk_rest.call(null,seq__5431__$1);
var G__5481 = c__4319__auto__;
var G__5482 = cljs.core.count.call(null,c__4319__auto__);
var G__5483 = (0);
seq__5431 = G__5480;
chunk__5432 = G__5481;
count__5433 = G__5482;
i__5434 = G__5483;
continue;
} else {
var c = cljs.core.first.call(null,seq__5431__$1);
var isLeft_5484 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var vec__5438_5485 = c;
var x_5486 = cljs.core.nth.call(null,vec__5438_5485,(0),null);
var y_5487 = cljs.core.nth.call(null,vec__5438_5485,(1),null);
var radius_5488 = cljs.core.nth.call(null,vec__5438_5485,(2),null);
var a_5489 = cljs.core.nth.call(null,vec__5438_5485,(3),null);
var radius2_5490 = (radius_5488 * (2));
var showText_5491 = cljs.core.get_in.call(null,app.t1.main.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_5489,(cljs.core.truth_(isLeft_5484)?(0):(1))], null));
var showTextOffsetX_5492 = (- (pc.textWidth(showText_5491) / (2)));
var selected_5493 = app.t1.main.isPointInCircle.call(null,mousePos,c);
if(cljs.core.not.call(null,selected_5493)){
pc.fill((255));

pc.ellipse(x_5486,y_5487,radius2_5490,radius2_5490);
} else {
pc.fill((100),(0),(0));

pc.ellipse(x_5486,y_5487,radius2_5490,radius2_5490);
}

pc.fill((0));

pc.text(showText_5491,(x_5486 + showTextOffsetX_5492),y_5487);


var G__5494 = cljs.core.next.call(null,seq__5431__$1);
var G__5495 = null;
var G__5496 = (0);
var G__5497 = (0);
seq__5431 = G__5494;
chunk__5432 = G__5495;
count__5433 = G__5496;
i__5434 = G__5497;
continue;
}
} else {
return null;
}
}
break;
}
})());

pc.fill((0));

var temp__5455__auto___5498 = new cljs.core.Keyword(null,"select1","select1",1717049172).cljs$core$IFn$_invoke$arity$1(app.t1.main.model);
if(cljs.core.truth_(temp__5455__auto___5498)){
var s1_5499 = temp__5455__auto___5498;
var vec__5441_5500 = cljs.core.get_in.call(null,app.t1.main.model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891),s1_5499], null));
var x_5501 = cljs.core.nth.call(null,vec__5441_5500,(0),null);
var y_5502 = cljs.core.nth.call(null,vec__5441_5500,(1),null);
pc.line(x_5501,y_5502,mx,my);
} else {
}

pc.fill((0));

cljs.core.dorun.call(null,(function (){var seq__5444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"buildLine","buildLine",-1138849717).cljs$core$IFn$_invoke$arity$1(app.t1.main.model));
var chunk__5445 = null;
var count__5446 = (0);
var i__5447 = (0);
while(true){
if((i__5447 < count__5446)){
var line = cljs.core._nth.call(null,chunk__5445,i__5447);
var vec__5448_5503 = line;
var s1_5504 = cljs.core.nth.call(null,vec__5448_5503,(0),null);
var s2_5505 = cljs.core.nth.call(null,vec__5448_5503,(1),null);
var vec__5451_5506 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_5504);
var x_5507 = cljs.core.nth.call(null,vec__5451_5506,(0),null);
var y_5508 = cljs.core.nth.call(null,vec__5451_5506,(1),null);
var vec__5454_5509 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_5505);
var x2_5510 = cljs.core.nth.call(null,vec__5454_5509,(0),null);
var y2_5511 = cljs.core.nth.call(null,vec__5454_5509,(1),null);
pc.line(x_5507,y_5508,x2_5510,y2_5511);


var G__5512 = seq__5444;
var G__5513 = chunk__5445;
var G__5514 = count__5446;
var G__5515 = (i__5447 + (1));
seq__5444 = G__5512;
chunk__5445 = G__5513;
count__5446 = G__5514;
i__5447 = G__5515;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5444);
if(temp__5457__auto__){
var seq__5444__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5444__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__5444__$1);
var G__5516 = cljs.core.chunk_rest.call(null,seq__5444__$1);
var G__5517 = c__4319__auto__;
var G__5518 = cljs.core.count.call(null,c__4319__auto__);
var G__5519 = (0);
seq__5444 = G__5516;
chunk__5445 = G__5517;
count__5446 = G__5518;
i__5447 = G__5519;
continue;
} else {
var line = cljs.core.first.call(null,seq__5444__$1);
var vec__5457_5520 = line;
var s1_5521 = cljs.core.nth.call(null,vec__5457_5520,(0),null);
var s2_5522 = cljs.core.nth.call(null,vec__5457_5520,(1),null);
var vec__5460_5523 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"leftCircle","leftCircle",1236648891).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s1_5521);
var x_5524 = cljs.core.nth.call(null,vec__5460_5523,(0),null);
var y_5525 = cljs.core.nth.call(null,vec__5460_5523,(1),null);
var vec__5463_5526 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"rightCircle","rightCircle",-1084503611).cljs$core$IFn$_invoke$arity$1(app.t1.main.model),s2_5522);
var x2_5527 = cljs.core.nth.call(null,vec__5463_5526,(0),null);
var y2_5528 = cljs.core.nth.call(null,vec__5463_5526,(1),null);
pc.line(x_5524,y_5525,x2_5527,y2_5528);


var G__5529 = cljs.core.next.call(null,seq__5444__$1);
var G__5530 = null;
var G__5531 = (0);
var G__5532 = (0);
seq__5444 = G__5529;
chunk__5445 = G__5530;
count__5446 = G__5531;
i__5447 = G__5532;
continue;
}
} else {
return null;
}
}
break;
}
})());

pc.fill((255));

return pc.ellipse(mx,my,(10),(10));
}
});
});
var canvas_5533 = document.getElementById("canvas1");
var p_5534 = (new Processing(canvas_5533,app.t1.main.sketchProc));

//# sourceMappingURL=main.js.map
