/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 /** USE to pages and components: 
  * import "./src/styles/global.css"
 */
/**  
 * Theme Colors : Primary : '#4e2140'
 *                Secondary : '#ec8fd0'
 *                Light Pink: '#f4d9e9'
 *                Gray-Color: '#7b7d7e'
 */


/** Plugins  and Site MetaData */
module.exports = {
  /** Site MetaData */
  siteMetadata: {
    title: `Party Ambiance`,
    siteUrl: `https://www.partyambianceomaha.com`,
    keywords: `baloon garland, balloon walls, balloon towers`,
    description: `Balloon Arrangements and Party Decoration Services `,
    image: `../static/circle-logo.png`,
    author: `Nazokat Isamova`
  },
  /* Plugins configuration*/
  plugins: [
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-react-helmet`,
   `gatsby-plugin-sass`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/content/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
    },
  },
  ],
  
}

