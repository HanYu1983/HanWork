# -*- coding: utf-8 -*-
from hanlib.game import *
from hanlib.script2 import *

class Model:
	def __init__(self):
		self.pos=QVector3D()
		
	def paint(self,g):
		g.drawEllipse(self.pos.x(),self.pos.y(),30,30)

class DownCmd(Interpreter):
	def __init__(self,model):
		self.time=0
		self.model=model
		
	def update(self,vstk):
		if self.time>=5:
			self.time=0
			return True
			
		self.model.pos+=QVector3D(0,5,0)
		self.time+=1
		return False
		
class RightCmd(Interpreter):
	def __init__(self,model):
		self.time=0
		self.model=model
		
	def update(self,vstk):
		if self.time>=5:
			self.time=0
			return True
			
		self.model.pos+=QVector3D(5,0,0)
		self.time+=1
		return False
		
class OptionCmd(Interpreter):
	def __init__(self,model):
		self.model=model
		self.time=0
		
	def update(self,vstk):
		if self.time>=5:
			self.time=0
			vstk.append(1)
			return True
		self.time+=1
		return False
		
class CustomContext(Context):
	def __init__(self,filename,model):
		Context.__init__(self,filename)
		self.model=model
		
	def createUserCommand(self,cmdstr):
		if cmdstr.find('down')>=0:
			return DownCmd(self.model)
		elif cmdstr.find('right')>=0:
			return RightCmd(self.model)
		elif cmdstr.find('option')>=0:
			return OptionCmd(self.model)
			
		return 0
		


class GL(GameLayer):
	def __init__(self):
		self.model=Model()
	
		ctx=CustomContext('stage1.stage.scpt',self.model)
		
		self.scpt=Program()
		self.scpt.parse(ctx)
		self.vstk=[]
		
	def update(self,game):
		if self.scpt.update(self.vstk):
			game.timer.stop()
			pass
		
	def paint(self,game,g):
		self.model.paint(g)
		pass
	
simple(GL())