import React from 'react';  
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "./navbar.css";
class navbar extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand" className='logoimg logo'></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Portfolio
      </NavItem>
      <NavItem eventKey={2} href="#">
        Contact Info
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default navbar;