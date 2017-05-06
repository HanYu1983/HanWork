var asm = require('./game.js')
var onInit = asm.cwrap('onInit', 'void', [])
var onUpdate = asm.cwrap('onUpdate', 'void', [])
var onDestroy = asm.cwrap('onDestroy', 'void', [])
var gameData = asm.cwrap('gameData', 'string', [])

onInit();
// game loop
for(var i=0; i<5; ++i){
  onUpdate(1);
  console.log(gameData())
}

onDestroy();