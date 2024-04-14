import { createContext, useContext, useReducer } from "react";

export const CountState = createContext();
export const SetCountState = createContext();

export const CounterContext = ({ children }) => {


  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);



  return(
    <CountState.Provider value={state}>
      <SetCountState.Provider value={dispatch}>
        {children}
      </SetCountState.Provider>
    </CountState.Provider>
  )};

export const useCount = () => useContext(CountState)
export const useSetCount = () => useContext(SetCountState)


