import React from "react"

import { FaGithub, FaMedium, FaMediumM, FaTelegram, FaTelegramPlane, FaTwitter } from "react-icons/fa"

const Footer = () => (
    <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between w-full max-w-xs text-primary-200 mx-auto">
            <a href="https://github.com/APWine" target="_blank" rel="noopener noreferrer" className="hover:text-primary-100 transition duration-300"><FaGithub /></a>
            <a href="https://twitter.com/APWineFinance" target="_blank" rel="noopener noreferrer" className="hover:text-primary-100 transition duration-300"><FaTwitter /></a>
            <a href="https://apwine.medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-100 transition duration-300"><FaMediumM /></a>
            <a href="https://t.me/APWineFinance" target="_blank" rel="noopener noreferrer" className="hover:text-primary-100 transition duration-300"><FaTelegramPlane /></a>
        </div>
        <div className="flex flex-row justify-between text-xs text-primary-100 mt-24">
            <span>© APWine, 2021. All rights reserved.</span>
            { /*
            TODO: add later
            <div className="flex flex-row space-x-12">
                <a href="">Legal</a>
                <a href="">Terms of Use</a>
                <a href="">Privacy Policy</a>
            </div>
            */ }
        </div>
    </div>
)

export default Footer