module.exports = {
  siteMetadata: {
    siteUrl: "https://www.scottpopplewell.me",
    title: "Scott's Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    "gatsby-plugin-mdx",
  ],
};
