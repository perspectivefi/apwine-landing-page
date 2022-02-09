<<<<<<< HEAD
import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import Lottie from "lottie-web";
import PersonTile from "../../components/personTile";
import * as animationData from "../../jsons/button_hover.json";
=======
import * as React from "react"
import PersonTile from "../../components/personTile"
import { Link } from "gatsby"
>>>>>>> 45a0528367ddb358e3fccc2f355a0f5a5042541f

import Team1 from "../../images/team/1.png"
import Team2 from "../../images/team/2.png"
import Team3 from "../../images/team/3.png"
import Team4 from "../../images/team/4.png"
import Team5 from "../../images/team/5.png"
import Team6 from "../../images/team/6.png"
import Team7 from "../../images/team/7.png"
import Team8 from "../../images/team/8.png"
import Team9 from "../../images/team/9.png"
import Team11 from "../../images/team/11.png"

import SectionBG from "../../images/our-team-bg.png"
import SectionBGTablet from "../../images/our-team-bg-tablet.png"
import SectionBGMobile from "../../images/our-team-bg-mobile.png"

import "../../styles/sections/homepage/ourTeam.scss"

const OurTeamSection = () => {
  const lottieRef = useRef();

  useEffect(() => {
    const buttonAnimation = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    buttonAnimation.setSpeed(1.15);

    const handleMouseEnter = () => {
      buttonAnimation.setDirection(1);
      buttonAnimation.play();
    };

    const handleMouseLeave = () => {
      buttonAnimation.setDirection(-1);
      buttonAnimation.play();
    };

    lottieRef.current.addEventListener("mouseenter", handleMouseEnter);
    lottieRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      lottieRef.current.removeEventListener("mouseenter", handleMouseEnter);
      lottieRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="our-team-section">
      <div className="bg-wrap">
        <picture>
          <source srcSet={SectionBG} media="(min-width: 1024px)" />
          <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
          <img src={SectionBGMobile} alt="" />
        </picture>
      </div>

      <div className="shadow"></div>

      <div className="container">
        <div className="row">
          <div className="col col-heading">
            <div className="text-wrap">
              <h2>Our Team</h2>
              <p>
                Our top notch family currently counts 11 incredible persons.
              </p>
            </div>
            <div className="btn-wrap">
              <Link
                to="#"
                className="hover-container-wrap"
                // onMouseEnter={handleMouseEnter()}
                // onMouseLeave={handleMouseLeave}
                ref={lottieRef}
              >
                <div className="hover-container"></div>
              </Link>
            </div>
          </div>
<<<<<<< HEAD
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Gaspard Peduzzi"
              position="Solidity Developer"
              twitterURL="#"
              imageURL={Team1}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Ulysse Ramage"
              position="Full Stack Developer"
              twitterURL="#"
              imageURL={Team5}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Jean Chambras"
              position="Full Stack Developer"
              twitterURL="#"
              imageURL={Team8}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Strategic management"
              personName="Antoine Mouran"
              position="Business Developer"
              twitterURL="#"
              imageURL={Team4}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Daniel Tok"
              position="Full Stack Developer"
              twitterURL="#"
              imageURL={Team2}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Protocol"
              personName="Ayush Tiwari"
              position="Solidity Developer"
              twitterURL="#"
              imageURL={Team6}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Marketing"
              personName="Red"
              position="Marketing"
              twitterURL="#"
              imageURL={Team7}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Marketing"
              personName="Sam"
              position="Community & Internal orga."
              twitterURL="#"
              imageURL={Team3}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Development"
              personName="Mateusz Franczuk"
              position="Full Stack Developer"
              twitterURL="#"
              imageURL={Team9}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Marketing"
              personName="Dan"
              position="Content Writer"
              twitterURL="#"
              imageURL={Team10}
            />
          </div>
          <div className="col">
            <PersonTile
              type="Growth"
              personName="Irene"
              position="Head of Growth / Events"
              twitterURL="#"
              imageURL={Team11}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
=======
          <div className="btn-wrap">
            <Link to="https://cryptocurrencyjobs.co/startups/apwine/">
              Join The Team
            </Link>
          </div>
        </div>
        <div className="col">
          <PersonTile
            type="Protocol"
            personName="Gaspard Peduzzi"
            position="Protocol"
            twitterURL="https://twitter.com/gaspardpeduzzi"
            imageURL={Team1}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Development"
            personName="Ulysse Ramage"
            position="UI/UX"
            twitterURL="https://twitter.com/ulydev"
            imageURL={Team5}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Development"
            personName="Jean Chambras"
            position="Full Stack Developer"
            twitterURL="https://twitter.com/jean_chambras"
            imageURL={Team8}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Strategic management"
            personName="Antoine Mouran"
            position="Business Developer"
            twitterURL="https://twitter.com/L0GYKAL"
            imageURL={Team4}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Growth"
            personName="Irene"
            position="Head of Growth / Events"
            twitterURL="https://twitter.com/irene_fucile"
            imageURL={Team11}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Marketing"
            personName="Red"
            position="Marketing"
            twitterURL="https://twitter.com/smokatokey"
            imageURL={Team7}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Marketing"
            personName="Sam"
            position="Community & Internal orga."
            twitterURL="https://twitter.com/Sam48152259"
            imageURL={Team3}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Protocol"
            personName="Ayush Tiwari"
            position="Solidity Developer"
            twitterURL="#"
            imageURL={Team6}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Development"
            personName="Daniel Tok"
            position="Full Stack Developer"
            twitterURL="#"
            imageURL={Team2}
          />
        </div>
        <div className="col">
          <PersonTile
            type="Development"
            personName="Mateusz Franczuk"
            position="Full Stack Developer"
            twitterURL="#"
            imageURL={Team9}
          />
        </div>
      </div>
    </div>
  </section>
)

export default ourTeamSection
>>>>>>> 45a0528367ddb358e3fccc2f355a0f5a5042541f
