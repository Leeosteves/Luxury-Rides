import React from "react";
import "~/components/Footer/styles.sass";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <span className="footer-copyright-name">Luxury Rides</span>
        <span>© 2023 Copyright, Inc</span>
      </div>
      <nav className="footer-nav">
        <ul>
          <a href="">About</a>
          <a href="">Licenses</a>
          <a href="">Privacy Policy</a>
          <a href="">Programs</a>
        </ul>
      </nav>
      <ul className="footer-social">
        <a className="twitter" href="twitter">
          <i className="bi bi-twitter" />
        </a>
        <a className="instagram" href="instagram">
          <i className="bi bi-instagram" />
        </a>
        <a className="facebook" href="facebook">
          <i className="bi bi-facebook" />
        </a>
      </ul>
    </footer>
  );
};
