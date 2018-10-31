import React, {Component} from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="logo" href="/"><span className="begin-logo">by</span><span className="end-logo">pert</span></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={1} title="Learn More" id="basic-nav-dropdown">
                <MenuItem href="/about" className="menuitem" eventKey={1.1}>How Bypert Works</MenuItem>
                <MenuItem href="/cities" className="menuitem" eventKey={1.2}>Current Markets</MenuItem>
                <MenuItem divider />
                <MenuItem href="/trust" className="menuitem" eventKey={1.3}>Trust & Security</MenuItem>
                <MenuItem href="/contact" className="menuitem" eventKey={1.3}>Contact Support</MenuItem>
              </NavDropdown>
              {this.props.authenticated
                ? (<Nav pullRight>
                    <NavItem eventKey={2} href="/profile">Profile</NavItem>
                    <NavItem eventKey={2} href="/logout">Signout</NavItem>
                  </Nav>)
                : (<Nav pullRight>
                    <NavItem eventKey={2} href="/login">Login</NavItem>
                    <NavItem eventKey={3} href="/signup">Signup</NavItem>
                  </Nav>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
