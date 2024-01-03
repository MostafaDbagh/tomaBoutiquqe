
const subscribeSchema = require('../schema/subscrib')


const subscribeEmail = async (req,res) =>{
    const {emailAddress} = req.body;

    if(!emailAddress) {
       return res.status(404).json({ message:'no data ',data:'email is empty',success:false  })
    }
    const subscribe = new subscribeSchema({subscribe_email:emailAddress})

    await subscribe
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
        
        })
    })

 
}

module.exports = {
    subscribeEmail
}