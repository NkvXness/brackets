module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let ch = bracketsConfig[i].join('');
 
    if (str.includes(ch)){
      str = str.replace(ch, '');
      i = -1;
    }
  }
  return str ? false : true;
}
