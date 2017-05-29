import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import WrapperClass from './WrapperClass';
import LogoClass from './LogoClass';
import HeaderClass from './HeaderClass';
import HeaderLink from './HeaderLink';
import Logo from './logo.png';
import NavBar from './NavBar';
import Ul from './Ul';
import ListItem from './ListItem';
import messages from './messages';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Navbar className="custom-navbar" collapseOnSelect style={{backgroundColor: 'rgba(46,50,53,0.9)'}}>
    <Navbar.Header>
      <div className="logo">
        <Link to="/">
          <Img src={Logo} alt="GlobalCoinDex"/>
        </Link>
      </div>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight className="nav-bar-items">
        <LinkContainer to={{ pathname: '/' }}>
          <NavItem eventKey={1}>
          Home
        </NavItem>
        </LinkContainer>

        <LinkContainer to={{ pathname: '/about' }}>
      <NavItem eventKey={2}>
        About
      </NavItem>
      </LinkContainer>

      <LinkContainer to={{ pathname: '/features' }}>
      <NavItem eventKey={3}>
        Features
      </NavItem>
      </LinkContainer>

      <LinkContainer to={{ pathname: '/security' }}>
      <NavItem eventKey={4}>
        Security
      </NavItem>
      </LinkContainer>

      <LinkContainer to={{ pathname: '/marketstats' }}>
      <NavItem eventKey={5}>
        Market Statistics
      </NavItem>
      </LinkContainer>

      <LinkContainer to={{ pathname: '/changelog' }}>
      <NavItem eventKey={6}>
        Change Log
      </NavItem>
      </LinkContainer>

      <LinkContainer to={{ pathname: '/contact' }}>
      <NavItem eventKey={7}>
        Contact
      </NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );
  }
}

export default Header;
