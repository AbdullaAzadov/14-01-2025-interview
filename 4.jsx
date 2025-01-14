import { useState, useEffect, useCallback } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      const handleResize = () => {
        console.log('Resize event detected');
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [count]);

  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const decrement = useCallback(() => setCount((prevCount) => prevCount - 1), []);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      {count > 5 && <p>Счетчик больше 5</p>}
    </div>
  );
};

export default Component;
