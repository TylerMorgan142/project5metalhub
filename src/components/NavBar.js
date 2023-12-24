import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return <Navbar bg="dark" variant="dark" expand="md" fixed="top">
    <Container>
    <Navbar.Brand>Metalhub</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
      <Nav.Link><i className='fas fa-sign-in-alt'></i>Sign Up</Nav.Link>
      <Nav.Link><i className='fas fa-user-plus'></i>Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
};

export default NavBar