# -*- coding: utf-8 -*-
from PyQt4.QtGui import *
from hanlib.frame import *

def simple(level):
	app=QApplication([])
	frame=Frame()
	frame.pushLevel(level)
	app.exec_()