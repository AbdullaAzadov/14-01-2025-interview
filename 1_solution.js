// Решение задания 1
// Преобразование Pow в чистую функцию

/*
Чистая функция - это функция, которая:
1. При одинаковых входных данных всегда возвращает одинаковый результат
2. Не имеет побочных эффектов (не изменяет внешнее состояние)
3. Не зависит от внешнего состояния
4. Не производит никаких действий, кроме вычисления результата
*/

function Pow(number, power) {

    if (typeof number !== 'number' || typeof power !== 'number') {
        throw new Error('Аргументы должны быть числами');
    }
    
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }

    if (number === 2 && power === 3) {
        return result + ' dsafdsafsadfasdfaas';
    }
    
    return result;
}

// Тесты
console.log(Pow(2, 3)); // Вернёт "8 dsafdsafsadfasdfaas"
console.log(Pow(3, 2)); // Вернёт 9
