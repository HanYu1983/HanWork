# -*- coding: utf-8 -*-

from hanlib.script2 import *
from hanlib.game import *
import random

class right(Interpreter):
	def __init__(self):
		self.time=0
		
	def update(self,vstk,model):
		model.player.pos+=QVector3D(2,0,0)
		self.time+=1
		if self.time>10:
			self.time=0
			return True
		return False
		
class down(Interpreter):
	def __init__(self):
		self.time=0
		
	def update(self,vstk,model):
		model.player.pos+=QVector3D(0,2,0)
		self.time+=1
		if self.time>10:
			self.time=0
			return True
		return False
		
class left(Interpreter):
	def __init__(self):
		self.time=0
		
	def update(self,vstk,model):
		model.player.pos-=QVector3D(2,0,0)
		self.time+=1
		if self.time>10:
			self.time=0
			return True
		return False
		
class up(Interpreter):
	def __init__(self):
		self.time=0
		
	def update(self,vstk,model):
		model.player.pos-=QVector3D(0,2,0)
		self.time+=1
		if self.time>10:
			self.time=0
			return True
		return False

class msg(Interpreter):
	def __init__(self,st):
		self.st=st
		
	def update(self,vstk,model):
		model.msg=self.st
		if model.keyin.onKeyDown(Qt.Key_J):
			model.keyin.removePressState(Qt.Key_J)
			model.msg=0
			return True
			
		return False
		
class pos(Interpreter):
	
	def __init__(self,x,y):
		self.x=x
		self.y=y
	
	def update(self,vstk,model):
		model.player.pos.__init__(self.x,self.y,0)
		return True
		
class delay(Interpreter):
	
	def __init__(self,delay):
		self.delay=delay
		self.time=0
		
	def update(self,vstk,model):
		
		if self.time>self.delay:
			self.time=0
			return True
		
		self.time+=1
		return False
		
class battle(Interpreter):
	
	def __init__(self):
		self.time=0
	
	def update(self,vstk,model):
		
		model.msg='戰鬥中'
		
		if self.time>24:
			self.time=0
			model.msg=0
			result=int(random.random()*2)
			vstk.append(result)
			return True
		
		self.time+=1
		return False

class option(Interpreter):
	def __init__(self,options):
		self.options=options
		
	def update(self,vstk,model):
		model.options=self.options
		if model.keyin.onKeyDown(Qt.Key_E):
			model.keyin.removePressState(Qt.Key_E)
			model.sid-=1
			if model.sid<0:
				model.sid=0
				
		elif model.keyin.onKeyDown(Qt.Key_D):
			model.keyin.removePressState(Qt.Key_D)
			model.sid+=1
			if model.sid>=len(self.options):
				model.sid=len(self.options)-1
		
		if model.keyin.onKeyDown(Qt.Key_J):
			model.keyin.removePressState(Qt.Key_J)
			vstk.append(model.sid)
			model.options=0
			return True
				
		return False
		
	
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
	

class Role:
	def __init__(self):
		self.pos=QVector3D()
		self.rpgscpt=0
		self.radius=10
		
	def loadScpt(self,ctx):
		self.rpgscpt=RPGScript()
		self.rpgscpt.parse(ctx)
		self.radius=int(self.rpgscpt.prop['radius'])
		
	def paint(self, g):
		g.drawEllipse(self.pos.x()-self.radius,self.pos.y()-self.radius,self.radius*2,self.radius*2)


class Model:
	def __init__(self):
		self.player=Role()
		self.tgrs=[]
		
		self.msg=0
		self.options=0
		self.sid=0
		self.overed=0
		pass
	
	def detectClick(self):
		if self.overed:
			distv=self.player.pos-self.overed.pos
			if distv.lengthSquared()>(self.player.radius+self.overed.radius)*(self.player.radius+self.overed.radius):
				self.overed=0
			return 0
			
		for region in self.tgrs:
			distv=self.player.pos-region.pos
			if distv.lengthSquared()<(self.player.radius+region.radius)*(self.player.radius+region.radius):
				self.overed=region
				return region
		return 0
	
	def paint(self,g):
		self.player.paint(g)
		
		for region in self.tgrs:
			region.paint(g)
		
		if self.msg:
			g.drawText(100,20,self.msg.decode('utf8'))
			
		if self.options:
			for i in range(len(self.options)):
				if i==self.sid:
					g.setPen(QColor(255,0,0,255))
				else:
					g.setPen(QColor(0,0,0,255))
					
				st=self.options[i]
				g.drawText(100,100+i*20,st.decode('utf8'))
				
			g.setPen(QColor(0,0,0,255))
		pass
	
class Stage(GameLayer):
	def __init__(self):
		self.model=Model()
		
		cmdfacty=DefaultMappingCommandFactory()
		
		ctx=Context('stage.scpt',cmdfacty)
		scpt=Program()
		scpt.parse(ctx)
		ctx.close()
		
		ctx=Context('stage_region_1.scpt',cmdfacty)
		region=Role()
		region.loadScpt(ctx)
		region.pos=QVector3D(100,100,0)
		self.model.tgrs.append(region)
		ctx.close()
		
		ctx=Context('stage_region_2.scpt',cmdfacty)
		region=Role()
		region.loadScpt(ctx)
		region.pos=QVector3D(300,100,0)
		self.model.tgrs.append(region)
		ctx.close()
		
		ctx=Context('stage_region_3.scpt',cmdfacty)
		region=Role()
		region.loadScpt(ctx)
		region.pos=QVector3D(300,300,0)
		self.model.tgrs.append(region)
		ctx.close()
		
		self.scpt=scpt
		self.vstk=[]
	
	def update(self,game):
		self.model.keyin=game.keyin
		
		if self.scpt:
			if self.scpt.update(self.vstk,self.model):
				self.scpt=0
		else:
			if game.keyin.onKeyDown(Qt.Key_F):
				self.model.player.pos+=QVector3D(2,0,0)
			elif game.keyin.onKeyDown(Qt.Key_S):
				self.model.player.pos-=QVector3D(2,0,0)
				
			if game.keyin.onKeyDown(Qt.Key_D):
				self.model.player.pos+=QVector3D(0,2,0)
			elif game.keyin.onKeyDown(Qt.Key_E):
				self.model.player.pos-=QVector3D(0,2,0)
			
			if game.keyin.onKeyDown(Qt.Key_J):
				game.keyin.removePressState(Qt.Key_J)
				#region=self.model.detectClick()
				region=self.model.overed
				if region:
					self.scpt=region.rpgscpt.scpts['click']
			
			region=self.model.detectClick()
			if region:
				self.scpt=region.rpgscpt.scpts['over']
			
		pass
	
	def paint(self,game,g):
		self.model.paint(g)
		

		
simple(Stage())