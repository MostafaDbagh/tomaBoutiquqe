const http = require('http');
const app= require('./app')

const port = process.env.PORT || 4060;
const server = http.createServer(app);


if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

server.listen(port ,()=>console.log('we arr listening to the port '+port))

