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
  @apply bg-cover bg-fixed
  background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-more-m.jpg')
  @screen md
    background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-more.jpg')
</style>
