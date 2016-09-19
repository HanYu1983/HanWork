# -*- coding: utf-8 -*-
from PyQt4.QtGui import *
from PyQt4.QtCore import *

class Waypoint:
	
	def __init__(self, position=0):
		self.type=0
		self.itemType=0
		self.position=position
		self.edge=[]
		self.hidden=False
		
	def paint(self, g):
		g.drawEllipse(QRectF(self.position.x()-5,self.position.y()-5,10,10))
	
class Graph:
	
	def __init__(self):
		self.points=[]
		pass
	
	def pushWP(self,wp):
		self.points.append(wp)
		return len(self.points)-1
		
	def connectWP(self,fromid,toid,two=True):
		self.points[fromid].edge.append(toid)
		if two:
			self.points[toid].edge.append(fromid)
			
	def paint(self, g):
		#for wp in self.points:
		for i in range(len(self.points)):
			wp=self.points[i]
			wp.paint(g)
			
			g.setPen(QColor(0,0,0))
			for toid in wp.edge:
				if not self.points[toid].hidden:
					towp=self.points[toid]
					g.drawLine(wp.position.x(),wp.position.y(),towp.position.x(),towp.position.y())
					#g.drawEllipse(QRectF(towp.position.x()-3,towp.position.y()-3,6,6))
			
			g.setPen(QColor(0,0,255))
			g.drawText(wp.position.x(),wp.position.y(),str(i))

class BHeap:
	
	def __init__(self):
		self.v=[]
		
	def push(self,value):
		self.v.append(value)
		self.goup(len(self.v)-1)
		
	def removeAll(self):
		self.v=[]
		
	def peek(self):
		return self.v[0]
		
	def pop(self):
		if len(self.v)>0:
			ret=self.v[0]
			self.v[0]=self.v[-1]
			self.v.pop()
			self.godown(0)
			return ret
		elif len(self.v)==0:
			ret=self.v[0]
			self.v.pop()
			return ret
			
	def size(self):
		return len(self.v)
		
	def parent(self,id):
		return id/2
		
	def left(self,id):
		return id*2+1
		
	def right(self,id):
		return id*2+2
		
	def goup(self,id):
		if len(self.v)>1:
			pid=self.parent(id)
			if self.v[id]<self.v[pid]:
				tmp=self.v[id]
				self.v[id]=self.v[pid]
				self.v[pid]=tmp
				
				self.goup(pid)
				
	def godown(self,id):
		if id>=0 and id<len(self.v):
			lid=self.left(id)
			rid=self.right(id)
			mid=lid
			
			if rid<len(self.v):
				if self.v[rid] < self.v[mid]:
					mid=rid
			elif lid<len(self.v):
				pass
			else:
				return
				
			if mid!=-1:
				if self.v[mid]< self.v[id]:
					tmp=self.v[id]
					self.v[id]=self.v[mid]
					self.v[mid]=tmp
					
					self.godown(mid)
					

class AstarNode:
	def __init__(self,id):
		self.id=id
		self.cost=0
		self.ev=0
		self.mark=0
		self.parent=0
		
	def getTCost(self):
		return self.ev+self.cost
		
	def __cmp__(self, dict):                       
		if isinstance(dict, AstarNode):            
			return cmp(self.getTCost(), dict.getTCost())      
		else:                                     
			return cmp(self.getTCost(), dict)
					
class AstarSearch:
	
	def __init__(self, graph, costtable=0):
		self.graph=graph
		self.costtable=costtable
		self.pq=BHeap()
		pass
	
	def rebuild(self):
		self.pq.removeAll()
		self.nodes=[]
		
		for i in range(len(self.graph.points)):
			self.nodes.append(AstarNode(i))
			
		
	
	def buildPath(self, id):
		ret=[]
		parent=self.nodes[id]
		while parent:
			ret.append(parent.id)
			parent=parent.parent
		ret.reverse()
		return ret
		
	def search(self, fromid, toid, findType=False):
		if fromid<0 or fromid>=len(self.graph.points) or toid<0 or toid>=len(self.graph.points):
			return 0
		if self.graph.points[toid].hidden:
			return 0
		
		self.rebuild()
		self.pq.push(self.nodes[fromid])
		
		while self.pq.size()>0:
			node=self.pq.pop()
			if node.id==toid:
				return self.buildPath(toid)
				
			if findType and node.type==toid:
				return self.buildPath(node.id)
				
			node.mark=2
				
			for nextid in self.graph.points[node.id].edge:
				if self.graph.points[nextid].hidden:
					continue
				
				nextNode=self.nodes[nextid]
				cost=node.cost
				if self.costtable:
					pass
				else:
					cost+=10
					
				if nextNode.mark==1:
					if nextNode.cost>cost:
						nextNode.cost=cost
						nextNode.parent=node
						
				elif nextNode.mark==0:
					if findType:
						nextNode.ev=self.calcECost(nextNode.id,toid)
					nextNode.cost=cost
					nextNode.parent=node
					nextNode.mark=1
					self.pq.push(nextNode)
					
		return 0
	
	def calcECost(self,fromid,toid):
		return (self.graph.points[fromid].position-self.graph.points[toid].position).lengthSquared()
		
		
if __name__=='__main__':
	import random
	from game import *
	
	graph=Graph()

	for i in range(10):
		graph.pushWP(Waypoint(QVector3D(random.random()*600,random.random()*480,0)))

	for i in range(10):
		for j in range(3):
			t=(i+j)%10
			graph.connectWP(i,t,False)

	astar=AstarSearch(graph)
	path=[]

	class testLevel(GameLayer):
		
		def update(self,widget):
			if widget.keyin.onKeyDown(Qt.Key_E):
				global path
				path=astar.search(0,int(random.random()*10))
				widget.keyin.removePressState(Qt.Key_E)
		
		def paint(self,widget,g):
			graph.paint(g)
			
			for i in range(1,len(path)):
				ps=graph.points[path[i-1]].position
				pe=graph.points[path[i]].position
				
				g.setPen(QColor(255,0,0))
				g.drawLine(ps.x(),ps.y(),pe.x(),pe.y())

	simple(testLevel())