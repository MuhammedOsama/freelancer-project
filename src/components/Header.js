import React, {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
    return(
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg">
                <img src="/images/logo.svg" alt="Logo"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-links">
                        <Nav.Link className="nav-works-btn" href="#">How It Works</Nav.Link>
                        <Nav.Link className="jobs" href="#">Browse Jobs</Nav.Link>
                    </Nav>
                    <Nav className="links">
                        <Nav.Link className="login" href="#">Log In</Nav.Link>
                        <Nav.Link className="signup" href="#">Sign Up</Nav.Link>
                        <button value="submit">Post a Project</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
}

export default Header;