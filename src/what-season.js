const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
if (date[1] === 11 || date[1] === 0 || date[1] === 1){
  return 'winter'
}else if (date[1] === 2 || date[1] === 3 || date[1] === 4){
  return 'spring'
}else if (date[1] === 5 || date[1] === 6 || date[1] === 7){
  return 'summer'
}else if (date[1] === 8 || date[1] === 9 || date[1] === 10){
  return 'autumn'
}else return false;
}

module.exports = {
  getSeason
};
