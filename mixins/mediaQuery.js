export default {
  data() {
    return {
      resizeScheduled: null
    }
  },
  mounted() {
    if (process.client) {
      this.updateScreen()
      window.addEventListener('resize', this.resizeHandler)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.resizeHandler)
    }
  },
  methods: {
    resizeHandler() {
      if (this.resizeScheduled) {
        clearTimeout(this.resizeScheduled)
      }
      this.resizeScheduled = setTimeout(this.updateScreen, 150)
    },
    updateScreen() {
      const screen = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
      this.$store.commit('app/SET_SCREEN', screen)
    }
  }
}
