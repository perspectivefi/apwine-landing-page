import React from "react"
import { Link } from "gatsby"

const Footer = () => (
    <section className="flex flex-col py-12 text-center text-white bg-blue-500 items-center justify-center">
        <div className="flex-1 flex flex-row mb-2">
            <span className="font-light">made by</span>&nbsp;
            <a href="https://uly.dev" target="_blank" rel="noreferrer" className="transition duration-500 font-bold transform hover:text-black">ulydev</a>
            <span className="font-light">, illustrations by</span>&nbsp;
            <a href="https://undraw.co/" target="_blank" rel="noreferrer" className="transition duration-500 font-bold transform hover:text-black">unDraw</a>
        </div>
        <div className="flex-1 flex flex-col">
            <Link to="/privacy" className="transition duration-500 font-bold transform hover:text-black mr-0">Privacy Policy</Link>
            <Link to="/tos" className="transition duration-500 font-bold transform hover:text-black">Terms of Service</Link>
        </div>
    </section>
)

export default Footer