package org.hanvic.testdemo

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.TextView
import com.android.billingclient.api.BillingClient
import com.android.billingclient.api.Purchase
import com.android.billingclient.api.SkuDetails
import com.example.testlibrary.GoogleLogin
import com.example.testlibrary.GooglePlayBilling
import com.example.testlibrary.GooglePlayBillingListener
import com.google.samples.quickstart.signin.ChooserActivity
import com.google.samples.quickstart.signin.R

class GooglePlayBillingActivity : FakeActivityX(), AdapterView.OnItemClickListener, GooglePlayBillingListener {
    private var billing : GooglePlayBilling? = null
    private val items : List<String> = arrayListOf("org.hanvic.testdemo.iap01","org.hanvic.testdemo.iap02")

    override fun onItemClick(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
        var item = items.get(position)
        billing?.buy(item)
    }

    override fun onBillingServiceDisconnected() {
        Log.e("GooglePlayBilling","onBillingServiceDisconnected")
    }

    override fun onBillingSetupFinished(responseCode: Int) {
        Log.e("GooglePlayBilling","onBillingSetupFinished:${responseCode}")
        billing?.querySkus(items)
    }

    override fun onPurchasesUpdated(responseCode: Int, purchases: MutableList<Purchase>?) {
        Log.e("GooglePlayBilling","onPurchasesUpdated:${responseCode}")
    }

    override fun onConsumeResponse(responseCode: Int, purchaseToken: String?) {
        Log.e("GooglePlayBilling","onConsumeResponse:${responseCode}")
    }

    override fun onSkuDetailsResponse(responseCode: Int, skuDetailsList: MutableList<SkuDetails>?) {
        Log.e("GooglePlayBilling","onSkuDetailsResponse:${responseCode}")
        if(responseCode == BillingClient.BillingResponse.OK && skuDetailsList != null){
            setListItem(skuDetailsList)
        }
    }

    override fun onCreate(savedInstanceState : Bundle?)
    {
        super.onCreate(savedInstanceState)
        billing = GooglePlayBilling(this)
        billing?.callback = this
        initView()
    }

    fun initView(){
        setContentView(R.layout.activity_chooser)
    }

    fun setListItem(lists:List<SkuDetails>){
        val listView = findViewById<ListView>(R.id.list_view)
        listView.setOnItemClickListener(this)
        listView.adapter = Adapter(lists.toTypedArray())
        listView.invalidate()
    }

    inner class Adapter : ArrayAdapter<SkuDetails> {
        constructor(details:Array<SkuDetails>) : super(this@GooglePlayBillingActivity, android.R.layout.simple_list_item_2, details){}
        override fun getView(position: Int, convertView: View?, parent: ViewGroup): View? {
            var view = convertView
            if (convertView == null) {
                val inflater = this@GooglePlayBillingActivity.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
                view = inflater.inflate(android.R.layout.simple_list_item_2, null)
            }
            val detail = this.getItem(position)
            var name = detail.description
            var price = detail.price
            (view?.findViewById<View>(android.R.id.text1) as TextView).setText(name)
            (view?.findViewById<View>(android.R.id.text2) as TextView).setText(price)
            return view
        }
    }
}