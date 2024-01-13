
import ProductContainer from "../components/ourProduct/porductContainer";
import Subscribe from "../components/subscribe";
import { Search } from "../components/search";

const Home = ({search,setSearch}) => {
    return ( 
        <div>
            <Search setSearch={setSearch}/>
<ProductContainer search={search}setSearch={setSearch}/>
<Subscribe/>

        </div>
     );
}
 
export default Home;