import { useState, useEffect } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

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
  }, [count]);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

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
