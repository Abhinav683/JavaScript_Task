let  str40="  abhinav Sharma "
console.log("Trim");
for(let i=0;i<str40.length;i++)
  {
    if(str40[i]==" ")
      {str40=str40.substring(0,i)+str40.substring(i+1);
        i--;
      }
  }
 console.log(`"${str40}"`);