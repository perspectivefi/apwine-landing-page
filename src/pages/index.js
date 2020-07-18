import React from "react"

import Layout from "../components/Layout"
import Wave from "../components/Wave"

import Header from "../components/Header"
import Hero from "../components/Hero"

import Benefits from "../components/Benefits"
import Usage from "../components/Usage"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import "../../node_modules/highlight.js/styles/xcode.css"

const IndexPage = () => (
    <Layout className="bg-white">
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <Wave position="top" />
        </div>

        <Benefits />
        <Usage />

        <Wave position="bottom" />
        <Contact />
        <Footer />
    </Layout>
)

export default IndexPage
