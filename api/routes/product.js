const routes = require('express').Router();
const upload = require('../storage/storage');
const {uploadFile,downloadFile} = require('../../s3')
const subscrib   = require('../../controllers/subscribeController')

const productController = require('../../controllers/productControllers');


routes.post('/add',upload.single('product_image'), productController.addProduct)
routes.get('/',productController.getProducts)
routes.get('/:id',productController.getProductById)
routes.delete('/:id',productController.deleteProduct);
 routes.put('/:id',productController.updateProduct)
routes.get('/search/:searchQuery',productController.FilterProduct)
routes.get('/mostRelated/:type',productController.getMostRelatedProducts)
routes.post('/subscribe', subscrib.subscribeEmail)
routes.post('/updateProduct/:id',productController.updateVisibilityOfProduct)








module.exports =routes;