import React from "react"

import Layout from "../components/Layout"

import Container from "../components/Container"
import Divider from "../components/Divider"

import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import FAQ from "../components/FAQ"
import Team from "../components/Team"
import Roadmap from "../components/Roadmap"
import Footer from "../components/Footer"
import NewsletterSubscribe from "../components/NewsletterSubscribe"
import Header from "../components/Header"
import Diagram from "../components/Diagram"

import lockDiagram from "../images/diagrams/lock.svg"
import sellDiagram from "../images/diagrams/sell.svg"
import claimDiagram from "../images/diagrams/claim.svg"

const IndexPage = () => (
    <Layout>

        <Hero />

        <Diagram mode="right" img={lockDiagram}
            title="Lock your interest bearing tokens"
            text="Tokenise the yield generated with your interest bearing token. You deposit and lock your interest bearing token to claim Future Yield Tokens." />
        <Diagram mode="left"  img={sellDiagram}
            title="Sell your APYs ahead of time"
            text="Sell, buy and trade Future Yield Tokens ahead of time to speculate on the APY of different platform." />
        <Diagram mode="right" img={claimDiagram}
            title="Claim your yield at maturity"
            text="Claim your yield at maturity by burning your Future Yield Tokens." />

        <Container children={<Features />} className="mt-40" />

        <Container children={<Team />} className="mt-40" />
            <Diagram mode="right" img={lockDiagram}
                title="Lock your interest bearing tokens"
                text="Tokenise the yield generated with your interest bearing token. You deposit and lock your interest bearing token to claim Future Yield Tokens." />
            <Diagram mode="left"  img={sellDiagram}
                title="Sell your APYs ahead of time"
                text="Sell, buy and trade Future Yield Tokens ahead of time to speculate on the APY of different platform." />
            <Diagram mode="right" img={claimDiagram}
                title="Claim your yield at maturity"
                text="Claim your yield at maturity by burning your Future Yield Tokens." />

            <Container children={<Features />} className="mt-40" />

            <Container children={<Team />} className="mt-40" />

            <Container children={<Roadmap />} className="mt-40" />

    </Layout>
)

export default IndexPage
