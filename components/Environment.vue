<template>
  <section class="environment-section">
    <div class="container mx-auto flex flex-col items-center">
      <img
        src="https://static.owlting.com/experiences_mountain_lodge/title-environment.png"
        class="section-title"
        alt="title-environment"
        width="162"
        height="35"
      >
      <p class="text-center mb-8">
        <strong>活動地點：環山雅築－台東縣太麻里鄉佳崙路292號</strong><br>
        這次的拍賣會，將舉辦在台東太麻里的一間山莊<br>
        請準備好走入謎霧環山，解開未知的謎題
      </p>
      <div
        class="img-list md:grid md:grid-cols-3 md:gap-4"
      >
        <div
          class="img-container"
          @click="openImgModal(1)"
        >
          <img
            src="https://static.owlting.com/experiences_mountain_lodge/environment-1.png"
            alt="environment-1"
            width="400"
            height="350"
          >
        </div>
        <div
          class="img-container"
          @click="openImgModal(2)"
        >
          <img
            src="https://static.owlting.com/experiences_mountain_lodge/environment-2.png"
            alt="environment-2"
            width="400"
            height="350"
          >
        </div>
        <div
          class="md:grid md:grid-rows-2 md:grid-flow-col md:gap-4"
          style="height: 350px"
        >
          <div
            class="img-container"
            @click="openImgModal(3)"
          >
            <img
              src="https://static.owlting.com/experiences_mountain_lodge/environment-3.png"
              alt="environment-3"
              width="400"
              height="350"
            >
          </div>
          <div
            class="img-container"
            @click="openImgModal(4)"
          >
            <img
              src="https://static.owlting.com/experiences_mountain_lodge/environment-4.png"
              alt="environment-4"
              width="400"
              height="350"
            >
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
    <div
      v-if="isOpenImgModal"
      v-body-scroll-lock="isOpenImgModal"
      class="img-modal"
    >
      <div class="container mx-auto flex items-center h-screen relative">
        <div
          class="absolute top-10 right-0 cursor-pointer"
          @click="closeImgModal"
        >
          <i class="owl-status-error" style="font-size: 20px" />
        </div>
        <img
          class="w-full mx-auto"
          style="max-width: 800px"
          :src="`https://static.owlting.com/experiences_mountain_lodge/environment-${activeImgIndex}.png`"
          :alt="`environment-${activeImgIndex}`"
          width="500"
          height="400"
        >
      </div>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'EnvironmentSection',
  data () {
    return {
      isOpenImgModal: false,
      activeImgIndex: null
    }
  },
  methods: {
    closeImgModal () {
      this.isOpenImgModal = false
    },
    openImgModal (index) {
      this.isOpenImgModal = true
      this.activeImgIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/_variables.sass'

.img-list
  @screen md
    height: 350px

  img
    @apply w-full h-full object-center object-cover
    transition: transform .2s

.img-container
  @apply overflow-hidden relative mb-4 md:mb-0 cursor-pointer
  &:after
    @apply w-full h-full opacity-0 bg-background absolute top-0 left-0 right-0
    content: ''
    transition: opacity .2s
  &:hover
    img
      transform: scale(1.1)
    &:after
      @apply opacity-30

.img-modal
  @apply fixed top-0 right-0 left-0 bottom-0 w-full h-full z-30 px-6
  background: rgba($color-background, .85)
</style>
