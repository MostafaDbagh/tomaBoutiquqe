const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const db =require('./db/connect')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

const locationApi = require('./api/routes/locations')
const contactSupportApi = require('./api/routes/contact')
const productApi = require('./api/routes/product')
const orderApi = require('./api/routes/orders');
const adminApi = require('./api/routes/adminLogin')
const authApi = require('./api/routes/auth')






app.use('/products',productApi);
app.use('/orders',orderApi);
app.use("/location",locationApi)
app.use('/admin',adminApi)
app.use('/user',authApi)
app.use("/",contactSupportApi)


app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.use((req,res,next)=>{
  const errorObj = {
    message:'not Found',
    status:404
  }
    next(errorObj);
})
app.use((error,req,res,next)=>{
    res.status(error.status ||500).json({
        error:{
            message:error.message
        }
    })
})


module.exports=app
