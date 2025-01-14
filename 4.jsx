
import { useState, useEffect } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      const handleResize = () => {
        console.log('Resize event detected');
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listener when count changes or component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [count]);

  const isGreaterThan5 = count > 5;

  return (
    <div className="p-4">
      <p className="mb-2">Счетчик: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Увеличить
      </button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Уменьшить
      </button>
      {isGreaterThan5 && <p className="mt-2 text-blue-500">Счетчик больше 5</p>}
    </div>
  );
};

export default Component;
