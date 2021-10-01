<template>
  <section class="hero-section">
    <div class="container mx-auto md:flex md:justify-end">
      <div class="hero-title relative z-10">
        <img
          :src="require('~/assets/img/logo.png')"
          alt="logo"
          width="455"
          height="185"
        >
        <div>
          <div class="tracking-widest mb-10">
            〖全台唯一 兩天一夜實境解謎戲〗<br>奧丁丁獨家
          </div>
          <a
            class="btn w-full"
            href="#intro"
          >
            進入山莊
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
$p-top: 90px
$p-bottom: 36px

.hero-section
  @apply h-screen bg-cover relative
  background-image: url('~/assets/img/hero.png')
  padding-top: $p-top
  padding-bottom: $p-bottom

  &:before
    @apply absolute top-0 left-0 right-0 w-full h-full
    background: linear-gradient(180deg, rgba(28, 30, 43, 0.9) 0%, rgba(28, 30, 43, 0.3) 80.32%)
    content: ''
    @screen md
      @apply hidden

.hero-title
  @apply text-center flex flex-col justify-between h-full
  height: calc(100vh - #{$p-top} - #{$p-bottom})
  @screen md
    @apply block w-1/2 px-6 py-32
</style>
