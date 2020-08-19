import React from "react"

import Layout from "../components/Layout"

import Container from "../components/Container"
import Divider from "../components/Divider"

import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import FAQ from "../components/FAQ"
import Team from "../components/Team"
import Footer from "../components/Footer"

const IndexPage = () => (
    <Layout className="bg-white">
        <Hero />

        <Container children={<Features />} />

        <Container children={<Divider />} />

        <Container children={<HowItWorks />} />

        <Container children={<Divider />} />

        <Container children={<FAQ />} />

        {/* <Container children={<Divider />} /> */}

        <Container children={<Team />} />

        { /* <Divider /> */ }

        <Container children={<Footer />} />
    </Layout>
)

export default IndexPage
