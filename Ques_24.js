function removelastchar(str, c) {
  let str2 = '';
  let str3=""
  let flag= false;
  for (let i = str.length-1;i>=0 ; i--) {
      if (str[i] === c && !flag) {
          flag = true;
          continue;
      }
      str2 = str2+str[i];
  }
for(let j=str2.length-1;j>=0;j--)
  str3=str3+str2[j];
return str3
}
console.log(removelastchar("this is a string","s"));