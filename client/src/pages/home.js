
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";
import  verified from '../assests/images/verified.svg'
import Header from "../components/header";
import './style.css'
const Home = ({search,setSearch}) => {
    return ( 
        <div className="" >
                 <Header  />
            <div className="background d-flex flex-column align-items-cetner justify-content-end bg-dark" style={{minHeight:'800px',padding:'64px 0 0px'}} >
                <h3 className="px-5 pt-5 pb-3 flexFontHeader" style={{color:'#fff',fontFamily:'oswald'}}> TOMA BOUTIQUE</h3>
                <div className="flexFontDesc">
                <p className=" py-2 " style={{color:'#fff',fontFamily:'oswald',paddingLeft:'18px'}}>Online Shopping Store  Brands that's we Aim to bring UAE To Syria .
                <p className="pt-2">  Makeup <span className="sperator">|</span> Perfumes <span className="sperator">|</span> Cosmatics and More.</p></p>
                </div>

                

         <div className="mt-5 d-flex  flex-column pb-5" style={{color:'white'}}>
         <p className="px-5 py-1" style={{fontWeight:'bold',fontSize:'28px',fontFamily:'montserrat'}}>How to make your first Order</p>
          
             <p style={{fontSize:'22px',fontFamily:'montserrat',paddingLeft:'2.5rem'}} ><span ><img  style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Make your online shopping </p>
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