import React from "react"

import logo from "../images/logo_text.svg"

const Header = () => (
    <div className="flex flex-row px-10 py-10 justify-between">
        <div className="flex flex-row items-center">
            <img src={logo} alt="logo" className="h-8" />
        </div>
        <div className="flex flex-row items-center space-x-12 text-sm">
            <a href="" className="text-white">About</a>
            <a href="" className="text-white">Forum</a>
            <a href="" className="text-white">Blog</a>
            <a href="" className="text-white">FAQ</a>
            <a href="" className="text-white">Documentation</a>
            <a href="" className="text-white px-4 py-2 border-2 border-primary rounded-xl">Enter App</a>
        </div>
    </div>
)

export default Header