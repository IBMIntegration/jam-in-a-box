module.exports = {
  siteMetadata: {
    title: 'Jam In A Box',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'ibm,integration,techjam,api connect,ace,app connect,event streams,kafka,mq',
  },
  pathPrefix: `/jam-in-a-box`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
