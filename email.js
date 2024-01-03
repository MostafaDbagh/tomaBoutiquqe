// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'highquickaction',
//   host:"smtp.domain.com",
//   port: "465", 
//   secure: false,
//   auth: {
//     user: 'info@highquickaction.ae',
//     pass: 'OaFn1nL1jTu9tDp'
//   }
// });

// var mailOptions = {
//   from: 'mostafadbagh52@gmail.com',
//   to: 'a.atfeh@highquickaction.ae',
//   subject: 'Sending Email using Node.js',
//   text: 'khaeld is donkey!'
// };


// const  sendEmail = async (req,res)=>{
//   await  transporter.sendMail(mailOptions, function(error, info){
//         console.log(error,info)
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//           res.send('email send')
//         }
//       });
// }


// module.exports={sendEmail}

