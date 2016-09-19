# -*- coding: utf-8 -*-

'''
<progream>::=@trigger<command list>
<command list>::=<command>* @end
<command>::=<while>|<iftrue>|<switch>|<user command>|@push
<while>::=@while <count> <command list>
<iftrue>::=@iftrue <command list> <command list>
<switch>::=@switch <case>* @end
<case>::=@case <case str> <command list>
<user command>::=<any string>
'''

class Interpreter:
	def reset(self):
		pass
	
	def execute(self,vstk):
		return True
	
	def parse(self,ctx):
		pass

class Program(Interpreter):
	def __init__(self):
		self.cmdlist=0
		
	def execute(self,vstk):
		return self.cmdlist.execute(vstk)
		
	def parse(self,ctx):
		line=ctx.readline()
		while line:
			line=line.strip()
			
			if len(line)==0:
				line=ctx.readline()
				continue
			
			if line.find('@trigger')>=0:
				break
				
			line=ctx.readline()
		
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		pass
		
class CommandList(Interpreter):
	def __init__(self):
		self.cmds=[]
		self.curr=0
		
	def reset(self):
		self.curr=0
		
	def execute(self,vstk):
		if self.curr< len(self.cmds):
			while self.cmds[self.curr].execute(vstk):
				self.curr+=1
				if self.curr==len(self.cmds):
					break
				
		return self.curr>=len(self.cmds)
		'''
		for cmd in self.cmds:
			cmd.execute(vstk)
		'''
		
	def parse(self,ctx):
		line=ctx.readline()
		while line:
			line=line.strip()
			if len(line)==0:
				line=ctx.readline()
				continue
			
			if line.find('@end')>=0:
				break
			
			cmd=Command(line)
			cmd.parse(ctx)
			self.cmds.append(cmd)
			
			line=ctx.readline()
			
		pass
	
class Command(Interpreter):
	def __init__(self,cmdstr):
		self.cmd=0
		self.cmdstr=cmdstr
		
	def execute(self,vstk):
		if self.cmd:
			return self.cmd.execute(vstk)
		else:
			print 'none'
			return True
			
	def parse(self,ctx):
		
		if self.cmdstr.find('@iftrue')>=0:
			self.cmd=IftrueCommand()
			self.cmd.parse(ctx)
			
		elif self.cmdstr.find('@while')>=0:
			attr=self.cmdstr.split(' ')
			self.cmd=WhileCommand(int(attr[1]))
			self.cmd.parse(ctx)
			
		elif self.cmdstr.find('@switch')>=0:
			self.cmd=SwitchCommand()
			self.cmd.parse(ctx)
		
		elif self.cmdstr.find('@push')>=0:
			attr=self.cmdstr.split(' ')
			self.cmd=PushCommand(int(attr[1]))
		else:
			#self.cmd=UserCommand(self.cmdstr)
			cmd=ctx.createUserCommand(self.cmdstr)
			if cmd:
				self.cmd=cmd
			else:
				print 'no define user command',self.cmdstr
			
	
class WhileCommand(Interpreter):
	def __init__(self,count):
		self.count=count
		self.cmdlist=0
		self.runcount=0
		
	def reset(self):
		self.runcount=0
		
	def execute(self,vstk):
		if self.runcount<self.count:
			while self.cmdlist.execute(vstk):
				self.cmdlist.reset()
				self.runcount+=1
				if self.runcount>=self.count:
					break
		'''
		for i in range(self.count):
			self.cmdlist.execute(vstk)
		'''
		return self.runcount>=self.count
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		
		
class IftrueCommand(Interpreter):
	def __init__(self):
		self.cmdlist=0
		self.elselist=0
		
	def reset(self,vstk):
		pass
	
	def execute(self,vstk):
		if vstk.pop():
			return self.cmdlist.execute(vstk)
		else:
			return self.cmdlist.execute(vstk)
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		self.elselist=CommandList()
		self.elselist.parse(ctx)
		
class SwitchCommand(Interpreter):
	def __init__(self):
		self.case={}
		
	def reset(self):
		pass
		
	def execute(self,vstk):
		case=str(vstk.pop())
		if case in self.case:
			self.case[case].execute(vstk)
		elif '@default' in self.case:
			self.case['@default'].execute(vstk)
		
	def parse(self,ctx):
		line=ctx.readline()
		
		while line:
			line=line.strip()
			if len(line)==0:
				line=ctx.readline()
				continue
			
			if line.find('@end')>=0:
				break
			elif line.find('@case')>=0:
				attr=line.split(' ')
				cmd=CaseCommand(attr[1])
				cmd.parse(ctx)
				self.case[attr[1]]=cmd
			
			elif line.find('@default')>=0:
				cmd=CaseCommand('@default')
				cmd.parse(ctx)
				self.case['@default']=cmd
				
			line=ctx.readline()
		pass
	
class CaseCommand(Interpreter):
	def __init__(self,casestr):
		self.casestr=casestr
		self.cmdlist=0
		
	def execute(self,vstk):
		self.cmdlist.execute(vstk)
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		
class UserCommand(Interpreter):
	def __init__(self,name):
		self.name=name
		
	def execute(self,vstk):
		vstk.handle(self.name)
		return True

class PushCommand(Interpreter):
	def __init__(self,value):
		self.value=value
		
	def execute(self,vstk):
		vstk.append(self.value)
		return True
	pass

class Property:
	def __init__(self):
		self.prop={}
		
	def parse(self,ctx):
		line=ctx.readline()
		while line:
			line=line.strip()
			
			if len(line)==0:
				line=ctx.readline()
				continue
			
			if line.find('@property')>=0:
				break
			
			line=ctx.readline()
		
		line=ctx.readline()
		while line:
			line=line.strip()
			
			if len(line)==0:
				line=ctx.readline()
				continue
			
			if line.find('@end')>=0:
				break
			
			key=line[0:line.index('=')].strip()
			value=line[line.index('=')+1:len(line)].strip()
			self.prop[key]=value
			
			line=ctx.readline()
		pass


class RuntimeContext:
	def __init__(self):
		self.vstk=[]
		
	def append(self,v):
		self.vstk.append(v)
		
	def pop(self):
		return self.vstk.pop()
		
		
class TriggerScript:
	def __init__(self):
		self.prop=0
		self.scpt=Program()
		
	def parse(self,filename):
		scpt=open(filename)
		
		prop=Property()
		
		prop.parse(scpt)
		self.scpt.parse(scpt)
		
		self.prop=prop.prop
		scpt.close()
		
		print self.prop
		
	def run(self, ctx):
		return self.scpt.execute(ctx)

if __name__=='__main__':
	filename='stage1.stage.scpt'
	ts=TriggerScript()
	ts.parse(filename)
	
	rc=RuntimeContext()
	
	for i in range(10):
		print ts.run(rc)
