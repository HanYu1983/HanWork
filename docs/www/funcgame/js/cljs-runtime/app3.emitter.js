goog.provide('app3.emitter');
goog.require('cljs.core');
app3.emitter.inputOb = (new rxjs.Subject());
app3.emitter.send = (function app3$emitter$send(evt,a){
setTimeout((function (){
return app3.emitter.inputOb.next(evt);
}),(1));

return a;
});

//# sourceMappingURL=app3.emitter.js.map
