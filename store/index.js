/* eslint-disable */
import { organizationQuery } from '../graphql/query/organization';
import gql from 'graphql-tag';

export const state = () => ({
  organization: Object,
});

export const mutations = {
  setOrganization(state, organization) {
    state.organization = organization;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const org = await this.app.apolloProvider.defaultClient.query({
      query: gql(String.raw`
          ${organizationQuery}
      `)
    });
    commit('setOrganization', org.data.organization)
  }
};

export const getters = {
  getOrganization(state) {
    return state.organization;
  }
};
