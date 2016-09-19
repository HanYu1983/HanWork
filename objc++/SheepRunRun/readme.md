# 跑跑羊的部分原始碼

這是2012年左右的程式，註解很少  
示範了如何協同使用obj-c和c++\(.mm\)，雖然現在這個技術過時了(?)

## 遊戲影片
1. [影片1](https://www.youtube.com/watch?v=KLzvoD4S6f0&list=FLCh6kSSzrx8JKpmFWtso2tw&index=11)
2. [影片2](https://www.youtube.com/watch?v=HEn1MyIF-o0&list=FLCh6kSSzrx8JKpmFWtso2tw&index=18)

## 程式碼部分

注意，程式中幾乎使用靜態配置，就是說將記憶體配在Stack而不是在Heap，我認為這是寫c++的藝術所在  
沒有gc的c++寫動態配置只是自找麻煩  

遊戲中有使用到反向關節-[演算法在此](gameworks/com.gameworks.seqment.mm)  

當時多此一舉，自己還寫了2D Shader-請參考[image shader](gameworks/com.gameworks.opengl.shader.image.mm), [SheepView.mm](modelview/SheepView.mm)

## 使用像素編輯遊戲場景

Parse在這[GameManager::loadResource](modelview/SheepManager.mm)  
![B05](images/B05.png)
![B05](images/B05.jpg)
![B05](images/C01.png)
![B05](images/C01.jpg)
![B05](images/C12.png)
![B05](images/C12.jpg)  

