import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countOther, setCountOther] = useState(0);

  const increase = useCallback(() => setCount(count + 1), [count]);
  const decrease = useCallback(() => setCount(count - 1), [count]);
  
  const increaseOther = useCallback(
    () => setCountOther(countOther + 1),
    [countOther]
  );
  const decreaseOther = useCallback(
    () => setCountOther(countOther - 1),
    [countOther]
  );

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <div>Count other: {countOther}</div>
      <button onClick={increaseOther}>+</button>
      <button onClick={decreaseOther}>-</button>
    </>
  );
}

export default Counter;