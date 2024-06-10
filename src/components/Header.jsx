import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg='dark' expand="lg" variant='dark' collapseOnSelect>
      <Container><Link to="/">
        <Navbar.Brand><span>यंत्र</span> Store</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"auto"}}>
           <LinkContainer to="/cart"><Nav.Link ><i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart</Nav.Link></LinkContainer>
            <LinkContainer to="/login"><Nav.Link><i className="fa-solid fa-user"></i>&nbsp;Sign-In</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>        
    </Navbar>
    </>
  )
}

export default Header