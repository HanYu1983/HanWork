package org.hanvic.testdemo

import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import android.view.ViewGroup
import android.widget.Button
import com.example.testlibrary.FBLogin
import com.example.testlibrary.FBLoginListener
import com.facebook.FacebookException
import com.facebook.login.LoginResult

class FBLoginActivity : FakeActivityX(), FBLoginListener {
    private var fb : FBLogin? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        fb = FBLogin(this)

        val btn = Button(this)
        btn.setText("FB Login")
        btn.setOnClickListener {
            fb?.login()
        }
        addContentView(btn, ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT))
    }

    override fun onSuccess(result: LoginResult?) {
        Log.e("FBLoginActivity", "onSuccess")
    }

    override fun onCancel() {
        Log.e("FBLoginActivity", "onCancel")
    }

    override fun onError(error: FacebookException) {
        Log.e("FBLoginActivity", "onError:${error.localizedMessage}")
    }
}