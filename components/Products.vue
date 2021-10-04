<template>
  <section class="products-section">
    <div class="container mx-auto text-center">
      <div class="flex flex-col items-center">
        <a
          class="inline-block mb-12 md:mb-20"
          href="http://www.eatgether.com/"
          target="_blank"
        >
          <img
            class="hidden md:block"
            :src="require('~/assets/img/eatgether.png')"
            alt="eatgether"
            width="1000"
            height="320"
          >
          <img
            class="md:hidden"
            :src="require('~/assets/img/eatgether-mobile.png')"
            alt="eatgether-mobile"
            width="1000"
            height="320"
          >
        </a>

        <a
          class="inline-block mb-24"
          href="https://www.owlting.com/experiences/ldp/eastern-taiwan"
          target="_blank"
        >
          <img
            class="hidden md:block"
            :src="require('~/assets/img/experiences.png')"
            alt="experiences"
            width="1000"
            height="320"
          >
          <img
            class="md:hidden"
            :src="require('~/assets/img/experiences-mobile.png')"
            alt="experiences-mobile"
            width="1000"
            height="320"
          >
        </a>
      </div>

      <div class="flex flex-col items-center">
        <h3 class="text-lg font-bold mb-6">
          關於奧丁丁體驗
        </h3>
        <p
          class="text-center"
          style="max-width: 600px"
        >
          「奧丁丁體驗」是精選全世界特色體驗的預訂平台，我們的成立來自於對世界的好奇與探索，充滿上山下海的精神、享受在地嚮導深入的導覽、熱愛發掘獨特的生活態度，在這裡你可以找到專屬於你的特色體驗！
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'products-section',
  data () {
    return {
      productList: []
    }
  }
}
</script>
