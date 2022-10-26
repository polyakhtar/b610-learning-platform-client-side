import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    //     <div className="navbar bg-primary text-primary-content">
    //     <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
    //     <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
    //     <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
    //     <Link className="btn btn-ghost normal-case text-xl" to='/about'>About</Link>
    //     <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
    //     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
    //   </div>
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
        <Nav.Link href="#action2"><Link className='text-decoration-none text-2xl text-white m-2' to='/register'>Register</Link></Nav.Link>
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;