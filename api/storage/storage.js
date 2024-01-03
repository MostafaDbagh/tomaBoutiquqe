

const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');




const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
});


  module.exports = upload;

