
function Pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result; 
}

console.log(Pow(2, 3)); 
console.log(Pow(3, 2)); 