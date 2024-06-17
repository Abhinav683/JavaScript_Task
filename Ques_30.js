let str34="I am a String in JavaScript"
  let word = "String"
  let len4=word.length;
  console.log("Word Occurrence ---");
  for(let i=0;i<str34.length;i++)
    {
      for(let j=0;j<word.length;i++)
      
        {if(word[i]!=str34[j])
        {
            i++;
        }
        if(word[i]==str34[j])
          {
            len--;
          }
      }
      if(len4==0)
        {
          console.log(str34[i]);
          break;
        }
    }