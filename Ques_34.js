let str = "I am a string in JavaScript";
let word = "String";
let k = " ";
let n = 0;
let str2 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "s") {
    k = i;
    n = 0;
    let match = true;
    for (let j = k; j < word.length; j++) {
      if (str[j] != word[n]) {
        match = false;
      }
      n++;
    }
    if (match) {
      for (k = 0; k < str.length; k++) {
        if (k >= i && k <= i + word.length) {
        } else str2 = str2 + str[k];
      }
      break;
    }
  }
}
console.log(str2);
