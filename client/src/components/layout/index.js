import React, { useState } from 'react';
import Header from '../header';
import  Footer  from '../footer';
import MyModal from '../modal/pickedProducts';
import { Search } from '../search';
import { ToastContainer } from 'react-bootstrap';
const Layout = ({children,setSearch,showModalProduct,setShowProductModal}) => {
    return (
        <>
        <Header setShowPorductsModal={setShowProductModal} showModalProduct={showModalProduct}   />
          <MyModal showProductsModal={showModalProduct} setShowPorductsModal={setShowProductModal}/>
            {children}
            <Footer />
        </>

    );
}

export default Layout;