var asm = require('./lib.js')
var test = asm.cwrap('test', 'void', [])
test();
