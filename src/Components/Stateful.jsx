import { useState } from 'react';

export default function Stateful() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Stateful</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>PLUS!</button>
      <button onClick={() => setCount(count - 1)}>MINUS!</button>
      <hr />
    </div>
  );
}
