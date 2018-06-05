package org.hanvic.testdemo

import android.os.Bundle
import android.view.View
import android.widget.TextView
import com.example.testlibrary.GoogleLogin
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.samples.quickstart.signin.R

class GoogleLoginActivity : FakeActivityX(), View.OnClickListener{
    private var googleSign : GoogleLogin? = null

    override fun onCreate(savedInstanceState : Bundle?)
    {
        super.onCreate(savedInstanceState)
        googleSign = GoogleLogin(this)
        googleSign?.callback = {
            updateUI(googleSign?.account)
        }
        initUI()
    }

    override fun onClick(v: View) {
        when (v.id) {
            R.id.sign_in_button -> googleSign?.signIn()
            R.id.sign_out_button -> googleSign?.signOut()
            R.id.disconnect_button -> googleSign?.revokeAccess()
        }
    }

    private var mStatusTextView: TextView? = null

    private fun initUI(){
        setContentView(R.layout.activity_main)
        // Views
        mStatusTextView = findViewById<TextView>(R.id.status)

        // Button listeners
        findViewById<View>(R.id.sign_in_button).setOnClickListener(this)
        findViewById<View>(R.id.sign_out_button).setOnClickListener(this)
        findViewById<View>(R.id.disconnect_button).setOnClickListener(this)
    }

    private fun updateUI(account: GoogleSignInAccount?) {
        if (account != null) {
            mStatusTextView?.setText(getString(R.string.signed_in_fmt, account.displayName))

            findViewById<View>(R.id.sign_in_button).visibility = View.GONE
            findViewById<View>(R.id.sign_out_and_disconnect).visibility = View.VISIBLE
        } else {
            mStatusTextView?.setText(R.string.signed_out)

            findViewById<View>(R.id.sign_in_button).visibility = View.VISIBLE
            findViewById<View>(R.id.sign_out_and_disconnect).visibility = View.GONE
        }
    }
}