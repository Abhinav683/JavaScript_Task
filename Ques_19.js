let str16 = "I am abhinav_sharma";

let occ = "a";
let count3 = 0;
for (let co = 0; co < str16.length; co++) {
  if (str16[co] == occ) {
    count3++;
  }
}
console.log("Occurrence of a given Character ---", count3);