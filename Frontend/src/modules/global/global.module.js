import Vue from 'vue'
// import {convertShift} from '../../services/utills'
import moment from 'moment'

export const CHANGE_MSG = 'global/CHANGE_MSG'
export const CONVERT_DATA = 'global/CONVERT_DATA'

const state = {
  storeMsg: 'this is storeMsg from store',
  shiftsData: []
}

const mutations = {
  [CHANGE_MSG] (state, storeMsg) {
    console.log('mutate msg', storeMsg)
    state.storeMsg = storeMsg
    console.log('mutate storeMsg after', storeMsg)
  },
  [CONVERT_DATA] (state, shifts) {
    let shiftsDataLength = state.shiftsData.length
    let newShiftsDataLength = shifts.length
    if (shiftsDataLength === newShiftsDataLength) return state.shiftsData
    // const shiftsIds = shifts.map(shift => shift.date)
    const shiftsIds = new Set(shifts.map(shift => shift.date))
    if (shiftsDataLength === 0) {
      state.shiftsData = shifts.map(shift => {
        return {
          id: shift.id,
          date: moment(shift.date),
          startDate: moment(shift.data.startDate),
          endDate: moment(shift.data.endDate)
        }
      })
      console.log('shiftsData aftet convert', state.shiftsData)
      return state.shiftsData
    }
    state.shiftsData.forEach(shift => {
      shiftsIds.delete(shift.id)
    })
  }
}

const actions = {
  getShifts ({state, commit}) {
    Vue.http.get('workData')
      .then(res => res.json())
      .then(shiftsData => {
        console.log(shiftsData)
      })
  },
  postShist ({state, commit}, shift) {
    console.log(shift)
    Vue.http.post('workData', shift)
      .then(res => res.json())
      .then(shifts => {
        console.log('shiftsData', shifts)
        commit(CONVERT_DATA, shifts)
      })
  }
}

const getters = {
  storeMsg: state => state.storeMsg,
  shiftsData: state => state.shiftsData
}

export default {
  state,
  getters,
  mutations,
  actions
}
