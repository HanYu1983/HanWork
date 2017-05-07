//
//  aaa.h
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#include <GLES3/gl32.h>
#include <GLES3/gl2ext.h>
#import <map>

namespace com {
    namespace gameworks{
        namespace opengl{
            namespace shader{
                namespace image{
                    
                    using namespace std;
                    
                    typedef struct _IPImageClip{
                        int x, y, w, h;
                    } IPImageClip;
                    
                    typedef struct _IPAnimation{
                        GLuint *tex;
                        int w, h, sx, sy, sw, sh, cc, count;
                        IPImageClip *clips;
                    } IPAnimation;
                    
                    typedef struct _IPActionAnimationFrame{
                        IPAnimation *anim;
                        int frame;
                        float duration;
                    } IPActionAnimationFrame;
                    
                    typedef struct _IPActionAnimation{
                        IPActionAnimationFrame *frames;
                        int framecount;
                        float duration;
                        bool loop, backward;
                    } IPActionAnimation;
                    
                    int IPComputFrame( IPActionAnimation action, float time );
                    
                    typedef struct _IPRoleSkin{
                        IPActionAnimation *actions;
                        float center[2];
                    } IPRoleSkin;
                    
                    
                    
                    class ShaderProgram{
                    public:
                        GLuint program;
                        GLuint vao;
                        // uniform //
                        float canvasSize[2];
                        float imageSize[2];
                        float centerPosition[2];
                        GLuint tex;
                        float transform[16];
                        float texTransform[9];
                        float color[4];
                        // uniform location //
                        GLuint canvasSizeLocation;
                        GLuint imageSizeLocation;
                        GLuint texLocation;
                        GLuint transformLocation;
                        GLuint texTransformLocation;
                        GLuint colorLocation;
                        GLuint centerPositionLocation;
                    public:
                        // 初使化方法。必須在com::gameworks::opengl::createGLK()之後呼叫 // 
                        void init();
                        void bind();
                        void draw();
                        void reset();
                        void set( IPAnimation anim, int frame );
                        void set( IPActionAnimation action, float time );
                        void set( IPRoleSkin role, float time, int action );
                    };
                    
                    void drawImageNumber( ShaderProgram &sp, const char *str, IPAnimation anim, int numW, int numH, int x, int y, map<char,int> map );
                }
            }
        }
    }
}