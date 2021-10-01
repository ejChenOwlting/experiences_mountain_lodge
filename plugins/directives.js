import Vue from 'vue'
import bodyScrollLock from '~/directives/body-scroll-lock'

export default () => {
  Vue.directive('body-scroll-lock', bodyScrollLock)
}
