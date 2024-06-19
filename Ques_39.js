let str = " abhinav Sharma";
let a = 0;
// trim leading
for (let i = 0; i < str.length; i++) {
  if (str[i] != " ") {
    a = i;
    break;
  }
}
let s = 0;
let str2 = [];
let v = "";
for (let i = a; i < str.length; i++) {
  str2[s] = str[i];
  s++;
}
for (let i = 0; i < str2.length; i++) {
  v = v + str2[i];
}
/// trim trailing
let a1 = 0;
for (let i = v.length; i > 0; i--) {
  if (v[i] != " ") {
    a1 = i;
    break;
  }
}

let s1 = 0;
let str3 = [];
let v1 = "";
for (let i = 0; i < a1; i++) {
  str3[s1] = v[i];
  s1++;
}
for (let i = 0; i < a1; i++) {
  v1 = v1 + str3[i];
}
console.log(v1);
