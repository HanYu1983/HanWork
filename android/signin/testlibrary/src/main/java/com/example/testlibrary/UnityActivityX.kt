package com.example.testlibrary

import android.content.Intent
import android.os.Bundle
import android.view.ViewGroup
import android.widget.Button
import com.unity3d.player.UnityPlayerNativeActivity

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