let str12 = "abcccba";
let len = str12.length - 1;
let b = 0;
for (let i = 0; i <= str12.length / 2; i++) {
  if (str12[i] != str12[len]) {
    console.log(str12[i]);
    b = 0;
    break;
  } else {
    b = 1;
    len--;
  }
}
if (b == 0) console.log("Not Palindrome");
else console.log("Palindrome");