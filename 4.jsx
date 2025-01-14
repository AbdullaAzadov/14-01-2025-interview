/* Задание 4
Отрефакторите компонент, оптимизировав его работу. При этом необходимо сохранить логику работы компонента.

Логика работы компонента:
- при клике на кнопку "Увеличить" значение счетчика увеличивается на 1
- при клике на кнопку "Уменьшить" значение счетчика уменьшается на 1
- если значение счетчика больше 5, то отображается текст "Счетчик больше 5"
- если значение счетчика больше 5, то при изменении размера окна в консоль выводится текст "Resize event detected"
*/

import { useState, useEffect } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обработчик события resize
    const handleResize = () => {
      if (count > 5) {
        console.log('Resize event detected');
      }
    };

    // Добавляем слушатель события при значении count > 5
    if (count > 5) {
      window.addEventListener('resize', handleResize);
    }

    // Очищаем слушатель при размонтировании или изменении count
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Уменьшить</button>
      {count > 5 && <p>Счетчик больше 5</p>}
    </div>
  );
};

export default Component;
