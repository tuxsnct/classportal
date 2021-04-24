// eslint-disable-next-line @typescript-eslint/no-var-requires
const { siteMetadata } = require('../../classportal.json')

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    {
      options: {
        background_color: '#f7f0eb',
        display: 'standalone',
        icons: [],
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        theme_color: '#a2466c'
      },
      resolve: 'gatsby-plugin-manifest'
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: 'h'
      },
      resolve: 'gatsby-plugin-typescript'
    }
  ],
  siteMetadata: {
    title: siteMetadata.title,
    titleTemplate: siteMetadata.titleTemplate,
    defaultTitle: siteMetadata.defaultTitle,
    defaultDescription: siteMetadata.defaultDescription,
    siteUrl: siteMetadata.siteUrl,
    thumbnail: siteMetadata.thumbnail
  }
}
