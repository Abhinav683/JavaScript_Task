let a="HeLlO";
let str=""
for(let i=0;i<a.length;i++)
    {
        let c=a.charCodeAt(i)
        if(c>=65 && c<=90)
           { c=c+32;
           
           str=str+String.fromCharCode(c)}
          
          else if(c>=97 && c<=122)
              { c=c-32;
              
              str=str+String.fromCharCode(c)}
    }
    console.log(str);