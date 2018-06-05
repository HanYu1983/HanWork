package com.example.testlibrary

import android.app.Activity
import android.content.Intent
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.unity3d.player.UnityPlayer
import kotlin.coroutines.experimental.suspendCoroutine

class GoogleLogin(val ctx : Activity) : IUnityActivityXListener{
    var account : GoogleSignInAccount? = null
        private set
    var statusCode : Int? = null
        private set
    var responseMethod : String? = null
    var callback : (()->Unit)? = null

    private val signIn = 9001
    private val client : GoogleSignInClient

    init{
        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .build()
        client = GoogleSignIn.getClient(ctx, gso)
        if(ctx is IUnityActivityX){
            ctx.addListener(this)
        }
    }

    override fun onStart() {
        val account = GoogleSignIn.getLastSignedInAccount(ctx)
        updateUI(account)
    }

    override fun onResume() {
        signInSilently()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?){
        if (requestCode == signIn) {
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)
            try {
                val account = task.getResult(ApiException::class.java)
                updateUI(account)
            } catch (e: ApiException) {
                statusCode = e.statusCode
                updateUI(null)
            }
        }
    }

    private fun updateUI(account: GoogleSignInAccount?) {
        this.account = account;
        if(responseMethod != null) {
            UnityPlayer.UnitySendMessage("GoogleSignIn", responseMethod, "")
        }
        callback?.invoke()
    }

    fun signIn() {
        ctx.startActivityForResult(client.signInIntent, signIn)
    }

    fun signInSilently() {
        client.silentSignIn().addOnCompleteListener {
            if (it.isSuccessful) {
                val signedInAccount = it.getResult()
                updateUI(signedInAccount)
            } else {
                // Player will need to sign-in explicitly using via UI
            }
        }
    }

    fun signOut() {
        client.signOut().addOnCompleteListener {
            updateUI(null)
        }
    }

    fun revokeAccess() {
        client.revokeAccess().addOnCompleteListener {
            updateUI(null)
        }
    }
}