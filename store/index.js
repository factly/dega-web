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
    return this.$axios.$get(encodeURI(`${process.env.API_URI}/api/v1/organizations/?client=${process.env.CLIENT_ID}`))
    .then( res => commit('setOrganisation', res.data) )
  }
};

export const getters = {
  getOrganisation(state) {
    return state.organisation;
  }
};
