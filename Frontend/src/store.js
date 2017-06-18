import Vuex from 'vuex'
import globalModule from './modules/global/global.module'

export default new Vuex.Store({
    modules: {
        global: globalModule
    }
})
