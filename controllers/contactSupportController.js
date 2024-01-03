const ContactSupportSchema = require('../schema/contactSupport')




const postContactSupport = async (req,res) =>{

        const body = req.body;
        
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'No message was sent',
            })
        }
    
        const contactSupport = new ContactSupportSchema({...body})
    
        if (!contactSupport) {
            return res.status(400).json({ success: false, error: err })
        }
    
       await contactSupport
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    message:'we receive your complain we will reach out to you Asap'
                    
                })
            })
    }
    



module.exports={
    postContactSupport
}