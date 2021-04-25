// eslint-disable-next-line @typescript-eslint/no-var-requires
const classportal = require('./classportal.json')
const { siteMetadata } = classportal

const config = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    {
      options: {
        background_color: '#ffffff',
        display: 'standalone',
        icon: './src/assets/logo.png',
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: '/',
        theme_color: '#014229'
      },
      resolve: 'gatsby-plugin-manifest'
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: 'h'
      },
      resolve: 'gatsby-plugin-typescript'
    },
    'gatsby-transformer-sharp'
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

module.exports = config
