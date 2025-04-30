import { useState } from "react";
export const useCounter = (initialCount = 0) => { // (hoặc “custom hook”) – “share” (hoặc “expose”) custom hook (hoặc “shared logic”) giữa các micro frontend (hoặc host).
	const [count, setCount] = useState(initialCount);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	return { count, increment, decrement };
};