import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import animationData from "../../jsons/hedge.json";

import SectionBG from "../../images/hedge-bg.png";

import SectionBGTablet from "../../images/hedge-bg-tablet.png";
import SectionBGMobile from "../../images/hedge-bg-mobile.png";
import "../../styles/sections/homepage/hedge.scss";

const HedgeSection = () => {
  const lottieRef = useRef();

  useEffect(() => {
    var animDuration = 10000;

    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 65) * (scrollPosition / (duration / 70));

      anim.goToAndStop(frame, true);
    }

    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

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
  );
};

export default HedgeSection;
