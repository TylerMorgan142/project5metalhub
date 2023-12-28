import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import axios from 'axios';
import styles from '../styles/NavBar.module.css';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../contexts/CurrentUserContext';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink to="/signup" className={styles.NavLink}>
        <i className="fas fa-sign-in-alt"></i> Sign Up
      </NavLink>
      <NavLink to="/signin" className={styles.NavLink}>
        <i className="fas fa-user-plus"></i> Sign In
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.Background} variant="light" expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.NavBar}>Metalhub</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          aria-controls="navbar-collapse"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbar-collapse" className={styles.NavCollapse} in={expanded}>
          <Nav className="ml-auto">
            {currentUser && addPostIcon}
            <NavLink to="/" className={styles.NavLink}>
              <i className="fas fa-home"></i> Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
