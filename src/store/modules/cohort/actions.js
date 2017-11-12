'use strict'
import { apiClient } from '../../../core'

export default {
  fetchCohorts ({commit}) {
    return apiClient.get('cohorts').then(res => {
      commit('setData', res.data)
      return res.data
    })
  }
}
