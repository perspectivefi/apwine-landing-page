module.exports = {
  siteMetadata: {
    title: `APWine`,
    description: `The yield derivatives marketplace. Tokenise and get your yield upfront. Hedge your risk on APY volatility.`,
    author: `apwine`,
    baseUrl: `https://apwine.fi`,
    siteUrl: `https://apwine.fi`,
  },
  plugins: [
    // "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/styles/config/_import.scss";`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "XXX", // todo
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
