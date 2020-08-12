import React from "react"

import { Link } from "gatsby"

import logo from "../images/logo_small.png"

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center py-8 bg-blue-500">

            <Link to="/" className="flex flex-col items-center justify-center">
                <img src={logo} className="w-16 h-16 mb-2" alt="" />
                <span className="font-black text-white">Upstreamer</span>
            </Link>

        </header>
    )
}

export default Header
