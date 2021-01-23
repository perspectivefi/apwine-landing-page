import React from "react"
import { graphql } from "gatsby"

import Container from "../components/Container"
import Header from "../components/Header"
import NewsletterSubscribe from "../components/NewsletterSubscribe"
import BlogHero from "../components/BlogHero"
import ArticleThumbnail from "../components/ArticleThumbnail"

import Layout from "../components/Layout"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const lastArticle = edges[0]["node"]
  const Hero = (
    <BlogHero
      title={lastArticle.frontmatter.title}
      excerpt={lastArticle.excerpt}
      slug={lastArticle.frontmatter.slug}
    />
  )
  const Posts = edges.map(
    (
      {
        node: {
          id,
          excerpt,
          frontmatter: { title, slug, date },
        },
      },
      i: number
    ) => (
      <ArticleThumbnail
        key={id}
        title={title}
        date={date}
        slug={slug}
        excerpt={excerpt}
      />
    )
  )

  return (
    <Layout
      pageName="Blog"
      className="relative pattern-dots text-opacity-20 text-primary-200"
    >
      <div className="absolute bg-gradient-to-b from-primary-200 to-black h-screen w-full opacity-20" />{" "}
      <div className="relative z-10">
        <Header />
        <Container children={Hero} className="mt-40" />
        <Container
          children={
            <div className="grid grid-rows-2 gap-8 grid-cols-3">{Posts}</div>
          }
          className="mt-40"
        />
        <Container children={<NewsletterSubscribe />} className="mt-32" />
      </div>
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
