import * as React from "react"

import Picture from "../../images/what-ill.png"
import PictureTablet from "../../images/what-ill.png"
import PictureMobile from "../../images/what-ill.png"

import SectionBG from "../../images/pink-shadow.png"
import SectionBGTablet from "../../images/pink-shadow.png"
import SectionBGMobile from "../../images/pink-shadow.png"

import "../../styles/sections/homepage/what.scss"

const whatSection = () => (
  <section className="what-section">
    <div className="container">
      <div className="row">
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
        <div className="col">
          <div className="mini-heading">The what</div>
          <h2>Speculate on variations of Yield</h2>
          <p>
            Get directly exposed to the yield market through the derivatives
            layer.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default whatSection
