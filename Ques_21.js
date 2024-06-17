let str18 = "Obdure Infotech";
let l=0;
for (let i = 0; i < str18.length; i++) {
    count5=0;
  for (let j = 1; j < str18.length; j++) {
    if (str18[i] == str18[j]) {
          break;
    }
  }
  if (count5 <= count6) {
    count6 = count5;
    l=i;
  }
}
console.log("Logest  Frequency Element = " ,str18[l]);