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
