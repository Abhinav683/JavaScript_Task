let str17 = "Obdure Infotech";
let count5 = 0;
let count6 = 0;
let f=0;
for (let i = 0; i < str17.length; i++) {
    count5=0;
  for (let j = 0; j < str17.length; j++) {
    if (str17[i] == str17[j]) {
      count5++;
    }
  }
  if (count5 >= count6) {
    count6 = count5;
    f=i;
  }
}
console.log("Highest Frequency Element = " ,str17[f]);