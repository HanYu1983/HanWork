//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//
#include "stdlib.h"
#include "stdio.h"
#import "com.gameworks.opengl.h"
#define HGL_BUFFER_OFFSET(i) ((char *)NULL + (i))

namespace com {
    namespace gameworks{
        namespace opengl{
            
            GLuint createShader( int type, GLchar *shaderStr, int logSize, char * log )
            {
                GLuint shader = glCreateShader( type );
                const char *pstr = shaderStr;
                glShaderSource(shader, 1, &pstr, NULL);
                glCompileShader(shader);
                int success;
                glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
                if( !success )
                {
                    GLsizei logLen;
                    glGetShaderInfoLog(shader, logSize, &logLen, log);
                    return -1;
                }
                return shader;
            }

            GLuint createVAO( int vertexAttribPosition, int vertexAttribNormal, int vertexAttribTexCoord0 )
            {
                float data[] = {
                    0.0f, 0.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  0.0f,0.0f ,
                    0.0f, 1.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  0.0f,1.0f ,
                    1.0f, 0.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  1.0f,0.0f ,
                    1.0f, 1.0f, 0.0f, 1.0f,  0.0f, 0.0f, 1.0f,  1.0f,1.0f 
                };    
                GLushort indices[] = { 0, 1, 2, 3 };
                
                GLuint vbo;
                glGenBuffers(1, &vbo);
                glBindBuffer(GL_ARRAY_BUFFER, vbo);
                glBufferData(GL_ARRAY_BUFFER, sizeof(float)*36, data, GL_STATIC_DRAW);
                
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
            
            void getRGBAData( unsigned char *data, int width, int height, unsigned int *rgbdata )
            {
                for( int y=0; y<height; ++y )
                {
                    for( int x=0; x<width; ++x )
                    {
                        int idx = (y* width + x )* 4;
                        unsigned char 
                        r = data[idx],
                        g = data[idx+1],
                        b = data[idx+2],
                        a = data[idx+3];
                        unsigned int rgba = (a<<24)|(r<<16)|(g<<8)|b;
                        rgbdata[y* width+ x] = rgba;
                    }
                }
            }
            
            void bindTexture2D( GLuint tex, int channel, GLuint uniPosition )
            {
                glActiveTexture( GL_TEXTURE0 + channel );
                glBindTexture( GL_TEXTURE_2D, tex );
                glUniform1f( uniPosition, channel );
            }
            
            void createShader( GLchar *vsstr, GLchar *fsstr, GLuint *vs, GLuint *fs)
            {
                char log[1024];
                *vs = createShader(GL_VERTEX_SHADER, vsstr, 1024, log);
                if( *vs == -1 )
                    printf("%s\n", log);
                *fs = createShader(GL_FRAGMENT_SHADER, fsstr, 1024, log);
                if( *fs == -1 )
                    printf("%s\n", log);
            }
        }
    }
}