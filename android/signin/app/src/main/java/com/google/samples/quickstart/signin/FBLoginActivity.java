package com.google.samples.quickstart.signin;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class FBLoginActivity extends AppCompatActivity {
    CallbackManager callbackManager;
    LoginButton loginButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fblogin);


        AccessToken accessToken = AccessToken.getCurrentAccessToken();
        boolean isLoggedIn = accessToken != null && !accessToken.isExpired();


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
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        callbackManager.onActivityResult(requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }
}
