# -*- coding: utf-8 -*-
from hanlib import *

class Glass:
	
	def __init__(self):
		self.POS_OPEN=QVector3D(20,100,0)
		self.POS_CLOSE=QVector3D(-150,100,0)
		
		self.distpos=self.POS_CLOSE
		self.currpos=QVector3D()
		
		self.char=0
		pass
	
	def notifyopenstate(self):
		self.distpos=self.POS_OPEN
		
	def notifyclosestate(self):
		self.distpos=self.POS_CLOSE
		
	def update(self):
		self.currpos+=(self.distpos-self.currpos)/5
	
	def paint(self,g):
		g.drawRect(int(self.currpos.x()),int(self.currpos.y()),100,50)
		g.drawText(int(self.currpos.x())+20,int(self.currpos.y())+20,'state')
		
		if self.char:
			g.drawText(int(self.currpos.x())+20,int(self.currpos.y())+40,'group'+str(self.char.group))
		pass
	
class CursorGlass:
	
	def __init__(self, stage):
		self.stage=stage
		self.selpos=QVector3D()
		self.drawpos=QVector3D()
		self.MOVE_Y=QVector3D(0,5,0)
		self.MOVE_X=QVector3D(5,0,0)
		self.glass=Glass()
		self.selobj=0
		
		pass
	
	def moveCursor(self,widget):
		if widget.keyin.onKeyDown(Qt.Key_E):
			self.selpos-=self.MOVE_Y
		elif widget.keyin.onKeyDown(Qt.Key_D):
			self.selpos+=self.MOVE_Y
		
		if widget.keyin.onKeyDown(Qt.Key_S):
			self.selpos-=self.MOVE_X
		elif widget.keyin.onKeyDown(Qt.Key_F):
			self.selpos+=self.MOVE_X
			
	def update(self,widget):
		self.selobj=self.stage.detectOverlap(self.selpos, 10)
		
		self.drawpos+=(self.selpos-self.drawpos)/5
		self.glass.update()
		
		if self.selobj:
			self.glass.char=self.selobj
			self.glass.notifyopenstate()
		else:
			self.glass.notifyclosestate()
	
	def paint(self,widget):
		#-------------paint-----------------
		g=QPainter(widget)
		g.setPen(QColor(0,0,0,255))
		
		for char in self.stage.chars:
			char.paint(g)
			
		for char in self.stage.enemies:
			char.paint(g)
		
		if self.selobj:
			g.setPen(QColor(255,0,0,255))
			self.selobj.paint(g)
			
			g.setPen(QColor(0,0,255,255))
			g.drawEllipse(QRectF(self.selobj.pos.x()-self.selobj.speed,self.selobj.pos.y()-self.selobj.speed,self.selobj.speed*2,self.selobj.speed*2))
			
		g.setBrush(0)
		g.drawEllipse(QRectF(self.drawpos.x()-10,self.drawpos.y()-10,20,20))
		
		self.glass.paint(g)

class Char:
	
	def __init__(self):
		self.pos=QVector3D();
		self.group=0
		self.speed=100
		self.atkrange=40
		self.mark=False
		
	def paint(self,g):
		
		if self.mark:
			g.setPen(QColor(0,255,0,255))
		else:
			g.setPen(QColor(0,0,0,255))
			
		g.drawEllipse(QRectF(self.pos.x()-5,self.pos.y()-5,10,10))
		g.drawText(self.pos.x(),self.pos.y(),str(self.group))
		
		pass
	
class Stage:
	
	def __init__(self):
		self.chars=[]
		self.enemies=[]
		self.cursorGlass=CursorGlass(self)
		pass
	
	def load(self,levelid):
		if levelid==0:
			for i in range(5):
				char=Char()
				char.pos=QVector3D(i*20+20,30,0)
				self.chars.append(char)
			
			for i in range(10):
				char=Char()
				char.group=1
				char.pos=QVector3D(i*20+20,300,0)
				self.chars.append(char)
			pass
		elif levelid==1:
			pass
		
	def resetGroupMark(self,id):
		if id==0:
			for char in self.chars:
				char.mark=False
			pass
		elif id==1:
			for char in self.enemies:
				char.mark=False
			pass
	
	def detectOverlap(self, selpos, radius):
		for char in self.chars:
			if (selpos-char.pos).lengthSquared()< radius*radius+100:
				return char
				
		for char in self.enemies:
			if (selpos-char.pos).lengthSquared()< radius*radius+100:
				return char
		return 0
		
		

class MsgLevel(Level):
	def __init__(self, stage):
		self.stage=stage
		self.msg='msg'
		self.timer=0
		
	def paintEvent(self,widget):
		
		if self.timer>24:
			widget.popLevel()
			
		self.timer+=1
		
		g=QPainter(widget)
		g.drawText(200,200,self.msg)

class MapLevel(Level):
	
	def __init__(self, stage):
		self.stage=stage
		self.turn=0
		pass
	
	def paintEvent(self,widget):
		#update
		self.stage.cursorGlass.update(widget)
		
		if widget.isActiveLevel(self):
			
			if self.turn==0:
				self.stage.cursorGlass.moveCursor(widget)
				
				if widget.keyin.onKeyDown(Qt.Key_R):
					widget.keyin.removePressState(Qt.Key_R)
					selobj=self.stage.cursorGlass.selobj
					
					if selobj and not selobj.mark and selobj.group==0:
						next=CharMenuLevel(self.stage)
						next.char=selobj
						widget.pushLevel(next)
					pass
				
				if widget.keyin.onKeyDown(Qt.Key_C):
					next=MsgLevel(self.stage)
					next.msg='enemy run'
					self.turn=1
					self.stage.resetGroupMark(1)
					widget.pushLevel(next)
					
			else:
				next=MsgLevel(self.stage)
				next.msg='player run'
				self.turn=0
				self.stage.resetGroupMark(0)
				widget.pushLevel(next)
				pass
		
		#----------------------------
		self.stage.cursorGlass.paint(widget)
		pass
	
class MenuLevel(Level):
	def __init__(self, stage):
		self.stage=stage
		self.char=0
		self.options=[0,1,2]
		self.menustrs=['move','attack','state','end']
		self.selid=0
		
	def selected(self,widget,id):
		pass
		
	def paintEvent(self,widget):
		if widget.isActiveLevel(self):
			if widget.keyin.onKeyDown(Qt.Key_E):
				widget.keyin.removePressState(Qt.Key_E)
				self.selid-=1
				self.selid=(self.selid+len(self.options))%len(self.options)
				
			elif widget.keyin.onKeyDown(Qt.Key_D):
				widget.keyin.removePressState(Qt.Key_D)
				self.selid+=1
				self.selid=(self.selid+len(self.options))%len(self.options)
			
			if widget.keyin.onKeyDown(Qt.Key_W):
				widget.keyin.removePressState(Qt.Key_W)
				widget.popLevel()
				return
			elif widget.keyin.onKeyDown(Qt.Key_R):
				widget.keyin.removePressState(Qt.Key_R)
				self.selected(widget,self.options[self.selid])
		
		if widget.isActiveLevel(self):
			g=QPainter(widget)
			
			g.setPen(QColor(255,255,255,100))
			g.fillRect(100,100,50,100,0)
			
			for i in range(len(self.options)):
				if i == self.selid:
					g.setPen(QColor(255,0,0,255))
				else:
					g.setPen(QColor(0,0,0,255))
					
				g.drawText(100,120+i*20,self.menustrs[self.options[i]])
		
		pass
			
			
class CharMenuLevel(Level):
	
	def __init__(self, stage):
		self.stage=stage
		self.char=0
		self.options=[0,1,2]
		self.menustrs=['move','attack','state','end']
		self.selid=0
		
		pass
	
	def paintEvent(self,widget):
		if widget.isActiveLevel(self):
			if widget.keyin.onKeyDown(Qt.Key_E):
				widget.keyin.removePressState(Qt.Key_E)
				self.selid-=1
				self.selid=(self.selid+len(self.options))%len(self.options)
				
			elif widget.keyin.onKeyDown(Qt.Key_D):
				widget.keyin.removePressState(Qt.Key_D)
				self.selid+=1
				self.selid=(self.selid+len(self.options))%len(self.options)
			
			if widget.keyin.onKeyDown(Qt.Key_W):
				widget.keyin.removePressState(Qt.Key_W)
				widget.popLevel()
				return
			elif widget.keyin.onKeyDown(Qt.Key_R):
				widget.keyin.removePressState(Qt.Key_R)
				
				if self.options[self.selid]==0:
					next=SelCharMovePosLevel(stage)
					next.char=self.char
					next.oripos=QVector3D(self.char.pos)
					widget.pushLevel(next)
					return
				elif self.options[self.selid]==1:
					next=SelAtkTargetLevel(self.stage)
					next.char=self.char
					widget.pushLevel(next)
					pass
				elif self.options[self.selid]==2:
					pass
				elif self.options[self.selid]==3:
					widget.popLevel()
					pass
				
		#--------------------------------
		
		if widget.isActiveLevel(self):
			g=QPainter(widget)
			
			g.setPen(QColor(255,255,255,100))
			g.fillRect(100,100,50,100,0)
			
			for i in range(len(self.options)):
				if i == self.selid:
					g.setPen(QColor(255,0,0,255))
				else:
					g.setPen(QColor(0,0,0,255))
					
				g.drawText(100,120+i*20,self.menustrs[self.options[i]])
		
		pass
	
class SelCharMovePosLevel(Level):
	def __init__(self, stage):
		self.stage=stage
		self.char=0
		self.oripos=0
		pass
	
	def paintEvent(self,widget):
		if widget.isActiveLevel(self):
			self.stage.cursorGlass.moveCursor(widget)
			
			if widget.keyin.onKeyDown(Qt.Key_W):
				widget.keyin.removePressState(Qt.Key_W)
				widget.popLevel()
				return
			elif widget.keyin.onKeyDown(Qt.Key_R):
				widget.keyin.removePressState(Qt.Key_R)
				
				distV=self.stage.cursorGlass.selpos-self.char.pos;
				if distV.lengthSquared()<=self.char.speed*self.char.speed:
					next=CharMoveLevel(self.stage)
					next.char=self.char
					next.oripos=QVector3D(self.char.pos)
					next.distpos=self.stage.cursorGlass.selpos
					widget.pushLevel(next)
					
		#--------------------------------
		g=QPainter(widget)
		
		if widget.isActiveLevel(self):
			g.setPen(QColor(0,0,255,100))
			g.setBrush(QBrush(QColor(255,0,0,100)))
			g.drawEllipse(QRectF(self.char.pos.x()-self.char.speed,self.char.pos.y()-self.char.speed,self.char.speed*2,self.char.speed*2))
		
		g.setBrush(0)
		
		pass
	
class CharMoveLevel(Level):
	
	def __init__(self,stage):
		self.stage=stage
		self.char=0
		self.distpos=QVector3D()
		self.oripos=0
		
		pass
	
	def paintEvent(self,widget):
		if widget.isActiveLevel(self):
			
			distV=self.distpos-self.char.pos;
			if distV.lengthSquared()<=10:
				self.char.pos.__init__(self.distpos)
				next=MovedMenuLevel(stage)
				next.char=self.char
				widget.pushLevel(next)
				return
			else:
				self.char.pos+=distV/5
		#--------------------------------
		g=QPainter(widget)
		pass
	
class MovedMenuLevel(MenuLevel):
	def __init__(self,stage):
		MenuLevel.__init__(self,stage)
		self.options=[1,2,3]
	
	def selected(self,widget,id):
		if id==3:
			self.char.mark=True
			widget.popLevel();
			widget.popLevel();
			widget.popLevel();
			widget.popLevel();
		elif id==1:
			next=SelAtkTargetLevel(self.stage)
			next.char=self.char
			widget.pushLevel(next)
			pass
		elif id==2:
			pass
	
class SelAtkTargetLevel(Level):
	
	def __init__(self,stage):
		self.stage=stage
		
		pass
	
	def paintEvent(self,widget):
		if widget.isActiveLevel(self):
			self.stage.cursorGlass.moveCursor(widget)
			if widget.keyin.onKeyDown(Qt.Key_R):
				widget.keyin.removePressState(Qt.Key_R)
				
				selobj=self.stage.cursorGlass.selobj
				if selobj:
					distV=selobj.pos-self.char.pos;
					if distV.lengthSquared()<=self.char.atkrange*self.char.atkrange:
						next=AttackLevel(self.stage)
						next.char=self.char
						next.target.append(selobj)
						widget.pushLevel(next)
				
			if widget.keyin.onKeyDown(Qt.Key_W):
				widget.keyin.removePressState(Qt.Key_W)
				widget.popLevel()
				pass
		
		if widget.isActiveLevel(self):
			g=QPainter(widget)
			
			g.setPen(QColor(0,0,255,100))
			g.setBrush(QBrush(QColor(255,0,255,100)))
			g.drawEllipse(QRectF(self.char.pos.x()-self.char.atkrange,self.char.pos.y()-self.char.atkrange,self.char.atkrange*2,self.char.atkrange*2))
		
		pass

class AttackLevel(Level):
	
	def __init__(self, stage):
		self.stage=stage
		self.char=0
		self.target=[]
		self.timer=0
		pass
	
	def paintEvent(self,widget):
		
		if self.timer>24:
			self.char.mark=True
			widget.popLevel()
			widget.popLevel()
			widget.popLevel()
			widget.popLevel()
			widget.popLevel()
			widget.popLevel()
				
		self.timer+=1
		
		g=QPainter(widget)
		g.drawText(100,100+(self.timer%2)*5,'attack!!')
		
		pass
	
stage=Stage()
stage.load(0)
simple(MapLevel(stage))