import React from 'react'
import './mycard.css'
const Mycard = () => {
    return (
<div className='mycard'>
<div style={{width:'96%',height:'200px',background:'#3e3e3e',borderRadius:'24px',margin:'0 auto'}}>
<img src={""} alt='toma-botique'  width="270px" height='300px'/>
</div>
<div className='px-3 py-2 mt-2' style={{color:'#000'}}>
    <p className='m-0'>Product Details Material: PU Trendy luggage style: small square bag Popular elements: rhombus Lining texture: PU Bag...</p>
</div>
<div className="d-flex align-items-center py-2 mb-3 mt-1 px-3 "style={{fontFamily:'alto,sans-serif'}}>
            <p style={{ color: "#E10600" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              <s>213.00</s>{" "}
            </p>
            <p style={{ marginLeft: "8px",color:'#000' }} className="m-0">
              <span className="mx-1">Dhs.</span>
              21
            </p>
          </div>
          {false && (
            <div>
              <p>Color :</p>
            </div>
          )}
               <div className="my-2" style={{fontFamily:'alto,sans-serif'}}>
            <button className="chooseOption d-flex justify-content-center align-items-center bg-0 " style={{background:"transperent"}}>Choose Option 
            </button>
          </div>
        </div>
    )
}

export default Mycard