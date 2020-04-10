<template>
  <div>
    <div id="hero" class="flex justify-center items-center h-64 pt-16 md:pt-24">
      <h1 class="text-5xl text-white">Menu</h1>
    </div>
    <div class="py-12 px-6 md:px-12">
      <pre>{{menu}}</pre>
    </div>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "@/prismic.config.js"

export default {
  async asyncData({ context, error, req }) {
    let menu

    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      })

      // Query to get home content
      const query = await api
        .query(Prismic.Predicates.at("my.menu.active", true), {
          orderings: "[document.first_publication_date desc]"
        })
        .then(posts => {
          menu = posts.results
        })
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Page not found."
      })
    }

    return { menu: menu }
  },
  layout: "default"
}
</script>

<style scoped>
#hero {
  background-image: url("../assets/img/menu.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(31, 31, 31, 0.603);
  height: 400px;
}

@media screen and (max-width: 768px) {
  #hero {
    height: 300px;
  }
}
</style>