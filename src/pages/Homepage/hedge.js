import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import animationData from "../../jsons/hedge.json"

import SectionBG from "../../images/hedge-bg.png"

import SectionBGTablet from "../../images/hedge-bg-tablet.png"
import SectionBGMobile from "../../images/hedge-bg-mobile.png"
import "../../styles/sections/homepage/hedge.scss"

gsap.registerPlugin(ScrollTrigger)

const HedgeSection = () => {
  const lottieRef = useRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    })

    anim.setSpeed(1.15)

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: lottieRef.current,
        start: "bottom bottom",
        onEnter: () => anim.play(),
        // markers: true,
      },
    })
  }, [])

  return (
    <section className="hedge-section">
      <div className="bg-wrap">
        <div
          className="lottie-container"
          id="hedge-lottie"
          ref={lottieRef}
        ></div>
        <picture>
          <source srcSet={SectionBG} media="(min-width: 1024px)" />
          <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
          <img src={SectionBGMobile} alt="" />
        </picture>
      </div>
    </section>
  )
}

export default HedgeSection
