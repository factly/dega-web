/* eslint-disable */

import Vuex from 'vuex'
import axios from 'axios'
const state = () => {
  return new Vuex.Store({
    
    state: {
      loadedPosts: [],
      locales: ['en'],
      locale: 'en',
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      },
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale;
        }
      }
    },
    actions: {
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      },
      nuxtServerInit(vuexContext, context){
        return axios.get(encodeURI(`${process.env.apiUri}/api/v1/organizations/?client=${process.env.clientId}`))
        .then(response => response.data)
        .catch(err => console.log(err));
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}

export default state
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
