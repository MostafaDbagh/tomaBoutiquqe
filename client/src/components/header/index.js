import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import basket from '../../assests/images/basket.svg'
import { useSelector } from 'react-redux';
import './index.css'

function Header({setShowPorductsModal}) {
  const product = useSelector((state) => state.product);

  const productNuber =  () =>{
    return product.reduce((acc,curr) => acc + curr.quantity,0)
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={{minHeight:'90px',width:'99%',margin:'4px auto',borderRadius:'10px',color:'white',
  
    background: " #f39fdc "

   
    
    
    }} >
      
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'18px'}}>
            <Nav.Link href="/" className='px-4'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>clothes</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Toys</Nav.Link>
            <Nav.Link href="#pricing"className='px-4'>Feeding</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>SkinCare</Nav.Link>
       
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link className='last-item' eventKey={2} href="#memes" style={{position:'relative'}} onClick={()=>setShowPorductsModal(true)}>
         <img src={basket} alt='ecomerce-website' width={30} height={30}  />
         <span style={{position:'absolute',width:"24px",height:'24px',background:'#E80f88',borderRadius:'50%',textAlign:'center',top:'-5px',color:'white'}}> {productNuber()}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;