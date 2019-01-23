package com.google.samples.quickstart.signin;

import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingClient.*;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.ConsumeResponseListener;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.SkuDetails;
import com.android.billingclient.api.SkuDetailsParams;
import com.android.billingclient.api.SkuDetailsResponseListener;

import java.util.ArrayList;
import java.util.List;

public class TestBilling extends AppCompatActivity implements PurchasesUpdatedListener, View.OnClickListener {
    private BillingClient mBillingClient;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test_billing);

        mBillingClient = BillingClient.newBuilder(this).setListener(this).build();
        mBillingClient.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(@BillingResponse int billingResponseCode) {
                Log.e("TestBilling", "onBillingSetupFinished:"+billingResponseCode);
                if (billingResponseCode == BillingResponse.OK) {
                    List skuList = new ArrayList<> ();
                    skuList.add("org.hanvic.testdemo.iap01");
                    skuList.add("org.hanvic.testdemo.iap02");
                    SkuDetailsParams.Builder params = SkuDetailsParams.newBuilder();
                    params.setSkusList(skuList).setType(SkuType.INAPP);

                    mBillingClient.querySkuDetailsAsync(params.build(),
                            new SkuDetailsResponseListener() {
                                @Override
                                public void onSkuDetailsResponse(int responseCode, List<SkuDetails> skuDetailsList) {
                                    Log.e("TestBilling", "onSkuDetailsResponse:"+responseCode);

                                    if (responseCode == BillingResponse.OK
                                            && skuDetailsList != null) {
                                        for (SkuDetails skuDetails : skuDetailsList) {
                                            String sku = skuDetails.getSku();
                                            String price = skuDetails.getPrice();
                                            Log.e("TestBilling", "sku:"+sku);
                                            Log.e("TestBilling", "price:"+price);
                                        }
                                    }
                                }
                            });

                    queryAndConsume();
                }
            }
            @Override
            public void onBillingServiceDisconnected() {
                Log.e("TestBilling", "onBillingServiceDisconnected");
            }
        });

        Button btn_billing = (Button)findViewById(R.id.btn_billing);
        btn_billing.setOnClickListener(this);
    }

    @Override
    public void onPurchasesUpdated(int responseCode, @Nullable List<Purchase> purchases) {
        Log.e("TestBilling", "onPurchasesUpdated:"+responseCode);
        if (responseCode == BillingResponse.OK
                && purchases != null) {
            for (Purchase purchase : purchases) {
                Log.e("TestBilling", "onPurchasesUpdated:"+purchase.getSku());
            }
        } else if (responseCode == BillingResponse.USER_CANCELED) {
            // Handle an error caused by a user cancelling the purchase flow.
        } else {
            // Handle any other error codes.
        }
    }

    public void buy(String skuId){
        BillingFlowParams flowParams = BillingFlowParams.newBuilder()
                .setSku(skuId)
                .setType(SkuType.INAPP)
                .build();
        int responseCode = mBillingClient.launchBillingFlow(this, flowParams);
        Log.e("TestBilling", "Buy:"+responseCode);
    }

    public void queryAndConsume(){
        // Call queryPurchases() every time your app launches so that you can restore any purchases that a user has made since the app last stopped.
        // Call queryPurchases() in your onResume() method since a user can make a purchase when your app is in the background (for example, redeeming a promo code in Play Store app).

        Purchase.PurchasesResult purchasesResult = mBillingClient.queryPurchases(SkuType.INAPP);
        int responseCode = purchasesResult.getResponseCode();
        Log.e("TestBilling", "Buy:"+responseCode);

        for(Purchase p : purchasesResult.getPurchasesList()){
            String purchaseToken = p.getPurchaseToken();
            consume(purchaseToken);
        }
    }

    public void consume(String purchaseToken){
        ConsumeResponseListener listener = new ConsumeResponseListener() {
            @Override
            public void onConsumeResponse(@BillingResponse int responseCode, String outToken) {
                Log.e("TestBilling", "consume:"+responseCode);
                if (responseCode == BillingResponse.OK) {
                    // Handle the success of the consume operation.
                    // For example, increase the number of coins inside the user&#39;s basket.
                }
            };
        };
        mBillingClient.consumeAsync(purchaseToken, listener);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_billing:
            {
                buy("org.hanvic.testdemo.iap01");
            }
            break;
        }
    }
}
