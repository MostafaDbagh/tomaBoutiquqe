const { postLocation,getLocation } = require('../../controllers/locationController');
const routes = require('express').Router();




routes.post("/sendLocation",postLocation )
routes.get('/locations',getLocation)


module.exports=routes



