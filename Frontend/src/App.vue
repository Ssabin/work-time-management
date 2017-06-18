<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    // ...mapGetters(['shiftsData'])
  }
}
</script>

<style>
</style>
