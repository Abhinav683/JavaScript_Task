let str31= "obdeureInfotech";
let rep2="S"
let j=0
console.log("Remove Last Occurrence with another---");
for(let i=str31.length;i>0;i--)
  {
    for(let j=str31.length;j>0;j--)
    {  if(str31[i]=="e")
      {  str31 = str31.substring(0,i)+"S"+str31.substring(i+1,str31.length)
        console.log(str31);
        j=1
        break;
      }
    }
    if(j==1)
      break;
  }