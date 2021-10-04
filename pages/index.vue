<template>
  <main>
    <app-header />
    <hero />
    <intro />
    <features />
    <tickets />
    <div class="sections-group">
      <more />
      <schedule />
      <environment />
      <contact />
      <partners />
      <products />
    </div>
    <app-footer />
  </main>
</template>

<script>
import mediaQuery from '@/mixins/mediaQuery'

export default {
  name: 'Home',
  mixins: [mediaQuery]
}
</script>

<style lang="sass" scoped>
.sections-group
  @apply relative
  &:before
    @apply top-0 right-0 left-0 bottom-0
    content: ''
    position: fixed
    z-index: -1
    background: url('https://static.owlting.com/experiences_mountain_lodge/bg-more-m.jpg') center 0 no-repeat
    background-size: cover

    @screen md
      background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-more.jpg')
</style>
