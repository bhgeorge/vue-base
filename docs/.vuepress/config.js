const webpack = require('webpack');
const { version } = require('../../package.json');
module.exports = {
  title: 'vue-base',
  description: 'A collection of common-use Vue components',
  chainWebpack: config => {
    config.plugin('version-env').use(webpack.EnvironmentPlugin, [
      {
        VERSION: version,
      },
    ])
  },
  themeConfig: {
    repo: 'https://github.com/bhgeorge/vue-base',
    repoLabel: 'GitHub',
    lastUpdated: true,
    nav: [
      {
        text: 'Components',
        items: [
          { text: 'External Link', link: '/components/externalLink' },
          { text: 'Forms', link: '/components/forms/' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Modal', link: '/components/modal' },
        ],
      },
      {
        text: 'Layouts',
        items: [
          { text: 'Sidebar Layout', link: '/layouts/sidebarLayout' }
        ],
      },
      { text: 'Utils', link: '/utils/' },
    ],
  },
};
