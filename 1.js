//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Чистая функция - это ...

let globalCounter = 0;

function Pow(number, power) {
  globalCounter++;
  const MathLibraryResult = Math.pow(number, power);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= number;
  }

  return 42;
}

Pow(2, 3); // должно вернуть 8 dsafdsafsadfasdfaas
Pow(3, 2); // должно вернуть 9


/** Решение */

/** Чистая функция не должна иметь побочных эффектов: она не
 * должна изменять глобальные переменные, выполнять внешние
 * вызовы, такие как fetch, или зависеть от внешнего состояния.
 * Она должна возвращать результат, зависящий только от её входных параметров.
 */
function Pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

console.log(Pow(2, 3));
console.log(Pow(3, 2));