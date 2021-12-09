import React from "react";

function Footer({ light }) {
  return (
    <footer className={"footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Maxwell Walin.
        </span>
        <a href="https://www.linkedin.com/in/maxwell-walin/" target="_blank" className="fab fa-linkedin ms-3" rel="noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF' }}></a>
        <a href="https://github.com/maxwellwalin" target="_blank" className="fab fa-github fa-2x mx-3" rel="noreferrer" style={{ textDecoration: 'none', color: '#FFFFFF', margin: '0 1%' }}></a>
      </div>
    </footer>
  );
}

export default Footer;
