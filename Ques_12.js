const  str = "my name is abhinav   ";
let a=[]
let count = 0 
for(let i=0;i<str.length;i++)
{
    if(str[i]==" " && str[i+1]!=" ")
       { count++;
    ;}
}
console.log(count);