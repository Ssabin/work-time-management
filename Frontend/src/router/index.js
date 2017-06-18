import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import SignUp from '@/components/SignUp'
// import ShiftForm from '@/components/ShiftForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // children: [
      //   {path: 'shiftForm', component: ShiftForm}
      // ]
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
