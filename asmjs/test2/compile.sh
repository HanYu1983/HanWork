/Users/hanyu/Documents/asmjs_workspace/emsdk-portable/emscripten/1.37.9/emcc \
-s EXPORTED_FUNCTIONS="['_test']" \
-o lib.js \
gl-matrix.c-master/*.c \
gameworks/*.mm \
lib.c
