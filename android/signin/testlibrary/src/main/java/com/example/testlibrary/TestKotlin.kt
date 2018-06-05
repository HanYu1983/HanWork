package com.example.testlibrary

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.ViewGroup
import android.widget.Button
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.tasks.OnCompleteListener
import com.google.android.gms.tasks.Task
import com.unity3d.player.UnityPlayer
import com.unity3d.player.UnityPlayerNativeActivity
import kotlin.coroutines.experimental.suspendCoroutine

class TestKtActivity : UnityPlayerNativeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.e("TestKtActivity", "xxxx")
        UnityPlayer.UnitySendMessage("GameObjectName1", "MethodName1", "Message to send")

        var a : Int? = null;
        if(a!=null) {
            var b = a + 20;
        }

        if(savedInstanceState != null) {
            val abc = savedInstanceState.getBoolean("abc");

        }

        val abc = savedInstanceState?.getBoolean("abc")

        savedInstanceState?.let{

        }

        val result = try {
            1
        } catch (e: Throwable) {
            2
        }

        val result2 = if (1 == 1) {
            "one"
        } else if (2 == 2) {
            "two"
        } else {
            "three"
        }

    }
}