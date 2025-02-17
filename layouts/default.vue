<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-7xl mx-auto">
        <div class="fixed z-10 pb-4 md:pb-6 w-full bg-gray-100">
          <div v-if="!!breaking && breakingOpen" class="bg-red-500">
            <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div class="pr-16 sm:text-center sm:px-16">
                <p class="font-medium text-white">
                  <nuxt-link :to="'/blog/' + breaking.id" @click.native="breakingOpen=false" class="inline underline">{{breaking.data.title[0].text}}</nuxt-link>
                  <span>&rarr;</span>
                </p>
              </div>
              <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                <button @click="breakingOpen = false" type="button" class="flex p-2 rounded-md hover:bg-red-400 transition ease-in-out duration-150">
                  <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="pt-4 md:pt-6 px-6 md:px-12">
            <nav class="relative flex items-center justify-between sm:h-10">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <nuxt-link to="/">
                    <!-- Logo -->
                    <h1 class="text-4xl border-b-4 border-orange-600 leading-none px-1">ADAiRE</h1>
                  </nuxt-link>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      @click="mobileOpen = true"
                      type="button"
                      class="inline-flex items-center justify-center p-2 border rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg class="h-6 w-6 text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10">
                <nuxt-link to="/#services" class="font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out">Services</nuxt-link>
                <nuxt-link to="/#about" class="ml-4 xl:ml-8 font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out">About Us</nuxt-link>
                <nuxt-link to="/#testimonials" class="ml-4 xl:ml-8 font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out">Testimonials</nuxt-link>
                <nuxt-link
                  to="/menu"
                  :class="$route.path == '/menu' ? 'text-green-600 underline' : null"
                  class="ml-4 xl:ml-8 font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out"
                >Menu</nuxt-link>
                <nuxt-link
                  to="/blog"
                  :class="$route.path == '/blog' ? 'text-green-600 underline' : null"
                  class="ml-4 xl:ml-8 font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out"
                >Blog</nuxt-link>
                <nuxt-link to="/#contact" class="ml-4 xl:ml-8 font-medium text-gray-900 hover:text-green-600 hover:underline transition duration-150 ease-in-out">Contact</nuxt-link>
              </div>
            </nav>
          </div>
          <!-- Mobile Menu -->
          <transition name="slide-in-right">
            <div v-if="mobileOpen" class="md:hidden">
              <div @click="mobileOpen = false" class="fixed inset-0 z-30 transition-opacity ease-linear duration-300">
                <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
              </div>
              <div class="fixed inset-0 flex z-40">
                <div class="flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-200 transform ease-in-out duration-300">
                  <div class="absolute top-0 right-0 -mr-14 p-1">
                    <button @click="mobileOpen = false" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                      <svg class="h-6 w-6 text-gray-900" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav class="px-2">
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >
                        <span class="border-b-2 border-orange-600 text-2xl">ADAiRE</span>
                      </nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/#services"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >Services</nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/#about"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >About Us</nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/#testimonials"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >Testimonials</nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/menu"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >Menu</nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/blog"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >Blog</nuxt-link>
                      <nuxt-link
                        @click.native="mobileOpen = false"
                        to="/#contact"
                        class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-900 transition ease-in-out duration-150"
                      >Contact</nuxt-link>
                    </nav>
                  </div>
                </div>
                <div class="flex-shrink-0 w-14">
                  <!-- Force sidebar to shrink to fit close icon -->
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- Main -->
        <div :class="breakingOpen ? 'pt-12' : null">
          <nuxt />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-white border-t">
      <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center">
          <div class="text-center">
            <nuxt-link to="/">
              <h2 class="text-3xl border-b-4 border-orange-600 leading-none px-1">ADAiRE</h2>
            </nuxt-link>
            <p class="mt-2">1234 Some Street Blvd.</p>
            <p>Alpharetta, GA 30000</p>
            <p>tel: 123-123-1234</p>
            <p>email: email@email.com</p>
          </div>
        </div>
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center mt-10">
          <div class="px-5 py-2">
            <nuxt-link to="/" class="text-base leading-6 text-gray-800 hover:text-gray-900">About</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/#services" class="text-base leading-6 text-gray-800 hover:text-gray-900">Services</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/#about" class="text-base leading-6 text-gray-800 hover:text-gray-900">About Us</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/#testimonials" class="text-base leading-6 text-gray-800 hover:text-gray-900">Testimonials</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/menu" class="text-base leading-6 text-gray-800 hover:text-gray-900">Menu</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/blog" class="text-base leading-6 text-gray-800 hover:text-gray-900">Blog</nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link to="/#contact" class="text-base leading-6 text-gray-800 hover:text-gray-900">Contact</nuxt-link>
          </div>
        </nav>
        <div class="mt-8 flex justify-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </div>
        <div class="mt-8">
          <p class="text-center text-base leading-6 text-gray-400">&copy; {{new Date().getFullYear()}} ADAiRE, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "@/prismic.config.js"

export default {
  data() {
    return {
      mobileOpen: false,
      breaking: null,
      breakingOpen: true
    }
  },
  async beforeMount() {
    var breaking

    const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
    console.log(api)
    const query = await api
      .query(Prismic.Predicates.at("my.blog.breaking", true))
      .then(posts => {
        breaking = posts.results[0]
      })
      .catch(error => {
        console.log(error)
      })

    this.breaking = breaking
  },

  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp)
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()
      return month + "-" + day + "-" + year
    }
  }
}
</script>

<style scoped>
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: opacity 0.2s;
  transition-timing-function: ease-in-out;
}
.slide-in-right-enter, .slide-in-right-leave-to /* .slide-in-left-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style> 