function longestConsec(strarr, k) {
    // your code
  let maxLen=0;
  let res='';
  for(let i=0;i<=strarr.length-k;i++)
    {
      let concat_str=''
      for(let j=0;j<k;j++)
        {
          concat_str = concat_str+strarr[i+j]
        }
      
      let len = concat_str.length;
      if(len>maxLen)
        {
          res=concat_str;
          maxLen=len
        }
    }
  return res
}
