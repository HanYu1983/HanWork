require! {
  express: Express
}

startExpress = ->
  app = new Express
    ..use "/", Express.static("../www")
    ..listen 8080, -> console.log("start server")

main = ->
  startExpress!
  
main!
