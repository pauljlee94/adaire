<template>
  <div>
    <div id="hero" class="flex justify-center items-center h-64 pt-16 md:pt-24">
      <h1 class="text-5xl text-white">Blog</h1>
    </div>
    <div class="py-12 px-6 md:px-12">
      <div class="flex justify-between items-center mb-4">
        <span class="text-xs md:text-sm pr-2">Filter Posts:</span>
        <div>
          <label
            for="filter-1w"
            class="px-2 py-1 md:text-sm cursor-pointer font-medium text-xs leading-5 rounded-md transition ease-in-out duration-150"
            :class="[
									filter == today - 604800 ? 'text-green-700 bg-green-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
								]"
          >
            <input type="radio" v-model="filter" id="filter-1w" :value="today - 604800" class="fixed opacity-0 cursor-pointer" />
            1w
          </label>
          <label
            for="filter-1m"
            class="px-2 py-1 md:text-sm md:ml-3 cursor-pointer font-medium text-xs leading-5 rounded-md transition ease-in-out duration-150"
            :class="[
									filter == today - 2630000 ? 'text-green-700 bg-green-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
								]"
          >
            <input type="radio" v-model="filter" id="filter-1m" :value="today - 2630000" class="fixed opacity-0 cursor-pointer" />
            1m
          </label>
          <label
            for="filter-6m"
            class="px-2 py-1 md:text-sm md:ml-3 cursor-pointer font-medium text-xs leading-5 rounded-md transition ease-in-out duration-150"
            :class="[
									filter == today - 15780000 ? 'text-green-700 bg-green-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
								]"
          >
            <input type="radio" v-model="filter" id="filter-6m" :value="today - 15780000" class="fixed opacity-0 cursor-pointer" />
            6m
          </label>
          <label
            for="filter-1y"
            class="px-2 py-1 md:text-sm md:ml-3 cursor-pointer font-medium text-xs leading-5 rounded-md transition ease-in-out duration-150"
            :class="[
									filter == today - 31536000 ? 'text-green-700 bg-green-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
								]"
          >
            <input type="radio" v-model="filter" id="filter-1y" :value="today - 31536000" class="fixed opacity-0 cursor-pointer" />
            1y
          </label>
          <label
            for="filter-all"
            class="px-2 py-1 md:text-sm md:ml-3 cursor-pointer font-medium text-xs leading-5 rounded-md transition ease-in-out duration-150"
            :class="[
									filter == 0
										? 'text-green-700 bg-green-200'
										: 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
								]"
          >
            <input type="radio" v-model="filter" id="filter-all" :value="0" class="fixed opacity-0 cursor-pointer" />
            All
          </label>
        </div>
      </div>
      <div class="max-w-7x; mx-auto lg:max-w-7xl">
        <div class="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <!-- Post -->
          <nuxt-link :to="'/blog/' + post.id" v-for="post in filteredPosts" :key="post.id" class="relative border">
            <div class="h-64 overflow-hidden border-b">
              <img v-if="Object.keys(post.data.image).length === 0" src="../../assets/img/blogpost.jpg"/>
              <img v-else class="w-full postImg" :src="post.data.image.url" alt />
            </div>
            <div class="mt-5 px-4 pb-4 h-48">
              <h2 class="text-lg leading-6 font-medium text-gray-900">{{post.data.title[0].text}}</h2>
              <p class="text-sm leading-6 text-gray-500">{{formatDate(post.first_publication_date)}}</p>
              <p class="post-description mt-2 text-base leading-6 text-gray-700">{{post.data.content[0].text}}</p>
            </div>
          </nuxt-link>
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
      filter: 0,
      today: new Date() / 1000
    }
  },

  async asyncData({ context, error, req }) {
    let blogPosts

    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      })

      // Query to get home content
      const query = await api
        .query(Prismic.Predicates.at("document.type", "blog"), {
          orderings: "[document.first_publication_date desc]"
        })
        .then(posts => {
          blogPosts = posts.results
        })
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Page not found."
      })
    }

    return { blogPosts: blogPosts }
  },

  computed: {
    filteredPosts() {
      if (!isNaN(this.filter)) {
        var filteredPosts = this.blogPosts.filter(post => {
          return (
            new Date(post.first_publication_date).getTime() / 1000 > this.filter
          )
        })
        return filteredPosts
      }
    }
  },

  beforeMount() {
    console.log(Object.keys(this.blogPosts[0].data.image).length === 0 );
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp)
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()
      return month + "-" + day + "-" + year
    }
  },
  layout: "default"
}
</script>

<style scoped>
#hero {
  background-image: url("../../assets/img/blog.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(31, 31, 31, 0.603);
  height: 400px;
}

@media screen and (max-width: 768px) {
  #hero {
    height: 300px;
  }
}
.postImg {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.post-description {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>