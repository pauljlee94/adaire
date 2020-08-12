<template>
  <div>
    <div id="hero" class="flex justify-center items-center h-64 pt-16 md:pt-24">
      <h1 class="text-5xl text-white">Menu</h1>
    </div>
    <div class="py-12 px-6 md:px-12 max-w-screen-lg m-auto">
      <div class="divide-y">
        <div v-for="(item,i) in menu" :key="item.id" :class="[i % 2 !== 0 ? 'flex-row-reverse' : null, 'flex justify-between py-10 px-8 space-x-8']">
          <div class="flex-1 w-1/2">
            <img :src="item.data.image.url" />
          </div>
          <div class="flex flex-col justify-between flex-1">
            <div>
              <h2 :class="[i % 2 === 0 ? 'border-orange-500' : 'border-green-600', 'inline-block text-sm md:text-lg lg:text-2xl font-semibold border-b-2']">{{item.data.title[0].text}}</h2>
              <p class="mt-2" v-if="item.data.description[0]">{{item.data.description[0].text}}</p>
            </div>
            <div>
              <i v-if="item.data.vegetarian" class="text-orange-300 fas fa-egg fa-2x"></i>
              <i v-if="item.data.vegan" class="text-green-500 ml-2 fas fa-leaf fa-2x"></i>
              <span v-if="item.data.glutenfree" class="ml-2 fa-stack" style="vertical-align: top;">
                <i class="text-orange-300 fas fa-bread-slice fa-stack-2x"></i>
                <i class="fas fa-times fa-stack-1x" style="color:Tomato"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
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
        req,
      })

      // Query to get home content
      const query = await api
        .query(Prismic.Predicates.at("my.menu.active", true), {
          orderings: "[document.first_publication_date desc]",
        })
        .then((posts) => {
          menu = posts.results
        })
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Page not found.",
      })
    }

    return { menu: menu }
  },
  layout: "default",
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