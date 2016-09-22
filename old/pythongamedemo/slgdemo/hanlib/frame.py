# -*- coding: utf-8 -*-
from PyQt4.QtGui import *
from PyQt4.QtCore import *
from hanlib.input import *

class Level:
	def keyPressEvent(self, widget, evt):
		pass
		
	def keyReleasEvent(self, widget, evt):
		pass
	
	def openLevelEvent(self, widget):
		print 'open'
		
	def coverLevelEvent(self, widget):
		print 'cover'
		
	def resumeLevelEvent(self, widget):
		print 'resume'
		
	def closeLevelEvent(self, widget):
		print 'close'
		
	def paintEvent(self, widget):
		print 'paint'

class Frame(QWidget):
	def __init__(self, title='han', w=640, h=480):
		QWidget.__init__(self)
		self.setWindowTitle(title)
		self.resize(640,480)
		self.show()
		self.active=True
		
		timer=QTimer(self);
		self.connect(timer, SIGNAL('timeout()'), self, SLOT('repaint()'));
		timer.start(41);
		self.timer=timer
		
		self.levels=[]
		self.activeLevel=0
		
		self.keyin=SimpleInput()
	
	def pushLevel(self, level):
		if self.activeLevel==level:
			return
			
		self.levels.append(level)
		if self.activeLevel:
			self.activeLevel.coverLevelEvent(self)
			
		self.activeLevel=level
		self.activeLevel.openLevelEvent(self)
		
	def popLevel(self):
		if len(self.levels)>0:
			self.levels[-1].closeLevelEvent(self)
			#del self.levels[-1]
			self.levels.pop()
			#print len(self.levels)
		
		if len(self.levels) >0:
			self.activeLevel=self.levels[-1]
			self.activeLevel.resumeLevelEvent(self)
			
		else:
			self.activeLevel=0
			
	def changeLevel(self, level):
		self.popLevel()
		self.pushLevel(level)
		
	def isActiveLevel(self, level):
		return self.activeLevel and self.activeLevel==level
		
	def closeEvent(self, evt):
		self.active=False
		self.timer.stop()
		
	def keyPressEvent(self, evt):
		if evt.isAutoRepeat():
			return
		self.keyin.notifyKeyPress(evt.key())
		
		if self.active and self.activeLevel:
			for level in self.levels:
				level.keyPressEvent(self,evt)
	
	def keyReleaseEvent(self, evt):
		if evt.isAutoRepeat():
			return
		self.keyin.notifyKeyRelease(evt.key())
		
		if self.active and self.activeLevel:
			for level in self.levels:
				level.keyReleasEvent(self,evt)
	
	def paintEvent(self, evt):
		if self.active and self.activeLevel:
			for level in self.levels:
				level.paintEvent(self)
		pass