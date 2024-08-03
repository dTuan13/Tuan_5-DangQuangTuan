import React, { useState, useEffect, useRef } from 'react';

function useRef_2() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default useRef_2;