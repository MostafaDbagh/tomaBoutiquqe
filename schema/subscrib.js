const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema(
    {
        subscribe_email:{type:String,required:true},
    }
)

module.exports=mongoose.model('subscribers',subscribeSchema)