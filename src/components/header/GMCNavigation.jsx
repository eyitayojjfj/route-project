
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

const GMCNavigation = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">GMC-Stores</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Products</Nav.Link>
          <Nav.Link href="/service">Services</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>

          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="add-product">AddProduct</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Download
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Class</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Free Consult
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="contain">
          <Nav.Link className='pass' href="/signin">Sign In</Nav.Link>
         <span><Nav.Link className='remote' href="/signup">Sign Up</Nav.Link></span>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  
  </div>
  )
}

export default GMCNavigation