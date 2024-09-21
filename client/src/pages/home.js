
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";
import  verified from '../assests/images/verified.svg'
import Header from "../components/header";
import './style.css'
const Home = ({search,setSearch}) => {
    return ( 
        <div className="" >
            <div className="background d-flex flex-column align-items-cetner justify-content-end bg-dark" style={{minHeight:'800px',padding:'64px 0 0px'}} >
                <h3 className="px-5 pt-5  flexFontHeader" style={{color:'#fff',fontFamily:'oswald'}}> TOMA BOUTIQUE</h3>
                <div className="flexFontDesc">
                <p className=" py-2 " style={{color:'#fff',fontFamily:'oswald',paddingLeft:'18px',width:'60%'}}>
                    Experience the Luxury of UAE Brands, Now in Syria. TOMA BOUTIQUE Delivers the Latest Trends Straight to Your Doorstep.
                      with Exclusive Offerings.</p>
                </div>

                

         <div className="mt-5 d-flex  flex-column pb-5" style={{color:'white'}}>
         <p className="px-5 py-1 text-center" style={{fontWeight:'bold',fontSize:'32px',fontFamily:'oswald,sans-serif'}}>How Easy we are.</p>
          
             <p style={{fontSize:'22px',fontFamily:'montserrat',paddingLeft:'2.5rem'}} ><span ><img  style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span></p>
             <p  style={{fontSize:'22px',paddingLeft:'2.5rem'}}><span><img style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Select your items </p>
             <p  style={{fontSize:'22px',paddingLeft:'2.5rem'}}><span><img style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Place your order</p>
             </div>

             </div>

             <Search setSearch={setSearch}/>

<ProductContainer search={search}setSearch={setSearch}/>
<Subscribe/>

        </div>
     );
}
 
export default Home;