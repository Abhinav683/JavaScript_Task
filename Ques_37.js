function trim_leading(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      a = i;
      break;
    }
  }
  let v = "";
  for (let i = a; i <str.length; i++) {
    v = v + str[i];
  }
  return v;
}
console.log(trim_leading("  This is a String"));
