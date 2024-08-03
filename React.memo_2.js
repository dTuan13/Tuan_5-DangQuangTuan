import { useCallback, useState } from "react";

function Content({ onIncrease }) {
  console.log("123");
  return (
    <div>
      <h1>Hello ReactJS</h1>
      <button onClick={onIncrease}>Increase</button>
     </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
