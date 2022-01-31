import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo-w.svg";
import DesktopCurve from "../images/partials/footer/footer-curve-desktop.svg";
import TabletCurve from "../images/partials/footer/footer-curve-tablet.svg";
import MobileCurve from "../images/partials/footer/footer-curve-mobile.svg";

import "../styles/partials/footer.scss";

const Footer = () => (
  <footer className="primary-footer">
    <div className="curve-wrap">
      <div className="desktop">
        <DesktopCurve />
      </div>
      <div className="tablet">
        <TabletCurve />
      </div>
      <div className="mobile">
        <MobileCurve />
      </div>
    </div>
    <div className="container">
      <div className="row">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <nav>
          <Link to="/about">About</Link>
          <Link to="/forum">Forum</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/docs">Documentation</Link>
          <Link to="/careers">Careers</Link>
        </nav>

        <div className="copyrights">© APWine, 2021. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
