import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/logo.png';
import 'font-awesome/css/font-awesome.min.css';

function NavBar() {

  
  return (
    <Navbar  expand="lg" className="bg-secondary py-2  parentnavbar px-4 position-fixed w-100"id="header" >
        <Navbar.Brand href="#"> 
         
           <a className="navbar-brand" href="#"><img src={logo1}
        style={{width:100}} /></a>
           
      

        </Navbar.Brand>
        <form
        className="d-none  d-md-inline-block d-lg-none form-inline  ml-md-3 my-2 my-md-0 mw-100 navbar-search ">
     
         </form>

 
        <Navbar.Toggle className="shadow-none border-0 p-3" id="newtoggle"><i className="fa fa-bars py-1 px-2 " style={{fontSize:22,color:'#000',border:'2px solid #000',borderRadius:5}}></i></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          
          
          
          
          <Nav className=" me-auto mb-2 mb-lg-0 mx-lg-auto">
            <Nav.Link href="/" className="d-inline-block text-decoration-none me-4 mx-4 cool-link">Home</Nav.Link>
                           
            <Nav.Link href="#Programes" className="d-inline-block text-decoration-none me-4 mx-4 cool-link">Programes</Nav.Link>

            <Nav.Link href="#Whyus" className="d-inline-block text-decoration-none me-4 mx-4 cool-link">Why us</Nav.Link>

            <Nav.Link href="#Plans" className="d-inline-block text-decoration-none me-4 mx-4 cool-link">Plans</Nav.Link>
         
              <Nav.Link href="#Testimonials" className="d-inline-block text-decoration-none   me-4 mx-4 cool-link">Testimonials</Nav.Link>
          </Nav>


<button className='btn bg-white px-3 py-2 rounded-0'>Join Now</button>                        
      
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavBar;