const routes = require('express').Router();
const subscrib   = require('../../controllers/subscribeController')

routes.post('/subscribe', subscrib.subscribeEmail)


module.exports =routes;
