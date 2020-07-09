import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Idea from "../components/Idea"
import Features from "../components/Features"
import Partner from "../components/Partner"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
    <Layout>
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
        </div>

        <Idea />
        <Features />
        <Partner />
        { /* <Contact /> */ }

        <Footer />
    </Layout>
)

export default IndexPage
