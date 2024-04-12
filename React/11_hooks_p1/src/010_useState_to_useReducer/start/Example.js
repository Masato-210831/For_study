import { useState, useReducer } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((preve, { type }) => {
    switch (type) {
      case "+":
        return ++preve;
      case "-":
        return --preve;
      default:
        throw new Error("不明なactionです。");
    }
    // if(action === '+'){
    //   return ++preve
    // } else if(action === '-'){
    //   return --preve
    // }
  }, 0);

  const countUp = () => {
    setState((preve) => ++preve);
  };

  const rcountp = () => {
    dispatch({ type: "+" });
  };

  const rcountDown = () => {
    dispatch({ type: "-" });
  };

  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>
      <h3>{rstate}</h3>
      <button onClick={rcountp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
