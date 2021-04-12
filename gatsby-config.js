module.exports = {
  siteMetadata: {
    title: "Hi",
  },
  plugins: [

    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {


        allpageHeader: ["cache-control: public, max-age=0, must-revalidate"]


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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "data/images/favicon-final.png",
        cache_busting_mode: "none",
      },
    },

    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ["**/icon-path*"],
    //     },
    //   },
    // },
  ],
};
