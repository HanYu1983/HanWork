module Main where
import Tool
import Signal

port cmd : Signal String

actionMailbox : Signal.Mailbox String
actionMailbox = Signal.mailbox "none"

input : Signal String
input = 
  Signal.mergeMany [
    actionMailbox.signal, cmd
  ]

port model : Signal String
port model = 
  Signal.foldp (\cmd model->
    cmd
  ) "init" input