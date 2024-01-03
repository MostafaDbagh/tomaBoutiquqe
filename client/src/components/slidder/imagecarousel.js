import React from 'react'
import Mycard from './mycard.js'
import './imagecarousel.css'

const Imagecarousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;

    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    
    }
    return (
        <div className='mt-5'>

<p className='text-center headingText'style={{fontSize:'28px',fontFamily:'oswald',fontWeight:'bold',fontStyle:'italic'}}>Related Produucts</p>
        <div className="product-carousel my-5 d-flex justify-content-center align-items-center" >

            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <div className="product-container">
                <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' />
            </div>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

        </div>
        </div>
    )
}

export default Imagecarousel