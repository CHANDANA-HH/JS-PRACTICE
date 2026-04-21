function duplicateCount(text){
  //...
  let freq={};
  let t = text.toLowerCase();
  for(let i=0;i<t.length;i++)
    {
      let ch =t[i];
      freq[ch]= (freq[ch]||0)+1
    }
  let count =0;
  for(keys in freq)
    {
      if(freq[keys]>1)
        {
          count++;
        }
    }
  return count
}
