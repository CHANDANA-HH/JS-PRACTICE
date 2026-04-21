function friend(friends){
  //your code here
  let friend=[];
  for(let i=0;i<friends.length;i++)
    {
      if(friends[i].length==4)
        {
          friend.push(friends[i])
        }
    }
  return friend
}
