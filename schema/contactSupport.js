const mongoose = require('mongoose');

const ContactSupport = new mongoose.Schema(
    {
        customer_name:{type:String,required:true},
        customer_phone:{type:String,required:true},
        customer_email:{type:String,required:true},
        customer_message:{type:String,required:true},

  
    }
)

module.exports=mongoose.model('contactSupport',ContactSupport)