function order(words){
  // ...
  let str=''
  let arr = words.split(' ');
  for(let i=1;i<=9;i++)
    {
      for(let j=0;j<arr.length;j++)
        {
          if(arr[j].includes(i.toString()))
            {
              str=str+arr[j]+' '
            }
        }
    }
  return str.trim()
}
