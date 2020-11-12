export const state = () => ({
  partials: {},
})

export const mutations = {
  setPartials(state, partials) {
    state.partials = partials
  },
}

export const actions = {
  async loadPartials({ commit }) {
    const partials = (await this.$prismic.api.getSingle('partials')).data
    commit('setPartials', partials)
  },
}
