import * as React from "react";

import "../../styles/sections/homepage/trusted_by.scss";

import Spartan from "../../images/stakeholders/spartan.png";
import Ternary from "../../images/stakeholders/ternary.png";
import SpinCrypto from "../../images/stakeholders/spincrypto.png";

import Delphi from "../../images/stakeholders/delphiventures.png";
import Defi from "../../images/stakeholders/defi.png";
import Rarestone from "../../images/stakeholders/rarestone.png";
import Jarvis from "../../images/stakeholders/jarvis.png";

import Backor from "../../images/partners/bancor.png";
import Tokemak from "../../images/partners/tokemak.png";
import Aave from "../../images/partners/aave.png";
import Visor from "../../images/partners/visor.png";

import First from "../../images/partners/first.png";
import Second from "../../images/partners/second.png";
import Cometh from "../../images/partners/cometh.png";
import Harvest from "../../images/partners/harvest.png";

const TrustedBySection = () => (
  <section className="trusted-by-section">
    <div className="container">
      <div className="heading">
        <h2>Trusted by</h2>
      </div>
      <div className="blocks">
        <div className="logo-block">
          <div className="row">
            <div className="col">
              <div className="heading">Our Stakeholders</div>
            </div>
            <div className="col">
              <div className="logo-row-desktop">
                <div className="logo-row">
                  <img src={Spartan} alt="Spartan" />
                  <img src={Ternary} alt="Ternary" />
                  <img src={SpinCrypto} alt="SpinCrypto" />
                </div>
                <div className="logo-row">
                  <img src={Delphi} alt="Delphi" />
                  <img src={Defi} alt="Defi" />
                  <img src={Rarestone} alt="Rarestone" />
                  <img src={Jarvis} alt="Jarvis" />
                </div>
              </div>

              <div className="logo-row-mobile">
                <div className="logo-row">
                  <img src={Spartan} alt="Spartan" />
                  <img src={Rarestone} alt="Rarestone" />
                </div>
                <div className="logo-row">
                  <img src={Delphi} alt="Delphi" />
                  <img src={Defi} alt="Defi" />
                </div>
                <div className="logo-row">
                  <img src={SpinCrypto} alt="SpinCrypto" />
                  <img src={Jarvis} alt="Jarvis" />
                </div>
                <div className="logo-row">
                  <img src={Ternary} alt="Ternary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-block">
          <div className="row">
            <div className="col">
              <div className="heading">Our partners</div>
            </div>
            <div className="col">
              <div className="logo-row-desktop">
                <div className="logo-row">
                  <img src={Backor} alt="Backor" />
                  <img src={Tokemak} alt="Tokemak" />
                  <img src={Aave} alt="Aave" />
                  <img src={Visor} alt="Visor" />
                </div>
                <div className="logo-row">
                  <img src={First} alt="" />
                  <img src={Second} alt="" />
                  <img src={Cometh} alt="Spartan" />
                  <img src={Harvest} alt="Spartan" />
                  <img src={Jarvis} alt="Spartan" />
                </div>
              </div>

              <div className="logo-row-mobile">
                <div className="logo-row">
                  <img src={Backor} alt="Backor" />
                  <img src={Tokemak} alt="Tokemak" />
                  <img src={First} alt="" />
                </div>
                <div className="logo-row">
                  <img src={Jarvis} alt="Spartan" />
                  <img src={Aave} alt="Aave" />
                  <img src={Visor} alt="Visor" />
                  <img src={Second} alt="" />
                </div>
                <div className="logo-row">
                  <img src={Cometh} alt="Spartan" />
                  <img src={Harvest} alt="Spartan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBySection;
