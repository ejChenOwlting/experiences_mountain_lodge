<template>
  <section class="features-section">
    <div class="container mx-auto text-center flex flex-col items-center">
      <img
        src="https://static.owlting.com/experiences_mountain_lodge/title-features.png"
        class="section-title"
        alt="title-features"
        width="400"
        height="36"
      >
      <p class="mb-10">
        一場深山裡的拍賣會，五位繼承人選，還有如謎霧般的關係糾葛<br>
        是陰謀？還是苦衷？<br>
        兩天一夜的解謎與闖關，讓你一步步揭開朱氏集團背後的家族故事。
      </p>
      <ul
        class="flex flex-wrap md:justify-center"
        style="max-width: 760px"
      >
        <li
          v-for="index in 5"
          :key="`feature_${index}`"
          class="feature-item"
        >
          <img
            width="160"
            height="72"
            :src="`https://static.owlting.com/experiences_mountain_lodge/feature-${index}.png`"
            :alt="`feature_${index}`"
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>


<style lang="sass" scoped>
.features-section
  @apply bg-cover
  background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-features-m.jpg')
  @screen md
    background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-features.png')

.feature-item
  @apply w-1/2 mb-12
  @screen md
    @apply w-1/3

  img
    height: 56px
    width: auto
    @screen md
      @apply mx-auto
      height: 72px
</style>
