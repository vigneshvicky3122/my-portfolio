import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <div className="content-wrapper">
          <div className="navbar-header">PORTFOLIO</div>
          <div className="navbar-headings">
            <a className="nav-link" href="#summary">
              ABOUT
            </a>
            <a className="nav-link" href="#projects">
              PROJECTS
            </a>
            <a className="nav-link" href="#skills">
              SKILLS
            </a>
            <a className="nav-link" href="#contacts">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
