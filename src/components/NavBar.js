import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return <Navbar bg="danger" variant="light" expand="md" fixed="top">
    <Container>
    <Navbar.Brand className={styles.NavBar}>Metalhub</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link className={styles.NavLink}><i className='fas fa-home'></i> Home</Nav.Link>
      <Nav.Link className={styles.NavLink}><i className='fas fa-sign-in-alt'></i>  Sign Up</Nav.Link>
      <Nav.Link className={styles.NavLink}><i className='fas fa-user-plus'></i>Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
};

export default NavBar