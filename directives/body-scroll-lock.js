let locks = []
let bodyOverflowSetting

const setOverflowHidden = () => {
  if (bodyOverflowSetting === undefined) {
    bodyOverflowSetting = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
}
const resetOverflow = () => {
  document.body.style.overflow = bodyOverflowSetting
  bodyOverflowSetting = undefined
}
const enableBodyScroll = el => {
  locks = locks.filter(lock => lock !== el);
  if (!locks.length) {
    resetOverflow();
  }
}
const disableBodyScroll = el => {
  setOverflowHidden()
  locks.push(el)
}

export default {
  inserted: (el, binding) => {
    if (binding.value) {
      setOverflowHidden()
    }
  },
  componentUpdated: (el, binding) => {
    if (binding.oldValue === binding.value) {
      return
    }
    if (binding.value) {
      disableBodyScroll(el)
    } else {
      enableBodyScroll(el)
    }
  },
  unbind: el => {
    enableBodyScroll(el)
  }
}