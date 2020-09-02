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
import NewsletterSubscribe from "../components/NewsletterSubscribe"

const IndexPage = () => (
    <Layout className="bg-white">
        <Hero />

        <Container children={<Features />} />

        <Container children={<Divider />} />

        <Container children={<HowItWorks />} />

        <Container children={<Divider />} className="mb-0" />

        <Container children={<NewsletterSubscribe />} className="my-0 py-0" />

        <Container children={<Divider />} className="mt-0" />

        <Container children={<FAQ limit={3} />} />

        {/* <Container children={<Divider />} /> */}

        <Container children={<Team />} />
    </Layout>
)

export default IndexPage
