import * as React from "react"
import { Link } from "gatsby"

import Tw from "../images/socials/tw.svg"
import Github from "../images/socials/github.svg"
import Discord from "../images/socials/discord.svg"
import Telegram from "../images/socials/telegram.svg"
import Medium from "../images/socials/medium.svg"

import "../styles/partials/socials.scss"

const Socials = () => (
  <div className="socials-link-wg">
    <Link to="https://twitter.com/APWineFinance" className="social-link">
      <Tw />
    </Link>
    <Link to="https://github.com/APWine" className="social-link">
      <Github />
    </Link>
    <Link to="https://discord.com/invite/GJhRf3r3UU" className="social-link">
      <Discord />
    </Link>
    <Link to="https://t.co/3F6Xi6dLvt" className="social-link">
      <Telegram />
    </Link>
    <Link to="https://medium.com/apwine" className="social-link">
      <Medium />
    </Link>
  </div>
)

export default Socials
