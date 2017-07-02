<template>
  <div id="signUp">
    <h1>Register a new account!</h1>
    <div class="form-conatainer">
      <input type="text" v-model="user.name" placeholder="Username">
      <input type="password" v-model="user.pass" placeholder="Password">
      <button @click="signUp">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
    data () {
      return {
        user: {
          name: '',
          pass: ''
        }
      }
    },
    methods: {
      signUp () {
        if (this.user.name === '' || this.user.pass === '') return
        this.$store.dispatch('register', {userName: this.user.name, password: this.user.pass})
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
