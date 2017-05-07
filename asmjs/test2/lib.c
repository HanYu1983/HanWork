#include <emscripten.h>
#include <emscripten/html5.h>
#include <GLES3/gl32.h>
#include <GLES3/gl2ext.h>

typedef struct {
	GLuint vertexPositionAttribute;
	GLuint pMatrixUniform;
	GLuint mvMatrixUniform;
} Location;

Location location;

int initShader(const char *fsstr, const char *vsstr){
	GLuint fs = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fs, 1, &fsstr, 0);
	glCompileShader(fs);
	char logstr[30];
	int loglen =0;
	glGetShaderInfoLog(fs, 30, &loglen, logstr);
	printf("%s\n", logstr);
	
	GLuint vs = glCreateShader(GL_VERTEX_SHADER);
	glShaderSource(vs, 1, &vsstr, 0);
	glCompileShader(vs);
	glGetShaderInfoLog(vs, 30, &loglen, logstr);
	printf("%s\n", logstr);
	
	GLuint program = glCreateProgram();
	glAttachShader(program, vs);
	glAttachShader(program, fs);
	glLinkProgram(program);
	glUseProgram(program);
	
	GLuint vertexPositionAttribute = glGetAttribLocation(program, "aVertexPosition");
	glEnableVertexAttribArray(vertexPositionAttribute);

	GLuint pMatrixUniform = glGetUniformLocation(program, "uPMatrix");
	GLuint mvMatrixUniform = glGetUniformLocation(program, "uMVMatrix");
	
	location.vertexPositionAttribute = vertexPositionAttribute;
	location.pMatrixUniform = pMatrixUniform;
	location.mvMatrixUniform = mvMatrixUniform;
	return 0;
}

void renderScene(void) {
	glViewport(0, 0, 100, 100);
	glClearColor(1, 1, 0, 1);
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
}

void test() {
	printf("start\n");
	EmscriptenWebGLContextAttributes attr = {
		.preserveDrawingBuffer = EM_TRUE,
		.majorVersion = 2 // 這個值一定要給
	};
	EMSCRIPTEN_WEBGL_CONTEXT_HANDLE handler = emscripten_webgl_create_context("webgl", &attr);
	EMSCRIPTEN_RESULT ret = emscripten_webgl_make_context_current(handler);
	if( ret != EMSCRIPTEN_RESULT_SUCCESS){
		printf("lose:%d\n", ret);
	}
	
	char *fs = "precision mediump float;void main(void) {gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);}";
	char *vs = "attribute vec3 aVertexPosition;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;void main(void) { // gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0); \n}";
	initShader(fs, vs);
	renderScene();
}