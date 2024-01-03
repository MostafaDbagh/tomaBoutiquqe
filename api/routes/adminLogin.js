const routes = require('express').Router();

const AdminController  = require('../../controllers/adminsController')

routes.post('/adminLogin', AdminController.adminLogin)


module.exports =routes;
