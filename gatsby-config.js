module.exports = {
  siteMetadata: {
    siteUrl: "https://www.scottpopplewell.me",
    title: "Scott's Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `cookbook`,
        path: `${__dirname}/cookbook`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
