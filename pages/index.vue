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
  background-image: url('~/assets/img/bg-more-m.png')
  @screen md
    background-image: url('~/assets/img/bg-more.png')
</style>
