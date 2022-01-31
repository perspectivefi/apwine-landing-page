import * as React from "react";
import PersonTile from "../../components/personTile";

import Team1 from "../../images/advisors/1.png";
import Team2 from "../../images/advisors/2.png";
import Team3 from "../../images/advisors/3.png";

import SectionBG from "../../images/advisors-bg.png";
import SectionBGTablet from "../../images/advisors-bg.png";
import SectionBGMobile from "../../images/advisors-bg.png";

import "../../styles/sections/homepage/advisors.scss";

const advisorsSection = () => (
  <section className="advisors-section">
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
          <PersonTile
            type=""
            personName="Jiahua Xu"
            position="EPFL, UCL"
            twitterURL="#"
            imageURL={Team1}
          />
        </div>
        <div className="col">
          <PersonTile
            type=""
            personName="Marc Zeller"
            position="AAVE"
            twitterURL="#"
            imageURL={Team2}
          />
        </div>
        <div className="col">
          <PersonTile
            type=""
            personName="Julien Bouteloup"
            position="Stake Capital, Curve"
            twitterURL="#"
            imageURL={Team3}
          />
        </div>
        <div className="col col-heading">
          <h2>Meet our Advisors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            varius vestibulum lectus.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default advisorsSection;
