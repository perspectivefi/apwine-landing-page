import * as React from "react";
import { Link } from "gatsby";
import EmailIcon from "../../images/email.svg";
import Socials from "../../components/socials";
import "../../styles/sections/homepage/ctaSubscribe.scss";
import SectionBG from "../../images/cta-subscribe-bg.png";
import SectionBGTablet from "../../images/cta-subscribe-bg-tablet.png";
import SectionBGMobile from "../../images/cta-subscribe-bg-mobile.png";

const CtaSubscribeSection = () => (
  <div className="cta-subscribe-section">
    <div className="bg-wrap">
      <picture>
        <source
          srcSet={SectionBG}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={SectionBGTablet}
          media="(min-width: 767px)"
        />
        <img src={SectionBGMobile} alt="" />
      </picture>
    </div>

    <section className="cta-section">
      <div className="container">
        <div className="quote-wrap">
          <div className="quote">Buy, Sell, Hedge and Trade Yield</div>
          <div className="btn-wrap">
            <Link to="/" className="btn btn--primary">
              Get your upfront yield now
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe-section">
      <div className="section-heading">
        <div>Let’s keep in touch</div>
        <div>Let’s keep in touch</div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-heading">
              Subscribe to get the latest blog posts, news and platform
              announcements straight to your inbox.
            </div>
            <form>
              <div className="input-wrap">
                <EmailIcon />
                <input type="email" placeholder="Enter your email" />
              </div>

              <button type="submit" className="btn btn--primary">
                Sign up
              </button>
            </form>
          </div>
          <div className="col">
            <div className="socials-wrap">
              <div className="heading">Follow us</div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CtaSubscribeSection;
