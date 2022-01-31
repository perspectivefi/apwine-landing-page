import * as React from "react";

import "../../styles/sections/homepage/defi.scss";

import SectionBG from "../../images/defi-bg.png";
import SectionBGTablet from "../../images/defi-bg.png";
import SectionBGMobile from "../../images/defi-bg-mobile.png";

const defiSection = () => (
  <section className="defi-section">
    <div className="bg-wrap">
      <picture>
        <source srcSet={SectionBG} media="(min-width: 1024px)" />
        <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
        <img src={SectionBGMobile} alt="" />
      </picture>
    </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <div className="heading">
            Leverage <span>DeFi</span> composability
          </div>
        </div>
        <div className="col">
          <p>
            Integrate tokenised yield bearing position in your protocol, using
            Future Yield Tokens or Principal Tokens as collateral.
          </p>
          <div className="btn-wrap">
            <a href="/" className="btn btn--secondary-border">
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default defiSection;
