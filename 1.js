//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Чистая функция - это фунцкия


function Pow(number, power) {
  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= number;
  }
  return res;
}

Pow(2, 3); // должно вернуть 8 dsafdsafsadfasdfaas
Pow(3, 2); // должно вернуть 9
