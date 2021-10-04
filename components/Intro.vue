<template>
  <section
    id="intro"
    class="intro-section"
  >
    <div class="container mx-auto flex justify-end">
      <div class="md:w-1/2">
        <img
          :src="require('~/assets/img/title-intro.png')"
          class="section-title"
          alt="title-intro"
          width="488"
          height="35"
        >
        <p style="max-width: 528px">
          民國110年7月20日凌晨三時四十一分，臺灣製造業龍頭集團朱氏集團創辦人朱晴光病逝。<br>
          消息一出，集團關律師隨即公開董事長生前遺囑：朱老爺將於一個充滿故事的地點 - 太麻里 - 公開舉辦家族財產拍賣會，而朱氏集團究竟由誰繼承也將在拍賣會中公布......
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.intro-section
  @apply bg-cover
  background-image: url('~/assets/img/bg-intro-m.png')
  padding-top: 180px
  padding-bottom: 180px
  @screen md
    background-image: url('~/assets/img/bg-intro.png')
</style>
