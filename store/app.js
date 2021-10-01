export const state = () => ({
  screen: {
    innerWidth: 0,
    innerHeight: 0
  },
  currentPage: null,
  currentPath: null,
  currentQuery: null
})

export const getters = {
  isMobile: (state) => {
    return state.screen.innerWidth < 768
  },
  isTablet: (state) => {
    return state.screen.innerWidth >= 768 && state.screen.innerWidth < 1200
  },
  isDesktop: (state) => {
    return state.screen.innerWidth >= 1200
  },
  hasScreenDone: (state) => {
    return state.screen.innerWidth > 0
  }
}

export const mutations = {
  SET_SCREEN: (state, payload) => {
    state.screen = payload
  },
  SET_CURRENT_PAGE: (state, payload) => {
    state.currentPage = payload
  },
  SET_CURRENT_PATH: (state, payload) => {
    state.currentPath = payload
  },
  SET_CURRENT_QUERY: (state, payload) => {
    state.currentQuery = payload
  }
}

export const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
