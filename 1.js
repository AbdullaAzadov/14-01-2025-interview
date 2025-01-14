//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Чистая функция — это функция, 
// результат которой зависит только от её входных данных и всегда остаётся одинаковым при одинаковых аргументах, 
// а также она не имеет побочных эффектов, то есть не изменяет внешние состояния и не зависит от них.

function Pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

console.log(Pow(2, 3)); // 8
console.log(Pow(3, 2)); // 9
