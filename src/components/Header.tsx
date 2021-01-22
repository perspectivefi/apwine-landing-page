import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo_text.svg"

const Header = () => (
    <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row px-6 md:px-10 py-8 md:py-10 justify-between">
        <div className="flex flex-row items-center justify-between">
            <img src={logo} alt="logo" className="h-8" />
            <a href="https://alpha.apwine.fi" target="_blank" rel="noopener referrer" className="text-white px-4 py-2 border-2 border-primary-200 rounded-xl md:hidden">Enter Alpha</a>
        </div>
        <div className="flex flex-row items-center sm:space-x-12 text-sm justify-around sm:mx-auto md:mx-0">
            <Link to="/" className="text-white hover:text-primary-200 transition duration-300">About</Link>
            <a href="https://gov.apwine.fi" target="_blank" rel="noopener referrer" className="text-white hover:text-primary-200 transition duration-300">Forum</a>
            { /* <Link href="/blog" className="text-white">Blog</a> */ }
            <Link to="/faq" className="text-white hover:text-primary-200 transition duration-300">FAQ</Link>
            <a href="https://docs.apwine.fi" target="_blank" rel="noopener referrer" className="text-white hover:text-primary-200 transition duration-300">Documentation</a>
            <a href="https://alpha.apwine.fi" target="_blank" rel="noopener referrer" className="text-white px-4 py-2 border-2 border-primary-200 rounded-xl hidden md:block">Enter Alpha</a>
        </div>
    </div>
)

export default Header