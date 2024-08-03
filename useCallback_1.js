import { useState, useCallback, memo } from "react";

const Content = memo(({ onIncrease }) => {
  return (
    <>
      <h2>HELLO ANH EM TRÊN F8</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
})


function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "10px 32px", color: "#f05123" }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
