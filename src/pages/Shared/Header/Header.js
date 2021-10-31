import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import { GiTigerHead} from "react-icons/gi";


import './Header.css';
import useContextbase from '../../hooks/useContextBase';

const Header = () => {
  const{user,logOut}=useContextbase();
    return (
        <div>
            <Navbar className="navbar" bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="brand fw-bold" href="/home#home"> <span className="icon"><GiTigerHead/> </span> Mind Fresher</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    <Nav.Link className="link" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="link" as={HashLink} to="/home#services">Packages</Nav.Link>
      <Nav.Link className="link" as={Link} to="/offers">Offers</Nav.Link>
      

      {
          user.email? <Nav.Link className="link" as={Link} to="/mybookings">My Bookings</Nav.Link>
          :
          <Navbar.Text></Navbar.Text>
      }

      {
        user.email? <Nav.Link className="link" as={Link} to="/manageall">All Bookings</Nav.Link>
        :
        <Navbar.Text></Navbar.Text>
      }
      {
        user.email? <Nav.Link className="link" as={Link} to="/addpackage">Add Packages</Nav.Link>
        :
        <Navbar.Text></Navbar.Text>
      }
      



      <Nav.Link className="link" as={Link} to="/about">About Us</Nav.Link>

{
  user.email? <button onClick={logOut} className="btn btn-dark">Log Out</button>
  :
<Nav.Link className="btn" as={Link}to="/login">Login</Nav.Link>
}
      
      
      {
        user.email? <Navbar.Text>
        {user.displayName}
        
        <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
        
      </Navbar.Text>
       
      :
      <Navbar.Text>
        
      </Navbar.Text>
      }
      
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;