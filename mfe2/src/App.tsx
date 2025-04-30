import { useState } from "react";
import { useCounter } from "mfe1/useCounter";
function App() {
  const [text, setText] = useState("");
  const { count, increment, decrement } = useCounter(0); // (hoặc “custom hook”) – “consume” (hoặc “import”) custom hook (hoặc “shared logic”) từ micro frontend (hoặc “remote”) khác (hoặc host).

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ff6464",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <h2>Micro Frontend 2</h2>
      <p>This component is loaded from MFE2</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Count is {count}</p>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}

export default App;
