<template>
  <div id="shiftForm" class="shift-form__container">
        <input type="date" v-model="dateTimeInput" />
        <input type="text" v-model="startTimeInput" />
        {{startTime}}
        <input type="text" v-model="endTimeInput" />
        {{endTime}}
        <input type="submit" value="Submit shift data" @click="submitShiftData">
        {{storeMsg}}
        <input type="submit" value="Loaf shift data" @click="loadData">
    </div>
</template>

<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
export default {
  name: 'ShiftForm',
  data () {
    return {
      dateTimeInput: '2017-06-02',
      startTimeInput: '800',
      endTimeInput: '900',
      submitedData: null
    }
  },
  methods: {
    submitShiftData () {
      if (!this.dateTime.isValid() &&
         this.startTime === 'Invalid date' &&
         this.endTime === 'Invalid date') {
        return
      }
      const startDate = moment(this.dateTime).hour(this.getHours(this.startTime)).minute(this.getMinutes(this.startTime)).unix()
      const endDate = moment(this.dateTime).hour(this.getHours(this.endTime)).minute(this.getMinutes(this.endTime)).unix()
      this.$store.dispatch('postShist', {date: this.dateTime.unix(), data: {startDate, endDate}})
    },
    getHours (time) {
      let indx = time.indexOf(':')
      return time.slice(0, indx)
    },
    getMinutes (time) {
      let indx = time.indexOf(':')
      return time.slice(indx + 1, time.length)
    },
    loadData () {
      this.$store.dispatch('getShifts')
    }
  },
  computed: {
    ...mapGetters(['storeMsg']),
    startTime () {
      return moment(this.startTimeInput, 'hmm').format('HH:mm')
    },
    endTime () {
      return moment(this.endTimeInput, 'hmm').format('HH:mm')
    },
    dateTime () {
      return moment(this.dateTimeInput, ['MM-DD-YYYY', 'YYYY-MM-DDD'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shift-form__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
  input{
    width: 100%;
  }
  input:not(:last-of-type){
    margin-bottom: 10px;
  }
</style>
