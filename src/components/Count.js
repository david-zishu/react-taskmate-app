import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="box">
      <p>{count}</p>
      <button onClick={handleAdd} className="add">
        Add
      </button>
      <button onClick={handleSub} className="sub">
        Sub
      </button>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default Count;
