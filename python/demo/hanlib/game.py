# -*- coding: utf-8 -*-

from PyQt4.QtGui import *
from PyQt4.QtCore import *
from input import *


class GameLayer:
	def open(self,game,info):
		print 'open',info
	def close(self,game,info):
		print 'close',info
	def pause(self,game,info):
		print 'pause',info
	def resume(self,game,info):
		print 'resume',info
	def update(self,game):
		print 'update'
	def paint(self,game,g):
		print 'paint'

class Game(QWidget):
	
	def __init__(self,w=800,h=640,title='han'):
		QWidget.__init__(self)
		QWidget.resize(self,w,h)
		QWidget.setWindowTitle(self,title)
		
		self.keyin=SimpleInput()
		self.mousein=SimpleMouse()
		self.layer_stk=[]
		
		timer=QTimer()
		self.connect(timer,SIGNAL('timeout()'),self,SLOT('repaint()'))
		timer.start(41)
		self.timer=timer
		
		QWidget.show(self)
		
	def push(self,layer,info):
		if len(self.layer_stk)>0:
			self.layer_stk[-1].pause(self,0)
		
		layer.open(self,info)
		self.layer_stk.append(layer)
		
	def pop(self,info):
		if len(self.layer_stk)>0:
			self.layer_stk[-1].close(self,0)
			self.layer_stk.pop()
		
		if len(self.layer_stk)>0:
			self.layer_stk[-1].resume(self,info)
			
	def change(self,layer,info):
		if len(self.layer_stk)>0:
			self.layer_stk[-1].close(self,0)
			self.layer_stk.pop()
			
		layer.open(self,info)
		self.layer_stk.append(layer)
		
	def mousePressEvent(self,evt):
		self.mousein.notifyKeyPress(evt.button(),evt.pos().x(),evt.pos().y())
		
	def mouseReleaseEvent(self,evt):
		self.mousein.notifyKeyRelease(evt.button(),evt.pos().x(),evt.pos().y())
		
	def mouseMoveEvent(self,evt):
		self.mousein.notifyMouseMove(evt.pos().x(),evt.pos().y())
		
	def keyPressEvent(self, evt):
		if evt.isAutoRepeat():
			return
		self.keyin.notifyKeyPress(evt.key())
	
	def keyReleaseEvent(self, evt):
		if evt.isAutoRepeat():
			return
		self.keyin.notifyKeyRelease(evt.key())
		
	def paintEvent(self,evt):
		for layer in self.layer_stk:
			layer.update(self)
			
		g=QPainter(self)
		for layer in self.layer_stk:
			layer.paint(self,g)
			
		pass
	
	def closeEvent(self,evt):
		self.timer.stop()
	
def simple(start):
	app=QApplication([])
	game=Game()
	game.push(start,0)
	app.exec_()

if __name__=='__main__':
	
	class Layer(GameLayer):
		
		def paint(self,game,g):
			g.drawText(20,20,'layer')
			g.setBrush(QBrush(QColor(255,0,0,100)))
			g.drawRect(100,100,100,100)
			g.drawRect(30,50,100,100)
			g.drawRect(120,70,100,100)
		pass
	
	simple(Layer())
	