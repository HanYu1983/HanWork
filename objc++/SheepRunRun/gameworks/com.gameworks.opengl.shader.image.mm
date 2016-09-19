//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.opengl.shader.image.h"
#import "com.gameworks.opengl.h"

namespace com {
    namespace gameworks{
        namespace opengl{
            namespace shader{
                namespace image{
                    
                    
                    int IPComputFrame( IPActionAnimation action, float time ){
                        if( !action.frames )
                            return 0;
                        if( time > action.duration )
                        {
                            if( action.loop )
                                while( time > action.duration )
                                    time -= action.duration;
                            else
                                time = action.duration;
                        }
                        if( action.backward )
                            time = action.duration - time;
                        int frame = 0;
                        float curr = 0;
                        while( YES )
                        {
                            curr += action.frames[frame].duration;
                            if( curr >= time )
                                break;
                            ++frame;
                            if( frame >= action.framecount )
                            {
                                --frame; break;
                            }
                        }
                        return frame;
                    }
                    
                    void drawImageNumber( ShaderProgram &sp, const char *str, IPAnimation anim, int numW, int numH, int x, int y, map<char,int> map ){
                        size_t len = strlen(str);
                        for( int i=len-1; i>=0; --i )
                        {
                            char c = str[i];
                            int idx = map[c];
                            sp.set(anim, idx);
                            sp.transform = GLKMatrix4MakeTranslation(x-numW*(len-i), y-numH, 0);
                            sp.bind();
                            sp.draw();
                        }
                    }
                    
                    void ShaderProgram::init(){
                        GLuint vsh, fsh;
                        createShader(@"ImageShaderVS", @"ImageShaderFS", @"txt", &vsh, &fsh);
                        program = glCreateProgram();
                        glAttachShader(program, vsh);
                        glAttachShader(program, fsh);
                        glBindAttribLocation(program, 1, "a_position");
                        glBindAttribLocation(program, 3, "a_texCoord");
                        glLinkProgram(program);
                        texLocation = glGetUniformLocation(program, "u_tex");
                        transformLocation = glGetUniformLocation(program, "u_transform");
                        texTransformLocation = glGetUniformLocation(program, "u_texTransform");
                        colorLocation = glGetUniformLocation(program, "u_color");
                        canvasSizeLocation = glGetUniformLocation(program, "u_canvasSize");
                        imageSizeLocation = glGetUniformLocation(program, "u_imageSize");
                        centerPositionLocation = glGetUniformLocation(program, "u_centerPosition");
                        vao = createVAO(1, 2, 3);
                        reset();
                    }
                    
                    void ShaderProgram::reset()
                    {
                        transform = GLKMatrix4Identity;
                        texTransform = GLKMatrix3Identity;
                        canvasSize = GLKVector2Make(320, 460);
                        imageSize = GLKVector2Make(100, 100);
                        color = GLKVector4Make(1, 0, 0, 1);
                        centerPosition = GLKVector2Make(0, 0);
                    }
                    
                    void ShaderProgram::bind()
                    {
                        glBindVertexArrayOES(vao);
                        glUseProgram(program);
                        bindTexture2D(tex, 0, texLocation);
                        glUniformMatrix4fv(transformLocation, 1, 0, transform.m);
                        glUniformMatrix3fv(texTransformLocation, 1, 0, texTransform.m);
                        glUniform4fv(colorLocation, 1, color.v );
                        glUniform2fv(canvasSizeLocation, 1, canvasSize.v );
                        glUniform2fv(imageSizeLocation, 1, imageSize.v );
                        glUniform2fv(centerPositionLocation, 1, centerPosition.v );
                    }
                    
                    void ShaderProgram::draw(){
                        glDrawElements(GL_TRIANGLE_STRIP, 4, GL_UNSIGNED_SHORT, 0);
                    }
                    
                    void ShaderProgram::set(IPAnimation anim, int frame)
                    {
                        tex = *anim.tex;
                        frame %= anim.count;
                        
                        /*
                        float scalex = anim.sw/ (float)anim.w;
                        float scaley = anim.sh/ (float)anim.h;
                        float sx = (anim.sx + anim.sw* ( frame % anim.cc ))/ (float)anim.w;
                        float sy = (anim.sy + anim.sh* ( frame / anim.cc ))/ (float)anim.h;
                        texTransform = GLKMatrix3MakeScale(scalex, scaley, 1);
                        texTransform = GLKMatrix3SetColumn(texTransform, 2, GLKVector3Make(sx, sy, 0));
                        */
                        if( anim.clips )
                        {
                            float
                                sx = anim.clips[frame].x,
                                sy = anim.clips[frame].y,
                                sw = anim.clips[frame].w,
                                sh = anim.clips[frame].h,
                                scalex = sw/ anim.w,
                                scaley = sh/ anim.h;
                            texTransform = GLKMatrix3MakeScale(scalex, scaley, 1);
                            texTransform = GLKMatrix3SetColumn(texTransform, 2, GLKVector3Make(sx/ sw, sy/ sw, 0));
                        }
                        else
                        {
                            float scalex = anim.sw/ (float)anim.w;
                            float scaley = anim.sh/ (float)anim.h;
                            float sx = (anim.sx + anim.sw* ( frame % anim.cc ))/ (float)anim.w;
                            float sy = (anim.sy + anim.sh* ( frame / anim.cc ))/ (float)anim.h;
                            texTransform = GLKMatrix3MakeScale(scalex, scaley, 1);
                            texTransform = GLKMatrix3SetColumn(texTransform, 2, GLKVector3Make(sx, sy, 0));
                        }
                    }
                    
                    void ShaderProgram::set(IPActionAnimation action, float time)
                    {
                        int frame = IPComputFrame(action, time);
                        IPActionAnimationFrame af = action.frames[frame];
                        set( *af.anim, af.frame );
                    }
                    
                    void ShaderProgram::set(IPRoleSkin role, float time, int action)
                    {
                        centerPosition = role.center;
                        IPActionAnimation act = role.actions[action];
                        set(act, time);
                    }
                    
                    

                }
            }
        }
    }
}