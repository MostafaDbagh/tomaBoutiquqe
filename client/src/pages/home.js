
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";
import  verified from '../assests/images/verified.svg'
import Header from "../components/header";
import './style.css'



const Home = ({search,setSearch}) => {
    return ( 
        <div>

        <div className="background" >
            <div className=" d-flex flex-column align-items-cetner justify-content-end " style={{minHeight:'100vh',padding:'96px 0  64px',width:'100%'}} >
                <h3 className="px-5   flexFontHeader" style={{color:'#fff',fontFamily:'Rubik Mono One,sans-serif',marginTop:'72px'}}> let's <br/> Explore <br/> <span style={{color:'#E80f88'}}>TOMA</span> <br/>BOUTIQUE</h3>
                <div className="flexFontDesc">
                <p className=" py-2 " style={{color:'#fff',fontFamily:'oswald',paddingLeft:'18px',width:'60%'}}>
                    Experience the Luxury of UAE Brands, Now in Syria. TOMA BOUTIQUE Delivers the Latest Trends Straight to Your Doorstep.
                      with Exclusive Offerings.</p>
                      <button style={{background:'#E80f88',marginLeft:'16px',fontFamily:'oswald',minWidth:'135px'}}>Shop Now</button>
                </div>

                


             </div>
</div>
             <Search setSearch={setSearch}/>

<ProductContainer search={search}setSearch={setSearch}/>
<Subscribe/>
</div>

     );
}
 
export default Home;