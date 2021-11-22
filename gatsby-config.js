module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.pavloskarabiberis.com',
    title: 'Pavlos Karabiberis - Software Engineer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PavlosKarabiberis`,
        short_name: `PavlosKarabiberis`,
        start_url: `/`,
        background_color: `#EDF2F7`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,500,600,700`],
        display: 'swap',
      },
    },
  ],
};
