import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #646cff",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <h2>Micro Frontend 1</h2>
      <p>This component is loaded from MFE1</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div>
    </div>
  );
}

export default App;
