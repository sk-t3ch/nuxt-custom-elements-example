import pkg from '../../package.json';

export default {
  target: 'static',
  srcDir: __dirname,

  generate: {
    dir: process.env.DIST_PATH || '../../dist',
    crawler: false
  },

  router: {
    base: process.env.BASE_URL
  },

  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'CustomElementTailwindCss',
            path: '@/entries/TailwindCss'
          }
        ]
      }
    ]
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: false,
    exposeConfig: false,
    config: {}
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',

    '@nuxtjs/tailwindcss'
  ],

  modules: [
    'nuxt-custom-elements'
  ]

};
