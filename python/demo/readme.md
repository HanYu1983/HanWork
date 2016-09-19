# Python Demo

本篇Demo都是使用PyQt4  

## 套件管理
[使用pip,easy_install/yolk](http://www.openfoundry.org/tw/tech-column/8536-introduction-of-python-extension-management-tools)

## 使用方式

2011年以前的code，當時用的是Python2.x/PyQt4，暫時我無法讓它run起來  
僅將Source Code給大家參考  
很遺憾，當時沒有寫註解的習慣

## RPG

使用了Design Pattern中的Interpreter Pattern來解譯腳本：[script2.py](hanlib/script2.py)  

使用Factory來橋接遊戲專用腳本指令  

    class DefaultMappingCommandFactory(ICommandFactory):
        def createUserCommand(self,cmdstr):
            if cmdstr in globals():
                return globals()[cmdstr]()
            
            if cmdstr.find('msg')>=0:
                attr=cmdstr.split('@')
                #print attr[1].decode('utf8')
                return msg(attr[1])
            
            if cmdstr.find('pos')>=0:
                attr=cmdstr.split('@')
                return pos(int(attr[1]),int(attr[2]))
            
            if cmdstr.find('delay')>=0:
                attr=cmdstr.split('@')
                return delay(int(attr[1]))
        
            if cmdstr.find('option')>=0:
                attr=cmdstr.split('@')
                attr.remove(attr[0])
            
                return option(attr)
            return 0

所執行的腳本[stage_region_1.scpt](rpgdemo/stage_region_1.scpt), [stage_region_2.scpt](rpgdemo/stage_region_2.scpt), [stage_region_3.scpt](rpgdemo/stage_region_3.scpt)  

執行腳本：  

    cmdfacty=DefaultMappingCommandFactory()
    
    ctx=Context('stage.scpt',cmdfacty)
    scpt=Program()
    scpt.parse(ctx)
    ctx.close()

[Source Code](rpgdemo/)


## RTS

沒有什麼技術在裡面，只是當時做個簡易的即時遊戲環境來練習而已  
[Source Code](rtsdemo/)

## SLG

也沒什麼技術在裡面，不過是示範了怎麼寫回合制遊戲
[Source Code](slgdemo/)

## A*最短路徑演算法

hanlib中剛好還留有當時的A*實做，有興趣的人可以參考[astar.py](hanlib/astar.py)