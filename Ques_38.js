let  str37="abhinav Sharma  "
console.log("Trim last");
for(let i=str37.length;i>0;i--)
  {
    if(str37[i]==" ")
      {str37=str37.substring(i+1)
        i++;
      }
    else
      break;
  }
  console.log(str37.length);