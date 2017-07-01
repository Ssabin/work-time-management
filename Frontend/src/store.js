import Vuex from 'vuex'
import globalModule from './modules/global/global.module'
import authModule from './modules/auth/auth.module'

export default new Vuex.Store({
  modules: {
    global: globalModule,
    auth: authModule
  }
})
