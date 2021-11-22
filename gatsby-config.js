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
