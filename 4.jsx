import { useState, useEffect, useCallback } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const handleResize = useCallback(() => {
    if (count > 5) {
      console.log("Resize event detected");
    }
  }, [count]);

  useEffect(() => {
    if (count > 5) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [count, handleResize]);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Уменьшить
      </button>
      {count > 5 && <p>Счетчик больше 5</p>}
    </div>
  );
};

export default Component;
