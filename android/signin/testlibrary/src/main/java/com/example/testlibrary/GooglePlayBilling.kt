package com.example.testlibrary

import android.app.Activity
import android.content.Intent
import android.util.Log
import com.android.billingclient.api.*
import com.android.billingclient.api.BillingClient.*
import com.unity3d.player.UnityPlayer

interface GooglePlayBillingListener : BillingClientStateListener, PurchasesUpdatedListener, ConsumeResponseListener, SkuDetailsResponseListener{

}

class GooglePlayBilling(val ctx:Activity) : IUnityActivityXListener, BillingClientStateListener, PurchasesUpdatedListener, ConsumeResponseListener, SkuDetailsResponseListener {
    private val mBillingClient: BillingClient

    private var skuDetails : List<SkuDetails>? = null
    fun skuCount() = skuDetails?.count()
    fun skuDetail(idx:Int) = skuDetails?.get(idx)

    private var purchases : List<Purchase>? = null
    fun purchasesCount() = purchases?.count()
    fun purchasesDetail(idx:Int) = purchases?.get(idx)

    var callback : GooglePlayBillingListener? = null

    init {
        mBillingClient = newBuilder(ctx).setListener(this).build()
        mBillingClient.startConnection(this)
        if(ctx is IUnityActivityX){
            ctx.addListener(this)
        }
    }

    override fun onStart() {

    }

    override fun onResume() {

    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {

    }

    override fun onBillingServiceDisconnected() {
        Log.e("TestBilling", "onBillingServiceDisconnected")
    }

    override fun onBillingSetupFinished(responseCode: Int) {
        callback?.onBillingSetupFinished(responseCode)
        UnityPlayer.UnitySendMessage("GooglePlayBilling", "onBillingSetupFinished", "${responseCode}")
    }

    override fun onPurchasesUpdated(responseCode: Int, purchases: List<Purchase>?) {
        this.purchases = purchases
        callback?.onPurchasesUpdated(responseCode, purchases)
        UnityPlayer.UnitySendMessage("GooglePlayBilling", "onPurchasesUpdated", "${responseCode}")
    }

    fun querySkus(skuList : List<String>){
        val paramsBuilder = SkuDetailsParams.newBuilder()
        val params = paramsBuilder.setSkusList(skuList).setType(SkuType.INAPP).build()
        mBillingClient.querySkuDetailsAsync(params, this)
    }

    override fun onSkuDetailsResponse(responseCode: Int, skuDetailsList: MutableList<SkuDetails>?) {
        skuDetails = skuDetailsList
        callback?.onSkuDetailsResponse(responseCode, skuDetailsList)
        UnityPlayer.UnitySendMessage("GooglePlayBilling", "onSkuDetailsResponse", "${responseCode}")
    }

    fun buy(skuId: String):Int{
        val flowParams = BillingFlowParams.newBuilder()
                .setSku(skuId)
                .setType(SkuType.INAPP)
                .build()
        val responseCode = mBillingClient.launchBillingFlow(ctx, flowParams)
        return responseCode
    }

    fun queryAndConsume():Int {
        // Call queryPurchases() every time your app launches so that you can restore any purchases that a user has made since the app last stopped.
        // Call queryPurchases() in your onResume() method since a user can make a purchase when your app is in the background (for example, redeeming a promo code in Play Store app).

        val purchasesResult = mBillingClient.queryPurchases(SkuType.INAPP)
        val responseCode = purchasesResult.responseCode
        Log.e("TestBilling", "Buy:$responseCode")

        for (p in purchasesResult.purchasesList) {
            val purchaseToken = p.purchaseToken
            consume(purchaseToken)
        }

        return responseCode
    }

    fun consume(purchaseToken: String) {
        mBillingClient.consumeAsync(purchaseToken, this)
    }

    override fun onConsumeResponse(responseCode: Int, purchaseToken: String?) {
        callback?.onConsumeResponse(responseCode, purchaseToken)
        UnityPlayer.UnitySendMessage("GooglePlayBilling", "onConsumeResponse", "${responseCode},${purchaseToken}")
    }
}