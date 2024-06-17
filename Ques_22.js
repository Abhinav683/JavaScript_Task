let str19= "obdureInfotech";
let count7 = 0;
console.log("Frequency of each element---");
for (let i = 0; i < str19.length; i++) {
    count7=0;
  for (let j = 0; j < str19.length; j++) {
    if (str19[i] == str19[j]) {
      count7++;
    }
    
  }
  console.log(str19[i] ,"==", count7);
}