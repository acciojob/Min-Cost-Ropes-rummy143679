function mincost(arr)
{ 
//write your code here
// return the min cost
  let sr = arr.sort();
  cost += sr[0]+sr[1];
  let nxt = sr.slice(2);
  nxt.push(sr[0]+sr[1]);
  if(nxt.length >= 2){
    return mincost(nxt);
  }else{
      return cost;
  }
}

module.exports=mincost;
