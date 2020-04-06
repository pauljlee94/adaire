<template>
  <div>
    <h1>Blog</h1>
    <pre>{{blogPosts}}</pre>
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
		
		return {blogPosts: blogPosts}

  },
  layout: "default"
}
</script>