/* Задание 4
Отрефакторите компонент, оптимизировав его работу. При этом необходимо сохранить логику работы компонента.

Логика работы компонента:
- при клике на кнопку "Увеличить" значение счетчика увеличивается на 1
- при клике на кнопку "Уменьшить" значение счетчика уменьшается на 1
- если значение счетчика больше 5, то отображается текст "Счетчик больше 5"
- если значение счетчика больше 5, то при изменении размера окна в консоль выводится текст "Resize event detected"
*/

import { useState, useEffect } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isGreaterThan5, setIsGreaterThan5] = useState(false);

  useEffect(() => {
    if (count > 5) {
      setIsGreaterThan5(true);
    } else {
      setIsGreaterThan5(false);
    }
  }, [count]);

  useEffect(() => {
    const handleResize = () => {
      if (count > 5) {
        console.log("Resize event detected");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      {isGreaterThan5 && <p>Счетчик больше 5</p>}
    </div>
  );
};
