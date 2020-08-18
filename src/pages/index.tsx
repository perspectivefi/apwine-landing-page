import React from "react"

import Layout from "../components/Layout"

import Hero from "../components/Hero"
import Container from "../components/Container"

const IndexPage = () => (
    <Layout className="bg-white">
        <Hero />
        <Container>
            <h2 className="text-gray-800 text-lg font-normal text-center">Site currently being built. Join the discussion group for more updates!</h2>
        </Container>
    </Layout>
)

export default IndexPage
