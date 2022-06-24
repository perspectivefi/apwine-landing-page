import React, { useRef, useEffect } from "react"
import PersonTile from "../../components/personTile"
import { Link } from "gatsby"

import animationData from "../../jsons/button_hover.json"

import lottie from "lottie-web"

import SectionBG from "../../images/our-team-bg.png"
import SectionBGTablet from "../../images/our-team-bg-tablet.png"
import SectionBGMobile from "../../images/our-team-bg-mobile.png"

import "../../styles/sections/homepage/ourTeam.scss"

const OurTeamSection = () => {
  const lottieRef = useRef()

  useEffect(() => {
    if (!lottieRef.current) return

    const buttonAnimation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    })

    buttonAnimation.setSpeed(1.15)

    const handleMouseEnter = () => {
      buttonAnimation.setDirection(1)
      buttonAnimation.play()
    }

    const handleMouseLeave = () => {
      buttonAnimation.setDirection(-1)
      buttonAnimation.play()
    }

    lottieRef.current.addEventListener("mouseenter", handleMouseEnter)
    lottieRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      lottieRef.current.removeEventListener("mouseenter", handleMouseEnter)
      lottieRef.current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [lottieRef.current])

  return (
    <section className="our-team-section">
      <div className="bg-wrap">
        <picture>
          <source srcSet={SectionBG} media="(min-width: 1024px)" />
          <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
          <img src={SectionBGMobile} alt="" />
        </picture>
      </div>

      <div className="shadow"/>

      <div className="container">
        <div className="row">
          <div className="col col-heading">
            <div className="text-wrap">
              <h2>Our Team</h2>
              <p>
                Our top notch family currently counts 11 incredible persons.
              </p>
            </div>
            {/*<div className="btn-wrap">*/}
            {/*  <Link to="https://cryptocurrencyjobs.co/startups/apwine" className="hover-container-wrap" ref={lottieRef}>*/}
            {/*    <div className="hover-container"/>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Gaspard Peduzzi"
              position="Protocol"
              twitterURL="https://twitter.com/gaspardpeduzzi"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Ulysse Ramage"
              position="UI/UX"
              twitterURL="https://twitter.com/ulydev"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Jean Chambras"
              position="Full Stack Developer"
              twitterURL="https://twitter.com/jean_chambras"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Strategic management"
              personName="Antoine Mouran"
              position="Business Developer"
              twitterURL="https://twitter.com/L0GYKAL"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Growth"
              personName="Irene"
              position="Head of Growth / Events"
              twitterURL="https://twitter.com/irene_fucile"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Marketing"
              personName="Red"
              position="Marketing"
              twitterURL="https://twitter.com/smokatokey"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Marketing"
              personName="Sam"
              position="Community & Internal orga."
              twitterURL="https://twitter.com/Sam48152259"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Ayush Tiwari"
              position="Solidity Developer"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Mateusz Franczuk"
              position="Full Stack Developer"
              twitterURL="https://twitter.com/localtechboy"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Manmeet"
              position="Solidity Developer"
            />
          </div>
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Yanis Berkani"
              position="Solidity Developer"
              twitterURL="https://twitter.com/berkani4_yanis"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeamSection
