const http = require('http')
const fs = require('fs')
const index = fs.readFileSync('template/index.html')

http.createServer((req, res) => {
  res.write(index)
}).listen(8000)
console.log('listening on port 8000')
