var Express, startExpress, main;
Express = require('express');
startExpress = function(){
  var x$, app;
  x$ = app = new Express;
  x$.use("/", Express['static']("../www"));
  x$.listen(8080, function(){
    return console.log("start server");
  });
  return x$;
};
main = function(){
  return startExpress();
};
main();