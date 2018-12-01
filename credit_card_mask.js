// return masked string
function maskify(cc) {
    let length = cc.length;
    
    if(length < 4)
      return cc;
      
    let masked = [];
    let end = cc.split('').splice(length - 4, length);

    for(let i = 0; i < length - 4; i++){
        masked.push("#");
    }
    
    return masked.concat(end).join('');
  }

console.log(maskify('455636467935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
