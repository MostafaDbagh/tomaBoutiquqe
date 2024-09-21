const productSchema = require("../schema/productSchema");
const { uploadFile, downloadFile } = require("../s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const addImageIntoS3 = async (file) => {
  console.log(file, "file");
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: file.originalname,
  };
  return s3.upload(uploadParams).promise();
};

const addProduct = async (req, res, next) => {
    
  const body = req.body;
  const file = req.file;
  if (!body || !file) {
    return res.status(400).json({
      success: false,
      error: "No message was sent",
    });
  }
  const resultUploadIntoS3 = await addImageIntoS3(file);
  console.log(resultUploadIntoS3, "result to s3");
  const product = new productSchema({
    ...body,
    product_image: resultUploadIntoS3.key,
  });
  if (!product) {
    return res.status(400).json({ success: false, error: err });
  }
  await product.save().then(() => {
    return res.status(201).json({
      success: true,
      id: product.product_id,
      imageUrl: product.product_image,
    });
  });
};

const addImage = async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  res.send(result?.key,'hey safi');
};

const getImage = (req, res) => {
  const key = req.params.key;
  const readStream = downloadFile(key);
  readStream.pipe(res);
};

const getProducts = async (req, res) => {
  try {
    const products = await productSchema.find({});
    const productsWithUrls = products.map((product) => {
      const imageUrl = `http://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${product.product_image}`;
      return { ...product._doc, imageUrl };
    });
    res.json({ data: productsWithUrls });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  await productSchema
    .find({ product_id: id })
    .then((data) => {
      res.status(200).json({
        data: data[0],
        message: "productId fetch successfully",
      });
    })
    .catch((err) => {
      res.status(404).json({
        err,
        message: "data not found",
      });
    });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  productSchema.findOneAndDelete({ product_id: id }, (err, data) => {
    if (err || !data) {
      res.status(404).json({
        err,
        message: "we can not find this productId",
      });
    } else {
      res.status(200).json({
        data,
        message: "productId deleted successfully",
      });
    }
  });
};

const updateProduct = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  console.log(req.body, "reqqqqq");
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  console.log(body, "body");
  await productSchema
    .findOne({ product_id: id })

    .then((product) => {
      product.product_name = body.product_name;
      product.product_price = body.product_price;
      product.product_type = body.product_type;
      product.product_admin = body.product_admin;
      product.product_old_price = body.product_old_price;
      product.product_category = body.product_category;
      product.product_description = body.product_description;
      product.product_seen = body.product_seen;
      product.product_quantity = body.product_quantity;
      product.product_Color = body.product_Color ?? product.product_Color;
      product.product_Size = body.product_Size ?? product.product_Size;
      product.product_stock = body.product_stock ?? product.product_stock;
      product.save().then(() => {
        return res.status(200).json({
          success: true,
          id: product._id,
          message: "product updated!",
        });
      });
    })
    .catch((err) => {
      return res.status(404).json({
        error: err,
        message: "user not updated!",
      });
    });
};

const getMostRelatedProducts = async (req, res) => {
  const { type } = req.params;
  console.log("type", type);
  try {
    const mostRelatedProdusts = await productSchema.find({
      product_category: type,
    });
    console.log(mostRelatedProdusts, "most Related product");
    res
      .status(200)
      .json({
        data: mostRelatedProdusts,
        message: "data fetched successfully",
        count: mostRelatedProdusts.length,
      });
  } catch (err) {
    res.status(500).json({ error: err.message, message: "error fetch" });
  }
};

const FilterProduct = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    const searchResult = await productSchema.find({
      product_name: new RegExp(searchQuery, "i"),
    });
    res.json({
      data: searchResult,
      message: "data fetched successfully",
      count: searchResult.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message, message: "error fetch" });
  }
};
const updateVisibilityOfProduct = async (req, res) => {
  const { id } = req.params;

  productSchema.findOne({ product_id: id }, (err, foundRecord) => {
    if (err) {
    } else {
      if (foundRecord) {
        foundRecord.product_visibility = !foundRecord.product_visibility;
        foundRecord.save((saveErr, updatedRecord) => {
          if (saveErr) {
            res.json({ error, message: "no data to show", success: false });
          } else {
            res.json({
              data: updatedRecord,
              message: "order visibility updated successfullu",
              success: true,
            });
          }
        });
      } else {
        res.json({ error, message: "no data to show", success: false });
      }
    }
  });
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  addImage,
  getImage,
  FilterProduct,
  getMostRelatedProducts,
  updateVisibilityOfProduct,
};
