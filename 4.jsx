/* Задание 4
Отрефакторите компонент, оптимизировав его работу. При этом необходимо сохранить логику работы компонента.

Логика работы компонента:
- при клике на кнопку "Увеличить" значение счетчика увеличивается на 1
- при клике на кнопку "Уменьшить" значение счетчика уменьшается на 1
- если значение счетчика больше 5, то отображается текст "Счетчик больше 5"
- если значение счетчика больше 5, то при изменении размера окна в консоль выводится текст "Resize event detected"
*/

import { useState, useEffect } from 'react';

export const Component = () => {
  const [count, setCount] = useState(0);

  const handleResize = () => {
    count > 5 && console.log('Resize event detected');
  };

  useEffect(() => {
    if (count > 5) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [count, handleResize]);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      {count > 5 && <p>Счетчик больше 5</p>}
    </div>
  );
};
