import React from "react";

function Footer() {
  return (
    <footer className={"footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Maxwell Walin.
        </span>
        <a href="https://www.linkedin.com/in/maxwell-walin/" target="_blank" className="ms-3" rel="noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/maxwellwalin" target="_blank" className="mx-3" rel="noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF', margin: '0 1%' }}>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
