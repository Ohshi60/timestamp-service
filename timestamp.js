var moment = require('moment')

module.exports = function getDate(req, result) {
  var result = {
    unix: "null",
    natural: "null"
  }
  if (Number(req))
    var date = moment(Number(req))
  else {
    var date = moment(req)
  }
  if (date.isValid()){
    result.unix = date.unix()
    result.natural = date.format("dddd, MMMM Do YYYY, h:mm:ss a")
  }
  return result
}
