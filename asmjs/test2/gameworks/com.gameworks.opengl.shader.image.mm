//
//  aaa.m
//  testEmpty4
//
//  Created by Rachel on 12/2/9.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "com.gameworks.opengl.shader.image.h"
#import "com.gameworks.opengl.h"
#include "../gl-matrix.c-master/gl-matrix.h"

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
                        while( true )
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
                            
                            float translation[] = {x-numW*(len-i), y-numH, 0};
                            mat4_identity(sp.transform);
                            mat4_translate(sp.transform, translation, sp.transform);

                            sp.bind();
                            sp.draw();
                        }
                    }
                    
                    void ShaderProgram::init(){
                        char vs[] = "attribute vec4 a_position;attribute vec2 a_texCoord;uniform vec2 u_centerPosition;uniform mat4 u_transform;uniform mat3 u_texTransform;uniform vec2 u_imageSize;uniform vec2 u_canvasSize;varying vec2 v_texCoord;void main(){vec4 pos = a_position * vec4( u_imageSize.xy, 1, 1 );pos -= vec4( u_centerPosition.xy, 0, 0 );pos = u_transform * pos;pos = pos * vec4( 2.0/u_canvasSize.x, -2.0/u_canvasSize.y, 1, 1 ) + vec4( -1, 1, 0, 0 );gl_Position = pos;v_texCoord = (u_texTransform * vec3( a_texCoord.st, 1 )).xy;}";
                        char fs[] = "#ifdef GL_ES\nprecision highp float;#endif\nuniform sampler2D u_tex;uniform vec4 u_color;varying vec2 v_texCoord;void main(){vec4 color = texture2D( u_tex, v_texCoord );gl_FragColor = color + u_color;}";
                        GLuint vsh, fsh;
                        createShader(vs, fs, &vsh, &fsh);
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
                        mat4_identity(transform);
                        mat3_identity(texTransform);
                        canvasSize[0] = 320;
                        canvasSize[1] = 460;
                        imageSize[0] = imageSize[1] = 100;
                        color[0] = 1;
                        color[1] = 0;
                        color[2] = 0;
                        color[3] = 1;
                        memset(centerPosition, 0, sizeof(double)*2);
                    }
                    
                    void ShaderProgram::bind()
                    {
                        glBindVertexArray(vao);
                        glUseProgram(program);
                        bindTexture2D(tex, 0, texLocation);
                        glUniformMatrix4fv(transformLocation, 1, 0, transform);
                        glUniformMatrix3fv(texTransformLocation, 1, 0, texTransform);
                        glUniform4fv(colorLocation, 1, color );
                        glUniform2fv(canvasSizeLocation, 1, canvasSize );
                        glUniform2fv(imageSizeLocation, 1, imageSize );
                        glUniform2fv(centerPositionLocation, 1, centerPosition );
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
                            
                            float temp[16];
                            mat4_identity(temp);
                            float scale[] = {scalex, scaley, 1};
                            mat4_scale(temp, scale, temp);
                            mat4_toMat3(temp, texTransform);
                            // texTransform = GLKMatrix3SetColumn(texTransform, 2, GLKVector3Make(sx/ sw, sy/ sw, 0));
                        }
                        else
                        {
                            float scalex = anim.sw/ (float)anim.w;
                            float scaley = anim.sh/ (float)anim.h;
                            float sx = (anim.sx + anim.sw* ( frame % anim.cc ))/ (float)anim.w;
                            float sy = (anim.sy + anim.sh* ( frame / anim.cc ))/ (float)anim.h;
                            
                            float temp[16];
                            mat4_identity(temp);
                            float scale[] = {scalex, scaley, 1};
                            mat4_scale(temp, scale, temp);
                            mat4_toMat3(temp, texTransform);
                            
                            // texTransform = GLKMatrix3SetColumn(texTransform, 2, GLKVector3Make(sx, sy, 0));
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
                        memcpy(centerPosition, role.center, sizeof(float)*2);
                        IPActionAnimation act = role.actions[action];
                        set(act, time);
                    }
                    
                    

                }
            }
        }
    }
}