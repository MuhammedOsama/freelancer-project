import React, { Component } from 'react'

class Header extends Component {
    render () {
    return (
        <div id="header" className="container">
            <div className="jobs">
                <img src="/images/header/logo.svg" alt="Freelancer"/>
                <a href="/">How It Works</a>
                <a href="/">Browse Jobs</a>
            </div>
            <div className="contact">
                <a href="/">Log In</a>
                <a href="/">Sign Up</a>
                <button>Post a Project</button>
            </div>
        </div>
    );
  }
}

export default Header;