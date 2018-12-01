function digital_root(n) {
    if(n <= 10)
      return n;
      
    let numbers = n.toString().split('');
    let result = 0;
      
    for(let i = 0; i < numbers.length; i++){
      result += Number(numbers[i]);
    }
    
    return digital_root(result);
  }