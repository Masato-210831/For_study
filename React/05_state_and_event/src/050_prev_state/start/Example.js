import { useState } from "react";

const Example = () => {
  const [val, valFn] = useState(0);
  const countUp = () => {
    valFn(val + 1)
    valFn(p => p + 1)
  }
  const countDown = () => {
    valFn(val - 1)
  }
  return (
    <>
      <p>現在のカウント数: {val}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
