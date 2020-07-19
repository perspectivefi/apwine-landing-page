import React from "react"

import { Link } from "gatsby"

import logo from "../images/logo_small.png"

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center py-8 bg-blue-500">

            <Link to="/"><img src={logo} className="w-16 h-16" /></Link>

        </header>
    )
}

export default Header
