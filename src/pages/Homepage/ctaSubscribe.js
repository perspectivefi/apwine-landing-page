import * as React from "react"
import { Link } from "gatsby"
import EmailIcon from "../../images/email.svg"
import Socials from "../../components/socials"
import "../../styles/sections/homepage/ctaSubscribe.scss"
import SectionBG from "../../images/cta-subscribe-bg.png"
import SectionBGTablet from "../../images/cta-subscribe-bg-tablet.png"
import SectionBGMobile from "../../images/cta-subscribe-bg-mobile.png"

import MailchimpSubscribe from "react-mailchimp-subscribe"

const SubscribeForm = () => {
  const url =
    "https://apwine.us17.list-manage.com/subscribe/post?u=49b391a473b9f605aed855129&amp;id=2bb1b99f44"
  const [email, setEmail] = React.useState("")
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <>
          <form
            onSubmit={e => {
              subscribe({ EMAIL: email })
              e.preventDefault()
            }}
          >
            <div className="input-wrap">
              <EmailIcon />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn--primary">
              Sign up
            </button>
          </form>

          {["sending", "error", "success"].includes(status) ? (
            <span
              className="form-heading"
              style={{ marginTop: "1rem", display: "block" }}
            >
              {status === "sending" && <div>Please wait...</div>}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && <div>Thank you for signing up!</div>}
            </span>
          ) : null}
        </>
      )}
    />
  )
}

const CtaSubscribeSection = () => (
  <div className="cta-subscribe-section">
    <div className="bg-wrap">
      <picture>
        <source srcSet={SectionBG} media="(min-width: 1024px)" />
        <source srcSet={SectionBGTablet} media="(min-width: 767px)" />
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
            <SubscribeForm />
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
)

export default CtaSubscribeSection
