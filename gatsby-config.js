module.exports = {
  siteMetadata: {
    title: 'Our Gatsby+Wordpress Site',
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: 'https://wordpress-658403-2149721.cloudwaysapps.com/graphql',
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `@pasdo501/gatsby-source-woocommerce`,
      options: {
        api: 'wordpress-658403-2149721.cloudwaysapps.com',   // Base URL of WordPress site
        https: true,
        api_keys: {
          consumer_key: `ck_077e2081ccb1cf282251822a31d26ed210842739`,
          consumer_secret: `cs_b34eb1b3aeafb937f20f8e294037146f65b24c05`,
        },
        fields: ['products', 'products/categories', 'products/attributes'],
      }
    },
  ],
};
