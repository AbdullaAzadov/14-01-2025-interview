import { useState, useEffect } from 'react';

const CounterComponent = () => {
	const [count, setCount] = useState(0);

	const handleResize = () => {
		if (count > 5) {
			console.log('Resize event detected');
		}
	};

	useEffect(() => {
		if (count > 5) {
			window.addEventListener('resize', handleResize);
		} else {
			window.removeEventListener('resize', handleResize);
		}

		// Очистка эффекта
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [count]);

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

export default CounterComponent;
