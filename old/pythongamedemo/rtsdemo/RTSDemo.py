# -*- coding: utf-8 -*-

import math
from hanlib.game import *

#----------------------fsm--------------------
class State:
	def __init__(self):
		pass
	
	def open(self,fsm,ety):
		pass
	
	def close(self,fsm,ety):
		pass
	
	def exe(self,fsm,ety):
		pass
	
class FSM:
	def __init__(self):
		self.prevS=0
		self.currS=0
		pass
	
	def prev(self,ety):
		self.change(self.prevS,ety)
	
	def change(self,s,ety):
		if self.currS and not self.currS==s:
			self.currS.close(self,ety)
		
		if not self.currS==s:
			self.prevS=self.currS
			self.currS=s
			self.currS.open(self,ety)
		
	def exe(self,ety):
		if self.currS:
			self.currS.exe(self,ety)
		pass
	
class NormalState(State):
	def exe(self,fsm,ety):
		ts=ety.model.getOpponentArms(ety.group)
		minv=9999999
		mint=0
		for t in ts:
			distv=t.pos-ety.pos
			cv=distv.lengthSquared()
			if cv<10000 and cv<minv:
				minv=cv
				mint=t
		
		if mint:
			ety.shoot(mint.pos)
		pass

#-----------------------cmd----------------------------
class Command:
	def exe(self,entity):
		pass
	
	def getName(self):
		return 'unknown'
	
class MoveCmd:
	def __init__(self,d3):
		self.d3=d3
		
	def exe(self,entity):
		distv=(self.d3-entity.pos)
		if distv.lengthSquared()<entity.speed*entity.speed:
			entity.pos.__init__(self.d3)
			return 1
			
		entity.pos+=distv.normalized()*entity.speed
		return 0
		
#----------------------game object-----------------
class Entity:
	def __init__(self):
		self.pos=QVector3D()
		self.type=0
		self.cmd=[]
		self.speed=10
		
		self.target=0
		self.model=0
		
		self.fsm=FSM()
		self.fsm.change(NormalState(),self)
		
		self.firehot=0
		self.btncmd=[]
		
	def shoot(self,targetv):
		if self.firehot<=0:
			bult=Bullet(self,QVector3D(targetv.x(),targetv.y(),0))
			self.model.bullets.append(bult)
			self.firehot=30
		
	def accept(self,cmd):
		self.cmd.append(cmd)
		
	def removeCmds(self):
		self.cmd=[]
		
	def process(self):
		if self.firehot>0:
			self.firehot-=1
		
		if len(self.cmd)>0:
			if self.cmd[-1].exe(self):
				self.cmd.pop()
		
		self.fsm.exe(self)
	
	def paint(self,g):
		g.setPen(QColor(0,0,0,255))
		g.drawEllipse(self.pos.x()-5,self.pos.y()-5,10,10)


class Building(Entity):
	def __init__(self):
		Entity.__init__(self)
		self.timer=0
		
	def accept(self,cmd):
		pass
	
	def process(self):
		Entity.process(self)
		self.timer+=1
		if self.timer>200:
			self.model.addArms(self.group,self.pos)
			self.timer=0
	
	def paint(self,g):
		g.setBrush(QBrush(QColor(0,255,100,200)))
		g.drawRect(self.pos.x()-10,self.pos.y()-10,20,20)

class Bullet:
	def __init__(self,owner,targetv):
		self.owner=owner
		self.speed=30
		
		self.pos=QVector3D(owner.pos)
		self.oldpos=QVector3D(self.pos)
		
		self.type=0
		self.timer=0
		self.targetv=targetv
		self.remove=False
		
		self.dir=self.targetv-self.owner.pos
		self.dir.normalize()
		
		self.boundingBox=QRect(0,0,1,1)
		pass
	
	def isHit(self,etys):
		minx=min(self.pos.x(),self.oldpos.x())
		miny=min(self.pos.y(),self.oldpos.y())
		w=abs(self.pos.x()-self.oldpos.x())
		h=abs(self.pos.y()-self.oldpos.y())
		
		self.boundingBox=QRect(minx-5,miny-5,w+10,h+10)
		
		ls=self.pos-self.oldpos
		norm=QVector3D(-ls.y(),ls.x(),0)
		norm.normalize()
		
		for ety in etys:
			if ety == self.owner:
				continue
			if self.boundingBox.contains(ety.pos.x(),ety.pos.y()):
				dist=QVector3D.dotProduct((self.pos-ety.pos),norm)
				if math.fabs(dist)<20:
					return ety
				
		return 0
	
	def update(self):
		if self.type==0:
			self.oldpos.__init__(self.pos)
			self.pos+=self.dir*self.speed
			
			distv=self.targetv-self.pos
			if QVector3D.dotProduct(self.dir,distv.normalized())<0:
				self.remove=True
				pass
			pass
		elif self.type==1:
			pass
		
		self.timer+=1
		if self.timer>300:
			self.remove=True
			
		pass
	
	def paint(self,g):
		g.setPen(QColor(0,0,0,255))
		g.drawEllipse(self.pos.x()-2,self.pos.y()-2,4,4)

#--------------------game model--------------------
class Model:
	def __init__(self):
		self.arms=[]
		self.enemies=[]
		self.bullets=[]
		
	def load(self,levelid):
		for i in range(5):
			ety=Entity()
			ety.model=self
			ety.group=0
			ety.pos=QVector3D(10+i*50,50,0)
			self.arms.append(ety)
			
			ety=Entity()
			ety.model=self
			ety.group=1
			ety.pos=QVector3D(10+i*50,300,0)
			self.enemies.append(ety)
			
		for i in range(1):
			ety=Building()
			ety.model=self
			ety.group=0
			ety.pos=QVector3D(10+i*50,20,0)
			self.arms.append(ety)
		pass
	
	def addArms(self,groupid,pos):
		ety=Entity()
		ety.model=self
		ety.group=groupid
		ety.pos.__init__(pos)
		ety.accept(MoveCmd(pos+QVector3D(0,50,0)))
			
		if groupid==0:
			self.arms.append(ety)
		elif groupid==1:
			self.enemies.append(ety)
	
	def getOpponentArms(self,groupid):
		if groupid==0:
			return self.enemies
		elif groupid==1:
			return self.arms
		return 0
	
	def detectSelection(self,rect,selected):
		while(len(selected)>0):
			selected.pop()
			
		for ety in self.arms:
			if rect.contains(ety.pos.x(),ety.pos.y()):
				selected.append(ety)
				
	def update(self):
		for ety in self.arms:
			ety.process()
			
		for ety in self.enemies:
			ety.process()
			
		for bult in self.bullets:
			if bult.remove:
				self.bullets.remove(bult)
				continue
			
			bult.update()
				
			
	def paint(self,g):
		for ety in self.arms:
			ety.paint(g)
			
		for ety in self.enemies:
			ety.paint(g)
			
		for bult in self.bullets:
			bult.paint(g)


#-------------------------view---------------------
class Selection:
	def __init__(self):
		self.sx=0
		self.sy=0
		self.ex=0
		self.ey=0
		self.show=False
		pass
	
	def start(self,x,y):
		self.sx=self.ex=x
		self.sy=self.ey=y
		self.show=True
		
	def update(self,x,y):
		self.ex=x
		self.ey=y
		
	def end(self):
		self.show=False
		
	def rect(self):
		minx=min(self.sx,self.ex)
		miny=min(self.sy,self.ey)
		w=abs(self.sx-self.ex)
		h=abs(self.sy-self.ey)
		return QRect(minx,miny,w,h)	
		
	def paint(self,g):
		if self.show:
			g.setBrush(QBrush(QColor(0,255,0,100)))
			g.drawRect(self.rect())
			g.setBrush(0)


class StatePanel:
	
	def __init__(self):
		self.selected=[]
		pass
	
	def update(self,selected):
		self.selected=selected
		pass
	
	def paint(self,g,y):
		g.drawRect(0,y,800,200)
		
		if len(self.selected)==0:
			pass
		elif len(self.selected)==1:
			g.drawText(0,y+20,'a entity')
			pass
		else:
			g.drawText(0,y+20,'count:'+str(len(self.selected)))
		pass
#----------------layer------------------



class MapLayer(GameLayer):
	def __init__(self):
		self.model=Model()
		self.model.load(0)
		
		self.selection=Selection()
		self.selected=[]
		
		self.statePanel=StatePanel()
		pass
	
	def update(self,game):
		if game.mousein.onMouseDown(Qt.LeftButton):
			game.mousein.removePressState(Qt.LeftButton)
			self.selection.start(game.mousein.x,game.mousein.y)
			
		if game.mousein.onMouseUp(Qt.LeftButton):
			game.mousein.removeReleaseState(Qt.LeftButton)
			self.selection.end()
			
			
		if game.mousein.onMouseDown(Qt.RightButton):
			game.mousein.removePressState(Qt.RightButton)
			if len(self.selected):
				dir=QVector3D(game.mousein.x,game.mousein.y,0)-QVector3D(self.selected[0].pos.x(),self.selected[0].pos.y(),0)
				dir.normalize()
				
				tx=QMatrix4x4()
				tx.setColumn(0,QVector4D(dir,0))
				tx.setColumn(1,QVector4D(-dir.y(),dir.x(),0,0))
				tx.setColumn(2,QVector4D(0,0,1,0))
				tx.setColumn(3,QVector4D(game.mousein.x,game.mousein.y,0,1))
				
				for i in range(len(self.selected)):
					ety=self.selected[i]
					ety.removeCmds()
					
					d4=tx*QVector4D(0,i*20,0,1)
					ety.accept(MoveCmd(QVector3D(d4.x(),d4.y(),0)))
			
		if self.selection.show:
			self.selection.update(game.mousein.x,game.mousein.y)
			self.model.detectSelection(self.selection.rect(),self.selected)
			self.statePanel.update(self.selected)
		
		self.model.update()
		
		for bult in self.model.bullets:
			ety=bult.isHit(self.model.enemies)
			if ety:
				bult.remove=True
		
		pass
	
	def paint(self,game,g):
		self.model.paint(g)
		
		for ety in self.selected:
			if self.selection.show:
				g.setBrush(QBrush(QColor(255,0,0,100)))
				g.setPen(QColor(0,0,0,255))
			else:
				g.setPen(QColor(255,0,0,255))
				
			g.drawEllipse(ety.pos.x()-10,ety.pos.y()-10,20,20)
			
			
		self.selection.paint(g)
		self.statePanel.paint(g,440)
		pass
	
	
	
simple(MapLayer())