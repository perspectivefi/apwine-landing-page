import React from "react"
import { graphql } from "gatsby"

import classnames from "classnames"

import Container from "../components/Container"

import { titleClass, paragraphClass } from "../components/Text"

import BlogHeader from "../components/BlogHeader"
import Layout from "../components/Layout"

export default ({ data: { markdownRemark: { frontmatter, html } } }) => (
    <Layout pageName={frontmatter.title}>
        <BlogHeader />
        <Container className="-mt-2">
            <h1 className={titleClass}>{ frontmatter.title }</h1>
            <h2 className="text-gray-500 text-sm">{ frontmatter.date }</h2>
            <div
                className={classnames(paragraphClass, "mt-8")}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Container>
    </Layout>
)

export const pageQuery = graphql`
    query($slug: String!) {
            markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                }
            }
    }
`