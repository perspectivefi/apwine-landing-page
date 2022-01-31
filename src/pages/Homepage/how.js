import * as React from "react";

import Picture from "../../images/how-ill.png";
import PictureTablet from "../../images/how-ill.png";
import PictureMobile from "../../images/how-ill.png";

import SectionBG from "../../images/pink-shadow.png";
import SectionBGTablet from "../../images/pink-shadow.png";
import SectionBGMobile from "../../images/pink-shadow.png";

import "../../styles/sections/homepage/how.scss";

const howSection = () => (
  <section className="how-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mini-heading">The how of APWine</div>
          <h2>Tokenize you yield</h2>
          <p>
            Deposit your assets on DeFi protocols. Lock your interest bearing
            tokens in APWine to tokenize your yield on your position. Manage
            your risk by trading the risk.
          </p>
          <div className="count">
            <div className="mini-heading">Tokenized yield</div>
            <div className="value">
              <span>32’647’277.88 $</span>
            </div>
          </div>
        </div>
        <div className="col">
          <picture>
            <source srcSet={Picture} media="(min-width: 1024px)" />
            <source srcSet={PictureTablet} media="(min-width: 767px)" />
            <img src={PictureMobile} alt="" />

            <div className="bg-wrap">
              <picture>
                <source srcSet={SectionBG} media="(min-width: 1024px)" />
                <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
                <img src={SectionBGMobile} alt="" />
              </picture>
            </div>
          </picture>
        </div>
      </div>
    </div>
  </section>
);

export default howSection;
