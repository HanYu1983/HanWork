package org.hanvic.testdemo

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import com.example.testlibrary.IUnityActivityX
import com.example.testlibrary.IUnityActivityXListener

open class FakeActivityX : AppCompatActivity(), IUnityActivityX {
    val listeners = mutableListOf<IUnityActivityXListener>()

    override fun addListener(lis: IUnityActivityXListener){
        listeners.add(lis)
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
}