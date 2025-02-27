const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let comand = [];
 if (!Array.isArray(members)){
 return false;
 }else for(let name of Object.values(members)){
  if(typeof(name) == 'string'){
    name = name.split(' ').join('');
    comand.push(name[0].toUpperCase());
  
}
}
comand = comand.sort();
return comand.join('');
}

module.exports = {
  createDreamTeam
};
