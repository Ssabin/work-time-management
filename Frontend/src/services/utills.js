import moment from 'moment'

function convertShift (shift) {
  return {
    id: shift.id,
    date: moment(shift.date),
    startDate: moment(shift.data.startDate),
    endDate: moment(shift.data.endDate)
  }
}

export default {
  convertShift
}
