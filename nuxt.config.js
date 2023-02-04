export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Router configuration
  router: {
    mode: 'hash',
    base: '/product-page/',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Test in localhost
  server: {
    host: '0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Product Page',
    title: 'product-page',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'robots', content: 'noimageindex' },
      { name: 'googlebot', content: 'noindex, nofollow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.svg' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/mixins.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      light: true,
      themes: {
        light: {
          primaryBG: '#F6F6F7',
          darkGrey: '#222222',
          grey: '#888888',
          required: '#C90000',
          lightGrey: '#cccccc',
        },
      },
    },
  },

  // Axios configuration
  axios: {
    baseURL: process.env.BASE_URL || '',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //filenames: { chunk: () => "[name].js" },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
    },
    publicPath: 'https://crstngrace.github.io/product-page/',
  },
};
