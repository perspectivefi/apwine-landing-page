import * as React from "react"
import PersonTile from "../../components/personTile"

import SectionBG from "../../images/advisors-bg.png"
import SectionBGTablet from "../../images/advisors-bg.png"
import SectionBGMobile from "../../images/advisors-bg.png"

import "../../styles/sections/homepage/advisors.scss"

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
            type="Advisor"
            personName="Julien Bouteloup"
            position="Stake Capital, Curve"
            twitterURL="https://twitter.com/bneiluj"
          />
        </div>
        <div className="col">
          <PersonTile
            type="Advisor"
            personName="Jiahua Xu"
            position="EPFL, UCL"
            twitterURL="https://twitter.com/jiahuajavaxu"
          />
        </div>
        <div className="col">
          <PersonTile
            type="Advisor"
            personName="Marc Zeller"
            position="AAVE"
            twitterURL="https://twitter.com/lemiscate"
          />
        </div>

        <div className="col col-heading">
          <h2>Meet our Advisors</h2>
        </div>
      </div>
    </div>
  </section>
)

export default advisorsSection
