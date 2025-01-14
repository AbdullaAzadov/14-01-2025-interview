import { useState, useEffect, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Оптимизированная проверка условия count > 5
  const isGreaterThan5 = count > 5;

  // Мемоизированный обработчик изменения размера окна
  const handleResize = useCallback(() => {
    console.log('Resize event detected');
  }, []);

  // Один useEffect для обработки resize события
  useEffect(() => {
    if (isGreaterThan5) {
      window.addEventListener('resize', handleResize);
      // Очистка обработчика при размонтировании или изменении условия
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isGreaterThan5, handleResize]);

  // Мемоизированные обработчики для кнопок
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={handleIncrement}>Увеличить</button>
      <button onClick={handleDecrement}>Уменьшить</button>
      {isGreaterThan5 && <p>Счетчик больше 5</p>}
    </div>
  );
};

export default Counter;

/*
Оптимизации:
1. Убран лишний useState для isGreaterThan5 - значение вычисляется напрямую
2. Убран лишний useEffect для проверки count > 5
3. Добавлен useCallback для обработчиков событий
4. Добавлена очистка обработчика resize
5. Использован функциональный подход для обновления состояния
6. Условный useEffect для resize события вынесен за пределы условия рендеринга
7. Компонент переименован для лучшей семантики
*/ 