<template>
    <div id="home-page">
        {{msg}}
        <quick-submit-button></quick-submit-button>
    </div>
</template>

<script>
    import QuickSubmitButton from '@/components/QuickSubmitButton'
    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Welcome to home page'
            }
        },
        components: {
            QuickSubmitButton
        }
    }
</script>

<style>
    
</style>
