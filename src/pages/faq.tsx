import React from "react"

import classnames from "classnames"

import PageHeader from "../components/PageHeader"
import Container from "../components/Container"

import Layout from "../components/Layout"

import FAQ from "../components/FAQ"

const FaqPage = () => (
    <Layout pageName="FAQ">
        <PageHeader />
        <Container className="-mt-2">
            <FAQ />
        </Container>
    </Layout>
)

export default FaqPage
