const LocationSchema = require('../schema/locations')

const path = require('path')



const postLocation = async (req,res) =>{

        const body = req.body;
         console.log(body)
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'No message was sent',
            })
        }
    
        const location = new LocationSchema({...body})
    
        if (!location) {
            return res.status(400).json({ success: false, error: err })
        }
    
       await location
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: location._id,
                })
            })
    }

    const getLocation = async (req,res) =>{

     await LocationSchema.find({})
     .then(data =>{
            res.status(200)
            .json({data,message:'data fetched successfully'})
        }).catch(err =>{
            res.status(500).json({err,message:'data not found'})
        })

    
       
    
 
    
    
    }


    



module.exports={
    postLocation,
    getLocation
}