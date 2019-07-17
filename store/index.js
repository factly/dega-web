/* eslint-disable */
import axios from 'axios';

export const state = () => ({
  organisation: Object,
  popular: Array,
});

export const mutations = {
  setOrganisation(state, organisation) {
    state.organisation = organisation;
  },
  setPopular(state, articles) {
    state.popular = articles;
  }
};

export const actions = {
  nuxtServerInit({ commit }, context) {
    const getOrg = () => axios.get(encodeURI(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`))
      .then((res) => {
        commit('setOrganisation', res.data[0]);
      })
      .catch(() => error({ code: 500, message: 'Something went wrong', homepage: true }));
    const getPopular = () => axios.get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&category=video&sortBy=publishedDate&sortAsc=false`))
      .then((res) => {
        commit('setPopular', res.data);
      })
      .catch(() => error({ code: 500, message: 'Something went wrong', homepage: true }));

    return Promise.all([
      getOrg(),
      getPopular(),
    ]);
  }
};

export const getters = {
  getOrganisation(state) {
    return state.organisation;
  },
  getPopular(state) {
    return state.popular;
  }
};
