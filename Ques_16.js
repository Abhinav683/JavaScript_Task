str15="abhinav sharma"
let first_occ = "v";
for (i = 0; i < str15.length; i++) {
  if (str15[i] == first_occ) break;
}
console.log("first Occurrence---", i + 1);