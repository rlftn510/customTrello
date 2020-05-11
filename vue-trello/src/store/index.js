
import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      isAddBoard: false
   },
   actions: {
      ADD_BOARD(_, {title}) {
         return api.board.create(title)
      }
   },
   mutations: {
       SET_IS_ADD_BOARD (state, payload){
          state.isAddBoard = payload
       }
   }
})

export default store