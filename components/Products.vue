<template>
  <section class="products-section">
    <div class="container mx-auto text-center">
      <div class="flex flex-col items-center">
        <a
          class="banner-container block mb-12 md:mb-20"
          href="https://egapp.us/owlting2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="hidden md:block"
            src="https://static.owlting.com/experiences_mountain_lodge/eatgether.png"
            alt="eatgether"
            width="1000"
            height="320"
          >
          <img
            class="md:hidden"
            src="https://static.owlting.com/experiences_mountain_lodge/eatgether-mobile.png"
            alt="eatgether-mobile"
            width="1000"
            height="320"
          >
        </a>

        <a
          class="banner-container block mb-24"
          href="https://www.owlting.com/experiences/ldp/eastern-taiwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="hidden md:block"
            src="https://static.owlting.com/experiences_mountain_lodge/experiences.png"
            alt="experiences"
            width="1000"
            height="320"
          >
          <img
            class="md:hidden"
            src="https://static.owlting.com/experiences_mountain_lodge/experiences-mobile.png"
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
          class="text-center mb-10"
          style="max-width: 600px"
        >
          「奧丁丁體驗」是精選全世界特色體驗的預訂平台，我們的成立來自於對世界的好奇與探索，充滿上山下海的精神、享受在地嚮導深入的導覽、熱愛發掘獨特的生活態度，在這裡你可以找到專屬於你的特色體驗！
        </p>

        <a
          class="btn w-full"
          href="https://www.owlting.com/experiences/?curr=TWD&l=tw"
          target="_blank"
          rel="noopener noreferrer"
        >
          看更多特色體驗
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsSection',
  data () {
    return {
      productList: []
    }
  }
}
</script>

<style lang="sass" scoped>
.banner-container
  @apply relative
  &:after
    @screen md
      @apply absolute top-0 left-0 right-0 w-full h-full bg-background opacity-50
      content: ''
      transition: opacity .2s
  &:hover
    &:after
      @apply opacity-0
</style>
