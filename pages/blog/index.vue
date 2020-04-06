<template>
  <div>
    <div id="hero" class="flex justify-center items-center h-64 pt-16 md:pt-24">
      <h1 class="text-5xl text-white">Blog</h1>
    </div>
    <div class="py-20 px-6 md:px-12">
      <div class="max-w-7x; mx-auto lg:max-w-7xl">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <!-- Post -->
          <nuxt-link :to="'/blog/' + post.id" v-for="post in blogPosts" :key="post.id" class="flex flex-col mt-10 lg:mt-0 border rounded-lg shadow px-4 py-4">
            <div class="h-64 overflow-hidden">
							
              <img class="w-full postImg" :src="post.data.image.url" alt />
							
            </div>
            <div class="mt-5">
              <h2 class="text-lg leading-6 font-medium text-gray-900">{{post.data.title[0].text}}</h2>
              <p class="text-sm leading-6 text-gray-500">{{formatDate(post.first_publication_date)}}</p>
              <p class="mt-2 text-base leading-6 text-gray-500">{{post.data.content[0].text}}</p>
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
import htmlSerializer from "@/plugins/html-serializer"

export default {
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
          orderings: "[my.blog-post.date desc]"
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

<style>
#hero {
  background-image: url("../../assets/img/hero.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(31, 31, 31, 0.603);
}
.postImg {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>