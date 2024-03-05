import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((preCount) => preCount + 1);
  };
  const decrement = () => {
    setCount((preCount) => preCount - 1);
  };

  return (
    <div className="App">
    <h1>Counter App</h1>
    <h2> count value : {count}</h2>

    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}> Decrement</button>
  </div>
  );
}

export default App;
