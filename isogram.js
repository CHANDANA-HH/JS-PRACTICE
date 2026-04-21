function isIsogram(str){
  //...
  let s = str.toLowerCase();
  let set = new Set();
  for(let i=0;i<s.length;i++)
    {
      set.add(s[i]);
    }
  if(set.size === s.length)
    {
      return true
      }
    
  return false
}
