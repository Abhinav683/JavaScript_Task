str15="abhinav sharma"
let last_occ = "a";
let s;
for (s = str15.length; s >= 0; s--) {
  if (str15[s] == last_occ) break;
}
console.log("Last Occurrence---", s+1); 