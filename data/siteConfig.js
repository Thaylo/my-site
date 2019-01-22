module.exports = {
  siteTitle: 'Thaylo Xavier',
  siteDescription: "Hey I'm Thaylo!",
  authorName: 'Thaylo Freitas',
  twitterUsername: '_Thaylo_',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  Hi! I'm Thaylo! Computer Engineer and Software Developer.
  `,
  siteUrl: 'https://thaylo.github.io',
  disqusSiteUrl: 'https://thaylo.github.io',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-132909624-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'thaylo',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    // {
    //   label: 'About',
    //   url: '/gatsby-starter-morning-dew',
    // },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/blog',
      },
      // {
      //   label: 'About',
      //   url: '/gatsby-starter-morning-dew',
      // },
      // {
      //   label: 'Installation',
      //   url: '/how-to-install',
      // },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/thaylo',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://thaylo.github.io',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_Thaylo_',
        iconClassName: 'fa fa-twitter',
      },
    ],
  ],
}
