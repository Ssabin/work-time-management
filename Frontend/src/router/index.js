import Vue from 'vue'
import Router from 'vue-router'
import ShiftForm from '@/components/ShiftForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShiftForm',
      component: ShiftForm
    }
  ]
})
