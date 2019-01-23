package com.example.testlibrary

import android.content.Context
import android.content.Intent
import com.facebook.AccessToken
import com.facebook.CallbackManager
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import com.facebook.login.widget.LoginButton
import com.unity3d.player.UnityPlayer

interface FBLoginListener : FacebookCallback<LoginResult>{

}

class FBLogin(ctx : Context) : IUnityActivityXListener, FacebookCallback<LoginResult>{
    private val hideButton: LoginButton
    private val callbackManager: CallbackManager
    var callback : FBLoginListener? = null

    init {
        callbackManager = CallbackManager.Factory.create()
        LoginManager.getInstance().registerCallback(callbackManager, this)

        hideButton = LoginButton(ctx)
        hideButton.setReadPermissions("email")
        hideButton.registerCallback(callbackManager, this)

        if(ctx is IUnityActivityX){
            ctx.addListener(this)
        }
    }

    fun login(){
        hideButton.callOnClick()
    }

    fun accessToken() = AccessToken.getCurrentAccessToken()

    override fun onSuccess(result: LoginResult) {
        val token = result.getAccessToken()
        callback?.onSuccess(result)
        UnityPlayer.UnitySendMessage("AndroidFBLogin", "onSuccess", "")
    }

    override fun onCancel() {
        callback?.onCancel()
        UnityPlayer.UnitySendMessage("AndroidFBLogin", "onCancel", "")
    }

    override fun onError(error: FacebookException) {
        callback?.onError(error)
        UnityPlayer.UnitySendMessage("AndroidFBLogin", "onError", error.localizedMessage)
    }

    override fun onStart() {

    }

    override fun onResume() {

    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        callbackManager.onActivityResult(requestCode, resultCode, data)
    }
}