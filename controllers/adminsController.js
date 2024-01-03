const adminSchema = require('../schema/admins')



const adminLogin = async(req,res) =>{
   
    const {email,password} = req.body;
        console.log(email,'eamil')
    if(!email) {
        res.status(404).json({ message:'no data ToCcheck',data:'not Authorized',success:false  })
    }
    const admin = await adminSchema.findOne({admin_email:email})
    console.log(admin,'admin')
    if (!admin) {
        return res.status(404).json({ message: 'admin not found',success:false  });
      }
      const isPasswordValid =  admin.admin_password  == password;

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Incorrect password',success:false  });
      }
      res.status(200).json({ message: 'Login successful',success:true });
}


module.exports ={ adminLogin};