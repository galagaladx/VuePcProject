import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/Index'
import Detail from '../components/pages/Detail'
import Count from '../components/pages/detailchildren/Count'
import Forecast from '../components/pages/detailchildren/Forecast'
import Publish from '../components/pages/detailchildren/Publish'
import Analysis from '../components/pages/detailchildren/Analysis'
import Orderlist from '../components/Orderlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      redirect: '/',
      children: [
        {path: 'count', component: Count},
        {path: 'forecast', component: Forecast},
        {path: 'publish', component: Publish},
        {path: 'analysis', component: Analysis}
      ]
    },
    {
      path: '/orderlist',
      name: 'Orderlist',
      component: Orderlist
    }
  ]
})
