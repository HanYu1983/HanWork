//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.opengl.h"
#define HGL_BUFFER_OFFSET(i) ((char *)NULL + (i))

namespace com {
    namespace gameworks{
        namespace opengl{
            
            GLKViewController *createGLK( id<GLKViewDelegate, GLKViewControllerDelegate> delegate ){                    
                EAGLContext *context = [[EAGLContext alloc] initWithAPI:kEAGLRenderingAPIOpenGLES2];
                [EAGLContext setCurrentContext:context];
                [context release];
                GLKView *glview = [[GLKView alloc] initWithFrame:[[UIScreen mainScreen] bounds] context:context];
                glview.delegate = delegate;
                GLKViewController *controller = [[GLKViewController alloc] init];
                controller.delegate = delegate;
                controller.view = glview;
                [glview release];
                return [controller autorelease];
            }
            
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
                glGenVertexArraysOES(1, &vao);
                glBindVertexArrayOES( vao );
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
            
            
            
            GLuint createTexture( CGImageRef image )
            {
                size_t width = CGImageGetWidth( image );
                size_t height = CGImageGetHeight( image );
                GLubyte *data = (GLubyte*)calloc(width* height* 4, sizeof(GLubyte));
                CGContextRef ctx = CGBitmapContextCreate(data, width, height, 8, width*4, CGImageGetColorSpace(image), kCGImageAlphaPremultipliedLast);
                CGContextDrawImage(ctx, CGRectMake(0, 0, width, height), image);
                CGContextRelease(ctx);
                
                GLuint tex;
                glGenTextures(1, &tex);
                glBindTexture(GL_TEXTURE_2D, tex);
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
                glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, data);
                free( data );
                return tex;
            }
            
            GLuint createTexture( NSString *filename, NSString *ext )
            {
                NSString *path = [[NSBundle mainBundle] pathForResource:filename ofType:ext];
                UIImage *img = [[UIImage alloc] initWithContentsOfFile:path];
                GLuint ret = createTexture(img.CGImage);
                [img release];
                return ret;
            }
            
            void getImageData( CGImageRef image, int width, int height, unsigned char *data )
            {
                CGContextRef ctx = CGBitmapContextCreate(data, width, height, 8, width*4, CGImageGetColorSpace(image), kCGImageAlphaPremultipliedLast);
                CGContextDrawImage(ctx, CGRectMake(0, 0, width, height), image);
                CGContextRelease(ctx);
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
            
            void createShader( NSString *vshpath, NSString *fshpath, NSString *ext, GLuint *vs, GLuint *fs)
            {
                NSString *path = [[NSBundle mainBundle] pathForResource:vshpath ofType:ext];
                GLchar *str = (GLchar*)[[NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil] UTF8String];
                char log[1024];
                *vs = createShader(GL_VERTEX_SHADER, str, 1024, log);
                if( *vs == -1 )
                    NSLog(@"%s", log);
                path = [[NSBundle mainBundle] pathForResource:fshpath ofType:ext];
                str = (GLchar*)[[NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil] UTF8String];
                *fs = createShader(GL_FRAGMENT_SHADER, str, 1024, log);
                if( *fs == -1 )
                    NSLog(@"%s", log);
            }
        }
    }
}