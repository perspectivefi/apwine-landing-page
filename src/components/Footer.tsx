import React from "react"

import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaMediumM,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => (
  <div className="flex flex-col">
    <div className="flex flex-row items-center justify-between w-full max-w-xs mx-auto text-primary-200">
      <a
        href="https://github.com/APWine"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-primary-100"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/APWineFinance"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-primary-100"
      >
        <FaTwitter />
      </a>
      <a
        href="https://apwine.medium.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-primary-100"
      >
        <FaMediumM />
      </a>
      <a
        href="https://t.me/APWineFinance"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-primary-100"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://discord.gg/AxbH7sE6sc"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-primary-100"
      >
        <FaDiscord />
      </a>
    </div>
    <div className="flex flex-col items-center mx-auto mt-24 space-y-4 text-xs text-primary-100">
      <a
        href="https://angel.co/company/apwine/jobs"
        target="_blank"
        className="px-8 py-2.5 text-center text-white transition duration-300 border-2 border-primary-200 rounded-xl md:block hover:text-white hover:bg-primary-200"
      >
        We're hiring ✨
      </a>
      <span>© APWine, 2021. All rights reserved.</span>
    </div>
  </div>
)

export default Footer
