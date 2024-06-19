let str = "I am a String of  String World String";
let word = "String";
let k = " ";
let n = 0;
for (let i=0;i<str.length;i++) {
  if (str[i] == "S") {
    k = i;
    n=0;
    let match =true;
    for (let j = k; j < word.length; j++) {
      if (str[j] != word[n]) {
        match =false;
      }
      n++;
    }
    if(match){
      console.log(i,i+word.length);
      
    }
  }
}
