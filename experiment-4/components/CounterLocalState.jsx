import { useState } from "react"; 

export default function LocalCounter() {
  const [count, setCount] = useState(0);

   // Event handlers for click event
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>
        Increase
      </button>
      <button onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
}