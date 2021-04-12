module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        allpageHeader: ["cache-control: public, max-age=0, must-revalidate"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./data",
      },
      // __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        display: `standalone`,
        icon: "data/images/favicon-final.png",
        cache_busting_mode: "name",
      },
    },
  ],
};
