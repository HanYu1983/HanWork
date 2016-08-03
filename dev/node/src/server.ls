require! {
  express: Express
  open
}

startExpress = (cb)->
  app = new Express
    ..use "/", Express.static("../www")
    ..listen do
      8080
      ->
        console.log("開啟伺服器在localhost:8080")
        cb!

openBrowser = ->
  open do
    "http://localhost:8080/bw/index.html"
    (err)->
      if err
        console.log err
      else
        console.log "自動打開browser"

main = ->
  startExpress openBrowser
  
main!
