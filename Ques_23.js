let str20= "obdureInfotech";
let occ="u"
console.log("Remove First Occurrence---");
for(let i=0;i<str20.length;i++)
  {
    for(let j=1;j<str20.length;j++)
      if(str20[i]=='u')
      {str20 = str20.substring(0,i)+str20.substring(i+1,str20.length)}
  }
  console.log(str20);