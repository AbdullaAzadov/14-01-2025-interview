//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Чистая функция - это Чистая функция в JavaScript это функция, которая всегда возвращает одинаковый результат для одинаковых входных данных и не имеет побочных эффектов.

let globalCounter = 0;

function Pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

console.log(Pow(2, 3)); // должно вернуть 8 dsafdsafsadfasdfaas
console.log(Pow(3, 2)); // должно вернуть 9
