function trim_trailing(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      a = i;
    }
  }
  let v = "";
  for (let i = 0; i <= a; i++) {
    v = v + str[i];
  }
  return v;
}

console.log(trim_trailing("This is a String  "));
