/* eslint-disable */
export const state = () => ({
  organisation: Object,
});

export const mutations = {
  setOrganisation(state, organisation) {
    state.organisation = organisation;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const org = await this.$axios.$get(encodeURI(`${process.env.API_URI}/api/v1/organizations`))
    commit('setOrganisation', org.data)
  }
};

export const getters = {
  getOrganisation(state) {
    return state.organisation;
  }
};
