import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../images/Logo/Red Retro Barn Farm Logo Template (1).png";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const styles = {
    fontSize: "17px",
    color: "black",
    marginRight: "15px",
    textDecoration: "none",
  };
  const [user] = useAuthState(auth);
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
            {user ? (
              <>
                <CustomLink style={styles} to='/inventory'>
                  Inventory
                </CustomLink>
              </>
            ) : (
              <></>
            )}
            {user ? (
              <>
                <CustomLink style={styles} to='/myitems'>
                  My Items
                </CustomLink>
              </>
            ) : (
              <></>
            )}
            {user ? (
              <>
                <CustomLink style={styles} to='/manageinventories'>
                  Manage Inventories
                </CustomLink>
              </>
            ) : (
              <></>
            )}
            <CustomLink style={styles} to='/blogs'>
              Blogs
            </CustomLink>
            <CustomLink style={styles} to='/about'>
              About
            </CustomLink>
            {user ? (
              <>
                <CustomLink style={styles} onClick={() => signOut(auth)} to='/'>
                  Log Out
                </CustomLink>
              </>
            ) : (
              <>
                <CustomLink style={styles} to='/login'>
                  Log In
                </CustomLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
