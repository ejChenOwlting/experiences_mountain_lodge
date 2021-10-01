<template>
  <main>
    <app-header />
    <hero />
    <intro />
    <features />
    <tickets />
    <more />
    <schedule />
    <environment />
    <contact />
    <partners />
    <products />
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
