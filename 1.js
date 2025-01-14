//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Answer
// Чистая функция - это которая при одинаковых значениях аргументов всегда
// возвращает одинаковые значения и не имеет наблюдаемых побочных эффектов.

let globalCounter = 0;

function Pow(number, power) {
  globalCounter++;
  const MathLibraryResult = Math.pow(number, power);

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= number;
  }

  // return MathLibraryResult;
  console.log(res);
}

Pow(2, 3); // должно вернуть 8
Pow(3, 2); // должно вернуть 9
