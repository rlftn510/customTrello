import { setAuthInHeader } from '../api'

const mutations = {
   SET_IS_ADD_BOARD (state, payload){
      state.isAddBoard = payload
   },
   SET_BOARDS (state, payload) {
      state.boards = payload
   },
   SET_BOARD(state, payload) {
      state.board = payload
   },
   LOGIN (state, token) {
     if (!token) return
     state.token = token
     localStorage.setItem('token', token)
     setAuthInHeader(token)
   },
   LOGOUT (state, token) {
     state.token = null
     delete localStorage.token
     setAuthInHeader(null)
   },
   SET_CARD(state, card) {
      state.card = card
   },
   SET_THEME(state, color) {
      state.bodyColor = color || '#fff'
      state.navColor = color ? 'rgba(0,0,0,0.15)' : '#026aa7'
   },
   SET_IS_SHOW_BOARD_SETTINGS(state, toggle) {
      state.isShowBoardSettings = toggle
   }
}

export default mutations