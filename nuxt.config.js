const PrismicConfig = require('./prismic.config')

export default {
mode: 'spa',
/*
** Headers of the page
*/
head: {
  title: 'ADAiRE',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap'},
		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#1c1c1c" },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
    { src: '//static.cdn.prismic.io/prismic.min.js' },
    { src: 'https://use.fontawesome.com/releases/v5.13.0/js/all.js' }
  ],
},

router: {
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = async (hash, x) => {
      return document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
        })
    }

    if (to.hash) {
      let el = await findEl(to.hash)
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, el.offsetTop)
      }
    }

    return { x: 0, y: 0 }
  }
},
/*
** Customize the progress-bar color
*/
loading: { color: '#fff' },
/*
** Global CSS
*/
css: [
],
/*
** Plugins to load before mounting the App
*/
plugins: [
  '~/plugins/prismic-vue.js'
],

/*
** Nuxt.js dev-modules
*/
buildModules: [
  // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  '@nuxtjs/tailwindcss',
],
/*
** Nuxt.js modules
*/
modules: [
],
/*
** Build configuration
*/
build: {
  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
}
}
