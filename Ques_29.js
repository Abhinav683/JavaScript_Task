let str = "obdure Infotech";
let occ = "e";
let a = [];
let k = " ";
let v = " ";
console.log("Remove All Occurrence---");
for (let i = 0; i < str.length; i++) {
  a[i] = str[i];
}
//
for (let i = a.length; i > 0; i--) {
  if (a[i] == occ) {
    a[i] = "S";
  }
}

for (let i = 0; i < a.length; i++) {
  v = v + a[i];
}
console.log(v);
