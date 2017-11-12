'use strict'
import Vuex from 'vuex'
import Vue from 'vue'
import cohort from './modules/cohort'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cohort
  }
})
