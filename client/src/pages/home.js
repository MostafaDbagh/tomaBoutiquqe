
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";
import  verified from '../assests/images/verified.svg'
import './style.css'
const Home = ({search,setSearch}) => {
    return ( 
        <div>
            <div className="background d-flex flex-column align-items-cetner justify-content-center">
                <h3 className="px-5 pt-5 pb-3" style={{color:'#fff',fontSize:'56px',fontFamily:'oswald'}}> TOMA BOUTIQUE</h3>
                <p className="px-5 py-2" style={{color:'#fff',fontSize:'28px',fontFamily:'oswald'}}>Online Shopping Store  Brands that's we Aim to bring UAE To Syria 
                <p className="pt-2">  Makeup <span className="sperator">|</span> Perfumes <span className="sperator">|</span> Cosmatics and More.</p></p>

                

         <div className="mt-5 d-flex px-5  flex-column" style={{fontFamily:'lato',color:'white'}}>
         <p className="px-4 py-1" style={{fontWeight:'bold',fontSize:'28px',fontFamily:'oswald'}}>How to make your first Order : </p>
          
             <p style={{fontSize:'22px'}} className="px-3 "><span ><img  style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Make your online shopping </p>
             <p  style={{fontSize:'22px'}}className="px-3 "><span><img style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Select your items </p>
             <p  style={{fontSize:'22px'}}className="px-3 "><span><img style={{marginRight:'8px'}} src={verified} alt='toma-boutique' width={48} height={48}/></span>Place your order</p>
             </div>

             </div>

             <Search setSearch={setSearch}/>

<ProductContainer search={search}setSearch={setSearch}/>
<Subscribe/>

        </div>
     );
}
 
export default Home;