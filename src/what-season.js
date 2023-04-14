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
function getSeason(date = 'undefined') {
  if(date === 'undefined'){return 'Unable to determine the time of year!'};
  if(date instanceof Date){
    if(Object.prototype.toString.call(date) !== '[object Date]') {throw new Error('Fake date!')};

  const month = date.getMonth(); 
 

  switch(month){
    case 0:
      case 1:
        case 11:
          return 'winter';
    case 10:
      case 9:
        case 8:
          return 'autumn';
    case 7:
      case 6:
        case 5:
          return 'summer';
    case 4:
      case 3:
        case 2:
          return 'spring';
  }
  }throw new Error ("Invalid date!");
}

module.exports = {
  getSeason
};


