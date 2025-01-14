//  Задание 1
//  Преобразуйте Pow в чистую функцию.
//  Напишите что такое чистая функция и его определения.

// Чистая функция - это функция которая не изменяет внешнюю переменную , не зависит от внешнего сосотяния и возврашает один и тот же результат если вводные данные не изменились

let globalCounter = 0;

function Pow(number, power) {;
  return Math.pow(number, power);
}

Pow(2, 3); // должно вернуть 8 
Pow(3, 2); // должно вернуть 9
