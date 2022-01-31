import * as React from "react";
import { Link } from "gatsby";

import Tw from "../images/socials/tw.svg";
import Github from "../images/socials/github.svg";
import Discord from "../images/socials/discord.svg";
import Telegram from "../images/socials/telegram.svg";
import Medium from "../images/socials/medium.svg";

import "../styles/partials/socials.scss";

const Socials = () => (
  <div className="socials-link-wg">
    <Link to="/" className="social-link">
      <Tw />
    </Link>
    <Link to="/" className="social-link">
      <Github />
    </Link>
    <Link to="/" className="social-link">
      <Discord />
    </Link>
    <Link to="/" className="social-link">
      <Telegram />
    </Link>
    <Link to="/" className="social-link">
      <Medium />
    </Link>
  </div>
);

export default Socials;
