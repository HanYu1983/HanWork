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