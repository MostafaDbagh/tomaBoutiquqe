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
export const PageRoutes = () =>{
    const [search,setSearch] = useState('')
    const isAuth = useSelector(state =>state.auth.isAuthenticated)

return(
<Layout setSearch={setSearch}>
    <Routes>
   <Route exact path="/" element={<Home search={search} setSearch={setSearch}/>}/>
   <Route exact path="/product/:id" element={<ProductId/>}/>
   <Route exact path="/termsandcondition" element={<TermsAndCondition/>}/>
   <Route exact path="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
   <Route exact path="/aboutus" element={<AboutUS/>}/>
   <Route exact path="/cart" element={<Cart/>}/>
   <Route exact path="/admin" element={<AdminLogin/>}/>
   
   <Route exact path="/admin/products" element={isAuth ?<ProductsAdmin search={search}/>:<Home search={search} setSearch={setSearch}/>}/>
   <Route path="/admin/locations" element={isAuth ?<Location search={search}/>:<Home search={search} setSearch={setSearch}/>}/> 
   <Route path="/admin/addProduct" element={isAuth ?<ProductForm/>:<Home search={search} setSearch={setSearch}/>}/>
   <Route path="/admin/orders" element={isAuth?<Orders search={search}/>:<Home search={search} setSearch={setSearch}/>}/>



    </Routes>
    </Layout>

)
}