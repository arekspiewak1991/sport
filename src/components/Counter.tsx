import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (operation: any) => {
    setCounter(operation);
  }

  return (
    <>
      <button onClick={() => handleClick(counter + 1)} >+</button>
      <button onClick={() => handleClick(counter - 1)} disabled={counter < 1}>-</button>
      <span>{counter}</span>
    </>
  );
}
