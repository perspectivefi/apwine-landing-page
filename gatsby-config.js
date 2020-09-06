module.exports = {
  siteMetadata: {
    title: `APWine`,
    description: `APWine is a protocol allowing to trade unrealised APY. It lets lenders tokenize their future yield locking their bearing interests tokens for a defined amount of time.`,
    author: `apwine`,
    baseUrl: `https://apwine.fi`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176809570-1",
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    /* blog plugins */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                link: "text-blue-500 font-bold hover:text-blue-600",
                paragraph: "mb-4",
                "heading[depth=1]": "text-gray-800 text-2xl font-bold text-left mt-16 mb-4",
                "heading[depth=2]": "text-gray-800 text-xl font-bold text-left mt-8 mb-4",
                "heading[depth=3]": "text-gray-600 text-lg font-bold text-left mt-8 mb-4",
                "list[ordered=false]": "list-disc mb-4",
                listItem: "ml-6",
                strong: "font-semibold"
              }
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
