import { useCount } from "../context/CounterContext";

const CounterResult = () => {
  const state = useCount()
  return <h3>{state}</h3>;
};

export default CounterResult;