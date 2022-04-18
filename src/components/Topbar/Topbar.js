import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import gym from '../../images/gym-.jpg';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  }
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >
          <Link to='/'>
            <img style={{ width: '70px' }} src={gym} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</CustomLink>
            <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/services">Services</CustomLink>
            {
              user ?
                <button style={{ fontSize: '16px' }} className='btn btn-dark fw-bold' onClick={handleLogOut}>LogOut</button>
                :
                <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/login">Login</CustomLink>
            }
            {
              !user &&
              (<li className="nav-item">
                <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/register">Register</CustomLink>
              </li>)
            }
            <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/about">About</CustomLink>
            <CustomLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/blogs">Blogs</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Topbar;