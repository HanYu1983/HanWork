goog.provide('app.t9.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('app.t9.qlearning');
app.t9.main.train = (function app$t9$main$train(atomModel,atomOption){
var seq1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27041_SHARP_){
return cljs.core.mod(p1__27041_SHARP_,(10));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var seq2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1){
return (function (p1__27043_SHARP_){
return ((9) - p1__27043_SHARP_);
});})(seq1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1){
return (function (p1__27042_SHARP_){
return cljs.core.mod(p1__27042_SHARP_,(10));
});})(seq1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var seq3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1,seq2){
return (function (p1__27044_SHARP_){
return cljs.core.mod(p1__27044_SHARP_,(5));
});})(seq1,seq2))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var seq4 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1,seq2,seq3){
return (function (p1__27045_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(3),(3),(3),(4)], null),cljs.core.mod(p1__27045_SHARP_,(7)));
});})(seq1,seq2,seq3))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__,seq1,seq2,seq3,seq4){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__,seq1,seq2,seq3,seq4){
return (function (state_27172){
var state_val_27173 = (state_27172[(1)]);
if((state_val_27173 === (7))){
var inst_27127 = (state_27172[(7)]);
var inst_27121 = (state_27172[(8)]);
var inst_27116 = (state_27172[(9)]);
var inst_27132 = (state_27172[(10)]);
var inst_27126 = (state_27172[(11)]);
var inst_27122 = (state_27172[(12)]);
var inst_27131 = (state_27172[(13)]);
var inst_27117 = (state_27172[(14)]);
var inst_27162 = (state_27172[(2)]);
var inst_27163 = cljs.core.reset_BANG_(atomModel,inst_27162);
var inst_27164 = cljs.core.cons(inst_27116,inst_27117);
var inst_27165 = cljs.core.cons(inst_27121,inst_27122);
var inst_27166 = cljs.core.cons(inst_27126,inst_27127);
var inst_27167 = cljs.core.cons(inst_27131,inst_27132);
var inst_27095 = inst_27162;
var inst_27096 = inst_27164;
var inst_27097 = inst_27165;
var inst_27098 = inst_27166;
var inst_27099 = inst_27167;
var state_27172__$1 = (function (){var statearr_27174 = state_27172;
(statearr_27174[(15)] = inst_27095);

(statearr_27174[(16)] = inst_27163);

(statearr_27174[(17)] = inst_27096);

(statearr_27174[(18)] = inst_27097);

(statearr_27174[(19)] = inst_27099);

(statearr_27174[(20)] = inst_27098);

return statearr_27174;
})();
var statearr_27175_27239 = state_27172__$1;
(statearr_27175_27239[(2)] = null);

(statearr_27175_27239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (1))){
var inst_27074 = cljs.core.deref(atomModel);
var inst_27075 = cljs.core.seq(seq1);
var inst_27076 = cljs.core.first(inst_27075);
var inst_27077 = cljs.core.next(inst_27075);
var inst_27078 = cljs.core.first(inst_27077);
var inst_27079 = cljs.core.next(inst_27077);
var inst_27080 = cljs.core.seq(seq2);
var inst_27081 = cljs.core.first(inst_27080);
var inst_27082 = cljs.core.next(inst_27080);
var inst_27083 = cljs.core.first(inst_27082);
var inst_27084 = cljs.core.next(inst_27082);
var inst_27085 = cljs.core.seq(seq3);
var inst_27086 = cljs.core.first(inst_27085);
var inst_27087 = cljs.core.next(inst_27085);
var inst_27088 = cljs.core.first(inst_27087);
var inst_27089 = cljs.core.next(inst_27087);
var inst_27090 = cljs.core.seq(seq4);
var inst_27091 = cljs.core.first(inst_27090);
var inst_27092 = cljs.core.next(inst_27090);
var inst_27093 = cljs.core.first(inst_27092);
var inst_27094 = cljs.core.next(inst_27092);
var inst_27095 = inst_27074;
var inst_27096 = seq1;
var inst_27097 = seq2;
var inst_27098 = seq3;
var inst_27099 = seq4;
var state_27172__$1 = (function (){var statearr_27176 = state_27172;
(statearr_27176[(15)] = inst_27095);

(statearr_27176[(21)] = inst_27088);

(statearr_27176[(22)] = inst_27076);

(statearr_27176[(23)] = inst_27086);

(statearr_27176[(24)] = inst_27094);

(statearr_27176[(25)] = inst_27083);

(statearr_27176[(26)] = inst_27084);

(statearr_27176[(17)] = inst_27096);

(statearr_27176[(18)] = inst_27097);

(statearr_27176[(19)] = inst_27099);

(statearr_27176[(27)] = inst_27081);

(statearr_27176[(20)] = inst_27098);

(statearr_27176[(28)] = inst_27089);

(statearr_27176[(29)] = inst_27079);

(statearr_27176[(30)] = inst_27078);

(statearr_27176[(31)] = inst_27091);

(statearr_27176[(32)] = inst_27093);

return statearr_27176;
})();
var statearr_27177_27240 = state_27172__$1;
(statearr_27177_27240[(2)] = null);

(statearr_27177_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (4))){
var inst_27136 = (state_27172[(33)]);
var inst_27135 = (state_27172[(2)]);
var inst_27136__$1 = cljs.core.deref(atomOption);
var inst_27137 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_27136__$1);
var inst_27138 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq1","seq1",708727169),inst_27137);
var state_27172__$1 = (function (){var statearr_27178 = state_27172;
(statearr_27178[(33)] = inst_27136__$1);

(statearr_27178[(34)] = inst_27135);

return statearr_27178;
})();
if(inst_27138){
var statearr_27179_27241 = state_27172__$1;
(statearr_27179_27241[(1)] = (5));

} else {
var statearr_27180_27242 = state_27172__$1;
(statearr_27180_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (15))){
var state_27172__$1 = state_27172;
var statearr_27181_27243 = state_27172__$1;
(statearr_27181_27243[(2)] = null);

(statearr_27181_27243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (13))){
var inst_27158 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27182_27244 = state_27172__$1;
(statearr_27182_27244[(2)] = inst_27158);

(statearr_27182_27244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (6))){
var inst_27136 = (state_27172[(33)]);
var inst_27142 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_27136);
var inst_27143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq2","seq2",-1643305256),inst_27142);
var state_27172__$1 = state_27172;
if(inst_27143){
var statearr_27183_27245 = state_27172__$1;
(statearr_27183_27245[(1)] = (8));

} else {
var statearr_27184_27246 = state_27172__$1;
(statearr_27184_27246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (3))){
var inst_27170 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27172__$1,inst_27170);
} else {
if((state_val_27173 === (12))){
var state_27172__$1 = state_27172;
var statearr_27185_27247 = state_27172__$1;
(statearr_27185_27247[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (2))){
var inst_27096 = (state_27172[(17)]);
var inst_27097 = (state_27172[(18)]);
var inst_27099 = (state_27172[(19)]);
var inst_27098 = (state_27172[(20)]);
var inst_27113 = cljs.core.seq(inst_27096);
var inst_27114 = cljs.core.first(inst_27113);
var inst_27115 = cljs.core.next(inst_27113);
var inst_27116 = cljs.core.first(inst_27115);
var inst_27117 = cljs.core.next(inst_27115);
var inst_27118 = cljs.core.seq(inst_27097);
var inst_27119 = cljs.core.first(inst_27118);
var inst_27120 = cljs.core.next(inst_27118);
var inst_27121 = cljs.core.first(inst_27120);
var inst_27122 = cljs.core.next(inst_27120);
var inst_27123 = cljs.core.seq(inst_27098);
var inst_27124 = cljs.core.first(inst_27123);
var inst_27125 = cljs.core.next(inst_27123);
var inst_27126 = cljs.core.first(inst_27125);
var inst_27127 = cljs.core.next(inst_27125);
var inst_27128 = cljs.core.seq(inst_27099);
var inst_27129 = cljs.core.first(inst_27128);
var inst_27130 = cljs.core.next(inst_27128);
var inst_27131 = cljs.core.first(inst_27130);
var inst_27132 = cljs.core.next(inst_27130);
var inst_27133 = cljs.core.async.timeout((250));
var state_27172__$1 = (function (){var statearr_27187 = state_27172;
(statearr_27187[(35)] = inst_27124);

(statearr_27187[(36)] = inst_27119);

(statearr_27187[(37)] = inst_27129);

(statearr_27187[(7)] = inst_27127);

(statearr_27187[(8)] = inst_27121);

(statearr_27187[(9)] = inst_27116);

(statearr_27187[(10)] = inst_27132);

(statearr_27187[(11)] = inst_27126);

(statearr_27187[(38)] = inst_27114);

(statearr_27187[(12)] = inst_27122);

(statearr_27187[(13)] = inst_27131);

(statearr_27187[(14)] = inst_27117);

return statearr_27187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27172__$1,(4),inst_27133);
} else {
if((state_val_27173 === (11))){
var inst_27095 = (state_27172[(15)]);
var inst_27124 = (state_27172[(35)]);
var inst_27126 = (state_27172[(11)]);
var inst_27150 = app.t9.qlearning.learn(inst_27095,inst_27124,inst_27126,(1),inst_27126);
var state_27172__$1 = state_27172;
var statearr_27188_27248 = state_27172__$1;
(statearr_27188_27248[(2)] = inst_27150);

(statearr_27188_27248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (9))){
var inst_27136 = (state_27172[(33)]);
var inst_27147 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_27136);
var inst_27148 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq3","seq3",831872919),inst_27147);
var state_27172__$1 = state_27172;
if(inst_27148){
var statearr_27189_27249 = state_27172__$1;
(statearr_27189_27249[(1)] = (11));

} else {
var statearr_27190_27250 = state_27172__$1;
(statearr_27190_27250[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (5))){
var inst_27095 = (state_27172[(15)]);
var inst_27116 = (state_27172[(9)]);
var inst_27114 = (state_27172[(38)]);
var inst_27140 = app.t9.qlearning.learn(inst_27095,inst_27114,inst_27116,(1),inst_27116);
var state_27172__$1 = state_27172;
var statearr_27191_27251 = state_27172__$1;
(statearr_27191_27251[(2)] = inst_27140);

(statearr_27191_27251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (14))){
var inst_27095 = (state_27172[(15)]);
var inst_27129 = (state_27172[(37)]);
var inst_27131 = (state_27172[(13)]);
var inst_27153 = app.t9.qlearning.learn(inst_27095,inst_27129,inst_27131,(1),inst_27131);
var state_27172__$1 = state_27172;
var statearr_27192_27252 = state_27172__$1;
(statearr_27192_27252[(2)] = inst_27153);

(statearr_27192_27252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (16))){
var inst_27156 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27193_27253 = state_27172__$1;
(statearr_27193_27253[(2)] = inst_27156);

(statearr_27193_27253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (10))){
var inst_27160 = (state_27172[(2)]);
var state_27172__$1 = state_27172;
var statearr_27194_27254 = state_27172__$1;
(statearr_27194_27254[(2)] = inst_27160);

(statearr_27194_27254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27173 === (8))){
var inst_27095 = (state_27172[(15)]);
var inst_27119 = (state_27172[(36)]);
var inst_27121 = (state_27172[(8)]);
var inst_27145 = app.t9.qlearning.learn(inst_27095,inst_27119,inst_27121,(1),inst_27121);
var state_27172__$1 = state_27172;
var statearr_27195_27255 = state_27172__$1;
(statearr_27195_27255[(2)] = inst_27145);

(statearr_27195_27255[(1)] = (10));


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
});})(c__25042__auto__,seq1,seq2,seq3,seq4))
;
return ((function (switch__25019__auto__,c__25042__auto__,seq1,seq2,seq3,seq4){
return (function() {
var app$t9$main$train_$_state_machine__25020__auto__ = null;
var app$t9$main$train_$_state_machine__25020__auto____0 = (function (){
var statearr_27196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27196[(0)] = app$t9$main$train_$_state_machine__25020__auto__);

(statearr_27196[(1)] = (1));

return statearr_27196;
});
var app$t9$main$train_$_state_machine__25020__auto____1 = (function (state_27172){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_27172);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e27197){if((e27197 instanceof Object)){
var ex__25023__auto__ = e27197;
var statearr_27198_27256 = state_27172;
(statearr_27198_27256[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27172;
state_27172 = G__27257;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$train_$_state_machine__25020__auto__ = function(state_27172){
switch(arguments.length){
case 0:
return app$t9$main$train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$train_$_state_machine__25020__auto____1.call(this,state_27172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$train_$_state_machine__25020__auto____0;
app$t9$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$train_$_state_machine__25020__auto____1;
return app$t9$main$train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__,seq1,seq2,seq3,seq4))
})();
var state__25044__auto__ = (function (){var statearr_27199 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_27199[(6)] = c__25042__auto__);

return statearr_27199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__,seq1,seq2,seq3,seq4))
);

return c__25042__auto__;
});
app.t9.main.predic = (function app$t9$main$predic(atomModel,atomOption){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var render = ((function (state){
return (function (){
var s = cljs.core.deref(state);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["qlearning\u53EF\u4EE5\u7528\u4F86\u9810\u6E2C\u6A21\u5F0F, x\u900F\u904E'\u8B8A\u6210y\u7684action'\u8B8A\u6210y","\u4E4B\u5F8C\u518D\u9047\u5230x\u6642, \u5C31\u53EF\u4EE5\u77E5\u9053\u6709\u53EF\u80FD\u8B8A\u6210y"].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u5F9E\u6578\u5B573\u958B\u59CB\u9810\u6E2C",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq2",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8),(7),(6),(5),(4),(3),(2),(1),(0)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq3",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(0),(1),(2),(3),(4)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(4),(3),(3),(3),(4)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atomOption,((function (s,state){
return (function (origin){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"seq1","seq1",708727169));
});})(s,state))
);
});})(s,state))
], null),"seq1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atomOption,((function (s,state){
return (function (origin){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"seq2","seq2",-1643305256));
});})(s,state))
);
});})(s,state))
], null),"seq2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atomOption,((function (s,state){
return (function (origin){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"seq3","seq3",831872919));
});})(s,state))
);
});})(s,state))
], null),"seq3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atomOption,((function (s,state){
return (function (origin){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(origin,new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"seq4","seq4",-1843699743));
});})(s,state))
);
});})(s,state))
], null),"seq4"], null)], null),["select ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(atomOption)))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"[(best) (select)]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"]"].join('')], null)], null);
});})(state))
;
var c__25042__auto___27258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___27258,state,render){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto___27258,state,render){
return (function (state_27219){
var state_val_27220 = (state_27219[(1)]);
if((state_val_27220 === (1))){
var state_27219__$1 = state_27219;
var statearr_27221_27259 = state_27219__$1;
(statearr_27221_27259[(2)] = null);

(statearr_27221_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (2))){
var inst_27201 = cljs.core.deref(atomModel);
var inst_27202 = (function (){var qmodel = inst_27201;
return ((function (qmodel,inst_27201,state_val_27220,c__25042__auto___27258,state,render){
return (function (c,_){
return app.t9.qlearning.bestAction(qmodel,c,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10)));
});
;})(qmodel,inst_27201,state_val_27220,c__25042__auto___27258,state,render))
})();
var inst_27203 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((10));
var inst_27204 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(inst_27202,(3),inst_27203);
var inst_27205 = (function (){var qmodel = inst_27201;
var r = inst_27204;
return ((function (qmodel,r,inst_27201,inst_27202,inst_27203,inst_27204,state_val_27220,c__25042__auto___27258,state,render){
return (function (c,_){
return app.t9.qlearning.selectAction(qmodel,c,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10)));
});
;})(qmodel,r,inst_27201,inst_27202,inst_27203,inst_27204,state_val_27220,c__25042__auto___27258,state,render))
})();
var inst_27206 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((10));
var inst_27207 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(inst_27205,(3),inst_27206);
var inst_27208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27209 = [inst_27204,inst_27207];
var inst_27210 = (new cljs.core.PersistentVector(null,2,(5),inst_27208,inst_27209,null));
var inst_27211 = cljs.core.reset_BANG_(state,inst_27210);
var inst_27212 = cljs.core.async.timeout((1000));
var state_27219__$1 = (function (){var statearr_27222 = state_27219;
(statearr_27222[(7)] = inst_27211);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27219__$1,(4),inst_27212);
} else {
if((state_val_27220 === (3))){
var inst_27217 = (state_27219[(2)]);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27219__$1,inst_27217);
} else {
if((state_val_27220 === (4))){
var inst_27214 = (state_27219[(2)]);
var state_27219__$1 = (function (){var statearr_27223 = state_27219;
(statearr_27223[(8)] = inst_27214);

return statearr_27223;
})();
var statearr_27224_27260 = state_27219__$1;
(statearr_27224_27260[(2)] = null);

(statearr_27224_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto___27258,state,render))
;
return ((function (switch__25019__auto__,c__25042__auto___27258,state,render){
return (function() {
var app$t9$main$predic_$_state_machine__25020__auto__ = null;
var app$t9$main$predic_$_state_machine__25020__auto____0 = (function (){
var statearr_27225 = [null,null,null,null,null,null,null,null,null];
(statearr_27225[(0)] = app$t9$main$predic_$_state_machine__25020__auto__);

(statearr_27225[(1)] = (1));

return statearr_27225;
});
var app$t9$main$predic_$_state_machine__25020__auto____1 = (function (state_27219){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_27219);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e27226){if((e27226 instanceof Object)){
var ex__25023__auto__ = e27226;
var statearr_27227_27261 = state_27219;
(statearr_27227_27261[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27262 = state_27219;
state_27219 = G__27262;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$predic_$_state_machine__25020__auto__ = function(state_27219){
switch(arguments.length){
case 0:
return app$t9$main$predic_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$predic_$_state_machine__25020__auto____1.call(this,state_27219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$predic_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$predic_$_state_machine__25020__auto____0;
app$t9$main$predic_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$predic_$_state_machine__25020__auto____1;
return app$t9$main$predic_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto___27258,state,render))
})();
var state__25044__auto__ = (function (){var statearr_27228 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_27228[(6)] = c__25042__auto___27258);

return statearr_27228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___27258,state,render))
);


return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render], null),document.getElementById("playground"));
});
app.t9.main.main = (function app$t9$main$main(){
var option = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"seq1","seq1",708727169)], null));
var qmodel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.t9.qlearning.model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"learningRate","learningRate",2143591057),0.5,new cljs.core.Keyword(null,"discountFactor","discountFactor",206790427),0.9], null)], 0)));
var _ = (function (){var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__,option,qmodel){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__,option,qmodel){
return (function (state_27233){
var state_val_27234 = (state_27233[(1)]);
if((state_val_27234 === (1))){
var inst_27229 = app.t9.main.train(qmodel,option);
var state_27233__$1 = state_27233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27233__$1,(2),inst_27229);
} else {
if((state_val_27234 === (2))){
var inst_27231 = (state_27233[(2)]);
var state_27233__$1 = state_27233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27233__$1,inst_27231);
} else {
return null;
}
}
});})(c__25042__auto__,option,qmodel))
;
return ((function (switch__25019__auto__,c__25042__auto__,option,qmodel){
return (function() {
var app$t9$main$main_$_state_machine__25020__auto__ = null;
var app$t9$main$main_$_state_machine__25020__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null];
(statearr_27235[(0)] = app$t9$main$main_$_state_machine__25020__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var app$t9$main$main_$_state_machine__25020__auto____1 = (function (state_27233){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_27233);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__25023__auto__ = e27236;
var statearr_27237_27263 = state_27233;
(statearr_27237_27263[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27264 = state_27233;
state_27233 = G__27264;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$main_$_state_machine__25020__auto__ = function(state_27233){
switch(arguments.length){
case 0:
return app$t9$main$main_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$main_$_state_machine__25020__auto____1.call(this,state_27233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$main_$_state_machine__25020__auto____0;
app$t9$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$main_$_state_machine__25020__auto____1;
return app$t9$main$main_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__,option,qmodel))
})();
var state__25044__auto__ = (function (){var statearr_27238 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_27238[(6)] = c__25042__auto__);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__,option,qmodel))
);

return c__25042__auto__;
})();
var ___$1 = app.t9.main.predic(qmodel,option);
return null;
});
app.t9.main.main();

//# sourceMappingURL=app.t9.main.js.map
