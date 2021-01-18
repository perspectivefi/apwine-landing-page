import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo_text.svg"

const Header = () => (
    <div className="flex flex-row px-10 py-10 justify-between">
        <div className="flex flex-row items-center">
            <img src={logo} alt="logo" className="h-8" />
        </div>
        <div className="flex flex-row items-center space-x-12 text-sm">
            <Link to="/" className="text-white">About</Link>
            <a href="https://gov.apwine.fi" target="_blank" rel="noopener referrer" className="text-white">Forum</a>
            { /* <Link href="/blog" className="text-white">Blog</a> */ }
            <Link to="/faq" className="text-white">FAQ</Link>
            <a href="https://docs.apwine.fi" target="_blank" rel="noopener referrer" className="text-white">Documentation</a>
            <a href="https://alpha.apwine.fi" target="_blank" rel="noopener referrer" className="text-white px-4 py-2 border-2 border-primary-200 rounded-xl">Enter Alpha</a>
        </div>
    </div>
)

export default Header