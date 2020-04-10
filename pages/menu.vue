<template>
  <div>
    <div id="hero" class="flex justify-center items-center h-64 pt-16 md:pt-24">
      <h1 class="text-5xl text-white">Menu</h1>
    </div>
    <div class="py-12 px-6 md:px-12">test</div>
  </div>
</template>

<script>
export default {
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