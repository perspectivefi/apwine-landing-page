import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";
import Socials from "../components/socials";
import MenuOpen from "../images/menu-open.svg";
import MenuClose from "../images/menu-close.svg";

import "../styles/partials/header.scss";

const Header = () => {
  const [scrolled, isScrolled] = useState(false);
  const [opened, isOpened] = useState(false);

  function headerTrigger() {
    if (opened) {
      isOpened(false);
    } else {
      isOpened(true);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        isScrolled(window.pageYOffset > 50)
      );
    }
  }, [scrolled]);

  return (
    <>
      <header className={`primary-header ${scrolled ? "is-scrolled" : ""}`}>
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

            <div className="btn-wrap">
              <Link to="#" className="btn btn--primary-border">
                V1 page
              </Link>
            </div>

            <div className="menu-trigger" onClick={headerTrigger}>
              <MenuOpen />
            </div>
          </div>
        </div>
      </header>

      <header className={`mobile-menu ${opened ? "active" : ""}`}>
        <div className="container">
          <div className="layout">
            <div className="top-row">
              <Link to="/" className="logo">
                <Logo />
              </Link>

              <div className="menu-close" onClick={headerTrigger}>
                <MenuClose />
              </div>
            </div>

            <nav>
              <Link to="/about">About</Link>
              <Link to="/forum">Forum</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/docs">Documentation</Link>
              <Link to="/careers">Careers</Link>
            </nav>

            <div className="bottom-row">
              <div className="btn-wrap">
                <Link to="#" className="btn btn--primary-border">
                  V1 page
                </Link>
              </div>

              <div className="socials-wrap">
                <div className="heading">Follow us</div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
