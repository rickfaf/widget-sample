const http = require("http")
const fs = require('fs')

http.createServer((req, res) => {

  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end(JSON.stringify(err))
      return
    }
    res.writeHead(200)
    res.end(data)
  })

}).listen(4400)


console.log("Server Running on PORT: 4400")
