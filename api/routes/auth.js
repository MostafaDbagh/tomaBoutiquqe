const routes = require('express').Router();
const authController = require("../../controllers/authController");

routes.post('/login',authController.login)
routes.post('/register',authController.register)
routes.post('/reset-password',authController.resetPassword)
routes.post('/verify-otp',authController.verifyOtp)
routes.post('/verify-reset-password',authController.verifyAndResetPassword)




module.exports = routes