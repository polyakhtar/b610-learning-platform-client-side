import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
const Header = () => {
  const {user}=useContext(AuthContext);
    return (
    <Navbar bg="primary" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">
     
        <Link className='text-decoration-none text-3xl text-white  m-2'>Computer Learning Course</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><Link className='text-decoration-none text-2xl text-white m-2' to='/'>Home</Link></Nav.Link>
          <Nav.Link href="#action2"><Link className='text-decoration-none text-2xl text-white m-2' to='/courses'>Courses</Link></Nav.Link>
          <Nav.Link href="#action2"><Link className='text-decoration-none text-2xl text-white m-2' to='/about'>About</Link></Nav.Link>
          <Nav.Link href="#action2"><Link className='text-decoration-none text-2xl text-white' to='/blog'>Blog</Link></Nav.Link>
         
         
        </Nav>
        <Form className="d-flex">
        <Nav.Link href="#action2"><Link className='text-decoration-none text-2xl text-white m-2' to='/login'>Log In</Link></Nav.Link>
        </Form>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;