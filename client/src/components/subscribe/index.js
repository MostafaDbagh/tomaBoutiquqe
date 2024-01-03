
import { useState } from 'react';
import './index.css'

const Subscribe = () => {


    const [subscribeEmail,setSubscribeEmail] = useState('')
    return ( 

        <div style={{width:'98%',minHeight:'200px',borderRadius:'24px',
        backgroundColor: "#e84393",
        backgroundImage: "linear-gradient(315deg, #e84393 0%, #000000 74%)",
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        margin:'0 auto'

        
        }}>
            <h3 style={{fontFamily:'oswald',fontSize:'36px',padding:'12px',margin:'32px auto'}}>SUBSCRIBE TO NEWSLETTER</h3>
            <div className='d-flex justify-content-cetner align-items-center px-3 py-1'>
                <input className='subscribeInput' onChange={(e)=>setSubscribeEmail(e.target.value)} type="text" placeholder="Type your Email Address" id="emailAddressSubscribe" />
                <button className='subscribeButton' onClick={()=>console.log('hi')}>Subscribe</button>
            </div>
            <p style={{fontFamily:'oswald',padding:'12px',fontSize:'18px'}}>We gonna send you Email once a month</p>
        </div>
     );
}
 
export default Subscribe;