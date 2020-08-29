import React from "react"
import { graphql } from "gatsby"

import classnames from "classnames"

import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import Divider from "../components/Divider"

import Layout from "../components/Layout"

import { Title } from "../components/Text"

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const Posts = edges
        .map(({ node: { id, frontmatter: { title, slug, date } } }, i: number) => <>
            { (i > 0 ? <Divider /> : null) }
            <div className={classnames(
                "flex flex-col",
                (i > 0) && "mt-8",
                (i < (edges.length-1)) && "mb-8"
            )} key={i}>
                <a href={slug}><Title>{ title }</Title></a>
                <h2 className="text-gray-500 text-sm">{ date }</h2>
            </div>
        </>)

    return (
        <Layout pageName="Blog">
            <PageHeader title="APWine" />
            <Container className="-mt-2">
                <div className="flex flex-col">
                    { Posts }
                </div>
            </Container>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`