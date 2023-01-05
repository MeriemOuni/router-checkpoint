import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate , Link} from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate ()
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Films</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link onClick ={()=>navigate('/About-Us')}>AboutUs</Nav.Link>
            <Nav.Link > <Link to='/Contact-Us'> ContactUs </Link></Nav.Link>
          </Nav> 
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar