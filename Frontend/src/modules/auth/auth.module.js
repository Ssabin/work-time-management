import Vue from 'vue'

export const SAVE_LOGGED_IN_USER = 'auth/SAVE_LOGGED_IN_USER'
export const LOG_OUT_USER = 'auth/LOG_OUT_USER'

const state = {
    isLoggedIn: false,
    userLoggedIn: {}
}

const mutations = {
    [SAVE_LOGGED_IN_USER] (state, user) {
        state.userLoggedIn = user
        state.isLoggedIn = true
    },
    [LOG_OUT_USER] (state) {
        state.userLoggedIn = {}
        state.isLoggedIn = false
    }
}

const actions = {
    login ({state, commit}, user) {
        return Vue.http.post('login', user)
            .then(res => res.json())
            .then(user => {
                commit(SAVE_LOGGED_IN_USER, user)
            })
            .catch(err => {
                console.log(err.body)
            })
    },
    register ({state, commit}, user) {
        return Vue.http.post('register', user)
            .then(res => res.json())
            .then(user => {
                commit(SAVE_LOGGED_IN_USER, user)
            })
            .catch(err => {
                console.log(err.body)
            })
    },
    logout ({state, commit}) {
        return Vue.http.post('logout', state.userLoggedIn)
            .then(res => res.json())
            .then(user => {
                commit(LOG_OUT_USER)
            })
            .catch(err => {
                console.log(err.body)
            })
    }
}

const getters = {
    isLoggedIn: state => state.isLoggedIn,
    userLoggedIn: state => state.userLoggedIn
}

export default {
    state,
    getters,
    mutations,
    actions
}
