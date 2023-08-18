import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './navcss.css'
import arrow from './images/icon-arrow-down.svg'








const Navv = () => {
    return ( <>
    <div className='vw-100 vh-100'>
    <div className='position-absolute top-0 back '>
    <Navbar expand='lg'>
          
          <Container  fluid>

             
                            <Navbar.Brand className='text-white' href="#home"> <h4>sunnyside</h4> </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">About</Nav.Link>
                      <Nav.Link href="#action2">Services</Nav.Link>
                      <Nav.Link href="#action1">Projects</Nav.Link>
                      <Nav.Link href="#action2">CONTACT</Nav.Link>
                      </Nav>
                      
            </Navbar.Collapse>
                
    
    
          </Container >
          
          
        </Navbar>
       
       
        <div className='text-center  '> 
        <h1 className='p-5 mt-5 fbig'> WE ARE CREATIVES</h1>
            <Image className='p-5' fluid src={arrow} />
        </div>
        
      </div>

      
   
    
    </div>

    </> );
}
 
export default Navv;