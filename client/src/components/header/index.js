import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import basket from '../../assests/images/basket.svg'
import wishlist from '../../assests/images/wishlist.svg'

import { useSelector } from 'react-redux';
import './index.css'

function Header({setShowPorductsModal,showModalProduct}) {
  const product = useSelector((state) => state.product);

  const productNuber =  () =>{
    return product.reduce((acc,curr) => acc + curr.quantity,0)
  }

  return (
    <Navbar collapseOnSelect expand="lg"
     style={{
    minHeight:'70px',
     width:'90%',
     margin:'4px auto',
     borderRadius:'48px',
     color:'white',
     background: 'linear-gradient(to right, #fbc2eb 0%, pink 61%, #fbc2eb 100%)',
     position:'fixed',
     left:'5%',
     top:'3%',
     border: '1px solid rgba(255, 255, 255, 0.2)',
     backdropFilter:' blur(10px)',
     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
     zIndex:'1000',



    }} >

      <Container className='px-5 py-0'>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'18px'}}>
            <Nav.Link href="/" className='px-4'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Makeup</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Accessories</Nav.Link>
            <Nav.Link href="#pricing"className='px-4'>Perfumes</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Hair-Care</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Cosmetics</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Sunstiblity</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link  eventKey={2} href="#memes" style={{position:'relative'}} onClick={()=>setShowPorductsModal(true)}>
         <img src={basket} alt='ecomerce-website' width={30} height={30}  />
         <span style={{position:'absolute',width:"24px",height:'24px',background:'#E80f88',borderRadius:'50%',textAlign:'center',top:'-5px',color:'white'}}> {productNuber()}</span>
            </Nav.Link>

            <Nav.Link className='last-item' eventKey={2} href="#memes" style={{position:'relative',marginLeft:'8px'}} onClick={()=>setShowPorductsModal(true)}>
             <img src={wishlist} alt='ecomerce-website' width={30} height={30}  />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;