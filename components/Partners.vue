<template>
  <section class="partners-section">
    <div class="container mx-auto flex flex-col items-center">
      <img
        :src="require('~/assets/img/title-partners.png')"
        class="section-title"
        alt="title-partners"
        width="166"
        height="35"
      >
      <img
        :src="require('~/assets/img/partners-main.png')"
        class="mb-12"
        alt="partners-main"
        width="638"
        height="182"
      >
      <div class="flex flex-col md:flex-row md:items-center">
        <div class="mb-12 md:mb-0">
          <img
            class="mx-auto"
            :src="require('~/assets/img/partners-young-dream.png')"
            alt="young-dream"
            width="165"
            height="68"
          >
        </div>
        <div class="mb-12 md:mb-0 md:px-32">
          <img
            class="mx-auto"
            :src="require('~/assets/img/partners-mountain-lodge.png')"
            alt="mountain-lodge"
            width="94"
            height="106"
          >
        </div>
        <div>
          <img
            class="mx-auto"
            :src="require('~/assets/img/partners-tamali.png')"
            alt="tamali"
            width="100"
            height="100"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersSection'
}
</script>

<style lang="sass" scoped>
.partners-section
  background: rgba(#080A1A, .6)
</style>
