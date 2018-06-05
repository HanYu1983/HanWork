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



interface IUnityActivityXListener {
    fun onStart()
    fun onResume()
    fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?)
}

interface IUnityActivityX{
    fun addListener(lis:IUnityActivityXListener)
}

// 運行UNITY的條件
// 1. 引用UNITY的LIB
// 2. COPY從UNITY輸出的GRADLE專案中的app/src/main/jniLibs和app/src/main/assets兩個資料夾到根專案的同一個地方
class UnityActivityX : UnityPlayerNativeActivity(), IUnityActivityX{
    val listeners = mutableListOf<IUnityActivityXListener>()

    override fun addListener(lis:IUnityActivityXListener){
        listeners.add(lis)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        addDebugButton()
    }

    override fun onStart() {
        super.onStart()
        for(l in listeners){
            l.onStart()
        }
    }

    override fun onResume() {
        super.onResume()
        for(l in listeners){
            l.onResume()
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?){
        super.onActivityResult(requestCode, resultCode, data)
        for(l in listeners){
            l.onActivityResult(requestCode, resultCode, data)
        }
    }

    private fun addDebugButton(){
        val btn = Button(this)
        btn.setText("google login")
        btn.setOnClickListener {
            googleLogin();
        }
        addContentView(btn, ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT))
    }

    private fun googleLogin(){

    }
}

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

    suspend fun signOutAsync() : Unit = suspendCoroutine { cont ->
        client.signOut().addOnCompleteListener {
            cont.resume(Unit)
        }
    }
}