function filter_list(l) {
  // Return a new array with the strings filtered out
  let res=[];
  for(let i=0;i<l.length;i++)
    {
      if(typeof l[i]==="number")
        {
          res.push(l[i])
        }
    }
  return res;
}
