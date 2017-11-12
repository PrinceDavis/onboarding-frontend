'use strict'
import axios from 'axios'
export default {
  baseUrl: 'http://localhost:8080/',
  // baseUrl: 'http://nginx/',
  get (url) {
    return axios.get(this.baseUrl + url)
  },

  post (url, data) {
    return axios.post(this.baseUrl + url, data)
  }
}
