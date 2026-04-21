function solution(str){
  
  let output=[]
  for(let i=0;i<str.length;i=i+2)
    {
      let res = str.slice(i,i+2)
      if(res.length===1)
        {
          res=res+'_'
        }
      output.push(res)
    }
  return output
   
}
