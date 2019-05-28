/* eslint-disable */

import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      organisation: Object,
      popular: Array,
      locales: ['en'],
      locale: 'en',
    },
    mutations: {
      setOrganisation(state, organisation){
        state.organisation = organisation
      },
      setPopular(state, articles){
        state.popular = articles
      },
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale;
        }
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        axios.get(encodeURI(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`))
        .then(res => {
          vuexContext.commit("setOrganisation", res.data[0])
        })
        .catch(e => context.error(e));

        axios.get(encodeURI(`${process.env.apiUri}/api/v1/posts/?client=${process.env.clientId}&category=video&sortBy=publishedDate&sortAsc=false`))
        .then(res => {
          vuexContext.commit("setPopular", res.data)
        })
        .catch(e => context.error(e));        
      }
    },
    getters: {
      getOrganisation(state){
        return state.organisation;
      },
      getPopular(state){
        return state.popular;
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
