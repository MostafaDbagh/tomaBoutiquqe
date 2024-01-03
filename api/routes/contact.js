const routes = require('express').Router();
const  ContactSupportController = require('../../controllers/contactSupportController')

routes.post('/contactSupport', ContactSupportController.postContactSupport)


module.exports =routes;
