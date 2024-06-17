let  str36="  abhinav Sharma"
console.log("Trim");
for(let i=0;i<str36.length;i++)
  {
    if(str36[i]==" ")
      {str36=str36.substring(i+1)
        i--;
      }
    else
      break;
  }
 console.log(str36);