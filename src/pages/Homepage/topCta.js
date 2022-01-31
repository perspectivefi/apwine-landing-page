import * as React from "react";

import "../../styles/sections/homepage/topCta.scss";

import TopCtaLogo from "../../images/top-cta-logo.png";
import SectionBG from "../../images/top-cta-bg.svg";
import SectionBGTablet from "../../images/top-cta-bg-tablet.svg";
import SectionBGMobile from "../../images/top-cta-bg-mobile.svg";

const topCtaSection = () => (
  <section className="top-cta-section">
    <div className="bg-wrap">
      <div className="desktop">
        <SectionBG />
      </div>
      <div className="tablet">
        <SectionBGTablet />
      </div>
      <div className="mobile">
        <SectionBGMobile />
      </div>
    </div>

    <div className="container">
      <div className="block">
        <div className="logo-wrap">
          <img src={TopCtaLogo} alt="" />
        </div>
        <h2>"Bug Bounty Program"</h2>
        <div className="subheading">Up to 100k$ in bug bounty!</div>
        <div className="btn-wrap">
          <a href="/" className="btn btn--secondary-border">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default topCtaSection;
