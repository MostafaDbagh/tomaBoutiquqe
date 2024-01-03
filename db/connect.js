const mongoose = require('mongoose');

mongoURI='mongodb+srv://safi:35064612@cluster0-ags3s.mongodb.net/ecommerce?retryWrites=true&w=majority';

mongoose.connect('mongodb://127.0.0.1:27017/productDb',{useNewUrlParser:true,useUnifiedTopology: true})
const conn = mongoose.connection;

conn.on('connected',()=>{
    console.log('you are connecting to database') 
})
conn.on('error',(err)=>{
    console.log('connection failed to database',err.message)
})

module.exports = conn