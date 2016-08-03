var Express, open, startExpress, openBrowser, main;
Express = require('express');
open = require('open');
startExpress = function(cb){
  var x$, app;
  x$ = app = new Express;
  x$.use("/", Express['static']("../www"));
  x$.listen(8080, function(){
    console.log("開啟伺服器在localhost:8080");
    return cb();
  });
  return x$;
};
openBrowser = function(){
  return open("http://localhost:8080/bw/index.html", function(err){
    if (err) {
      return console.log(err);
    } else {
      return console.log("自動打開browser");
    }
  });
};
main = function(){
  return startExpress(openBrowser);
};
main();