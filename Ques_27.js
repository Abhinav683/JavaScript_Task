function replace(str, c,d) {
  let str2 = '';
  let flag= false;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === c && !flag) {
          flag = true;
          str2=str2+d;
      }
      else
      str2 = str2+str[i];
  }

  return str2;
}
console.log(replace("this is a string","s","A"));