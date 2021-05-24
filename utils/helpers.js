const format_date = (req, res, next) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    return date.toLocaleTimeString();
  }
  
  module.exports = format_date;