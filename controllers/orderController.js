const orderSchema = require("../schema/order");

const getOrders = async (req, res) => {
  await orderSchema
    .find({})
    .then((data) => {
      res.status(200).json({
        data,
        message: "data fetch successfully",
      });
    })
    .catch((err) => {
      res.status(404).json({
        err,
        message: "data not found",
      });
    });
};

const makeOrder = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No message was sent",
    });
  }

  const order = new orderSchema(body);

  if (!order) {
    return res.status(400).json({ success: false, error: err });
  }

  await order.save().then(() => {
    return res.status(201).json({
      success: true,
      id: order._id,
    });
  });
};

const FilterOrder = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    const searchResult = await orderSchema.find({
      _name: new RegExp(searchQuery, "i"),
    });
    res.json({
      results: searchResult,
      message: "data fetched successfully",
      count: searchResult.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message, message: "error fetch" });
  }
};

const getLastOrderId = async (req,res) => {
  const lastOrder = await orderSchema.find();
  try {
    if(lastOrder.length == 0 ){
        res
        .status(200)
        .json({
          data: 1 ,
          message: "data fetched successfully",
        });
    }else{
        res
        .status(200)
        .json({
          data: lastOrder[lastOrder.length - 1]["order_id"] ,
          message: "data fetched successfully",
        });
    }

  } catch (err) {
    res.status(500).json({ error: err.message, message: "error fetch" });
  }
};

const updateOrder = async(req,res) =>{
const { id } = req.params;
const body = req.body;
try{
    const currentOrder = await orderSchema.findOneAndUpdate(
        { order_id: id }, // Match criteria based on _id
        { $set: body }, // Data to update
        { returnOriginal: false } // Return the updated document
      );
      res.json({data:currentOrder,message:'order updated successfullu'})
}catch(error){
res.json({error,message:'no data to show'})
}


}

module.exports = {
  getOrders,
  makeOrder,
  getLastOrderId,
  updateOrder
};
