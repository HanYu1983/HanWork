../emsdk-portable/emscripten/1.37.9/emcc -o game.js -s EXPORTED_FUNCTIONS="['_onInit','_onUpdate','_onDestroy','_gameData']" cJSON_Utils.c cJSON.c game.c 
