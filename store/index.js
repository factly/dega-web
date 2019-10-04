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
  async nuxtServerInit({ commit }, { app, error }) {
    return app.$axios.$get(encodeURI(`${process.env.API_URI}/api/v1/organizations/?client=${process.env.CLIENT_ID}`))
      .then((res) => {
        commit('setOrganisation', res[0]);
      })
      .catch(() => error({ code: 500, message: 'Something went wrong', homepage: true }));
  }
};

export const getters = {
  getOrganisation(state) {
    return state.organisation;
  }
};
