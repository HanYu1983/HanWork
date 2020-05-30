goog.provide('app.t8.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('app.t8.qlearning');
goog.require('app.t8.board');
app.t8.main.train = (function app$t8$main$train(qmodel,n){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_35150){
var state_val_35151 = (state_35150[(1)]);
if((state_val_35151 === (7))){
var inst_34994 = (state_35150[(7)]);
var inst_35011 = inst_34994.cljs$lang$protocol_mask$partition0$;
var inst_35012 = (inst_35011 & (64));
var inst_35013 = inst_34994.cljs$core$ISeq$;
var inst_35014 = (cljs.core.PROTOCOL_SENTINEL === inst_35013);
var inst_35015 = ((inst_35012) || (inst_35014));
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35015)){
var statearr_35152_35308 = state_35150__$1;
(statearr_35152_35308[(1)] = (10));

} else {
var statearr_35153_35309 = state_35150__$1;
(statearr_35153_35309[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (20))){
var inst_35035 = (state_35150[(8)]);
var inst_35029 = (state_35150[(9)]);
var inst_35030 = (state_35150[(10)]);
var inst_35125 = cljs.core.count(inst_35035);
var inst_35126 = cljs.core.rand_int(inst_35125);
var inst_35127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_35035,inst_35126);
var inst_35128 = cljs.core.constantly(inst_35030);
var inst_35129 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_35029,inst_35127,inst_35128);
var inst_35130 = [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203)];
var inst_35131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),inst_35030);
var state_35150__$1 = (function (){var statearr_35154 = state_35150;
(statearr_35154[(11)] = inst_35130);

(statearr_35154[(12)] = inst_35129);

return statearr_35154;
})();
if(inst_35131){
var statearr_35155_35310 = state_35150__$1;
(statearr_35155_35310[(1)] = (52));

} else {
var statearr_35156_35311 = state_35150__$1;
(statearr_35156_35311[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (27))){
var inst_35063 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35157_35312 = state_35150__$1;
(statearr_35157_35312[(2)] = inst_35063);

(statearr_35157_35312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (1))){
var inst_34988 = [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"lose","lose",-1493527476),new cljs.core.Keyword(null,"self","self",-1547428899)];
var inst_34989 = [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"action","action",-811238024)];
var inst_34990 = [null,null];
var inst_34991 = cljs.core.PersistentHashMap.fromArrays(inst_34989,inst_34990);
var inst_34992 = [qmodel,app.t8.board.board,new cljs.core.Keyword(null,"o","o",-1350007228),(0),(0),(0),inst_34991];
var inst_34993 = cljs.core.PersistentHashMap.fromArrays(inst_34988,inst_34992);
var inst_34994 = inst_34993;
var inst_34995 = n;
var state_35150__$1 = (function (){var statearr_35158 = state_35150;
(statearr_35158[(13)] = inst_34995);

(statearr_35158[(7)] = inst_34994);

return statearr_35158;
})();
var statearr_35159_35313 = state_35150__$1;
(statearr_35159_35313[(2)] = null);

(statearr_35159_35313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (24))){
var inst_35034 = (state_35150[(14)]);
var inst_35066 = (state_35150[(15)]);
var inst_35065 = (state_35150[(2)]);
var inst_35066__$1 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_35034);
var state_35150__$1 = (function (){var statearr_35160 = state_35150;
(statearr_35160[(16)] = inst_35065);

(statearr_35160[(15)] = inst_35066__$1);

return statearr_35160;
})();
if(cljs.core.truth_(inst_35066__$1)){
var statearr_35161_35314 = state_35150__$1;
(statearr_35161_35314[(1)] = (31));

} else {
var statearr_35162_35315 = state_35150__$1;
(statearr_35162_35315[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (39))){
var inst_35082 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35082)){
var statearr_35163_35316 = state_35150__$1;
(statearr_35163_35316[(1)] = (40));

} else {
var statearr_35164_35317 = state_35150__$1;
(statearr_35164_35317[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (46))){
var inst_35033 = (state_35150[(17)]);
var inst_35091 = (inst_35033 + (1));
var state_35150__$1 = state_35150;
var statearr_35165_35318 = state_35150__$1;
(statearr_35165_35318[(2)] = inst_35091);

(statearr_35165_35318[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (4))){
var inst_34994 = (state_35150[(7)]);
var inst_34999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35000 = [new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"lose","lose",-1493527476)];
var inst_35001 = (new cljs.core.PersistentVector(null,3,(5),inst_34999,inst_35000,null));
var inst_35002 = cljs.core.select_keys(inst_34994,inst_35001);
var inst_35003 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35002], 0));
var inst_35004 = new cljs.core.Keyword(null,"brain","brain",428499577).cljs$core$IFn$_invoke$arity$1(inst_34994);
var state_35150__$1 = (function (){var statearr_35166 = state_35150;
(statearr_35166[(18)] = inst_35003);

return statearr_35166;
})();
var statearr_35167_35319 = state_35150__$1;
(statearr_35167_35319[(2)] = inst_35004);

(statearr_35167_35319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (54))){
var inst_35130 = (state_35150[(11)]);
var inst_34995 = (state_35150[(13)]);
var inst_35129 = (state_35150[(12)]);
var inst_34994 = (state_35150[(7)]);
var inst_35028 = (state_35150[(19)]);
var inst_35135 = (state_35150[(2)]);
var inst_35136 = [inst_35028,inst_35129,inst_35135];
var inst_35137 = cljs.core.PersistentHashMap.fromArrays(inst_35130,inst_35136);
var inst_35138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34994,inst_35137], 0));
var inst_35139 = (inst_34995 - (1));
var inst_34994__$1 = inst_35138;
var inst_34995__$1 = inst_35139;
var state_35150__$1 = (function (){var statearr_35168 = state_35150;
(statearr_35168[(13)] = inst_34995__$1);

(statearr_35168[(7)] = inst_34994__$1);

return statearr_35168;
})();
var statearr_35169_35320 = state_35150__$1;
(statearr_35169_35320[(2)] = null);

(statearr_35169_35320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (15))){
var inst_35035 = (state_35150[(8)]);
var inst_35029 = (state_35150[(9)]);
var inst_35030 = (state_35150[(10)]);
var inst_35027 = (state_35150[(2)]);
var inst_35028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"brain","brain",428499577));
var inst_35029__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"board","board",-1907017633));
var inst_35030__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203));
var inst_35031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"win","win",-1624642689));
var inst_35032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"draw","draw",1358331674));
var inst_35033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"lose","lose",-1493527476));
var inst_35034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027,new cljs.core.Keyword(null,"self","self",-1547428899));
var inst_35035__$1 = app.t8.board.possibleActions(inst_35029__$1);
var inst_35036 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35030__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var inst_35037 = cljs.core.count(inst_35035__$1);
var inst_35038 = (inst_35037 === (0));
var state_35150__$1 = (function (){var statearr_35170 = state_35150;
(statearr_35170[(17)] = inst_35033);

(statearr_35170[(20)] = inst_35032);

(statearr_35170[(8)] = inst_35035__$1);

(statearr_35170[(14)] = inst_35034);

(statearr_35170[(9)] = inst_35029__$1);

(statearr_35170[(10)] = inst_35030__$1);

(statearr_35170[(21)] = inst_35031);

(statearr_35170[(22)] = inst_35036);

(statearr_35170[(19)] = inst_35028);

return statearr_35170;
})();
if(cljs.core.truth_(inst_35038)){
var statearr_35171_35321 = state_35150__$1;
(statearr_35171_35321[(1)] = (16));

} else {
var statearr_35172_35322 = state_35150__$1;
(statearr_35172_35322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (48))){
var inst_34995 = (state_35150[(13)]);
var inst_35084 = (state_35150[(23)]);
var inst_35078 = (state_35150[(24)]);
var inst_34994 = (state_35150[(7)]);
var inst_35089 = (state_35150[(25)]);
var inst_35094 = (state_35150[(2)]);
var inst_35095 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"state","state",-1988618099)];
var inst_35096 = [null,null];
var inst_35097 = cljs.core.PersistentHashMap.fromArrays(inst_35095,inst_35096);
var inst_35098 = [inst_35078,app.t8.board.board,inst_35089,inst_35094,new cljs.core.Keyword(null,"o","o",-1350007228),inst_35097];
var inst_35099 = cljs.core.PersistentHashMap.fromArrays(inst_35084,inst_35098);
var inst_35100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34994,inst_35099], 0));
var inst_35101 = (inst_34995 - (1));
var inst_34994__$1 = inst_35100;
var inst_34995__$1 = inst_35101;
var state_35150__$1 = (function (){var statearr_35173 = state_35150;
(statearr_35173[(13)] = inst_34995__$1);

(statearr_35173[(7)] = inst_34994__$1);

return statearr_35173;
})();
var statearr_35174_35323 = state_35150__$1;
(statearr_35174_35323[(2)] = null);

(statearr_35174_35323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (50))){
var state_35150__$1 = state_35150;
var statearr_35175_35324 = state_35150__$1;
(statearr_35175_35324[(2)] = new cljs.core.Keyword(null,"o","o",-1350007228));

(statearr_35175_35324[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (21))){
var inst_35142 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35176_35325 = state_35150__$1;
(statearr_35176_35325[(2)] = inst_35142);

(statearr_35176_35325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (31))){
var inst_35034 = (state_35150[(14)]);
var inst_35068 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_35034);
var state_35150__$1 = state_35150;
var statearr_35177_35326 = state_35150__$1;
(statearr_35177_35326[(2)] = inst_35068);

(statearr_35177_35326[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (32))){
var inst_35066 = (state_35150[(15)]);
var state_35150__$1 = state_35150;
var statearr_35178_35327 = state_35150__$1;
(statearr_35178_35327[(2)] = inst_35066);

(statearr_35178_35327[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (40))){
var inst_35052 = (state_35150[(26)]);
var inst_35084 = [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"lose","lose",-1493527476),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"self","self",-1547428899)];
var state_35150__$1 = (function (){var statearr_35179 = state_35150;
(statearr_35179[(23)] = inst_35084);

return statearr_35179;
})();
if(cljs.core.truth_(inst_35052)){
var statearr_35180_35328 = state_35150__$1;
(statearr_35180_35328[(1)] = (43));

} else {
var statearr_35181_35329 = state_35150__$1;
(statearr_35181_35329[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (33))){
var inst_35071 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35071)){
var statearr_35182_35330 = state_35150__$1;
(statearr_35182_35330[(1)] = (34));

} else {
var statearr_35183_35331 = state_35150__$1;
(statearr_35183_35331[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (13))){
var inst_34994 = (state_35150[(7)]);
var inst_35024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34994);
var state_35150__$1 = state_35150;
var statearr_35184_35332 = state_35150__$1;
(statearr_35184_35332[(2)] = inst_35024);

(statearr_35184_35332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (22))){
var state_35150__$1 = state_35150;
var statearr_35185_35333 = state_35150__$1;
(statearr_35185_35333[(2)] = (10));

(statearr_35185_35333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (36))){
var inst_35052 = (state_35150[(26)]);
var inst_35078 = (state_35150[(2)]);
var state_35150__$1 = (function (){var statearr_35186 = state_35150;
(statearr_35186[(24)] = inst_35078);

return statearr_35186;
})();
if(cljs.core.truth_(inst_35052)){
var statearr_35187_35334 = state_35150__$1;
(statearr_35187_35334[(1)] = (37));

} else {
var statearr_35188_35335 = state_35150__$1;
(statearr_35188_35335[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (41))){
var inst_35104 = (state_35150[(27)]);
var inst_35035 = (state_35150[(8)]);
var inst_35029 = (state_35150[(9)]);
var inst_35030 = (state_35150[(10)]);
var inst_35078 = (state_35150[(24)]);
var inst_35104__$1 = app.t8.qlearning.selectAction(inst_35078,inst_35029,inst_35035);
var inst_35105 = cljs.core.constantly(inst_35030);
var inst_35106 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(inst_35029,inst_35104__$1,inst_35105);
var inst_35107 = [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"self","self",-1547428899)];
var inst_35108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),inst_35030);
var state_35150__$1 = (function (){var statearr_35189 = state_35150;
(statearr_35189[(28)] = inst_35107);

(statearr_35189[(27)] = inst_35104__$1);

(statearr_35189[(29)] = inst_35106);

return statearr_35189;
})();
if(inst_35108){
var statearr_35190_35336 = state_35150__$1;
(statearr_35190_35336[(1)] = (49));

} else {
var statearr_35191_35337 = state_35150__$1;
(statearr_35191_35337[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (43))){
var inst_35031 = (state_35150[(21)]);
var inst_35086 = (inst_35031 + (1));
var state_35150__$1 = state_35150;
var statearr_35192_35338 = state_35150__$1;
(statearr_35192_35338[(2)] = inst_35086);

(statearr_35192_35338[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (29))){
var state_35150__$1 = state_35150;
var statearr_35193_35339 = state_35150__$1;
(statearr_35193_35339[(2)] = null);

(statearr_35193_35339[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (44))){
var inst_35031 = (state_35150[(21)]);
var state_35150__$1 = state_35150;
var statearr_35194_35340 = state_35150__$1;
(statearr_35194_35340[(2)] = inst_35031);

(statearr_35194_35340[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (6))){
var inst_35146 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35195_35341 = state_35150__$1;
(statearr_35195_35341[(2)] = inst_35146);

(statearr_35195_35341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (28))){
var state_35150__$1 = state_35150;
var statearr_35196_35342 = state_35150__$1;
(statearr_35196_35342[(2)] = (1));

(statearr_35196_35342[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (51))){
var inst_35107 = (state_35150[(28)]);
var inst_35104 = (state_35150[(27)]);
var inst_34995 = (state_35150[(13)]);
var inst_35034 = (state_35150[(14)]);
var inst_35029 = (state_35150[(9)]);
var inst_35106 = (state_35150[(29)]);
var inst_35078 = (state_35150[(24)]);
var inst_34994 = (state_35150[(7)]);
var inst_35112 = (state_35150[(2)]);
var inst_35113 = [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"action","action",-811238024)];
var inst_35114 = [inst_35029,inst_35104];
var inst_35115 = cljs.core.PersistentHashMap.fromArrays(inst_35113,inst_35114);
var inst_35116 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35034,inst_35115], 0));
var inst_35117 = [inst_35078,inst_35106,inst_35112,inst_35116];
var inst_35118 = cljs.core.PersistentHashMap.fromArrays(inst_35107,inst_35117);
var inst_35119 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34994,inst_35118], 0));
var inst_35120 = (inst_34995 - (1));
var inst_34994__$1 = inst_35119;
var inst_34995__$1 = inst_35120;
var state_35150__$1 = (function (){var statearr_35197 = state_35150;
(statearr_35197[(13)] = inst_34995__$1);

(statearr_35197[(7)] = inst_34994__$1);

return statearr_35197;
})();
var statearr_35198_35343 = state_35150__$1;
(statearr_35198_35343[(2)] = null);

(statearr_35198_35343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (25))){
var state_35150__$1 = state_35150;
var statearr_35199_35344 = state_35150__$1;
(statearr_35199_35344[(2)] = (-10));

(statearr_35199_35344[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (34))){
var inst_35034 = (state_35150[(14)]);
var inst_35029 = (state_35150[(9)]);
var inst_35065 = (state_35150[(16)]);
var inst_35028 = (state_35150[(19)]);
var inst_35073 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_35034);
var inst_35074 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(inst_35034);
var inst_35075 = app.t8.qlearning.learn(inst_35028,inst_35073,inst_35074,inst_35065,inst_35029);
var state_35150__$1 = state_35150;
var statearr_35200_35345 = state_35150__$1;
(statearr_35200_35345[(2)] = inst_35075);

(statearr_35200_35345[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (17))){
var inst_35036 = (state_35150[(22)]);
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35036)){
var statearr_35201_35346 = state_35150__$1;
(statearr_35201_35346[(1)] = (19));

} else {
var statearr_35202_35347 = state_35150__$1;
(statearr_35202_35347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (3))){
var inst_35148 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35150__$1,inst_35148);
} else {
if((state_val_35151 === (12))){
var inst_35019 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35203_35348 = state_35150__$1;
(statearr_35203_35348[(2)] = inst_35019);

(statearr_35203_35348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (2))){
var inst_34995 = (state_35150[(13)]);
var inst_34997 = (inst_34995 === (0));
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_34997)){
var statearr_35204_35349 = state_35150__$1;
(statearr_35204_35349[(1)] = (4));

} else {
var statearr_35205_35350 = state_35150__$1;
(statearr_35205_35350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (23))){
var inst_35053 = (state_35150[(30)]);
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35053)){
var statearr_35206_35351 = state_35150__$1;
(statearr_35206_35351[(1)] = (25));

} else {
var statearr_35207_35352 = state_35150__$1;
(statearr_35207_35352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (47))){
var inst_35033 = (state_35150[(17)]);
var state_35150__$1 = state_35150;
var statearr_35208_35353 = state_35150__$1;
(statearr_35208_35353[(2)] = inst_35033);

(statearr_35208_35353[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (35))){
var inst_35028 = (state_35150[(19)]);
var state_35150__$1 = state_35150;
var statearr_35209_35354 = state_35150__$1;
(statearr_35209_35354[(2)] = inst_35028);

(statearr_35209_35354[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (19))){
var inst_35052 = (state_35150[(26)]);
var inst_35029 = (state_35150[(9)]);
var inst_35052__$1 = app.t8.board.checkWin(inst_35029,new cljs.core.Keyword(null,"o","o",-1350007228));
var inst_35053 = app.t8.board.checkWin(inst_35029,new cljs.core.Keyword(null,"x","x",2099068185));
var state_35150__$1 = (function (){var statearr_35210 = state_35150;
(statearr_35210[(26)] = inst_35052__$1);

(statearr_35210[(30)] = inst_35053);

return statearr_35210;
})();
if(cljs.core.truth_(inst_35052__$1)){
var statearr_35211_35355 = state_35150__$1;
(statearr_35211_35355[(1)] = (22));

} else {
var statearr_35212_35356 = state_35150__$1;
(statearr_35212_35356[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (11))){
var state_35150__$1 = state_35150;
var statearr_35213_35357 = state_35150__$1;
(statearr_35213_35357[(2)] = false);

(statearr_35213_35357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (9))){
var inst_35022 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
if(cljs.core.truth_(inst_35022)){
var statearr_35214_35358 = state_35150__$1;
(statearr_35214_35358[(1)] = (13));

} else {
var statearr_35215_35359 = state_35150__$1;
(statearr_35215_35359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (5))){
var inst_34994 = (state_35150[(7)]);
var inst_35008 = (inst_34994 == null);
var inst_35009 = cljs.core.not(inst_35008);
var state_35150__$1 = state_35150;
if(inst_35009){
var statearr_35216_35360 = state_35150__$1;
(statearr_35216_35360[(1)] = (7));

} else {
var statearr_35217_35361 = state_35150__$1;
(statearr_35217_35361[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (14))){
var inst_34994 = (state_35150[(7)]);
var state_35150__$1 = state_35150;
var statearr_35218_35362 = state_35150__$1;
(statearr_35218_35362[(2)] = inst_34994);

(statearr_35218_35362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (45))){
var inst_35053 = (state_35150[(30)]);
var inst_35089 = (state_35150[(2)]);
var state_35150__$1 = (function (){var statearr_35219 = state_35150;
(statearr_35219[(25)] = inst_35089);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35053)){
var statearr_35220_35363 = state_35150__$1;
(statearr_35220_35363[(1)] = (46));

} else {
var statearr_35221_35364 = state_35150__$1;
(statearr_35221_35364[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (53))){
var state_35150__$1 = state_35150;
var statearr_35222_35365 = state_35150__$1;
(statearr_35222_35365[(2)] = new cljs.core.Keyword(null,"o","o",-1350007228));

(statearr_35222_35365[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (26))){
var state_35150__$1 = state_35150;
var statearr_35223_35366 = state_35150__$1;
(statearr_35223_35366[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (16))){
var inst_34995 = (state_35150[(13)]);
var inst_35032 = (state_35150[(20)]);
var inst_34994 = (state_35150[(7)]);
var inst_35040 = [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"activePlayer","activePlayer",-1244892203),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"self","self",-1547428899)];
var inst_35041 = (inst_35032 + (1));
var inst_35042 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"state","state",-1988618099)];
var inst_35043 = [null,null];
var inst_35044 = cljs.core.PersistentHashMap.fromArrays(inst_35042,inst_35043);
var inst_35045 = [app.t8.board.board,new cljs.core.Keyword(null,"o","o",-1350007228),inst_35041,inst_35044];
var inst_35046 = cljs.core.PersistentHashMap.fromArrays(inst_35040,inst_35045);
var inst_35047 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34994,inst_35046], 0));
var inst_35048 = (inst_34995 - (1));
var inst_34994__$1 = inst_35047;
var inst_34995__$1 = inst_35048;
var state_35150__$1 = (function (){var statearr_35225 = state_35150;
(statearr_35225[(13)] = inst_34995__$1);

(statearr_35225[(7)] = inst_34994__$1);

return statearr_35225;
})();
var statearr_35226_35367 = state_35150__$1;
(statearr_35226_35367[(2)] = null);

(statearr_35226_35367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (38))){
var inst_35053 = (state_35150[(30)]);
var state_35150__$1 = state_35150;
var statearr_35227_35368 = state_35150__$1;
(statearr_35227_35368[(2)] = inst_35053);

(statearr_35227_35368[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (30))){
var inst_35061 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35228_35369 = state_35150__$1;
(statearr_35228_35369[(2)] = inst_35061);

(statearr_35228_35369[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (10))){
var state_35150__$1 = state_35150;
var statearr_35229_35370 = state_35150__$1;
(statearr_35229_35370[(2)] = true);

(statearr_35229_35370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (18))){
var inst_35144 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35230_35371 = state_35150__$1;
(statearr_35230_35371[(2)] = inst_35144);

(statearr_35230_35371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (52))){
var state_35150__$1 = state_35150;
var statearr_35231_35372 = state_35150__$1;
(statearr_35231_35372[(2)] = new cljs.core.Keyword(null,"x","x",2099068185));

(statearr_35231_35372[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (42))){
var inst_35123 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35232_35373 = state_35150__$1;
(statearr_35232_35373[(2)] = inst_35123);

(statearr_35232_35373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (37))){
var inst_35052 = (state_35150[(26)]);
var state_35150__$1 = state_35150;
var statearr_35233_35374 = state_35150__$1;
(statearr_35233_35374[(2)] = inst_35052);

(statearr_35233_35374[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (8))){
var state_35150__$1 = state_35150;
var statearr_35234_35375 = state_35150__$1;
(statearr_35234_35375[(2)] = false);

(statearr_35234_35375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (49))){
var state_35150__$1 = state_35150;
var statearr_35235_35376 = state_35150__$1;
(statearr_35235_35376[(2)] = new cljs.core.Keyword(null,"x","x",2099068185));

(statearr_35235_35376[(1)] = (51));


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
}
}
}
}
}
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$train_$_state_machine__25020__auto__ = null;
var app$t8$main$train_$_state_machine__25020__auto____0 = (function (){
var statearr_35236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35236[(0)] = app$t8$main$train_$_state_machine__25020__auto__);

(statearr_35236[(1)] = (1));

return statearr_35236;
});
var app$t8$main$train_$_state_machine__25020__auto____1 = (function (state_35150){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35150);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35237){if((e35237 instanceof Object)){
var ex__25023__auto__ = e35237;
var statearr_35238_35377 = state_35150;
(statearr_35238_35377[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35378 = state_35150;
state_35150 = G__35378;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$train_$_state_machine__25020__auto__ = function(state_35150){
switch(arguments.length){
case 0:
return app$t8$main$train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$train_$_state_machine__25020__auto____1.call(this,state_35150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$train_$_state_machine__25020__auto____0;
app$t8$main$train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$train_$_state_machine__25020__auto____1;
return app$t8$main$train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_35239 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35239[(6)] = c__25042__auto__);

return statearr_35239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.background_train = (function app$t8$main$background_train(atomModel){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (1))){
var inst_35240 = app.t8.qlearning.model;
var state_35253__$1 = (function (){var statearr_35255 = state_35253;
(statearr_35255[(7)] = inst_35240);

return statearr_35255;
})();
var statearr_35256_35379 = state_35253__$1;
(statearr_35256_35379[(2)] = null);

(statearr_35256_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (2))){
var inst_35242 = cljs.core.async.timeout((100));
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35253__$1,(4),inst_35242);
} else {
if((state_val_35254 === (3))){
var inst_35251 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35253__$1,inst_35251);
} else {
if((state_val_35254 === (4))){
var inst_35240 = (state_35253[(7)]);
var inst_35244 = (state_35253[(2)]);
var inst_35245 = app.t8.main.train(inst_35240,(100));
var state_35253__$1 = (function (){var statearr_35257 = state_35253;
(statearr_35257[(8)] = inst_35244);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35253__$1,(5),inst_35245);
} else {
if((state_val_35254 === (5))){
var inst_35247 = (state_35253[(2)]);
var inst_35248 = cljs.core.reset_BANG_(atomModel,inst_35247);
var inst_35240 = inst_35247;
var state_35253__$1 = (function (){var statearr_35258 = state_35253;
(statearr_35258[(9)] = inst_35248);

(statearr_35258[(7)] = inst_35240);

return statearr_35258;
})();
var statearr_35259_35380 = state_35253__$1;
(statearr_35259_35380[(2)] = null);

(statearr_35259_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$background_train_$_state_machine__25020__auto__ = null;
var app$t8$main$background_train_$_state_machine__25020__auto____0 = (function (){
var statearr_35260 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35260[(0)] = app$t8$main$background_train_$_state_machine__25020__auto__);

(statearr_35260[(1)] = (1));

return statearr_35260;
});
var app$t8$main$background_train_$_state_machine__25020__auto____1 = (function (state_35253){
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
}catch (e35261){if((e35261 instanceof Object)){
var ex__25023__auto__ = e35261;
var statearr_35262_35381 = state_35253;
(statearr_35262_35381[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35382 = state_35253;
state_35253 = G__35382;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_train_$_state_machine__25020__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return app$t8$main$background_train_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_train_$_state_machine__25020__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_train_$_state_machine__25020__auto____0;
app$t8$main$background_train_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_train_$_state_machine__25020__auto____1;
return app$t8$main$background_train_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_35263 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35263[(6)] = c__25042__auto__);

return statearr_35263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.background_test = (function app$t8$main$background_test(atomModel){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_35288){
var state_val_35289 = (state_35288[(1)]);
if((state_val_35289 === (1))){
var state_35288__$1 = state_35288;
var statearr_35290_35383 = state_35288__$1;
(statearr_35290_35383[(2)] = null);

(statearr_35290_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (2))){
var inst_35265 = cljs.core.async.timeout((1000));
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35288__$1,(4),inst_35265);
} else {
if((state_val_35289 === (3))){
var inst_35286 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35288__$1,inst_35286);
} else {
if((state_val_35289 === (4))){
var inst_35267 = (state_35288[(2)]);
var inst_35268 = cljs.core.deref(atomModel);
var inst_35269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35271 = [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),null];
var inst_35272 = (new cljs.core.PersistentVector(null,3,(5),inst_35270,inst_35271,null));
var inst_35273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35274 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),null];
var inst_35275 = (new cljs.core.PersistentVector(null,3,(5),inst_35273,inst_35274,null));
var inst_35276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35277 = [null,null,null];
var inst_35278 = (new cljs.core.PersistentVector(null,3,(5),inst_35276,inst_35277,null));
var inst_35279 = [inst_35272,inst_35275,inst_35278];
var inst_35280 = (new cljs.core.PersistentVector(null,3,(5),inst_35269,inst_35279,null));
var inst_35281 = app.t8.board.possibleActions(inst_35280);
var inst_35282 = app.t8.qlearning.bestAction(inst_35268,inst_35280,inst_35281);
var inst_35283 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["best:",inst_35282], 0));
var state_35288__$1 = (function (){var statearr_35291 = state_35288;
(statearr_35291[(7)] = inst_35267);

(statearr_35291[(8)] = inst_35283);

return statearr_35291;
})();
var statearr_35292_35384 = state_35288__$1;
(statearr_35292_35384[(2)] = null);

(statearr_35292_35384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$background_test_$_state_machine__25020__auto__ = null;
var app$t8$main$background_test_$_state_machine__25020__auto____0 = (function (){
var statearr_35293 = [null,null,null,null,null,null,null,null,null];
(statearr_35293[(0)] = app$t8$main$background_test_$_state_machine__25020__auto__);

(statearr_35293[(1)] = (1));

return statearr_35293;
});
var app$t8$main$background_test_$_state_machine__25020__auto____1 = (function (state_35288){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35288);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35294){if((e35294 instanceof Object)){
var ex__25023__auto__ = e35294;
var statearr_35295_35385 = state_35288;
(statearr_35295_35385[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35386 = state_35288;
state_35288 = G__35386;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$background_test_$_state_machine__25020__auto__ = function(state_35288){
switch(arguments.length){
case 0:
return app$t8$main$background_test_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$background_test_$_state_machine__25020__auto____1.call(this,state_35288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$background_test_$_state_machine__25020__auto____0;
app$t8$main$background_test_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$background_test_$_state_machine__25020__auto____1;
return app$t8$main$background_test_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_35296 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35296[(6)] = c__25042__auto__);

return statearr_35296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.main = (function app$t8$main$main(){
var c__25042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25042__auto__){
return (function (){
var f__25043__auto__ = (function (){var switch__25019__auto__ = ((function (c__25042__auto__){
return (function (state_35301){
var state_val_35302 = (state_35301[(1)]);
if((state_val_35302 === (1))){
var inst_35297 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.t8.qlearning.model);
var inst_35298 = app.t8.main.background_train(inst_35297);
var inst_35299 = app.t8.main.background_test(inst_35297);
var state_35301__$1 = (function (){var statearr_35303 = state_35301;
(statearr_35303[(7)] = inst_35298);

(statearr_35303[(8)] = inst_35299);

return statearr_35303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35301__$1,null);
} else {
return null;
}
});})(c__25042__auto__))
;
return ((function (switch__25019__auto__,c__25042__auto__){
return (function() {
var app$t8$main$main_$_state_machine__25020__auto__ = null;
var app$t8$main$main_$_state_machine__25020__auto____0 = (function (){
var statearr_35304 = [null,null,null,null,null,null,null,null,null];
(statearr_35304[(0)] = app$t8$main$main_$_state_machine__25020__auto__);

(statearr_35304[(1)] = (1));

return statearr_35304;
});
var app$t8$main$main_$_state_machine__25020__auto____1 = (function (state_35301){
while(true){
var ret_value__25021__auto__ = (function (){try{while(true){
var result__25022__auto__ = switch__25019__auto__(state_35301);
if(cljs.core.keyword_identical_QMARK_(result__25022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25022__auto__;
}
break;
}
}catch (e35305){if((e35305 instanceof Object)){
var ex__25023__auto__ = e35305;
var statearr_35306_35387 = state_35301;
(statearr_35306_35387[(5)] = ex__25023__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35388 = state_35301;
state_35301 = G__35388;
continue;
} else {
return ret_value__25021__auto__;
}
break;
}
});
app$t8$main$main_$_state_machine__25020__auto__ = function(state_35301){
switch(arguments.length){
case 0:
return app$t8$main$main_$_state_machine__25020__auto____0.call(this);
case 1:
return app$t8$main$main_$_state_machine__25020__auto____1.call(this,state_35301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$0 = app$t8$main$main_$_state_machine__25020__auto____0;
app$t8$main$main_$_state_machine__25020__auto__.cljs$core$IFn$_invoke$arity$1 = app$t8$main$main_$_state_machine__25020__auto____1;
return app$t8$main$main_$_state_machine__25020__auto__;
})()
;})(switch__25019__auto__,c__25042__auto__))
})();
var state__25044__auto__ = (function (){var statearr_35307 = (f__25043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25043__auto__.cljs$core$IFn$_invoke$arity$0() : f__25043__auto__.call(null));
(statearr_35307[(6)] = c__25042__auto__);

return statearr_35307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25044__auto__);
});})(c__25042__auto__))
);

return c__25042__auto__;
});
app.t8.main.main();

//# sourceMappingURL=app.t8.main.js.map
