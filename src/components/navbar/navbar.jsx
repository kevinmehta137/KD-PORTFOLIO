import React from 'react';  
import {  Navbar, Nav, NavItem } from 'react-bootstrap';
import "./navbar.css";
import  {NavLink} from 'react-router-dom';
import $ from 'jquery';

class navbar extends React.Component{

    render(){
       $(window).scroll(function(){
        $('#Logo').toggleClass('scrolled', $(this).scrollTop() > 50);
       });
        return(
          
                <Navbar inverse collapseOnSelect fixedTop className="Navbar-default"  >
                  <Navbar.Header >
                    <Navbar.Brand>
                      <NavLink id="Logo" to="/" className='logoimg logo'></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav pullRight > 
                      <NavItem eventKey={1} className='navbaerback' componentClass='span' >
                        <NavLink id="port" to='/portfolio' className="A">Portfolio</NavLink>
                      </NavItem>
                   
                      <NavItem eventKey={2} className='navbaerback' componentClass='span'>
                        <NavLink to='/aboutus' className="A">Introduction</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
               ); 
      }     
}

export default navbar;