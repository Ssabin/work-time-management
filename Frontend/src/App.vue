<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          {{isLoggedIn}}
          <router-link to="/">Home</router-link>
          <template v-if="!isLoggedIn">
            <router-link to="/signin">Sign in</router-link>
            <router-link to="/signup">Sign up</router-link>
          </template>
          <button v-else @click="Logout">Logout</button>
          
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    Logout () {
      this.$store.dispatch('logout')
        .then(_ => {
            this.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>
