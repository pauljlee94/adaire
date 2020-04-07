<template>
  <div>
    <!-- Hero -->
    <div id="hero" class="flex justify-center items-center h-screen mx-auto">
      <div class="px-16 sm:text-center lg:text-left">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          The
          <span class="text-green-600">BiSTRO</span> at
          <span class="text-orange-400">ADAiRE</span>
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <nuxt-link
              to="/#services"
              class="w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base leading-6 bg-white font-medium rounded-md text-gray-800 hover:text-green-600 hover:border-green-600 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >Services</nuxt-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <nuxt-link
              to="/#contact"
              class="w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base leading-6 bg-white font-medium rounded-md text-gray-800 hover:text-orange-500 hover:border-orange-500 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >Contact Us</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div id="services" class="pt-20 md:pt-32 px-6 md:px-12">
      <div class="mb-10 border-b-4 border-green-700 w-full md:w-40">
        <h2 class="text-3xl text-left md:text-center">Services</h2>
      </div>
      <div class="max-w-7x; mx-auto lg:max-w-7xl">
        <div class="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8">
          <div class="mt-10 md:mt-0">
            <div class="flex items-center justify-center rounded-md">
              <img src="~/assets/img/hero.jpg" alt />
            </div>
            <div class="mt-3">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Lunch</h3>
              <p
                class="mt-2 text-base leading-6 text-gray-500"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </div>
          <div class="mt-10 md:mt-0">
            <div class="flex items-center justify-center rounded-md">
              <img src="~/assets/img/hero.jpg" alt />
            </div>
            <div class="mt-3">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Corporate Catering</h3>
              <p
                class="mt-2 text-base leading-6 text-gray-500"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </div>
          <div class="mt-10 md:mt-0">
            <div class="flex items-center justify-center rounded-md">
              <img src="~/assets/img/hero.jpg" alt />
            </div>
            <div class="mt-3">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Take Home Meals</h3>
              <p
                class="mt-2 text-base leading-6 text-gray-500"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </div>
          <div class="mt-10 md:mt-0">
            <div class="flex items-center justify-center rounded-md">
              <img src="~/assets/img/hero.jpg" alt />
            </div>
            <div class="mt-3">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Private Dinners at the BiSTRO</h3>
              <p
                class="mt-2 text-base leading-6 text-gray-500"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About US -->
    <div id="about" class="pt-20 md:pt-32 px-6 md:px-12">
      <div class="mb-10 border-b-4 border-orange-500 w-full md:w-40">
        <h2 class="text-3xl text-right md:text-center">About Us</h2>
      </div>
      <div class="relative bg-gray-800">
        <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img class="w-full h-full object-cover" src="~/assets/img/about.jpg" alt="Support team" />
        </div>
        <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">Award winning support</div>
            <h2 class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">We’re here to help</h2>
            <p
              class="mt-3 text-lg leading-7 text-gray-300"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
            <div class="mt-8"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div id="testimonials" class="pt-20 md:pt-32 px-6 md:px-12">
      <div class="mb-10 border-b-4 border-green-700 w-full md:w-48">
        <h2 class="text-3xl text-left md:text-center">Testimonials</h2>
      </div>
      <div class="max-w-7xl mx-auto md:grid md:grid-cols-3 gap-8">
        <div class="py-8 md:flex md:flex-col">
          <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
            <div class="relative text-lg leading-7 font-medium text-white md:flex-grow">
              <p
                class="relative text-gray-900"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
            </div>
            <div class="mt-8">
              <div class="flex">
                <!-- image -->
                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <!-- Name -->
                <div class="ml-4">
                  <div class="text-base leading-6 font-medium text-gray-900">Judith Black</div>
                  <div class="text-base leading-6 font-medium text-gray-900">CEO, Tuple</div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="py-8 md:flex md:flex-col">
          <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
            <div class="relative text-lg leading-7 font-medium text-white md:flex-grow">
              <p
                class="relative text-gray-900"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
            </div>
            <div class="mt-8">
              <div class="flex">
                <!-- image -->
                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <!-- Name -->
                <div class="ml-4">
                  <div class="text-base leading-6 font-medium text-gray-900">Judith Black</div>
                  <div class="text-base leading-6 font-medium text-gray-900">CEO, Tuple</div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="py-8 md:flex md:flex-col">
          <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
            <div class="relative text-lg leading-7 font-medium text-white md:flex-grow">
              <p
                class="relative text-gray-900"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
            </div>
            <div class="mt-8">
              <div class="flex">
                <!-- image -->
                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <!-- Name -->
                <div class="ml-4">
                  <div class="text-base leading-6 font-medium text-gray-900">Judith Black</div>
                  <div class="text-base leading-6 font-medium text-gray-900">CEO, Tuple</div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="pt-20 md:pt-32 px-6 md:px-12 mb-32">
      <div class="mb-10 mx-auto border-b-4 border-orange-500 w-full md:w-40">
        <h2 class="text-3xl text-center">Contact</h2>
      </div>
      <div class="bg-white border shadow-lg overflow-hidden sm:rounded-lg w-full lg:w-1/2 mx-auto p-10">
        <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
            <div class="mt-1">
              <input id="first_name" class="border rounded form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
            <div class="mt-1">
              <input id="last_name" class="border rounded form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email" type="email" class="border rounded form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="about" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">Message</label>
            <div class="mt-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <textarea id="about" rows="15" class="border rounded form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
            </div>
          </div>
          <div class="inline-flex rounded-md shadow-sm sm:col-span-6">
            <button
              type="button"
              class="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   var self = this
  //   document.body.onscroll = function() {
  //      if (
  //       document.getElementById("services").offsetTop >
  //       window.scrollY
  //     ) {
  //       history.pushState({}, null, self.$route.path)
  //     }
  //     if (
  //       document.getElementById("services").offsetTop <
  //       window.scrollY &&
  //       window.scrollY < document.getElementById("about").offsetTop
  //     ) {
  //       history.pushState({}, null, self.$route.path + "#services")
  //     }
  //      if (
  //       document.getElementById("about").offsetTop <
  //       window.scrollY &&
  //       window.scrollY < document.getElementById("testimonials").offsetTop
  //     ) {
  //       history.pushState({}, null, self.$route.path + "#about")
  //     }
  //      if (
  //       document.getElementById("testimonials").offsetTop <
  //       window.scrollY &&
  //       window.scrollY < document.getElementById("contact").offsetTop
  //     ) {
  //       history.pushState({}, null, self.$route.path + "#testimonials")
  //     }
  //      if (
  //       document.getElementById("contact").offsetTop <
  //       window.scrollY
  //     ) {
  //       history.pushState({}, null, self.$route.path + "#contact")
  //     }
  //   }
  // }
}
</script>

<style >
#hero {
  background-image: url("../assets/img/hero.jpg");
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(31, 31, 31, 0.603);
}
</style>