import Vuex from 'vuex'
import Vue from 'vue'
import OrderList from './modules/OrderList'
Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    OrderList
  }
});