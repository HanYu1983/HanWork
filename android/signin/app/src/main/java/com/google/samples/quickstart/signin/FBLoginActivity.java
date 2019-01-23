package com.google.samples.quickstart.signin;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class FBLoginActivity extends AppCompatActivity implements View.OnClickListener {
    CallbackManager callbackManager;
    LoginButton loginButton;
    LoginButton hideButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fblogin);





        callbackManager = CallbackManager.Factory.create();
        LoginManager.getInstance().registerCallback(callbackManager,
                new FacebookCallback<LoginResult>() {
                    @Override
                    public void onSuccess(LoginResult loginResult) {
                        Log.e("FBLoginActivity","CallbackManageronSuccess:"+loginResult.getAccessToken().getUserId());
                        Log.e("FBLoginActivity","CallbackManageronSuccess:"+loginResult.getAccessToken().getToken());
                    }

                    @Override
                    public void onCancel() {
                        Log.e("FBLoginActivity","CallbackManageronCancel");
                    }

                    @Override
                    public void onError(FacebookException exception) {
                        Log.e("FBLoginActivity","CallbackManageronError:"+exception.getLocalizedMessage());
                    }
                });

        loginButton = (LoginButton) findViewById(R.id.login_button);
        loginButton.setReadPermissions("email");
        // Callback registration
        loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                Log.e("FBLoginActivity","onSuccess:"+loginResult.getAccessToken().getUserId());
                Log.e("FBLoginActivity","onSuccess:"+loginResult.getAccessToken().getToken());
            }

            @Override
            public void onCancel() {
                Log.e("FBLoginActivity","onCancel");
            }

            @Override
            public void onError(FacebookException exception) {
                Log.e("FBLoginActivity","onError:"+exception.getLocalizedMessage());
            }
        });

        hideButton = new LoginButton(this);
        hideButton.setReadPermissions("email");
        // Callback registration
        hideButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                Log.e("FBLoginActivity","onSuccess:"+loginResult.getAccessToken().getUserId());
                Log.e("FBLoginActivity","onSuccess:"+loginResult.getAccessToken().getToken());
            }

            @Override
            public void onCancel() {
                Log.e("FBLoginActivity","onCancel");
            }

            @Override
            public void onError(FacebookException exception) {
                Log.e("FBLoginActivity","onError:"+exception.getLocalizedMessage());
            }
        });

        Button loginBtn = (Button)findViewById(R.id.btn_fblogin_login);
        loginBtn.setOnClickListener(this);

        AccessToken accessToken = AccessToken.getCurrentAccessToken();
        boolean isLoggedIn = accessToken != null && !accessToken.isExpired();
        loginBtn.setText(isLoggedIn ? "Logout" : "login");

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        callbackManager.onActivityResult(requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btn_fblogin_login:
                hideButton.callOnClick();
                break;
        }
    }
}
