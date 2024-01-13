import React, { useState } from 'react';
import Header from '../header';
import  Footer  from '../footer';
import MyModal from '../modal/pickedProducts';
import { Search } from '../search';
import { ToastContainer } from 'react-bootstrap';
const Layout = ({children,setSearch}) => {
    const [showProductsModal,setShowPorductsModal ] = useState(false);
    return (
        <>
        <Header setShowPorductsModal={setShowPorductsModal}  />
          <MyModal showProductsModal={showProductsModal} setShowPorductsModal={setShowPorductsModal}/>
            {children}
            <Footer />
        </>

    );
}

export default Layout;