import type { GatsbyConfig, PluginRef } from 'gatsby'

const config: GatsbyConfig = {
  // pathPrefix: `/2026`,
  siteMetadata: {
    siteTitle: `2026`,
    siteTitleAlt: `2026`,
    siteHeadline: `2026`,
    siteUrl: `https://2026-microlens.vercel.app`,
    siteDescription: 'This is 2026.',
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2026`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2026`,
        short_name: `2026`,
        description: `This is 2026.`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
