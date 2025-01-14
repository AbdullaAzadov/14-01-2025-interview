import { useState, useEffect } from 'react';

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

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      {count > 5 && <p>Счетчик больше 5</p>}
    </div>
  );
};

export default Component;
