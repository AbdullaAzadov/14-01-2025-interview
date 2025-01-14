// Чистая функция - это функция, результат выполнения которой зависит только от её входных аргументов и
// не изменяет внешнее состояние (нет побочных эффектов).

function Pow(number, power) {
  // Используем цикл для возведения в степень
  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= number;
  }
  return res; // Возвращаем корректный результат
}

Pow(2, 3); // должно вернуть 8 dsafdsafsadfasdfaas
Pow(3, 2); // должно вернуть 9
