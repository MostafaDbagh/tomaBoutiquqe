
import { useState } from "react";
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";

const Home = ({search,setSearch}) => {
    return ( 
        <div>
<ProductContainer search={search}setSearch={setSearch}/>
<Subscribe/>

        </div>
     );
}
 
export default Home;