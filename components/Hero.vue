<template>
  <section class="hero-section">
    <div class="container mx-auto md:flex md:justify-end">
      <div class="hero-title">
        <div
          class="h-full flex flex-col justify-between md:justify-end items-center mx-auto md:mx-0"
          style="max-width: 500px"
        >
          <img
            class="md:mb-2 mx-auto"
            src="https://static.owlting.com/experiences_mountain_lodge/logo.png"
            alt="logo"
            width="400"
            height="160"
          >
          <div class="text-center w-full">
            <div class="tracking-widest mb-4 md:mb-6">
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
    </div>
  </section>
</template>

<style lang="sass" scoped>
$p-top: 90px
$p-bottom: 36px

.hero-section
  @apply h-full bg-cover relative bg-background
  background-image: url('https://static.owlting.com/experiences_mountain_lodge/hero.png')
  padding-top: $p-top
  padding-bottom: $p-bottom

  &:before
    @apply absolute top-0 left-0 right-0 w-full h-full
    background: linear-gradient(180deg, rgba(28, 30, 43, 0.9) 0%, rgba(28, 30, 43, 0.3) 80.32%)
    content: ''
    @screen md
      @apply hidden

.hero-title
  @apply pb-20 relative z-10
  height: calc(100vh - #{$p-top} - #{$p-bottom})
  @screen md
    @apply w-1/2 px-6 pt-12 pb-28
</style>
