package com.example.testlibrary
import android.content.Intent

interface IUnityActivityXListener {
    fun onStart()
    fun onResume()
    fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?)
}