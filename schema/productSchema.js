const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: { type: Number, required: true },
  product_admin: { type: String, required: true },
  product_name: { type: String, required: true },
  product_type: { type: String, required: true },
  product_price: { type: String, required: true },
  product_image: { type: String, required: true },
  product_old_price: { type: String, required: false },
  product_Size: { type: Array, required: false },
  product_Color: { type: Array, required: false },
  product_description:{type:String,required:true},
  product_seen:{type:String,required:true},
  product_category:{ type: String, required: true },
  product_quantity:{type:Number,required: true },
  product_stock:{type:Number,required:false}

});

module.exports = mongoose.model("products", ProductSchema);
