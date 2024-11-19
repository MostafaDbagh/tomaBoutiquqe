import { Routes,Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from "./pages/home";
import { ProductId } from "./pages/productId";
import Layout from "./components/layout";
import { TermsAndCondition } from "./pages/termsAndcondition";
import { PrivacyAndPolicy } from "./pages/privacyAndPolicy";
import { AboutUS } from "./pages/about";
import { ProductForm } from "./pages/admin/addProduct";
import ProductsAdmin from "./pages/admin/products";
import Orders from './pages/admin/orders'
import { useState } from "react";
import Cart  from "./pages/cart";
import Location from "./pages/admin/locations";
import AdminLogin from "./pages/admin/adminLogin";
import ProtectedRoute from "./utils/protectedRoutes";
import  Login from "./pages/auth/login";
import  Register  from "./pages/auth/register";
export const PageRoutes = () =>{
    const [search,setSearch] = useState('')
    const [showProductsModal,setShowPorductsModal ] = useState(false);

    const isAuth = useSelector(state =>state.auth.isAuthenticated)

return(
<Layout setSearch={setSearch} showModalProduct={showProductsModal} setShowProductModal={setShowPorductsModal}>
    <Routes>
   <Route exact path="/" element={<Home search={search} setSearch={setSearch}/>}/>
   <Route exact path="/user/login" element={<Login/>}/>
   <Route exact path="/user/register" element={<Register/>}/>
   <Route exact path="/user/wishlist" element={<></>}/>

   <Route  path="/product/:id" element={<ProductId/>}/>
   <Route  path="/termsandcondition" element={<TermsAndCondition/>}/>
   <Route  path="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
   <Route  path="/aboutus" element={<AboutUS/>}/>
   <Route  path="/cart" element={<Cart/>}/>
   <Route  path="/admin" element={<AdminLogin/>}/>
   
   <Route  path="/admin/products" element={isAuth ?<ProductsAdmin search={search}/>:<Home search={search} setSearch={setSearch}/>}/>
   <Route path="/admin/locations" element={isAuth ?<Location search={search}/>:<Home search={search} setSearch={setSearch}/>}/> 
   <Route path="/admin/addProduct" element={isAuth ?<ProductForm/>:<Home search={search} setSearch={setSearch}/>}/>
   <Route path="/admin/orders" element={isAuth?<Orders search={search}/>:<Home search={search} setSearch={setSearch}/>}/>
    </Routes>
    </Layout>

)
}