import * as React from "react";
import Layout from "../layout";

import Hero from "./Homepage/hero";
import TopCta from "./Homepage/topCta";
import Defi from "./Homepage/defi";
import How from "./Homepage/how";
import What from "./Homepage/what";
import Why from "./Homepage/why";
import Hedge from "./Homepage/hedge";
import Advisors from "./Homepage/advisors";
import OurTeam from "./Homepage/ourTeam";
import TrustedBy from "./Homepage/trustedBy";
import CtaSubscribe from "./Homepage/ctaSubscribe";

import DesktopCurveBottom from "../images/blue-bottom-curve-desktop.svg";
import TabletCurveBottom from "../images/blue-bottom-curve-desktop.svg";
import MobileCurveBottom from "../images/blue-bottom-curve-desktop.svg";

import "../styles/app.scss";

const IndexPage = () => (
  <Layout>
    <Hero />
    <TopCta />
    <div className="dark-section">
      <div className="curve-wrap top">
        <div className="desktop">
          <DesktopCurveBottom />
        </div>
        <div className="tablet">
          <TabletCurveBottom />
        </div>
        <div className="mobile">
          <MobileCurveBottom />
        </div>
      </div>

      <Defi />
      <How />
      <What />
      <Why />
      <Hedge />
      <Advisors />
      <OurTeam />
      <TrustedBy />

      <div className="curve-wrap bottom">
        <div className="desktop">
          <DesktopCurveBottom />
        </div>
        <div className="tablet">
          <TabletCurveBottom />
        </div>
        <div className="mobile">
          <MobileCurveBottom />
        </div>
      </div>
    </div>

    <CtaSubscribe />
  </Layout>
);

export default IndexPage;
