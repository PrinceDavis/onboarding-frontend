'use strict'
import actions from './actions'
import mutations from './mutations'

const state = {
  all: []
}

const getters = {
  all: state => state.all
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
