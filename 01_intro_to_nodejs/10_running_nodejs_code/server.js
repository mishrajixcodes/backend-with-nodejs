//how to create server using nodejs.
//after creating this type localhost:3000 in browser as url;
const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req)
    res.end("Hello from Node.js server.")
})

server.listen(3000)