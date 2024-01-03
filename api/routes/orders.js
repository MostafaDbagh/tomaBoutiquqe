const routes = require('express').Router();
const orderController = require("../../controllers/orderController");

routes.get('/',orderController.getOrders)
routes.get('/lastOrderId',orderController.getLastOrderId)
routes.post('/makeOrder',orderController.makeOrder)
routes.post('/updateOrder/:id',orderController.updateOrder)


module.exports = routes