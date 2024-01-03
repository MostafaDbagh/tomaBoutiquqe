const http = require('http');
const app= require('./app')

const port = process.env.PORT || 4060;
const server = http.createServer(app);

server.listen(port ,()=>console.log('we arr listening to the port '+port))

