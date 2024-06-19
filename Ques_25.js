function removefirstchar(str, c) {
  let str2 = '';
  let flag= false;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === c ) {
          continue;
      }
      str2 = str2+str[i];
  }

  return str2;
}
console.log(removefirstchar("this is a string","s"));