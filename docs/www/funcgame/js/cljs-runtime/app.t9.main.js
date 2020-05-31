goog.provide('app.t9.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('app.t9.qlearning');
app.t9.main.train = (function app$t9$main$train(atomModel,atomOption){
var seq1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35115_SHARP_){
return cljs.core.mod(p1__35115_SHARP_,(10));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var seq2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1){
return (function (p1__35117_SHARP_){
return ((9) - p1__35117_SHARP_);
});})(seq1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1){
return (function (p1__35116_SHARP_){
return cljs.core.mod(p1__35116_SHARP_,(10));
});})(seq1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var seq3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq1,seq2){
return (function (p1__35118_SHARP_){
return cljs.core.mod(p1__35118_SHARP_,(5));
});})(seq1,seq2))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__,seq1,seq2,seq3){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__,seq1,seq2,seq3){
return (function (state_35216){
var state_val_35217 = (state_35216[(1)]);
if((state_val_35217 === (7))){
var inst_35179 = (state_35216[(7)]);
var inst_35183 = (state_35216[(8)]);
var inst_35174 = (state_35216[(9)]);
var inst_35178 = (state_35216[(10)]);
var inst_35184 = (state_35216[(11)]);
var inst_35173 = (state_35216[(12)]);
var inst_35207 = (state_35216[(2)]);
var inst_35208 = cljs.core.reset_BANG_(atomModel,inst_35207);
var inst_35209 = cljs.core.cons(inst_35173,inst_35174);
var inst_35210 = cljs.core.cons(inst_35178,inst_35179);
var inst_35211 = cljs.core.cons(inst_35183,inst_35184);
var inst_35156 = inst_35207;
var inst_35157 = inst_35209;
var inst_35158 = inst_35210;
var inst_35159 = inst_35211;
var state_35216__$1 = (function (){var statearr_35218 = state_35216;
(statearr_35218[(13)] = inst_35208);

(statearr_35218[(14)] = inst_35159);

(statearr_35218[(15)] = inst_35157);

(statearr_35218[(16)] = inst_35156);

(statearr_35218[(17)] = inst_35158);

return statearr_35218;
})();
var statearr_35219_35273 = state_35216__$1;
(statearr_35219_35273[(2)] = null);

(statearr_35219_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (1))){
var inst_35140 = cljs.core.deref(atomModel);
var inst_35141 = cljs.core.seq(seq1);
var inst_35142 = cljs.core.first(inst_35141);
var inst_35143 = cljs.core.next(inst_35141);
var inst_35144 = cljs.core.first(inst_35143);
var inst_35145 = cljs.core.next(inst_35143);
var inst_35146 = cljs.core.seq(seq2);
var inst_35147 = cljs.core.first(inst_35146);
var inst_35148 = cljs.core.next(inst_35146);
var inst_35149 = cljs.core.first(inst_35148);
var inst_35150 = cljs.core.next(inst_35148);
var inst_35151 = cljs.core.seq(seq3);
var inst_35152 = cljs.core.first(inst_35151);
var inst_35153 = cljs.core.next(inst_35151);
var inst_35154 = cljs.core.first(inst_35153);
var inst_35155 = cljs.core.next(inst_35153);
var inst_35156 = inst_35140;
var inst_35157 = seq1;
var inst_35158 = seq2;
var inst_35159 = seq3;
var state_35216__$1 = (function (){var statearr_35220 = state_35216;
(statearr_35220[(14)] = inst_35159);

(statearr_35220[(18)] = inst_35155);

(statearr_35220[(19)] = inst_35142);

(statearr_35220[(20)] = inst_35149);

(statearr_35220[(21)] = inst_35144);

(statearr_35220[(15)] = inst_35157);

(statearr_35220[(22)] = inst_35145);

(statearr_35220[(16)] = inst_35156);

(statearr_35220[(17)] = inst_35158);

(statearr_35220[(23)] = inst_35152);

(statearr_35220[(24)] = inst_35147);

(statearr_35220[(25)] = inst_35150);

(statearr_35220[(26)] = inst_35154);

return statearr_35220;
})();
var statearr_35221_35274 = state_35216__$1;
(statearr_35221_35274[(2)] = null);

(statearr_35221_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (4))){
var inst_35188 = (state_35216[(27)]);
var inst_35187 = (state_35216[(2)]);
var inst_35188__$1 = cljs.core.deref(atomOption);
var inst_35189 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_35188__$1);
var inst_35190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq1","seq1",708727169),inst_35189);
var state_35216__$1 = (function (){var statearr_35222 = state_35216;
(statearr_35222[(28)] = inst_35187);

(statearr_35222[(27)] = inst_35188__$1);

return statearr_35222;
})();
if(inst_35190){
var statearr_35223_35275 = state_35216__$1;
(statearr_35223_35275[(1)] = (5));

} else {
var statearr_35224_35276 = state_35216__$1;
(statearr_35224_35276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (13))){
var inst_35203 = (state_35216[(2)]);
var state_35216__$1 = state_35216;
var statearr_35225_35277 = state_35216__$1;
(statearr_35225_35277[(2)] = inst_35203);

(statearr_35225_35277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (6))){
var inst_35188 = (state_35216[(27)]);
var inst_35194 = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(inst_35188);
var inst_35195 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq2","seq2",-1643305256),inst_35194);
var state_35216__$1 = state_35216;
if(inst_35195){
var statearr_35226_35278 = state_35216__$1;
(statearr_35226_35278[(1)] = (8));

} else {
var statearr_35227_35279 = state_35216__$1;
(statearr_35227_35279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (3))){
var inst_35214 = (state_35216[(2)]);
var state_35216__$1 = state_35216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35216__$1,inst_35214);
} else {
if((state_val_35217 === (12))){
var state_35216__$1 = state_35216;
var statearr_35228_35280 = state_35216__$1;
(statearr_35228_35280[(2)] = null);

(statearr_35228_35280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (2))){
var inst_35159 = (state_35216[(14)]);
var inst_35157 = (state_35216[(15)]);
var inst_35158 = (state_35216[(17)]);
var inst_35170 = cljs.core.seq(inst_35157);
var inst_35171 = cljs.core.first(inst_35170);
var inst_35172 = cljs.core.next(inst_35170);
var inst_35173 = cljs.core.first(inst_35172);
var inst_35174 = cljs.core.next(inst_35172);
var inst_35175 = cljs.core.seq(inst_35158);
var inst_35176 = cljs.core.first(inst_35175);
var inst_35177 = cljs.core.next(inst_35175);
var inst_35178 = cljs.core.first(inst_35177);
var inst_35179 = cljs.core.next(inst_35177);
var inst_35180 = cljs.core.seq(inst_35159);
var inst_35181 = cljs.core.first(inst_35180);
var inst_35182 = cljs.core.next(inst_35180);
var inst_35183 = cljs.core.first(inst_35182);
var inst_35184 = cljs.core.next(inst_35182);
var inst_35185 = cljs.core.async.timeout((250));
var state_35216__$1 = (function (){var statearr_35229 = state_35216;
(statearr_35229[(7)] = inst_35179);

(statearr_35229[(29)] = inst_35181);

(statearr_35229[(30)] = inst_35171);

(statearr_35229[(8)] = inst_35183);

(statearr_35229[(9)] = inst_35174);

(statearr_35229[(10)] = inst_35178);

(statearr_35229[(11)] = inst_35184);

(statearr_35229[(31)] = inst_35176);

(statearr_35229[(12)] = inst_35173);

return statearr_35229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35216__$1,(4),inst_35185);
} else {
if((state_val_35217 === (11))){
var inst_35181 = (state_35216[(29)]);
var inst_35156 = (state_35216[(16)]);
var inst_35183 = (state_35216[(8)]);
var inst_35200 = app.t9.qlearning.learn(inst_35156,inst_35181,inst_35183,(1),inst_35183);
var state_35216__$1 = state_35216;
var statearr_35230_35281 = state_35216__$1;
(statearr_35230_35281[(2)] = inst_35200);

(statearr_35230_35281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (9))){
var state_35216__$1 = state_35216;
var statearr_35231_35282 = state_35216__$1;
(statearr_35231_35282[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (5))){
var inst_35156 = (state_35216[(16)]);
var inst_35171 = (state_35216[(30)]);
var inst_35173 = (state_35216[(12)]);
var inst_35192 = app.t9.qlearning.learn(inst_35156,inst_35171,inst_35173,(1),inst_35173);
var state_35216__$1 = state_35216;
var statearr_35233_35283 = state_35216__$1;
(statearr_35233_35283[(2)] = inst_35192);

(statearr_35233_35283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (10))){
var inst_35205 = (state_35216[(2)]);
var state_35216__$1 = state_35216;
var statearr_35234_35284 = state_35216__$1;
(statearr_35234_35284[(2)] = inst_35205);

(statearr_35234_35284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35217 === (8))){
var inst_35156 = (state_35216[(16)]);
var inst_35178 = (state_35216[(10)]);
var inst_35176 = (state_35216[(31)]);
var inst_35197 = app.t9.qlearning.learn(inst_35156,inst_35176,inst_35178,(1),inst_35178);
var state_35216__$1 = state_35216;
var statearr_35235_35285 = state_35216__$1;
(statearr_35235_35285[(2)] = inst_35197);

(statearr_35235_35285[(1)] = (10));


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
});})(c__25042__auto__,seq1,seq2,seq3))
;
return ((function (switch__25019__auto__,c__25042__auto__,seq1,seq2,seq3){
return (function() {
var app$t9$main$train_$_state_machine__25020__auto__ = null;
var app$t9$main$train_$_state_machine__25020__auto____0 = (function (){
var statearr_35236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35236[(0)] = app$t9$main$train_$_state_machine__25020__auto__);

(statearr_35236[(1)] = (1));

return statearr_35236;
});
var app$t9$main$train_$_state_machine__25020__auto____1 = (function (state_35216){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35216);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35237){if((e35237 instanceof Object)){
var ex__25023__auto__ = e35237;
var statearr_35238_35286 = state_35216;
(statearr_35238_35286[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35216;
state_35216 = G__35287;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$train_$_state_machine__25020__auto__ = function(state_35216){
switch(arguments.length){
case 0:
return app$t9$main$train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$train_$_state_machine__25020__auto____1.call(this,state_35216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$train_$_state_machine__25020__auto____0;
app$t9$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$train_$_state_machine__25020__auto____1;
return app$t9$main$train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__,seq1,seq2,seq3))
})();
var state__25044__auto__ = (function (){var statearr_35239 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35239[(6)] = c__25042__auto__);

return statearr_35239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__,seq1,seq2,seq3))
);

return c__25042__auto__;
});
app.t9.main.predic = (function app$t9$main$predic(atomModel,atomOption){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var render = ((function (state){
return (function (){
var s = cljs.core.deref(state);
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["qlearning\u53EF\u4EE5\u7528\u4F86\u9810\u6E2C\u6A21\u5F0F, x\u900F\u904E'\u8B8A\u6210y\u7684action'\u8B8A\u6210y","\u4E4B\u5F8C\u518D\u9047\u5230x\u6642, \u5C31\u53EF\u4EE5\u77E5\u9053\u6709\u53EF\u80FD\u8B8A\u6210y"].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u5F9E\u6578\u5B573\u958B\u59CB\u9810\u6E2C",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq2",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8),(7),(6),(5),(4),(3),(2),(1),(0)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["seq3",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(0),(1),(2),(3),(4)], null))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,state){
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
], null),"seq3"], null)], null),["select ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(atomOption)))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"]"].join('')], null)], null);
});})(state))
;
var c__25042__auto___35288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto___35288,state,render){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto___35288,state,render){
return (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (1))){
var state_35253__$1 = state_35253;
var statearr_35255_35289 = state_35253__$1;
(statearr_35255_35289[(2)] = null);

(statearr_35255_35289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (2))){
var inst_35241 = cljs.core.deref(atomModel);
var inst_35242 = (function (){var qmodel = inst_35241;
return ((function (qmodel,inst_35241,state_val_35254,c__25042__auto___35288,state,render){
return (function (c,_){
return app.t9.qlearning.bestAction(qmodel,c,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10)));
});
;})(qmodel,inst_35241,state_val_35254,c__25042__auto___35288,state,render))
})();
var inst_35243 = cljs.core.range.cljs$core$IFn$_invoke$arity$1((10));
var inst_35244 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(inst_35242,(3),inst_35243);
var inst_35245 = cljs.core.reset_BANG_(state,inst_35244);
var inst_35246 = cljs.core.async.timeout((1000));
var state_35253__$1 = (function (){var statearr_35256 = state_35253;
(statearr_35256[(7)] = inst_35245);

return statearr_35256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35253__$1,(4),inst_35246);
} else {
if((state_val_35254 === (3))){
var inst_35251 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35253__$1,inst_35251);
} else {
if((state_val_35254 === (4))){
var inst_35248 = (state_35253[(2)]);
var state_35253__$1 = (function (){var statearr_35257 = state_35253;
(statearr_35257[(8)] = inst_35248);

return statearr_35257;
})();
var statearr_35258_35290 = state_35253__$1;
(statearr_35258_35290[(2)] = null);

(statearr_35258_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto___35288,state,render))
;
return ((function (switch__25019__auto__,c__25042__auto___35288,state,render){
return (function() {
var app$t9$main$predic_$_state_machine__25020__auto__ = null;
var app$t9$main$predic_$_state_machine__25020__auto____0 = (function (){
var statearr_35259 = [null,null,null,null,null,null,null,null,null];
(statearr_35259[(0)] = app$t9$main$predic_$_state_machine__25020__auto__);

(statearr_35259[(1)] = (1));

return statearr_35259;
});
var app$t9$main$predic_$_state_machine__25020__auto____1 = (function (state_35253){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35253);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35260){if((e35260 instanceof Object)){
var ex__25023__auto__ = e35260;
var statearr_35261_35291 = state_35253;
(statearr_35261_35291[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_35253;
state_35253 = G__35292;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$predic_$_state_machine__25020__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return app$t9$main$predic_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$predic_$_state_machine__25020__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$predic_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$predic_$_state_machine__25020__auto____0;
app$t9$main$predic_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$predic_$_state_machine__25020__auto____1;
return app$t9$main$predic_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto___35288,state,render))
})();
var state__25044__auto__ = (function (){var statearr_35262 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35262[(6)] = c__25042__auto___35288);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto___35288,state,render))
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
return (function (state_35267){
var state_val_35268 = (state_35267[(1)]);
if((state_val_35268 === (1))){
var inst_35263 = app.t9.main.train(qmodel,option);
var state_35267__$1 = state_35267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35267__$1,(2),inst_35263);
} else {
if((state_val_35268 === (2))){
var inst_35265 = (state_35267[(2)]);
var state_35267__$1 = state_35267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35267__$1,inst_35265);
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
var statearr_35269 = [null,null,null,null,null,null,null];
(statearr_35269[(0)] = app$t9$main$main_$_state_machine__25020__auto__);

(statearr_35269[(1)] = (1));

return statearr_35269;
});
var app$t9$main$main_$_state_machine__25020__auto____1 = (function (state_35267){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35267);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35270){if((e35270 instanceof Object)){
var ex__25023__auto__ = e35270;
var statearr_35271_35293 = state_35267;
(statearr_35271_35293[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35294 = state_35267;
state_35267 = G__35294;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t9$main$main_$_state_machine__25020__auto__ = function(state_35267){
switch(arguments.length){
case 0:
return app$t9$main$main_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t9$main$main_$_state_machine__25020__auto____1.call(this,state_35267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t9$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t9$main$main_$_state_machine__25020__auto____0;
app$t9$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t9$main$main_$_state_machine__25020__auto____1;
return app$t9$main$main_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__,option,qmodel))
})();
var state__25044__auto__ = (function (){var statearr_35272 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35272[(6)] = c__25042__auto__);

return statearr_35272;
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
