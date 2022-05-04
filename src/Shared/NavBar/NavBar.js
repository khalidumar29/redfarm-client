import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../images/Logo/Red Retro Barn Farm Logo Template (1).png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const styles = {
    fontSize: "17px",
    color: "black",
    marginRight: "15px",
    textDecoration: "none",
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to={"/"}>
          <img src={logo} alt='' />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <CustomLink style={styles} to='/home'>
              Home
            </CustomLink>
            <CustomLink style={styles} to='/inventory'>
              Inventory
            </CustomLink>
            <CustomLink style={styles} to='/blogs'>
              Blogs
            </CustomLink>
            <CustomLink style={styles} to='/about'>
              About
            </CustomLink>
            <CustomLink style={styles} to='/login'>
              Login
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
