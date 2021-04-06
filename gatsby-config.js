module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    // "gatsby-plugin-smoothscroll",
    // "gatsby-plugin-anchor-links",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/favicon-final.png",
        //cache_busting_mode: "none",
      },
    },

    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     // offset: -100,
    //     // duration: 1000,
    //   },
    // },
  ],
};
