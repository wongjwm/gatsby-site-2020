require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `judy wong`,
    description: `I use design-thinking and development in order to solve problems and build great products.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'jw-site', // repo name
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN, // repo access token from dotenv
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false),
        pages: [
          {
            // (Builds pages dynamically)
            type: 'Project', // TypeName from prismic
            match: '/project/:uid', // Pages will be generated under this pattern
            path: '/project', // Placeholder page for unpublished documents
            component: require.resolve(
              './src/components/project.js'
            ),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/jw-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
