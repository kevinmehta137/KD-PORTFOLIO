import React from 'react';  
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "./navbar.css";
import { NavLink  } from 'react-router-dom';
import $ from 'jquery';
import Scrollchor from 'react-scrollchor';

class navbar extends React.Component{

    render(){
       $(window).scroll(function(){
        $('#Logo').toggleClass('scrolled', $(this).scrollTop() > 50);
       });
        return(
          
                <Navbar inverse collapseOnSelect fixedTop className=" Navbar-default" >
                  <Navbar.Header >
                    <Navbar.Brand>
                      <NavLink id="Logo" to="/" className='logoimg logo'></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav pullRight > 
                      <NavItem eventKey={1} className='navbaerback' >
                        <NavLink id="port" to='/portfolio'>Portfolio</NavLink>
                      </NavItem>
                      <NavItem eventKey={2} className='navbaerback'>
                        <NavLink to='/aboutus'>Introduction</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
               ); 
      }     
}

export default navbar;