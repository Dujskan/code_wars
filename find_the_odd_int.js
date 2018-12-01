
function findOdd(numbers) {
  let count = 0;
  for(let i = 0; i < numbers.length; i++){
      let current = numbers[i];
      for(let j = 0; j < numbers.length; j++){
          if(numbers[j] == current){
              count++;
          }
      }
      
      if(count % 2 !== 0)
          return current;

      count = 0;
  }

  return "undefined";
}

//this is so sexy 
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
