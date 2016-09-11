module Main where
  
import Native.Main
import Task exposing (..)
import M1

port main : Task x ()
port main = 
  sequence [
    log "get /fn1",
    get "/fn1" (\req res -> 
      send "hello world" res
    ),
    
    log "get /fn2",
    get "/fn2" (\req res -> 
      send "hello world" res
    ),
    
    log "listen 8080",
    listen 8080
    
  ] `andThen` (\_ -> succeed ())

type Request = Request
type Response = Response

listen : Int -> Task x ()
listen = Native.Main.listen

get : String -> (Request -> Response -> Task x ()) -> Task x ()
get = Native.Main.get

send : String -> Response -> Task x ()
send = Native.Main.send

log : String -> Task x ()
log = Native.Main.log