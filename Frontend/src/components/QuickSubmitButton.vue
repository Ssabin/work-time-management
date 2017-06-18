<template>
    <div id="quickSubmitButtonPage">
        <button class="quick-submit__btn" @click="submitNow">{{buttonText}}</button>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'QuickSubmitButton',
        data () {
            return {
                buttonText: 'Submit Start Hour'
            }
        },
        methods: {
            submitNow () {
                if (localStorage.startTime) {
                    localStorage.setItem('endTime', moment().unix())
                } else {
                    localStorage.setItem('startTime', moment().unix())
                }
            }
        }
    }
</script>

<style>
    
</style>
