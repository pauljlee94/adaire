<template>
  <div class="pt-16 md:pt-24">
    <pre>{{blogPost}}</pre>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "@/prismic.config.js"

export default {
  async asyncData({ context, error, req, params }) {
    let blogPost

    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      })

      // Query to get home content
      const query = await api
        .query(Prismic.Predicates.at("document.id", params.id))
        .then(posts => {
          blogPost = posts.results[0]
        })
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Page not found."
      })
    }

    return { blogPost: blogPost }
  }
}
</script>

<style lang="scss" scoped>
</style>