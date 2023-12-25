import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <Navbar bg="danger" variant="light" expand="md" fixed="top">
    <Container>
    <NavLink to="/">
    <Navbar.Brand className={styles.NavBar}>Metalhub</Navbar.Brand>
    </NavLink>
    <Nav className="ml-auto">
      <NavLink to="/" className={styles.NavLink}><i className='fas fa-home'></i> Home</NavLink>
      <NavLink to="/signup" className={styles.NavLink}><i className='fas fa-sign-in-alt'></i>  Sign Up</NavLink>
      <NavLink to="/signin" className={styles.NavLink}><i className='fas fa-user-plus'></i> Sign In</NavLink>
    </Nav>
    </Container>
  </Navbar>
  
};

export default NavBar