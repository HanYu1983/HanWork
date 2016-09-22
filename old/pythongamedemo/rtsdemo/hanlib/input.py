# -*- coding: utf-8 -*-

class SimpleInput:
	
	def __init__(self):
		self.kp=[]
		self.kl=[]
		for i in range(256):
			self.kp.append(False)
			self.kl.append(False)
			
	def notifyKeyPress(self, keycode):
		if keycode>=0 and keycode<=255:
			self.kp[keycode]=True
			self.kl[keycode]=False
			
	def notifyKeyRelease(self, keycode):
		if keycode>=0 and keycode<=255:
			self.kp[keycode]=False
			self.kl[keycode]=True
			
	def onKeyDown(self, keycode):
		if keycode>=0 and keycode<=255:
			return self.kp[keycode]
		return False
		
	def onKeyUp(self, keycode):
		if keycode>=0 and keycode<=255:
			return self.kl[keycode]
		return False
		
	def removeReleaseState(self, keycode=-1):
		if keycode<0:
			for i in range(256):
				self.kl[i]=False
		
		if keycode<=255:
			self.kl[keycode]=False
			
	def removePressState(self, keycode=-1):
		if keycode<0:
			for i in range(256):
				self.kp[i]=False
			
		if keycode<=255:
			self.kp[keycode]=False
			
	def removeState(self):
		self.removePressState()
		self.removeReleaseState()
		
	pass


from PyQt4.QtGui import *

class SimpleMouse:
	def __init__(self):
		self.mp=[]
		self.ml=[]
		for i in range(5):
			self.mp.append(False)
			self.ml.append(False)
			
		self.x=0
		self.y=0
			
	def notifyKeyPress(self, keycode, x, y):
		if keycode>=0 and keycode<=5:
			self.mp[keycode]=True
			self.ml[keycode]=False
			
		self.x=x
		self.y=y
			
	def notifyKeyRelease(self, keycode, x, y):
		if keycode>=0 and keycode<=5:
			self.mp[keycode]=False
			self.ml[keycode]=True
		
		self.x=x
		self.y=y
		
	def notifyMouseMove(self, x,y):
		self.x=x
		self.y=y
		
	def onMouseDown(self, keycode):
		if keycode>=0 and keycode<=5:
			return self.mp[keycode]
		return False
		
	def onMouseUp(self, keycode):
		if keycode>=0 and keycode<=5:
			return self.ml[keycode]
		return False
		
	def removeReleaseState(self, keycode=-1):
		if keycode<0:
			for i in range(5):
				self.ml[i]=False
		
		if keycode<=5:
			self.ml[keycode]=False
			
	def removePressState(self, keycode=-1):
		if keycode<0:
			for i in range(5):
				self.mp[i]=False
			
		if keycode<=5:
			self.mp[keycode]=False
			
	def removeState(self):
		self.removePressState()
		self.removeReleaseState()