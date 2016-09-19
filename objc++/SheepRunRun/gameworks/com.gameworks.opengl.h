//
//  aaa.h
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GLKit/GLKit.h>
#import <OpenGLES/ES2/glext.h>

namespace com {
    namespace gameworks{
        namespace opengl{
            
            GLKViewController *createGLK( id<GLKViewDelegate, GLKViewControllerDelegate> delegate );
            GLuint createShader( int type, GLchar *shaderStr, int logSize, char * log );
            GLuint createVAO( int vertexAttribPosition, int vertexAttribNormal, int vertexAttribTexCoord0 );
            GLuint createTexture( CGImageRef image );
            GLuint createTexture( NSString *filename, NSString *ext );
            void getImageData( CGImageRef image, int width, int height, unsigned char *data );
            void getRGBAData( unsigned char *data, int width, int height, unsigned int *rgbdata );
            void bindTexture2D( GLuint tex, int channel, GLuint uniPosition );
            void createShader( NSString *vshpath, NSString *fshpath, NSString *ext, GLuint *vs, GLuint *fs);
            
        }
    }
}