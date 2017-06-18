<template>
    <div id="signUp">
        <h1>Register a new account!</h1>
        <form>
            <input type="text" v-model="user.name" placeholder="Username">
            <input type="password" v-model="user.pass" placeholder="Password">
            <button>Submit</button>
        </form>
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
            }
        }
    }
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin-bottom: 5px;
    }
</style>
