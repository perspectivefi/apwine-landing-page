import React from "react"

import { FaGithub, FaMedium, FaMediumM, FaTelegram, FaTelegramPlane, FaTwitter } from "react-icons/fa"

const Footer = () => (
    <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between w-full max-w-xs text-primary mx-auto">
            <FaGithub />
            <FaTwitter />
            <FaMediumM />
            <FaTelegramPlane />
        </div>
        <div className="flex flex-row justify-between text-xs text-primary-light mt-24">
            <span>© APWine, 2021. All rights reserved.</span>
            <div className="flex flex-row space-x-12">
                <a href="">Legal</a>
                <a href="">Terms of Use</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    </div>
)

export default Footer