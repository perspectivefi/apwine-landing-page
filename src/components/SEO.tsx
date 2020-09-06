import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Helmet from "react-helmet"

const SEO = ({ pageName }) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                    baseUrl
                }
            }
        }
    `)

    const defaults = data.site.siteMetadata;

    const title = defaults.title + (pageName ? ` - ${pageName}` : "");
    const description = defaults.description;
    const url = defaults.baseUrl;

    const image = false

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            {image && <meta name="image" content={image} />}
        </Helmet>
    )
}

export default SEO