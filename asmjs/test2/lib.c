#include <stdlib.h>
#include <emscripten.h>
#include <emscripten/html5.h>
#include <GLES3/gl32.h>
#include <GLES3/gl2ext.h>
#include "gl-matrix.c-master/gl-matrix.h"

#define HGL_BUFFER_OFFSET(i) ((char *)NULL + (i))

typedef struct {
	GLuint pMatrixUniform;
	GLuint mvMatrixUniform;
} Location;

Location location;

GLuint createVAO( int vertexAttribPosition, int vertexAttribNormal, int vertexAttribTexCoord0 ){
	float data[] = {
		0.0f, 0.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  0.0f,0.0f ,
		0.0f, 1.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  0.0f,1.0f ,
		1.0f, 0.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  1.0f,0.0f ,
		1.0f, 1.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  1.0f,1.0f 
	};
	GLushort indices[] = { 0, 1, 2, 3 };
	
	// vertex buffer object
	GLuint vbo;
	glGenBuffers(1, &vbo);
	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(float)*36, data, GL_STATIC_DRAW);
	
	// index buffer object
	GLuint ibo;
	glGenBuffers(1, &ibo);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ibo);
	glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

	GLuint vao;
	glGenVertexArrays(1, &vao);
	glBindVertexArray( vao );
	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	glEnableVertexAttribArray(vertexAttribPosition);
	glVertexAttribPointer(vertexAttribPosition, 4, GL_FLOAT, GL_FALSE, sizeof(float)*9, 0);
	glEnableVertexAttribArray(vertexAttribNormal);
	glVertexAttribPointer(vertexAttribNormal, 3, GL_FLOAT, GL_FALSE, sizeof(float)*9, HGL_BUFFER_OFFSET(sizeof(float)*4));
	glEnableVertexAttribArray(vertexAttribTexCoord0);
	glVertexAttribPointer(vertexAttribTexCoord0, 2, GL_FLOAT, GL_FALSE, sizeof(float)*9, HGL_BUFFER_OFFSET(sizeof(float)*7));
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ibo);
	return vao;
}

int initShader(const char *fsstr, const char *vsstr){
	GLuint fs = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fs, 1, &fsstr, 0);
	glCompileShader(fs);
	
	int success;
	glGetShaderiv(fs, GL_COMPILE_STATUS, &success);
	if( !success ){
		char logstr[30];
		int loglen =0;
		glGetShaderInfoLog(fs, 30, &loglen, logstr);
		printf("%s\n", logstr);
		return -1;
	}
	
	GLuint vs = glCreateShader(GL_VERTEX_SHADER);
	glShaderSource(vs, 1, &vsstr, 0);
	glCompileShader(vs);
	
	glGetShaderiv(vs, GL_COMPILE_STATUS, &success);
	if( !success ){
		char logstr[30];
		int loglen =0;
		glGetShaderInfoLog(vs, 30, &loglen, logstr);
		printf("%s\n", logstr);
		return -1;
	}
	
	GLuint program = glCreateProgram();
	glAttachShader(program, vs);
	glAttachShader(program, fs);
	glLinkProgram(program);
	/*
	if (!glGetProgramParameter(program, GL_LINK_STATUS)) {
		printf("Could not initialise shaders\n");
		return 1;
	}
	*/
	glUseProgram(program);
	
	glBindAttribLocation(program, 1, "aVertexPosition");
	
	GLuint pMatrixUniform = glGetUniformLocation(program, "uPMatrix");
	GLuint mvMatrixUniform = glGetUniformLocation(program, "uMVMatrix");
	
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
	mat4_t mat = mat4_create(0);
	mat4_identity(mat);
	char buf[200];
	mat4_str(mat, buf);
	printf("%s\n", buf);
	free(mat);
	
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