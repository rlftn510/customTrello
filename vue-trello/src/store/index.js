
import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      isAddBoard: false,
      boards: [],
      token:null
   },
   getters: {
      isAuth (state) {
         return !!state.token
      }
   },
   mutations: {
       SET_IS_ADD_BOARD (state, payload){
          state.isAddBoard = payload
       },
       SET_BOARDS (state, payload) {
          state.boards = payload
       },
       LOGIN (state, token) {
         if (!token) return
         state.token = token
         localStorage.setItem('token', token)
         api.setAuthInHeader(token)
       },
       LOGOUT (state, token) {
         state.token = null
         delete localStorage.token
         api.setAuthInHeader(null)
       }
   },
   actions: {
      ADD_BOARD(_, {title}) {
         return api.board.create(title)
      },
      FATCH_BOARDS ({commit}) {
         return api.board.fetch().then(data => {
            commit('SET_BOARDS', data.list)
         })
      },
      LOGIN ({commit}, {email, password}) {
         return api.auth.login(email, password).then(({accessToken}) => commit('LOGIN', accessToken))
      }
   },
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store