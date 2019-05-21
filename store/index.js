/* eslint-disable */

import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    
    state: {
      organisation: Object,
      locales: ['en'],
      locale: 'en',
    },
    mutations: {
      setOrganisation(state, organisation){
        state.organisation = organisation
      },
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale;
        }
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        return axios.get(encodeURI(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`))
        .then(res => {
          vuexContext.commit("setOrganisation", res.data[0])
        })
        .catch(e => context.error(e));
      }
    },
    getters: {
      getOrganisation(state){
        return state.organisation;
      }
  }
})
}

export default createStore
// export const state = () => ({
//   locales: ['en'],
//   locale: 'en'
// });

// export const mutations = {
//   SET_LANG(state, locale) {
//     if (state.locales.indexOf(locale) !== -1) {
//       state.locale = locale;
//     }
//   }
// };
