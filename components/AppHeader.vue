<template>
  <header class="fixed top-0 left-0 right-0 py-5 z-20 px-6">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <a
          href="https://www.owlting.com/experiences/?l=tw&curr=TWD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="require('~/assets/img/experiences-logo.svg')"
            alt="experiences"
            width="185"
            height="40"
          >
        </a>
        <nav class="text-lg -mx-6 hidden md:flex">
          <a
            v-for="menu in menuList"
            :key="menu.hash"
            :href="`#${menu.hash}`"
            class="block px-6 cursor-pointer"
          >
            {{ menu.label }}
          </a>
        </nav>

        <div
          class="md:hidden"
          @click="toggleModal"
        >
          A
        </div>
      </div>
    </div>

    <transition name="fade">
    <div
      v-if="isOpenMenu"
      v-body-scroll-lock="isOpenMenu && isMobile"
      class="menu-modal md:hidden"
      @click.self="closeModal"
    >
      <div class="bg-background py-8">
        <nav class="text-center">
          <a
            v-for="menu in menuList"
            :key="menu.hash"
            :href="`#${menu.hash}`"
            class="block px-6 cursor-pointer mb-4 last:mb-0"
            @click="closeModal"
          >
            {{ menu.label }}
          </a>
        </nav>
      </div>
    </div>
    </transition>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      isOpenMenu: false,
      menuList: [
        { label: '背景故事', hash: 'intro' },
        { label: '拍賣會日程', hash: 'schedule' },
        { label: '入場券', hash: 'tickets' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile'
    })
  },
  methods: {
    toggleModal () {
      this.isOpenMenu = !this.isOpenMenu
    },
    closeModal () {
      this.isOpenMenu = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/_variables.sass'

header
  background: linear-gradient(180deg, rgba(28, 30, 43, 0.8) 0%, rgba(26, 28, 43, 0) 100%)

.menu-modal
  @apply fixed z-10 w-full left-0 right-0 bottom-0
  background: rgba($color-background, .3)
  top: 80px
</style>
