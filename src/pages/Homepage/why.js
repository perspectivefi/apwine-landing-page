import * as React from "react"

import Picture from "../../images/why-ill.png"
import PictureTablet from "../../images/why-ill.png"
import PictureMobile from "../../images/why-ill.png"

import "../../styles/sections/homepage/why.scss"

import SectionBG from "../../images/why-shadow.png"
import SectionBGTablet from "../../images/why-shadow.png"
import SectionBGMobile from "../../images/why-shadow.png"

const whySection = () => (
  <section className="why-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mini-heading">The why</div>
          <h2>Better Capital Efficiency</h2>
          <p>Manage your portfolio’s efficiency with more granularity.</p>
          <div className="btn-wrap">
            <a href="/" className="btn btn--secondary-border">
              Get your upfront yield now
            </a>
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
)

export default whySection
