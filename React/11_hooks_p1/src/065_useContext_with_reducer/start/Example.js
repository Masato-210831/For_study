import { useReducer } from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./context/CounterContext";



// POINT useContext x useReducer
const Example = () => {

  return (
    <>
    <CounterContext>
      <Counter/>
    </CounterContext>
    </>
  );
};

export default Example;
