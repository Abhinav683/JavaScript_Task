
let str30= "obdureInfotech";
let rep="S"
let flag=0
console.log("Remove First Occurrence with another---");
for(let i=0;i<str30.length;i++)
  {
    for(let j=1;j<str30.length;j++)
    {  if(str30[i]=="e")
      {  str30 = str30.substring(0,i)+"S"+str30.substring(i+1,str30.length)
        console.log(str30);
        flag=1;
        break;
      }
    }
if(flag==1)
  break;
  }