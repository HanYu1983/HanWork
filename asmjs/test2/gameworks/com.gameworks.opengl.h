//
//  aaa.h
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//


#include <GLES3/gl32.h>
#include <GLES3/gl2ext.h>

namespace com {
    namespace gameworks{
        namespace opengl{
            GLuint createShader( int type, GLchar *shaderStr, int logSize, char * log );
            void createShader( GLchar *vsstr, GLchar *fsstr, GLuint *vs, GLuint *fs);
            GLuint createVAO( int vertexAttribPosition, int vertexAttribNormal, int vertexAttribTexCoord0 );
            void getRGBAData( unsigned char *data, int width, int height, unsigned int *rgbdata );
            void bindTexture2D( GLuint tex, int channel, GLuint uniPosition );
        }
    }
}