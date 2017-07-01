<template>
  <div id="signIn">
    <h1>Login your account</h1>
    <div class="form-conatainer">
      <input type="text" v-model="user.name" placeholder="Username">
      <input type="password" v-model="user.pass" placeholder="Password">
      <button @click="SignIn">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    data () {
      return {
        user: {
          name: '',
          pass: ''
        }
      }
    },
    methods: {
      SignIn () {
        if (this.user.name === '' || this.user.pass === '') return
        this.$store.dispatch('login', {userName: this.user.name, password: this.user.pass})
          .then(_ => {
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style>
  .form-conatainer{
    display: flex;
    flex-direction: column;
  }
  input{
    margin-bottom: 5px;
  }
</style>
