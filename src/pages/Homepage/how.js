import * as React from "react"

import Picture from "../../images/how-ill.png"
import PictureTablet from "../../images/how-ill.png"
import PictureMobile from "../../images/how-ill.png"

import SectionBG from "../../images/pink-shadow.png"
import SectionBGTablet from "../../images/pink-shadow.png"
import SectionBGMobile from "../../images/pink-shadow.png"

import { getTVL } from "../../stats"

import "../../styles/sections/homepage/how.scss"

const HowSection = () => {
  const [tvl, setTVL] = React.useState(undefined)
  React.useEffect(() => {
    getTVL().then(setTVL)
  }, [])
  return (
    <section className="how-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mini-heading">The how</div>
            <h2>Tokenize your yield</h2>
            <p>
              Deposit your interest bearing assets on APWine to tokenize your
              yield. Get your yield upfront, and hedge your risk on APY
              volatility.
            </p>
            <div className="count">
              <div className="mini-heading">Exchange liquidity</div>
              <div className="value">
                <span>
                  $
                  {tvl
                    ? Intl.NumberFormat().format(Math.floor(tvl * 10) / 10)
                    : "-"}
                </span>
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
  )
}

export default HowSection
