# -*- coding: utf-8 -*-

'''
<progream>::=@trigger<command list>
<command list>::=<command>* @end
<command>::=<while>|<iftrue>|<switch>|<user command>|@push
<while>::=@while <count> <command list>
<iftrue>::=@iftrue <command list> @else <command list>
<switch>::=@switch <case>* @end
<case>::=@case <case str> <command list>
<user command>::=<any string>
'''

class Interpreter:
	def execute(self,vstk):
		pass
	
	def update(self,vstk):
		return true
	
	def parse(self,ctx):
		pass

class Program(Interpreter):
	def __init__(self):
		self.cmdlist=0
		
	def execute(self,vstk):
		self.cmdlist.execute(vstk)
		
	def update(self,vstk):
		return self.cmdlist.update(vstk)
		
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
		
	def update(self,vstk):
		if self.curr<len(self.cmds):
			if self.cmds[self.curr].update(vstk):
				self.curr+=1
				'''
				if self.curr>=len(self.cmds):
					break
				'''
		
		if self.curr>=len(self.cmds):
			self.reset()
			return True
		else:
			return False
		
	def execute(self,vstk):
		for cmd in self.cmds:
			cmd.execute(vstk)
		
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
		
	def update(self,vstk):
		if self.cmd:
			return self.cmd.update(vstk)
		else:
			print 'undefined user command[',self.cmdstr,'] skip it!!'
			return True
		
	def execute(self,vstk):
		if self.cmd:
			self.cmd.execute(vstk)
		else:
			print 'undefined user command[',self.cmdstr,'] skip it!!'
			
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
				print 'undefined user command',self.cmdstr
			
		
	
class WhileCommand(Interpreter):
	def __init__(self,count):
		self.count=count
		self.cmdlist=0
	
		self.runcount=0
		
	def reset(self):
		self.runcount=0
	
	def update(self,vstk):
		if self.runcount < self.count:
			if self.cmdlist.update(vstk):
				self.runcount+=1
				
		if self.runcount>=self.count:
			self.reset()
			return True
		else:
			return False
		
	def execute(self,vstk):
		for i in range(self.count):
			self.cmdlist.execute(vstk)
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		
		
class IftrueCommand(Interpreter):
	def __init__(self):
		self.cmdlist=0
		self.elselist=0
		
		self.ifcon=-987654321
		
	def update(self,vstk):
		if self.ifcon==-987654321:
			self.ifcon=vstk.pop()
			
		if self.ifcon:
			if self.cmdlist.update(vstk):
				ifcon=-987654321
				return True
			
		else:
			if self.elselist.update(vstk):
				ifcon=-987654321
				return True
		
		return False
	
	def execute(self,vstk):
		if vstk.pop():
			self.cmdlist.execute(vstk)
		else:
			self.elselist.execute(vstk)
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
		self.elselist=CommandList()
		self.elselist.parse(ctx)
		
class SwitchCommand(Interpreter):
	def __init__(self):
		self.case={}
		
		self.con=-987654321
		
	def update(self,vstk):
		if self.con==-987654321:
			self.con=vstk.pop()
			self.con=str(self.con)
		
		if self.con in self.case:
			if self.case[self.con].update(vstk):
				self.con=-987654321
				return True
			
		elif '@default' in self.case:
			if self.case['@default'].update(vstk):
				self.con=-987654321
				return True
				
		return False
		
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
		
	def update(self,vstk):
		return self.cmdlist.update(vstk)
		
	def execute(self,vstk):
		self.cmdlist.execute(vstk)
		
	def parse(self,ctx):
		self.cmdlist=CommandList()
		self.cmdlist.parse(ctx)
'''
class UserCommand(Interpreter):
	def __init__(self,name):
		self.name=name
		
	def execute(self,vstk):
		print 'exe',self.name
'''
class PushCommand(Interpreter):
	def __init__(self,value):
		self.value=value
		
	def update(self,vstk):
		vstk.append(self.value)
		return True
		
	def execute(self,vstk):
		vstk.append(self.value)
		pass
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
		

class Context:
	def __init__(self,filename):
		self.file=open(filename)
		
	def readline(self):
		return self.file.readline()
		
	def createUserCommand(self,cmdstr):
		return 0
		
	def close(self):
		self.file.close()
		
if __name__=='__main__':
	filename='stage1.stage.scpt'
	#scpt=open(filename)
	
	ctx=Context(filename)
	
	prop=Property()
	prop.parse(ctx)
		
	trigger=Program()
	trigger.parse(ctx)
	
	vstk=[]
	
	trigger.update(vstk)
	ctx.close()
	
	