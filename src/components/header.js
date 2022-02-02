import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import Socials from "../components/socials"
import MenuOpen from "../images/menu-open.svg"
import MenuClose from "../images/menu-close.svg"

import "../styles/partials/header.scss"

const Header = () => {
  const [scrolled, isScrolled] = useState(false)
  const [opened, isOpened] = useState(false)

  function headerTrigger() {
    if (opened) {
      isOpened(false)
    } else {
      isOpened(true)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        isScrolled(window.pageYOffset > 50)
      )
    }
  }, [scrolled])

  return (
    <>
      <header className={`primary-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <div className="row">
            <Link to="/" className="logo">
              <Logo />
            </Link>

            <nav>
              <Link to="https://gov.apwine.fi">Forum</Link>
              <Link to="https://docs.apwine.fi">Documentation</Link>
              <Link to="https://cryptocurrencyjobs.co/startups/apwine">
                Careers
              </Link>
            </nav>

            <div className="btn-wrap">
              <Link
                to="https://app.apwine.fi"
                className="btn btn--primary-border"
              >
                Open App
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
              <Link to="https://gov.apwine.fi">Forum</Link>
              <Link to="https://docs.apwine.fi">Documentation</Link>
              <Link to="https://cryptocurrencyjobs.co/startups/apwine">
                Careers
              </Link>
            </nav>

            <div className="bottom-row">
              <div className="btn-wrap">
                <Link
                  to="https://app.apwine.fi"
                  className="btn btn--primary-border"
                >
                  Open App
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
  )
}

export default Header
