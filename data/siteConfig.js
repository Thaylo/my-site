module.exports = {
  siteTitle: 'Francisco Santos',
  siteDescription: "👋 Hey I'm Francisco!",
  authorName: 'Francisco Santos',
  twitterUsername: '_franciscodf',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  Hi! I'm Francisco! Developer and passionate about what I do.
  `,
  siteUrl: 'https://santosfrancisco.github.io/',
  disqusSiteUrl: 'http://www.devchico.com/',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-47305515-4',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'yoshidf',
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
        url: 'https://github.com/yoshidf',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'http://www.devchico.com',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_franciscodf',
        iconClassName: 'fa fa-twitter',
      },
    ],
  ],
}
