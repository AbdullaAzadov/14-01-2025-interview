// Чистая функция — это функция, которая при одинаковых входных данных всегда возвращает одинаковый результат и не имеет побочных эффектов

function Pow(number, power) {
  if (power === 0) return 1;
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}


console.log(Pow(2, 3));
console.log(Pow(3, 2));
