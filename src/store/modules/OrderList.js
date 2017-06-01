import Vue from 'vue'
import axios from 'axios'

const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
}

const actions = {
  fetchOrderList({
    commit,
    state
  }) {
    axios.post('/api/getOrderList', state.params).then((res) => {
      commit('updataOrderList', res.data.list)
    }).catch((err) => {
      console.log(err)
    })
  }
}

const mutations = {
  updataOrderList(state, payload) {
    state.orderList = payload
  },
  updataParams(state, {key, val}) {
    state.params[key] = val;
    console.log(111);
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
