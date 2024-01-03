const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
    {
        location_id:{type:Number,required:true},
        customer_location_first_name:{type:String,required:true},
        customer_location_last_name:{type:String,required:true},
        customer_location_phone:{type:String,required:true},
        customer_location_email:{type:String,required:true},

        customer_location_country:{type:String,required:true},
        customer_location_city:{type:String,required:true},
        customer_location_district:{type:String,required:true},
        customer_location_street_address:{type:String,required:true},
    }
)

module.exports=mongoose.model('locations',LocationSchema)