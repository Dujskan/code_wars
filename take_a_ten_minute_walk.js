//This solution is not that good
//I should complete it in one iteration && not iterate if length < 10 or > 10
//I dont have to check (n == 0 && s == 0) || n % s == 0
//Its enought to check if length on walk == 10 and n === s and w === e
function isValidWalk(walk) {
    let n = walk.filter(dir => (dir === "n")).length;
    let s = walk.filter(dir => (dir === "s")).length;
    let w = walk.filter(dir => (dir === "w")).length;
    let e = walk.filter(dir => (dir === "e")).length;
    
    let ns, we = false;
    if((n == 0 && s == 0) || n % s == 0)
      ns = true;
    if((w == 0 && e == 0) || w % e == 0)
      we = true;
    
    return (ns && we && n + s + w + e == 10) 
  }
