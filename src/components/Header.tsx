import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo_text.svg"

const Header = () => (
  <div className="flex flex-col justify-between px-6 py-8 space-y-8 md:space-y-0 md:flex-row md:px-10 md:py-10">
    <div className="flex flex-row items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="h-8 transition duration-300 transform hover:scale-105"
        />
      </Link>
      <a
        href="https://app.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="px-4 py-2 text-sm text-white transition duration-300 border-2 border-primary-200 rounded-xl md:hidden hover:text-white hover:bg-primary-200"
      >
        Enter Beta
      </a>
    </div>
    <div className="flex flex-row items-center justify-around text-sm sm:space-x-12 sm:mx-auto md:mx-0">
      <Link
        to="/"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        About
      </Link>
      <a
        href="https://gov.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Forum
      </a>
      {/* <Link href="/blog" className="text-white">Blog</a> */}
      <Link
        to="/faq"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        FAQ
      </Link>
      <a
        href="https://docs.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Documentation
      </a>
      <a
        href="https://angel.co/company/apwine/jobs"
        target="_blank"
        rel="noopener referrer"
        className="text-white transition duration-300 hover:text-primary-200"
      >
        Careers
      </a>
      <a
        href="https://app.apwine.fi"
        target="_blank"
        rel="noopener referrer"
        className="hidden px-4 py-2 text-white transition duration-300 border-2 border-primary-200 rounded-xl md:block hover:text-white hover:bg-primary-200"
      >
        Enter Beta
      </a>
    </div>
  </div>
)

export default Header
