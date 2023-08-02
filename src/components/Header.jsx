import React from 'react';
import { Grid } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/cartx-logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";


export default function Header() {
  return (
    <Navbar expand="lg" style={{ padding: 0 }} >
      <Container>
        <Grid container item xs={3} sm={3} md={2} lg={2} className='nav-start-sec'>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
        </Grid>

        <Grid container item xs={3} sm={3} md={7} lg={7} className='nav-center-sec'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto navlinks">
              <Nav.Link className='active' active href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Support</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Grid>

        <Grid container item xs={12} sm={12} md={2} lg={2} className='nav-end-sec'>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Search width="50px" height="24px" sx={{ padding: "12px" }} />
              <Heart width="50px" height="24px" sx={{ padding: "12px" }} />
              <Cart width="50px" height="24px" sx={{ padding: "12px" }} />

            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Container>
    </Navbar>
  )
}
